import Image from "next/image";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="flex flex-wrap-reverse justify-around gap-20 bg-[#E6ECF6] p-10 py-20 lg:flex-nowrap lg:gap-40"
    >
      {/* logos */}
      <div className="flex flex-col items-center justify-center gap-5">
        <Image
          width={432}
          height={328}
          src="/logos.png"
          alt="technologies used logos"
        />
      </div>
      {/* copy */}
      <div className="flex flex-col gap-5">
        <h3 className="font-primary text-lg font-bold uppercase tracking-widest text-[#2B3851]">
          Services
        </h3>
        <div className="max-w-md font-secondary !leading-relaxed text-[#2B3851]">
          <p>
            We offer a broad spectrum of software engineering services tailored
            to your needs. Our specialties include:
          </p>
          <ul className="list-disc md:ml-10">
            <li>
              Web Development: With expertise in Nextjs, React, and Nodejs, we
              can build robust, user-friendly web applications.
            </li>
            <li>
              Database Management: Be it PostgreSQL or MongoDB, we've got your
              data needs covered.
            </li>
            <li>
              DevOps: Seamless deployment and scalable solutions using platforms
              like AWS, Vercel, and Google Cloud Run.
            </li>
            <li>
              Consultation: Leverage our experience to drive your software
              projects forward, from planning to execution.
            </li>
          </ul>
        </div>
        <a href="#contact">
          <button className="rounded border border-solid border-[#070C38] p-2 px-3.5 text-sm text-[#070C38] sm:text-base">
            Get in Touch
          </button>
        </a>
      </div>
    </section>
  );
}
