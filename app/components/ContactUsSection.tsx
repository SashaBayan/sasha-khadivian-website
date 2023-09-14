import Image from "next/image";

export function ContactUsSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-10 py-20 text-center lg:flex-nowrap">
      {/* copy */}
      <div className="flex flex-col gap-5">
        <h3 className="font-primary text-2xl font-bold !leading-normal sm:text-3xl md:text-4xl">
          Contact Us
        </h3>
        <p className="max-w-lg font-secondary text-sm font-normal !leading-relaxed sm:text-base">
          We're here to help you navigate your software journey. If you'd like a
          consultation or have any questions, drop us an email and let’s build
          something exceptional together.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2">
          <Image
            className="-mb-0.5"
            width={20}
            height={20}
            src="/mail-icon.svg"
            alt="email icon"
          />
          <p>info@helveticalake.com</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            className="-mb-0.5"
            width={20}
            height={20}
            src="/phone-icon.svg"
            alt="phone icon"
          />
          <p>(650) 550-8584</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            className="-mt-1"
            width={34}
            height={32}
            src="/linkedin-icon.svg"
            alt="linkedin icon"
          />
          <p>/companies/helvetica-lake</p>
        </div>
      </div>
    </section>
  );
}
