/* ============================================================
   WHATSAPP FLOAT BUTTON — English With Barry
   Design: Fixed bottom-right, green WhatsApp button with pulse
   ============================================================ */

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/393000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contattami su WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 flex items-center justify-center">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-navy text-xs font-body font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Scrivimi su WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-white rotate-45" />
      </div>
    </a>
  );
}
