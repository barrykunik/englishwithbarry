/*
   ADULTI PAGE — English With Barry
   Design: Warm Mediterranean style
   Exact content from original website with modern graphics
   ============================================================ */

import { useRef, useEffect, useState } from "react";
import { CheckCircle2, Users, MapPin, Monitor, BookOpen, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const ADULTS_IMAGE = "/classroom-adults.jpg";

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
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  const hero = useInView();
  const suited = useInView();
  const pathSection = useInView();
  const method = useInView();
  const whyEffective = useInView();
  const cta = useInView();

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      
      {/* Hero Section */}
      <section
        ref={hero.ref}
        className={`py-16 md:py-24 bg-gradient-to-br from-navy to-navy/90 overflow-hidden transition-all duration-700 ${
          hero.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Inglese per adulti
            </h1>
            <p className="text-xl text-white/90 font-serif italic">Dal livello zero alla fluency</p>
          </div>
        </div>
      </section>

      {/* Sub-page cards */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Scegli il tuo percorso</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-2">Individuale o di gruppo?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="/adulti/individuali"
              className="group bg-sand rounded-2xl p-8 border border-border hover:border-amber hover:shadow-lg transition-all duration-300"
            >
              <div className="font-mono-label text-xs text-amber uppercase tracking-widest mb-3">One-to-one</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3 group-hover:text-amber transition-colors">
                Percorsi Individuali →
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                Travelling English, Business English o Fluent English. Lezioni personalizzate al 100% sui tuoi obiettivi e ritmi.
              </p>
            </a>
            <a
              href="/adulti/gruppo"
              className="group bg-sand rounded-2xl p-8 border border-border hover:border-amber hover:shadow-lg transition-all duration-300"
            >
              <div className="font-mono-label text-xs text-amber uppercase tracking-widest mb-3">Piccoli gruppi</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3 group-hover:text-amber transition-colors">
                Percorsi di Gruppo →
              </h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
                Gruppi da 2 a 10 persone. 30 ore di percorso strutturato, online, con dinamica di gruppo stimolante.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-white border border-border rounded-lg px-3 py-1 font-mono-label text-xs text-navy">€159 – €199</span>
                <span className="bg-white border border-border rounded-lg px-3 py-1 font-mono-label text-xs text-navy">30 ore</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy mb-8">Percorsi di Inglese per Adulti a Padova</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Con English with Barry puoi seguire percorsi di inglese per adulti a Padova, pensati per chi vuole iniziare da zero, ripartire dalle basi o migliorare la propria fluency in inglese.
            </p>
            <p>
              I percorsi sono principalmente online, per garantire flessibilità e continuità, con possibilità di svolgerli anche in presenza a Padova, su richiesta.
            </p>
          </div>
        </div>
      </section>

      {/* A chi sono rivolti */}
      <section
        ref={suited.ref}
        className={`py-16 md:py-24 bg-sand transition-all duration-700 ${
          suited.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy mb-8">A chi sono rivolti i percorsi</h2>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <p className="text-lg font-semibold text-navy mb-6">Il percorso è adatto a te se:</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">non hai mai studiato inglese</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">lo hai studiato poco</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">lo capisci ma fai fatica a parlarlo</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">vuoi sentirti più sicuro quando parli inglese</span>
              </li>
            </ul>

            <p className="text-gray-700 text-lg italic border-t pt-6">
              L'obiettivo non è studiare l'inglese come a scuola, ma usarlo nella vita reale, con naturalezza.
            </p>
          </div>
        </div>
      </section>

      {/* Un percorso di inglese */}
      <section
        ref={pathSection.ref}
        className={`py-16 md:py-24 bg-white transition-all duration-700 ${
          pathSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy mb-8">Un percorso di inglese, non semplici lezioni</h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            A differenza delle classiche lezioni di inglese, i percorsi di inglese a Padova di English with Barry creano un ambiente immersivo, in cui ogni incontro è collegato al successivo.
          </p>

          <h3 className="text-2xl font-bold text-navy mb-8">Come si svolgono i percorsi</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-sand rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Monitor className="w-6 h-6 text-amber" />
                <h4 className="font-semibold text-navy">Modalità</h4>
              </div>
              <p className="text-gray-700">Percorsi di inglese online o in presenza a Padova</p>
            </div>

            <div className="bg-sand rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-amber" />
                <h4 className="font-semibold text-navy">Formato</h4>
              </div>
              <p className="text-gray-700">Lezioni individuali (one-to-one) o in piccoli gruppi</p>
            </div>

            <div className="bg-sand rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-amber" />
                <h4 className="font-semibold text-navy">Personalizzazione</h4>
              </div>
              <p className="text-gray-700">Percorsi personalizzati in base al livello e agli obiettivi</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h4 className="text-xl font-semibold text-navy mb-6">Ogni lezione è strutturata per aiutarti a:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-amber rounded-full"></span>
                Comprendere meglio l'inglese parlato
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-amber rounded-full"></span>
                Parlare con più continuità
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-amber rounded-full"></span>
                Acquisire sicurezza nel tempo
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metodo T.E.D. */}
      <section
        ref={method.ref}
        className={`py-16 md:py-24 bg-sand transition-all duration-700 ${
          method.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-navy mb-8">Metodo di insegnamento per adulti: Metodo T.E.D.</h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Per i percorsi di inglese per adulti utilizzo il <strong>Metodo T.E.D.</strong>, un approccio pratico ispirato ai TED Talks, pensato per sviluppare comprensione e speaking in modo naturale.
          </p>

          <h3 className="text-2xl font-bold text-navy mb-8">Come funziona il Metodo T.E.D.</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 border-l-4 border-amber shadow-sm">
              <h4 className="text-xl font-bold text-navy mb-4">Talk</h4>
              <p className="text-gray-700">Ascolti inglese reale, spiegato e guidato</p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-amber shadow-sm">
              <h4 className="text-xl font-bold text-navy mb-4">Extract</h4>
              <p className="text-gray-700">Individui il vocabolario e le idee chiave</p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-amber shadow-sm">
              <h4 className="text-xl font-bold text-navy mb-4">Describe</h4>
              <p className="text-gray-700">Rielabori il contenuto con parole tue</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 italic text-center mb-12 p-6 bg-white rounded-lg border border-gray-200">
            Questo metodo rende l'inglese attivo, non teorico.
          </p>
        </div>
      </section>

      {/* Perché è efficace */}
      <section
        ref={whyEffective.ref}
        className={`py-16 md:py-24 bg-white transition-all duration-700 ${
          whyEffective.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-navy mb-8">Perché è efficace</h3>

          <div className="bg-gradient-to-br from-amber/10 to-amber/5 rounded-lg p-8 border border-amber/20">
            <p className="text-lg font-semibold text-navy mb-6">Il Metodo T.E.D. è efficace:</p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">anche se parti da zero</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">se vuoi migliorare la comprensione orale</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-amber flex-shrink-0 mt-1" />
                <span className="text-gray-700 text-lg">se vuoi parlare inglese in modo più fluido</span>
              </li>
            </ul>

            <p className="text-lg italic text-gray-700 border-t border-amber/30 pt-6">
              L'inglese non viene memorizzato, ma utilizzato.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8 text-center">
            Metodo ispirato ai contenuti di TED Talks. English with Barry non è affiliato con TED.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={cta.ref}
        className={`py-16 md:py-24 bg-navy text-white transition-all duration-700 ${
          cta.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Pronto a iniziare?</h2>
          <p className="text-xl text-white/90 mb-8">
            Fai il test gratuito per scoprire il tuo livello di inglese e ricevi un percorso personalizzato.
          </p>
          <a
            href="https://tally.so/r/q4aG6G"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber hover:bg-amber/90 text-navy font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Fai il test gratuito
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
