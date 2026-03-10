/* ============================================================
   HOME PAGE — English With Barry
   Design: Warm Modernism / Mediterranean Energy
   Sections: Hero → Stats → Courses → Method → Services → Testimonials → About → Contact → Footer
   ============================================================ */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CoursesSection from "@/components/CoursesSection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import LevelTestSection from "@/components/LevelTestSection";
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
      <MethodSection />
      <ServicesSection />
      <TestimonialsSection />
      <LevelTestSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
