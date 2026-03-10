/* ============================================================
   ADULTI PAGE — English With Barry
   Design: Warm Mediterranean style
   Dedicated page for adult courses
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Users, MapPin, Monitor, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ADULTS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/adults-class-jNjkFoj2UhEhJ89sJ5g2TN.webp";

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

export default function Adulti() {
  const hero = useInView();
  const features = useInView();
  const levels = useInView();
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Corsi per Adulti</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
                Parla inglese con <span className="italic text-amber">sicurezza</span>
              </h1>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                Dal livello zero alla fluency. Lezioni pratiche, coinvolgenti e personalizzate per adulti e professionisti che vogliono imparare un inglese vivo e reale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/393000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber px-8 py-4 rounded-xl font-body font-semibold text-center"
                >
                  Inizia Gratuitamente
                </a>
                <a
                  href="#dettagli"
                  className="btn-outline px-8 py-4 rounded-xl font-body font-semibold text-center"
                >
                  Scopri di più
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={ADULTS_IMAGE}
                alt="Adulti in classe"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber text-navy rounded-2xl p-6 shadow-lg max-w-xs">
                <p className="font-display text-2xl font-bold mb-2">20+</p>
                <p className="font-body text-sm">Anni di esperienza nel coaching di adulti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={features.ref}
        className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
          features.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Come Funziona</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Un percorso su misura per te
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "One-to-One o Gruppi",
                desc: "Scegli il formato che preferisci: lezioni individuali per attenzione totale o piccoli gruppi per interazione e condivisione.",
              },
              {
                icon: MapPin,
                title: "Online o in Presenza",
                desc: "Lezioni a Padova in aula oppure comodamente da casa. Stessa qualità, massima flessibilità.",
              },
              {
                icon: Monitor,
                title: "Metodo T.E.D.",
                desc: "Ispirato ai TED Talks: ascolto autentico, vocabolario in contesto reale, sicurezza nel parlare.",
              },
              {
                icon: BookOpen,
                title: "Conversazione & Fluency",
                desc: "Focus sulla capacità di parlare naturalmente. Niente noioso studio di grammatica.",
              },
              {
                icon: Zap,
                title: "Progressi Rapidi",
                desc: "Metodo collaudato che produce risultati concreti. Vedrai i progressi in poche settimane.",
              },
              {
                icon: CheckCircle2,
                title: "Supporto Personalizzato",
                desc: "Barry segue il tuo progresso e adatta le lezioni ai tuoi obiettivi specifici.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-navy-dark rounded-2xl p-8 border border-white/10">
                <feature.icon className="w-10 h-10 text-amber mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section
        ref={levels.ref}
        id="dettagli"
        className={`py-20 md:py-28 bg-white overflow-hidden transition-all duration-700 ${
          levels.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Percorsi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Da A1 a C1 — Tutti i livelli
            </h2>
            <p className="font-body text-lg text-foreground/80 mt-6 max-w-2xl mx-auto">
              Indipendentemente dal tuo livello attuale, abbiamo un percorso pensato per te.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                level: "A1 — Principiante",
                title: "Primi Passi",
                desc: "Nessuna esperienza? Nessun problema. Partiamo dalle basi e costruiamo una solida fondazione.",
                features: ["Alfabeto e pronuncia", "Vocabolario essenziale", "Frasi di base", "Sicurezza iniziale"],
              },
              {
                level: "A2 — Elementare",
                title: "Consolidamento",
                desc: "Conosci le basi. Ora ampliamo il vocabolario e iniziamo a costruire frasi più complesse.",
                features: ["Conversazione semplice", "Tempi verbali base", "Situazioni quotidiane", "Crescente sicurezza"],
              },
              {
                level: "B1 — Intermedio",
                title: "Conversazione Fluida",
                desc: "Puoi esprimere idee e opinioni. Ora lavoriamo sulla fluidità e sulla naturalezza.",
                features: ["Conversazione naturale", "Vocabolario avanzato", "Tempi complessi", "Sicurezza nel parlare"],
              },
              {
                level: "B2 — Intermedio Superiore",
                title: "Quasi Fluente",
                desc: "Parli bene. Perfezzioniamo la pronuncia, l'accento e la capacità di affrontare argomenti complessi.",
                features: ["Discussioni approfondite", "Pronuncia naturale", "Lessico specializzato", "Quasi madrelingua"],
              },
              {
                level: "C1 — Avanzato",
                title: "Padronanza",
                desc: "Sei quasi madrelingua. Lavoriamo su sfumature, accento e stili comunicativi avanzati.",
                features: ["Espressione sofisticata", "Accento naturale", "Comprensione totale", "Madrelingua"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-sand rounded-2xl p-8 border border-border">
                <span className="font-mono-label text-xs tracking-widest text-amber uppercase">{item.level}</span>
                <h3 className="font-display text-2xl font-bold text-navy mt-3 mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/80 mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                      <span className="font-body text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
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
            Pronto a iniziare?
          </h2>
          <p className="font-body text-lg text-navy/80 mb-10 max-w-2xl mx-auto">
            Fai il test gratuito per scoprire il tuo livello, oppure contatta Barry direttamente per una consulenza personalizzata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/393000000000"
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
