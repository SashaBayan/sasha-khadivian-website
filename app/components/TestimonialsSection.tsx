import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-between gap-10 bg-gradient-to-b from-[#2B5148] from-30% to-[#739C95] px-20 py-16 lg:flex-nowrap"
    >
      <h3 className="font-primary text-center text-lg font-bold uppercase tracking-widest text-white lg:text-left">
        Reviews
      </h3>
      <div className="flex flex-wrap justify-center gap-16 lg:justify-between">
        {testimonialsData.map((testimonial) => (
          <Testimonial
            key={testimonial.name}
            copy={testimonial.copy}
            name={testimonial.name}
            photoSrc={testimonial.photoSrc}
            role={testimonial.role}
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
  role: string;
}

function Testimonial({ copy, name, photoSrc, role }: ITestimonial) {
  return (
    <div className="flex max-w-[350px] flex-col gap-5 text-base md:gap-8">
      <p className="font-secondary">{copy}</p>
      <div className="flex items-center gap-5">
        <Image
          className="rounded-full"
          width={70}
          height={70}
          src={photoSrc}
          alt="testimonial photo"
        />
        <div className="flex flex-col gap-1 text-sm">
          <p> {name} </p>
          <p> {role} </p>
        </div>
      </div>
    </div>
  );
}

const testimonialsData: ITestimonial[] = [
  {
    copy: "“As a colleague, what I really enjoy about working with Sasha is his attention to detail, his approachable demeanor, and his willingness to roll up his sleeves for any issue. He always made sure to clarify any open questions he had about a ticket, and he would often suggest even better ways of approaching an issue that I had not thought of. In addition to being great to work with, Sasha brings his warm personality and sense of humor to every interaction with the team...”",
    name: "Tess Peppers",
    photoSrc: "/tess.png",
    role: "Sr. Prod Manager, Reforge",
  },
  {
    copy: "“Sasha was one of the two frontend developers working on the UI for the ML product my team built at Apple. He was extremely friendly, had a strong desire to learn and took his work seriously. It was a pleasure working with Sasha and I hope we get to work together in the future again.”",
    name: "Roja Bandari",
    photoSrc: "/roja.png",
    role: "Head of Risk Intelligence, Stripe",
  },
  {
    copy: "“Sasha has some of the best problem solving skills I've ever seen. The project we worked on together required a constant state of change and Sasha was up for the challenge. His attitude never wavered and he delivered on a high quality product that solved a big problem for our company.”",
    name: "Cameron Resnick",
    photoSrc: "/cameron.png",
    role: "Chief Operating Officer, FlyFlat",
  },
];
