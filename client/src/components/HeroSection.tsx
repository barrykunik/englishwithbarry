/* ============================================================
   HERO SECTION — English With Barry
   Design: Full-bleed diagonal split — image left, bold text right
   Dark overlay on image, white text on left, navy text on right
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/Gemini_Generated_Image_s3t7lqs3t7lqs3t7_3f17ebd2.png";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    const el = document.querySelector("#adulti");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Lezione di inglese a Padova"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: left dark for text, right lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.97_0.015_80)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-amber/20 border border-amber/40 text-amber rounded-full px-4 py-1.5 text-sm font-mono-label font-medium mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            Madrelingua Australiano · Padova
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Parla inglese
            <br />
            <span className="text-amber italic">con sicurezza.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Corsi di inglese a Padova per adulti e bambini. Metodo pratico, dinamico e coinvolgente — online o in presenza.
          </p>

          {/* Social proof */}
          <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 text-amber fill-amber" />
              ))}
            </div>
            <span className="font-body text-sm text-white/80">
              <strong className="text-white">+100 studenti</strong> soddisfatti
            </span>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="https://wa.me/393000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber px-8 py-4 rounded-full text-base font-body font-semibold text-center"
            >
              <span>Inizia Gratuitamente</span>
            </a>
            <button
              onClick={() => {
                const el = document.querySelector("#servizi");
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              className="btn-navy-outline px-8 py-4 rounded-full text-base bg-white/10 border-white/60 text-white hover:bg-white hover:text-navy"
            >
              Scopri i Corsi
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
        aria-label="Scorri in basso"
      >
        <span className="font-mono-label text-xs tracking-widest uppercase">Scopri</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}
