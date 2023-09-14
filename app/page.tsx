import { IntroSection } from "./components/IntroSection";
import { NavBar } from "./components/NavBar";
import Image from "next/image";

// next step: make About section responsive

export default function Home() {
  return (
    <main className="bg-black text-white">
      <NavBar />
      <IntroSection />

      <section className="flex flex-wrap justify-around gap-12 bg-[#2B3851] px-20 py-20 lg:flex-nowrap lg:px-56">
        {/* copy */}
        <div className="flex flex-col gap-5">
          <h3 className="font-primary text-lg font-bold uppercase tracking-widest text-white">
            About
          </h3>
          <p className="max-w-lg font-secondary !leading-relaxed">
            At Helvetica Lake, we believe in the power of innovation and
            efficient software design. Founded by Sasha Khadivian, an engineer
            with years of experience at renowned companies like Airbnb and
            Apple, our mission is to help businesses unlock their full potential
            through tailored software solutions. With deep expertise in various
            languages and tools, and a passion for driving projects to
            completion, we are committed to ensuring your software needs are met
            with precision and dedication.
          </p>
        </div>
        {/* photo */}
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            className="rounded-full"
            width={160}
            height={160}
            src="/founder-photo.png"
            alt="Sasha Khadivian photo"
          />
          <div className="flex flex-col gap-2 text-center text-sm">
            <p> Sasha Khadivian </p>
            <p> Founder of Helvetica Lake</p>
          </div>
        </div>
      </section>
    </main>
  );
}
