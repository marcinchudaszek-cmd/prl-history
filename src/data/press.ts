// Prasa epoki PRL – przedruki i skany cyfrowe.
// kind 'skan'  -> scanUrl prowadzi do zdigitalizowanego numeru (Internet Archive, czytnik BookReader)
// kind 'wiki'  -> scanUrl prowadzi do hasła w Wikipedii (gdy brak dostępnego skanu online)
// Wszystkie linki zweryfikowane (server-side) – działają bez JavaScriptu.

export type PressType =
  | 'oficjalna' | 'katolicka' | 'niezalezna' | 'emigracyjna'
  | 'mlodziezowa' | 'satyryczna' | 'kobieca' | 'popularna' | 'dziecieca';

export interface PressItem {
  id: string;
  title: string;
  subtitle?: string;
  type: PressType;
  years: string;
  description: string;
  scanUrl: string;
  kind: 'skan' | 'wiki';
  image?: string;
  entryId?: string;
}

export const pressTypeMeta: Record<PressType, { label: string; color: string }> = {
  oficjalna: { label: 'Prasa oficjalna', color: '#dc2626' },
  katolicka: { label: 'Prasa katolicka', color: '#7c3aed' },
  niezalezna: { label: 'Prasa niezależna', color: '#2563eb' },
  emigracyjna: { label: 'Prasa emigracyjna', color: '#475569' },
  mlodziezowa: { label: 'Prasa młodzieżowa', color: '#ca8a04' },
  satyryczna: { label: 'Prasa satyryczna', color: '#db2777' },
  kobieca: { label: 'Prasa kobieca', color: '#e11d48' },
  popularna: { label: 'Magazyny popularne', color: '#0891b2' },
  dziecieca: { label: 'Prasa dziecięca', color: '#16a34a' },
};

const ia = (id: string) => 'https://archive.org/details/' + id;
const wiki = (t: string) => 'https://pl.wikipedia.org/wiki/' + encodeURIComponent(t.replace(/ /g, '_'));
const commons = (f: string) => 'https://commons.wikimedia.org/wiki/Special:FilePath/' + encodeURIComponent(f) + '?width=600';

export const pressItems: PressItem[] = [
  // ===== ze skanami (Internet Archive) =====
  {
    id: 'p-trybuna-ludu',
    title: 'Trybuna Ludu',
    subtitle: 'organ KC PZPR',
    type: 'oficjalna',
    years: '1948–1990',
    description: 'Główny dziennik partyjny – najważniejsze pismo propagandowe PRL, wyznaczające oficjalną linię całej prasy.',
    scanUrl: ia('pbc.gda.pl.Nr_178A_86072'),
    kind: 'skan',
    image: commons('TrybunaLudu.JPG'),
    entryId: 'trybuna-ludu',
  },
  {
    id: 'p-zycie-warszawy',
    title: 'Życie Warszawy',
    subtitle: 'dziennik stołeczny',
    type: 'oficjalna',
    years: '1944–2011',
    description: 'Popularny dziennik o szerokim zasięgu, łączący informacje, publicystykę i kronikę stolicy.',
    scanUrl: ia('ZW1944-1958.PDF'),
    kind: 'skan',
  },
  {
    id: 'p-trybuna-robotnicza',
    title: 'Trybuna Robotnicza',
    subtitle: 'dziennik PZPR na Śląsku',
    type: 'oficjalna',
    years: '1945–1990',
    description: 'Wojewódzki organ partii na Górnym Śląsku – jeden z największych dzienników regionalnych PRL.',
    scanUrl: ia('89089-trybuna-robotnicza-1978-nr-35-pdf'),
    kind: 'skan',
  },
  {
    id: 'p-sztandar-mlodych',
    title: 'Sztandar Młodych',
    subtitle: 'dziennik młodzieżowy',
    type: 'mlodziezowa',
    years: '1950–1997',
    description: 'Adresowany do młodzieży dziennik związany z organizacjami młodzieżowymi (ZMP, później ZSMP).',
    scanUrl: ia('pbc.gda.pl.Nr_300_106883'),
    kind: 'skan',
    entryId: 'zmp',
  },
  {
    id: 'p-przekroj',
    title: 'Przekrój',
    subtitle: 'tygodnik społeczno-kulturalny',
    type: 'niezalezna',
    years: '1945–od 1945',
    description: 'Legendarny krakowski tygodnik – kultura, humor, moda i „okno na świat”; oaza lekkości w szarej rzeczywistości.',
    scanUrl: ia('przekroj.1945-1991'),
    kind: 'skan',
    entryId: 'kultura-prl',
  },
  {
    id: 'p-szpilki',
    title: 'Szpilki',
    subtitle: 'tygodnik satyryczny',
    type: 'satyryczna',
    years: '1935–1994',
    description: 'Najważniejsze pismo satyryczne PRL – rysunek, dowcip i aluzja na granicy tego, co dopuszczała cenzura.',
    scanUrl: ia('Szpilki1981Nr22'),
    kind: 'skan',
    entryId: 'kabaret-prl',
  },
  {
    id: 'p-przyjaciolka',
    title: 'Przyjaciółka',
    subtitle: 'tygodnik dla kobiet',
    type: 'kobieca',
    years: '1948–od 1948',
    description: 'Najpopularniejszy tygodnik kobiecy PRL – porady, moda, wykroje i listy czytelniczek, o milionowym nakładzie.',
    scanUrl: ia('Przyjaciolka121956'),
    kind: 'skan',
  },
  {
    id: 'p-kobieta-i-zycie',
    title: 'Kobieta i Życie',
    subtitle: 'tygodnik kobiecy',
    type: 'kobieca',
    years: '1946–2002',
    description: 'Popularny magazyn kobiecy łączący tematykę rodzinną, obyczajową i społeczną z modą i kulturą.',
    scanUrl: ia('KobietaIZycie121975'),
    kind: 'skan',
  },
  {
    id: 'p-dookola-swiata',
    title: 'Dookoła Świata',
    subtitle: 'magazyn podróżniczo-młodzieżowy',
    type: 'popularna',
    years: '1954–1976',
    description: 'Barwny magazyn o świecie, podróżach, nauce i przygodzie – dla wielu młodych Polaków namiastka kontaktu z Zachodem.',
    scanUrl: ia('DookolaSwiata111968ZSRR'),
    kind: 'skan',
  },
  {
    id: 'p-plomyk',
    title: 'Płomyk',
    subtitle: 'czasopismo dla dzieci',
    type: 'dziecieca',
    years: '1917–1991',
    description: 'Zasłużone czasopismo dla dzieci i młodzieży szkolnej – literatura, edukacja i rozrywka kolejnych pokoleń.',
    scanUrl: ia('Plomyk41979'),
    kind: 'skan',
    entryId: 'dzieci-prl',
  },
  // ===== bez dostępnego skanu online -> Wikipedia =====
  {
    id: 'p-tygodnik-powszechny',
    title: 'Tygodnik Powszechny',
    subtitle: 'katolicki tygodnik społeczno-kulturalny',
    type: 'katolicka',
    years: '1945–od 1945',
    description: 'Najważniejsze niezależne pismo katolickie; w 1953 r. zawieszone za odmowę druku nekrologu Stalina.',
    scanUrl: wiki('Tygodnik Powszechny'),
    kind: 'wiki',
    entryId: 'tygodnik-powszechny',
  },
  {
    id: 'p-polityka',
    title: 'Polityka',
    subtitle: 'tygodnik społeczno-polityczny',
    type: 'oficjalna',
    years: '1957–od 1957',
    description: 'Opiniotwórczy tygodnik (red. m.in. M. F. Rakowski) – w ramach systemu bardziej analityczny i refleksyjny.',
    scanUrl: wiki('Polityka (tygodnik)'),
    kind: 'wiki',
  },
  {
    id: 'p-po-prostu',
    title: 'Po prostu',
    subtitle: 'tygodnik studentów i inteligencji',
    type: 'niezalezna',
    years: '1947–1957',
    description: 'Sztandarowe pismo odwilży 1956 r.; jego zamknięcie w 1957 r. wywołało uliczne protesty w Warszawie.',
    scanUrl: wiki('Po prostu (czasopismo)'),
    kind: 'wiki',
    entryId: 'pazdziernik-1956',
  },
  {
    id: 'p-nowa-kultura',
    title: 'Nowa Kultura',
    subtitle: 'tygodnik literacki',
    type: 'niezalezna',
    years: '1950–1963',
    description: 'Ważny tygodnik literacko-społeczny, na łamach którego toczyły się spory o kształt kultury po odwilży.',
    scanUrl: wiki('Nowa Kultura'),
    kind: 'wiki',
    entryId: 'literatura-prl',
  },
  {
    id: 'p-tygodnik-solidarnosc',
    title: 'Tygodnik Solidarność',
    subtitle: 'pismo NSZZ „Solidarność”',
    type: 'niezalezna',
    years: 'od 1981',
    description: 'Legalne pismo Solidarności wydawane w 1981 r. – jeden z nielicznych okresów oddechu wolnej prasy przed stanem wojennym.',
    scanUrl: wiki('Tygodnik Solidarność'),
    kind: 'wiki',
    entryId: 'solidarnosc',
  },
  {
    id: 'p-gazeta-wyborcza',
    title: 'Gazeta Wyborcza',
    subtitle: 'pierwszy niezależny dziennik',
    type: 'niezalezna',
    years: 'od 1989',
    description: 'Powstała w 1989 r. przy Okrągłym Stole jako pismo strony solidarnościowej; symbol końca monopolu prasowego PZPR.',
    scanUrl: wiki('Gazeta Wyborcza'),
    kind: 'wiki',
    entryId: 'wybory-1989',
  },
  {
    id: 'p-kultura-paryska',
    title: 'Kultura (paryska)',
    subtitle: 'miesięcznik Instytutu Literackiego',
    type: 'emigracyjna',
    years: '1947–2000',
    description: 'Najważniejsze pismo emigracji, redagowane przez Jerzego Giedroycia; docierało nielegalnie do kraju i kształtowało niezależną myśl.',
    scanUrl: wiki('Kultura (Instytut Literacki)'),
    kind: 'wiki',
    entryId: 'kultura-paryz',
  },
  {
    id: 'p-zolnierz-wolnosci',
    title: 'Żołnierz Wolności',
    subtitle: 'organ MON',
    type: 'oficjalna',
    years: '1950–1990',
    description: 'Centralny dziennik wojskowy, tuba propagandowa Ludowego Wojska Polskiego.',
    scanUrl: wiki('Żołnierz Wolności'),
    kind: 'wiki',
    entryId: 'lwp',
  },
  {
    id: 'p-slowo-powszechne',
    title: 'Słowo Powszechne',
    subtitle: 'dziennik Stowarzyszenia PAX',
    type: 'katolicka',
    years: '1947–1993',
    description: 'Dziennik prorządowego PAX-u – „katolicki” głos akceptujący system, narzędzie rozbijania jedności Kościoła.',
    scanUrl: wiki('Słowo Powszechne'),
    kind: 'wiki',
    entryId: 'pax-piasecki',
  },
  {
    id: 'p-swiat-mlodych',
    title: 'Świat Młodych',
    subtitle: 'harcerska gazeta nastolatków',
    type: 'dziecieca',
    years: '1949–1993',
    description: 'Popularna gazeta młodzieżowa ZHP; na jej łamach debiutował komiks „Tytus, Romek i A’Tomek”.',
    scanUrl: wiki('Świat Młodych'),
    kind: 'wiki',
    entryId: 'komiks-prl',
  },
  {
    id: 'p-filipinka',
    title: 'Filipinka',
    subtitle: 'pismo dla dziewcząt',
    type: 'kobieca',
    years: '1957–2006',
    description: 'Kultowe czasopismo dla nastolatek – moda, obyczaje, porady i listy, kształtujące pokolenia młodych czytelniczek.',
    scanUrl: wiki('Filipinka (czasopismo)'),
    kind: 'wiki',
  },
];
