/* ============================================================
   LEVEL TEST SECTION — English With Barry
   Design: Warm sand background, interactive quiz card
   A mini 5-question English level test with results
   ============================================================ */

import { useState, useRef, useEffect } from "react";
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const questions = [
  {
    q: "Choose the correct sentence:",
    options: [
      "She don't like coffee.",
      "She doesn't likes coffee.",
      "She doesn't like coffee.",
      "She not like coffee.",
    ],
    correct: 2,
  },
  {
    q: "What is the past tense of 'go'?",
    options: ["Goed", "Went", "Gone", "Going"],
    correct: 1,
  },
  {
    q: "Complete: 'I have been living here ___ 2010.'",
    options: ["for", "since", "from", "during"],
    correct: 1,
  },
  {
    q: "Which sentence uses the Present Perfect correctly?",
    options: [
      "I have seen that film yesterday.",
      "I saw that film already.",
      "I have already seen that film.",
      "I did see that film.",
    ],
    correct: 2,
  },
  {
    q: "Choose the correct conditional:",
    options: [
      "If I will study, I pass the exam.",
      "If I study, I will pass the exam.",
      "If I studied, I will pass the exam.",
      "If I study, I would pass the exam.",
    ],
    correct: 1,
  },
];

const levelMap = [
  { min: 0, max: 1, level: "A1 — Principiante", desc: "Stai muovendo i primi passi. Il percorso Adulti base è perfetto per te!", color: "text-red-500" },
  { min: 2, max: 2, level: "A2 — Elementare", desc: "Hai le basi! Con il percorso giusto, farai progressi rapidi.", color: "text-orange-500" },
  { min: 3, max: 3, level: "B1 — Intermedio", desc: "Buon livello! Il corso di conversazione ti porterà alla fluency.", color: "text-amber" },
  { min: 4, max: 4, level: "B2 — Intermedio Superiore", desc: "Ottimo! Sei quasi fluente. Un corso avanzato ti darà la sicurezza finale.", color: "text-green-500" },
  { min: 5, max: 5, level: "C1 — Avanzato", desc: "Eccellente! Sei quasi madrelingua. Un corso di perfezionamento è l'ideale.", color: "text-navy" },
];

export default function LevelTestSection() {
  const { ref, inView } = useInView();
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);

  const score = answers.filter(Boolean).length;
  const levelResult = levelMap.find(l => score >= l.min && score <= l.max) || levelMap[0];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null) return;
    const isCorrect = selected === questions[current].correct;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const handleReset = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left: Info */}
          <div>
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Test Gratuito</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2 mb-6">
              Scopri il tuo<br />
              <span className="italic text-amber">livello di inglese</span>
            </h2>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">
              Non sai da dove iniziare? Fai il nostro mini test gratuito — 5 domande, 2 minuti — e scopri subito il tuo livello attuale di inglese.
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-8">
              Sulla base del risultato, Barry ti consiglierà il percorso più adatto ai tuoi obiettivi.
            </p>
            <div className="space-y-3">
              {["Solo 5 domande", "Risultato immediato", "Consiglio personalizzato"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quiz Card */}
          <div className="bg-sand rounded-3xl p-8 border border-border shadow-sm">
            {!started && !finished && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-amber/15 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy mb-3">
                  Mini Test di Inglese
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-8">
                  5 domande · ~2 minuti · Risultato immediato
                </p>
                <button
                  onClick={() => setStarted(true)}
                  className="btn-amber w-full py-4 rounded-xl font-body font-semibold text-base"
                >
                  <span>Inizia il Test Gratuito</span>
                </button>
              </div>
            )}

            {started && !finished && (
              <div>
                {/* Progress */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-label text-xs text-muted-foreground">
                    Domanda {current + 1} di {questions.length}
                  </span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-8 rounded-full transition-colors ${
                          i < current ? "bg-amber" : i === current ? "bg-navy" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <h3 className="font-display text-lg font-bold text-navy mb-5">
                  {questions[current].q}
                </h3>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {questions[current].options.map((opt, i) => {
                    let cls = "border-border bg-white hover:border-navy/40 hover:bg-navy/5";
                    if (selected !== null) {
                      if (i === questions[current].correct) cls = "border-green-500 bg-green-50";
                      else if (i === selected && selected !== questions[current].correct) cls = "border-red-400 bg-red-50";
                      else cls = "border-border bg-white opacity-60";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 font-body text-sm transition-all ${cls}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono-label text-xs text-muted-foreground w-5">{String.fromCharCode(65 + i)}.</span>
                          <span>{opt}</span>
                          {selected !== null && i === questions[current].correct && (
                            <CheckCircle2 className="w-4 h-4 text-green-500 ml-auto shrink-0" />
                          )}
                          {selected !== null && i === selected && selected !== questions[current].correct && (
                            <XCircle className="w-4 h-4 text-red-400 ml-auto shrink-0" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  className="btn-amber w-full py-3.5 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>{current + 1 === questions.length ? "Vedi Risultato" : "Prossima Domanda"}</span>
                  <ChevronRight className="w-4 h-4 relative z-10" />
                </button>
              </div>
            )}

            {finished && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-amber/15 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-3xl font-bold text-amber">{score}/5</span>
                </div>
                <h3 className={`font-display text-2xl font-bold mb-2 ${levelResult.color}`}>
                  {levelResult.level}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  {levelResult.desc}
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/393937620160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-amber block w-full py-3.5 rounded-xl font-body font-semibold text-sm text-center"
                  >
                    <span>Contatta Barry per il percorso giusto</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 w-full py-3 font-body text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Rifai il test
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
