import { useState, useEffect } from 'react';
import {
  archiwaRelacji,
  pytaniaPomocnicze,
  zasadyNagrywania,
  KLUCZ_RELACJI,
  type WlasnaRelacja,
} from '../data/oralHistory';

interface OralHistoryPageProps {
  onNavigate: (view: string, id?: string) => void;
}

type Zakladka = 'archiwa' | 'wlasne' | 'jak-nagrywac';

/** Relacje użytkownika trzymamy w przeglądarce — strona jest statyczna i nie ma serwera. */
function wczytajRelacje(): WlasnaRelacja[] {
  try {
    const zapis = localStorage.getItem(KLUCZ_RELACJI);
    return zapis ? (JSON.parse(zapis) as WlasnaRelacja[]) : [];
  } catch {
    return [];
  }
}

function zapiszRelacje(relacje: WlasnaRelacja[]): boolean {
  try {
    localStorage.setItem(KLUCZ_RELACJI, JSON.stringify(relacje));
    return true;
  } catch {
    return false;
  }
}

export default function OralHistoryPage({ onNavigate }: OralHistoryPageProps) {
  const [zakladka, setZakladka] = useState<Zakladka>('archiwa');
  const [relacje, setRelacje] = useState<WlasnaRelacja[]>([]);
  const [blokada, setBlokada] = useState(false);
  const [formularz, setFormularz] = useState({ autor: '', rocznik: '', miejsce: '', temat: '', tresc: '' });
  const [komunikat, setKomunikat] = useState<string | null>(null);

  useEffect(() => {
    setRelacje(wczytajRelacje());
  }, []);

  const dodaj = () => {
    if (formularz.tresc.trim().length < 30) {
      setKomunikat('Relacja jest bardzo krótka — napisz przynajmniej kilka zdań.');
      return;
    }
    const nowa: WlasnaRelacja = {
      id: String(Date.now()),
      autor: formularz.autor.trim() || 'Anonim',
      rocznik: formularz.rocznik.trim(),
      miejsce: formularz.miejsce.trim(),
      temat: formularz.temat.trim(),
      tresc: formularz.tresc.trim(),
      dodano: new Date().toLocaleDateString('pl'),
    };
    const kolejne = [nowa, ...relacje];
    setRelacje(kolejne);
    if (!zapiszRelacje(kolejne)) {
      setBlokada(true);
      setKomunikat('Nie udało się zapisać w pamięci przeglądarki — relacja zniknie po zamknięciu karty. Pobierz ją do pliku.');
    } else {
      setKomunikat('Zapisano w tej przeglądarce.');
    }
    setFormularz({ autor: '', rocznik: '', miejsce: '', temat: '', tresc: '' });
  };

  const usun = (id: string) => {
    const kolejne = relacje.filter(r => r.id !== id);
    setRelacje(kolejne);
    zapiszRelacje(kolejne);
    setKomunikat(null);
  };

  const pobierz = () => {
    const tekst = relacje
      .map(r =>
        `RELACJA\nAutor: ${r.autor}\nRocznik: ${r.rocznik || '—'}\nMiejsce: ${r.miejsce || '—'}\n` +
        `Temat: ${r.temat || '—'}\nSpisano: ${r.dodano}\n\n${r.tresc}\n`
      )
      .join('\n' + '—'.repeat(60) + '\n\n');
    const blob = new Blob([tekst], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'relacje-prl.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-[#1a0a00] to-[#3d0000] text-white rounded-2xl p-8 mb-6 text-center">
        <div className="text-4xl mb-3">💬</div>
        <h2 className="text-3xl font-bold font-serif mb-2">Relacje świadków</h2>
        <p className="text-red-200 max-w-2xl mx-auto leading-relaxed">
          Historia mówiona PRL: gdzie słuchać nagranych wspomnień, jak nagrać własne
          i miejsce na spisanie swojej relacji.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {([
          { id: 'archiwa', ikona: '🎧', etykieta: 'Gdzie słuchać relacji' },
          { id: 'wlasne', ikona: '✍️', etykieta: 'Spisz własną' },
          { id: 'jak-nagrywac', ikona: '🎙️', etykieta: 'Jak nagrywać' },
        ] as { id: Zakladka; ikona: string; etykieta: string }[]).map(z => (
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

      {zakladka === 'archiwa' && (
        <>
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 mb-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              Encyklopedia nie publikuje wymyślonych wspomnień. Relacja świadka jest źródłem tylko wtedy,
              gdy stoi za nią konkretna osoba i konkretne nagranie — dlatego zamiast cytatów bez autora
              znajdziesz tu odesłania do archiwów, które takie nagrania gromadzą i udostępniają.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {archiwaRelacji.map(a => (
              <a
                key={a.id}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl border border-stone-200 shadow-sm p-5 hover:border-red-300 hover:shadow transition-all block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold font-serif text-gray-900 leading-snug">{a.nazwa}</h3>
                  <span className="text-red-700 text-sm shrink-0">↗</span>
                </div>
                <p className="text-xs text-red-700 font-medium mb-2">{a.instytucja}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{a.opis}</p>
                <span className="inline-block text-xs text-gray-500 bg-stone-100 rounded px-2 py-1">{a.zakres}</span>
              </a>
            ))}
          </div>

          <div className="mt-5 bg-white rounded-xl border border-stone-200 shadow-sm p-6">
            <h3 className="font-bold font-serif text-gray-900 mb-2">Nagrania w hasłach encyklopedii</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Część haseł ma podpięte rozmowy i wspomnienia uczestników wydarzeń — wywiady, wykłady
              i materiały archiwalne. Znajdziesz je w sekcji zasobów przy konkretnym haśle.
            </p>
            <button
              onClick={() => onNavigate('archives')}
              className="text-sm text-red-700 hover:text-red-900 font-medium"
            >
              Przejdź do archiwum zasobów →
            </button>
          </div>
        </>
      )}

      {zakladka === 'wlasne' && (
        <>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-5 text-sm text-amber-900 leading-relaxed">
            <strong>Gdzie trafia to, co napiszesz.</strong> Strona działa bez serwera, więc relacja zapisuje się
            wyłącznie w tej przeglądarce, na tym urządzeniu. Nikt inny jej nie zobaczy, a wyczyszczenie danych
            przeglądarki ją usunie. Żeby zachować tekst na stałe albo przekazać go archiwum, pobierz go do pliku.
          </div>

          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 mb-5">
            <h3 className="font-bold font-serif text-gray-900 mb-4">Spisz relację</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-3">
              <input
                type="text" value={formularz.autor}
                onChange={e => setFormularz({ ...formularz, autor: e.target.value })}
                placeholder="Kto opowiada (imię lub inicjały)"
                className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text" value={formularz.rocznik}
                onChange={e => setFormularz({ ...formularz, rocznik: e.target.value })}
                placeholder="Rocznik (np. 1954)"
                className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text" value={formularz.miejsce}
                onChange={e => setFormularz({ ...formularz, miejsce: e.target.value })}
                placeholder="Miejsce (np. Elbląg)"
                className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="text" value={formularz.temat}
                onChange={e => setFormularz({ ...formularz, temat: e.target.value })}
                placeholder="Czego dotyczy (np. stan wojenny)"
                className="px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <textarea
              value={formularz.tresc}
              onChange={e => setFormularz({ ...formularz, tresc: e.target.value })}
              placeholder="Wspomnienie — najlepiej konkret: jeden dzień, jedna sytuacja, to, co widziałeś sam."
              rows={7}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={dodaj}
                className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Zapisz relację
              </button>
              {relacje.length > 0 && (
                <button
                  onClick={pobierz}
                  className="px-5 py-2.5 border border-stone-300 hover:border-red-300 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                >
                  Pobierz wszystkie do pliku
                </button>
              )}
              {komunikat && (
                <span className={`text-sm ${blokada ? 'text-red-700' : 'text-gray-500'}`}>{komunikat}</span>
              )}
            </div>
          </div>

          {relacje.length === 0 ? (
            <div className="bg-white rounded-xl border border-dashed border-stone-300 p-8 text-center text-gray-500 text-sm">
              Nie ma jeszcze żadnej relacji zapisanej w tej przeglądarce.
              <br />
              Jeśli nie wiesz, od czego zacząć, zajrzyj do zakładki „Jak nagrywać” — są tam pytania pomocnicze.
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-bold font-serif text-gray-900">
                Zapisane relacje <span className="text-gray-400 font-normal text-sm">({relacje.length})</span>
              </h3>
              {relacje.map(r => (
                <article key={r.id} className="bg-white rounded-xl border border-stone-200 shadow-sm p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="font-semibold text-gray-900">{r.autor}</span>
                      {r.rocznik && <span className="text-gray-500 text-sm"> · rocznik {r.rocznik}</span>}
                      {r.miejsce && <span className="text-gray-500 text-sm"> · {r.miejsce}</span>}
                    </div>
                    <button
                      onClick={() => usun(r.id)}
                      className="text-xs text-gray-400 hover:text-red-700 transition-colors shrink-0"
                      title="Usuń z tej przeglądarki"
                    >
                      Usuń
                    </button>
                  </div>
                  {r.temat && (
                    <span className="inline-block text-xs text-red-700 bg-red-50 rounded px-2 py-0.5 mb-2">{r.temat}</span>
                  )}
                  <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">{r.tresc}</p>
                  <p className="text-xs text-gray-400 mt-3">Spisano {r.dodano}</p>
                </article>
              ))}
            </div>
          )}
        </>
      )}

      {zakladka === 'jak-nagrywac' && (
        <>
          <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6 mb-5">
            <h3 className="font-bold font-serif text-gray-900 mb-3">Sześć zasad, które decydują o wartości relacji</h3>
            <ol className="space-y-2.5">
              {zasadyNagrywania.map((z, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-700 text-white text-xs flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <span>{z}</span>
                </li>
              ))}
            </ol>
          </div>

          <h3 className="font-bold font-serif text-gray-900 mb-3">O co pytać</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {pytaniaPomocnicze.map(b => (
              <div key={b.temat} className="bg-white rounded-xl border border-stone-200 shadow-sm p-5">
                <h4 className="font-semibold text-gray-900 mb-3">
                  <span className="mr-2">{b.ikona}</span>{b.temat}
                </h4>
                <ul className="space-y-2">
                  {b.pytania.map((p, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                      <span className="text-red-600 shrink-0">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-stone-100 rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
            Jeśli nagranie ma trafić do archiwum, warto skontaktować się z Ośrodkiem KARTA albo Domem Spotkań
            z Historią — obie instytucje przyjmują relacje od osób prywatnych i mają opracowane procedury
            zgody oraz opisu nagrania. Adresy są w zakładce „Gdzie słuchać relacji”.
          </div>
        </>
      )}
    </div>
  );
}
