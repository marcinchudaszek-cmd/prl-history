// Historia mówiona.
//
// Uwaga zasadnicza: encyklopedia nie zawiera zmyślonych relacji. Wspomnienia
// świadka można albo nagrać, albo zacytować z archiwum — wymyślonemu
// „świadkowi” nie wolno przypisać niczego. Dlatego ta sekcja zawiera wyłącznie
// odesłania do istniejących zbiorów oraz narzędzie do spisania własnej relacji.

export interface ArchiwumRelacji {
  id: string;
  nazwa: string;
  instytucja: string;
  url: string;
  opis: string;
  zakres: string;
}

/** Zbiory sprawdzone pod kątem działania adresu. */
export const archiwaRelacji: ArchiwumRelacji[] = [
  {
    id: 'audiohistoria',
    nazwa: 'Audiohistoria',
    instytucja: 'Ośrodek KARTA i Dom Spotkań z Historią',
    url: 'https://audiohistoria.pl/',
    opis:
      'Największe polskie archiwum historii mówionej. Tysiące nagranych relacji, w tym wspomnienia ' +
      'z okresu PRL: pracy, mieszkania, szkoły, strajków i codziennego radzenia sobie.',
    zakres: 'XX wiek, z osobnymi kolekcjami o PRL',
  },
  {
    id: 'ecs',
    nazwa: 'Relacje świadków Solidarności',
    instytucja: 'Europejskie Centrum Solidarności',
    url: 'https://ecs.gda.pl/',
    opis:
      'Zbiory ECS obejmują relacje uczestników Sierpnia 1980, stanu wojennego i podziemia — ' +
      'nagrania, dokumenty i materiały wystawiennicze.',
    zakres: '1970–1989, Wybrzeże i Solidarność',
  },
  {
    id: 'karta',
    nazwa: 'Archiwum Ośrodka KARTA',
    instytucja: 'Fundacja Ośrodka KARTA',
    url: 'https://karta.org.pl/',
    opis:
      'Archiwum społeczne gromadzące relacje, dzienniki, listy i fotografie osób prywatnych. ' +
      'Stąd pochodzi znaczna część źródeł do historii życia codziennego w PRL.',
    zakres: 'archiwum społeczne, cały wiek XX',
  },
  {
    id: 'dsh',
    nazwa: 'Dom Spotkań z Historią',
    instytucja: 'Dom Spotkań z Historią w Warszawie',
    url: 'https://dsh.waw.pl/',
    opis:
      'Instytucja prowadząca nagrania relacji i spotkania ze świadkami historii, a także wystawy ' +
      'poświęcone codzienności PRL.',
    zakres: 'relacje, spotkania, wystawy',
  },
  {
    id: 'muzhp',
    nazwa: 'Muzeum Historii Polski',
    instytucja: 'Muzeum Historii Polski w Warszawie',
    url: 'https://muzhp.pl/',
    opis:
      'Zbiory i projekty dokumentacyjne muzeum, w tym materiały wideo z udziałem uczestników wydarzeń ' +
      'drugiej połowy XX wieku.',
    zakres: 'zbiory muzealne i materiały edukacyjne',
  },
];

/** Podpowiedzi dla kogoś, kto chce spisać albo nagrać relację. */
export interface BlokPytan {
  temat: string;
  ikona: string;
  pytania: string[];
}

export const pytaniaPomocnicze: BlokPytan[] = [
  {
    temat: 'Dom i codzienność',
    ikona: '🏠',
    pytania: [
      'Jak wyglądało mieszkanie, w którym się mieszkało — ile osób, ile pokoi, jak długo się na nie czekało?',
      'Co jadło się na co dzień, a co było tylko od święta?',
      'Jak zdobywało się rzeczy, których nie było w sklepie?',
      'Co robiło się z wolnym czasem, zanim pojawiła się telewizja kolorowa?',
    ],
  },
  {
    temat: 'Praca i pieniądze',
    ikona: '🔧',
    pytania: [
      'Jak wyglądał pierwszy dzień w pracy i jak się ją dostawało?',
      'Na co wystarczała pensja, a na co trzeba było oszczędzać latami?',
      'Czy w zakładzie coś „załatwiało się” poza oficjalnym obiegiem?',
      'Jak wyglądały czyny społeczne i pochody — z obowiązku czy z własnej woli?',
    ],
  },
  {
    temat: 'Kolejki i kartki',
    ikona: '🎟️',
    pytania: [
      'Jak wyglądało stanie w kolejce — kto stał, o której się zaczynało, jak wyglądały numerki?',
      'Co robiło się z kartkami, których nie dało się wykorzystać?',
      'Jaki towar był najtrudniejszy do zdobycia?',
      'Czy zdarzyło się wracać do domu z niczym po całym dniu?',
    ],
  },
  {
    temat: 'Wydarzenia',
    ikona: '📻',
    pytania: [
      'Jak zapamiętało się 13 grudnia 1981 roku — skąd przyszła wiadomość?',
      'Czy słuchało się Wolnej Europy i jak to wyglądało przy zagłuszaniu?',
      'Jak wyglądały wybory 4 czerwca 1989 roku z perspektywy własnej ulicy?',
      'Co zapamiętało się z pielgrzymek papieskich?',
    ],
  },
  {
    temat: 'Szkoła i młodość',
    ikona: '🎒',
    pytania: [
      'Czego uczono na lekcjach o najnowszej historii, a co mówiło się w domu?',
      'Jak wyglądały wagary, prywatki, pierwsze płyty i pierwsze zespoły?',
      'Czy należało się do harcerstwa, ZMS-u albo NZS-u i co to znaczyło?',
      'Jak wyglądały kolonie, obozy i wakacje?',
    ],
  },
];

/** Jak nagrywać relację, żeby miała wartość źródła. */
export const zasadyNagrywania: string[] = [
  'Zapytaj o zgodę na nagranie i na późniejsze udostępnienie — osobno o jedno i drugie.',
  'Zacznij od metryczki: imię i nazwisko, rok urodzenia, miejsce, data nagrania.',
  'Pytaj o konkret, nie o ocenę: „jak wyglądał ten dzień”, a nie „czy było lepiej”.',
  'Nie poprawiaj rozmówcy, nawet gdy data się nie zgadza — pomyłkę odnotuj osobno.',
  'Nie przerywaj ciszy. Najważniejsze zdania padają często po dłuższej pauzie.',
  'Zapisz, czego rozmówca nie chciał powiedzieć — to też jest informacja o epoce.',
];

export interface WlasnaRelacja {
  id: string;
  autor: string;
  rocznik: string;
  miejsce: string;
  temat: string;
  tresc: string;
  dodano: string;
}

export const KLUCZ_RELACJI = 'prl-encyklopedia-relacje';
