import { AboutSection } from "./components/AboutSection";
import { ContactUsSection } from "./components/ContactUsSection";
import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-[#01041D] text-white">
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </main>
  );
}
