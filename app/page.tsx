import { AboutSection } from "./components/AboutSection";
import { ContactUsSection } from "./components/ContactUsSection";
import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";
import { SkillsSection } from "./components/SkillsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-[#739C95] text-white">
      <NavBar />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactUsSection />
    </main>
  );
}
