"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { gallery } from "@/utils/gallery";

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#ded6c9] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#a66d45]">
              04 / In the room
            </p>
            <h2 className="font-serif text-6xl tracking-tighter md:text-8xl">
              The Ember mood
            </h2>
          </div>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#656158] md:block">
            Scenes from our table
          </span>
        </motion.div>

        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-45 md:grid-cols-4"
        >
          {gallery.map((image) => (
            <motion.div
              key={image.src}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-xs bg-[#c8beb0] ${
                image.className || ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                width={800}
                height={800}
              />
              {/* Subtle hover overlay glow */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
