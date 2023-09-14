import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex w-full justify-between bg-black px-10 py-5 text-sm text-white">
      {/* left section w logo and company name */}
      <div className="inline">
        <Image
          className="-mb-5 inline transform transition-all duration-1000 ease-in-out hover:rotate-180 hover:animate-pulse"
          src="/hl-logo.svg"
          alt="Helvetica Lake Logo"
          width={27}
          height={40}
          priority
        />
        <a href="/" className="ml-5 cursor-pointer hover:animate-pulse">
          Helvetica Lake
        </a>
      </div>
      {/* right section with anchor links */}
      <div className="hidden gap-10 md:flex">
        <div className="hover:animate-pulse">
          <a href="#about" className="cursor-pointer ">
            About
          </a>
        </div>
        <a href="#services" className="cursor-pointer hover:animate-pulse">
          Services
        </a>
        <a href="#testimonials" className="cursor-pointer hover:animate-pulse">
          Testimonials
        </a>
        <a href="#contact" className="cursor-pointer hover:animate-pulse">
          Contact
        </a>
      </div>
    </div>
  );
}
