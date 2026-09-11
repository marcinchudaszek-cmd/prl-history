import { useState } from 'react';
import {
  zadluzenie,
  inflacja,
  pkbPorownanie,
  podwyzki,
  reglamentacja,
  uwagaReglamentacja,
  type Seria,
} from '../data/economy';

interface EconomyPageProps {
  onNavigate: (view: string, id?: string) => void;
}

type Zakladka = 'zadluzenie' | 'inflacja' | 'pkb' | 'kartki' | 'podwyzki';

const ZAKLADKI: { id: Zakladka; ikona: string; etykieta: string }[] = [
  { id: 'zadluzenie', ikona: '💳', etykieta: 'Zadłużenie' },
  { id: 'inflacja', ikona: '📈', etykieta: 'Inflacja' },
  { id: 'pkb', ikona: '🌍', etykieta: 'Polska a Zachód' },
  { id: 'kartki', ikona: '🎟️', etykieta: 'Reglamentacja' },
  { id: 'podwyzki', ikona: '⚡', etykieta: 'Podwyżki i skutki' },
];

/** Przypis pod wykresem: skąd dane i czego nie pokazują. */
function Przypis({ zrodlo, uwaga }: { zrodlo: string; uwaga?: string }) {
  return (
    <div className="mt-5 pt-4 border-t border-stone-100 text-xs text-gray-500 space-y-1.5">
      <p><span className="font-semibold text-gray-600">Źródło:</span> {zrodlo}</p>
      {uwaga && <p><span className="font-semibold text-gray-600">Uwaga:</span> {uwaga}</p>}
    </div>
  );
}

/** Wykres liniowy dla jednej serii. */
function WykresLiniowy({ seria }: { seria: Seria }) {
  const [aktywny, setAktywny] = useState<number | null>(null);
  const W = 720, H = 300, ML = 56, MR = 16, MT = 16, MB = 36;
  const maks = Math.max(...seria.dane.map(d => d.wartosc)) * 1.15;
  const lata = seria.dane.map(d => d.rok);
  const minRok = Math.min(...lata), maksRok = Math.max(...lata);
  const x = (rok: number) => ML + ((rok - minRok) / (maksRok - minRok)) * (W - ML - MR);
  const y = (v: number) => MT + (1 - v / maks) * (H - MT - MB);

  const punkty = seria.dane.map(d => `${x(d.rok)},${y(d.wartosc)}`).join(' ');
  const obszar = `${ML},${y(0)} ${punkty} ${x(maksRok)},${y(0)}`;
  const siatka = [0, 0.25, 0.5, 0.75, 1].map(f => f * maks);

  return (
    <div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
             aria-label={`${seria.tytul} – wykres liniowy`}>
          {siatka.map((v, i) => (
            <g key={i}>
              <line x1={ML} y1={y(v)} x2={W - MR} y2={y(v)} stroke="#e7e5e4" strokeWidth="1" />
              <text x={ML - 8} y={y(v) + 4} textAnchor="end" className="fill-gray-400" fontSize="11">
                {v >= 100 ? Math.round(v) : v.toFixed(1)}
              </text>
            </g>
          ))}
          <polygon points={obszar} fill="#b91c1c" opacity="0.08" />
          <polyline points={punkty} fill="none" stroke="#b91c1c" strokeWidth="2.5"
                    strokeLinejoin="round" strokeLinecap="round" />
          {seria.dane.map(d => (
            <g key={d.rok} onMouseEnter={() => setAktywny(d.rok)} onMouseLeave={() => setAktywny(null)}>
              <circle cx={x(d.rok)} cy={y(d.wartosc)} r={aktywny === d.rok ? 7 : 4.5}
                      fill="#b91c1c" stroke="#fff" strokeWidth="2" className="cursor-pointer transition-all" />
              <text x={x(d.rok)} y={H - 14} textAnchor="middle" className="fill-gray-500" fontSize="11">
                {d.rok}
              </text>
              {aktywny === d.rok && (
                <text x={x(d.rok)} y={y(d.wartosc) - 14} textAnchor="middle"
                      className="fill-gray-900 font-semibold" fontSize="13">
                  {d.wartosc} {seria.jednostka.split(' ')[0]}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-sm">
        {seria.dane.map(d => (
          <span key={d.rok} className="text-gray-600">
            <span className="text-gray-400">{d.rok}:</span>{' '}
            <span className="font-semibold text-gray-900">{d.wartosc}</span>
          </span>
        ))}
        <span className="text-gray-400">({seria.jednostka})</span>
      </div>
    </div>
  );
}

/** Wykres słupkowy dla jednej serii. */
function WykresSlupkowy({ seria }: { seria: Seria }) {
  const [aktywny, setAktywny] = useState<number | null>(null);
  const W = 720, H = 300, ML = 52, MR = 16, MT = 24, MB = 36;
  const maks = Math.max(...seria.dane.map(d => d.wartosc)) * 1.1;
  const szer = (W - ML - MR) / seria.dane.length;
  const y = (v: number) => MT + (1 - v / maks) * (H - MT - MB);

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
           aria-label={`${seria.tytul} – wykres słupkowy`}>
        {[0, 0.25, 0.5, 0.75, 1].map((f, i) => (
          <g key={i}>
            <line x1={ML} y1={y(f * maks)} x2={W - MR} y2={y(f * maks)} stroke="#e7e5e4" strokeWidth="1" />
            <text x={ML - 8} y={y(f * maks) + 4} textAnchor="end" className="fill-gray-400" fontSize="11">
              {Math.round(f * maks)}
            </text>
          </g>
        ))}
        {seria.dane.map((d, i) => {
          const cx = ML + i * szer + szer / 2;
          const wys = (H - MT - MB) * (d.wartosc / maks);
          const podswietlony = aktywny === d.rok;
          return (
            <g key={d.rok} onMouseEnter={() => setAktywny(d.rok)} onMouseLeave={() => setAktywny(null)}>
              <rect x={cx - szer * 0.32} y={H - MB - wys} width={szer * 0.64} height={wys}
                    fill={podswietlony ? '#7f1d1d' : '#b91c1c'} rx="2" className="cursor-pointer transition-colors" />
              <text x={cx} y={H - MB - wys - 6} textAnchor="middle"
                    className={podswietlony ? 'fill-gray-900 font-semibold' : 'fill-gray-500'} fontSize="11">
                {d.wartosc}
              </text>
              <text x={cx} y={H - 14} textAnchor="middle" className="fill-gray-500" fontSize="11">
                {String(d.rok).slice(2)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/** Trzy serie na jednym wykresie: Polska, Hiszpania, RFN. */
function WykresPorownawczy() {
  const [aktywny, setAktywny] = useState<number | null>(null);
  const W = 720, H = 320, ML = 60, MR = 16, MT = 20, MB = 36;
  const dane = pkbPorownanie.dane;
  const maks = Math.max(...dane.map(d => Math.max(d.polska, d.hiszpania, d.rfn))) * 1.12;
  const lata = dane.map(d => d.rok);
  const minRok = Math.min(...lata), maksRok = Math.max(...lata);
  const x = (rok: number) => ML + ((rok - minRok) / (maksRok - minRok)) * (W - ML - MR);
  const y = (v: number) => MT + (1 - v / maks) * (H - MT - MB);

  const serie = [
    { klucz: 'polska' as const, nazwa: 'Polska', kolor: '#b91c1c' },
    { klucz: 'hiszpania' as const, nazwa: 'Hiszpania', kolor: '#ca8a04' },
    { klucz: 'rfn' as const, nazwa: 'RFN', kolor: '#1d4ed8' },
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-3">
        {serie.map(s => (
          <span key={s.klucz} className="flex items-center gap-2 text-sm text-gray-700">
            <span className="w-4 h-1 rounded" style={{ backgroundColor: s.kolor }} />
            {s.nazwa}
          </span>
        ))}
      </div>
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[520px]" role="img"
             aria-label="PKB na mieszkańca – Polska, Hiszpania, RFN">
          {[0, 0.25, 0.5, 0.75, 1].map((f, i) => (
            <g key={i}>
              <line x1={ML} y1={y(f * maks)} x2={W - MR} y2={y(f * maks)} stroke="#e7e5e4" strokeWidth="1" />
              <text x={ML - 8} y={y(f * maks) + 4} textAnchor="end" className="fill-gray-400" fontSize="11">
                {Math.round(f * maks / 1000)} tys.
              </text>
            </g>
          ))}
          {serie.map(s => (
            <polyline key={s.klucz} fill="none" stroke={s.kolor} strokeWidth="2.5"
                      strokeLinejoin="round" strokeLinecap="round"
                      points={dane.map(d => `${x(d.rok)},${y(d[s.klucz])}`).join(' ')} />
          ))}
          {dane.map(d => (
            <g key={d.rok} onMouseEnter={() => setAktywny(d.rok)} onMouseLeave={() => setAktywny(null)}>
              <rect x={x(d.rok) - 18} y={MT} width="36" height={H - MT - MB} fill="transparent" className="cursor-pointer" />
              {serie.map(s => (
                <circle key={s.klucz} cx={x(d.rok)} cy={y(d[s.klucz])} r={aktywny === d.rok ? 6 : 4}
                        fill={s.kolor} stroke="#fff" strokeWidth="2" className="transition-all" />
              ))}
              <text x={x(d.rok)} y={H - 14} textAnchor="middle" className="fill-gray-500" fontSize="11">{d.rok}</text>
            </g>
          ))}
        </svg>
      </div>
      {aktywny && (
        <div className="mt-3 flex flex-wrap gap-4 text-sm bg-stone-50 rounded-lg px-4 py-3">
          <span className="font-semibold text-gray-900">{aktywny}</span>
          {serie.map(s => {
            const punkt = dane.find(d => d.rok === aktywny)!;
            return (
              <span key={s.klucz} className="text-gray-700">
                <span style={{ color: s.kolor }}>●</span> {s.nazwa}: <strong>{punkt[s.klucz].toLocaleString('pl')}</strong>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** Paski okresów reglamentacji na osi 1976–1990. */
function WykresKartek() {
  const [aktywny, setAktywny] = useState<string | null>(null);
  const OD = 1976, DO = 1990;
  const proc = (rok: number) => ((rok - OD) / (DO - OD)) * 100;

  return (
    <div>
      <div className="flex justify-between text-xs text-gray-400 mb-2 px-1">
        {[1976, 1980, 1985, 1990].map(r => <span key={r}>{r}</span>)}
      </div>
      <div className="space-y-2">
        {reglamentacja.map(r => (
          <div key={r.towar}
               onMouseEnter={() => setAktywny(r.towar)}
               onMouseLeave={() => setAktywny(null)}
               className="grid grid-cols-[9rem_1fr] gap-3 items-center cursor-default">
            <span className="text-sm text-gray-700 text-right">{r.towar}</span>
            <div className="relative h-7 bg-stone-100 rounded">
              <div
                className={`absolute top-0 bottom-0 rounded transition-colors ${
                  aktywny === r.towar ? 'bg-red-800' : 'bg-red-600'
                }`}
                style={{ left: `${proc(r.od)}%`, width: `${proc(r.do) - proc(r.od)}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-medium text-white drop-shadow">
                {r.od}–{r.do}
              </span>
            </div>
          </div>
        ))}
      </div>
      {aktywny && (
        <p className="mt-4 text-sm text-gray-700 bg-stone-50 rounded-lg px-4 py-3">
          <strong>{aktywny}:</strong> {reglamentacja.find(r => r.towar === aktywny)!.opis}
        </p>
      )}
    </div>
  );
}

export default function EconomyPage({ onNavigate }: EconomyPageProps) {
  const [zakladka, setZakladka] = useState<Zakladka>('zadluzenie');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">📊</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Gospodarka PRL w liczbach</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Zadłużenie, inflacja, reglamentacja i dystans do Zachodu. Przy każdym wykresie podane jest źródło
          i to, czego dane nie pokazują.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {ZAKLADKI.map(z => (
          <button
            key={z.id}
            onClick={() => setZakladka(z.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              zakladka === z.id
                ? 'bg-red-700 text-white border-red-700'
                : 'bg-white text-gray-600 border-stone-300 hover:border-red-300'
            }`}
          >
            <span className="mr-1.5">{z.ikona}</span>{z.etykieta}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 md:p-8">
        {zakladka === 'zadluzenie' && (
          <>
            <h3 className="text-xl font-bold font-serif text-gray-900">{zadluzenie.tytul}</h3>
            <p className="text-sm text-gray-500 mb-6">{zadluzenie.podtytul}</p>
            <WykresLiniowy seria={zadluzenie} />
            <p className="mt-5 text-sm text-gray-700 leading-relaxed">
              Kredyty zaciągane od 1971 roku miały sfinansować modernizację, która spłaci się eksportem.
              Eksport nie nadążył, a kolejne pożyczki szły już na obsługę poprzednich. W 1981 roku Polska
              wstrzymała spłaty i przez resztę dekady była krajem niewypłacalnym.
            </p>
            <Przypis zrodlo={zadluzenie.zrodlo} uwaga={zadluzenie.uwaga} />
          </>
        )}

        {zakladka === 'inflacja' && (
          <>
            <h3 className="text-xl font-bold font-serif text-gray-900">{inflacja.tytul}</h3>
            <p className="text-sm text-gray-500 mb-6">{inflacja.podtytul}</p>
            <WykresSlupkowy seria={inflacja} />
            <p className="mt-5 text-sm text-gray-700 leading-relaxed">
              Skok 1982 roku to skutek reformy cen wprowadzonej w stanie wojennym. Prawdziwe załamanie przyszło
              jednak na końcu: w 1989 roku pieniądz tracił wartość z miesiąca na miesiąc, a pensja wypłacona
              pierwszego była pod koniec miesiąca warta wyraźnie mniej.
            </p>
            <Przypis zrodlo={inflacja.zrodlo} uwaga={inflacja.uwaga} />
          </>
        )}

        {zakladka === 'pkb' && (
          <>
            <h3 className="text-xl font-bold font-serif text-gray-900">{pkbPorownanie.tytul}</h3>
            <p className="text-sm text-gray-500 mb-6">{pkbPorownanie.podtytul}</p>
            <WykresPorownawczy />
            <p className="mt-5 text-sm text-gray-700 leading-relaxed">
              W 1950 roku Polska i Hiszpania startowały z podobnego poziomu — obydwa kraje wychodziły z wojny
              i dyktatury. Cztery dekady później Hiszpania była bogatsza o połowę, a dystans do RFN urósł
              trzykrotnie. To porównanie mówi o PRL więcej niż jakikolwiek pojedynczy wskaźnik.
            </p>
            <Przypis zrodlo={pkbPorownanie.zrodlo} uwaga={pkbPorownanie.uwaga} />
          </>
        )}

        {zakladka === 'kartki' && (
          <>
            <h3 className="text-xl font-bold font-serif text-gray-900">Co i jak długo było na kartki</h3>
            <p className="text-sm text-gray-500 mb-6">Reglamentacja jako stały element codzienności, nie epizod</p>
            <WykresKartek />
            <p className="mt-5 text-sm text-gray-700 leading-relaxed">
              Kartki na cukier wprowadzono w 1976 roku i miały być rozwiązaniem tymczasowym. Ostatnie kartki —
              na mięso — zniesiono latem 1989 roku, czyli po trzynastu latach. Dla pokolenia dorastającego
              w latach 80. przydział był normalnym sposobem kupowania jedzenia.
            </p>
            <Przypis zrodlo="Opracowania o gospodarce niedoboru i zbiory kartek w muzeach regionalnych"
                     uwaga={uwagaReglamentacja} />
          </>
        )}

        {zakladka === 'podwyzki' && (
          <>
            <h3 className="text-xl font-bold font-serif text-gray-900">Podwyżki, które zmieniały władzę</h3>
            <p className="text-sm text-gray-500 mb-6">
              Pięć razy decyzja o cenach żywności wywołała skutki polityczne
            </p>
            <div className="space-y-3">
              {podwyzki.map(p => (
                <div key={p.data} className="border border-stone-200 rounded-lg p-4 hover:border-red-300 transition-colors">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-semibold text-white bg-red-700 rounded px-2 py-0.5">{p.data}</span>
                  </div>
                  <p className="text-sm text-gray-800">{p.opis}</p>
                  <p className="text-sm text-gray-600 mt-1.5">
                    <span className="font-semibold text-gray-700">Skutek:</span> {p.skutek}
                  </p>
                  {p.entryId && (
                    <button
                      onClick={() => onNavigate('entry', p.entryId)}
                      className="mt-2 text-sm text-red-700 hover:text-red-900 font-medium"
                    >
                      Przejdź do hasła →
                    </button>
                  )}
                </div>
              ))}
            </div>
            <Przypis zrodlo="Hasła encyklopedii oraz opracowania IPN o protestach robotniczych" />
          </>
        )}
      </div>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 leading-relaxed">
        <strong>Jak czytać te liczby.</strong> Statystyka PRL była narzędziem politycznym: część danych
        publikowano wybiórczo, a inflację przed 1982 rokiem ukrywano w zmianach asortymentu zamiast w cenach.
        Podane tu wartości pochodzą z późniejszych opracowań, które próbują to skorygować — dlatego bywają
        rozbieżne między sobą i dlatego przy każdym wykresie jest uwaga o ich dokładności.
      </div>
    </div>
  );
}
