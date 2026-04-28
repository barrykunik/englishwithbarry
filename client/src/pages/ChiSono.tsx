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

const TEACHER_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663421105445/cFGdWDkrANNYKLKZNYEBQs/barry_beach_full_38434cdb.jpg";

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
  const story = useInView();
  const philosophy = useInView();
  const credentials = useInView();
  const cta = useInView();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Full Width Image Section */}
        <section className="w-full bg-white">
          <img
            src={TEACHER_IMAGE}
            alt="Barry, insegnante di inglese"
            className="w-full h-auto object-contain"
          />
        </section>

        {/* Info Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Chi Sono</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-navy mt-4 mb-6 leading-tight">
              Ciao, sono <span className="italic text-amber">Barry</span>
            </h1>
            <p className="font-body text-lg text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Sono un insegnante di inglese australiano, madrelingua, con quasi 20 anni di esperienza. 
              Credo che l'inglese debba essere vivo, pratico e concreto — proprio come lo sport: si impara facendo.
            </p>
            <div className="space-y-4 max-w-2xl">
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
        </section>

        {/* Story Section */}
        <section
          ref={story.ref}
          className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
            story.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center">La Mia Storia</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-amber">Come Ho Iniziato</h3>
                <p className="font-body text-lg leading-relaxed">
                  Sono Barry, australiano, madrelingua e insegnante di inglese da quasi 20 anni. Sportivo per natura, credo in un inglese vivo, pratico e concreto — proprio come lo sport: si impara facendo, muovendosi e usando la lingua in modo reale.
                </p>
              </div>
              <p className="font-body text-lg leading-relaxed">
                Ho iniziato a insegnare inglese quasi 20 anni fa, lavorando con studenti di tutte le età e livelli. Nel corso degli anni, ho sviluppato il mio metodo, ispirato ai TED Talks, che si è rivelato straordinariamente efficace.
              </p>
              <p className="font-body text-lg leading-relaxed">
                Quando mi sono trasferito a Padova, ho deciso di portare questa passione qui. Oggi insegno adulti e bambini, online e in presenza, con l'obiettivo di far parlare l'inglese con sicurezza e naturalezza.
              </p>
              <p className="font-body text-lg leading-relaxed">
                Sono anche padre di un bambino cresciuto bilingue. Questa esperienza diretta mi permette di supportare i genitori nel trasmettere la lingua ai figli in modo naturale ed efficace — senza stress, senza forzature.
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-navy">La Mia Filosofia</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-amber pl-6">
                <h3 className="font-display text-xl font-bold text-navy mb-2">L'inglese si impara facendo</h3>
                <p className="font-body text-lg text-foreground/80">Non studiando regole. Ogni lezione è un'esperienza, non una sessione di grammatica.</p>
              </div>
              <div className="border-l-4 border-amber pl-6">
                <h3 className="font-display text-xl font-bold text-navy mb-2">La fiducia è la base</h3>
                <p className="font-body text-lg text-foreground/80">Creo un ambiente dove gli studenti si sentono sicuri di sbagliare e imparare.</p>
              </div>
              <div className="border-l-4 border-amber pl-6">
                <h3 className="font-display text-xl font-bold text-navy mb-2">Contenuti veri e interessanti</h3>
                <p className="font-body text-lg text-foreground/80">Ascolti contenuti veri, parli di argomenti che ti interessano, usi l'inglese come lo usano i madrelingua.</p>
              </div>
              <div className="border-l-4 border-amber pl-6">
                <h3 className="font-display text-xl font-bold text-navy mb-2">Risultati garantiti</h3>
                <p className="font-body text-lg text-foreground/80">Non prometto miracoli, ma garantisco progressi rapidi e visibili. Il metodo funziona.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section
          ref={credentials.ref}
          className={`py-20 md:py-28 bg-amber/5 overflow-hidden transition-all duration-700 ${
            credentials.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-navy">Credenziali</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-3">🇦🇺 Madrelingua Australiano</h3>
                <p className="font-body text-foreground/80">Nato e cresciuto in Australia. Accento autentico e comprensione profonda della cultura anglofona.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-3">📚 Esperienza Comprovata</h3>
                <p className="font-body text-foreground/80">Esperienza con adulti, bambini, professionisti e studenti di tutti i livelli. Metodo collaudato e provato.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-3">🎓 Esami Internazionali</h3>
                <p className="font-body text-foreground/80">Qualificato per preparare studenti agli esami IELTS, TOEFL e Cambridge. Conosco le strategie vincenti.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-3">👨‍👧 Insegnamento ai Bambini</h3>
                <p className="font-body text-foreground/80">Esperienza diretta nell'insegnamento linguistico ai bambini. Capisco le sfide e le opportunità.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={cta.ref}
          className={`py-20 md:py-28 bg-navy text-white overflow-hidden transition-all duration-700 ${
            cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Pronti a Iniziare?</h2>
            <p className="font-body text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Se cerchi un modo moderno, motivante e concreto per imparare l'inglese, sei nel posto giusto. Contattami per una consulenza gratuita.
            </p>
            <a
              href="https://wa.me/393937620160"
              className="inline-block bg-amber hover:bg-amber/90 text-navy font-body font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contatta Barry su WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
