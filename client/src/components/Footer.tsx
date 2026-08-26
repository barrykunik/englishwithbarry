/* ============================================================
   FOOTER — English With Barry
   Design: Dark navy, amber accents, clean layout
   ============================================================ */

import { Globe, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";
import { WA, EMAIL, EMAIL_LINK, LEVEL_TEST_URL } from "@/lib/contact";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
    </svg>
  );
}

/* Real routes, not "#anchors" — these used to be hash links to
   homepage sections, which did nothing at all on every sub-page.
   The footer is now the full site map: everything demoted from the
   main nav is still one click away from here. */
const navGroups = [
  {
    title: "Percorsi",
    links: [
      { label: "Adulti", href: "/adulti" },
      { label: "— Individuali", href: "/adulti/individuali" },
      { label: "— Di gruppo", href: "/adulti/gruppo" },
      { label: "Bambini", href: "/bambini" },
      { label: "Tutti i servizi", href: "/servizi" },
    ],
  },
  {
    title: "Risorse",
    links: [
      { label: "Test di livello", href: LEVEL_TEST_URL, external: true },
      { label: "Palestra dei Verbi", href: "/palestra-verbi" },
      { label: "Verbi irregolari", href: "/verbi-irregolari" },
      { label: "Verbi frasali", href: "/verbi-frasali" },
      { label: "Chi sono", href: "/chi-sono" },
      { label: "Recensioni", href: "/recensioni" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.06_255)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
                href={WA.general}
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
                href="https://www.instagram.com/englishwithbarry/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/Englishwithbarry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@englishwithbarry"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-black flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono-label text-xs text-amber uppercase tracking-widest mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-body text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-mono-label text-xs text-amber uppercase tracking-widest mb-4">Contatti</h4>
            <div className="space-y-3">
              <a
                href={EMAIL_LINK}
                className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-amber shrink-0" />
                {EMAIL}
              </a>
              <a
                href={WA.general}
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
                href={LEVEL_TEST_URL}
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
