import { useMemo, useState } from 'react';
import { entries, categories } from '../data/entries';
import type { Entry } from '../data/entries';

interface ComparePageProps {
  onNavigate: (view: string, id?: string) => void;
  initialLeft?: string;
}

const sorted = [...entries].sort((a, b) => a.title.localeCompare(b.title, 'pl'));

/** Nagłówki sekcji z treści hasła – pokazują, o czym hasło w ogóle mówi. */
function sectionsOf(e: Entry): string[] {
  return (e.content.match(/^#{1,4}\s+(.*)$/gm) || [])
    .map(h => h.replace(/^#{1,4}\s+/, '').trim())
    .filter(Boolean);
}

function years(e: Entry): string {
  if (!e.yearStart) return '—';
  if (!e.yearEnd || e.yearEnd === e.yearStart) return String(e.yearStart);
  return `${e.yearStart}–${e.yearEnd}`;
}

function Picker({
  label, value, exclude, onChange,
}: {
  label: string;
  value: string;
  exclude: string;
  onChange: (id: string) => void;
}) {
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    const hits = sorted
      .filter(e => e.id !== exclude)
      .filter(e => !query || e.title.toLowerCase().includes(query))
      .slice(0, 200);
    // aktualnie wybrane hasło musi zostać na liście, inaczej pole robi się puste
    if (!hits.some(e => e.id === value)) {
      const cur = sorted.find(e => e.id === value);
      if (cur) return [cur, ...hits];
    }
    return hits;
  }, [q, exclude, value]);

  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>
      <input
        type="text"
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Zawęź listę…"
        className="w-full px-3 py-2 mb-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        size={1}
      >
        {list.map(e => (
          <option key={e.id} value={e.id}>
            {e.title}
          </option>
        ))}
      </select>
      {list.length === 0 && (
        <p className="text-xs text-gray-400 mt-1">Brak haseł pasujących do frazy.</p>
      )}
    </div>
  );
}

function Column({ e, onNavigate }: { e: Entry; onNavigate: (v: string, id?: string) => void }) {
  const cat = categories.find(c => c.id === e.category);
  const secs = sectionsOf(e);
  return (
    <div className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
      <div className="h-1 bg-gradient-to-r from-red-700 to-red-500" />
      {e.image && (
        <img
          src={e.image}
          alt={e.imageCaption || e.title}
          loading="lazy"
          className="w-full h-44 object-contain bg-stone-100 p-2"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          {cat && (
            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded border ${cat.color}`}>
              <span>{cat.icon}</span>
              {cat.label}
            </span>
          )}
          <span className="text-xs text-gray-400 font-mono">{years(e)}</span>
        </div>

        <h3 className="text-lg font-bold font-serif text-gray-900 leading-tight">{e.title}</h3>
        {e.subtitle && <p className="text-xs text-gray-500 italic mb-2">{e.subtitle}</p>}
        <p className="text-sm text-gray-700 mt-2">{e.summary || e.shortDesc}</p>

        <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            ['Źródła', e.resources.length],
            ['Ciekawostki', (e.trivia || []).length],
            ['Powiązania', e.relatedIds.length],
          ].map(([k, v]) => (
            <div key={String(k)} className="bg-stone-50 rounded-lg py-2">
              <dd className="text-lg font-bold text-gray-900">{v as number}</dd>
              <dt className="text-[11px] uppercase tracking-wide text-gray-500">{k}</dt>
            </div>
          ))}
        </dl>

        {secs.length > 0 && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">
              W haśle
            </h4>
            <ul className="text-sm text-gray-700 space-y-0.5">
              {secs.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400">·</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(e.tags || []).length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1">
            {(e.tags || []).map(t => (
              <span key={t} className="text-xs bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">
                #{t}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={() => onNavigate('entry', e.id)}
          className="mt-5 w-full px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors"
        >
          Otwórz hasło
        </button>
      </div>
    </div>
  );
}

export default function ComparePage({ onNavigate, initialLeft }: ComparePageProps) {
  const startLeft = initialLeft && entries.some(e => e.id === initialLeft) ? initialLeft : sorted[0].id;
  // po prawej domyślnie hasło POWIĄZANE – porównanie dwóch przypadkowych haseł
  // niczego nie pokazuje, a powiązane mają wspólny kontekst
  const startRight =
    entries.find(e => e.id === startLeft)?.relatedIds.find(id => entries.some(x => x.id === id)) ??
    sorted.find(e => e.id !== startLeft)!.id;

  const [leftId, setLeftId] = useState(startLeft);
  const [rightId, setRightId] = useState(startRight);

  const left = entries.find(e => e.id === leftId)!;
  const right = entries.find(e => e.id === rightId)!;

  const sharedTags = (left.tags || []).filter(t => (right.tags || []).includes(t));
  const linked = left.relatedIds.includes(right.id) || right.relatedIds.includes(left.id);
  const sameCat = left.category === right.category;

  const swap = () => {
    setLeftId(rightId);
    setRightId(leftId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Porównanie haseł</h2>
        <p className="text-gray-500">
          Zestaw dwa hasła obok siebie – zakres lat, obudowę źródłową i to, o czym mówią.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 mb-6">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
          <Picker label="Hasło po lewej" value={leftId} exclude={rightId} onChange={setLeftId} />
          <button
            onClick={swap}
            title="Zamień miejscami"
            className="px-3 py-2 border border-stone-200 rounded-lg text-gray-600 hover:bg-stone-50 transition-colors self-center md:self-end"
          >
            ⇄
          </button>
          <Picker label="Hasło po prawej" value={rightId} exclude={leftId} onChange={setRightId} />
        </div>

        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2 text-xs">
          <span className={`px-2 py-1 rounded ${sameCat ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-gray-500'}`}>
            {sameCat ? 'Ta sama kategoria' : 'Różne kategorie'}
          </span>
          <span className={`px-2 py-1 rounded ${linked ? 'bg-green-50 text-green-700' : 'bg-stone-100 text-gray-500'}`}>
            {linked ? 'Hasła są ze sobą powiązane' : 'Brak bezpośredniego powiązania'}
          </span>
          {sharedTags.length > 0 && (
            <span className="px-2 py-1 rounded bg-amber-50 text-amber-800">
              Wspólne tagi: {sharedTags.map(t => `#${t}`).join(', ')}
            </span>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Column e={left} onNavigate={onNavigate} />
        <Column e={right} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
