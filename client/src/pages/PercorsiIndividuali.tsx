import { useEffect } from "react";
import { CheckCircle2, Monitor, Users, Zap, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const courses = [
  {
    title: "TRAVELLING ENGLISH",
    desc: "Percorso pratico e immersivo per comunicare con sicurezza in viaggio: aeroporti, hotel, ristoranti, situazioni impreviste.",
    options: [
      { hours: 10, price: 250 },
      { hours: 15, price: 360 },
    ],
    tags: ["Viaggi", "Conversazione", "Situazioni reali"],
    color: "border-amber",
  },
  {
    title: "BUSINESS ENGLISH",
    desc: "Inglese professionale per email, telefonate, riunioni e presentazioni. Ideale per chi usa l'inglese nel lavoro.",
    options: [
      { hours: 15, price: 370 },
      { hours: 20, price: 480 },
    ],
    tags: ["Email", "Riunioni", "Presentazioni"],
    color: "border-navy",
  },
  {
    title: "FLUENT ENGLISH",
    desc: "Il percorso più completo: conversazione avanzata, vocabolario ricco e sicurezza nella lingua quotidiana.",
    options: [
      { hours: 30, price: 720 },
    ],
    tags: ["Conversazione", "Fluency", "Autonomia"],
    color: "border-amber",
    featured: true,
  },
];

export default function PercorsiIndividuali() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="min-h-screen bg-sand">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-navy to-navy/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Adulti</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
            Percorsi Individuali
          </h1>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Con English With Barry non segui singole lezioni, ma un percorso che ti aiuta a parlare inglese con costanza, lavorando su frasi reali, situazioni quotidiane e uso pratico della lingua.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "Online o in presenza", desc: "Principalmente online per flessibilità, con possibilità in presenza a Padova su richiesta." },
              { icon: Users, title: "Solo per te", desc: "Lezioni one-to-one personalizzate al tuo livello, ritmo e obiettivi specifici." },
              { icon: Zap, title: "Risultati concreti", desc: "Ogni percorso è strutturato per portarti a usare l'inglese nella vita reale." },
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

      {/* Courses */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-mono-label text-sm tracking-widest text-amber uppercase">I Percorsi</span>
            <h2 className="font-display text-4xl font-bold text-navy mt-2">
              Scegli il percorso giusto per te
            </h2>
          </div>

          <div className="space-y-8">
            {courses.map((course, i) => (
              <div key={i} className={`bg-white rounded-2xl shadow-sm border-l-4 ${course.color} p-8 relative overflow-hidden`}>
                {course.featured && (
                  <span className="absolute top-4 right-4 bg-amber text-navy text-xs font-mono-label font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Più scelto
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold text-navy mb-3">{course.title}</h3>
                <p className="font-body text-base text-foreground/80 leading-relaxed mb-6">{course.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tags.map((tag, j) => (
                    <span key={j} className="bg-amber/10 text-amber text-xs font-mono-label font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {course.options.map((opt, j) => (
                    <div key={j} className="bg-sand rounded-xl px-6 py-4 text-center min-w-[130px]">
                      <div className="font-display text-2xl font-bold text-navy">€{opt.price}</div>
                      <div className="font-mono-label text-xs text-muted-foreground mt-1">{opt.hours} ore</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-navy mb-10 text-center">Come funziona</h2>
          <div className="space-y-4">
            {[
              { step: "01", title: "Discovery call gratuita", desc: "Ci conosciamo online o in presenza a Padova. Capiamo il tuo livello e i tuoi obiettivi." },
              { step: "02", title: "Percorso su misura", desc: "Scelgo il percorso più adatto e lo personalizzo in base al tuo punto di partenza." },
              { step: "03", title: "Lezioni pratiche", desc: "Ogni lezione è collegata alla successiva: niente teoria isolata, solo inglese reale e continuità." },
              { step: "04", title: "Progressi concreti", desc: "In poche settimane noti la differenza: parli di più, con più scioltezza e meno blocchi." },
            ].map(({ step, title, desc }, i) => (
              <div key={i} className="flex gap-6 items-start bg-sand rounded-xl p-6 border border-border">
                <div className="font-display text-3xl font-bold text-amber/40 shrink-0 w-12">{step}</div>
                <div>
                  <h4 className="font-display font-bold text-navy mb-1">{title}</h4>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">Inizia con una discovery call gratuita</h2>
          <p className="font-body text-lg text-white/75 mb-10">
            Scrivimi su WhatsApp e fissiaimo una chiamata conoscitiva senza impegno. Ti aiuto a capire qual è il percorso giusto per te.
          </p>
          <a
            href="https://wa.me/393937620160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-amber hover:bg-amber/90 text-navy font-body font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
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
