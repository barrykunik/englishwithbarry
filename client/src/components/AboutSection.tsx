/* ============================================================
   CHI È BARRY — English With Barry
   Design: Portrait left, short bio right, two real reviews below.
   This is the credibility beat: who he is + proof, in one screen.
   Full bio lives on /chi-sono, all reviews on /recensioni.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Globe, Heart, Trophy, Baby, Star, Quote, ArrowRight } from "lucide-react";
import {
  homepageReviews,
  GOOGLE_REVIEWS_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/reviews";

const PORTRAIT_IMAGE = "/barry-portrait.jpg";

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
    <section id="chi-sono" ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio */}
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Portrait */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-amber/10 rounded-3xl" />
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-navy/5 rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={PORTRAIT_IMAGE}
                alt="Barry — insegnante di inglese madrelingua a Padova"
                className="w-full h-full object-contain bg-white block"
                style={{ marginBottom: "-10%" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent">
                <div className="font-display text-2xl font-bold text-white">Barry</div>
                <div className="font-mono-label text-sm text-white/80">Insegnante di Inglese · Padova</div>
              </div>
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
              Sono <strong>Barry</strong>, australiano, madrelingua e insegnante di inglese da quasi{" "}
              <strong>20 anni</strong>. Credo in un inglese vivo e concreto — proprio come lo sport:
              si impara facendo, usando la lingua in modo reale.
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-8">
              Accompagno adulti e bambini con corsi online e in presenza, in un clima sereno e
              coinvolgente. Sono anche padre di un bambino cresciuto bilingue: so cosa significa
              trasmettere una lingua, non solo insegnarla.
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

            <a
              href="/chi-sono"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm text-navy hover:text-amber transition-colors group"
            >
              La mia storia completa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Two real Google reviews */}
        <div
          className={`grid md:grid-cols-2 gap-6 mt-20 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {homepageReviews.map((r) => (
            <div
              key={r.name}
              className="bg-sand rounded-2xl p-7 border border-border relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber/15" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber fill-amber" />
                ))}
              </div>
              <p lang={r.lang} className="font-body text-sm text-foreground/80 leading-relaxed mb-6">
                "{r.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center shrink-0`}>
                  <span className="font-display font-bold text-sm text-white">{r.initials}</span>
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-navy">{r.name}</div>
                  <div className="font-mono-label text-xs text-muted-foreground">Recensione Google</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verifiable, not just claimed */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 mt-8">
          <span className="font-body text-sm text-muted-foreground">
            <strong className="text-navy">{GOOGLE_RATING}</strong> su Google · {GOOGLE_REVIEW_COUNT} recensioni
          </span>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-muted-foreground hover:text-amber transition-colors underline underline-offset-4 decoration-amber/40"
          >
            Leggile tutte su Google
          </a>
        </div>
      </div>
    </section>
  );
}
