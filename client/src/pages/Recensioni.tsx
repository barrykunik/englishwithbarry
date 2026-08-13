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
import { WA, LEVEL_TEST_URL } from "@/lib/contact";
import {
  reviews as testimonials,
  GOOGLE_REVIEWS_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
} from "@/lib/reviews";

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
            Non parlo io, ma i miei studenti. Queste sono recensioni pubbliche su Google —
            alcune scritte in italiano, altre direttamente in inglese.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-body text-sm font-semibold text-navy hover:text-amber transition-colors underline underline-offset-4 decoration-amber/50"
          >
            Verificale su Google
          </a>
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
              <p className="font-display text-4xl md:text-5xl font-bold text-amber mb-2">1000+</p>
              <p className="font-body text-base text-white/80">Studenti Soddisfatti</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-amber mb-2">{GOOGLE_RATING}★</p>
              <p className="font-body text-base text-white/80">
                Su Google · {GOOGLE_REVIEW_COUNT} recensioni
              </p>
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
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-amber text-amber"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  lang={testimonial.lang}
                  className="font-body text-sm text-foreground/80 leading-relaxed mb-6 italic"
                >
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center`}>
                    <span className="font-display font-bold text-white text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy text-sm">{testimonial.name}</p>
                    <p className="font-body text-xs text-foreground/60">
                      {testimonial.lang === "en" ? "Scritta in inglese" : "Recensione Google"}
                    </p>
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
            Unisciti a oltre 1000 studenti soddisfatti. Contatta Barry per iniziare il tuo percorso di apprendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-8 py-4 rounded-xl font-body font-semibold hover:bg-navy/90 transition-colors"
            >
              Contatta Barry su WhatsApp
            </a>
            <a
              href={LEVEL_TEST_URL}
              target="_blank"
              rel="noopener noreferrer"
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
