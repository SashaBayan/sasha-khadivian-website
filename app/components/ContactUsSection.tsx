import Image from "next/image";

export function ContactUsSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-10 px-10 py-20 text-center lg:flex-nowrap"
    >
      {/* copy */}
      <div className="flex flex-col gap-5">
        <h3 className="font-primary text-2xl font-bold !leading-normal sm:text-3xl md:text-4xl">
          Contact Us
        </h3>
        <p className="max-w-lg font-secondary text-sm font-normal !leading-relaxed sm:text-base">
          We&apos;re here to help you navigate your software journey. If
          you&apos;d like a consultation or have any questions, drop us an email
          and let&apos;s build something exceptional together.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mb-0.5"
            width={20}
            height={20}
            src="/mail-icon.svg"
            alt="email icon"
          />
          <a href="mailto:info@helveticalake.com">info@helveticalake.com</a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mb-0.5"
            width={20}
            height={20}
            src="/phone-icon.svg"
            alt="phone icon"
          />
          <a href="tel:+6505508584">(650) 550-8584</a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
            className="-mt-1"
            width={34}
            height={32}
            src="/linkedin-icon.svg"
            alt="linkedin icon"
          />
          <a
            href="https://www.linkedin.com/companies/helvetica-lake"
            target="_blank"
            rel="noopener noreferrer"
          >
            /companies/helvetica-lake
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 hover:animate-pulse">
          <Image
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
