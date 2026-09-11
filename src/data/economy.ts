// Dane do infografik gospodarczych.
//
// Zasada: każda seria ma podane źródło i — jeśli liczby są przybliżone albo
// rozbieżne między opracowaniami — wyraźną uwagę. Wykres bez tej informacji
// sugeruje precyzję, której te dane nie mają.

export interface PunktSerii {
  rok: number;
  wartosc: number;
}

export interface Seria {
  id: string;
  tytul: string;
  podtytul: string;
  jednostka: string;
  dane: PunktSerii[];
  zrodlo: string;
  uwaga?: string;
}

/** Zadłużenie zagraniczne PRL w miliardach dolarów. */
export const zadluzenie: Seria = {
  id: 'zadluzenie',
  tytul: 'Zadłużenie zagraniczne',
  podtytul: 'Kredyty lat 70. i spirala, z której nie było wyjścia',
  jednostka: 'mld USD',
  dane: [
    { rok: 1970, wartosc: 1.1 },
    { rok: 1975, wartosc: 8.4 },
    { rok: 1980, wartosc: 24.1 },
    { rok: 1985, wartosc: 29.3 },
    { rok: 1989, wartosc: 40.8 },
  ],
  zrodlo: 'Opracowania historii gospodarczej PRL; dane przytaczane m.in. przez NBP i IPN',
  uwaga:
    'Wartości dla lat wybranych, nie dla każdego roku. Opracowania różnią się o kilka dziesiątych ' +
    'w zależności od sposobu przeliczania rubla transferowego i kredytów w walutach innych niż dolar.',
};

/** Roczna inflacja konsumencka. */
export const inflacja: Seria = {
  id: 'inflacja',
  tytul: 'Inflacja',
  podtytul: 'Od podwyżek sterowanych po hiperinflację ostatniego roku',
  jednostka: '% rocznie',
  dane: [
    { rok: 1980, wartosc: 9.4 },
    { rok: 1981, wartosc: 21.2 },
    { rok: 1982, wartosc: 100.8 },
    { rok: 1983, wartosc: 22.1 },
    { rok: 1984, wartosc: 15.0 },
    { rok: 1985, wartosc: 15.1 },
    { rok: 1986, wartosc: 17.8 },
    { rok: 1987, wartosc: 25.3 },
    { rok: 1988, wartosc: 60.2 },
    { rok: 1989, wartosc: 251.1 },
  ],
  zrodlo: 'Główny Urząd Statystyczny – wskaźnik cen towarów i usług konsumpcyjnych',
  uwaga:
    'To inflacja średnioroczna. Liczona grudzień do grudnia, inflacja 1989 roku sięgała około 640 procent — ' +
    'stąd rozbieżne liczby w różnych tekstach o tym samym roku.',
};

/** Produkt krajowy brutto na mieszkańca – Polska na tle Zachodu. */
export interface PunktPorownania {
  rok: number;
  polska: number;
  hiszpania: number;
  rfn: number;
}

export const pkbPorownanie = {
  tytul: 'Polska a Zachód',
  podtytul: 'PKB na mieszkańca: dystans, który narastał przez całą epokę',
  jednostka: 'dolary międzynarodowe z 1990 r.',
  dane: [
    { rok: 1950, polska: 2447, hiszpania: 2189, rfn: 3881 },
    { rok: 1960, polska: 3215, hiszpania: 3072, rfn: 7705 },
    { rok: 1970, polska: 4428, hiszpania: 6319, rfn: 10839 },
    { rok: 1980, polska: 5740, hiszpania: 7390, rfn: 14114 },
    { rok: 1989, polska: 5684, hiszpania: 9583, rfn: 16558 },
  ] as PunktPorownania[],
  zrodlo: 'Maddison Project Database – szacunki porównawcze PKB',
  uwaga:
    'Wartości przybliżone i przeliczone na wspólną walutę umowną, więc nadają się do porównania kierunku ' +
    'zmian, a nie do dokładnych rachunków. Istotne jest to, co widać: w 1950 roku Polska wyprzedzała Hiszpanię, ' +
    'a pod koniec PRL była za nią o blisko połowę.',
};

/** Podwyżki cen, które wywoływały skutki polityczne. */
export interface Podwyzka {
  data: string;
  rok: number;
  opis: string;
  skutek: string;
  entryId?: string;
}

export const podwyzki: Podwyzka[] = [
  {
    data: '12 grudnia 1970',
    rok: 1970,
    opis: 'Podwyżka cen żywności na dwa tygodnie przed świętami, średnio o kilkanaście procent.',
    skutek: 'Strajki i demonstracje na Wybrzeżu, strzelanie do robotników, upadek Gomułki.',
    entryId: 'grudzien-1970',
  },
  {
    data: '24 czerwca 1976',
    rok: 1976,
    opis: 'Zapowiedź podwyżki cen żywności — mięso miało zdrożeć o blisko 70 procent.',
    skutek: 'Protesty w Radomiu, Ursusie i Płocku, wycofanie podwyżki następnego dnia, represje wobec robotników.',
    entryId: 'czerwiec-1976',
  },
  {
    data: '1 lipca 1980',
    rok: 1980,
    opis: 'Ciche przeniesienie części mięsa do droższych sklepów „komercyjnych”.',
    skutek: 'Fala strajków, która w sierpniu doprowadziła do porozumień i powstania Solidarności.',
    entryId: 'sierpien-1980',
  },
  {
    data: '1 lutego 1982',
    rok: 1982,
    opis: 'Reforma cen w stanie wojennym: żywność drożeje średnio kilkukrotnie.',
    skutek: 'Protestów na skalę wcześniejszych nie było — wprowadzono ją przy zawieszonych swobodach i godzinie milicyjnej.',
    entryId: 'stan-wojenny',
  },
  {
    data: '1 sierpnia 1989',
    rok: 1989,
    opis: 'Uwolnienie cen żywności przez rząd Mieczysława Rakowskiego.',
    skutek: 'Ceny w kilka tygodni wzrosły wielokrotnie; koszt tej decyzji poniósł już rząd Tadeusza Mazowieckiego.',
    entryId: 'rakowski',
  },
];

/** Co i jak długo było na kartki. */
export interface Reglamentacja {
  towar: string;
  od: number;
  do: number;
  opis: string;
}

export const reglamentacja: Reglamentacja[] = [
  { towar: 'Cukier', od: 1976, do: 1985, opis: 'Pierwszy towar na kartki — od sierpnia 1976 roku.' },
  { towar: 'Mięso i wędliny', od: 1981, do: 1989, opis: 'Najdłużej reglamentowany towar, kartki zniesiono latem 1989.' },
  { towar: 'Masło i tłuszcze', od: 1981, do: 1989, opis: 'Przydział miesięczny zależny od grupy zaopatrzeniowej.' },
  { towar: 'Mąka, kasze, ryż', od: 1981, do: 1983, opis: 'Reglamentacja towarów sypkich w najgorszym okresie niedoboru.' },
  { towar: 'Proszek i mydło', od: 1981, do: 1985, opis: 'Środki czystości znikały ze sklepów równie szybko co żywność.' },
  { towar: 'Papierosy', od: 1981, do: 1985, opis: 'Kartki obejmowały też używki, co tworzyło osobny rynek wymiany.' },
  { towar: 'Alkohol', od: 1981, do: 1987, opis: 'Butelka wódki z kartki bywała walutą w rozliczeniach z fachowcem.' },
  { towar: 'Benzyna', od: 1981, do: 1988, opis: 'Przydział litrów zależny od pojemności silnika.' },
];

export const uwagaReglamentacja =
  'Daty końcowe różnią się między opracowaniami, bo kartki znoszono stopniowo i nie zawsze w całym kraju naraz. ' +
  'Wykres pokazuje okresy przybliżone.';
