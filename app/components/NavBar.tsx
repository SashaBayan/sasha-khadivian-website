import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex w-full justify-between bg-black px-10 py-5 text-sm text-white">
      {/* left section w logo and company name */}
      <div className="inline">
        <Image
          className="-mb-5 inline transform transition-all duration-1000 ease-in-out hover:rotate-180"
          src="/hl-logo.svg"
          alt="Helvetica Lake Logo"
          width={27}
          height={40}
          priority
        />
        <span className="ml-5">Helvetica Lake</span>
      </div>
      {/* right section with anchor links */}
      <div className="hidden gap-10 md:flex">
        <a href="#about" className="cursor-pointer">
          About
        </a>
        <a href="#services" className="cursor-pointer">
          Services
        </a>
        {/* <a href="#clients" className="cursor-pointer">Case Studies</a> */}
        <a href="#testimonials" className="cursor-pointer">
          Testimonials
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </div>
    </div>
  );
}
