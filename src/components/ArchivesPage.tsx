import { useState } from 'react';
import { entries, resourceTypeLabels, ResourceType } from '../data/entries';

interface ArchivesPageProps {
  onNavigate: (view: string, id?: string) => void;
}

const archives = [
  {
    name: 'Instytut Pamięci Narodowej (IPN)',
    url: 'https://ipn.gov.pl',
    logo: '🏛️',
    description: 'Największe polskie archiwum dokumentów dotyczących aparatu represji PRL. Akta SB, UB, wojska, prokuratury. Katalog IPN online z możliwością wyszukiwania.',
    resources: ['Akta bezpieki', 'Biogramy ofiar', 'Dokumenty PZPR', 'Fotografie archiwalne'],
    type: 'instytucja',
    access: 'Bezpłatny online',
  },
  {
    name: 'Archiwum Akt Nowych (AAN)',
    url: 'https://www.aan.gov.pl',
    logo: '📁',
    description: 'Centralne archiwum państwowe przechowujące akta władz centralnych PRL: KC PZPR, Rady Ministrów, ministerstw i urzędów centralnych.',
    resources: ['Akta KC PZPR', 'Dokumenty Rady Ministrów', 'Akta partyjne', 'Plany gospodarcze'],
    type: 'instytucja',
    access: 'Dostęp na miejscu + część online',
  },
  {
    name: 'NINATEKA – Filmoteka Narodowa',
    url: 'https://ninateka.pl',
    logo: '🎬',
    description: 'Największe polskie archiwum cyfrowe filmów, kronik filmowych, nagrań i dokumentów audiowizualnych. Setki godzin materiałów z epoki PRL.',
    resources: ['Filmy fabularne', 'Kroniki filmowe', 'Dokumenty', 'Nagrania muzyczne'],
    type: 'audiowizualne',
    access: 'Bezpłatny online',
  },
  {
    name: 'Europejskie Centrum Solidarności',
    url: 'https://ecs.gda.pl',
    logo: '✊',
    description: 'Gdańskie centrum dokumentujące historię Solidarności i polskiej opozycji demokratycznej. Zbiory cyfrowe z lat 1980–1989.',
    resources: ['21 Postulatów', 'Zdjęcia strajków', 'Porozumienia Gdańskie', 'Plakaty Solidarności'],
    type: 'instytucja',
    access: 'Część zasobów online',
  },
  {
    name: 'Polona – Biblioteka Narodowa',
    url: 'https://polona.pl',
    logo: '📚',
    description: 'Platforma cyfrowa Biblioteki Narodowej. Miliony zeskanowanych dokumentów, gazet, plakatów i wydawnictw z czasów PRL.',
    resources: ['Gazety i czasopisma', 'Plakaty', 'Fotografie', 'Druki ulotne'],
    type: 'biblioteka',
    access: 'Bezpłatny online',
  },
  {
    name: 'Szukaj w Archiwach',
    url: 'https://szukajwarchiwach.gov.pl',
    logo: '🔍',
    description: 'Portal Naczelnej Dyrekcji Archiwów Państwowych umożliwiający przeszukiwanie zasobów wszystkich polskich archiwów państwowych.',
    resources: ['Indeks zbiorów', 'Akta lokalne', 'Dokumenty urzędowe', 'Fotografie'],
    type: 'portal',
    access: 'Bezpłatny online',
  },
  {
    name: 'Muzeum Historii Polski',
    url: 'https://muzhp.pl',
    logo: '🏺',
    description: 'Muzeum dokumentujące polską historię, z bogatymi zasobami cyfrowymi dotyczącymi PRL, opozycji i transformacji 1989.',
    resources: ['Wystawy wirtualne', 'Kolekcje fotografii', 'Dokumenty', 'Biogramy'],
    type: 'muzeum',
    access: 'Bezpłatny online',
  },
  {
    name: 'Archiwum Solidarności',
    url: 'https://www.solidarnosc.org.pl/archiwum/',
    logo: '📋',
    description: 'Oficjalne archiwum NSZZ Solidarność. Dokumenty związkowe, ulotki, pisma podziemne i materiały z całego okresu 1980–1989.',
    resources: ['Dokumenty związkowe', 'Ulotki podziemne', 'Plakaty', 'Nagrania'],
    type: 'archiwum',
    access: 'Część zasobów online',
  },
];

const typeLabels: Record<string, string> = {
  instytucja: '🏛️ Instytucja',
  audiowizualne: '🎬 Multimedia',
  biblioteka: '📚 Biblioteka',
  portal: '🌐 Portal',
  muzeum: '🏺 Muzeum',
  archiwum: '📋 Archiwum',
};

export default function ArchivesPage({ onNavigate }: ArchivesPageProps) {
  const [resourceFilter, setResourceFilter] = useState<ResourceType | 'all'>('all');

  // All resources from all entries
  const allResources = entries.flatMap(entry =>
    entry.resources.map(res => ({ ...res, entryId: entry.id, entryTitle: entry.title }))
  );

  const filteredResources = resourceFilter === 'all'
    ? allResources
    : allResources.filter(r => r.type === resourceFilter);

  const resourceTypes = Object.keys(resourceTypeLabels) as ResourceType[];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Archiwum PRL</h2>
        <p className="text-gray-500">Zbiory dokumentów, nagrań, zdjęć i aktów historycznych – linki do polskich archiwów cyfrowych</p>
      </div>

      {/* External archives */}
      <section className="mb-12">
        <h3 className="text-xl font-bold font-serif text-gray-900 mb-5 flex items-center gap-2">
          <span>🏛️</span> Polskie archiwa cyfrowe
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {archives.map(arch => (
            <a
              key={arch.name}
              href={arch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-red-200 transition-all p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{arch.logo}</span>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-red-700 transition-colors text-sm leading-snug">
                    {arch.name}
                  </h4>
                  <span className="text-xs text-gray-400">{typeLabels[arch.type]}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-3 flex-1 leading-relaxed">{arch.description}</p>
              <div className="space-y-1 mb-3">
                {arch.resources.map(r => (
                  <div key={r} className="text-xs text-gray-500 flex items-center gap-1">
                    <span className="text-green-500">✓</span> {r}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-stone-100">
                <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">
                  {arch.access}
                </span>
                <span className="text-xs text-red-600 font-medium group-hover:underline">
                  Odwiedź →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Internal resources browser */}
      <section>
        <h3 className="text-xl font-bold font-serif text-gray-900 mb-5 flex items-center gap-2">
          <span>🗂️</span> Indeks zasobów encyklopedii
          <span className="ml-auto text-sm font-normal text-gray-500">{allResources.length} zasobów łącznie</span>
        </h3>

        {/* Type filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setResourceFilter('all')}
            className={`px-3 py-1.5 text-sm rounded-lg border font-medium transition-colors ${
              resourceFilter === 'all' ? 'bg-gray-900 text-white border-gray-900' : 'border-stone-200 text-gray-600 hover:border-gray-400'
            }`}
          >
            Wszystkie ({allResources.length})
          </button>
          {resourceTypes.map(type => {
            const info = resourceTypeLabels[type];
            const count = allResources.filter(r => r.type === type).length;
            return (
              <button
                key={type}
                onClick={() => setResourceFilter(type)}
                className={`px-3 py-1.5 text-sm rounded-lg border font-medium transition-colors flex items-center gap-1 ${
                  resourceFilter === type
                    ? 'bg-red-700 text-white border-red-700'
                    : `${info.color} hover:border-red-200`
                }`}
              >
                {info.icon} {info.label} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredResources.map(res => {
            const resType = resourceTypeLabels[res.type];
            return (
              <div key={res.id} className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 hover:border-red-200 transition-colors">
                <div className="flex items-start gap-2 mb-2">
                  <span className={`text-xs px-1.5 py-0.5 rounded border flex items-center gap-1 flex-shrink-0 ${resType.color}`}>
                    {resType.icon} {resType.label}
                  </span>
                  {res.downloadable && (
                    <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-1.5 py-0.5 rounded">
                      ⬇️ Pobierz
                    </span>
                  )}
                  {res.year && (
                    <span className="ml-auto text-xs text-gray-400 font-mono flex-shrink-0">{res.year}</span>
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900 mb-1">{res.title}</p>
                <p className="text-xs text-gray-500 mb-1 line-clamp-2">{res.description}</p>
                <p className="text-xs text-gray-400 italic mb-3">Źródło: {res.source}</p>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('entry', res.entryId)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    📖 {res.entryTitle}
                  </button>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-red-700 hover:text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded px-2 py-1 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Otwórz
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
