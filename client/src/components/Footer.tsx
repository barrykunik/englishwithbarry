/* ============================================================
   FOOTER — English With Barry
   Design: Dark navy, amber accents, clean layout
   ============================================================ */

import { Globe, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

const navLinks = [
  { label: "Adulti", href: "#adulti" },
  { label: "Bambini", href: "#bambini" },
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Recensioni", href: "#recensioni" },
  { label: "Contatti", href: "#contatti" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[oklch(0.18_0.06_255)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center">
                <Globe className="w-5 h-5 text-navy" />
              </div>
              <span className="font-display font-bold text-lg">
                English <span className="text-amber">With Barry</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Corsi di inglese a Padova per adulti e bambini. Metodo pratico, dinamico e coinvolgente.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:corsiinglesepadova@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-amber flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono-label text-xs text-amber uppercase tracking-widest mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-body text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-label text-xs text-amber uppercase tracking-widest mb-4">Contatti</h4>
            <div className="space-y-3">
              <a
                href="mailto:corsiinglesepadova@gmail.com"
                className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-amber shrink-0" />
                corsiinglesepadova@gmail.com
              </a>
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber shrink-0" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 font-body text-sm text-white/60">
                <Globe className="w-4 h-4 text-amber shrink-0" />
                Padova, Italia
              </div>
            </div>

            {/* Free test CTA */}
            <div className="mt-6 bg-amber/10 border border-amber/20 rounded-xl p-4">
              <p className="font-body text-xs text-white/70 mb-3">
                Non sai qual è il tuo livello di inglese?
              </p>
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs font-semibold text-amber hover:text-white transition-colors"
              >
                Fai il test gratuito →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono-label text-xs text-white/40">
            © {new Date().getFullYear()} English With Barry. Tutti i diritti riservati.
          </p>
          <p className="font-mono-label text-xs text-white/40">
            Corsi di inglese online e in presenza a Padova
          </p>
        </div>
      </div>
    </footer>
  );
}
