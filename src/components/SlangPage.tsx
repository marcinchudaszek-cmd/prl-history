import { useState, useMemo } from 'react';
import { slangTerms, slangCategories, SlangTerm } from '../data/slang';

interface SlangPageProps {
  onNavigate: (view: string, id?: string) => void;
}

type CatFilter = 'all' | SlangTerm['category'];

export default function SlangPage(_props: SlangPageProps) {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<CatFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return slangTerms
      .filter(t => cat === 'all' || t.category === cat)
      .filter(t =>
        !q ||
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
      )
      .sort((a, b) => a.term.localeCompare(b.term, 'pl'));
  }, [query, cat]);

  const cats = Object.keys(slangCategories) as SlangTerm['category'][];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">🏚️</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Słownik slangu PRL</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Język epoki niedoboru i nowomowy – od „kombinowania” przez „cinkciarza” po „ścieżkę zdrowia”.
          {' '}{slangTerms.length} haseł.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 mb-6">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Szukaj w słowniku…"
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCat('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              cat === 'all' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-600 border-stone-300 hover:border-red-300'
            }`}
          >
            Wszystkie
          </button>
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                cat === c ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-600 border-stone-300 hover:border-red-300'
              }`}
            >
              {slangCategories[c].icon} {slangCategories[c].label}
            </button>
          ))}
        </div>
      </div>

      {/* Terms */}
      <p className="text-sm text-gray-500 mb-4">{filtered.length} haseł</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map(t => (
          <div key={t.term} className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 hover:border-red-200 transition-colors">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-bold font-serif text-gray-900">{t.term}</h3>
              <span className="text-xs text-gray-400 flex-shrink-0" title={slangCategories[t.category].label}>
                {slangCategories[t.category].icon}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{t.definition}</p>
            {t.example && (
              <p className="mt-3 text-sm text-gray-500 italic border-l-2 border-red-200 pl-3">{t.example}</p>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-4xl mb-2">🔍</div>
          <p>Brak haseł pasujących do wyszukiwania.</p>
        </div>
      )}
    </div>
  );
}
