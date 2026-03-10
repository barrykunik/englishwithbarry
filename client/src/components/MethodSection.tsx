/* ============================================================
   METHOD SECTION — English With Barry
   Design: Split layout, amber accent background for T.E.D. card
   Explains the unique T.E.D. and Mini T.E.D. methods
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Mic, BookOpen, Lightbulb, Gamepad2 } from "lucide-react";

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
              <p className="font-body text-sm text-white/70 leading-relaxed mb-6">
                Ispirato ai famosi TED Talks, questo metodo sviluppa ascolto autentico, vocabolario in contesto reale e sicurezza nel parlare. Ogni lezione è un'esperienza coinvolgente, non una sessione di grammatica.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Mic, text: "Ascolto di contenuti autentici" },
                  { icon: BookOpen, text: "Vocabolario in contesto reale" },
                  { icon: Lightbulb, text: "Sicurezza e fluidità nel parlato" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-amber shrink-0" />
                    <span className="font-body text-sm text-white/80">{text}</span>
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
