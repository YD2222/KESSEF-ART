"use client";

import { motion } from "framer-motion";
import Kong360Viewer from "@/components/Kong360Viewer";

const sculptures = [
  {
    frames: [
      "/kong-360/green1.jpg",
      "/kong-360/green2.jpg",
      "/kong-360/green3.jpg",
      "/kong-360/green4.jpg",
    ],
    label: "Kong Christmas Green",
    delay: 0,
  },
  {
    frames: [
      "/kong-360/green3.jpg",
      "/kong-360/green4.jpg",
      "/kong-360/green1.jpg",
      "/kong-360/green2.jpg",
    ],
    label: "Kong Christmas Green",
    delay: 0.3,
    startFrame: 2,
  },
  {
    frames: [
      "/kong-360/green2.jpg",
      "/kong-360/green3.jpg",
      "/kong-360/green4.jpg",
      "/kong-360/green1.jpg",
    ],
    label: "Kong Christmas Green",
    delay: 0.6,
    startFrame: 1,
  },
];

export default function CatalogueHero() {
  return (
    <section className="bg-obsidian overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-28">

        {/* Header text */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-ivory/30 mb-4"
          >
            Richard Orlinski × Kessef Art
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-bebas text-[clamp(40px,6vw,80px)] leading-none tracking-wide text-ivory"
          >
            Sculptures d&apos;Exception
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-cormorant font-light italic text-ivory/40 text-[15px] mt-3"
          >
            Glissez pour explorer chaque œuvre
          </motion.p>
        </div>

        {/* 3 Kongs */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-16 lg:gap-24">
          {sculptures.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
              // Centre plus grand, côtés plus petits
              style={{
                transform: i === 1 ? "scale(1.15)" : "scale(0.88)",
                transformOrigin: "bottom center",
              }}
            >
              <Kong360Viewer
                frames={s.frames}
                label={s.label}
                intervalMs={900 + i * 150}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom separator */}
        <div className="mt-16 border-t border-ivory/10" />
      </div>
    </section>
  );
}
