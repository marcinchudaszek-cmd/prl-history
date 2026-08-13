import React from 'react';
import { entries, categories, resourceTypeLabels } from '../data/entries';

interface EntryPageProps {
  entryId: string;
  onNavigate: (view: string, id?: string) => void;
}

function renderContent(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  let key = 0;
  let listBuffer: React.ReactElement[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(<ul key={key++} className="space-y-1 my-2">{listBuffer}</ul>);
      listBuffer = [];
    }
  };

  const renderInline = (line: string) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="text-gray-900 font-semibold">{part}</strong> : part
    );
  };

  for (const line of lines) {
    // Nagłówki markdown (## Sekcja) – używane w większości haseł
    const md = line.match(/^(#{1,4})\s+(.*)$/);
    if (md) {
      flushList();
      elements.push(
        <h4 key={key++} className="text-base font-bold text-gray-900 mt-6 mb-2 pb-1 border-b border-stone-100">
          {renderInline(md[2])}
        </h4>
      );
    } else if (line.startsWith('**') && line.endsWith('**') && line.length > 4) {
      flushList();
      const content = line.slice(2, -2);
      elements.push(
        <h4 key={key++} className="text-base font-bold text-gray-900 mt-6 mb-2 pb-1 border-b border-stone-100">
          {content}
        </h4>
      );
    } else if (/^\d+\. /.test(line)) {
      flushList();
      const content = line.replace(/^\d+\. /, '');
      elements.push(
        <p key={key++} className="ml-4 text-gray-700 text-sm leading-relaxed flex gap-2">
          <span className="text-red-600 font-mono font-bold flex-shrink-0">{line.match(/^(\d+)\./)?.[1]}.</span>
          <span>{renderInline(content)}</span>
        </p>
      );
    } else if (line.startsWith('- ')) {
      const content = line.slice(2);
      listBuffer.push(
        <li key={key++} className="flex gap-2 text-gray-700 text-sm leading-relaxed">
          <span className="text-red-500 flex-shrink-0 mt-0.5">•</span>
          <span>{renderInline(content)}</span>
        </li>
      );
    } else if (line.trim() === '') {
      flushList();
      elements.push(<div key={key++} className="h-2" />);
    } else {
      flushList();
      elements.push(
        <p key={key++} className="text-gray-700 text-sm leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

// Wyłuskuje identyfikator filmu z bezpośredniego linku YouTube (watch?v= lub youtu.be/)
function ytId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function EntryPage({ entryId, onNavigate }: EntryPageProps) {
  const entry = entries.find(e => e.id === entryId);
  if (!entry) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hasło nie znalezione</h2>
        <button onClick={() => onNavigate('encyclopedia')} className="text-red-700 hover:underline mt-4">
          ← Wróć do encyklopedii
        </button>
      </div>
    );
  }

  const cat = categories.find(c => c.id === entry.category);
  const related = entries.filter(e => entry.relatedIds.includes(e.id));
  const mediaResources = entry.resources.filter(r => ytId(r.url));
  const linkResources = entry.resources.filter(r => !ytId(r.url));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <button onClick={() => onNavigate('home')} className="hover:text-red-700">Strona główna</button>
        <span>/</span>
        <button onClick={() => onNavigate('encyclopedia')} className="hover:text-red-700">Encyklopedia</button>
        <span>/</span>
        <span className="text-gray-900 font-medium">{entry.title}</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Title block */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                {cat && (
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded border mb-3 ${cat.color}`}>
                    <span>{cat.icon}</span>
                    {cat.label}
                  </span>
                )}
                <h1 className="text-3xl font-bold font-serif text-gray-900 mb-1">{entry.title}</h1>
                {entry.subtitle && (
                  <p className="text-gray-500 italic">{entry.subtitle}</p>
                )}
              </div>
              {entry.yearStart && (
                <div className="flex-shrink-0 text-center bg-red-700 text-white rounded-lg px-4 py-3 min-w-[80px]">
                  <div className="text-xl font-bold font-mono">{entry.yearStart}</div>
                  {entry.yearEnd && entry.yearEnd !== entry.yearStart && (
                    <>
                      <div className="text-xs opacity-70">–</div>
                      <div className="text-lg font-bold font-mono">{entry.yearEnd}</div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed italic">{entry.summary || entry.shortDesc}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {(entry.tags || []).map(tag => (
                <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full border border-stone-200">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Zdjęcie */}
          {entry.image && (
            <figure className="bg-white rounded-xl border border-stone-200 shadow-sm overflow-hidden mb-6">
              <img
                src={entry.image}
                alt={entry.imageCaption || entry.title}
                loading="lazy"
                className="w-full max-h-[26rem] object-cover"
              />
              {entry.imageCaption && (
                <figcaption className="text-xs text-gray-500 p-3 border-t border-stone-100">
                  📷 {entry.imageCaption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Multimedia */}
          {mediaResources.length > 0 && (
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 mb-6">
              <h2 className="text-xl font-bold font-serif text-gray-900 mb-5 flex items-center gap-2">
                <span>🎬</span> Multimedia
                <span className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-normal">
                  {mediaResources.length}
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {mediaResources.map(res => {
                  const id = ytId(res.url)!;
                  return (
                    <div key={res.id}>
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black border border-stone-200">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube-nocookie.com/embed/${id}`}
                          title={res.title}
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <p className="text-xs text-gray-600 mt-2 font-medium">{res.title}</p>
                      {res.description && <p className="text-xs text-gray-400">{res.description}</p>}
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Materiały osadzone z serwisu YouTube. Prawa do nagrań należą do ich właścicieli.
              </p>
            </div>
          )}

          {/* Full content */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8">
            <h2 className="text-xl font-bold font-serif text-gray-900 mb-5 flex items-center gap-2">
              <span>📖</span> Opis hasła
            </h2>
            <div className="space-y-1">
              {renderContent(entry.content)}
            </div>
          </div>

          {/* Ciekawostki */}
          {entry.trivia && entry.trivia.length > 0 && (
            <div className="bg-amber-50 rounded-xl border border-amber-200 shadow-sm p-8 mt-6">
              <h2 className="text-xl font-bold font-serif text-amber-900 mb-5 flex items-center gap-2">
                <span>💡</span> Czy wiesz, że…
              </h2>
              <ul className="space-y-3">
                {entry.trivia.map((t, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-amber-500 flex-shrink-0 mt-0.5">◆</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resources */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
            <h3 className="text-lg font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
              <span>🗃️</span> Zasoby archiwalne
              <span className="ml-auto text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-normal">
                {linkResources.length}
              </span>
            </h3>
            <div className="space-y-3">
              {linkResources.map(res => {
                const resType = resourceTypeLabels[res.type];
                return (
                  <div key={res.id} className="border border-stone-100 rounded-lg p-3 hover:border-red-200 transition-colors">
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`text-xs px-1.5 py-0.5 rounded border flex items-center gap-1 flex-shrink-0 ${resType.color}`}>
                        <span>{resType.icon}</span>
                        {resType.label}
                      </span>
                      {res.downloadable && (
                        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-1.5 py-0.5 rounded">
                          ⬇️ Pobierz
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-800 mb-1">{res.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{res.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{res.source}</span>
                      {res.year && <span className="text-xs text-gray-400 font-mono">{res.year}</span>}
                    </div>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 w-full flex items-center justify-center gap-1 text-xs font-medium text-red-700 hover:text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 rounded px-3 py-1.5 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Przejdź do źródła
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related entries */}
          {related.length > 0 && (
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
              <h3 className="text-lg font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
                <span>🔗</span> Powiązane hasła
              </h3>
              <div className="space-y-2">
                {related.map(rel => {
                  const relCat = categories.find(c => c.id === rel.category);
                  return (
                    <button
                      key={rel.id}
                      onClick={() => onNavigate('entry', rel.id)}
                      className="w-full text-left p-3 rounded-lg border border-stone-100 hover:border-red-200 hover:bg-red-50 transition-all group"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-sm">{relCat?.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-800 group-hover:text-red-700 transition-colors">
                            {rel.title}
                          </div>
                          {rel.yearStart && (
                            <div className="text-xs text-gray-400 font-mono">{rel.yearStart}</div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Porównanie z innym hasłem */}
          <button
            onClick={() => onNavigate('compare', entry.id)}
            className="w-full py-3 mb-3 bg-white border border-stone-200 hover:border-red-300 text-stone-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            ⇄ Porównaj z innym hasłem
          </button>

          {/* Back button */}
          <button
            onClick={() => onNavigate('encyclopedia')}
            className="w-full py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            ← Powrót do encyklopedii
          </button>
        </div>
      </div>
    </div>
  );
}
