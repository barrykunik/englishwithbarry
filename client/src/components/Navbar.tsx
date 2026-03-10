/* ============================================================
   NAVBAR — English With Barry
   Design: Warm Modernism / Mediterranean Energy
   Sticky with blur on scroll, amber CTA button
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Adulti", href: "#adulti" },
  { label: "Bambini", href: "#bambini" },
  { label: "Servizi", href: "#servizi" },
  { label: "Chi Sono", href: "#chi-sono" },
  { label: "Recensioni", href: "#recensioni" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center">
                <Globe className="w-5 h-5 text-amber" />
              </div>
              <span className="font-display font-bold text-lg text-navy leading-tight">
                English<br className="hidden" />
                <span className="text-amber"> With Barry</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-body font-medium text-navy/80 hover:text-navy transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber px-5 py-2.5 rounded-full text-sm font-body font-semibold"
              >
                <span>Contattami</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-3 text-base font-body font-medium text-navy hover:bg-sand rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/393000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-amber px-5 py-3 rounded-full text-center text-sm font-body font-semibold"
              >
                <span>Contattami su WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
