/* ============================================================
   RECENSIONI PAGE — English With Barry
   Design: Warm Mediterranean style
   Dedicated page for testimonials
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

function useInView(threshold = 0.15) {
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
    rating: 5,
    text: "Da molti anni ero alla ricerca di una persona che potesse aiutarmi a migliorare il mio inglese attraverso un approccio diverso da quello tradizionale. Incontrare Barry è stata una piacevolissima sorpresa: le lezioni sono coinvolgenti e dinamiche, si parla di moltissimi argomenti diversi. Consiglio Barry a chiunque desideri migliorare il proprio inglese in modo serio, ma allo stesso tempo umano, moderno e appassionante.",
    initials: "TB",
    color: "bg-blue-500",
  },
  {
    name: "Anna B.",
    role: "Studentessa",
    rating: 5,
    text: "Ottima esperienza. Cercavo un insegnante per migliorare la fluidità nel parlato e sono rimasta molto soddisfatta. Le lezioni sono dinamiche e stimolanti e i progressi si notano rapidamente. Dopo un solo mese mi sento molto più sicura nel parlare. Consigliatissimo.",
    initials: "AB",
    color: "bg-amber-500",
  },
  {
    name: "Valeria F.",
    role: "Professionista",
    rating: 5,
    text: "Ho seguito 20 lezioni online di conversazione con Barry e il mio inglese è migliorato in modo significativo. Finalmente mi sento più sicura nel parlare inglese con altri. Barry è un insegnante molto disponibile e preparato: organizza ogni lezione con attività e temi diversi, rendendole sempre interessanti e mai ripetitive. Lo consiglio vivamente!",
    initials: "VF",
    color: "bg-teal-500",
  },
  {
    name: "Marco R.",
    role: "Imprenditore",
    rating: 5,
    text: "Cercavo un corso di inglese per migliorare la mia comunicazione in ambito professionale. Barry è esattamente quello che cercavo: competente, disponibile e con un metodo che funziona davvero. In pochi mesi ho notato miglioramenti concreti nella mia capacità di esprimermi in inglese. Altamente consigliato!",
    initials: "MR",
    color: "bg-green-500",
  },
  {
    name: "Giulia M.",
    role: "Insegnante",
    rating: 5,
    text: "Sono insegnante e apprezzo molto il metodo di Barry. È chiaro che ha una profonda comprensione di come insegnare le lingue. Le lezioni sono ben strutturate, ma allo stesso tempo naturali e conversazionali. Mi sento finalmente in grado di parlare inglese con sicurezza e naturalezza.",
    initials: "GM",
    color: "bg-pink-500",
  },
  {
    name: "Paolo S.",
    role: "Professionista IT",
    rating: 5,
    text: "Lezioni online di altissima qualità. Barry è un professionista che sa come insegnare. Il metodo T.E.D. è innovativo e molto efficace. Dopo pochi mesi di lezioni, il mio inglese è migliorato notevolmente. Consiglio vivamente a chiunque voglia imparare l'inglese in modo serio e divertente.",
    initials: "PS",
    color: "bg-indigo-500",
  },
];

export default function Recensioni() {
  const hero = useInView();
  const testimonials_section = useInView();
  const stats = useInView();
  const cta = useInView();

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      
      {/* Hero Section */}
      <section
        ref={hero.ref}
        className={`py-20 md:py-32 bg-white overflow-hidden transition-all duration-700 ${
          hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Cosa Dicono di Me</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
            Recensioni dai miei <span className="italic text-amber">studenti</span>
          </h1>
          <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Non prendo io, ma i miei studenti. Leggi cosa dicono della loro esperienza con il metodo T.E.D.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={stats.ref}
        className={`py-16 md:py-20 bg-navy text-white overflow-hidden transition-all duration-700 ${
          stats.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-amber mb-2">100+</p>
              <p className="font-body text-base text-white/80">Studenti Soddisfatti</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-amber mb-2">5★</p>
              <p className="font-body text-base text-white/80">Valutazione Media</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-amber mb-2">20+</p>
              <p className="font-body text-base text-white/80">Anni di Esperienza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonials_section.ref}
        className={`py-20 md:py-28 bg-white overflow-hidden transition-all duration-700 ${
          testimonials_section.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-sand rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber text-amber"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                    <span className="font-display font-bold text-white text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy text-sm">{testimonial.name}</p>
                    <p className="font-body text-xs text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={cta.ref}
        className={`py-20 md:py-28 bg-amber overflow-hidden transition-all duration-700 ${
          cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Vuoi essere il prossimo?
          </h2>
          <p className="font-body text-lg text-navy/80 mb-10 max-w-2xl mx-auto">
            Unisciti a oltre 100 studenti soddisfatti. Contatta Barry per iniziare il tuo percorso di apprendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393937620160"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-8 py-4 rounded-xl font-body font-semibold hover:bg-navy/90 transition-colors"
            >
              Contatta Barry su WhatsApp
            </a>
            <a
              href="/"
              className="bg-white text-navy px-8 py-4 rounded-xl font-body font-semibold hover:bg-white/90 transition-colors"
            >
              Fai il Test Gratuito
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
