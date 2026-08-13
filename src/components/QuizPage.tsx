import { useMemo, useState } from 'react';
import { entries, categories, timelineEvents } from '../data/entries';
import type { Entry } from '../data/entries';

interface QuizPageProps {
  onNavigate: (view: string, id?: string) => void;
}

type QuestionKind = 'rok' | 'opis' | 'ciekawostka';

interface Question {
  kind: QuestionKind;
  prompt: string;
  quote?: string;
  options: string[];
  correct: number;
  entryId: string;
  entryTitle: string;
}

const ROUND = 10;
const MIN_YEAR = 1944;
const MAX_YEAR = 1990;

const kindLabel: Record<QuestionKind, string> = {
  rok: 'Data',
  opis: 'Hasło po opisie',
  ciekawostka: 'Ciekawostka',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Pytanie jest bezwartościowe, jeśli treść zdradza odpowiedź. */
function givesAwayAnswer(text: string, title: string): boolean {
  const clean = (s: string) =>
    s.toLowerCase().replace(/[„”"'.,–—-]/g, ' ').replace(/\s+/g, ' ').trim();
  const t = clean(text);
  const words = clean(title)
    .split(' ')
    .filter(w => w.length > 4);
  if (words.length === 0) return true;
  return words.every(w => t.includes(w));
}

function buildYearQuestion(): Question | null {
  const usable = timelineEvents.filter(
    e => e.entryId && e.year >= MIN_YEAR && e.year <= MAX_YEAR
  );
  if (usable.length === 0) return null;
  const ev = usable[Math.floor(Math.random() * usable.length)];
  const entry = entries.find(x => x.id === ev.entryId);
  if (!entry) return null;

  const years = new Set<number>([ev.year]);
  let guard = 0;
  while (years.size < 4 && guard++ < 60) {
    const delta = (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 12));
    const y = ev.year + delta;
    if (y >= MIN_YEAR && y <= MAX_YEAR) years.add(y);
  }
  if (years.size < 4) return null;

  const options = shuffle([...years]).map(String);
  return {
    kind: 'rok',
    prompt: 'W którym roku miało miejsce to wydarzenie?',
    quote: ev.event,
    options,
    correct: options.indexOf(String(ev.year)),
    entryId: entry.id,
    entryTitle: entry.title,
  };
}

function buildDescriptionQuestion(pool: Entry[]): Question | null {
  const usable = pool.filter(
    e => (e.summary || '').length > 70 && !givesAwayAnswer(e.summary || '', e.title)
  );
  if (usable.length < 1) return null;
  const entry = usable[Math.floor(Math.random() * usable.length)];

  // dystraktory z tej samej kategorii - inaczej pytanie jest zbyt łatwe
  const sameCat = entries.filter(e => e.category === entry.category && e.id !== entry.id);
  const others = pick(sameCat.length >= 3 ? sameCat : entries.filter(e => e.id !== entry.id), 3);
  if (others.length < 3) return null;

  const options = shuffle([entry.title, ...others.map(o => o.title)]);
  return {
    kind: 'opis',
    prompt: 'Którego hasła dotyczy ten opis?',
    quote: entry.summary,
    options,
    correct: options.indexOf(entry.title),
    entryId: entry.id,
    entryTitle: entry.title,
  };
}

function buildTriviaQuestion(pool: Entry[]): Question | null {
  const usable = pool.filter(e => (e.trivia || []).some(t => !givesAwayAnswer(t, e.title)));
  if (usable.length < 1) return null;
  const entry = usable[Math.floor(Math.random() * usable.length)];
  const facts = (entry.trivia || []).filter(t => !givesAwayAnswer(t, entry.title));
  const fact = facts[Math.floor(Math.random() * facts.length)];

  const others = pick(entries.filter(e => e.id !== entry.id && e.category === entry.category), 3);
  if (others.length < 3) return null;

  const options = shuffle([entry.title, ...others.map(o => o.title)]);
  return {
    kind: 'ciekawostka',
    prompt: 'Do którego hasła pasuje ta ciekawostka?',
    quote: fact,
    options,
    correct: options.indexOf(entry.title),
    entryId: entry.id,
    entryTitle: entry.title,
  };
}

function buildRound(): Question[] {
  const pool = entries;
  const plan: QuestionKind[] = shuffle([
    'rok', 'rok', 'rok', 'rok',
    'opis', 'opis', 'opis',
    'ciekawostka', 'ciekawostka', 'ciekawostka',
  ]);
  const out: Question[] = [];
  const used = new Set<string>();
  let guard = 0;

  while (out.length < ROUND && guard++ < 400) {
    const kind = plan[out.length % plan.length];
    const q =
      kind === 'rok'
        ? buildYearQuestion()
        : kind === 'opis'
        ? buildDescriptionQuestion(pool)
        : buildTriviaQuestion(pool);
    if (!q || used.has(q.entryId) || q.correct < 0) continue;
    used.add(q.entryId);
    out.push(q);
  }
  return out;
}

export default function QuizPage({ onNavigate }: QuizPageProps) {
  const [round, setRound] = useState(0);
  const questions = useMemo(() => buildRound(), [round]);
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[current];
  const finished = current >= questions.length;
  const score = answers.filter(Boolean).length;

  const choose = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    setAnswers(prev => [...prev, i === q.correct]);
  };

  const next = () => {
    setChosen(null);
    setCurrent(c => c + 1);
  };

  const restart = () => {
    setAnswers([]);
    setChosen(null);
    setCurrent(0);
    setRound(r => r + 1);
  };

  if (questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center text-gray-600">
        Nie udało się ułożyć pytań.
      </div>
    );
  }

  if (finished) {
    const verdict =
      score >= 9 ? 'Świetny wynik – znasz PRL od podszewki.'
      : score >= 7 ? 'Dobry wynik.'
      : score >= 4 ? 'Nieźle, ale jest czego poszukać w hasłach.'
      : 'Czas na lekturę haseł.';
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-8 text-center">
          <div className="text-sm uppercase tracking-widest text-red-700 font-semibold mb-2">
            Wynik
          </div>
          <div className="text-5xl font-bold text-gray-900 font-serif mb-2">
            {score} / {questions.length}
          </div>
          <p className="text-gray-600 mb-8">{verdict}</p>

          <div className="text-left border-t border-stone-100 pt-6 space-y-2 mb-8">
            {questions.map((item, i) => (
              <button
                key={i}
                onClick={() => onNavigate('entry', item.entryId)}
                className="w-full flex items-start gap-3 text-left px-3 py-2 rounded hover:bg-stone-50 transition-colors"
              >
                <span className={answers[i] ? 'text-green-600' : 'text-red-600'}>
                  {answers[i] ? '✓' : '✗'}
                </span>
                <span className="flex-1 text-sm text-gray-700">{item.entryTitle}</span>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {kindLabel[item.kind]}
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={restart}
              className="px-6 py-3 bg-red-700 hover:bg-red-600 text-white rounded-md font-medium transition-colors"
            >
              Zagraj jeszcze raz
            </button>
            <button
              onClick={() => onNavigate('encyclopedia')}
              className="px-6 py-3 border border-stone-300 hover:bg-stone-50 rounded-md font-medium transition-colors"
            >
              Przeglądaj hasła
            </button>
          </div>
        </div>
      </div>
    );
  }

  const cat = categories.find(c => c.id === entries.find(e => e.id === q.entryId)?.category);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900 font-serif">Quiz wiedzy o PRL</h2>
          <span className="text-sm text-gray-500">
            Pytanie {current + 1} z {questions.length}
          </span>
        </div>
        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-red-700 transition-all duration-300"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
        <div className="text-xs uppercase tracking-widest text-red-700 font-semibold mb-3">
          {kindLabel[q.kind]}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{q.prompt}</h3>

        {q.quote && (
          <blockquote className="border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-gray-800 mb-6 rounded-r">
            {q.quote}
          </blockquote>
        )}

        <div className="space-y-2">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.correct;
            const isChosen = i === chosen;
            let cls = 'border-stone-200 hover:border-red-300 hover:bg-stone-50';
            if (chosen !== null) {
              if (isCorrect) cls = 'border-green-500 bg-green-50';
              else if (isChosen) cls = 'border-red-500 bg-red-50';
              else cls = 'border-stone-200 opacity-60';
            }
            return (
              <button
                key={i}
                onClick={() => choose(i)}
                disabled={chosen !== null}
                className={`w-full text-left px-4 py-3 rounded-md border-2 transition-all ${cls}`}
              >
                <span className="text-gray-800">{opt}</span>
                {chosen !== null && isCorrect && (
                  <span className="float-right text-green-600 font-bold">✓</span>
                )}
                {chosen !== null && isChosen && !isCorrect && (
                  <span className="float-right text-red-600 font-bold">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {chosen !== null && (
          <div className="mt-6 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-3">
            <span className="text-sm text-gray-600">
              {chosen === q.correct ? 'Dobrze.' : 'Niestety, nie.'} Hasło:{' '}
              <button
                onClick={() => onNavigate('entry', q.entryId)}
                className="text-red-700 hover:text-red-800 font-medium underline underline-offset-2"
              >
                {q.entryTitle}
              </button>
              {cat && <span className="text-gray-400"> · {cat.label}</span>}
            </span>
            <button
              onClick={next}
              className="ml-auto px-5 py-2 bg-red-700 hover:bg-red-600 text-white rounded-md font-medium transition-colors"
            >
              {current + 1 === questions.length ? 'Zobacz wynik' : 'Następne pytanie'}
            </button>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Pytania układane są za każdym razem od nowa z {entries.length} haseł i{' '}
        {timelineEvents.length} wydarzeń osi czasu.
      </p>
    </div>
  );
}
