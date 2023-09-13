import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex w-full justify-between bg-black px-10 py-5 text-sm text-white">
      {/* left section w logo and company name */}
      <div className="inline">
        <Image
          className="-mb-5 inline"
          src="/hl-logo.svg"
          alt="Helvetica Lake Logo"
          width={27}
          height={40}
          priority
        />
        <span className="ml-5">Helvetica Lake</span>
      </div>
      {/* right section with anchor links */}
      <div className="flex gap-10">
        <a>About</a>
        <a>Services</a>
        <a>Case Studies</a>
        <a>Testimonials</a>
        <a>Contact</a>
      </div>
    </div>
  );
}
