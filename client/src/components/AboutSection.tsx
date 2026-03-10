/* ============================================================
   ABOUT SECTION — English With Barry
   Design: Asymmetric layout, portrait image with decorative frame
   Warm off-white background, navy text, amber accents
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Globe, Heart, Trophy, Baby } from "lucide-react";

const PORTRAIT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/teacher-portrait-KqQGmMFiFhoqDoCmmohH5G.webp";

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

const highlights = [
  { icon: Globe, text: "Madrelingua australiano" },
  { icon: Trophy, text: "Quasi 20 anni di esperienza" },
  { icon: Heart, text: "Sportivo, dinamico, appassionato" },
  { icon: Baby, text: "Padre di un bambino bilingue" },
];

export default function AboutSection() {
  const { ref, inView } = useInView();

  return (
    <section id="chi-sono" ref={ref} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-amber/10 rounded-3xl" />
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-navy/5 rounded-3xl" />

            {/* Portrait */}
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl">
              <img
                src={PORTRAIT_IMAGE}
                alt="Barry — insegnante di inglese madrelingua a Padova"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display text-2xl font-bold text-white">Barry</div>
                <div className="font-mono-label text-sm text-white/80">Insegnante di Inglese · Padova</div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -right-4 top-1/3 bg-white rounded-2xl shadow-xl p-4 border border-border max-w-[160px]">
              <div className="font-display text-3xl font-bold text-amber">🇦🇺</div>
              <div className="font-body text-xs text-navy font-medium mt-1">Australiano<br />Madrelingua</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Chi Sono</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2 mb-6">
              Un insegnante<br />
              <span className="italic text-amber">diverso dal solito</span>
            </h2>

            <p className="font-body text-base text-foreground/80 leading-relaxed mb-4">
              Sono <strong>Barry</strong>, australiano, madrelingua e insegnante di inglese da quasi <strong>20 anni</strong>. Sportivo per natura, credo in un inglese vivo, pratico e concreto — proprio come lo sport: si impara facendo, muovendosi e usando la lingua in modo reale.
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-4">
              Accompagno adulti e bambini a migliorare il loro inglese con corsi online e in presenza, in un clima sereno, dinamico e coinvolgente.
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-8">
              Sono padre di un bambino cresciuto bilingue: l'esperienza diretta mi permette di supportare i genitori nel trasmettere la lingua ai figli in modo naturale ed efficace.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-amber" />
                  </div>
                  <span className="font-body text-sm text-foreground/80">{text}</span>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-amber pl-4 py-1 mb-8">
              <p className="font-display text-lg italic text-navy">
                "Se cerchi un modo moderno, motivante e concreto per imparare l'inglese, sei nel posto giusto!"
              </p>
            </blockquote>

            <a
              href="https://wa.me/393000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-block px-8 py-3.5 rounded-full font-body font-semibold text-sm"
            >
              <span>Scrivimi su WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
