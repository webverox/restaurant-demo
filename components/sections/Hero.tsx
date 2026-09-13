"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-180 items-end overflow-hidden bg-[#39362f] text-white lg:min-h-200"
    >
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full"
      >
        <Image
          src="/hero.avif"
          alt="A chef preparing a beautiful dish over an open flame"
          className="object-cover object-center"
          fill
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-t from-[#1e1d19]/90 via-[#1e1d19]/15 to-[#1e1d19]/30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10 lg:pb-40"
      >
        <motion.p
          variants={itemVariants}
          className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#e5b890]"
        >
          Fire · Field · Feeling
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.055em] sm:text-8xl lg:text-[9.5rem]"
        >
          Gather
          <br />
          <em className="font-light">around.</em>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-xs text-sm leading-6 text-white/75">
            A neighborhood restaurant shaped by open flame, generous plates, and
            the people who make a table feel like home.
          </p>

          <div className="flex gap-3">
            <a
              href="#visit"
              className="bg-[#d6a276] px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-[#25241f] transition-colors hover:bg-white"
            >
              Reserve a table
            </a>
            <a
              href="#menu"
              className="border border-white/60 px-6 py-4 text-[10px] uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-[#25241f]"
            >
              Explore menu
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.25em] text-white/55 lg:block"
      >
        Scroll to discover ↓
      </motion.div>
    </section>
  );
}
