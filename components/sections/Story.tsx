"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const characterVariants: Variants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "inline",
  },
};

const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.1,
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

export default function StorySection() {
  const textLine1 = "Food with a little ";
  const emText = "smoke";
  const textLine2 = " in its story.";

  return (
    <section
      id="story"
      className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:px-10 lg:py-36"
    >
      <div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#a66d45]"
        >
          01 / The beginning
        </motion.p>

        <motion.h2
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-md font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl"
        >
          {/* Regular Text Part 1 */}
          {textLine1.split("").map((char, index) => (
            <motion.span key={`line1-${index}`} variants={characterVariants}>
              {char}
            </motion.span>
          ))}

          {/* Styled Emphasized Text */}
          <em className="font-light">
            {emText.split("").map((char, index) => (
              <motion.span key={`em-${index}`} variants={characterVariants}>
                {char}
              </motion.span>
            ))}
          </em>

          {/* Regular Text Part 2 */}
          {textLine2.split("").map((char, index) => (
            <motion.span key={`line2-${index}`} variants={characterVariants}>
              {char}
            </motion.span>
          ))}

          {/* Blinking Cursor */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block text-[#a66d45]"
          >
            |
          </motion.span>
        </motion.h2>
      </div>

      {/* Right Column (Image & Narrative Paragraph) */}
      <div className="grid gap-8 sm:grid-cols-[1fr_0.85fr] sm:items-end">
        {/* Animated Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="aspect-4/5 overflow-hidden bg-[#d9d0c3]"
        >
          <Image
            src="/beginning.avif"
            alt="Friends sharing dinner in a welcoming restaurant"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            width={600}
            height={750}
          />
        </motion.div>

        {/* Animated Text Block */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="mb-8 text-lg leading-8 text-[#656158]">
            Ember began with a simple idea: the best meals are the ones that
            linger. We cook over fire, work closely with small farms, and let
            the seasons decide what comes next.
          </p>
          <a
            href="#visit"
            className="inline-block border-b border-[#25241f] pb-2 text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Meet the people behind Ember ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
