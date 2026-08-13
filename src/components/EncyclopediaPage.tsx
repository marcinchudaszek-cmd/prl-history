import { useState } from 'react';
import { entries, categories, Category } from '../data/entries';

interface EncyclopediaPageProps {
  onNavigate: (view: string, id?: string) => void;
  searchQuery?: string;
  initialCategory?: Category | 'all';
}

const decades = [
  { id: '1940', label: 'Lata 40.', from: 1944, to: 1949 },
  { id: '1950', label: 'Lata 50.', from: 1950, to: 1959 },
  { id: '1960', label: 'Lata 60.', from: 1960, to: 1969 },
  { id: '1970', label: 'Lata 70.', from: 1970, to: 1979 },
  { id: '1980', label: 'Lata 80.', from: 1980, to: 1989 },
];

/** Hasło należy do dekady, jeśli jego zakres lat zachodzi na nią choćby częściowo. */
function inDecade(e: { yearStart?: number; yearEnd?: number }, from: number, to: number) {
  if (!e.yearStart) return false;
  const end = e.yearEnd ?? e.yearStart;
  return e.yearStart <= to && end >= from;
}

export default function EncyclopediaPage({
  onNavigate,
  searchQuery = '',
  initialCategory = 'all',
}: EncyclopediaPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(initialCategory);
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [search, setSearch] = useState(searchQuery);
  const [sortBy, setSortBy] = useState<'title' | 'year'>('title');

  const filtered = (() => {
    let result = [...entries];
    if (selectedCategory !== 'all') {
      result = result.filter(e => e.category === selectedCategory);
    }
    if (selectedDecade !== 'all') {
      const d = decades.find(x => x.id === selectedDecade);
      if (d) result = result.filter(e => inDecade(e, d.from, d.to));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(e =>
        e.title.toLowerCase().includes(q) ||
        (e.summary || e.shortDesc || '').toLowerCase().includes(q) ||
        (e.tags || []).some(t => t.toLowerCase().includes(q)) ||
        e.content.toLowerCase().includes(q)
      );
    }
    if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title, 'pl'));
    } else {
      result.sort((a, b) => (a.yearStart ?? 9999) - (b.yearStart ?? 9999));
    }
    return result;
  })();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Encyklopedia PRL</h2>
        <p className="text-gray-500">Przeglądaj hasła encyklopedyczne z dziejów Polskiej Rzeczpospolitej Ludowej</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Szukaj</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Wpisz frazę, osobę, wydarzenie..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Sort */}
          <div className="md:w-48">
            <label className="block text-xs font-medium text-gray-500 mb-1">Sortuj</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as 'title' | 'year')}
              className="w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="title">Alfabetycznie</option>
              <option value="year">Chronologicznie</option>
            </select>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              selectedCategory === 'all'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-stone-200 hover:border-gray-400'
            }`}
          >
            Wszystkie ({entries.length})
          </button>
          {categories.map(cat => {
            const count = entries.filter(e => e.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? 'bg-red-700 text-white border-red-700'
                    : `bg-white border-stone-200 hover:border-red-300 ${cat.color.split(' ').slice(1).join(' ')}`
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Decade filters */}
        <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-gray-500 mr-1">Dekada:</span>
          <button
            onClick={() => setSelectedDecade('all')}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              selectedDecade === 'all'
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-stone-200 hover:border-gray-400'
            }`}
          >
            Cały okres
          </button>
          {decades.map(d => {
            const count = entries.filter(e => inDecade(e, d.from, d.to)).length;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDecade(d.id)}
                className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                  selectedDecade === d.id
                    ? 'bg-red-700 text-white border-red-700'
                    : 'bg-white text-gray-600 border-stone-200 hover:border-red-300'
                }`}
              >
                {d.label} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500">
          Znaleziono <strong className="text-gray-900">{filtered.length}</strong> haseł
          {search && ` dla frazy „${search}"`}
          {selectedCategory !== 'all' && ` w kategorii „${categories.find(c => c.id === selectedCategory)?.label}"`}
          {selectedDecade !== 'all' && ` – ${decades.find(d => d.id === selectedDecade)?.label.toLowerCase()}`}
        </p>
      </div>

      {/* Entries grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-stone-200">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Brak wyników</h3>
          <p className="text-gray-500 text-sm">Spróbuj zmienić kryteria wyszukiwania</p>
          <button
            onClick={() => { setSearch(''); setSelectedCategory('all'); setSelectedDecade('all'); }}
            className="mt-4 text-red-700 hover:underline text-sm"
          >
            Wyczyść filtry
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map(entry => {
            const cat = categories.find(c => c.id === entry.category);
            return (
              <div
                key={entry.id}
                onClick={() => onNavigate('entry', entry.id)}
                className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Color accent bar */}
                <div className="h-1 bg-gradient-to-r from-red-700 to-red-500" />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    {cat && (
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded border ${cat.color}`}>
                        <span>{cat.icon}</span>
                        {cat.label}
                      </span>
                    )}
                    {entry.yearStart && (
                      <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                        {entry.yearStart}{entry.yearEnd && entry.yearEnd !== entry.yearStart ? `–${entry.yearEnd}` : ''}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-red-700 transition-colors font-serif mb-1">
                    {entry.title}
                  </h3>
                  {entry.subtitle && (
                    <p className="text-xs text-gray-500 italic mb-2">{entry.subtitle}</p>
                  )}
                  <p className="text-xs text-gray-600 line-clamp-3 flex-1">{entry.summary || entry.shortDesc}</p>

                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex gap-1 flex-wrap">
                      {(entry.tags || []).slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                      {entry.resources.length} zasobów
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
