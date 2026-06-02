export type Category =
  | 'polityka'
  | 'gospodarka'
  | 'kultura'
  | 'opozycja'
  | 'represje'
  | 'społeczeństwo'
  | 'wojsko'
  | 'osoby';

export type ResourceType = 'dokument' | 'nagranie' | 'zdjęcie' | 'akt' | 'publikacja' | 'film';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  source: string;
  description: string;
  year?: number;
  downloadable?: boolean;
}

export interface Entry {
  id: string;
  title: string;
  subtitle?: string;
  category: Category;
  tags?: string[];
  yearStart?: number;
  yearEnd?: number;
  summary?: string;
  shortDesc?: string;
  content: string;
  resources: Resource[];
  relatedIds: string[];
  image?: string;
  imageCaption?: string;
}

export const entries: Entry[] = [
  {
    id: 'stan-wojenny',
    title: 'Stan wojenny',
    subtitle: '13 grudnia 1981 – 22 lipca 1983',
    category: 'polityka',
    tags: ['Jaruzelski', 'WRON', 'Solidarność', 'represje', '1981'],
    yearStart: 1981,
    yearEnd: 1983,
    summary: 'Stan wojenny w Polsce – okres w historii PRL wprowadzony 13 grudnia 1981 przez gen. Wojciecha Jaruzelskiego, mający na celu zdławienie opozycji demokratycznej skupionej wokół "Solidarności".',
    content: `Stan wojenny w Polsce Ludowej został wprowadzony w nocy z 12 na 13 grudnia 1981 roku przez Radę Państwa na wniosek Rady Ministrów pod przewodnictwem gen. Wojciecha Jaruzelskiego. Powołano Wojskową Radę Ocalenia Narodowego (WRON).

Bezpośrednią przyczyną było narastające napięcie społeczno-polityczne po powstaniu NSZZ "Solidarność" w sierpniu 1980 roku oraz obawy władz przed ewentualną interwencją sowiecką.

**Główne działania:**
- Internowanie około 10 000 działaczy opozycji i "Solidarności"
- Zawieszenie działalności związków zawodowych i organizacji społecznych
- Wprowadzenie godziny milicyjnej (22:00–6:00)
- Militaryzacja strategicznych zakładów pracy
- Wprowadzenie cenzury prewencyjnej
- Zawieszenie działalności szkół wyższych

**Pacyfikacje i ofiary:**
Najtragiczniejsze zdarzenia miały miejsce w Kopalni Węgla Kamiennego "Wujek" w Katowicach, gdzie 16 grudnia 1981 roku milicja i wojsko otworzyły ogień do strajkujących górników. Zginęło 9 osób.

Stan wojenny był oficjalnie zawieszony 31 grudnia 1982 roku, a zniesiony 22 lipca 1983 roku.`,
    resources: [
      {
        id: 'sw-1',
        title: 'Dekret o stanie wojennym – oryginał dokumentu',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu19810290154',
        source: 'ISAP – Internetowy System Aktów Prawnych Sejmu RP',
        description: 'Oryginalny dekret Rady Państwa z dnia 12 grudnia 1981 r. o stanie wojennym',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'sw-2',
        title: 'Przemówienie gen. Jaruzelskiego – 13 grudnia 1981',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=OkmJ-PZMCj8',
        source: 'TVP Archiwum',
        description: 'Historyczne przemówienie telewizyjne generała Jaruzelskiego ogłaszające stan wojenny',
        year: 1981,
      },
      {
        id: 'sw-3',
        title: 'Archiwum stanu wojennego – IPN',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=stan%20wojenny',
        source: 'IPN',
        description: 'Specjalny serwis IPN poświęcony stanowi wojennemu z dokumentami, fotografiami i relacjami',
        downloadable: true,
      },
      {
        id: 'sw-4',
        title: 'Fotografie z okresu stanu wojennego',
        type: 'zdjęcie',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Fotografie%20okresu%20stanu',
        source: 'IPN Archiwum Fotograficzne',
        description: 'Kolekcja fotografii archiwalnych dokumentujących stan wojenny w Polsce',
        year: 1982,
      },
      {
        id: 'sw-5',
        title: '"Przesłuchanie" – film Ryszarda Bugajskiego (1982)',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Przes%C5%82uchanie%20Bugajski',
        source: 'NINATEKA – Filmoteka Narodowa',
        description: 'Kultowy film zakazany przez cenzurę PRL, dokumentujący metody bezpieki',
        year: 1982,
      },
    ],
    relatedIds: ['solidarnosc', 'jaruzelski', 'wujek', 'sbezpieczenstwa'],
  },

  {
    id: 'solidarnosc',
    title: 'NSZZ „Solidarność"',
    subtitle: 'Niezależny Samorządny Związek Zawodowy – od 1980',
    category: 'opozycja',
    tags: ['Wałęsa', 'strajki', 'Gdańsk', '1980', 'związki zawodowe'],
    yearStart: 1980,
    summary: 'NSZZ "Solidarność" – masowy ruch społeczny i związek zawodowy, który stał się największą opozycyjną siłą w dziejach PRL i krajów bloku wschodniego.',
    content: `NSZZ "Solidarność" powstał w wyniku fali strajków w sierpniu 1980 roku, zapoczątkowanej w Stoczni Gdańskiej im. Lenina. 31 sierpnia 1980 roku podpisano Porozumienia Gdańskie między Międzyzakładowym Komitetem Strajkowym (MKS) a rządem PRL.

**Porozumienia Sierpniowe:**
Trzy porozumienia zawarte w Gdańsku, Szczecinie i Jastrzębiu-Zdroju przyznały pracownikom prawo do tworzenia niezależnych związków zawodowych oraz prawo do strajku.

**Lech Wałęsa** – przywódca strajku i pierwszy przewodniczący "Solidarności", w 1983 roku otrzymał Pokojową Nagrodę Nobla.

**Zasięg:**
W szczytowym momencie "Solidarność" liczyła ok. **10 milionów członków**, co stanowiło około 1/3 dorosłej ludności Polski.

**I Krajowy Zjazd Delegatów (1981):**
Uchwalono program "Samorządna Rzeczpospolita" – wizję demokratycznej, samorządnej Polski.

Po wprowadzeniu stanu wojennego "Solidarność" działała w podziemiu jako Tymczasowa Komisja Koordynacyjna. Reaktywacja nastąpiła po obradach Okrągłego Stołu w 1989 roku.`,
    resources: [
      {
        id: 'sol-1',
        title: 'Porozumienia Sierpniowe – artykuł IPN',
        type: 'akt',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Porozumienia',
        source: 'Przystanek Historia / IPN',
        description: 'Pełny tekst Porozumień Gdańskich, Szczecińskich i Jastrzębskich z 1980 roku',
        year: 1980,
        downloadable: true,
      },
      {
        id: 'sol-2',
        title: '„Robotnicy ‘80” – film dokumentalny (cały)',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=hO-MRUjczzI',
        source: 'Filmoteka Narodowa / YouTube',
        description: 'Pełny film dokumentalny Chodakowskiego i Zajączkowskiego o strajku w Stoczni Gdańskiej (1980)',
        year: 1980,
      },
      {
        id: 'sol-3',
        title: 'Archiwum cyfrowe ECS – dokumenty i plakaty',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum dokumentów, plakatów, ulotek i wydawnictw podziemnych Solidarności',
        downloadable: true,
      },
      {
        id: 'sol-4',
        title: 'Europejskie Centrum Solidarności – zbiory cyfrowe',
        type: 'zdjęcie',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Kolekcja fotografii i dokumentów archiwalnych ECS w Gdańsku',
      },
    ],
    relatedIds: ['stan-wojenny', 'okragly-stol', 'sierpien-1980', 'walesa'],
  },

  {
    id: 'czerwiec-1956',
    title: 'Poznański Czerwiec 1956',
    subtitle: 'Pierwszy wielki bunt robotniczy w PRL',
    category: 'opozycja',
    tags: ['Poznań', 'strajk', 'robotnicy', 'represje', '1956', 'odwilż'],
    yearStart: 1956,
    yearEnd: 1956,
    summary: 'Poznański Czerwiec 1956 – masowy protest robotniczy w Poznaniu 28–29 czerwca 1956, brutalnie stłumiony przez wojsko i milicję. Pierwszy tak duży bunt społeczny w historii PRL.',
    content: `28 czerwca 1956 roku robotnicy Zakładów Przemysłu Metalowego im. Stalina (ZISPO, dziś Zakłady Przemysłu Metalowego H. Cegielski) wyszli na ulice Poznania pod hasłem **"Chleba i wolności"**.

**Przebieg wydarzeń:**
Około 100 000 osób wzięło udział w manifestacji. Demonstranci próbowali szturmować Urząd Bezpieczeństwa i więzienie. Władze odpowiedziały wysłaniem wojska i czołgów.

**Ofiary:**
- Zginęło co najmniej **57 osób** (według różnych źródeł do 74)
- Rannych zostało ponad 600 osób
- Aresztowano ponad 700 uczestników

**Następstwa:**
Bunt przyspieszył "odwilż" polityczną – dojście do władzy Władysława Gomułki w październiku 1956 roku ("Październik 1956") i pewną liberalizację systemu.

Władze przez lata ukrywały prawdziwe informacje o wydarzeniach. Rehabilitacja ofiar nastąpiła dopiero po 1989 roku.`,
    resources: [
      {
        id: 'cz56-1',
        title: 'Poznański Czerwiec 1956 – publikacja IPN (PDF)',
        type: 'akt',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/czerwiec-1956',
        source: 'IPN – Polskie Miesiące',
        description: 'Publikacja IPN „Poznański Czerwiec 1956 – pierwszy bunt społeczeństwa w PRL" z wyborem dokumentów',
        year: 1956,
        downloadable: true,
      },
      {
        id: 'cz56-2',
        title: 'Kronika filmowa z Poznania 1956',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=w0oY7Fkei88',
        source: 'Archiwum TVP',
        description: 'Archiwalne nagrania filmowe z wydarzeń poznańskich',
        year: 1956,
      },
      {
        id: 'cz56-3',
        title: 'Galeria zdjęć – Poznański Czerwiec 1956 (IPN)',
        type: 'zdjęcie',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/czerwiec-1956',
        source: 'IPN – Polskie Miesiące',
        description: 'Fotografie i dokumenty z Poznańskiego Czerwca 1956 w portalu IPN',
      },
    ],
    relatedIds: ['solidarnosc', 'gomulka', 'grudzien-1970'],
  },

  {
    id: 'grudzien-1970',
    title: 'Grudzień 1970',
    subtitle: 'Masakra robotników na Wybrzeżu',
    category: 'opozycja',
    tags: ['Gdynia', 'Gdańsk', 'Szczecin', 'robotnicy', 'strajk', '1970', 'Gomułka', 'Gierek'],
    yearStart: 1970,
    yearEnd: 1970,
    summary: 'Krwawe protesty robotnicze na polskim Wybrzeżu w grudniu 1970 roku, wywołane drastyczną podwyżką cen żywności. Wojsko i milicja otworzyły ogień do strajkujących. Zginęło co najmniej 45 osób.',
    content: `14 grudnia 1970 roku, po ogłoszeniu przez rząd drastycznych podwyżek cen żywności tuż przed Świętami Bożego Narodzenia, wybuchły protesty w Gdańsku, Gdyni, Szczecinie i Elblągu.

**Przebieg:**
- Robotnicy Stoczni Gdańskiej wyszli na ulice
- Podpalono siedzibę Komitetu Wojewódzkiego PZPR w Gdańsku
- 15–16 grudnia: wojsko i milicja otworzyły ogień na Wybrzeżu
- Szczególnie tragiczny był poranek 17 grudnia w Gdyni – żołnierze strzelali do wychodzących z pracy robotników przed stocznią

**Ofiary:**
Co najmniej **45 zabitych**, ponad 1 000 rannych, tysiące aresztowanych.

**Konsekwencje polityczne:**
Gomułka ustąpił ze stanowiska I sekretarza KC PZPR. Władzę przejął Edward Gierek obiecując "pomożecie?" – nowy kurs na konsumpcję i pożyczki zachodnie.

Przez lata władze ukrywały skalę represji. Ciała ofiar chowano potajemnie, rodzinom nie wydawano zwłok.`,
    resources: [
      {
        id: 'gr70-1',
        title: 'Grudzień 1970 – portal tematyczny IPN',
        type: 'dokument',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/grudzien-1970',
        source: 'IPN – Polskie Miesiące',
        description: 'Tajne dokumenty rządowe i wojskowe z okresu Grudnia 1970',
        year: 1970,
        downloadable: true,
      },
      {
        id: 'gr70-2',
        title: 'Nagrania TVP z Grudnia 1970',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=ryyPQ_Q9hGM',
        source: 'TVP Archiwum',
        description: 'Archiwalne materiały filmowe z protestów na Wybrzeżu',
        year: 1970,
      },
    ],
    relatedIds: ['czerwiec-1956', 'solidarnosc', 'gomulka', 'gierek'],
  },

  {
    id: 'okragly-stol',
    title: 'Obrady Okrągłego Stołu',
    subtitle: '6 lutego – 5 kwietnia 1989',
    category: 'polityka',
    tags: ['Wałęsa', 'Kiszczak', 'transformacja', '1989', 'demokratyzacja'],
    yearStart: 1989,
    yearEnd: 1989,
    summary: 'Negocjacje między władzami PRL a opozycją skupioną wokół "Solidarności", które doprowadziły do pokojowej transformacji ustrojowej Polski i pierwszych częściowo wolnych wyborów.',
    content: `Obrady Okrągłego Stołu toczyły się od 6 lutego do 5 kwietnia 1989 roku w Warszawie. Były kulminacją rozmów między stroną rządowo-koalicyjną (gen. Czesław Kiszczak) a opozycyjno-solidarnościową (Lech Wałęsa).

**Główne porozumienia:**
- Legalizacja NSZZ "Solidarność"
- Powołanie Senatu jako drugiej izby parlamentu
- Wprowadzenie urzędu Prezydenta
- Przeprowadzenie wyborów kontraktowych (4 czerwca 1989)
- Wolność słowa i mediów

**Wybory 4 czerwca 1989:**
"Solidarność" zdobyła 99 ze 100 mandatów senatorskich i wszystkie 161 wolnych mandatów w Sejmie.

**Rząd Mazowieckiego:**
12 września 1989 roku Tadeusz Mazowiecki został pierwszym niekomunistycznym premierem w bloku wschodnim.

Okrągły Stół był wzorem dla pokojowych transformacji w innych krajach bloku wschodniego.`,
    resources: [
      {
        id: 'os-1',
        title: 'Okrągły Stół – dokumenty i analiza (IPN)',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Kompletny zapis stenograficzny wszystkich posiedzeń Okrągłego Stołu',
        year: 1989,
        downloadable: true,
      },
      {
        id: 'os-2',
        title: 'Nagrania wideo z obrad – TVP Archiwum',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=nTEspBNM8Z0',
        source: 'TVP',
        description: 'Archiwalne nagrania telewizyjne z przebiegu obrad',
        year: 1989,
      },
      {
        id: 'os-3',
        title: 'Archiwum Okrągłego Stołu – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Okr%C4%85g%C5%82ego%20Sto%C5%82u',
        source: 'IPN',
        description: 'Dokumenty archiwalne IPN dotyczące negocjacji i kulisów Okrągłego Stołu',
        downloadable: true,
      },
    ],
    relatedIds: ['solidarnosc', 'stan-wojenny', 'pzpr', 'walesa', 'jaruzelski'],
  },

  {
    id: 'pzpr',
    title: 'PZPR',
    subtitle: 'Polska Zjednoczona Partia Robotnicza (1948–1990)',
    category: 'polityka',
    tags: ['komunizm', 'partia', 'władza', 'Bierut', 'Gomułka', 'Gierek', 'Jaruzelski'],
    yearStart: 1948,
    yearEnd: 1990,
    summary: 'PZPR – monopartia komunistyczna rządząca Polską Ludową przez 42 lata. Powstała z połączenia PPR i PPS w 1948 roku, rozwiązała się dobrowolnie w 1990 roku.',
    content: `Polska Zjednoczona Partia Robotnicza powstała 15 grudnia 1948 roku z połączenia Polskiej Partii Robotniczej (PPR) i Polskiej Partii Socjalistycznej (PPS). Połączenie to było w praktyce wchłonięciem PPS przez komunistyczną PPR.

**Pierwsi sekretarze KC PZPR:**
1. Bolesław Bierut (1948–1956)
2. Edward Ochab (1956)
3. Władysław Gomułka (1956–1970)
4. Edward Gierek (1970–1980)
5. Stanisław Kania (1980–1981)
6. Wojciech Jaruzelski (1981–1989)
7. Mieczysław Rakowski (1989–1990)

**Struktura władzy:**
PZPR kierowała wszystkimi dziedzinami życia państwowego przez Biuro Polityczne i Komitet Centralny. Aparat partyjny przenikał administrację państwową, wojsko, gospodarkę i kulturę.

**Rozwiązanie:**
Na XI (ostatnim) Zjeździe w styczniu 1990 roku PZPR rozwiązała się, a część członków powołała Socjaldemokrację Rzeczypospolitej Polskiej (SdRP).`,
    resources: [
      {
        id: 'pzpr-1',
        title: 'KC PZPR – zbiór archiwalny 1948–1990 (AAN)',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Opis zespołu archiwalnego KC PZPR w AAN – dokumenty organizacyjne, statuty, protokoły 1948–1990',
        downloadable: true,
      },
      {
        id: 'pzpr-2',
        title: 'Akta Biura Politycznego KC PZPR',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Biura%20Politycznego%20PZPR',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Zdigitalizowane dokumenty KC PZPR dostępne w systemie szukajwarchiwach.gov.pl',
        downloadable: true,
      },
    ],
    relatedIds: ['stan-wojenny', 'okragly-stol', 'gomulka', 'gierek', 'bierut', 'jaruzelski'],
  },

  {
    id: 'sbezpieczenstwa',
    title: 'Służba Bezpieczeństwa (SB)',
    subtitle: 'Aparat represji PRL',
    category: 'represje',
    tags: ['bezpieka', 'UB', 'inwigilacja', 'donosiciele', 'tajni współpracownicy'],
    yearStart: 1956,
    yearEnd: 1990,
    summary: 'Służba Bezpieczeństwa – tajna policja polityczna PRL, następczyni Urzędu Bezpieczeństwa (UB). Prowadziła inwigilację obywateli, werbowała tajnych współpracowników i stosowała represje wobec opozycji.',
    content: `Służba Bezpieczeństwa (SB) działała w strukturach Ministerstwa Spraw Wewnętrznych PRL od 1956 do 1990 roku. Była kontynuatorem zbrodniczego Urzędu Bezpieczeństwa (UB) z lat 1944–1956.

**Metody działania:**
- Werbowanie tajnych współpracowników (TW) – szacuje się, że przez cały okres PRL SB zarejestrowała ok. 500 000–700 000 informatorów
- Inwigilacja korespondencji i podsłuchy telefoniczne
- Obserwacja fizyczna (OT – obserwacja zewnętrzna)
- "Działania operacyjne" – nękanie psychiczne, prowokacje
- Brutalne przesłuchania i tortury w latach 40. i 50.

**Departament IV:**
Specjalna jednostka ds. zwalczania Kościoła katolickiego i duchowieństwa.

**Akta SB:**
Po 1989 roku dokumenty SB przejął IPN. Szacuje się, że zachowało się ok. 1,5 miliona teczek, wiele zostało celowo zniszczonych w 1989–1990 roku.

**Działania przeciw opozycji:**
SB prowadziła Sprawę Obiektową "Lato 80" (inwigilacja Solidarności), operacje przeciw KOR, ROPCiO i innym organizacjom.`,
    resources: [
      {
        id: 'sb-1',
        title: 'Katalog IPN – wyszukiwarka agentów i ofiar SB',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Katalog%20wyszukiwarka%20agent%C3%B3w',
        source: 'IPN – Katalog BIP',
        description: 'Oficjalna baza danych IPN z aktami funkcjonariuszy i tajnych współpracowników SB',
        downloadable: false,
      },
      {
        id: 'sb-2',
        title: 'Inwentarz akt SB – Archiwum IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Inwentarz%20akt',
        source: 'IPN',
        description: 'Zasób archiwalny IPN z aktami SB i UB',
        downloadable: true,
      },
      {
        id: 'sb-3',
        title: 'Film dokumentalny "Przesłuchanie" (1982)',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Przes%C5%82uchanie%20Bugajski',
        source: 'NINATEKA',
        description: 'Kultowy film Ryszarda Bugajskiego o metodach bezpieki',
        year: 1982,
      },
    ],
    relatedIds: ['stan-wojenny', 'represje-polityczne', 'pzpr', 'popieluszko'],
  },

  {
    id: 'sierpien-1980',
    title: 'Sierpień 1980 – Strajki',
    subtitle: 'Narodziny Solidarności w Stoczni Gdańskiej',
    category: 'opozycja',
    tags: ['strajk', 'Gdańsk', 'stocznia', 'Wałęsa', 'MKS', '21 postulatów'],
    yearStart: 1980,
    yearEnd: 1980,
    summary: 'Sierpień 1980 to miesiąc masowych strajków w Polsce, które doprowadziły do podpisania Porozumień Gdańskich i powstania NSZZ "Solidarność" – pierwszego niezależnego związku zawodowego w bloku wschodnim.',
    content: `14 sierpnia 1980 roku robotnicy Stoczni Gdańskiej im. Lenina rozpoczęli strajk pod przywództwem Lecha Wałęsy. Bezpośrednią przyczyną było zwolnienie z pracy Anny Walentynowicz.

**21 Postulatów MKS:**
Strajkujący sformułowali 21 postulatów, m.in.:
1. Wolne, niezależne związki zawodowe
2. Prawo do strajku
3. Wolność słowa i publikacji
4. Zwolnienie więźniów politycznych
5. Nadawanie Mszy Świętej przez radio w niedziele

**Porozumienia Gdańskie – 31 sierpnia 1980:**
Po 18 dniach strajku strona rządowa podpisała porozumienie. Dokument podpisał wicepremier Mieczysław Jagielski i Lech Wałęsa.

**Zasięg strajków:**
Do MKS przyłączyło się ponad 700 zakładów pracy z całego Wybrzeża. Strajki ogarnęły cały kraj.`,
    resources: [
      {
        id: 'sier-1',
        title: '21 Postulatów – oryginalny dokument',
        type: 'akt',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Oryginalny tekst 21 postulatów MKS zapisanych na tablicy w Stoczni Gdańskiej (Pomnik UNESCO)',
        year: 1980,
        downloadable: true,
      },
      {
        id: 'sier-2',
        title: 'Strajk w Stoczni Gdańskiej ’80 – nagrania',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=7sAvg2e48Rg',
        source: 'TVP / Archiwum ECS',
        description: 'Archiwalne nagrania z przebiegu strajku w Stoczni Gdańskiej',
        year: 1980,
      },
      {
        id: 'sier-3',
        title: '„Robotnicy ’80” – pełny film dokumentalny',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=hO-MRUjczzI',
        source: 'NINATEKA',
        description: 'Dokument filmowy nakręcony w trakcie strajku przez Andrzeja Chodakowskiego i Andrzeja Zajączkowskiego',
        year: 1980,
      },
    ],
    relatedIds: ['solidarnosc', 'stan-wojenny', 'grudzien-1970', 'walesa'],
  },

  {
    id: 'gospodarka-prl',
    title: 'Gospodarka PRL',
    subtitle: 'Centralnie planowana ekonomia 1944–1989',
    category: 'gospodarka',
    tags: ['plan', 'kartki', 'niedobory', 'industrializacja', 'dług zagraniczny'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Gospodarka PRL oparta była na centralnym planowaniu i własności państwowej. Charakteryzowała się cyklami inwestycji, niedoborów towarowych, reglamentacji i zadłużenia zagranicznego.',
    content: `Gospodarka PRL opierała się na modelu sowieckim: własności państwowej środków produkcji, centralnym planowaniu i prymacie przemysłu ciężkiego.

**Główne okresy gospodarcze:**

**Plan 3-letni (1947–1949):** Odbudowa zniszczeń wojennych, nacjonalizacja przemysłu.

**Plan 6-letni (1950–1955):** Forsowna industrializacja na wzór stalinowski. Budowa Nowej Huty, Nowych Tychów, Nowej Soli. Drastyczny spadek poziomu życia.

**Gierkowska dekada (1970–1980):** Pożyczki z Zachodu, import technologii, poprawa poziomu życia. Zakończona kryzysem zadłużenia.

**Reglamentacja towarów:**
Kartki na żywność i artykuły przemysłowe wprowadzano kilkakrotnie:
- Cukier (od 1976)
- Mięso (1981–1989)
- Masło, benzyna, papierosy, alkohol, buty...

**Dług zagraniczny:**
W 1989 roku dług zewnętrzny PRL wynosił ok. **42 miliardy dolarów**.

**Czarny rynek i "kombinowanie":**
Powszechne zjawisko społeczne. "Dolar" i towary z Pewexu były twardą walutą wymiany.`,
    resources: [
      {
        id: 'gosp-1',
        title: 'Plany gospodarcze PRL – GUS Archiwum',
        type: 'dokument',
        url: 'https://stat.gov.pl/',
        source: 'Główny Urząd Statystyczny',
        description: 'Archiwalne roczniki statystyczne GUS z okresu PRL',
        downloadable: true,
      },
      {
        id: 'gosp-2',
        title: '„Kolejka – symbol późnego PRL" – artykuł IPN',
        type: 'zdjęcie',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=gospodarka%20prl',
        source: 'IPN Fotografie',
        description: 'Archiwalne fotografie ilustrujące codzienne trudności życia w PRL',
      },
      {
        id: 'gosp-3',
        title: 'KC PZPR – raporty gospodarcze 1981 (AAN)',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Zbiór archiwalny KC PZPR w AAN – tajne raporty gospodarcze z lat 80.',
        downloadable: true,
      },
    ],
    relatedIds: ['pzpr', 'stan-wojenny', 'gierek', 'nowa-huta'],
  },

  {
    id: 'kultura-prl',
    title: 'Kultura i sztuka w PRL',
    subtitle: 'Socrealizm, cenzura i drugie życie kultury',
    category: 'kultura',
    tags: ['socrealizm', 'cenzura', 'GUKPPiW', 'drugi obieg', 'samizdat'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Kultura PRL to pasmo napięć między ideologicznym nakazem socrealizmu a wolną twórczością. Cenzura, "drugi obieg" wydawniczy i kontestacja artystyczna współistniały przez 45 lat.',
    content: `**Socrealizm (1949–1955):**
Obowiązująca doktryna estetyczna nakazywała tworzenie sztuki "realistycznej w formie, socjalistycznej w treści". Dotyczyła literatury, malarstwa, architektury (PKiN), muzyki i filmu.

**Cenzura – GUKPPiW:**
Główny Urząd Kontroli Prasy, Publikacji i Widowisk kontrolował całość życia kulturalnego. Każda publikacja wymagała imprimatur cenzora. Instytut Literacki w Paryżu (Kultura Jerzego Giedroycia) był głównym wydawcą emigracyjnym.

**Drugi obieg:**
Od połowy lat 70. rozwinął się potężny ruch wydawniczy poza cenzurą:
- NOWA (Niezależna Oficyna Wydawnicza)
- "Zapis", "Puls", "Res Publica"
- Podziemne nagrania i kasety magnetofonowe

**Kino PRL:**
"Szkoła polska" (Wajda, Munk, Kawalerowicz), kino moralnego niepokoju lat 70. (Zanussi, Holland, Kieślowski). Wiele filmów było zakazanych lub "półkowych".

**Teatr:**
Jerzy Grotowski, Tadeusz Kantor (Teatr Cricot 2) – artyści o światowej sławie działający w PRL.`,
    resources: [
      {
        id: 'kult-1',
        title: 'Akta GUKPPiW – dokumenty cenzury',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=GUKPPiW%20cenzury',
        source: 'Archiwum Akt Nowych',
        description: 'Archiwa Głównego Urzędu Kontroli Prasy z PRL – decyzje cenzorskie',
        downloadable: true,
      },
      {
        id: 'kult-2',
        title: 'Czarna księga cenzury PRL – "Zapis" 1977',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/szukaj/?q=czarna+ksi%C4%99ga+cenzury',
        source: 'Wolne Lektury',
        description: 'Słynny dokument demaskujący działania cenzury, przemycony na Zachód',
        year: 1977,
        downloadable: true,
      },
      {
        id: 'kult-3',
        title: 'NINATEKA – Archiwum Filmoteki Narodowej',
        type: 'film',
        url: 'https://ninateka.pl/',
        source: 'Filmoteka Narodowa – Instytut Audiowizualny',
        description: 'Największe polskie archiwum filmów, dokumentów i nagrań audio z PRL',
      },
      {
        id: 'kult-4',
        title: 'Plakaty PRL – kolekcja cyfrowa',
        type: 'zdjęcie',
        url: 'https://www.postermuseum.pl/',
        source: 'Muzeum Plakatu w Wilanowie',
        description: 'Cyfrowe archiwum plakatów z okresu PRL – propaganda, kultura, film',
      },
    ],
    relatedIds: ['pzpr', 'sbezpieczenstwa', 'solidarnosc'],
  },

  {
    id: 'kosciol-prl',
    title: 'Kościół katolicki w PRL',
    subtitle: 'Bastion oporu wobec komunizmu',
    category: 'społeczeństwo',
    tags: ['Wyszyński', 'Jan Paweł II', 'pielgrzymki', 'religia', 'opór'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Kościół katolicki był jedyną niezależną instytucją masową w PRL i głównym bastionem oporu społecznego wobec komunizmu. Pielgrzymki Jana Pawła II były przełomem w dziejach opozycji.',
    content: `Kościół katolicki w PRL zachował znaczną niezależność instytucjonalną, choć władze komunistyczne prowadziły z nim permanentną walkę.

**Prymas Stefan Wyszyński:**
"Prymas Tysiąclecia" (1948–1981) był symbolem oporu Kościoła. Uwięziony w latach 1953–1956. Jego polityka "non possumus" wobec komunistycznych żądań stała się legendą.

**Pielgrzymki Jana Pawła II:**
Wybór Karola Wojtyły na papieża 16 października 1978 roku był szokiem dla władz PRL.
- **I pielgrzymka (1979):** "Niech zstąpi Duch Twój i odnowi oblicze ziemi. Tej ziemi!" – słowa homilii na Placu Zwycięstwa, które stały się hasłem oporu
- **II pielgrzymka (1983):** W czasie stanu wojennego, papież spotkał się z Wałęsą
- **III pielgrzymka (1987):** "Trzeba wymagać od siebie, choćby inni od siebie nie wymagali"

**Parafia jako centrum opozycji:**
Kościoły stanowiły przestrzeń dla niezależnej kultury, edukacji i spotkań opozycji. Słynna "Msza za Ojczyznę" o. Jerzego Popiełuszki w Warszawie.

**Ks. Jerzy Popiełuszko:**
Zamordowany 19 października 1984 roku przez funkcjonariuszy SB. Jego śmierć wywołała ogromne poruszenie społeczne.`,
    resources: [
      {
        id: 'kosc-1',
        title: 'Jan Paweł II – pielgrzymka 1979, homilia Warszawa',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Jan+Pawe%C5%82+II+pielgrzymka+1979+homilia+Warszawa',
        source: 'TVP Archiwum / Vatican Media',
        description: 'Archiwalne nagranie homilii Jana Pawła II na Placu Zwycięstwa w 1979 roku',
        year: 1979,
      },
      {
        id: 'kosc-2',
        title: 'Akta SB dotyczące inwigilacji Kościoła',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=inwigilacji%20Ko%C5%9Bcio%C5%82a',
        source: 'IPN',
        description: 'Dokumenty Departamentu IV SB (do spraw walki z Kościołem)',
        downloadable: true,
      },
    ],
    relatedIds: ['solidarnosc', 'stan-wojenny', 'sbezpieczenstwa', 'popieluszko'],
  },

  {
    id: 'nowa-huta',
    title: 'Nowa Huta',
    subtitle: 'Socjalistyczne miasto bez kościoła',
    category: 'społeczeństwo',
    tags: ['urbanistyka', 'socrealizm', 'Kraków', 'stal', 'Huta im. Lenina'],
    yearStart: 1949,
    summary: 'Nowa Huta – wzorcowe miasto socjalistyczne wybudowane od podstaw przy Krakowie, siedziba Huty im. Lenina. Symbol industrializacji PRL, który z czasem stał się centrum oporu robotniczego.',
    content: `Nowa Huta powstała od podstaw od 1949 roku jako "socjalistyczne miasto przyszłości" – projekt urbanistyczny realizowany zgodnie z zasadami socrealizmu.

**Huta im. Lenina (dziś ArcelorMittal):**
Kombinat metalurgiczny był sercem Nowej Huty. W szczytowym okresie zatrudniał ok. 40 000 pracowników.

**Projekt urbanistyczny:**
Centralne Muzeum i aleja Róż (dziś aleja Jana Pawła II) tworzyły oś reprezentacyjną. Architektura wzorowana na sowieckim realizmie socjalistycznym.

**Nowa Huta bez kościoła:**
Władze celowo nie uwzględniły kościoła w projekcie. Walka parafian o budowę kościoła trwała 30 lat (1956–1977). Kościół Matki Bożej Królowej Polski ("Arka Pana") wyświęcono w 1977 roku.

**Rola w opozycji:**
Robotnicy Nowej Huty aktywnie uczestniczyli w strajkach 1980 roku i strukturach "Solidarności". Huta była jednym z kluczowych obiektów objętych stanem wojennym.`,
    resources: [
      {
        id: 'nh-1',
        title: 'Kronika filmowa – budowa Nowej Huty 1949-1955',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Kroniki filmowe dokumentujące budowę Nowej Huty',
        year: 1952,
      },
      {
        id: 'nh-2',
        title: 'Fotografie archiwalne Nowej Huty',
        type: 'zdjęcie',
        url: 'https://www.mhk.pl/',
        source: 'Muzeum Historyczne Krakowa – Oddział Nowa Huta',
        description: 'Archiwalne fotografie z historii Nowej Huty',
      },
    ],
    relatedIds: ['gospodarka-prl', 'kultura-prl', 'solidarnosc'],
  },

  {
    id: 'gomulka',
    title: 'Władysław Gomułka',
    subtitle: 'I sekretarz KC PZPR 1956–1970',
    category: 'osoby',
    tags: ['Gomułka', 'PZPR', 'październik 1956', 'odwilż'],
    yearStart: 1905,
    yearEnd: 1982,
    summary: 'Władysław Gomułka – komunistyczny polityk, I sekretarz KC PZPR w latach 1956–1970. Symbol "odwilży" po epoce stalinowskiej, a zarazem człowiek odpowiedzialny za masakrę robotników w Grudniu 1970 i antysemicką kampanię Marca 1968.',
    content: `Władysław Gomułka (ur. 6 lutego 1905 – zm. 1 września 1982) był jednym z czołowych działaczy komunistycznych w Polsce.

**Przed 1956 rokiem:**
W latach 1943–1948 I sekretarz PPR. Aresztowany w 1951 roku jako "odchyleniowiec prawicowo-nacjonalistyczny" – zarzucano mu zbyt małe podporządkowanie Stalinowi. Zwolniony po śmierci Stalina.

**Październik 1956:**
Po Poznańskim Czerwcu i destalinizacji Chruszczowa Gomułka wrócił do władzy jako symbol "polskiej drogi do socjalizmu". Entuzjastycznie witany przez społeczeństwo. Ograniczył kolektywizację rolnictwa, złagodził stosunki z Kościołem i uwolnił prymasa Wyszyńskiego.

**Marzec 1968:**
Tolerował – a wg części historyków inspirował – antysemicką kampanię po studenckich protestach. Około 13 000 Polaków żydowskiego pochodzenia zmuszono do emigracji.

**Grudzień 1970:**
Wydał rozkaz użycia siły wobec strajkujących robotników na Wybrzeżu. Co najmniej 45 osób zginęło od kul milicji i wojska. Gomułka ustąpił ze stanowiska kilka dni po masakrze.

**Ocena historyczna:**
Postać kontrowersyjna – architekt względnej liberalizacji po stalinizmie, ale też odpowiedzialny za represje Marca 1968 i Grudnia 1970.`,
    resources: [
      {
        id: 'gom-1',
        title: 'Przemówienie Gomułki – Październik 1956',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=przem%C3%B3wienie+Gomu%C5%82ki+1956+Plac+Defilad',
        source: 'TVP Archiwum',
        description: 'Archiwalne nagranie historycznego przemówienia Gomułki na Placu Defilad w październiku 1956',
        year: 1956,
      },
      {
        id: 'gom-2',
        title: 'Teczka Gomułki – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Teczka%20Gomu%C5%82ki',
        source: 'IPN',
        description: 'Dokumenty dotyczące Władysława Gomułki w zasobach Instytutu Pamięci Narodowej',
        downloadable: true,
      },
      {
        id: 'gom-3',
        title: 'Pamiętniki Gomułki – AAN',
        type: 'publikacja',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Materiały wspomnieniowe i dokumenty osobiste Gomułki',
        downloadable: true,
      },
    ],
    relatedIds: ['pzpr', 'czerwiec-1956', 'grudzien-1970', 'marzec-1968'],
  },

  {
    id: 'gierek',
    title: 'Edward Gierek',
    subtitle: 'I sekretarz KC PZPR 1970–1980',
    category: 'osoby',
    tags: ['Gierek', 'dekada Gierka', 'dług', 'konsumpcja', 'modernizacja'],
    yearStart: 1913,
    yearEnd: 2001,
    summary: 'Edward Gierek – I sekretarz KC PZPR w latach 1970–1980. Twórca polityki "drugiej Polski" opartej na zachodnich kredytach i modernizacji. Jego dekada skończyła się kryzysem zadłużenia i narodzinami Solidarności.',
    content: `Edward Gierek (ur. 6 stycznia 1913 – zm. 29 lipca 2001) doszedł do władzy po Grudniu 1970, zastępując skompromitowanego Gomułkę.

**"Pomożecie?":**
Przejmując władzę, Gierek pojechał do strajkujących stoczni i zakładów pytając robotników: "Pomożecie?". Ten gest jednał mu społeczną sympatię na początku rządów.

**Dekada Gierka (1970–1980):**
Gierek realizował ambitny program modernizacji Polski finansowany zachodnimi kredytami:
- Budowa Trasy Łazienkowskiej, Dworca Centralnego, osiedli "bloków"
- Import licencji i technologii (Fiat 126p – "maluch", leki, elektronika)
- Wzrost płac realnych i poprawa zaopatrzenia sklepów
- Budowa hut, elektrowni i zakładów przemysłowych

**Spirala zadłużenia:**
Zaciągane kredyty nie były efektywnie inwestowane. W 1980 roku dług zagraniczny przekraczał **20 miliardów dolarów**. Konieczne podwyżki cen wywołały strajki sierpniowe.

**Upadek:**
W sierpniu 1980 roku, podczas strajków, Gierek był hospitalizowany. 6 września 1980 roku Biuro Polityczne odwołało go ze stanowiska. Po 1981 roku internowany przez Jaruzelskiego.`,
    resources: [
      {
        id: 'gie-1',
        title: 'KC PZPR – zbiór archiwalny (AAN), lata 70.',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Zbiór archiwalny KC PZPR w AAN – protokoły Biura Politycznego i raporty gospodarcze z okresu rządów Gierka',
        downloadable: true,
      },
      {
        id: 'gie-2',
        title: 'Kroniki filmowe dekady Gierka',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20dekady',
        source: 'NINATEKA',
        description: 'Archiwalne kroniki filmowe dokumentujące "dekadę sukcesu" Edwarda Gierka',
      },
      {
        id: 'gie-3',
        title: 'Fotografie z epoki Gierka – IPN',
        type: 'zdjęcie',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Fotografie%20epoki%20Gierka',
        source: 'IPN',
        description: 'Zbiór fotografii archiwalnych z lat 70. – budowy, wizyty, życie codzienne',
      },
    ],
    relatedIds: ['pzpr', 'grudzien-1970', 'gospodarka-prl', 'sierpien-1980'],
  },

  {
    id: 'jaruzelski',
    title: 'Wojciech Jaruzelski',
    subtitle: 'Generał, I sekretarz PZPR, Prezydent PRL',
    category: 'osoby',
    tags: ['Jaruzelski', 'stan wojenny', 'WRON', 'generał', 'prezydent'],
    yearStart: 1923,
    yearEnd: 2014,
    summary: 'Wojciech Jaruzelski – generał i polityk, autor stanu wojennego z 13 grudnia 1981, ostatni I sekretarz KC PZPR i pierwszy Prezydent RP po 1989 roku. Postać kontrowersyjna – przez jednych oceniana jako zdrajca, przez innych jako pragmatyczny mąż stanu.',
    content: `Wojciech Witold Jaruzelski (ur. 6 lipca 1923 – zm. 25 maja 2014) był najważniejszą postacią późnego PRL.

**Kariera wojskowa:**
Absolwent Akademii Wojskowej w Rembertowie. Szybka kariera – generał brygady w wieku 33 lat, Minister Obrony Narodowej (1968–1983).

**Droga do władzy:**
- 1981: Premier PRL (luty)
- 1981: I sekretarz KC PZPR (październik)
- 13 XII 1981: Ogłoszenie stanu wojennego i powołanie WRON

**Stan wojenny – motywacje:**
Jaruzelski twierdził, że stan wojenny był "mniejszym złem" – alternatywą byłaby interwencja sowiecka. Historycy są podzieleni: część podziela tę ocenę, inni uważają ją za pretekst dla utrzymania władzy komunistów. Dokumenty z archiwów radzieckich wskazują, że ZSRR nie planował interwencji.

**Okrągły Stół i transformacja:**
Jaruzelski był jednym z architektów pokojowej transformacji w 1989 roku. Jako Prezydent PRL (1989–1990) przewodniczył przekazaniu władzy.

**Procesy i oskarżenia:**
W 2008 roku prokuratura IPN oskarżyła Jaruzelskiego o wydanie bezprawnych rozkazów w stanie wojennym. Procesy nie zakończyły się wyrokiem ze względu na stan zdrowia oskarżonego.`,
    resources: [
      {
        id: 'jar-1',
        title: 'Przemówienie Jaruzelskiego – 13 grudnia 1981',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=OkmJ-PZMCj8',
        source: 'TVP Archiwum',
        description: 'Oryginalne przemówienie telewizyjne generała ogłaszające stan wojenny',
        year: 1981,
      },
      {
        id: 'jar-2',
        title: 'Teczka Jaruzelskiego – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Teczka%20Jaruzelskiego',
        source: 'IPN',
        description: 'Dokumenty wojskowe i partyjne Jaruzelskiego w zasobach IPN',
        downloadable: true,
      },
      {
        id: 'jar-3',
        title: '"Stan wojenny – dlaczego?" – dokumenty i komentarze',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Stan%20wojenny%20dlaczego',
        source: 'IPN Wydawnictwo',
        description: 'Naukowa analiza przesłanek i skutków stanu wojennego oparta na odtajnionych dokumentach',
        downloadable: true,
      },
    ],
    relatedIds: ['stan-wojenny', 'pzpr', 'okragly-stol', 'solidarnosc'],
  },

  {
    id: 'walesa',
    title: 'Lech Wałęsa',
    subtitle: 'Przywódca Solidarności, Noblista, Prezydent RP',
    category: 'osoby',
    tags: ['Wałęsa', 'Solidarność', 'Nobel', 'stocznia', 'Gdańsk', 'Prezydent'],
    yearStart: 1943,
    summary: 'Lech Wałęsa – elektryk z Gdańska, który stał się symbolem pokojowego oporu przeciw komunizmowi. Przywódca Solidarności, laureat Pokojowej Nagrody Nobla (1983) i Prezydent RP (1990–1995).',
    content: `Lech Wałęsa (ur. 29 września 1943 w Popowie) wyrósł na najważniejszą postać polskiej opozycji demokratycznej i jeden z symboli pokojowych przemian w Europie Wschodniej.

**Droga do przywództwa:**
Pracownik Stoczni Gdańskiej im. Lenina, zwolniony za działalność związkową w 1976 roku. Działał w Wolnych Związkach Zawodowych Wybrzeża i KOR.

**Sierpień 1980:**
14 sierpnia 1980 roku przeskoczył przez ogrodzenie Stoczni Gdańskiej i stanął na czele strajku. Jako przewodniczący MKS podpisał Porozumienia Gdańskie 31 sierpnia 1980 roku.

**Przewodniczący Solidarności:**
Do stanu wojennego przewodził związkowi liczącemu 10 milionów członków. Po 13 grudnia 1981 roku internowany przez blisko rok.

**Pokojowa Nagroda Nobla (1983):**
Przyznana podczas stanu wojennego. Wałęsa nie pojechał do Oslo w obawie przed brakiem możliwości powrotu. Nagrodę odebrała jego żona Danuta.

**Okrągły Stół 1989:**
Przewodniczył stronie solidarnościowej w obradach zakończonych pokojową transformacją ustrojową.

**Prezydent RP (1990–1995):**
Wybrany w pierwszych wolnych wyborach prezydenckich. Jego prezydentura była naznaczona sporami z parlamentem i mediami.`,
    resources: [
      {
        id: 'wal-1',
        title: 'Przemówienie Wałęsy – podpisanie Porozumień Gdańskich',
        type: 'nagranie',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Historyczne nagranie podpisania Porozumień Gdańskich przez Lecha Wałęsę',
        year: 1980,
      },
      {
        id: 'wal-2',
        title: 'Akta SB dotyczące inwigilacji Wałęsy',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=inwigilacji%20Wa%C5%82%C4%99sy',
        source: 'IPN',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące obserwacji i inwigilacji Wałęsy',
        downloadable: true,
      },
      {
        id: 'wal-3',
        title: 'Wykład noblowski Lecha Wałęsy (1983)',
        type: 'dokument',
        url: 'https://www.nobelprize.org/prizes/peace/1983/walesa/lecture/',
        source: 'Nobel Prize Foundation',
        description: 'Tekst wykładu noblowskiego odczytanego przez Danutę Wałęsę w Oslo',
        year: 1983,
        downloadable: true,
      },
    ],
    relatedIds: ['solidarnosc', 'sierpien-1980', 'stan-wojenny', 'okragly-stol'],
  },

  {
    id: 'bierut',
    title: 'Bolesław Bierut',
    subtitle: 'Prezydent i I sekretarz PZPR (1892–1956)',
    category: 'osoby',
    tags: ['Bierut', 'stalinizm', 'terror', 'PKWN', 'Konstytucja 1952'],
    yearStart: 1892,
    yearEnd: 1956,
    summary: 'Bolesław Bierut – stalinowski przywódca Polski Ludowej w najciemniejszym okresie jej dziejów (1948–1956). Prezydent KRN, a następnie I sekretarz PZPR. Pod jego rządami przeprowadzono masowe represje i procesy polityczne.',
    content: `Bolesław Bierut (ur. 18 kwietnia 1892 – zm. 12 marca 1956 w Moskwie) był agentem sowieckim i absolutnym władcą stalinowskiej Polski.

**Droga do władzy:**
Działacz Komunistycznej Partii Polski, agent NKWD/Komintern. Po 1944 roku przewodniczący Krajowej Rady Narodowej, następnie Prezydent RP (1947–1952) z nadania komunistów.

**Stalinizacja Polski (1948–1956):**
- Likwidacja opozycji – sfałszowane wybory 1947 roku
- Masowe aresztowania i procesy polityczne (generał "Nil" August Fieldorf, rtm. Witold Pilecki i setki innych)
- Wymuszanie zeznań przez tortury w więzieniach UB
- Sowietyzacja gospodarki, kultury, wojska
- Uchwalenie stalinowskiej Konstytucji PRL (1952)

**Konstytucja 1952:**
Ustawa zasadnicza wzorowana na sowieckiej. Proklamowała "dyktaturę proletariatu" i podporządkowała Polskę modelowi radzieckiemu.

**Śmierć w Moskwie:**
Bierut uczestniczył w XX Zjeździe KPZR, gdzie Chruszczow wygłosił tajny referat o zbrodniach Stalina. Zmarł 12 marca 1956 roku w Moskwie – okoliczności śmierci nigdy nie zostały w pełni wyjaśnione.`,
    resources: [
      {
        id: 'bie-1',
        title: 'Akta Bieruta – IPN i AAN',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Bieruta%20AAN',
        source: 'Archiwum Akt Nowych',
        description: 'Dokumenty osobiste i polityczne Bieruta w polskich archiwach państwowych',
        downloadable: true,
      },
      {
        id: 'bie-2',
        title: 'Konstytucja PRL z 22 lipca 1952 roku – ISAP',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19520330232',
        source: 'Internetowy System Aktów Prawnych – Sejm RP',
        description: 'Oryginalny tekst stalinowskiej Konstytucji Polskiej Rzeczpospolitej Ludowej',
        year: 1952,
        downloadable: true,
      },
      {
        id: 'bie-3',
        title: 'Zbrodnie stalinizmu w Polsce – dokumentacja IPN',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Zbrodnie%20stalinizmu%20Polsce',
        source: 'IPN',
        description: 'Zestawienie najważniejszych zbrodni systemu stalinowskiego w Polsce',
        downloadable: true,
      },
    ],
    relatedIds: ['pzpr', 'represje-polityczne', 'gomulka'],
  },

  {
    id: 'kor',
    title: 'Komitet Obrony Robotników (KOR)',
    subtitle: 'Pierwsza zorganizowana opozycja demokratyczna w PRL',
    category: 'opozycja',
    tags: ['KOR', 'Kuroń', 'Michnik', 'opozycja', 'Ursus', 'Radom', '1976'],
    yearStart: 1976,
    yearEnd: 1981,
    summary: 'KOR – Komitet Obrony Robotników założony w 1976 roku przez intelektualistów w obronie represjonowanych robotników z Radomia i Ursusa. Pierwsza jawna, zorganizowana opozycja w PRL, prekursor "Solidarności".',
    content: `Komitet Obrony Robotników powstał 23 września 1976 roku jako odpowiedź na brutalne represje wobec uczestników protestów z Radomia i Ursusa (Czerwiec 1976).

**Założyciele:**
Wśród 14 założycieli znaleźli się: Jacek Kuroń, Antoni Macierewicz, Piotr Naimski, Jan Józef Lipski, Edward Lipiński, Aniela Steinsbergowa i inni.

**Cele i metody:**
- Jawna, legalna działalność (w odróżnieniu od konspiracyjnych metod z lat wcześniejszych)
- Obrona prawna i materialna represjonowanych robotników
- Dokumentowanie i ujawnianie naruszeń praw człowieka
- Wydawanie biuletynu "Komunikat KOR" i biura porad prawnych

**Znaczenie:**
KOR przełamał barierę między inteligencją a robotnikami. Jacek Kuroń pisał: "Nie pal komitetów, zakładaj własne". Model jawnej opozycji KOR był wzorem dla całego środowiska demokratycznego.

**Przekształcenie:**
W 1977 roku KOR przekształcił się w Komitet Samoobrony Społecznej "KOR" (KSS-KOR) rozszerzając zakres działań. W 1981 roku, po legalizacji Solidarności, KOR rozwiązał się – uznał, że cel został osiągnięty.

**Wpływ na Solidarność:**
Wielu działaczy KOR weszło do struktur doradczych NSZZ "Solidarność" (Kuroń, Michnik, Geremek).`,
    resources: [
      {
        id: 'kor-1',
        title: 'Komitet Obrony Robotników – historia i dokumenty (IPN)',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Komitet%20Obrony%20Robotnik%C3%B3w',
        source: 'IPN – Historia z IPN',
        description: 'Oryginalny apel założycielski KOR z 23 września 1976 roku',
        year: 1976,
        downloadable: true,
      },
      {
        id: 'kor-2',
        title: 'Komunikaty KOR – zeskanowane egzemplarze',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Komunikaty%20KOR%20zeskanowane',
        source: 'Polona – Biblioteka Narodowa',
        description: 'Cyfrowe kopie biuletynu KOR wydawanego w drugim obiegu',
        downloadable: true,
      },
      {
        id: 'kor-3',
        title: 'Teczki SB dotyczące działaczy KOR',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Teczki%20dzia%C5%82aczy%20KOR',
        source: 'IPN',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące inwigilacji KOR i jego działaczy',
        downloadable: true,
      },
    ],
    relatedIds: ['czerwiec-1976', 'solidarnosc', 'sbezpieczenstwa', 'marzec-1968'],
  },

  {
    id: 'marzec-1968',
    title: 'Marzec 1968',
    subtitle: 'Protesty studenckie i kampania antysemicka',
    category: 'opozycja',
    tags: ['studenci', 'antysemityzm', 'Mickiewicz', 'cenzura', 'emigracja', '1968'],
    yearStart: 1968,
    yearEnd: 1968,
    summary: 'Marzec 1968 – fala studenckich protestów wywołana zakazem wystawiania "Dziadów" Mickiewicza, stłumiona przez władze. Towarzyszyła jej wewnątrzpartyjna kampania antysemicka, która zmusiła około 13 000 Polaków żydowskiego pochodzenia do emigracji.',
    content: `Bezpośrednią przyczyną protestów było zdjęcie z afisza spektaklu "Dziady" Adama Mickiewicza w reżyserii Kazimierza Dejmka w Teatrze Narodowym w Warszawie. Spektakl przyciągał tłumy z powodu antysowieckich skojarzeń.

**Przebieg protestów:**
- 30 stycznia 1968: ostatnie przedstawienie "Dziadów", owacje i demonstracja przed teatrem
- 8 marca 1968: wiec na dziedzińcu Uniwersytetu Warszawskiego – atak bojówek "aktywu robotniczego" (ochotnicy podstawieni przez SB)
- Marzec 1968: fala strajków i demonstracji na uczelniach w całej Polsce
- Władze użyły ZOMO i "aktywu", aresztowały setki studentów

**Kampania antysemicka:**
Frakcja "partyzantów" w PZPR (gen. Mieczysław Moczar) wykorzystała Marzec do kampanii skierowanej przeciwko Polakom żydowskiego pochodzenia:
- Czystki w wojsku, partii, mediach i na uczelniach
- Około **13 000 osób** zmuszono do emigracji (oficjalnie: "wyjazdów do Izraela")
- Wyjeżdżających pozbawiano obywatelstwa polskiego

**Ofiary i represje:**
Setki studentów aresztowanych, relegowanych z uczelni, powołanych do wojska. Wielu czołowych intelektualistów wyemigrowało (Kołakowski, Bauman).`,
    resources: [
      {
        id: 'mar68-1',
        title: 'Marzec 1968 – portal tematyczny IPN',
        type: 'akt',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/marzec-1968',
        source: 'IPN – Polskie Miesiące',
        description: 'Akta bezpieki, raporty i dokumenty operacyjne z okresu Marca 1968',
        year: 1968,
        downloadable: true,
      },
      {
        id: 'mar68-2',
        title: 'Fotografie z demonstracji studenckich 1968',
        type: 'zdjęcie',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Fotografie%20demonstracji%20studenckich',
        source: 'IPN Archiwum Fotograficzne',
        description: 'Archiwalne zdjęcia z protestów studenckich i interwencji ZOMO',
        year: 1968,
      },
      {
        id: 'mar68-3',
        title: '"Dziady" – spektakl Dejmka – dokumentacja',
        type: 'dokument',
        url: 'https://ninateka.pl/vod/szukaj?query=Dziady%20spektakl%20Dejmka',
        source: 'NINATEKA',
        description: 'Materiały archiwalne dotyczące zakazanego spektaklu, który wywołał protesty',
        year: 1968,
      },
    ],
    relatedIds: ['pzpr', 'sbezpieczenstwa', 'kultura-prl', 'kor', 'gomulka'],
  },

  {
    id: 'czerwiec-1976',
    title: 'Czerwiec 1976',
    subtitle: 'Protesty w Radomiu i Ursusie',
    category: 'opozycja',
    tags: ['Radom', 'Ursus', 'podwyżki', 'robotnicy', '1976', 'KOR'],
    yearStart: 1976,
    yearEnd: 1976,
    summary: 'Robotnicze protesty w Radomiu i Ursusie z 25 czerwca 1976 roku, wywołane ogłoszeniem drastycznych podwyżek cen żywności. Stłumione przez władze z użyciem brutalnych represji, w tym słynnych "ścieżek zdrowia".',
    content: `25 czerwca 1976 roku premier Piotr Jaroszewicz ogłosił w Sejmie drastyczne podwyżki cen żywności – mięso miało podrożeć o 69%, cukier o 100%. Kraj ogarnęła fala spontanicznych protestów.

**Przebieg wydarzeń:**
- Radom: robotnicy Zakładów Metalowych "Walter" i innych zakładów wyszli na ulice. Podpalono siedzibę Komitetu Wojewódzkiego PZPR
- Ursus: robotnicy Zakładów Mechanicznych rozkręcili tory kolejowe, blokując ruch
- Wycofanie podwyżek w ciągu 24 godzin

**Represje – "ścieżki zdrowia":**
Po stłumieniu protestów milicja organizowała tzw. "ścieżki zdrowia" – aresztowanych bito pałkami między szeregami funkcjonariuszy. Tysiące osób aresztowano, setki skazano na więzienie.

**Narodziny KOR:**
Represje wywołały bezprecedensową reakcję środowisk intelektualnych. We wrześniu 1976 roku powstał Komitet Obrony Robotników (KOR) – pierwsza jawna opozycja demokratyczna w PRL.

**Znaczenie historyczne:**
Czerwiec 1976 był bezpośrednim impulsem do powstania KOR i pośrednio – do narodzin Solidarności cztery lata później.`,
    resources: [
      {
        id: 'cz76-1',
        title: 'Czerwiec 1976 – portal tematyczny IPN',
        type: 'akt',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/czerwiec-1976/112496,Czerwiec-1976.html',
        source: 'IPN – Polskie Miesiące',
        description: 'Akta procesów i dokumenty dotyczące represji po Czerwcu 1976',
        year: 1976,
        downloadable: true,
      },
      {
        id: 'cz76-2',
        title: 'Relacje świadków – Radom 1976',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Relacje%20%C5%9Bwiadk%C3%B3w%20Radom',
        source: 'IPN – Biuro Udostępniania',
        description: 'Nagrane relacje uczestników i świadków wydarzeń radomskich',
        year: 1976,
        downloadable: true,
      },
    ],
    relatedIds: ['kor', 'solidarnosc', 'represje-polityczne', 'gierek'],
  },

  {
    id: 'popieluszko',
    title: 'Ks. Jerzy Popiełuszko',
    subtitle: 'Kapelan Solidarności, ofiara SB (1947–1984)',
    category: 'osoby',
    tags: ['Popiełuszko', 'SB', 'mord', 'kapelan', 'Solidarność', 'Włocławek'],
    yearStart: 1947,
    yearEnd: 1984,
    summary: 'Ks. Jerzy Popiełuszko – kapłan katolicki i kapelan "Solidarności", zamordowany 19 października 1984 roku przez funkcjonariuszy Służby Bezpieczeństwa. Jego "Msze za Ojczyznę" gromadziły dziesiątki tysięcy wiernych.',
    content: `Jerzy Alfons Popiełuszko (ur. 14 września 1947 – zm. 19 października 1984) był wikariuszem parafii św. Stanisława Kostki na Żoliborzu w Warszawie.

**Msze za Ojczyznę:**
Od 1982 roku odprawiał comiesięczne "Msze za Ojczyznę" w kościele na Żoliborzu. Przyciągały dziesiątki tysięcy wiernych – robotników, inteligentów, członków Solidarności. Kazania ks. Jerzego były świadectwem chrześcijańskiego oporu wobec totalitaryzmu.

**Inwigilacja i prześladowania:**
SB intensywnie go inwigilowała – operacja "Popiel". Był wielokrotnie wzywany na przesłuchania, grożono mu. W 1984 roku wytoczono mu proces karny.

**Porwanie i mord:**
19 października 1984 roku, wracając z Bydgoszczy, ks. Popiełuszko został uprowadzony przez trzech funkcjonariuszy SB: Grzegorza Piotrowskiego, Waldemara Chmielewskiego i Leszka Pękalę. Skatowany, z ciężarkami u nóg, wrzucony do Zalewu Włocławskiego.

Ciało odnaleziono 30 października 1984 roku.

**Reakcja społeczna:**
Pogrzeb 3 listopada 1984 roku zgromadził szacunkowo 250 000–400 000 ludzi. Sprawcy zostali skazani – kary od 14 do 25 lat więzienia.

**Beatyfikacja:**
6 czerwca 2010 roku papież Benedykt XVI beatyfikował ks. Jerzego Popiełuszkę w Warszawie.`,
    resources: [
      {
        id: 'pop-1',
        title: 'Akta procesu morderców ks. Popiełuszki',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=procesu%20morderc%C3%B3w%20Popie%C5%82uszki',
        source: 'IPN',
        description: 'Dokumenty z procesu Piotrowskiego, Chmielewskiego i Pękali przed sądem w Toruniu (1984–1985)',
        year: 1984,
        downloadable: true,
      },
      {
        id: 'pop-2',
        title: 'Kazania ks. Popiełuszki – nagrania',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=ks.+Jerzy+Popie%C5%82uszko+kazania+Msza+za+Ojczyzn%C4%99',
        source: 'Archiwum Parafii / YouTube',
        description: 'Archiwalne nagrania Mszy za Ojczyznę i kazań ks. Jerzego',
        year: 1983,
      },
      {
        id: 'pop-3',
        title: 'Film "Popiełuszko. Wolność jest w nas"',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Popie%C5%82uszko',
        source: 'NINATEKA',
        description: 'Film fabularny opowiadający historię życia i śmierci ks. Popiełuszki',
        year: 2009,
      },
    ],
    relatedIds: ['kosciol-prl', 'sbezpieczenstwa', 'solidarnosc', 'stan-wojenny'],
  },

  {
    id: 'wujek',
    title: 'Pacyfikacja KWK Wujek',
    subtitle: '16 grudnia 1981 – 9 górników zabitych',
    category: 'represje',
    tags: ['Wujek', 'górnicy', 'Katowice', 'stan wojenny', 'ZOMO', '1981'],
    yearStart: 1981,
    yearEnd: 1981,
    summary: 'Pacyfikacja Kopalni Węgla Kamiennego "Wujek" w Katowicach – 16 grudnia 1981 roku oddziały ZOMO i wojsko otworzyły ogień do strajkujących górników. Zginęło 9 osób, 23 zostały ranne. Najtragiczniejsza ze zbrodni stanu wojennego.',
    content: `KWK "Wujek" w Katowicach stała się symbolem zbrodni stanu wojennego.

**Strajk:**
Po ogłoszeniu stanu wojennego 13 grudnia 1981 roku górnicy KWK Wujek podjęli strajk protestacyjny. 15 grudnia oddziały ZOMO i wojska, które przez noc bezskutecznie próbowały spacyfikować strajk.

**16 grudnia 1981 roku:**
Rankiem oddziały szturmowe ZOMO, wsparte przez pluton specjalny uzbrojony w karabiny bojowe, wkroczyły na teren kopalni. Gdy górnicy stawiali opór, padły strzały.

**Ofiary – 9 zabitych górników:**
- Józef Czekalski, Krzysztof Giza, Joachim Gnida, Ryszard Gzik, Bogusław Kopczak, Andrzej Pełka, Jan Stawisiński, Zbigniew Wilk, Zenon Zając
- Rannych zostało 23 górników

**Sprawcy:**
Przez lata próbowano ukryć odpowiedzialność. W 1992 roku wszczęto śledztwo. W 2007 roku sąd skazał dowódcę plutonu specjalnego na 1 rok i 8 miesięcy więzienia w zawieszeniu – wyrok uznawano za skandalicznie łagodny.

**Upamiętnienie:**
Przy kopalni stoi Pomnik Górników Poległych w Czasie Stanu Wojennego. 16 grudnia jest dniem pamięci o ofiarach KWK Wujek.`,
    resources: [
      {
        id: 'wuj-1',
        title: 'Pacyfikacja Kopalni Wujek – artykuł IPN z dokumentami',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Pacyfikacja%20Kopalni%20Wujek',
        source: 'IPN – Historia z IPN',
        description: 'Dokumenty śledztwa IPN w sprawie strzelania do górników kopalni Wujek',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'wuj-2',
        title: 'Fotografie z KWK Wujek – 1981',
        type: 'zdjęcie',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Fotografie%20KWK%20Wujek',
        source: 'IPN Archiwum Fotograficzne',
        description: 'Archiwalne zdjęcia z okresu pacyfikacji kopalni i jej następstw',
        year: 1981,
      },
      {
        id: 'wuj-3',
        title: 'Film dokumentalny o KWK Wujek',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Film%20dokumentalny%20KWK',
        source: 'NINATEKA / TVP',
        description: 'Dokumentalny film o historii kopalni i tragicznych wydarzeniach z 1981 roku',
      },
    ],
    relatedIds: ['stan-wojenny', 'sbezpieczenstwa', 'solidarnosc', 'represje-polityczne'],
  },

  {
    id: 'represje-polityczne',
    title: 'Represje polityczne w PRL',
    subtitle: 'System terroru 1944–1989',
    category: 'represje',
    tags: ['represje', 'więzienia', 'tortury', 'UB', 'wyroki', 'egzekucje', 'wyklęci'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Represje polityczne w PRL – system prześladowań obywateli przez aparat bezpieczeństwa, prokuraturę i sądy. W różnych formach trwały przez cały okres istnienia PRL, z największym natężeniem w latach 1944–1956.',
    content: `System represji politycznych w PRL przechodził przez kilka faz, choć nigdy całkowicie nie ustał.

**Faza stalinowska (1944–1956):**
Najkrwawszy okres PRL. Masowe aresztowania żołnierzy AK, PSL-owców, duchownych, "kułaków":
- Szacuje się, że przez obozy i więzienia przeszło **ok. 300 000 osób**
- Wykonano co najmniej **6 000 wyroków śmierci** (dane IPN)
- Ofiary tortur, sfabrykowanych procesów i przymusowych zeznań
- Bestialskie mordy na żołnierzach "wyklętych"

**Żołnierze wyklęci:**
Partyzanci AK i innych organizacji niepodległościowych, którzy kontynuowali walkę po 1945 roku. Ostatni z nich – Józef Franczak "Lalek" – poległ w 1963 roku.

**Faza "miękkiego terroru" (1956–1989):**
Po 1956 roku zrezygnowano z masowych egzekucji, ale represje trwały:
- Więzienia dla działaczy opozycji (KOR, Solidarność, ROPCiO)
- Inwigilacja, podsłuchy, nękanie psychiczne
- Pobicia i morderstwa (ks. Popiełuszko, operacje "likwidacyjne" SB)
- Internowanie w stanie wojennym (ok. 10 000 osób)

**Procesy rehabilitacji:**
Po 1989 roku IPN wszczął setki śledztw w sprawie zbrodni komunistycznych. Większość sprawców uniknęła kary z powodu przedawnienia lub śmierci.`,
    resources: [
      {
        id: 'rep-1',
        title: 'Listy ofiar represji komunistycznych – baza IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Listy%20ofiar%20represji',
        source: 'IPN',
        description: 'Baza danych ofiar aparatu represji PRL – możliwość wyszukiwania po nazwisku',
        downloadable: false,
      },
      {
        id: 'rep-2',
        title: 'Akta procesów politycznych 1944–1956',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=proces%C3%B3w%20politycznych%201944',
        source: 'IPN',
        description: 'Zbiory akt sądowych z procesów politycznych z epoki stalinowskiej',
        downloadable: true,
      },
      {
        id: 'rep-3',
        title: '"Żołnierze wyklęci" – dokumentacja IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=%C5%BCo%C5%82nierze%20wykl%C4%99ci%20podziemie%20niepodleg%C5%82o%C5%9Bciowe',
        source: 'IPN',
        description: 'Materiały edukacyjne IPN o żołnierzach niezłomnych – biogramy i dokumenty',
        downloadable: true,
      },
    ],
    relatedIds: ['sbezpieczenstwa', 'stan-wojenny', 'wujek', 'pzpr', 'bierut'],
  },

  {
    id: 'lwp',
    title: 'Ludowe Wojsko Polskie',
    subtitle: 'Armia PRL 1943–1989',
    category: 'wojsko',
    tags: ['LWP', 'armia', 'Berling', 'Układ Warszawski', 'wojsko', 'oficerowie sowieccy'],
    yearStart: 1943,
    yearEnd: 1989,
    summary: 'Ludowe Wojsko Polskie – siły zbrojne PRL podległe ZSRR przez Układ Warszawski. Tworzone od 1943 roku przez komunistów, obsadzone oficerami sowieckimi, używane do tłumienia protestów społecznych.',
    content: `Ludowe Wojsko Polskie (LWP) powstało w 1943 roku na terenie ZSRR jako alternatywa dla Armii Krajowej, pod patronatem sowieckim.

**Geneza:**
W 1943 roku Stalin rozkazał sformowanie 1. Dywizji Piechoty im. Tadeusza Kościuszki pod dowództwem gen. Zygmunta Berlinga. Żołnierze pochodzili w znacznej części z Polaków deportowanych do ZSRR.

**Sowietyzacja dowództwa:**
Po 1945 roku tysiące oficerów sowieckich służyło w LWP, często pod polsko brzmiącymi pseudonimami. Ministrem Obrony był w latach 1949–1956 marszałek Konstanty Rokossowski – obywatel ZSRR.

**Udział w tłumieniu protestów:**
LWP było używane do pacyfikacji społecznych:
- Czerwiec 1956 – Poznań: czołgi i piechota
- Grudzień 1970 – Wybrzeże: strzelanie do robotników
- Stan wojenny 1981 – internowania, WRON

**Układ Warszawski:**
Polska była członkiem-założycielem Układu Warszawskiego (1955). LWP było podporządkowane sowieckim strukturom dowodzenia. Polscy żołnierze uczestniczyli w interwencji w Czechosłowacji w 1968 roku.

**Transformacja:**
Po 1989 roku LWP przekształcono w Wojsko Polskie, wycofując sowieckich doradców i dostosowując struktury do standardów NATO.`,
    resources: [
      {
        id: 'lwp-1',
        title: 'Rozkazy i dokumenty LWP – Centralne Archiwum Wojskowe',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Rozkazy%20LWP%20Centralne',
        source: 'Centralne Archiwum Wojskowe',
        description: 'Zasoby archiwalne Centralnego Archiwum Wojskowego dotyczące LWP',
        downloadable: true,
      },
      {
        id: 'lwp-2',
        title: 'Kroniki filmowe – Ludowe Wojsko Polskie',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20Ludowe',
        source: 'NINATEKA',
        description: 'Archiwalne kroniki filmowe i filmy propagandowe LWP z różnych okresów PRL',
      },
      {
        id: 'lwp-3',
        title: 'Interwencja w Czechosłowacji 1968 – dokumenty',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Interwencja%20Czechos%C5%82owacji%201968',
        source: 'IPN',
        description: 'Dokumenty dotyczące udziału LWP w inwazji na Czechosłowację w sierpniu 1968 roku',
        year: 1968,
        downloadable: true,
      },
    ],
    relatedIds: ['pzpr', 'stan-wojenny', 'grudzien-1970', 'jaruzelski'],
  },

  {
    id: 'wyszynski',
    title: 'Prymas Stefan Wyszyński',
    subtitle: 'Prymas Tysiąclecia (1901–1981)',
    category: 'osoby',
    tags: ['kościół', 'prymas', 'uwięzienie', 'non possumus', 'Jasna Góra', 'opór'],
    yearStart: 1948,
    yearEnd: 1981,
    summary: 'Stefan Wyszyński, Prymas Polski w latach 1948–1981, był najważniejszą postacią polskiego Kościoła katolickiego w okresie PRL. Uwięziony przez władze komunistyczne w latach 1953–1956, stał się symbolem oporu wobec ateizacji i prześladowań religijnych. Jego Śluby Jasnogórskie i Wielka Nowenna umocniły religijną tożsamość Polaków.',
    content: `**Nominacja i pierwsze lata** — Stefan Wyszyński urodził się 3 sierpnia 1901 r. w Zuzeli nad Bugiem. Mianowany arcybiskupem gnieźnieńskim i warszawskim 12 listopada 1948 r. oraz Prymasem Polski. W 1950 r. wynegocjował z władzami PRL porozumienie regulujące stosunki państwo–Kościół. Władze komunistyczne systematycznie łamały jego postanowienia.

**Non possumus** — W maju 1953 r., w odpowiedzi na dekret podporządkowujący obsadę stanowisk kościelnych państwu, Konferencja Episkopatu wystosowała memoriał **Non possumus** — „Nie możemy" — odmawiający podporządkowania Kościoła władzy świeckiej w sprawach wiary i administracji kościelnej.

**Uwięzienie 1953–1956** — 25 września 1953 r. funkcjonariusze UB aresztowali Prymasa i przewieźli go kolejno do Rywałdu Królewskiego, Stoczka Warmińskiego, Prudnika i Komańczy. Internowanie trwało ponad trzy lata — do 26 października 1956 r. W Komańczy napisał tekst **Ślubów Jasnogórskich**, które 26 sierpnia 1956 r. odczytano wobec miliona pielgrzymów na Jasnej Górze.

**Wielka Nowenna i Millennium** — Po uwolnieniu Wyszyński ogłosił program **Wielkiej Nowenny** (1957–1966) — dziewięcioletniego przygotowania do tysiąclecia chrztu Polski. Kulminacją były uroczystości milenijne 3 maja 1966 r. na Jasnej Górze, zbojkotowane przez władze PRL, które organizowały konkurencyjne uroczystości „tysiąclecia państwa polskiego".

**Rola mediatora** — Prymas odgrywał rolę stabilizatora w kolejnych kryzysach politycznych: Październiku 1956, Marcu 1968, Grudniu 1970 i Czerwcu 1976. W sierpniu 1980 r. popierał prawo robotników do wolnych związków zawodowych, jednocześnie wzywając do odpowiedzialności i spokoju.

**Śmierć i beatyfikacja** — Stefan Wyszyński zmarł 28 maja 1981 r. w Warszawie. Beatyfikowany przez papieża Franciszka 12 września 2021 r. Tytuł „Prymasa Tysiąclecia" nadany mu przez Jana Pawła II oddaje wyjątkową rolę w zachowaniu tożsamości narodowej Polaków.`,
    resources: [
      {
        id: 'wyszynski-1',
        title: 'Stefan Wyszyński – biografia i rola w PRL (IPN)',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Stefan%20Wyszy%C5%84ski%20biografia',
        source: 'Instytut Pamięci Narodowej',
        description: 'Biografia i omówienie roli Prymasa Wyszyńskiego w relacjach państwo–Kościół w PRL.',
        year: 2021,
      },
      {
        id: 'wyszynski-2',
        title: 'Non possumus – memoriał Episkopatu 1953',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=prymas%20stefan%20wyszynski',
        source: 'Przystanek Historia / IPN',
        description: 'Omówienie memoriału biskupów polskich odmawiającego podporządkowania Kościoła władzy komunistycznej.',
        year: 1953,
      },
      {
        id: 'wyszynski-3',
        title: 'Akta SB dotyczące inwigilacji Prymasa',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=inwigilacji%20Prymasa',
        source: 'Inwentarz IPN',
        description: 'Dokumenty Służby Bezpieczeństwa z operacji inwigilacji i działań wobec prymasa Wyszyńskiego.',
        downloadable: true,
      },
    ],
    relatedIds: ['kosciol-prl', 'jan-pawel-ii', 'popieluszko', 'marzec-1968', 'bierut'],
  },

  {
    id: 'zolnierze-wykletci',
    title: 'Żołnierze Wyklęci',
    subtitle: 'Podziemie antykomunistyczne 1944–1963',
    category: 'represje',
    tags: ['AK', 'WiN', 'NSZ', 'partyzantka', 'Pilecki', 'Fieldorf', 'Łupaszka', 'podziemie'],
    yearStart: 1944,
    yearEnd: 1963,
    summary: 'Żołnierze Wyklęci (Niezłomni) to żołnierze polskiego podziemia niepodległościowego kontynuujący zbrojną walkę z sowiecką dominacją po 1944 r. Przez szeregi podziemia przeszło ok. 120–180 tys. ludzi; ostatni partyzant zginął w 1963 r. Tysiące zostały zamordowane przez UB i NKWD lub stracone po sfingowanych procesach.',
    content: `**Geneza i struktury** — Po wkroczeniu Armii Czerwonej w 1944 r. część żołnierzy AK, NSZ i BCh odmówiła rozbrojenia, słusznie oceniając, że sowiecka dominacja przekreśla niepodległość Polski. Główne struktury: Armia Krajowa (do 1945), Delegatura Sił Zbrojnych na Kraj (1945), Wolność i Niezawisłość — **WiN** (1945–1952), Narodowe Siły Zbrojne oraz lokalne oddziały partyzanckie.

**Skala zjawiska** — Historycy IPN szacują 120–180 tys. osób przez całe podziemie. Szczyt aktywności: 1945–1947. Tylko w 1946 r. przeprowadzono ok. 8 tys. „akcji zbrojnych". Aparat komunistyczny odpowiedział masowymi pacyfikacjami wsi, aresztowaniami rodzin i torturami.

**Rotmistrz Witold Pilecki** — Dobrowolnie trafił do Auschwitz (1940), skąd wysyłał raporty o Holocauście. Uciekł w 1943 r., walczył w Powstaniu Warszawskim. Aresztowany przez UB w 1947 r., skazany na śmierć i rozstrzelany **25 maja 1948 r.**

**Gen. August Emil Fieldorf „Nil"** — Zastępca Komendanta Głównego AK, organizator Kedywu. Skazany na śmierć w sfabrykowanym procesie, stracony **24 lutego 1953 r.**

**Mjr Zygmunt Szendzielarz „Łupaszka"** — Dowódca 5. Brygady Wileńskiej AK. Aresztowany 1948, rozstrzelany **8 lutego 1951 r.**

**Józef Franczak „Lalek"** — Ostatni partyzant Wyklętych. Ukrywał się na Lubelszczyźnie od 1944 r. Zginął w obławie **21 października 1963 r.** — niemal 18 lat po zakończeniu II wojny światowej.

**Represje** — Szacuje się, że w walkach i z wyroków śmierci zginęło ok. 8500 żołnierzy podziemia. Wielu więziono przez dziesięciolecia. Ustawa z 1991 r. zrehabilitowała represjonowanych. Od 2011 r. **1 marca** obchodzony jest Narodowy Dzień Pamięci Żołnierzy Wyklętych.`,
    resources: [
      {
        id: 'wykletci-1',
        title: 'Żołnierze Wyklęci – serwis tematyczny IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=%C5%BBo%C5%82nierze%20Wykl%C4%99ci%20tematyczny',
        source: 'Instytut Pamięci Narodowej',
        description: 'Kompleksowe opracowanie IPN o historii podziemia antykomunistycznego w Polsce.',
        downloadable: true,
      },
      {
        id: 'wykletci-2',
        title: 'Materiały edukacyjne IPN o Żołnierzach Wyklętych',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=%C5%BCo%C5%82nierze%20wykl%C4%99ci',
        source: 'Oficjalny portal edukacyjny',
        description: 'Biogramy, dokumenty i edukacja o Żołnierzach Wyklętych.',
      },
      {
        id: 'wykletci-3',
        title: 'Witold Pilecki – film dokumentalny IPN',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=Witold+Pilecki+dokument+IPN',
        source: 'IPN TV YouTube',
        description: 'Dokument o życiu i śmierci rotmistrza Pileckiego, ochotnika do Auschwitz.',
        year: 2008,
      },
    ],
    relatedIds: ['represje-polityczne', 'sbezpieczenstwa', 'bierut', 'manifest-pkwn'],
  },

  {
    id: 'zomo',
    title: 'ZOMO',
    subtitle: 'Zmotoryzowane Oddziały Milicji Obywatelskiej',
    category: 'represje',
    tags: ['milicja', 'pacyfikacja', 'stan wojenny', 'strajki', 'pałki', 'MO'],
    yearStart: 1956,
    yearEnd: 1990,
    summary: 'ZOMO — Zmotoryzowane Oddziały Milicji Obywatelskiej — były wyspecjalizowanymi jednostkami pacyfikacyjnymi MO PRL, powołanymi w 1956 r. i rozwiązanymi w 1990 r. Zasłynęły z brutalnych interwencji podczas strajków i demonstracji, szczególnie w czasie stanu wojennego, gdy ich działania kosztowały życie kilkudziesięciu osób.',
    content: `**Powstanie i organizacja** — ZOMO powołano w 1956 r. jako odpowiedź na fale strajków Października. Jednostki podlegały MSW i były rozmieszczone w każdym województwie. W szczytowym okresie (1981–1983) liczyły ok. 60–70 tys. funkcjonariuszy.

**Wyposażenie i metody** — Standardowe wyposażenie: pałki milicyjne (tzw. „pały"), tarcze, hełmy, maski, miotacze gazu łzawiącego, armatki wodne, granaty hukowe i gumowe kule. Pojazdy opancerzone SKOT służyły do rozpraszania tłumów.

**Interwencje 1956–1980** — ZOMO uczestniczyło w pacyfikacji demonstracji Marca 1968, masakrze na Wybrzeżu w Grudniu 1970 oraz „ścieżkach zdrowia" w Czerwcu 1976 — robotnicy z Radomia i Ursusa bici byli pałkami między szeregami funkcjonariuszy.

**Stan wojenny 1981–1983** — Po 13 grudnia 1981 r. ZOMO stało się głównym narzędziem pacyfikacji. Szturmowało kopalnię Wujek (9 zabitych górników), Hutę Katowice, Stocznię Gdańską. Przez cały stan wojenny internowano ok. 10 tys. działaczy opozycji.

**Pacyfikacje po 1983 r.** — ZOMO nadal pacyfikowało demonstracje m.in. w Gdańsku (1988), Nowej Hucie (1987–1988) i podczas strajków sierpniowych 1988, które doprowadziły do Okrągłego Stołu.

**Rozwiązanie i odpowiedzialność** — ZOMO rozwiązano 31 maja 1990 r., zastąpione przez Oddział Prewencji Policji. W 2008 r. sąd skazał dowódcę plutonu z Wujka Romualda Cieślaka na 11 lat więzienia.`,
    resources: [
      {
        id: 'zomo-1',
        title: 'ZOMO – historia i działalność (IPN)',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=ZOMO%20dzia%C5%82alno%C5%9B%C4%87',
        source: 'Instytut Pamięci Narodowej',
        description: 'Historia i metody ZOMO jako narzędzia represji w PRL.',
      },
      {
        id: 'zomo-2',
        title: 'Pacyfikacja kopalni Wujek – dokumentacja',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Pacyfikacja%20kopalni%20Wujek',
        source: 'IPN',
        description: 'Dokumentacja pacyfikacji kopalni Wujek 16 grudnia 1981 r. z udziałem ZOMO.',
        year: 1981,
      },
      {
        id: 'zomo-3',
        title: 'Stan wojenny – portal tematyczny IPN',
        type: 'dokument',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/grudzien-1981',
        source: 'IPN – Polskie Miesiące',
        description: 'Materiały o stanie wojennym i roli ZOMO w pacyfikacji oporu społecznego.',
        year: 1981,
      },
    ],
    relatedIds: ['stan-wojenny', 'wujek', 'represje-polityczne', 'sbezpieczenstwa', 'czerwiec-1976', 'grudzien-1970'],
  },

  {
    id: 'jan-pawel-ii',
    title: 'Jan Paweł II',
    subtitle: 'Karol Wojtyła — papież z Polski (1920–2005)',
    category: 'osoby',
    tags: ['Wojtyła', 'papież', 'pielgrzymka', 'Solidarność', 'Watykan', 'komunizm'],
    yearStart: 1978,
    yearEnd: 2005,
    summary: 'Karol Józef Wojtyła wybrany 16 października 1978 r. na papieża jako Jan Paweł II był pierwszym Papieżem z Polski. Jego trzy pielgrzymki do ojczyzny (1979, 1983, 1987) i słowa „Niech zstąpi Duch Twój i odnowi oblicze ziemi, tej ziemi" odegrały przełomową rolę w przebudzeniu Polaków i narodzinach Solidarności.',
    content: `**Droga do papiestwa** — Karol Józef Wojtyła urodził się 18 maja 1920 r. w Wadowicach. Wyświęcony na kapłana w 1946 r., mianowany biskupem pomocniczym krakowskim w 1958 r., arcybiskupem metropolitą krakowskim w 1964 r., kardynałem w 1967 r. 16 października 1978 r. konklawe wybrało go papieżem.

**Reakcja władz PRL** — Notka informacyjna KGB oceniała Wojtyłę jako „największe niebezpieczeństwo dla obozu socjalistycznego". Edward Gierek, informowany przez premiera, miał powiedzieć: „Boże, cóż nam się przydarzyło".

**Pierwsza pielgrzymka, 2–10 czerwca 1979** — Przełom w historii PRL. Podczas mszy na Placu Zwycięstwa w Warszawie Jan Paweł II wygłosił słowa: **„Niech zstąpi Duch Twój i odnowi oblicze ziemi, tej ziemi"** — odebrane jako wezwanie do moralnej odnowy narodu. Łącznie wzięło w niej udział 10–13 milionów Polaków. Pielgrzymka psychologicznie przygotowała grunt pod Sierpień 1980.

**Zamach 1981** — 13 maja 1981 r. Mehmet Ali Ağca postrzelił Jana Pawła II na Placu św. Piotra. Papież przeżył. W śledztwie pojawiły się powiązania z bułgarską SB i KGB.

**Druga pielgrzymka, 16–23 czerwca 1983** — Odbyła się w czasie stanu wojennego. Papież rozmawiał z Jaruzelskim i Wałęsą (spotkanie w Tatrach). Homilia w Częstochowie zawierała wezwanie do poszanowania wolności sumienia.

**Trzecia pielgrzymka, 8–14 czerwca 1987** — Jan Paweł II odwiedził m.in. Gdańsk, spotykając się z rodzinami ofiar Grudnia 1970. Jego słowa „Nie ma solidarności bez miłości" stały się cytatem opozycji.

**Wpływ na upadek komunizmu** — Michaił Gorbaczow i Zbigniew Brzeziński uznawali Jana Pawła II za jednego z kluczowych aktorów rozkładu bloku sowieckiego. Watykańska dyplomacja, finansowe wsparcie dla Solidarności przez Caritas i autorytet moralny papieża legitymizowały polską opozycję na arenie międzynarodowej.`,
    resources: [
      {
        id: 'jp2-1',
        title: 'Jan Paweł II a Polska – serwis IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Jan%20Pawe%C5%82',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowanie IPN o wpływie papieża na opozycję antykomunistyczną w Polsce.',
        year: 2005,
      },
      {
        id: 'jp2-2',
        title: 'Teczki SB na Karola Wojtyłę',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Teczki%20Karola%20Wojty%C5%82%C4%99',
        source: 'Inwentarz IPN',
        description: 'Akta SB dotyczące inwigilacji Karola Wojtyły jako biskupa i arcybiskupa krakowskiego.',
        year: 1978,
        downloadable: true,
      },
      {
        id: 'jp2-3',
        title: 'Pielgrzymka 1979 – archiwalne nagrania',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Jan+Pawe%C5%82+II+pielgrzymka+1979+homilia+Warszawa',
        source: 'YouTube / TVP Archiwum',
        description: 'Materiały archiwalne z pierwszej pielgrzymki papieskiej do Polski w czerwcu 1979 r.',
        year: 1979,
      },
    ],
    relatedIds: ['wyszynski', 'solidarnosc', 'stan-wojenny', 'kosciol-prl', 'sierpien-1980'],
  },

  {
    id: 'manifest-pkwn',
    title: 'Manifest PKWN',
    subtitle: '„Manifest Lipcowy" z 22 lipca 1944 roku',
    category: 'polityka',
    tags: ['PKWN', 'manifest', '1944', 'reforma rolna', 'nacjonalizacja', 'granice', 'Lublin'],
    yearStart: 1944,
    yearEnd: 1944,
    summary: 'Manifest PKWN ogłoszony 22 lipca 1944 r. był aktem założycielskim komunistycznej władzy w Polsce. Proklamował reformę rolną, nacjonalizację przemysłu, nowe granice oparte na linii Curzona i Odrze–Nysie, odrzucał legalny rząd w Londynie i ustanawiał PKWN jako tymczasowy organ władzy podległy Stalinowi.',
    content: `**Geneza i kontekst** — Latem 1944 r. Armia Czerwona wkraczała na terytorium II Rzeczypospolitej. Stalin potrzebował polskiego organu władzy legitymizującego sowiecką dominację. 21–22 lipca 1944 r. w Moskwie sformułowano tekst Manifestu; podległe ZSRS środowiska komunistyczne ogłosiły go 22 lipca w Chełmie. Lublin był wówczas jeszcze pod kontrolą Niemców — data i miejsce były manipulacją propagandową.

**Treść Manifestu** — Manifest proklamował:
- odrzucenie konstytucji z 1935 r. jako „faszystowskiej" i przywrócenie konstytucji marcowej z 1921 r.
- Krajową Radę Narodową jako tymczasowy organ ustawodawczy
- **reformę rolną** — parcelację majątków powyżej 50 ha bez odszkodowania
- **nacjonalizację** kluczowych gałęzi przemysłu, banków i kolei
- wschodnie granice oparte na linii Curzona (oddanie Lwowa i Kresów ZSRS)
- zachodnią granicę na Odrze i Nysie Łużyckiej (Ziemie Odzyskane)
- pełną współpracę wojskową z ZSRS

**PKWN i skład** — Polskim Komitetem Wyzwolenia Narodowego kierował Edward Osóbka-Morawski (PPS), a faktyczną władzę sprawowali komuniści: Bolesław Bierut, Jakub Berman, Hilary Minc, Stanisław Radkiewicz.

**Reforma rolna** — Dekretem PKWN z 6 września 1944 r. rozparcelowano ok. 6 mln ha ziemi wśród ok. 1 mln rodzin chłopskich — tworząc tym samym bazę społeczną nowej władzy i różnicując się od późniejszej przymusowej kolektywizacji.

**22 lipca — święto PRL** — Data stała się głównym świętem państwowym PRL — „Narodowym Świętem Odrodzenia Polski" — obchodzonym defiladami wojskowymi do 1989 r.

**Ocena historyczna** — Manifest był fundamentem prawnym PRL-owskiego porządku ustrojowego — aktem narzuconym Polakom bez żadnych demokratycznych procedur, zatwierdzonym przez Stalina w Moskwie.`,
    resources: [
      {
        id: 'pkwn-1',
        title: 'Manifest PKWN – tekst i komentarz historyczny (IPN)',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Manifest%20PKWN%20tekst',
        source: 'Instytut Pamięci Narodowej',
        description: 'Pełny tekst Manifestu PKWN z 22 lipca 1944 r. wraz z komentarzem historycznym IPN.',
        year: 1944,
      },
      {
        id: 'pkwn-2',
        title: 'Dekret PKWN o reformie rolnej (ISAP)',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19440040017',
        source: 'ISAP – Internetowy System Aktów Prawnych',
        description: 'Oryginalny dekret PKWN z 6 września 1944 r. o reformie rolnej.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'pkwn-3',
        title: 'Początki komunizmu w Polsce – film dokumentalny',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=przej%C4%99cie+w%C5%82adzy+komuni%C5%9Bci+Polska+1944+dokument+IPN',
        source: 'IPN TV YouTube',
        description: 'Dokument o przejęciu władzy przez komunistów w Polsce w latach 1944–1947.',
        year: 2014,
      },
    ],
    relatedIds: ['pzpr', 'bierut', 'gomulka', 'kolektywizacja', 'gospodarka-prl'],
  },

  {
    id: 'kolektywizacja',
    title: 'Kolektywizacja rolnictwa',
    subtitle: 'Przymusowe uspółdzielczanie wsi 1948–1956',
    category: 'gospodarka',
    tags: ['rolnictwo', 'spółdzielnie', 'chłopi', 'stalinizm', 'wieś', 'opór', 'dekolektywizacja'],
    yearStart: 1948,
    yearEnd: 1956,
    summary: 'Kolektywizacja rolnictwa w Polsce (1948–1956) była stalinowską próbą likwidacji indywidualnych gospodarstw chłopskich i zastąpienia ich spółdzielniami produkcyjnymi. Przeprowadzana metodami przymusu administracyjnego, spotkała się z masowym oporem i zakończyła praktycznym niepowodzeniem — po Październiku 1956 r. rozwiązano ok. 80% spółdzielni.',
    content: `**Decyzja i ideologiczne podstawy** — Decyzja o kolektywizacji zapadła w 1948 r. wraz z „przełomem sierpniowym" w PPR/PZPR. Stalin osobiście nakazał Bierutowi przystąpienie do uspółdzielczania wsi jako warunku „budowy socjalizmu". Wzorem były sowieckie kołchozy i czechosłowacka kolektywizacja od 1949 r.

**Przebieg kampanii** — Do 1950 r. utworzono ok. 2200 spółdzielni, do 1955 r. — ok. 9700, skupiających niespełna 200 tys. gospodarstw (ok. 9% użytków rolnych). W ZSRS skołektywizowano ponad 90% ziemi; Polska nigdy nie przekroczyła 10%.

**Metody przymusu:**
- **Obowiązkowe dostawy** — chłopi zobowiązani do oddawania po zaniżonych cenach określonych ilości zboża, mięsa i mleba. Niezrealizowanie norm groziło karami finansowymi i kryminalnymi
- **Podatki karne** — rolnicy indywidualni obciążani wielokrotnie wyższymi podatkami niż spółdzielnie
- **UB i aktyw partyjny** — nagonki zebrań wiejskich, zastraszanie rodzin, aresztowania pod pretekstem „kułactwa" lub „sabotażu"
- Propaganda gloryfikująca spółdzielcze rolnictwo

**Opór chłopów** — Polscy chłopi ukrywali zboże i inwentarz, dokonywali fikcyjnych podziałów ziemi, emigrowali do miast. Zanotowano setki podpaleń dokumentacji spółdzielczej. UB szacowało tysiące „aktów wrogich wobec spółdzielni" rocznie.

**Katastrofa gospodarcza** — Plony w spółdzielniach były o 20–30% niższe niż w gospodarstwach indywidualnych. Racjonowanie chleba utrzymano do 1953 r. Hodowla trzody chlewnej drastycznie spadła, powodując wieloletnie niedobory mięsa.

**Dekolektywizacja po 1956** — Po Październiku 1956 r. Gomułka zrezygnował z przymusowej kolektywizacji. W ciągu kilku miesięcy rozpadło się ok. 80% spółdzielni. Polska stała się jedynym krajem bloku wschodniego, w którym przez cały PRL dominowało prywatne rolnictwo indywidualne.`,
    resources: [
      {
        id: 'kolektyw-1',
        title: 'Kolektywizacja rolnictwa w Polsce – opracowanie IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Kolektywizacja%20rolnictwa%20Polsce',
        source: 'Instytut Pamięci Narodowej',
        description: 'Naukowe opracowanie procesu kolektywizacji, metod przymusu i oporu chłopów.',
        year: 2010,
      },
      {
        id: 'kolektyw-2',
        title: 'Obowiązkowe dostawy – terror ekonomiczny na wsi',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=wies%20i%20rolnictwo%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Analiza systemu obowiązkowych dostaw jako narzędzia przymusu kolektywizacyjnego.',
        year: 1952,
      },
      {
        id: 'kolektyw-3',
        title: 'Wieś polska w stalinizmie – film IPN',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=kolektywizacja+wsi+PRL+dokument+IPN',
        source: 'IPN TV YouTube',
        description: 'Dokument o losach polskich chłopów w czasie stalinizmu i kampanii kolektywizacyjnej.',
        year: 2012,
      },
    ],
    relatedIds: ['gospodarka-prl', 'bierut', 'gomulka', 'manifest-pkwn', 'czerwiec-1956'],
  },

  {
    id: 'drugi-obieg',
    title: 'Drugi obieg wydawniczy',
    subtitle: 'Niezależny ruch wydawniczy w PRL 1976–1989',
    category: 'kultura',
    tags: ['NOWA', 'samizdat', 'bibuła', 'cenzura', 'wydawnictwa', 'opozycja', 'niezależna kultura'],
    yearStart: 1976,
    yearEnd: 1989,
    summary: 'Drugi obieg wydawniczy — sieć niezależnych wydawnictw i redakcji działających poza cenzurą PRL — rozwinął się intensywnie po 1976 r. Jego symbolem stało się Wydawnictwo NOWA (1977). Bezdebitowe publikacje dostarczały milionom Polaków niedostępną oficjalnie literaturę, dokumenty historyczne i prasę podziemną.',
    content: `**Geneza** — Tradycja niezależnego obiegu sięga lat 60. (maszynopisowe odpisy dzieł odrzuconych przez cenzurę). Drugi obieg jako zorganizowany ruch zrodził się po Czerwcu 1976 r. „Komunikat KOR" (1976) był pierwszym regularnym biuletynem. Wzorem był sowiecki i czechosłowacki samizdat, ale polska wersja przerosła skalą wszystkie odpowiedniki bloku wschodniego.

**Wydawnictwo NOWA** — Najważniejsza instytucja drugiego obiegu założona w 1977 r. przez Mirosława Chojeckiego. Do 1981 r. wydała ponad 100 tytułów: prozę Mackiewicza, eseje Kołakowskiego, dokumenty o Katyniu, literaturę emigracyjną. Druk na powielaczach cyklostylowych, z czasem na sprzęcie przemycanym z Zachodu.

**Najważniejsze periodyki:**
- **„Zapis"** (1977–1981) — pismo literackie z twórczością Barańczaka i Woroszylskiego
- **„Robotnik"** (1977–1981) — organ KOR, pismo społeczno-polityczne
- **„Puls"** (1977–1989) — literackie i eseistyczne
- **„Tygodnik Mazowsze"** (1982–1989) — największa podziemna gazeta w stanie wojennym, nakład do 80 tys. egz., ponad 300 numerów

**Techniki** — Druk na powielaczach, cyklostylach, od lat 80. na laserowych drukarkach z Zachodu. Kolportaż: sieć kurierów i punktów przekazania w dziesiątkach miast. Pracownicy ryzykowali aresztem i konfiskatą sprzętu.

**Ekspansja Solidarności** — Po Sierpniu 1980 Solidarność stworzyła własną legalną prasę (ok. 500 tytułów, setki tysięcy egzemplarzy). Po 13 grudnia 1981 cały ruch przeszedł w podziemie — w czasie stanu wojennego i po nim drugi obieg obejmował 1500–2000 tytułów pism i setki pozycji książkowych rocznie.

**Represje** — Władze stosowały rewizje, konfiskatę sprzętu i wielomiesięczne areszty. Chojecki był wielokrotnie zatrzymywany. Anonimizacja publikacji i kasowanie numerów seryjnych z powielaczy były technikami przeżycia.

**Dziedzictwo** — Drugi obieg ukształtował całe pokolenie liderów transformacji 1989 r. — przez dostarczanie wiedzy historycznej, filozoficznej i politycznej podtrzymywał niezależną świadomość społeczeństwa.`,
    resources: [
      {
        id: 'obieg-1',
        title: 'Drugi obieg wydawniczy – historia i katalog (IPN)',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Drugi%20obieg%20wydawniczy',
        source: 'Instytut Pamięci Narodowej',
        description: 'Kompleksowe opracowanie historii niezależnego ruchu wydawniczego w PRL.',
        year: 2012,
      },
      {
        id: 'obieg-2',
        title: 'NOWA – Niezależne Wydawnictwo Polskie',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=drugi%20obieg',
        source: 'Przystanek Historia / IPN',
        description: 'Historia Niezależnego Wydawnictwa Polskiego NOWA, założonego przez Chojeckiego w 1977 r.',
        year: 1977,
      },
      {
        id: 'obieg-3',
        title: 'Komunikaty KOR – Polona (Biblioteka Narodowa)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Komunikaty%20KOR%20Biblioteka',
        source: 'Polona – Biblioteka Narodowa',
        description: 'Cyfrowe kopie biuletynów KOR i innych druków bezdebitowych.',
        downloadable: true,
      },
    ],
    relatedIds: ['kor', 'solidarnosc', 'kultura-prl', 'stan-wojenny', 'sierpien-1980'],
  },

  {
    id: 'mazowiecki',
    title: 'Tadeusz Mazowiecki',
    subtitle: 'Pierwszy niekomunistyczny premier (1927–2013)',
    category: 'osoby',
    tags: ['premier', 'Solidarność', 'transformacja', 'Więź', 'Balcerowicz', 'gruba kreska', '1989'],
    yearStart: 1980,
    yearEnd: 2013,
    summary: 'Tadeusz Mazowiecki — katolicki intelektualista, redaktor Więzi, doradca Solidarności — 24 sierpnia 1989 r. został pierwszym niekomunistycznym premierem Polski od 1947 r. Jego rząd przeprowadził transformację ustrojową, „plan Balcerowicza" — radykalną terapię szokową — i ogłosił politykę „grubej kreski" w stosunku do PRL-owskiej przeszłości.',
    content: `**Biografia i środowisko** — Tadeusz Mazowiecki urodził się 18 kwietnia 1927 r. w Płocku. Związany z miesięcznikiem **Więź**, którego był redaktorem naczelnym w latach 1958–1981. Więź była unikalnym głosem polskiego katolicyzmu społecznego, otwartym na dialog z laicką inteligencją. Poseł Sejmu PRL z ramienia Koła Znak (1961–1971) — jeden z nielicznych, który głosował przeciw wzmocnieniu roli PZPR w konstytucji w 1976 r.

**Sierpień 1980** — Mazowiecki był jednym z pierwszych intelektualistów, którzy przybyli do strajkującej Stoczni Gdańskiej w sierpniu 1980 r. Wszedł w skład Komisji Ekspertów przy Solidarności i stał się kluczowym doradcą Wałęsy. Redagował „Tygodnik Solidarność" — nakład 500 tys. egzemplarzy. Po 13 grudnia 1981 r. internowany przez 6 miesięcy.

**Okrągły Stół 1989** — Był czołowym negocjatorem strony solidarnościowej, uczestnicząc w zespołach ds. pluralizmu związkowego i reform politycznych.

**Premier — powołanie i rząd** — Po druzgocącej porażce PZPR w wyborach 4 czerwca 1989 r. Wałęsa zaproponował Mazowieckiego na premiera. 24 sierpnia 1989 r. Sejm go powołał. Rząd był koalicyjny — resorty obrony i spraw wewnętrznych pozostały w rękach komunistów (Siwicki, Kiszczak).

**Plan Balcerowicza** — Mazowiecki powierzył tekę ministra finansów Leszkowi Balcerowiczowi, który wdrożył od 1 stycznia 1990 r. radykalną terapię szokową: uwolnienie cen, likwidację dotacji, wewnętrzną wymienialność złotego (kurs 9500 zł/USD), liberalizację handlu. Inflacja z 640% (1989) spadła do 70% (1991), kosztem wzrostu bezrobocia i recesji.

**„Gruba kreska"** — W exposé z 24 sierpnia 1989 r. Mazowiecki zapowiedział, że rząd „odcina się grubą kreską od przeszłości". Polityka ta była warunkiem pokojowego przekazania władzy, lecz krytykowana przez część opozycji jako zbyt łagodna wobec nomenklatury.

**Po premieraturze** — W wyborach prezydenckich 1990 r. przegrał w pierwszej turze ze Stanisławem Tymińskim. Był Specjalnym Sprawozdawcą ONZ ds. praw człowieka w Jugosławii (1992–1995), skąd zrezygnował w proteście wobec masakry w Srebrenicy. Zm. 28 października 2013 r. w Warszawie.`,
    resources: [
      {
        id: 'mazowiecki-1',
        title: 'Tadeusz Mazowiecki – premier transformacji (IPN)',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Tadeusz%20Mazowiecki%20premier',
        source: 'Instytut Pamięci Narodowej',
        description: 'Biogram i omówienie roli Mazowieckiego w polskiej transformacji ustrojowej.',
        year: 2013,
      },
      {
        id: 'mazowiecki-2',
        title: 'Exposé Mazowieckiego – 24 sierpnia 1989',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=expos%C3%A9+Mazowieckiego+1989+gruba+kreska',
        source: 'YouTube – archiwa Sejmu RP',
        description: 'Nagranie historycznego exposé pierwszego niekomunistycznego premiera PRL z formułą „grubej kreski".',
        year: 1989,
      },
      {
        id: 'mazowiecki-3',
        title: 'Okrągły Stół – portal tematyczny IPN',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Dokumentacja obrad Okrągłego Stołu, w których Mazowiecki odgrywał kluczową rolę.',
        year: 1989,
        downloadable: true,
      },
    ],
    relatedIds: ['okragly-stol', 'solidarnosc', 'walesa', 'sierpien-1980', 'stan-wojenny'],
  },

  {
    id: 'stocznia-gdanska',
    title: 'Stocznia Gdańska',
    subtitle: 'Kolebka Solidarności',
    category: 'opozycja',
    tags: ['Stocznia Gdańska', 'Solidarność', 'strajk', '1980', 'Gdańsk', 'Wałęsa'],
    yearStart: 1947,
    summary: 'Stocznia Gdańska im. Lenina – największy zakład przemysłowy Trójmiasta i symbol oporu robotniczego w PRL. To tutaj w sierpniu 1980 roku wybuchł strajk, który doprowadził do powstania NSZZ Solidarność.',
    content: `Stocznia Gdańska – jeden z największych zakładów przemysłowych w powojennej Polsce, zbudowany na gruzach dawnej Stoczni Gdańskiej (Danziger Werft). Oficjalnie otwarta w 1947 roku, szybko stała się jednym z flagowych projektów industrializacji PRL.

**Sierpień 1980 – narodziny Solidarności:**
14 sierpnia 1980 roku robotnicy stoczni pod przywództwem Anny Walentynowicz i Lecha Wałęsy ogłosili strajk. Bezpośrednią przyczyną było zwolnienie Anny Walentynowicz – działaczki związkowej i obrończyni praw pracowniczych. Strajk błyskawicznie objął dziesiątki zakładów wybrzeża.

31 sierpnia 1980 roku w Sali BHP podpisano Porozumienia Gdańskie – historyczny dokument gwarantujący m.in. prawo do wolnych związków zawodowych. Stocznia stała się symbolem walki o wolność.

**Grudzień 1970:**
Stocznia była świadkiem tragicznych wydarzeń Grudnia 1970, gdy funkcjonariusze strzelali do demonstrujących robotników. Pamięć o ofiarach była jednym z motywów sierpniowego strajku.

**Po 1989 roku:**
Po upadku PRL Stocznia Gdańska popadła w finansowe tarapaty. W 1996 roku ogłoszono upadłość. Na terenie stoczni powstało Europejskie Centrum Solidarności – muzeum i centrum badań nad historią oporu społecznego w Europie Środkowej.

Przed bramą stoczni wznosi się pomnik Poległych Stoczniowców 1970 – trzy krzyże symbolizujące ofiary Grudnia 1970, odsłonięte w 1980 roku jako jeden z warunków strajku.`,
    resources: [
      {
        id: 'stocznia-1',
        title: 'Europejskie Centrum Solidarności – historia Stoczni',
        type: 'publikacja',
        url: 'https://ecs.gda.pl/en/about/history/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Historia Stoczni Gdańskiej i narodzin Solidarności w archiwum ECS.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'stocznia-2',
        title: 'Strajk Sierpień 1980 – film dokumentalny',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=hO-MRUjczzI',
        source: 'YouTube / IPN',
        description: 'Dokument o wydarzeniach sierpniowych i roli Stoczni Gdańskiej.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'stocznia-3',
        title: 'Porozumienia Gdańskie – tekst dokumentu',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Porozumienia',
        source: 'Przystanek Historia / IPN',
        description: 'Pełny tekst Porozumień Gdańskich podpisanych w Stoczni 31 sierpnia 1980.',
        year: 1980,
        downloadable: true,
      },
    ],
    relatedIds: ['solidarnosc', 'sierpien-1980', 'walesa', 'grudzien-1970', 'kor'],
  },

  {
    id: 'radio-wolna-europa',
    title: 'Radio Wolna Europa',
    subtitle: 'Polska Sekcja RWE 1952–1994',
    category: 'kultura',
    tags: ['RWE', 'Radio Wolna Europa', 'propaganda', 'informacja', 'emigracja', 'Jan Nowak-Jeziorański'],
    yearStart: 1952,
    yearEnd: 1994,
    summary: 'Radio Wolna Europa – finansowana przez CIA rozgłośnia emigracyjna nadająca z Monachium. Polska sekcja RWE dostarczała Polakom niezależne informacje przez ponad 40 lat, stając się jednym z najważniejszych narzędzi oporu wobec komunistycznej propagandy.',
    content: `Radio Wolna Europa (Radio Free Europe) powstało w 1950 roku z inicjatywy rządu USA jako narzędzie informacyjne skierowane do krajów za żelazną kurtyną. Polska sekcja rozpoczęła nadawanie w 1952 roku z siedziby w Monachium.

**Rola w polskim życiu publicznym:**
Przez ponad 40 lat RWE było dla milionów Polaków głównym źródłem rzetelnych informacji – o strajkach, represjach, wydarzeniach na świecie, których nie pokazywała oficjalna prasa i telewizja. Słuchanie radia było ryzykowne – władze PRL aktywnie zagłuszały sygnał, a posiadanie odbiornika strojnego na zachodnie stacje mogło być pretekstem do szykan.

**Zagłuszanie:**
Komunistyczne władze przez dziesięciolecia prowadziły kosztowną akcję zagłuszania sygnału RWE. Wzdłuż zachodniej granicy ustawiano nadajniki zakłócające, a całoroczny budżet akcji zagłuszania przekraczał budżet samej rozgłośni.

**Czołowe postaci:**
- Jan Nowak-Jeziorański – legendarny dyrektor polskiej sekcji (1952–1976), kurier AK podczas II wojny światowej
- Zygmunt Michałowski, Jerzy Lerski i inni dziennikarze emigracyjni tworzyli trzon redakcji

**Wpływ na opozycję:**
RWE relacjonowało na bieżąco działalność KOR, Solidarności, strajki i represje stanu wojennego. Informacje nadawane przez radio wracały do kraju przez podziemny drugi obieg. Władze PRL wielokrotnie atakowały rozgłośnię – w 1981 roku dokonano zamachu bombowego na siedzibę w Monachium.

**Zakończenie działalności:**
Po 1989 roku misja RWE w Polsce stopniowo traciła rację bytu. Polska sekcja zakończyła nadawanie w 1994 roku.`,
    resources: [
      {
        id: 'rwe-1',
        title: 'Jan Nowak-Jeziorański i Radio Wolna Europa',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=radio%20wolna%20europa',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN poświęcony historii Radia Wolna Europa i jego roli w PRL.',
        year: 1952,
        downloadable: false,
      },
      {
        id: 'rwe-2',
        title: 'Archiwum nagrań Radia Wolna Europa – Polona',
        type: 'nagranie',
        url: 'https://polona.pl/search/?query=nagra%C5%84%20Radia%20Wolna',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Cyfrowe archiwum nagrań Polskiej Sekcji RWE dostępne w Polona.',
        year: 1952,
        downloadable: true,
      },
      {
        id: 'rwe-3',
        title: 'Zagłuszanie Radia Wolna Europa w PRL',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Zag%C5%82uszanie%20Radia%20Wolna',
        source: 'IPN Inwentarz / Archiwum',
        description: 'Dokumentacja działań aparatu bezpieczeństwa PRL wobec zachodnich rozgłośni – akta SB w zasobach IPN.',
        year: 1956,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-prl', 'drugi-obieg', 'cenzura-prl', 'kor', 'solidarnosc'],
  },

  {
    id: 'cenzura-prl',
    title: 'Cenzura PRL',
    subtitle: 'Główny Urząd Kontroli Prasy, Publikacji i Widowisk',
    category: 'kultura',
    tags: ['cenzura', 'GUKPPiW', 'wolność słowa', 'prasa', 'propaganda', 'indeks'],
    yearStart: 1946,
    yearEnd: 1990,
    summary: 'Cenzura w PRL – system kontroli wszelkich publikacji, audycji radiowych i telewizyjnych oraz widowisk publicznych. Główny Urząd Kontroli Prasy, Publikacji i Widowisk (GUKPPiW) funkcjonował od 1946 do 1990 roku jako narzędzie ideologicznego nadzoru nad kulturą i informacją.',
    content: `Cenzura prewencyjna w Polsce Ludowej została wprowadzona dekretem z 5 lipca 1946 roku. Powołano Główny Urząd Kontroli Prasy, Publikacji i Widowisk (GUKPPiW) z siedzibą w Warszawie. Każda publikacja – książka, gazeta, plakat, scenariusz filmowy – musiała przejść przez urząd przed dopuszczeniem do obiegu.

**Mechanizm działania:**
Cenzorzy GUKPPiW interweniowali na etapie redakcji, przed drukiem. Wydawnictwa znały niepisany katalog zakazanych tematów – oficjalnie lista nie istniała, nieoficjalnie każdy redaktor wiedział, czego nie wolno drukować. Tematy tabu obejmowały m.in.:
- Katyń i zbrodnie sowieckie na Polakach
- Rzeczywiste dane gospodarcze i statystyki
- Katastrofy, wypadki i przestępczość
- Krytykę ZSRR i przywódców PZPR
- Działalność Kościoła i opozycji

**Czarna Księga Cenzury:**
W 1977 roku pracownik GUKPPiW Tomasz Strzyżewski wykradł tajną instrukcję cenzorską i przekazał ją na Zachód. Opublikowana przez emigracyjne wydawnictwo ANEKS jako "Czarna Księga Cenzury PRL" ujawniła mechanizmy i listy zakazanych informacji – był to jeden z najważniejszych skandali propagandowych w historii PRL.

**Cenzura w kulturze:**
Wielu artystów, pisarzy i reżyserów – m.in. Ryszard Kapuściński, Zbigniew Herbert, Stanisław Barańczak – poddawana była ingerencjom cenzorskim lub trafiała na listy autorów zakazanych. Odpowiedzią na cenzurę był rozkwit podziemnego drugiego obiegu wydawniczego.

**Likwidacja:**
GUKPPiW został zniesiony ustawą z 11 kwietnia 1990 roku – jednym z pierwszych aktów prawnych nowego porządku demokratycznego.`,
    resources: [
      {
        id: 'cenzura-1',
        title: 'Czarna Księga Cenzury PRL – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=cenzura%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Obszerne opracowanie historii cenzury w PRL, w tym ujawnienia Czarnej Księgi.',
        year: 1977,
        downloadable: false,
      },
      {
        id: 'cenzura-2',
        title: 'Dokumenty GUKPPiW – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=GUKPPiW%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Akta Głównego Urzędu Kontroli Prasy, Publikacji i Widowisk w zasobach AAN – wyszukiwarka archiwów państwowych.',
        year: 1946,
        downloadable: false,
      },
      {
        id: 'cenzura-3',
        title: 'Cenzura PRL – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Cenzura',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN dotyczące systemu cenzury i kontroli informacji w PRL.',
        year: 1946,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'drugi-obieg', 'radio-wolna-europa', 'represje-polityczne', 'pzpr'],
  },

  {
    id: 'pazdziernik-1956',
    title: 'Październik 1956',
    subtitle: 'Odwilż i dojście Gomułki do władzy',
    category: 'polityka',
    tags: ['Gomułka', 'odwilż', 'destalinizacja', '1956', 'VIII Plenum', 'Chruszczow'],
    yearStart: 1956,
    summary: 'Październik 1956 w Polsce – moment przełomowy, gdy po śmierci Stalina i Poznańskim Czerwcu władze PZPR pod presją społeczną przywróciły do władzy Władysława Gomułkę. Wydarzenie zwane polską odwilżą lub Październikiem 1956 dało Polakom nadzieję na liberalizację, choć nie zmieniło istoty systemu komunistycznego.',
    content: `Październik 1956 roku był kulminacją procesów odwilżowych zapoczątkowanych śmiercią Stalina w 1953 roku i tzw. referatem Chruszczowa na XX Zjeździe KPZR w lutym 1956 roku, potępiającym kult jednostki.

**Kontekst – rok 1956:**
Polska była w stanie głębokiego wstrząsu. W czerwcu 1956 roku w Poznaniu robotnicy wyszli na ulice – zginęło co najmniej 57 osób. Atmosferę napięcia podsycały protesty studenckiej i inteligenckiej młodzieży, debaty na łamach Nowej Kultury i Po Prostu.

**VIII Plenum KC PZPR (19–21 października 1956):**
Na obrady Komitetu Centralnego nieoczekiwanie przybyli sowieccy przywódcy z Chruszczowem na czele, obawiając się destabilizacji. Doszło do dramatycznej konfrontacji – polska delegacja odmówiła ustępstw. Wojciech Jaruzelski i Marian Spychalski objęli komendę nad wojskiem. Ostatecznie Sowieci ustąpili, a I sekretarzem PZPR został Władysław Gomułka, odsunięty od władzy w 1948 roku.

**Gomułka i nadzieje społeczne:**
Powrót Gomułki wywołał entuzjazm społeczny – przemówienie do warszawskiego tłumu oglądały setki tysięcy ludzi. Nowy I sekretarz mówił o polskiej drodze do socjalizmu, zniesieniu kołchozów, normalizacji stosunków z Kościołem. Zwolniono prymasa Wyszyńskiego z internowania.

**Ograniczenia odwilży:**
Październik 1956 nie zmienił zasad systemu. Cenzura pozostała, Polska trwała w bloku wschodnim, a Gomułka stopniowo cofał liberalizację. Pismo Po Prostu zostało zamknięte w 1957 roku. Nadzieje na prawdziwą demokratyzację okazały się złudne.`,
    resources: [
      {
        id: 'paz56-1',
        title: 'Październik 1956 – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=pazdziernik%201956',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o wydarzeniach Października 1956 i ich znaczeniu.',
        year: 1956,
        downloadable: false,
      },
      {
        id: 'paz56-2',
        title: 'Przemówienie Gomułki – Plac Defilad 1956',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=przem%C3%B3wienie+Gomu%C5%82ki+1956+Plac+Defilad',
        source: 'YouTube / Archiwum TVP',
        description: 'Historyczne nagranie przemówienia Gomułki do tłumu w Warszawie w październiku 1956.',
        year: 1956,
        downloadable: false,
      },
      {
        id: 'paz56-3',
        title: 'Polskie Miesiące – Październik 1956',
        type: 'publikacja',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/pazdziernik-1956',
        source: 'IPN Polskie Miesiące',
        description: 'Kalendarium i dokumenty dotyczące Października 1956 w portalu IPN.',
        year: 1956,
        downloadable: false,
      },
    ],
    relatedIds: ['gomulka', 'czerwiec-1956', 'bierut', 'wyszynski', 'pzpr'],
  },

  {
    id: 'ub',
    title: 'Urząd Bezpieczeństwa',
    subtitle: 'Stalinowski aparat terroru 1944–1956',
    category: 'represje',
    tags: ['UB', 'MBP', 'Radkiewicz', 'terror', 'stalinizm', 'NKWD', 'bezpieka'],
    yearStart: 1944,
    yearEnd: 1956,
    summary: 'Urząd Bezpieczeństwa (UB) – stalinowski aparat terroru działający w Polsce w latach 1944–1956. Podległy Ministerstwu Bezpieczeństwa Publicznego, przy sowieckim nadzorze NKWD/MWD, prowadził masowe aresztowania, tortury i egzekucje przeciwników politycznych.',
    content: `Urząd Bezpieczeństwa Publicznego – potocznie zwany bezpieką lub UB – powstał jesienią 1944 roku na terenach wyzwolonych spod okupacji niemieckiej, wzorowany bezpośrednio na sowieckiej strukturze NKWD. Jego zadaniem była eliminacja wszelkiej opozycji politycznej i wojskowej wobec nowej władzy komunistycznej.

**Struktura i nadzór sowiecki:**
Na czele resortu bezpieczeństwa stał Stanisław Radkiewicz. W aparacie UB pracowało wielu oficerów NKWD/MWD oddelegowanych z ZSRR – m.in. gen. Iwan Sierow nadzorował operacje w Polsce. Doradcy sowieccy byli obecni na wszystkich szczeblach.

**Skala terroru:**
W latach 1944–1956 UB i jego poprzednicy:
- Aresztowali setki tysięcy osób
- Przeprowadzili dziesiątki tysięcy egzekucji (żołnierze podziemia, politycy, duchowni)
- Stosowali systematyczne tortury w trakcie śledztw
- Prowadzili obozy pracy (m.in. Jaworzno, Potulice)
- Rozpracowywali i likwidowali struktury Armii Krajowej i WiN

**Procesy pokazowe:**
UB przygotowywał procesy polityczne, w których oskarżeni pod wpływem tortur składali zeznania zgodne z potrzebami propagandy. Najbardziej znane to procesy gen. Augusta Emila Fieldorfa Nila, kard. Stefana Wyszyńskiego (internowanie) oraz czołowych dowódców AK.

**Likwidacja UB:**
Po Październiku 1956 roku Ministerstwo Bezpieczeństwa Publicznego zostało rozwiązane. W jego miejsce powołano Służbę Bezpieczeństwa (SB) przy Ministerstwie Spraw Wewnętrznych – kontynuatorkę działalności, choć z mniejszymi uprawnieniami terroru fizycznego.`,
    resources: [
      {
        id: 'ub-1',
        title: 'Urząd Bezpieczeństwa – portal edukacyjny IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Urz%C4%85d%20Bezpiecze%C5%84stwa%20edukacyjny',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN dotyczące aparatu bezpieczeństwa w latach 1944–1956.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'ub-2',
        title: 'Inwentarz akt UB i MBP – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Inwentarz%20akt%20MBP',
        source: 'IPN Inwentarz',
        description: 'Baza dokumentów archiwalnych Ministerstwa Bezpieczeństwa Publicznego i terenowych UB.',
        year: 1944,
        downloadable: false,
      },
      {
        id: 'ub-3',
        title: 'Terror stalinowski w Polsce – film dokumentalny',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Terror%20stalinowski%20Polsce',
        source: 'NINATEKA',
        description: 'Film dokumentalny o działalności UB i procesach politycznych okresu stalinowskiego.',
        year: 1951,
        downloadable: false,
      },
    ],
    relatedIds: ['represje-polityczne', 'sbezpieczenstwa', 'bierut', 'zolnierze-wykletci', 'wyszynski'],
  },

  {
    id: 'palac-kultury',
    title: 'Pałac Kultury i Nauki',
    subtitle: 'Dar Stalina dla Warszawy 1952–1955',
    category: 'społeczeństwo',
    tags: ['PKiN', 'Stalin', 'Warszawa', 'socrealizm', 'architektura', 'propaganda'],
    yearStart: 1952,
    yearEnd: 1955,
    summary: 'Pałac Kultury i Nauki w Warszawie – wzniesiony w latach 1952–1955 jako "dar narodu radzieckiego dla narodu polskiego". Zaprojektowany przez sowieckiego architekta Lwa Rudniewa, stał się jednym z najbardziej kontrowersyjnych symboli epoki PRL i dominantą panoramy Warszawy.',
    content: `Pałac Kultury i Nauki im. Józefa Stalina (pierwotna pełna nazwa) – gmach liczący 231 metrów wysokości, przez dziesięciolecia najwyższy budynek w Polsce. Zbudowany w centrum Warszawy na wzorcu sowieckich drapaczy chmur (tzw. stalinowskie tortownice) w stylu socrealistycznym.

**Geneza i budowa:**
Decyzja o budowie zapadła w 1951 roku podczas wizyty Bieruta w Moskwie. Oferta sowiecka miała charakter propagandowego gestu. Projekt opracował Lew Rudniew, główny architekt gmachów moskiewskich. Budowę wykonało 3500 sowieckich robotników przywiezionych do Polski, pracujących w specjalnych zamkniętych osiedlach.

**Skala i funkcje:**
- 42 piętra, 3,3 tys. pomieszczeń
- Teatr Dramatyczny, kino, baseny, uczelnie, muzea, sale konferencyjne
- Taras widokowy na 30. piętrze

**Kontrowersje:**
Pałac wznosił się na miejscu przedwojennej zabudowy Śródmieścia, wyburzonej po wojnie lub zniszczonej. Dla wielu Polaków był symbolem sowieckiego panowania i narzuconej zależności – stąd m.in. powiedzonko, że najlepszy widok na Warszawę jest z tarasu PKiN, bo tylko stamtąd Pałacu nie widać.

**Po 1989 roku:**
Po upadku PRL usunięto z nazwy człon upamiętniający Stalina. Dyskusja o wyburzeniu lub przebudowie gmachu toczyła się przez lata. Dziś Pałac Kultury i Nauki wpisany jest na listę zabytków i pozostaje ikoną warszawskiej panoramy.`,
    resources: [
      {
        id: 'pkwn-pki-1',
        title: 'Pałac Kultury i Nauki – historia budowy',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=palac%20kultury%20i%20nauki',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o historii budowy PKiN i jego znaczeniu propagandowym w PRL.',
        year: 1955,
        downloadable: false,
      },
      {
        id: 'pkwn-pki-2',
        title: 'Warszawa w socrealistycznej architekturze – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Warszawa%20socrealistycznej%20architekturze',
        source: 'NINATEKA',
        description: 'Kroniki filmowe i dokumenty archiwalne ukazujące Warszawę lat 50. i budowę PKiN.',
        year: 1952,
        downloadable: false,
      },
      {
        id: 'pkwn-pki-3',
        title: 'Socrealizm w architekturze PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Socrealizm%20architekturze',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdjęcia archiwalne budowy Pałacu Kultury i Nauki oraz Warszawy lat 50.',
        year: 1952,
        downloadable: true,
      },
    ],
    relatedIds: ['bierut', 'kultura-prl', 'manifest-pkwn', 'kolektywizacja', 'nowa-huta'],
  },

  {
    id: 'strajki-1988',
    title: 'Strajki 1988',
    subtitle: 'Fala protestu i droga do Okrągłego Stołu',
    category: 'opozycja',
    tags: ['strajki 1988', 'Solidarność', 'Okrągły Stół', 'Wałęsa', 'młoda Solidarność'],
    yearStart: 1988,
    summary: 'Dwie fale strajków w 1988 roku – wiosenna i letnia – wstrząsnęły schyłkowym PRL. Protestująca młodzież robotnicza wymusiła na władzach podjęcie dialogu z opozycją, co bezpośrednio doprowadziło do rozmów Okrągłego Stołu.',
    content: `Rok 1988 był ostatnim rokiem realnej próby sił między władzami PRL a społeczeństwem. Na tle głębokiego kryzysu ekonomicznego i drożyzny wybuchły dwie fale strajków, które zaskoczyły zarówno władze, jak i podziemną Solidarność.

**Wiosna 1988 – pierwsza fala:**
W kwietniu i maju 1988 roku strajki objęły m.in. Hutę im. Lenina w Nowej Hucie, Stocznię Gdańską i zakłady komunikacji miejskiej. Żądania miały charakter płacowy, ale szybko pojawiły się hasła polityczne – przywrócenia Solidarności. Władze przerwały strajki przy pomocy ZOMO, jednak nie zdecydowały się na masowe represje.

**Lato 1988 – druga fala:**
W sierpniu strajki powróciły z większą siłą. Do protestu przyłączyły się kopalnie węgla – Manifest Lipcowy, Staszic, Jastrzębie. Stocznia Gdańska strajkowała ponownie. Wałęsa negocjował zakończenie strajku, obiecując dialog z władzami.

**Młoda Solidarność:**
Znakiem szczególnym strajków 1988 było to, że w wielu zakładach do protestu weszło nowe pokolenie robotników – młodych ludzi, którzy w 1980 roku byli dziećmi. Dla władz był to sygnał, że represje stanu wojennego nie zlikwidowały ducha oporu.

**Droga do Okrągłego Stołu:**
Pod wpływem strajków gen. Czesław Kiszczak podjął pierwsze rozmowy z Wałęsą. Telewizyjna debata Wałęsa–Miodowicz (30 listopada 1988) stała się symbolem zmiany – Solidarność wróciła do przestrzeni publicznej. W lutym 1989 roku rozpoczęły się obrady Okrągłego Stołu.`,
    resources: [
      {
        id: 'strajki88-1',
        title: 'Strajki 1988 – Polskie Miesiące IPN',
        type: 'publikacja',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia',
        source: 'IPN Polskie Miesiące',
        description: 'Dokumentacja strajków 1988 roku w portalu IPN poświęconym kluczowym wydarzeniom PRL.',
        year: 1988,
        downloadable: false,
      },
      {
        id: 'strajki88-2',
        title: 'Debata Wałęsa–Miodowicz 1988',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=nTEspBNM8Z0',
        source: 'YouTube / TVP Archiwum',
        description: 'Historyczna debata telewizyjna Lecha Wałęsy z Alfredem Miodowiczem z 30 listopada 1988.',
        year: 1988,
        downloadable: false,
      },
      {
        id: 'strajki88-3',
        title: 'Droga do Okrągłego Stołu – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Opracowanie drogi od strajków 1988 do rozmów Okrągłego Stołu.',
        year: 1988,
        downloadable: false,
      },
    ],
    relatedIds: ['okragly-stol', 'solidarnosc', 'walesa', 'stan-wojenny', 'zomo'],
  },

  {
    id: 'nomenklatura',
    title: 'Nomenklatura',
    subtitle: 'System przywilejów komunistycznej elity',
    category: 'polityka',
    tags: ['nomenklatura', 'przywileje', 'PZPR', 'elita', 'Pewex', 'dostęp', 'sklepy za żółtymi firankami'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Nomenklatura – system obsady stanowisk kierowniczych w PRL, zarezerwowanych wyłącznie dla osób zatwierdzonych przez PZPR. Tworzył on uprzywilejowaną klasę społeczną korzystającą z dóbr niedostępnych dla ogółu obywateli.',
    content: `Nomenklatura (od łac. nomenclatura – wykaz nazw) to pojęcie oznaczające listę stanowisk, których obsada wymagała zatwierdzenia przez odpowiednie instancje partyjne PZPR. W praktyce oznaczało to, że aparat partyjny kontrolował kluczowe mianowania na wszystkich szczeblach – od dyrektorów fabryk po rektorów uczelni, redaktorów naczelnych, sędziów i oficerów wojska.

**Dwie listy:**
- Nomenklatura KC PZPR – kilkaset najważniejszych stanowisk w całym kraju
- Nomenklatura komitetów wojewódzkich i powiatowych – tysiące stanowisk lokalnych

**Przywileje nomenklatury:**
Osoby należące do elity partyjnej korzystały z systemu przywilejów niedostępnych dla przeciętnego obywatela:
- Sklepy wewnętrzne (tzw. sklepy za żółtymi firankami) z towarami luksusowymi
- Lekarze i szpitale resortowe wyższego standardu
- Wczasy w ośrodkach partyjnych (Mazury, Wisła, Karpacz)
- Limuzyny służbowe i szoferzy
- Dewizy i dostęp do sklepów Pewex (waluta zachodnia)
- Mieszkania w prestiżowych lokalizacjach
- Paszporty i możliwość podróży na Zachód

**Sprzeczność z ideologią:**
Istnienie nomenklatury stało w jaskrawej sprzeczności z oficjalną ideologią równości i dyktatury proletariatu. Rozziew między propagandą a rzeczywistością był jednym z powodów narastającego cynizmu społecznego i odrzucenia komunizmu.

**Koniec nomenklatury:**
Po 1989 roku wielu przedstawicieli nomenklatury sprawnie dokonało transformacji – przeszli z partyjnych foteli do zarządów prywatyzowanych przedsiębiorstw. Zjawisko tzw. uwłaszczenia nomenklatury było jednym z kontrowersyjnych elementów polskiej transformacji ustrojowej.`,
    resources: [
      {
        id: 'nomenklatura-1',
        title: 'Nomenklatura PZPR – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=pzpr',
        source: 'Przystanek Historia / IPN',
        description: 'Opracowanie historii PZPR i systemu nomenklatury jako mechanizmu władzy partyjnej.',
        year: 1948,
        downloadable: false,
      },
      {
        id: 'nomenklatura-2',
        title: 'Akta KC PZPR – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-1948-1990-sygnatury-od-1-do-4938-i-354/',
        source: 'Archiwum Akt Nowych',
        description: 'Dokumenty Komitetu Centralnego PZPR, w tym listy nominacji nomenklaturowych.',
        year: 1948,
        downloadable: false,
      },
      {
        id: 'nomenklatura-3',
        title: 'Przywileje partyjne w PRL – film dokumentalny',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Przywileje%20partyjne%20film',
        source: 'NINATEKA',
        description: 'Dokumenty i kroniki filmowe ukazujące życie codzienne elity partyjnej PRL.',
        year: 1960,
        downloadable: false,
      },
    ],
    relatedIds: ['pzpr', 'gospodarka-prl', 'gierek', 'gomulka', 'bierut'],
  },

  {
    id: 'katyn',
    title: 'Zbrodnia Katyńska',
    subtitle: 'Sowieckie ludobójstwo 1940 i wieloletnie kłamstwo PRL',
    category: 'represje',
    tags: ['Katyń', 'NKWD', 'Sowieci', 'ludobójstwo', 'kłamstwo katyńskie', '1940', 'oficerowie'],
    yearStart: 1940,
    yearEnd: 1990,
    summary: 'Wiosną 1940 roku NKWD zamordowało blisko 22 000 polskich oficerów, policjantów i przedstawicieli inteligencji. Przez całe 45 lat PRL władze komunistyczne ukrywały prawdę i zrzucały winę na Niemców. Prawda oficjalnie wyszła na jaw dopiero w 1990 roku.',
    content: `Zbrodnia katyńska – jedno z największych morderstw na polskich elitach w XX wieku. Na mocy rozkazu Stalina i decyzji Politbiura KC WKP(b) z 5 marca 1940 roku NKWD rozstrzelało około 21 768 obywateli polskich wziętych do sowieckiej niewoli po 17 września 1939 roku.

**Ofiary:**
Zamordowani to przede wszystkim oficerowie wojska polskiego, policjanci, żandarmi, ziemianie, urzędnicy i inteligencja – elita II Rzeczypospolitej. Egzekucje przeprowadzono w Katyniu (koło Smoleńska), Charkowie, Kalininie (Twerze) oraz w obozach na Ukrainie.

**Odkrycie przez Niemców (1943):**
W kwietniu 1943 roku niemieccy żołnierze odkryli masowe groby w Lesie Katyńskim koło Smoleńska. Niemcy ogłosili zbrodnię sowieckiego NKWD. ZSRR zaprzeczył i oskarżył Niemcy. Rząd Sikorskiego zażądał śledztwa Międzynarodowego Czerwonego Krzyża – Stalin zerwał stosunki z polskim rządem na uchodźstwie.

**Kłamstwo katyńskie w PRL:**
Przez całe istnienie PRL (1944–1989) komunistyczne władze podtrzymywały kłamstwo, że zbrodni dokonali Niemcy. Prawda była tematem tabu – za samo wspomnienie Katynia groziły represje. Pierwsze ostrożne sygnały zmiany pojawiły się za Gorbaczowa.

**Uznanie prawdy:**
13 kwietnia 1990 roku Michaił Gorbaczow oficjalnie przyznał, że NKWD dokonało mordu. Polska i Rosja przez lata prowadziły trudne śledztwa. Symbolicznym zamknięciem rozdziału miał być szczyt 10 kwietnia 2010 roku – katastrofa samolotu pod Smoleńskiem pochłonęła delegację polską lecącą na obchody 70. rocznicy zbrodni.`,
    resources: [
      {
        id: 'katyn-1',
        title: 'Zbrodnia Katyńska – portal IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=zbrodnia%20katynska',
        source: 'IPN',
        description: 'Obszerny artykuł IPN poświęcony historii zbrodni katyńskiej i kłamstwa PRL.',
        year: 1940,
        downloadable: false,
      },
      {
        id: 'katyn-2',
        title: 'Katyń – film Andrzeja Wajdy (2007)',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=Katy%C5%84+film+Wajdy+2007',
        source: 'YouTube / Studio Filmowe TOR',
        description: 'Nagradzany film Andrzeja Wajdy o losach rodzin oficerów zamordowanych w Katyniu.',
        year: 2007,
        downloadable: false,
      },
      {
        id: 'katyn-3',
        title: 'Decyzja Politbiura z 5 marca 1940 – dokument',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=zbrodnia%20katynska',
        source: 'Przystanek Historia / IPN',
        description: 'Dokumentacja decyzji Stalina i realizacji zbrodni – portal tematyczny IPN.',
        year: 1940,
        downloadable: true,
      },
    ],
    relatedIds: ['represje-polityczne', 'ub', 'manifest-pkwn', 'bierut', 'zolnierze-wykletci'],
  },

  {
    id: 'milicja',
    title: 'Milicja Obywatelska',
    subtitle: 'Policyjna twarz komunizmu 1944–1990',
    category: 'represje',
    tags: ['MO', 'Milicja', 'ORMO', 'porządek publiczny', 'represje', 'mundur'],
    yearStart: 1944,
    yearEnd: 1990,
    summary: 'Milicja Obywatelska (MO) – komunistyczna formacja policyjna powołana w 1944 roku jako zamiennik przedwojennej Policji Państwowej. Przez 45 lat pełniła funkcje porządkowe, lecz przede wszystkim była narzędziem represji politycznych i kontroli społeczeństwa.',
    content: `Milicja Obywatelska powstała 7 października 1944 roku dekretem PKWN. Nazwa celowo nawiązywała do tradycji rewolucyjnych – zamiast "policji" kojarzącej się z burżuazyjnym państwem, użyto słowa "milicja". W praktyce MO przejęła funkcje policji, ale pod ścisłym nadzorem partyjnym i sowieckiego NKWD.

**Struktura:**
- Komendy Główna, Wojewódzkie, Powiatowe, Dzielnicowe
- Służba Dochodzeniowo-Śledcza
- Zmotoryzowane Odwody Milicji Obywatelskiej (ZOMO) – od 1956
- Ochotnicza Rezerwa Milicji Obywatelskiej (ORMO) – milicja ochotnicza

**ORMO – ramię społeczne:**
Ochotnicza Rezerwa Milicji Obywatelskiej liczyła setki tysięcy członków. Wykorzystywana do tłumienia protestów, kontrolowania zakładów pracy i demonstracji. Przynależność do ORMO dawała pewne przywileje, ale też kompromitowała w oczach społeczeństwa.

**Milicja a represje polityczne:**
MO ściśle współpracowała z SB (Służbą Bezpieczeństwa). Uczestniczyła w pacyfikacjach: Czerwiec 1956, Marzec 1968, Grudzień 1970, Czerwiec 1976, stan wojenny. Milicjanci strzelali do demonstrantów w Gdańsku i Gdyni w 1970 roku.

**Codzienne oblicze MO:**
Milicja była powszechnie obecna w życiu codziennym. Legitymowanie obywateli, łapanki, kontrole drogowe służyły zarówno celom kryminalnym, jak i politycznym. Kontakty z milicją obywatele traktowali z lękiem i pogardą – stąd pogardliwe określenia "milicjant", "glina", "pała".

**Likwidacja:**
6 kwietnia 1990 roku Sejm RP uchwalił ustawę powołującą Policję i rozwiązującą Milicję Obywatelską. Znaczna część milicjantów przeszła do nowej formacji po weryfikacji.`,
    resources: [
      {
        id: 'milicja-1',
        title: 'Milicja Obywatelska – historia i dokumenty IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Milicja%20Obywatelska',
        source: 'IPN Inwentarz',
        description: 'Akta Komendy Głównej MO i terenowych komend w zasobach archiwalnych IPN.',
        year: 1944,
        downloadable: false,
      },
      {
        id: 'milicja-2',
        title: 'Grudzień 1970 – milicja i wojsko strzelają do robotników',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=ryyPQ_Q9hGM',
        source: 'YouTube / IPN',
        description: 'Dokument o Grudniu 1970 i roli milicji w pacyfikacji robotników Wybrzeża.',
        year: 1970,
        downloadable: false,
      },
      {
        id: 'milicja-3',
        title: 'ZOMO – elitarne oddziały MO',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=ZOMO%20elitarne%20oddzia%C5%82y',
        source: 'IPN',
        description: 'Artykuł IPN o ZOMO – zmotoryzowanych oddziałach MO użytych w stanie wojennym.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['zomo', 'sbezpieczenstwa', 'ub', 'stan-wojenny', 'grudzien-1970'],
  },

  {
    id: 'kino-prl',
    title: 'Polska Szkoła Filmowa',
    subtitle: 'Kino jako głos sprzeciwu wobec systemu',
    category: 'kultura',
    tags: ['Wajda', 'Polański', 'Munk', 'Zanussi', 'Kieślowski', 'film', 'szkoła polska'],
    yearStart: 1955,
    yearEnd: 1989,
    summary: 'Polska Szkoła Filmowa – nurt w kinie polskim lat 1955–1963, który przy użyciu metafory i symbolu podejmował temat II wojny, Holokaustu i moralnych rozterek. Późniejsze pokolenia twórców – Zanussi, Kieślowski, Holland – kontynuowały tradycję kina artystycznego w PRL.',
    content: `Polskie kino okresu PRL paradoksalnie należało do najwybitniejszych na świecie. Twórcy, operując alegorią i przemycając treści niemożliwe do powiedzenia wprost, stworzyli filmy o światowej randze.

**Polska Szkoła Filmowa (1955–1963):**
Po Październiku 1956 kino zyskało chwilę oddechu. Andrzej Wajda ("Kanał" 1957, "Popiół i diament" 1958), Andrzej Munk ("Eroica" 1958, "Zezowate szczęście" 1960) i Jerzy Kawalerowicz ("Matka Joanna od Aniołów" 1961) tworzyli filmy rozliczające się z mitem heroicznym i wojennym.

**Roman Polański:**
Debiutował w Polsce – "Nóż w wodzie" (1962) był pierwszym polskim filmem nominowanym do Oscara. Wkrótce wyjechał na Zachód i osiągnął międzynarodową sławę.

**Kino moralnego niepokoju (lata 70.):**
Krzysztof Zanussi, Krzysztof Kieślowski, Agnieszka Holland i Filip Bajon tworzyli filmy rozliczające się z codziennością PRL, kompromisami, konformizmem i systemem. "Przypadek" Kieślowskiego, "Barwy ochronne" Zanussiego – to filmy, które władze blokowały lub niechętnie dopuszczały.

**Cenzura i produkcja:**
Wszystkie filmy powstawały w państwowych wytwórniach i podlegały cenzurze. Scenariusze musiały przejść przez komisje. Część filmów lądowała "na półce" – blokowana przez cenzurę przez lata.

**Najważniejsze filmy:**
- "Kanał" (Wajda, 1956) – Nagroda Specjalna Jury Cannes
- "Popiół i diament" (Wajda, 1958) – arcydzieło kina moralnego
- "Człowiek z marmuru" (Wajda, 1977) – o sfabrykowaniu bohatera socjalizmu
- "Człowiek z żelaza" (Wajda, 1981) – Palme d\'Or w Cannes, o Solidarności`,
    resources: [
      {
        id: 'kino-1',
        title: 'NINATEKA – archiwum polskiego kina',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=polskiego%20kina',
        source: 'Filmoteka Narodowa – Instytut Audiowizualny',
        description: 'Największe cyfrowe archiwum polskich filmów, dokumentów i kronik filmowych z PRL.',
        year: 1955,
        downloadable: false,
      },
      {
        id: 'kino-2',
        title: 'Polska Szkoła Filmowa – opracowanie',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=polska%20szkola%20filmowa',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o nurcie Polskiej Szkoły Filmowej i jej twórcach.',
        year: 1957,
        downloadable: false,
      },
      {
        id: 'kino-3',
        title: 'Człowiek z żelaza – Wajda 1981',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=Cz%C5%82owiek+z+%C5%BCelaza+Wajda+1981',
        source: 'YouTube',
        description: 'Zwiastun nagrodzonego Złotą Palmą w Cannes 1981 roku filmu Andrzeja Wajdy o Solidarności.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'drugi-obieg', 'solidarnosc'],
  },

  {
    id: 'propaganda-prl',
    title: 'Propaganda PRL',
    subtitle: 'Nowomowa i fabrykowanie rzeczywistości',
    category: 'kultura',
    tags: ['propaganda', 'nowomowa', 'DTV', 'Trybuna Ludu', 'PAP', 'media', 'telewizja'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Propaganda PRL – rozbudowany system manipulowania informacją i kształtowania świadomości społecznej przez komunistyczne władze. Obejmował prasę, radio, telewizję, plakat, film, szkołę i język publiczny (nowomowę).',
    content: `System propagandowy PRL budowany był od pierwszych dni nowej władzy i obejmował każdą sferę życia publicznego. Wzorowany na sowieckich metodach, łączył pozytywną agitację (sukcesy socjalizmu) z negatywną (strach przed Zachodem i wrogami klasowymi).

**Narzędzia propagandy:**

*Prasa:*
"Trybuna Ludu" – oficjalny organ KC PZPR, wyznaczała linię ideologiczną dla całej prasy. Wszystkie tytuły podlegały cenzurze GUKPPiW i redakcyjnemu nadzorowi partyjnemu.

*Polskie Radio i TVP:*
Telewizja Polska rozpoczęła emisję w 1952 roku. "Dziennik Telewizyjny" (od 1958) był głównym narzędziem propagandy – stronnicze informacje, przemilczenia, manipulacja obrazem. W stanie wojennym spikerzy pojawiali się w mundurach wojskowych.

*PAP – Polska Agencja Prasowa:*
Jedyne oficjalne źródło informacji dla wszystkich redakcji. Przekazywała wyłącznie zatwierdzone wiadomości.

*Plakat i sztuka:*
Socrealismus nakazywał tworzyć sztukę służącą partii. Plakaty agitacyjne, monumentalne rzeźby, murale – cała przestrzeń publiczna była nasycona symboliką władzy.

**Nowomowa:**
Termin spopularyzowany przez Orwella (w "Roku 1984"), w polskim kontekście opisany przez Michała Głowińskiego w "Nowomowie po polsku". Język propagandy operował eufemizmami ("normalizacja" zamiast represji), sloganami i odwróconym znaczeniem słów.

**Opór społeczny:**
Społeczeństwo nauczyło się czytać między wierszami. Żarty polityczne (kawały o Radiu Erewań), samizdaty, drugi obieg – to formy oddolnego oporu wobec propagandy.`,
    resources: [
      {
        id: 'prop-1',
        title: 'Dziennik Telewizyjny – kroniki i archiwum TVP',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=OkmJ-PZMCj8',
        source: 'YouTube / TVP Archiwum',
        description: 'Archiwalne wydania Dziennika Telewizyjnego – przykład propagandy medialnej PRL.',
        year: 1981,
        downloadable: false,
      },
      {
        id: 'prop-2',
        title: 'Nowomowa PRL – archiwum prasy',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Nowomowa%20prasy',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Cyfrowe archiwum prasy PRL – Trybuna Ludu, Życie Warszawy i inne tytuły z epoki.',
        year: 1952,
        downloadable: true,
      },
      {
        id: 'prop-3',
        title: 'Propaganda PRL – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Propaganda',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o mechanizmach propagandy komunistycznej w Polsce.',
        year: 1944,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'pzpr', 'radio-wolna-europa', 'drugi-obieg'],
  },

  {
    id: 'akcja-wisla',
    title: 'Akcja Wisła',
    subtitle: 'Przymusowe wysiedlenia Ukraińców 1947',
    category: 'represje',
    tags: ['Akcja Wisła', 'Ukraińcy', 'wysiedlenia', 'UPA', '1947', 'Łemkowie', 'Bojkowie'],
    yearStart: 1947,
    summary: 'Akcja Wisła – przeprowadzona wiosną i latem 1947 roku przez władze komunistyczne przymusowa deportacja około 150 000 Ukraińców, Łemków i Bojków z południowo-wschodniej Polski na Ziemie Odzyskane. Jedna z największych operacji etnicznych w powojennej historii Polski.',
    content: `Akcja Wisła trwała od 28 kwietnia do 31 lipca 1947 roku. Jej oficjalnym powodem była walka z Ukraińską Powstańczą Armią (UPA), jednak w istocie była to operacja etniczna mająca na celu trwałe rozproszenie ukraińskiej i łemkowskiej mniejszości narodowej.

**Przebieg:**
Wojsko Polskie, KBW i UB otaczały wsie ukraińskie i łemkowskie w województwach rzeszowskim, lubelskim i krakowskim. Mieszkańcy mieli kilka godzin lub dni na spakowanie dobytku. Następnie transportami kolejowymi wywożono ich na Ziemie Odzyskane (Dolny Śląsk, Ziemia Lubuska, Warmia i Mazury), gdzie rozpraszano w małych grupach wśród polskich osadników.

**Skala:**
- Wysiedlono ok. 140–150 tysięcy osób
- Kilka tysięcy zamknięto w obozie w Jaworznie (byłym KL Auschwitz III)
- Zniszczono setki wsi, cerkwi i zabytków kultury ukraińskiej

**Cele polityczne:**
Władze komunistyczne chciały nie tylko zwalczyć UPA, ale trwale rozbić ukraińską tożsamość narodową. Deportowani mieli się zasymilować z polskim otoczeniem. Polityka ta wpisywała się w szerszą stalinowską przebudowę etniczną Europy Środkowej.

**Pamięć i ocena:**
Przez dekady Akcja Wisła była tematem tabu w PRL. Dopiero po 1989 roku możliwa stała się pełna dyskusja historyczna. W 1990 roku Senat RP potępił Akcję Wisłę. W 2021 roku Sejm przyjął uchwałę uznającą ją za zbrodnię.`,
    resources: [
      {
        id: 'wisla-1',
        title: 'Akcja Wisła – portal tematyczny IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=akcja%20wisla',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN poświęcony Akcji Wisła – dokumenty, artykuły, świadectwa.',
        year: 1947,
        downloadable: false,
      },
      {
        id: 'wisla-2',
        title: 'Dokumenty Akcji Wisła – Szukaj w Archiwach',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Akcji%20Wis%C5%82a%20Archiwach',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty wojskowe i administracyjne dotyczące Akcji Wisła w polskich archiwach.',
        year: 1947,
        downloadable: false,
      },
      {
        id: 'wisla-3',
        title: 'Obóz w Jaworznie – Ukraińcy więzieni przez UB',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Ob%C3%B3z%20Jaworznie%20Ukrai%C5%84cy',
        source: 'IPN',
        description: 'Dokumentacja obozu w Jaworznie, gdzie przetrzymywano Ukraińców podczas Akcji Wisła.',
        year: 1947,
        downloadable: false,
      },
    ],
    relatedIds: ['represje-polityczne', 'ub', 'manifest-pkwn', 'zolnierze-wykletci'],
  },

  {
    id: 'plan-szescioletni',
    title: 'Plan sześcioletni',
    subtitle: 'Stalinowska industrializacja 1950–1955',
    category: 'gospodarka',
    tags: ['plan sześcioletni', 'industrializacja', 'stalinizm', 'HiL', 'Bierut', 'gospodarka planowa'],
    yearStart: 1950,
    yearEnd: 1955,
    summary: 'Plan sześcioletni (1950–1955) – stalinowski plan przebudowy gospodarczej Polski wzorowany na sowieckich planach pięcioletnich. Kładł nacisk na ciężki przemysł i zbrojenia kosztem konsumpcji, rolnictwa i standardu życia. Jego realizacja powiązana była z rozbudową Nowej Huty i kolektywizacją wsi.',
    content: `Plan sześcioletni – oficjalnie "Plan rozwoju gospodarczego i budowy podstaw socjalizmu w Polsce na lata 1950–1955" – uchwalony przez Sejm w lipcu 1950 roku. Zakładał ponad dwukrotne zwiększenie produkcji przemysłowej, przede wszystkim w branżach: hutnictwo, górnictwo, energetyka i przemysł maszynowy.

**Priorytety i założenia:**
- Wzrost produkcji przemysłowej o 158%
- Inwestycje w przemysł ciężki (zbrojenia, stal, węgiel)
- Zaniedbanie przemysłu lekkiego i rolnictwa
- Budownictwo mieszkaniowe w socrealistycznym stylu
- Kolektywizacja wsi jako element planu

**Główne inwestycje:**
- Huta im. Lenina w Nowej Hucie (największa w Polsce)
- Rozbudowa kopalni węgla na Śląsku
- Zakłady Cegielskiego w Poznaniu
- FSO – Fabryka Samochodów Osobowych w Warszawie (Syrena)
- Elektrownie i linie energetyczne

**Konsekwencje społeczne:**
Realizacja planu wymagała ogromnych wyrzeczeń. Normy pracy rosły, płace realne spadały, w sklepach brakowało towarów. W 1951 roku wprowadzono system kart na żywność. Mieszkania dla robotników budowano na potęgę, ale skromne, małe, w odległych od centrum blokowiskach.

**Czerwiec 1956 – rachunek za plan:**
Wybuch robotniczego buntu w Poznaniu w czerwcu 1956 roku był bezpośrednią reakcją na przeciążenie normami pracy i pauperyzację robotników. Strajkujący krzyczeli: "Chleba i wolności!"`,
    resources: [
      {
        id: 'plan6-1',
        title: 'Plan sześcioletni – dokumenty archiwalne',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych – KC PZPR',
        description: 'Dokumenty KC PZPR dotyczące planu sześcioletniego i realizacji industrializacji.',
        year: 1950,
        downloadable: false,
      },
      {
        id: 'plan6-2',
        title: 'Gospodarka PRL – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=gospodarka%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o realiach gospodarki PRL i konsekwencjach stalinowskiej industrializacji.',
        year: 1950,
        downloadable: false,
      },
      {
        id: 'plan6-3',
        title: 'Kroniki filmowe – budowa Nowej Huty i zakładów',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne kroniki filmowe dokumentujące realizację planu sześcioletniego.',
        year: 1951,
        downloadable: false,
      },
    ],
    relatedIds: ['gospodarka-prl', 'nowa-huta', 'bierut', 'kolektywizacja', 'czerwiec-1956'],
  },

  {
    id: 'wzz',
    title: 'Wolne Związki Zawodowe',
    subtitle: 'Zaczyn Solidarności 1978–1980',
    category: 'opozycja',
    tags: ['WZZ', 'Wolne Związki Zawodowe', 'Wałęsa', 'Walentynowicz', 'Gdańsk', 'opozycja', '1978'],
    yearStart: 1978,
    yearEnd: 1980,
    summary: 'Wolne Związki Zawodowe Wybrzeża – niezależna organizacja robotnicza założona w 1978 roku w Gdańsku. Skupiała działaczy, którzy zapoczątkowali sierpniowy strajk 1980 i stworzyli zręby NSZZ Solidarność. Spośród jej członków wyrosła większość liderów pierwszej Solidarności.',
    content: `Wolne Związki Zawodowe Wybrzeża (WZZ) założono 29 kwietnia 1978 roku w Gdańsku. Inicjatorami byli m.in. Andrzej Gwiazda, Bogdan Borusewicz i Krzysztof Wyszkowski. Wkrótce do organizacji dołączyli Lech Wałęsa i Anna Walentynowicz.

**Kontekst:**
W 1978 roku działały już Robotnicze Komitety Obrony (ROPCiO) i KOR. WZZ były pierwszą próbą zorganizowania niezależnych związków zawodowych bezpośrednio w zakładach pracy. Wzorowano się na wolnych związkach funkcjonujących na Śląsku (Katowice Wolne Związki Zawodowe Śląsko-Dąbrowskie – Kazimierz Świtoń).

**Działalność:**
WZZ wydawały biuletyn "Robotnik Wybrzeża" (nawiązanie do ogólnopolskiego "Robotnika" KOR). Organizowały spotkania w prywatnych mieszkaniach, pomagały robotnikom w sprawach pracowniczych, dokumentowały łamanie praw pracowniczych.

**Represje SB:**
Członkowie WZZ byli stale inwigilowani, zatrzymywani, zwalniani z pracy. Anna Walentynowicz straciła pracę w Stoczni Gdańskiej tuż przed emeryturą – właśnie to zwolnienie stało się bezpośrednią przyczyną strajku w sierpniu 1980 roku.

**Od WZZ do Solidarności:**
14 sierpnia 1980 roku strajk w Stoczni Gdańskiej zaczął się jako protest w obronie Walentynowicz. Kierownictwo WZZ organizowało strajk i prowadziło negocjacje. Po podpisaniu Porozumień Gdańskich 31 sierpnia 1980 roku WZZ przekształciły się w struktury NSZZ Solidarność.`,
    resources: [
      {
        id: 'wzz-1',
        title: 'Wolne Związki Zawodowe – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Porozumienia',
        source: 'Przystanek Historia / IPN',
        description: 'Dokumentacja drogi od WZZ do Solidarności i Porozumień Gdańskich.',
        year: 1978,
        downloadable: false,
      },
      {
        id: 'wzz-2',
        title: 'Anna Walentynowicz – portret działaczki',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Anna%20Walentynowicz%20portret',
        source: 'IPN',
        description: 'Biogram Anny Walentynowicz i jej roli w powstaniu Solidarności.',
        year: 1978,
        downloadable: false,
      },
      {
        id: 'wzz-3',
        title: 'Robotnicy 80 – film dokumentalny',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=hO-MRUjczzI',
        source: 'YouTube',
        description: 'Dokument o strajku sierpniowym i ludziach, którzy go wywołali – w tym działaczach WZZ.',
        year: 1980,
        downloadable: false,
      },
    ],
    relatedIds: ['solidarnosc', 'sierpien-1980', 'walesa', 'kor', 'stocznia-gdanska'],
  },

  {
    id: 'kultura-paryz',
    title: 'Kultura Paryska',
    subtitle: 'Jerzy Giedroyc i emigracyjny głos wolności',
    category: 'kultura',
    tags: ['Giedroyc', 'Kultura', 'Paryż', 'emigracja', 'Instytut Literacki', 'Herling-Grudziński'],
    yearStart: 1947,
    yearEnd: 2000,
    summary: 'Miesięcznik "Kultura" wydawany przez Jerzego Giedroycia w Paryżu od 1947 roku – najważniejsze polskie pismo emigracyjne, które przez dekady kształtowało myśl polityczną opozycji i intelektualistów w kraju. Instytut Literacki w Maisons-Laffitte był centrum polskiej niezależnej myśli przez całą epokę PRL.',
    content: `"Kultura" – miesięcznik założony przez Jerzego Giedroycia w Rzymie w 1947 roku, a od 1948 roku wydawany w podparyskim Maisons-Laffitte przez Instytut Literacki. Przez ponad pół wieku (do śmierci Giedroycia w 2000 roku) było to najważniejsze polskie pismo poza krajem.

**Jerzy Giedroyc (1906–2000):**
Redaktor naczelny i dusza pisma. Wizjoner polskiej polityki wschodniej – jako jeden z pierwszych myślicieli emigracyjnych głosił konieczność pojednania z Ukrainą, Litwą i Białorusią (doktryna ULB). Uważał, że bez niepodległości tych narodów nie ma trwałej wolności Polski.

**Czołowi współpracownicy:**
- Gustaw Herling-Grudziński – autor "Innego Świata", stały felietonista
- Józef Czapski – malarz, pisarz, pamiętnikarz
- Konstanty A. Jeleński – krytyk literatury i kultury
- Czesław Miłosz – po ucieczce z PRL w 1951 roku współpracował z "Kulturą"
- Witold Gombrowicz – publikował tu swoje dzienniki

**Znaczenie dla opozycji:**
"Kultura" była przemycana do Polski i stanowiła duchowy pokarm opozycji. KOR, Solidarność i środowiska intelektualne nawiązywały wprost do idei Giedroycia. Pismo kształtowało myślenie o przyszłości postkomunistycznej Polski.

**Biblioteka "Kultury":**
Instytut Literacki wydał setki książek – autorów zakazanych w PRL, dokumenty historyczne, literaturę emigracyjną. Były one przemycane do kraju przez turystów i dyplomatów.`,
    resources: [
      {
        id: 'kultura-p-1',
        title: 'Archiwum Kultury Paryskiej – Biblioteka Narodowa',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Kultury%20Paryskiej%20Biblioteka',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Skany wybranych numerów miesięcznika Kultura dostępne w cyfrowym archiwum Polony.',
        year: 1947,
        downloadable: true,
      },
      {
        id: 'kultura-p-2',
        title: 'Jerzy Giedroyc i Kultura Paryska – IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=kultura%20paryz',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o miesięczniku Kultura i jego roli w polskim życiu intelektualnym.',
        year: 1947,
        downloadable: false,
      },
      {
        id: 'kultura-p-3',
        title: 'Gustaw Herling-Grudziński – Inny Świat',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/herling-grudzinski-gustaw/',
        source: 'Wolne Lektury',
        description: 'Klasyczne dzieło emigracyjne o sowieckich łagrach, publikowane przez Instytut Literacki.',
        year: 1951,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'drugi-obieg', 'cenzura-prl', 'radio-wolna-europa', 'kino-prl'],
  },

  {
    id: 'uklad-warszawski',
    title: 'Układ Warszawski',
    subtitle: 'Sojusz militarny bloku wschodniego 1955–1991',
    category: 'wojsko',
    tags: ['Układ Warszawski', 'NATO', 'blok wschodni', 'ZSRR', 'sojusz', 'Czechosłowacja'],
    yearStart: 1955,
    yearEnd: 1991,
    summary: 'Układ o Przyjaźni, Współpracy i Pomocy Wzajemnej – sojusz militarny krajów bloku wschodniego pod przywództwem ZSRR, podpisany 14 maja 1955 roku w Warszawie. Polska była jego członkiem przez cały czas istnienia, uczestnicząc m.in. w interwencji zbrojnej w Czechosłowacji w 1968 roku.',
    content: `Układ Warszawski powstał 14 maja 1955 roku jako odpowiedź ZSRR na przyjęcie Niemiec Zachodnich do NATO. Członkami założycielami było osiem państw: Albania, Bułgaria, Czechosłowacja, NRD, Polska, Rumunia, Węgry i ZSRR.

**Struktura:**
Formalnie sojusz miał charakter obronny – podobnie jak NATO. W praktyce był narzędziem utrzymania sowieckiej dominacji nad Europą Środkową. Naczelne Dowództwo znajdowało się w Moskwie, a jego szefami byli zawsze sowieccy marszałkowie.

**Polska w Układzie Warszawskim:**
Polskie wojsko (LWP) było trzecią co do wielkości siłą w Układzie. Polska uczestniczyła w:
- Ćwiczeniach wojskowych pod sowieckim dowództwem
- Interwencji w Czechosłowacji w sierpniu 1968 roku (Operacja Dunaj)
- Stałym systemie dyslokacji sowieckich wojsk na terytorium Polski (Północna Grupa Wojsk ZSRR)

**Doktryna Breżniewa:**
Po interwencji w Czechosłowacji w 1968 roku ZSRR ogłosił prawo do "bratniej pomocy" – czyli interwencji zbrojnej w przypadku zagrożenia socjalizmu w którymkolwiek kraju bloku. Doktryna ta wisiała nad Polską podczas kryzysu 1980–1981.

**Rozwiązanie:**
Układ Warszawski rozwiązano 1 lipca 1991 roku – po upadku komunizmu w Europie Środkowej i rozpadzie ZSRR. Polska przystąpiła do NATO w 1999 roku.`,
    resources: [
      {
        id: 'uw-1',
        title: 'Układ Warszawski – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Uk%C5%82ad%20Warszawski',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o Polsce w bloku wschodnim i Układzie Warszawskim.',
        year: 1955,
        downloadable: true,
      },
      {
        id: 'uw-2',
        title: 'Operacja Dunaj – wkroczenie do Czechosłowacji 1968',
        type: 'publikacja',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/marzec-1968',
        source: 'IPN Polskie Miesiące',
        description: 'Kontekst polityczny Marca 1968 i interwencji w Czechosłowacji w tym samym roku.',
        year: 1968,
        downloadable: false,
      },
      {
        id: 'uw-3',
        title: 'Polska w bloku wschodnim – archiwum dokumentów',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=bloku%20wschodnim%20dokument%C3%B3w',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące obecności sił sowieckich w Polsce i struktury Układu Warszawskiego.',
        year: 1955,
        downloadable: false,
      },
    ],
    relatedIds: ['lwp', 'marzec-1968', 'stan-wojenny', 'jaruzelski', 'manifest-pkwn'],
  },

  {
    id: 'referendum-1946',
    title: 'Referendum ludowe 1946',
    subtitle: 'Trzy razy TAK – pierwsze wielkie fałszerstwo',
    category: 'polityka',
    tags: ['referendum 1946', 'PPR', 'Mikołajczyk', 'PSL', 'fałszerstwo', 'trzy razy tak'],
    yearStart: 1946,
    summary: 'Referendum z 30 czerwca 1946 roku – pierwsze wielkie fałszerstwo wyborcze w powojennej Polsce. Komuniści sfałszowali wyniki, podając 68% głosów na TAK przy trzech pytaniach. W rzeczywistości większość Polaków głosowała zgodnie z apelem PSL: TAK–NIE–TAK. Był to wstęp do przejęcia pełni władzy.',
    content: `Referendum ludowe przeprowadzono 30 czerwca 1946 roku. Postawiło trzy pytania:
1. Czy jesteś za zniesieniem Senatu?
2. Czy chcesz utrwalenia w przyszłej konstytucji ustroju gospodarczego, zaprowadzonego przez reformę rolną i unarodowienie podstawowych gałęzi gospodarki narodowej?
3. Czy chcesz utrwalenia zachodnich granic Państwa Polskiego na Bałtyku, Odrze i Nysie Łużyckiej?

**Kampania i taktyka:**
Polskie Stronnictwo Ludowe (PSL) Mikołajczyka wezwało do głosowania TAK–NIE–TAK (przeciw zniesieniu Senatu jako hamulca bezpieczeństwa). PPR i jej sojusznicy propagowali trzy razy TAK. Kampania przebiegała w atmosferze terroru – działaczy PSL bito, aresztowano i mordowano.

**Fałszerstwo:**
Wyniki ogłoszone przez władze: 68% TAK na pierwsze pytanie. Dokumenty odkryte po 1989 roku potwierdziły, że autentyczne wyniki wyglądały odwrotnie – w rzeczywistości większość głosowała NIE na pierwsze pytanie (ok. 73% według szacunków). Fałszerstwa dokonano przy udziale sowieckiego NKWD.

**Konsekwencje:**
Oszukańcze referendum utorowało drogę do sfałszowanych wyborów w styczniu 1947 roku i pełnego przejęcia władzy przez komunistów. PSL i Mikołajczyk zostali politycznie rozbici. W 1947 roku Mikołajczyk uciekł z Polski.`,
    resources: [
      {
        id: 'ref46-1',
        title: 'Referendum 1946 – Polskie Miesiące IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=referendum%201946',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o referendum 1946 – dokumenty, analizy i świadectwa fałszerstwa.',
        year: 1946,
        downloadable: false,
      },
      {
        id: 'ref46-2',
        title: 'Dokumenty referendum – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=referendum%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Akta Ministerstwa Bezpieczeństwa Publicznego i Państwowej Komisji Wyborczej z 1946 roku.',
        year: 1946,
        downloadable: false,
      },
      {
        id: 'ref46-3',
        title: 'Fałszerstwo wyborcze – materiały edukacyjne IPN',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Fa%C5%82szerstwo%20wyborcze',
        source: 'IPN Edukacja',
        description: 'Materiały dla nauczycieli o mechanizmach fałszerstw wyborczych w powojennej Polsce.',
        year: 1946,
        downloadable: true,
      },
    ],
    relatedIds: ['wybory-1947', 'pzpr', 'bierut', 'ub', 'manifest-pkwn'],
  },

  {
    id: 'wybory-1947',
    title: 'Wybory 1947',
    subtitle: 'Sfałszowane wybory do Sejmu Ustawodawczego',
    category: 'polityka',
    tags: ['wybory 1947', 'Sejm Ustawodawczy', 'PSL', 'Mikołajczyk', 'PPR', 'fałszerstwo'],
    yearStart: 1947,
    summary: 'Wybory do Sejmu Ustawodawczego z 19 stycznia 1947 roku – jedne z najbardziej sfałszowanych wyborów w historii Polski. PPR i Blok Demokratyczny oficjalnie uzyskały 80% głosów. Sfałszowane wyniki zakończyły demokratyczną opozycję i umożliwiły komunistom pełne przejęcie władzy.',
    content: `Wybory do Sejmu Ustawodawczego odbyły się 19 stycznia 1947 roku. Ich przebieg i wyniki były wynikiem masowych fałszerstw przygotowanych przez aparat komunistyczny przy wsparciu sowieckiego NKWD.

**Klimat terroru przed wyborami:**
W kampanii wyborczej PSL Stanisława Mikołajczyka było systematycznie rozbijane – działaczy aresztowano, bito, mordowano. Zlikwidowano ok. 100 000 członków PSL. Wielu kandydatów opozycyjnych skreślono z list. Wojsko, milicja i UB inwigilowały lokale wyborcze.

**Fałszerstwo:**
Oficjalne wyniki: PPR i Blok Demokratyczny – 80,1%, PSL – 10,3%. Dokumenty późniejszych badań wskazują, że autentyczne poparcie PSL przekraczało 60–70%. Komisje wyborcze były kontrolowane przez aparat bezpieczeństwa.

**Konsekwencje:**
Sfałszowane wybory zamknęły okres pozornej koalicji i otworzyły drogę do pełnej stalinizacji. W lutym 1947 roku Bolesław Bierut objął urząd Prezydenta RP. W październiku 1947 roku Mikołajczyk uciekł z Polski, ratując się przed aresztowaniem.

**Przejęcie pełni władzy:**
W 1948 roku PPR połączyła się z PPS (pod przymusem), tworząc PZPR. Polska stała się jednopartyjnym państwem komunistycznym na wzór sowiecki.`,
    resources: [
      {
        id: 'wyl47-1',
        title: 'Wybory 1947 – dokumentacja IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Wybory%201947%20dokumentacja',
        source: 'IPN Inwentarz',
        description: 'Akta aparatu bezpieczeństwa dokumentujące fałszerstwo wyborów 1947 roku.',
        year: 1947,
        downloadable: false,
      },
      {
        id: 'wyl47-2',
        title: 'Sfałszowane wybory – materiały edukacyjne IPN',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Sfa%C5%82szowane%20wybory',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne o konsolidacji władzy komunistycznej w Polsce 1944–1948.',
        year: 1947,
        downloadable: true,
      },
      {
        id: 'wyl47-3',
        title: 'Archiwum prasy 1947 – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=prasy%201947',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Cyfrowe archiwum prasy z okresu wyborów 1947 – oficjalne komunikaty i propaganda.',
        year: 1947,
        downloadable: true,
      },
    ],
    relatedIds: ['referendum-1946', 'pzpr', 'bierut', 'ub', 'represje-polityczne'],
  },

  {
    id: 'emigracja-1968',
    title: 'Emigracja Żydów po Marcu 1968',
    subtitle: 'Antysemicka kampania i exodus polskich Żydów',
    category: 'represje',
    tags: ['Marzec 1968', 'antysemityzm', 'emigracja', 'Żydzi', 'Moczar', 'partyzanci'],
    yearStart: 1968,
    yearEnd: 1969,
    summary: 'Po Marcu 1968 roku reżim komunistyczny pod przywództwem frakcji Mieczysława Moczara przeprowadził antysemicką kampanię propagandową, zmuszając blisko 15 000 polskich Żydów do emigracji. Była to ostatnia wielka fala emigracji żydowskiej z Polski i hańba systemu komunistycznego.',
    content: `Marzec 1968 był nie tylko stłumieniem studenckiego buntu – stał się pretekstem do zorganizowanej kampanii antysemickiej kierowanej przez frakcję "partyzantów" Mieczysława Moczara w aparacie partyjnym.

**Kampania "antysyjonistyczna":**
Po proteście studentów w marcu 1968 roku władze ogłosiły, że za zamieszkami stoją "syjoniści" i "wichrzyciele" powiązani z Izraelem (po wojnie sześciodniowej 1967 roku ZSRR zerwał stosunki z Izraelem). Propaganda atakowała Żydów jako piątą kolumnę wrogich sił.

**Czystki:**
Ze stanowisk usuwano Żydów w wojsku, nauce, kulturze i partii. Zmuszano ich do "dobrowolnego" wystąpienia z PZPR. Wielu traciło pracę, mieszkanie, paszport. Wymagano od nich publicznych deklaracji lojalności lub emigracji.

**Skala emigracji:**
W latach 1968–1970 Polskę opuściło ok. 13 000–15 000 obywateli żydowskiego pochodzenia. Wyjazdom towarzyszyły upokarzające warunki: emigranci musieli zrzekać się obywatelstwa polskiego i podpisywać oświadczenia, że wyjeżdżają "na zawsze". Zabierali minimalne mienie.

**Ocalałe społeczności:**
Po emigracji 1968 roku żydowska społeczność w Polsce została praktycznie zlikwidowana. Przed wojną mieszkało w Polsce ponad 3 miliony Żydów – po Holokauście ok. 250 000. Po kolejnych falach emigracji (1946–1947, 1956–1958, 1968–1970) pozostały zaledwie tysiące.`,
    resources: [
      {
        id: 'em68-1',
        title: 'Marzec 1968 – emigracja Żydów, portal IPN',
        type: 'publikacja',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/marzec-1968',
        source: 'IPN Polskie Miesiące',
        description: 'Dokumentacja Marca 1968 – kampania antysemicka i emigracja w portalu IPN.',
        year: 1968,
        downloadable: false,
      },
      {
        id: 'em68-2',
        title: 'Antysemityzm 1968 – materiały edukacyjne',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Antysemityzm%201968',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne o kampanii antysemickiej 1968 i jej ofiarach.',
        year: 1968,
        downloadable: true,
      },
      {
        id: 'em68-3',
        title: 'Dokumenty emigracji – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=emigracji%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Akta MSW i MSZ dotyczące emigracji obywateli żydowskiego pochodzenia po 1968.',
        year: 1968,
        downloadable: false,
      },
    ],
    relatedIds: ['marzec-1968', 'represje-polityczne', 'pzpr', 'sbezpieczenstwa', 'gomulka'],
  },

  {
    id: 'ziemie-odzyskane',
    title: 'Ziemie Odzyskane',
    subtitle: 'Poniemieckie terytoria i wielkie przesiedlenia 1945–1947',
    category: 'społeczeństwo',
    tags: ['Ziemie Odzyskane', 'Wrocław', 'Gdańsk', 'przesiedlenia', 'Niemcy', 'Kresy', 'osadnictwo'],
    yearStart: 1945,
    summary: 'Ziemie Odzyskane – dawne terytoria niemieckie przyłączone do Polski po II wojnie światowej (Dolny Śląsk, Pomorze, Warmia i Mazury, Ziemia Lubuska). Towarzyszyło im wysiedlenie ok. 12 milionów Niemców i napływ polskich osadników, w tym repatriantów ze wschodnich Kresów.',
    content: `Decyzje konferencji w Poczdamie (sierpień 1945) przyznały Polsce rozległe terytoria na zachodzie i północy – kosztem ziem utraconych na wschodzie (Kresy wschodnie: Lwów, Wilno, Grodno weszły w skład ZSRR). Propaganda komunistyczna nazywała je "Ziemiami Odzyskanymi" – sugerując powrót piastowskich ziem.

**Wysiedlenia Niemców:**
W latach 1945–1947 z nowych polskich terytoriów wysiedlono od 10 do 12 milionów Niemców i Ślązaków. Akcja prowadziła najpierw dzika, żywiołowa (1945), a następnie zorganizowana (od 1946 roku). Towarzyszyły jej grabieże i przemoc wobec wysiedlanych, ale też gigantyczny dramat ludzki – ucieczka i wypędzenie.

**Osadnictwo polskie:**
Na opuszczone tereny napływali:
- Repatrianci z Kresów wschodnich (Lwów, Wilno, Grodno) – zmuszeni do opuszczenia domów w wyniku nowego przebiegu granicy
- Osadnicy z Centralnej Polski
- Ukraińcy i Łemkowie deportowani Akcją Wisła na rozproszenie

**Nowe tożsamości miast:**
Wrocław (dawny Breslau), Szczecin (Stettin), Gdańsk (Danzig), Opole – miasta o wielowiekowej historii niemieckiej otrzymały polskich mieszkańców i polskie nazwy. Kościoły ewangelickie stawały się katolickimi, szyldy zmieniano z nocna na dzień.

**Propaganda "powrotu":**
Władze komunistyczne budowały mit powrotu do piastowskiej ojczyzny, ukrywając fakt, że zachodnia granica jest ceną za utratę Lwowa i Wilna. Granica na Odrze i Nysie była przez dekady formalnie nieuznana przez NRF – to wiązało Polskę z ZSRR i Układem Warszawskim.`,
    resources: [
      {
        id: 'zo-1',
        title: 'Ziemie Odzyskane – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Ziemie%20Odzyskane',
        source: 'IPN Edukacja',
        description: 'Materiały o powojennych przesiedleniach, osadnictwie i historii Ziem Odzyskanych.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'zo-2',
        title: 'Dokumenty osadnictwa – Szukaj w Archiwach',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=osadnictwa%20Archiwach',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Państwowego Urzędu Repatriacyjnego i komisji osadniczych z lat 1945–1950.',
        year: 1945,
        downloadable: false,
      },
      {
        id: 'zo-3',
        title: 'Fotografie i kroniki – Ziemie Odzyskane w Polonie',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20kroniki%20Ziemie',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum zdjęć i kronik dokumentujących zasiedlanie Ziem Odzyskanych po 1945 roku.',
        year: 1945,
        downloadable: true,
      },
    ],
    relatedIds: ['manifest-pkwn', 'akcja-wisla', 'represje-polityczne', 'kolektywizacja'],
  },

  {
    id: 'sport-prl',
    title: 'Sport w PRL',
    subtitle: 'Medale olimpijskie jako propaganda sukcesu',
    category: 'społeczeństwo',
    tags: ['sport', 'olimpiada', 'Deyna', 'Szewińska', 'Górski', 'piłka nożna', 'lekkoatletyka'],
    yearStart: 1952,
    yearEnd: 1988,
    summary: 'Sport w PRL pełnił funkcję propagandową – sukcesy olimpijskie i sportowe miały dowodzić wyższości ustroju socjalistycznego. Polska była potęgą lekkoatletyczną, bokserską i piłkarską, a sport był jednym z niewielu obszarów, gdzie obywatele mogli odczuwać dumę narodową bez politycznych konsekwencji.',
    content: `Sport w PRL był starannie zarządzany przez państwo – kluby sportowe podlegały zakładom pracy lub resortom. Finansowanie było państwowe, zawodnicy formalnie "pracownikami" fabryk lub wojska.

**Polityczna rola sportu:**
Sukces sportowy był narzędziem propagandy. Medale olimpijskie obwieszczano jako dowód wyższości socjalizmu. Jednocześnie sport był jedyną przestrzenią, gdzie Polacy mogli swobodnie kibicować i przeżywać autentyczne emocje narodowe.

**Złote lata polskiego sportu:**

*Lekkoatletyka:*
Irena Szewińska – siedmiokrotna medalistka olimpijska, mistrzyni świata w biegu na 400 m. Symbol polskiej lekkoatletyki lat 60.–70. Władysław Komar – złoto w pchnięciu kulą Montreal 1976.

*Piłka nożna:*
Reprezentacja Polski pod wodzą Kazimierza Górskiego zdobyła złoto olimpijskie w Monachium 1972 i brąz Mistrzostw Świata 1974 (Frankfurt, Zbigniew Boniek, Kazimierz Deyna). Grzegorz Lato – król strzelców MŚ 1974.

*Boks:*
Polscy bokserzy zdobywali medale olimpijskie w każdej edycji – m.in. Jerzy Kulej (złoto Tokio 1964 i Meksyk 1968).

*Siatkówka i inne:*
Polscy siatkarze – wicemistrzowie olimpijscy i mistrzowie świata 1974.

**Olimpiady i bojkoty:**
PRL bojkotował Igrzyska w Los Angeles w 1984 roku (solidarnie z ZSRR). Zawodom towarzyszyła rywalizacja polityczna – zwłaszcza na linii blok wschodni vs. Zachód.`,
    resources: [
      {
        id: 'sport-1',
        title: 'Polska na Igrzyskach Olimpijskich – kroniki TVP',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Igrzyskach%20Olimpijskich%20kroniki',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne nagrania z igrzysk olimpijskich i zawodów sportowych z epoki PRL.',
        year: 1952,
        downloadable: false,
      },
      {
        id: 'sport-2',
        title: 'MŚ 1974 – Polska 3. na świecie',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=7sAvg2e48Rg',
        source: 'YouTube / TVP Archiwum',
        description: 'Archiwalne nagrania z Mistrzostw Świata 1974 – największy sukces polskiej piłki nożnej.',
        year: 1974,
        downloadable: false,
      },
      {
        id: 'sport-3',
        title: 'Sport i propaganda PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Sport%20propaganda',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum prasy sportowej i plakatów promujących sport w PRL.',
        year: 1960,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'propaganda-prl', 'nomenklatura', 'gierek'],
  },

  {
    id: 'fiat-126p',
    title: 'Fiat 126p – Maluch',
    subtitle: 'Symbol motoryzacji gierkowskiej Polski',
    category: 'społeczeństwo',
    tags: ['Fiat 126p', 'Maluch', 'FSM', 'Bielsko-Biała', 'Tychy', 'motoryzacja', 'Gierek'],
    yearStart: 1973,
    yearEnd: 2000,
    summary: 'Fiat 126p – popularnie zwany Maluchem – mały samochód osobowy produkowany w FSM Bielsko-Biała i Tychach od 1973 do 2000 roku. Przez dwie dekady symbol osiągalnego marzenia i polskiej codzienności. Na Malucha czekało się latami – był symbolem konsumpcyjnych aspiracji klasy średniej PRL.',
    content: `Fiat 126p powstał na bazie umowy licencyjnej z włoskim Fiatem, podpisanej przez Edwarda Gierka w 1971 roku. Produkcję uruchomiono w 1973 roku w bielskiej Fabryce Samochodów Małolitrażowych (FSM), a od 1975 roku także w Tychach.

**Techniczne cechy:**
Silnik 600 cc (później 650 cc) chłodzony powietrzem, umieszczony z tyłu. Cztery miejsca, pojemny bagażnik z przodu. Prędkość maksymalna ok. 110 km/h. Zużycie paliwa ok. 6 litrów na 100 km.

**Kupowanie Malucha:**
Na Fiat 126p czekano latami – zapisy na listę oczekujących prowadziły zakłady pracy. Samochód kosztował tyle, co kilkanaście miesięcznych pensji. Posiadanie Malucha było oznaką statusu społecznego i dowodem zapobiegliwości.

**Kultura Malucha:**
Małe auto stało się częścią polskiej kultury popularnej – pojawiało się w filmach, kabaretach, piosenkach. "Maluch" jako wyraz wszedł do potocznego języka. W czasach stanu wojennego służył do transportowania ulotek podziemia.

**Rekord produkcji:**
Łącznie wyprodukowano ponad 3,3 miliona egzemplarzy Fiata 126p – jeden z najwyższych wyników produkcji samochodu osobowego w Polsce. Produkcja zakończyła się 22 września 2000 roku.

**Po 1989 roku:**
Po upadku PRL Maluch stał się tanim środkiem transportu, a później obiektem nostalgii i kultowym pojazdem. Dziś dobrze zachowane egzemplarze są kolekcjonerskimi rarytasami.`,
    resources: [
      {
        id: 'fiat-1',
        title: 'Maluch w kronikach filmowych – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Maluch%20kronikach%20filmowych',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne kroniki filmowe z uruchomienia produkcji Fiata 126p w FSM.',
        year: 1973,
        downloadable: false,
      },
      {
        id: 'fiat-2',
        title: 'Gierek i umowa z Fiatem – dokumenty',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Gierek%20umowa%20Fiatem',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Dokumenty dotyczące umowy licencyjnej z Fiatem i uruchomienia produkcji FSM.',
        year: 1971,
        downloadable: false,
      },
      {
        id: 'fiat-3',
        title: 'Motoryzacja w PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Motoryzacja',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum reklam, katalogów i zdjęć prasowych dotyczących motoryzacji w PRL.',
        year: 1973,
        downloadable: true,
      },
    ],
    relatedIds: ['gierek', 'gospodarka-prl', 'nomenklatura', 'plan-szescioletni'],
  },

  {
    id: 'nacjonalizacja',
    title: 'Nacjonalizacja przemysłu i handlu',
    subtitle: 'Komunistyczne przejęcie gospodarki 1944–1948',
    category: 'gospodarka',
    tags: ['nacjonalizacja', 'reforma', 'przemysł', 'handel', 'własność prywatna', '1946'],
    yearStart: 1944,
    yearEnd: 1948,
    summary: 'Nacjonalizacja przemysłu i handlu – seria dekretów i ustaw z lat 1944–1948, na mocy których komunistyczne władze przejęły prywatne firmy, fabryki, banki i ziemię. Połączona z reformą rolną i nacjonalizacją banków, stanowiła fundament komunistycznej transformacji gospodarczej Polski.',
    content: `Przejęcie prywatnej własności przez państwo komunistyczne przebiegało etapami i przy użyciu różnych instrumentów prawnych.

**Reforma rolna 1944:**
Dekret PKWN z 6 września 1944 roku wywłaszczył bez odszkodowania majątki ziemskie powyżej 50 ha (100 ha w przypadku ziem rolnych). Rozparcelowano ok. 3,5 miliona hektarów. Reforma miała zdobyć chłopów dla nowej władzy – jednak wkrótce ruszała kolektywizacja.

**Nacjonalizacja przemysłu 1946:**
Ustawa z 3 stycznia 1946 roku o przejęciu na własność państwa gałęzi przemysłowych. Upaństwowiono zakłady zatrudniające powyżej 50 pracowników. Bez odszkodowania przejęto: huty, kopalnie, cementownie, fabryki włókiennicze, browary, drukarnie.

**Handel i bankowość:**
Banki upaństwowiono już w 1945 roku. Prywatny handel stopniowo ograniczano – najpierw przez reglamentację przydziałów towarów, potem przez zakładanie spółdzielni handlowych i GS (Gminnych Spółdzielni). Do 1948 roku prywatny handel hurtowy praktycznie przestał istnieć.

**"Bitwa o handel":**
W 1947 roku ogłoszono "bitwę o handel" – kampanię przeciw prywatnym kupcom i rzemieślnikom. Stosowano zawyżone podatki, rewizje, oskarżenia o spekulację. Tysiące rodzin kupieckich zostało zrujnowanych.

**Skutki:**
Nacjonalizacja zniszczyła klasę przedsiębiorców i kupców. Gospodarka stała się całkowicie zależna od państwowego planowania. Efektywność gospodarki dramatycznie spadła – pierwsze skutki odczuto już w latach 50.`,
    resources: [
      {
        id: 'nacj-1',
        title: 'Ustawa nacjonalizacyjna 1946 – ISAP Sejm',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19460030017',
        source: 'Internetowy System Aktów Prawnych',
        description: 'Ustawa z 3 stycznia 1946 r. o przejęciu na własność państwa podstawowych gałęzi gospodarki.',
        year: 1946,
        downloadable: true,
      },
      {
        id: 'nacj-2',
        title: 'Nacjonalizacja i reforma rolna – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Nacjonalizacja%20reforma%20rolna',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o komunistycznej przebudowie gospodarczej Polski.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'nacj-3',
        title: 'Akta nacjonalizacyjne – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=nacjonalizacyjne%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Dokumenty Ministerstwa Przemysłu i komisji nacjonalizacyjnych z lat 1944–1948.',
        year: 1946,
        downloadable: false,
      },
    ],
    relatedIds: ['manifest-pkwn', 'gospodarka-prl', 'plan-szescioletni', 'kolektywizacja', 'bierut'],
  },

  {
    id: 'milosz',
    title: 'Czesław Miłosz',
    subtitle: 'Poeta, noblista, świadek totalitaryzmu',
    category: 'osoby',
    tags: ['Miłosz', 'Nobel', 'Zniewolony umysł', 'emigracja', 'poezja', 'literatura'],
    yearStart: 1951,
    yearEnd: 1989,
    summary: 'Czesław Miłosz (1911–2004) – jeden z najwybitniejszych polskich poetów i eseistów XX wieku. W 1951 roku zbiegł z PRL i poprosił o azyl na Zachodzie. Jego "Zniewolony umysł" stał się klasycznym studium mechanizmów zniewolenia intelektualistów przez totalitaryzm. Laureat Literackiej Nagrody Nobla 1980.',
    content: `Czesław Miłosz urodził się w 1911 roku w Szetejniach na Litwie. Był poetą, eseistą, tłumaczem i profesorem literatury. W czasach PRL pracował jako dyplomata – był attaché kulturalnym w Paryżu i Waszyngtonie.

**Ucieczka z PRL (1951):**
W lutym 1951 roku Miłosz poprosił we Francji o azyl polityczny, odmawiając powrotu do Polski. Był to akt odwagi – dla rodziny w kraju oznaczał represje, jemu samemu groziło potępienie przez aparat propagandowy PRL. Władze ogłosiły go zdrajcą, jego dzieła objęto zakazem.

**"Zniewolony umysł" (1953):**
Najsłynniejszy esej polityczny polskiej literatury emigracyjnej. Miłosz analizuje, jak inteligenci podporządkowują się totalitaryzmowi, przyjmując komunistyczną ideologię. Opisuje kilka typów konformistów przez alegorie ("Ketman" – sztuka ukrywania prawdziwych poglądów). Książka była zakazana w PRL, ale w drugim obiegu czytana przez pokolenia opozycjonistów.

**Nagroda Nobla (1980):**
Akademia Szwedzka przyznała Miłoszowi Literacką Nagrodę Nobla w 1980 roku – roku powstania Solidarności. W PRL władze początkowo próbowały przemilczeć nagrodę. Gdy okazało się to niemożliwe, zdecydowano o rehabilitacji – po 1980 roku zezwolono na wydawanie jego dzieł.

**Powrót do Polski:**
Po 1989 roku Miłosz powrócił do ojczyzny. Mieszkał na przemian w Krakowie i Berkley. Dożył 93 lat, pozostając aktywnym twórcą do końca.`,
    resources: [
      {
        id: 'milosz-1',
        title: 'Czesław Miłosz – Zniewolony umysł (fragmenty)',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/milosz-czeslaw/',
        source: 'Wolne Lektury',
        description: 'Dostęp do dzieł Czesława Miłosza w cyfrowej bibliotece Wolne Lektury.',
        year: 1953,
        downloadable: true,
      },
      {
        id: 'milosz-2',
        title: 'Miłosz i emigracja – portal IPN',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=kultura%20paryz',
        source: 'Przystanek Historia / IPN',
        description: 'Kontekst emigracji Miłosza i środowiska Kultury Paryskiej Jerzego Giedroycia.',
        year: 1951,
        downloadable: false,
      },
      {
        id: 'milosz-3',
        title: 'Nagroda Nobla 1980 – archiwum',
        type: 'nagranie',
        url: 'https://www.nobelprize.org/prizes/literature/1980/milosz/lecture/',
        source: 'NobelPrize.org',
        description: 'Oficjalne archiwum Nagrody Nobla – wykład noblowski Czesława Miłosza z 1980 roku.',
        year: 1980,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-paryz', 'kultura-prl', 'drugi-obieg', 'cenzura-prl', 'emigracja-1968'],
  },

  {
    id: 'herbert',
    title: 'Zbigniew Herbert',
    subtitle: 'Pan Cogito i poezja moralnego oporu',
    category: 'osoby',
    tags: ['Herbert', 'Pan Cogito', 'poezja', 'opór', 'kultura', 'Przesłanie Pana Cogito'],
    yearStart: 1956,
    yearEnd: 1989,
    summary: 'Zbigniew Herbert (1924–1998) – jeden z najważniejszych polskich poetów powojennych, symbol moralnego oporu wobec komunizmu. Autor cyklu wierszy o Panu Cogito, eseów o sztuce antycznej oraz "Przesłania Pana Cogito" – nieoficjalnego hymnu pokolenia oporu.',
    content: `Zbigniew Herbert urodził się w 1924 roku we Lwowie. Uczestniczył w konspiracji AK podczas II wojny. W powojennej Polsce przez lata nie mógł publikować – odmówił poddania twórczości wymogom socrealizmu. Utrzymywał się z przypadkowych prac fizycznych i biurowych.

**Debiut po Październiku 1956:**
Debiutancki tom "Struna światła" ukazał się w 1956 roku – dopiero po październikowej odwilży. Herbert szybko zyskał uznanie jako poeta wyjątkowej głębi moralnej i intelektualnej.

**Pan Cogito:**
Cykl wierszy o Panu Cogito (1974) – filozoficzno-ironicznym myślicielu zderzającym się z rzeczywistością – stał się kodem porozumienia całego pokolenia polskiej inteligencji. Pan Cogito to figura człowieka próbującego zachować godność w nieludzkich warunkach.

**"Przesłanie Pana Cogito" (1974):**
Wiersz kończący się słowami "idź wyprostowany wśród tych co na kolanach / wśród odwróconych plecami i obalonych w proch" stał się manifestem postawy niezłomności. Deklamowany na podziemnych spotkaniach, recytowany przy aresztowaniach – nabrał wymiaru hymnu oporu.

**Emigracja i powroty:**
Herbert wielokrotnie wyjeżdżał za granicę – do Berlina Zachodniego, Paryża, Los Angeles. Nigdy jednak nie zdecydował się na trwałą emigrację jak Miłosz. Powracał do Polski, uczestniczył w środowiskach opozycyjnych.

**Dziedzictwo:**
Herbert należy do najczęściej tłumaczonych polskich poetów. Jego twórczość jest obowiązkowym elementem kanonu szkolnego i przedmiotem licznych opracowań akademickich na całym świecie.`,
    resources: [
      {
        id: 'herbert-1',
        title: 'Zbigniew Herbert – Przesłanie Pana Cogito i inne wiersze',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/herbert-zbigniew/',
        source: 'Wolne Lektury',
        description: 'Wiersze Zbigniewa Herberta dostępne w cyfrowej bibliotece Wolne Lektury.',
        year: 1974,
        downloadable: true,
      },
      {
        id: 'herbert-2',
        title: 'Herbert i kultura oporu – materiały edukacyjne',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Herbert%20kultura%20oporu',
        source: 'IPN Edukacja',
        description: 'Materiały IPN o roli poezji Herberta w kulturze oporu wobec komunizmu.',
        year: 1974,
        downloadable: true,
      },
      {
        id: 'herbert-3',
        title: 'Herbert w archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Herbert%20Polony',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Pierwsze wydania tomów poetyckich Herberta i archiwalia z okresu PRL.',
        year: 1956,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'milosz', 'drugi-obieg', 'kultura-paryz'],
  },

  {
    id: 'walentynowicz',
    title: 'Anna Walentynowicz',
    subtitle: 'Suwanicka, która zapaliła Sierpień 1980',
    category: 'osoby',
    tags: ['Walentynowicz', 'Solidarność', 'Stocznia Gdańska', 'WZZ', 'sierpień 1980', 'Smoleńsk'],
    yearStart: 1929,
    yearEnd: 2010,
    summary: 'Anna Walentynowicz (1929–2010) – suwnicowa Stoczni Gdańskiej, działaczka Wolnych Związków Zawodowych i jeden z symboli Solidarności. Jej zwolnienie z pracy w sierpniu 1980 roku było bezpośrednią przyczyną wybuchu strajku, który doprowadził do powstania NSZZ Solidarność. Zginęła w katastrofie smoleńskiej 10 kwietnia 2010 roku.',
    content: `Anna Walentynowicz urodziła się w 1929 roku. Pracowała w Stoczni Gdańskiej im. Lenina od 1950 roku, zaczynając jako spawaczka i awansując na suwanicową. Była wielokrotnie nagradzana jako przodownik pracy.

**Działalność opozycyjna:**
W drugiej połowie lat 70. Walentynowicz zaangażowała się w działalność Wolnych Związków Zawodowych Wybrzeża (WZZ). Kolportowała podziemne pisma, dokumentowała łamanie praw pracowniczych, pomagała poszkodowanym robotnikom. Stała się prawdziwą rzeczniczką praw robotniczych.

**Zwolnienie z pracy (sierpień 1980):**
7 sierpnia 1980 roku – na pięć miesięcy przed emeryturą – kierownictwo stoczni zwolniło Walentynowicz. Pretekst był formalny, powód oczywisty: działalność opozycyjna. 14 sierpnia robotnicy stoczni ogłosili strajk, żądając przede wszystkim jej przywrócenia do pracy.

**Rola w sierpniowym strajku:**
Walentynowicz była jedną z głównych postaci strajkujących. Podczas rozmów o zakończeniu strajku – gdy robotnicy gotowi byli odejść po uzyskaniu ustępstw płacowych – to ona przekonała, by trwać aż do uzyskania gwarancji dla wszystkich zakładów, które przyłączyły się do strajku.

**Kontrowersje i marginalizacja:**
Po 1980 roku Walentynowicz pozostawała w stoczniowym środowisku, lecz z czasem konflikty z Wałęsą doprowadziły do jej odsunięcia od głównego nurtu Solidarności. Krytykowała kompromisy Okrągłego Stołu.

**Katastrofa smoleńska:**
Anna Walentynowicz zginęła 10 kwietnia 2010 roku w katastrofie samolotu Tu-154 pod Smoleńskiem – leciała na obchody 70. rocznicy zbrodni katyńskiej.`,
    resources: [
      {
        id: 'walen-1',
        title: 'Anna Walentynowicz – archiwum ECS',
        type: 'publikacja',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum ECS – dokumenty, zdjęcia i nagrania związane z Anną Walentynowicz.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'walen-2',
        title: 'Sierpień 1980 – film dokumentalny o strajku',
        type: 'film',
        url: 'https://www.youtube.com/watch?v=hO-MRUjczzI',
        source: 'YouTube / IPN',
        description: 'Dokument o sierpniowym strajku i roli Anny Walentynowicz w jego wybuchu.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'walen-3',
        title: 'Walentynowicz – materiały IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Walentynowicz',
        source: 'IPN Inwentarz',
        description: 'Akta SB dotyczące inwigilacji Anny Walentynowicz przez Służbę Bezpieczeństwa PRL.',
        year: 1978,
        downloadable: false,
      },
    ],
    relatedIds: ['solidarnosc', 'sierpien-1980', 'stocznia-gdanska', 'wzz', 'walesa'],
  },

  {
    id: 'mikolajczyk',
    title: 'Stanisław Mikołajczyk',
    subtitle: 'Ostatni lider demokratycznej opozycji',
    category: 'osoby',
    tags: ['Mikołajczyk', 'PSL', 'opozycja', 'wybory 1947', 'emigracja', 'premier'],
    yearStart: 1944,
    yearEnd: 1947,
    summary: 'Stanisław Mikołajczyk (1901–1966) – premier rządu RP na uchodźstwie, lider Polskiego Stronnictwa Ludowego i ostatni przywódca legalnej opozycji demokratycznej w powojennej Polsce. W 1947 roku uciekł z kraju, ratując się przed aresztowaniem. Jego losy symbolizują zniszczenie pluralizmu politycznego przez komunistów.',
    content: `Stanisław Mikołajczyk był jednym z najbardziej doświadczonych polskich polityków powojennych – w latach 1943–1944 pełnił funkcję premiera rządu RP na uchodźstwie w Londynie. Po zakończeniu II wojny wrócił do kraju, wierząc w możliwość budowy demokratycznej Polski.

**PSL i walka o demokrację:**
W 1945 roku Mikołajczyk stanął na czele Polskiego Stronnictwa Ludowego (odróżnianego od marionetkowego SL). Partia szybko zgromadziła ok. miliona członków – stała się faktyczną partią opozycyjną wobec PPR. Mikołajczyk uczestniczył w Rządzie Jedności Narodowej jako wicepremier.

**Kampania terroru wobec PSL:**
Komuniści systematycznie rozbijali PSL. Działaczy bito, aresztowano, mordowano. Szacuje się, że do wyborów 1947 roku zamordowano lub uwięziono kilkanaście tysięcy działaczy PSL. Listy kandydatów skreślano z powodów formalnych.

**Referendum i wybory:**
W referendum 1946 PSL wezwał do głosowania NIE na pierwsze pytanie – co było zgodne z wolą większości. Wyniki sfałszowano. W wyborach 1947 PSL oficjalnie uzyskało zaledwie 10% głosów – kolejne fałszerstwo na masową skalę.

**Ucieczka z Polski (1947):**
W październiku 1947 roku, gdy aresztowania działaczy PSL przybrały masowy charakter, Mikołajczyk uciekł z Polski przez Szwecję do Londynu. Była to jedyna droga ratunku – wiedział, że grozi mu los podobny do tysięcy działaczy PSL, którzy trafili za kratki.

**Emigracja:**
Na emigracji Mikołajczyk kontynuował działalność polityczną w ramach Polskiego Ruchu Wolnościowego. Zmarł w Waszyngtonie w 1966 roku.`,
    resources: [
      {
        id: 'mikol-1',
        title: 'Mikołajczyk i PSL – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=psl%20mikolajczyk',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o PSL Mikołajczyka i walce o demokrację w Polsce 1945–1947.',
        year: 1945,
        downloadable: false,
      },
      {
        id: 'mikol-2',
        title: 'Terror wobec PSL – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Terror%20wobec%20PSL',
        source: 'IPN Inwentarz',
        description: 'Dokumenty aparatu bezpieczeństwa dotyczące działań UB i MO wobec działaczy PSL.',
        year: 1945,
        downloadable: false,
      },
      {
        id: 'mikol-3',
        title: 'Wybory 1947 – archiwum prasy',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Wybory%201947%20prasy',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Prasa z okresu wyborów 1947 – propaganda PPR i dokumenty PSL.',
        year: 1947,
        downloadable: true,
      },
    ],
    relatedIds: ['wybory-1947', 'referendum-1946', 'ub', 'represje-polityczne', 'bierut'],
  },

  {
    id: 'zycie-codzienne',
    title: 'Życie codzienne w PRL',
    subtitle: 'Kolejki, kartki i szara rzeczywistość',
    category: 'społeczeństwo',
    tags: ['kolejki', 'kartki', 'niedobory', 'szara strefa', 'codzienność', 'blok', 'melinki'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Życie codzienne obywateli PRL naznaczone było stałym niedoborem towarów, wszechobecnymi kolejkami i systemem kartkowym. Zaradność, kombinowanie i szara strefa stały się normą przetrwania. Jednocześnie socjalizm zapewniał pewne formy stabilizacji – tanie mieszkania, bezpłatną opiekę zdrowotną i edukację.',
    content: `Codzienność w PRL to przede wszystkim walka o dobra podstawowe. W sklepach brakowało mięsa, kawy, papieru toaletowego, butów, pralki, telewizora. Na wszystko czekało się w kolejce lub przez znajomości.

**System kartkowy:**
Kartki na mięso wprowadzono w 1952 roku i kilkakrotnie przywracano. Szczyt systemu kartkowego przypadł na lata 1981–1989, gdy reglamentowano: mięso, wędliny, masło, cukier, mąkę, ryż, alkohol, benzynę, papierosy. Każdy obywatel miał miesięczny przydział.

**Kolejki:**
Kolejki przed sklepami były codziennością. Wstawano o świcie, by zająć miejsce. Wykształciła się etykieta kolejek – "stanie za kimś", przekazywanie miejsca, listy na kartce. Towar "rzucali" na ladę nieregularnie – wieść o dostawie mięsa błyskawicznie skupiała tłum.

**Szara strefa i kombinowanie:**
Polska rozwinęła rozbudowaną szarą strefę. "Kombinowanie" – zdobywanie towarów drogami nieoficjalnymi – stało się normą moralną, nie wstydem. Znajomości ("dojście") były cenniejsze niż pieniądze. Prezenty dla lekarza, mechanika, sprzedawcy – to był niepisany kod wymiany.

**Mieszkania i bloki:**
Miliony Polaków mieszkały w wielkich blokach z wielkiej płyty – Żoliborz, Bemowo, Ursynów w Warszawie; Nowa Huta w Krakowie. Małe metraże, cienkie ściany, ale własne – i na własne trzeba było czekać latami. Zapis do spółdzielni i czekanie 10–15 lat na przydział były normą.

**Niepisane korzyści systemu:**
PRL zapewniał też gwarancje, które po 1989 roku zniknęły – zatrudnienie (bezrobocie było nielegalne), bezpłatne leczenie, bezpłatną edukację, tanie wczasy FWP i kolonie dla dzieci. Świadomość tych elementów kształtuje nostalgię za PRL wśród części starszego pokolenia.`,
    resources: [
      {
        id: 'zc-1',
        title: 'Kolejka – symbol późnego PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=gospodarka%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o kolejkach, kartkach i niedoborach jako symbolu codzienności PRL.',
        year: 1981,
        downloadable: false,
      },
      {
        id: 'zc-2',
        title: 'Kroniki codzienności PRL – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20codzienno%C5%9Bci',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwum kronik filmowych i dokumentów pokazujących codzienne życie w PRL.',
        year: 1955,
        downloadable: false,
      },
      {
        id: 'zc-3',
        title: 'Fotografie życia codziennego – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20%C5%BCycia%20codziennego',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdjęcia prasowe i archiwalne dokumentujące codzienność polskiego społeczeństwa w PRL.',
        year: 1960,
        downloadable: true,
      },
    ],
    relatedIds: ['gospodarka-prl', 'fiat-126p', 'nomenklatura', 'nowa-huta', 'gierek'],
  },

  {
    id: 'edukacja-prl',
    title: 'Edukacja w PRL',
    subtitle: 'Szkoła jako narzędzie indoktrynacji',
    category: 'społeczeństwo',
    tags: ['edukacja', 'szkoła', 'indoktrynacja', 'ZMP', 'harcerstwo', 'nauka', 'wychowanie'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'System edukacji w PRL łączył powszechny dostęp do nauki z głęboką indoktrynacją ideologiczną. Szkoły były narzędziem kształtowania "nowego człowieka socjalizmu". Jednocześnie polskie szkolnictwo wyższe osiągało wysokie standardy akademickie, a polska nauka miała okresy prawdziwego rozkwitu.',
    content: `Komunistyczny system oświaty w Polsce budowany był od 1944 roku na zasadach marksistowsko-leninowskich. Cel był podwójny: zapewnić powszechny dostęp do edukacji (co w Polsce przedwojennej nie istniało) i ukształtować człowieka oddanego nowej władzy.

**Reforma szkolna:**
Szybko wprowadzono 7-letnią szkołę podstawową jako obowiązkową. Zlikwidowano szkoły prywatne i wyznaniowe. Program nauczania ujednolicono i nasycono treściami ideologicznymi – historię przepisywano, literaturę selekcjonowano.

**Indoktrynacja:**
- Lekcje historii gloryfikowały ZSRR i ruch robotniczy, przemilczały zbrodnie komunizmu
- Język rosyjski był obowiązkowy od podstawówki
- Organizacje młodzieżowe – ZMP (Związek Młodzieży Polskiej, 1948–1957), potem ZMS i ZMW – były quasi-obowiązkowe
- Harcerstwo (ZHP) podporządkowano ideologii partyjnej

**Związek Młodzieży Polskiej (ZMP):**
ZMP wzorowany był na sowieckim Komsomole. Należało do niego większość uczniów szkół średnich. Organizacja prowadziła akcje propagandowe, współzawodnictwo pracy i donosiła na "klasowych wrogów". Po Październiku 1956 rozwiązano ZMP jako symbol stalinizmu.

**Szkolnictwo wyższe:**
Polska miała dobrze rozwinięte uczelnie – Politechniki, Akademie Medyczne, Wydziały Historyczne i Prawne. Jakość nauk ścisłych i medycyny była wysoka. Jednak nauki humanistyczne i społeczne podlegały cenzurze ideologicznej.

**Tajne komplety w stanie wojennym:**
Po 13 grudnia 1981 roku opozycja organizowała nielegalne wykłady w prywatnych mieszkaniach. Latający Uniwersytet i inne formy podziemnego nauczania kontynuowały tradycję z czasów okupacji.`,
    resources: [
      {
        id: 'edu-1',
        title: 'Edukacja i indoktrynacja w PRL – IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Edukacja%20indoktrynacja',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o systemie oświaty i indoktrynacji w szkołach PRL.',
        year: 1948,
        downloadable: true,
      },
      {
        id: 'edu-2',
        title: 'ZMP i harcerstwo w PRL – akta archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=ZMP%20harcerstwo',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Dokumenty Związku Młodzieży Polskiej i Zarządu Głównego ZHP w archiwach państwowych.',
        year: 1948,
        downloadable: false,
      },
      {
        id: 'edu-3',
        title: 'Kroniki szkolne z PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Kroniki%20szkolne',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Podręczniki, kroniki szkolne i materiały propagandowe dla dzieci z epoki PRL.',
        year: 1950,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'propaganda-prl', 'cenzura-prl', 'kosciol-prl', 'drugi-obieg'],
  },

  {
    id: 'nzs',
    title: 'Niezależne Zrzeszenie Studentów',
    subtitle: 'Studenckie ramię Solidarności',
    category: 'opozycja',
    tags: ['NZS', 'studenci', 'Solidarność', '1980', 'uczelnie', 'opozycja studencka'],
    yearStart: 1980,
    yearEnd: 1989,
    summary: 'Niezależne Zrzeszenie Studentów (NZS) – niezależna organizacja studencka powołana w 1980 roku jako odpowiednik NSZZ Solidarność na uczelniach. Skupiała dziesiątki tysięcy studentów, prowadziła działalność kulturalną i polityczną, była wielokrotnie delegalizowana i reaktywowana.',
    content: `Niezależne Zrzeszenie Studentów powstało jesienią 1980 roku, w atmosferze entuzjazmu po Sierpniu i podpisaniu Porozumień Gdańskich. Studentom udało się wywalczyć rejestrację organizacji niezależnej od SZSP (Socjalistycznego Związku Studentów Polskich).

**Powstanie i cele:**
NZS zrzeszało studentów z dziesiątek uczelni w całej Polsce. Domagało się autonomii uczelni, zniesienia obowiązkowego nauczania języka rosyjskiego i ideologicznych przedmiotów (marksizm-leninizm, ekonomia polityczna socjalizmu), dostępu do zakazanej literatury i swobody stowarzyszania.

**Strajk w Łodzi (1981):**
Największy sukces NZS przed stanem wojennym: strajk studencki w Łodzi w lutym 1981 roku zakończył się podpisaniem porozumienia z władzami uczelni i Ministerstwem – uczelnie uzyskały gwarancje autonomii, zniesiono część obowiązkowych przedmiotów ideologicznych.

**Stan wojenny:**
13 grudnia 1981 roku NZS zdelegalizowano. Działacze organizacji trafiali do internowania. Część kontynuowała działalność podziemną – wydawała pisma, organizowała nielegalne wykłady i spotkania.

**Reaktywacja i 1989 rok:**
NZS reaktywowało działalność jawną po 1988 roku. W 1989 roku organizacja uczestniczyła w kampanii do wyborów 4 czerwca, popierając kandydatów Solidarności. Po 1989 roku NZS pozostało legalną organizacją studencką.`,
    resources: [
      {
        id: 'nzs-1',
        title: 'NZS – historia i dokumenty',
        type: 'publikacja',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum ECS – dokumenty, zdjęcia i relacje dotyczące NZS i studenckiego ruchu solidarnościowego.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'nzs-2',
        title: 'Studenci w opozycji – materiały IPN',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Studenci%20opozycji',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o ruchu studenckim i NZS w czasach Solidarności.',
        year: 1980,
        downloadable: true,
      },
      {
        id: 'nzs-3',
        title: 'Strajk studencki 1981 – archiwum',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Strajk%20studencki%201981',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji NZS i represji wobec działaczy studenckich.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['solidarnosc', 'marzec-1968', 'stan-wojenny', 'drugi-obieg', 'kor'],
  },

  {
    id: 'internowanie',
    title: 'Internowanie w stanie wojennym',
    subtitle: '10 000 działaczy Solidarności za kratkami',
    category: 'represje',
    tags: ['internowanie', 'stan wojenny', 'Solidarność', 'obozy', 'Białołęka', 'represje 1981'],
    yearStart: 1981,
    yearEnd: 1982,
    summary: 'W nocy z 12 na 13 grudnia 1981 roku, wraz z ogłoszeniem stanu wojennego, SB i milicja przeprowadziły masowe zatrzymania działaczy Solidarności, KOR i innych organizacji opozycyjnych. Łącznie w ciągu kilku tygodni internowano ok. 10 000 osób – bez wyroku sądowego, na podstawie decyzji administracyjnej.',
    content: `Internowanie było kluczowym elementem operacji "Jodła" – przygotowanego przez MSW planu wprowadzenia stanu wojennego. Listy internowanych były gotowe z wyprzedzeniem i obejmowały przywódców Solidarności na wszystkich szczeblach.

**Noc z 12 na 13 grudnia:**
O godzinie 0:00 tysiące funkcjonariuszy SB i milicji jednocześnie zapukało do drzwi działaczy w całym kraju. Zatrzymywano bez nakazu sądu, na podstawie decyzji administracyjnej ministra spraw wewnętrznych. Internowani nie wiedzieli, na jak długo ani do jakiego ośrodka trafią.

**Ośrodki internowania:**
Osadzano w różnych obiektach – aresztach śledczych, zakładach karnych, specjalnych ośrodkach. Największe to: Białołęka (Warszawa), Jaworze, Gołdap, Darłówek, Kwidzyn, Kamień Pomorski. Warunki były różne – od względnie znośnych po celowe szykany.

**Wśród internowanych:**
Internowano m.in. Lecha Wałęsę (Arłamów), Andrzeja Gwiazdę, Jana Rulewskiego, Jacka Kuronia, Adama Michnika, Zbigniewa Romaszewskiego i tysiące regionalnych działaczy Solidarności. Internowani nie mieli statusu więźniów ani oskarżonych.

**Warunki i protest:**
W wielu ośrodkach internowani prowadzili strajki głodowe, protestując przeciw warunkom. Opiekowały się nimi rodziny i Kościół. Listy z ośrodków przemycano na zewnątrz i publikowano w podziemnym obiegu.

**Zwolnienia:**
Większość internowanych zwolniono stopniowo do końca 1982 roku. Część trafiła pod zarzuty karne. Internowanie zakończono formalnie wraz z zawieszeniem stanu wojennego w lipcu 1983 roku.`,
    resources: [
      {
        id: 'intern-1',
        title: 'Internowani stanu wojennego – baza IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Internowani%20stanu%20wojennego',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące internowania działaczy Solidarności – decyzje, listy, akta SB.',
        year: 1981,
        downloadable: false,
      },
      {
        id: 'intern-2',
        title: 'Stan wojenny i internowanie – fotografie',
        type: 'zdjęcie',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Stan%20wojenny%20internowanie',
        source: 'IPN Edukacja',
        description: 'Fotografie dokumentujące stan wojenny – aresztowania, ośrodki internowania, codzienność.',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'intern-3',
        title: 'Relacje internowanych – Europejskie Centrum Solidarności',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Wspomnienia i relacje osób internowanych w czasie stanu wojennego.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['stan-wojenny', 'solidarnosc', 'walesa', 'sbezpieczenstwa', 'zomo'],
  },

  {
    id: 'michnik',
    title: 'Adam Michnik',
    subtitle: 'Intelektualista opozycji i redaktor Gazety Wyborczej',
    category: 'osoby',
    tags: ['Michnik', 'KOR', 'opozycja', 'Gazeta Wyborcza', 'więzienie', 'intelektualista'],
    yearStart: 1968,
    summary: 'Adam Michnik (ur. 1946) – jeden z najważniejszych intelektualistów polskiej opozycji demokratycznej. Uczestnik protestów Marca 1968, współzałożyciel KOR, więzień polityczny wielokrotnie osadzany przez władze PRL. Po 1989 roku redaktor naczelny "Gazety Wyborczej" – pierwszego niezależnego dziennika w bloku wschodnim.',
    content: `Adam Michnik urodził się w 1946 roku w Warszawie. Od wczesnej młodości angażował się w działalność opozycyjną – jako student historii UW uczestniczył w dyskusjach klubu "Poszukiwaczy Sprzeczności" i był jednym z organizatorów protestu przeciw zdjęciu ze sceny "Dziadów" Mickiewicza w 1968 roku.

**Marzec 1968:**
Michnik był jednym z przywódców studenckiego protestu marcowego. Aresztowany, skazany na trzy lata więzienia. Wydalony z Uniwersytetu Warszawskiego.

**KOR i opozycja:**
W 1976 roku współtworzył Komitet Obrony Robotników (KOR). Pisał analizy polityczne przemycane w podziemnym obiegu. Jego esej "Kościół, lewica, dialog" (1977) był przełomowy – przekonywał lewicową inteligencję do sojuszu z Kościołem i robotnikami.

**Więzienia:**
Michnik był kilkakrotnie zatrzymywany i więziony przez SB. Po wprowadzeniu stanu wojennego w grudniu 1981 roku internowano go, a następnie postawiono zarzuty karne. Spędził łącznie kilka lat za kratkami.

**"Listy z więzienia":**
W trakcie uwięzienia Michnik pisał eseje i listy, przemycane na zewnątrz i wydawane w podziemnym obiegu oraz przez Instytut Literacki Giedroycia. "Listy z więzienia" stały się ważnym dokumentem moralnym epoki.

**Okrągły Stół i transformacja:**
Michnik uczestniczył w obradach Okrągłego Stołu. 8 maja 1989 roku ukazał się pierwszy numer "Gazety Wyborczej" – pisma Solidarności, którym kierował jako redaktor naczelny. "GW" stała się największym polskim dziennikiem.`,
    resources: [
      {
        id: 'michnik-1',
        title: 'Adam Michnik – akta SB i IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Adam%20Michnik',
        source: 'IPN Inwentarz',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące inwigilacji i represji wobec Adama Michnika.',
        year: 1968,
        downloadable: false,
      },
      {
        id: 'michnik-2',
        title: 'KOR i opozycja demokratyczna – Przystanek Historia',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=KOR%20opozycja%20demokratyczna',
        source: 'IPN',
        description: 'Artykuł IPN o Komitecie Obrony Robotników, którego Michnik był współzałożycielem.',
        year: 1976,
        downloadable: false,
      },
      {
        id: 'michnik-3',
        title: 'Okrągły Stół – dokumentacja',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o obradach Okrągłego Stołu, w których Michnik uczestniczył.',
        year: 1989,
        downloadable: false,
      },
    ],
    relatedIds: ['kor', 'marzec-1968', 'solidarnosc', 'internowanie', 'okragly-stol'],
  },

  {
    id: 'kuron',
    title: 'Jacek Kuroń',
    subtitle: 'Twórca KOR i sumienie opozycji',
    category: 'osoby',
    tags: ['Kuroń', 'KOR', 'opozycja', 'Solidarność', 'List otwarty', 'więzień polityczny'],
    yearStart: 1964,
    yearEnd: 1989,
    summary: 'Jacek Kuroń (1934–2004) – jeden z najbardziej charyzmatycznych przywódców polskiej opozycji. Autor "Listu otwartego do PZPR" (1965), współzałożyciel KOR (1976), doradca Solidarności i wielokrotny więzień polityczny. Po 1989 roku minister pracy w rządzie Mazowieckiego.',
    content: `Jacek Kuroń urodził się w 1934 roku we Lwowie. Był działaczem harcerskim i przez pewien czas szczerym komunistą – szybko jednak doszedł do wniosku, że system jest niereformowalny od środka.

**"List otwarty do PZPR" (1965):**
Kuroń wspólnie z Karolem Modzelewskim napisał "List otwarty do członków PZPR" – wyczerpującą marksistowską analizę biurokratycznego charakteru komunizmu. Tekst krążył w maszynopisach. Za jego napisanie obaj autorzy zostali skazani na 3 lata więzienia.

**KOR – Komitet Obrony Robotników:**
We wrześniu 1976 roku, po represjach wobec robotników Radomia i Ursusa, Kuroń był głównym organizatorem KOR. Komitet jawnie – pod nazwiskami – udzielał pomocy prawnej i finansowej represjonowanym robotnikom i ich rodzinom. Była to rewolucyjna zmiana w taktyce opozycji.

**Doradca Solidarności:**
Podczas sierpniowego strajku 1980 roku Kuroń koordynował informacje w Warszawie i doradzał strajkującym. Jego telefon był centrum kontaktowym opozycji. W stanie wojennym internowany, a następnie aresztowany – spędził łącznie ponad 8 lat w więzieniu.

**Twarz opozycji:**
Kuroń był niezwykłą osobowością – porywającym mówcą, człowiekiem o wielkim sercu. Jego słynne powiedzenie "zamiast palić komitety, zakładajcie własne" stało się mottem opozycyjnej taktyki.

**Po 1989 roku:**
Jako minister pracy rządu Mazowieckiego (1989–1991, 1992–1993) tworzył polskie prawo pracy i system zabezpieczenia społecznego w dobie transformacji. Autor "Zupy Kuronia" – jako minister organizował pomoc dla bezrobotnych.`,
    resources: [
      {
        id: 'kuron-1',
        title: 'Jacek Kuroń – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Jacek%20Kuro%C5%84',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji Jacka Kuronia przez aparat bezpieczeństwa PRL.',
        year: 1964,
        downloadable: false,
      },
      {
        id: 'kuron-2',
        title: 'KOR – historia i dokumenty IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=KOR',
        source: 'IPN',
        description: 'Artykuł IPN o Komitecie Obrony Robotników założonym przez Kuronia i innych.',
        year: 1976,
        downloadable: false,
      },
      {
        id: 'kuron-3',
        title: 'Kuroń i Solidarność – Europejskie Centrum Solidarności',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum ECS – materiały o roli Jacka Kuronia w ruchu Solidarności.',
        year: 1980,
        downloadable: false,
      },
    ],
    relatedIds: ['kor', 'solidarnosc', 'michnik', 'internowanie', 'okragly-stol'],
  },

  {
    id: 'podziemna-solidarnosc',
    title: 'Podziemna Solidarność',
    subtitle: 'Związek w konspiracji 1981–1989',
    category: 'opozycja',
    tags: ['TKK', 'podziemie', 'Solidarność', 'stan wojenny', 'Radio Solidarność', 'Bujak'],
    yearStart: 1981,
    yearEnd: 1989,
    summary: 'Po delegalizacji NSZZ Solidarność w grudniu 1981 roku związek przeszedł do podziemia. Tymczasowa Komisja Koordynacyjna (TKK) kierowała strukturami konspiracyjnymi przez całe lata 80. Podziemna Solidarność wydawała prasę, organizowała strajki i utrzymywała kontakty z Zachodem aż do legalizacji w 1989 roku.',
    content: `Po wprowadzeniu stanu wojennego Solidarność jako organizacja legalna przestała istnieć – delegalizacja nastąpiła formalnie w październiku 1982 roku. Jednak związek przetrwał w konspiracji, czerpiąc z tradycji polskiego podziemia niepodległościowego.

**Tymczasowa Komisja Koordynacyjna (TKK):**
Zbigniew Bujak (Region Mazowsze), Bogdan Lis (Gdańsk), Władysław Frasyniuk (Wrocław) i Eugeniusz Szumiejko tworzyli TKK – podziemne kierownictwo związku. Ukrywali się latami, unikając aresztowania. Bujak był ścigany przez SB przez ponad 4 lata.

**Prasa podziemna:**
Podziemna Solidarność wydawała setki tytułów prasowych – biuletyny regionalne, pisma tematyczne, wydawnictwa książkowe. "Tygodnik Mazowsze" był największym podziemnym pismem – wychodził regularnie przez cały czas stanu wojennego i po nim.

**Radio Solidarność:**
Podziemne radio Solidarności nadawało krótkie audycje na falach radiowych – przerywając oficjalne programy. Każda audycja trwała kilka minut, zanim SB zdołała namierzyć nadajnik. Audycje informowały o represjach i mobilizowały do oporu.

**Strajki i akcje:**
W rocznice kluczowych wydarzeń – 13 grudnia, 31 sierpnia – podziemna Solidarność organizowała akcje protestacyjne: bojkot prasy, spacery, demonstracje. W 1988 roku fala strajków zmusiła władze do rozmów.

**Kontakty z Zachodem:**
Przez kurierów i przez Kościół podziemna Solidarność utrzymywała stały kontakt z emigracją, z Biurem Koordynacyjnym w Brukseli i z zachodnimi rządami. Pomoc finansowa i sprzętowa (powielacze, papier) napływała z Zachodu.`,
    resources: [
      {
        id: 'podz-sol-1',
        title: 'Tygodnik Mazowsze i prasa podziemna – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Tygodnik%20Mazowsze%20prasa',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane numery podziemnych pism Solidarności w archiwum Biblioteki Narodowej.',
        year: 1982,
        downloadable: true,
      },
      {
        id: 'podz-sol-2',
        title: 'Podziemna Solidarność – archiwum ECS',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Dokumenty, zdjęcia i relacje dotyczące podziemnej działalności Solidarności w latach 80.',
        year: 1982,
        downloadable: false,
      },
      {
        id: 'podz-sol-3',
        title: 'TKK i podziemie Solidarności – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=TKK%20podziemie%20Solidarno%C5%9Bci',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o strukturach podziemnej Solidarności i jej działalności.',
        year: 1982,
        downloadable: true,
      },
    ],
    relatedIds: ['solidarnosc', 'stan-wojenny', 'drugi-obieg', 'strajki-1988', 'internowanie'],
  },

  {
    id: 'kapuscinski',
    title: 'Ryszard Kapuściński',
    subtitle: 'Mistrz reportażu i świadek historii świata',
    category: 'osoby',
    tags: ['Kapuściński', 'reportaż', 'dziennikarstwo', 'PAP', 'Cesarz', 'Afryka', 'literatura faktu'],
    yearStart: 1956,
    yearEnd: 1989,
    summary: 'Ryszard Kapuściński (1932–2007) – najwybitniejszy polski reporter XX wieku. Korespondent PAP w Afryce, Azji i Ameryce Łacińskiej. Autor "Cesarza", "Szachinszacha" i "Imperium" – dzieł, które opisując dalekie despotyzmy, mówiły o uniwersalnych mechanizmach totalitaryzmu. Przez PRL traktowany instrumentalnie, lecz tworzył literaturę o ponadczasowej wartości.',
    content: `Ryszard Kapuściński urodził się w 1932 roku w Pińsku (dziś Białoruś). Ukończył historię na UW. Jako dziennikarz PAP wyjeżdżał na przełomie lat 50. i 60. do Afryki – był świadkiem dekolonizacji kontynentu.

**Korespondent w świecie:**
Kapuściński jako reportażysta PAP pracował w Afryce Subsaharyjskiej, Ameryce Łacińskiej (rewolucja w Chile, Salwador), Iranie i krajach arabskich. Był świadkiem i kronikarzem dziesiątek rewolucji, wojen i zamachów stanu. Jak sam mówił – "byłem tam, gdzie historia się działa".

**"Cesarz" (1978):**
Opowieść o dworze ostatniego cesarza Etiopii Hajle Sellasje I – ale napisana tak, że każdy czytelnik w PRL rozumiał, że chodzi o mechanizm każdej władzy totalitarnej. "Cesarz" był bestsellerem w Polsce i sukcesem na Zachodzie.

**"Szachinszach" (1982):**
Reportaż o rewolucji irańskiej i obaleniu szacha Mohammada Rezy Pahlawiego. Kolejna medytacja o naturze despotyzmu i rewolucji.

**PRL a Kapuściński:**
Kapuściński pracował dla PAP – państwowej agencji – i był więc narzędziem propagandy. Jednocześnie jego teksty wykraczały daleko poza potrzeby propagandowe. Władze traktowały go jako prestiżową wizytówkę polskiej kultury, nie rozumiejąc głębokości jego przekazu.

**Dziedzictwo:**
Kapuściński jest dziś uznawany za jednego z twórców nowoczesnego reportażu literackiego. Jego dzieła przetłumaczono na ponad 30 języków.`,
    resources: [
      {
        id: 'kapus-1',
        title: 'Ryszard Kapuściński – Cesarz i inne dzieła',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/kapuscinski-ryszard/',
        source: 'Wolne Lektury',
        description: 'Dostęp do reportaży i esejów Ryszarda Kapuścińskiego w cyfrowej bibliotece.',
        year: 1978,
        downloadable: true,
      },
      {
        id: 'kapus-2',
        title: 'Kapuściński – archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Kapu%C5%9Bci%C5%84ski%20Polony',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum pierwszych wydań dzieł Kapuścińskiego i materiały prasowe z epoki.',
        year: 1975,
        downloadable: true,
      },
      {
        id: 'kapus-3',
        title: 'Dziennikarstwo w PRL – materiały edukacyjne',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Dziennikarstwo',
        source: 'IPN Edukacja',
        description: 'Materiały IPN o pracy dziennikarskiej w warunkach cenzury i propagandy PRL.',
        year: 1956,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'propaganda-prl', 'milosz', 'kultura-paryz'],
  },

  {
    id: 'kpn',
    title: 'Konfederacja Polski Niepodległej',
    subtitle: 'Pierwsza jawna partia niepodległościowa od 1945 roku',
    category: 'opozycja',
    tags: ['KPN', 'Moczulski', 'niepodległość', 'opozycja', 'więzienie', '1979'],
    yearStart: 1979,
    summary: 'Konfederacja Polski Niepodległej (KPN) – organizacja polityczna założona 1 września 1979 roku przez Leszka Moczulskiego. Była pierwszą jawnie działającą partią polityczną dążącą do pełnej niepodległości Polski i zerwania z ZSRR. Jej działacze byli wielokrotnie skazywani na długoletnie wyroki więzienia.',
    content: `Konfederacja Polski Niepodległej powstała 1 września 1979 roku – w 40. rocznicę wybuchu II wojny światowej. Jej założycielem i liderem był Leszek Moczulski, dziennikarz i historyk.

**Program:**
KPN głosiła hasła radykalniejsze niż KOR czy Solidarność – dążyła nie do reform w ramach systemu, lecz do pełnej suwerenności i zerwania z blokiem sowieckim. Postulowała: niepodległość, demokratyczny ustrój, wycofanie wojsk sowieckich z Polski.

**Represje:**
Władze traktowały KPN jako szczególnie niebezpieczną. Moczulski i inni działacze byli wielokrotnie aresztowani. W 1980 roku Moczulski osadzony został na siedem lat więzienia (zwolniony przedterminowo). Procesy działaczy KPN były szczególnie surowe.

**Relacja z Solidarnością:**
KPN i Solidarność miały złożone relacje. Solidarność, skupiona na reformach i negocjacjach, unikała konfrontacyjnych haseł niepodległościowych. KPN krytykowała kompromisowość Solidarności. Jednocześnie obie organizacje walczyły z tym samym systemem.

**Lata 80. i transformacja:**
Po stanie wojennym KPN działała w podziemiu. W wyborach czerwcowych 1989 roku KPN nie uczestniczyła w porozumieniu Okrągłego Stołu – startowała samodzielnie, nie osiągając progu. W Sejmie kontraktowym zasiedli jednak jej sympatycy.

**Po 1989 roku:**
KPN weszła do parlamentu w wyborach 1991 roku. Moczulski przez lata był posłem i senatorem. Partia stopniowo traciła znaczenie i w 2003 roku połączyła się z innymi ugrupowaniami.`,
    resources: [
      {
        id: 'kpn-1',
        title: 'KPN – akta IPN i inwigilacja',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=KPN%20inwigilacja',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji i represji wobec działaczy KPN.',
        year: 1979,
        downloadable: false,
      },
      {
        id: 'kpn-2',
        title: 'Opozycja demokratyczna 1976–1989 – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Opozycja%20demokratyczna%201976',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o strukturach opozycyjnych, w tym KPN, w PRL.',
        year: 1979,
        downloadable: true,
      },
      {
        id: 'kpn-3',
        title: 'KPN i niepodległościowa opozycja – archiwum',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=KPN%20niepodleg%C5%82o%C5%9Bciowa%20opozycja',
        source: 'Szukaj w Archiwach',
        description: 'Dokumenty dotyczące działalności KPN i procesów jej działaczy.',
        year: 1979,
        downloadable: false,
      },
    ],
    relatedIds: ['kor', 'solidarnosc', 'drugi-obieg', 'nzs', 'represje-polityczne'],
  },

  {
    id: 'kobiety-prl',
    title: 'Kobiety w PRL',
    subtitle: 'Równość na papierze, podwójne obciążenie w życiu',
    category: 'społeczeństwo',
    tags: ['kobiety', 'emancypacja', 'praca', 'rodzina', 'Liga Kobiet', 'macierzyństwo'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'PRL oficjalnie głosił równouprawnienie kobiet – konstytucja zapewniała jednakowe prawa, kobiety masowo wchodziły na rynek pracy. W praktyce jednak kobiety dźwigały "podwójny etat" – pracę zawodową i pełen ciężar obowiązków domowych, w warunkach niedoboru towarów i braku udogodnień.',
    content: `Komunistyczna ideologia głosiła emancypację kobiet jako jeden ze swoich fundamentów. W rzeczywistości polityka ta miała przede wszystkim dostarczyć siłę roboczą rozwijającemu się przemysłowi.

**Kobiety na rynku pracy:**
W 1950 roku kobiety stanowiły ok. 30% pracujących, w 1980 roku – ponad 45%. Wchodziły do zawodów tradycyjnie męskich: były inżynierkami, lekarkami, nauczycielkami. Dostęp do edukacji był powszechny i formalnie niedyskryminujący.

**"Podwójny etat":**
Po powrocie z pracy kobieta wracała do… pracy domowej. W warunkach PRL gotowanie wymagało godzin spędzonych w kolejkach, pralka była luksusem, opieka nad dziećmi i starcami spoczywała na kobietach. Mężczyźni rzadko partycypowali w obowiązkach domowych – socjalizm zmienił strukturę zatrudnienia, nie mentalność społeczną.

**Liga Kobiet:**
Powołana w 1945 roku organizacja, wzorowana na sowieckich strukturach, miała mobilizować kobiety do aktywności społecznej i zawodowej. W praktyce była kontrolowanym przez partię narzędziem, niereprezentującym realnych potrzeb kobiet.

**Aborcja i planowanie rodziny:**
W 1956 roku PRL zalegalizował aborcję na szerokich podstawach – jedna z pierwszych takich ustaw w świecie. Regulacja wynikała bardziej z potrzeb ekonomicznych i demograficznych polityki niż z troski o prawa kobiet. Dostęp do antykoncepcji był ograniczony, co czyniło aborcję główną metodą planowania rodziny.

**Kobiety w opozycji:**
Kobiety odgrywały kluczową rolę w Solidarności i opozycji – Anna Walentynowicz, Barbara Labuda, Zofia Romaszewska. Jednak przywódcze stanowiska zajmowali głównie mężczyźni.`,
    resources: [
      {
        id: 'kob-1',
        title: 'Kobiety w PRL – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Kobiety',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o sytuacji kobiet w Polsce Ludowej.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'kob-2',
        title: 'Kroniki życia codziennego kobiet – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20%C5%BCycia%20codziennego',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne kroniki i filmy dokumentalne o życiu kobiet w PRL.',
        year: 1960,
        downloadable: false,
      },
      {
        id: 'kob-3',
        title: 'Prasa kobieca i Liga Kobiet – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Prasa%20kobieca%20Liga',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum prasy kobiecej PRL i materiałów Ligi Kobiet.',
        year: 1950,
        downloadable: true,
      },
    ],
    relatedIds: ['zycie-codzienne', 'walentynowicz', 'edukacja-prl', 'nomenklatura', 'solidarnosc'],
  },

  {
    id: 'rakowski',
    title: 'Mieczysław Rakowski',
    subtitle: 'Ostatni premier PRL i gravekopalnia Solidarności',
    category: 'osoby',
    tags: ['Rakowski', 'Polityka', 'premier', 'PZPR', 'koniec PRL', 'transformacja'],
    yearStart: 1981,
    yearEnd: 1990,
    summary: 'Mieczysław Rakowski (1926–2008) – dziennikarz, redaktor tygodnika "Polityka", wieloletni funkcjonariusz PZPR. Jako wicepremier negocjował ze strajkującymi w 1980 roku. Ostatni I sekretarz KC PZPR i przedostatni premier PRL. Symbolizuje reformatorskie skrzydło partii, które ostatecznie nie zdołało ocalić systemu.',
    content: `Mieczysław Rakowski był jedną z najbardziej znanych twarzy komunistycznej władzy w Polsce. Jako redaktor naczelny tygodnika "Polityka" (1958–1982) stworzył pismo o stosunkowo liberalnym profilu, które cieszyło się popularnością wśród inteligencji.

**Negocjacje w 1980 roku:**
W sierpniu 1980 roku Rakowski, jako wicepremier, przyjechał do Stoczni Gdańskiej negocjować ze strajkującymi. Rozmowy z Wałęsą zakończyły się fiaskiem – Rakowski nie miał mandatu do realnych ustępstw. Jego pewność siebie i styl bycia były postrzegane przez robotników jako arogancja władzy.

**"Polityka" i reformizm:**
Tygodnik "Polityka" pod redakcją Rakowskiego był wyjątkowy w krajobrazie prasy PRL – poruszał tematy tabu, publikował analizy gospodarcze wskazujące na słabości systemu. Był jednak reformizmem w granicach akceptowanych przez partię, nie kwestionującym fundamentów ustroju.

**Premierstwo (1988–1989):**
Rakowski objął stanowisko premiera w październiku 1988 roku. Rządził w najtrudniejszym dla PRL czasie – kryzys ekonomiczny, strajki, żądania legalizacji Solidarności. W grudniu 1988 roku podjął kontrowersyjną decyzję o likwidacji Stoczni Gdańskiej (wycofaną pod naciskiem). To posunięcie dramatycznie pogorszyło jego reputację.

**Ostatni I sekretarz PZPR:**
W lipcu 1989 roku Rakowski objął funkcję I sekretarza KC PZPR – kiedy partia chyliła się ku upadkowi. Przewodził jej rozwiązaniu w January 1990 roku. Na gruzach PZPR powstała Socjaldemokracja Rzeczypospolitej Polskiej (SdRP).`,
    resources: [
      {
        id: 'rakow-1',
        title: 'Rakowski i schyłek PRL – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Rakowski%20schy%C5%82ek',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o ostatnich latach PRL i roli Rakowskiego.',
        year: 1988,
        downloadable: false,
      },
      {
        id: 'rakow-2',
        title: 'Okrągły Stół – droga do transformacji',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Dokumentacja obrad Okrągłego Stołu – kontekst polityczny rządów Rakowskiego.',
        year: 1989,
        downloadable: false,
      },
      {
        id: 'rakow-3',
        title: 'Archiwum KC PZPR – ostatnie lata partii',
        type: 'akt',
        url: 'https://aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Dokumenty KC PZPR z lat 1988–1990 – schyłek partii za rządów Rakowskiego.',
        year: 1988,
        downloadable: false,
      },
    ],
    relatedIds: ['pzpr', 'okragly-stol', 'solidarnosc', 'strajki-1988', 'mazowiecki'],
  },

  {
    id: 'rwpg',
    title: 'RWPG – Rada Wzajemnej Pomocy Gospodarczej',
    subtitle: 'Wschodni blok gospodarczy 1949–1991',
    category: 'gospodarka',
    tags: ['RWPG', 'Comecon', 'blok wschodni', 'handel', 'integracja', 'rubel transferowy'],
    yearStart: 1949,
    yearEnd: 1991,
    summary: 'Rada Wzajemnej Pomocy Gospodarczej (RWPG, ang. Comecon) – organizacja ekonomiczna krajów bloku wschodniego, powołana w 1949 roku jako odpowiedź na Plan Marshalla. Polska była członkiem założycielem. RWPG regulowała handel między krajami socjalistycznymi, określała specjalizację produkcyjną i uzależniała polską gospodarkę od ZSRR.',
    content: `RWPG – Rada Wzajemnej Pomocy Gospodarczej – powstała 25 stycznia 1949 roku w Moskwie. Członkami założycielami były: ZSRR, Polska, Czechosłowacja, Węgry, Rumunia i Bułgaria. Następnie dołączyły NRD, Albania i Mongolia.

**Cele i struktura:**
RWPG miała koordynować plany gospodarcze, ułatwiać wymianę handlową i wyspecjalizować produkcję poszczególnych krajów. W praktyce oznaczało to podporządkowanie planów narodowych potrzebom ZSRR.

**Rubel transferowy:**
Rozliczenia między krajami RWPG odbywały się w sztucznej walucie – rublu transferowym. Nie był wymienialny na waluty zachodnie i nie odzwierciedlał realnej wartości towarów. System był korzystny dla ZSRR (tani surowce energetyczne w zamian za produkty przemysłowe po zawyżonych cenach).

**Specjalizacja:**
Polska specjalizowała się w produkcji: węgla, statków (Stocznia Gdańska), maszyn górniczych, wagonów kolejowych, koksu. Inne kraje dostarczały: ZSRR – ropę i gaz, Czechosłowacja – obrabiarki, NRD – sprzęt elektroniczny.

**Uzależnienie od ZSRR:**
Polska importowała prawie całość ropy naftowej i gazu ziemnego z ZSRR – po cenach niższych niż rynkowe (co paradoksalnie było dotacją sowiecką dla bloku). Po szokach naftowych lat 70. ZSRR stopniowo podnosił ceny w RWPG, pogłębiając kryzysy gospodarcze krajów bloku.

**Rozwiązanie:**
RWPG rozwiązano 28 czerwca 1991 roku – po upadku komunizmu w Europie i rozpadzie ZSRR. Kraje byłego bloku wschodniego orientowały się na integrację z EWG/UE.`,
    resources: [
      {
        id: 'rwpg-1',
        title: 'RWPG i integracja gospodarcza bloku wschodniego – IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=RWPG%20integracja%20gospodarcza',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o gospodarce PRL w ramach bloku wschodniego i RWPG.',
        year: 1949,
        downloadable: true,
      },
      {
        id: 'rwpg-2',
        title: 'Dokumenty RWPG – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=RWPG%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Akta polskich delegacji na posiedzenia RWPG i dokumenty handlowe z krajami bloku.',
        year: 1949,
        downloadable: false,
      },
      {
        id: 'rwpg-3',
        title: 'Gospodarka PRL i zależność od ZSRR – opracowanie',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=gospodarka%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o realiach gospodarczych PRL, w tym zależności od ZSRR w ramach RWPG.',
        year: 1970,
        downloadable: false,
      },
    ],
    relatedIds: ['gospodarka-prl', 'uklad-warszawski', 'gierek', 'nacjonalizacja', 'plan-szescioletni'],
  },

  {
    id: 'szymborska',
    title: 'Wisława Szymborska',
    subtitle: 'Poetka codzienności i laureatka Nagrody Nobla',
    category: 'osoby',
    tags: ['Szymborska', 'Nobel', 'poezja', 'Kraków', 'literatura', 'ironia'],
    yearStart: 1952,
    yearEnd: 1996,
    summary: 'Wisława Szymborska (1923–2012) – jedna z największych poetek polskich XX wieku, laureatka Literackiej Nagrody Nobla 1996. Przez całe życie związana z Krakowem. W młodości należała do PZPR i publikowała wiersze zgodne z socrealizmem – co później traktowała jako hańbę. Dojrzała twórczość to mistrzostwo ironii, filozofii codzienności i humanizmu.',
    content: `Wisława Szymborska urodziła się w 1923 roku w Bninie koło Poznania, całe dojrzałe życie spędziła w Krakowie. Debiutowała w 1952 roku tomikiem "Dlatego żyjemy" – napisanym w duchu socrealizmu. Wiersze te poetka odrzuciła i nigdy nie włączyła do swoich zbiorów.

**Odejście od socrealizmu:**
Po Październiku 1956 roku Szymborska całkowicie zerwała z poetyką agitacyjną. Jej kolejne tomy – "Wołanie do Yeti" (1957), "Sól" (1962), "Sto pociech" (1967) – przyniosły jej uznanie jako poetki filozoficznej, posługującej się ironią i paradoksem.

**Poetka codzienności:**
Szymborska pisała o rzeczach małych i wielkich jednocześnie – o kamieniu, kocie, rozmowie z kamieniem, o śmierci, przypadku, miłości, historii. Jej wiersze są krótkie, precyzyjne, często zaskakują puentą. Stworzyła własny, rozpoznawalny styl.

**Stosunek do PRL:**
Szymborska przez lata unikała angażowania się politycznie. Nie była dysydentką – ale też nie popierała systemu. Jej wiersze były wydawane w PRL, choć niektóre napotykały na opór cenzury. Po 1989 roku mówiła otwarcie o wstydzie za socrealistyczne debiuty.

**Nagroda Nobla (1996):**
Akademia Szwedzka przyznała Szymborskiej Literacką Nagrodę Nobla z uzasadnieniem: "za poezję, która z ironiczną precyzją pozwala historycznemu i biologicznemu kontekstowi ukazać się we fragmentach ludzkiej rzeczywistości". Jej Nobel wzbudził w Polsce ogromną dumę.`,
    resources: [
      {
        id: 'szym-1',
        title: 'Wisława Szymborska – wiersze i eseje',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/szymborska-wislawa/',
        source: 'Wolne Lektury',
        description: 'Wybór wierszy Wisławy Szymborskiej dostępny w cyfrowej bibliotece Wolne Lektury.',
        year: 1957,
        downloadable: true,
      },
      {
        id: 'szym-2',
        title: 'Nobel 1996 – wykład noblowski Szymborskiej',
        type: 'nagranie',
        url: 'https://www.nobelprize.org/prizes/literature/1996/szymborska/lecture/',
        source: 'NobelPrize.org',
        description: 'Oficjalne archiwum Nagrody Nobla – wykład noblowski Wisławy Szymborskiej z 1996 roku.',
        year: 1996,
        downloadable: false,
      },
      {
        id: 'szym-3',
        title: 'Szymborska w archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Szymborska%20Polony',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Pierwsze wydania tomów poetyckich Szymborskiej i archiwalia prasowe.',
        year: 1952,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'milosz', 'herbert', 'kultura-paryz'],
  },

  {
    id: 'geremek',
    title: 'Bronisław Geremek',
    subtitle: 'Historyk i doradca Solidarności',
    category: 'osoby',
    tags: ['Geremek', 'Solidarność', 'Okrągły Stół', 'historyk', 'KOR', 'dyplomacja'],
    yearStart: 1980,
    yearEnd: 1989,
    summary: 'Bronisław Geremek (1932–2008) – wybitny historyk mediewista, doradca NSZZ Solidarność i jeden z kluczowych negocjatorów Okrągłego Stołu. Po 1989 roku poseł, minister spraw zagranicznych i europoseł. Zginął w wypadku samochodowym w 2008 roku.',
    content: `Bronisław Geremek urodził się w 1932 roku w Warszawie w rodzinie żydowskiej. Ocalał z Holokaustu. Ukończył historię na UW, doktoryzował się w Paryżu. Pracował w Instytucie Historii PAN, specjalizując się w historii średniowiecznej Europy Zachodniej.

**Zaangażowanie w opozycję:**
W latach 70. Geremek zbliżył się do środowisk KOR. Po Sierpniu 1980 roku stał się jednym z najważniejszych doradców NSZZ Solidarność. Łączył świat intelektualny z ruchem robotniczym.

**Internowanie i represje:**
Po wprowadzeniu stanu wojennego w grudniu 1981 roku Geremek został internowany. Po zwolnieniu kontynuował działalność konspiracyjną, ukrywając się. Był jednym z architektów strategii Solidarności w podziemiu.

**Okrągły Stół (1989):**
Geremek był jednym z najważniejszych negocjatorów po stronie Solidarności podczas obrad Okrągłego Stołu. Kierował zespołem ds. reform politycznych. Jego doświadczenie historyka i europejskie kontakty były nieocenione.

**Kariera po 1989 roku:**
Poseł na Sejm od 1989 roku. Minister Spraw Zagranicznych (1997–2000) – w tym czasie Polska wstąpiła do NATO (1999). Europoseł w Parlamencie Europejskim. Jeden z głównych architektów polskiej polityki europejskiej i atlantyckiej.

**Śmierć:**
Bronisław Geremek zginął 13 lipca 2008 roku w wypadku samochodowym pod Lubinem. Miał 76 lat.`,
    resources: [
      {
        id: 'geremek-1',
        title: 'Bronisław Geremek – doradca Solidarności',
        type: 'publikacja',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum ECS – materiały dotyczące roli Geremka jako doradcy Solidarności.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'geremek-2',
        title: 'Okrągły Stół – negocjacje i dokumenty',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o Okrągłym Stole – rola Geremka w negocjacjach.',
        year: 1989,
        downloadable: false,
      },
      {
        id: 'geremek-3',
        title: 'Geremek – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Geremek',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji Bronisława Geremka przez aparat bezpieczeństwa.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['solidarnosc', 'okragly-stol', 'michnik', 'kuron', 'internowanie'],
  },

  {
    id: 'ppr',
    title: 'Polska Partia Robotnicza',
    subtitle: 'Komuniści przejmują władzę 1942–1948',
    category: 'polityka',
    tags: ['PPR', 'komunizm', 'Gomułka', 'Bierut', 'ZSRR', '1942', 'zjednoczenie'],
    yearStart: 1942,
    yearEnd: 1948,
    summary: 'Polska Partia Robotnicza (PPR) – komunistyczna partia polityczna działająca w Polsce w latach 1942–1948. Założona z inicjatywy Moskwy, z pomocą Kominternu. Pod przywództwem Władysława Gomułki i Bolesława Bieruta przejęła władzę w Polsce po 1944 roku. W 1948 roku połączyła się z PPS, tworząc PZPR.',
    content: `Polska Partia Robotnicza założona została 5 stycznia 1942 roku w Warszawie przez grupę komunistów przybyłych z ZSRR (tzw. inicjatywna grupa). Jej pierwszym sekretarzem był Marceli Nowotko, po jego zamordowaniu – Paweł Finder, a następnie Władysław Gomułka.

**Geneza i Komintern:**
PPR powstała po rozwiązaniu Komunistycznej Partii Polski przez Komintern w 1938 roku (Stalin uznał KPP za "spenetrowaną przez agentów"). Nowa partia była tworzona według sowieckich wytycznych i z kadrami wyszkolonymi w ZSRR.

**Działalność w konspiracji:**
W czasie okupacji PPR prowadziła działalność konspiracyjną i zbrojną przez Gwardię Ludową (od 1944 roku Armię Ludową). Rywalizowała z Armią Krajową, niekiedy dochodziło do starć zbrojnych między obiema organizacjami.

**Przejęcie władzy 1944–1948:**
Po wkroczeniu Armii Czerwonej PPR stała się główną siłą polityczną przy wsparciu ZSRR. Kontrolowała kluczowe resorty – bezpieczeństwo i wojsko. Systematycznie likwidowała opozycję (PSL, PPS prawica, partie podziemne).

**Zjednoczenie z PPS:**
W grudniu 1948 roku na Kongresie Zjednoczeniowym PPR i PPS (Polska Partia Socjalistyczna) połączyły się, tworząc Polską Zjednoczoną Partię Robotniczą (PZPR). Było to zjednoczenie wymuszone – PPS po czystkach wewnętrznych i represjach nie miała już samodzielnego oblicza.`,
    resources: [
      {
        id: 'ppr-1',
        title: 'PPR i początki komunizmu w Polsce – IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=PPR%20pocz%C4%85tki%20komunizmu',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o PPR, przejęciu władzy i konsolidacji komunizmu w Polsce.',
        year: 1942,
        downloadable: true,
      },
      {
        id: 'ppr-2',
        title: 'Akta PPR – Archiwum Akt Nowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=PPR%20Akt%20Nowych',
        source: 'Archiwum Akt Nowych / Szukaj w Archiwach',
        description: 'Dokumenty Polskiej Partii Robotniczej w zasobach Archiwum Akt Nowych.',
        year: 1942,
        downloadable: false,
      },
      {
        id: 'ppr-3',
        title: 'Kongres Zjednoczeniowy 1948 – prasa i archiwalia',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Kongres%20Zjednoczeniowy%201948',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum prasy i zdjęć z Kongresu Zjednoczeniowego PPR i PPS w grudniu 1948.',
        year: 1948,
        downloadable: true,
      },
    ],
    relatedIds: ['pzpr', 'bierut', 'gomulka', 'manifest-pkwn', 'wybory-1947'],
  },

  {
    id: 'muzyka-rockowa',
    title: 'Muzyka rockowa w PRL',
    subtitle: 'Perfect, Kult, Lady Pank – rock jako głos pokolenia',
    category: 'kultura',
    tags: ['rock', 'Perfect', 'Kult', 'Lady Pank', 'TSA', 'Republika', 'Jarocin', 'muzyka'],
    yearStart: 1970,
    yearEnd: 1989,
    summary: 'Muzyka rockowa w PRL rozwijała się mimo cenzury i niechęci władz, stając się ważnym narzędziem wyrazu pokoleniowego. Festiwal w Jarocinie był największym rockowym zlotusem w bloku wschodnim. Zespoły takie jak Perfect, Kult, Lady Pank, TSA i Republika tworzyły muzykę, w której młodzież odnajdywała prawdę o swojej rzeczywistości.',
    content: `Rock dotarł do Polski w latach 60. – Radio Luksemburg, Radio Wolna Europa i przemycane płyty przyniosły The Beatles, Rolling Stones i Hendrixa. Władze PRL traktowały rock z podejrzliwością jako "muzykę imperializmu", jednak nie zdołały go wyeliminować.

**Pionierzy polskiego rocka:**
Czesław Niemen – jeden z pierwszych polskich twórców łączących rock z poezją ("Dziwny jest ten świat", 1967). Breakout i Grupa ABC – pierwsze prawdziwie rockowe zespoły. Budka Suflera działała od 1974 roku.

**Lata 80. – złota era:**
Dekada stanu wojennego paradoksalnie była złotym wiekiem polskiego rocka. Młodzież szukała prawdy i ekspresji poza oficjalnym przekazem:
- **Perfect** – "Chcemy być sobą", "Autobiografia"
- **Kult** (Kazik Staszewski) – teksty wprost uderzające w system
- **Lady Pank** – elegancki rock z tekstami Andrzeja Mogielnickiego
- **TSA** – ciężki metal, "51"
- **Republika** – new wave, "Biała flaga", "Telefony"
- **Dezerter** – punk, ostry sprzeciw wobec stanu wojennego

**Festiwal w Jarocinie:**
Od 1980 roku corocznie odbywał się Festiwal Muzyków Rockowych w Jarocinie – największy rockowy festiwal w bloku wschodnim. Gromadził dziesiątki tysięcy uczestników. Władze tolerowały go jako "wentyl bezpieczeństwa". Jarocin był przestrzenią wolności – alternatywnych stylów życia, punków, metalowców, hippisów.

**Cenzura i nagrania:**
Teksty piosenek podlegały cenzurze – zanim płyta trafiła do tłoczni, musiała przejść kontrolę. Wiele nagrań było blokowanych lub zmuszano zespoły do zmiany tekstów. Mimo to muzyka rockowa docierała do słuchaczy.`,
    resources: [
      {
        id: 'rock-1',
        title: 'Jarocin – festiwal wolności, NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Jarocin%20festiwal%20wolno%C5%9Bci',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne nagrania z Festiwalu w Jarocinie i dokumenty o polskiej muzyce rockowej.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'rock-2',
        title: 'Muzyka rockowa PRL – archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Muzyka%20rockowa%20Polony',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Okładki płyt, plakaty koncertowe i prasa muzyczna z epoki PRL.',
        year: 1975,
        downloadable: true,
      },
      {
        id: 'rock-3',
        title: 'Rock i cenzura – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Rock%20cenzura',
        source: 'IPN Edukacja',
        description: 'Materiały o muzyce rockowej jako formie oporu kulturowego i stosunku władz do rocka.',
        year: 1980,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'zycie-codzienne', 'propaganda-prl', 'kino-prl'],
  },

  {
    id: 'gorbaczow',
    title: 'Gorbaczow i pierestrojka',
    subtitle: 'Sowiecki reformator, który zmienił świat',
    category: 'polityka',
    tags: ['Gorbaczow', 'pierestrojka', 'głasnost', 'ZSRR', 'reformy', 'upadek komunizmu'],
    yearStart: 1985,
    yearEnd: 1991,
    summary: 'Michaił Gorbaczow (1931–2022) – ostatni przywódca ZSRR, inicjator reform pierestrojki (przebudowy) i głasnosti (jawności). Jego polityka, choć miała uratować socjalizm, uruchomiła procesy, które doprowadziły do upadku ZSRR i wyzwolenia Europy Środkowej spod sowieckiej dominacji, w tym Polski.',
    content: `Michaił Gorbaczow objął władzę w ZSRR w marcu 1985 roku. Od początku wiedział, że system wymaga głębokiej reformy – gospodarka była w stagnacji, technologia pozostawała daleko za Zachodem, a społeczeństwo traciło wiarę w komunizm.

**Pierestrojka (przebudowa):**
Program reform gospodarczych i politycznych ogłoszony w 1986 roku. Zakładał decentralizację, ograniczenie biurokracji, dopuszczenie pewnych form prywatnej inicjatywy. W praktyce reformy ekonomiczne nie przyniosły szybkich efektów, powodując chaos.

**Głasnost (jawność):**
Polityka otwartości informacyjnej – zezwolenie na krytykę przeszłości, ujawnianie zbrodni stalinowskich, swobodniejsza prasa. Głasnost miała legitymizować reformy, w efekcie otworzyła drzwi do kwestionowania całego systemu.

**Znaczenie dla Polski:**
Gorbaczow sygnalizował, że ZSRR nie będzie interweniować militarnie w przypadku reform politycznych w krajach satelickich – co było odejściem od Doktryny Breżniewa. Ten sygnał był kluczowy dla polskiej opozycji i dla władz PRL decydujących się na Okrągły Stół.

**Uznanie zbrodni katyńskiej:**
W 1990 roku Gorbaczow oficjalnie przyznał, że NKWD dokonało mordu katyńskiego – po 50 latach sowieckiego kłamstwa.

**Upadek ZSRR:**
Reformy Gorbaczowa uwolniły odśrodkowe siły, których nie mógł kontrolować – republiki sowieckie zaczęły ogłaszać niepodległość. W grudniu 1991 roku ZSRR przestał istnieć. Gorbaczow otrzymał Pokojową Nagrodę Nobla w 1990 roku.`,
    resources: [
      {
        id: 'gorb-1',
        title: 'Gorbaczow i upadek komunizmu – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Gorbaczow%20upadek%20komunizmu',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o pierestrojce i jej znaczeniu dla Polski i Europy Środkowej.',
        year: 1985,
        downloadable: true,
      },
      {
        id: 'gorb-2',
        title: 'Nagroda Nobla 1990 – Gorbaczow',
        type: 'publikacja',
        url: 'https://www.nobelprize.org/prizes/peace/1990/gorbachev/lecture/',
        source: 'NobelPrize.org',
        description: 'Oficjalne archiwum Pokojowej Nagrody Nobla 1990 przyznanej Michaiłowi Gorbaczowowi.',
        year: 1990,
        downloadable: false,
      },
      {
        id: 'gorb-3',
        title: 'Uznanie zbrodni katyńskiej 1990 – dokumenty',
        type: 'dokument',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=zbrodnia%20katynska',
        source: 'Przystanek Historia / IPN',
        description: 'Dokumentacja sowieckiego uznania zbrodni katyńskiej przez Gorbaczowa w 1990 roku.',
        year: 1990,
        downloadable: false,
      },
    ],
    relatedIds: ['okragly-stol', 'katyn', 'uklad-warszawski', 'pzpr', 'strajki-1988'],
  },

  {
    id: 'wybory-1989',
    title: 'Wybory 4 czerwca 1989',
    subtitle: 'Dzień, który zmienił Polskę i Europę',
    category: 'polityka',
    tags: ['4 czerwca', 'wybory 1989', 'Solidarność', 'Sejm kontraktowy', 'wolne wybory', 'transformacja'],
    yearStart: 1989,
    summary: 'Wybory parlamentarne z 4 czerwca 1989 roku – pierwsze częściowo wolne wybory w PRL od 1947 roku. Solidarność zdobyła wszystkie możliwe do wygrania mandaty w Sejmie i 99 na 100 miejsc w Senacie. Wynik wyborów był początkiem końca komunizmu nie tylko w Polsce, lecz w całej Europie Środkowej.',
    content: `Wybory 4 czerwca 1989 roku były bezpośrednim efektem porozumień Okrągłego Stołu. Na mocy ugody Solidarność mogła wystawić kandydatów do 35% miejsc w Sejmie (161 mandatów) oraz do całego Senatu (100 mandatów).

**Kampania i "drużynowe zdjęcia":**
Solidarność prowadziła kampanię pod hasłem "Polska" i charakterystycznym plakatem z logo związku. Kandydaci Solidarności fotografowali się z Lechem Wałęsą – "drużynowe zdjęcia" stały się symbolem kampanii. Komitet Obywatelski koordynował działania ogólnopolsko.

**Wynik – totalne zaskoczenie:**
Solidarność wygrała wszystkie 161 mandatów w Sejmie i 99 na 100 w Senacie (100. mandat zdobył bezpartyjny kandydat – nie komunista). Komitet Obywatelski rozbił komunistów w cuglach. Wynik był zaskoczeniem nawet dla samej Solidarności.

**Reakcja i formowanie rządu:**
Komuniści, mimo iż zachowali 65% miejsc w Sejmie (ich konstytucyjną "gwarancję"), utracili legitymizację. Negocjacje o formie rządu trwały kilka tygodni. Wojciech Jaruzelski z trudem wybrany został Prezydentem (w głosowaniu Zgromadzenia Narodowego). W sierpniu 1989 roku Tadeusz Mazowiecki objął stanowisko premiera.

**Efekt domina:**
Wynik polskich wyborów zainspirował Węgry, NRD, Czechosłowację, Bułgarię i Rumunię. Do końca 1989 roku komunizm upadł w całej Europie Środkowej. 9 listopada 1989 roku runął Mur Berliński.`,
    resources: [
      {
        id: 'wyl89-1',
        title: 'Wybory 4 czerwca 1989 – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=okragly%20stol',
        source: 'Przystanek Historia / IPN',
        description: 'Portal tematyczny IPN o Okrągłym Stole i wyborach czerwcowych 1989 roku.',
        year: 1989,
        downloadable: false,
      },
      {
        id: 'wyl89-2',
        title: 'Noc wyborcza 4 czerwca – archiwum TVP',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=nTEspBNM8Z0',
        source: 'YouTube / TVP Archiwum',
        description: 'Archiwalne nagrania z nocy wyborczej 4 czerwca 1989 – ogłaszanie wyników.',
        year: 1989,
        downloadable: false,
      },
      {
        id: 'wyl89-3',
        title: 'Ordynacja wyborcza 1989 – ISAP',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19890300164',
        source: 'Internetowy System Aktów Prawnych',
        description: 'Ustawa z 7 kwietnia 1989 r. – Ordynacja wyborcza do Sejmu PRL X kadencji.',
        year: 1989,
        downloadable: true,
      },
    ],
    relatedIds: ['okragly-stol', 'solidarnosc', 'mazowiecki', 'walesa', 'strajki-1988'],
  },

  {
    id: 'wczasy-fwp',
    title: 'Wczasy FWP',
    subtitle: 'Socjalistyczny wypoczynek dla mas pracujących',
    category: 'społeczeństwo',
    tags: ['FWP', 'wczasy', 'urlop', 'wypoczynek', 'Fundusz Wczasów Pracowniczych', 'kolonie'],
    yearStart: 1949,
    yearEnd: 1989,
    summary: 'Fundusz Wczasów Pracowniczych (FWP) – państwowa instytucja zarządzająca siecią ośrodków wczasowych, kolonii i domów wczasowych dla pracowników. Przez dekady FWP organizował urlopy dla milionów Polaków – subsydiowane przez zakłady pracy, tanie i powszechnie dostępne. Był to jeden z realnych benefitów systemu socjalistycznego.',
    content: `Fundusz Wczasów Pracowniczych powstał w 1949 roku jako instytucja organizująca wypoczynek pracowników. Zarządzał siecią ośrodków wczasowych nad morzem, w górach i na Mazurach, domami wczasowymi i koloniami dla dzieci.

**Jak działał system:**
Pracownik przez zakład pracy otrzymywał "skierowanie" na wczasy – z dotacją zakładu. Cena dla wczasowicza była wielokrotnie niższa od kosztów rzeczywistych. Najlepsze ośrodki były przypisane do konkretnych zakładów lub resortów – kolejarze jechali do ośrodków kolejarskich, górnicy do górniczych.

**Kolonie dla dzieci:**
FWP organizował masowe kolonie letnie – kilkaset tysięcy dzieci rocznie wyjeżdżało nad morze, w góry lub do ośrodków śródlądowych. Kolonie były tanie, często finansowane przez zakłady pracy rodziców. Stanowiły ważny element socjalistycznej polityki rodzinnej.

**Miejscowości wczasowe:**
Ustka, Łeba, Kołobrzeg, Mielno, Zakopane, Krynica, Szklarska Poręba, Giżycko, Augustów – to nazwy nierozerwalnie kojarzone z wczasami FWP. Infrastruktura turystyczna rozwijała się dynamicznie w latach 60. i 70.

**Ograniczenia:**
System FWP nie był idealny – przydział zależał od pozycji w zakładzie pracy i powiązań partyjnych. Dostęp do lepszych ośrodków wymagał "znajomości". Prawdziwy luksus – wyjazdy zagraniczne do krajów bloku lub na Zachód – był zarezerwowany dla nomenklatury.

**Nostalgia:**
Wczasy FWP są dziś przedmiotem nostalgii – jako symbol beztroskiego lata, prostego życia nad morzem i wspólnotowych doświadczeń. Zdjęcia z wczasów FWP to ikoniczny obraz PRL-owskiej codzienności.`,
    resources: [
      {
        id: 'fwp-1',
        title: 'Wczasy i turystyka w PRL – kroniki filmowe',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Wczasy%20turystyka%20kroniki',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne kroniki filmowe przedstawiające wczasy FWP i turystykę w Polsce Ludowej.',
        year: 1955,
        downloadable: false,
      },
      {
        id: 'fwp-2',
        title: 'Fotografie z wczasów FWP – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20wczas%C3%B3w%20FWP',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum zdjęć, plakatów i broszur reklamujących wczasy FWP z lat 50.–80.',
        year: 1955,
        downloadable: true,
      },
      {
        id: 'fwp-3',
        title: 'Polityka socjalna PRL – materiały edukacyjne',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Polityka%20socjalna',
        source: 'IPN Edukacja',
        description: 'Materiały o polityce społecznej i systemie świadczeń pracowniczych w PRL.',
        year: 1949,
        downloadable: false,
      },
    ],
    relatedIds: ['zycie-codzienne', 'gospodarka-prl', 'nomenklatura', 'gierek', 'sport-prl'],
  },

  {
    id: 'ucieczki-z-prl',
    title: 'Ucieczki z PRL',
    subtitle: 'Przez żelazną kurtynę za wolnością',
    category: 'represje',
    tags: ['ucieczka', 'paszport', 'granica', 'emigracja', 'żelazna kurtyna', 'WOP', 'azyl'],
    yearStart: 1945,
    yearEnd: 1989,
    summary: 'Przez całe istnienie PRL tysiące obywateli podejmowało ryzykowne próby ucieczki za granicę. Przekraczanie granicy bez zgody władz było przestępstwem zagrożonym więzieniem lub śmiercią. Żelazna kurtyna była fizyczną i prawną barierą oddzielającą Polaków od wolnego świata.',
    content: `W PRL wyjazd za granicę wymagał zgody władz i posiadania paszportu. Paszport był własnością państwa – przechowywany w komendzie milicji i wydawany tylko na konkretny wyjazd. Próba wyjazdu bez zgody lub "nielegalne" pozostanie za granicą było przestępstwem.

**Paszport jako narzędzie kontroli:**
Władze celowo utrudniały wydawanie paszportów – szczególnie działaczom opozycyjnym, którym je konfiskowano lub odmawiano wydania. "Zatrzymanie paszportu" było karą administracyjną stosowaną wobec niepokornych. Bez paszportu obywatel był skazany na pobyt w PRL.

**Sposoby ucieczki:**
- Przekroczenie granicy przez góry (Tatry, Sudety) – nielegalne przekroczenie granicy przez turystów i alpinistów
- Ucieczka przez morze – próby przedostania się łódką przez Bałtyk, często kończące się śmiercią
- "Zostanie za granicą" podczas legalnego wyjazdu – najprostsza metoda po 1970 roku, gdy wzrosła liczba wyjazdów turystycznych
- Dezercja żołnierzy lub ucieczki personelu dyplomatycznego

**Wojska Ochrony Pogranicza (WOP):**
WOP pilnowało granicy i miało prawo strzelać do uciekinierów. Szczególnie niebezpieczna była granica z NRD (podwójnie strzeżona), Czechosłowacją i morska.

**Skala zjawiska:**
Szacuje się, że od 1945 do 1989 roku kilkaset tysięcy Polaków wyemigrowało nie wracając z legalnych wyjazdów lub uciekając nielegalnie. Masowe fale emigracji wiązały się ze stanem wojennym (1981–1984) – ok. 200 000 osób.

**"Solidarnościowa emigracja":**
Po 13 grudnia 1981 roku wielu działaczy Solidarności, którzy zdołali wyjechać przed ogłoszeniem stanu wojennego, pozostało na Zachodzie. Tworzyli Biuro Koordynacyjne i prowadzili działalność na rzecz podziemnego związku.`,
    resources: [
      {
        id: 'uciecz-1',
        title: 'Emigracja z PRL – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Emigracja',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne o emigracji politycznej i ekonomicznej z PRL.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'uciecz-2',
        title: 'WOP i ochrona granicy – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=WOP%20ochrona%20granicy',
        source: 'IPN Inwentarz',
        description: 'Dokumenty Wojsk Ochrony Pogranicza i spraw granicznych w zasobach IPN.',
        year: 1952,
        downloadable: false,
      },
      {
        id: 'uciecz-3',
        title: 'Żelazna kurtyna – archiwum zdjęć',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=%C5%BBelazna%20kurtyna%20zdj%C4%99%C4%87',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum fotografii dokumentujących granicę PRL i los emigrantów politycznych.',
        year: 1960,
        downloadable: true,
      },
    ],
    relatedIds: ['represje-polityczne', 'emigracja-1968', 'kultura-paryz', 'milosz', 'stan-wojenny'],
  },

  {
    id: 'lem',
    title: 'Stanisław Lem',
    subtitle: 'Najczęściej tłumaczony polski pisarz',
    category: 'osoby',
    tags: ['Lem', 'science fiction', 'Solaris', 'Cyberiada', 'futurologia', 'Kraków'],
    yearStart: 1951,
    yearEnd: 2006,
    summary: 'Stanisław Lem (1921–2006) – najwybitniejszy polski pisarz science fiction, jeden z najczęściej tłumaczonych polskich autorów w historii. Jego dzieła – "Solaris", "Cyberiada", "Kongres futurologiczny" – łączą filozofię, satyrę społeczną i wizjonerskie spekulacje technologiczne. W PRL utrzymywał złożoną relację z systemem: nie był dysydentem, lecz nie był też apologetą.',
    content: `Stanisław Lem urodził się w 1921 roku we Lwowie. Podczas II wojny ukrywał się jako Polak (był żydowskiego pochodzenia). Po wojnie osiedlił się w Krakowie, gdzie spędził większość życia.

**Twórczość:**
Lem debiutował w 1951 roku. Pisał z niezwykłą produktywnością – powieści, opowiadania, eseje filozoficzne, recenzje fikcyjnych książek. Najważniejsze dzieła:
- "Solaris" (1961) – filozoficzna powieść o kontakcie z obcą inteligencją, wielokrotnie filmowana
- "Cyberiada" (1965) – satyryczne opowiadania o robotach konstruktorach
- "Dzienniki gwiazdowe" z Ijjonem Tichym
- "Kongres futurologiczny" (1971) – dystopia o manipulacji rzeczywistością
- "Bajki robotów" i "Opowieści o pilocie Pirxie"

**Lem a PRL:**
Lem nie był dysydentem. Nie angażował się otwarcie w opozycję, publikował w oficjalnym obiegu. Jednocześnie jego satyryczne i filozoficzne dzieła zawierały krytykę totalitaryzmu, biurokracji i zbiorowego myślenia – odczytywane przez czytelników z łatwością jako aluzje do PRL-owskiej rzeczywistości.

**Światowy sukces:**
Dzieła Lema przetłumaczono na ponad 40 języków. Jego nakłady przekroczyły 45 milionów egzemplarzy. Philip K. Dick – rówieśnik i rywal w science fiction – oskarżał go o bycie "komunistycznym komitetem" ze względu na ogromną produktywność i popularność.

**Emigracja wewnętrzna i wyjazd:**
W latach 80. Lem mieszkał przez kilka lat w Wiedniu i Berlinie Zachodnim. Po 1990 roku wrócił do Krakowa. Do końca życia pisał eseje futurologiczne i komentował rozwój technologii.`,
    resources: [
      {
        id: 'lem-1',
        title: 'Stanisław Lem – dzieła w Wolnych Lekturach',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/lem-stanislaw/',
        source: 'Wolne Lektury',
        description: 'Wybrane dzieła Stanisława Lema dostępne w cyfrowej bibliotece Wolne Lektury.',
        year: 1961,
        downloadable: true,
      },
      {
        id: 'lem-2',
        title: 'Solaris – pierwsze wydanie i archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Solaris%20pierwsze%20wydanie',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Pierwsze wydania dzieł Lema i archiwalia prasowe z epoki PRL.',
        year: 1961,
        downloadable: true,
      },
      {
        id: 'lem-3',
        title: 'Literatura polska w PRL – materiały edukacyjne',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Literatura',
        source: 'IPN Edukacja',
        description: 'Materiały o literaturze polskiej okresu PRL, miejscu pisarzy i ich relacji z systemem.',
        year: 1955,
        downloadable: false,
      },
    ],
    relatedIds: ['kultura-prl', 'cenzura-prl', 'milosz', 'herbert', 'kapuscinski'],
  },

  {
    id: 'wajda',
    title: 'Andrzej Wajda',
    subtitle: 'Reżyser sumienia narodu',
    category: 'osoby',
    tags: ['Wajda', 'film', 'Kanał', 'Człowiek z żelaza', 'Katyń', 'Oscar', 'reżyser'],
    yearStart: 1955,
    yearEnd: 2016,
    summary: 'Andrzej Wajda (1926–2016) – największy polski reżyser filmowy, laureat Oscara za całokształt twórczości (2000). Twórca Polskiej Szkoły Filmowej, autor filmów rozliczających się z historią i moralnością zbiorową: "Kanał", "Popiół i diament", "Człowiek z marmuru", "Człowiek z żelaza", "Katyń". Przez całe życie zaangażowany w sprawy publiczne.',
    content: `Andrzej Wajda urodził się w 1926 roku w Suwałkach. Jego ojciec – oficer Wojska Polskiego – zginął w Katyniu. Ukończył Łódzką Szkołę Filmową. Debiutował w 1951 roku.

**Polska Szkoła Filmowa:**
Wajda był współtwórcą nurtu rozliczającego się z doświadczeniem II wojny przez pryzmat moralności, nie propagandy:
- "Kanał" (1957) – dramat o Powstaniu Warszawskim, Nagroda Specjalna Jury w Cannes
- "Popiół i diament" (1958) – portret pokolenia AK po wojnie, arcydzieło z Cybulskim

**Kino polityczne lat 70.:**
- "Człowiek z marmuru" (1977) – film o sfabrykowaniu bohatera socjalizmu, długo blokowany przez cenzurę
- "Bez znieczulenia" (1978) – o konformizmie intelektualistów

**Solidarność:**
Wajda zaangażował się w ruch Solidarności. "Człowiek z żelaza" (1981) – nakręcony podczas strajku sierpniowego i na jego fali – zdobył Złotą Palmę w Cannes. Wajda był członkiem NSZZ Solidarność.

**"Katyń" (2007):**
Osobisty film o zbrodni, w której zginął jego ojciec. Nominowany do Oscara dla najlepszego filmu nieanglojęzycznego. Dokończenie dzieła życia – rozliczenie z kłamstwem katyńskim.

**Nagrody i spuścizna:**
Oscar honorowy za całokształt twórczości (2000). Cztery razy nominowany do Oscara. Senator RP w latach 1989–1991. Do śmierci w 2016 roku pozostawał aktywnym reżyserem i komentował życie publiczne.`,
    resources: [
      {
        id: 'wajda-1',
        title: 'Człowiek z żelaza – film Wajdy 1981',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=Cz%C5%82owiek+z+%C5%BCelaza+Wajda+1981',
        source: 'YouTube',
        description: 'Zwiastun nagrodzonego Złotą Palmą w Cannes 1981 roku filmu Andrzeja Wajdy.',
        year: 1981,
        downloadable: false,
      },
      {
        id: 'wajda-2',
        title: 'Katyń – film Wajdy 2007',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=Katy%C5%84+film+Wajdy+2007',
        source: 'YouTube / Studio Filmowe TOR',
        description: 'Film Andrzeja Wajdy o zbrodni katyńskiej – osobiste rozliczenie z historią.',
        year: 2007,
        downloadable: false,
      },
      {
        id: 'wajda-3',
        title: 'Polska Szkoła Filmowa – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Wajda',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwum filmów Andrzeja Wajdy i Polskiej Szkoły Filmowej w NINATEKA.',
        year: 1957,
        downloadable: false,
      },
    ],
    relatedIds: ['kino-prl', 'katyn', 'solidarnosc', 'kultura-prl', 'cenzura-prl'],
  },

  {
    id: 'jazz-prl',
    title: 'Jazz w Polsce',
    subtitle: 'Komeda, Namysłowski, Stańko – muzyka wolności',
    category: 'kultura',
    tags: ['jazz', 'Komeda', 'Namysłowski', 'Stańko', 'Sopot', 'muzyka', 'wolność'],
    yearStart: 1956,
    yearEnd: 1989,
    summary: 'Jazz w PRL – fenomen kulturowy, który po Październiku 1956 stał się symbolem odwilży i oknem na Zachód. Polscy jazzmani osiągnęli światowy poziom. Krzysztof Komeda stworzył muzykę do filmów Romana Polańskiego. Jazz był tolerowany przez władze jako "mniej groźny" od rocka, choć początkowo też traktowany z podejrzliwością.',
    content: `Jazz dotarł do Polski jeszcze przed wojną, lecz w czasach stalinowskich (1948–1955) był zakazany jako "muzyka imperialistyczna". Po Październiku 1956 roku odwilż polityczna otworzyła Polskę na zachodnie wpływy kulturowe – jazz wrócił legalnie.

**Złota era polskiego jazzu:**
Lata 60. i 70. to czas, gdy polscy jazzmani zdobyli światowe uznanie:

**Krzysztof Komeda (1931–1969):**
Pianista i kompozytor, jeden z twórców europejskiego jazzu. Stworzył muzykę do filmów Romana Polańskiego: "Nóż w wodzie" (1962), "Rosemary's Baby" (1968), "Dziecko Rosemary". Jego "Kołysanka" z "Rosemary's Baby" to jeden z najbardziej rozpoznawalnych tematów filmowych. Tragicznie zginął w wypadku w Los Angeles w 1969 roku.

**Zbigniew Namysłowski:**
Saksofonista altowy, jeden z filarów polskiego jazzu. Nagrywał dla zachodnich wytwórni, koncertował w Europie i USA.

**Tomasz Stańko:**
Trębacz o światowej sławie, reprezentant polskiego jazzu od lat 60. do XXI wieku. Nagrywał dla ECM Records.

**Jazz Jamboree:**
Od 1958 roku w Warszawie odbywał się coroczny Jazz Jamboree – jeden z najstarszych festiwali jazzowych w Europie. Przyciągał największe gwiazdy światowego jazzu i stał się symbolem polskiej otwartości kulturowej.

**Jazz a system:**
Władze PRL tolerowały jazz jako mniej polityczny od rocka. Jazz docierał do wąskiego, inteligenckiego odbiorcy – nie masowego, co czyniło go "bezpieczniejszym". Jednocześnie festiwale jazzowe były okazją do kontaktów z Zachodem i wymiany artystycznej.`,
    resources: [
      {
        id: 'jazz-1',
        title: 'Jazz Jamboree – archiwum festiwalu',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Jazz+Jamboree',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne nagrania z Jazz Jamboree i polskich nagrań jazzowych w NINATEKA.',
        year: 1958,
        downloadable: false,
      },
      {
        id: 'jazz-2',
        title: 'Krzysztof Komeda – kołysanka z Rosemary\'s Baby',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Krzysztof+Komeda+Rosemary+Baby+lullaby',
        source: 'YouTube',
        description: 'Słynna kołysanka Krzysztofa Komedy z filmu Polańskiego – jedno z jego najważniejszych dzieł.',
        year: 1968,
        downloadable: false,
      },
      {
        id: 'jazz-3',
        title: 'Jazz w Polsce – archiwum Polony',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Jazz%20Polsce%20Polony',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwum okładek płyt, plakatów i prasy muzycznej dokumentujących historię jazzu w PRL.',
        year: 1958,
        downloadable: true,
      },
    ],
    relatedIds: ['kultura-prl', 'muzyka-rockowa', 'kino-prl', 'pazdziernik-1956', 'cenzura-prl'],
  },

  {
    id: 'wiezienia-polityczne',
    title: 'Więzienia polityczne PRL',
    subtitle: 'Rawicz, Wronki, Mokotów – za kratami bez wyroku',
    category: 'represje',
    tags: ['więzienia', 'Rawicz', 'Wronki', 'Mokotów', 'więźniowie polityczni', 'terror'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Przez cały okres PRL system więziennictwa był narzędziem politycznych represji. Więźniowie polityczni – żołnierze podziemia, działacze opozycji, osoby aresztowane za poglądy – trafiali do zakładów karnych, gdzie warunki i metody stosowane wobec nich były celowo upokarzające i okrutne.',
    content: `Więziennictwo w PRL służyło nie tylko izolacji przestępców, lecz przede wszystkim eliminacji i łamaniu przeciwników politycznych systemu. W szczytowym okresie stalinowskim (1944–1956) przez więzienia i obozy przeszły setki tysięcy Polaków.

**Najważniejsze więzienia polityczne:**

*Więzienie Mokotów (Warszawa):*
Główne więzienie śledcze UB w Warszawie, przy ul. Rakowieckiej. Tu przetrzymywano i torturowano aresztowanych przez UB. Tu stracono gen. Augusta Emila Fieldorfa "Nila", rotmistrza Witolda Pileckiego i wielu innych bohaterów AK. Dziś część budynku to Muzeum Żołnierzy Wyklętych.

*Więzienie Rawicz:*
Największy zakład karny – tu odbywali kary długoletni więźniowie polityczni: działacze PSL, oficerowie AK, a po 1981 roku działacze Solidarności.

*Więzienie Wronki:*
Ciężkie więzienie dla skazanych na długie wyroki. Przebywali tu m.in. Leszek Moczulski (KPN) i inni przywódcy opozycji.

**Metody:**
- Tortury podczas śledztwa (bicie, pozycje stresowe, deprywacja snu)
- Długotrwała izolacja i cela "karceru"
- Presja psychologiczna – szantaż rodzinami
- Wymuszanie zeznań i donosów na współpracowników

**Więźniowie polityczni po 1956:**
Po Październiku 1956 masowy terror zelżał, lecz więzienia polityczne nie zniknęły. W stanie wojennym tysiące działaczy trafiało do aresztów śledczych, a przywódcy opozycji byli skazywani na kilkuletnie wyroki.`,
    resources: [
      {
        id: 'wiezienia-1',
        title: 'Więzienie na Rakowieckiej – Muzeum Żołnierzy Wyklętych',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Rakowiecka%20wi%C4%99zienie%20%C5%BCo%C5%82nierze%20wykl%C4%99ci',
        source: 'Portal Żołnierze Wyklęci',
        description: 'Informacje o więzieniu mokotowskim i jego roli w represjach komunistycznych.',
        year: 1944,
        downloadable: false,
      },
      {
        id: 'wiezienia-2',
        title: 'Akta więźniów politycznych – IPN Inwentarz',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=wi%C4%99%C5%BAni%C3%B3w%20politycznych%20Inwentarz',
        source: 'IPN Inwentarz',
        description: 'Dokumenty więziennictwa i akta więźniów politycznych w zasobach archiwalnych IPN.',
        year: 1944,
        downloadable: false,
      },
      {
        id: 'wiezienia-3',
        title: 'Terror stalinowski – materiały edukacyjne IPN',
        type: 'dokument',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Terror%20stalinowski',
        source: 'IPN Edukacja',
        description: 'Materiały o systemie represji i więziennictwa politycznego w PRL.',
        year: 1945,
        downloadable: true,
      },
    ],
    relatedIds: ['represje-polityczne', 'ub', 'zolnierze-wykletci', 'internowanie', 'katyn'],
  },

  {
    id: 'tvp-prl',
    title: 'Telewizja Polska w PRL',
    subtitle: 'Od narzędzia propagandy do okna na świat',
    category: 'kultura',
    tags: ['TVP', 'Dziennik Telewizyjny', 'telewizja', 'propaganda', 'Teatr Telewizji', 'Teleranek'],
    yearStart: 1952,
    yearEnd: 1989,
    summary: 'Telewizja Polska rozpoczęła regularne nadawanie w 1952 roku. Przez dekady była głównym narzędziem propagandy partyjnej – Dziennik Telewizyjny manipulował informacją, a program był ściśle kontrolowany. Jednocześnie TVP tworzyła wybitne spektakle Teatru Telewizji i seriale, które na stałe weszły do kultury.',
    content: `Telewizja Polska rozpoczęła regularne emisje 25 października 1952 roku. Początkowo nadawała kilka godzin dziennie, docierając do nielicznych posiadaczy odbiorników. W latach 60. telewizja upowszechniła się – posiadanie telewizora stało się aspiracją każdej rodziny.

**Dziennik Telewizyjny:**
"Dziennik" (od 1958 roku) był centralnym punktem programu i głównym narzędziem propagandy. Relacjonował sukcesy partii, przemilczał kryzysy i fałszował obraz rzeczywistości. W stanie wojennym spikerzy pojawiali się w mundurach wojskowych. "Dziennik" był przedmiotem powszechnych żartów – społeczeństwo nauczyło się czytać go "na odwrót".

**Teatr Telewizji:**
Paradoksalnie TVP tworzyła wybitną kulturę. Teatr Telewizji produkował spektakle na najwyższym poziomie artystycznym – z udziałem czołowych reżyserów i aktorów. Wiele z nich to arcydzieła polskiego teatru.

**Kultowe seriale i programy:**
- "Stawka większa niż życie" (1967–1968) – Hans Kloss, ulubiony serial PRL
- "Czterej pancerni i pies" (1966–1970) – propagandowy, ale ogromnie popularny
- "Polskie drogi" (1977) – seria o II wojnie
- "Teleranek" i programy dla dzieci – "Dobranocka" z Miś Uszatek
- Kabaret Olgi Lipińskiej – humor z cenzurą

**Drugi program i kolor:**
Program 2 TVP uruchomiono w 1970 roku. Telewizja kolorowa pojawiła się w 1971 roku – Gierek "dał" Polakom kolorowy telewizor jako symbol modernizacji.

**Bojkot telewizji:**
W czasie stanu wojennego wiele rodzin bojkotowało telewizję o godzinie Dziennika – wystawiając w oknie świecącą świeczkę jako znak solidarności.`,
    resources: [
      {
        id: 'tvp-1',
        title: 'Archiwum TVP – kroniki i programy historyczne',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Dziennik+Telewizyjny+PRL',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwum nagrań TVP z epoki PRL – Dziennik Telewizyjny, Teatr Telewizji, seriale.',
        year: 1952,
        downloadable: false,
      },
      {
        id: 'tvp-2',
        title: 'Propaganda medialna PRL – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Propaganda%20medialna',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o roli telewizji jako narzędzia propagandy komunistycznej.',
        year: 1958,
        downloadable: true,
      },
      {
        id: 'tvp-3',
        title: 'Dziennik Telewizyjny stanu wojennego',
        type: 'nagranie',
        url: 'https://www.youtube.com/watch?v=OkmJ-PZMCj8',
        source: 'YouTube / TVP Archiwum',
        description: 'Archiwalne nagranie Dziennika Telewizyjnego z okresu stanu wojennego.',
        year: 1981,
        downloadable: false,
      },
    ],
    relatedIds: ['propaganda-prl', 'kultura-prl', 'cenzura-prl', 'kino-prl', 'stan-wojenny'],
  },

  {
    id: 'wies-prl',
    title: 'Wieś i chłopi w PRL',
    subtitle: 'Od reformy rolnej do indywidualnych gospodarstw',
    category: 'społeczeństwo',
    tags: ['wieś', 'chłopi', 'rolnictwo', 'GS', 'kółka rolnicze', 'sołtys', 'PGR'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Wieś polska w PRL przeszła głęboką transformację – od reformy rolnej 1944, przez próbę kolektywizacji, po trwanie indywidualnych gospodarstw. Polscy chłopi byli jedyną grupą w bloku wschodnim, która skutecznie oparła się pełnej kolektywizacji. Życie wiejskie łączyło tradycję z nową rzeczywistością socjalistyczną.',
    content: `Polska wieś po 1944 roku znalazła się w centrum politycznych zmagań. Reforma rolna dała chłopom ziemię – ale komuniści chcieli tę ziemię zabrać przez kolektywizację. Chłopi stawiali opór.

**Reforma rolna 1944 i jej skutki:**
Dekret PKWN o reformie rolnej rozparcelował majątki ziemskie – chłopi otrzymali małe działki. Reforma była popularna, lecz rozbiła sprawne gospodarstwa rolne i stworzyła mozaikę małych, niewydolnych działek.

**Kolektywizacja i jej klęska:**
W latach 1949–1956 władze forsowały tworzenie spółdzielni produkcyjnych (kołchozów). Chłopi stawiali bierny i czynny opór – wstępowali do spółdzielni pod przymusem, ale sabotowali pracę. Po Październiku 1956 roku kolektywizację faktycznie porzucono – spółdzielnie masowo rozwiązywano. To unikalne zjawisko w bloku wschodnim.

**PGR – Państwowe Gospodarstwa Rolne:**
Na byłych majątkach ziemskich i terenach zurbanizowanych tworzono PGR-y – wielkie państwowe farmy. Pracownicy PGR byli zatrudnionymi przez państwo robotnikami rolnymi, nie właścicielami. PGR-y były mało efektywne, lecz dawały zatrudnienie i mieszkanie tysiącom rodzin. Po 1989 roku ich likwidacja stworzyła dramatyczną biedę na wsi.

**Życie codzienne na wsi:**
Elektryfikacja wsi postępowała – w 1945 roku prąd miało 10% wsi, w 1980 roku prawie wszystkie. GS (Gminne Spółdzielnie) "Samopomoc Chłopska" była lokalnym monopolistą w handlu i skupie. Kółka rolnicze dostarczały maszyny rolnicze.

**Migracja do miast:**
Polska wieś intensywnie "wylewała się" do miast – miliony chłopów stały się robotnikami w ciągu jednego pokolenia. Zjawisko to zmieniło strukturę społeczną Polski.`,
    resources: [
      {
        id: 'wies-1',
        title: 'Kolektywizacja i wieś polska – IPN',
        type: 'publikacja',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Kolektywizacja%20wie%C5%9B',
        source: 'IPN',
        description: 'Artykuł IPN o kolektywizacji rolnictwa i oporze chłopów wobec polityki komunistycznej.',
        year: 1948,
        downloadable: false,
      },
      {
        id: 'wies-2',
        title: 'Obowiązkowe dostawy – terror ekonomiczny na wsi',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=wies%20i%20rolnictwo%20prl',
        source: 'Przystanek Historia / IPN',
        description: 'Artykuł o systemie obowiązkowych dostaw jako narzędziu nacisku na chłopów.',
        year: 1950,
        downloadable: false,
      },
      {
        id: 'wies-3',
        title: 'Kroniki wiejskie PRL – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20wiejskie',
        source: 'NINATEKA / Filmoteka Narodowa',
        description: 'Archiwalne kroniki filmowe dokumentujące życie wsi polskiej w różnych dekadach PRL.',
        year: 1950,
        downloadable: false,
      },
    ],
    relatedIds: ['kolektywizacja', 'reforma-rolna', 'gospodarka-prl', 'plan-szescioletni', 'akcja-wisla'],
  },

  {
    id: 'solidarnosc-rolnikow',
    title: 'Solidarność Rolników Indywidualnych',
    subtitle: 'Chłopski bunt i walka o rejestrację 1980–1981',
    category: 'opozycja',
    tags: ['NSZZ RI', 'Solidarność Wiejska', 'chłopi', 'rolnicy', 'Bydgoszcz', 'strajk'],
    yearStart: 1980,
    yearEnd: 1981,
    summary: 'NSZZ Rolników Indywidualnych "Solidarność" – związek zawodowy rolników powstały w 1980 roku jako część szerszego ruchu solidarnościowego. Walka o jego rejestrację doprowadziła do poważnego kryzysu politycznego w marcu 1981 roku (pobicie działaczy w Bydgoszczy) i ogólnopolskiego strajku ostrzegawczego.',
    content: `Po Sierpniu 1980 roku fala strajkowa i organizacyjna objęła nie tylko zakłady przemysłowe, lecz także polską wieś. Rolnicy indywidualni – którzy przez całe lata PRL walczyli z przymusową kolektywizacją i wyzyskiem przez GS – zaczęli organizować własne struktury.

**Powstanie NSZZ RI:**
Jesienią 1980 roku w całej Polsce powstawały komitety organizacyjne rolniczych związków zawodowych. W grudniu 1980 roku ukonstytuował się NSZZ Rolników Indywidualnych "Solidarność". Władze odmawiały jego rejestracji, twierdząc, że rolnicy indywidualni jako "prywatni właściciele" nie mogą tworzyć związku zawodowego.

**Kryzys bydgoski (marzec 1981):**
19 marca 1981 roku w Bydgoszczy delegaci rolników uczestniczyli w posiedzeniu Rady Narodowej. Milicja brutalnie wyprowadziła ich z sali obrad i pobiła – w tym Jana Rulewskiego, przewodniczącego Regionu Bydgoskiego Solidarności. Incydent wywołał ogromne oburzenie.

**Strajk ostrzegawczy:**
Na 27 marca 1981 roku Solidarność ogłosiła 4-godzinny strajk ostrzegawczy – największy strajk w historii powojennej Polski. Uczestniczyło w nim ok. 12–14 milionów pracowników. Władze cofnęły się, obiecując wyjaśnienia.

**Rejestracja:**
W maju 1981 roku sąd zarejestrował NSZZ RI "Solidarność". Był to jeden z niewielu przypadków, gdy władze PRL ustąpiły pod presją opozycji po bezpośredniej konfrontacji.

**Stan wojenny:**
Po 13 grudnia 1981 roku NSZZ RI zdelegalizowano wraz z innymi strukturami Solidarności. Reaktywowano go po 1989 roku.`,
    resources: [
      {
        id: 'sol-rol-1',
        title: 'Solidarność Rolnicza – archiwum ECS',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum ECS – dokumenty dotyczące NSZZ RI Solidarność i kryzysu bydgoskiego.',
        year: 1980,
        downloadable: false,
      },
      {
        id: 'sol-rol-2',
        title: 'Kryzys bydgoski 1981 – materiały IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Kryzys%20bydgoski%201981',
        source: 'IPN Edukacja',
        description: 'Materiały edukacyjne IPN o kryzysie bydgoskim i strajku ostrzegawczym marca 1981.',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'sol-rol-3',
        title: 'NSZZ RI – akta IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=NSZZ',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji NSZZ Rolników Indywidualnych.',
        year: 1980,
        downloadable: false,
      },
    ],
    relatedIds: ['solidarnosc', 'wies-prl', 'kolektywizacja', 'stan-wojenny', 'sierpien-1980'],
  },

  {
    id: 'pgwn',
    title: 'Sowieci w Polsce – Północna Grupa Wojsk',
    subtitle: 'Sowiecka obecność militarna 1945–1993',
    category: 'wojsko',
    tags: ['PGWN', 'Sowieci', 'wojsko', 'bazy', 'obecność', 'Legnica', 'suwerenność'],
    yearStart: 1945,
    yearEnd: 1993,
    summary: 'Północna Grupa Wojsk (PGWN) – stacjonujące w Polsce oddziały Armii Sowieckiej, obecne od 1945 do 1993 roku. Liczyły w szczytowym momencie ok. 60 000 żołnierzy. Ich obecność była namacalnym symbolem braku suwerenności PRL i radzieckiej dominacji nad krajem.',
    content: `Po zakończeniu II wojny światowej wojska sowieckie pozostały na terytorium Polski. Formalnie uzasadniano to koniecznością zabezpieczenia szlaków komunikacyjnych do Niemiec i "gwarancją bezpieczeństwa" bloku wschodniego. W rzeczywistości była to militarna gwarancja sowieckiej dominacji.

**Struktura i bazy:**
Główna kwatera PGWN mieściła się w Legnicy (dawny Liegnitz). Żołnierze sowieccy stacjonowali w kilkudziesięciu garnizonach na terenie całej Polski – m.in. w Bornem Sulinowie, Szprotawie, Świdnicy, Kluczewie. Bazy były eksterytorialne – polskie organy władzy nie miały do nich wstępu.

**Status prawny:**
Podstawą prawną była umowa polsko-sowiecka z 1956 roku. Żołnierze sowieccy nie podlegali polskiemu sądownictwu – za przestępstwa (kradzieże, napaści, wypadki drogowe) odpowiadali przed sądami sowieckimi, co prowadziło do faktycznej bezkarności.

**Wpływ na suwerenność:**
Obecność PGWN była stałym przypomnieniem ograniczonej suwerenności PRL. W 1956 i 1980–1981 roku możliwość interwencji sowieckich wojsk była realna – wiedziały o tym obie strony. Gorbaczow i doktryna nieinterwencji zmieniły tę sytuację.

**Wycofanie:**
Negocjacje o wycofaniu wojsk sowieckich rozpoczęły się w 1990 roku. Ostatni żołnierz sowiecki opuścił Polskę 17 września 1993 roku – data ta była symboliczna, bo 17 września 1939 roku ZSRR zaatakował Polskę.`,
    resources: [
      {
        id: 'pgwn-1',
        title: 'Sowieci w Polsce – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Sowieci%20Polsce',
        source: 'IPN Edukacja',
        description: 'Materiały o Północnej Grupie Wojsk i sowieckiej obecności militarnej w Polsce.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'pgwn-2',
        title: 'Dokumenty PGWN – Szukaj w Archiwach',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=PGWN%20Archiwach',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące obecności wojsk sowieckich i negocjacji o ich wycofaniu.',
        year: 1956,
        downloadable: false,
      },
      {
        id: 'pgwn-3',
        title: 'Legnica – sowiecka stolica w Polsce',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Legnica%20sowiecka%20stolica',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Fotografie i dokumenty dotyczące baz sowieckich w Polsce.',
        year: 1945,
        downloadable: true,
      },
    ],
    relatedIds: ['uklad-warszawski', 'lwp', 'manifest-pkwn', 'stan-wojenny', 'gorbaczow'],
  },

  {
    id: 'cyrankiewicz',
    title: 'Józef Cyrankiewicz',
    subtitle: 'Wieloletni premier PRL – socjalista na służbie komunizmu (1911–1989)',
    category: 'osoby',
    tags: ['Cyrankiewicz', 'premier', 'PPS', 'PZPR', 'polityk', 'Poznań 1956', 'rząd PRL'],
    yearStart: 1911,
    yearEnd: 1989,
    summary: 'Józef Cyrankiewicz był najdłużej urzędującym premierem PRL (1947–1952 i 1954–1970). Były działacz PPS, po zjednoczeniu z PPR stał się jedną z twarzy systemu komunistycznego w Polsce.',
    content: `## Socjalista i więzień obozów

Józef Cyrankiewicz (ur. 23 IV 1911 w Tarnowie) był przed wojną działaczem Polskiej Partii Socjalistycznej. Uczestnik kampanii wrześniowej 1939 r., trafił do obozu koncentracyjnego Auschwitz (1942) i Mauthausen. Jego obozowe doświadczenie było dla władzy komunistycznej użytecznym kapitałem symbolicznym.

## Droga do władzy

Po 1945 r. Cyrankiewicz stanął na czele PPS i podjął – w opinii wielu towarzyszy – zdradę: zamiast bronić socjalistycznej tożsamości partii, kierował ją ku zjednoczeniu z PPR. W grudniu 1948 r. PPS połączyła się z PPR, tworząc PZPR. Cyrankiewicz jako nagrodę za "zasługi" otrzymał urząd premiera.

## Dwukrotny premier

Cyrankiewicz był premierem w latach 1947–1952 i ponownie 1954–1970 – łącznie przez ponad 20 lat. W tym czasie firmował swoim nazwiskiem politykę stalinowską, kolektywizację, procesy pokazowe i codzienne bezprawie. Słynął z zimnej, cynicznej retoryki. Po masakrze robotników w Poznaniu w czerwcu 1956 r. powiedział: "Każdy prowokator lub szaleniec, który odważy się podnieść rękę przeciw władzy ludowej, niech będzie pewny, że mu tę rękę władza ludowa odrąbie."

## Upadek i zapomnienie

Grudzień 1970 r. – masakra na Wybrzeżu – przyspieszył jego odejście z centrum władzy. Cyrankiewicz objął stanowisko przewodniczącego Rady Państwa (1970–1972), a następnie odszedł w cień. Gierek wypchnął stare twarze systemu. Cyrankiewicz dożył 1989 r., widząc koniec systemu, który przez dekady współtworzył.`,
    resources: [
      {
        id: 'cyr-1',
        title: 'Przemówienia Cyrankiewicza – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Przem%C3%B3wienia%20Cyrankiewicza',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne teksty przemówień i artykułów Cyrankiewicza z lat 1945–1970.',
        year: 1956,
        downloadable: true,
      },
      {
        id: 'cyr-2',
        title: 'Akta rządu PRL – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=rz%C4%85du',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Wyszukiwarka archiwalna z dokumentami dotyczącymi działalności rządów Cyrankiewicza.',
        year: 1947,
      },
      {
        id: 'cyr-3',
        title: 'Kroniki filmowe z rządów Cyrankiewicza',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20rz%C4%85d%C3%B3w',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne kroniki filmowe dokumentujące oficjalną działalność premiera Cyrankiewicza.',
        year: 1950,
      },
    ],
    relatedIds: ['bierut', 'gomulka', 'gierek', 'pzpr', 'plan-szescioletni'],
  },

  {
    id: 'mieszkanie-prl',
    title: 'Mieszkalnictwo w PRL',
    subtitle: 'Bloki z wielkiej płyty i wieczne kolejki po przydział M',
    category: 'społeczeństwo',
    tags: ['mieszkanie', 'bloki', 'spółdzielnia', 'budownictwo', 'wielka płyta', 'M3', 'kolejka', 'osiedle'],
    yearStart: 1945,
    yearEnd: 1989,
    summary: 'Masowe budownictwo mieszkaniowe w PRL – tysiące bloków z wielkiej płyty – rozwiązało powojenną biedę mieszkaniową, lecz stworzyło nowe problemy: wieloletnie kolejki po przydział, uniformizm i złą jakość wykonania.',
    content: `## Zniszczenia wojenne i potrzeba odbudowy

II wojna światowa zniszczyła ok. 30% zasobu mieszkaniowego Polski. Miliony ludzi żyły w gruzach, piwnicach i prowizorycznych barakach. Jednocześnie industrializacja lat 50. XX w. ściągała masy chłopów do miast – potrzeba mieszkań była ogromna i pilna.

## Wielka płyta – fabryka domów

Od lat 60. podstawą budownictwa stała się technologia wielkopłytowa – prefabrykaty wytwarzane seryjnie w fabrykach domów. Osiedla bloków rosły błyskawicznie wokół wszystkich większych miast: Nowa Huta, Ursynów (Warszawa), Zaspa (Gdańsk), Tysiąclecia (Katowice), Rataje (Poznań). Do 1989 r. wybudowano ok. 3–3,5 mln mieszkań w tej technologii.

## Spółdzielnie i przydział

Mieszkania rozdzielano przez spółdzielnie mieszkaniowe i zakłady pracy. Pracownicy dużych fabryk mieli pierwszeństwo. Na przydział czekało się średnio 10–15 lat. Wykształciła się instytucja "zamiany" mieszkań – gdyż rynek mieszkaniowy oficjalnie nie istniał. Czarny rynek i łapówki dla spółdzielczych komisji mieszkaniowych były powszechne.

## Warunki lokalowe

Standardowe "M3" (2 pokoje + kuchnia) miało ok. 40–45 m². Rodziny wielopokoleniowe i wielodzietne cierpiały na przeludnienie. Brakujące windy, cienkie ściany, grzyb, awarie centralnego ogrzewania i wody – to codzienność blokowiska. Mimo to własne "M" było dla milionów Polaków wymarzonym celem i symbolem awansu społecznego.

## Dziedzictwo

Wielka płyta okazała się trwalsza, niż sądzono. Dziś polskie blokowiska przeszły rewitalizację – ocieplane, remontowane, z kolorowymi elewacjami. Dla pokolenia PRL blok był spełnieniem marzeń; dla kolejnych – nostalgicznym reliktem epoki.`,
    resources: [
      {
        id: 'mieszkanie-1',
        title: 'Fotografie blokowisk PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20blokowisk',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie osiedli wielopłytowych i wnętrz mieszkań z epoki PRL.',
        year: 1960,
        downloadable: true,
      },
      {
        id: 'mieszkanie-2',
        title: 'Dokumenty spółdzielni mieszkaniowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=sp%C3%B3%C5%82dzielni%20mieszkaniowych',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty spółdzielni mieszkaniowych i uchwały o przydziale lokali.',
        year: 1960,
      },
      {
        id: 'mieszkanie-3',
        title: 'Kroniki filmowe – nowe osiedla mieszkaniowe',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20nowe',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Kroniki Filmowe PRL dokumentujące oddawanie kolejnych bloków i osiedli mieszkaniowych.',
        year: 1965,
      },
    ],
    relatedIds: ['zycie-codzienne', 'plan-szescioletni', 'gierek', 'wies-prl'],
  },

  {
    id: 'kartki-prl',
    title: 'Kartki żywnościowe i reglamentacja',
    subtitle: 'Gospodarka niedoboru – kartki na mięso, cukier i buty',
    category: 'gospodarka',
    tags: ['kartki', 'reglamentacja', 'mięso', 'cukier', 'kolejka', 'niedobór', 'stan wojenny', 'bon towarowy', 'Pewex'],
    yearStart: 1976,
    yearEnd: 1989,
    summary: 'System kartkowy – reglamentacja żywności i towarów przemysłowych – stał się w latach 80. symbolem klęski gospodarki socjalistycznej. Kartki na mięso, masło, cukier, spirytus, a nawet buty obrazowały codzienną absurdalność PRL-owskiego niedoboru.',
    content: `## Historia reglamentacji

Kartki żywnościowe pojawiały się w PRL kilkakrotnie: tuż po wojnie (1945–1949) oraz ponownie od 1976 r. (kartki na cukier) i szerzej od 1981 r. System objął mięso i przetwory, masło, mąkę, ryż, kaszę, czekoladę, proszek do prania, papierosy, spirytus, benzynę i wiele innych artykułów.

## Normy przydziału

Miesięczne normy były skromne. Na kartki przydzielano np.: 2,5 kg mięsa i przetworów na osobę (1982), 0,5 kg masła, 1 kg cukru. Dzieci miały dodatkowe kartki na słodycze i mleko w proszku; kobiety w ciąży – specjalne przywileje. System był skomplikowany i podatny na nadużycia.

## Kolejki jako sposób życia

Informacja o dostawie towarów rozchodziła się błyskawicznie. Polacy ustawiali się w kolejkach od świtu – często nocując przed sklepem lub zostawiając w kolejce "numerki" (kawałki papieru z odręcznym numerem). "Ustawianie się w kolejce nie wiadomo po co" – zakup towaru, który może się okazać przydatny – stało się podstawową strategią przetrwania.

## Czarny rynek i spekulacja

Towary z kartek trafiały na czarny rynek. "Spekulant" sprzedający je powyżej cen państwowych był z jednej strony potępiany, z drugiej – nieodzowny. Waluta wymienna to były paczki papierosów, butelki wódki i bony Pewexu (za dewizy). Dewizy – dolary, marki – dawały dostęp do zachodniej jakości w sklepach Pewex i Baltona.

## Koniec systemu kartkowego

Kartki znoszono stopniowo: cukier w 1985 r., mięso w 1989 r. Reforma Balcerowicza po 1989 r. zlikwidowała system definitywnie – półki sklepowe zapełniły się, lecz wielu Polaków nie miało pieniędzy na zakupy po cenach wolnorynkowych.`,
    resources: [
      {
        id: 'kartki-1',
        title: 'Kartki i talony – zbiory cyfrowe Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Kartki%20talony%20cyfrowe',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Skany kartek żywnościowych, bonów towarowych i talonów z okresu reglamentacji w PRL.',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'kartki-2',
        title: 'Dokumenty rządowe o reglamentacji',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=rz%C4%85dowe%20reglamentacji',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne zarządzenia i uchwały Rady Ministrów o wprowadzeniu i zniesieniu kartek.',
        year: 1981,
      },
      {
        id: 'kartki-3',
        title: 'Materiały edukacyjne IPN – gospodarka niedoboru',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=gospodarka%20niedoboru',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o reglamentacji i życiu codziennym w stanie wojennym.',
        year: 2015,
        downloadable: true,
      },
    ],
    relatedIds: ['zycie-codzienne', 'stan-wojenny', 'gierek', 'strajki-1988'],
  },

  {
    id: 'paszport-prl',
    title: 'Paszporty i ograniczenia wyjazdowe',
    subtitle: 'Zamknięty kraj – podróże za żelazną kurtyną jako przywilej',
    category: 'represje',
    tags: ['paszport', 'wyjazd', 'granica', 'żelazna kurtyna', 'emigracja', 'MSW', 'zakaz wyjazdu', 'kontrola'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'W PRL paszport nie był prawem obywatela – był przywilejem udzielanym przez władze. MSW mogło go nie wydać, cofnąć lub zatrzymać. Wyjazd na Zachód wymagał specjalnego zezwolenia, co czyniło z podróży za granicę nagrodę lub narzędzie kontroli.',
    content: `## Paszport jako narzędzie kontroli

Od samego początku PRL władze traktowały swobodę podróżowania jako zagrożenie dla systemu. Paszport był dokumentem przechowywanym przez urząd – nie przez obywatela. Wydawano go na konkretną podróż i na określony czas, po czym należało go zwrócić do MSW. Posiadanie paszportu w domu (tzw. paszportu stałego) było rzadkim przywilejem.

## Procedura ubiegania się

Wniosek o paszport składano do Biura Paszportowego MSW. SB sprawdzała wnioskodawcę: czy nie jest "elementem wrogim", czy nie ma powiązań z opozycją, czy rodzina "daje gwarancję powrotu". Odmowy nie wymagały uzasadnienia. Dzieci, małżonkowie, rodzice – wszyscy mogli być "zakładnikami" gwarantującymi powrót podróżnego.

## Paszport jako nagroda i kara

Władze używały paszportów instrumentalnie: naukowcy, sportowcy i artyści lojalni wobec systemu dostawali je łatwo; działacze opozycji – nigdy lub z wielkimi trudnościami. Po sierpniu 1980 r. i w stanie wojennym masowo zatrzymywano paszporty działaczom "Solidarności". Jednocześnie niektórym dysydentom "proponowano" wyjazd z Polski bez prawa powrotu – ci, którzy mieli odwagę odmówić, zostawali.

## Emigracja przymusowa

Szczyt emigracji przymusowej lub półprzymusowej przypadł na lata 1968 (Marzec 1968 – emigracja Żydów polskich) i 1981–1982 (stan wojenny – emigracja opozycjonistów i zwykłych Polaków szukających lepszego życia). Łącznie w PRL wyemigrowało ok. 1–1,5 mln osób.

## Przełom 1988–1989

Dopiero w 1988 r. złagodzono przepisy, a 1 stycznia 1989 r. weszła w życie nowa ustawa paszportowa zbliżająca PRL do standardów europejskich. Po wyborach 1989 r. swoboda wyjazdów stała się jednym z pierwszych realnych osiągnięć transformacji.`,
    resources: [
      {
        id: 'paszport-1',
        title: 'Akta paszportowe – zasoby IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=paszportowe',
        source: 'Instytut Pamięci Narodowej',
        description: 'Kartoteki paszportowe MSW przechowywane w zasobach IPN – dostępne dla rodzin i badaczy.',
        year: 1950,
      },
      {
        id: 'paszport-2',
        title: 'Akta emigracyjne w Archiwach Państwowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=emigracyjne%20Archiwach%20Pa%C5%84stwowych',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Wyszukiwarka dokumentów archiwalnych dotyczących wniosków paszportowych i wyjazdów.',
        year: 1955,
      },
      {
        id: 'paszport-3',
        title: 'Materiały edukacyjne – emigracja i granice PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=emigracja%20granice',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o kontroli ruchu granicznego i emigracji w PRL.',
        year: 2018,
        downloadable: true,
      },
    ],
    relatedIds: ['sb', 'emigracja-1968', 'ucieczki-z-prl', 'stan-wojenny', 'internowanie'],
  },

  {
    id: 'prasa-prl',
    title: 'Prasa i dziennikarstwo w PRL',
    subtitle: 'Trybuna Ludu, Polityka, Przekrój – prasa pod cenzurą i wbrew cenzurze',
    category: 'kultura',
    tags: ['prasa', 'dziennikarstwo', 'Trybuna Ludu', 'Polityka', 'Przekrój', 'cenzura', 'GUKPiW', 'Tygodnik Powszechny'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Prasa PRL była z założenia podporządkowana partii: oficjalne gazety drukowały propagandę, lecz w ramach systemu pojawiały się też pisma odważniejsze. Obok legalnego obiegu rozwijał się drugi obieg prasy podziemnej.',
    content: `## Prasa partyjna i oficjalna

Centralnym organem PZPR była "Trybuna Ludu" (1948–1990) – obowiązkowa lektura aparatu partyjnego, drukowana w milionowych nakładach, rzadko czytana z ochotą. Podobną rolę pełniły organy terenowe PZPR w każdym województwie. Oprócz prasy partyjnej istniały pisma ZSL, SD i organizacji masowych.

## Tytuły z ambicjami

Na tle szarej masy tytułów wyróżniało się kilka pism. "Polityka" (od 1957) – tygodnik o profilu liberalno-partyjnym – przyciągał lepszych publicystów i odważniejsze tematy (w granicach cenzury). "Przekrój" – krakowski tygodnik kulturalny z tradycjami przedwojennymi – słynął z humoru, ironii i subtelnej krytyki systemu. "Tygodnik Powszechny" był najważniejszym pismem katolickim w bloku wschodnim.

## Cenzura – GUKPiW

Główny Urząd Kontroli Prasy, Publikacji i Widowisk (GUKPiW) kontrolował każdy druk przed publikacją. Cenzorzy eliminowali niewygodne fakty, poprawiali wyniki statystyczne, zakazywali publikacji nekrologów niewygodnych osób. Tomasz Strzyżewski – cenzor, który w 1977 r. uciekł na Zachód z wewnętrzną "Księgą zapisów" GUKPiW – ujawnił skalę cenzury w "Czarnej księdze cenzury PRL".

## Prasa podziemna

Po 1976 r. kwitła prasa podziemna ("drugi obieg"): "Robotnik", "Biuletyn Informacyjny KOR", po 1981 r. setki tytułów podziemnej "Solidarności". Pisma te drukowano na powielaczach, przemycano papier i tusz, kolportowano przez siatki zaufanych ludzi.

## Upadek cenzury

W 1989 r. zniesiono GUKPiW. Stare tytuły partyjne szybko upadły lub zmieniły profil. "Polityka" i "Przekrój" przeżyły transformację jako niezależne pisma. "Gazeta Wyborcza" – dawne pismo podziemia – stała się czołowym tytułem wolnej Polski.`,
    resources: [
      {
        id: 'prasa-1',
        title: 'Archiwum prasy PRL – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=prasy',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane kolekcje gazet i czasopism z okresu PRL, w tym Trybuna Ludu, Przekrój, Polityka.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'prasa-2',
        title: 'Akta GUKPiW – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=GUKPiW',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Głównego Urzędu Kontroli Prasy, Publikacji i Widowisk.',
        year: 1945,
      },
      {
        id: 'prasa-3',
        title: 'Materiały edukacyjne – prasa i cenzura w PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=prasa%20cenzura',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o systemie cenzury i prasie PRL dla uczniów i nauczycieli.',
        year: 2019,
        downloadable: true,
      },
    ],
    relatedIds: ['cenzura-prl', 'drugi-obieg', 'propaganda-prl', 'tvp-prl', 'kor'],
  },

  {
    id: 'kielce-1946',
    title: 'Pogrom kielecki 1946',
    subtitle: 'Ostatni wielki pogrom w Europie – 42 ofiary żydowskie w powojennej Polsce',
    category: 'represje',
    tags: ['Kielce', 'pogrom', '1946', 'Żydzi', 'antysemityzm', 'powojnie', 'mord', 'ocalałe'],
    yearStart: 1946,
    yearEnd: 1946,
    summary: 'Pogrom kielecki (4 lipca 1946 r.) był największym mordem na Żydach w powojennej Polsce: tłum zaatakował budynek przy ul. Planty 7, zabijając 42 Żydów ocalałych z Holokaustu. Tragedia ta przyspieszyła masową emigrację polskich Żydów i do dziś budzi trudne pytania.',
    content: `## Kontekst – Żydzi w powojennej Polsce

Po wyzwoleniu do Polski wróciło ok. 200–250 tys. Żydów – ocalałych z obozów, ukrywających się po wsiach, powracających z ZSRR. Atmosfera była napięta: antysemityzm zakorzeniony w uprzedzeniach i rywalizacji o majątek żydowski przejęty w czasie okupacji. W latach 1944–1946 zginęło w Polsce ok. 1 500–2 000 Żydów w różnych incydentach.

## 4 lipca 1946 – przebieg pogromu

Rankiem 4 lipca 1946 r. chłopiec (Henryk Błaszczyk) zgłosił na milicję, że był przetrzymywany w piwnicy domu przy ul. Planty 7 – siedzibie Komitetu Żydowskiego. Oskarżenie o "mord rytualny" (legenda o porywaniu dzieci chrześcijańskich) rozpaliło tłum. Milicja, wojsko i cywile wtargnęli do budynku. Zabito 42 Żydów, w tym kobiety w ciąży i dzieci, ok. 40 raniono. Chłopiec kłamał – w piwnicy nie było żadnych więzionych dzieci.

## Sprawcy i reakcje

Komunistyczne władze zareagowały stosunkowo szybko – część sprawców stanęła przed sądem, kilku skazano na śmierć i stracono. Władze próbowały też wykorzystać pogrom propagandowo, obwiniając podziemie niepodległościowe. Kościół potępił zbrodnię z opóźnieniem.

## Emigracja i pamięć

Pogrom kielecki przyspieszyć masową emigrację polskich Żydów na Zachód i do Palestyny. Do 1947 r. Polska opuściło ok. 100 tys. Żydów. Temat przez dekady był w PRL przemilczany lub fałszowany. Po 1989 r. stał się przedmiotem trudnych debat historycznych i moralnych.`,
    resources: [
      {
        id: 'kielce-1',
        title: 'Materiały edukacyjne IPN – pogrom kielecki',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=pogrom%20kielecki',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o pogromie kieleckim i jego kontekście historycznym.',
        year: 2016,
        downloadable: true,
      },
      {
        id: 'kielce-2',
        title: 'Akta śledztwa – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=%C5%9Bledztwa',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty śledztwa IPN w sprawie pogromu kieleckiego z 4 lipca 1946 r.',
        year: 1946,
      },
      {
        id: 'kielce-3',
        title: 'Dokumenty i prasa z 1946 r. – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=prasa%201946',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety i dokumenty z 1946 r. dotyczące pogromu kieleckiego.',
        year: 1946,
        downloadable: true,
      },
    ],
    relatedIds: ['marzec-1968', 'emigracja-1968', 'represje-polityczne', 'deportacje', 'manifest-pkwn'],
  },

  {
    id: 'pewex',
    title: 'Pewex i Baltona',
    subtitle: 'Sklepy za dewizy – zachodni świat za żelazną kurtyną',
    category: 'gospodarka',
    tags: ['Pewex', 'Baltona', 'dewizy', 'dolar', 'bon towarowy', 'import', 'konsumpcja', 'zachód'],
    yearStart: 1972,
    yearEnd: 1989,
    summary: 'Pewex i Baltona – sklepy z towarami zachodnimi sprzedawanymi wyłącznie za dewizy lub bony – były osobliwością PRL. Dolar i marka zachodnioniemiecka były prawdziwą walutą; sklepy oferowały Marlboro, dżinsy, whisky i elektronikę niedostępną w zwykłej sieci.',
    content: `## Geneza – dewizy dla państwa

Pewex (Przedsiębiorstwo Eksportu Wewnętrznego) powstał w 1972 r. jako sieć sklepów akceptujących wyłącznie waluty wymienialne – dolary, marki, funty. Baltona obsługiwała porty i lotniska. Cel był fiskalny: ściągnięcie z obiegu prywatnych dewiz, które Polacy otrzymywali od krewnych za granicą lub zarabiali na kontraktach.

## Co można było kupić

W Pewexie można było nabyć towary, których nie było w zwykłych sklepach: whisky i gin, papierosy Marlboro i Camel, dżinsy Levi's, magnetofony, telewizory Sony i Grundig, kawę i czekoladę, środki higieniczne i kosmetyki zachodnich firm. Dla przeciętnego Polaka wizyta w Pewexie była jak okno na inny świat.

## Bony towarowe

Kto nie miał dewiz, mógł kupić "bony towarowe" w specjalnych kasach – za złotówki, po specjalnym kursie. Bony wyglądały jak banknoty z napisami w dolarach i centach. Były one w praktyce "wewnętrznym dolarem" – i krążyły na czarnym rynku razem z prawdziwymi dolarami.

## Społeczna rola Pewexu

Dostęp do Pewexu dzielił Polaków na tych z dewizami (mieli krewnych za granicą, pracowali na kontraktach, handlowali na czarnym rynku) i tych bez. Dolar stał się miarą wartości i prestiżu. "Paczka z Pewexu" – prezent od znajomych – była towarem na wagę złota. Kolejki do kas i półki pełne zachodniej obfitości tworzyły surrealistyczny kontrast z pustymi półkami GS-ów.

## Likwidacja

W 1990 r., po urynkowieniu i otwarciu granic, Pewex stracił rację bytu. Sklepy zamknięto lub sprywatyzowano. Dziś Pewex istnieje jedynie jako sieć internetowa i nostalgiczny symbol epoki.`,
    resources: [
      {
        id: 'pewex-1',
        title: 'Katalogi i reklamy Pewexu – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Katalogi%20reklamy%20Pewexu',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane katalogi produktów, bony towarowe i materiały reklamowe Pewexu.',
        year: 1972,
        downloadable: true,
      },
      {
        id: 'pewex-2',
        title: 'Akta handlu dewizowego PRL',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=handlu%20dewizowego',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty dotyczące sieci handlu dewizowego w PRL.',
        year: 1972,
      },
      {
        id: 'pewex-3',
        title: 'Kroniki filmowe – sklepy i konsumpcja w PRL',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20sklepy',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne materiały filmowe o handlu i konsumpcji w PRL.',
        year: 1975,
      },
    ],
    relatedIds: ['kartki-prl', 'zycie-codzienne', 'gospodarka-prl', 'gierek', 'ucieczki-z-prl'],
  },

  {
    id: 'kiesklowski',
    title: 'Krzysztof Kieślowski',
    subtitle: 'Dekalog, Trzy kolory – mistrz kina moralnego i metafizycznego (1941–1996)',
    category: 'osoby',
    tags: ['Kieślowski', 'Dekalog', 'Trzy kolory', 'kino', 'reżyser', 'Łódź', 'Cannes', 'metafizyka'],
    yearStart: 1941,
    yearEnd: 1996,
    summary: 'Krzysztof Kieślowski – reżyser "Dekalogu", trylogii "Trzy kolory" i "Podwójnego życia Weroniki" – był jednym z największych twórców kina europejskiego. Zaczynał od dokumentu, by przez kino moralnego niepokoju dojść do filmów o tajemnicy istnienia.',
    content: `## Droga przez dokument

Kieślowski (ur. 27 VI 1941 w Warszawie) studiował w łódzkiej filmówce. Przez całe lata 70. tworzył dokumenty – "Robotnicy 71" (1972), "Z punktu widzenia nocnego portiera" (1977) – ostre, bezkompromisowe obrazy PRL-owskiej rzeczywistości. Cenzura blokowała część z nich lub nakazywała skróty.

## Kino moralnego niepokoju

Kieślowski był jednym z liderów "kina moralnego niepokoju" – nurtu lat 70./80. zadającego pytania o odpowiedzialność moralną jednostki w systemie. "Amator" (1979) i "Przypadek" (1981, zakazany do 1987 r.) to jego kluczowe filmy z tego okresu. "Przypadek" opowiada o trzech wariantach życia bohatera – zależnych od przypadkowego zdarzenia.

## Dekalog (1988)

Dziesięć filmów telewizyjnych nakręconych dla TVP – każdy inspirowany jednym z przykazań dekalogu – jest arcydziełem kina. Kręcone w blokach na Ursynowie, poruszają kwestie śmierci, wierności, kłamstwa, miłości. Dwa rozwinął w pełne metraże: "Krótki film o zabijaniu" i "Krótki film o miłości" zdobyły nagrody na festiwalach europejskich.

## Trylogia "Trzy kolory" i emigracja

Po 1989 r. Kieślowski porzucił Polskę dla koprodukcji francusko-polskiej. "Podwójne życie Weroniki" (1991), "Niebieski", "Biały", "Czerwony" (1993–1994) – trylogia inspirowana barwami flagi francuskiej i wartościami Rewolucji – przyniosły mu światową sławę. "Czerwony" zdobył Nagrodę Jury w Cannes (1994).

## Śmierć i dziedzictwo

Kieślowski ogłosił zakończenie reżyserii po "Czerwonym" – i umarł nagle na serce 13 marca 1996 r. Jego filmy są dziś klasiką kina światowego, wykładaną na uczelniach filmowych.`,
    resources: [
      {
        id: 'kiesl-1',
        title: 'Filmy Kieślowskiego – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kie%C5%9Blowski',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne filmy Krzysztofa Kieślowskiego dostępne w cyfrowym archiwum.',
        year: 1972,
      },
      {
        id: 'kiesl-2',
        title: 'Materiały o Kieślowskim – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Kie%C5%9Blowskim',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane wywiady, recenzje i materiały prasowe o Krzysztofie Kieślowskim.',
        year: 1979,
        downloadable: true,
      },
      {
        id: 'kiesl-3',
        title: 'Akta cenzury filmowej – filmy Kieślowskiego',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=cenzury%20filmowej%20filmy',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Komisji Kolaudacyjnej dotyczące filmów Kieślowskiego.',
        year: 1979,
      },
    ],
    relatedIds: ['kino-prl', 'polska-szkola-filmowa', 'wajda', 'tvp-prl', 'cenzura-prl'],
  },

  {
    id: 'kresy',
    title: 'Kresy Wschodnie – utracona ojczyzna',
    subtitle: 'Lwów, Wilno, Grodno – ziemie utracone i pamięć pokoleń',
    category: 'społeczeństwo',
    tags: ['Kresy', 'Lwów', 'Wilno', 'Grodno', 'Wołyń', 'utrata', 'tożsamość', 'repatriacja', 'pamięć'],
    yearStart: 1939,
    yearEnd: 1989,
    summary: 'Kresy Wschodnie – wschodnie tereny II Rzeczypospolitej z Lwowem, Wilnem, Grodnem i Pińskiem – zostały utracone na rzecz ZSRR na podstawie ustaleń jałtańskich. Miliony Polaków wysiedlonych stamtąd na zawsze zachowały pamięć o utraconej ojczyźnie.',
    content: `## Czym były Kresy

Kresy Wschodnie to rozległe tereny wschodnie II RP: Wileńszczyzna, Nowogródczyzna, Polesie, Wołyń, Małopolska Wschodnia (z Lwowem). Zamieszkiwała je niezwykle różnorodna mozaika narodowościowa: Polacy, Ukraińcy, Białorusini, Litwini, Żydzi, Rusini. Lwów – "miasto siedmiu kultur" – był centrum kulturalnym i naukowym.

## Utrata – Jałta i jej skutki

W wyniku postanowień jałtańskich (1945) i traktatu granicznego z ZSRR cała ta przestrzeń weszła w skład republik sowieckich: Ukraińskiej, Białoruskiej i Litewskiej SRR. Polska granica wschodnia przesunęła się na linię Curzona – pozbawioną historycznego uzasadnienia z punktu widzenia etnicznego i kulturowego.

## Repatriacje i wysiedlenia

W latach 1945–1946 przeprowadzono masowe przesiedlenia: ok. 1,5–2 mln Polaków z Kresów trafiło na Ziemie Odzyskane (dawne tereny wschodnioniemieckie). Zostawiali domy, groby przodków, kościoły i majątki. Jednocześnie Ukraińcy i Białorusini z ziem polskich trafiali na wschód.

## Tabu w PRL

Temat Kresów był w PRL półtabu: mówienie o przywiązaniu do Lwowa czy Wilna było tolerowane prywatnie, lecz publicznie oznaczało kwestionowanie "wiecznej przyjaźni" z ZSRR. Literatura kresowa (Jan Parandowski, Józef Wittlin, Zbigniew Herbert – lwowianin) kwitła, lecz aspekty polityczne były wyciszane.

## Pamięć i tożsamość

Pokolenia wysiedlonych Kresowiaków wychowywały dzieci i wnuki w kulcie utraconej ojczyzny. Towarzystwa Miłośników Lwowa, Wilna, Grodna działały mimo trudności. Dziś kultura kresowa – lwowska gwara, kresowe przepisy kulinarne, literatura – jest żywym dziedzictwem milionów Polaków.`,
    resources: [
      {
        id: 'kresy-1',
        title: 'Fotografie Kresów Wschodnich – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20Kres%C3%B3w%20Wschodnich',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie Lwowa, Wilna, Grodna i innych miast kresowych z lat 1918–1945.',
        year: 1920,
        downloadable: true,
      },
      {
        id: 'kresy-2',
        title: 'Materiały edukacyjne IPN – Kresy i repatriacje',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Kresy%20repatriacje',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o Kresach Wschodnich, przesiedleniach i utracie tych ziem.',
        year: 2019,
        downloadable: true,
      },
      {
        id: 'kresy-3',
        title: 'Akta repatriantów z Kresów',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=repatriant%C3%B3w%20Kres%C3%B3w',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące przesiedleń i repatriacji z Kresów Wschodnich.',
        year: 1945,
      },
    ],
    relatedIds: ['jalta', 'ziemie-odzyskane', 'repatriacje', 'akcja-wisla', 'deportacje'],
  },

  {
    id: 'repatriacje',
    title: 'Wielka migracja powojenna',
    subtitle: 'Repatriacje i przesiedlenia 1945–1946 – 5 milionów Polaków zmienia adres',
    category: 'społeczeństwo',
    tags: ['repatriacja', 'przesiedlenia', 'Kresy', 'Ziemie Odzyskane', 'migracja', '1945', '1946', 'transport'],
    yearStart: 1945,
    yearEnd: 1948,
    summary: 'Lata 1945–1948 to czas największego w historii Polski przymusowego przemieszczenia ludności: ok. 2 mln Polaków przybyło z Kresów Wschodnich na Ziemie Odzyskane, ok. 3–4 mln Niemców opuściło te same tereny, a setki tysięcy Ukraińców przesiedlono na wschód.',
    content: `## Skala i kontekst

Koniec II wojny światowej przyniósł zmianę granic Polski o ok. 250 km na zachód. Tracąc Kresy Wschodnie, Polska zyskała Ziemie Odzyskane (Dolny Śląsk, Pomorze, część Brandenburgii, Warmia i Mazury). Obydwie strony tej transakcji oznaczały masowe i brutalne przesiedlenia milionów ludzi.

## Przesiedlenie Niemców

Z Ziem Odzyskanych wysiedlono ok. 3–4 mln Niemców. Przesiedlenia odbywały się w dramatycznych warunkach – ludzie tracili dobytek całego życia. Część wysiedleń była chaotyczna i brutalna; Niemcy podróżowali pieszo lub w wagonach towarowych, tracąc majątek.

## Repatriacja Polaków z Kresów

Równolegle ok. 1,5–2 mln Polaków z Kresów Wschodnich trafiło na Ziemie Odzyskane. "Repatriacja" – nazwa oficjalna – była de facto ekspatriacją: ludzie wyjeżdżali z ojczyzny i osiedlali się w obcym sobie środowisku. Lwowiacy trafiali do Wrocławia, Wilnianie – do Torunia i Gdańska.

## Akcja Wisła (1947)

Osobnym rozdziałem było przymusowe przesiedlenie Ukraińców z południa i wschodu Polski na Ziemie Odzyskane – operacja "Wisła" (1947). Rozbijała ona zwartość etniczną Ukraińców, unicestwiając UPA. Ok. 140 tys. Ukraińców trafiło na ziemie zachodnie i północne.

## Nowe społeczeństwo

Ziemie Odzyskane stały się tyglem etnicznym i kulturowym: obok Polaków z Kresów przybyli tam Polacy z centralnej Polski, Żydzi, volksdeutsche. Budowała się nowa tożsamość tych ziem – z nostalgią za Kresami i przywiązaniem do "małej ojczyzny" dolnośląskiej.`,
    resources: [
      {
        id: 'repat-1',
        title: 'Akta repatriacji – Archiwa Państwowe',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=repatriacji%20Archiwa%20Pa%C5%84stwowe',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące repatriacji i przesiedleń ludności w latach 1945–1948.',
        year: 1945,
      },
      {
        id: 'repat-2',
        title: 'Materiały edukacyjne IPN – migracje powojenne',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=migracje%20powojenne',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o powojennych migracjach i przesiedleniach.',
        year: 2018,
        downloadable: true,
      },
      {
        id: 'repat-3',
        title: 'Fotografie i relacje repatriowanych – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20relacje%20repatriowanych',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie i relacje dokumentujące repatriacje z Kresów na Ziemie Odzyskane.',
        year: 1945,
        downloadable: true,
      },
    ],
    relatedIds: ['kresy', 'ziemie-odzyskane', 'akcja-wisla', 'jalta', 'manifest-pkwn'],
  },

  {
    id: 'reforma-rolna',
    title: 'Reforma rolna PKWN 1944',
    subtitle: 'Parcelacja majątków ziemskich – rewolucja na wsi i koniec ziemiaństwa',
    category: 'gospodarka',
    tags: ['reforma rolna', 'PKWN', 'dekret', 'ziemiaństwo', 'parcelacja', 'chłopi', '1944', 'ziemia'],
    yearStart: 1944,
    yearEnd: 1948,
    summary: 'Dekret PKWN o reformie rolnej z 6 września 1944 r. bez odszkodowania wywłaszczył majątki ziemskie powyżej 50 ha (100 ha na Kresach). Zakończył istnienie klasy ziemiańskiej i przekształcił polską wieś – stanowiąc fundament pod późniejszą kolektywizację.',
    content: `## Dekret z 6 września 1944 r.

Manifest PKWN zapowiedział reformę rolną już w lipcu 1944 r. Dekret o przeprowadzeniu reformy rolnej z 6 września 1944 r. wywłaszczył bez odszkodowania wszystkie majątki ziemskie powyżej 50 ha ogółem lub 100 ha użytków rolnych. Ziemię podzielono między chłopów bezrolnych i małorolnych.

## Skala i ofiary

Wywłaszczono ok. 9 700 majątków o łącznej powierzchni ok. 3,5 mln ha. Ziemia i inwentarz żywy zostały odebrane właścicielom często w ciągu godzin – bez jakiegokolwiek postępowania sądowego i bez prawa do odwołania. Dawni właściciele byli wyrzucani z domów, a ich majątki niszczone lub rozkradane przez administrację.

## Koniec ziemiaństwa

Reforma de facto unicestwiła polskie ziemiaństwo jako klasę społeczną. Rodziny, których korzenie sięgały średniowiecza, znalazły się z dnia na dzień bez środków do życia. Pałace i dworki były rabowane, niszczone lub zamieniane na PGR-y i szkoły. Biblioteki, obrazy i pamiątki rodzinne przepadły.

## Chłopi – zwycięzcy i przegrani

Chłopi otrzymali ziemię – co wielu przyjmowało z entuzjazmem. Lecz radość trwała krótko: od końca lat 40. partia zaczęła naciskać na kolektywizację, próbując zniszczyć indywidualne rolnictwo. Reforma rolna okazała się pierwszym krokiem do PGR-ów i spółdzielni.

## Prawne i historyczne konsekwencje

Kwestia odszkodowań dla potomków wywłaszczonych właścicieli ziemskich pozostaje nierozwiązana do dziś. Polska jest jedynym krajem postkomunistycznym, który nie uchwalił ustawy reprywatyzacyjnej dla majątków zabranych przez komunistów.`,
    resources: [
      {
        id: 'rolna-1',
        title: 'Dekret o reformie rolnej – ISAP',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19440040017',
        source: 'Internetowy System Aktów Prawnych – Sejm RP',
        description: 'Pełny tekst dekretu PKWN o przeprowadzeniu reformy rolnej z 6 września 1944 r.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'rolna-2',
        title: 'Materiały edukacyjne IPN – reforma rolna',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=reforma%20rolna',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o reformie rolnej i jej skutkach społecznych.',
        year: 2017,
        downloadable: true,
      },
      {
        id: 'rolna-3',
        title: 'Akta parcelacji – Archiwa Państwowe',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=parcelacji%20Archiwa%20Pa%C5%84stwowe',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące parcelacji majątków ziemskich w latach 1944–1948.',
        year: 1944,
      },
    ],
    relatedIds: ['manifest-pkwn', 'kolektywizacja', 'wies-prl', 'nacjonalizacja', 'bierut'],
  },

  {
    id: 'polska-kronika-filmowa',
    title: 'Polska Kronika Filmowa',
    subtitle: 'PKF – tygodnik ekranowy propagandy i nieplanowanej historii 1944–1994',
    category: 'kultura',
    tags: ['PKF', 'kronika filmowa', 'propaganda', 'dokumentacja', 'kino', 'tygodnik', 'historia wizualna'],
    yearStart: 1944,
    yearEnd: 1994,
    summary: 'Polska Kronika Filmowa (PKF) przez 50 lat była wyświetlana w kinach przed każdym filmem. Oficjalnie – narzędzie propagandy PZPR. W rzeczywistości – nieocenione archiwum wizualne Polski XX w., dokumentujące zarówno sukcesy systemu, jak i codzienne życie Polaków.',
    content: `## Narodziny PKF

Polska Kronika Filmowa powstała w 1944 r. w Lublinie, natychmiast po wkroczeniu Armii Czerwonej. Wzorowana na sowieckich kronikach, miała dostarczać propagandowych obrazów "odbudowy i budowy socjalizmu". Przed erą telewizji była jedynym ruchomym obrazem aktualnych wydarzeń dla milionów Polaków odwiedzających kino.

## Format i funkcja propagandowa

PKF ukazywała się co tydzień w dwóch wersjach: A i B, na przemian. Każdy numer składał się z kilku reportaży – oficjalne otwarcia, rekordy produkcji, wizyty zagraniczne, imprezy sportowe. Komentarz (czytany przez lektora) był pisany propagandowym językiem, chwalącym "osiągnięcia Planu" i "przyjaźń z ZSRR".

## Ukryta wartość dokumentalna

Ironicznie – mimo propagandowej misji – PKF stała się bezcennym archiwum wizualnym. Kamery rejestrowały ulice miast, kolejki, twarze ludzi, mody, pojazdy, architekturę. To, co miało gloryfikować PRL, dziś jest źródłem historycznym pierwszej klasy. Historycy i filmowcy czerpią z PKF pełnymi garściami.

## Artyści za kamerą

Z PKF zaczynali lub pracowali w niej wybitni filmowcy: Krzysztof Kieślowski (nakręcił tu swoje wczesne dokumenty), Roman Polański, Andrzej Munk. Kroniki były dla młodych twórców szkołą dokumentu i poligonem przed filmem fabularnym.

## Koniec

PKF przeżyła PRL – nadawano ją do 1994 r., zmieniając stopniowo profil. Archiwum PKF liczy dziś tysiące numerów i jest dostępne cyfrowo. To jeden z najważniejszych zasobów historii wizualnej Polski XX w.`,
    resources: [
      {
        id: 'pkf-1',
        title: 'Archiwum PKF – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Cyfrowe archiwum Polskiej Kroniki Filmowej z lat 1944–1994 dostępne online.',
        year: 1944,
      },
      {
        id: 'pkf-2',
        title: 'Dokumenty PKF – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=PKF',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty Wytwórni Filmów Dokumentalnych i PKF.',
        year: 1950,
      },
      {
        id: 'pkf-3',
        title: 'Materiały o historii PKF – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=historii%20PKF',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Opracowania i artykuły prasowe o Polskiej Kronice Filmowej.',
        year: 1960,
        downloadable: true,
      },
      {
        id: 'pkf-4',
        title: 'Repozytorium Cyfrowe Filmoteki Narodowej',
        type: 'film',
        url: 'https://repozytorium.fn.org.pl/?q=pl/search/node/kronika',
        source: 'Filmoteka Narodowa – Instytut Audiowizualny',
        description: 'Zdigitalizowane kroniki filmowe i dokumenty filmowe ze zbiorów Filmoteki Narodowej.',
        year: 1945,
      },
      {
        id: 'pkf-5',
        title: 'PKF w kontekście propagandy – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Polska%20Kronika%20Filmowa%20propaganda',
        source: 'IPN – Przystanek Historia',
        description: 'Analizy historyków IPN o roli PKF jako narzędzia propagandy komunistycznej.',
        year: 1970,
      },
    ],
    relatedIds: ['kino-prl', 'propaganda-prl', 'telewizja-prl', 'wfdif', 'film-dokumentalny-prl', 'kronika-wydarzenia-prl'],
  },

  {
    id: 'wfdif',
    title: 'Wytwórnia Filmów Dokumentalnych i Fabularnych',
    subtitle: 'WFDiF – fabryka kronik, dokumentów i polskiego kina 1949–1989',
    category: 'kultura',
    tags: ['WFDiF', 'kronika filmowa', 'dokument', 'film', 'Chełmska', 'produkcja', 'PKF'],
    yearStart: 1949,
    yearEnd: 1989,
    summary: 'Wytwórnia Filmów Dokumentalnych (od 1989 WFDiF) przy ul. Chełmskiej w Warszawie była głównym producentem Polskiej Kroniki Filmowej, filmów dokumentalnych i oświatowych w PRL. To tutaj powstawały tysiące materiałów dokumentujących epokę – od propagandy po wybitne dzieła dokumentalistyki.',
    content: `## Powstanie wytwórni

Wytwórnia Filmów Dokumentalnych powstała w 1949 r. w Warszawie przy ul. Chełmskiej 21, w ramach upaństwowionej i scentralizowanej kinematografii. Stała się głównym ośrodkiem produkcji filmu dokumentalnego, oświatowego i – przede wszystkim – Polskiej Kroniki Filmowej, wyświetlanej co tydzień w kinach całego kraju.

## Fabryka kronik

To w WFDiF montowano kolejne numery PKF. Co tydzień ekipy operatorów ruszały w teren – na otwarcia fabryk, dożynki, wizyty delegacji, zawody sportowe. Surowy materiał wracał na Chełmską, gdzie montażyści i lektorzy nadawali mu propagandowy kształt. Wytwórnia dysponowała własnym archiwum taśm, dziś bezcennym źródłem historycznym.

## Szkoła dokumentalistów

Chełmska była nieformalną akademią polskiego dokumentu. Pracowali tu lub debiutowali Kazimierz Karabasz, Krzysztof Kieślowski, Marcel Łoziński, Wojciech Wiszniewski, Tomasz Zygadło. Tzw. "czarna seria" polskiego dokumentu z lat 50. – krytyczne filmy o biedzie i marginesie społecznym – również rodziła się w kręgu wytwórni.

## Między propagandą a prawdą

Wytwórnia działała pod nadzorem cenzury i władz kinematografii. Wiele filmów było czystą propagandą, ale najwybitniejsi twórcy potrafili przemycać prawdę o życiu Polaków. Dokumenty Karabasza ("Ludzie z pustego obszaru", "Muzykanci") czy Kieślowskiego pokazywały zwykłego człowieka wbrew schematom socrealizmu.

## Dziedzictwo

Po 1989 r. wytwórnia kontynuowała działalność jako WFDiF. Jej archiwum – kroniki, dokumenty, taśmy – przeszło w opiekę instytucji audiowizualnych i jest stopniowo digitalizowane. To jeden z największych zasobów filmowej pamięci PRL.`,
    resources: [
      {
        id: 'wfdif-1',
        title: 'Dokumenty WFDiF w archiwach państwowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Wytw%C3%B3rnia%20Film%C3%B3w%20Dokumentalnych',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Akta produkcyjne i administracyjne Wytwórni Filmów Dokumentalnych.',
        year: 1949,
      },
      {
        id: 'wfdif-2',
        title: 'Dokumenty WFDiF w zbiorach NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Wytw%C3%B3rnia%20Film%C3%B3w%20Dokumentalnych',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Filmy dokumentalne produkcji WFDiF dostępne cyfrowo.',
        year: 1960,
      },
      {
        id: 'wfdif-3',
        title: 'Materiały o WFDiF – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Wytw%C3%B3rnia%20Film%C3%B3w%20Dokumentalnych',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Publikacje i prasa o historii wytwórni przy ul. Chełmskiej.',
        year: 1965,
        downloadable: true,
      },
    ],
    relatedIds: ['polska-kronika-filmowa', 'film-dokumentalny-prl', 'kino-prl', 'kronika-wydarzenia-prl'],
  },

  {
    id: 'film-dokumentalny-prl',
    title: 'Polski film dokumentalny w PRL',
    subtitle: 'Od "czarnej serii" do mistrzów – dokument między cenzurą a prawdą',
    category: 'kultura',
    tags: ['dokument', 'czarna seria', 'Karabasz', 'Kieślowski', 'Łoziński', 'kronika', 'film'],
    yearStart: 1955,
    yearEnd: 1989,
    summary: 'Polski film dokumentalny był jednym z najwybitniejszych zjawisk kultury PRL. Mimo cenzury twórcy tworzyli filmy o prawdziwym życiu Polaków – od krytycznej "czarnej serii" lat 50. po dokumenty Kieślowskiego i Łozińskiego, które omijały propagandowy schemat.',
    content: `## "Czarna seria" – odwilżowy przełom

Po 1956 r., w klimacie odwilży, narodziła się tzw. "czarna seria" polskiego dokumentu. Filmy takie jak "Uwaga, chuligani!" czy "Gdzie diabeł mówi dobranoc" Hoffmana i Skórzewskiego pokazywały biedę, patologie i ciemne strony życia w PRL – tematy dotąd zakazane. Był to przełom, choć krótkotrwały.

## Szkoła Karabasza

Kazimierz Karabasz stworzył szkołę "cierpliwego oka" – spokojnej obserwacji zwykłego człowieka. "Ludzie z pustego obszaru" (1957) i "Muzykanci" (1960) stały się wzorcem dokumentu humanistycznego. Karabasz wykładał w łódzkiej Filmówce i ukształtował całe pokolenie dokumentalistów.

## Kieślowski i kino moralnego niepokoju

Krzysztof Kieślowski zaczynał od dokumentu ("Z miasta Łodzi", "Robotnicy '71", "Szpital"). Jego filmy rejestrowały rzeczywistość PRL z taką precyzją, że część była zatrzymywana przez cenzurę. Dokument był dla niego szkołą obserwacji, którą przeniósł później do fabuły ("Dekalog").

## Marcel Łoziński i prowokacja dokumentalna

Marcel Łoziński ("Jak żyć", "Próba mikrofonu", "89 mm od Europy") rozwijał dokument zaangażowany i eksperymentalny. Jego filmy obnażały mechanizmy systemu i manipulacji, często były półkowane przez cenzurę aż do końca PRL.

## Cenzura i "półkowniki"

Wiele dokumentów trafiało "na półkę" – nie dopuszczano ich do rozpowszechniania. Filmy o strajkach, biedzie, prawdzie o historii czekały na premierę aż do 1989 r. Mimo to polski dokument zachował niezależność artystyczną i moralną, stając się sumieniem epoki.`,
    resources: [
      {
        id: 'dok-1',
        title: 'Polskie filmy dokumentalne – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=film%20dokumentalny%20PRL',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Kolekcja klasyki polskiego dokumentu z czasów PRL dostępna online.',
        year: 1957,
      },
      {
        id: 'dok-2',
        title: 'Dokumenty Kieślowskiego – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kie%C5%9Blowski%20dokument',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Wczesne filmy dokumentalne Krzysztofa Kieślowskiego.',
        year: 1969,
      },
      {
        id: 'dok-3',
        title: 'Historia polskiego dokumentu – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=polski%20film%20dokumentalny',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Opracowania i krytyka filmowa o polskiej szkole dokumentu.',
        year: 1970,
        downloadable: true,
      },
    ],
    relatedIds: ['polska-kronika-filmowa', 'wfdif', 'kino-prl', 'kiesklowski'],
  },

  {
    id: 'kronika-wydarzenia-prl',
    title: 'Wielkie wydarzenia PRL w kronice filmowej',
    subtitle: 'Jak Polska Kronika Filmowa pokazywała (i ukrywała) historię',
    category: 'kultura',
    tags: ['PKF', 'kronika filmowa', 'propaganda', 'Czerwiec 56', 'Grudzień 70', 'stan wojenny', 'historia wizualna'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Polska Kronika Filmowa relacjonowała najważniejsze wydarzenia PRL – ale zawsze przez pryzmat propagandy. Porównanie tego, co PKF pokazywała, z tym, co przemilczała, jest lekcją o mechanizmach manipulacji obrazem w państwie komunistycznym.',
    content: `## Kronika jako narzędzie narracji

PKF nie była neutralnym zapisem rzeczywistości – była aktywnym narzędziem kształtowania pamięci. Każde wydarzenie pokazywano tak, by wzmacniać legitymizację władzy. To, czego nie chciano pokazać, po prostu nie istniało na ekranie.

## Sukcesy systemu na ekranie

Otwarcia fabryk, Huta im. Lenina, pochody pierwszomajowe, wizyty radzieckich delegacji, rekordy produkcyjne przodowników pracy – to były ulubione tematy kroniki. Obraz "budowy socjalizmu" miał być triumfalny, dynamiczny, optymistyczny.

## Przemilczenia i zafałszowania

PKF milczała o protestach robotniczych albo przedstawiała je jako "wybryki chuliganów". Poznański Czerwiec 1956 i Grudzień 1970 były w kronice nieobecne lub zniekształcone. Stan wojenny pokazywano jako "przywrócenie porządku". Kamera nigdy nie pokazała kolejek, biedy ani opozycji w prawdziwym świetle.

## Wielkie wydarzenia mimo wszystko utrwalone

Paradoksalnie kronika utrwaliła też obrazy, które dziś czytamy wbrew intencji autorów: tłumy na pielgrzymce Jana Pawła II w 1979 r., entuzjazm wokół Solidarności w 1980 r. (zanim narracja się zmieniła). Te kadry stały się dowodem na siłę społeczeństwa.

## Kronika jako źródło historyczne

Dla historyka PKF jest źródłem podwójnym: mówi o wydarzeniach i o sposobie, w jaki władza chciała je przedstawić. Analiza komentarza, montażu i doboru ujęć ujawnia mechanizmy propagandy. Dlatego kroniki są dziś materiałem edukacyjnym o manipulacji medialnej.`,
    resources: [
      {
        id: 'krwyd-1',
        title: 'Archiwum PKF według wydarzeń – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Kolejne numery PKF dokumentujące najważniejsze wydarzenia PRL.',
        year: 1956,
      },
      {
        id: 'krwyd-2',
        title: 'PKF a propaganda wydarzeń – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=kronika%20filmowa%20propaganda%20wydarzenia',
        source: 'IPN – Przystanek Historia',
        description: 'Analizy historyków o tym, jak PKF relacjonowała kluczowe momenty PRL.',
        year: 1970,
      },
      {
        id: 'krwyd-3',
        title: 'Repozytorium Filmoteki Narodowej – kroniki',
        type: 'film',
        url: 'https://repozytorium.fn.org.pl/?q=pl/search/node/kronika',
        source: 'Filmoteka Narodowa – Instytut Audiowizualny',
        description: 'Zdigitalizowane numery kronik filmowych z całego okresu PRL.',
        year: 1960,
      },
    ],
    relatedIds: ['polska-kronika-filmowa', 'wfdif', 'film-dokumentalny-prl', 'propaganda-prl'],
  },

  {
    id: 'nauka-prl',
    title: 'Nauka i szkolnictwo wyższe w PRL',
    subtitle: 'PAN, politechniki i drenaż mózgów – między ideologią a odkryciem',
    category: 'społeczeństwo',
    tags: ['nauka', 'PAN', 'uczelnia', 'politechnika', 'badania', 'ideologia', 'mózgodren', 'Nobel'],
    yearStart: 1945,
    yearEnd: 1989,
    summary: 'PRL zbudował rozbudowany system szkolnictwa wyższego i badań naukowych – Polska Akademia Nauk, dziesiątki uczelni, instytuty badawcze. Nauka musiała służyć "budownictwu socjalizmu", lecz w naukach ścisłych osiągnięcia były autentyczne – choć wielu wybitnych naukowców emigrowało.',
    content: `## Odbudowa i rozbudowa

Po zniszczeniach wojennych nauka polska musiała zaczynać niemal od zera. Polska Akademia Nauk (PAN) założona w 1952 r. miała koordynować badania naukowe według planu centralnego. Rozbudowywano szkoły wyższe – Politechniki, Akademie Medyczne, Akademie Ekonomiczne – otwierając je dla "dzieci klasy robotniczej i chłopskiej".

## Ideologia a badania

Nauki społeczne i humanistyczne podlegały ścisłej kontroli ideologicznej: historia, filozofia, ekonomia, socjologia musiały stosować "metodologię marksistowsko-leninowską". Wydziały filozofii oczyszczano z "idealistów". Historycy pisali podręczniki fałszujące dzieje Polski.

## Nauki ścisłe i techniczne

W naukach ścisłych i technicznych ideologia miała mniejsze zastosowanie – fizyka i chemia nie podlegała "klasowości". Polscy fizycy, chemicy i matematycy osiągali autentyczne sukcesy. Szczególnie słynna była polska szkoła matematyczna. Polska była producentem pierwszorzędnych inżynierów.

## Mózgodren

Emigracja naukowców była stałym problemem. Wybitni uczeni opuszczali PRL – część w 1968 r. (Marzec), część podczas stanu wojennego. Leopold Infeld, Stanisław Ulam (współtwórca bomby atomowej), Benoit Mandelbrot (fraktal matematyczny) – to Polacy, którzy zrobili kariery na Zachodzie.

## Studenci i życie akademickie

Życie studenckie PRL miało swój specyficzny klimat: akademiki, juwenalia, studenckie teatry i kabarety (STS, Piwnica pod Baranami). Stypendium starczało na minimum; polityczny nadzór – przez ZMP i ZSMP – był odczuwalny, lecz walka o niezależność trwała nieprzerwanie.`,
    resources: [
      {
        id: 'nauka-1',
        title: 'Publikacje PAN i uczelni – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Publikacje%20PAN%20uczelni',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane publikacje naukowe, roczniki PAN i materiały akademickie z okresu PRL.',
        year: 1952,
        downloadable: true,
      },
      {
        id: 'nauka-2',
        title: 'Akta uczelni wyższych – Archiwa Państwowe',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=uczelni%20wy%C5%BCszych%20Archiwa',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty uczelni wyższych i Polskiej Akademii Nauk.',
        year: 1952,
      },
      {
        id: 'nauka-3',
        title: 'Materiały edukacyjne IPN – nauka w PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=nauka',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o systemie nauki i szkolnictwa wyższego w Polsce Ludowej.',
        year: 2018,
        downloadable: true,
      },
    ],
    relatedIds: ['edukacja-prl', 'nzs', 'marzec-1968', 'emigracja-1968', 'lem'],
  },

  {
    id: 'moda-prl',
    title: 'Moda i ubiór w PRL',
    subtitle: 'Dżinsy z Pewexu, szare garnitury i kombinezony – między uniformizmem a buntem',
    category: 'społeczeństwo',
    tags: ['moda', 'ubiór', 'dżinsy', 'uniformizm', 'Moda Polska', 'bunt', 'młodzież', 'szary'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Moda w PRL była polem walki między szarością systemu a ludzką potrzebą wyrazu. Oficjalna estetyka stawiała na skromność i uniformizm. Młodzież szukała dżinsów, kolorowych swetrów i zachodnich ciuchów – jako symbolu wolności i buntu.',
    content: `## Oficjalna estetyka – szary człowiek

Strój w PRL był z założenia skromny i funkcjonalny. Władza nie zachęcała do "burżuazyjnego" stroju; wyjść wyróżniającym się ubiorem oznaczało zwracać na siebie uwagę. Robocze kombinezony, szare garnitury, chusty na głowie – to codzienny obraz polskiej ulicy lat 50.

## Moda Polska i Telimena

Istniały jednak instytucje próbujące kreować oficjalną "polską modę". Dom Mody "Moda Polska" i sieć salonów "Telimena" projektowały odzież dla tych, którzy chcieli być elegancko ubrani w ramach systemu. Projekty były solidne, lecz ograniczone dostępnością tkanin i możliwościami produkcji.

## Niedobory i chałupnictwo

Sklepy odzieżowe świeciły pustkami lub oferowały towar złej jakości. Polki szyły same – każda rodzina miała maszynę do szycia "Łucznik". "Metka" – towar importowany lub z Pewexu – była synonimem jakości. Handel ciuchami spod lady, spekulacja ubraniami i wymienianie ciuchów były powszechne.

## Dżinsy jako symbol buntu

Zachodnie dżinsy – symbol kontrkultury – stały się w PRL fetyszem wolności. Para autentycznych Levi's Strauss kosztowała równowartość tygodniowej pensji. Przemycano je przez granicę, kupowano od taksówkarzy i spekulantów. W latach 80. polska branża odzieżowa próbowała produkować własne "dżinsy" – z marnym skutkiem.

## Lata 80. i kolorowa dekada

Lata 80. przyniosły pewną liberalizację mody: krakowskie bazary, "ciucholandy" (second-handy importowane z Zachodu), pierwsze prywatne sklepy odzieżowe. Młodzież ubrana w kolorowe dresy, militaria i elementy punk – mimo szarości systemu – budowała własną estetykę.`,
    resources: [
      {
        id: 'moda-1',
        title: 'Fotografie mody PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20mody',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie i czasopisma modowe z okresu PRL.',
        year: 1955,
        downloadable: true,
      },
      {
        id: 'moda-2',
        title: 'Kroniki filmowe – moda i styl życia PRL',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20moda',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne materiały filmowe dokumentujące styl życia i ubiór w PRL.',
        year: 1960,
      },
      {
        id: 'moda-3',
        title: 'Prasa kobieca z okresu PRL – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%20kobieca%20okresu',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane czasopisma kobiece: Kobieta i Życie, Uroda, Przyjaciółka – z poradami mody.',
        year: 1950,
        downloadable: true,
      },
    ],
    relatedIds: ['zycie-codzienne', 'pewex', 'muzyka-rockowa', 'dzieci-prl', 'kartki-prl'],
  },

  {
    id: 'kuchnia-prl',
    title: 'Kuchnia i jedzenie w PRL',
    subtitle: 'Kotlet schabowy, flaczki i niedobory – przy stole Polski Ludowej',
    category: 'społeczeństwo',
    tags: ['kuchnia', 'jedzenie', 'gotowanie', 'niedobory', 'bary mleczne', 'wędliny', 'bieda', 'zupa'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Kuchnia PRL-owska kształtowała się między tradycją kulinarną a realiami niedoboru. Kotlet schabowy, bigos, flaczki i żurek stały się symbolami epoki. Bary mleczne karmiły tysiące za grosze. Niedobory mięsa i kartki wyzwoliły kreatywność kulinarną Polaków.',
    content: `## Niedobór jako kulinarny kontekst

Kuchnia PRL rozwijała się w warunkach chronicznego niedoboru. Mięso było towarem reglamentowanym lub trudno dostępnym; w kolejkach stano po kiełbasę i szynkę od świtu. Polki nauczyły się zastępować mięso podrobami, gotować "coś z niczego" i maksymalnie wykorzystywać każdy składnik.

## Bar mleczny – instytucja narodu

Bary mleczne – dotowane przez państwo jadłodajnie serwujące dania bez mięsa (naleśniki, pierogi ruskie, zupy, kopytka) – były karmicielami studentów, robotników i emerytów. Obiad za kilka złotych był dostępny dla każdego. Bary mleczne funkcjonują w Polsce do dziś jako sentymentalna instytucja.

## Dania ikoniczne

Kuchnia PRL stworzyła swój kanon: kotlet schabowy z ziemniakami i zasmażaną kapustą, żurek z jajkiem, flaki wołowe, bigos, barszcz z uszkami, kopytka, pierogi. Na niedzielny obiad gotowało się rosół z kury przez pół dnia. Ryba była obowiązkowa w piątki – karp i śledź święciły triumfy.

## Deficytowe rarytasy

Kawa i kakao były luksusem – serwowano "kawę zbożową" (inka). Czekolada, cytrusy (mandarynki na Boże Narodzenie!) i bananami były towarami chwilowymi – gdy się pojawiały w sklepie, kolejka ustawiała się błyskawicznie. Zachodnią kawę i kakao można było kupić w Pewexie.

## Domowa produkcja

Polacy prowadzili intensywną produkcję domową: przetwory, dżemy, pikliki, nalewki, domowe wyroby wędliniarskie. Działka rekreacyjna z warzywnikiem była bezcenna – uzupełniała sklepowe niedobory. Tradycja "robienia zapasów" przetrwała jako nawyk u starszych Polaków.`,
    resources: [
      {
        id: 'kuchnia-1',
        title: 'Książki kucharskie PRL – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Ksi%C4%85%C5%BCki%20kucharskie',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane książki kucharskie i poradniki gospodarcze z okresu PRL.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'kuchnia-2',
        title: 'Kroniki filmowe – sklepy i bary w PRL',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20sklepy',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne materiały filmowe dokumentujące handel żywnością i bary w PRL.',
        year: 1960,
      },
      {
        id: 'kuchnia-3',
        title: 'Prasa kobieca – przepisy i porady kulinarne PRL',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%20kobieca%20przepisy',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane czasopisma z przepisami i poradami kulinarnymi z okresu PRL.',
        year: 1955,
        downloadable: true,
      },
    ],
    relatedIds: ['zycie-codzienne', 'kartki-prl', 'wies-prl', 'kobiety-prl', 'wczasy-fwp'],
  },

  {
    id: 'kino-moralnego-niepokoju',
    title: 'Kino moralnego niepokoju',
    subtitle: 'Zanussi, Holland, Kieślowski – polskie kino lat 70. pyta o sumienie',
    category: 'kultura',
    tags: ['kino moralnego niepokoju', 'Zanussi', 'Holland', 'Kieślowski', 'Bugajski', 'lata 70', 'etyka', 'system'],
    yearStart: 1975,
    yearEnd: 1981,
    summary: 'Kino moralnego niepokoju (ok. 1975–1981) to nurt filmowy zadający pytania o odpowiedzialność moralną jednostki uwikłanej w system. Filmy Zanussiego, Holland, Kieślowskiego i Bugajskiego pokazywały Polskę bez retuszu – i zdobyły uznanie na festiwalach zachodnich.',
    content: `## Geneza nurtu

Po "erze Gierka" – optymizmie i modernizacji lat 70. – polskie kino zaczęło zadawać pytania niewygodne dla systemu: czy można być uczciwym w nieuczciwym środowisku? Co oznacza sukces zawodowy, gdy wymaga kompromisów moralnych? Skąd bierze się konformizm? Filmy były dopuszczane przez cenzurę – o ile nie atakowały systemu wprost.

## Krzysztof Zanussi

Zanussi (ur. 1939) to najbardziej intelektualny przedstawiciel nurtu. "Struktura kryształu" (1969), "Iluminacja" (1973), "Barwy ochronne" (1976), "Constans" (1980) – filmy filozoficzne, zadające pytania o sens życia, karierę i etykę. Wykształcony fizyk i filozof, dialog z kulturą zachodnią.

## Agnieszka Holland

Holland (ur. 1948) – dziś jedna z najważniejszych reżyserek europejskich – debiutowała w nurcie kina moralnego. "Aktorzy prowincjonalni" (1979) to portret środowiska teatralnego w małym mieście – i metafora konformizmu.

## Ryszard Bugajski – "Przesłuchanie"

Najodważniejszy film nurtu: "Przesłuchanie" (1982) Ryszarda Bugajskiego – historia kobiety więzionej i terroryzowanej przez UB w czasach stalinizmu – był tak radykalny, że nie wszedł do kin. Nagrany na kasetach VHS, krążył w podziemiu. Po 1989 r. wszedł do oficjalnego obiegu, gdy Polska już wiedziała, czym była bezpieka.

## Zakończenie nurtu

Stan wojenny 1981 r. zakończył nurt – część twórców wyemigrowała (Holland), innych dotknęły represje. Lecz pytania, które kino moralnego niepokoju zadało, pozostały aktualne.`,
    resources: [
      {
        id: 'kmn-1',
        title: 'Filmy kina moralnego niepokoju – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=kino+moralnego+niepokoju',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne filmy nurtu kina moralnego niepokoju dostępne w cyfrowym archiwum.',
        year: 1975,
      },
      {
        id: 'kmn-2',
        title: 'Plakaty i materiały prasowe – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Plakaty%20prasowe',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane plakaty filmowe i recenzje z okresu kina moralnego niepokoju.',
        year: 1976,
        downloadable: true,
      },
      {
        id: 'kmn-3',
        title: 'Akta cenzury – filmy lat 70. i 80.',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=cenzury%20filmy%20lat',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Komisji Kolaudacyjnej dotyczące filmów lat 70. i 80.',
        year: 1975,
      },
    ],
    relatedIds: ['kino-prl', 'kiesklowski', 'wajda', 'cenzura-prl', 'stan-wojenny'],
  },

  {
    id: 'polacy-na-emigracji',
    title: 'Polska emigracja na Zachodzie',
    subtitle: 'Polonia, rząd londyński i polskie wyspy na Zachodzie',
    category: 'społeczeństwo',
    tags: ['emigracja', 'Polonia', 'Londyn', 'Chicago', 'Anders', 'rząd emigracyjny', 'kultura', 'diaspora'],
    yearStart: 1939,
    yearEnd: 1989,
    summary: 'Polska emigracja na Zachodzie – od żołnierzy Andersa po uciekinierów stanu wojennego – tworzyła żywą diasporę zachowującą kulturę i język. Polonia w USA (Chicago, Nowy Jork), Wielkiej Brytanii i Francji wspierała kraj finansowo, politycznie i kulturalnie.',
    content: `## Fale emigracji

Polska diaspora zachodnia tworzyła się w kilku falach:
- **1939–1945**: żołnierze, dyplomaci i cywile uciekający przed Niemcami i Sowietami
- **1945–1947**: żołnierze Armii Andersa i pracownicy rządu emigracyjnego, którzy nie wrócili
- **1956–1960**: emigracja "październikowa" – Żydzi polscy i inteligencja
- **1968–1970**: emigracja "marcowa" – głównie Żydzi, intelektualiści
- **1980–1989**: emigracja solidarnościowa i ekonomiczna (ok. 1 mln osób)

## Wielka Polonia

Polonia w USA liczyła w szczytowym okresie ok. 10 mln osób. Chicago z dzielnicą Jackowo (Polish Downtown) było stolicą Polonii. Organizacje polonijne – Kongres Polonii Amerykańskiej, ZHP poza granicami, parafie polskie – utrzymywały kulturę i język. Polacy w Ameryce systematycznie wspierali kraj finansowo i politycznie (lobbing w Kongresie).

## Kultura emigracyjna

Emigracja wydała wybitnych twórców: Witold Gombrowicz (Argentyna), Czesław Miłosz (USA), Józef Wittlin (USA). "Kultura" paryska Jerzego Giedroycia była najważniejszym pismem emigracyjnym. Londyńskie "Wiadomości" i inne tytuły utrzymywały polskie życie literackie poza cenzurą.

## Wsparcie dla Solidarności

W latach 80. emigracja zachodnia aktywnie wspierała "Solidarność": zbierała fundusze, organizowała pomoc materialną (leki, sprzęt poligraficzny), lobbowała rządy zachodnie. Radio Wolna Europa nadawało z Monachium. Wstrząs stanu wojennego zjednoczył emigrację wokół sprawy wolnej Polski.`,
    resources: [
      {
        id: 'polonial-1',
        title: 'Prasa emigracyjna – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%20emigracyjna',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane pisma emigracyjne: Wiadomości, Kultura paryska i inne tytuły.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'polonial-2',
        title: 'Akta emigracji polskiej – Archiwa Państwowe',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=emigracji%20polskiej%20Archiwa',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące polskiej emigracji zachodniej.',
        year: 1945,
      },
      {
        id: 'polonial-3',
        title: 'Materiały edukacyjne IPN – emigracja polska',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=emigracja',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o polskiej emigracji zachodniej i jej roli w historii.',
        year: 2018,
        downloadable: true,
      },
    ],
    relatedIds: ['rzad-emigracyjny', 'kultura-paryz', 'anders', 'radio-wolna-europa', 'emigracja-1968'],
  },

  {
    id: 'nostalgia-prl',
    title: 'Nostalgia za PRL',
    subtitle: 'Ostalgia po polsku – między pamięcią a mitem',
    category: 'społeczeństwo',
    tags: ['nostalgia', 'PRL', 'ostalgia', 'pamięć', 'muzea', 'sentyment', 'popkultura', 'transformacja'],
    yearStart: 1989,
    yearEnd: 2025,
    summary: 'Po 1989 r. część Polaków zaczęła wspominać PRL z sentymentem – nie politykę i represje, lecz stabilność, wspólnotowość i prostotę życia. Zjawisko to – "ostalgia" po polsku – jest złożone: miesza autentyczną tęsknotę z selektywną pamięcią i popkulturowym recyclingiem.',
    content: `## Skąd tęsknota?

Transformacja 1989–1990 przyniosła wolność – i szok ekonomiczny. Bezrobocie, likwidacja zakładów pracy, wzrost nierówności, utrata poczucia bezpieczeństwa socjalnego. Dla wielu – szczególnie starszych i gorzej wykształconych – "było gorzej, ale przynajmniej było pewniej". Praca, mieszkanie i podstawowa opieka zdrowotna były zagwarantowane.

## Co się pamięta – a co nie

Nostalgia za PRL jest selektywna. Pamięta się: lody Bambino, wakacje pod namiotem nad Bałtykiem, Bolka i Lolka, bary mleczne, sąsiedzką solidarność w kolejkach. Zapomina się lub bagatelizuje: brak wolności, inwigilację, represje, szarość i niedobory. Pamięć grupowa zawsze filtruje.

## Muzea i popkultura

Zjawisko nostalgii znalazło wyraz w kulturze: muzea PRL-u (m.in. w Krakowie), restauracje serwujące "peerelowski klimat", sklepy sprzedające reprinty plakatów i opakowań z epoki. Seriale i filmy osadzone w realiach PRL ("Ranczo", "Czas honoru") cieszą się dużą popularnością.

## PRL w polityce

Nostalgia za PRL jest też instrumentalizowana politycznie: partie lewicowe chętnie odwołują się do "sprawiedliwości społecznej" systemu, prawica traktuje PRL jako argument przeciw lewicy. Ocena PRL pozostaje w Polsce emocjonalnie naładowanym tematem.

## Badania historyczne a pamięć

Historycy wskazują, że nostalgia za PRL jest specyficzna dla pokolenia dorosłości w tamtych czasach – i maleje wśród młodszych, wychowanych po 1989 r. Zarazem rośnie akademickie zainteresowanie historią codzienności PRL, wykraczające poza narrację represji.`,
    resources: [
      {
        id: 'nostalgia-1',
        title: 'Materiały edukacyjne IPN – pamięć o PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=pami%C4%99%C4%87',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o polityce pamięci i społecznym postrzeganiu okresu PRL po 1989 r.',
        year: 2020,
        downloadable: true,
      },
      {
        id: 'nostalgia-2',
        title: 'Kroniki i filmy z PRL – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmy',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne materiały filmowe z okresu PRL – źródło nostalgii i dokumentacja historyczna.',
        year: 1960,
      },
      {
        id: 'nostalgia-3',
        title: 'Archiwum fotografii PRL – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=fotografii',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie życia codziennego w PRL – materiał historyczny i nostalgiczny.',
        year: 1955,
        downloadable: true,
      },
    ],
    relatedIds: ['zycie-codzienne', 'kuchnia-prl', 'animacja-prl', 'wczasy-fwp', 'sport-prl'],
  },

  {
    id: 'tajni-wspolpracownicy',
    title: 'Tajni współpracownicy SB',
    subtitle: 'Sieć donosicieli – TW, agenci i prowokatorzy bezpieki',
    category: 'represje',
    tags: ['TW', 'tajny współpracownik', 'donosiciel', 'SB', 'inwigilacja', 'lustracja', 'teczki', 'agent'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'SB i UB budowały rozległe sieci tajnych współpracowników (TW) we wszystkich dziedzinach życia – zakładach pracy, uczelniach, Kościele, opozycji. Po 1989 r. ujawnienie "teczek" wstrząsnęło polskim życiem publicznym.',
    content: `## Struktura sieci agenturalnej

Urząd Bezpieczeństwa, a następnie Służba Bezpieczeństwa budowały sieć agentury od pierwszych dni PRL. Tajni współpracownicy (TW) – znani też jako "informatorzy", "kontakty operacyjne", "agenci" – byli werbowani we wszystkich środowiskach: fabrykach, uczelniach, parafiach, redakcjach, środowiskach artystycznych i opozycyjnych.

## Metody werbunku

SB werbowała na różne sposoby: szantażem (materiały kompromitujące, groźba aresztu), przekonywaniem ideologicznym, korzyściami materialnymi (lepsze mieszkanie, paszport, awans), a w przypadku więźniów – obietnicą złagodzenia wyroku. Wielu TW działało pod przymusem; część z własnej woli. Podpisywali zobowiązanie do współpracy i przyjmowali pseudonimy.

## Skala infiltracji

W szczytowym okresie (lata 70.–80.) SB posiadała ok. 80–100 tys. TW w całym kraju. Infiltrowano środowiska artystyczne (TW "Poeta" w świecie literackim), Kościół (TW w seminariach i parafiach), struktury "Solidarności" (agenci w zarządach regionalnych) i dyplomację. Niektóre osoby szpiegowały swoich najbliższych przyjaciół.

## Ujawnienie po 1989 r.

Po 1989 r. archiwa SB trafiły częściowo do IPN. Ujawniono setki nazwisk byłych TW – wśród nich polityków, duchownych, aktorów, dziennikarzy. Proces lustracji był burzliwy i niepełny: część teczek zniszczono w 1989–1990 r. (tzw. "niszczenie akt" przez ostatnich funkcjonariuszy SB), część materiałów kwestionowano jako sfałszowane.

## Dziedzictwo

Kwestia TW do dziś dzieli polskie społeczeństwo. Jedni domagają się pełnego rozliczenia; inni wskazują, że wiele osób werbowano pod przymusem i nie należy ich traktować jak świadomych zdrajców. Debata o "teczkach" jest nieodłączną częścią polskiej polityki historycznej.`,
    resources: [
      {
        id: 'tw-1',
        title: 'Katalog IPN – tajni współpracownicy',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Katalog%20tajni%20wsp%C3%B3%C5%82pracownicy',
        source: 'Instytut Pamięci Narodowej',
        description: 'Inwentarz zasobów IPN z dokumentami dotyczącymi sieci agenturalnej SB.',
        year: 1950,
      },
      {
        id: 'tw-2',
        title: 'Materiały edukacyjne IPN – inwigilacja',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=inwigilacja',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o metodach pracy operacyjnej SB i systemie tajnych współpracowników.',
        year: 2015,
        downloadable: true,
      },
      {
        id: 'tw-3',
        title: 'Akta operacyjne SB – zasoby archiwalne',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=operacyjne',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące metod werbunku i pracy z siecią tajnych współpracowników.',
        year: 1960,
      },
    ],
    relatedIds: ['sb', 'ub', 'kosciol-prl', 'solidarnosc', 'represje-polityczne'],
  },

  {
    id: 'deportacje',
    title: 'Deportacje Polaków na Wschód',
    subtitle: 'Sybir, łagry i zsyłki 1940–1941 – sowiecka zbrodnia na Polakach',
    category: 'represje',
    tags: ['deportacje', 'Sybir', 'ZSRR', 'łagry', 'zsyłki', '1940', '1941', 'Kresy', 'NKWD'],
    yearStart: 1939,
    yearEnd: 1956,
    summary: 'W latach 1940–1941 sowieckie NKWD deportowało w głąb ZSRR setki tysięcy Polaków z Kresów Wschodnich – oficerów, policjantów, urzędników, nauczycieli i ich rodziny. Zsyłki na Sybir, do Kazachstanu i Azji Środkowej pochłonęły dziesiątki tysięcy ofiar.',
    content: `## Kontekst: sowiecka okupacja Kresów

17 września 1939 r. ZSRR zaatakował Polskę od wschodu. Kresy Wschodnie (wschodnia Polska z Lwowem, Wilnem, Pińskiem) znalazły się pod sowiecką okupacją. NKWD przystąpiło do systematycznej likwidacji polskich elit i struktur państwowych.

## Cztery fale deportacji

Deportacje przeprowadzono w czterech głównych falach:
- **Luty 1940** – ok. 220–240 tys. osób: rodziny oficerów, urzędnicy, osadnicy wojskowi i leśnicy
- **Czerwiec 1940** – ok. 320 tys. osób: rodziny aresztowanych i "zbiegłych za granicę"
- **Czerwiec 1941** – ok. 300 tys. osób: nowa fala aresztowań tuż przed atakiem Niemiec na ZSRR

Łączna liczba deportowanych: szacunki wahają się od 320 tys. do ok. 1 mln osób, w zależności od metodologii.

## Warunki zsyłki

Deportowanych ładowano do bydlęcych wagonów i wieziono tygodniami w mróz i głód. Miejsca zsyłki: obwód archangielski, Syberia, Kazachstan, Uzbekistan. Praca ponad siły w łagrach, kołchozach i przy wyrębie lasów. Szacuje się, że w wyniku wyczerpania, głodu, chorób i mrozu zginęło 30–50% deportowanych.

## Armia Andersa i powrót

Po ataku Niemiec na ZSRR (czerwiec 1941) Stalin uwolnił część Polaków, by wstąpili do armii gen. Andersa. Przez Bliski Wschód dotarli do Włoch i walczyli pod Monte Cassino. Reszta deportowanych pozostała w ZSRR; część wróciła do Polski po 1945 r. lub 1956 r.

## Pamięć w PRL

Temat deportacji był w PRL przemilczany – zbrodnie sowieckie podlegały cenzurze. Rodziny deportowanych nie mogły mówić otwarcie o swoich przeżyciach. Dopiero po 1989 r. Polska uzyskała pełny dostęp do sowieckich archiwów i możliwość upamiętnień.`,
    resources: [
      {
        id: 'dep-1',
        title: 'Materiały edukacyjne IPN – deportacje 1940–1941',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=deportacje%201940%201941',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o sowieckich deportacjach Polaków w latach 1940–1941.',
        year: 2020,
        downloadable: true,
      },
      {
        id: 'dep-2',
        title: 'Akta NKWD i dokumenty deportacyjne – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=NKWD%20deportacyjne',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty dotyczące deportacji Polaków na Wschód z zasobów IPN.',
        year: 1940,
      },
      {
        id: 'dep-3',
        title: 'Relacje i fotografie deportowanych – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Relacje%20fotografie%20deportowanych',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Fotografie i pamiętniki deportowanych Polaków z lat 1940–1956.',
        year: 1940,
        downloadable: true,
      },
    ],
    relatedIds: ['katyn', 'zolnierze-wykletci', 'akcja-wisla', 'represje-polityczne', 'pgwn'],
  },

  {
    id: 'konstytucja-prl',
    title: 'Konstytucja PRL 1952',
    subtitle: 'Stalinowska ustawa zasadnicza – prawo na służbie dyktatury',
    category: 'polityka',
    tags: ['konstytucja', 'prawo', '1952', 'Bierut', 'PZPR', 'Sejm', 'Rada Państwa', 'stalinizm'],
    yearStart: 1952,
    yearEnd: 1989,
    summary: 'Konstytucja PRL uchwalona 22 lipca 1952 r. była wzorowana na stalinowskiej konstytucji ZSRR z 1936 r. Formalnie gwarantowała prawa obywatelskie, w praktyce legitymizowała monopol PZPR i służyła jako fasada systemu totalitarnego.',
    content: `## Geneza i uchwalenie

Prace nad konstytucją trwały od 1948 r. pod kierownictwem Bolesława Bieruta. Projekt konsultowano z Moskwą; głównym sowieckim doradcą był Andriej Wyszynski. Konstytucję uchwalono 22 lipca 1952 r. – w rocznicę Manifestu PKWN – i od tej daty zmieniono oficjalną nazwę państwa z "Rzeczpospolita Polska" na "Polska Rzeczpospolita Ludowa".

## Treść i struktura

Konstytucja deklarowała: władzę ludu pracującego, kierowniczą rolę klasy robotniczej, sojusz z ZSRR. Gwarantowała prawa obywatelskie (wolność słowa, zgromadzeń, sumienia), lecz uzależniała je od "interesów ludu pracującego" – co w praktyce oznaczało pełną uznaniowość władzy. Najwyższą władzę sprawował Sejm (jednoizbowy), a między sesjami – Rada Państwa.

## Fikcja parlamentarna

Sejm PRL zbierał się kilka razy do roku i głosował jednomyślnie – lub prawie jednomyślnie – nad wszelkimi projektami rządowymi. Kandydaci na posłów byli wyłaniani przez Front Jedności Narodu (koalicję partii satelickich PZPR). Obywatele mogli głosować tylko na jedną, uzgodnioną listę.

## Nowelizacje

Konstytucję nowelizowano kilkakrotnie. Najważniejsza nowelizacja: luty 1976 r. – wpisano do konstytucji "kierowniczą rolę PZPR" i "nienaruszalność sojuszu z ZSRR". Protestowali intelektualiści (List 59, List 101). Poprawki stały się katalizatorem dla powstania KOR.

## Koniec epoki

Konstytucja PRL obowiązywała do 1989 r. – nowelizacje Okrągłego Stołu przekształciły ją w akt przejściowy. Nową Konstytucję RP uchwalono dopiero w 1997 r.`,
    resources: [
      {
        id: 'konst-1',
        title: 'Tekst Konstytucji PRL 1952 – ISAP',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19520330232',
        source: 'Internetowy System Aktów Prawnych – Sejm RP',
        description: 'Pełny tekst Konstytucji Polskiej Rzeczypospolitej Ludowej z 22 lipca 1952 r.',
        year: 1952,
        downloadable: true,
      },
      {
        id: 'konst-2',
        title: 'Materiały edukacyjne IPN – prawo PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=prawo',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o prawie konstytucyjnym PRL i jego stosowaniu w praktyce.',
        year: 2017,
        downloadable: true,
      },
      {
        id: 'konst-3',
        title: 'Prasa z 1952 r. o uchwaleniu konstytucji',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Prasa%201952%20uchwaleniu',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety z lipca 1952 r. relacjonujące uchwalenie konstytucji.',
        year: 1952,
        downloadable: true,
      },
    ],
    relatedIds: ['bierut', 'pzpr', 'manifest-pkwn', 'kor', 'wybory-1947'],
  },

  {
    id: 'dzieci-prl',
    title: 'Dzieci i młodzież w PRL',
    subtitle: 'Pionierzy, harcerze i lekcje ideologii – wychowanie w służbie systemu',
    category: 'społeczeństwo',
    tags: ['dzieci', 'młodzież', 'szkoła', 'ZHP', 'ZSMP', 'pionierzy', 'ideologia', 'wychowanie', 'Związek Harcerstwa'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'PRL starał się kształtować "nowego człowieka" już od dzieciństwa. Szkoły, organizacje młodzieżowe (ZMP, ZHP, ZSMP) i kultura dziecięca były nasycone ideologią. Jednak wiele pokoleń wyrastało w buncie wobec systemu lub z dystansem do jego wartości.',
    content: `## Szkoła – fabrika nowych ludzi

Edukacja była w PRL głównym narzędziem formowania ideologicznego. Podręczniki pełne były treści marksistowskich, historię reinterpretowano na korzyść "sił postępowych", a literaturę dobierano pod kątem "słuszności klasowej". Od lat 50. obowiązkowe były lekcje języka rosyjskiego. Katecheza została usunięta ze szkół w 1961 r.

## ZMP i pionierzy (1948–1957)

Związek Młodzieży Polskiej (ZMP) – wzorowany na sowieckim Komsomole – był masową organizacją dla młodzieży od ok. 15 lat. Młodszym dzieciom proponowano "Pionierów" (1948–1956) – odpowiednik sowieckich pionierów z czerwonymi chustami. Po 1956 r. obie organizacje rozwiązano jako symbol stalinizmu.

## ZHP i polityka

Związek Harcerstwa Polskiego przetrwał, lecz był systematycznie upolityczniany. W 1973 r. przemianowano go na HSPS (Harcerska Służba Polsce Socjalistycznej) – próba ideologicznego przykrojenia harcerstwa. Reforma się nie powiodła i wróciło ono do nazwy ZHP, ale partyjny nadzór pozostał.

## ZSMP i lata 80.

Związek Socjalistycznej Młodzieży Polskiej (ZSMP) był organizacją dla starszej młodzieży – wymagał lojalności wobec PZPR, dawał w zamian ułatwiony dostęp na studia i ścieżkę kariery. Przynależność była formalnie dobrowolna, lecz w praktyce wywierano presję. NZS ("Solidarność" akademicka) był jego opozycyjną odpowiedzią.

## Kultura dziecięca

Polska animacja i literatura dziecięca PRL stworzyły wiele wybitnych dzieł – Bolek i Lolek, Miś Uszatek, Reksio, "Akademia Pana Kleksa" Brzechwy. Kultura popularna dla dzieci była relatywnie wolna od ideologii, skupiając się na przygodzie i wartościach ogólnoludzkich. To właśnie ta warstwa PRL-owskiej kultury budzi dziś sentyment.`,
    resources: [
      {
        id: 'dzieci-1',
        title: 'Podręczniki szkolne PRL – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Podr%C4%99czniki%20szkolne',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane podręczniki szkolne z okresu PRL – historia, język polski, wiedza o społeczeństwie.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'dzieci-2',
        title: 'Kroniki filmowe – organizacje młodzieżowe',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20organizacje',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne nagrania kronik filmowych dokumentujące działalność ZMP, ZHP i ZSMP.',
        year: 1952,
      },
      {
        id: 'dzieci-3',
        title: 'Akta organizacji młodzieżowych',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=organizacji%20m%C5%82odzie%C5%BCowych',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty ZMP, ZHP i ZSMP z zasobów Archiwów Państwowych.',
        year: 1948,
      },
    ],
    relatedIds: ['edukacja-prl', 'propaganda-prl', 'nzs', 'zycie-codzienne', 'kobiety-prl'],
  },

  {
    id: 'pilecki',
    title: 'Rotmistrz Witold Pilecki',
    subtitle: 'Ochotnik do Auschwitz – bohater zamordowany przez komunistów (1901–1948)',
    category: 'osoby',
    tags: ['Pilecki', 'Auschwitz', 'AK', 'raport', 'wyrok śmierci', 'UB', 'bohater', 'obozy'],
    yearStart: 1901,
    yearEnd: 1948,
    summary: 'Witold Pilecki to jeden z największych bohaterów II wojny światowej: dobrowolnie dał się aresztować i trafić do Auschwitz, by stamtąd organizować ruch oporu i wysyłać raporty o Zagładzie. Po wojnie zamordowany przez UB jako "zdrajca".',
    content: `## Dobrowolne wejście do Auschwitz

Witold Pilecki (ur. 13 V 1901 w Ołońcu) był oficerem kawalerii i żołnierzem AK. W 1940 r. zaproponował wywiadowi AK niezwykłą misję: dobrowolnie da się aresztować przez Niemców, trafi do Auschwitz i zorganizuje tam ruch oporu. Zgodę uzyskał. 19 września 1940 r. wszedł w zasadzkę i trafił do obozu jako "Tomasz Serafiński".

## W piekle Auschwitz

Przez ponad 2,5 roku Pilecki działał w obozie: organizował Związek Organizacji Wojskowej, zbierał dane o warunkach i zbrodniach, wysyłał raporty przez kurierów. Jego meldunki – znane jako "Raporty Witolda" – były jednymi z pierwszych i najbardziej szczegółowych dokumentów o Holokauście i masowych mordach, jakie dotarły do Zachodu. Wiosną 1943 r. uciekł z Auschwitz.

## Powstanie Warszawskie i powojenne losy

Pilecki walczył w Powstaniu Warszawskim. Po kapitulacji trafił do obozu jenieckiego. Po wyzwoleniu nie wrócił od razu do Polski – zbierał materiały wywiadowcze dla rządu emigracyjnego. W 1945 r. wrócił do kraju, by kontynuować pracę dla podziemia.

## Aresztowanie i proces

W 1947 r. UB aresztowało Pileckiego. Po brutalnym śledztwie, w którym stosowano tortury, oskarżono go o szpiegostwo na rzecz Zachodu, nielegalne posiadanie broni i działalność wywrotową. Wyrok: kara śmierci. 25 maja 1948 r. rozstrzelany na Mokotowie. Jego ciało wrzucono do zbiorowej mogiły, której lokalizacja do dziś nie jest pewna.

## Rehabilitacja i pamięć

Pilecki został zrehabilitowany dopiero po 1989 r. W 2006 r. pośmiertnie odznaczono go Orderem Orła Białego. Jego historia – przez dekady przemilczana w PRL – jest dziś symbolem heroizmu i ofiary polskiego podziemia.`,
    resources: [
      {
        id: 'pilecki-1',
        title: 'Akta procesu Pileckiego – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=procesu%20Pileckiego',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty śledztwa i procesu sądowego rotmistrza Witolda Pileckiego.',
        year: 1947,
      },
      {
        id: 'pilecki-2',
        title: 'Materiały edukacyjne IPN – Pilecki',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Pilecki',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o życiu i misji rotmistrza Witolda Pileckiego.',
        year: 2020,
        downloadable: true,
      },
      {
        id: 'pilecki-3',
        title: 'Raporty Witolda – dokumenty archiwalne',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Raporty%20Witolda',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Zachowane kopie raportów wysyłanych z Auschwitz i dokumenty powojenne.',
        year: 1940,
        downloadable: true,
      },
    ],
    relatedIds: ['zolnierze-wykletci', 'represje-polityczne', 'ub', 'katyn', 'deportacje'],
  },

  {
    id: 'socrealizm',
    title: 'Socrealizm w sztuce i architekturze',
    subtitle: 'Sztuka na rozkaz – realizm socjalistyczny jako narzędzie propagandy',
    category: 'kultura',
    tags: ['socrealizm', 'architektura', 'malarstwo', 'rzeźba', 'propaganda', 'Pałac Kultury', 'MDM', 'sztuka'],
    yearStart: 1949,
    yearEnd: 1956,
    summary: 'Realizm socjalistyczny – obowiązująca od 1949 r. doktryna artystyczna – nakazywał twórcom tworzyć "zrozumiałe dla ludu" dzieła wysławiające partię, robotników i ZSRR. Zakończył się wraz z "odwilżą" 1956 r., pozostawiając trwały ślad w architekturze polskich miast.',
    content: `## Doktryna i jej narzucenie

Socrealizm jako obowiązkowy styl artystyczny ogłoszono w Polsce na Zjeździe Plastyków w Katowicach w 1950 r. i na Zjeździe Literatów w Szczecinie w 1949 r. Artyści, którzy odmawiali dostosowania się, tracili możliwość wystawiania, publikowania i zarabiania. Wielu wybrało samocenzurę lub emigrację wewnętrzną.

## Malarstwo i rzeźba

Socrealistyczne obrazy przedstawiały przodowników pracy, budowniczych socjalizmu, portety przywódców, sceny z życia robotniczego – wszystko w stylu akademickiego realizmu, z bohaterami o atletycznych sylwetkach i rumianymi twarzami. Wystawy zalewano dziełami Aleksandra Kobzdeja ("Podaj cegłę"), Wojciecha Fangora i innych – choć część z tych artystów po 1956 r. odciągnęła się od doktryny.

## Architektura – socjalistyczny klasycyzm

Socrealizm w architekturze oznaczał monumentalizm, klasyczne detale (pilastry, gzymsy, attyki) i ideologiczną symbolikę. Najbardziej spektakularnym przykładem jest Pałac Kultury i Nauki w Warszawie (dar Stalina, 1952–1955). W tym stylu zaprojektowano całą ul. Marszałkowską (MDM) i wiele dzielnic mieszkaniowych w Nowej Hucie.

## Muzyka i literatura

W muzyce socrealizm wymagał melodyjności, zrozumiałości i "optymizmu" – awangarda była tępiona. Komitet Centralny wydawał opinie o konkretnych dziełach. Literatura musiała przedstawiać "pozytywnych bohaterów" – pracowników wiernych partii. Powieści produkcyjne ("traktory zamiast miłości") były obowiązkowym gatunkiem.

## Odwilż i dziedzictwo

Po śmierci Stalina (1953) i XX Zjeździe KPZR (1956) socrealizm zaczął się kruszyć. W Polsce "odwilż" kulturalna była wyraźna – artyści odetchnęli, jazz stał się legalny, awangarda powróciła. Architektoniczne relikty socrealizmu – MDM, PKiN, osiedla z lat 50. – stoją do dziś, będąc teraz zabytkami.`,
    resources: [
      {
        id: 'socreal-1',
        title: 'Sztuka socrealistyczna – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Sztuka%20socrealistyczna',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Cyfrowe zbiory plakatu, malarstwa i grafiki z okresu socrealizmu 1949–1956.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'socreal-2',
        title: 'Materiały edukacyjne IPN – kultura PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=kultura',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o polityce kulturalnej i socrealizmie w Polsce Ludowej.',
        year: 2016,
        downloadable: true,
      },
      {
        id: 'socreal-3',
        title: 'Kroniki filmowe – budowa MDM i PKiN',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20budowa',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Propagandowe kroniki filmowe dokumentujące budowę socrealistycznych osiedli.',
        year: 1952,
      },
    ],
    relatedIds: ['palac-kultury', 'nowa-huta', 'propaganda-prl', 'kino-prl', 'bierut'],
  },

  {
    id: 'sluzba-zdrowia-prl',
    title: 'Służba zdrowia w PRL',
    subtitle: 'Bezpłatna opieka medyczna – mit i rzeczywistość',
    category: 'społeczeństwo',
    tags: ['służba zdrowia', 'szpital', 'lekarz', 'bezpłatna opieka', 'kolejki', 'leki', 'reforma', 'zdrowie'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'PRL zbudował system powszechnej, bezpłatnej opieki zdrowotnej – jeden z najważniejszych sukcesów społecznych. W praktyce oznaczał on chroniczne niedobory leków, przestarzały sprzęt, wielomiesięczne kolejki i łapówki dla lekarzy.',
    content: `## Nacjonalizacja i budowa systemu

Po 1945 r. władze PRL znacjonalizowały szpitale, przychodnie i apteki. Zbudowano sieć przychodni zakładowych (przy dużych fabrykach) i rejonowych. W ciągu 20 lat liczba lekarzy i szpitali wzrosła kilkakrotnie – to realny sukces: przed wojną dostęp do opieki medycznej był nierówny i drogi.

## Dekada Gierka – złoty okres

Lata 70. przyniosły boom w ochronie zdrowia: nowe szpitale, zachodnie wyposażenie kupowane za kredyty, wzrost liczby studentów medycyny. Polska wyeksportowała wielu lekarzy (m.in. do Libii w ramach kontraktów). System działał sprawnie – jak na warunki bloku wschodniego.

## Chroniczne słabości

Jednak przez cały okres PRL służba zdrowia cierpiała na niedobory. Leki znikały ze sklepów tak samo jak mięso; receptę na zachodnią penicylinę realizowano przez Pewex. Sprzęt techniczny szybko się starzał – tomografia komputerowa czy rezonans magnetyczny były w PRL rzadkością. Szpitale były przepełnione, a sale łazienkowe – brudne.

## Łapówki i "koperty"

Nieformalna gospodarka w służbie zdrowia kwitła. "Koperta" dla chirurga przed operacją, "upominek" dla pielęgniarki, "gratyfikacja" dla ordynatora – to niepisane zasady, bez których szanse na szybką i dobrą pomoc były małe. Korupcja wynikała z niskich płac personelu medycznego.

## Psychiatria jako narzędzie represji

Wzorem sowieckim SB używała psychiatrii jako narzędzia represji: dysydentów umieszczano w szpitalach psychiatrycznych (np. w Pruszkowie), diagnozując "powolną schizofrenię" jako chorobę osób niezgadzających się z systemem.`,
    resources: [
      {
        id: 'zdrowie-1',
        title: 'Kroniki filmowe – szpitale i ochrona zdrowia PRL',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20szpitale',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Propagandowe kroniki filmowe o sukcesach służby zdrowia w PRL.',
        year: 1955,
      },
      {
        id: 'zdrowie-2',
        title: 'Roczniki statystyczne GUS – dane o zdrowiu',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Roczniki%20statystyczne%20GUS',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane roczniki statystyczne z danymi o opiece zdrowotnej PRL.',
        year: 1960,
        downloadable: true,
      },
      {
        id: 'zdrowie-3',
        title: 'Akta Ministerstwa Zdrowia PRL',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Ministerstwa%20Zdrowia',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty ministerialne dotyczące organizacji i finansowania ochrony zdrowia.',
        year: 1950,
      },
    ],
    relatedIds: ['zycie-codzienne', 'kartki-prl', 'edukacja-prl', 'gierek', 'kobiety-prl'],
  },

  {
    id: 'teatr-prl',
    title: 'Teatr w PRL',
    subtitle: 'Grotowski, Kantor, Wajda – polska scena między cenzurą a arcydziełem',
    category: 'kultura',
    tags: ['teatr', 'Grotowski', 'Kantor', 'Wajda', 'Dejmek', 'cenzura', 'scena', 'Dziady', 'awangarda'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Polski teatr w PRL był polem nieustannej gry między cenzurą a artystyczną wolnością. Mimo ograniczeń wydał wybitnych twórców – Jerzego Grotowskiego, Tadeusza Kantora, Konrada Swinarskiego – i stał się przestrzenią zakodowanego oporu wobec systemu.',
    content: `## Teatr pod nadzorem

Cenzura i partyjny nadzór nad teatrem istniały przez cały okres PRL. Repertuar musiał być zatwierdzany przez stosowne wydziały kultury; teksty dramatyczne – przejść przez GUKPiW. Dyrektorzy teatrów byli obsadzani przez aparat partyjny. Mimo to teatr pozostał jedną z najbardziej wolnych przestrzeni kulturalnych PRL.

## Wielkie nazwiska

- **Jerzy Grotowski** (1933–1999) – twórca "teatru ubogiego" w Opolu i Wrocławiu; jego laboratorium teatralne zyskało światową sławę; w 1968 r. wyemigrował.
- **Tadeusz Kantor** (1915–1990) – reżyser i artysta plastyczny; założyciel Cricot 2 w Krakowie; jego "Umarła klasa" (1975) i "Wielopole, Wielopole" (1980) to arcydzieła teatru światowego.
- **Kazimierz Dejmek** (1924–2002) – dyrektor Teatru Narodowego; jego inscenizacja "Dziadów" Mickiewicza wywołała protesty z marca 1968 r.
- **Konrad Swinarski** (1929–1975) – wybitny reżyser krakowskiego Starego Teatru.

## "Dziady" i cenzura

Inscenizacja "Dziadów" Adama Mickiewicza w reżyserii Dejmka (1967/68) stała się politycznym wydarzeniem: publiczność reagowała żywiołowo na antyrosyjskie aluzje. Władze zakazały dalszych przedstawień – co stało się bezpośrednią iskrą Marca 1968.

## Teatr jako Ezopowy język

Reżyserzy nauczyli się mówić "między wierszami": klasyczne dramaty (Słowacki, Mickiewicz, szekspirowskie tragedie) były wystawiane tak, by publiczność odczytywała aktualne aluzje polityczne. Widownia reagowała owacjami na sceny symbolizujące opór. Cenzorzy często nie mogli interweniować bez kompromitowania władzy.`,
    resources: [
      {
        id: 'teatr-1',
        title: 'Nagrania spektakli PRL – NINATEKA',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Nagrania%20spektakli',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne nagrania spektakli teatralnych z okresu PRL, w tym realizacje telewizyjne.',
        year: 1955,
      },
      {
        id: 'teatr-2',
        title: 'Programy teatralne i recenzje – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Programy%20teatralne%20recenzje',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane programy teatralne, plakaty i recenzje z okresu PRL.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'teatr-3',
        title: 'Akta GUKPiW – cenzura teatralna',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=GUKPiW%20cenzura%20teatralna',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty cenzury teatralnej z zasobów Głównego Urzędu Kontroli Prasy.',
        year: 1950,
      },
    ],
    relatedIds: ['kino-prl', 'cenzura-prl', 'wajda', 'marzec-1968', 'kultura-paryz'],
  },

  {
    id: 'anders',
    title: 'Gen. Władysław Anders i Armia Andersa',
    subtitle: 'Z łagrów przez Persję na Monte Cassino (1892–1970)',
    category: 'osoby',
    tags: ['Anders', 'armia', 'Monte Cassino', 'II Korpus', 'Persja', 'deportacje', 'emigracja', 'Londyn'],
    yearStart: 1892,
    yearEnd: 1970,
    summary: 'Gen. Władysław Anders stworzył armię z polskich więźniów sowieckich łagrów i przeprowadził ją przez Persję, Irak i Włochy aż pod Monte Cassino. Zdobycie klasztoru 18 maja 1944 r. to jeden z najświetniejszych polskich czynów zbrojnych II wojny.',
    content: `## Jeniec sowieckich łagrów

Władysław Anders (ur. 11 VIII 1892 w Krośniewicach Błońskich) był oficerem kawalerii Wojska Polskiego. W kampanii wrześniowej 1939 r. ciężko ranny, trafił do sowieckiej niewoli. Przez prawie dwa lata więziony na Łubiance i w Moskwie – mimo tortur nie podpisał żadnej deklaracji współpracy.

## Formowanie armii (1941–1942)

Po ataku Niemiec na ZSRR (czerwiec 1941) Stalin zgodził się uwolnić polskich jeńców i pozwolić na formowanie polskiej armii pod dowództwem Andersa. Z łagrów, kołchozów i miejsc zsyłek napływały tysiące wyniszczonych Polaków i ich rodzin. Anders zorganizował ewakuację przez Persję (Iran) – łącznie ok. 116 tys. żołnierzy i cywilów opuściło ZSRR.

## Szlak bojowy

II Korpus Polski pod dowództwem Andersa przeszedł szlak bojowy przez:
- **Persję i Irak** (reorganizacja, wyposażenie w sprzęt brytyjski)
- **Egipt i Palestynę** (dalsze szkolenie)
- **Włochy** (1944–1945): kampania włoska, wzięcie Ankony, forsowanie rzeki Senio

## Monte Cassino

11–18 maja 1944 r. żołnierze Andersa zaatakowali twierdzę Monte Cassino – klucz do obrony Linii Gustawa i drogi na Rzym. Po czterech szturmach (trzy poprzednie alianckie zakończyły się klęską) Polacy 18 maja 1944 r. wciągnęli flagę na ruiny klasztoru. Zginęło ok. 900 polskich żołnierzy.

## Emigracja i PRL

Po wojnie Anders i żołnierze II Korpusu nie wrócili do Polski, którą rządziły sowieckie marionetki. Osiedlili się głównie w Wielkiej Brytanii. PRL pozbawiła Andersa obywatelstwa i odznaczeń. Zrehabilitowany pośmiertnie w 1989 r. Anders jest dziś symbolem polskiego czynu zbrojnego na Zachodzie.`,
    resources: [
      {
        id: 'anders-1',
        title: 'Materiały edukacyjne IPN – Anders i II Korpus',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Anders%20Korpus',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o gen. Andersie, Armii Andersa i kampanii włoskiej.',
        year: 2019,
        downloadable: true,
      },
      {
        id: 'anders-2',
        title: 'Fotografie II Korpusu – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20Korpusu',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie żołnierzy Armii Andersa i kampanii włoskiej.',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'anders-3',
        title: 'Akta II Korpusu – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Korpusu',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące formowania i szlaku bojowego II Korpusu Polskiego.',
        year: 1941,
      },
    ],
    relatedIds: ['deportacje', 'katyn', 'zolnierze-wykletci', 'lwp', 'emigracja-1968'],
  },

  {
    id: 'rzad-emigracyjny',
    title: 'Rząd RP na uchodźstwie',
    subtitle: 'Legalna władza Polski w Londynie 1939–1990',
    category: 'polityka',
    tags: ['rząd emigracyjny', 'Londyn', 'prezydent', 'uchodźstwo', 'legalność', 'Anders', 'Zaleski', 'Sabała'],
    yearStart: 1939,
    yearEnd: 1990,
    summary: 'Rząd RP na uchodźstwie działał nieprzerwanie w Londynie od 1939 do 1990 r. – kiedy to przekazał insygnia prezydentowi Lechowi Wałęsie. Przez 45 lat był legalną reprezentacją Polski na Zachodzie, nieuznającą władzy PRL.',
    content: `## Geneza – wrzesień 1939

Po klęsce kampanii wrześniowej prezydent Ignacy Mościcki przekazał urząd Władysławowi Raczkiewiczowi (zgodnie z konstytucją kwietniową). Rząd ewakuował się przez Rumunię do Francji, a po jej upadku – do Londynu. Od 1940 r. to właśnie Londyn był siedzibą legalnych władz RP.

## Rola podczas II wojny

Rząd emigracyjny zarządzał Polskimi Siłami Zbrojnymi na Zachodzie (armią gen. Andersa, lotnictwem, marynarką), prowadził dyplomację, finansował wywiad (Armia Krajowa) i utrzymywał kontakty z podziemiem w kraju. Był uznawany przez aliantów zachodnich aż do 1945 r.

## Wielka zdrada Jałty

W lutym 1945 r. Roosevelt, Churchill i Stalin na konferencji w Jałcie oddali Polskę w sowiecką strefę wpływów. Wielka Brytania i USA wycofały uznanie dla rządu emigracyjnego w lipcu 1945 r. i uznały komunistyczny Tymczasowy Rząd Jedności Narodowej. Dla rządu w Londynie była to zdrada i niesprawiedliwość historyczna.

## 45 lat wytrwania

Rząd emigracyjny działał nieprzerwanie przez 45 lat. Kolejni prezydenci: Raczkiewicz, Zaleski, Osóbka-Morawski (odmówił), Sabbat, Kaczorowski. Wydawali akty prawne, prowadzili archiwum, finansowali kulturę emigracyjną. W PRL samo posiadanie kontaktu z "londyńczykami" groziło represjami.

## Przekazanie insygniów

22 grudnia 1990 r. ostatni prezydent na uchodźstwie Ryszard Kaczorowski przekazał w Warszawie insygnia władzy (oryginalną przedwojenną pieczęć, odznaczenia, dokumenty) Lechowi Wałęsie. Symboliczne domknięcie historii: Polska odzyskała ciągłość prawną przerwaną w 1945 r.`,
    resources: [
      {
        id: 'rzad-em-1',
        title: 'Archiwum Rządu RP na Uchodźstwie – zasoby',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Rz%C4%85du%20Uchod%C5%BAstwie',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty rządu emigracyjnego przekazane do polskich archiwów po 1990 r.',
        year: 1939,
      },
      {
        id: 'rzad-em-2',
        title: 'Materiały edukacyjne IPN – rząd emigracyjny',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=rz%C4%85d%20emigracyjny',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o historii i działalności rządu RP na uchodźstwie w Londynie.',
        year: 2019,
        downloadable: true,
      },
      {
        id: 'rzad-em-3',
        title: 'Prasa emigracyjna i dokumenty – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%20emigracyjna',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane pisma i dokumenty emigracji londyńskiej z lat 1939–1990.',
        year: 1945,
        downloadable: true,
      },
    ],
    relatedIds: ['anders', 'manifest-pkwn', 'kultura-paryz', 'emigracja-1968', 'mikolajczyk'],
  },

  {
    id: 'tygodnik-powszechny',
    title: 'Tygodnik Powszechny',
    subtitle: 'Katolicka wyspa wolności w morzu propagandy',
    category: 'kultura',
    tags: ['Tygodnik Powszechny', 'Turowicz', 'prasa katolicka', 'Kraków', 'cenzura', 'Kościół', 'wolna myśl'],
    yearStart: 1945,
    yearEnd: 1989,
    summary: '"Tygodnik Powszechny" – krakowskie pismo katolickie Jerzego Turowicza (1945–1989) – był najbardziej prestiżowym periodykiem katolickim w całym bloku wschodnim i jedynym miejscem, gdzie w PRL można było czytać niezależną myśl religijną i kulturalną.',
    content: `## Powstanie i redakcja

"Tygodnik Powszechny" założono w Krakowie w 1945 r. Redaktorem naczelnym przez niemal całe powojenne czterdziestolecie był Jerzy Turowicz (1912–1999) – wybitny intelektualista i człowiek dialogu. Wokół pisma skupiło się środowisko krakowskiej inteligencji katolickiej: Stanisław Stomma, Kisiel (Stefan Kisielewski), Hanna Malewska, Karol Wojtyła (późniejszy Jan Paweł II).

## Walka z cenzurą

Tygodnik był pod stałym nadzorem GUKPiW. Cenzorzy wycinali teksty, skracali artykuły, zakazywali tematów. Najsłynniejszy incydent: w 1953 r. redakcja odmówiła opublikowania nekrologu Stalina – pismo przejęła na kilka lat katolicka PAX Bolesława Piaseckiego (kolaboranta z UB). W 1956 r. pismo wróciło do Turowicza.

## Rola kulturalna i religijna

"TP" drukował teksty filozoficzne, teologiczne, literackie i krytyki kulturalne niemożliwe do opublikowania gdzie indziej. Był oknem na myśl zachodnią: tłumaczono artykuły z "Le Monde", "The Tablet", "Commonweal". Dla czytelników w całej Polsce stał się symbolem niezależności myśli.

## Środowisko i wpływ

Ze środowiskiem "TP" związani byli m.in.: ks. Józef Tischner (filozof), Adam Michnik (przed opozycją), Wisława Szymborska, Czesław Miłosz (emigracyjnie). Pismo budowało mosty między Kościołem a inteligencją laicką. Jan Paweł II jako papież przyjmował Turowicza na prywatnych audiencjach.

## Po 1989

Po 1989 r. "Tygodnik Powszechny" kontynuował działalność jako niezależne pismo katolickie. W 2012 r. przeszedł głęboki kryzys finansowy, lecz przetrwał. Do dziś ukazuje się jako jeden z ważniejszych tygodników opinii w Polsce.`,
    resources: [
      {
        id: 'tp-1',
        title: 'Archiwum Tygodnika Powszechnego – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Tygodnika%20Powszechnego',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane numery Tygodnika Powszechnego z lat 1945–1989.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'tp-2',
        title: 'Akta cenzury – Tygodnik Powszechny',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=cenzury%20Tygodnik%20Powszechny',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty GUKPiW dotyczące nadzoru i cenzurowania Tygodnika Powszechnego.',
        year: 1948,
      },
      {
        id: 'tp-3',
        title: 'Materiały edukacyjne IPN – prasa katolicka',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=prasa%20katolicka',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o prasie katolickiej i jej roli w kulturze PRL.',
        year: 2017,
        downloadable: true,
      },
    ],
    relatedIds: ['prasa-prl', 'kosciol-prl', 'szymborska', 'milosz', 'cenzura-prl'],
  },

  {
    id: 'jalta',
    title: 'Konferencja Jałtańska 1945',
    subtitle: 'Zdrada Zachodu – Roosevelt, Churchill i Stalin dzielą Europę',
    category: 'polityka',
    tags: ['Jałta', 'Roosevelt', 'Churchill', 'Stalin', 'konferencja', '1945', 'podział Europy', 'żelazna kurtyna'],
    yearStart: 1945,
    yearEnd: 1945,
    summary: 'Konferencja Jałtańska (4–11 lutego 1945 r.) zadecydowała o losach powojennej Europy. Roosevelt i Churchill zgodzili się na sowiecką dominację w Polsce i Europie Środkowej. Polacy nazwali ją zdradą i początkiem komunistycznej niewoli.',
    content: `## Kontekst – schyłek wojny

W lutym 1945 r. klęska Niemiec była kwestią czasu. Armia Czerwona stała już na Odrze. Wielka Trójka – Roosevelt (USA), Churchill (Wielka Brytania) i Stalin (ZSRR) – spotkała się w krymskiej Jałcie, by uzgodnić kształt powojennego świata.

## Ustalenia dotyczące Polski

Polska znalazła się w centrum sporów. Ustalono: granica wschodnia Polski przebiega wzdłuż linii Curzona – Polska traci Kresy Wschodnie na rzecz ZSRR; Polska otrzymuje rekompensatę na zachodzie kosztem Niemiec; rząd emigracyjny w Londynie ma zostać zastąpiony przez "Rząd Jedności Narodowej". Stalin obiecał "wolne i nieskrępowane wybory" – obietnicy nigdy nie dotrzymał.

## Reakcja Polaków

Polacy odebrali Jałtę jako zdradę sojuszników. Rząd emigracyjny w Londynie odrzucił ustalenia. Żołnierze Armii Andersa walczący pod Monte Cassino dowiedzieli się o Jałcie tuż po zwycięstwie – wielu płakało ze wściekłości i rozpaczy.

## Żelazna kurtyna

Jałta wyznaczyła linię podziału Europy: zachodnią strefę wpływów (USA, Wielka Brytania) i wschodnią (ZSRR). Churchill opisał tę linię jako "żelazną kurtynę". Dla Polski i krajów Europy Środkowej oznaczała ona 45 lat komunizmu.

## Ocena historyczna

Historycy spierają się, czy Roosevelt i Churchill mieli realną alternatywę – wojska lądowe na terenach spornych posiadał wyłącznie Stalin. Jałta była w znacznej mierze kapitulacją przed siłą faktów – choć krytykuje się też naiwność Roosevelta wobec Stalina.`,
    resources: [
      {
        id: 'jalta-1',
        title: 'Materiały edukacyjne IPN – Jałta i podział Europy',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Ja%C5%82ta%20podzia%C5%82%20Europy',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o konferencji jałtańskiej i jej konsekwencjach dla Polski.',
        year: 2020,
        downloadable: true,
      },
      {
        id: 'jalta-2',
        title: 'Dokumenty i prasa z 1945 r. – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=prasa%201945',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety z 1945 r. – reakcje na ustalenia konferencji jałtańskiej.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'jalta-3',
        title: 'Akta dotyczące Jałty – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Ja%C5%82ty',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty i opracowania dotyczące konferencji jałtańskiej i jej skutków.',
        year: 1945,
      },
    ],
    relatedIds: ['manifest-pkwn', 'rzad-emigracyjny', 'anders', 'ziemie-odzyskane', 'pgwn'],
  },

  {
    id: 'praga-1968',
    title: 'Praska Wiosna 1968',
    subtitle: 'Socjalizm z ludzką twarzą – i sowieckie czołgi, które go zdusiły',
    category: 'polityka',
    tags: ['Praska Wiosna', 'Czechosłowacja', 'Dubček', 'inwazja', 'Układ Warszawski', '1968', 'LWP', 'doktryna Breżniewa'],
    yearStart: 1968,
    yearEnd: 1968,
    summary: 'Praska Wiosna – próba liberalizacji komunizmu w Czechosłowacji – została stłumiona przez inwazję wojsk Układu Warszawskiego w nocy z 20 na 21 sierpnia 1968 r. Polska dywizja LWP uczestniczyła w interwencji. Efektem była "doktryna Breżniewa".',
    content: `## Reformy Dubčeka

W styczniu 1968 r. Alexander Dubček stanął na czele KPCz. Ogłosił program "socjalizmu z ludzką twarzą": złagodzenie cenzury, ograniczenie policji politycznej, dialog z opozycją. Praska Wiosna była prawdziwą odwilżą – w Czechosłowacji kwitło wolne słowo.

## Reakcja Moskwy

Breżniew i liderzy bloku wschodniego – w tym Gomułka – obserwowali reformy z rosnącym niepokojem. Liberalizacja mogła stać się zaraźliwa. W lipcu 1968 r. Układ Warszawski wysłał list żądający cofnięcia reform. Dubček odmówił.

## Inwazja – noc z 20 na 21 sierpnia

W nocy z 20 na 21 sierpnia 1968 r. wojska pięciu państw Układu Warszawskiego (ZSRR, PRL, NRD, Węgry, Bułgaria) wkroczyły do Czechosłowacji. Łącznie ok. 500 tys. żołnierzy i 6 tys. czołgów. Dubčeka wywieziono do Moskwy i zmuszono do podpisania "normalizacji".

## Udział LWP

Polska 2. Armia LWP wzięła udział w inwazji. Dla wielu polskich żołnierzy był to wstyd: wkraczać do bratniej Czechosłowacji, by dusić reformy, o których sami marzyli. Temat był przez lata tabu.

## Doktryna Breżniewa

Inwazja dała początek "doktrynie Breżniewa" – ZSRR zarezerwował sobie prawo do interwencji w każdym kraju socjalistycznym zagrażającym jedności bloku. Doktryna obowiązywała aż do 1989 r., kiedy Gorbaczow ją odrzucił.`,
    resources: [
      {
        id: 'praga68-1',
        title: 'Materiały edukacyjne IPN – 1968 i inwazja na CSRS',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=1968%20inwazja%20CSRS',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania dydaktyczne o Praskiej Wiośnie i udziale LWP w inwazji 1968 r.',
        year: 2018,
        downloadable: true,
      },
      {
        id: 'praga68-2',
        title: 'Akta LWP – operacja sierpień 1968',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=LWP%20operacja%20sierpie%C5%84',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty dotyczące udziału Ludowego Wojska Polskiego w inwazji na Czechosłowację.',
        year: 1968,
      },
      {
        id: 'praga68-3',
        title: 'Prasa z 1968 r. – relacje z inwazji',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%201968%20relacje',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety PRL z sierpnia 1968 r. – oficjalna narracja o "bratniej pomocy".',
        year: 1968,
        downloadable: true,
      },
    ],
    relatedIds: ['lwp', 'uklad-warszawski', 'gomulka', 'marzec-1968', 'gorbaczow'],
  },

  {
    id: 'odbudowa-warszawy',
    title: 'Odbudowa Warszawy',
    subtitle: 'Miasto z gruzów – rekonstrukcja stolicy i polityka pamięci',
    category: 'społeczeństwo',
    tags: ['Warszawa', 'odbudowa', 'Stare Miasto', 'MDM', 'architektura', 'zniszczenia', 'Canaletto', 'UNESCO'],
    yearStart: 1945,
    yearEnd: 1955,
    summary: 'Warszawa po II wojnie światowej była w 85% zrujnowana. Jej odbudowa stała się projektem narodowym i propagandowym zarazem: Stare Miasto rekonstruowano według obrazów Canaletta, a MDM wzniesiono jako socrealistyczną wizytówkę systemu.',
    content: `## Skala zniszczeń

Po Powstaniu Warszawskim (1944) i planowym wyburzeniu przez Niemców Warszawa leżała w gruzach. Zniszczono ok. 85% zabudowy – ponad 160 tys. budynków. Spośród 1,3 mln mieszkańców przedwojennych niemal nikt nie pozostał w mieście. Stalin początkowo planował przenieść stolicę do Łodzi.

## Decyzja o odbudowie

W 1945 r. zdecydowano o odbudowie Warszawy w miejscu. Decyzja miała wymiar polityczny: Warszawa jako symbol narodowej ciągłości i siły nowej władzy.

## Stare Miasto – unikalna rekonstrukcja

Architekci posłużyli się m.in. obrazami Bernarda Bellotta (Canaletta) przedstawiającymi XVIII-wieczną Warszawę. Rezultatem jest jedyne na świecie historyczne centrum miasta odbudowane ze zdjęć i malarstwa – wpisane na listę UNESCO w 1980 r.

## MDM i socrealizm

Marszałkowska Dzielnica Mieszkaniowa (MDM, 1950–1952) z monumentalnymi kamienicami i Placem Konstytucji to modelowy przykład architektury stalinowskiej. Pałac Kultury i Nauki (1952–1955) – dar Stalina – dominuje nad centrum do dziś.

## Czyn społeczny i mit

Odbudowa stała się mitem założycielskim PRL: tysiące ochotników z całego kraju pracowało przy odgruzowaniu. Propagandowe kroniki filmowe pokazywały "cały naród buduje swoją stolicę".`,
    resources: [
      {
        id: 'warszawa-1',
        title: 'Fotografie odbudowy Warszawy – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Fotografie%20odbudowy%20Warszawy',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Archiwalne fotografie zniszczeń wojennych i odbudowy Warszawy z lat 1945–1955.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'warszawa-2',
        title: 'Kroniki filmowe – odbudowa stolicy',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kroniki%20filmowe%20odbudowa',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne kroniki filmowe dokumentujące odbudowę Warszawy.',
        year: 1948,
      },
      {
        id: 'warszawa-3',
        title: 'Dokumenty urbanistyczne odbudowy',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=urbanistyczne%20odbudowy',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Plany urbanistyczne i dokumenty Biura Odbudowy Stolicy.',
        year: 1945,
      },
    ],
    relatedIds: ['palac-kultury', 'socrealizm', 'mieszkanie-prl', 'manifest-pkwn', 'plan-szescioletni'],
  },

  {
    id: 'wywiad-prl',
    title: 'Wywiad i kontrwywiad PRL',
    subtitle: 'Szpiedzy, agenci i operacje za żelazną kurtyną',
    category: 'represje',
    tags: ['wywiad', 'kontrwywiad', 'szpiegostwo', 'Departament I', 'KGB', 'Stasi', 'agenci', 'MSW'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Wywiad PRL (Departament I MSW) prowadził operacje szpiegowskie na Zachodzie, infiltrował polską emigrację i ściśle współpracował z KGB i Stasi. Kontrwywiad chronił granicę przed "wrogimi agentami" – i tępił opozycję wewnętrzną.',
    content: `## Struktura wywiadu

Wywiad zagraniczny PRL podlegał Departamentowi I MSW, kontrwywiad – Departamentowi II. Obok nich działał Wojskowy Wywiad i Kontrwywiad (WSW). Wszystkie służby ściśle współpracowały z sowieckim KGB i wschodnioniemiecką Stasi.

## Operacje na Zachodzie

Wywiad PRL umieszczał agentów w polskiej diasporze, emigracyjnych redakcjach (RWE) i zachodnioniemieckich firmach. Jedną z najbardziej spektakularnych afer był przypadek Mariana Zacharskiego – oficera wywiadu PRL, który w USA zwerbował inżyniera Hughesa i zdobył tajne dokumenty wojskowe. Aresztowany w 1981 r., wymieniony w 1985 r.

## Współpraca z KGB i Stasi

Wywiad PRL był "młodszym bratem" KGB. Sowieci mieli wgląd w operacje polskiego wywiadu. Współpraca ze Stasi była równie bliska – wspólne operacje, szkolenia, wymiana teczek. Stasi miała własnych agentów działających w Polsce.

## Kontrwywiad i opozycja

Departament II oficjalnie chronił PRL przed szpiegami zachodnimi. W praktyce zajmował się też inwigilacją opozycji i zwalczaniem drugiego obiegu. Granica między kontrwywiadem a represjami politycznymi była płynna.

## Po 1989 r.

Część akt wywiadu PRL zniszczono przed przekazaniem do IPN. Zachowane dokumenty odsłoniły skalę penetracji zachodnich instytucji. Lustracja oficerów wywiadu pozostaje politycznie drażliwym tematem.`,
    resources: [
      {
        id: 'wywiad-1',
        title: 'Akta wywiadu PRL – zasoby IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=wywiadu',
        source: 'Instytut Pamięci Narodowej',
        description: 'Zachowane akta Departamentu I i II MSW dotyczące operacji wywiadowczych PRL.',
        year: 1950,
      },
      {
        id: 'wywiad-2',
        title: 'Materiały edukacyjne IPN – służby specjalne PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=s%C5%82u%C5%BCby%20specjalne',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o strukturze i działalności służb specjalnych PRL.',
        year: 2017,
        downloadable: true,
      },
      {
        id: 'wywiad-3',
        title: 'Dokumenty archiwalne – wywiad i kontrwywiad',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=wywiad%20kontrwywiad',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty służb specjalnych PRL.',
        year: 1955,
      },
    ],
    relatedIds: ['sb', 'ub', 'tajni-wspolpracownicy', 'pgwn', 'radio-wolna-europa'],
  },

  {
    id: 'wron',
    title: 'WRON – Wojskowa Rada Ocalenia Narodowego',
    subtitle: 'Junta stanu wojennego – wojsko u władzy 1981–1983',
    category: 'polityka',
    tags: ['WRON', 'stan wojenny', 'Jaruzelski', 'junta', 'wojsko', 'władza', '1981', 'generałowie'],
    yearStart: 1981,
    yearEnd: 1983,
    summary: 'Wojskowa Rada Ocalenia Narodowego (WRON) powstała 13 grudnia 1981 r. razem ze stanem wojennym. Była organem faktycznej władzy wojskowej w PRL. Polacy żartowali, że WRON to "kruk" po polsku – symbol złowróżbny.',
    content: `## Powołanie i skład

WRON proklamował gen. Wojciech Jaruzelski w nocy z 12 na 13 grudnia 1981 r. W skład rady weszło 21 generałów i admirałów. Przewodniczącym był Jaruzelski, pełniący jednocześnie funkcje I sekretarza PZPR, premiera i ministra obrony – bezprecedensowa kumulacja władzy.

## "Kruk" – symbol oporu

Akronim WRON po polsku oznacza "kruk" – symbol złowróżbny. Opozycja natychmiast to wykorzystała: "WRON orła nie pokona" stało się hasłem podziemia. Rysunki kruka-Jaruzelskiego krążyły w samizdacie.

## Kompetencje i działania

WRON wydawała dekrety z mocą ustawy: zawiesiła "Solidarność", wprowadziła godzinę policyjną, militaryzowała kluczowe zakłady, cenzurowała korespondencję i rozmowy telefoniczne. Komisarze wojskowi pojawili się w fabrykach, szkołach i urzędach. Telewizja i radio nadawały z prezenterami w mundurach.

## Formalny koniec

Stan wojenny zawieszono 31 grudnia 1982 r., zniesiono 22 lipca 1983 r. WRON rozwiązano w tej samej dacie. Jednak represje trwały nadal, a wielu internowanych siedziało dłużej.

## Ocena

WRON i stan wojenny ocenia się różnie: jako "mniejsze zło" (Jaruzelski twierdził, że zapobiegł sowieckiej interwencji) lub jako zdradę narodu przez własne wojsko. Debata historyczna trwa.`,
    resources: [
      {
        id: 'wron-1',
        title: 'Dokumenty WRON – zasoby IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=WRON',
        source: 'Instytut Pamięci Narodowej',
        description: 'Archiwalne dokumenty Wojskowej Rady Ocalenia Narodowego z zasobów IPN.',
        year: 1981,
      },
      {
        id: 'wron-2',
        title: 'Dekret o stanie wojennym – ISAP',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19810290154',
        source: 'Internetowy System Aktów Prawnych – Sejm RP',
        description: 'Dekret Rady Państwa o stanie wojennym z 12 grudnia 1981 r.',
        year: 1981,
        downloadable: true,
      },
      {
        id: 'wron-3',
        title: 'Nagranie przemówienia Jaruzelskiego – NINATEKA',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Jaruzelski+przemówienie+1981',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne nagranie przemówienia gen. Jaruzelskiego z 13 grudnia 1981 r.',
        year: 1981,
      },
    ],
    relatedIds: ['stan-wojenny', 'jaruzelski', 'solidarnosc', 'internowanie', 'kiszczak'],
  },

  {
    id: 'chruszczow',
    title: 'Chruszczow i destalinizacja',
    subtitle: 'XX Zjazd KPZR 1956 – tajny referat, który wstrząsnął blokiem wschodnim',
    category: 'polityka',
    tags: ['Chruszczow', 'destalinizacja', 'XX zjazd', 'KPZR', 'odwilż', 'Stalin', 'kult jednostki', '1956'],
    yearStart: 1953,
    yearEnd: 1964,
    summary: 'Nikita Chruszczow na XX Zjeździe KPZR w lutym 1956 r. wygłosił tajny referat potępiający zbrodnie Stalina. Wstrząsnął podstawami bloku wschodniego, wywołał falę odwilży i kryzysy – w Polsce Październik 1956, na Węgrzech rewolucję.',
    content: `## Po śmierci Stalina

Stalin zmarł 5 marca 1953 r. Jego następcy – Beria, Malenkow, Chruszczow – podjęli walkę o władzę. Chruszczow wygrał i zaczął dystansować się od stalinizmu: rehabilitował część ofiar, zwalniał jeńców z łagrów, łagodził terror.

## Tajny referat – "O kulcie jednostki"

25 lutego 1956 r., na zamkniętym posiedzeniu XX Zjazdu KPZR, Chruszczow wygłosił 4-godzinny referat potępiający masowe zbrodnie Stalina, fałszywe procesy i deportacje narodów. Sala przyjęła to w szoku i ciszy.

## Efekt domina w bloku

Referat miał być tajny – lecz wyciekł. CIA zdobyła tekst, "The New York Times" opublikował go w całości. W krajach bloku wybuchły kryzysy: w Polsce – odwilż i Październik 1956, na Węgrzech – rewolucja (październik–listopad 1956) stłumiona przez sowieckie czołgi.

## Skutki dla Polski

XX Zjazd przyspieszył rehabilitację ofiar stalinizmu, uwolnienie prymasa Wyszyńskiego i powrót Gomułki do władzy. Bierut – który był na zjeździe – umarł w Moskwie wkrótce po powrocie (12 marca 1956).

## Rządy Chruszczowa

Chruszczow rządził ZSRR do 1964 r. Jego czas to "odwilż" – ograniczenie terroru, pewna liberalizacja kultury, ale też kryzys kubański (1962) i Mur Berliński (1961). W 1964 r. obalili go towarzysze partyjni.`,
    resources: [
      {
        id: 'chruszcz-1',
        title: 'Materiały edukacyjne IPN – destalinizacja',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=destalinizacja',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o XX Zjeździe KPZR, destalinizacji i jej skutkach w Polsce.',
        year: 2016,
        downloadable: true,
      },
      {
        id: 'chruszcz-2',
        title: 'Prasa z 1956 r. – polska odwilż',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Prasa%201956%20odwil%C5%BC',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety i czasopisma polskie z 1956 r. – atmosfera odwilży.',
        year: 1956,
        downloadable: true,
      },
      {
        id: 'chruszcz-3',
        title: 'Akta KC PZPR – reakcja na XX Zjazd',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=PZPR%20reakcja%20Zjazd',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty KC PZPR z 1956 r. dotyczące reakcji na referat Chruszczowa.',
        year: 1956,
      },
    ],
    relatedIds: ['bierut', 'gomulka', 'pazdziernik-1956', 'represje-polityczne', 'gorbaczow'],
  },

  {
    id: 'tischner',
    title: 'Ks. Józef Tischner',
    subtitle: 'Filozof Solidarności – etyka, dialog i myślenie według wartości (1931–2000)',
    category: 'osoby',
    tags: ['Tischner', 'filozofia', 'etyka', 'Solidarność', 'Kraków', 'góral', 'dialog', 'ksiądz'],
    yearStart: 1931,
    yearEnd: 2000,
    summary: 'Ks. Józef Tischner – krakowski filozof i kapelan "Solidarności", autor "Etyki solidarności" – był jednym z najważniejszych intelektualnych głosów polskiego przełomu. Łączył fenomenologię i etykę z ciepłem i humorem górala z Podhala.',
    content: `## Góral i filozof

Józef Tischner urodził się 12 marca 1931 r. w Starym Sączu. Dorastał w Łopusznej na Podhalu i przez całe życie był "filozofującym góralem": łączył akademicką głębię z ciepłem i humorem. Studiował filozofię na KUL-u i UJ, uzyskał doktorat w 1959 r.

## Fenomenologia i filozofia dramatu

Tischner był znawcą fenomenologii Husserla i hermeneutyki Gadamera. Rozwinął własną koncepcję "filozofii dramatu" – filozofii skupionej na relacji między Ja i Ty, na spotkaniu i odpowiedzialności. Jego "Filozofia dramatu" (1990) to jedno z głównych dzieł polskiej filozofii XX w.

## Etyka Solidarności

W sierpniu 1980 r. Tischner odprawiał msze dla strajkujących w Stoczni Gdańskiej. Wkrótce napisał "Etykę solidarności" (1981) – esej wyjaśniający sens moralny ruchu Solidarności: solidarność jako odpowiedź na wołanie człowieka potrzebującego pomocy.

## Duchowość i humor

Tischner był kapłanem krakowskim związanym z Tygodnikiem Powszechnym i środowiskiem Jana Pawła II. Słynął z dowcipu: "Diabeł mógł zostać złym duchem tylko dlatego, że najpierw był dobry. Tak jak wielu naszych działaczy."

## Dziedzictwo

Tischner zachorował na raka mózgu i umarł w 2000 r. Jego twórczość – "Myślenie według wartości", "Historia filozofii po góralsku" – jest dziś szeroko czytana. Instytut Myśli Józefa Tischnera działa w Krakowie.`,
    resources: [
      {
        id: 'tischner-1',
        title: 'Nagrania wykładów i wywiadów Tischnera',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Tischner',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne nagrania audycji i wywiadów z ks. Józefem Tischnerem.',
        year: 1980,
      },
      {
        id: 'tischner-2',
        title: 'Artykuły z Tygodnika Powszechnego – Tischner',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Artyku%C5%82y%20Tygodnika%20Powszechnego',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane numery Tygodnika Powszechnego z tekstami ks. Tischnera.',
        year: 1975,
        downloadable: true,
      },
      {
        id: 'tischner-3',
        title: 'Materiały edukacyjne – filozofia w PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=filozofia',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o niezależnej myśli filozoficznej i religijnej w PRL.',
        year: 2019,
        downloadable: true,
      },
    ],
    relatedIds: ['kosciol-prl', 'solidarnosc', 'tygodnik-powszechny', 'jan-pawel-ii', 'sierpien-1980'],
  },

  {
    id: 'animacja-prl',
    title: 'Polska animacja w PRL',
    subtitle: 'Bolek i Lolek, Reksio, Miś Uszatek – złoty wiek polskiej animacji',
    category: 'kultura',
    tags: ['animacja', 'Bolek i Lolek', 'Reksio', 'Miś Uszatek', 'Se-ma-for', 'SMF', 'dzieci', 'film'],
    yearStart: 1957,
    yearEnd: 1989,
    summary: 'Polska animacja PRL należała do najwybitniejszych na świecie. Studio Miniatur Filmowych i Se-ma-for wyprodukowały dziesiątki seriali podziwianych nie tylko w Polsce, ale i na Zachodzie. Bolek i Lolek, Reksio, Miś Uszatek to ikony całego pokolenia.',
    content: `## Narodziny studia

Studio Miniatur Filmowych (SMF) w Warszawie i łódzki Se-ma-for były głównymi wytwórniami polskiej animacji. Powstały w latach 40. i 50. Po 1956 r. zyskały większą artystyczną wolność i rozkwitły twórczo.

## Bolek i Lolek (od 1963)

Najbardziej rozpoznawalna polska animacja: dwóch chłopców przeżywa przygody w Polsce i na całym świecie. Seria powstała w katowickiej wytwórni pod kierunkiem Władysława Nehrebeckiego. Eksportowano ją do dziesiątek krajów, w tym na Zachód.

## Reksio (od 1967)

Biały piesek Reksio ze Studia Filmów Rysunkowych w Bielsku-Białej – sympatyczny, ciekawy świata. Seria łączyła humor z ciepłem i wartościami etycznymi. Do 1990 r. powstało 65 odcinków.

## Miś Uszatek (od 1975)

Adaptacja wierszy Czesława Janczarskiego produkcji Se-ma-for wyróżniała się wysoką jakością plastyczną i muzyczną. Stała się kultowa nie tylko w Polsce, lecz i w ZSRR, gdzie tłumaczono ją na rosyjski.

## Artystyczna animacja

Obok animacji dziecięcej polska szkoła tworzyła filmy dla dorosłych – krótkie metraże Jana Lenicy, Waleriana Borowczyka, Daniela Szczechury. Polska animacja artystyczna zdobywała nagrody na festiwalach w Cannes i Wenecji.`,
    resources: [
      {
        id: 'anim-1',
        title: 'Polska animacja – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=polska%20animacja',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne filmy animowane PRL dostępne w cyfrowym archiwum NINATEKA.',
        year: 1960,
      },
      {
        id: 'anim-2',
        title: 'Plakaty i materiały o animacji – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Plakaty%20animacji',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane plakaty i materiały promocyjne polskich filmów animowanych.',
        year: 1963,
        downloadable: true,
      },
      {
        id: 'anim-3',
        title: 'Dokumenty studiów animacji – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=studi%C3%B3w%20animacji',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Studio Miniatur Filmowych i Se-ma-for z Archiwów Państwowych.',
        year: 1957,
      },
    ],
    relatedIds: ['kino-prl', 'tvp-prl', 'dzieci-prl', 'polska-szkola-filmowa', 'kultura-prl'],
  },

  {
    id: 'radio-prl',
    title: 'Radio w PRL',
    subtitle: 'Polskie Radio, Trójka i słuchowiska – eter między propagandą a kulturą',
    category: 'kultura',
    tags: ['radio', 'Polskie Radio', 'Trójka', 'słuchowiska', 'propaganda', 'muzyka', 'Jedynka', 'Dwójka'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Polskie Radio w PRL było monopolistycznym medium państwowym – narzędziem propagandy i zarazem platformą wybitnej kultury. Trójka stała się oazą wolniejszej myśli, a słuchowiska radiowe osiągnęły artystyczny poziom nieznany w innych krajach bloku.',
    content: `## Radio jako narzędzie władzy

Polskie Radio zostało upaństwowione i w pełni podporządkowane PZPR po 1944 r. Programy informacyjne i publicystyczne były pod ścisłą kontrolą cenzury – "Dziennik" radiowy powielał wersję wydarzeń zgodną z linią partii. Radiostacje lokalne nadawały z ośrodków wojewódzkich, wszystkie pod nadzorem centrali.

## Trzy programy – trzy światy

- **Program I (Jedynka)** – informacje, publicystyka, rozrywka masowa; najbardziej sformalizowany ideologicznie
- **Program II (Dwójka)** – muzyka poważna, teatr radiowy, audycje kulturalne; wyraźnie wyższy poziom
- **Program III (Trójka, od 1962)** – muzyka rozrywkowa, jazz, rock, audycje dla młodzieży; największa artystyczna wolność; tu po raz pierwszy legalno puszczano Rolling Stonesów i Beatlesów

## Słuchowiska i teatr radiowy

Polska szkoła słuchowisk radiowych należała do najwybitniejszych w Europie. Autorzy tacy jak Sławomir Mrożek, Tadeusz Różewicz i Leopold Tyrmand pisali dla radia. Teatr Polskiego Radia wystawiał klasykę i współczesne dramaty – słuchowiska były jedyną formą teatru dostępną w całym kraju.

## Muzyczne przełomy

Trójka przełamywała bariery: jako pierwsza medium publiczne puszczała jazz, big beat, a od lat 70. rock. Audycje Marka Niedźwieckiego, Piotra Kaczkowskiego i Wojciecha Manna stały się kultowe. "Lista Przebojów Trójki" (od 1982) była pierwszym demokratycznym rankingiem muzycznym – wyniki głosowania słuchaczy, nie decyzja redakcji.

## Opór i kontrkultura

Radio Wolna Europa zagłuszano do końca lat 80. – ale Polacy i tak słuchali, obracając gałkę w kierunku Monachium. Odbiorniki radiowe były w niemal każdym domu; radio było medium codziennym i bliskim bardziej niż telewizja.`,
    resources: [
      {
        id: 'radio-prl-1',
        title: 'Archiwum nagrań Polskiego Radia – NINATEKA',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Polskie+Radio+archiwum',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne audycje, słuchowiska i nagrania muzyczne z Polskiego Radia PRL.',
        year: 1950,
      },
      {
        id: 'radio-prl-2',
        title: 'Zbiory prasowe o Polskim Radiu – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=prasowe%20Polskim%20Radiu',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Programy radiowe, czasopisma i materiały dokumentujące historię Polskiego Radia.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'radio-prl-3',
        title: 'Akta Polskiego Radia – zasoby archiwalne',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Polskiego%20Radia',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty dotyczące organizacji i nadzoru nad Polskim Radiem w PRL.',
        year: 1948,
      },
    ],
    relatedIds: ['tvp-prl', 'propaganda-prl', 'cenzura-prl', 'muzyka-rockowa', 'jazz-prl'],
  },

  {
    id: 'kisielewski',
    title: 'Stefan Kisielewski',
    subtitle: 'Kisiel – muzyk, pisarz i niepokorny publicysta (1911–1991)',
    category: 'osoby',
    tags: ['Kisielewski', 'Kisiel', 'publicysta', 'muzyk', 'Tygodnik Powszechny', 'opozycja', 'liberalizm', 'satyra'],
    yearStart: 1911,
    yearEnd: 1991,
    summary: 'Stefan Kisielewski – "Kisiel" – był jedynym w swoim rodzaju: kompozytorem i krytykiem muzycznym, powieściopisarzem, felietonistą "Tygodnika Powszechnego" i nieustraszoną szpilą wbitą w balonik partyjnej propagandy. Bity przez "aktywistów" w 1968 r., nigdy nie ucichł.',
    content: `## Człowiek wielu talentów

Stefan Kisielewski (ur. 7 III 1911 w Warszawie) był z wykształcenia kompozytorem – ukończył Konserwatorium Warszawskie i studiował w Paryżu. Tworzył muzykę kameralną, symfoniczną i fortepianową. Równolegle pisał felietony, powieści i krytyki – i to właśnie pióro przyniosło mu największą sławę.

## Felietonista Tygodnika Powszechnego

Od 1945 r. Kisielewski pisał w "Tygodniku Powszechnym" pod pseudonimem "Kisiel". Jego teksty były zjadliwie ironiczne, pełne liberalnej ekonomii i antysocjalistycznego dowcipu. Cenzura wycinała akapity, lecz nigdy nie zdołała zamilczeć całego Kisiela. Jego powiedzenie: "socjalizm to ustrój, który bohatersko pokonuje problemy nieznane w innych ustrojach" – krążyło w samizdacie.

## Marzec 1968 i pobicie

W lutym 1968 r. Kisielewski wygłosił w Związku Literatów Polskich przemówienie nazwane "dyktaturą ciemniaków". Wkrótce potem napadli go na ulicy "nieznani sprawcy" – "aktywiści" PZPR – i dotkliwie pobili. Kisiel opisał incydent publicznie, co było bezprecedensowym aktem odwagi.

## Powieści i literatura

Kisielewski pisał powieści obyczajowe i polityczne – czytane chętnie, często przez drugie dno: "Sprzysiężenie" (1947), "Wszystko inaczej" (1965), serie kryminalne z detektywem Morawskim pod pseudonimem "Tomasz Stalinski". Jego dzienniki, publikowane po 1989 r., są bezcennym dokumentem epoki.

## Dziedzictwo

Kisielewski reprezentował w PRL-u coś rzadkiego: liberalny, antysocjalistyczny światopogląd wyrażany publicznie z odwagą i humorem. Do dziś jego cytaty krążą w polskim internecie jako celne diagnozy systemów totalitarnych.`,
    resources: [
      {
        id: 'kisiel-1',
        title: 'Felietony Kisielewskiego – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Felietony%20Kisielewskiego',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane roczniki Tygodnika Powszechnego z felietonami Stefana Kisielewskiego.',
        year: 1945,
        downloadable: true,
      },
      {
        id: 'kisiel-2',
        title: 'Akta SB dotyczące Kisielewskiego',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Kisielewskiego',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące inwigilacji Stefana Kisielewskiego.',
        year: 1950,
      },
      {
        id: 'kisiel-3',
        title: 'Nagrania radiowe – Kisielewski o muzyce',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Kisielewski+radio',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne audycje radiowe i telewizyjne z udziałem Stefana Kisielewskiego.',
        year: 1960,
      },
    ],
    relatedIds: ['tygodnik-powszechny', 'prasa-prl', 'marzec-1968', 'cenzura-prl', 'milosz'],
  },

  {
    id: 'moczar',
    title: 'Mieczysław Moczar i frakcja partyzantów',
    subtitle: 'Nacjonalistyczna frakcja PZPR – "partyzanci" i kampania antysemicka 1968',
    category: 'polityka',
    tags: ['Moczar', 'partyzanci', 'ZBOWID', 'antysemityzm', 'frakcja', 'MSW', 'bezpieka', 'nacjonalizm'],
    yearStart: 1913,
    yearEnd: 1986,
    summary: 'Mieczysław Moczar – szef MSW i lider frakcji "partyzantów" w PZPR – był głównym architektem antysemickiej kampanii 1968 r. Jego nacjonalistyczno-komunistyczna frakcja przez chwilę zagrażała dominacji Gomułki, a potem Gierka.',
    content: `## Kim byli "partyzanci"?

Frakcja "partyzantów" skupiała działaczy PZPR, którzy w czasie II wojny walczyli w komunistycznej partyzantce na ziemiach polskich (GL/AL) – w odróżnieniu od "Moskwiczan" (przybyłych z ZSRR) i "Żydów" (jak ich pogardliwie nazywano w wewnętrznych sporach). Ich liderem był Mieczysław Moczar (ur. 1913).

## Moczar – szef bezpieki

Moczar był ministrem spraw wewnętrznych w latach 1964–1968. Pod jego kierownictwem MSW stało się potężnym centrum władzy. Był patronem ZBoWiD (Związek Bojowników o Wolność i Demokrację) – masowej organizacji kombatanckiej, którą przekształcił w polityczną bazę swojej frakcji.

## Kampania antysemicka 1968

Moczar był głównym organizatorem kampanii antysemickiej 1968 r., prowadzonej pod hasłem walki z "syjonizmem". Jego media insynuowały, że Żydzi byli nielojalni wobec Polski, że trzymają z Izraelem i USA. Kampania służyła dwóm celom: wewnętrznej czystce w PZPR (usunięciu rywali) i rozładowaniu protestów studenckich przez skierowanie nienawiści na kozła ofiarnego.

## Walka o władzę

Po Marcu 1968 Moczar liczył na przejęcie władzy po Gomułce. Grudzień 1970 i upadek Gomułki dał mu szansę – lecz Gierek okazał się zręczniejszy i zepchnął "partyzantów" na margines. Moczar pozostał w polityce jako drugoplanowa figura, tracąc kolejne stanowiska. Zmarł w 1986 r.

## Dziedzictwo

Moczar jest symbolem narodowo-komunistycznej hybrydy: połączenia nacjonalizmu z partyjną ortodoksją, ksenofobii z komunistycznym doktryneryzem. Jego kampania 1968 r. jest jednym z najhaniebniejszych rozdziałów historii PRL.`,
    resources: [
      {
        id: 'moczar-1',
        title: 'Akta MSW – Moczar i kampania 1968',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=MSW%20Moczar%20kampania',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty MSW dotyczące kampanii antysemickiej i działalności frakcji Moczara.',
        year: 1968,
      },
      {
        id: 'moczar-2',
        title: 'Materiały edukacyjne IPN – Marzec 1968 i antysemityzm',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=Marzec%201968%20antysemityzm',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o kampanii antysemickiej 1968 r. i roli Moczara.',
        year: 2018,
        downloadable: true,
      },
      {
        id: 'moczar-3',
        title: 'Prasa z 1968 r. – kampania propagandowa',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Prasa%201968%20kampania',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane gazety z 1968 r. dokumentujące propagandę antysemicką Moczara.',
        year: 1968,
        downloadable: true,
      },
    ],
    relatedIds: ['marzec-1968', 'gomulka', 'gierek', 'sb', 'emigracja-1968'],
  },

  {
    id: 'muzyka-powazna-prl',
    title: 'Muzyka poważna w PRL',
    subtitle: 'Penderecki, Lutosławski, Górecki – awangarda za żelazną kurtyną',
    category: 'kultura',
    tags: ['muzyka', 'Penderecki', 'Lutosławski', 'Górecki', 'awangarda', 'Warszawa', 'Jesień', 'sonoryzm'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Polska muzyka poważna PRL wydała twórców światowego formatu: Krzysztofa Pendereckiego, Witolda Lutosławskiego i Henryka Mikołaja Góreckiego. Ich awangardowe dzieła zdobyły uznanie na Zachodzie, mimo że system próbował narzucić im socrealizmstruktury.',
    content: `## Socrealizm i opór kompozytorów

W latach 1949–1956 kompozytorzy byli zobowiązani do tworzenia "muzyki dostępnej dla ludu" – melodyjnej, optymistycznej, często opartej na folklorze. Lutosławski pisał w tym czasie piosenki dla dzieci i opracowania ludowe. Penderecki jeszcze się kształcił. Wielu twórców milczało lub komponowało "do szuflady".

## Odwilż i "Warszawska Jesień"

Przełomem był rok 1956 i inauguracja Międzynarodowego Festiwalu Muzyki Współczesnej "Warszawska Jesień" (1956). Festiwal stał się oknem na zachodnią awangardę – po raz pierwszy w Polsce można było usłyszeć Stockhausena, Nono, Bouleza. Polscy kompozytorzy szybko weszli w dialog z europejską awangardą.

## Witold Lutosławski (1913–1994)

Jeden z największych kompozytorów XX w. Jego "Koncert na orkiestrę" (1954), "Muzyka żałobna" (1958, ku pamięci Bartóka) i "Gry weneckie" (1961, sonoryzm) przyniosły mu światową sławę. Odważnie wychodził naprzeciw nowym technikom kompozytorskim.

## Krzysztof Penderecki (1933–2020)

"Treny ofiarom Hiroszimy" (1960) zaskoczyły cały świat muzyczny: sonoryzm, klastry, nowe techniki instrumentalne. "Pasja wg św. Łukasza" (1966) przyniosła mu sławę niemal równą największym. Penderecki łączył awangardę z tradycją i religijnością – i nigdy nie był "państwowym kompozytorem".

## Henryk Mikołaj Górecki (1933–2010)

Górecki zasłynął przede wszystkim "III Symfonią" ("Symfonia pieśni żałosnych", 1976) – nagraną w 1992 r. przez Dawida Zinmana, sprzedała się w ponad milionie egzemplarzy. Łączyła minimalizm z polską tradycją religijną i historyczną.`,
    resources: [
      {
        id: 'muz-pow-1',
        title: 'Nagrania archiwalne – Polskie Radio i muzyka poważna',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=muzyka+powa%C5%BCna+Polska',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne nagrania koncertów i audycji z festiwalu Warszawska Jesień.',
        year: 1956,
      },
      {
        id: 'muz-pow-2',
        title: 'Partytury i dokumenty kompozytorów – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Partytury%20kompozytor%C3%B3w',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane partytury, programy koncertowe i artykuły o polskiej muzyce poważnej.',
        year: 1956,
        downloadable: true,
      },
      {
        id: 'muz-pow-3',
        title: 'Materiały edukacyjne – muzyka polska XX w.',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=muzyka',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o kulturze muzycznej w PRL i twórczości polskich kompozytorów.',
        year: 2017,
        downloadable: true,
      },
    ],
    relatedIds: ['jazz-prl', 'muzyka-rockowa', 'kino-prl', 'socrealizm', 'kultura-paryz'],
  },

  {
    id: 'kiszczak',
    title: 'Gen. Czesław Kiszczak',
    subtitle: 'Szef MSW stanu wojennego i negocjator Okrągłego Stołu (1925–2015)',
    category: 'osoby',
    tags: ['Kiszczak', 'MSW', 'SB', 'stan wojenny', 'Okrągły Stół', 'generał', 'bezpieka', 'Magdalenka'],
    yearStart: 1925,
    yearEnd: 2015,
    summary: 'Gen. Czesław Kiszczak – minister spraw wewnętrznych i szef aparatu bezpieczeństwa PRL w kluczowych latach 1981–1990 – był jedną z najbardziej niejednoznacznych postaci przełomu: współodpowiedzialny za represje stanu wojennego, a zarazem architekt rozmów z opozycją.',
    content: `## Kariera w bezpiece

Czesław Kiszczak (ur. 19 X 1925 w Roczynach) trafił do wojskowych służb wywiadowczych w 1945 r. Budował karierę w strukturach wojskowego kontrwywiadu i wywiadu. W 1981 r. Jaruzelski mianował go ministrem spraw wewnętrznych – co oznaczało bezpośrednie dowodzenie SB, milicją i ZOMO.

## Stan wojenny i represje

Kiszczak był jednym z głównych wykonawców stanu wojennego 13 grudnia 1981 r. Pod jego nadzorem internowano ok. 10 tys. osób, rozbito struktury "Solidarności", pacyfikowano strajki (w tym KWK Wujek). Był odpowiedzialny za aparat represji, który przez kolejne lata nękał opozycję.

## Magdalenka i Okrągły Stół

Paradoksalnie Kiszczak stał się też architektem dialogu. W sierpniu 1988 r. zainicjował tajne spotkanie z Wałęsą w willi MSW w Magdalence. Seria rozmów – "Magdalenka" – przygotowała grunt pod oficjalny Okrągły Stół. To Kiszczak reprezentował stronę rządową przy jego otwarciu.

## Premier na chwilę i koniec kariery

Po wyborach czerwcowych 1989 r. Kiszczak przez kilka dni był formalnie desygnowany na premiera (2–17 VIII 1989) – lecz nie zdołał sformować rządu. Ustąpił miejsca Tadeuszowi Mazowieckiemu. Zachował tekę ministra spraw wewnętrznych jeszcze przez kilka miesięcy.

## Procesy i śmierć

Po 1989 r. Kiszczak był wielokrotnie oskarżany – o udział w wprowadzeniu stanu wojennego, o odpowiedzialność za śmierć górników z Wujka. Procesy ciągnęły się latami; żaden nie zakończył się prawomocnym wyrokiem skazującym przed jego śmiercią w 2015 r. Kontrowersje dotyczące oceny jego roli trwają do dziś.`,
    resources: [
      {
        id: 'kiszczak-1',
        title: 'Akta MSW – Kiszczak i stan wojenny',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=MSW%20Kiszczak%20stan',
        source: 'Instytut Pamięci Narodowej',
        description: 'Dokumenty IPN dotyczące działalności Kiszczaka jako szefa MSW.',
        year: 1981,
      },
      {
        id: 'kiszczak-2',
        title: 'Dokumenty Okrągłego Stołu – rola MSW',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Okr%C4%85g%C5%82ego%20Sto%C5%82u%20rola',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Archiwalne dokumenty dotyczące negocjacji Magdalenka–Okrągły Stół.',
        year: 1989,
      },
      {
        id: 'kiszczak-3',
        title: 'Materiały edukacyjne IPN – stan wojenny i MSW',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=stan%20wojenny%20MSW',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o aparacie bezpieczeństwa i stanie wojennym.',
        year: 2016,
        downloadable: true,
      },
    ],
    relatedIds: ['jaruzelski', 'stan-wojenny', 'okragly-stol', 'sb', 'wujek'],
  },

  {
    id: 'polska-szkola-filmowa',
    title: 'Polska szkoła filmowa',
    subtitle: 'Munk, Kawalerowicz, Polański, Skolimowski – kino które zaskoczyło świat',
    category: 'kultura',
    tags: ['kino', 'polska szkoła filmowa', 'Munk', 'Kawalerowicz', 'Polański', 'Skolimowski', 'Łódź', 'PWSF'],
    yearStart: 1955,
    yearEnd: 1970,
    summary: 'Polska szkoła filmowa (ok. 1955–1965) to jeden z najważniejszych ruchów w historii kina europejskiego. Twórcy z łódzkiej filmówki – Munk, Kawalerowicz, Has, Polański, Skolimowski – stworzyli filmy rozliczające się z wojną i przemilczeniami historii, które zyskały światowe uznanie.',
    content: `## Narodziny szkoły – odwilż i filmówka

Polska Szkoła Filmowa wyrosła z odwilży po 1956 r. i z Państwowej Wyższej Szkoły Filmowej w Łodzi (PWSF, założonej 1948) – jednej z pierwszych i najlepszych uczelni filmowych w Europie. Jej absolwenci otrzymali po 1956 r. bezprecedensową artystyczną wolność: mogli rozliczać się z wojną, martyrologią i przemilczaną historią.

## Kluczowe filmy

- **Andrzej Munk** – "Człowiek na torze" (1956), "Eroica" (1958), "Zezowate szczęście" (1960); ironia wobec mitów heroicznych
- **Jerzy Kawalerowicz** – "Pociąg" (1959), "Matka Joanna od Aniołów" (1961)
- **Wojciech Has** – "Rękopis znaleziony w Saragossie" (1964) – ulubiony film m.in. Jerry'ego Garcii
- **Andrzej Wajda** – "Popiół i diament" (1958), "Kanał" (1957) – trzecia część trylogii wojennej

## Polański i Skolimowski

Absolwenci z następnego pokolenia: **Roman Polański** (ur. 1933) – "Nóż w wodzie" (1962), pierwszy film fabularny; nominowany do Oscara, co otworzyło mu drogę na Zachód. **Jerzy Skolimowski** (ur. 1938) – "Rysopis" (1964), "Walkower" (1965); emigrował w 1967 r.

## Cenzura i granice wolności

Polska szkoła filmowa działała w ramach systemu, lecz potrafiła go oszukiwać. Filmy przesuwały granice: "Zaduszki" Konwickiego, "Niewinni czarodzieje" Wajdy – pokolenie powojenne z jego egzystencjalnymi pytaniami. Cenzura interweniowała, lecz nie zawsze skutecznie.

## Dziedzictwo

Polska szkoła filmowa umieściła kino polskie na mapie kinematografii światowej. Łódź do dziś jest centrum polskiego kina – filmówka wydała kolejne pokolenia wielkich twórców: Kieślowskiego, Zanussiego, Agnieszki Holland.`,
    resources: [
      {
        id: 'psf-1',
        title: 'Filmy polskiej szkoły filmowej – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=polska+szko%C5%82a+filmowa',
        source: 'NINATEKA – Narodowy Instytut Audiowizualny',
        description: 'Archiwalne filmy polskiej szkoły filmowej dostępne w cyfrowym archiwum NINATEKA.',
        year: 1956,
      },
      {
        id: 'psf-2',
        title: 'Plakaty i materiały filmowe – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=Plakaty%20filmowe',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane plakaty filmowe, programy kin i recenzje z okresu polskiej szkoły filmowej.',
        year: 1956,
        downloadable: true,
      },
      {
        id: 'psf-3',
        title: 'Akta cenzury filmowej',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=cenzury%20filmowej',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Komisji Kolaudacyjnej i cenzury filmowej z lat 1955–1965.',
        year: 1955,
      },
    ],
    relatedIds: ['kino-prl', 'wajda', 'cenzura-prl', 'socrealizm', 'teatr-prl'],
  },

  {
    id: 'literatura-prl',
    title: 'Literatura w PRL',
    subtitle: 'Mrożek, Różewicz, Białoszewski – pisarze między cenzurą a arcydziełem',
    category: 'kultura',
    tags: ['literatura', 'Mrożek', 'Różewicz', 'Białoszewski', 'Konwicki', 'Andrzejewski', 'ZLP', 'cenzura'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Literatura polska PRL wydała wybitnych twórców, którzy pisali wbrew lub obok cenzury: absurdysta Sławomir Mrożek, poeta Tadeusz Różewicz, prozaik Tadeusz Konwicki, kronikarz Miron Białoszewski. Każdy z nich stworzył dzieła trwałe – i każdy musiał liczyć się z systemem.',
    content: `## Związek Literatów Polskich i cenzura

Związek Literatów Polskich (ZLP) był oficjalną organizacją pisarzy, przez którą partia starała się kontrolować środowisko. Przynależność dawała przywileje (dostęp do domów twórczych, wczasów, stypendiów); wyrzucenie z ZLP oznaczało utratę możliwości publikacji. Cenzura przeczesywała każdy manuskrypt.

## Sławomir Mrożek (1930–2013)

Absurdysta i satyryk. Jego sztuki teatralne – "Tango" (1964), "Policja" (1958), "Emigranci" (1974) – przez groteskę i absurd komentowały totalitaryzm i kondycję człowieka. "Tango" wystawiano na całym świecie. W 1968 r. Mrożek podpisał protest przeciw inwazji na Czechosłowację i wyemigrował.

## Tadeusz Różewicz (1921–2014)

Poeta i dramaturg ukształtowany przez traumę Holokaustu i II wojny. Jego poezja – prosta, surowa, bez metafor – pytała o możliwość sztuki po Auschwitz. Dramaty ("Kartoteka", 1960; "Białe małżeństwo") były awangardowe i uznane zarówno w kraju, jak i za granicą.

## Miron Białoszewski (1922–1983)

Kronikarz codzienności i językowy eksperymentator. Jego "Pamiętnik z Powstania Warszawskiego" (1970) jest arcydziełem literatury faktu – napisanym kolokwialnym językiem ulicy, oddającym chaos i grozę powstania z perspektywy cywila. Autor "Obrotów rzeczy" i "Mylnych wzruszeń".

## Tadeusz Konwicki (1926–2015)

Prozaik i scenarzysta. Jego powieści – "Kronika wypadków miłosnych" (1974), "Mała apokalipsa" (1979, wydana w drugim obiegu) – łączyły autobiografię, politykę i metafizykę. "Mała apokalipsa" była ostrą satyrą na PRL, niemożliwą do legalnej publikacji.`,
    resources: [
      {
        id: 'lit-prl-1',
        title: 'Dzieła literatury polskiej PRL – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Dzie%C5%82a%20literatury%20polskiej',
        source: 'Biblioteka Narodowa / Polona',
        description: 'Zdigitalizowane wydania dzieł literackich PRL, programy teatralne i recenzje.',
        year: 1950,
        downloadable: true,
      },
      {
        id: 'lit-prl-2',
        title: 'Akta cenzury – ZLP i literatura',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=cenzury%20ZLP%20literatura',
        source: 'Naczelna Dyrekcja Archiwów Państwowych',
        description: 'Dokumenty Głównego Urzędu Kontroli Prasy dotyczące cenzury wydawnictw literackich.',
        year: 1949,
      },
      {
        id: 'lit-prl-3',
        title: 'Materiały edukacyjne – literatura PRL',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=literatura',
        source: 'Instytut Pamięci Narodowej',
        description: 'Opracowania o literaturze polskiej w PRL i jej relacjach z cenzurą.',
        year: 2018,
        downloadable: true,
      },
    ],
    relatedIds: ['cenzura-prl', 'drugi-obieg', 'milosz', 'herbert', 'szymborska'],
  },

  {
    id: 'wybory-prl',
    title: 'Wybory w PRL',
    subtitle: 'Fasada demokracji i "jedność moralno-polityczna narodu"',
    category: 'polityka',
    tags: ['wybory', 'fasada demokracji', 'PZPR', '99 procent', 'Front Jedności Narodu'],
    yearStart: 1947,
    yearEnd: 1989,
    summary: 'Wybory w PRL były starannie wyreżyserowaną fikcją demokratyczną. Kandydatury zatwierdzał Front Jedności Narodu kontrolowany przez PZPR. Oficjalne wyniki sięgały 99% poparcia – produkowane przez fałszowanie protokołów.',
    content: `Wybory w Polskiej Rzeczypospolitej Ludowej były jednym z filarów fasady demokratycznej systemu komunistycznego. Organizowane regularnie, służyły przede wszystkim legitymizacji władzy i demonstracji jedności społeczeństwa z partią.

**System wyborczy**

PRL posiadała formalnie wielopartyjny system: oprócz PZPR istniały ZSL (Zjednoczone Stronnictwo Ludowe) i SD (Stronnictwo Demokratyczne), a od 1956 roku – Koło Posłów Katolickich "Znak". Jednak wszystkie partie działały w ramach Frontu Jedności Narodu (FJN), który ustalał wspólne listy kandydatów. Wyborcy mogli "skreślać" kandydatów, ale lista była tak skonstruowana, że liczba kandydatów równała się liczbie miejsc – skreślenie wymagało osobnego czynu, a kabiny do głosowania były oddzielone od urn.

**Fałszerstwa wyborcze**

Szczególnie pierwsze wybory – referendum z 1946 roku i wybory z 1947 roku – były masowo fałszowane. W referendum z 28 czerwca 1946 roku komuniści sfałszowali wyniki: oficjalny wynik "3 razy tak" wynosił ok. 68%, podczas gdy rzeczywiste sondaże wykazywały, że blisko 70% odpowiedziało "nie" na pierwsze pytanie. Wybory z 1947 roku, mimo obecności zagranicznych obserwatorów, były zmasowanym fałszerstwem – prawdziwe zwycięstwo PSL Mikołajczyka zatuszowano.

**Rytuał wyborczy**

Od połowy lat 50. aż do 1989 roku wybory stały się rytuałem. Oficjalne wyniki osiągały 97–99,9% poparcia dla listy FJN. Obywatele byli mobilizowani do głosowania przez komitety blokowe, zakłady pracy, organizacje masowe. Nieobecność przy urnie mogła ściągnąć nieprzyjemne konsekwencje – rozmowy z przełożonym, notatki w aktach. Głosowanie w kabinie oznaczało demonstrację sprzeciwu.

**"Jedność moralno-polityczna narodu"**

Propagandowa formuła "jedności moralno-politycznej narodu" miała oznaczać pełne poparcie społeczeństwa dla polityki PZPR. Podawane wyniki – np. 99,8% w wyborach 1980 roku – były produkowane przez fałszowanie protokołów w komisjach wyborczych.

**Wybory 1989 roku**

Przełomem były wyspy częściowo wolne wybory z 4 czerwca 1989 roku, będące wynikiem Okrągłego Stołu. PZPR zagwarantowała sobie 65% miejsc w Sejmie i wszystkie miejsca w Senacie (nowo tworzonej izbie) były dostępne w pełni wolnych wyborach. "Solidarność" wygrała niemal wszystkie wolne mandaty, a poseł Tadeusz Mazowiecki został pierwszym niekomunistycznym premierem od 40 lat. Był to koniec systemu fasadowych wyborów.`,
    resources: [
      {
        id: 'wybory-1947-ipn',
        title: 'Fałszerstwa wyborów 1947 roku – dokumenty IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Fa%C5%82szerstwa%20wybor%C3%B3w%201947',
        source: 'IPN – Inwentarz Archiwów',
        description: 'Archiwalne materiały dokumentujące mechanizmy fałszowania wyborów w 1947 roku',
        year: 1947,
      },
      {
        id: 'wybory-1989-historia',
        title: 'Wybory 4 czerwca 1989 – materiały edukacyjne',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=wybory%204%20czerwca%201989',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły i materiały o przełomowych wyborach 1989 roku',
        year: 1989,
      },
    ],
    relatedIds: ['pzpr', 'okragly-stol', 'gomulka', 'gierek', 'jaruzelski'],
  },

  {
    id: 'rolnictwo-prl',
    title: 'Rolnictwo w PRL',
    subtitle: 'Kolektywizacja, spółdzielnie i kółka rolnicze',
    category: 'gospodarka',
    tags: ['rolnictwo', 'kolektywizacja', 'PGR', 'spółdzielnia', 'kółka rolnicze'],
    yearStart: 1944,
    yearEnd: 1989,
    summary: 'Rolnictwo w PRL było areną konfliktu między dążeniem władz do kolektywizacji a oporem chłopów. Polska jako jedyny kraj bloku sowieckiego nie przeprowadziła pełnej kolektywizacji. Państwowe Gospodarstwa Rolne i spółdzielnie produkcyjne sąsiadowały z prywatnymi gospodarstwami chłopskimi.',
    content: `Rolnictwo polskie w epoce PRL pozostawało w permanentnym konflikcie między komunistycznym programem kolektywizacji a tradycją indywidualnego gospodarowania, głęboko zakorzenioną w polskiej wsi.

**Reforma rolna 1944 i parcelacja**

Punktem wyjścia była reforma rolna PKWN z września 1944 roku, która rozparcelowała majątki ziemskie powyżej 50 ha (100 ha w przypadku ziemi ornej). Ziemia trafiła do chłopów bezrolnych i małorolnych, co chwilowo zyskało władzy popularność na wsi.

**Próba kolektywizacji (1948–1956)**

Wzorem sowieckim władze podjęły próbę kolektywizacji rolnictwa – tworzenia spółdzielni produkcyjnych na wzór kołchozów. Stosowano presję: podwyższone podatki od indywidualnych gospodarstw, przymusowe dostawy zbóż po niskich cenach (tzw. "kontyngenty"), represje wobec opornych. Mimo to chłopi masowo sabotowali kolektywizację. W 1956 roku kolektywizację faktycznie zawieszono – większość spółdzielni rozpadła się. Polska stała się wyjątkiem w bloku wschodnim: do końca PRL dominowały prywatne gospodarstwa chłopskie.

**Państwowe Gospodarstwa Rolne (PGR)**

Na dawnych majątkach ziemskich i ziemiach zachodnich tworzono PGR-y – państwowe przedsiębiorstwa rolne. Zatrudniały setki tysięcy pracowników. PGR-y cechowała niska efektywność, przerost zatrudnienia i marnotrawstwo. Po 1989 roku zlikwidowanie PGR-ów (ponad 1600 zakładów) spowodowało masowe bezrobocie w byłych pracowniczych osiedlach – problem odczuwalny do dziś.

**Kółka rolnicze i zaopatrzenie**

Indywidualni rolnicy zrzeszali się w kółkach rolniczych – organizacjach zapewniających dostęp do maszyn, nawozów i porad agronomicznych. Centrum obsługi rolnictwa stanowiły GS-y (Gminna Spółdzielnia) i SKR-y (Spółdzielnia Kółek Rolniczych). System reglamentacji środków produkcji (np. przydział nawozów czy paliwa) dawał władzy kolejne narzędzia kontroli.

**Kryzysy żywnościowe**

Mimo że Polska pozostała krajem z dominującym rolnictwem prywatnym, kryzysy żywnościowe były stałym elementem PRL: braki mięsa prowadziły do podwyżek cen w 1956, 1970, 1976 i 1980 roku. Paradoks polegał na tym, że kraj rolniczy nie mógł wyżywić własnych mieszkańców – efekt złej polityki cenowej i systemu obowiązkowych dostaw.

**Schyłek i transformacja**

W latach 80. rolnicy uzyskali możliwość zrzeszania się w niezależnych związkach (NSZZ "Solidarność" Rolników Indywidualnych). Po 1989 roku prywatne rolnictwo polskie weszło w trudny okres transformacji rynkowej, a po wstąpieniu do UE skorzystało z systemu dopłat bezpośrednich.`,
    resources: [
      {
        id: 'rolnictwo-reforma',
        title: 'Dekret PKWN o reformie rolnej – tekst źródłowy',
        type: 'akt',
        url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19440040017',
        source: 'ISAP – Internetowy System Aktów Prawnych',
        description: 'Oryginalny tekst dekretu PKWN z 6 września 1944 roku',
        year: 1944,
        downloadable: true,
      },
      {
        id: 'rolnictwo-pgr',
        title: 'Materiały o PGR-ach w zasobach archiwalnych',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=PGR%20ach',
        source: 'Szukaj w Archiwach',
        description: 'Dokumenty i akta dotyczące Państwowych Gospodarstw Rolnych',
      },
    ],
    relatedIds: ['reforma-rolna', 'gospodarka-prl', 'kartki-prl', 'czerwiec-1976', 'sierpien-1980'],
  },

  {
    id: 'telewizja-prl',
    title: 'Telewizja w PRL',
    subtitle: 'Dziennik Telewizyjny, Teleranek i ekran propagandy',
    category: 'kultura',
    tags: ['telewizja', 'DTV', 'Teleranek', 'propaganda', 'TVP', 'Dziennik'],
    yearStart: 1952,
    yearEnd: 1989,
    summary: 'Telewizja Polska była od początku narzędziem propagandy państwowej, ale jednocześnie dostarczała rozrywki milionom Polaków. "Dziennik Telewizyjny" był synonimem kłamstwa władzy, ale "Teleranek", "Kobra" i "Czterdziestolatek" budowały wspólną kulturę.',
    content: `Telewizja Polska (TVP) – narzędzie propagandy i codzienne okno na świat milionów Polaków – zajmuje szczególne miejsce w zbiorowej pamięci o PRL.

**Początki telewizji w Polsce**

Pierwsze regularne emisje telewizyjne w Polsce ruszyły w 1952 roku – Polska jako jeden z pierwszych krajów bloku wschodniego posiadała własną telewizję. Do połowy lat 60. telewizory były luksusem; z czasem stały się obowiązkowym elementem wyposażenia każdego domu. W 1971 roku uruchomiono drugi kanał TVP.

**Dziennik Telewizyjny – głos partii**

Najważniejszą pozycją programową był Dziennik Telewizyjny (DTV) – codzienny serwis informacyjny będący tubą propagandową władzy. DTV znany był z manipulacji, przemilczeń i kłamstw. Szczególnie w czasie stanu wojennego stał się synonimem propagandy – prowadzący byli mundurami wojskowymi lub głosili decyzje władz. Widzowie potocznie nazywali DTV "kłamliwe wiadomości". Paradoksem było to, że oglądalność DTV była ogromna – nie dlatego, że mu wierzono, ale dlatego, że był jedynym ogólnodostępnym serwisem informacyjnym.

**Rozrywka i kultura**

Obok propagandy telewizja dostarczała rozrywki:
- **Teleranek** (od 1967) – niedzielny program dla dzieci, kultowy dla całych pokoleń
- **Kobra** – cykl filmów sensacyjnych
- **Czterdziestolatek** (1974–1977) – serial komediowy Jerzego Gruzy, śmieszący i krytykujący z dystansem
- **Stawka większa niż życie** (1967–1968) – serial szpiegowski o Hansie Klossie, jeden z najchętniej oglądanych seriali w historii polskiej TV
- **Janosik** (1973–1974) – historyczny serial przygodowy
- **Alternatywy 4** (1983) – serial Stanisława Barei, mistrzostwo satyrycznego opisu PRL

**Telewizja a propaganda stanu wojennego**

13 grudnia 1981 roku, gdy ogłoszono stan wojenny, telewizja stała się kluczowym narzędziem rządzenia. Generał Jaruzelski przemawiał w mundurze. Cywilni prezenterzy zostali zastąpieni przez mundurowych. Wiele osób wyłączyło telewizory na znak protestu lub przykleiło do ekranów czarną taśmę żałobną.

**Obejście propagandy**

W dekadzie gierkowskiej (lata 70.) telewizja była relatywnie mniej upolityczniona – inwestowano w rozrywkę i programy kulturalne. W latach 80. coraz więcej Polaków odbierało zachodnią telewizję przez anteny satelitarne (Eutelsat) lub magnetowidy z kaseteami VHS przemycanymi z Zachodu.

**Dziedzictwo**

Telewizja PRL odcisnęła trwały ślad w kulturze polskiej. Seriale, dziecięce programy animowane (Bolek i Lolek, Reksio, Miś Uszatek, Zaczarowany ołówek) i teleturnieje (Wielka Gra, Familiada) były wspólnym doświadczeniem pokoleń.`,
    resources: [
      {
        id: 'tvp-ninateka',
        title: 'Archiwalne programy TVP w NINATECE',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=TVP+archiwum',
        source: 'NINATEKA',
        description: 'Cyfrowe archiwum TVP z programami i serialami z okresu PRL',
      },
      {
        id: 'tvp-pkf-youtube',
        title: 'Archiwalne materiały telewizyjne na YouTube',
        type: 'film',
        url: 'https://www.youtube.com/results?search_query=polska+telewizja+prl+archiwum',
        source: 'YouTube',
        description: 'Historyczne nagrania i programy telewizyjne z epoki PRL',
      },
    ],
    relatedIds: ['radio-prl', 'propaganda-prl', 'polska-kronika-filmowa', 'cenzura-prl', 'stan-wojenny'],
  },

  {
    id: 'zbrodnie-stalinizmu',
    title: 'Zbrodnie stalinizmu w Polsce',
    subtitle: 'Terror, procesy pokazowe i egzekucje 1944–1956',
    category: 'represje',
    tags: ['stalinizm', 'UB', 'procesy pokazowe', 'tortury', 'Mokotów', 'więźniowie polityczni'],
    yearStart: 1944,
    yearEnd: 1956,
    summary: 'Lata stalinowskie (1944–1956) były okresem masowych represji, tortur i egzekucji sądowych. UB aresztowało dziesiątki tysięcy żołnierzy AK, działaczy PSL i opozycjonistów. Procesy pokazowe służyły eliminacji politycznych przeciwników i zastraszeniu społeczeństwa.',
    content: `Stalinizm w Polsce (1944–1956) oznaczał brutalną sowietyzację kraju połączoną z masowym terrorem wymierzonym w rzeczywistych i wyobrażonych przeciwników nowej władzy.

**Skala represji**

W latach 1944–1956 aparat bezpieczeństwa aresztował ponad 300 tysięcy ludzi. Więzienia pęczniały: na Mokotowie w Warszawie, w Rawiczu, Wronkach i Fordonie przetrzymywano tysiące więźniów politycznych. Szacuje się, że w tym okresie stracono co najmniej 6 tysięcy osób – żołnierzy podziemia, byłych oficerów AK, polityków opozycji i działaczy społecznych.

**Tortury i metody śledcze**

Funkcjonariusze UB stosowali wyrafinowane techniki tortur: bicie, pozbawienie snu ("konwejer" – kilkudziesięciogodzinne przesłuchania bez przerwy), zmuszanie do stania, zimno, głodzenie, symulowane rozstrzelania. Zeznania wymuszano brutalnością, a oskarżeni podpisywali sfabrykowane protokoły. Szczególnie znane stały się metody stosowane przez płk. Józefa Różańskiego (naczelnika Departamentu Śledczego MBP) i jego podwładnych.

**Procesy pokazowe**

Procesy polityczne były starannie wyreżyserowanymi spektaklami:
- **Proces generałów** (1951) – sądzono wyższych oficerów Wojska Polskiego pod zarzutem szpiegostwa
- **Proces Rotmistrza Witolda Pileckiego** (1948) – bohater Auschwitz skazany na śmierć i rozstrzelany
- **Procesy żołnierzy AK i NSZ** – tysiące partyzantów podziemia sądzone jako "bandyci" i "faszyści"
- **Proces biskupa Kaczmarka** (1953) – próba zastraszenia Kościoła katolickiego

**Więzienie Mokotów**

Słynne więzienie na Rakowieckiej w Warszawie stało się symbolem stalinowskiego terroru. Tu wykonywano większość egzekucji – wieszając lub strzelając w tył głowy. Ciał nie wydawano rodzinom; miejsca pochówku utrzymywano w tajemnicy przez dekady. Dopiero po 1989 roku zidentyfikowano część szczątków w kwaterze "Ł" na Powązkach.

**Więźniowie Mokotowa**

Wśród zamęczonych i straconych: Witold Pilecki (1948), gen. August Emil Fieldorf "Nil" (1953), Zygmunt Szendzielarz "Łupaszko" (1951), Stanisław Kasznica (1948), Henryk Flame "Bartek" (1947). Wielu oficerów i żołnierzy, którzy przeżyli obozy NKVD i obozy koncentracyjne, zginęło z rąk polskich stalinistów.

**Ofiary spośród elit**

Terror dotknął również elity: działaczy PSL (Stanisław Mierzwa i inni), polityków Stronnictwa Pracy, byłych ministrów rządu emigracyjnego, inteligencję, duchownych. Sprzyjał mu donos – donosiciele mogli otrzymać korzyści, a inwigilacja obejmowała sąsiadów, znajomych, a nawet rodziny.

**Destalinizacja i rehabilitacje**

Po śmierci Stalina (marzec 1953) represje stopniowo słabły. Przełom nastąpił po XX Zjeździe KPZS (1956) – referat Chruszczowa otworzył falę rehabilitacji. Uwolniono więźniów, zrehabilitowano część ofiar, postawiono przed sądem niektórych funkcjonariuszy UB (m.in. Różański skazany w 1957 roku). Jednak pełna prawda o zbrodniach stalinizmu była oficjalnie przemilczana aż do 1989 roku.`,
    resources: [
      {
        id: 'zbrodnie-ipn',
        title: 'Zbrodnie stalinizmu – baza IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=zbrodnie+stalinizmu',
        source: 'Instytut Pamięci Narodowej',
        description: 'Akta śledztw i dokumenty dotyczące zbrodni aparatu bezpieczeństwa 1944–1956',
      },
      {
        id: 'zbrodnie-mokotow',
        title: 'Więzienie Mokotów – historia i ofiary',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=zbrodnie%20stalinizmu',
        source: 'Przystanek Historia IPN',
        description: 'Opracowania historyczne o więzieniu na Rakowieckiej i ofiarach stalinizmu',
      },
      {
        id: 'zbrodnie-pilecki',
        title: 'Proces i egzekucja rtm. Witolda Pileckiego',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Pilecki+proces',
        source: 'IPN',
        description: 'Dokumenty procesu Pileckiego z 1948 roku – akta śledztwa i wyroku',
        year: 1948,
      },
    ],
    relatedIds: ['ub', 'represje-polityczne', 'pilecki', 'bierut', 'zolnierze-wykletci', 'wiezienia-polityczne'],
  },

  {
    id: 'hermaszewski',
    title: 'Mirosław Hermaszewski',
    subtitle: 'Pierwszy i jedyny Polak w kosmosie – 1978',
    category: 'osoby',
    tags: ['kosmos', 'Sojuz', 'Interkosmos', 'astronauta', 'pilot', '1978'],
    yearStart: 1941,
    yearEnd: 2022,
    summary: 'Mirosław Hermaszewski – jedyny Polak, który poleciał w kosmos. 27 czerwca 1978 roku wystartował na pokładzie statku kosmicznego Sojuz 30 w ramach programu Interkosmos. Lot trwał niemal 8 dób i stał się największym triumfem propagandowym PRL lat siedemdziesiątych.',
    content: `Mirosław Hermaszewski (1941–2022) – generał brygady, pilot doświadczalny i kosmonauta, jedyny Polak, który przebywał w przestrzeni kosmicznej.

**Droga do kosmosu**

Urodzony w Lipnikach na Wołyniu, wychował się w Polsce. Skończył Wyższą Oficerską Szkołę Lotniczą w Dęblinie i zdobył kwalifikacje pilota doświadczalnego. W 1976 roku wybrano go – spośród kilkuset kandydatów – do radzieckiego programu Interkosmos, który miał umożliwić obywatelom państw bloku wschodniego udział w lotach kosmicznych jako demonstrację sojuszu ze ZSRR.

**Lot kosmiczny 1978**

27 czerwca 1978 roku Hermaszewski i radziecki kosmonauta Piotr Klimuk wystartowali ze stanowiska Bajkonur na Sojuzie 30. Misja trwała 7 dób, 22 godziny i 2 minuty. Na orbicie prowadzili eksperymenty naukowe, m.in. fotografowali Ziemię (w tym terytorium Polski), badali wpływ nieważkości na organizm, prowadzili obserwacje astronomiczne. Lądowanie nastąpiło 5 lipca 1978 roku.

**Propaganda i realia**

Lot stał się wydarzeniem bez precedensu propagandowego. Władze PRL nadały mu ogromną oprawę medialną: Hermaszewski był pokazywany jako triumf socjalizmu i dowód na równouprawnienie Polski w "rodzinie narodów socjalistycznych". Dzieci w szkołach pisały prace o kosmonautach, ulice i szkoły nadawano imię Hermaszewskiego jeszcze za jego życia. Sam kosmonauta, choć świadomy instrumentalizacji swojego lotu, z pokorą przyjmował te honory.

W rzeczywistości program Interkosmos był przede wszystkim polityczny: ZSRR chciał zademonstrować, że "braci" przyjmuje do elitarnego klubu potęg kosmicznych. Polska płaciła za uczestnictwo w programie – zarówno finansowo, jak i politycznie.

**Po locie**

Po powrocie Hermaszewski otrzymał tytuł Bohatera Związku Radzieckiego (jako pierwszy Polak po II wojnie światowej) i Bohatera Socjalistycznej Pracy PRL. Kontynuował karierę wojskową, dosłużył się stopnia generała. Po 1989 roku angażował się w działalność publiczną, był ambasadorem RP. Jego lot pozostaje unikatowym wydarzeniem w historii polskiej nauki i techniki.

**Dziedzictwo**

Hermaszewski jest jedynym Polakiem w kosmosie – Polska od lat nie uczestniczyła w programach kosmicznych z udziałem człowieka. Wstąpienie do ESA dało nowe możliwości, jednak do 2024 roku żaden Polak nie wrócił na orbitę. Hermaszewski inspirował pokolenia Polaków do zainteresowania nauką i astronomią.`,
    resources: [
      {
        id: 'hermaszewski-film',
        title: 'Lot Hermaszewskiego – kroniki filmowe 1978',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Hermaszewski+kosmos',
        source: 'NINATEKA',
        description: 'Archiwalne kroniki filmowe dokumentujące start, lot i powrót Hermaszewskiego',
        year: 1978,
      },
      {
        id: 'hermaszewski-pkf',
        title: 'Polska Kronika Filmowa – Lot Sojuzem 30',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'PKF / NINATEKA',
        description: 'Kroniki PKF relacjonujące misję kosmiczną Sojuz 30 z Hermaszewskim na pokładzie',
        year: 1978,
      },
      {
        id: 'hermaszewski-ipn',
        title: 'Interkosmos i polska polityka kosmiczna',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Hermaszewski+Interkosmos',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o programie Interkosmos i polskim udziale w radzieckich lotach kosmicznych',
        year: 1978,
      },
    ],
    relatedIds: ['propaganda-prl', 'gierek', 'nauka-prl', 'sport-prl'],
  },

  {
    id: 'niemen-czeslaw',
    title: 'Czesław Niemen',
    subtitle: 'Legenda polskiej muzyki – od bigbitu po awangardę',
    category: 'kultura',
    tags: ['muzyka', 'rock', 'Niemen', 'bigbit', 'pop', 'psychodelia', 'artysta'],
    yearStart: 1939,
    yearEnd: 2004,
    summary: 'Czesław Niemen (1939–2004) – jeden z największych polskich muzyków wszech czasów. Zaczynał od bigbitu, tworzył przeboje ("Dziwny jest ten świat"), sięgał po psychodelię, jazz-rock i muzykę elektroniczną. Artysta niepokory i oryginalności, porównywany na Zachodzie z największymi gwiazdami.',
    content: `Czesław Niemen (właśc. Czesław Juliusz Wydrzycki, 1939–2004) – piosenkarz, kompozytor, multiinstrumentalista i aranżer, jeden z symboli polskiej muzyki popularnej i rockowej.

**Początki – bigbit**

Urodzony na Kresach (Stare Wasiliszki, dziś Białoruś), po wojnie wychował się w Polsce. Ukończył gdański Wydział Pedagogiczny PWSM. W połowie lat 60. dołączył do grupy Akwarele, a potem Niebiesko-Czarnych – czołowego polskiego zespołu bigbitowego. Szybko wyróżnił się niesamowitą ekspresją głosu i charyzmatyczną sceniczną obecnością.

**Przełom: "Dziwny jest ten świat" (1967)**

Festiwal Piosenki Polskiej w Opolu 1967 roku stał się punktem zwrotnym. Niemen zaśpiewał "Dziwny jest ten świat" – pieśń o miłości, pokoju i proteście przeciwko złu – i zdobył Grand Prix. Tekst był niezwykły jak na PRL: bez optymizmu socrealistycznego, z filozoficznym niepokojem. Piosenka stała się hymnem pokolenia i do dziś pozostaje klasykiem.

**Psychodelia i awangarda**

Pod koniec lat 60. Niemen radykalnie zmienił kierunek. Album "Dziwny jest ten świat" (1967) był pop-rockiem, ale kolejne – "Sukces" (1968) i "Enigmatic" (1970) – wkroczyły w psychodelię, jazz-rock i muzykę klasyczną. Współpracował z najlepszymi polskimi muzykami jazzowymi. Albumy "Niemen Enigmatic" (1970) i "Ode to Venus" (1973) zdumiały Europę – firma CBS wydała je na Zachodzie, gdzie porównywano Niemena do Hendrixa, Colemana i Led Zeppelin.

**SBB i muzykowanie w PRL**

Niemen współpracował z grupą SBB (Józef Skrzek), tworząc progresywnego rock-jazz. Nagrywał też dla wschodnioniemieckich i radzieckich wytwórni. PAGART (Polska Agencja Artystyczna) kontrolowała jego wyjazdy i kontrakty, ale Niemen cieszył się stosunkową swobodą ze względu na sukcesy zagraniczne, które przynosiły PRL dewizowe dochody.

**Lata 80. i powrót do korzeni**

W latach 80. Niemen sięgnął po muzykę elektroniczną i syntezatory. Wydał albumy "Postscriptum" (1985) i "Nie" (1987). Po 1989 roku kontynuował działalność artystyczną, grał dla nowych pokoleń. Pracował do końca życia – ostatni album nagrał na rok przed śmiercią. Zmarł na raka w Warszawie w 2004 roku.

**Dziedzictwo**

Niemen jest dla polskiej muzyki tym, czym Hendrix dla rocka angloamerykańskiego – artystą, który przekroczył własną epokę i gatunki. Jego teksty, przede wszystkim do poezji Norwida ("Bema pamięci żałobny rapsod"), Kochanowskiego i własne, łączyły kulturę wysoką z popularną. Nagroda Fryderyk Lifetime Achievement (2004), setki coverów i nieustanna obecność w popkulturze świadczą o jego ponadczasowości.`,
    resources: [
      {
        id: 'niemen-ninateka',
        title: 'Czesław Niemen – archiwalne nagrania w NINATECE',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Niemen',
        source: 'NINATEKA',
        description: 'Archiwalne nagrania telewizyjne i filmowe z udziałem Czesława Niemena',
      },
      {
        id: 'niemen-youtube',
        title: 'Niemen – Dziwny jest ten świat (1967)',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Niemen+Dziwny+jest+ten+świat+1967',
        source: 'YouTube',
        description: 'Historyczne nagranie przełomowego występu Niemena na festiwalu w Opolu',
        year: 1967,
      },
      {
        id: 'niemen-polona',
        title: 'Recenzje i materiały prasowe o Niemenie – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Niemen+muzyka',
        source: 'Polona.pl',
        description: 'Archiwalne artykuły prasowe o Niemenie z okresu PRL',
      },
    ],
    relatedIds: ['muzyka-rockowa', 'jazz-prl', 'kultura-prl', 'cenzura-prl', 'radio-prl'],
  },

  {
    id: 'anna-german',
    title: 'Anna German',
    subtitle: 'Ulubiona piosenkarka Polaków i ZSRR',
    category: 'kultura',
    tags: ['muzyka', 'piosenka', 'Anna German', 'śpiew', 'ZSRR', 'Eurydyka', 'wypadek'],
    yearStart: 1936,
    yearEnd: 1982,
    summary: 'Anna German (1936–1982) – piosenkarka o niezwykłym, lirycznym sopranowym głosie, uwielbiana zarówno w Polsce, jak i w ZSRR. Przerwał jej karierę tragiczny wypadek samochodowy w 1967 roku, z którego cudem wróciła na scenę. Jej piosenki jak "Człowieczy los" i "Tańczące Eurydyki" zostały klasykami.',
    content: `Anna German (właśc. Anna Wiktoria German, 1936–1982) – polsko-radziecka piosenkarka, jedna z najbardziej kochanych artystek epoki PRL.

**Pochodzenie i dzieciństwo**

Urodzona w Urgenczu (dziś Uzbekistan) w rodzinie o korzeniach holendersko-mennonickich. Jej ojciec Eugeniusz German został rozstrzelany przez NKWD w 1938 roku jako "wróg ludu". Matka Irma z córką przeżyły wojnę w Azji Środkowej i w 1945 roku osiedliły się we Wrocławiu. Anna studiowała geologię na Uniwersytecie Wrocławskim, ale muzyka okazała się jej prawdziwym powołaniem.

**Kariera i przeboje**

Debiutowała w połowie lat 50. Przełomem był festiwal w Opolu 1962 roku – zdobyła wyróżnienie i weszła do pierwszej ligi polskich artystów estrady. Nagrywała dla Polskich Nagrań, wydała dziesiątki singli i albumów. Jej interpretacje były wyjątkowe: głos o krystalicznej czystości, niezwykła dykcja i głęboka emocjonalność. Przeboje: "Tańczące Eurydyki" (1964), "Człowieczy los", "Być może" (pol. wersja włoskiego "Voglio essere donna"), "Byłam różą" i wiele innych.

**Sukces w ZSRR**

Anna German cieszyła się w Związku Radzieckim popularnością nieporównywalną z żadnym innym polskim artystą. Radzieckie nagrania – zwłaszcza "Nadzieja" (Надежда, 1970) – stały się hymnami pokoleniowymi. Śpiewała po rosyjsku, włosku, angielsku i ukraińsku. Radzieckie studia płytowe Melodija zapełniały hale wydawnicze jej nagraniami. Była gwiazdą programów telewizyjnych w całym bloku wschodnim.

**Tragiczny wypadek (1967)**

W nocy z 26 na 27 sierpnia 1967 roku, w drodze powrotnej z Turynu do Mediolanu, samochód, którym jechała, wpadł w poślizg i z impetem uderzył w barierę. Anna German doznała wielokrotnych złamań obu nóg, kręgosłupa, ramienia i miednicy. Przez wiele miesięcy leżała w szpitalu w ciężkim stanie. Włoscy i polscy lekarze cudem uratowali jej życie.

**Powrót na scenę**

Po blisko trzech latach rehabilitacji Anna German powróciła na scenę – jako przykład niewyobrażalnej siły woli. Pierwszy koncert po wypadku odbył się w 1970 roku; widownia przywitała ją owacją na stojąco. Kontynuowała karierę przez kolejne lata, nagrywając i koncertując mimo chronicznego bólu. W 1975 roku wyszła za mąż za inżyniera Zbigniewa Tucholskiego i w 1977 urodziła syna Zbyszka.

**Choroba i śmierć**

W 1980 roku zdiagnozowano u niej mięsaka kości. Mimo chemioterapii i operacji choroba postępowała. Anna German zmarła 25 sierpnia 1982 roku w Warszawie. Miała 46 lat. Jej pogrzeb zgromadził tysiące żałobników.

**Pamięć i kult**

Anna German jest czczona do dziś zarówno w Polsce, jak i w Rosji, na Ukrainie i w innych krajach byłego ZSRR. Jej życie stało się kanwą rosyjskiego serialu telewizyjnego "Anna German" (2012), który był wielkim hitem. Muzeum i ekspozycje poświęcone jej życiu działają we Wrocławiu i w krajach byłego ZSRR.`,
    resources: [
      {
        id: 'german-ninateka',
        title: 'Anna German – archiwalne nagrania telewizyjne',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Anna+German',
        source: 'NINATEKA',
        description: 'Archiwalne nagrania telewizyjne z udziałem Anny German z lat 60. i 70.',
      },
      {
        id: 'german-youtube',
        title: 'Anna German – Tańczące Eurydyki',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Anna+German+Tańczące+Eurydyki',
        source: 'YouTube',
        description: 'Nagrania z udziałem Anny German – przeboje i archiwalne koncerty',
      },
      {
        id: 'german-polona',
        title: 'Materiały prasowe o Annie German – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Anna+German+piosenkarka',
        source: 'Polona.pl',
        description: 'Archiwalne artykuły i wywiady z Anną German z prasy PRL',
      },
    ],
    relatedIds: ['kultura-prl', 'muzyka-rockowa', 'radio-prl', 'telewizja-prl'],
  },

  {
    id: 'zmp',
    title: 'Związek Młodzieży Polskiej (ZMP)',
    subtitle: 'Komunistyczna organizacja młodzieżowa 1948–1957',
    category: 'społeczeństwo',
    tags: ['ZMP', 'indoktrynacja', 'młodzież', 'komunizm', 'szkoła', 'przodownicy pracy'],
    yearStart: 1948,
    yearEnd: 1957,
    summary: 'Związek Młodzieży Polskiej (1948–1957) – masowa organizacja komunistyczna wzorowana na radzieckim Komsomolu. Skupiała ponad milion członków, prowadziła indoktrynację ideologiczną w szkołach i zakładach pracy, organizowała brygady młodzieżowe przy budowie Nowej Huty i MDM. Rozwiązana po Październiku 1956.',
    content: `Związek Młodzieży Polskiej (ZMP) – organizacja komunistyczna powołana w 1948 roku jako masowe zrzeszenie młodzieży, będące głównym instrumentem ideologicznej formacji młodego pokolenia.

**Powstanie i struktura**

ZMP powstało w lipcu 1948 roku z połączenia kilku organizacji młodzieżowych (m.in. Organizacji Młodzieży Towarzystwa Uniwersytetu Robotniczego i Związku Walki Młodych). Wzorowano je na sowieckim Komsomole. Organizacja była podporządkowana PZPR i działała na wszystkich szczeblach: od podstaw zakładowych i szkolnych po centralne struktury. Przynależność była formalnie dobrowolna, ale w praktyce wywierano silną presję – brak legitymacji ZMP oznaczał problemy w szkole i pracy.

**Indoktrynacja i działalność**

ZMP prowadziło intensywną działalność ideologiczną:
- **Kółka samokształceniowe** z obowiązkowym studiowaniem Marksa, Engelsa, Lenina i Stalina
- **Akademie ku czci** – uroczystości rocznicowe rewolucji październikowej, urodzin Stalina, Bieruta
- **Brygady pracy** – ochotnicze (faktycznie przymusowe) wyjazdy do budowy Nowej Huty, MDM, elektryfikacji wsi
- **Informowanie** – ZMP-owcy donosili na uczniów, nauczycieli i rodziców o "wrogich" wypowiedziach
- **Współzawodnictwo pracy** – ruch przodownictwa pracy wśród młodych robotników

**Skala i przodownicy**

W szczytowym okresie (1952–1953) ZMP liczyło ponad 2 miliony członków. Organizacja kreowała wzorce osobowe: przodownicy pracy (wyrabiający kilkaset procent normy), wzorowi uczniowie szkoły ZMP, aktywni działacze. Wincenty Pstrowski – górnik postulujący "kto wytworzy więcej ode mnie" – stał się oficjalnym bohaterem propagandowym.

**ZMP w szkołach**

Szkoły stały się polem szczególnie intensywnej działalności ZMP. Nauczyciele byli oceniani przez pryzmat zaangażowania w pracę ZMP. Lekcje historii, geografii, biologii przepajano marksistowską ideologią. Uczniowie "aktywni" w ZMP mieli łatwiejszy dostęp do uczelni wyższych. Brak aktywności lub związki z Kościołem były piętnem.

**Kryzys i rozwiązanie**

Po śmierci Stalina (1953) i XX Zjeździe KPZS (1956) ZMP weszło w ostry kryzys. Młodzież – wcześniej szczerze czy pozornie zaangażowana – zaczęła masowo kwestionować ideologię. Wystąpienia w 1956 roku (zarówno po poznańskim Czerwcu, jak i przy okazji Październikowego Przełomu) ujawniły głęboki kryzys organizacji. W grudniu 1956 roku ZMP samorozwiązało się – na jego miejsce powołano kilka nowych, mniej zideologizowanych organizacji (m.in. ZMS – Związek Młodzieży Socjalistycznej).

**Ocena i pamięć**

Doświadczenie ZMP jest złożone. Część członków szczerze wierzyła w ideały budowy lepszego świata; wielu z nich po 1956 roku stało się krytykami systemu (m.in. Jacek Kuroń był aktywnym ZMP-owcem). ZMP wyrządziło jednak realne szkody: przez denuncjacje, zniszczenie kariery "nieprawomyślnych", formatowanie całego pokolenia według ideologicznego szablonu.`,
    resources: [
      {
        id: 'zmp-ipn',
        title: 'ZMP – dokumenty i materiały IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Zwi%C4%85zek+M%C5%82odzie%C5%BCy+Polskiej',
        source: 'IPN',
        description: 'Akta organizacyjne ZMP i dokumenty dotyczące działalności w szkołach',
      },
      {
        id: 'zmp-pkf',
        title: 'ZMP w kronikach filmowych',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'NINATEKA / PKF',
        description: 'Kroniki filmowe dokumentujące wiece, brygady pracy i działalność ZMP',
      },
      {
        id: 'zmp-polona',
        title: 'Prasa ZMP – Sztandar Młodych i inne tytuły',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Sztandar+M%C5%82odych+ZMP',
        source: 'Polona.pl',
        description: 'Archiwalne numery "Sztandaru Młodych" – organu prasowego ZMP',
      },
    ],
    relatedIds: ['edukacja-prl', 'propaganda-prl', 'dzieci-prl', 'bierut', 'socrealizm'],
  },

  {
    id: 'solidarnosc-walczaca',
    title: 'Solidarność Walcząca',
    subtitle: 'Radykalne podziemie – obalić komunizm, nie negocjować',
    category: 'opozycja',
    tags: ['Solidarność Walcząca', 'Mrozowicki', 'podziemie', 'niepodległość', 'antykomunizm', 'Wrocław'],
    yearStart: 1982,
    yearEnd: 1992,
    summary: 'Solidarność Walcząca – podziemna organizacja powstała we Wrocławiu w 1982 roku, radykalniejsza od głównego nurtu podziemnej Solidarności. Odrzucała jakikolwiek kompromis z komunistami, dążąc do pełnego obalenia systemu i odzyskania niepodległości. Była silnie inwigilowana przez SB.',
    content: `Solidarność Walcząca (SW) – konspiracyjna organizacja powołana we Wrocławiu w czerwcu 1982 roku przez Kornela Morawieckiego, reprezentująca radykalne skrzydło oporu po wprowadzeniu stanu wojennego.

**Powstanie i ideologia**

Po 13 grudnia 1981 roku podziemna Solidarność – skupiona głównie wokół Tymczasowej Komisji Koordynacyjnej (TKK) – przyjęła strategię samoobrony społecznej i stopniowego wymuszania ustępstw od władzy. Kornel Morawiecki – naukowiec z Politechniki Wrocławskiej – uznał tę strategię za zbyt ugodową. W czerwcu 1982 roku powołał Solidarność Walczącą, której program zakładał obalenie komunizmu, a nie negocjacje z nim.

**Program i działalność**

SW stała na stanowisku:
- Całkowitego odrzucenia dialogu z komunistami jako legitymizacji bezprawnego systemu
- Dążenia do niepodległości Polski od ZSRR (co w głównym nurcie Solidarności uważano za nierealistyczne)
- Oporu aktywnego: sabotaż, akcje plakatowe, wydawnictwa konspiracyjne
- Kontaktów z emigracją i zachodnimi organizacjami antykomunistycznymi

Solidarność Walcząca wydawała własne pismo (też zatytułowane "Solidarność Walcząca"), produkowała ulotki i pisma, organizowała akcje ulotkowe. Wrocław był jej centrum, ale działała też w Gdańsku, Krakowie, Warszawie.

**Konflikty z TKK**

Radykalizm SW prowadził do napięć z głównym nurtem podziemnej Solidarności. TKK (Zbigniew Bujak, Bogdan Lis) zarzucała SW awanturnictwo i narażanie konspiratorów na represje bez perspektyw sukcesu. SW z kolei uważała TKK za zbyt ugodową wobec reżimu. Podziały te odzwierciedlały głębszy spór o strategię: samoograniczająca się rewolucja vs. pełna konfrontacja.

**Inwigilacja SB**

Solidarność Walcząca była intensywnie penetrowana przez Służbę Bezpieczeństwa. Morawiecki był kilkakrotnie aresztowany. Mimo to organizacja funkcjonowała przez całe lata 80., finansowana m.in. ze środków przekazywanych przez Polonię i zachodnie centrale związkowe.

**Okrągły Stół i po 1989**

SW bojkotowała Okrągły Stół, uznając rozmowy z komunistami za zdradzenie ideałów Solidarności. Po 1989 roku część jej działaczy weszła do polityki – Morawiecki założył Partię "X", a potem inne ugrupowania. SW rozwiązała się formalnie w 1992 roku.

**Ocena**

Solidarność Walcząca pozostaje kontrowersyjną organizacją. Zwolennicy podkreślają jej bezkompromisowość i trafną diagnozę komunizmu jako systemu nie do reformy. Krytycy wskazują na izolację polityczną, brak realistycznej strategii i potencjalne szkody dla bezpieczeństwa konspiratorów. Historia przyznała rację obu stronom: komunizm upadł, ale nie przez rewolucję, a przez negocjacje.`,
    resources: [
      {
        id: 'sw-ipn',
        title: 'Solidarność Walcząca – dokumenty IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Solidarno%C5%9B%C4%87+Walcz%C4%85ca',
        source: 'IPN',
        description: 'Akta SB dotyczące inwigilacji Solidarności Walczącej i Kornela Morawieckiego',
      },
      {
        id: 'sw-szukaj',
        title: 'Archiwum SW – Szukaj w Archiwach',
        type: 'dokument',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Solidarno%C5%9B%C4%87+Walcz%C4%85ca',
        source: 'Szukaj w Archiwach',
        description: 'Dokumenty i materiały archiwalne dotyczące działalności SW',
      },
      {
        id: 'sw-ph',
        title: 'Solidarność Walcząca – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Solidarno%C5%9B%C4%87+Walcz%C4%85ca',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły i opracowania historyczne o Solidarności Walczącej',
      },
    ],
    relatedIds: ['podziemna-solidarnosc', 'solidarnosc', 'stan-wojenny', 'internowanie', 'bujak-zbigniew'],
  },

  {
    id: 'bujak-zbigniew',
    title: 'Zbigniew Bujak',
    subtitle: 'Legendarny lider podziemnej Solidarności',
    category: 'osoby',
    tags: ['Solidarność', 'podziemie', 'TKK', 'Mazowsze', 'ukrywanie', 'opozycja'],
    yearStart: 1954,
    yearEnd: 9999,
    summary: 'Zbigniew Bujak – lider Solidarności regionu Mazowsze, jeden z najważniejszych działaczy podziemnej Solidarności po 13 grudnia 1981 roku. Przez 4,5 roku ukrywał się przed SB, stając się symbolem oporu. Schwytany w 1986 roku, zwolniony na mocy amnestii.',
    content: `Zbigniew Bujak (ur. 1954) – elektryk z Ursusa, przewodniczący Zarządu Regionu Mazowsze NSZZ "Solidarność", jeden z filarów podziemnej struktury związkowej w stanie wojennym i po nim.

**Działalność przed stanem wojennym**

Bujak był liderem Solidarności w Ursusie i Mazowszu – największym i najbardziej wpływowym regionie związku. W sierpniu 1980 roku uczestniczył w strajku i negocjacjach w Ursusie. Szybko wyrósł na jednego z kluczowych działaczy – sprawnego organizatora i twardego negocjatora.

**Podziemie – 4,5 roku ucieczki**

Gdy 13 grudnia 1981 roku ogłoszono stan wojenny, Bujak uniknął internowania i zszedł do podziemia. Przez 4,5 roku – do maja 1986 roku – ukrywał się przed Służbą Bezpieczeństwa, stając się symbolem oporu. SB poszukiwało go intensywnie; wyznaczono nagrodę za jego schwytanie, prowadzono kilka dużych operacji.

Bujak kierował Tymczasową Komisją Koordynacyjną (TKK), która koordynowała działania podziemnej Solidarności w całej Polsce. Wydawał instrukcje, spotykał się z innymi działaczami, udzielał wywiadów zachodnim mediom – wszystko to w głębokiej konspiracji. Zmieniał kryjówki, korzystał z sieci zaufanych osób i rodzin (tzw. "lokatorzy"). Jego działalność była możliwa dzięki rozbudowanej sieci wsparcia społecznego.

**Schwytanie i więzienie**

W maju 1986 roku Zbigniew Bujak został schwytany przez SB. Jego aresztowanie było wielkim propagandowym triumfem reżimu. Sądzony pod zarzutami działalności antypaństwowej, trafił do aresztu. Jednak na mocy amnestii ogłoszonej we wrześniu 1986 roku (część ustępstw wobec nacisków Zachodu) został zwolniony.

**Okrągły Stół i po 1989**

Bujak był jednym z negocjatorów ze strony opozycji przy Okrągłym Stole (1989). Po przełomie politycznym zaangażował się w działalność polityczną – był posłem na Sejm, działał w różnych ugrupowaniach demokratycznych. Z czasem ewoluował w kierunku lewicy (m.in. Unia Pracy), co wywołało kontrowersje wśród dawnych towarzyszy walki.

**Symbol i dziedzictwo**

Zbigniew Bujak jest symbolem oporu i wytrwałości – człowiek, który przez 4,5 roku chodził po wolności tuż obok policji totalitarnego państwa i nie dał się schwytać. Jego historia inspiruje i pokazuje, że nawet w warunkach brutalnej dyktatury można skutecznie działać, mając wsparcie społeczeństwa.`,
    resources: [
      {
        id: 'bujak-ipn',
        title: 'Akta SB dotyczące Zbigniewa Bujaka',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Bujak+Zbigniew',
        source: 'IPN',
        description: 'Dokumenty operacyjne SB z poszukiwań i inwigilacji Zbigniewa Bujaka',
      },
      {
        id: 'bujak-ph',
        title: 'Bujak i podziemna Solidarność – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Bujak+podziemie+Solidarno%C5%9B%C4%87',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o podziemnej Solidarności i roli Zbigniewa Bujaka',
      },
      {
        id: 'bujak-ecs',
        title: 'Archiwum Solidarności – ECS',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Dokumenty Solidarności z okresu podziemia, w tym materiały TKK',
      },
    ],
    relatedIds: ['podziemna-solidarnosc', 'stan-wojenny', 'internowanie', 'solidarnosc', 'okragly-stol', 'solidarnosc-walczaca'],
  },

  {
    id: 'destalinizacja',
    title: 'Destalinizacja w Polsce',
    subtitle: 'Odwilż, rehabilitacje i Październik 1956',
    category: 'polityka',
    tags: ['odwilż', 'Chruszczow', 'XX Zjazd', 'rehabilitacje', 'październik 1956', 'stalinizm'],
    yearStart: 1953,
    yearEnd: 1957,
    summary: 'Destalinizacja w Polsce (1953–1957) – proces stopniowego odchodzenia od stalinowskich metod rządzenia po śmierci Stalina w 1953 roku. Kulminacją był Październik 1956 – powrót Gomułki, rehabilitacje ofiar, rozwiązanie ZMP i ograniczone reformy polityczne.',
    content: `Destalinizacja to proces modyfikacji systemu komunistycznego po śmierci Józefa Stalina (5 marca 1953), obejmujący stopniowe odejście od najbardziej brutalnych form terroru i dogmatycznej ideologii.

**Śmierć Stalina i pierwsze symptomy**

Śmierć Stalina wywołała w Polsce mieszaninę żalu (indukowanego przez propagandę) i ukrytej ulgi. Aparat partyjny i bezpieczeństwa stanął przed pytaniem o kierunek zmian. Pierwsze sygnały odwilży to złagodzenie represji, zwolnienie kilku głośnych więźniów, nieznaczna liberalizacja prasy.

**Raport Chruszczowa (1956)**

Przełom nastąpił na XX Zjeździe KPZS w lutym 1956 roku, kiedy Nikita Chruszczow wygłosił tajny referat "O kulcie jednostki i jego następstwach", demaskując zbrodnie Stalina. Tekst szybko "wyciekł" i stał się znany w Polsce. Wywołał szok w aparacie partyjnym i rozbudził nadzieje w społeczeństwie.

**Śmierć Bieruta**

Bolesław Bierut – polski Stalin – zmarł 12 marca 1956 roku w Moskwie, kilka dni po XX Zjeździe. Okoliczności śmierci nigdy nie zostały w pełni wyjaśnione. I sekretarzem PZPR został Edward Ochab – postać bardziej skłonna do reform.

**"Po prostu" i dyskusja publiczna**

Tygodnik "Po prostu" stał się forum swobodnej, jak na warunki PRL, dyskusji politycznej. Artykuły krytykowały biurokrację, dogmatyzm i stalinowskie wypaczenia. Podobna atmosfera panowała w środowiskach inteligencji twórczej (m.in. słynne "czwartki" u Kotta).

**Czerwiec 1956 – Poznań**

Czerwcowy bunt robotników w Poznaniu był testem dla systemu. Krwawe stłumienie (57 zabitych) ujawniło przepaść między władzą a społeczeństwem. Wydarzenie przyspieszyło wewnątrzpartyjne rozgrywki.

**Październik 1956 i powrót Gomułki**

19–21 października 1956 roku – dramatyczne plenum KC PZPR. Wbrew woli Moskwy (przybycie Chruszczowa i sowieckiego wojska) I sekretarzem wybrano Władysława Gomułkę – człowieka, który siedział w więzieniu za "odchylenie prawicowo-nacjonalistyczne". Jego wybór był kompromisem: sowiecki komunista, ale z polskim obliczem i autonomistycznymi tendencjami.

**Reformy i ich granice**

Po Październiku 1956:
- Uwolniono tysiące więźniów politycznych, w tym kard. Wyszyńskiego
- Zrehabilitowano część ofiar stalinizmu (pośmiertnie – w tym Fieldorfa, Spychalskiego)
- Rozwiązano ZMP, osłabiono cenzurę, dopuszczono pewien pluralizm kulturalny
- Cofnięto kolektywizację rolnictwa (chłopi opuścili spółdzielnie)
- Polskę i ZSRR powiązano nową umową (polskie wojska pod polskim dowodzeniem)

Reformy miały jednak granice: PZPR utrzymała monopol władzy, SB funkcjonowała dalej, relacje ze ZSRR nie zmieniły się zasadniczo.

**Znaczenie**

Destalinizacja w Polsce nie zniszczyła systemu, ale go znacząco zreformowała. Październik 1956 stał się wzorcem dla późniejszych prób reform (1970, 1980) – pokazał, że społeczny nacisk może wymusić ustępstwa od władzy, ale nie całkowite zmiany systemu.`,
    resources: [
      {
        id: 'destalin-xxzjazd',
        title: 'XX Zjazd KPZS – referat Chruszczowa',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Chruszczow+XX+Zjazd+1956',
        source: 'Polona.pl',
        description: 'Dokumenty i prasa z 1956 roku dotyczące XX Zjazdu i jego następstw w Polsce',
        year: 1956,
      },
      {
        id: 'destalin-ph',
        title: 'Odwilż 1956 – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=odwil%C5%BC+1956+destalinizacja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o procesie odwilży i destalinizacji w Polsce',
      },
      {
        id: 'destalin-polskie',
        title: 'Polskie miesiące – Październik 1956',
        type: 'publikacja',
        url: 'https://polskiemiesiace.ipn.gov.pl/mie/wszystkie-wydarzenia/pazdziernik-1956',
        source: 'IPN Polskie Miesiące',
        description: 'Serwis IPN poświęcony Październikowi 1956 i procesowi destalinizacji',
        year: 1956,
      },
    ],
    relatedIds: ['czerwiec-1956', 'pazdziernik-1956', 'gomulka', 'bierut', 'represje-polityczne', 'chruszczow'],
  },

  {
    id: 'pps',
    title: 'Polska Partia Socjalistyczna (PPS)',
    subtitle: 'Likwidacja polskiej socjaldemokracji przez komunistów',
    category: 'polityka',
    tags: ['PPS', 'PPR', 'kongres zjednoczeniowy', 'Cyrankiewicz', 'socjalizm', 'PZPR'],
    yearStart: 1892,
    yearEnd: 1948,
    summary: 'Polska Partia Socjalistyczna – historyczna partia lewicy, działająca od 1892 roku. Po wojnie PPR stopniowo przejmowała kontrolę nad PPS i eliminowała niezależne kierownictwo. W grudniu 1948 roku wymuszono "kongres zjednoczeniowy" PPS z PPR – w efekcie powstała PZPR, a PPS przestała istnieć jako niezależna siła.',
    content: `Polska Partia Socjalistyczna (PPS) była jedną z najstarszych i najbardziej wpływowych polskich partii politycznych. Jej likwidacja poprzez wymuszone połączenie z PPR w 1948 roku była symbolem końca pluralizmu politycznego w Polsce.

**Historia PPS przed 1939**

PPS założono w 1892 roku. W jej szeregach działał Józef Piłsudski, a partia była ważnym graczem politycznym przez całe dwudziestolecie międzywojenne – zarówno jako siła lewicowa, jak i zaangażowana w walkę o niepodległość. PPS współtworzyła rządy II RP, krytykowała sanację, broniła praw robotniczych.

**PPS po 1945 – fałszywy pluralizm**

Po wyzwoleniu PPS formalnie działała obok PPR. W rzeczywistości jednak od początku znajdowała się pod presją komunistów. PPR (a za nią Związek Radziecki) dążyła do przejęcia PPS lub jej likwidacji. Strategia była dwutorowa:
1. Infiltracja i przejmowanie kierownictwa przez ludzi lojalnych wobec PPR
2. Marginalizowanie i represjonowanie niezależnych działaczy PPS

**Cyrankiewicz – człowiek pośredniczący**

Józef Cyrankiewicz – sekretarz generalny PPS – odegrał kluczową rolę w procesie likwidacji partii. Wybrany na to stanowisko w 1945 roku, dał się zdominować przez PPR i stał się instrumentem sowietyzacji. W zamian za współpracę zachował stanowisko premiera PRL przez ponad dwie dekady.

**Eliminacja niezależnych**

Działacze PPS, którzy sprzeciwiali się połączeniu z PPR, byli usuwani z partii, aresztowani lub zmuszani do emigracji. Wybitni socjaliści – jak Zygmunt Żuławski czy Jan Mulak – nie mogli działać. Część uciekła za granicę. Ci, którzy pozostali i opierali się, trafiali przed sądy bezpieczeństwa.

**Kongres Zjednoczeniowy (grudzień 1948)**

15–21 grudnia 1948 roku odbył się kongres zjednoczeniowy PPR i PPS, podczas którego obie partie oficjalnie połączyły się, tworząc Polską Zjednoczoną Partię Robotniczą (PZPR). Kongres był politycznym spektaklem: delegaci byli starannie dobrani, a głosowanie – formalnością. PZPR przyjęła struktury organizacyjne PPR i jej ideologię marksistowsko-leninowską. Socjaldemokratyczne tradycje PPS oficjalnie uznano za "odchylenie prawicowe".

**Znaczenie**

Likwidacja PPS oznaczała zniszczenie pluralizmu politycznego w Polsce i zakończenie możliwości niezależnej działalności lewicy niekomunistycznej. Tradycja PPS przetrwała jednak w emigracji – paryska PPS nieprzerwanie kontynuowała działalność. Powróciła też w 1987 roku w kraju, gdy opozycja reaktywowała partię, nawiązując do historycznych korzeni.`,
    resources: [
      {
        id: 'pps-aan',
        title: 'Akta PPS – Archiwum Akt Nowych',
        type: 'dokument',
        url: 'https://www.aan.gov.pl/wp/zasob_aan/polska-zjednoczona-partia-robotnicza-komitet-centralny-w-warszawie-1905-1907-1944-1947-1948-1990-2-1354/',
        source: 'Archiwum Akt Nowych',
        description: 'Archiwum dokumentów partyjnych z okresu zjednoczenia PPS i PPR',
        year: 1948,
      },
      {
        id: 'pps-polona',
        title: 'Prasa PPS z 1948 roku – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Polska+Partia+Socjalistyczna+1948',
        source: 'Polona.pl',
        description: 'Archiwalne numery "Robotnika" i innych pism PPS',
      },
      {
        id: 'pps-ipn',
        title: 'Likwidacja PPS – materiały edukacyjne IPN',
        type: 'publikacja',
        url: 'https://edukacja.ipn.gov.pl/edu/materialy-edukacyjne?search=PPS+zjednoczenie',
        source: 'IPN Edukacja',
        description: 'Opracowania o procesie eliminacji PPS i tworzeniu PZPR',
        year: 1948,
      },
    ],
    relatedIds: ['pzpr', 'ppr', 'cyrankiewicz', 'manifest-pkwn', 'bierut'],
  },

  {
    id: 'komeda',
    title: 'Krzysztof Komeda',
    subtitle: 'Geniusz polskiego jazzu i muzyki filmowej',
    category: 'kultura',
    tags: ['jazz', 'film', 'muzyka', 'Komeda', 'Polański', 'Rosemary', 'pianista'],
    yearStart: 1931,
    yearEnd: 1969,
    summary: 'Krzysztof Komeda (1931–1969) – pianista jazzowy i kompozytor, jeden z najwybitniejszych muzyków polskich XX wieku. Twórca muzyki do filmów Romana Polańskiego, w tym słynnego "Dziecka Rosemary" (1968). Tragicznie zginął w wypadku samochodowym w Hollywood. Jego styl zrewolucjonizował polski jazz.',
    content: `Krzysztof Komeda (właśc. Krzysztof Trzcinski, 1931–1969) – pianista jazzowy i kompozytor filmowy, jeden z najważniejszych twórców polskiego jazzu i ikona kultury PRL lat 50. i 60.

**Pseudonim i początki**

Pseudonimu "Komeda" użył, by ukryć muzykowanie jazzowe przed władzami w epoce stalinizmu, kiedy jazz był piętnowany jako "burżuazyjna dekadencja". Był z wykształcenia lekarzem (ukończył medycynę w Poznaniu), ale muzyka stała się jego życiem.

**Rewolucja jazzu w PRL**

W drugiej połowie lat 50., po odwilży 1956 roku, jazz stał się w Polsce zjawiskiem masowym. Komeda był jednym z pionierów: założył kwintet, który grał muzykę wyraźnie inspirowaną cool jazzem i bopem, ale z wyraźnym europejskim kolorytem. Jego styl – liryczny, melancholijny, z elementami muzyki ludowej i impresjonizmu – był oryginalny i odmienny od wzorców amerykańskich.

**Współpraca z Polańskim**

Komeda poznał Romana Polańskiego na przełomie lat 50. i 60. i nawiązał owocną współpracę artystyczną. Skomponował muzykę do wszystkich wczesnych filmów Polańskiego:
- **"Nóż w wodzie"** (1962) – pierwszy pełnometrażowy film Polańskiego, Oscarna nominacja; muzyka Komedy była rewolucyjna
- **"Repulsion"** (1965)
- **"Cul-de-sac"** (1966)
- **"The Fearless Vampire Killers"** (1967)
- **"Rosemary's Baby"** (1968) – kulminacja: kołysanka z tego filmu jest jedną z najbardziej rozpoznawalnych melodii w historii kina

**Sukcesy na Zachodzie i Hollywood**

Muzyka do "Rosemary's Baby" przyniosła Komedzie uznanie w Hollywood. Pracował dla wytwórni Paramount i zdobywał kolejne kontrakty. Los Angeles stało się jego nową bazą – w 1968 roku był u szczytu kariery.

**Tragiczna śmierć**

23 stycznia 1969 roku Komeda upadł z balkonu w LA i doznał rozległego urazu głowy. Trafił do szpitala w stanie śpiączki. Pomimo prób leczenia w Polsce i USA, nie odzyskał przytomności. Zmarł 23 kwietnia 1969 roku. Miał 37 lat. Okoliczności wypadku pozostają niejasne.

**Dziedzictwo**

Komeda zostawił ok. 20 nagrań studyjnych i muzykę do ponad 50 filmów. Jego kołysanka z "Rosemary's Baby" jest do dziś jedną z najczęściej cytowanych w kulturze popularnej. Polski jazz bez Komedy byłby zupełnie inny – ukształtował on zarówno styl gry, jak i wyobraźnię kolejnych pokoleń muzyków. Jan Ptaszyn Wróblewski, Tomasz Stańko i wielu innych przyznaje się do jego wpływu.`,
    resources: [
      {
        id: 'komeda-ninateka',
        title: 'Archiwalne nagrania i wywiady z Komedą – NINATEKA',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Komeda+jazz',
        source: 'NINATEKA',
        description: 'Telewizyjne i filmowe nagrania z Krzysztofem Komedą z lat 60.',
      },
      {
        id: 'komeda-youtube',
        title: 'Komeda – Rosemary\'s Baby Lullaby (1968)',
        type: 'nagranie',
        url: 'https://www.youtube.com/results?search_query=Komeda+Rosemary+Baby+Lullaby+1968',
        source: 'YouTube',
        description: 'Kołysanka Komedy z "Dziecka Rosemary" – jeden z najpopularniejszych motywów muzyki filmowej',
        year: 1968,
      },
      {
        id: 'komeda-polona',
        title: 'Materiały prasowe o Komedzie – Polona',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Komeda+jazz+Trzci%C5%84ski',
        source: 'Polona.pl',
        description: 'Archiwalne artykuły prasowe o Komedzie i polskim jazzie z lat 60.',
      },
    ],
    relatedIds: ['jazz-prl', 'kino-prl', 'polska-szkola-filmowa', 'kultura-prl', 'muzyka-rockowa'],
  },

  {
    id: 'pazdziernik-1956-studenci',
    title: 'Studenci i inteligencja w Październiku 1956',
    subtitle: 'Rola środowisk twórczych w polskiej odwilży',
    category: 'opozycja',
    tags: ['Październik 1956', 'studenci', 'inteligencja', 'odwilż', 'tygodnik Po prostu', 'dyskusyjne kluby'],
    yearStart: 1955,
    yearEnd: 1957,
    summary: 'Październik 1956 roku był możliwy nie tylko dzięki decyzjom na szczytach partyjnych, ale też dzięki ożywieniu środowisk studenckich i inteligencji twórczej. Tygodnik "Po prostu", Dyskusyjne Kluby Filmowe i gorące debaty na uczelniach tworzyły atmosferę, w której reforma stała się możliwa.',
    content: `Proces destalinizacji w Polsce w latach 1955–1957 miał szczególny wymiar kulturalny i intelektualny – studenci, dziennikarze i artyści byli ważnymi aktorami odwilży.

**"Po prostu" – głos pokolenia**

Tygodnik "Po prostu" (1947–1957) stał się symbolem odwilży. Pod redakcją Eligiusza Lasoty, a potem Jerzego Ambroziewicza i Wiktora Woroszylskiego, stał się forum krytyki systemu. Artykuły kwestionowały dogmatyzm, biurokrację, nadużycia władzy. Nakład wzrósł do kilkudziesięciu tysięcy – numer rozchodził się błyskawicznie. Czytany przez inteligencję, studentów, a nawet część aparatu partyjnego.

W październiku 1957 roku Gomułka zamknął "Po prostu" – odwilż dobiegła końca. Zamknięcie pisma wywołało studenckie protesty w Warszawie.

**Środowiska twórcze**

Lata 1954–1957 przyniosły eksplozję twórczości w duchu odwilży:
- **Teatr** – Teatr na Tarczyńskiej Brechta, awangarda Kantora, "Teatr absurdu"
- **Literatura** – Marek Hłasko ("Ósmy dzień tygodnia"), Sławomir Mrożek (pierwsze opowiadania)
- **Film** – Wajda ("Pokolenie", "Kanał"), Munk ("Eroica") – Polska Szkoła Filmowa rozkwitła
- **Jazz** – legalizacja jazzu, pierwsze festiwale; Komeda, Namysłowski

**Dyskusje na uczelniach**

Na Politechnice Warszawskiej, Uniwersytecie Warszawskim i innych uczelniach toczyły się gorące debaty o polityce. Studenci kwestionowali obowiązkowe lekcje marksizmu, domagali się autonomii akademickiej. Koła naukowe, dyskusyjne kluby filmowe (DKF) stały się miejscami niezależnej myśli.

**Studenci w Październiku**

W październiku 1956 roku, gdy PZPR ważyła kurs reformatorski czy konserwatywny, studenci Warszawy demonstrowali popierając Gomułkę i reformy – ale też domagając się prawdziwej wolności. Gromadziły się wielotysięczne tłumy. Studenci tworzyli rezolucje, jeździli do fabryk agitować za zmianą.

**Granice odwilży**

Reformy były ograniczone. Zamknięcie "Po prostu" w 1957, powolne przywracanie cenzury, "wyhamowanie" swobody akademickiej pokazały, że Gomułka traktował odwilż instrumentalnie. Inteligencja, która z entuzjazmem przyjęła Październik, stopniowo się rozczarowywała – co stało się ważnym tłem dla Marca 1968.`,
    resources: [
      {
        id: 'poprostu-polona',
        title: '"Po prostu" – archiwum tygodnika',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Po+prostu+tygodnik+1956',
        source: 'Polona.pl',
        description: 'Archiwalne numery tygodnika "Po prostu" z lat 1955–1957',
        year: 1956,
      },
      {
        id: 'pazdziernik-ph',
        title: 'Październik 1956 – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=pazdziernik%201956',
        source: 'Przystanek Historia IPN',
        description: 'Opracowania o Październiku 1956 – rola inteligencji i studentów',
      },
      {
        id: 'pazdziernik-ninateka',
        title: 'Kroniki filmowe 1956 – NINATEKA',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Pa%C5%BAdzie%C5%BCnik+1956+odwil%C5%BC',
        source: 'NINATEKA',
        description: 'Archiwalne kroniki filmowe dokumentujące wydarzenia Października 1956',
        year: 1956,
      },
    ],
    relatedIds: ['pazdziernik-1956', 'destalinizacja', 'czerwiec-1956', 'marzec-1968', 'polska-szkola-filmowa', 'literatura-prl'],
  },

  {
    id: 'sluzba-bezpieczenstwa-metody',
    title: 'Metody pracy Służby Bezpieczeństwa',
    subtitle: 'Inwigilacja, werbowanie agentów i rozkładanie opozycji',
    category: 'represje',
    tags: ['SB', 'inwigilacja', 'agenci', 'podsłuchy', 'dezinformacja', 'operacje', 'akta'],
    yearStart: 1956,
    yearEnd: 1989,
    summary: 'Służba Bezpieczeństwa PRL stosowała wyrafinowane metody kontroli społeczeństwa: werbowanie tajnych współpracowników, podsłuchy telefoniczne, dezinformację, "kombinacje operacyjne" rozkładające środowiska opozycyjne. W szczytowym okresie (lata 80.) posiadała dziesiątki tysięcy agentów.',
    content: `Służba Bezpieczeństwa (SB) – następczyni Urzędu Bezpieczeństwa (UB) – była fundamentem utrzymania władzy komunistycznej w Polsce. Po 1956 roku zrezygnowała z masowych egzekucji, ale rozwinęła niezwykle rozbudowany system inwigilacji i kontroli społecznej.

**Struktura i skala**

W latach 80. SB liczyła ok. 25 000 funkcjonariuszy etatowych. Była zorganizowana w departamenty: Departament I (wywiad zagraniczny), Departament II (kontrwywiad), Departament III (inwigilacja opozycji i Kościoła), Departament IV (walka z Kościołem), Departament V (ochrona gospodarki) i inne. Każde województwo miało Wydział Służby Bezpieczeństwa.

**Tajni współpracownicy (TW)**

Kluczowym instrumentem SB były osobowe źródła informacji, potocznie zwane "agentami" lub "tajnymi współpracownikami". Szacuje się, że w latach 80. sieć agentury liczyła ponad 90 000 osób. Werbowanie odbywało się różnymi metodami:
- **Kompromis** – szantaż materiałem obciążającym (romans, przestępstwo, "teczka")
- **Przekonanie ideologiczne** – rzadziej, ale zdarzało się
- **Przekupstwo** – obiecywanie korzyści (mieszkanie, paszport, awans)
- **Strach** – groźba aresztowania lub prześladowania rodziny
- **Patriotyzm** – przekonywanie, że donosicielstwo służy Polsce

**Podsłuchy i obserwacja**

SB prowadziła masowe podsłuchy telefoniczne. W Warszawie w latach 80. podsłuchiwano tysiące linii telefonicznych. Instalowano podsłuchy w mieszkaniach, hotelach, samochodach. Prowadzono "obserwację zewnętrzną" (OE) – śledzenie osób przez agentów w terenie. Fotografowano spotkania opozycjonistów.

**"Kombinacje operacyjne"**

Najbardziej wyrafinowaną metodą SB były "kombinacje operacyjne" – planowane działania mające na celu rozbicie środowisk opozycyjnych bez jawnych represji:
- Podrzucanie fałszywych informacji siejących nieufność w organizacji
- Inspirowanie konfliktów personalnych
- Dyskredytowanie liderów (rozsiewanie plotek o szpiegostwie, korupcji, romansach)
- Tworzenie fałszywych pism i ulotek w imieniu opozycji

**Akta SB**

Po 1989 roku ogromna część akt SB trafiła do IPN. Akta mierzą setki kilometrów bieżących. Dostęp do akt wywołał ogromne społeczne emocje – ujawnienie agentury zniszczyło kariery i reputacje, ale też rozliczyło zbrodniarzy.

**Afera Olina i inne skandale**

Liczne późniejsze odkrycia (np. donos Lecha Wałęsy w latach 70. – sprawa operacyjna "Bolek") pokazują, jak dalece SB penetrowała nawet środowiska opozycyjne. Kwestia agentury Solidarności pozostaje tematem sporów historycznych do dziś.`,
    resources: [
      {
        id: 'sb-metody-ipn',
        title: 'Katalog metod pracy SB – IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=metody+pracy+SB+inwigilacja',
        source: 'IPN',
        description: 'Dokumenty dotyczące instrukcji operacyjnych i metod pracy SB',
      },
      {
        id: 'sb-tw-katalog',
        title: 'Katalog IPN – tajni współpracownicy',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=tajni+wsp%C3%B3%C5%82pracownicy',
        source: 'IPN Inwentarz',
        description: 'Baza danych tajnych współpracowników SB i UB w zasobach IPN',
      },
      {
        id: 'sb-ph-metody',
        title: 'Służba Bezpieczeństwa – metody i organizacja',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=S%C5%82u%C5%BCba+Bezpiecze%C5%84stwa+metody+inwigilacja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o metodach pracy SB i jej strukturze',
      },
    ],
    relatedIds: ['sbezpieczenstwa', 'tajni-wspolpracownicy', 'ub', 'represje-polityczne', 'internowanie'],
  },
  {
    id: 'kuron',
    title: 'Jacek Kuroń',
    category: 'osoby',
    shortDesc: 'Pedagog, działacz opozycji, współzałożyciel KOR i jeden z ojców polskiej transformacji.',
    content: `## Jacek Kuroń (1934–2004)

Jacek Kuroń był jedną z najbardziej wpływowych postaci polskiej opozycji demokratycznej. Pedagog z wykształcenia, harcerz z powołania, a rewolucjonista z wyboru – przeszedł drogę od młodego komunisty do czołowego przeciwnika systemu.

### Droga od komunizmu do opozycji

W młodości Kuroń zaangażował się w budowę socjalizmu, wierząc w ideały ruchu. Był aktywny w ZMP i harcerstwie, gdzie próbował realizować autentyczne ideały wychowawcze. Przełomem była odwilż październikowa 1956 r. i rosnąca świadomość, że system niszczy wartości, które oficjalnie głosi.

W 1964 roku, wspólnie z Karolem Modzelewskim, napisał „List otwarty do Partii" – odważną analizę marksistowską krytykującą system jako „rządy biurokracji partyjnej". List był jawnym wyzwaniem dla władzy. Obaj autorzy zostali aresztowani i skazani na więzienie.

### KOR i jawna opozycja

Po Czerwcu 1976 r. Kuroń stał się współzałożycielem Komitetu Obrony Robotników (KOR) – pierwszej jawnej organizacji opozycyjnej w Polsce. KOR pomagał represjonowanym robotnikom z Radomia i Ursusa, udzielając im pomocy prawnej i finansowej. Kuroń był mózgiem strategii działania w białych rękawiczkach: jawność zamiast konspiracji.

Jego mieszkanie przy ulicy Mickiewicza w Warszawie stało się centrum opozycji – spotykali się tu robotnicy, studenci, intelektualiści. Bezpieka wielokrotnie go inwigilowała, nękała i aresztowała.

### Sierpień 1980 i Solidarność

Gdy wybuchły strajki sierpniowe, Kuroń koordynował informacje z Warszawy, przekazując je zagranicznym mediom. Słynna jest anegdota o tym, jak dzwonił do KOR-u – telefon non stop zajęty, bo właśnie Kuroń go nie odkładał. Stał się nieoficjalnym „rzecznikiem" strajkujących wobec świata.

W stanie wojennym (1981–1984) był internowany i więziony. Nie złamał się. Pisał i działał konspiracyjnie.

### Transformacja i rząd Mazowieckiego

W 1989 roku Kuroń zasiadł przy Okrągłym Stole po stronie solidarnościowej. Po wyborach czerwcowych został ministrem pracy w rządzie Tadeusza Mazowieckiego (1989–1991) i ponownie w rządzie Hanny Suchockiej (1992–1993). To on nadzorował najtrudniejszy okres transformacji, m.in. reformy rynku pracy i skok bezrobocia.

Zasłynął z „kuroniówki" – dożywania dla bezrobotnych, którą zorganizował z własnej inicjatywy. Była to zupa wydawana w stołówkach dla najuboższych – symbol jego troski o zwykłego człowieka.

### Spuścizna

Kuroń był człowiekiem pełnym sprzeczności: dawny komunista, który stał się symbolem demokratycznej opozycji; minister transformacji, który najbardziej troszczył się o jej ofiary. Jego myśl pedagogiczna – dać dzieciom wolność i odpowiedzialność – pozostaje aktualna. Odznaczony Orderem Orła Białego, pochowany na Powązkach Wojskowych.`,
    resources: [
      {
        id: 'kuron-ipn',
        title: 'Jacek Kuroń – teczka w zasobach IPN',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Kuro%C5%84+Jacek',
        source: 'IPN Inwentarz',
        description: 'Dokumenty SB dotyczące inwigilacji Jacka Kuronia w zasobach Instytutu Pamięci Narodowej',
      },
      {
        id: 'kuron-ph',
        title: 'Jacek Kuroń – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Kuro%C5%84+Jacek+KOR',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o życiu i działalności Jacka Kuronia',
      },
      {
        id: 'kuron-ninateka',
        title: 'Jacek Kuroń – nagrania archiwalne',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Kuro%C5%84+Jacek',
        source: 'Ninateka',
        description: 'Archiwalne nagrania z udziałem Jacka Kuronia – wywiady, przemówienia i relacje',
      },
    ],
    relatedIds: ['kor', 'marzec-1968', 'sierpien-1980', 'okragly-stol', 'czerwiec-1976'],
  },
  {
    id: 'michnik',
    title: 'Adam Michnik',
    category: 'osoby',
    shortDesc: 'Historyk, publicysta i działacz opozycji, współzałożyciel KOR, redaktor naczelny Gazety Wyborczej.',
    content: `## Adam Michnik (ur. 1946)

Adam Michnik to jeden z najwybitniejszych intelektualistów polskiej opozycji – historyk, eseista, publicysta i działacz, który z drobnego agenta więziennych intelektualnych dysput stał się ikoną demokratycznej transformacji.

### Wczesna działalność

Michnik zaangażował się w opozycję już jako student historii na Uniwersytecie Warszawskim. W latach 60. był związany ze środowiskiem „komandosów" – grupy lewicowych intelektualistów skupionych wokół Jacka Kuronia i Karola Modzelewskiego.

W Marcu 1968 roku aktywnie uczestniczył w protestach studenckich. Aresztowany, spędził dwa lata w więzieniu. Wielokrotnie następnie więziony za działalność opozycyjną – łącznie kilka lat za kratami.

### KOR i „Kościół, lewica, dialog"

W 1976 roku Michnik był wśród założycieli Komitetu Obrony Robotników. Jego esej „Kościół, lewica, dialog" (1977) był przełomowy – wzywał do dialogu między lewicową inteligencją a Kościołem katolickim jako sojusznika w walce o wolność. Ta analiza zdefiniowała strategię polskiej opozycji.

Michnik rozwijał też koncepcję „nowego ewolucjonizmu" – ostrożnej, stopniowej zmiany systemu przez budowanie niezależnych instytucji społeczeństwa obywatelskiego.

### Stan wojenny i więzienie

13 grudnia 1981 roku Michnik został internowany. W więzieniu – w Białołęce i Barczewie – pisał eseje, które przemycano na Zachód i publikowano m.in. w paryskiej „Kulturze". Więzienie nie złamało go – wzmocniło. Odmawiał emigracji, chociaż mógł opuścić kraj.

W 1985 roku skazany na trzy lata więzienia, zwolniony po ogłoszeniu amnestii w 1986.

### Okrągły Stół i Gazeta Wyborcza

W 1989 roku Michnik uczestniczył w obradach Okrągłego Stołu. Latem 1989 r. napisał słynny artykuł „Wasz prezydent, nasz premier" – formułę kompromisu, który umożliwił pokojowe przejęcie władzy przez Solidarność. Jaruzelski zostaje prezydentem, ale premierem – Tadeusz Mazowiecki.

8 maja 1989 roku ukazał się pierwszy numer „Gazety Wyborczej" – pisma Solidarności na czas kampanii wyborczej, którego Michnik został redaktorem naczelnym. Funkcję tę pełni do dziś. „Gazeta" stała się największym dziennikiem w Polsce.

### Spuścizna i kontrowersje

Michnik jest symbolem liberalnej lewicy i dialogu. Jego teza o „grubej kresce" – oddzieleniu nowej Polski od rozliczeń z komunizmem – wywołała i wywołuje do dziś ostre spory. Nagrodzony wieloma odznaczeniami i doktoratami honoris causa; przez innych krytykowany za zbyt miękkie traktowanie dawnych komunistów.`,
    resources: [
      {
        id: 'michnik-ipn',
        title: 'Adam Michnik – dokumenty SB',
        type: 'dokument',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Michnik+Adam',
        source: 'IPN Inwentarz',
        description: 'Materiały bezpieki dotyczące inwigilacji Adama Michnika w zasobach IPN',
      },
      {
        id: 'michnik-ph',
        title: 'Adam Michnik i opozycja demokratyczna',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Michnik+Adam+opozycja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o roli Adama Michnika w polskiej opozycji',
      },
      {
        id: 'michnik-polona',
        title: 'Gazeta Wyborcza – pierwsze numery (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Gazeta+Wyborcza+1989',
        source: 'Polona',
        description: 'Digitalizacja pierwszych numerów Gazety Wyborczej z 1989 roku',
      },
    ],
    relatedIds: ['kor', 'marzec-1968', 'okragly-stol', 'kuron', 'stan-wojenny'],
  },
  {
    id: 'wajda',
    title: 'Andrzej Wajda',
    category: 'osoby',
    shortDesc: 'Reżyser filmowy, twórca Polskiej Szkoły Filmowej, autor dzieł o historii i wolności.',
    content: `## Andrzej Wajda (1926–2016)

Andrzej Wajda był najwybitniejszym polskim reżyserem filmowym, laureatem Oscara za całokształt twórczości (2000) i Złotej Palmy w Cannes (1981). Jego filmy tworzyły dialog z historią Polski i opresją systemu komunistycznego.

### Debiut i Polska Szkoła Filmowa

Wajda zadebiutował „Pokoleniem" (1955) – historią młodych ludzi wciągniętych w ruch oporu podczas okupacji. Potem nakręcił „Kanał" (1957) i „Popiół i diament" (1958) – trylogię wojenną, która stała się kamieniem węgielnym Polskiej Szkoły Filmowej. Filmy te mówiły o bohaterstwie i tragedii AK, o sensie walki i pokoleniu przeklętym przez historię.

Władze komunistyczne akceptowały te filmy z trudem – Wajda balansował na granicy tego, co dozwolone. „Popiół i diament" z Cybulskim w roli głównej zdobył światowy rozgłos, bo dotykał prawdy, której oficjalna propaganda nie chciała pokazać.

### Kino zaangażowane społecznie

W latach 70. Wajda nakręcił „Ziemię obiecaną" (1975) i „Człowieka z marmuru" (1977) – film o robotniku z lat 50., który stał się przodownikiem pracy, a potem ofiarą systemu. Cenzura walczyła z tym filmem latami; pokazany w 1977 roku stał się wielkim sukcesem artystycznym i moralnym.

Kontynuacją był „Człowiek z żelaza" (1981) – nakręcony w gorącej atmosferze Solidarności, z prawdziwymi stoczniowcami przed kamerą. Film zdobył Złotą Palmę w Cannes. W Polsce grany w ogromnych kolejkach. Cenzura chciała go zablokować – nie zdążyła.

### Stan wojenny i emigracja

Po 13 grudnia 1981 roku Wajda – podobnie jak wielu twórców – znalazł się w trudnej sytuacji. Jego filmy były bojkotowane przez władze. Kręcił za granicą, m.in. w Niemczech.

W 1983 roku nakręcił „Dantona" w koprodukcji z Francją – film o Rewolucji Francuskiej, który wszyscy odczytywali jako alegorię Polski w stanie wojennym. Władze polskie bojkotowały film.

### Pojednanie z historią

Po 1989 roku Wajda stworzył „Pierścionek z orłem w koronie" (1993), „Pan Tadeusz" (1999) i wreszcie „Katyń" (2007) – film, na który czekał całe życie. Jego ojciec był ofiarą zbrodni katyńskiej. Film był nominowany do Oscara. Wajda otworzył w Krakowie Muzeum Sztuki i Techniki Japońskiej – Manggha, które sfinansował z nagrody Kioto.

### Znaczenie

Wajda nauczył świat patrzeć na Polskę przez pryzmat jej tragicznej historii. Był sumieniem polskiego kina i moralnym autorytetem. Odznaczony Orderem Orła Białego, pochowany z honorami na Skałce w Krakowie.`,
    resources: [
      {
        id: 'wajda-ninateka',
        title: 'Filmy Andrzeja Wajdy – Ninateka',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Wajda',
        source: 'Ninateka',
        description: 'Archiwalne filmy i materiały o twórczości Andrzeja Wajdy',
      },
      {
        id: 'wajda-ph',
        title: 'Andrzej Wajda – Przystanek Historia',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Wajda+Andrzej+film',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o filmografii i znaczeniu Andrzeja Wajdy',
      },
      {
        id: 'wajda-polona',
        title: 'Prasa filmowa o Wajdzie (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Wajda+film',
        source: 'Polona',
        description: 'Recenzje i artykuły prasowe z epoki PRL dotyczące twórczości Wajdy',
      },
    ],
    relatedIds: ['polska-szkola-filmowa', 'kino-moralnego-niepokoju', 'kino-prl', 'solidarnosc', 'katyn'],
  },
  {
    id: 'kieslowski',
    title: 'Krzysztof Kieślowski',
    category: 'osoby',
    shortDesc: 'Reżyser filmowy i dokumentalny, twórca Dekalogu i trylogii Trzy kolory – jeden z najważniejszych filmowców XX wieku.',
    content: `## Krzysztof Kieślowski (1941–1996)

Krzysztof Kieślowski był jednym z najważniejszych reżyserów filmowych XX wieku. Zaczynał od dokumentów o codziennym życiu w Polsce Ludowej, a skończył na medytacjach o losie i moralności, które pokochał cały świat.

### Dokumenty – polska codzienność pod lupą

Kieślowski debiutował filmami dokumentalnymi, które były mistrzowskim portretem PRL od środka: „Robotnicy '71 – nic o nas bez nas" (1972), „Pierwsza miłość" (1974), „Spokój" (1976), „Szpital" (1976). Kamera Kieślowskiego nie moralizowała – obserwowała, bez komentarza ukazując absurdy i dramat życia w socjalizmie.

Władze szybko zorientowały się, że te dokumenty są niewygodne – zbyt prawdziwe, zbyt pozbawione propagandowego optymizmu. „Robotnicy '71" przez lata leżały w szufladzie.

### Kino moralnego niepokoju

W drugiej połowie lat 70. Kieślowski dołączył do nurtu kina moralnego niepokoju. „Spokój" (1976), „Blizna" (1976), „Amator" (1979) – filmy o konfliktach sumienia zwykłych Polaków uwikłanych w system. „Amator" zdobył Grand Prix na festiwalu w Moskwie, co wzbudziło zdumienie – film był przecież krytyką systemu.

### Dekalog

„Dekalog" (1988) to opus magnum Kieślowskiego – dziesięć filmów telewizyjnych, każdy luźno oparty na jednym z przykazań. Nakręcony w blokowisku na Ursynowie, opowiadał o moralnych dylematach mieszkańców wielkiego osiedla. Zachód oszalał na tym punkcie. „Dekalog" trafił do kin na całym świecie i do dziś jest uważany za jedno z największych dzieł w historii kina telewizyjnego.

Dwa epizody Dekalogu rozwinął w pełnometrażowe filmy: „Krótki film o zabijaniu" (1988) – brutalny komentarz do kary śmierci, i „Krótki film o miłości" (1988).

### Trylogia europejska

Po 1989 roku Kieślowski wyjechał do Francji. Nakręcił „Podwójne życie Weroniki" (1991) i trylogię „Trzy kolory" (Niebieski/Biały/Czerwony, 1993–1994), której tytuły nawiązują do flagi francuskiej i wartości wolności, równości, braterstwa. Trylogia zdobyła nagrody na Złotego Lwa w Wenecji i był wielokrotnie nominowana do Oscara.

W 1994 roku Kieślowski ogłosił, że rezygnuje z reżyserii. W 1996 roku zmarł na atak serca, w wieku 54 lat, nie dając światu zapowiadanych nowych filmów.

### Znaczenie

Kieślowski pokazał, że kino może być filozofią. Jego filmy pytają o sens życia, wolną wolę i moralność bez udzielania prostych odpowiedzi. Polska tradycja dokumentalna stała się przez niego szkołą humanizmu dla całego świata.`,
    resources: [
      {
        id: 'kieslowski-ninateka',
        title: 'Filmy Kieślowskiego – Ninateka',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=Kie%C5%9Blowski',
        source: 'Ninateka',
        description: 'Filmy dokumentalne i fabularne Krzysztofa Kieślowskiego w archiwum Ninateki',
      },
      {
        id: 'kieslowski-ph',
        title: 'Kieślowski – kino moralne i dokumentalne',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Kie%C5%9Blowski+Dekalog+kino',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o twórczości Kieślowskiego i jego miejscu w historii kina',
      },
      {
        id: 'kieslowski-polona',
        title: 'Prasa filmowa lat 80. o Kieślowskim (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Kie%C5%9Blowski+Dekalog',
        source: 'Polona',
        description: 'Recenzje i artykuły prasowe z epoki dotyczące twórczości Kieślowskiego',
      },
    ],
    relatedIds: ['kino-moralnego-niepokoju', 'polska-szkola-filmowa', 'kino-prl', 'wajda'],
  },
  {
    id: 'herbert',
    title: 'Zbigniew Herbert',
    category: 'osoby',
    shortDesc: 'Jeden z najwybitniejszych polskich poetów – twórca Pana Cogito, głos moralnego sprzeciwu wobec totalitaryzmu.',
    content: `## Zbigniew Herbert (1924–1998)

Zbigniew Herbert był jednym z najwybitniejszych polskich poetów XX wieku. Uczestnik Armii Krajowej, niepokorny intelektualista i moralista, który całe życie stawiał opór zniewoleniu – zarówno komunistycznemu, jak i każdemu innemu.

### Życiorys na tle epoki

Herbert urodził się we Lwowie. Podczas II wojny światowej należał do AK – ten rozdział życia zaważył na całej jego późniejszej postawie. Po wojnie odmawiał współpracy z nowym reżimem, co kosztowało go latami niemożność publikowania i pracę w najgorszych warunkach – jako buchalter czy kontroler jakości.

Debiutował poetycko dopiero w 1956 roku, podczas odwilży, zbiorem „Struna światła". W ciągu kilku lat wydał kolejne tomy, które przyniosły mu uznanie w Polsce i za granicą.

### Pan Cogito i mit jako broń

Najsłynniejszym „bohaterem" Herberta jest Pan Cogito – postać będąca alter ego poety, człowiek myślący w świecie absurdu. Pan Cogito obserwuje rzeczywistość z ironią i bólem, szuka wartości w kulturze śródziemnomorskiej, konfrontuje się z przemocą historii.

Wiersz „Przesłanie Pana Cogito" (1974) to jeden z najważniejszych tekstów polskiej literatury: „Idź wyprostowany wśród tych co na kolanach / wśród odwróconych plecami i obalonych w proch". Był hymnem opozycji, był śpiewany na demonstracjach.

Herbert chętnie sięgał do mitologii greckiej i historii starożytnej, by przez nie mówić o teraźniejszości. Eseje z tomu „Barbarzyńca w ogrodzie" (1962) i „Martwa natura z wędzidłem" (1993) są arcydziełami eseistyki.

### Emigracja i powroty

Herbert żył i pracował w wielu krajach: Francji, RFN, USA, Austrii. Stypendysta zachodnich fundacji, doceniany na całym świecie. Jednak zawsze wracał do Polski. Był nominowany wielokrotnie do Nagrody Nobla – wielu uważa, że zasłużył na nią bardziej niż niejeden laureat.

W stanie wojennym Herbert opowiadał się wyraźnie po stronie Solidarności. Był jednym z sygnatariuszy apeli i listów protestu.

### Późne lata i spuścizna

Ostatni zbiór „Epilog burzy" ukazał się pośmiertnie w 1998 roku. Herbert wielokrotnie pisał o starości, śmierci i konieczności zachowania godności do końca.

Jego poezja jest przetłumaczona na kilkadziesiąt języków. Jest to jedna z postaci, które najlepiej reprezentują polską tradycję moralną: opór, pamięć, niezgoda na kłamstwo.`,
    resources: [
      {
        id: 'herbert-wl',
        title: 'Zbigniew Herbert – Wolne Lektury',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/herbert-zbigniew/',
        source: 'Wolne Lektury',
        description: 'Poezja Zbigniewa Herberta dostępna online w serwisie Wolne Lektury',
      },
      {
        id: 'herbert-polona',
        title: 'Archiwum Herberta – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Herbert+Zbigniew+poeta',
        source: 'Polona',
        description: 'Rękopisy, korespondencja i pierwsze wydania utworów Zbigniewa Herberta',
      },
      {
        id: 'herbert-ph',
        title: 'Zbigniew Herbert – poeta niezłomny',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Herbert+Zbigniew+poeta+opozycja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o postawie Zbigniewa Herberta wobec komunizmu i jego spuściźnie',
      },
    ],
    relatedIds: ['literatura-prl', 'kultura-prl', 'milosz', 'drugi-obieg', 'cenzura-prl'],
  },
  {
    id: 'milosz',
    title: 'Czesław Miłosz',
    category: 'osoby',
    shortDesc: 'Poeta, prozaik, eseista – autor „Zniewolonego umysłu", noblista 1980, jeden z największych pisarzy XX wieku.',
    content: `## Czesław Miłosz (1911–2004)

Czesław Miłosz to jeden z największych pisarzy XX wieku – poeta, eseista, historyk literatury, tłumacz. W 1980 roku otrzymał literacką Nagrodę Nobla. Jego twórczość jest nierozerwalnie związana z doświadczeniem totalitaryzmu i pytaniem o kondycję człowieka w obliczu historii.

### Wielkie Księstwo Literackie i Polska

Miłosz urodził się na Litwie, w Szetejniach. Ukształtowało go wielokulturowe środowisko kresowe – polskie, litewskie, żydowskie. Doświadczenie tej różnorodności i jej zagłady przez obie totalitarne machiny stało się fundamentem jego myśli.

Przed wojną był związany z lewicową grupą poetycką „Żagary". Podczas okupacji pozostał w Warszawie, był świadkiem Zagłady warszawskich Żydów – opisał to poruszającym wierszem „Campo di Fiori" i słynnym „Biednym chrześcijaninem patrzącym na getto".

### Dyplomata PRL i dezercja

Po wojnie Miłosz pracował jako dyplomata – attaché kulturalny w Waszyngtonie i Paryżu. Wewnętrznie rozdarty, publicznie pełnił funkcję, z którą coraz trudniej mu się było pogodzić. W 1951 roku poprosił o azyl polityczny w Paryżu.

Jego dezercja wstrząsnęła polskim środowiskiem literackim. PZPR uznała go za zdrajcę. W Polsce przez dekady był zakazany.

### „Zniewolony umysł"

W 1953 roku ukazał się po francusku „Zniewolony umysł" – esej analizujący mechanizmy, które sprawiają, że intelektualiści poddają się totalitaryzmowi. Miłosz opisał kilka fikcyjnych postaci (Alfa, Beta, Gamma, Delta), za którymi kryją się prawdziwi polscy pisarze. Analiza „kettmanu" – zewnętrznego dostosowania przy wewnętrznym sprzeciwie – jest jedną z najcelniejszych diagnoz psychologii konformizmu.

Książka jest do dziś lekturą obowiązkową na wielu uczelniach świata.

### Paryż i Berkeley

Miłosz osiadł w Paryżu, był związany z redakcją „Kultury" Giedroycia (choć relacja była skomplikowana), a od 1960 roku wykładał literaturę słowiańską na Uniwersytecie Kalifornijskim w Berkeley.

W tym czasie tworzył intensywnie – „Dolina Issy" (1955), „Rodzinna Europa" (1959), „Traktat poetycki" (1957). Jego poezja stała się coraz bardziej metafizyczna, pełna pytań o sens, Boga i miejsce człowieka w kosmosie.

### Nobel i powrót do Polski

W 1980 roku, gdy Polska strajkowała i powstawała Solidarność, Miłosz otrzymał Nagrodę Nobla. W Polsce odebrano to jako gest polityczny – potwierdzenie wartości wolności. Komunistyczne władze były zakłopotane.

Miłosz wrócił do Polski po raz pierwszy w 1981 roku – owacja na Wawelu była historycznym momentem. Po 1989 roku zamieszkał w Krakowie. Pisał i tłumaczył do końca życia. Pochowany w krypcie kościoła na Skałce, wśród narodowych zasłużonych.

### Spuścizna

Miłosz jest autorem „Traktatu moralnego", „Ziemi Ulro", „Roku myśliwego" i setek wierszy. Jest poetą nadziei i bólu, świadkiem stulecia totalitaryzmów, który zachował humanistyczną wiarę w słowo i piękno.`,
    resources: [
      {
        id: 'milosz-wl',
        title: 'Czesław Miłosz – Wolne Lektury',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/milosz-czeslaw/',
        source: 'Wolne Lektury',
        description: 'Poezja i proza Czesława Miłosza dostępna online',
      },
      {
        id: 'milosz-polona',
        title: 'Archiwum Miłosza – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Mi%C5%82osz+Czes%C5%82aw+poeta',
        source: 'Polona',
        description: 'Digitalizacje pism, rękopisów i pierwszych wydań Miłosza',
      },
      {
        id: 'milosz-ph',
        title: 'Czesław Miłosz – twórczość i emigracja',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Mi%C5%82osz+Czes%C5%82aw+emigracja+Nobel',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o twórczości i losach Czesława Miłosza',
      },
    ],
    relatedIds: ['literatura-prl', 'kultura-paryz', 'herbert', 'cenzura-prl', 'drugi-obieg'],
  },
  {
    id: 'kolejki-prl',
    title: 'Kolejki i braki towarów',
    category: 'społeczeństwo',
    shortDesc: 'Permanentny niedobór dóbr i wielogodzinne kolejki – codzienność Polaków w epoce PRL.',
    content: `## Kolejki i braki towarów w PRL

Kolejka stała się symbolem PRL. W krajach Bloku Wschodniego brak towarów w sklepach był chronicznym problemem gospodarki nakazowo-rozdzielczej. W Polsce dosłownie po wszystko stało się w kolejkach: po mięso, masło, papier toaletowy, węgiel, benzinę, a nawet po numery kolejkowe do kolejek po inne towary.

### Gospodarka niedoboru

Centralnie planowana gospodarka nie potrafiła zaspokoić potrzeb konsumentów. Decyzje o produkcji zapadały w gabinetach, a nie na rynku. Efektem były chroniczne braki: za dużo jednych towarów (których nikt nie chciał), za mało innych (po które ustawiały się kolejki).

System kartkowy – wprowadzony oficjalnie w 1976 r. dla cukru, a od 1980 r. rozszerzony na mięso, masło, alkohol, papierosy i benzynę – był przyznaniem przez władze, że gospodarka nie funkcjonuje. Kartki były przydziałem na miesiąc: tyle i tyle mięsa, tyle masła.

### Rytuał kolejki

Stanie w kolejce stało się rytuałem społecznym. Kobiety zostawiały torebki lub dziecięce wózki, by „trzymać miejsce". Specjalni „zawodowi kolejkacze" stali za zapłatą. Pojawiały się „zeszyty kolejkowe" – listy zapisanych przez sąsiadów.

Legendarny był towar „bezsensowny" – kupowany nie dlatego, że był potrzebny, ale dlatego, że był. „Stoi kolejka – trzeba stanąć, bo może coś dobrego" – to kwintesencja mentalności braku.

Budynki przy sklepach oblepiały się po świcie tłumem. Kobiety wstawały o 4 rano, by zdążyć przed otwarciem. Dzieci przed szkołą „stały w kolejce" zamiast ojca lub matki.

### Bony i leworęczna gospodarka

Obok kartek funkcjonowały „bony" – wewnętrzna waluta Pewexu, sklepu, gdzie za waluty zachodnie można było kupić towary niedostępne w zwykłych sklepach. Bony były przekazywane przez Polonię lub wymieniane na czarnym rynku.

Szara strefa kwitła. „Znajomości" decydowały o dostępie do mięsa u rzeźnika, miejscu w kolejce, deficytowych częściach samochodowych. Kto znał kogoś „z zaopatrzenia", miał uprzywilejowany dostęp.

### Pustki lat 80.

Apogeum niedoborów przypadło na lata 80. Po stanie wojennym gospodarka była w ruinie. Sklepowe półki świeciły pustkami. Powszechne były sklepy z kartkami bez towaru do wykupienia. Kolejka stała się metaforą systemu – absurdalna, marnująca czas, upokarzająca.

Humorystyczna opowieść tamtej epoki: „Co to jest kolejka po mięso? – Ogon smoka. – A co jest na początku? – Głowa z napisem «dziś mięsa nie ma»."

### Wyzwolenie

Liberalizacja cen w 1989–1990 roku zlikwidowała kolejki niemal z dnia na dzień. Towary pojawiły się w sklepach, ale ceny wzrosły dramatycznie – to był szok transformacji. Dla starszych Polaków porównanie pustych półek z pełnymi sklepami stało się jednym z najmocniejszych argumentów za kapitalizmem.`,
    resources: [
      {
        id: 'kolejki-polona',
        title: 'Prasa lat 80. – reportaże o brakach (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=kolejki+sklepy+braki+kartki+PRL',
        source: 'Polona',
        description: 'Cyfryzacje gazet i tygodników PRL z reportażami o brakach towarów',
      },
      {
        id: 'kolejki-ph',
        title: 'Gospodarka niedoboru w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=gospodarka+niedoboru+kolejki+kartki',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o systemie kartkowym i życiu codziennym w PRL',
      },
      {
        id: 'kolejki-ninateka',
        title: 'Kroniki filmowe o zaopatrzeniu',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=kolejki+sklepy+zaopatrzenie+PRL',
        source: 'Ninateka',
        description: 'Archiwalne kroniki i reportaże filmowe o codziennym życiu w sklepach PRL',
      },
    ],
    relatedIds: ['gospodarka-prl', 'kuchnia-prl', 'nomenklatura', 'plan-szescioletni', 'gierek'],
  },
  {
    id: 'mieszkania-prl',
    title: 'Wielka płyta i budownictwo mieszkaniowe',
    category: 'społeczeństwo',
    shortDesc: 'Masowe budownictwo z prefabrykatów – wielka płyta – i polityka mieszkaniowa PRL.',
    content: `## Wielka płyta i budownictwo mieszkaniowe w PRL

Masowe budownictwo mieszkaniowe z prefabrykatów betonowych – zwane „wielką płytą" – było jednym z największych projektów urbanistycznych PRL. Miliony Polaków przeprowadziły się ze starych kamienic i wsi do nowych blokowisk, które zmieniły oblicze polskich miast.

### Skala problemu mieszkaniowego

Po II wojnie światowej Polska stanęła przed ogromnym deficytem mieszkań – zniszczenia wojenne, migracje ze wschodu i ze wsi do miast stworzyły katastrofalny kryzys. Warszawa została zburzona w 75%, Wrocław przejął infrastrukturę od dawnych Niemców, ale potrzeby były ogromne.

Industrializacja lat 50. i 60. przyciągnęła miliony chłopów do miast – wszystkich trzeba było gdzieś pomieścić. Rodziny mieszkały po kilka pokoleń w jednym pokoju lub w melinach. Czas oczekiwania na mieszkanie spółdzielcze wynosił 10–15 lat.

### Wielka płyta: rozwiązanie masowe

W latach 60. PRL przyjął radziecki model budownictwa prefabrykowanego. Wielkie bloki z fabrycznie produkowanych betonowych paneli można było stawiać szybko i tanio. Efektem były wielkie osiedla mieszkaniowe: Ursynów, Bielany, Nowa Huta w Krakowie, Zaspa w Gdańsku, Winogrady w Poznaniu, Gocław w Warszawie.

W szczytowym okresie (lata 70., „program mieszkaniowy" Gierka) budowano 200–300 tysięcy mieszkań rocznie. Gierek obiecał „każdej rodzinie własne mieszkanie" – to były słowa, ale i realna ambicja.

### Życie w bloku

Standardowe mieszkanie w bloku liczyło 37–65 m². Kawalerka, M2 (dwa pokoje), M3 (trzy pokoje) – to była hierarchia dostępu do komfortu. Kuchnie były mikroskopijne, łazienki ciasne, ale własna toaleta i ciepła woda były dla wielu awansem cywilizacyjnym.

Blok był też projektem społecznym: wspólnota klatki schodowej, sąsiedztwo z obcymi, brak prywatności przez cienkie ściany. „Co u sąsiadów słychać" – nie była to metafora, lecz dosłowność.

Infrastruktura społeczna osiedli często zostawała w tyle: sklepy, szkoły, komunikacja powstawały z opóźnieniem. Wielkie osiedla lat 70. były przez lata wyspami bez usług.

### Kolejka na mieszkanie

Przydział mieszkania przez zakład pracy lub spółdzielnię był uprzywilejowany. Na przydział czekało się latami, a decydowały „punkty" za staż, sytuację rodzinną – i nierzadko znajomości. Niektórzy płacili łapówki zarządcom spółdzielni.

Posiadanie własnego mieszkania było celem życiowym – nieporównywalnie trudniejszym do osiągnięcia niż dziś.

### Trwałość wielkie płyty

Wielka płyta stała się problemem po 1989 roku. Bloki mają ograniczoną żywotność – projektowane na 50–70 lat, wiele z nich wymaga dziś gruntownych remontów. Termomodernizacja, wymiana instalacji, nowe windy – to wyzwania polskich miast w XXI wieku. Mimo to wielka płyta pozostanie z nami na długo.`,
    resources: [
      {
        id: 'mieszkania-polona',
        title: 'Materiały o budownictwie PRL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=budownictwo+mieszkaniowe+wielka+p%C5%82yta+PRL',
        source: 'Polona',
        description: 'Archiwalne plany, broszury i prasa o budownictwie mieszkaniowym PRL',
      },
      {
        id: 'mieszkania-ph',
        title: 'Polityka mieszkaniowa PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=budownictwo+mieszkaniowe+bloki+wielka+p%C5%82yta',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o polityce mieszkaniowej i budownictwie blokowym w Polsce',
      },
      {
        id: 'mieszkania-ninateka',
        title: 'Kroniki filmowe – nowe osiedla',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=nowe+osiedla+bloki+budownictwo',
        source: 'Ninateka',
        description: 'Kroniki filmowe dokumentujące powstawanie wielkich osiedli mieszkaniowych w PRL',
      },
    ],
    relatedIds: ['nowa-huta', 'gospodarka-prl', 'dzieci-prl', 'gierek', 'plan-szescioletni'],
  },
  {
    id: 'rwpg',
    title: 'RWPG – Rada Wzajemnej Pomocy Gospodarczej',
    category: 'gospodarka',
    shortDesc: 'Wschodnioblokowy odpowiednik EWG – integracja gospodarcza krajów komunistycznych pod hegemonią ZSRR.',
    content: `## RWPG – Rada Wzajemnej Pomocy Gospodarczej

Rada Wzajemnej Pomocy Gospodarczej (ros. СЭВ – Sowiet Ekonomiczeskiej Wzaimopomoszczi, ang. COMECON) była organizacją integracji ekonomicznej krajów socjalistycznych, powołaną w 1949 roku jako odpowiedź na Plan Marshalla. Przez 40 lat wyznaczała ramy handlu i kooperacji przemysłowej Polski z blokiem wschodnim.

### Geneza i struktura

RWPG powstała w 1949 roku z inicjatywy Stalina. Pierwotni członkowie: ZSRR, Polska, Czechosłowacja, Węgry, Rumunia, Bułgaria i Albania (która wystąpiła w 1961). Później dołączyły NRD (1950), Mongolia (1962), Kuba (1972) i Wietnam (1978).

Siedziba znajdowała się w Moskwie. Formalnie organizacja miała charakter dobrowolnej kooperacji – w praktyce ZSRR dyktował warunki. Ceny transferowe, kursy walut, przydziały produkcji – wszystko to ustalano na sesjach Rady, gdzie głos Moskwy był rozstrzygający.

### Specjalizacja produkcji

Jedną z głównych zasad RWPG była „socjalistyczna kooperacja" – każdy kraj miał specjalizować się w określonych branżach. Polska była centrum produkcji węgla, okrętów i maszyn górniczych. Czechosłowacja – przemysłu maszynowego. NRD – optyki i precyzji. Rumunii przypadła ropa i przemysł chemiczny.

W praktyce podział ten był niestabilny, a krajom zależnym często narzucano profil produkcji niekorzystny dla ich własnego rozwoju. ZSRR zachowywał dla siebie zaawansowane technologie i surowce energetyczne.

### Ceny transferowe i nieekwiwalentna wymiana

Kluczowym problemem RWPG były ceny. Surowce – zwłaszcza ropa radziecka – sprzedawane były krajom RWPG poniżej cen rynkowych, co było formą subwencji sowieckiej. W zamian kraje wschodnioblokowe eksportowały towary przemysłowe do ZSRR często po zawyżonych cenach lub w jakości, której nikt na Zachodzie nie chciał kupić.

Ten system ukrywał skalę nieefektywności. Fabryki w Polsce produkowały eksportowy sprzęt dla ZSRR, ale w standardzie, który nie mógłby konkurować na rynku zachodnim.

### Transfery technologii (lub ich brak)

RWPG nie stała się nośnikiem nowoczesnych technologii. ZSRR pilnie strzegł know-how. Kraje satelickie nie miały swobodnego dostępu do zachodniej technologii (embargo CoCom). W efekcie przez dekady powiększała się przepaść technologiczna między Wschodem a Zachodem.

### Zadłużenie i kryzys lat 80.

W latach 70. kraje RWPG – w tym Polska – masowo zaciągały kredyty zachodnie, licząc na modernizację. Gdy przyszedł kryzys, długi okazały się nie do spłacenia. Polska w 1980 roku miała dług zachodni rzędu 20 mld dolarów. RWPG nie była w stanie pomóc – brakowało twardych walut.

RWPG rozwiązała się w 1991 roku, gdy upadły komunistyczne rządy i rynki wschodnioblokowe przestały istnieć w dotychczasowej formie.`,
    resources: [
      {
        id: 'rwpg-polona',
        title: 'Dokumenty RWPG – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=RWPG+Rada+Wzajemnej+Pomocy+Gospodarczej',
        source: 'Polona',
        description: 'Archiwalne dokumenty i publikacje dotyczące RWPG w zbiorach Polony',
      },
      {
        id: 'rwpg-ph',
        title: 'RWPG i gospodarka bloku wschodniego',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=RWPG+gospodarka+blok+wschodni',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o RWPG i jej wpływie na polską gospodarkę',
      },
      {
        id: 'rwpg-ipn',
        title: 'Materiały archiwalne dot. RWPG',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=RWPG+handel+zagraniczny',
        source: 'IPN Inwentarz',
        description: 'Materiały archiwalne dotyczące polskiego uczestnictwa w RWPG',
      },
    ],
    relatedIds: ['gospodarka-prl', 'plan-szescioletni', 'gierek', 'uklad-warszawski', 'jalta'],
  },
  {
    id: 'jazz-prl',
    title: 'Jazz w Polsce Ludowej',
    category: 'kultura',
    shortDesc: 'Jazz – muzyka wolności, która przebiła się przez ideologiczne bariery PRL i stała się symbolem otwarcia na Zachód.',
    content: `## Jazz w Polsce Ludowej

Jazz w PRL to paradoks: muzyka uznana przez stalinizm za imperialistyczną, dekadencką i zgubną – stała się jednym z pierwszych przejawów odwilży, a Polska Jazz Jamboree jest do dziś jednym z najważniejszych festiwali jazzowych na świecie.

### Stalinizm i zakaz jazzu

W szczytowym okresie stalinizmu (1949–1955) jazz był formalnie zakazany jako „muzyka burżuazyjna" i „imperialistyczna propaganda". Muzycy byli represjonowani, płyty konfiskowane, a publiczne granie jazzu mogło skończyć się aresztem.

Władze propagowały muzykę sowiecką i socrealistyczną – marsze, masowe pieśni, folklor stylizowany na ludowy. Jazz był symbolem Zachodu, wolności i indywidualizmu – wszystkiego, co komunizm chciał wyprzeć.

### Odwilż i wybuch

Październik 1956 roku otworzył Polskę. Jazz natychmiast wybuchł z siłą tłumionej sprężyny. Kawiarnie, kluby studenckie, piwnice – wszędzie pojawiły się zespoły. Muzyczne pokolenie Krzysztofa Komedy, Andrzeja Kurylewicza, Jerzego Miliana, Tomasza Stańki nie musiało się już kryć.

W 1956 roku zorganizowano pierwszy Ogólnopolski Festiwal Muzyki Jazzowej w Sopocie. Od 1958 roku to wydarzenie przeniosło się do Warszawy jako Jazz Jamboree – i trwa do dziś. Jazz Jamboree przyciągał gwiazdy światowe: Miles Davis, Dizzy Gillespie, Modern Jazz Quartet grały w Warszawie.

### Komeda i polska szkoła jazzu

Krzysztof Komeda (Trzciński) stał się symbolem polskiego jazzu. Jego album „Astigmatic" (1965) jest do dziś arcydziełem gatunku – europejski jazz z poetycką wrażliwością, daleką od amerykańskich wzorów. Komeda komponował też muzykę do filmów Romana Polańskiego – w tym słynne kołysanki z „Dziecka Rosemary".

Tomasz Stańko, Jan Ptaszyn Wróblewski, Zbigniew Namysłowski, Urszula Dudziak – to muzycy, którzy stworzyli polską szkołę jazzu. Polskie Radio Jazz Studio nagrywało i promowało jazzowe sesje.

### Jazz jako przestrzeń wolności

Jazz w PRL był czymś więcej niż muzyką – był przestrzenią wolności w autorytarnym państwie. Improwizacja – jądro jazzu – była antytezą kolektywizmu i planowania. Muzyk jazzowy myślał i decydował sam, w chwili.

Kluby jazzowe przyciągały młodzież, studentów, intelektualistów. Słuchano też muzyki z radia BBC i Głosu Ameryki. Jazz łączył się z kulturą zachodnią i był oknem na świat.

### Paradoks

Komunistyczne władze ostatecznie zaakceptowały jazz – bo widziały, że go nie powstrzymają, a był dla nich wygodniejszy niż rock and roll. Jazz był „intelektualny", a więc bezpieczniejszy klasowo. Festiwal Jazz Jamboree stał się też oknem propagandowym: dowodem, że Polska jest krajem otwartym na kulturę zachodnią.

Ten paradoks – muzyka wolności w systemie zniewolenia – jest jednym z najciekawszych wątków kulturalnych PRL.`,
    resources: [
      {
        id: 'jazz-ninateka',
        title: 'Jazz Jamboree – archiwalne nagrania (Ninateka)',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Jazz+Jamboree',
        source: 'Ninateka',
        description: 'Archiwalne nagrania z festiwalu Jazz Jamboree i polskich muzyków jazzowych',
      },
      {
        id: 'jazz-polona',
        title: 'Polska prasa jazzowa (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=jazz+polska+PRL+1956',
        source: 'Polona',
        description: 'Cyfryzacje pism i artykułów prasowych o jazzie w Polsce Ludowej',
      },
      {
        id: 'jazz-ph',
        title: 'Jazz w PRL – kultura opozycji i wolności',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=jazz+PRL+Komeda+festiwal',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o jazzie jako kulturze wolności w Polsce Ludowej',
      },
    ],
    relatedIds: ['kultura-prl', 'komeda', 'muzyka-powazna-prl', 'radio-prl', 'pazdziernik-1956'],
  },
  {
    id: 'sport-prl',
    title: 'Sport w PRL',
    category: 'społeczeństwo',
    shortDesc: 'Sukcesy olimpijskie, masowy sport robotniczy i propaganda sukcesu – sport jako polityczne narzędzie PRL.',
    content: `## Sport w PRL

Sport w Polsce Ludowej pełnił wieloraką rolę: był narzędziem propagandy, oknem prestiżu na arenie międzynarodowej, ale też autentycznym źródłem radości i dumy narodowej. Polscy sportowcy odnosili na olimpiadach sukcesy nieproporcjonalne do wielkości kraju.

### Sport jako ideologia

Komunistyczna władza traktowała sport instrumentalnie. Wielkie sukcesy sportowe miały dowodzić wyższości socjalizmu nad kapitalizmem – porównywalne z lotem Gagarina czy sputnikiem. Sukcesy olimpijskie były materiałem propagandowym pierwszej klasy.

Jednocześnie masowy sport miał integrować i wychowywać nowego człowieka. Towarzystwa Krzewienia Kultury Fizycznej (TKKF), Legia, Gwardia, Górnik – nazwy klubów oddawały charakter systemu: sport był organizacyjnie powiązany z wojskiem, milicją i zakładami pracy.

### Olimpijskie sukcesy

Polska była regularną potęgą olimpijską. Najlepszy był rok 1972 w Monachium: 13 medali, w tym 7 złotych. Lekkoatleci, bokserzy, wioślarze, zapaśnicy – wielkie indywidualności i wielkie drużyny.

**Irena Szewińska** – siedmiokrotna medalistka olimpijska, wielokrotna rekordzistka świata, ikona polskiej lekkoatletyki. Złoty medal w biegu na 400 metrów w Montrealu 1976 – jeden z najpiękniejszych momentów polskiego sportu.

**Kazimierz Deyna** – mistrz futbolu. Drużyna Górskiego – Polska w finale mistrzostw świata 1974 (3. miejsce), złoto olimpijskie w Monachium 1972. Lata 70. to złoty czas polskiej piłki.

**Jerzy Kulej** – dwukrotny złoty medalista olimpijski w boksie (Tokio 1964, Meksyk 1968).

**Władysław Kozakiewicz** – złoty medal w skoku o tyczce na olimpiadzie w Moskwie 1980. Jego gest w stronę trybun sowieckich widzów (znany jako „gest Kozakiewicza") stał się symbolem oporu wobec Wschodu.

### Piłka nożna lat 70.

Epoka Gierka to złoty czas polskiego futbolu. Trener Kazimierz Górski zbudował drużynę marzeń: Deyna, Lubański, Szarmach, Lato, Gadocha, Tomaszewski. Polska zdobyła złoto olimpijskie (1972), srebro olimpijskie (1976) i zajęła 3. miejsce na MŚ w 1974 i 1982.

Mecz Polska – Anglia (1973), zakończony remisem 1:1, który pozwolił Polsce awansować na MŚ i wyeliminował Anglię – jest legendą.

### Lekkoatletyka

Polska lekkoatletyka lat 60.–80. była globalną potęgą. Irena Szewińska, Jadwiga Wajs-Marcinkiewicz, Grażyna Rabsztyn, Bronisław Malinowski (złoto w Moskwie 1980 w biegu na 3000 m z przeszkodami) – to nie była przypadkowa dominacja.

### Sport kobiecy

PRL był stosunkowo postępowy w sporcie kobiecym. Kobiety uczestniczyły we wszystkich dyscyplinach, a osiągnięcia sportsmenek były szeroko nagłaśniane.

### Granica propagandy i rzeczywistości

Za sukcesami stało zawodowe podejście, świetni trenerzy i system wyławiania talentów. Ale też – jak wszędzie za żelazną kurtyną – doping i system przywilejów dla sportowców. Wyjeżdżanie za granicę, lepsze zaopatrzenie, samochody, paszporty – sportowcy żyli lepiej niż przeciętny Polak.`,
    resources: [
      {
        id: 'sport-ninateka',
        title: 'Sport w PRL – archiwalne transmisje (Ninateka)',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=sport+olimpiada+Polska+PRL',
        source: 'Ninateka',
        description: 'Archiwalne transmisje, kroniki i reportaże sportowe z czasów PRL',
      },
      {
        id: 'sport-pkf',
        title: 'Polska Kronika Filmowa – sport',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Polska%20Kronika%20Filmowa',
        source: 'Ninateka/PKF',
        description: 'Kroniki filmowe dokumentujące sukcesy polskich sportowców w erze PRL',
      },
      {
        id: 'sport-ph',
        title: 'Sport jako propaganda sukcesu',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=sport+PRL+olimpiada+propaganda',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o roli sportu w propagandzie PRL i osiągnięciach polskich sportowców',
      },
    ],
    relatedIds: ['gospodarka-prl', 'propaganda-prl', 'gierek', 'kultura-prl', 'hermaszewski'],
  },
  {
    id: 'szymborska',
    title: 'Wisława Szymborska',
    category: 'osoby',
    shortDesc: 'Poetka, laureatka Nagrody Nobla 1996 – mistrzyni ironii i codziennej filozofii.',
    content: `## Wisława Szymborska (1923–2012)

Wisława Szymborska należy do grona największych polskich poetów XX wieku. W 1996 roku otrzymała literacką Nagrodę Nobla – Akademia Szwedzka uzasadniła ją „poezją, która z ironiczną precyzją pozwala kontekstowi historycznemu i biologicznemu fragmentowi ludzkiej rzeczywistości wyłonić się na światło". Jej wiersze, pozornie proste i żartobliwe, kryją w sobie głębię filozoficzną i moralną.

### Droga do poezji

Szymborska urodziła się w Kórniku pod Poznaniem, dorastała w Krakowie. Debiutowała w 1945 roku na łamach prasy. Jej pierwszy tomik „Dlatego żyjemy" (1952) był jeszcze zabarwiony socrealizmem – sama poetka w późniejszych latach dystansowała się od tych wierszy.

Przełomem był tom „Pytania zadawane sobie" (1954) i kolejne zbiory, w których Szymborska wypracowała swój niepowtarzalny styl: filozoficzne pytania zadawane poprzez codzienne, konkretne obrazy, ironia jako narzędzie poznania, zdumienie światem jako postawa etyczna.

### Styl i tematyka

Szymborska pisała o tym, co małe i pozornie nieważne – o kamieniu, kocie, targu – i przez te obrazy docierała do pytań fundamentalnych: o przypadek i konieczność, o tożsamość, o śmierć i przemijanie. Wiersz „Nic dwa razy" stał się jednym z najbardziej znanych wierszy w języku polskim.

Jej „Rozmowa z kamieniem", „Widok z ziarnkiem piasku", „Koniec i początek" – to perły liryki filozoficznej. Wiersz „Tortury" jest poruszającym komentarzem do historii represji. „Obóz głodowy pod Jasłem" – świadectwem o zagładzie.

Szymborska unikała wielkich słów i patosu. Jej oręż to precyzja języka i niespodziewana pointą.

### Pozycja w PRL

W czasach PRL Szymborska była uznaną poetką, choć nie politycznie zaangażowaną. Pracowała w redakcji krakowskiego „Życia Literackiego", gdzie przez wiele lat prowadziła rubrykę „Lektury nadobowiązkowe" – błyskotliwe recenzje książek, które stały się klasykiem eseistyki.

Nie była dysydentką, ale jej poezja – kwestionująca pewniki, ironiząca schematy myślenia – była antytezą doktrynerskiego komunizmu. W stanie wojennym podpisała list protestacyjny twórców krakowskich.

### Nobel i późne lata

Nagrodę Nobla odebrała skromnie i ze swoją typową ironią. Na bankiecie noblowskim powiedziała, że jest „nie bardziej skromna od innych poetów, tylko bardziej inteligentna w skromności".

Ostatnie lata życia spędziła w Krakowie, otoczona gronem przyjaciół. Pisała do końca. Jej ostatni tom „Wystarczy" ukazał się pośmiertnie. Pochowana na cmentarzu Rakowickim w Krakowie.`,
    resources: [
      {
        id: 'szym-wl',
        title: 'Wisława Szymborska – Wolne Lektury',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/szymborska-wislawa/',
        source: 'Wolne Lektury',
        description: 'Wiersze Wisławy Szymborskiej dostępne online',
      },
      {
        id: 'szym-polona',
        title: 'Archiwum Szymborskiej – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Szymborska+Wis%C5%82awa',
        source: 'Polona',
        description: 'Zdigitalizowane pierwsze wydania tomów poetyckich Szymborskiej',
      },
      {
        id: 'szym-ninateka',
        title: 'Szymborska – wywiady i nagrania',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Szymborska+Wis%C5%82awa',
        source: 'Ninateka',
        description: 'Archiwalne wywiady telewizyjne i radiowe z Wisławą Szymborską',
      },
    ],
    relatedIds: ['literatura-prl', 'kultura-prl', 'milosz', 'herbert', 'cenzura-prl'],
  },
  {
    id: 'lem',
    title: 'Stanisław Lem',
    category: 'osoby',
    shortDesc: 'Pisarz science-fiction i futurysta – jeden z najczęściej tłumaczonych polskich autorów w historii.',
    content: `## Stanisław Lem (1921–2006)

Stanisław Lem był jednym z najważniejszych pisarzy XX wieku – twórcą science fiction, filozofem technologii i futurystą, którego dzieła przetłumaczono na kilkadziesiąt języków, sprzedając w dziesiątkach milionów egzemplarzy. Jest najczęściej tłumaczonym polskim pisarzem w historii.

### Lwów i trauma wojenna

Lem urodził się we Lwowie. Przeżył II wojnę światową ukrywając swoje żydowskie pochodzenie na aryjskich dokumentach. Doświadczenie Holokaustu, śmierci i okrucieństwa historii odcisnęło trwałe piętno na jego twórczości – pesymizm co do natury ludzkiej, fascynacja zagładą i ocaleniem.

Po wojnie zamieszkał w Krakowie, gdzie spędził większość życia.

### Twórczość: między fantastyką a filozofią

Lem zadebiutował powieścią „Astronauci" (1951), ale prawdziwy przełom przyniosła „Solaris" (1961) – arcydzieło SF o niemożności komunikacji z radykalnie obcą formą życia. Ekranizowana dwukrotnie (Tarkowski 1972, Soderbergh 2002), stała się ikoną gatunku na całym świecie.

Inne kluczowe dzieła: „Eden" (1959), „Niezwyciężony" (1964), „Głos Pana" (1968), cykl o Ijonie Tichym, cykl o Pirksie, „Cyberiada" (1965). „Cyberiada" to poetyckie opowiadania o robotach Trypanie i Klapsaucjusie – ironiczne, błyskotliwe, filozoficznie wieloznaczne.

Lem pisał też eseje: „Summa Technologiae" (1964) – futurologiczna analiza przyszłości technologii, która w wielu miejscach okazała się prorocza – i „Filozofia przypadku" (1968).

### Stosunek do komunizmu

Lem był pisarzem niezależnym w warunkach PRL. Nie był dysydentką ani aktywnym komunistą. Udało mu się zbudować pozycję, w której cenzura generalnie go nie dotykała – SF było bardziej tolerowane niż realistyczna proza polityczna.

Ale nie był naiwny. W jego powieściach pojawiają się krytyczne alegorie: systemy totalne, manipulacja, bezduszne machiny biurokratyczne. „Opowieści o pilocie Pirksie" zawierają subtelne komentarze do współczesności.

Zdobył prawo do wyjazdów za granicę i kontaktów z zachodnimi wydawcami – co było przywilejem. W 1982 roku wyjechał do Wiednia; wrócił do Polski po upadku komunizmu.

### Konflikty ze środowiskiem

Lem był postacią kontrowersyjną. Ostro krytykował amerykańskie SF jako intelektualnie płytkie – co doprowadziło do konfliktu z tamtejszym środowiskiem i usunięcia go z organizacji Science Fiction Writers of America (SFWA). Był niezłomny w ocenach, bezkompromisowy.

### Spuścizna

Lem jest patronem nauki o przyszłości, cyberprzestrzeni i etyce technologicznej. Jego przewidywania dotyczące internetu, wirtualnej rzeczywistości i problemów etycznych AI okazały się trafne. Muzeum Lema w Krakowie jest hołdem dla jego wyobraźni.`,
    resources: [
      {
        id: 'lem-wl',
        title: 'Stanisław Lem – Wolne Lektury',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/lem-stanislaw/',
        source: 'Wolne Lektury',
        description: 'Wybrane utwory Stanisława Lema dostępne online',
      },
      {
        id: 'lem-polona',
        title: 'Archiwum Lema – Polona',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Lem+Stanis%C5%82aw+Solaris',
        source: 'Polona',
        description: 'Zdigitalizowane pierwsze wydania powieści i esejów Stanisława Lema',
      },
      {
        id: 'lem-ninateka',
        title: 'Lem – wywiady i adaptacje filmowe',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Lem+Stanis%C5%82aw+Solaris',
        source: 'Ninateka',
        description: 'Archiwalne wywiady z Lemem i adaptacje filmowe jego dzieł',
      },
    ],
    relatedIds: ['literatura-prl', 'kultura-prl', 'nauka-prl', 'cenzura-prl', 'milosz'],
  },
  {
    id: 'motoryzacja-prl',
    title: 'Motoryzacja w PRL – Maluch i inne',
    category: 'społeczeństwo',
    shortDesc: 'Fiat 126p „Maluch", Warszawa, Syrenka – samochód jako marzenie i symbol statusu w Polsce Ludowej.',
    content: `## Motoryzacja w PRL

Samochód w Polsce Ludowej był luksusem nieosiągalnym dla większości obywateli – i właśnie dlatego stał się jednym z najbardziej pożądanych symboli statusu. Historia motoryzacji PRL to historia kolejek (wieloletnich!), kombinowania i marzeń o własnych czterech kółkach.

### Pierwsze polskie samochody

Powojenna motoryzacja polska zaczęła się od licencji na radzieckie pojazdy. Warszawa M-20 (1951) – polska wersja Pobiedy – była samochodem dla klas wyższych i aparatu władzy. Syrenka (od 1957 r.) – pierwszy „ludowy" samochód, dwusuwowa miniatura pełna ekscentryczności technicznej – była próbą demokratyzacji motoryzacji. Jej trwałość pozostawiała wiele do życzenia.

### Fiat 125p – duży Fiat

W 1967 roku podpisano umowę z włoskim Fiatem na licencyjną produkcję Fiata 125. „Duży Fiat" (1967–1991) był samochodem nowej klasy średniej – solidny, przestronny, z silnikiem na miarę. Przez lata oczekiwania na jego przydział sięgały 5–10 lat.

Posiadanie Dużego Fiata było znakiem przynależności do względnie uprzywilejowanej warstwy – dyrektorów, inżynierów, lekarzy.

### Maluch – ikona PRL

Fiat 126p – „Maluch" – to największy mit motoryzacyjny PRL. Produkowany od 1973 roku w Bielsku-Białej i Tychach, był odpowiedzią na potrzebę masowej motoryzacji. Mały, tani (relatywnie), prosty w naprawie – i wywołujący szaleńczą kolejkę chętnych.

Na Malucza czekało się latami. Kupowało się bony na samochód, które można było odsprzedać (nielegalnie) z ogromną premią. Maluch stał się symbolem aspiracji: pierwsze własne auto, wolność weekendowych wyjazdów, możliwość przewiezienia rodziny.

Paradoksem było, że Maluch był droższy, niż wskazywała cena oficjalna – bo do niej doliczano „wartość rynkową" czarnego rynku. Korupcja w salonach dealerskich była powszechna.

### Benzyna i stacje

Dostęp do paliwa był regularnie utrudniony. Kolejki na stacjach benzynowych, reglamentacja w kryzysowych latach 80. – benzynę na kartki w 1981–1983. Kierowcy organizowali „banki benzyny" – napełniali bańki, by nie zostać bez paliwa.

### Kultura samochodowa

Samochód w PRL był też obiektem kultu technicznego. Naprawiano go samodzielnie – części były trudno dostępne, ale zaradność polska nie miała granic. Warsztaty garażowe, sieci wymiany części, komisy – parallel economy wokół samochodów kwitła.

Prawo jazdy i samochód oznaczały wolność ruchu. Turystyka samochodowa w Polsce i za granicę (do NRD, Czechosłowacji, Jugosławii) była marzeniem i osiągalnym celem dla uprzywilejowanych.

### Po 1989 roku

Liberalizacja umożliwiła import zachodnich samochodów. Rynek zalały używane „zachodniaki" – Golf, Mercedes, BMW. Maluch stał się symbolem dawnych czasów. Produkcję Fiata 126p zakończono dopiero w 2000 roku, ale już w połowie lat 90. stał się nostalgiczną zabytkowością.`,
    resources: [
      {
        id: 'maluch-polona',
        title: 'Prasa motoryzacyjna PRL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Fiat+126+Maluch+motoryzacja+PRL',
        source: 'Polona',
        description: 'Archiwalne artykuły prasowe i broszury o motoryzacji w Polsce Ludowej',
      },
      {
        id: 'maluch-ninateka',
        title: 'Kroniki filmowe – motoryzacja',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=samoch%C3%B3d+Fiat+Maluch+motoryzacja+PRL',
        source: 'Ninateka',
        description: 'Archiwalne kroniki i reportaże filmowe o samochodach i motoryzacji w PRL',
      },
      {
        id: 'maluch-ph',
        title: 'Motoryzacja jako symbol statusu w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=samoch%C3%B3d+motoryzacja+Maluch+PRL',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o roli samochodu w życiu społecznym PRL',
      },
    ],
    relatedIds: ['kolejki-prl', 'gospodarka-prl', 'gierek', 'kuchnia-prl', 'nostalgia-prl'],
  },
  {
    id: 'prasa-prl',
    title: 'Prasa i media w PRL',
    category: 'kultura',
    shortDesc: 'Trybuna Ludu, Polityka, Przekrój – kontrolowana prasa jako narzędzie propagandy i okno na rzeczywistość.',
    content: `## Prasa i media w PRL

Prasa w Polsce Ludowej funkcjonowała w warunkach ścisłej kontroli partyjnej i cenzury, ale była też areną subtelnych gier między władzą a dziennikarzami, którzy próbowali przemycić odrobinę prawdy między wierszami.

### Struktura systemu prasowego

PZPR kontrolowała wszystkie media. Każde pismo musiało mieć „właściciela" – instytucję partyjną, związkową lub stronnictwo satelickie. Centralny Urząd Kontroli Prasy, Publikacji i Widowisk (cenzura) sprawdzał każdy tekst przed drukiem.

Główny organ partyjny: **Trybuna Ludu** – codzienna gazeta partii, nudna, pełna partyjnego nowomówu, czytana przez obowiązek, a nie z ciekawości. Nakład milionowy, bo wielkie zakłady pracy prenumerowały ją automatycznie.

**Żołnierz Wolności** – dziennik wojskowy. **Sztandar Młodych** – pismo ZMS. **Głos Pracy** – związkowy. Każda instytucja miała swój organ.

### Tygodniki – względna swoboda

Tygodniki miały nieco więcej swobody niż dzienniki. **Polityka** (od 1957) pod redakcją Mieczysława Rakowskiego była najbardziej wpływowym tygodnikiem opinii – ostrożnie reformistyczna, czytana przez inteligencję, niekiedy pozwalała na krytykę systemu w jego ramach.

**Przekrój** (od 1945, Kraków) był pismem kulturalno-rozrywkowym o wyjątkowej klasie graficznej i redakcyjnej. Był oknem na kulturę zachodnią – filmy, literatura, moda – i był powszechnie kochany.

**Tygodnik Powszechny** (Kraków) – katolickie pismo środowisk inteligenckich, w istocie jedyne niezależne pismo w systemie. Jego redaktorzy, w tym Jerzy Turowicz, potrafili bronić niezależności redakcji nawet w najtrudniejszych czasach.

### Dziennikarze i gra z cenzurą

Doświadczeni dziennikarze nauczyli się gry z cenzurą. Aluzja, metafora, odwołanie do historii starożytnej lub obcej – to były techniki mówienia prawdy tak, by cenzor jej nie zauważył lub nie chciał zrozumieć.

Słynna była praktyka „czytania między wierszami" – polscy czytelnicy nauczyli się rozumieć to, co nie było napisane. Pominięcie informacji, nieobecność tematu – to też mówiło o rzeczywistości.

### Kryzys i podziemie

Po 1976 roku, wraz z powstaniem KOR, zaczął kwitnąć drugi obieg prasowy. Bezdebitowe pisma: „Biuletyn Informacyjny KOR", „Robotnik", „Res Publica", setki innych – drukowane na powielaczach i dystrybuowane siatkami kolporterów.

Po sierpniu 1980 roku Solidarność wydawała swoje regionalne biuletyny, tygodniki i miesięczniki. Prasa niezależna stała się masową. Stan wojenny ją zdelegalizował, ale nie zniszczył.

### Telewizja i radio

Obok prasy drukowanej kluczową rolę odgrywała telewizja (od 1952) i radio. Dziennik Telewizyjny – główny serwis informacyjny TVP – był synonimem propagandy. Prowadzony przez lojalne kadry, manipulował informacją, przemilczał fakty.

Alternatywą były Radio Wolna Europa i głos Ameryki – słuchane nielegalnie przez miliony.`,
    resources: [
      {
        id: 'prasa-polona',
        title: 'Prasa PRL – archiwalne numery (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Trybuna+Ludu+Polityka+Przekr%C3%B3j+PRL',
        source: 'Polona',
        description: 'Zdigitalizowane numery głównych pism PRL, w tym Trybuny Ludu, Polityki i Przekroju',
      },
      {
        id: 'prasa-ph',
        title: 'Media i prasa w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=prasa+media+cenzura+PRL+Trybuna+Ludu',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o systemie prasowym i roli mediów w Polsce Ludowej',
      },
      {
        id: 'prasa-ipn',
        title: 'Dokumenty cenzury prasowej',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=cenzura+prasa+GUKPPiW',
        source: 'IPN Inwentarz',
        description: 'Dokumenty Głównego Urzędu Kontroli Prasy dotyczące ingerencji cenzury',
      },
    ],
    relatedIds: ['cenzura-prl', 'propaganda-prl', 'drugi-obieg', 'tygodnik-powszechny', 'radio-wolna-europa'],
  },
  {
    id: 'edukacja-prl',
    title: 'Edukacja i szkoła w PRL',
    category: 'społeczeństwo',
    shortDesc: 'System oświaty jako narzędzie indoktrynacji – i mimo to szkoła jako miejsce realnej wiedzy i przyjaźni.',
    content: `## Edukacja i szkoła w PRL

Szkoła w Polsce Ludowej była jednym z głównych narzędzi wychowania nowego człowieka – lojalnego obywatela socjalistycznego państwa. A jednocześnie była miejscem, gdzie miliony dzieci uczyły się matematyki, historii i literatury, zdobywały przyjaźnie i – nierzadko – lekcje prawdziwego życia od nauczycieli, którzy przemycali prawdę mimo systemu.

### Reforma systemu oświaty

Po 1944 roku komuniści szybko przejęli kontrolę nad szkolnictwem. Zlikwidowano szkoły prywatne i wyznaniowe. Wprowadzono jednolity program nauczania oparty na radzieckich wzorcach: obowiązkowa nauka rosyjskiego, marksistowsko-leninowska interpretacja historii, gloryfikacja ZSRR.

Jednocześnie dokonano ogromnego postępu w upowszechnieniu edukacji. Analfabetyzm, który przed wojną dotyczył ok. 15–20% społeczeństwa, zwalczono masowymi kampaniami. Szkolnictwo wyższe otwarto dla dzieci robotniczych i chłopskich. To był realny awans cywilizacyjny.

### Ideologia w klasie

Lekcje historii były skrzywione przez pryzmat marksizmu. Szkoła uczyła: kapitalizm jest zły, imperializm zachodni grozi, ZSRR jest przyjacielem, Armia Czerwona wyzwoliła Polskę. AK była „reakcją", zachodnia pomoc dla Polski w czasie wojny – przemilczana.

Religia została usunięta ze szkół w 1961 roku (wcześniej była ograniczana). Zastąpiła ją „etyka i wychowanie obywatelskie" – de facto ideologia partyjna. Lekcje religii przeniosły się do kościołów i katechezy parafialnej.

Na ścianach szkół wisiały portrety Lenina i Bieruta, potem Gomułki, Gierka. Szkolne uroczystości: 1 Maja, Rewolucja Październikowa, rocznice PKWN.

### Organizacje młodzieżowe

ZMP (Związek Młodzieży Polskiej) do 1956 roku, potem ZMS, ZMW, ZHP (w wersji zsowietyzowanej, później przywrócona tradycja harcerska) – organizacje młodzieżowe były integralną częścią szkolnego życia. Zrzeszały obowiązkowo lub półobowiązkowo, wychowywały ideologicznie.

Harcerstwo miało swoją tradycję i etos niezależny od władzy – i niekiedy stawało się przestrzenią prawdziwej wspólnoty, mimo oficjalnych ram.

### Nauczyciele i luki w systemie

Wielu nauczycieli, zwłaszcza starszego pokolenia, wychowanych przed wojną, przemycało nieoficjalną prawdę. Historyk na lekcji potrafił „między wierszami" pokazać, co naprawdę wydarzyło się w 1939 roku lub w Katyniu. Polonista cytujący Herberta przesyłał sygnał.

Ta nieformalna edukacja równoległa do oficjalnej programu była fenomenem PRL – testament tradycji i obywatelskiej odpowiedzialności nauczycieli.

### Szkolnictwo wyższe

Uniwersytety były pod ścisłą kontrolą partyjną. Rektorów i dziekanów mianowała partia. Marksizm-leninizm był obowiązkowym przedmiotem. Studenci musieli zdawać egzamin z materializmu dialektycznego.

Mimo to polskie uczelnie – zwłaszcza Uniwersytet Warszawski, AGH, UJ – zachowały poziom naukowy. Marzec 1968 obnażył granice możliwości – władza mogła wyrzucać profesorów i studentów za poglądy.

### Spuścizna

PRL dał Polsce masową edukację – i to jest realne osiągnięcie. Ale też wychował pokolenia w schemacie ideologicznym, z lukusem w wiedzy historycznej i obywatelskiej. Likwidacja tych braków stała się zadaniem szkoły po 1989 roku.`,
    resources: [
      {
        id: 'edukacja-polona',
        title: 'Podręczniki szkolne PRL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=podr%C4%99cznik+szkolny+PRL+historia',
        source: 'Polona',
        description: 'Zdigitalizowane podręczniki szkolne z czasów PRL – od historii po wychowanie obywatelskie',
      },
      {
        id: 'edukacja-ph',
        title: 'System oświaty w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=edukacja+szko%C5%82a+o%C5%9Bwiata+PRL',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o systemie szkolnictwa i indoktrynacji w Polsce Ludowej',
      },
      {
        id: 'edukacja-ninateka',
        title: 'Kroniki szkolne – życie uczniów w PRL',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=szko%C5%82a+uczniowie+edukacja+PRL',
        source: 'Ninateka',
        description: 'Archiwalne filmy o życiu szkolnym i edukacji w Polsce Ludowej',
      },
    ],
    relatedIds: ['dzieci-prl', 'zmp', 'propaganda-prl', 'marzec-1968', 'socrealizm'],
  },
  {
    id: 'internowanie',
    title: 'Internowanie w stanie wojennym',
    category: 'represje',
    shortDesc: 'Nocna akcja 13 grudnia 1981 – aresztowanie 10 tysięcy działaczy Solidarności bez wyroku sądowego.',
    content: `## Internowanie w stanie wojennym

W nocy z 12 na 13 grudnia 1981 roku, w pierwszych godzinach stanu wojennego, Służba Bezpieczeństwa i Milicja Obywatelska przeprowadziły masowe aresztowania działaczy Solidarności, opozycjonistów i osób uznanych za zagrożenie dla reżimu. Była to największa fala represji politycznych w Polsce od czasów stalinizmu.

### Operacja „Jodła"

Akcja masowych zatrzymań nosiła kryptonim „Jodła". Listy internowanych były przygotowywane od miesięcy przez Departament III SB. W planach SB figurowały tysiące nazwisk: działacze Solidarności wszystkich szczebli, doradcy KOR, publicyści, naukowcy, prawnicy.

W pierwszej dobie zatrzymano ok. 5 000 osób. Do końca stanu wojennego (1983) przez obozy internowania przeszło ok. 10 000–13 000 osób. Internowanie nie wymagało wyroku sądowego – wystarczała decyzja administracyjna.

### Miejsca internowania

Internowanych osadzano w kilkudziesięciu ośrodkach na terenie całej Polski – w więzieniach, w obiektach wojskowych i MSW przystosowanych na obozy. Największe ośrodki: Białołęka (Warszawa), Hrubieszów, Kwidzyn, Darłówek, Jaworze, Głogów, Gołdap.

Warunki były zróżnicowane – od stosunkowo znośnych do ciężkich. W Kwidzynie internowani skarżyli się na celowe poniżanie, mróz, złe wyżywienie. Strajki głodowe były częste.

### Znani internowani

Wśród internowanych znaleźli się: Lech Wałęsa (odosobniony w willi rządowej w Arłamowie), Tadeusz Mazowiecki, Jacek Kuroń, Adam Michnik, Bronisław Geremek, Zbigniew Bujak (ukrywał się, internowany w 1986), Andrzej Gwiazda, Anna Walentynowicz.

Internowanie dotknęło wszystkich poziomów Solidarności – od przywódców ogólnopolskich do działaczy zakładowych.

### Obrona i protest

Kościół katolicki aktywnie angażował się w pomoc internowanym i ich rodzinom. Parafialne komitety pomocy zbierały pieniądze i żywność. Prymas Glemp interweniował dyplomatycznie.

Rodziny internowanych nie zawsze wiedziały, gdzie przetrzymywani są bliscy. Listy i wizyty były ograniczone. Władze celowo utrudniały komunikację.

### Koniec internowania

Większość internowanych zwolniono w falach: pierwsza – wiosną 1982, kolejne latem i jesienią. W grudniu 1982 formalnie zawieszono stan wojenny; ogłoszono amnestię. W lipcu 1983 roku stan wojenny oficjalnie zniesiono.

Niektórzy internowani, po zwolnieniu, natychmiast wznawiali działalność podziemną. Internowanie nie złamało Solidarności – wzmocniło determinację.

### Sprawa karna po 1989

Po 1989 roku postępowania karne wobec sprawców internowania toczyły się latami – z mizernym skutkiem. Prokuratorzy IPN prowadzili śledztwa, ale rzadko kończyły się wyrokami. Większość sprawców – zarówno decydentów, jak i funkcjonariuszy wykonawczych – uniknęła odpowiedzialności karnej.`,
    resources: [
      {
        id: 'intern-ipn',
        title: 'Dokumenty internowania – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=internowanie+stan+wojenny+obóz',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące operacji internowania i list internowanych w stanie wojennym',
      },
      {
        id: 'intern-ph',
        title: 'Internowani w stanie wojennym',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=internowanie+stan+wojenny+internowani',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne i relacje świadków dotyczące internowania w stanie wojennym',
      },
      {
        id: 'intern-ninateka',
        title: 'Dokumenty stanu wojennego – nagrania',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=stan+wojenny+internowani+represje+1981',
        source: 'Ninateka',
        description: 'Archiwalne nagrania i dokumenty filmowe dotyczące stanu wojennego i internowania',
      },
    ],
    relatedIds: ['stan-wojenny', 'solidarnosc', 'walesa', 'kuron', 'michnik'],
  },
  {
    id: 'ziemie-odzyskane',
    title: 'Ziemie Odzyskane',
    category: 'polityka',
    shortDesc: 'Powojenne przesiedlenia i polska kolonizacja dawnych terenów niemieckich na zachodzie i północy Polski.',
    content: `## Ziemie Odzyskane

„Ziemie Odzyskane" – tak komunistyczna propaganda nazywała dawne tereny wschodnioniemieckie włączone do Polski po II wojnie światowej: Śląsk, Pomorze Zachodnie, Warmię, Mazury i ziemię lubuską. Nazwa miała sugerować powrót do słowiańskich korzeni – choć przez wieki były to kraje w znacznej mierze zamieszkałe przez Niemców.

### Decyzja w Poczdamie

Na konferencji poczdamskiej (1945) wielkie mocarstwa zadecydowały o nowym kształcie Europy. Polska straciła Kresy Wschodnie (Lwów, Wilno, Grodno) na rzecz ZSRR i dostała w zamian rozległe tereny na zachodzie i północy, po Odrę i Nysę.

Dla Stalina było to rozwiązanie pragmatyczne: Polska przesunięta na zachód była silniej zależna od sowieckiej gwarancji bezpieczeństwa wobec potencjalnych roszczeń niemieckich.

### Niemcy – wypędzenia

Tereny te zamieszkiwało ok. 12 milionów Niemców – cywilów, których los stał się jedną z największych tragedii II wojny światowej z perspektywy europejskiej. Część uciekła przed Armią Czerwoną jeszcze w trakcie działań wojennych. Resztę systematycznie wysiedlano w 1945–1948 roku.

Wypędzenia przeprowadzano z różnym stopniem brutalności. Niemców wyrzucano z domów, często z minimalnym dobytkiem. Wiele osób zginęło z zimna, głodu i przemocy. Szacuje się, że całkowita liczba ofiar wyniosła kilkaset tysięcy.

### Polscy osadnicy

Na opuszczone tereny napłynęli polscy osadnicy – w dużej mierze przymusowo repatriowani z Kresów (Lwów, Wilno), a także ochotnicy z Mazowsza, Galicji i innych regionów. Repatrianci z Kresów musieli opuścić swoje rodzinne miasta i przenieść się na obce sobie ziemie.

Proces zasiedlania był trudny. „Ziemie Odzyskane" były zniszczone wojną lub opuszczone. Infrastruktura wymagała odbudowy. Nowi mieszkańcy często trafiali do domów ze śladami poprzednich właścicieli: meblami, fotografiami, dokumentami.

### Tożsamość i pamięć

Przez dziesięciolecia PRL budował narrację „odwiecznej polskości" tych ziem – wskazując na słowiańskie nazwy geograficzne, piastowskie korzenie, pruskie ślady slawizacji. Oficjalnie nie było miejsca na pamięć o Niemcach, którzy tu żyli.

Prawdziwa historia tych ziem – wielokulturowa, złożona, pełna traumy – zaczęła wychodzić na jaw dopiero po 1989 roku. Dziś badacze zajmują się historią Breslau/Wrocławia, Stettin/Szczecina, Königsberg/Królewca z uwzględnieniem wszystkich warstw.

### Znaczenie geopolityczne

Zachodnia granica na Odrze i Nysie była przez dekady kontestowana przez RFN. Ostateczne uznanie jej nastąpiło dopiero w 1990 roku – Traktatem 2+4 między dwoma Niemcami a czterema mocarstwami, a następnie polsko-niemieckim traktatem granicznym.`,
    resources: [
      {
        id: 'ziemie-polona',
        title: 'Ziemie Odzyskane – prasa i dokumenty (Polona)',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Ziemie+Odzyskane+osadnicy+repatrianci',
        source: 'Polona',
        description: 'Zdigitalizowane dokumenty i prasa dotyczące zasiedlania Ziem Odzyskanych',
      },
      {
        id: 'ziemie-ipn',
        title: 'Wypędzenia i przesiedlenia – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=przesiedlenia+Niemcy+Ziemie+Odzyskane',
        source: 'IPN Inwentarz',
        description: 'Materiały archiwalne dotyczące wysiedleń Niemców i zasiedlania Ziem Zachodnich',
      },
      {
        id: 'ziemie-szukaj',
        title: 'Archiwalia dotyczące Ziem Zachodnich',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=Ziemie+Zachodnie+i+P%C3%B3%C5%82nocne',
        source: 'Szukaj w Archiwach',
        description: 'Archiwalia dotyczące administracji i zasiedlania Ziem Zachodnich po 1945 roku',
      },
    ],
    relatedIds: ['jalta', 'deportacje', 'akcja-wisla', 'manifest-pkwn', 'bierut'],
  },
  {
    id: 'obozy-pracy',
    title: 'Obozy pracy i więzienia polityczne',
    category: 'represje',
    shortDesc: 'Sieć obozów pracy i więzień politycznych w Polsce lat 1944–1956 – sowiecka metoda eliminacji opozycji.',
    content: `## Obozy pracy i więzienia polityczne (1944–1956)

W pierwszym dziesięcioleciu PRL (1944–1956) reżim komunistyczny stworzył rozległy system represji, obejmujący obozy pracy, więzienia polityczne i obozy filtracyjne. System ten pochłonął setki tysięcy ofiar – żołnierzy AK, działaczy PSL, duchownych, przedsiębiorców, intelektualistów i zwykłych obywateli podejrzanych o wrogość wobec władzy.

### Geneza systemu

System obozów przejęto bezpośrednio z radzieckiego modelu NKWD. Pierwsze obozy dla Niemców i Polaków oskarżonych o kolaborację z Niemcami lub o przynależność do AK i NSZ powstawały już w 1944 roku, jeszcze w trakcie walk.

Centralne Obozy Pracy (COP) funkcjonowały pod nadzorem Ministerstwa Bezpieczeństwa Publicznego. Więźniów zmuszano do pracy fizycznej w kopalniach, fabrykach, przy budowach.

### Największe obozy i więzienia

**Jaworzno** – największy obóz pracy w Polsce. W 1945–1949 roku przetrzymywano tam ok. 24 000 osób, w tym żołnierzy AK, Ukraińców deportowanych z Akcji Wisła, działaczy PSL, a nawet Niemców z Górnego Śląska. Warunki były nieludzkie: wyczerpująca praca w kopalni, głód, bicie.

**Więzienie mokotowskie (Rakowiecka)** w Warszawie – miejsce kaźni dla skazanych na śmierć. Tu wykonano wyroki m.in. na Witoldzie Pileckim, Emilu Fieldorfie „Nilu" i setkach innych żołnierzy AK.

**Więzienie we Wronkach** i **w Rawiczu** – dla długoterminowych więźniów politycznych.

**Rembertów, Potulice, Łambinowice** – obozy filtracyjne dla Niemców i Polaków podejrzanych.

### Metody śledcze UB

Urząd Bezpieczeństwa (UB) stosował radzieckie metody śledcze: psychologiczny i fizyczny terror, pozbawienie snu, głodzenie, bicie, symulowanie egzekucji. Celem było wymuszenie przyznania się do winy i zeznań obciążających innych.

Procesy polityczne były z góry ustawione – wyrok zapadał przed rozprawą. Obrońcy z urzędu byli marionetkami systemu.

### Ofiary

Szacuje się, że w polskich więzieniach i obozach lat 1944–1956 zginęło ok. 5 000–8 000 osób (wyroki śmierci), natomiast przez obozy pracy przeszło kilkadziesiąt tysięcy. Tysiące więcej zginęło w wyniku warunków lub egzekucji w terenie.

Ofiarami systemu byli też żołnierze wyklęci – wśród nich Zygmunt Szendzielarz „Łupaszka", Józef Kuraś „Ogień", Hieronim Dekutowski „Zapora".

### Odwilż i rehabilitacje

Po 1956 roku, w wyniku odwilży październikowej, część więźniów politycznych zwolniono i zrehabilitowano. Ale prawdziwe rozliczenie ze zbrodniami stalinizmu nastąpiło dopiero po 1989 roku i jest procesem, który do dziś nie jest zakończony.`,
    resources: [
      {
        id: 'obozy-ipn',
        title: 'Obozy pracy i więzienia polityczne – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=obozy+pracy+wi%C4%99zienia+polityczne+UB',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące sieci obozów pracy i więzień politycznych w zasobach IPN',
      },
      {
        id: 'obozy-ph',
        title: 'Obozy pracy i represje stalinizmu w Polsce',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=obozy+pracy+wi%C4%99zienia+polityczne+UB+stalinizm',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o systemie obozów i więzień politycznych w Polsce 1944–1956',
      },
      {
        id: 'obozy-szukaj',
        title: 'Akta obozów pracy w archiwach',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=obozy+pracy+Jaworznie+wi%C4%99%C5%BAniowie',
        source: 'Szukaj w Archiwach',
        description: 'Archiwalia dotyczące Centralnych Obozów Pracy i więzień politycznych PRL',
      },
    ],
    relatedIds: ['zbrodnie-stalinizmu', 'ub', 'represje-polityczne', 'zolnierze-wykletci', 'pilecki'],
  },
  {
    id: 'mikolajczyk',
    title: 'Stanisław Mikołajczyk i PSL',
    category: 'polityka',
    shortDesc: 'Premier rządu londyńskiego, lider PSL – ostatni demokratyczny opór przed komunizacją Polski.',
    content: `## Stanisław Mikołajczyk i PSL (1944–1947)

Stanisław Mikołajczyk (1901–1966) był liderem Polskiego Stronnictwa Ludowego i ostatnim poważnym politykiem, który próbował ocalić demokratyczny charakter powojennej Polski. Jego klęska była symbolem triumfu komunizmu nad demokracją.

### Premier rządu na uchodźstwie

Mikołajczyk piastował urząd Premiera Rządu Polskiego na Uchodźstwie (1943–1944). Uczestniczył w konferencji teherańskiej, gdzie Roosevelt i Churchill zaczęli ustępować Stalinowi. Próbował bezskutecznie bronić polskich interesów – polskiego Lwowa i Wilna.

W 1944 roku przybył do Moskwy, by negocjować z komunistycznym PKWN. Stalin wywarł presję; konferencja teherańska przesądziła o granicach. Mikołajczyk podał się do dymisji ze stanowiska premiera w Londynie w proteście.

### Powrót do kraju

W 1945 roku Mikołajczyk zdecydował się wrócić do Polski – wbrew radom wielu emigrantów. Liczył, że w nowym, pozornie koalicyjnym rządzie Tymczasowym uda się mu zachować polityczną niezależność PSL i doprowadzić do wolnych wyborów.

Objął stanowisko wicepremiera. Odbudował PSL jako masową partię – w szczytowym momencie liczyła ponad 600 000 członków, głównie chłopów.

### Sfałszowane referendum i wybory

W 1946 roku Mikołajczyk wezwał do głosowania „nie" w referendum 3xTAK – protesty oznaczały sprzeciw wobec komunistycznej konstytucji. Wyniki sfałszowano: PSL-owski sprzeciw przemieniono w wynik prorządowy.

Sfałszowane wybory w 1947 roku przypieczętowały koniec: PSL ogłoszono winnym spiskowania z zagranicą, działaczy aresztowano. Mikołajczyk uciekł z Polski w październiku 1947 roku, prawdopodobnie tuż przed aresztem.

### Represje wobec PSL

Tysiące działaczy PSL zostało aresztowanych, skazanych na wieloletnie więzienie, a część zamordowana. Szacuje się, że ok. 100–200 działaczy PSL zapłaciło życiem za opór wobec komunizacji.

Bestie systemu – UB i milicja – niszczyły PSL metodycznie: aresztowania, wymuszanie wyrzeczeń, fizyczne likwidacje. Komitet Centralny PSL w wielu powiatach był dosłownie rozbijany przez areszty.

### Emigracja i zapomnienie

Na emigracji Mikołajczyk kontynuował działalność polityczną. Wydał wspomnienia „The Rape of Poland" (1948) – świadectwo fałszowania demokracji przez komunistów. Książka była ważnym dokumentem dla Zachodu.

W PRL Mikołajczyk był postacią przemilczaną lub demonizowaną. Oficjalna historia PSL z nim nie istniała. Dopiero po 1989 roku odzyskał należne mu miejsce w historii – jako polityk, który do końca walczył o demokratyczną Polskę.`,
    resources: [
      {
        id: 'mikolajczyk-ipn',
        title: 'Mikołajczyk i PSL – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Miko%C5%82ajczyk+PSL+wybory+1947',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące Mikołajczyka, PSL i sfałszowanych wyborów 1947 roku',
      },
      {
        id: 'mikolajczyk-ph',
        title: 'Mikołajczyk i walka PSL o demokrację',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Miko%C5%82ajczyk+PSL+referendum+wybory+1947',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o Mikołajczyku i roli PSL w walce o demokratyczną Polskę',
      },
      {
        id: 'mikolajczyk-polona',
        title: 'Prasa i dokumenty PSL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=PSL+Miko%C5%82ajczyk+Stronnictwo+Ludowe',
        source: 'Polona',
        description: 'Zdigitalizowane dokumenty i prasa Polskiego Stronnictwa Ludowego',
      },
    ],
    relatedIds: ['wybory-prl', 'referendum-1946', 'manifest-pkwn', 'bierut', 'ub'],
  },
  {
    id: 'kapuscinski',
    title: 'Ryszard Kapuściński',
    category: 'osoby',
    shortDesc: 'Dziennikarz i pisarz – reporter świata, autor „Cesarza" i „Szachinszacha", jeden z najwybitniejszych reportażystów XX wieku.',
    content: `## Ryszard Kapuściński (1932–2007)

Ryszard Kapuściński był jednym z największych reporterów XX wieku – dziennikarzem, pisarzem i poetą, który stworzył własny gatunek literacki: reporter literatury faktu. Jego książki o upadku imperiów, dyktatorach i rewolucjach są czytane na całym świecie i przetłumaczone na kilkadziesiąt języków.

### Dziennikarz PAP

Kapuściński pracował dla Polskiej Agencji Prasowej jako korespondent zagraniczny – był jednym z nielicznych polskich dziennikarzy, którzy mogli regularnie wyjeżdżać za granicę. Odwiedził ponad sto krajów, był świadkiem kilkudziesięciu rewolucji i przewrotów.

Jego relacje z Afryki, Azji i Ameryki Łacińskiej były czymś więcej niż informacją prasową – były literaturą. PRL wysyłała go jako korespondenta, nie zdając sobie sprawy, że tworzy arcydzieła literackie.

### Cesarz

„Cesarz" (1978) to opowieść o upadku cesarza Etiopii Hajle Syllasje – ale każdy czytelnik w Polsce rozumiał, że to alegoria każdej dyktatury, w tym polskiej. Kapuściński opisał mechanizm dworu: pochlebstwo, strach, hierarchia i bezmyślna lojalność wobec władzy. Książka była bestsellerem i hitem drugiego obiegu.

### Szachinszach, Heban, Imperium

„Szachinszach" (1982) o rewolucji irańskiej, „Heban" (1998) o Afryce, „Imperium" (1993) o rozpadzie ZSRR – każda z tych książek jest arcydziełem gatunku reportażu literackiego.

„Imperium" Kapuściński pisał ze szczególnym bólem – znał z własnego doświadczenia, czym był sowiecki system. Podróżował po rozpadającym się ZSRR i opisał tragizm ludzi wyzwolonych od tyranii, ale zagubionych w nowej rzeczywistości.

### Kontrowersje

Po śmierci Kapuścińskiego pojawiły się głosy podważające jego wiarygodność factual – niektórzy badacze twierdzą, że mieszał fakty z fikcją w swoich reportażach. Dyskusja o granicy literatury faktu i literackiej kreacji jest ciągła.

Osobnym wątkiem były jego powiązania ze służbami – dokumenty IPN wskazują, że miał kontakty z wywiadem PRL, choć skala i charakter tej współpracy są dyskutowane.

### Spuścizna

Kapuściński był wielokrotnie wymieniany jako kandydat do Nagrody Nobla. Stworzył nowy model dziennikarstwa – empatycznego, literackiego, zaangażowanego. Jego szkoła reportażu wychowała pokolenia polskich reporterów.`,
    resources: [
      {
        id: 'kapuscinski-wl',
        title: 'Ryszard Kapuściński – Wolne Lektury',
        type: 'publikacja',
        url: 'https://wolnelektury.pl/katalog/autor/kapuscinski-ryszard/',
        source: 'Wolne Lektury',
        description: 'Wybrane teksty Ryszarda Kapuścińskiego dostępne online',
      },
      {
        id: 'kapuscinski-polona',
        title: 'Kapuściński – archiwalia (Polona)',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Kapu%C5%9Bci%C5%84ski+Ryszard+reporter',
        source: 'Polona',
        description: 'Zdigitalizowane materiały o Kapuścińskim i jego twórczości',
      },
      {
        id: 'kapuscinski-ipn',
        title: 'Kapuściński a wywiad PRL – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Kapu%C5%9Bci%C5%84ski+Ryszard+wywiad',
        source: 'IPN Inwentarz',
        description: 'Materiały dotyczące kontaktów Kapuścińskiego ze służbami PRL',
      },
    ],
    relatedIds: ['literatura-prl', 'prasa-prl', 'wywiad-prl', 'kultura-prl', 'milosz'],
  },
  {
    id: 'pomniki-prl',
    title: 'Pomniki i symbolika PRL',
    category: 'kultura',
    shortDesc: 'Pomniki bohaterów radzieckich, monumenty partyjne i socrealistyczna architektura jako narzędzie ideologii.',
    content: `## Pomniki i symbolika PRL

Przestrzeń publiczna w Polsce Ludowej była celowo kształtowana przez ideologię – pomniki, nazwy ulic, architektura i symbolika miały tworzyć wizualną narrację triumfu socjalizmu. To, co widziało się codziennie, miało wzmacniać lojalność wobec systemu.

### Pomniki radzieckie

Jednym z pierwszych symboli nowej władzy były pomniki żołnierzy Armii Czerwonej. Wznoszono je w dziesiątkach polskich miast – na placów i skwerach, jako „wdzięczność" za wyzwolenie. Oficjalnie: wyzwoliciele. W rzeczywistości: nieproszeni goście, którzy zostali na dziesięciolecia.

Słynny Pomnik Braterstwa Broni w Warszawie (przy Pradze), tzw. „Cztery Śpiące" – czterech radzieckich żołnierzy – był symbolem sowieckiej obecności. Zdemontowano go w 1992 roku. Losy pomników radzieckich po 1989 roku stały się tematem politycznych sporów.

### Pomniki socjalistycznych bohaterów

System kreował własnych bohaterów. Pomniki Bolesława Bieruta, Juliana Marchlewskiego, Karola Świerczewskiego (generała „Waltera") – to postaci, które komunistyczna władza wybrała na patronów ulic, szkół i placów.

Największy projekt monumentalny: Pałac Kultury i Nauki w Warszawie – „dar Stalina" – był sam w sobie pomnikiem, na który nie można było patrzeć bez politycznego komentarza. Do dziś stoi i polaryzuje Polaków.

### Nazwy ulic i zmiana po 1989 roku

Każda polska miejscowość miała swoje ulice Lenina, Marchlewskiego, Różę Luksemburg, 22 Lipca (data ogłoszenia PKWN). Po 1989 roku dekomunizacja nazw ulic stała się gorącą kwestią polityczną. Proces jest do dziś niekompletny.

Ustawa dekomunizacyjna z 2016 roku nakazała usunięcie nazw propagujących komunizm – ale jej stosowanie było nierówne i budziło kontrowersje (część zmian dotyczyła osób o niejednoznacznej historii).

### Socrealistyczna architektura

Lata 1949–1956 przyniosły falę socrealistycznej architektury: monumentalne, masywne gmachy z greckimi kolumnami i komunistycznymi dekoracjami. MDM (Marszałkowska Dzielnica Mieszkaniowa) w Warszawie, domy przy pl. Konstytucji – to przykłady tego stylu w Polsce.

Socrealizm był oficjalnym stylem artystycznym – narzuconym przez partię, opartym na radzieckim wzorcu. Po odwilży 1956 roku odrzucono go równie gwałtownie, jak wprowadzono.

### Znaczenie symboliczne

Pomniki i symbolika PRL były próbą przejęcia przestrzeni publicznej dla ideologii. Polakom trudno było ignorować tę symbolikę – musieli codziennie przechodzić obok pomników „wyzwolicieli" i mieszkać przy ulicy Lenina.

Walka o przestrzeń symboliczną – kto jest patronem ulic i placów – trwa w Polsce do dziś i odzwierciedla głębszy spór o interpretację historii XX wieku.`,
    resources: [
      {
        id: 'pomniki-polona',
        title: 'Socrealistyczna architektura – dokumenty (Polona)',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=socrealizm+architektura+pomniki+PRL',
        source: 'Polona',
        description: 'Fotografie i dokumenty dotyczące socrealistycznej architektury i pomników w PRL',
      },
      {
        id: 'pomniki-ph',
        title: 'Symbolika i propaganda przestrzeni w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=pomniki+symbolika+socrealizm+przestrze%C5%84+PRL',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o symbolice ideologicznej i zmianach nazw po 1989 roku',
      },
      {
        id: 'pomniki-ninateka',
        title: 'Architektura i pomniki w kronikach PRL',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=pomniki+architektura+socrealizm+PRL',
        source: 'Ninateka',
        description: 'Kroniki filmowe dokumentujące socrealistyczne budowle i pomniki w Polsce',
      },
    ],
    relatedIds: ['socrealizm', 'palac-kultury', 'propaganda-prl', 'odbudowa-warszawy', 'bierut'],
  },
  {
    id: 'turystyka-prl',
    title: 'Turystyka i wczasy w PRL',
    category: 'społeczeństwo',
    shortDesc: 'Wczasy FWP, obozy harcerskie i marzenia o morzu – turystyka jako przywilej i element polityki społecznej.',
    content: `## Turystyka i wczasy w PRL

Wyjazd na wakacje w PRL był przeżyciem zbiorowym i rytuałem społecznym – od obozów harcerskich i kolonii po wczasy Funduszu Wczasów Pracowniczych nad Bałtykiem. Turystyka zagraniczna była dostępna dla nielicznych uprzywilejowanych.

### Fundusz Wczasów Pracowniczych

Centralną instytucją turystyki pracowniczej był Fundusz Wczasów Pracowniczych (FWP) – organizacja zapewniająca wczasy subsydiowane dla pracowników zakładów pracy. Wczasy FWP były dostępne przez zakład pracy: przydzielano je według systemu punktowego (staż, zasługi partyjne, zdrowie, sytuacja rodzinna).

Ośrodki FWP rozsiane były po całej Polsce: nad Bałtykiem (Kołobrzeg, Sopot, Łeba), w górach (Zakopane, Karpacz), nad jeziorami (Mazury). Popularnym wyborem był Bałtyk – „polskie morze" jako symbol dostępnej egzotyki.

### Kempingi i biwaki

Obok wczasów FWP popularne były kempingi, biwaki i obozy. Polacy masowo wyjeżdżali pod namiot lub z przyczepą kempingową – własna „Nysa" lub Fiat 126p ciągnący przyczepę był marzeniem o wolności na kółkach.

Schroniska turystyczne PTTK (Polskie Towarzystwo Turystyczno-Krajoznawcze) były siecią baz dla turystów pieszych. Górskie wycieczki do Tatr, Karkonoszy, Bieszczad przyciągały tłumy. Bieszczady – odległe i dzikie – stały się symbolem ucieczki od codzienności.

### Wyjazdy za granicę – przywilej

Wyjazd za żelazną kurtynę był w zasadzie niemożliwy bez specjalnej zgody. Paszport „prywatny" wymagał zgody pracodawcy i rekomendacji partyjnej. Władze pilnowały, by „podróżne" – suma wypłacana na wyjazd – były minimalne.

Legalne wyjazdy zagraniczne: do krajów bratnich (NRD, Czechosłowacja, Bułgaria, Jugosławia – ta ostatnia była swobodniejsza). Jugosławia cieszyła się szczególną popularnością – ciepłe morze, lepsza żywność, swobodniejsza atmosfera.

W latach 70. za Gierka częściowo poluzowano ograniczenia wyjazdowe. Więcej Polaków mogło wyjeżdżać do Zachodu. Ci, którzy wyjechali i nie wrócili – emigracja „za chlebem" – zasilali polskie diaspory na Zachodzie.

### Turystyka krajowa i krajoznawstwo

PTTK, Orbis i inne organizacje promowały turystykę krajową. Odznaki turystyczne (GOT – Górska Odznaka Turystyczna), mapy szlaków, przewodniki. Polska krajoznawcza pasja – zbieranie pieczęci, zdobywanie szczytów, nocowanie w schroniskach – kwitła w PRL.

Turystyka krajoznawcza była też formą patriotycznego wychowania: poznawaj swoją ojczyznę, doceniaj polskie krajobrazy i historię.

### Turystyka jako wolność

Wyjazd – choćby na krajowy kemping – dawał poczucie wolności od codziennej szarzyzny PRL. W namiocie albo w schronisku można było rozmawiać swobodniej, śpiewać piosenki bez dozoru ideologicznego, być po prostu sobą.

Harcerskie obozy były dla wielu dzieci najważniejszą przestrzenią wolności i wspólnoty. Piosenki przy ognisku, przyroda, samodzielność – kontrast z codzienną ideologią szkolną.`,
    resources: [
      {
        id: 'turystyka-polona',
        title: 'Wczasy i turystyka PRL – prasa (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=wczasy+FWP+turystyka+PRL+Orbis',
        source: 'Polona',
        description: 'Archiwalne broszury, plakaty i artykuły prasowe o turystyce w PRL',
      },
      {
        id: 'turystyka-ninateka',
        title: 'Wczasy nad Bałtykiem – kroniki filmowe',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=wczasy+Ba%C5%82tyk+turystyka+FWP+PRL',
        source: 'Ninateka',
        description: 'Kroniki filmowe dokumentujące wczasy, obozy i turystykę w Polsce Ludowej',
      },
      {
        id: 'turystyka-ph',
        title: 'Turystyka i wypoczynek w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=turystyka+wczasy+FWP+wypoczynek+PRL',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o turystyce, wczasach i polityce wypoczynkowej w PRL',
      },
    ],
    relatedIds: ['dzieci-prl', 'kultura-prl', 'gierek', 'motoryzacja-prl', 'nostalgia-prl'],
  },
  {
    id: 'kobiety-prl',
    title: 'Kobiety w PRL',
    category: 'społeczeństwo',
    shortDesc: 'Równouprawnienie w teorii i podwójny etat w praktyce – sytuacja kobiet w Polsce Ludowej.',
    content: `## Kobiety w PRL

Polska Rzeczpospolita Ludowa oficjalnie głosiła równouprawnienie kobiet – i dokonała realnego postępu w zakresie dostępu do edukacji i pracy zawodowej. Jednocześnie kobiety dźwigały „drugi etat" domowy, a ich pozycja w polityce i gospodarce była w praktyce niższa niż mężczyzn.

### Emancypacja od góry

Komunizm promował włączenie kobiet do rynku pracy jako element budowy socjalizmu – nie z powodów feministycznych, lecz pragmatycznych: gospodarka potrzebowała siły roboczej. Kobiety masowo wchodziły do fabryk, biur, szkół i szpitali.

W 1952 roku Konstytucja PRL zapewniła kobietom równe prawa polityczne, ekonomiczne i społeczne. Ochrona macierzyństwa, urlopy macierzyńskie, żłobki i przedszkola finansowane przez państwo – to realne osiągnięcia, które ułatwiały łączenie pracy z wychowaniem dzieci.

### Wykształcenie i zawody

PRL masowo kształciła kobiety. Studia wyższe stały się dostępne dla córek robotniczych i chłopskich. Kobiety zdominowały zawody feminizowane: nauczycielki, lekarki (w ZSRR i krajach bloku feminizacja medycyny była znacząca), bibliotekarki, ekonomistki.

W branżach wcześniej zarezerwowanych dla mężczyzn – inżynieria, nauki ścisłe, budownictwo – kobiety również się pojawiły, choć dalej były mniejszością.

### Podwójny etat

Mimo formalnego równouprawnienia kobiety w PRL dźwigały „podwójny etat" – pracę zawodową i całość prac domowych. Mężczyźni rzadko uczestniczyli w gotowaniu, sprzątaniu i wychowaniu dzieci.

Sklepy zamknięte poza godzinami pracy, kolejki, gotowanie bez gotowych produktów – to kobiety stały w kolejkach po mięso, gotowały obiady z dostępnych surowców, zarządzały domowym budżetem. Praca domowa była niewidzialna i nieopłacana.

### Kobiety w polityce

Na wysokich stanowiskach partyjnych i państwowych kobiet było niewiele. Politburo, KC PZPR, rząd – wszystkie zdominowane przez mężczyzn. Kilka wyjątków: Eugenia Krassowska (minister oświaty), Władysława Macieszyna. Parytety formalne były fikcją.

Kobiety były za to widoczne w lokalnych organach władzy, radach narodowych – jako „ozdoba" systemu, dowód na równouprawnienie, bez realnej decyzyjności.

### Macierzyństwo i aborcja

W 1956 roku zalegalizowano aborcję w Polsce – była dostępna na życzenie do 12. tygodnia ciąży. Decyzja wynikała z pragmatyzmu zdrowotnego (nielegalne zabiegi zabijały kobiety). W latach 70. wykonywano ok. 100 000 – 150 000 legalnych aborcji rocznie.

Kościół konsekwentnie sprzeciwiał się tej regulacji. Po 1989 roku, w wyniku kompromisu, aborcję w Polsce zaostrzono.

### Solidarność i kobiety

W Solidarności kobiety odgrywały kluczową rolę – Anna Walentynowicz, Alina Pienkowska, Joanna i Henryk Duda-Gracz. Ale w kierownictwie Solidarności przeważali mężczyźni. Walentynowicz, choć formalnie była iskrą strajku, nie zasiadała w prezydium MKS.

Internowanie w stanie wojennym dotknęło też kobiety – działaczki Solidarności, doradczynie, publicystki.`,
    resources: [
      {
        id: 'kobiety-polona',
        title: 'Prasa kobieca PRL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Kobieta+%C5%BCycie+pismo+PRL+emancypacja',
        source: 'Polona',
        description: 'Zdigitalizowane numery pism kobiecych PRL – „Kobieta i Życie", „Przyjaciółka"',
      },
      {
        id: 'kobiety-ph',
        title: 'Kobiety w PRL – praca i codzienność',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=kobiety+PRL+emancypacja+praca+macierzy%C5%84stwo',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o sytuacji kobiet w Polsce Ludowej',
      },
      {
        id: 'kobiety-ninateka',
        title: 'Kobiety PRL – kroniki i reportaże',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=kobiety+praca+macierzy%C5%84stwo+r%C3%B3wnouprawnienie+PRL',
        source: 'Ninateka',
        description: 'Kroniki filmowe i reportaże o sytuacji kobiet w Polsce Ludowej',
      },
    ],
    relatedIds: ['dzieci-prl', 'prasa-prl', 'solidarnosc', 'edukacja-prl', 'sluzba-zdrowia-prl'],
  },
  {
    id: 'walczynski-opor',
    title: 'Strajki i opór robotniczy przed 1980',
    category: 'opozycja',
    shortDesc: 'Fale strajków 1956, 1970, 1976 – robotniczy sprzeciw, który torował drogę Solidarności.',
    content: `## Strajki i opór robotniczy przed 1980

Długa droga do Solidarności wiodła przez trzy wielkie fale robotniczego protestu: 1956 (Poznań), 1970 (Wybrzeże) i 1976 (Radom i Ursus). Każda z tych eksplozji kończyła się krwawo lub represjami – ale każda też zmieniała kraj i kumulowała gotowość do walki.

### Poznański Czerwiec 1956

Pierwsza wielka fala – Poznański Czerwiec 1956. Robotnicy zakładów Cegielskiego wyszli na ulicę z żądaniami ekonomicznymi: obniżki norm, wyższe płace, poprawa warunków pracy. Demonstracja zamieniła się w rozlew krwi – wojsko otworzyło ogień. Zginęło co najmniej 57 osób.

Władza najpierw mówiła o prowokacji imperialistycznej, potem – po Październiku – przyznała, że robotnicy mieli rację. Ale sprawców śmierci nie ukarano.

### Grudzień 1970

Grudzień 1970 – kolejna odsłona. Podwyżka cen żywności przed Bożym Narodzeniem wywołała strajki na Wybrzeżu: w Gdańsku, Szczecinie, Gdyni. Wojsko i milicja strzelały do robotników. Zginęło co najmniej 45 osób, setki zostały ranione.

Gierek zastąpił Gomułkę, obiecał dialog. Ale sprawcy strzelaniny nie stanęli przed sądem. Pamięć Grudnia 1970 była cementem, który łączył gdańskich stoczniowców – gdy dziesięć lat później zaczęli strajk, wiedzieli, na co się narażają.

### Czerwiec 1976

Czerwiec 1976 – Radom i Ursus. Podwyżka cen żywności w środku nocy – Gierek ogłosił ją telewizyjnie, a rankiem wycofał po wybuchu strajków. Robotnicy z Ursusa rozkręcili tory kolejowe. W Radomiu spłonął gmach KW PZPR.

Władza odpowiedziała represjami: „ścieżki zdrowia" – bicie aresztowanych przez szpaler milicjantów. Tysiące robotników straciło pracę. To te represje skłoniły intelektualistów do założenia KOR.

### Robotnik jako podmiot historii

Co łączy te trzy fale? Robotnicy działali spontanicznie – bez organizacji, bez przywódcy, bez programu. Reagowali na konkretne bolączki: ceny, normy, płace. I za każdym razem spotykali się z siłą.

Sierpień 1980 był inny: strajk był zorganizowany, miał przywódców, miał program (21 postulatów), miał wsparcie intelektualistów z KOR. Lekcje poprzednich tragedii zostały odrobione.

### Pamięć i pojednanie

Po 1989 roku powołano komisje śledcze ws. Poznania 1956 i Grudnia 1970. Sprawcy zostali częściowo ustaleni – ale wyroki były minimalne lub ich nie było. Mury i tablice upamiętniają ofiary. Ale pełna sprawiedliwość historyczna pozostała nieosiągalna.`,
    resources: [
      {
        id: 'opor-ipn',
        title: 'Dokumenty strajków i represji robotniczych – IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=strajki+robotnicze+Pozna%C5%84+1956+Grudzie%C5%84+1970',
        source: 'IPN Inwentarz',
        description: 'Materiały archiwalne dotyczące strajków 1956, 1970 i 1976 roku w Polsce',
      },
      {
        id: 'opor-ph',
        title: 'Robotniczy opór w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=strajki+robotnicze+Pozna%C5%84+Grudzie%C5%84+Radom+opozycja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o robotniczym oporze i jego znaczeniu dla Solidarności',
      },
      {
        id: 'opor-ninateka',
        title: 'Kroniki i dokumenty – strajki robotnicze',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=strajki+robotnicy+Grudzie%C5%84+Radom+1970+1976',
        source: 'Ninateka',
        description: 'Archiwalne materiały filmowe dotyczące strajków robotniczych przed 1980 rokiem',
      },
    ],
    relatedIds: ['czerwiec-1956', 'grudzien-1970', 'czerwiec-1976', 'kor', 'sierpien-1980'],
  },
  {
    id: 'geremek',
    title: 'Bronisław Geremek',
    category: 'osoby',
    shortDesc: 'Mediewista, doradca Solidarności, minister spraw zagranicznych – jeden z architektów polskiej transformacji.',
    content: `## Bronisław Geremek (1932–2008)

Bronisław Geremek był wybitnym historykiem mediewistą i jednym z najważniejszych doradców Solidarności – intelektualistą, który swoją wiedzę o historii i dyplomacji poświęcił sprawie demokratycznej transformacji Polski.

### Historyk i intelektualista

Geremek urodził się w Warszawie w żydowskiej rodzinie. Przeżył wojnę ukryty po aryjskiej stronie. Studiował historię na Uniwersytecie Warszawskim, doktoryzował się w Paryżu. Był wybitnym badaczem historii średniowiecza – jego prace o marginesie społecznym i ubóstwie w Europie średniowiecznej (m.in. „Litość i szubienica") były tłumaczone na wiele języków.

W latach 60. i 70. był profesorem PAN – znany w środowisku akademickim jako człowiek niezależnych poglądów.

### Solidarność i Okrągły Stół

W sierpniu 1980 roku Geremek pojawił się w gdańskiej Stoczni jako doradca strajkujących robotników – obok Tadeusza Mazowieckiego, Andrzeja Wielowieyskiego i innych intelektualistów z Komisji Ekspertów. Jego rola była kluczowa: pomagał formułować 21 postulatów i negocjować porozumienie gdańskie.

W stanie wojennym był internowany. Po zwolnieniu kontynuował działalność podziemną. W 1989 roku zasiadł przy Okrągłym Stole jako jeden z najważniejszych negocjatorów strony solidarnościowej.

### Droga do NATO i UE

Po 1989 roku Geremek zaangażował się aktywnie w budowanie nowej Polski. Był posłem, szefem parlamentarnego Klubu Unii Demokratycznej. W latach 1997–2000 piastował urząd Ministra Spraw Zagranicznych w rządzie Jerzego Buzka – i to jego wysiłki dyplomatyczne w znacznym stopniu przyczyniły się do wejścia Polski do NATO (1999).

Był wielkim zwolennikiem integracji europejskiej. Po 1999 roku działał w Parlamencie Europejskim.

### Tragedia

Bronisław Geremek zginął 13 lipca 2008 roku w wypadku samochodowym pod Lubinem. Śmierć nastąpiła nagle, w środku aktywnego życia politycznego i intelektualnego. Polska straciła jednego z najwybitniejszych Europejczyków swojego pokolenia.

### Spuścizna

Geremek łączył w sobie rzadką kombinację: wybitny uczony i skuteczny polityk. Jego zaangażowanie w historię marginesu społecznego współgrało z jego praktyką polityczną – zawsze po stronie słabszych, zawsze z imperatywem etycznym.`,
    resources: [
      {
        id: 'geremek-ipn',
        title: 'Bronisław Geremek – dokumenty SB i Solidarności',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Geremek+Bronis%C5%82aw',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące inwigilacji i działalności Bronisława Geremka',
      },
      {
        id: 'geremek-ph',
        title: 'Geremek – historyk i polityk transformacji',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Geremek+Bronis%C5%82aw+Solidarno%C5%9B%C4%87+doradca',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o roli Bronisława Geremka w Solidarności i transformacji',
      },
      {
        id: 'geremek-ecs',
        title: 'Geremek i Okrągły Stół – ECS',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Archiwum negocjacji sierpniowych i roli doradców Solidarności',
      },
    ],
    relatedIds: ['solidarnosc', 'okragly-stol', 'sierpien-1980', 'mazowiecki', 'michnik'],
  },
  {
    id: 'ppkwn',
    title: 'Polska Partia Robotnicza (PPR)',
    category: 'polityka',
    shortDesc: 'Komunistyczna partia zbudowana przez Moskwę, która przejęła władzę w Polsce i wchłonęła PPS tworząc PZPR.',
    content: `## Polska Partia Robotnicza (PPR)

Polska Partia Robotnicza (PPR) była komunistyczną partią polityczną powołaną w 1942 roku przez agentów Kominternu. To ona przejęła władzę w Polsce po 1944 roku i zbudowała komunistyczny system, zakończywszy istnienie w 1948 roku przez fuzję z PPS – tworząc PZPR.

### Założenie i charakter

PPR powstała 5 stycznia 1942 roku z inicjatywy Kominternu, jako odrodzenie rozwiązanej w 1938 roku Komunistycznej Partii Polski (KPP). Jej trzon stanowili agenci radzieccy desantowani do kraju – Marceli Nowotko (pierwszy sekretarz, zamordowany w 1942 w niewyjaśnionych okolicznościach), Paweł Finder, Bolesław Bierut.

PPR była organizacją konspiracyjną w czasie okupacji. Wydawała gazetę „Trybuna Wolności", prowadziła sabotaż i propagandę. Jej Gwardia Ludowa (potem Armia Ludowa) walczyła z okupantem – ale w konflikcie z AK częściej zajmowała wrogie stanowisko.

### Przejęcie władzy

W 1944 roku, gdy Armia Czerwona wkroczyła na ziemie polskie, PPR stanęła na czele PKWN (Polskiego Komitetu Wyzwolenia Narodowego). Opierając się na sowieckiej sile militarnej, systematycznie przejmowała kluczowe resorty: bezpieczeństwo, wojsko, gospodarkę.

Władysław Gomułka był Sekretarzem Generalnym PPR (1943–1948) i symbolem „polskiej drogi do socjalizmu" – próby relatywnie bardziej niezależnej od Moskwy polityki. Ale Stalin nie tolerował zbytniej niezależności.

### Eliminacja opozycji

W latach 1944–1947 PPR prowadziła systematyczne niszczenie opozycji: PSL Mikołajczyka, podziemia niepodległościowego, Kościoła. UB i sądy wojskowe wykonywały brudną robotę. Sfałszowane wybory 1947 roku usunęły ostatnią przeszkodę formalną.

### Zjednoczenie z PPS

W grudniu 1948 roku PPR połączyła się z Polską Partią Socjalistyczną (PPS) tworząc Polską Zjednoczoną Partię Robotniczą (PZPR). Fuzja była wymuszona – PPR wchłonęła PPS, usuwając niekomunistycznych działaczy socjalistycznych. Gomułka, oskarżony o „odchylenie prawicowo-nacjonalistyczne", został usunięty ze stanowiska i aresztowany.

Powstanie PZPR zamknęło etap „dyktatury koalicyjnej" i otworzyło etap jednolitego stalinizmu.`,
    resources: [
      {
        id: 'ppr-polona',
        title: 'PPR – dokumenty i prasa (Polona)',
        type: 'dokument',
        url: 'https://polona.pl/search/?query=Polska+Partia+Robotnicza+PPR+1944',
        source: 'Polona',
        description: 'Zdigitalizowane dokumenty, ulotki i prasa PPR z lat 1942–1948',
      },
      {
        id: 'ppr-ipn',
        title: 'PPR i przejęcie władzy – archiwum IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=PPR+Polska+Partia+Robotnicza+przej%C4%99cie+w%C5%82adzy',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące PPR, jej struktur i przejęcia władzy po 1944 roku',
      },
      {
        id: 'ppr-ph',
        title: 'PPR i narodziny systemu komunistycznego',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=PPR+Partia+Robotnicza+komunizm+1944',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o PPR i budowie komunistycznego systemu władzy w Polsce',
      },
    ],
    relatedIds: ['pzpr', 'bierut', 'gomulka', 'manifest-pkwn', 'pps'],
  },
  {
    id: 'pielgrzymki-jp2',
    title: 'Pielgrzymki Jana Pawła II do Polski',
    category: 'społeczeństwo',
    shortDesc: 'Trzy historyczne pielgrzymki – 1979, 1983, 1987 – które zmieniły Polskę i umocniły opór wobec komunizmu.',
    content: `## Pielgrzymki Jana Pawła II do Polski

Trzy pielgrzymki Jana Pawła II do Polski w latach 1979, 1983 i 1987 były wydarzeniami historycznymi, które zmieniły charakter polskiego oporu wobec komunizmu i przyspieszyły upadek systemu. Miliony Polaków uczestniczyły w mszach i spotkaniach, przeżywając zbiorowe katharsis i odbudowując poczucie godności.

### Pierwsza pielgrzymka 1979

Czerwiec 1979. Jan Paweł II – papież zaledwie od ośmiu miesięcy – przybywa do kraju. Władze komunistyczne są zakłopotane: nie mogą odmówić wizyty, ale boją się jej skutków.

Efekt przerósł ich najgorsze obawy. Na Placu Zwycięstwa w Warszawie, w miejscu, gdzie niegdyś planowano budowę gigantycznego mauzolea Lenina, papież odprawia mszę. Słowa: „Niech zstąpi Duch Twój i odnowi oblicze ziemi, tej ziemi!" – brzmiały jak wezwanie do wolności. Tłum skandował je razem z papieżem.

Mszę w Krakowie – na Błoniach – celebruje dla dwóch milionów ludzi. Częstochowa, Gniezno, Nowy Targ. Polska zobaczyła, że jest milionami – i że nie jest sama.

Historycy twierdzą, że bez tej pielgrzymki nie byłoby Solidarności. Pielgrzymka dała Polakom poczucie siły i zbiorowej tożsamości, bez której strajki 1980 roku byłyby niemożliwe.

### Druga pielgrzymka 1983

Czerwiec 1983. Trwa stan wojenny (zawieszony, ale jeszcze nie zniesiony). Władze chciały wyciszynej pielgrzymki – papież nie dał się wyciszyć.

Na Wawelu spotkał się prywatnie z Lechem Wałęsą. Wałęsa był wtedy internowany i zwolniony – spotkanie było gestem politycznym niemożliwym do ukrycia. Na Jasnej Górze papież mówił o „prawie do zrzeszania się" i „godności pracy" – wprost o Solidarności.

Pielgrzymka 1983 była gestem solidarności z internowanymi i uciskanymi. Pokazała, że papież nie zapomniał o swojej ojczyźnie.

### Trzecia pielgrzymka 1987

Czerwiec 1987. Komunizm chylił się ku upadkowi, choć tego jeszcze nie wiedziano. Papież mówił o prawach człowieka, o wolności sumienia, o potrzebie dialogu. W Gdańsku na spotkanie z papieżem przybyło ponad milion osób.

Słowa: „Solidarność" – wypowiadane przez papieża – miały podwójne znaczenie: komunia wiernych i nazwa zakazanego związku.

### Znaczenie

Pielgrzymki JP2 były przebudzeniem zbiorowym w ścisłym sensie: miliony Polaków doświadczyły, że są częścią czegoś większego niż szarość PRL. Papież mówił po polsku, zrozumiale, bez propagandy i eufemizmów. To, co powiedział, trafiało prosto do serc.

Komuniści zdawali sobie sprawę z zagrożenia. SB inwigilowała pielgrzymki, dokumentowała każde słowo. Ale nie mogli nic zrobić – papież był nietykalny.`,
    resources: [
      {
        id: 'jp2-pielgrzymki-ninateka',
        title: 'Pielgrzymki Jana Pawła II – nagrania (Ninateka)',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Jan+Pawe%C5%82+II+pielgrzymka+Polska+1979',
        source: 'Ninateka',
        description: 'Archiwalne nagrania z pielgrzymek Jana Pawła II do Polski',
      },
      {
        id: 'jp2-pielgrzymki-ipn',
        title: 'Pielgrzymki 1979–1987 – dokumenty SB',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Jan+Pawe%C5%82+II+pielgrzymka+SB',
        source: 'IPN Inwentarz',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące inwigilacji pielgrzymek papieskich',
      },
      {
        id: 'jp2-pielgrzymki-ph',
        title: 'Pielgrzymki papieskie a Solidarność',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Jan+Pawe%C5%82+II+pielgrzymka+Solidarno%C5%9B%C4%87+1979',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o znaczeniu pielgrzymek papieskich dla polskiej opozycji',
      },
    ],
    relatedIds: ['jan-pawel-ii', 'kosciol-prl', 'wyszynski', 'solidarnosc', 'stan-wojenny'],
  },
  {
    id: 'gdansk-sopot-gdynia',
    title: 'Trójmiasto – serce Solidarności',
    category: 'opozycja',
    shortDesc: 'Gdańsk, Sopot i Gdynia – centrum stoczniowego ruchu robotniczego, kolebka Solidarności i pamięci Grudnia 1970.',
    content: `## Trójmiasto – serce Solidarności

Trójmiasto (Gdańsk–Sopot–Gdynia) odegrało wyjątkową rolę w historii polskiej opozycji. To tutaj rozegrały się kluczowe akty dramatu 1970 roku, tu powstała Solidarność, tu bije serce oporu robotniczego.

### Grudzień 1970 – masakra na Wybrzeżu

W grudniu 1970 roku podwyżka cen żywności wywołała strajki na Wybrzeżu. Robotnicy wyszli na ulice Gdańska, Gdyni i Szczecina. Wojsko i milicja otworzyły ogień.

W Gdyni 17 grudnia strzelano do robotników wracających pociągiem do stoczni, zwolnionych przez szefów. Tłum zgromadził się przed bramą; padły strzały. Zginęło co najmniej 18 osób tylko w Gdyni. Łączna liczba ofiar na Wybrzeżu: co najmniej 45 zabitych, setki rannych.

Ta pamięć – krew wylana na brukach Gdyni i Gdańska – stała się cementem tożsamości stoczniowców. Gdy dziesięć lat później wybuchł strajk, wiedzieli, z czym ryzykują.

### Sierpień 1980 – narodziny Solidarności

14 sierpnia 1980 roku w Stoczni Gdańskiej im. Lenina wybuchł strajk. Formalnie zaczął się od zwolnienia Anny Walentynowicz – doświadczonej działaczki, kilka miesięcy przed emeryturą. Za nią stanęli stoczniowcy.

Lech Wałęsa wspiął się na bramę stoczni i stanął na czele strajku. Przez dwa tygodnie stocznia stała – i całe Wybrzeże, i cała Polska. 31 sierpnia 1980 roku podpisano Porozumienia Gdańskie: władze uznały prawo do wolnych związków zawodowych.

Stocznia Gdańska stała się symbolem – miejscem, gdzie Polacy wywalczyli prawa, których chciano im odmówić od 1944 roku.

### Europejskie Centrum Solidarności

Po 1989 roku Gdańsk stał się miejscem pamięci. Europejskie Centrum Solidarności (ECS), otwarte w 2014 roku w miejscu Stoczni, jest muzeum i centrum badawczym poświęconym historii Solidarności. Archiwum ECS przechowuje tysiące dokumentów, nagrań i relacji.

### Symbolika morska

Gdańsk ma głębszą symbolikę. To tu zaczęła się II wojna światowa (Westerplatte, 1 września 1939). To tu zaczęło się odrodzenie wolności (stocznia, 1980). Morze – zawsze granica i droga – nadaje miastu sens historyczny.

### Gdynia – pamięć o ofiarach

Gdynia zbudowała swój własny pomnik – Pomnik Ofiar Grudnia 1970 przy Bramie nr 2 Stoczni Gdańskiej (w Gdańsku) i swój własny memoriał przy Urzędzie Pocztowym. Doroczne uroczystości 17 grudnia są w Gdyni szczególnie ważne.`,
    resources: [
      {
        id: 'trojmiasto-ecs',
        title: 'Europejskie Centrum Solidarności – archiwum',
        type: 'akt',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Cyfrowe archiwum dokumentów i nagrań dotyczących Solidarności i Stoczni Gdańskiej',
      },
      {
        id: 'trojmiasto-ipn',
        title: 'Grudzień 1970 na Wybrzeżu – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Grudzie%C5%84+1970+Wybrze%C5%BCe+Gdynia+Gda%C5%84sk',
        source: 'IPN Inwentarz',
        description: 'Archiwalne dokumenty o wydarzeniach Grudnia 1970 na Wybrzeżu',
      },
      {
        id: 'trojmiasto-ninateka',
        title: 'Stocznia Gdańska – nagrania historyczne',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Stocznnia+Gda%C5%84ska+strajk+1980+Solidarno%C5%9B%C4%87',
        source: 'Ninateka',
        description: 'Archiwalne nagrania ze Stoczni Gdańskiej i wydarzeń sierpniowych 1980 roku',
      },
    ],
    relatedIds: ['sierpien-1980', 'grudzien-1970', 'stocznia-gdanska', 'solidarnosc', 'walesa'],
  },
  {
    id: 'niezaleznosc-sadow',
    title: 'Sądownictwo i praworządność w PRL',
    category: 'represje',
    shortDesc: 'Sądy PRL jako narzędzie represji – procesy pokazowe, ustawione wyroki i brak niezależności wymiaru sprawiedliwości.',
    content: `## Sądownictwo i praworządność w PRL

Wymiar sprawiedliwości w Polsce Ludowej był w teorii niezależny, a w praktyce – instrumentem władzy partyjnej. Sądy, prokuratury i kodeksy prawa były podporządkowane celom politycznym. Szczególnie w pierwszym dziesięcioleciu (1944–1956) wyroki sądowe były de facto wyrokami UB i partii.

### Sądy wojskowe jako narzędzie terroru

W latach 1944–1956 głównym instrumentem represji politycznych były sądy wojskowe – Wojskowy Sąd Rejonowy (WSR) w Warszawie i inne WSR w kraju. Sądziły cywilów za przestępstwa polityczne w trybie wojennym, z minimalnymi gwarancjami dla oskarżonych.

Wyroki śmierci były wydawane masowo. Witold Pilecki, Emil Fieldorf „Nil", Zygmunt Szendzielarz „Łupaszka", Hieronim Dekutowski „Zapora" – to tylko najbardziej znane nazwiska. Szacuje się, że wyroki śmierci wykonano na kilku tysiącach osób.

Obrońcy z urzędu byli często agentami UB lub bali się bronić zbyt aktywnie. Prawo do obrony było iluzoryczne.

### Procesy pokazowe

Komunizm kochał procesy pokazowe – spektakularne rozprawy, w których oskarżeni „przyznawali się" do winy po uprzednim przełamaniu ich woli metodami śledczymi. Wzorem były radzieckie procesy moskiewskie lat 30.

W Polsce znane procesy pokazowe: proces generałów (1951), proces biskupa Kaczmarka (1953), procesy działaczy PSL. Oskarżeni klepali wyuczone zeznania, których nie wierzył nikt – ale władza potrzebowała spektaklu legalności.

### Rewizja po 1956

Odwilż październikowa przyniosła rewizję wielu wyroków. Komisja Zambrowskiego zbadała część przypadków i stwierdziła, że wyroki były sfabrykowane. Część więźniów zwolniono i zrehabilitowano.

Ale sprawcy – śledczy UB, prokuratorzy wojskowi, sędziowie – rzadko ponosili odpowiedzialność. Kilku skazano w procesach lat 50.–60., reszta żyła spokojnie do końca.

### PRL po 1956

Po Październiku sądownictwo stało się nieco mniej terrorystyczne, ale nie niezależne. Sądy dalej skazywały za działalność polityczną – „szpiegostwo", „sabotaż", „działalność antypaństwową". Wyroki za kolportaż nielegalnych wydawnictw (drugi obieg) były normą w latach 80.

Kodeks karny z 1969 roku zawierał przepisy chroniące „ustrój socjalistyczny" – paragrafy tak sformułowane, by można było skazać każdego, kto za bardzo krytykował władzę.

### Po 1989

Reforma wymiaru sprawiedliwości po 1989 roku była trudna. Sędziowie, prokuratorzy i prawnicy z PRL w większości pozostali na swoich stanowiskach. Lustracja sądownictwa była minimalna. Procesy karne wobec sędziów wydających wyroki polityczne w PRL toczyły się latami bez rezultatów.

Pytanie o rozliczenie sprawców sądowych zbrodni komunistycznych pozostaje aktualne do dziś.`,
    resources: [
      {
        id: 'sady-ipn',
        title: 'Procesy polityczne PRL – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=procesy+polityczne+WSR+s%C4%85dy+wojskowe+PRL',
        source: 'IPN Inwentarz',
        description: 'Akta procesów politycznych i sądów wojskowych z zasobów IPN',
      },
      {
        id: 'sady-ph',
        title: 'Sądy i represje polityczne w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=procesy+polityczne+s%C4%85dy+wojskowe+represje+PRL',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o sądownictwie i procesach politycznych w Polsce Ludowej',
      },
      {
        id: 'sady-szukaj',
        title: 'Akta sądowe z epoki PRL',
        type: 'akt',
        url: 'https://szukajwarchiwach.gov.pl/szukaj?q=procesy+polityczne+PRL+Wojskowy+S%C4%85d+Rejonowy',
        source: 'Szukaj w Archiwach',
        description: 'Archiwalia sądowe dotyczące procesów politycznych z lat 1944–1989',
      },
    ],
    relatedIds: ['ub', 'represje-polityczne', 'zbrodnie-stalinizmu', 'obozy-pracy', 'pilecki'],
  },
  {
    id: 'walentynowicz',
    title: 'Anna Walentynowicz',
    category: 'osoby',
    shortDesc: 'Suwnicowa z Gdańska – jej zwolnienie wywołało strajk sierpniowy, który zmienił Polskę i świat.',
    content: `## Anna Walentynowicz (1929–2010)

Anna Walentynowicz była suwnicową ze Stoczni Gdańskiej im. Lenina i jedną z najważniejszych postaci polskiej opozycji robotniczej. Jej zwolnienie z pracy w sierpniu 1980 roku – pięć miesięcy przed emeryturą – stało się bezpośrednią iskrą, która wywołała Sierpień 1980 i narodziny Solidarności.

### Od sieroty do przodownika pracy

Walentynowicz urodziła się na Wołyniu. Sierota wojenna, trafiła do Gdańska po wysiedleniach. Pracowała w stoczni od 1950 roku – najpierw spawaczka, potem suwnicowa. W latach 50. była przodownikiem pracy, odznaczaną i chwaloną przez partię.

Z czasem oczy się otworzyły. Widziała niesprawiedliwość, nierówności, kłamstwo propagandy. W Grudniu 1970 roku stała przy bramie stoczni i patrzyła, jak strzelają do robotników.

### Działalność opozycyjna

W drugiej połowie lat 70. Walentynowicz zaangażowała się w Wolne Związki Zawodowe Wybrzeża (WZZ) – i od razu stała się celem szykan. Zwolnienia, ponowne przyjęcia, ciągłe konflikty z kierownictwem. SB inwigilowała ją intensywnie.

Kolportowała wydawnictwa bezdebitowe, dokumentowała naruszenia praw pracowników, nawiązała kontakty z KOR-em i Lechem Wałęsą.

### Iskra strajku

7 sierpnia 1980 roku, pięć miesięcy przed emeryturą, dyrekcja stoczni zwolniła ją z pracy – oficjalnie za kolekcjonowanie świec z tablicy upamiętniającej ofiary Grudnia 1970. W rzeczywistości za działalność opozycyjną.

14 sierpnia 1980 roku stoczniowcy zaczęli strajk – przede wszystkim z żądaniem jej przywrócenia do pracy. Walentynowicz wróciła do stoczni – przywieziono ją, bo była w domu – i stanęła pośród strajkujących. Tak zaczął się Sierpień 1980.

### Solidarność i marginalizacja

Walentynowicz była jedną z negocjatorek Porozumień Gdańskich. Ale w Solidarności szybko zaczęła być marginalizowana – przez Lecha Wałęsę i jego otoczenie. Uważała, że kierownictwo idzie na zbyt duże kompromisy z władzą.

W stanie wojennym była internowana. Po wyjściu na wolność kontynuowała działalność, coraz bardziej na marginesie głównego nurtu Solidarności.

### Ostatnie lata i tragedia

Anna Walentynowicz zginęła 10 kwietnia 2010 roku w katastrofie lotniczej pod Smoleńskiem. Leciała na uroczystości upamiętnienia ofiar zbrodni katyńskiej. Jej śmierć – razem z prezydentem Lechem Kaczyńskim i 94 innymi osobami – była jedną z największych tragedii III Rzeczypospolitej.

Walentynowicz do końca życia czuła, że jest niedoceniana. Historia oddaje jej sprawiedliwość – bez jej zwolnienia i bez strajku sierpniowego, który ono wywołało, historia Polski potoczyłaby się inaczej.`,
    resources: [
      {
        id: 'walentynowicz-ecs',
        title: 'Anna Walentynowicz – archiwum ECS',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Dokumenty i relacje dotyczące roli Anny Walentynowicz w Sierpniu 1980',
      },
      {
        id: 'walentynowicz-ipn',
        title: 'Walentynowicz – teczki SB (IPN)',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Walentynowicz+Anna+SB+inwigilacja',
        source: 'IPN Inwentarz',
        description: 'Dokumenty Służby Bezpieczeństwa dotyczące inwigilacji Anny Walentynowicz',
      },
      {
        id: 'walentynowicz-ph',
        title: 'Anna Walentynowicz – iskra Solidarności',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Walentynowicz+Anna+stocznia+Solidarno%C5%9B%C4%87',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o roli Anny Walentynowicz w narodzinach Solidarności',
      },
    ],
    relatedIds: ['sierpien-1980', 'stocznia-gdanska', 'walesa', 'solidarnosc', 'wzz'],
  },
  {
    id: 'lodz-szkola-filmowa',
    title: 'Łódź – szkoła filmowa i miasto kultury',
    category: 'kultura',
    shortDesc: 'PWSFTviT w Łodzi – najsłynniejsza szkoła filmowa Europy Środkowej, kuźnia talentów Polskiej Szkoły Filmowej.',
    content: `## Łódź – szkoła filmowa i miasto kultury

Łódź w czasach PRL była przemysłowym centrum włókienniczym, ale też miejscem, gdzie mieściła się jedna z najważniejszych szkół filmowych na świecie – Państwowa Wyższa Szkoła Filmowa, Telewizyjna i Teatralna (PWSFTviT). To stąd wyszli Wajda, Polański, Kieślowski, Zanussi – i to tu wyrobiły się całe pokolenia polskiego kina.

### Powojenne miasto

Łódź przypadkowo stała się stolicą kultury filmowej – ocalała relatywnie niezniszczona z II wojny, zatem to tu przeniesiono polskie instytucje filmowe. Film Polski, wytwórnia filmowa, szkoła – wszystko tu. Miasto włókniarzy stało się miastem kamery.

Łódź miała też inną tożsamość – wielokulturowa, dawniej żydowska, w PRL robotnicza i czerwona. Fabryki łódzkie, strajki, trudne życie. „Ziemia obiecana" Reymonta – i Wajdy – dzieje się właśnie tutaj.

### Szkoła Filmowa

Państwowa Wyższa Szkoła Filmowa w Łodzi (od 1948 roku) jest jedną z najważniejszych uczelni filmowych na świecie. Jej absolwenci zdominowali polskie kino przez dekady.

Wydział reżyserii: Wajda, Polański, Kieślowski, Żuławski, Zanussi. Wydział operatorski: Janusz Kamiński (który zdobył Oscara za zdjęcia do „Listy Schindlera" i filmów Spielberga). Wydział aktorski i scenariuszowy – równie imponujące biografie.

Szkoła była miejscem, gdzie można było rozmawiać o filmie jako sztuce – i przemycać pytania, których nie wolno było zadawać wprost. Tradycja dokumentalna Kieślowskiego wyrosła tu na gruncie konkretnej poetyki obserwacji.

### Kino się nie bało

Łódzka szkoła filmowa produkowała etudes i filmy dyplomowe, które często były śmielsze niż pełnometrażowe produkcje. Na małym ekranie i krótkim metrażu można było więcej – mniejszy nadzór, mniejsze ryzyko.

To tu Kieślowski nakręcił swoje pierwsze dokumenty. To tu Polański zrobił „Dwóch ludzi z szafą" – absurdalną, poetycką etiudę, która przyniosła mu międzynarodową uwagę.

### Muzeum Kinematografii

W Łodzi działa też Muzeum Kinematografii – w zabytkowym pałacu Scheiblera, pełne eksponatów z historii polskiego kina, plakatów filmowych (polska szkoła plakatu filmowego była osobnym fenomenem artystycznym) i dokumentów z historii łódzkiej szkoły.

### Łódź po PRL

Po 1989 roku Łódź przeżyła kryzys przemysłowy – zamknięte fabryki, bezrobocie, wyludnienie. Szkoła filmowa trwała i rozwijała się. Miasto zaczęło odbudowywać tożsamość kulturalną wokół kina, festiwali i rewitalizacji fabryk (Manufaktura). Łódź Design Festival, Off Festival – Łódź staje się miastem kreatywnym.`,
    resources: [
      {
        id: 'lodz-ninateka',
        title: 'Filmy Szkoły Łódzkiej – Ninateka',
        type: 'film',
        url: 'https://ninateka.pl/vod/szukaj?query=%C5%81%C3%B3d%C5%BA+szko%C5%82a+filmowa+etiudy',
        source: 'Ninateka',
        description: 'Etiudy i filmy dyplomowe absolwentów łódzkiej szkoły filmowej',
      },
      {
        id: 'lodz-polona',
        title: 'Dokumenty Szkoły Filmowej w Łodzi (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Szko%C5%82a+Filmowa+%C5%81%C3%B3d%C5%BA+PWSFTviT',
        source: 'Polona',
        description: 'Archiwalne materiały o Państwowej Wyższej Szkole Filmowej w Łodzi',
      },
      {
        id: 'lodz-ph',
        title: 'Łódź filmowa – szkoła i tradycja',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=%C5%82%C3%B3dzka+szko%C5%82a+filmowa+PRL+kino',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o szkole filmowej i łódzkiej tradycji kinematograficznej',
      },
    ],
    relatedIds: ['polska-szkola-filmowa', 'kino-prl', 'kino-moralnego-niepokoju', 'wajda', 'kieslowski'],
  },
  {
    id: 'muzyka-rockowa-prl',
    title: 'Rock i muzyka młodzieżowa w PRL',
    category: 'kultura',
    shortDesc: 'Perfect, Lady Pank, Republika, Maanam – polska scena rockowa lat 80. jako wyraz buntu i wolności.',
    content: `## Rock i muzyka młodzieżowa w PRL

Polska scena rockowa lat 70. i 80. była jednym z najważniejszych zjawisk kulturalnych PRL – i jednocześnie przestrzenią autentycznej wolności artystycznej. Kapele takie jak Perfect, Lady Pank, Republika, Maanam, Dżem czy TSA tworzyły muzykę, która mówiła prawdę o rzeczywistości i dawała młodym ludziom poczucie własnej tożsamości.

### Początki – beatlemania i twist

Zachodni rock and roll dotarł do Polski w latach 50. za pośrednictwem radia – BBC, Głosu Ameryki, Radia Luksemburg. W 1957 roku polska młodzież tańczyła rock and rolla w kawiarniach; władze były zniesmaczone.

Lata 60. przyniosły polskich naśladowców Beatlesów. Czerwone Gitary, Niebiesko-Czarni, Skaldowie – po polsku, z folk-rockowym odcieniem. Festiwal w Sopocie od 1961 roku był trampoliną dla polskich wykonawców i platformą dla kontaktów z zagranicą.

### Lata 70. – Breakout, Dżem, SBB

W latach 70. polska scena dojrzewała. **Breakout** Tadeusza Nalepy – blues-rock o autentycznym bólu, daleki od słodkości ówczesnej oficjalnej muzyki. **Dżem** z Rybnika – ciężki blues i rock, z Ryszardem Riedlem, tragicznym genialnym wokalistą. **SBB** (Silesian Blues Band) – jazz-rock, eksperyment, wirtuozeria.

Cenzura miała problem z rockiem – zbyt głośny, zbyt angielski, zbyt niezrozumiały, by kontrolować każde słowo. To dawało wykonawcom pewien margines swobody.

### Lata 80. – złoty wiek

Lata 80. były złotym wiekiem polskiego rocka. W cieniu stanu wojennego i opresji wyrosła scena, która trafiała prosto do serc młodych Polaków.

**Perfect** – „Chcemy być sobą" (1981) stało się hymnem pokolenia strajkującego w sierpniu. Zbigniew Hołdys i jego zespół łączyli pop z buntowniczym przesłaniem. „Autobiografia", „Nie płacz, Ewka" – klasyki.

**Lady Pank** – Jan Borysewicz i Andrzej Mogielnicki, przeboje nowej fali: „Zawsze tam gdzie ty", „Minus zero". Elegancja i bunt.

**Republika** – Grzegorz Ciechowski, „Tak, tak, to ja" i „Masakra" – post-punk z filozoficznym przesłaniem. Jeden z najinteligentniejszych zespołów polskiego rocka.

**Maanam** – Kora i Marek Jackowski, „Boskie Buenos", „Nocny patrol" – nowa fala, erotyzm i wolność, totalnie niepokorni.

**TSA** – heavy metal, „51°", „Biały krzyż" – gitarowy gniew.

### Festiwale i JAROCIN

Festiwal w Jarocinie był corocznym celebrowaniem wolności. Od 1980 roku miasto w Wielkopolsce na kilka dni zamieniało się w stolicę polskiego rocka i alternatywy. Punkowcy, metalowcy, nowa fala – wszyscy razem. Władze patrzyły z niepokojem, ale nie zakazały – chyba wolały mieć młodzież w jednym miejscu.

Jarocin był też miejscem formowania się sceny punkowej – Lady Pank tam debiutowali, tam grały setki mniejszych kapel, tam wytworzył się etos alternatywnej Polski.

### Rock i Solidarność

Muzyka rockowa lat 80. nie była wprost polityczna, ale jej etos był opozycyjny. „Chcemy być sobą" to nie był manifest Solidarności, ale wszyscy wiedzieli, o co chodzi. Energia, bunt, autentyczność – kontrast z oficjalną kulturą partyjną.`,
    resources: [
      {
        id: 'rock-ninateka',
        title: 'Polski rock lat 80. – nagrania (Ninateka)',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=Perfect+Lady+Pank+Republika+rock+PRL',
        source: 'Ninateka',
        description: 'Archiwalne nagrania, teledyski i koncerty polskich kapel rockowych z lat 70.–80.',
      },
      {
        id: 'rock-polona',
        title: 'Prasa muzyczna PRL (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=rock+muzyka+m%C5%82odzie%C5%BCowa+PRL+Jarocin',
        source: 'Polona',
        description: 'Archiwalne numery pism muzycznych i artykuły o polskim rocku',
      },
      {
        id: 'rock-ph',
        title: 'Rock jako bunt w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=rock+muzyka+m%C5%82odzie%C5%BCowa+Jarocin+PRL+bunt',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o polskiej scenie rockowej jako zjawisku społecznym i kulturowym',
      },
    ],
    relatedIds: ['kultura-prl', 'jazz-prl', 'dzieci-prl', 'cenzura-prl', 'propaganda-prl'],
  },
  {
    id: 'kabaret-prl',
    title: 'Kabaret i satyra w PRL',
    category: 'kultura',
    shortDesc: 'Piwnica pod Baranami, Dudek, STS – satyra jako jedyna dozwolona forma krytyki systemu.',
    content: `## Kabaret i satyra w PRL

Kabaret i satyra polityczna zajmowały w kulturze PRL szczególne miejsce – były jedyną formą publicznej krytyki systemu, którą władza tolerowała w pewnych granicach. Dobry satyryk potrafił powiedzieć to, o czym inni mogli tylko szeptać.

### Tradycja i nowe warunki

Polska tradycja kabaretowa sięga Młodej Polski i Zielonego Balonika (Kraków, 1905). PRL odziedziczyła tę tradycję i – niezamierzenie – stworzył dla niej idealne warunki: absurd codzienności, przepaść między propagandą a rzeczywistością, bezmyślność biurokracji. Komik miał z czego czerpać.

### Piwnica pod Baranami

Krakowski kabaret **Piwnica pod Baranami** (założona 1956 przez Piotra Skrzyneckiego) była legendą. Spotkanie artystów, poetów, muzyków – Marek Grechuta, Zbigniew Preisner (przed sławą), Zygmunt Konieczny, Leszek Długosz. Piwnica nie była kabaretetem politycznym wprost – ale jej duch wolności i oryginalności był niepokorny.

Skrzynecki – konferansjer, improwizator, legenda Krakowa – tworzył nastrój absolutnej wolności wewnętrznej w komunie.

### STS i kabaret studencki

**Studencki Teatr Satyryków (STS)** w Warszawie był od 1954 roku centrum studenckiej satyry. Tu Agnieszka Osiecka pisała teksty, Jonasz Kofta śpiewał, Edward Dziewoński reżyserował. STS potrafił w stylu absurdystycznym komentować rzeczywistość PRL.

Teatrzyki studenckie – Kalambur we Wrocławiu, Bim-Bom w Gdańsku – tworzyły sieć alternatywnej kultury.

### Dudek i telewizja

**Kabaret Dudek** (od 1965) był pierwszym kabaretetem, który trafił szeroko do telewizji i kin. Jan Pietrzak, Wiesław Gołas, Zdzisław Maklakiewicz – mistrzowie formy skeczowej. Dudek bawił miliony i jednocześnie przemycał coraz ostrzejszą satyrę. W latach 70. skecze o kolejkach, biurokracji i kłamstwie propagandy były odczytywane jako komentarz polityczny.

Jan Pietrzak stawał się coraz bardziej zaangażowany – jego piosenka „Żeby Polska była Polską" stała się w 1980 roku nieformalnym hymnem Solidarności.

### Grał każdy, kto umiał

Satyra w PRL kwitła w każdym możliwym miejscu: teatrach studenckich, piwnicach, kawiarniach. Tekst kabaretowy mógł przejść przez cenzurę, jeśli był sprytnie napisany. Cenzorzy nie zawsze rozumieli aluzje – a gdy rozumieli, decyzja zależała od aktualnego klimatu politycznego.

W stanie wojennym kabaret przycichł na chwilę – ale szybko wrócił, tym razem z jeszcze ostrzejszym zębem.

### Kabaret po 1989

Po 1989 roku scena kabaretowa rozkwitła. Kabaret Olgi Lipińskiej, potem „Ucho Prezesa", „Kabaret pod Wyrwigroszem" – satyra polityczna dostała do dyspozycji całe spektrum tematów. Paradoksalnie, stała się też mniej wywrotowa – bo nie musiała przemycać prawdy pod zasłoną humoru.`,
    resources: [
      {
        id: 'kabaret-ninateka',
        title: 'Kabaret PRL – nagrania archiwalne (Ninateka)',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=kabaret+Dudek+STS+Piwnica+PRL+satyra',
        source: 'Ninateka',
        description: 'Archiwalne nagrania kabaretów i programów satyrycznych z ery PRL',
      },
      {
        id: 'kabaret-polona',
        title: 'Prasa satyryczna PRL – Szpilki (Polona)',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Szpilki+satyra+kabaret+PRL',
        source: 'Polona',
        description: 'Zdigitalizowane numery tygodnika satyrycznego „Szpilki" i prasy kabaretowej',
      },
      {
        id: 'kabaret-ph',
        title: 'Satyra jako broń w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=kabaret+satyra+PRL+Dudek+STS',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o roli kabaretu i satyry w kulturze PRL',
      },
    ],
    relatedIds: ['kultura-prl', 'prasa-prl', 'cenzura-prl', 'teatr-prl', 'kino-prl'],
  },
  {
    id: 'kolakowski',
    title: 'Leszek Kołakowski',
    category: 'osoby',
    shortDesc: 'Filozof, autor „Głównych nurtów marksizmu" – od rewizjonizmu komunistycznego do krytyki totalitaryzmu.',
    content: `## Leszek Kołakowski (1927–2009)

Leszek Kołakowski był jednym z najwybitniejszych polskich filozofów XX wieku. Jego intelektualna droga – od marksistowskiego rewizjonizmu przez rozczarowanie do fundamentalnej krytyki komunizmu i totalitaryzmu – jest symbolem transformacji całego pokolenia środkowoeuropejskich intelektualistów.

### Rewizjonista

Kołakowski w młodości był marksistą – i to szczerym. Wierzył, że humanistyczny marksizm może być podstawą sprawiedliwego społeczeństwa. W latach 50. publikował w duchu rewizjonizmu: próbował oczyścić marksizm z dogmatyzmu stalinowskiego i przywrócić mu filozoficzną głębię.

Jego eseje z tego okresu, zebrane w tomie „Szkice o filozofii katolickiej" (1955) i „Jednostka i nieskończoność" (1958), były błyskotliwą analizą filozofii religii – ale też próbą znalezienia w humanizmie filozoficznego gruntu.

### Wykluczenie z Partii

Referat wygłoszony 21 października 1966 roku na Uniwersytecie Warszawskim – w dziesiątą rocznicę Października 1956 – stał się jego skokiem przez most. Kołakowski skrytykował rządy Gomułki jako zaprzeczenie październikowych obietnic. Wyrzucono go z PZPR.

Marzec 1968 – gdy studenci wychowani m.in. na jego ideach protestowali, a partia ich tłumiła – był kolejnym przełomem. Kołakowski popierał protestujących. Po 1968 roku nie mógł wykładać na Uniwersytecie Warszawskim.

### Emigracja i „Główne nurty marksizmu"

W 1968 roku Kołakowski wyjechał z Polski. Wykładał na McGill (Kanada), Berkeley i Oksfordzie. Napisał swoje opus magnum: trzytomowe „Główne nurty marksizmu" (1976–1978) – pomnikową krytyczną historię myśli marksistowskiej. Pokazał, że marksizm prowadzi nieuchronnie do totalitaryzmu – nie przez przypadek, ale przez wewnętrzną logikę systemu.

Książka była zakazana w PRL, przemycana jako drugi obieg. Na Zachodzie stała się fundamentalną pracą akademicką.

### Filozofia religii i „mini-wykłady"

Kołakowski w późniejszym życiu coraz więcej pisał o filozofii religii, micie i nieracjonalnych podstawach kultury. „Jeśli Boga nie ma..." (1982) – parafrazując Dostojewskiego, Kołakowski argumentował, że bez sacrum nie ma etyki.

Jego eseje – ostre, eleganckie, pełne humoru i filozoficznej precyzji – były czytane chętnie przez niespecjalistów. „Mini-wykłady o maxi-sprawach" były bestselerem.

### Powrót i ostatnie lata

Kołakowski odwiedzał Polskę po 1989 roku. Był uhonorowany wieloma nagrodami, w tym Nagrodą Kluge (2003) – "humanistyczny odpowiednik Nobla". Zmarł w Oksfordzie w 2009 roku.`,
    resources: [
      {
        id: 'kolakowski-polona',
        title: 'Kołakowski – dzieła w zasobach Polony',
        type: 'publikacja',
        url: 'https://polona.pl/search/?query=Ko%C5%82akowski+Leszek+marksizm+filozofia',
        source: 'Polona',
        description: 'Zdigitalizowane publikacje i artykuły filozoficzne Leszka Kołakowskiego',
      },
      {
        id: 'kolakowski-ipn',
        title: 'Kołakowski – inwigilacja SB',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=Ko%C5%82akowski+Leszek+SB+inwigilacja',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące inwigilacji Leszka Kołakowskiego przez Służbę Bezpieczeństwa',
      },
      {
        id: 'kolakowski-ph',
        title: 'Kołakowski – od rewizjonizmu do krytyki',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=Ko%C5%82akowski+Leszek+marksizm+rewizjonizm+filozofia',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o drodze intelektualnej Leszka Kołakowskiego',
      },
    ],
    relatedIds: ['literatura-prl', 'marzec-1968', 'michnik', 'drugi-obieg', 'milosz'],
  },
  {
    id: 'nzs',
    title: 'NZS – Niezależne Zrzeszenie Studentów',
    category: 'opozycja',
    shortDesc: 'Studencki ruch niezależny, zarejestrowany w 1980 roku – pierwsza legalna niezależna organizacja studencka w bloku wschodnim.',
    content: `## NZS – Niezależne Zrzeszenie Studentów

Niezależne Zrzeszenie Studentów (NZS) było pierwszą legalną niezależną organizacją studencką w całym bloku wschodnim – zarejestrowaną we wrześniu 1980 roku, kilka tygodni po Solidarności. Jej powstanie było wyrazem tego samego ducha Sierpnia, który ogarnął całe polskie społeczeństwo.

### Narodziny

Po Sierpniu 1980 roku fala wolnościowych organizacji ogarnęła Polskę. Studenci – inspirowani Solidarnością i środowiskiem KOR – zaczęli tworzyć własne, niezależne struktury. We wrześniu 1980 roku zarejestrowali NZS jako ogólnopolską federację.

NZS był organizacją pluralistyczną: od lewicy do prawicy, od katolików do liberałów. Łączyło ich jedno – odrzucenie SZSP (Socjalistycznego Związku Studentów Polskich), czyli partyjnej przybudówki na uczelniach.

### Program i działalność

NZS walczył o: autonomię uczelni, wolność badań i nauczania, zniesienie obowiązkowego marksizmu-leninizmu, niezależny samorząd studencki. To były żądania rewolucyjne w warunkach PRL.

Na uczelniach zaczęły powstawać koła NZS, gazety studenckie poza cenzurą, seminaria i wykłady z historii prawdziwej (o Katyniu, o 1939 roku, o AK). Studenci organizowali spotkania z relegowanymi profesorami.

### Stan wojenny – delegalizacja

13 grudnia 1981 roku NZS – razem z Solidarnością – zostało zdelegalizowane. Działacze byli internowani lub aresztowani. Niektórzy wyjechali za granicę.

Jednak NZS przetrwał w podziemiu. Konspiracyjne struktury kontynuowały działalność: wydawnictwa, seminaria, kontakty z zagranicznymi organizacjami studenckimi. „Podziemny NZS" był elementem szerszej infrastruktury oporu.

### Strajki 1988 i reaktywacja

W 1988 roku, w czasie strajków w maju i sierpniu, NZS aktywnie uczestniczył w proteście. Władze zaczęły rozmawiać. W 1989 roku NZS został ponownie legalnie zarejestrowany.

W obradach Okrągłego Stołu brała udział delegacja NZS – organizacja miała swój wkład w kształtowanie nowej umowy społecznej.

### Znaczenie

NZS był dowodem, że wolnościowy impuls Solidarności dosięgnął całego społeczeństwa – nie tylko robotników, ale też studentów, nauczycieli, intelektualistów. Był też kuźnią kadr przyszłej demokratycznej Polski: wielu polityków III RP swoją drogę zaczynało w NZS.`,
    resources: [
      {
        id: 'nzs-ipn',
        title: 'NZS – dokumenty IPN',
        type: 'akt',
        url: 'https://inwentarz.ipn.gov.pl/szukaj?fraza=NZS+Niezale%C5%BCne+Zrzeszenie+Student%C3%B3w',
        source: 'IPN Inwentarz',
        description: 'Dokumenty dotyczące NZS, jego struktur i delegalizacji w stanie wojennym',
      },
      {
        id: 'nzs-ph',
        title: 'NZS – studencka opozycja w PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=NZS+studenci+niezale%C5%BCni+1980+opozycja',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły historyczne o Niezależnym Zrzeszeniu Studentów',
      },
      {
        id: 'nzs-ecs',
        title: 'Dokumenty NZS – archiwum Solidarności',
        type: 'dokument',
        url: 'https://ecs.gda.pl/en/archive/',
        source: 'Europejskie Centrum Solidarności',
        description: 'Dokumenty związane z ruchem studenckim i NZS w archiwum ECS',
      },
    ],
    relatedIds: ['solidarnosc', 'marzec-1968', 'kor', 'stan-wojenny', 'okragly-stol'],
  },
  {
    id: 'plakat-prl',
    title: 'Polska szkoła plakatu',
    category: 'kultura',
    shortDesc: 'Światowej sławy polska szkoła plakatu – graficy PRL stworzyli unikatowy styl artystyczny uznany za jeden z najważniejszych w historii plakatu.',
    content: `## Polska szkoła plakatu

Polska szkoła plakatu to jedno z najbardziej paradoksalnych zjawisk kulturalnych PRL – w kraju komunistycznym, gdzie propaganda miała być prosta i czytelna, powstała jedna z najśmielszych i najbardziej awangardowych szkół grafiki użytkowej na świecie.

### Geneza

Po II wojnie światowej polskie środowisko graficzne zaczęło szukać własnej drogi. Oficjalnie państwo potrzebowało plakatów – filmowych, teatralnych, cyrkowych, politycznych. Zamawiano je w specjalistycznych wydawnictwach i agencjach reklamowych (Ruch, WAG – Wydawnictwo Artystyczno-Graficzne).

Paradoksalnie, plakat filmowy i teatralny – bo do tych tematów komisarze ideologiczni nie przywiązywali aż tak dużej wagi – stał się przestrzenią eksperymentu artystycznego.

### Mistrzowie

**Henryk Tomaszewski** (1914–2005) – ojciec polskiej szkoły plakatu. Jego plakaty łączą malarskość, wyrazisty kontur i poetycki skrót myślowy. Zdobywał nagrody na całym świecie.

**Waldemar Świerzy** – wirtuoz koloru i formy, twórca plakatu jazzowego (słynne plakaty Jazz Jamboree) i filmowego. Jego plakaty do filmów Felliniego i Bergmana są arcydziełami.

**Jan Lenica** – współtwórca animacji eksperymentalnej i plakatów absurdystycznych, emigrant w Niemczech.

**Roman Cieślewicz** – emigrant we Francji, pracował dla „Vogue" i międzynarodowych pism.

**Franciszek Starowieyski** – mroczny, oniryczny, ekspresjonistyczny. Jego plakaty teatralne i filmowe szokują do dziś.

### Styl i cechy

Polska szkoła plakatu charakteryzuje się: poetyckością i wieloznacznością zamiast literalności, silnym akcentem malarskim, ironią, surrealizmem i metaforą, odwagą formalną.

Był to manifest – i dowód – że w systemie komunistycznym artysta może zachować autonomię, jeśli trafi na temat wystarczająco niszowy lub prestiżowy dla władz.

### Muzeum Plakatu w Wilanowie

Od 1968 roku Muzeum Plakatu w Wilanowie (oddział Muzeum Narodowego w Warszawie) gromadzi i wystawia plakaty polskich artystów. Jest to jedyne muzeum poświęcone wyłącznie plakatowi w Europie. Kolekcja liczy dziesiątki tysięcy obiektów.

Festiwal Plakatu Filmowego w Łagowie, Międzynarodowe Biennale Plakatu – to wydarzenia, które utrwaliły polską pozycję w światowej grafice.

### Wpływ na kulturę

Polska szkoła plakatu dowodzi, że nawet w systemie totalitarnym twórczość może wyrwać się poza schemat, jeśli artysta ma odwagę i umiejętności. Plakaty do filmów Wajdy, Kieślowskiego, do Jazz Jamboree – były oknem na inną Polskę: intelektualną, artystyczną, odważną.`,
    resources: [
      {
        id: 'plakat-polona',
        title: 'Plakaty polskie – Polona',
        type: 'zdjęcie',
        url: 'https://polona.pl/search/?query=plakat+polski+PRL+grafika+filmowy',
        source: 'Polona',
        description: 'Zdigitalizowane plakaty polskie z epoki PRL, w tym filmowe, teatralne i polityczne',
      },
      {
        id: 'plakat-ninateka',
        title: 'Polskie plakaty filmowe – nagrania i dokumenty',
        type: 'nagranie',
        url: 'https://ninateka.pl/vod/szukaj?query=plakat+filmowy+polska+szko%C5%82a+grafika',
        source: 'Ninateka',
        description: 'Materiały o polskiej szkole plakatu i jej twórcach',
      },
      {
        id: 'plakat-ph',
        title: 'Polska szkoła plakatu – fenomen artystyczny PRL',
        type: 'publikacja',
        url: 'https://przystanekhistoria.pl/pa2/search?szukaj=polska+szko%C5%82a+plakatu+Tomaszewski+%C5%9Awierzy',
        source: 'Przystanek Historia IPN',
        description: 'Artykuły o polskiej szkole plakatu jako zjawisku artystycznym i kulturowym',
      },
    ],
    relatedIds: ['kultura-prl', 'socrealizm', 'kino-prl', 'jazz-prl', 'animacja-prl'],
  },
];

export const categories: { id: Category; label: string; color: string; icon: string }[] = [
  { id: 'polityka', label: 'Polityka', color: 'bg-red-100 text-red-800 border-red-200', icon: '🏛️' },
  { id: 'gospodarka', label: 'Gospodarka', color: 'bg-amber-100 text-amber-800 border-amber-200', icon: '⚙️' },
  { id: 'kultura', label: 'Kultura', color: 'bg-purple-100 text-purple-800 border-purple-200', icon: '🎭' },
  { id: 'opozycja', label: 'Opozycja', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '✊' },
  { id: 'represje', label: 'Represje', color: 'bg-gray-100 text-gray-800 border-gray-200', icon: '⚖️' },
  { id: 'społeczeństwo', label: 'Społeczeństwo', color: 'bg-green-100 text-green-800 border-green-200', icon: '👥' },
  { id: 'wojsko', label: 'Wojsko', color: 'bg-orange-100 text-orange-800 border-orange-200', icon: '🎖️' },
  { id: 'osoby', label: 'Osoby', color: 'bg-teal-100 text-teal-800 border-teal-200', icon: '👤' },
];

export const resourceTypeLabels: Record<ResourceType, { label: string; icon: string; color: string }> = {
  dokument: { label: 'Dokument', icon: '📄', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  nagranie: { label: 'Nagranie', icon: '🎬', color: 'bg-red-50 text-red-700 border-red-200' },
  zdjęcie: { label: 'Zdjęcie', icon: '📷', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  akt: { label: 'Akt/Archiwum', icon: '🗂️', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  publikacja: { label: 'Publikacja', icon: '📚', color: 'bg-green-50 text-green-700 border-green-200' },
  film: { label: 'Film', icon: '🎥', color: 'bg-pink-50 text-pink-700 border-pink-200' },
};

export const timelineEvents: { year: number; event: string; category: string; entryId?: string }[] = [
  { year: 1944, event: 'Powołanie PKWN – "Manifest Lipcowy"', category: 'polityka' },
  { year: 1945, event: 'Konferencja w Poczdamie – ustalenie granic', category: 'polityka' },
  { year: 1945, event: 'Powstanie KBW – walka z podziemiem niepodległościowym', category: 'represje', entryId: 'represje-polityczne' },
  { year: 1947, event: 'Sfałszowane wybory – eliminacja PSL', category: 'polityka' },
  { year: 1948, event: 'Powstanie PZPR z połączenia PPR i PPS', category: 'polityka', entryId: 'pzpr' },
  { year: 1949, event: 'Budowa Nowej Huty – socjalizm w betonie', category: 'społeczeństwo', entryId: 'nowa-huta' },
  { year: 1950, event: 'Forsowna industrializacja – Plan 6-letni', category: 'gospodarka', entryId: 'gospodarka-prl' },
  { year: 1951, event: 'Aresztowanie Gomułki jako "odchyleniowca"', category: 'represje', entryId: 'gomulka' },
  { year: 1952, event: 'Konstytucja PRL – stalinowska ustawa zasadnicza', category: 'polityka', entryId: 'bierut' },
  { year: 1953, event: 'Uwięzienie prymasa Wyszyńskiego', category: 'społeczeństwo', entryId: 'kosciol-prl' },
  { year: 1956, event: 'Poznański Czerwiec – robotniczy bunt (57 zabitych)', category: 'opozycja', entryId: 'czerwiec-1956' },
  { year: 1956, event: 'Październik 1956 – Gomułka dochodzi do władzy', category: 'polityka', entryId: 'gomulka' },
  { year: 1956, event: 'Śmierć Bieruta w Moskwie', category: 'polityka', entryId: 'bierut' },
  { year: 1968, event: 'Marzec 1968 – protesty studenckie i kampania antysemicka', category: 'opozycja', entryId: 'marzec-1968' },
  { year: 1968, event: 'LWP uczestniczy w inwazji na Czechosłowację', category: 'wojsko', entryId: 'lwp' },
  { year: 1970, event: 'Grudzień 1970 – masakra na Wybrzeżu (45 zabitych)', category: 'opozycja', entryId: 'grudzien-1970' },
  { year: 1970, event: 'Gierek zastępuje Gomułkę – "pomożecie?"', category: 'polityka', entryId: 'gierek' },
  { year: 1976, event: 'Czerwiec 1976 – Radom i Ursus, "ścieżki zdrowia"', category: 'opozycja', entryId: 'czerwiec-1976' },
  { year: 1976, event: 'Powstanie KOR – pierwsza jawna opozycja', category: 'opozycja', entryId: 'kor' },
  { year: 1978, event: 'Karol Wojtyła zostaje Janem Pawłem II', category: 'społeczeństwo', entryId: 'kosciol-prl' },
  { year: 1979, event: 'I pielgrzymka Jana Pawła II do Polski', category: 'społeczeństwo', entryId: 'kosciol-prl' },
  { year: 1980, event: 'Sierpień 1980 – strajki, Porozumienia Gdańskie, Solidarność', category: 'opozycja', entryId: 'sierpien-1980' },
  { year: 1981, event: '13 grudnia – wprowadzenie stanu wojennego', category: 'represje', entryId: 'stan-wojenny' },
  { year: 1981, event: '16 grudnia – pacyfikacja KWK Wujek (9 zabitych)', category: 'represje', entryId: 'wujek' },
  { year: 1983, event: 'Lech Wałęsa laureatem Pokojowej Nagrody Nobla', category: 'opozycja', entryId: 'walesa' },
  { year: 1984, event: 'Zamordowanie ks. Jerzego Popiełuszki przez SB', category: 'represje', entryId: 'popieluszko' },
  { year: 1989, event: 'Obrady Okrągłego Stołu', category: 'polityka', entryId: 'okragly-stol' },
  { year: 1989, event: '4 czerwca – pierwsze częściowo wolne wybory', category: 'polityka', entryId: 'okragly-stol' },
  { year: 1989, event: 'Rząd Mazowieckiego – koniec PRL', category: 'polityka', entryId: 'mazowiecki' },
  { year: 1990, event: 'Rozwiązanie PZPR – formalne zakończenie epoki', category: 'polityka', entryId: 'pzpr' },
  { year: 1956, event: 'Pierwsze Ogólnopolskie Festiwal Muzyki Jazzowej w Sopocie', category: 'kultura', entryId: 'jazz-prl' },
  { year: 1958, event: 'Inauguracja Jazz Jamboree w Warszawie', category: 'kultura', entryId: 'jazz-prl' },
  { year: 1972, event: 'Złoto olimpijskie polskich piłkarzy w Monachium', category: 'społeczeństwo', entryId: 'sport-prl' },
  { year: 1974, event: 'Polska zajmuje 3. miejsce na Mistrzostwach Świata w piłce nożnej', category: 'społeczeństwo', entryId: 'sport-prl' },
  { year: 1976, event: 'Irena Szewińska złotą medalistką olimpijską (400 m, Montreal)', category: 'społeczeństwo', entryId: 'sport-prl' },
  { year: 1980, event: 'Gest Kozakiewicza – złoto w skoku o tyczce w Moskwie', category: 'społeczeństwo', entryId: 'sport-prl' },
  { year: 1964, event: 'Jacek Kuroń i Karol Modzelewski – „List otwarty do Partii"', category: 'opozycja', entryId: 'kuron' },
  { year: 1977, event: 'Adam Michnik publikuje „Kościół, lewica, dialog"', category: 'opozycja', entryId: 'michnik' },
  { year: 1981, event: 'Pierwszy numer „Gazety Wyborczej" (8 maja 1989)', category: 'polityka', entryId: 'michnik' },
  { year: 1949, event: 'Powołanie RWPG – blok wschodni tworzy wspólnotę gospodarczą', category: 'gospodarka', entryId: 'rwpg' },
  { year: 1957, event: 'Andrzej Wajda – „Kanał" i narodziny Polskiej Szkoły Filmowej', category: 'kultura', entryId: 'wajda' },
  { year: 1981, event: 'Wajda zdobywa Złotą Palmę za „Człowieka z żelaza"', category: 'kultura', entryId: 'wajda' },
  { year: 1988, event: 'Kieślowski nakręca „Dekalog" – arcydzieło kina telewizyjnego', category: 'kultura', entryId: 'kieslowski' },
  { year: 1980, event: 'Czesław Miłosz laureatem literackiej Nagrody Nobla', category: 'kultura', entryId: 'milosz' },
  { year: 1996, event: 'Wisława Szymborska laureatką Nagrody Nobla w dziedzinie literatury', category: 'kultura', entryId: 'szymborska' },
  { year: 1961, event: 'Stanisław Lem wydaje „Solaris" – arcydzieło literatury SF', category: 'kultura', entryId: 'lem' },
  { year: 1946, event: 'Sfałszowane referendum 3xTAK – PSL Mikołajczyka pokonane', category: 'polityka', entryId: 'mikolajczyk' },
  { year: 1947, event: 'Ucieczka Mikołajczyka z Polski – koniec legalnej opozycji', category: 'polityka', entryId: 'mikolajczyk' },
  { year: 1981, event: 'Nocna operacja „Jodła" – 10 000 działaczy Solidarności internowanych', category: 'represje', entryId: 'internowanie' },
  { year: 1945, event: 'Wysiedlenia Niemców z Ziem Odzyskanych – 12 mln wypędzonych', category: 'polityka', entryId: 'ziemie-odzyskane' },
  { year: 1946, event: 'Obóz w Jaworznie – 24 000 więźniów politycznych w szczytowym okresie', category: 'represje', entryId: 'obozy-pracy' },
  { year: 1973, event: 'Produkcja Fiata 126p „Maluch" – ikona motoryzacji PRL', category: 'społeczeństwo', entryId: 'motoryzacja-prl' },
  { year: 1999, event: 'Polska wstępuje do NATO – dzieło dyplomacji Geremka', category: 'polityka', entryId: 'geremek' },
  { year: 1956, event: 'Robotniczy protest w Poznaniu – 57 zabitych, pierwsze przebudzenie', category: 'opozycja', entryId: 'walczynski-opor' },
  { year: 1953, event: 'Ryszard Kapuściński debiutuje w prasie – początek kariery reporterskiej', category: 'kultura', entryId: 'kapuscinski' },
  { year: 1948, event: 'Powstanie PZPR z fuzji PPR i PPS – stalinizm triumfuje', category: 'polityka', entryId: 'ppkwn' },
  { year: 1979, event: 'I Pielgrzymka Jana Pawła II – „Niech zstąpi Duch Twój i odnowi tę ziemię"', category: 'społeczeństwo', entryId: 'pielgrzymki-jp2' },
  { year: 1983, event: 'II Pielgrzymka – papież spotyka się z Wałęsą w stanie wojennym', category: 'społeczeństwo', entryId: 'pielgrzymki-jp2' },
  { year: 1970, event: '17 grudnia – masakra robotników w Gdyni i Gdańsku', category: 'represje', entryId: 'gdansk-sopot-gdynia' },
  { year: 1980, event: 'Stocznia Gdańska – kolebka Solidarności', category: 'opozycja', entryId: 'gdansk-sopot-gdynia' },
  { year: 1980, event: 'Zwolnienie Anny Walentynowicz – iskra sierpniowego strajku', category: 'opozycja', entryId: 'walentynowicz' },
  { year: 1980, event: 'Rejestracja NZS – pierwsza niezależna organizacja studencka w bloku wschodnim', category: 'opozycja', entryId: 'nzs' },
  { year: 1966, event: 'Kołakowski wyrzucony z PZPR za referat krytykujący rządy Gomułki', category: 'polityka', entryId: 'kolakowski' },
  { year: 1956, event: 'Kabaret studencki i Piwnica pod Baranami – odwilż w kulturze', category: 'kultura', entryId: 'kabaret-prl' },
  { year: 1948, event: 'Państwowa Wyższa Szkoła Filmowa w Łodzi – narodziny kuźni polskiego kina', category: 'kultura', entryId: 'lodz-szkola-filmowa' },
];
