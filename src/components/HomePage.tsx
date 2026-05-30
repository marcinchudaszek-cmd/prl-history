import { entries, categories, Category } from '../data/entries';

interface HomePageProps {
  onNavigate: (view: string, id?: string) => void;
  onNavigateWithCategory: (cat: Category | 'all') => void;
}

export default function HomePage({ onNavigate, onNavigateWithCategory }: HomePageProps) {
  const featuredEntries = entries.slice(0, 4);

  const stats = [
    { label: 'Haseł encyklopedycznych', value: entries.length.toString(), icon: '📖' },
    { label: 'Kategorii tematycznych', value: categories.length.toString(), icon: '🗂️' },
    { label: 'Zasobów archiwalnych', value: entries.reduce((a, e) => a + e.resources.length, 0).toString(), icon: '📄' },
    { label: 'Lat historii PRL', value: '45', icon: '📅' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#1a0a00] via-[#3d0000] to-[#1a0a00] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 41px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.1) 40px,
              rgba(255,255,255,0.1) 41px
            )`
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-red-700/30 border border-red-600/50 rounded-full px-4 py-1 text-sm text-red-300 mb-6">
            <span>📚</span>
            <span>Pierwsze polskie cyfrowe archiwum epoki PRL</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4 leading-tight">
            Encyklopedia<br />
            <span className="text-red-400">Polskiej Rzeczpospolitej</span><br />
            Ludowej
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Kompletne źródło wiedzy o dziejach PRL 1944–1989. Hasła encyklopedyczne,
            dokumenty archiwalne, nagrania, fotografie i akty historyczne.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('encyclopedia')}
              className="px-8 py-3 bg-red-700 hover:bg-red-600 rounded-md font-semibold transition-colors shadow-lg"
            >
              Przeglądaj encyklopedię
            </button>
            <button
              onClick={() => onNavigate('timeline')}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md font-semibold transition-colors"
            >
              📅 Oś czasu 1944–1989
            </button>
          </div>
        </div>

        {/* Dates ribbon */}
        <div className="bg-red-800/50 border-t border-red-700/50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-red-200 justify-center">
              <span>🔴 1944 – Manifest Lipcowy</span>
              <span>🔴 1956 – Poznański Czerwiec</span>
              <span>🔴 1970 – Grudzień na Wybrzeżu</span>
              <span>🔴 1980 – Sierpień i Solidarność</span>
              <span>🔴 1981 – Stan Wojenny</span>
              <span>🔴 1989 – Okrągły Stół</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="text-center p-4 bg-white rounded-lg border border-stone-200 shadow-sm">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-700">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured entries */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold font-serif text-gray-900">Kluczowe hasła</h3>
            <p className="text-gray-500 text-sm mt-1">Najważniejsze wydarzenia i pojęcia z dziejów PRL</p>
          </div>
          <button
            onClick={() => onNavigate('encyclopedia')}
            className="text-red-700 hover:text-red-600 font-medium text-sm flex items-center gap-1"
          >
            Wszystkie hasła
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredEntries.map(entry => {
            const cat = categories.find(c => c.id === entry.category);
            return (
              <div
                key={entry.id}
                onClick={() => onNavigate('entry', entry.id)}
                className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-pointer overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded border ${cat?.color}`}>
                        <span>{cat?.icon}</span>
                        {cat?.label}
                      </span>
                    </div>
                    {entry.yearStart && (
                      <span className="text-xs text-gray-400 font-mono flex-shrink-0">
                        {entry.yearStart}{entry.yearEnd && entry.yearEnd !== entry.yearStart ? `–${entry.yearEnd}` : ''}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-1 font-serif">
                    {entry.title}
                  </h4>
                  {entry.subtitle && (
                    <p className="text-sm text-gray-500 mb-3 italic">{entry.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-600 line-clamp-3">{entry.summary}</p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100">
                    <div className="flex gap-2 flex-wrap">
                      {entry.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-400">
                      {entry.resources.length} zasobów →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Przeglądaj wg kategorii</h3>
          <p className="text-gray-500 text-sm mb-8">Wybierz temat który cię interesuje</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(cat => {
              const count = entries.filter(e => e.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => onNavigateWithCategory(cat.id)}
                  className="group p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all text-left"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <div className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors">
                    {cat.label}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{count} haseł</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Archive links */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold font-serif text-gray-900 mb-2">Zewnętrzne archiwa</h3>
        <p className="text-gray-500 text-sm mb-8">Oficjalne polskie instytucje archiwalne z dokumentami cyfrowymi</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: 'Instytut Pamięci Narodowej', url: 'https://ipn.gov.pl', desc: 'Akta SB, UB, dokumenty partyjne, biogramy', icon: '🏛️' },
            { name: 'Archiwum Akt Nowych', url: 'https://www.aan.gov.pl', desc: 'KC PZPR, ministerstw, archiwalia państwowe', icon: '📁' },
            { name: 'NINATEKA', url: 'https://ninateka.pl', desc: 'Filmy, nagrania, kroniki filmowe, dokumenty audiowizualne', icon: '🎬' },
            { name: 'Europejskie Centrum Solidarności', url: 'https://ecs.gda.pl', desc: 'Archiwum Solidarności, Sierpień 1980', icon: '✊' },
            { name: 'Szukaj w Archiwach', url: 'https://szukajwarchiwach.gov.pl', desc: 'Centralny indeks polskich archiwów państwowych', icon: '🔍' },
            { name: 'Wolne Lektury / Polona', url: 'https://polona.pl', desc: 'Cyfrowe zbiory Biblioteki Narodowej', icon: '📚' },
          ].map(arch => (
            <a
              key={arch.name}
              href={arch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-4 p-5 bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all"
            >
              <div className="text-3xl flex-shrink-0">{arch.icon}</div>
              <div>
                <div className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors text-sm">
                  {arch.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{arch.desc}</div>
                <div className="text-xs text-red-600 mt-2 flex items-center gap-1">
                  Odwiedź →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
