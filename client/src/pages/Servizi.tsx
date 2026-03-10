/* ============================================================
   SERVIZI PAGE — English With Barry
   Design: Warm Mediterranean style
   Dedicated page for all services
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { Users, Monitor, BookOpen, Award, Zap, Headphones } from "lucide-react";
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

const services = [
  {
    icon: Users,
    title: "Corsi per Adulti",
    desc: "Lezioni individuali o in piccoli gruppi, online o in presenza. Dal livello zero alla fluency.",
    features: ["One-to-one o gruppi", "Online o in presenza", "Metodo T.E.D.", "Flessibile"],
    link: "/adulti",
  },
  {
    icon: Headphones,
    title: "Corsi per Bambini",
    desc: "Apprendimento naturale tramite gioco e interazione. Solo in presenza, senza schermi.",
    features: ["Gioco e interazione", "Solo in presenza", "Senza schermi", "Max 6 bambini"],
    link: "/bambini",
  },
  {
    icon: Monitor,
    title: "Lezioni Online",
    desc: "Comodità di casa tua con la stessa qualità delle lezioni in presenza. Flessibilità totale.",
    features: ["Da casa", "Stessa qualità", "Orari flessibili", "Tecnologia affidabile"],
  },
  {
    icon: BookOpen,
    title: "Conversazione & Fluency",
    desc: "Corsi dedicati a chi vuole parlare con sicurezza. Focus su pronuncia, fluidità e naturalezza.",
    features: ["Pronuncia naturale", "Fluidità", "Sicurezza", "Conversazione reale"],
  },
  {
    icon: Award,
    title: "Preparazione Esami",
    desc: "Percorsi mirati per IELTS, TOEFL e Cambridge. Strategie, simulazioni e feedback personalizzato.",
    features: ["IELTS", "TOEFL", "Cambridge", "Simulazioni complete"],
  },
  {
    icon: Zap,
    title: "Metodo T.E.D.",
    desc: "Il metodo esclusivo ispirato ai TED Talks: ascolto autentico, vocabolario in contesto, sicurezza nel parlare.",
    features: ["Ascolto autentico", "Vocabolario reale", "Sicurezza", "Metodo provato"],
  },
];

export default function Servizi() {
  const hero = useInView();
  const allServices = useInView();
  const ted = useInView();
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
          <div className="text-center">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">I Nostri Servizi</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
              Un approccio <span className="italic text-amber">completo</span> all'inglese
            </h1>
            <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
              Che tu sia un adulto che vuole imparare, un genitore che vuole insegnare ai tuoi figli, o un professionista che vuole migliorare la fluency, abbiamo il servizio giusto per te.
            </p>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section
        ref={allServices.ref}
        className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
          allServices.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-navy-dark rounded-2xl p-8 border border-white/10 hover:border-amber/50 transition-colors group cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-amber mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl font-bold mb-3">{service.title}</h3>
                <p className="font-body text-sm text-white/80 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                      <span className="font-body text-xs text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <a
                    href={service.link}
                    className="inline-block text-amber font-body text-sm font-semibold hover:text-amber/80 transition-colors"
                  >
                    Scopri di più →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T.E.D. Method Deep Dive */}
      <section
        ref={ted.ref}
        className={`py-20 md:py-28 bg-white overflow-hidden transition-all duration-700 ${
          ted.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Metodo Esclusivo</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Metodo T.E.D. — Cosa lo Rende Speciale
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Ascolto Autentico",
                desc: "Ascolti contenuti reali: TED Talks, podcast, video autentici. Non materiale scolastico noioso.",
                icon: "👂",
              },
              {
                title: "Vocabolario in Contesto",
                desc: "Impari le parole come vengono usate nella vita reale, non da liste di memorizzazione.",
                icon: "📚",
              },
              {
                title: "Sicurezza nel Parlare",
                desc: "Il focus è sulla capacità di parlare naturalmente e con fiducia, non sulla grammatica perfetta.",
                icon: "🎤",
              },
            ].map((item, i) => (
              <div key={i} className="bg-sand rounded-2xl p-8 border border-border text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy text-white rounded-2xl p-12 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Perché il Metodo T.E.D. Funziona</h3>
            <p className="font-body text-base text-white/90 leading-relaxed max-w-3xl mx-auto mb-6">
              È basato su come gli adulti imparano naturalmente le lingue: attraverso <strong>esposizione autentica, pratica reale e interazione significativa</strong>. 
              Non è teoria scolastica — è il metodo che usano i migliori insegnanti nel mondo.
            </p>
            <p className="font-body text-sm text-white/70">
              Risultato: progressi rapidi, motivazione alta, e un inglese che puoi usare subito nella vita reale.
            </p>
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
            Quale servizio fa per te?
          </h2>
          <p className="font-body text-lg text-navy/80 mb-10 max-w-2xl mx-auto">
            Contatta Barry per una consulenza gratuita. Ti aiuterà a scegliere il percorso perfetto per i tuoi obiettivi.
          </p>
          <a
            href="https://wa.me/393000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white px-8 py-4 rounded-xl font-body font-semibold hover:bg-navy/90 transition-colors"
          >
            Contatta Barry su WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
