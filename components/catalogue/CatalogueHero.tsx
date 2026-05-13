"use client";

import { motion } from "framer-motion";
import Kong360Viewer from "@/components/Kong360Viewer";
import SplitText from "@/components/SplitText";

const sculptures = [
  {
    frames: [
      "/kong-360/crackled1.jpg",
      "/kong-360/crackled2.jpg",
      "/kong-360/crackled3.jpg",
      "/kong-360/crackled4.jpg",
    ],
    label: "Kong Crackled Gold",
    slug: "kong-crackled-gold",
    delay: 0,
    scale: 0.88,
    speedDeg: 32,
  },
  {
    frames: [
      "/kong-360/green1.jpg",
      "/kong-360/green2.jpg",
      "/kong-360/green3.jpg",
      "/kong-360/green4.jpg",
    ],
    label: "Kong Christmas Green",
    slug: "kong-christmas-green",
    delay: 0.2,
    scale: 1.15,
    speedDeg: 36,
  },
  {
    frames: [
      "/kong-360/amber1.jpg",
      "/kong-360/amber2.jpg",
      "/kong-360/amber3.jpg",
      "/kong-360/amber4.jpg",
    ],
    label: "Kong Bubble Amber",
    slug: "kong-bubble-amber",
    delay: 0.4,
    scale: 0.88,
    speedDeg: 28,
  },
];

export default function CatalogueHero() {
  return (
    <section className="bg-obsidian overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20 md:py-28">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-ivory/30 mb-4"
          >
            Richard Orlinski × Kessef Art
          </motion.p>
          <h2 className="font-bebas text-[clamp(40px,6vw,80px)] leading-none tracking-wide text-ivory">
            <SplitText text="Sculptures d'Exception" trigger="onMount" delay={0.15} stagger={0.07} />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-cormorant font-light italic text-ivory/40 text-[15px] mt-3"
          >
            Glissez pour explorer · Cliquez pour découvrir
          </motion.p>
        </div>

        {/* 3 sculptures */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-4 md:gap-8 lg:gap-16">
          {sculptures.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: s.delay, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transform: `scale(${s.scale})`,
                transformOrigin: "bottom center",
              }}
            >
              <Kong360Viewer
                frames={s.frames}
                label={s.label}
                slug={s.slug}
                speedDeg={s.speedDeg}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-ivory/10" />
      </div>
    </section>
  );
}
