import { useState } from 'react';
import { mapLocations, mapTypeMeta, polandBorder, MapLocationType } from '../data/mapData';

interface MapPageProps {
  onNavigate: (view: string, id?: string) => void;
}

// Rzutowanie lon/lat na układ SVG
const LON_MIN = 14.0, LON_MAX = 24.3, LAT_MIN = 48.8, LAT_MAX = 54.6;
const W = 1000, H = 720, PAD = 40;

function project(lon: number, lat: number): [number, number] {
  const x = PAD + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * (W - 2 * PAD);
  const y = PAD + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * (H - 2 * PAD);
  return [x, y];
}

const borderPath =
  polandBorder.map(([lon, lat], i) => {
    const [x, y] = project(lon, lat);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

const allTypes = Object.keys(mapTypeMeta) as MapLocationType[];

export default function MapPage({ onNavigate }: MapPageProps) {
  const [active, setActive] = useState<Record<MapLocationType, boolean>>({
    represje: true, opozycja: true, wydarzenie: true, kultura: true,
  });
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = (t: MapLocationType) => setActive(a => ({ ...a, [t]: !a[t] }));

  const visible = mapLocations.filter(l => active[l.type]);
  const sel = mapLocations.find(l => l.id === selected) || null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">🗺️</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Interaktywna mapa PRL</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Miejsca represji, strajków, ośrodków oporu i kultury na mapie Polski Ludowej.
          Kliknij punkt, aby poznać szczegóły i przejść do hasła.
        </p>
      </div>

      {/* Legend / filters */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {allTypes.map(t => (
          <button
            key={t}
            onClick={() => toggle(t)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-all ${
              active[t] ? 'bg-white shadow-sm border-stone-300' : 'bg-stone-100 text-gray-400 border-stone-200'
            }`}
          >
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: active[t] ? mapTypeMeta[t].color : '#cbd5e1' }}
            />
            {mapTypeMeta[t].icon} {mapTypeMeta[t].label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-stone-200 shadow-sm p-2">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Mapa Polski">
            {/* Tło */}
            <rect x={0} y={0} width={W} height={H} fill="#eef2f7" rx={12} />
            {/* Obrys Polski */}
            <path d={borderPath} fill="#dbe7d4" stroke="#7a8c6e" strokeWidth={2} />

            {/* Punkty */}
            {visible.map(loc => {
              const [x, y] = project(loc.lon, loc.lat);
              const isSel = loc.id === selected;
              return (
                <g
                  key={loc.id}
                  transform={`translate(${x},${y})`}
                  className="cursor-pointer"
                  onClick={() => setSelected(loc.id)}
                >
                  {isSel && (
                    <circle r={14} fill={mapTypeMeta[loc.type].color} opacity={0.25}>
                      <animate attributeName="r" values="10;18;10" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    r={isSel ? 8 : 6}
                    fill={mapTypeMeta[loc.type].color}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <title>{loc.city} – {loc.name}</title>
                </g>
              );
            })}
          </svg>
          <p className="text-center text-xs text-gray-400 pb-2">
            Mapa schematyczna – położenie punktów przybliżone.
          </p>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-1">
          {sel ? (
            <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-white text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: mapTypeMeta[sel.type].color }}
                >
                  {mapTypeMeta[sel.type].icon} {mapTypeMeta[sel.type].label}
                </span>
                {sel.year && <span className="text-xs text-gray-500 font-mono">{sel.year}</span>}
              </div>
              <h3 className="text-xl font-bold font-serif text-gray-900 mb-1">{sel.name}</h3>
              <p className="text-sm text-gray-500 mb-3">📍 {sel.city}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">{sel.description}</p>
              {sel.entryId && (
                <button
                  onClick={() => onNavigate('entry', sel.entryId)}
                  className="w-full px-4 py-2.5 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
                >
                  📖 Przejdź do hasła
                </button>
              )}
            </div>
          ) : (
            <div className="bg-stone-50 rounded-xl border border-dashed border-stone-300 p-6 text-center text-gray-500">
              <div className="text-3xl mb-2">👆</div>
              <p className="text-sm">Wybierz punkt na mapie, aby zobaczyć opis miejsca.</p>
            </div>
          )}

          {/* List */}
          <div className="mt-4 bg-white rounded-xl border border-stone-200 shadow-sm p-4">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Wszystkie miejsca ({visible.length})
            </h4>
            <ul className="space-y-1 max-h-72 overflow-y-auto">
              {visible.map(loc => (
                <li key={loc.id}>
                  <button
                    onClick={() => setSelected(loc.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                      loc.id === selected ? 'bg-red-50 text-red-800' : 'hover:bg-stone-50 text-gray-700'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: mapTypeMeta[loc.type].color }}
                    />
                    <span className="font-medium">{loc.city}</span>
                    <span className="text-gray-400 text-xs truncate">{loc.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
