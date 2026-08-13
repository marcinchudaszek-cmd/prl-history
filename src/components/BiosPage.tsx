import { useState, useMemo } from 'react';
import { entries } from '../data/entries';

interface BiosPageProps {
  onNavigate: (view: string, id?: string) => void;
}

// Grupy tematyczne biogramów na podstawie tagów / treści
function groupOf(tags: string[]): string {
  const t = tags.map(x => x.toLowerCase());
  if (t.some(x => ['władza', 'pzpr', 'partia', 'komunizm', 'premier', 'i sekretarz'].includes(x))) return 'Władza';
  if (t.some(x => ['opozycja', 'solidarność', 'dysydent', 'kor', 'strajk'].includes(x))) return 'Opozycja';
  if (t.some(x => ['muzyka', 'film', 'literatura', 'kultura', 'reżyser', 'poezja', 'kompozytor'].includes(x))) return 'Kultura i nauka';
  if (t.some(x => ['kościół', 'religia', 'papież', 'ksiądz'].includes(x))) return 'Kościół';
  if (t.some(x => ['represje', 'ofiara', 'sb', 'milicja'].includes(x))) return 'Ofiary represji';
  return 'Pozostali';
}

const GROUP_ORDER = ['Władza', 'Opozycja', 'Kultura i nauka', 'Kościół', 'Ofiary represji', 'Pozostali'];

/** Nazwisko to zwykle ostatni człon tytułu; pomijamy dopiski w cudzysłowie
 *  („Inka”) i skróty stopni, żeby litera odpowiadała temu, czego szuka czytelnik. */
function surnameLetter(title: string): string {
  const words = title
    .replace(/[„”"']/g, '')
    .split(/\s+/)
    .filter(w => w.length > 1 && !/^(gen|płk|ks|abp|kard|rtm|prof|dr|św)\.?$/i.test(w));
  const last = words[words.length - 1] || title;
  return last
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .charAt(0)
    .toUpperCase()
    .replace('Ł', 'L');
}

export default function BiosPage({ onNavigate }: BiosPageProps) {
  const [query, setQuery] = useState('');
  const [letter, setLetter] = useState<string>('all');

  const people = useMemo(
    () => entries.filter(e => e.category === 'osoby'),
    []
  );

  const availableLetters = useMemo(
    () => [...new Set(people.map(e => surnameLetter(e.title)))].sort((a, b) => a.localeCompare(b, 'pl')),
    [people]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return people.filter(e =>
      (letter === 'all' || surnameLetter(e.title) === letter) &&
      (!q ||
        e.title.toLowerCase().includes(q) ||
        (e.subtitle || '').toLowerCase().includes(q) ||
        (e.summary || e.shortDesc || '').toLowerCase().includes(q))
    );
  }, [people, query, letter]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const e of filtered) {
      const g = groupOf(e.tags || []);
      (map[g] = map[g] || []).push(e);
    }
    for (const g of Object.keys(map)) {
      map[g].sort((a, b) => a.title.localeCompare(b.title, 'pl'));
    }
    return map;
  }, [filtered]);

  const initials = (title: string) =>
    title.split(/\s+/).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">👤</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Biogramy postaci PRL</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Przywódcy, dysydenci, twórcy, ofiary systemu i bohaterowie oporu – {people.length} sylwetek.
        </p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Szukaj postaci…"
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Filtr po pierwszej literze NAZWISKA – w tytułach nazwisko stoi na końcu */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-1.5 items-center">
          <span className="text-xs font-medium text-gray-500 mr-1">Nazwisko na literę:</span>
          <button
            onClick={() => setLetter('all')}
            className={`px-3 h-8 flex items-center justify-center text-sm font-medium rounded border transition-colors ${
              letter === 'all'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-stone-200 text-gray-700 hover:bg-stone-100'
            }`}
          >
            Wszystkie
          </button>
          {availableLetters.map(l => (
            <button
              key={l}
              onClick={() => setLetter(letter === l ? 'all' : l)}
              className={`w-8 h-8 flex items-center justify-center text-sm font-semibold rounded border transition-colors ${
                letter === l
                  ? 'bg-red-700 text-white border-red-700'
                  : 'border-stone-200 text-gray-700 hover:bg-stone-100'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-6">{filtered.length} postaci</p>

      {GROUP_ORDER.filter(g => grouped[g]?.length).map(g => (
        <div key={g} className="mb-10">
          <h3 className="text-lg font-bold font-serif text-gray-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
            {g} <span className="text-sm font-normal text-gray-400">({grouped[g].length})</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped[g].map(e => (
              <button
                key={e.id}
                onClick={() => onNavigate('entry', e.id)}
                className="text-left bg-white rounded-xl border border-stone-200 shadow-sm p-5 hover:border-red-300 hover:shadow-md transition-all flex gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold font-serif flex-shrink-0">
                  {initials(e.title)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm leading-tight">{e.title}</h4>
                  {e.subtitle && <p className="text-xs text-gray-500 mb-1">{e.subtitle}</p>}
                  {(e.yearStart || e.yearEnd) && (
                    <p className="text-xs text-gray-400 font-mono mb-1">
                      {e.yearStart || '?'}{e.yearEnd ? `–${e.yearEnd}` : ''}
                    </p>
                  )}
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {e.summary || e.shortDesc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-2">🔍</div>
          <p>Brak postaci pasujących do wyszukiwania.</p>
        </div>
      )}
    </div>
  );
}
