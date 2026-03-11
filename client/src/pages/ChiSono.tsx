/* ============================================================
   CHI SONO PAGE — English With Barry
   Design: Warm Mediterranean style
   Dedicated page about Barry
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { Award, Heart, Zap, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TEACHER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/IMG_20161011_191624_cropped_0cc0a1c7.jpg";

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

export default function ChiSono() {
  const hero = useInView();
  const story = useInView();
  const philosophy = useInView();
  const credentials = useInView();
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
              <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Chi Sono</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
                Ciao, sono <span className="italic text-amber">Barry</span>
              </h1>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8">
                Sono un insegnante di inglese australiano, madrelingua, con quasi 20 anni di esperienza. 
                Credo che l'inglese debba essere vivo, pratico e concreto — proprio come lo sport: si impara facendo.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy">Madrelingua Australiano</p>
                    <p className="font-body text-sm text-foreground/60">Nato e cresciuto in Australia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy">20+ Anni di Esperienza</p>
                    <p className="font-body text-sm text-foreground/60">Insegnante professionista certificato</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber/15 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-amber" />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-navy">Padre Bilingue</p>
                    <p className="font-body text-sm text-foreground/60">Capisco le sfide dell'insegnamento linguistico</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={TEACHER_IMAGE}
                alt="Barry, insegnante di inglese"
                className="rounded-3xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-navy text-white rounded-2xl p-6 shadow-lg max-w-xs">
                <p className="font-display text-sm font-bold mb-1">🇦🇺 Australiano</p>
                <p className="font-body text-xs">Madrelingua con accento autentico</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section
        ref={story.ref}
        className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
          story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">La Mia Storia</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Come Ho Iniziato
            </h2>
          </div>

          <div className="space-y-8 font-body text-base text-white/90 leading-relaxed">
            <p>
              Sono nato e cresciuto in Australia, dove l'inglese è la mia lingua madre. 
              Fin da giovane, ho capito che la lingua è uno strumento potentissimo — apre porte, crea connessioni, cambia vite.
            </p>
            
            <p>
              Ho iniziato a insegnare inglese quasi 20 anni fa, lavorando con studenti di tutte le età e livelli. 
              Nel corso degli anni, ho sviluppato il mio metodo, ispirato ai TED Talks, che si è rivelato straordinariamente efficace.
            </p>
            
            <p>
              Quando mi sono trasferito a Padova, ho deciso di portare questa passione qui. 
              Oggi insegno adulti e bambini, online e in presenza, con l'obiettivo di far parlare l'inglese con sicurezza e naturalezza.
            </p>
            
            <p>
              Sono anche padre di un bambino cresciuto bilingue. Questa esperienza diretta mi permette di supportare i genitori 
              nel trasmettere la lingua ai figli in modo naturale ed efficace — senza stress, senza forzature.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        ref={philosophy.ref}
        className={`py-20 md:py-28 bg-white overflow-hidden transition-all duration-700 ${
          philosophy.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">La Mia Filosofia</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Come Insegno
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: "Pratico, Non Teorico",
                desc: "L'inglese si impara facendo, non studiando regole. Ogni lezione è un'esperienza, non una sessione di grammatica.",
              },
              {
                icon: Heart,
                title: "Relazione Prima di Tutto",
                desc: "Creo un ambiente dove gli studenti si sentono sicuri di sbagliare e imparare. La fiducia è la base.",
              },
              {
                icon: Globe,
                title: "Autentico e Reale",
                desc: "Ascolti contenuti veri, parli di argomenti che ti interessano, usi l'inglese come lo usano i madrelingua.",
              },
              {
                icon: Award,
                title: "Risultati Concreti",
                desc: "Non prometto miracoli, ma garantisco progressi rapidi e visibili. Il metodo funziona.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-sand rounded-2xl p-8 border border-border">
                <item.icon className="w-10 h-10 text-amber mb-4" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section
        ref={credentials.ref}
        className={`py-20 md:py-28 bg-sand overflow-hidden transition-all duration-700 ${
          credentials.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Credenziali</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mt-4">
              Qualifiche e Esperienza
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Madrelingua Australiano",
                desc: "Nato e cresciuto in Australia. Accento autentico e comprensione profonda della cultura anglofona.",
              },
              {
                title: "20+ Anni di Insegnamento",
                desc: "Esperienza con adulti, bambini, professionisti e studenti di tutti i livelli. Metodo collaudato e provato.",
              },
              {
                title: "Certificazioni Internazionali",
                desc: "Qualificato per preparare studenti agli esami IELTS, TOEFL e Cambridge. Conosco le strategie vincenti.",
              },
              {
                title: "Padre di un Bambino Bilingue",
                desc: "Esperienza diretta nell'insegnamento linguistico ai bambini. Capisco le sfide e le opportunità.",
              },
              {
                title: "Metodo T.E.D. Esclusivo",
                desc: "Sviluppato negli anni, ispirato ai TED Talks. Metodo moderno, efficace e coinvolgente.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border">
                <h3 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/80">{item.desc}</p>
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
            Pronto a imparare?
          </h2>
          <p className="font-body text-lg text-navy/80 mb-10 max-w-2xl mx-auto">
            Se cerchi un modo moderno, motivante e concreto per imparare l'inglese, sei nel posto giusto. 
            Contattami per una consulenza gratuita.
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
