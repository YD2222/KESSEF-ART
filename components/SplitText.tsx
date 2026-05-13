"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  trigger?: "onMount" | "onView";
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  once = true,
  trigger = "onView",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { y: "110%", opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          },
        },
      };

  const motionProps =
    trigger === "onView"
      ? { whileInView: "visible", viewport: { once } }
      : { animate: "visible" };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      {...motionProps}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0">
          <motion.span className="inline-block" variants={wordVariant}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
