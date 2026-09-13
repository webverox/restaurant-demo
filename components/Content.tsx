import Hero from "./sections/Hero";
import StorySection from "./sections/Story";
import Menu from "./sections/Menu";
import Sharing from "./sections/Sharing";
import Gallery from "./sections/Gallery";
import Quote from "./sections/Quote";

const Content = () => {
  return (
    <>
      <Hero />
      <StorySection />
      <Menu />
      <Sharing />
      <Gallery />
      <Quote />

      <section
        id="visit"
        className="bg-[#1e211d] px-6 py-24 text-[#f4f0e8] lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#d6a276]">
              05 / Come by
            </p>
            <h2 className="max-w-xl font-serif text-7xl leading-[0.9] tracking-[-0.055em] md:text-9xl">
              Pull up a <em className="font-light">chair.</em>
            </h2>
            <a
              href="mailto:hello@ember.restaurant"
              className="mt-12 inline-block border-b border-[#d6a276] pb-2 text-sm text-[#d6a276]"
            >
              hello@restaurant.demo
            </a>
          </div>
          <div className="grid gap-10 border-t border-white/20 pt-8 text-sm sm:grid-cols-2 lg:pt-0 lg:border-t-0">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Visit
              </p>
              <p className="leading-7">
                14 Franklin Street
                <br />
                Richmond, VA 23220
                <br />
                <br />
                999 999 9999
              </p>
            </div>
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/45">
                Hours
              </p>
              <p className="leading-7">
                Tuesday — Thursday
                <br />
                5pm — 10pm
                <br />
                <br />
                Friday — Saturday
                <br />
                5pm — 11pm
              </p>
            </div>
            <a
              href="mailto:reservations@ember.restaurant"
              className="bg-[#d6a276] px-6 py-4 text-center text-[10px] uppercase tracking-[0.18em] text-[#25241f] transition-colors hover:bg-white sm:col-span-2"
            >
              Make a reservation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
