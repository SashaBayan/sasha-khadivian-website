import Image from "next/image";

export function ClientsSection() {
  return (
    <section
      id="about"
      className="flex justify-center gap-20 bg-white px-10 py-20 md:justify-between md:px-16 lg:flex-nowrap lg:gap-32 "
    >
      {/* copy */}
      <div className="flex w-full flex-col gap-5">
        <h3 className="mb-14 w-full text-center font-primary text-lg font-bold uppercase tracking-widest text-[#21313C]">
          Clients we&apos;ve worked with
        </h3>
        <div className="flex w-full flex-wrap justify-around gap-20 pb-8 md:flex-nowrap md:gap-10">
          <div className="flex items-center justify-center">
            <Image
              className="hidden md:block"
              width={254}
              height={50}
              src="/reforge-client-logo.png"
              alt="reforge logo"
            />
            <Image
              className="md:hidden"
              width={168}
              height={33}
              src="/reforge-client-logo.png"
              alt="reforge logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="hidden md:block"
              width={122}
              height={100}
              src="/flyflat-client-logo.png"
              alt="flyflat logo"
            />
            <Image
              className="md:hidden"
              width={81}
              height={33}
              src="/flyflat-client-logo.png"
              alt="flyflat logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="hidden md:block"
              width={270}
              height={52}
              src="/guardian-logo.png"
              alt="guardian logo"
            />
            <Image
              className="md:hidden"
              width={178}
              height={34}
              src="/guardian-logo.png"
              alt="guardian logo"
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="hidden md:block"
              width={100}
              height={100}
              src="/nsf-logo.png"
              alt="national science foundation logo"
            />
            <Image
              className="md:hidden"
              width={66}
              height={66}
              src="/nsf-logo.png"
              alt="national science foundation logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
