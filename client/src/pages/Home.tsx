/* ============================================================
   HOME PAGE — English With Barry
   Design: Warm Modernism / Mediterranean Energy

   The page has ONE job: get the visitor to start a conversation.
   Five beats, in order — first impression, credibility, one
   choice, proof, contact.

   Everything else still exists, one click away:
     · Metodo T.E.D. / Mini T.E.D. → /adulti, /bambini
     · Elenco completo servizi     → /servizi
     · Tutte le recensioni         → /recensioni
     · Biografia completa          → /chi-sono
     · Test di livello             → Tally (LEVEL_TEST_URL in lib/contact.ts)
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CoursesSection from "@/components/CoursesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CoursesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
