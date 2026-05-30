import { useState } from 'react';
import { timelineEvents, categories, entries } from '../data/entries';

interface TimelinePageProps {
  onNavigate: (view: string, id?: string) => void;
}

const categoryColors: Record<string, string> = {
  polityka: 'bg-red-500',
  gospodarka: 'bg-amber-500',
  kultura: 'bg-purple-500',
  opozycja: 'bg-blue-500',
  represje: 'bg-gray-600',
  'społeczeństwo': 'bg-green-500',
  wojsko: 'bg-orange-500',
  osoby: 'bg-teal-500',
};

const categoryBorder: Record<string, string> = {
  polityka: 'border-red-400 bg-red-50 hover:bg-red-100',
  gospodarka: 'border-amber-400 bg-amber-50 hover:bg-amber-100',
  kultura: 'border-purple-400 bg-purple-50 hover:bg-purple-100',
  opozycja: 'border-blue-400 bg-blue-50 hover:bg-blue-100',
  represje: 'border-gray-500 bg-gray-50 hover:bg-gray-100',
  'społeczeństwo': 'border-green-400 bg-green-50 hover:bg-green-100',
  wojsko: 'border-orange-400 bg-orange-50 hover:bg-orange-100',
  osoby: 'border-teal-400 bg-teal-50 hover:bg-teal-100',
};

const decades = [
  { label: '1944–1949', start: 1944, end: 1949, desc: 'Narzucanie komunizmu' },
  { label: '1950–1959', start: 1950, end: 1959, desc: 'Stalinizm i odwilż' },
  { label: '1960–1969', start: 1960, end: 1969, desc: 'Rządy Gomułki' },
  { label: '1970–1979', start: 1970, end: 1979, desc: 'Dekada Gierka' },
  { label: '1980–1989', start: 1980, end: 1989, desc: 'Solidarność i upadek PRL' },
];

export default function TimelinePage({ onNavigate }: TimelinePageProps) {
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const filtered = timelineEvents.filter(ev => {
    const decade = decades.find(d => d.label === selectedDecade);
    const catOk = selectedCat === 'all' || ev.category === selectedCat;
    const yearOk = !decade || (ev.year >= decade.start && ev.year <= decade.end);
    return catOk && yearOk;
  });

  // Group by year
  const byYear = filtered.reduce((acc, ev) => {
    if (!acc[ev.year]) acc[ev.year] = [];
    acc[ev.year].push(ev);
    return acc;
  }, {} as Record<number, typeof timelineEvents>);

  const years = Object.keys(byYear).map(Number).sort((a, b) => a - b);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Oś czasu PRL</h2>
        <p className="text-gray-500">Chronologiczny przegląd kluczowych wydarzeń z lat 1944–1989</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 mb-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Decades */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Okres</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedDecade('all')}
                className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition-colors ${
                  selectedDecade === 'all' ? 'bg-gray-900 text-white border-gray-900' : 'border-stone-200 text-gray-600 hover:border-gray-400'
                }`}
              >
                Wszystkie lata
              </button>
              {decades.map(d => (
                <button
                  key={d.label}
                  onClick={() => setSelectedDecade(d.label)}
                  className={`px-3 py-1.5 text-xs rounded-lg border font-medium transition-colors text-left ${
                    selectedDecade === d.label ? 'bg-red-700 text-white border-red-700' : 'border-stone-200 text-gray-600 hover:border-red-300'
                  }`}
                >
                  <div>{d.label}</div>
                  <div className="opacity-70">{d.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Kategoria</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCat('all')}
                className={`px-3 py-1 text-xs rounded-full border font-medium transition-colors ${
                  selectedCat === 'all' ? 'bg-gray-900 text-white border-gray-900' : 'border-stone-200 text-gray-600 hover:border-gray-400'
                }`}
              >
                Wszystkie
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat.id)}
                  className={`px-3 py-1 text-xs rounded-full border font-medium transition-colors flex items-center gap-1 ${
                    selectedCat === cat.id ? 'bg-red-700 text-white border-red-700' : `border-stone-200 hover:border-red-200 ${cat.color}`
                  }`}
                >
                  {cat.icon} {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
        <span>
          <strong className="text-gray-900">{filtered.length}</strong> wydarzeń
        </span>
        <span>·</span>
        <span>
          <strong className="text-gray-900">{years.length}</strong> lat
        </span>
        {filtered.some(e => e.entryId) && (
          <>
            <span>·</span>
            <span className="text-red-600 text-xs">
              ● kliknij wydarzenie, aby przejść do hasła encyklopedii
            </span>
          </>
        )}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-stone-200" />

        <div className="space-y-0">
          {years.map(year => (
            <div key={year} className="relative mb-6">
              {/* Year marker */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-40 flex items-center justify-end pr-6 pt-2">
                  <div className="bg-red-700 text-white text-sm font-bold font-mono px-3 py-1 rounded-lg shadow-md z-10 relative">
                    {year}
                  </div>
                </div>

                {/* Events for this year */}
                <div className="flex-1 space-y-2 pb-2">
                  {byYear[year].map((ev, i) => {
                    const cat = categories.find(c => c.id === ev.category);
                    const hasEntry = !!ev.entryId;
                    const entryExists = hasEntry && entries.some(e => e.id === ev.entryId);

                    const content = (
                      <>
                        {/* Dot on timeline */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-sm ${categoryColors[ev.category] || 'bg-gray-400'}`}
                          style={{ left: '-30px' }}
                        />
                        <div className="flex items-start gap-2">
                          <span className="text-base flex-shrink-0 leading-tight">{cat?.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 leading-snug">{ev.event}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-xs px-1.5 py-0.5 rounded border ${cat?.color}`}>
                                {cat?.label}
                              </span>
                              {entryExists && (
                                <span className="text-xs text-red-600 font-medium">
                                  Czytaj hasło →
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    );

                    const baseClass = `relative border-l-4 rounded-r-lg px-4 py-3 transition-all ${categoryBorder[ev.category] || 'border-gray-300 bg-gray-50'}`;

                    if (entryExists) {
                      return (
                        <button
                          key={i}
                          onClick={() => onNavigate('entry', ev.entryId)}
                          className={`${baseClass} w-full text-left cursor-pointer hover:shadow-sm`}
                        >
                          {content}
                        </button>
                      );
                    }

                    return (
                      <div key={i} className={baseClass}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {years.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          <div className="text-4xl mb-3">📅</div>
          <p>Brak wydarzeń dla wybranych kryteriów</p>
          <button
            onClick={() => { setSelectedDecade('all'); setSelectedCat('all'); }}
            className="mt-3 text-red-700 hover:underline text-sm"
          >
            Wyczyść filtry
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <h3 className="font-bold text-gray-900 mb-2">Chcesz dowiedzieć się więcej?</h3>
        <p className="text-sm text-gray-600 mb-4">Przeglądaj szczegółowe hasła encyklopedyczne z dokumentami archiwalnymi</p>
        <button
          onClick={() => onNavigate('encyclopedia')}
          className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
        >
          Przejdź do encyklopedii →
        </button>
      </div>
    </div>
  );
}
