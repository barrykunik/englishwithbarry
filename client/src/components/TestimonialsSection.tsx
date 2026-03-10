/* ============================================================
   TESTIMONIALS SECTION — English With Barry
   Design: Off-white background, large quote marks, card carousel
   Stars rating, student names, warm tone
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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

const testimonials = [
  {
    name: "Tommy B.",
    role: "Professionista",
    stars: 5,
    text: "Da molti anni ero alla ricerca di una persona che potesse aiutarmi a migliorare il mio inglese attraverso un approccio diverso da quello tradizionale. Incontrare Barry è stata una piacevolissima sorpresa: le lezioni sono coinvolgenti e dinamiche, si parla di moltissimi argomenti diversi. Consiglio Barry a chiunque desideri migliorare il proprio inglese in modo serio, ma allo stesso tempo umano, moderno e appassionante.",
    initials: "TB",
    color: "bg-navy",
  },
  {
    name: "Anna B.",
    role: "Studentessa",
    stars: 5,
    text: "Ottima esperienza. Cercavo un insegnante per migliorare la fluidità nel parlato e sono rimasta molto soddisfatta. Le lezioni sono dinamiche e stimolanti e i progressi si notano rapidamente. Dopo un solo mese mi sento molto più sicura nel parlare. Consigliatissimo.",
    initials: "AB",
    color: "bg-amber",
  },
  {
    name: "Valeria F.",
    role: "Professionista",
    stars: 5,
    text: "Ho seguito 20 lezioni online di conversazione con Barry e il mio inglese è migliorato in modo significativo. Finalmente mi sento più sicura nel parlare inglese con altri. Barry è un insegnante molto disponibile e preparato: organizza ogni lezione con attività e temi diversi, rendendole sempre interessanti e mai ripetitive. Lo consiglio vivamente!",
    initials: "VF",
    color: "bg-teal",
  },
  {
    name: "Marco R.",
    role: "Imprenditore",
    stars: 5,
    text: "Barry ha trasformato il mio rapporto con l'inglese. Prima evitavo le riunioni internazionali, ora le affronto con sicurezza. Il suo metodo pratico e la sua pazienza hanno fatto la differenza. In sei mesi ho raggiunto risultati che non avevo ottenuto in anni di studio tradizionale.",
    initials: "MR",
    color: "bg-navy",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="recensioni" ref={ref} className="py-20 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Recensioni</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2">
              Cosa dicono<br />
              <span className="italic text-amber">di me</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-navy/20 hover:border-amber hover:bg-amber/10 flex items-center justify-center transition-colors"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-5 h-5 text-navy" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-navy/20 hover:border-amber hover:bg-amber/10 flex items-center justify-center transition-colors"
              aria-label="Successivo"
            >
              <ChevronRight className="w-5 h-5 text-navy" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-border card-hover relative overflow-hidden ${
                i === 0 ? "md:col-span-1 ring-2 ring-amber/30" : ""
              }`}
            >
              {/* Decorative quote */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber/15" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber fill-amber" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 line-clamp-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="font-display font-bold text-sm text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-navy">{t.name}</div>
                  <div className="font-mono-label text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-amber w-6" : "bg-navy/20"
              }`}
              aria-label={`Vai alla recensione ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
