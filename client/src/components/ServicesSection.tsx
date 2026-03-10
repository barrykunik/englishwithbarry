/* ============================================================
   SERVICES SECTION — English With Barry
   Design: Navy background with amber accents, card grid
   Highlights the T.E.D. method and all service offerings
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { BookOpen, Video, Users, Award, Mic2, Gamepad2 } from "lucide-react";

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

const services = [
  {
    icon: Users,
    title: "Corsi per Adulti",
    desc: "Lezioni individuali o in piccoli gruppi, online o in presenza. Dal livello zero alla fluency.",
    tag: "Adulti",
  },
  {
    icon: Gamepad2,
    title: "Corsi per Bambini",
    desc: "Apprendimento naturale tramite gioco e interazione. Solo in presenza, senza schermi.",
    tag: "Bambini",
  },
  {
    icon: Video,
    title: "Lezioni Online",
    desc: "Comodità di casa tua con la stessa qualità delle lezioni in presenza. Flessibilità totale.",
    tag: "Online",
  },
  {
    icon: Mic2,
    title: "Conversazione & Fluency",
    desc: "Corsi dedicati a chi vuole parlare con sicurezza. Focus su pronuncia, fluidità e naturalezza.",
    tag: "Parlato",
  },
  {
    icon: Award,
    title: "Preparazione Esami",
    desc: "Percorsi mirati per IELTS, TOEFL e Cambridge. Strategie, simulazioni e feedback personalizzato.",
    tag: "Esami",
  },
  {
    icon: BookOpen,
    title: "Metodo T.E.D.",
    desc: "Il metodo esclusivo ispirato ai TED Talks: ascolto autentico, vocabolario in contesto, sicurezza nel parlare.",
    tag: "Esclusivo",
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="servizi" ref={ref} className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[20vw] font-bold text-white/[0.03] whitespace-nowrap">
          ENGLISH
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Cosa Offro</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Tutti i <span className="italic text-amber">Servizi</span>
          </h2>
          <p className="font-body text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Un approccio completo all'inglese, adattato alle tue esigenze e ai tuoi obiettivi.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber/40 rounded-2xl p-6 card-hover transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/15 flex items-center justify-center group-hover:bg-amber/25 transition-colors">
                    <Icon className="w-6 h-6 text-amber" />
                  </div>
                  <span className="font-mono-label text-xs text-amber/70 bg-amber/10 rounded-full px-2 py-1">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="font-body text-sm text-white/65 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/servizi"
            className="btn-amber inline-block px-10 py-4 rounded-full font-body font-semibold text-base"
          >
            <span>Scopri tutti i servizi</span>
          </a>
        </div>
      </div>
    </section>
  );
}
