"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute inset-x-0 top-0 z-20 border-b border-white/25 text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="font-serif text-2xl tracking-[-0.04em]">
          EMBER<span className="text-[#d4a276]">.</span>
        </a>

        <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.2em] md:flex">
          <a href="#story" className="transition-opacity hover:opacity-60">
            Our story
          </a>
          <a href="#menu" className="transition-opacity hover:opacity-60">
            Menu
          </a>
          <a href="#gallery" className="transition-opacity hover:opacity-60">
            Gallery
          </a>
          <a href="#visit" className="transition-opacity hover:opacity-60">
            Find us
          </a>
        </nav>

        <a
          href="#visit"
          className="hidden border border-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-[#25241f] md:block"
        >
          Book a table
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-white/60 px-3 py-2 text-xs md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-5 overflow-hidden border-t border-white/20 bg-[#25241f] px-6 py-6 text-xs uppercase tracking-[0.2em] md:hidden"
          >
            <a href="#story" onClick={() => setMenuOpen(false)}>
              Our story
            </a>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menu
            </a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
            <a href="#visit" onClick={() => setMenuOpen(false)}>
              Find us
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
