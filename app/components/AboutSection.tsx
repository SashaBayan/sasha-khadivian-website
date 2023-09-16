import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex flex-col flex-wrap items-center justify-center gap-10 bg-[#2B5148] px-10 py-20 md:px-16 "
    >
      <h3 className="font-primary text-lg font-bold uppercase tracking-widest text-white">
        Hello,
      </h3>
      <p className="font-secondary max-w-md text-sm font-light !leading-relaxed md:max-w-lg md:text-base">
        I'm a highly adaptable and versatile technical leader with a passion for
        crafting elegant and efficient solutions to complex problems. I have
        built and maintained software applications and have led teams to do the
        same.
      </p>
      <p className="font-secondary max-w-md text-sm font-light !leading-relaxed md:max-w-lg md:text-base">
        I enjoy mentoring and guiding fellow engineers, helping to increase team
        velocity and deliver high-quality products. My experience ranges from
        startups to FAANG companies, where I have had the opportunity to learn
        and grow as a professional in various settings.
      </p>
      <p className="font-secondary max-w-md text-sm font-light !leading-relaxed md:max-w-lg md:text-base">
        I strive to adapt and contribute effectively to each unique environment,
        always aiming to collaborate and help teams achieve their goals.I am
        always eager to take on new challenges and continue learning. If you'd
        like to connect, collaborate or discuss opportunities, please feel free
        to reach out. Let's create something amazing together!
      </p>
      <Image
        width={60}
        height={60}
        src="/sasha-teardrop.png"
        alt="sasha photo"
      />
    </section>
  );
}
