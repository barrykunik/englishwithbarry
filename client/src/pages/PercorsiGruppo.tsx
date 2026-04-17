import { useEffect } from "react";
import { Users, MessageCircle, CheckCircle2, Headphones, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function PercorsiGruppo() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy to-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Adulti</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Percorsi di Gruppo
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            I percorsi di gruppo online di English With Barry sono pensati per chi desidera imparare e usare l'inglese con continuità, all'interno di un contesto strutturato, guidato e condiviso.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Vantaggi</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-2">Perché studiare in gruppo funziona</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Inglese in contesto reale", desc: "Usi l'inglese in un contesto condiviso, come nella vita reale: con più voci, più situazioni, più stimoli." },
              { icon: Headphones, title: "Ascolto e risposta", desc: "Sviluppi la capacità di capire e rispondere in tempo reale, abilità fondamentale per la fluency." },
              { icon: Users, title: "Motivazione costante", desc: "Il gruppo crea continuità: ti mantiene in allenamento e rende le lezioni più dinamiche e coinvolgenti." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="bg-sand rounded-2xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-amber/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">{title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexibility */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Flessibilità</span>
              <h2 className="font-display text-3xl font-bold text-navy mt-2 mb-4">Continuità senza attriti</h2>
              <p className="font-body text-base text-foreground/80 leading-relaxed mb-4">
                Il formato online ti permette di seguire le lezioni da casa negli orari più consoni alla tua agenda, senza perdere tempo negli spostamenti.
              </p>
              <p className="font-body text-base text-foreground/80 leading-relaxed">
                Ogni lezione è strutturata per creare continuità con la precedente, così il tuo progresso è costante e misurabile.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Lezioni online da casa tua",
                "Orari flessibili concordati con il gruppo",
                "Continuità tra una lezione e l'altra",
                "Nessuno spostamento necessario",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-amber shrink-0" />
                  <span className="font-body text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Formato</span>
            <h2 className="font-display text-3xl font-bold text-navy mt-2">Gruppi pensati per funzionare</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-sand rounded-2xl p-8 border border-border">
              <div className="font-display text-4xl font-bold text-amber mb-2">2–4</div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">Mini gruppo</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                Più spazio di parola, interazione diretta e feedback costante. L'esperienza si avvicina molto alle lezioni individuali, ma con la dinamica del gruppo.
              </p>
            </div>
            <div className="bg-sand rounded-2xl p-8 border border-border">
              <div className="font-display text-4xl font-bold text-amber mb-2">5–10</div>
              <h3 className="font-display text-xl font-bold text-navy mb-3">Gruppo standard</h3>
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                Maggiore varietà di accenti, risposte e interazioni. Ideale per chi vuole migliorare la comprensione orale e parlare in contesti più stimolanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Investimento</span>
          <h2 className="font-display text-4xl font-bold mt-2 mb-4">Durata e costo</h2>
          <p className="font-body text-white/70 mb-10">Percorso completo da 30 ore. Il costo varia in base alla dimensione del gruppo.</p>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-10 inline-block w-full max-w-sm mx-auto">
            <div className="font-display text-6xl font-bold text-amber mb-1">30</div>
            <div className="font-mono-label text-sm text-white/60 uppercase tracking-widest mb-6">ore totali</div>
            <div className="border-t border-white/20 pt-6">
              <div className="font-display text-3xl font-bold text-white">€159 – €199</div>
              <div className="font-body text-sm text-white/60 mt-1">per persona · varia in base al gruppo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-navy mb-4">Unisciti al prossimo gruppo</h2>
          <p className="font-body text-lg text-foreground/70 mb-10">
            Scrivimi su WhatsApp per sapere quando parte il prossimo gruppo e trovare insieme l'orario giusto per te.
          </p>
          <a
            href="https://wa.me/393937620160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy hover:bg-navy/90 text-white font-body font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Contattami su WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
