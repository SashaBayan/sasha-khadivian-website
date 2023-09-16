import Image from "next/image";

export function ContactUsSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-10 px-10 py-20 text-center text-[#21313C] lg:flex-nowrap"
    >
      {/* copy */}
      <div className="flex flex-col gap-5">
        <h3 className="font-primary text-2xl font-light !leading-normal sm:text-3xl md:text-4xl">
          Reach Out
        </h3>
        <p className="font-secondary max-w-lg text-sm font-normal !leading-relaxed sm:text-base">
          If you&apos;d like a consultation or have any questions, drop me an
          email. Let&apos;s build something exceptional together.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mb-0.5"
            width={24}
            height={24}
            src="/mail-icon.svg"
            alt="email icon"
          />
          <a href="mailto:sasha@helveticalake.com">sasha@helveticalake.com</a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mt-1"
            width={24}
            height={24}
            src="/linkedin-icon.svg"
            alt="linkedin icon"
          />
          <a
            href="https://www.linkedin.com/in/sashakhadivian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            /companies/helvetica-lake
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mt-1"
            width={24}
            height={24}
            src="/calendar-icon.svg"
            alt="calendar icon"
          />
          <a
            href="https://calendly.com/sashakhadivian/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a 30 min consultation
          </a>
        </div>
      </div>
    </section>
  );
}
