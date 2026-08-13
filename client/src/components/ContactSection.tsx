/* ============================================================
   CONTATTO — English With Barry
   Design: Navy, one big WhatsApp action, email as fallback.
   No form: the old one never sent anything. WhatsApp is where
   these conversations actually start.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { WA, EMAIL, EMAIL_LINK, LOCATION } from "@/lib/contact";

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

const steps = [
  { n: "1", text: "Mi scrivi cosa ti serve — anche solo due righe, in italiano." },
  { n: "2", text: "Ti faccio qualche domanda per capire livello, obiettivi e disponibilità." },
  { n: "3", text: "Ti propongo il percorso più adatto. Se non fa per te, nessun problema." },
];

export default function ContactSection() {
  const { ref, inView } = useInView();

  return (
    <section id="contatti" ref={ref} className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Contatto</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2 mb-5">
            Raccontami<br />
            <span className="italic text-amber">cosa ti serve</span>
          </h2>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Non serve sapere già quale corso vuoi. Scrivimi la tua situazione e ci penso io
            a costruire il percorso giusto — per te o per tuo figlio.
          </p>
        </div>

        {/* THE action */}
        <div
          className={`transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={WA.general}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] rounded-2xl px-8 py-6 transition-colors shadow-lg"
          >
            <MessageCircle className="w-8 h-8 text-white shrink-0" />
            <span className="font-body font-bold text-lg md:text-xl text-white text-center">
              Scrivimi su WhatsApp
            </span>
          </a>
          <p className="text-center font-body text-sm text-white/60 mt-4">
            Messaggio già pronto — devi solo premere invio.
          </p>
        </div>

        {/* What happens next */}
        <div
          className={`grid sm:grid-cols-3 gap-6 mt-14 transition-all duration-700 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber text-navy font-display font-bold text-sm shrink-0">
                {s.n}
              </div>
              <p className="font-body text-sm text-white/80 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        {/* Secondary contact details */}
        <div
          className={`grid sm:grid-cols-3 gap-4 mt-14 pt-10 border-t border-white/10 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href={EMAIL_LINK}
            className="flex items-center gap-3 group"
          >
            <Mail className="w-5 h-5 text-amber shrink-0" />
            <div className="min-w-0">
              <div className="font-body text-sm text-white group-hover:text-amber transition-colors truncate">
                {EMAIL}
              </div>
              <div className="font-mono-label text-xs text-white/50">Preferisci l'email?</div>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-amber shrink-0" />
            <div>
              <div className="font-body text-sm text-white">{LOCATION}</div>
              <div className="font-mono-label text-xs text-white/50">Online e in presenza</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-amber shrink-0" />
            <div>
              <div className="font-body text-sm text-white">Risposta entro 24 ore</div>
              <div className="font-mono-label text-xs text-white/50">Rispondo io, di persona</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
