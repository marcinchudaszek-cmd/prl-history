import { useState, useMemo } from 'react';
import { pressItems, pressTypeMeta, PressType } from '../data/press';

interface PressPageProps {
  onNavigate: (view: string, id?: string) => void;
}

type Filter = 'all' | PressType;

const TYPE_ORDER: PressType[] = [
  'oficjalna', 'niezalezna', 'katolicka', 'emigracyjna', 'mlodziezowa',
  'satyryczna', 'kobieca', 'popularna', 'dziecieca',
];

export default function PressPage({ onNavigate }: PressPageProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => pressItems.filter(p => filter === 'all' || p.type === filter),
    [filter]
  );

  const types = TYPE_ORDER.filter(t => pressItems.some(p => p.type === t));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">📰</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Prasa PRL – przedruki</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Od partyjnej „Trybuny Ludu” przez katolicki „Tygodnik Powszechny” po podziemny drugi obieg.
          Kliknij tytuł, aby przejść do zdigitalizowanych numerów. {pressItems.length} tytułów.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            filter === 'all' ? 'bg-red-700 text-white border-red-700' : 'bg-white text-gray-600 border-stone-300 hover:border-red-300'
          }`}
        >
          Wszystkie
        </button>
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === t ? 'text-white border-transparent' : 'bg-white text-gray-600 border-stone-300 hover:border-red-300'
            }`}
            style={filter === t ? { backgroundColor: pressTypeMeta[t].color } : undefined}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: pressTypeMeta[t].color }} />
            {pressTypeMeta[t].label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map(p => (
          <div key={p.id} className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden flex flex-col">
            {/* Scan / masthead */}
            <a href={p.scanUrl} target="_blank" rel="noopener noreferrer" className="block group">
              {p.image ? (
                <div className="h-48 bg-stone-100 overflow-hidden flex items-center justify-center">
                  <img src={p.image} alt={`Skan – ${p.title}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              ) : (
                <div
                  className="h-48 flex flex-col items-center justify-center text-center px-4 border-b-4"
                  style={{ borderColor: pressTypeMeta[p.type].color, backgroundColor: '#faf7f2' }}
                >
                  <span className="text-4xl mb-2 opacity-60">📰</span>
                  <span className="font-serif font-bold text-xl text-gray-800 leading-tight">{p.title}</span>
                  <span className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{p.years}</span>
                </div>
              )}
            </a>

            {/* Body */}
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-white text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: pressTypeMeta[p.type].color }}
                >
                  {pressTypeMeta[p.type].label}
                </span>
                <span className="text-xs text-gray-400 font-mono ml-auto">{p.years}</span>
              </div>
              <h3 className="font-bold font-serif text-gray-900 leading-tight">{p.title}</h3>
              {p.subtitle && <p className="text-xs text-gray-500 italic mb-2">{p.subtitle}</p>}
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{p.description}</p>

              <div className="flex items-center gap-2 mt-3">
                <a
                  href={p.scanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={p.kind === 'skan' ? 'Zdigitalizowane numery (Internet Archive)' : 'Hasło w Wikipedii'}
                  className="flex-1 text-center text-xs font-medium text-red-700 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 rounded px-2 py-1.5 transition-colors"
                >
                  {p.kind === 'skan' ? '📄 Zobacz skany' : '📖 O tytule'}
                </a>
                {p.entryId && (
                  <button
                    onClick={() => onNavigate('entry', p.entryId)}
                    className="text-xs font-medium text-gray-600 hover:text-red-700 bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded px-2 py-1.5 transition-colors"
                  >
                    Hasło →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-gray-400 mt-8">
        Skany numerów udostępnia Internet Archive (na podstawie polskich bibliotek cyfrowych); dla tytułów bez skanu online – hasło w Wikipedii.
        Czytnik skanów bywa wolny – pierwsze ładowanie może potrwać kilkanaście sekund. Prawa do materiałów należą do ich właścicieli.
      </p>
    </div>
  );
}
