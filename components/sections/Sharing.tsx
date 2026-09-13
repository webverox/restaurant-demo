"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const fadeUpItemVariants: Variants = {
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

export default function Sharing() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-10 lg:py-36">
      {/* Left Column - Image with Animated Decorative Border */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Animated Accent Border Frame */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 0, y: 0 },
            visible: {
              opacity: 1,
              x: -12,
              y: -12,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            },
          }}
          className="absolute inset-0 h-full w-full border border-[#c8a27e]"
        />

        {/* Main Image Container */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
          className="relative aspect-4/3 overflow-hidden bg-[#d9d0c3]"
        >
          <Image
            src="/sharing.avif"
            alt="Colorful seasonal vegetables ready for the kitchen"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            width={700}
            height={525}
          />
        </motion.div>
      </motion.div>

      {/* Right Column - Text Content */}
      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:pl-16"
      >
        <motion.p
          variants={fadeUpItemVariants}
          className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#a66d45]"
        >
          03 / Made for sharing
        </motion.p>

        <motion.h2
          variants={fadeUpItemVariants}
          className="max-w-lg font-serif text-5xl leading-none tracking-[-0.045em] md:text-7xl"
        >
          A feast of the <em className="font-light">everyday.</em>
        </motion.h2>

        <motion.p
          variants={fadeUpItemVariants}
          className="mt-8 max-w-md text-lg leading-8 text-[#656158]"
        >
          The fire is our oldest ingredient. It brings out the sweetness in a
          carrot, the tenderness in a cut of meat, and the stories in everyone
          gathered close by.
        </motion.p>
      </motion.div>
    </section>
  );
}
