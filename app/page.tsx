import { AboutSection } from "./components/AboutSection";
import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      <IntroSection />
      <AboutSection />
    </main>
  );
}
