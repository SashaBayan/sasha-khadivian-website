import { AboutSection } from "./components/AboutSection";
import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
}
