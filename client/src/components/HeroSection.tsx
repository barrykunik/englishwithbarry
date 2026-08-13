/* ============================================================
   HERO SECTION — English With Barry
   Design: Full-bleed image, dark gradient left, text over it.
   ONE action: start a conversation. Everything else is quieter.
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { WA } from "@/lib/contact";

const HERO_IMAGE = "/barry-classroom.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPercorsi = () => {
    const el = document.querySelector("#percorsi");
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
          style={{ objectPosition: "50% 30%" }}
        />
        {/* Gradient overlay: left dark enough for text, right nearly clear */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-transparent" />
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

          {/* Subtitle — points at the one action */}
          <p
            className={`font-body text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Corsi di inglese a Padova per adulti e bambini, online o in presenza.
            Non devi scegliere adesso: raccontami cosa ti serve e costruiamo insieme
            il percorso giusto per te.
          </p>

          {/* Social proof */}
          <div
            className={`flex items-center gap-2 mb-8 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-amber fill-amber" />
              ))}
            </div>
            <span className="font-body text-sm text-white/80">
              <strong className="text-white">+1000 studenti</strong> · Dal 2006
            </span>
          </div>

          {/* THE action — one button, nothing competing with it */}
          <div
            className={`transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href={WA.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber inline-block px-10 py-4 rounded-full text-base font-body font-semibold text-center"
            >
              <span>Dimmi cosa ti serve</span>
            </a>
            <p className="font-body text-sm text-white/70 mt-4">
              Ti rispondo personalmente su WhatsApp, senza impegno.{" "}
              <button
                onClick={scrollToPercorsi}
                className="underline underline-offset-4 decoration-white/40 hover:decoration-amber hover:text-amber transition-colors"
              >
                Oppure guarda prima i percorsi
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
