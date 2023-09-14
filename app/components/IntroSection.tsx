export function IntroSection() {
  return (
    // Top section
    <section className="flex w-full items-center justify-center p-10 sm:p-20">
      <div className="flex max-w-xl flex-col gap-10 text-center">
        <h1 className="font-primary text-2xl font-bold !leading-normal sm:text-3xl md:text-4xl">
          Helvetica Lake is a software consulting firm specializing in
          innovative solutions for your digital product needs.
        </h1>
        <h3 className="font-secondary text-sm font-normal !leading-relaxed sm:text-base">
          Frontend development, intricate backend systems, conceptual product
          development – we got you covered.
        </h3>
        {/* CTA */}
        <a>
          <button className="rounded border border-solid border-white p-2 px-3.5 text-sm sm:text-base">
            Explore Our Services
          </button>
        </a>
      </div>
    </section>
  );
}
