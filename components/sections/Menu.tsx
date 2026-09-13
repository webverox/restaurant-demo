"use client";

import { motion, Variants } from "framer-motion";
import { menuItems } from "@/utils/menu";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Menu() {
  return (
    <section
      id="menu"
      className="bg-[#2b302a] px-6 py-24 text-[#f4f0e8] lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="mb-16 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#d6a276]">
              02 / From the kitchen
            </p>
            <h2 className="font-serif text-6xl tracking-tighter md:text-8xl">
              Tonight&apos;s table
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/55">
            Our menu changes with the market. These are a few of the plates
            we&apos;re proud to share right now.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid border-t border-white/20 md:grid-cols-2 md:gap-x-16"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{
                x: 6,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
              }}
              className="flex items-start justify-between gap-6 border-b border-white/20 py-7 px-2 transition-colors rounded-xs"
            >
              <div>
                <h3 className="font-serif text-2xl tracking-[-0.02em]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-white/50">{item.description}</p>
              </div>
              <span className="pt-1 text-sm font-medium text-[#d6a276]">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <a
            href="#visit"
            className="bg-[#d6a276] px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-[#25241f] transition-all hover:bg-white hover:shadow-lg"
          >
            View full menu
          </a>
          <span className="self-center text-xs text-white/45">
            A la carte · Seven days a week
          </span>
        </motion.div>
      </div>
    </section>
  );
}
