/* ============================================================
   METHOD SECTION — English With Barry
   Design: Split layout, amber accent background for T.E.D. card
   Explains the unique T.E.D. and Mini T.E.D. methods
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Mic, BookOpen, Lightbulb, Gamepad2, Play, PenLine, MessageCircle } from "lucide-react";

const ONLINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/online-lesson-HGmnQDVyk7WvsnEeiUEiR9.webp";
const ADULTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/adults-class-jNjkFoj2UhEhJ89sJ5g2TN.webp";

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

export default function MethodSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Il Metodo</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2">
            Un approccio <span className="italic text-amber">esclusivo</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Due metodi sviluppati appositamente per adulti e bambini, basati su ricerca e anni di esperienza pratica.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* T.E.D. Method Card */}
          <div className="bg-navy rounded-3xl overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={ADULTS_IMAGE}
                alt="Metodo T.E.D. per adulti"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold text-amber">T.E.D.</div>
                  <div className="font-mono-label text-sm text-white/80 tracking-widest mt-1">PER ADULTI</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Metodo T.E.D.
              </h3>
              <p className="font-body text-base text-white/90 leading-relaxed mb-6">
                Un metodo in tre fasi che trasforma l'ascolto passivo in comunicazione reale. Prima della lezione lo studente guarda un autentico TED Talk — con sottotitoli in inglese o in italiano, a seconda del livello. Poi prende nota dei punti chiave. In classe, mi racconta il video come se io non lo avessi mai visto: questo è il momento in cui la lingua prende vita.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Play,          step: "1", text: "Guarda un TED Talk con sottotitoli EN o IT (in base al livello)" },
                  { icon: PenLine,       step: "2", text: "Scrive i punti chiave del video a casa" },
                  { icon: MessageCircle, step: "3", text: "In classe lo racconta a Barry — come se lui non lo avesse mai visto" },
                ].map(({ icon: Icon, step, text }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber text-navy font-bold text-xs shrink-0 mt-0.5">{step}</div>
                    <span className="font-body text-base text-white/90 leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mini T.E.D. Method Card */}
          <div className="bg-amber rounded-3xl overflow-hidden">
            <div className="relative h-48 overflow-hidden">
              <img
                src={ONLINE_IMAGE}
                alt="Metodo Mini T.E.D. per bambini"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-amber/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-navy">Mini T.E.D.</div>
                  <div className="font-mono-label text-sm text-navy/80 tracking-widest mt-1">PER BAMBINI</div>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                Metodo Mini T.E.D.
              </h3>
              <p className="font-body text-sm text-navy/80 leading-relaxed mb-6">
                Un approccio basato su gioco, interazione e ascolto, senza l'uso di schermi. I bambini imparano l'inglese in modo naturale, come hanno imparato la loro lingua madre: attraverso la relazione e l'esperienza.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Gamepad2, text: "Apprendimento tramite gioco" },
                  { icon: Mic, text: "Interazione e relazione" },
                  { icon: Lightbulb, text: "Senza schermi, 100% naturale" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-navy shrink-0" />
                    <span className="font-body text-sm text-navy/80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
