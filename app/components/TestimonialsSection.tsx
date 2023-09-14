import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="flex flex-col justify-around bg-[#2B3851] px-10 py-20 sm:px-20 lg:flex-nowrap lg:gap-32 lg:px-40">
      {/* copy */}
      <h3 className="font-primary text-lg font-bold uppercase tracking-widest text-white">
        Testimonials
      </h3>
      <div>
        <div className="flex flex-col gap-5">
          <p className="max-w-[130px] font-secondary !leading-relaxed md:max-w-5xl">
            Sasha is a brilliant and incredibly talented engineer. He leveled up
            our whole team while we worked together. I love his thoughtful,
            incisive code reviews, his tidy, well-tested code, and the way he is
            able to break down large problems into small, manageable pieces.
            Sasha is really a joy to work with - I learned so much from working
            together! I would love to be on the same team again.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Image
              className="rounded-full"
              width={70}
              height={70}
              src="/abby.png"
              alt="Sasha Khadivian photo"
            />
            <div className="flex flex-col gap-2 text-center text-sm">
              <p> Abby Howell </p>
              <Image
                src="/reforge-logo.png"
                width={50}
                height={16}
                alt="reforge logo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="max-w-[130px] font-secondary !leading-relaxed md:max-w-5xl">
            Sasha is a thoughtful and effective software engineer and architect.
            Just as importantly, he's a pleasure to work with and ramps up on
            projects quickly. Sasha has not only worked on many complex tech
            stacks, but he has experience with a wide range of teams. So he
            knows the right way to build and the right way to steer coworkers
            toward good solutions. I'd be happy for us to have Sasha working
            with us on more projects soon.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Image
              className="rounded-full"
              width={70}
              height={70}
              src="/matt.png"
              alt="testimonial photo"
            />
            <div className="flex flex-col gap-2 text-center text-sm">
              <p> Abby Howell </p>
              <Image
                src="/reforge-logo.png"
                width={50}
                height={16}
                alt="reforge logo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="max-w-[130px] font-secondary !leading-relaxed md:max-w-5xl">
            Sasha has some of the best problem solving skills I've ever seen.
            The project we worked on together required a constant state of
            change and Sasha was up for the challenge. His attitude never
            wavered and he delivered on a high quality product that solved a big
            problem for our company.
          </div>
          <div className="flex items-center justify-center gap-5">
            <Image
              className="rounded-full"
              width={70}
              height={70}
              src="/cameron.png"
              alt="testimonial photo"
            />
            <div className="flex flex-col gap-2 text-center text-sm">
              <p> Abby Howell </p>
              <Image
                src="/flyflat-logo.png"
                width={35}
                height={24}
                alt="flyflat logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
