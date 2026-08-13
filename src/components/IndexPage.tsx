import { useMemo, useState } from 'react';
import { entries, categories } from '../data/entries';
import type { Category } from '../data/entries';

interface IndexPageProps {
  onNavigate: (view: string, id?: string) => void;
}

/** Litera porządkowa hasła: polskie znaki sprowadzamy do podstawowych,
 *  tytuły zaczynające się cyfrą lądują we wspólnej grupie „0–9”. */
function letterOf(title: string): string {
  const c = title
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/^[„”"'(]+/, '')
    .charAt(0)
    .toUpperCase()
    .replace('Ł', 'L');
  if (/[0-9]/.test(c)) return '0–9';
  return /[A-Z]/.test(c) ? c : '#';
}

export default function IndexPage({ onNavigate }: IndexPageProps) {
  const [cat, setCat] = useState<Category | 'all'>('all');

  const grouped = useMemo(() => {
    const pool = cat === 'all' ? entries : entries.filter(e => e.category === cat);
    const map = new Map<string, typeof entries>();
    for (const e of [...pool].sort((a, b) => a.title.localeCompare(b.title, 'pl'))) {
      const l = letterOf(e.title);
      if (!map.has(l)) map.set(l, []);
      map.get(l)!.push(e);
    }
    return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], 'pl'));
  }, [cat]);

  const total = grouped.reduce((n, [, list]) => n + list.length, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Indeks haseł</h2>
        <p className="text-gray-500">
          Wszystkie hasła encyklopedii w układzie alfabetycznym – {total} pozycji
        </p>
      </div>

      {/* Filtr kategorii */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat('all')}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              cat === 'all'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-stone-200 hover:border-gray-400'
            }`}
          >
            Wszystkie ({entries.length})
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-3 py-1 text-sm rounded-full border transition-colors flex items-center gap-1 ${
                cat === c.id
                  ? 'bg-red-700 text-white border-red-700'
                  : 'bg-white text-gray-600 border-stone-200 hover:border-red-300'
              }`}
            >
              <span>{c.icon}</span>
              {c.label} ({entries.filter(e => e.category === c.id).length})
            </button>
          ))}
        </div>

        {/* Skoki literowe */}
        <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-1.5">
          {grouped.map(([letter, list]) => (
            <a
              key={letter}
              href={`#litera-${encodeURIComponent(letter)}`}
              title={`${list.length} haseł`}
              className="w-8 h-8 flex items-center justify-center text-sm font-semibold rounded border border-stone-200 text-gray-700 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>

      {/* Litery */}
      {grouped.map(([letter, list]) => (
        <section key={letter} id={`litera-${encodeURIComponent(letter)}`} className="mb-8 scroll-mt-4">
          <h3 className="text-2xl font-bold font-serif text-red-700 border-b-2 border-red-200 pb-1 mb-3">
            {letter}
            <span className="text-sm font-normal text-gray-400 ml-2">({list.length})</span>
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
            {list.map(e => {
              const c = categories.find(x => x.id === e.category);
              return (
                <li key={e.id}>
                  <button
                    onClick={() => onNavigate('entry', e.id)}
                    className="w-full text-left py-1.5 px-2 rounded hover:bg-stone-100 transition-colors flex items-baseline gap-2"
                  >
                    <span className="text-sm text-gray-800 hover:text-red-700 flex-1 min-w-0 truncate">
                      {e.title}
                    </span>
                    {e.yearStart && (
                      <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                        {e.yearStart}
                      </span>
                    )}
                    {c && <span className="text-xs flex-shrink-0" title={c.label}>{c.icon}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
