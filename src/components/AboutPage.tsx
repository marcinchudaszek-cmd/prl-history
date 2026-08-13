interface AboutPageProps {
  onNavigate: (view: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const completedFeatures = [
    { icon: '📇', title: 'Baza blisko 500 haseł', desc: 'Hasła z rozbudowanymi opisami, ilustracjami, kronikami filmowymi i sprawdzonymi linkami do źródeł' },
    { icon: '🔍', title: 'Wyszukiwarka encyklopedii', desc: 'Przeszukiwanie haseł, tagów i opisów w całej bazie wiedzy' },
    { icon: '🕰️', title: 'Oś czasu wydarzeń', desc: 'Interaktywna chronologia 1944–1990 z filtrowaniem po dekadach i kategoriach' },
    { icon: '🗺️', title: 'Interaktywna mapa PRL', desc: 'Miejsca represji, strajków, ośrodków oporu i kultury na mapie Polski' },
    { icon: '👤', title: 'Biogramy postaci', desc: 'Profile przywódców, dysydentów, twórców i ofiar systemu, pogrupowane tematycznie' },
    { icon: '🏚️', title: 'Słownik slangu PRL', desc: '„Kombinowanie”, „cinkciarz”, „teczka”, „ścieżka zdrowia” – język epoki z wyjaśnieniami' },
    { icon: '🗂️', title: 'Archiwum zasobów cyfrowych', desc: 'Katalog instytucji i archiwów (IPN, AAN, NINATEKA) z linkami do źródeł' },
    { icon: '📰', title: 'Archiwum prasy PRL', desc: 'Skany „Trybuny Ludu”, prasy katolickiej i wydawnictw drugiego obiegu' },
    { icon: '🎓', title: 'Quiz wiedzy o PRL', desc: 'Pytania układane za każdym razem od nowa z haseł, ciekawostek i osi czasu' },
    { icon: '🎲', title: 'Losowe hasło', desc: 'Skok do przypadkowego hasła – sposób na natrafienie na coś, czego się nie szukało' },
    { icon: '🔤', title: 'Indeks alfabetyczny', desc: 'Wszystkie hasła od A do Z, ze skokami literowymi i filtrem kategorii' },
    { icon: '⇄', title: 'Porównanie haseł', desc: 'Dwa hasła obok siebie: zakres lat, obudowa źródłowa, zawartość i wspólne tagi' },
    { icon: '📅', title: 'Filtr dekad', desc: 'Zawężanie encyklopedii do lat 40., 50., 60., 70. lub 80.' },
  ];

  const plannedFeatures = [
    { icon: '💬', title: 'Oral history – relacje świadków', desc: 'Nagrane wspomnienia osób pamiętających czasy PRL, z możliwością dodawania własnych' },
    { icon: '📊', title: 'Infografiki gospodarcze', desc: 'Interaktywne wykresy długu, cen, PKB, reglamentacji i porównania z Zachodem' },
    { icon: '🌐', title: 'Wielojęzyczność', desc: 'Wersje w języku angielskim i niemieckim dla zagranicznych badaczy i Polonii' },
    { icon: '⭐', title: 'Zakładki i notatki', desc: 'System osobistych zakładek i notatek dla użytkowników zalogowanych' },
    { icon: '📡', title: 'API dla badaczy', desc: 'Otwarty interfejs API umożliwiający pobieranie danych do badań naukowych' },
    { icon: '🤝', title: 'Współpraca z IPN i ECS', desc: 'Integracja z oficjalnymi archiwami cyfrowymi instytucji historycznych' },
  ];

  const sources = [
    'Instytut Pamięci Narodowej (IPN)',
    'Archiwum Akt Nowych (AAN)',
    'Europejskie Centrum Solidarności (ECS)',
    'Filmoteka Narodowa – NINATEKA',
    'Biblioteka Narodowa – POLONA',
    'Szukaj w Archiwach (NDAP)',
    'Wikipedia Polska – Portal: Polska Ludowa',
    'Encyklopedia PWN',
    'Fundacja Archiwum Dokumentacji Historycznej PRL',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-10 mb-10 text-center">
        <div className="text-5xl mb-4">📚</div>
        <h2 className="text-3xl font-bold font-serif mb-3">O projekcie</h2>
        <p className="text-red-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Encyklopedia PRL to cyfrowe archiwum wiedzy o Polskiej Rzeczpospolitej Ludowej – 
          pierwsza tego rodzaju platforma łącząca hasła encyklopedyczne z bezpośrednimi 
          linkami do zasobów archiwalnych.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 mb-8">
        <h3 className="text-xl font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
          <span>🎯</span> Misja projektu
        </h3>
        <div className="prose prose-sm text-gray-700 space-y-4 leading-relaxed">
          <p>
            Encyklopedia PRL powstała z potrzeby stworzenia <strong>jednego, wiarygodnego miejsca</strong> 
            w internecie, gdzie można znaleźć rzetelne informacje o dziejach Polski Ludowej – 
            popartych dokumentami archiwalnymi, nagraniami i zdjęciami.
          </p>
          <p>
            Projekt łączy funkcję <strong>encyklopedii</strong> (hasła, biogramy, opisy wydarzeń) 
            z funkcją <strong>agregatora archiwów</strong> – każde hasło zawiera linki do 
            pierwotnych dokumentów z polskich i zagranicznych archiwów cyfrowych.
          </p>
          <p>
            Zależy nam na <strong>edukacji historycznej</strong> opartej na faktach i źródłach, 
            szczególnie dla młodego pokolenia, które nie pamięta tamtych czasów.
          </p>
        </div>
      </div>

      {/* Planned features */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 mb-8">
        <h3 className="text-xl font-bold font-serif text-gray-900 mb-2 flex items-center gap-2">
          <span>🚀</span> Mapa drogowa projektu
        </h3>
        <p className="text-sm text-gray-500 mb-6">Co już działa i co jeszcze powstanie w encyklopedii PRL</p>

        <h4 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3 flex items-center gap-2">
          <span>✅</span> Zrealizowane
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {completedFeatures.map((feat, i) => (
            <div key={i} className="flex gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <span className="text-2xl flex-shrink-0">{feat.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                  {feat.title}
                  <span className="text-green-600 text-xs">✓</span>
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-bold text-red-700 uppercase tracking-wide mb-3 flex items-center gap-2">
          <span>🛠️</span> W planach
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {plannedFeatures.map((feat, i) => (
            <div key={i} className="flex gap-3 p-4 bg-stone-50 rounded-lg border border-stone-200 hover:border-red-200 transition-colors">
              <span className="text-2xl flex-shrink-0">{feat.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{feat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-8 mb-8">
        <h3 className="text-xl font-bold font-serif text-gray-900 mb-5 flex items-center gap-2">
          <span>📖</span> Źródła i podstawy merytoryczne
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {sources.map(src => (
            <div key={src} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-green-500 flex-shrink-0">✓</span>
              {src}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            <strong>Zastrzeżenie:</strong> Encyklopedia PRL jest projektem edukacyjnym. 
            Treści haseł oparte są na powszechnie dostępnych źródłach historycznych i akademickich. 
            Linki do zasobów zewnętrznych prowadzą do stron instytucji publicznych i archiwalnych. 
            Projekt nie przechowuje i nie reprodukuje chronionych prawem autorskim materiałów.
          </p>
        </div>
      </div>

      {/* Contact / Contribute */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-3">🤝</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Chcesz pomóc w projekcie?</h3>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Szukamy historyków, archiwistów i pasjonatów historii PRL. 
          Możesz pomóc w rozbudowie bazy haseł, weryfikacji faktów i pozyskiwaniu zasobów archiwalnych.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => onNavigate('encyclopedia')}
            className="px-6 py-2.5 bg-red-700 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-semibold"
          >
            📖 Przeglądaj encyklopedię
          </button>
          <button
            onClick={() => onNavigate('archives')}
            className="px-6 py-2.5 bg-white text-gray-700 border border-stone-200 rounded-lg hover:border-red-300 transition-colors text-sm font-semibold"
          >
            🗂️ Archiwum zasobów
          </button>
        </div>
      </div>

      {/* Footer info */}
      <div className="mt-8 text-center text-xs text-gray-400 space-y-1">
        <p>Encyklopedia PRL © 2024 | Projekt historyczno-edukacyjny</p>
        <p>Polska Rzeczpospolita Ludowa 1944–1989</p>
      </div>
    </div>
  );
}
