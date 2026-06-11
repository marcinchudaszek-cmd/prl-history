// Prasa epoki PRL – przedruki i skany cyfrowe.
// scanUrl prowadzi do zdigitalizowanych numerów (najczęściej Polona / Biblioteka Narodowa).
// image (opcjonalnie) – zweryfikowany skan strony tytułowej (Wikimedia Commons).

export type PressType =
  | 'oficjalna' | 'katolicka' | 'niezalezna' | 'podziemna' | 'mlodziezowa' | 'satyryczna' | 'emigracyjna';

export interface PressItem {
  id: string;
  title: string;
  subtitle?: string;
  type: PressType;
  years: string;
  description: string;
  scanUrl: string;
  image?: string;
  entryId?: string;
}

export const pressTypeMeta: Record<PressType, { label: string; color: string }> = {
  oficjalna: { label: 'Prasa oficjalna', color: '#dc2626' },
  katolicka: { label: 'Prasa katolicka', color: '#7c3aed' },
  niezalezna: { label: 'Prasa niezależna', color: '#2563eb' },
  podziemna: { label: 'Drugi obieg', color: '#0f766e' },
  mlodziezowa: { label: 'Prasa młodzieżowa', color: '#ca8a04' },
  satyryczna: { label: 'Prasa satyryczna', color: '#db2777' },
  emigracyjna: { label: 'Prasa emigracyjna', color: '#475569' },
};

const polona = (q: string) => 'https://polona.pl/search/?query=' + encodeURIComponent(q);

export const pressItems: PressItem[] = [
  {
    id: 'p-trybuna-ludu',
    title: 'Trybuna Ludu',
    subtitle: 'organ KC PZPR',
    type: 'oficjalna',
    years: '1948–1990',
    description: 'Główny dziennik partyjny – najważniejsze pismo propagandowe PRL, wyznaczające oficjalną linię całej prasy.',
    scanUrl: polona('Trybuna Ludu'),
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/TrybunaLudu.JPG?width=600',
    entryId: 'trybuna-ludu',
  },
  {
    id: 'p-zolnierz-wolnosci',
    title: 'Żołnierz Wolności',
    subtitle: 'organ MON',
    type: 'oficjalna',
    years: '1950–1990',
    description: 'Centralny dziennik wojskowy, tuba propagandowa Ludowego Wojska Polskiego.',
    scanUrl: polona('Żołnierz Wolności'),
    entryId: 'lwp',
  },
  {
    id: 'p-zycie-warszawy',
    title: 'Życie Warszawy',
    subtitle: 'dziennik stołeczny',
    type: 'oficjalna',
    years: '1944–od 1944',
    description: 'Popularny dziennik o szerokim zasięgu, łączący informacje, publicystykę i kronikę stolicy.',
    scanUrl: polona('Życie Warszawy'),
  },
  {
    id: 'p-polityka',
    title: 'Polityka',
    subtitle: 'tygodnik społeczno-polityczny',
    type: 'oficjalna',
    years: '1957–od 1957',
    description: 'Opiniotwórczy tygodnik (red. m.in. Mieczysław F. Rakowski) – w ramach systemu nieco bardziej refleksyjny i analityczny.',
    scanUrl: polona('Polityka tygodnik'),
  },
  {
    id: 'p-przekroj',
    title: 'Przekrój',
    subtitle: 'tygodnik społeczno-kulturalny',
    type: 'niezalezna',
    years: '1945–od 1945',
    description: 'Legendarny krakowski tygodnik – kultura, humor, moda i „okno na świat”; oaza lekkości w szarej rzeczywistości.',
    scanUrl: polona('Przekrój tygodnik'),
    entryId: 'kultura-prl',
  },
  {
    id: 'p-szpilki',
    title: 'Szpilki',
    subtitle: 'tygodnik satyryczny',
    type: 'satyryczna',
    years: '1935–1994',
    description: 'Najważniejsze pismo satyryczne PRL – rysunek, dowcip i aluzja na granicy tego, co dopuszczała cenzura.',
    scanUrl: polona('Szpilki'),
    entryId: 'kabaret-prl',
  },
  {
    id: 'p-sztandar-mlodych',
    title: 'Sztandar Młodych',
    subtitle: 'dziennik młodzieżowy',
    type: 'mlodziezowa',
    years: '1950–1997',
    description: 'Adresowany do młodzieży dziennik związany z organizacjami młodzieżowymi (ZMP, później ZSMP).',
    scanUrl: polona('Sztandar Młodych'),
    entryId: 'zmp',
  },
  {
    id: 'p-tygodnik-powszechny',
    title: 'Tygodnik Powszechny',
    subtitle: 'katolicki tygodnik społeczno-kulturalny',
    type: 'katolicka',
    years: '1945–od 1945',
    description: 'Najważniejsze niezależne pismo katolickie, przestrzeń wolnej myśli; w 1953 r. zawieszone za odmowę druku nekrologu Stalina.',
    scanUrl: polona('Tygodnik Powszechny'),
    entryId: 'tygodnik-powszechny',
  },
  {
    id: 'p-robotnik',
    title: 'Robotnik / Biuletyn KOR',
    subtitle: 'wydawnictwa drugiego obiegu',
    type: 'podziemna',
    years: '1976–1989',
    description: 'Niezależne pisma opozycji (m.in. „Robotnik”, „Biuletyn Informacyjny” KOR) drukowane poza cenzurą i kolportowane w konspiracji.',
    scanUrl: polona('Robotnik pismo niezależne'),
    entryId: 'drugi-obieg',
  },
  {
    id: 'p-tygodnik-solidarnosc',
    title: 'Tygodnik Solidarność',
    subtitle: 'pismo NSZZ „Solidarność”',
    type: 'niezalezna',
    years: '1981',
    description: 'Legalne pismo Solidarności wydawane w 1981 r. – jeden z nielicznych okresów oddechu wolnej prasy przed stanem wojennym.',
    scanUrl: polona('Tygodnik Solidarność 1981'),
    entryId: 'solidarnosc',
  },
  {
    id: 'p-gazeta-wyborcza',
    title: 'Gazeta Wyborcza',
    subtitle: 'pierwszy niezależny dziennik',
    type: 'niezalezna',
    years: 'od 1989',
    description: 'Powstała w 1989 r. przy Okrągłym Stole jako pismo strony solidarnościowej; symbol końca monopolu prasowego PZPR.',
    scanUrl: polona('Gazeta Wyborcza 1989'),
    entryId: 'wybory-1989',
  },
  {
    id: 'p-kultura-paryska',
    title: 'Kultura (paryska)',
    subtitle: 'miesięcznik Instytutu Literackiego',
    type: 'emigracyjna',
    years: '1947–2000',
    description: 'Najważniejsze pismo emigracji, redagowane przez Jerzego Giedroycia; docierało nielegalnie do kraju i kształtowało niezależną myśl.',
    scanUrl: polona('Kultura Instytut Literacki Paryż'),
    entryId: 'kultura-paryz',
  },
];
