/* ============================================================
   CONTACT — English With Barry
   Single source of truth for every contact entry point.
   The site has one job: start a conversation. Every CTA
   opens WhatsApp with a message already written, so the
   visitor only has to press send.
   ============================================================ */

export const WHATSAPP_NUMBER = "393937620160";
export const EMAIL = "corsiinglesepadova@gmail.com";
export const LOCATION = "Padova, Italia";

/** The level test. One test on the whole site — this one. */
export const LEVEL_TEST_URL = "https://tally.so/r/q4aG6G";

/** Build a wa.me link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-written openers, one per context. Each one is written in the
 * visitor's voice and already says what they need, so Barry can reply
 * with something useful instead of "ciao, come posso aiutarti?".
 */
export const WA = {
  /** Hero + navbar + floating button — the main entry point. */
  general: whatsappLink(
    "Ciao Barry! Vorrei migliorare il mio inglese. Ti racconto brevemente la mia situazione:",
  ),
  adulti: whatsappLink(
    "Ciao Barry! Sono interessato/a a un percorso di inglese per adulti. Il mio livello attuale è:",
  ),
  bambini: whatsappLink(
    "Ciao Barry! Vorrei informazioni sui corsi di inglese per bambini. Mio figlio/a ha:",
  ),
} as const;

export const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Informazioni corsi di inglese",
)}`;
