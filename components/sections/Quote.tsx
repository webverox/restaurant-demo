"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const starVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Quote() {
  return (
    <section className="bg-[#f4f0e8] px-6 py-24 text-center lg:px-10 lg:py-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={starVariants} className="mb-8 inline-block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="text-3xl text-[#d6a276]"
          >
            ✳
          </motion.div>
        </motion.div>

        <motion.blockquote
          variants={fadeUpVariants}
          className="font-serif text-4xl leading-tight tracking-[-0.035em] md:text-6xl"
        >
          “The kind of place you find once, then keep coming back to.”
        </motion.blockquote>

        <motion.p
          variants={fadeUpVariants}
          className="mt-8 text-[10px] uppercase tracking-[0.25em] text-[#8b857b]"
        >
          — Hassan Raza
        </motion.p>
      </motion.div>
    </section>
  );
}
