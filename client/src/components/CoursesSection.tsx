/* ============================================================
   COURSES SECTION — English With Barry
   Design: Asymmetric two-column layout, image + content cards
   Adults (navy) and Kids (amber) with distinct personalities
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Monitor, Users, MapPin, Zap } from "lucide-react";

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

export default function CoursesSection() {
  const adults = useInView();
  const kids = useInView();

  return (
    <section className="py-20 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">I Percorsi</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-2">
            Un corso su misura<br />
            <span className="italic text-amber">per ogni età</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Adulti o bambini, principianti o avanzati: ogni percorso è progettato per i tuoi obiettivi specifici.
          </p>
        </div>

        {/* Adults Course */}
        <div
          id="adulti"
          ref={adults.ref}
          className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 transition-all duration-700 ${
            adults.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={ADULTS_IMAGE}
                alt="Corso di inglese per adulti a Padova"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono-label text-xs text-white/80 tracking-widest uppercase">Metodo T.E.D.</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber text-navy rounded-2xl px-4 py-3 shadow-lg">
              <div className="font-display font-bold text-2xl leading-none">A1</div>
              <div className="font-body text-xs font-medium">→ Fluency</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-3 py-1 mb-4">
              <Users className="w-4 h-4 text-navy" />
              <span className="font-mono-label text-xs text-navy font-medium tracking-wide uppercase">Adulti & Professionisti</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Inglese per <span className="italic text-amber">Adulti</span>
            </h3>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">
              Dal livello zero alla fluency: lezioni pratiche e coinvolgenti per iniziare, ripartire o migliorare la scioltezza nel parlato. Il metodo <strong>T.E.D.</strong>, ispirato ai TED Talks, sviluppa ascolto, vocabolario e sicurezza.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: Monitor, text: "Online o in presenza a Padova" },
                { icon: Users, text: "One-to-one o in piccoli gruppi" },
                { icon: Zap, text: "Conversazione e fluency" },
                { icon: CheckCircle2, text: "Preparazione esami IELTS · TOEFL · Cambridge" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-amber mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="/adulti"
              className="btn-amber inline-block px-8 py-3.5 rounded-full font-body font-semibold text-sm"
            >
              <span>Scopri il percorso Adulti</span>
            </a>
          </div>
        </div>

        {/* Kids Course */}
        <div
          id="bambini"
          ref={kids.ref}
          className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center transition-all duration-700 ${
            kids.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Content (left on desktop) */}
          <div className="md:order-1 order-2">
            <div className="inline-flex items-center gap-2 bg-amber/15 rounded-full px-3 py-1 mb-4">
              <span className="text-base">🎮</span>
              <span className="font-mono-label text-xs text-amber font-medium tracking-wide uppercase">Bambini & Ragazzi</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Inglese per <span className="italic text-amber">Bambini</span>
            </h3>
            <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">
              Dal primo approccio alla lingua: apprendimento naturale attraverso gioco, relazione e attività pratiche. Il metodo <strong>Mini T.E.D.</strong> — senza schermi — crea un ambiente stimolante dove i bambini imparano senza accorgersene.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                { icon: MapPin, text: "Solo in presenza a Padova" },
                { icon: Users, text: "Solo in gruppo (max 6 bambini)" },
                { icon: Zap, text: "Apprendimento naturale tramite gioco" },
                { icon: CheckCircle2, text: "Senza uso di schermi" },
              ].map(({ icon: Icon, text }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-amber mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="/bambini"
              className="btn-amber inline-block px-8 py-3.5 rounded-full font-body font-semibold text-sm"
            >
              <span>Scopri il percorso Bambini</span>
            </a>
          </div>

          {/* Image (right on desktop) */}
          <div className="md:order-2 order-1 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={KIDS_IMAGE}
                alt="Corso di inglese per bambini a Padova"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono-label text-xs text-white/90 tracking-widest uppercase">Metodo Mini T.E.D.</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-navy text-white rounded-2xl px-4 py-3 shadow-lg">
              <div className="font-display font-bold text-xl leading-none">6-14</div>
              <div className="font-body text-xs font-medium text-white/80">anni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
