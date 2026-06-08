// Lokalizacje na interaktywnej mapie PRL.
// lon/lat są rzutowane na współrzędne SVG w komponencie MapPage.

export type MapLocationType = 'represje' | 'opozycja' | 'wydarzenie' | 'kultura';

export interface MapLocation {
  id: string;
  name: string;
  city: string;
  lon: number;
  lat: number;
  type: MapLocationType;
  year?: string;
  description: string;
  entryId?: string;
}

export const mapTypeMeta: Record<MapLocationType, { label: string; color: string; icon: string }> = {
  represje: { label: 'Represje i zbrodnie', color: '#dc2626', icon: '⚖️' },
  opozycja: { label: 'Ośrodki oporu i strajki', color: '#2563eb', icon: '✊' },
  wydarzenie: { label: 'Ważne wydarzenia', color: '#ca8a04', icon: '📍' },
  kultura: { label: 'Ośrodki kultury', color: '#9333ea', icon: '🎭' },
};

// Punkty graniczne Polski (uproszczony obrys) – lon/lat, w kolejności obrysu.
export const polandBorder: [number, number][] = [
  [14.27, 53.92], // Świnoujście (NW)
  [16.20, 54.27], // wybrzeże środkowe
  [18.65, 54.42], // Gdańsk / Półwysep Helski
  [19.65, 54.45], // Mierzeja Wiślana
  [22.80, 54.36], // okolice Suwałk (NE)
  [23.50, 54.05], // granica wschodnia płn.
  [23.93, 52.69], // Bug – okolice Białegostoku
  [23.62, 52.00], // Bug
  [24.14, 50.86], // Hrubieszów (najdalej na wschód)
  [22.64, 49.53], // Bieszczady
  [22.90, 49.00], // Wielka Racza / kraniec płd.-wsch.
  [20.10, 49.18], // Tatry (Zakopane)
  [19.45, 49.60], // granica płd. – Beskidy
  [18.57, 49.92], // Cieszyn
  [17.74, 50.18], // Śląsk Opolski
  [16.20, 50.65], // Sudety / Kotlina Kłodzka
  [15.02, 50.86], // Worek Turoszowski (SW)
  [14.76, 52.07], // Odra – Słubice
  [14.14, 52.83], // Odra
  [14.27, 53.92], // powrót do Świnoujścia
];

export const mapLocations: MapLocation[] = [
  {
    id: 'loc-poznan-1956',
    name: 'Poznański Czerwiec',
    city: 'Poznań',
    lon: 16.93, lat: 52.41,
    type: 'represje', year: '1956',
    description: 'Pierwszy masowy bunt robotniczy w PRL, krwawo stłumiony – co najmniej 57 zabitych.',
    entryId: 'czerwiec-1956',
  },
  {
    id: 'loc-stocznia-gdansk',
    name: 'Stocznia Gdańska',
    city: 'Gdańsk',
    lon: 18.65, lat: 54.35,
    type: 'opozycja', year: '1980',
    description: 'Kolebka Solidarności – miejsce strajku sierpniowego i podpisania Porozumień Gdańskich.',
    entryId: 'stocznia-gdanska',
  },
  {
    id: 'loc-gdynia-1970',
    name: 'Masakra na Wybrzeżu',
    city: 'Gdynia',
    lon: 18.53, lat: 54.52,
    type: 'represje', year: '1970',
    description: 'Grudzień 1970 – wojsko i milicja strzelały do robotników. Symbolem stał się Zbyszek Godlewski.',
    entryId: 'grudzien-1970',
  },
  {
    id: 'loc-szczecin-1970',
    name: 'Strajki w Szczecinie',
    city: 'Szczecin',
    lon: 14.55, lat: 53.43,
    type: 'opozycja', year: '1970/1980',
    description: 'Ważny ośrodek protestów robotniczych w grudniu 1970 i w sierpniu 1980.',
    entryId: 'grudzien-1970',
  },
  {
    id: 'loc-radom-1976',
    name: 'Czerwiec 1976 – Radom',
    city: 'Radom',
    lon: 21.15, lat: 51.40,
    type: 'opozycja', year: '1976',
    description: 'Protest przeciw podwyżkom cen; po nim represje i słynne „ścieżki zdrowia”.',
    entryId: 'czerwiec-1976',
  },
  {
    id: 'loc-ursus-1976',
    name: 'Strajk w Ursusie',
    city: 'Ursus (Warszawa)',
    lon: 20.88, lat: 52.20,
    type: 'opozycja', year: '1976',
    description: 'Robotnicy zakładów Ursus zablokowali tory kolejowe w proteście przeciw podwyżkom.',
    entryId: 'czerwiec-1976',
  },
  {
    id: 'loc-wujek-1981',
    name: 'Pacyfikacja KWK Wujek',
    city: 'Katowice',
    lon: 18.92, lat: 50.23,
    type: 'represje', year: '1981',
    description: 'Najkrwawszy moment stanu wojennego – ZOMO zastrzeliło 9 górników.',
    entryId: 'wujek',
  },
  {
    id: 'loc-warszawa',
    name: 'Warszawa – stolica PRL',
    city: 'Warszawa',
    lon: 21.01, lat: 52.23,
    type: 'wydarzenie',
    description: 'Siedziba władz PRL, Pałac Kultury i Nauki, centrum decyzji politycznych epoki.',
    entryId: 'palac-kultury',
  },
  {
    id: 'loc-nowa-huta',
    name: 'Nowa Huta',
    city: 'Kraków',
    lon: 20.05, lat: 50.07,
    type: 'wydarzenie', year: '1949',
    description: 'Wzorcowe miasto socjalistyczne; później ośrodek oporu i walk o krzyż.',
    entryId: 'nowa-huta',
  },
  {
    id: 'loc-jaworzno',
    name: 'Obóz w Jaworznie',
    city: 'Jaworzno',
    lon: 19.27, lat: 50.20,
    type: 'represje', year: '1945–1956',
    description: 'Obóz pracy dla więźniów politycznych, Niemców i Ukraińców (akcja „Wisła”).',
    entryId: 'obozy-pracy',
  },
  {
    id: 'loc-kielce-1946',
    name: 'Pogrom kielecki',
    city: 'Kielce',
    lon: 20.63, lat: 50.87,
    type: 'represje', year: '1946',
    description: 'Pogrom ludności żydowskiej – zginęło ok. 40 osób; trauma powojennej Polski.',
    entryId: 'kielce-1946',
  },
  {
    id: 'loc-bydgoszcz-1981',
    name: 'Prowokacja bydgoska',
    city: 'Bydgoszcz',
    lon: 18.00, lat: 53.12,
    type: 'opozycja', year: '1981',
    description: 'Pobicie działaczy Solidarności wywołało największy kryzys polityczny przed stanem wojennym.',
    entryId: 'bydgoszcz-1981',
  },
  {
    id: 'loc-jastrzebie-1980',
    name: 'Porozumienie Jastrzębskie',
    city: 'Jastrzębie-Zdrój',
    lon: 18.60, lat: 49.95,
    type: 'opozycja', year: '1980',
    description: 'Trzecie z porozumień sierpniowych – strajk górników Śląska.',
    entryId: 'sierpien-1980',
  },
  {
    id: 'loc-wroclaw',
    name: 'Solidarność Walcząca',
    city: 'Wrocław',
    lon: 17.03, lat: 51.11,
    type: 'opozycja', year: '1982',
    description: 'Siedziba radykalnej, podziemnej organizacji Kornela Morawieckiego.',
    entryId: 'solidarnosc-walczaca',
  },
  {
    id: 'loc-jarocin',
    name: 'Festiwal w Jarocinie',
    city: 'Jarocin',
    lon: 17.50, lat: 51.97,
    type: 'kultura', year: '1980–1989',
    description: '„Wolna wyspa” rocka i punka – największy festiwal muzyki młodzieżowej w bloku wschodnim.',
    entryId: 'jarocin-festiwal',
  },
  {
    id: 'loc-lodz-film',
    name: 'Szkoła Filmowa w Łodzi',
    city: 'Łódź',
    lon: 19.46, lat: 51.76,
    type: 'kultura', year: '1948',
    description: 'Kuźnia polskiego kina – studiowali tu Wajda, Polański, Kieślowski.',
    entryId: 'lodz-szkola-filmowa',
  },
  {
    id: 'loc-lublin-1980',
    name: 'Lubelski Lipiec',
    city: 'Lublin / Świdnik',
    lon: 22.57, lat: 51.25,
    type: 'opozycja', year: '1980',
    description: 'Lipcowe strajki na Lubelszczyźnie poprzedziły sierpień 1980 na Wybrzeżu.',
    entryId: 'sierpien-1980',
  },
  {
    id: 'loc-wloclawek',
    name: 'Zbrodnia na ks. Popiełuszce',
    city: 'Włocławek',
    lon: 19.07, lat: 52.65,
    type: 'represje', year: '1984',
    description: 'W okolicach tamy na Wiśle funkcjonariusze SB porzucili ciało zamordowanego ks. Jerzego Popiełuszki.',
    entryId: 'popieluszko',
  },
  {
    id: 'loc-bieszczady-wisla',
    name: 'Akcja „Wisła”',
    city: 'Bieszczady / Przemyśl',
    lon: 22.40, lat: 49.45,
    type: 'represje', year: '1947',
    description: 'Przymusowe wysiedlenia ludności ukraińskiej i łemkowskiej z południowo-wschodniej Polski.',
    entryId: 'akcja-wisla',
  },
  {
    id: 'loc-opole',
    name: 'Festiwal Piosenki Polskiej',
    city: 'Opole',
    lon: 17.93, lat: 50.67,
    type: 'kultura', year: '1963',
    description: 'Najważniejszy festiwal polskiej piosenki, organizowany w opolskim amfiteatrze.',
    entryId: 'festiwal-opole',
  },
  {
    id: 'loc-sopot',
    name: 'Międzynarodowy Festiwal Piosenki',
    city: 'Sopot',
    lon: 18.56, lat: 54.44,
    type: 'kultura', year: '1961',
    description: 'Estradowe „okno na świat” – festiwal w Operze Leśnej z gwiazdami z Zachodu i bloku wschodniego.',
    entryId: 'sopot-festiwal',
  },
  {
    id: 'loc-huta-katowice',
    name: 'Huta Katowice',
    city: 'Dąbrowa Górnicza',
    lon: 19.27, lat: 50.36,
    type: 'wydarzenie', year: '1972',
    description: 'Sztandarowa, finansowana kredytami inwestycja dekady Gierka i jeden z ośrodków Solidarności na Śląsku.',
    entryId: 'huta-katowice',
  },
  {
    id: 'loc-czestochowa',
    name: 'Jasna Góra – Milenium',
    city: 'Częstochowa',
    lon: 19.12, lat: 50.81,
    type: 'kultura', year: '1966',
    description: 'Centrum obchodów Milenium Chrztu Polski i pielgrzymek – duchowa stolica oporu wobec ateizacji.',
    entryId: 'milenium-1966',
  },
  {
    id: 'loc-zielona-gora',
    name: 'Wydarzenia zielonogórskie',
    city: 'Zielona Góra',
    lon: 15.51, lat: 51.94,
    type: 'opozycja', year: '1960',
    description: 'Spontaniczny protest mieszkańców w obronie Domu Katolickiego, krwawo spacyfikowany przez milicję.',
    entryId: 'zielonogorskie-1960',
  },
  {
    id: 'loc-lubin',
    name: 'Zbrodnia lubińska',
    city: 'Lubin',
    lon: 16.20, lat: 51.40,
    type: 'represje', year: '1982',
    description: 'ZOMO otworzyło ogień do demonstrantów w 2. rocznicę porozumień sierpniowych – zginęły trzy osoby.',
    entryId: 'lubin-1982',
  },
  {
    id: 'loc-augustow',
    name: 'Obława augustowska',
    city: 'Augustów',
    lon: 23.00, lat: 53.84,
    type: 'represje', year: '1945',
    description: '„Mały Katyń” – w obławie NKWD i komunistów zaginęło ok. 600 osób, których losu nie wyjaśniono.',
    entryId: 'oblawa-augustowska',
  },
];
