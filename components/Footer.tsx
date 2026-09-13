const Footer = () => {
  return (
    <footer className="bg-[#1e211d] px-6 pb-8 text-[#f4f0e8] lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-white/20 pt-8 text-[10px] uppercase tracking-[0.18em] sm:flex-row">
        <span className="font-serif text-xl normal-case tracking-[-0.04em]">
          EMBER<span className="text-[#d4a276]">.</span>
        </span>
        <div className="flex gap-6 text-white/55">
          <a href="#top">Instagram</a>
          <a href="#top">Journal</a>
          <a href="#top">Privacy</a>
        </div>
        <span className="text-white/35">© 2024 Ember Restaurant</span>
        <span className="text-white/35">
          © Demo Build by{" "}
          <a
            target="_blank"
            href="https://webverox.com"
            className="text-[#d6a276]"
          >
            Webverox
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
