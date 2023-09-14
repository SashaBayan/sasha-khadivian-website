import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-wrap justify-center gap-20 bg-[#2B3851] px-10 py-20 md:justify-between md:px-16 lg:flex-nowrap lg:gap-32 "
    >
      {/* copy */}
      <div className="flex flex-col gap-5">
        <h3 className="font-primary text-lg font-bold uppercase tracking-widest text-white">
          About
        </h3>
        <p className="max-w-md font-secondary !leading-relaxed md:max-w-lg">
          At Helvetica Lake, we believe in the power of innovation and efficient
          software design. Founded by Sasha Khadivian, an engineer with over a
          decade of experience at companies like Airbnb and Apple, our mission
          is to help businesses unlock their full potential through tailored
          software solutions. With deep expertise in various languages and
          tools, and a passion for driving projects to completion, we are
          committed to ensuring your software needs are met with precision and
          dedication.
        </p>
      </div>
      {/* photo */}
      <div className="flex flex-col items-center justify-center gap-5 lg:w-[448px]">
        <Image
          className="hidden rounded-full lg:block"
          width={160}
          height={160}
          src="/founder-photo.png"
          alt="Sasha Khadivian photo"
        />
        <Image
          className="rounded-full lg:hidden"
          width={120}
          height={120}
          src="/founder-photo.png"
          alt="Sasha Khadivian photo"
        />
        <div className="flex flex-col gap-2 text-center text-sm">
          <p> Sasha Khadivian </p>
          <p> Founder of Helvetica Lake</p>
        </div>
      </div>
    </section>
  );
}
