/* ============================================================
   DUE PERCORSI — English With Barry
   Design: Two cards, side by side. One decision, not ten.
   Detail lives on /adulti and /bambini — this section only has
   to help the visitor recognise themselves and click through.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LEVEL_TEST_URL } from "@/lib/contact";

const ADULTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/adults-class-jNjkFoj2UhEhJ89sJ5g2TN.webp";
const KIDS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/kids-class-dvQXQWqqZ3wsmdYD2DBhVJ.webp";

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

const paths = [
  {
    href: "/adulti",
    image: ADULTS_IMAGE,
    eyebrow: "Adulti e professionisti",
    title: "Inglese per Adulti",
    meta: "Online o in presenza · Individuale o in piccolo gruppo",
    desc: "Che tu parta da zero, voglia riprendere in mano le basi o sbloccare finalmente il parlato. Percorsi costruiti sui tuoi obiettivi, non su un programma prestampato.",
    cta: "Vedi il percorso Adulti",
  },
  {
    href: "/bambini",
    image: KIDS_IMAGE,
    eyebrow: "Bambini · 3-10 anni",
    title: "Inglese per Bambini",
    meta: "In presenza a Padova · Piccoli gruppi, senza schermi",
    desc: "I bambini imparano l'inglese come hanno imparato l'italiano: giocando, ascoltando e usandolo davvero. Nessun banco, nessuna grammatica astratta.",
    cta: "Vedi il percorso Bambini",
  },
];

export default function CoursesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="percorsi" ref={ref} className="py-20 md:py-28 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">I Percorsi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2">
            Due strade,<br />
            <span className="italic text-amber">un metodo su misura</span>
          </h2>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path, i) => (
            <a
              key={path.href}
              href={path.href}
              className={`group flex flex-col bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-amber/50 transition-all duration-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                <span className="absolute bottom-4 left-6 font-mono-label text-xs text-white/90 tracking-widest uppercase">
                  {path.eyebrow}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">
                  {path.title}
                </h3>
                <p className="font-mono-label text-xs text-muted-foreground mb-4">
                  {path.meta}
                </p>
                <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">
                  {path.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-body font-semibold text-sm text-navy group-hover:text-amber transition-colors">
                  {path.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Quiet third option for the undecided */}
        <p className="text-center font-body text-base text-muted-foreground mt-10">
          Non sai da dove partire?{" "}
          <a
            href={LEVEL_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy font-semibold underline underline-offset-4 decoration-amber/60 hover:text-amber transition-colors"
          >
            Fai il test di livello gratuito
          </a>{" "}
          e ti dico io da dove conviene cominciare.
        </p>
      </div>
    </section>
  );
}
