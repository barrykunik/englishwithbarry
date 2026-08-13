/* ============================================================
   REVIEWS — English With Barry

   Verbatim from the public Google Business listing (5.0 · 7
   reviews, read 12 Aug 2026). Kept in each reviewer's ORIGINAL
   language: some wrote in English, some in Italian. That mix is
   the point — they're real people, not copy.

   A seventh reviewer (Stefania Andretta) left 5 stars with no
   written text, so she isn't listed here but counts toward the
   rating.

   Do not edit the `text` fields. If a review changes on Google,
   re-read it there and update — never paraphrase.
   ============================================================ */

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/English+With+Barry/@45.4065037,11.8912454,12z/data=!4m8!3m7!1s0xa0f213a4092951ab:0x2508314b82a57fea!8m2!3d45.4065038!4d11.8912455!9m1!1b1!16s%2Fg%2F11z13sc61j";

export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = 7;

export type Review = {
  name: string;
  initials: string;
  /** Original language of the review, for the lang attribute. */
  lang: "it" | "en";
  text: string;
  color: string;
  /** True where the quote is trimmed; Google collapses long reviews. */
  truncated?: boolean;
};

export const reviews: Review[] = [
  {
    name: "Chiara",
    initials: "C",
    lang: "it",
    text: "Studiare Inglese con Barry è stato molto divertente, coinvolgente e innovativo nei metodi e interessante nei temi sempre attuali e diversi proposti a lezione. Ora mi sento più fluente e con più strumenti nell'esprimermi in questa lingua che mi piace molto e dopo le lezioni di gruppo ho più padronanza e sicurezza nella conversazione e nell'ascolto! Grazie!",
    color: "bg-navy",
  },
  {
    name: "Ugo Bruschi",
    initials: "UB",
    lang: "en",
    text: "I highly recommend Barry as an English teacher! He is patient, professional, and makes every lesson enjoyable and effective. Thanks to him, my confidence in speaking English has improved tremendously. If you are looking for a great teacher who truly cares about his students, Barry is the one!",
    color: "bg-amber",
  },
  {
    name: "Rossana Bertelle",
    initials: "RB",
    lang: "it",
    text: "Se volete imparare a parlare bene in inglese non c'è niente di meglio che parlare con un native speaker. Inoltre potrete migliorare anche il vostro livello di inglese perché Barry spazia tra vari argomenti (con i TED)…",
    color: "bg-teal",
    truncated: true,
  },
  {
    name: "Antonella Bonafin",
    initials: "AB",
    lang: "en",
    text: "I found Barry's lessons to be both informative and interesting. In addition, it was enjoyable to speak to each other in English and listen to other people's opinions about current affairs. So I think that these lessons can improve your English.",
    color: "bg-navy",
  },
  {
    name: "Barbara Stangherlin",
    initials: "BS",
    lang: "it",
    text: "Le lezioni sono molto coinvolgenti e adattate al proprio livello anche se si è in gruppo. Si impara e si migliora sempre. Super consigliato.",
    color: "bg-amber",
  },
  {
    name: "Giovanna Businaro",
    initials: "GB",
    lang: "en",
    text: "Lessons with Barry are very smart. Thanks to Barry I improved my conversational English and I feel more self confident when I speak in English.",
    color: "bg-teal",
  },
];

/** The two shown on the homepage: one Italian, one English. */
export const homepageReviews = [reviews[0], reviews[1]];
