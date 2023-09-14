import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="flex flex-col justify-between gap-10 bg-[#2B3851] px-16 py-16 lg:flex-nowrap">
      <h3 className="text-center font-primary text-lg font-bold uppercase tracking-widest text-white md:text-left">
        Testimonials
      </h3>
      <div className="flex flex-wrap justify-center gap-5 md:justify-between">
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            copy={testimonial.copy}
            name={testimonial.name}
            photoSrc={testimonial.photoSrc}
            logo={testimonial.logo}
          />
        ))}
      </div>
    </section>
  );
}

interface ITestimonial {
  copy: string;
  name: string;
  photoSrc: string;
  logo: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

function Testimonial({ copy, name, photoSrc, logo }: ITestimonial) {
  return (
    <div className="flex w-72 flex-col gap-12 text-sm ">
      <p className="font-secondary !leading-relaxed ">{copy}</p>
      <div className="flex gap-5">
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src={photoSrc}
          alt="testimonial photo"
        />
        <div className="flex flex-col gap-2 text-center text-sm">
          <p> {name} </p>
          <Image
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={logo.alt}
          />
        </div>
      </div>
    </div>
  );
}

const testimonialsData: ITestimonial[] = [
  {
    copy: "Sasha is a brilliant and incredibly talented engineer. He leveled up our whole team while we worked together. I love his thoughtful, incisive code reviews, his tidy, well-tested code, and the way he is able to break down large problems into small, manageable pieces. Sasha is really a joy to work with - I learned so much from working together! I would love to be on the same team again.",
    name: "Abby Howell",
    photoSrc: "/abby.png",
    logo: {
      src: "/reforge-logo.png",
      width: 50,
      height: 16,
      alt: "reforge logo",
    },
  },
  {
    copy: "Sasha is a thoughtful and effective software engineer and architect. Just as importantly, he's a pleasure to work with and ramps up on projects quickly. Sasha has not only worked on many complex tech stacks, but he has experience with a wide range of teams. So he knows the right way to build and the right way to steer coworkers toward good solutions. I'd be happy for us to have Sasha working with us on more projects soon.",
    name: "Matt Conrad",
    photoSrc: "/matt.png",
    logo: {
      src: "/reforge-logo.png",
      width: 50,
      height: 16,
      alt: "reforge logo",
    },
  },
  {
    copy: "Sasha has some of the best problem solving skills I've ever seen. The project we worked on together required a constant state of change and Sasha was up for the challenge. His attitude never wavered and he delivered on a high quality product that solved a big problem for our company.",
    name: "Cameron Resnick",
    photoSrc: "/cameron.png",
    logo: {
      src: "/flyflat-logo.png",
      width: 35,
      height: 24,
      alt: "flyflat logo",
    },
  },
];
