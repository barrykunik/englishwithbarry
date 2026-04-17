/* ============================================================
   BAMBINI PAGE — English With Barry
   Design: Warm Mediterranean style with playful elements
   Dedicated page for kids courses
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Gamepad2, Users, MapPin, Lightbulb, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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

export default function Bambini() {
  const hero = useInView();
  const approach = useInView();
  const benefits = useInView();
  const ages = useInView();
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
              <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Corsi per Bambini</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
                L'inglese come un <span className="italic text-amber">gioco</span>
              </h1>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                Insegnare l'inglese ai bambini non significa lezioni noiose. Significa creare un'esperienza dove imparano naturalmente, giocando, ridendo e divertendosi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/393937620160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber px-8 py-4 rounded-xl font-body font-semibold text-center"
                >
                  Scopri i Corsi
                </a>
                <a
                  href="#dettagli"
                  className="btn-outline px-8 py-4 rounded-xl font-body font-semibold text-center"
                >
                  Come Funziona
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={KIDS_IMAGE}
                alt="Bambini in classe"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber text-navy rounded-2xl p-6 shadow-lg max-w-xs">
                <p className="font-display text-2xl font-bold mb-2">100%</p>
                <p className="font-body text-sm">Apprendimento naturale senza schermi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section
        ref={approach.ref}
        className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
          approach.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Il Metodo</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Mini T.E.D. — Imparare Giocando
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Gamepad2,
                title: "Gioco e Interazione",
                desc: "L'inglese si impara facendo e divertendosi. Giochi, attività pratiche e interazione costante.",
              },
              {
                icon: Heart,
                title: "Relazione e Fiducia",
                desc: "Un ambiente sereno dove i bambini si sentono sicuri di sbagliare e imparare.",
              },
              {
                icon: Lightbulb,
                title: "Senza Schermi",
                desc: "100% naturale. Niente tablet, niente video. Solo relazione umana e apprendimento autentico.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-navy-dark rounded-2xl p-8 border border-white/10 text-center">
                <feature.icon className="w-12 h-12 text-amber mb-4 mx-auto" />
                <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
            <p className="font-body text-center text-white/90 leading-relaxed">
              I bambini imparano la loro lingua madre attraverso <strong>relazione, ascolto e pratica</strong>. 
              Il metodo Mini T.E.D. replica esattamente questo processo naturale, ma per l'inglese. 
              Niente grammatica astratta, niente memorizzazione forzata — solo <strong>esperienza autentica</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={benefits.ref}
        className={`py-20 md:py-28 bg-white overflow-hidden transition-all duration-700 ${
          benefits.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Vantaggi</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Perché scegliere Barry
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Madrelingua australiano con 20+ anni di esperienza",
              "Piccoli gruppi (max 6 bambini) per attenzione personalizzata",
              "Solo in presenza a Padova — niente online",
              "Senza uso di schermi — 100% naturale",
              "Padre di un bambino bilingue — capisce le sfide",
              "Ambiente sereno, dinamico e coinvolgente",
              "Progressi visibili in poche settimane",
              "Amore per l'insegnamento e passione per i bambini",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber shrink-0 mt-1" />
                <p className="font-body text-base text-foreground/80">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ages Section */}
      <section
        ref={ages.ref}
        id="dettagli"
        className={`py-20 md:py-28 bg-sand overflow-hidden transition-all duration-700 ${
          ages.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Fasce d'Età</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Corsi per tutte le età
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                age: "6-8 anni",
                title: "Piccoli Esploratori",
                desc: "Primo approccio all'inglese attraverso gioco, canzoni e attività pratiche.",
                focus: ["Ascolto", "Vocabolario base", "Pronuncia", "Divertimento"],
              },
              {
                age: "9-11 anni",
                title: "Giovani Studenti",
                desc: "Consolidamento delle basi con conversazione semplice e attività più strutturate.",
                focus: ["Conversazione", "Lettura", "Scrittura base", "Sicurezza"],
              },
              {
                age: "12-14 anni",
                title: "Adolescenti",
                desc: "Sviluppo della fluidità e della capacità di esprimere idee e opinioni.",
                focus: ["Conversazione fluida", "Vocabolario avanzato", "Tempi complessi", "Autonomia"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <span className="font-mono-label text-xs tracking-widest text-amber uppercase">{item.age}</span>
                <h3 className="font-display text-2xl font-bold text-navy mt-3 mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/80 mb-6">{item.desc}</p>
                <div className="space-y-2">
                  {item.focus.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber" />
                      <span className="font-body text-sm">{f}</span>
                    </div>
                  ))}
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
            Dai un dono ai tuoi bambini
          </h2>
          <p className="font-body text-lg text-navy/80 mb-10 max-w-2xl mx-auto">
            L'inglese è una porta verso il mondo. Contatta Barry per scoprire come i tuoi bambini possono imparare in modo naturale e divertente.
          </p>
          <a
            href="https://wa.me/393937620160"
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
