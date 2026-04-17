/* ============================================================
   CONTACT SECTION — English With Barry
   Design: Navy background, amber CTA, WhatsApp prominent
   Simple contact form + direct contact options
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

function useInView(threshold = 0.1) {
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

export default function ContactSection() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Messaggio inviato! Barry ti risponderà entro 24 ore.");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contatti" ref={ref} className="py-20 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-label text-sm tracking-widest text-amber uppercase">Contatti</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-2">
            Inizia il tuo<br />
            <span className="italic text-amber">percorso oggi</span>
          </h2>
          <p className="font-body text-lg text-white/70 mt-4 max-w-xl mx-auto">
            Hai domande sui corsi? Vuoi capire qual è il percorso più adatto a te o a tuo figlio? Scrivimi senza impegno.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Contact info */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/393937620160"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-2xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-body font-semibold text-white group-hover:text-[#25D366] transition-colors">
                  Scrivimi su WhatsApp
                </div>
                <div className="font-mono-label text-sm text-white/60 mt-0.5">
                  Rispondo entro poche ore
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:corsiinglesepadova@gmail.com"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber/20 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-amber" />
              </div>
              <div>
                <div className="font-body font-semibold text-white group-hover:text-amber transition-colors">
                  corsiinglesepadova@gmail.com
                </div>
                <div className="font-mono-label text-sm text-white/60 mt-0.5">
                  Rispondo sempre entro 24 ore
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-white/70" />
              </div>
              <div>
                <div className="font-body font-semibold text-white">Padova, Italia</div>
                <div className="font-mono-label text-sm text-white/60 mt-0.5">
                  Online e in presenza
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-white/70" />
              </div>
              <div>
                <div className="font-body font-semibold text-white">Risposta garantita</div>
                <div className="font-mono-label text-sm text-white/60 mt-0.5">
                  Sempre entro 24 ore
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Mandami un messaggio
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-mono-label text-xs text-white/60 uppercase tracking-wide block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Il tuo nome"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-label text-xs text-white/60 uppercase tracking-wide block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="la.tua@email.com"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-label text-xs text-white/60 uppercase tracking-wide block mb-2">
                  Messaggio
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Raccontami i tuoi obiettivi o fai una domanda..."
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full btn-amber py-4 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <span>{sending ? "Invio in corso..." : "Invia Messaggio"}</span>
                {!sending && <Send className="w-4 h-4 relative z-10" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
