// Słownik języka i slangu epoki PRL.

export interface SlangTerm {
  term: string;
  definition: string;
  example?: string;
  category: 'codzienność' | 'gospodarka' | 'władza' | 'propaganda';
}

export const slangCategories: Record<SlangTerm['category'], { label: string; icon: string }> = {
  'codzienność': { label: 'Życie codzienne', icon: '🏚️' },
  'gospodarka': { label: 'Niedobory i handel', icon: '🛒' },
  'władza': { label: 'Władza i aparat', icon: '🏛️' },
  'propaganda': { label: 'Propaganda i nowomowa', icon: '📢' },
};

export const slangTerms: SlangTerm[] = [
  {
    term: 'Kombinować',
    definition: 'Zdobywać dobra lub załatwiać sprawy nieoficjalnymi, sprytnymi sposobami w warunkach permanentnego niedoboru. Kluczowa umiejętność przetrwania w PRL.',
    example: '„Musisz kombinować, w sklepie i tak nic nie ma”.',
    category: 'codzienność',
  },
  {
    term: 'Załatwić',
    definition: 'Zdobyć coś deficytowego dzięki znajomościom, łapówce lub układom, a nie przez normalny zakup.',
    example: '„Załatwiłem przez szwagra telewizor kolorowy”.',
    category: 'codzienność',
  },
  {
    term: 'Cinkciarz',
    definition: 'Nielegalny handlarz walutą obcą (od zniekształconego ang. „change money”). Działał wokół hoteli i Pewexów.',
    example: '„Cinkciarz pod Orbisem dawał lepszy kurs dolara”.',
    category: 'gospodarka',
  },
  {
    term: 'Pewex',
    definition: 'Sieć sklepów Przedsiębiorstwa Eksportu Wewnętrznego, gdzie za waluty wymienialne i bony kupowało się towary niedostępne w zwykłych sklepach.',
    example: '„Dżinsy i colę można było dostać tylko w Peweksie”.',
    category: 'gospodarka',
  },
  {
    term: 'Bon towarowy',
    definition: 'Zastępczy środek płatniczy (bony PeKaO) wymienialny w Pewexie zamiast zakazanej dewizy.',
    category: 'gospodarka',
  },
  {
    term: 'Kartki',
    definition: 'Reglamentacyjne talony uprawniające do zakupu ściśle racjonowanych towarów (cukier, mięso, masło, benzyna) – masowo od 1981 r.',
    example: '„Bez kartek nie kupisz mięsa”.',
    category: 'gospodarka',
  },
  {
    term: 'Rzucili',
    definition: 'Określenie nagłej, nieprzewidywalnej dostawy deficytowego towaru do sklepu.',
    example: '„Rzucili papier toaletowy, leć szybko!”.',
    category: 'gospodarka',
  },
  {
    term: 'Ogonek / kolejka',
    definition: 'Długa kolejka przed sklepem; stanie w niej (często na zmiany całą rodziną) było codziennością. Istniały „społeczne komitety kolejkowe”.',
    example: '„Stałam w ogonku po pralkę od świtu”.',
    category: 'codzienność',
  },
  {
    term: 'Maluch',
    definition: 'Pieszczotliwa nazwa Fiata 126p – najpopularniejszego, miniaturowego samochodu PRL produkowanego na licencji włoskiej.',
    example: '„Wcisnęliśmy się czwórką do malucha”.',
    category: 'codzienność',
  },
  {
    term: 'Totalizator / totek',
    definition: 'Potoczne nazwy gier liczbowych Totalizatora Sportowego (Toto-Lotek) – marzenie o wygranej jako odskocznia od szarości.',
    category: 'codzienność',
  },
  {
    term: 'Badylarz',
    definition: 'Pogardliwe określenie prywatnego ogrodnika lub rolnika, który dorabiał się na handlu warzywami i kwiatami – symbol „prywatnej inicjatywy”.',
    category: 'gospodarka',
  },
  {
    term: 'Prywaciarz',
    definition: 'Właściciel prywatnego warsztatu, sklepu lub zakładu rzemieślniczego – tolerowany, lecz podejrzany element w gospodarce państwowej.',
    category: 'gospodarka',
  },
  {
    term: 'Teczka',
    definition: 'Akta zakładane przez Służbę Bezpieczeństwa na inwigilowanego obywatela. „Mieć teczkę” znaczyło być na celowniku bezpieki.',
    example: '„SB założyła mu teczkę po wstąpieniu do Solidarności”.',
    category: 'władza',
  },
  {
    term: 'Bezpieka',
    definition: 'Potoczna nazwa aparatu bezpieczeństwa – UB, a później SB.',
    category: 'władza',
  },
  {
    term: 'Ubek / esbek',
    definition: 'Funkcjonariusz Urzędu Bezpieczeństwa (ubek) lub Służby Bezpieczeństwa (esbek).',
    category: 'władza',
  },
  {
    term: 'TW (tajny współpracownik)',
    definition: 'Osoba donosząca tajnie do SB. Werbunek odbywał się przez szantaż, korzyści lub naciski.',
    category: 'władza',
  },
  {
    term: 'Pała / pałkarz',
    definition: 'Potoczne określenie milicjanta oraz funkcjonariusza ZOMO, używającego pałki podczas pacyfikacji.',
    category: 'władza',
  },
  {
    term: 'Suka',
    definition: 'Milicyjna furgonetka do przewozu zatrzymanych.',
    example: '„Wrzucili demonstrantów do suki”.',
    category: 'władza',
  },
  {
    term: 'Ścieżka zdrowia',
    definition: 'Eufemizm na brutalne bicie zatrzymanych przez milicjantów ustawionych w szpaler – stosowane m.in. po Czerwcu 1976.',
    category: 'władza',
  },
  {
    term: 'Czterdziestka / czterolatka',
    definition: 'Nieformalne nazwy planów gospodarczych i pięciolatek – obietnic „dogonienia Zachodu”.',
    category: 'propaganda',
  },
  {
    term: 'Propaganda sukcesu',
    definition: 'Lansowany w mediach (zwłaszcza za Gierka) obraz nieustannych osiągnięć gospodarczych, rozmijający się z rzeczywistością.',
    example: '„Dziennik trąbił propagandę sukcesu, a w sklepach pustki”.',
    category: 'propaganda',
  },
  {
    term: 'Nowomowa',
    definition: 'Sztuczny, zideologizowany język oficjalnej propagandy, pełen sloganów („wytężona praca”, „słuszny gniew ludu”).',
    category: 'propaganda',
  },
  {
    term: 'Bratnie narody / kraje demoludy',
    definition: 'Określenie państw bloku wschodniego („kraje demokracji ludowej”) jako „bratniej” wspólnoty pod przywództwem ZSRR.',
    category: 'propaganda',
  },
  {
    term: 'Pomożecie?',
    definition: 'Słynne pytanie Edwarda Gierka do robotników (1971), na które odpowiadano „Pomożemy!” – symbol pozornego dialogu władzy ze społeczeństwem.',
    category: 'propaganda',
  },
  {
    term: 'Wczasy pod gruszą',
    definition: 'Dofinansowany przez zakład pracy, samodzielnie organizowany wypoczynek (zamiast wczasów w ośrodku FWP).',
    category: 'codzienność',
  },
  {
    term: 'Pekaes',
    definition: 'Państwowa Komunikacja Samochodowa – sieć autobusów łączących miasta i wsie; synonim dalekiej podróży.',
    category: 'codzienność',
  },
  {
    term: 'Społem / Samopomoc',
    definition: 'Spółdzielnie handlowe („Społem” w miastach, „Samopomoc Chłopska” na wsi) – podstawowa sieć sklepów.',
    category: 'gospodarka',
  },
  {
    term: 'Delikatesy',
    definition: 'Lepiej zaopatrzony sklep spożywczy z towarami „luksusowymi” – i tak skromny wedle zachodnich standardów.',
    category: 'gospodarka',
  },
  {
    term: 'Bibuła',
    definition: 'Nielegalne, podziemne wydawnictwa drugiego obiegu – książki, ulotki i pisma drukowane poza cenzurą.',
    example: '„Przepisywał bibułę na powielaczu w piwnicy”.',
    category: 'codzienność',
  },
  {
    term: 'Drugi obieg',
    definition: 'Niezależny od cenzury obieg wydawniczy i kulturalny – wydawnictwa, koncerty, wykłady poza kontrolą państwa.',
    category: 'codzienność',
  },
  {
    term: 'Spacerkiem zamiast Dziennika',
    definition: 'Forma cichego protestu w stanie wojennym – wychodzenie na spacer w porze emisji Dziennika Telewizyjnego.',
    category: 'propaganda',
  },
  {
    term: 'Komitet (KW, KC)',
    definition: 'Struktury PZPR: Komitet Centralny, komitety wojewódzkie, zakładowe – realne ośrodki władzy obok administracji.',
    category: 'władza',
  },
  {
    term: 'Nomenklatura',
    definition: 'System obsadzania stanowisk wyłącznie zaufanymi członkami partii; też – uprzywilejowana warstwa działaczy.',
    category: 'władza',
  },
  {
    term: 'Czyn społeczny',
    definition: '„Dobrowolna”, nieodpłatna praca na rzecz państwa (np. sprzątanie, budowa), często faktycznie przymusowa.',
    category: 'propaganda',
  },
  {
    term: 'Stójka / godzina milicyjna',
    definition: 'Zakaz przebywania na ulicach w określonych godzinach, wprowadzony w stanie wojennym.',
    category: 'władza',
  },
  {
    term: 'Baltona',
    definition: 'Sieć sklepów walutowych obsługujących marynarzy i podróżnych – obok Pewexu źródło towarów z Zachodu.',
    category: 'gospodarka',
  },
  {
    term: 'Aparatczyk',
    definition: 'Etatowy działacz partyjny lub urzędnik aparatu PZPR – symbol bezdusznej, dbającej o własne przywileje biurokracji.',
    category: 'władza',
  },
  {
    term: 'Cześć pracy!',
    definition: 'Oficjalne, propagandowe powitanie lansowane wśród robotników i działaczy zamiast tradycyjnych form grzecznościowych.',
    category: 'propaganda',
  },
  {
    term: 'Spod lady',
    definition: 'Sprzedaż towaru deficytowego wybranym klientom „spod lady”, z pominięciem kolejki, za łapówkę lub w ramach układów.',
    example: '„Wędlinę trzymali spod lady dla swoich”.',
    category: 'gospodarka',
  },
  {
    term: 'Krasnoludki',
    definition: 'Symbol Pomarańczowej Alternatywy – malowane na murach skrzaty i happeningi ośmieszające absurdalnie aparat władzy.',
    category: 'codzienność',
  },
  {
    term: 'Saturator',
    definition: 'Uliczny automat lub stoisko z wodą sodową „z sokiem”, pite ze wspólnej, jedynie płukanej szklanki – ikona miejskiego lata.',
    category: 'codzienność',
  },
  {
    term: 'Pasztet / talon',
    definition: 'Talon (np. na samochód, pralkę) przydzielany w zakładzie pracy – „wygrany” przydział na towar, na który i tak czekało się latami.',
    category: 'gospodarka',
  },
  {
    term: 'Bikiniarze',
    definition: 'Powojenna subkultura młodzieżowa fascynująca się amerykańską modą i jazzem; barwne krawaty i fryzury były cichym buntem przeciw szarości stalinizmu.',
    category: 'codzienność',
  },
  {
    term: 'Stonka',
    definition: 'Stonka ziemniaczana – przedmiot absurdalnej kampanii propagandowej z lat 50., oskarżającej „amerykańskich imperialistów” o zrzucanie szkodnika na polskie pola.',
    example: '„Dzieci pędzono do zbierania stonki z pól”.',
    category: 'propaganda',
  },
  {
    term: 'Pan władza',
    definition: 'Ironiczno-uległe określenie milicjanta lub urzędnika, podkreślające dystans między obywatelem a wszechwładną „władzą”.',
    category: 'władza',
  },
  {
    term: 'Gierkówka',
    definition: 'Trasa szybkiego ruchu Warszawa–Katowice (oraz wielkopłytowe budownictwo) – symbol inwestycji i „propagandy sukcesu” dekady Gierka.',
    category: 'gospodarka',
  },
  {
    term: 'Kapuś / donosiciel',
    definition: 'Osoba donosząca do milicji lub SB. Jedno z najcięższych oskarżeń w środowiskach robotniczych i opozycyjnych.',
    category: 'władza',
  },
  {
    term: 'Świetlica',
    definition: 'Zakładowy lub osiedlowy lokal kultury – miejsce zebrań, akademii i „pracy oświatowej”, łączące rozrywkę z indoktrynacją.',
    category: 'codzienność',
  },
  {
    term: 'Dewizy',
    definition: 'Waluty wymienialne (dolary, marki). Ich posiadanie było reglamentowane; „konto dewizowe” i bony dawały dostęp do Pewexu.',
    category: 'gospodarka',
  },
  {
    term: 'Tysiąclatka',
    definition: 'Potoczna nazwa Szkoły Tysiąclecia – jednej z tysiąca szkół wybudowanych na obchody Tysiąclecia Państwa Polskiego (1966).',
    category: 'codzienność',
  },
  {
    term: 'Akademia',
    definition: 'Uroczysta „akademia ku czci” z okazji rocznic i świąt państwowych – obowiązkowy, sztampowy spektakl z przemówieniami i występami.',
    example: '„Cała szkoła na akademię z okazji rewolucji październikowej”.',
    category: 'propaganda',
  },
  {
    term: 'Książeczka mieszkaniowa',
    definition: 'Oszczędnościowa książeczka PKO uprawniająca do przydziału mieszkania w spółdzielni – na lokal czekało się jednak nawet kilkanaście lat.',
    category: 'gospodarka',
  },
  {
    term: 'Delegacja',
    definition: 'Podróż służbowa i rozliczana za nią dieta; „delegówka” bywała sposobem na dorobienie i załatwianie prywatnych spraw przy okazji wyjazdu.',
    category: 'codzienność',
  },
  {
    term: 'Fajrant',
    definition: 'Koniec dniówki, zakończenie pracy. „Robić fajrant” oznaczało też wcześniejsze odpuszczenie obowiązków.',
    category: 'codzienność',
  },
  {
    term: 'Lewizna',
    definition: 'Towar lub dochód zdobyty nielegalnie, „na lewo” – poza ewidencją, z kradzieży mienia państwowego lub szarej strefy.',
    example: '„Materiały budowlane szły na lewiznę z państwowej budowy”.',
    category: 'gospodarka',
  },
  {
    term: 'Melina',
    definition: 'Nielegalny punkt sprzedaży alkoholu (zwłaszcza po godzinach lub bimbru) albo miejsce schadzek i ukrywania się.',
    category: 'codzienność',
  },
  {
    term: 'Prywatka',
    definition: 'Domowa impreza taneczna młodzieży – z adapterem, płytami i tańcami, namiastka rozrywki w prywatnym mieszkaniu.',
    category: 'codzienność',
  },
  {
    term: 'Czarna wołga',
    definition: 'Miejska legenda o czarnej limuzynie Wołga porywającej dzieci – odzwierciedlała lęk przed wszechwładną, anonimową „władzą”.',
    category: 'codzienność',
  },
  {
    term: 'Peerel',
    definition: 'Potoczna, często ironiczna nazwa Polskiej Rzeczypospolitej Ludowej; dziś synonim całej epoki 1944–1989 i jej absurdów.',
    category: 'codzienność',
  },
];
