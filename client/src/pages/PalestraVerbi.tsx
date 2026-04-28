import { useEffect } from "react";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight, Layers } from "lucide-react";

const tools = [
  {
    href: "/verbi-irregolari",
    icon: <Layers className="w-8 h-8" />,
    label: "Verbi Irregolari",
    subtitle: "Irregular Verbs",
    description:
      "Allenati con i 200 verbi irregolari più usati in inglese. Ogni flashcard mostra V1, V2, V3 e la traduzione in italiano.",
    count: "200 verbi",
    color: "from-[#0e5f8a] to-[#1a7a6e]",
  },
  {
    href: "/verbi-frasali",
    icon: <BookOpen className="w-8 h-8" />,
    label: "Verbi Frasali",
    subtitle: "Phrasal Verbs",
    description:
      "Impara i 100 phrasal verbs più frequenti con significato ed esempio d'uso in contesto reale.",
    count: "100 verbi",
    color: "from-[#7c3aed] to-[#db2777]",
  },
];

export default function PalestraVerbi() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />

      <div className="flex flex-col items-center px-4 pt-28 pb-20">

        {/* Header */}
        <div className="text-center mb-14 max-w-xl">
          <span className="font-mono-label text-xs tracking-widest text-amber uppercase">
            English With Barry
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">
            🏋️ Palestra dei Verbi
          </h1>
          <p className="font-body text-white/60 mt-4 text-base leading-relaxed">
            Scegli il tuo allenamento. Flashcard interattive per praticare i
            verbi inglesi con pronuncia audio e tracciamento dei progressi.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          {tools.map((tool) => (
            <button
              key={tool.href}
              onClick={() => { navigate(tool.href); window.scrollTo({ top: 0 }); }}
              className="group text-left rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200 focus:outline-none"
            >
              {/* Gradient top band */}
              <div className={`bg-gradient-to-br ${tool.color} p-6 flex items-center justify-between`}>
                <div className="text-white">{tool.icon}</div>
                <span className="font-mono-label text-xs font-bold text-white/70 tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full">
                  {tool.count}
                </span>
              </div>

              {/* Card body */}
              <div className="bg-white p-6">
                <div className="mb-1">
                  <span className="font-mono-label text-xs text-navy/40 uppercase tracking-widest">
                    {tool.subtitle}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-navy mb-3">
                  {tool.label}
                </h2>
                <p className="font-body text-sm text-navy/60 leading-relaxed mb-5">
                  {tool.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-amber group-hover:gap-3 transition-all duration-200">
                  Inizia ad allenarti <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom tip */}
        <p className="font-mono-label text-xs text-white/30 mt-12 text-center">
          Usa ← → per navigare · Space per girare la carta · P per pronuncia
        </p>
      </div>

      <Footer />
    </div>
  );
}
