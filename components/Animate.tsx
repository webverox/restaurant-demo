"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "top" | "bottom" | "left" | "right";

interface AnimateProps {
  children: ReactNode;
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function Animate({
  children,
  direction = "bottom",
  distance = 30,
  duration = 0.7,
  delay = 0,
  className,
}: AnimateProps) {
  const offset = {
    top: { y: -distance },
    bottom: { y: distance },
    left: { x: -distance },
    right: { x: distance },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
