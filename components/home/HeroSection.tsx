"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-obsidian flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-kong.png')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian/90" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-barlow font-light text-[11px] tracking-widest4 uppercase text-ivory/50 mb-6"
          >
            Galerie · Sculptures & Figurines de Luxe
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-bebas text-[clamp(72px,12vw,180px)] leading-none tracking-wide text-ivory mb-6"
          >
            L&apos;ART<br />
            PREND<br />
            FORME
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-cormorant font-light italic text-ivory/70 text-[18px] md:text-[22px] leading-relaxed max-w-lg mb-12"
          >
            Posséder une œuvre unique ne devrait pas être un privilège.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <Link
              href="/catalogue"
              className="inline-block font-barlow font-light text-[11px] tracking-widest3 uppercase bg-ivory text-obsidian px-10 py-4 hover:bg-obsidian hover:text-ivory border border-ivory transition-colors duration-200"
            >
              Découvrir la collection
            </Link>
            <Link
              href="/contact"
              className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-ivory/60 hover:text-ivory transition-colors duration-200"
            >
              Demande privée →
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3"
      >
        <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-ivory/30 rotate-90 origin-center mb-6">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-ivory/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
