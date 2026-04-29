"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="bg-carbon overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] md:aspect-auto min-h-[400px]"
        >
          <Image
            src="/site2.png"
            alt="Éternité — Kessef Art"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-obsidian/20" />
        </motion.div>

        {/* Text */}
        <div className="flex items-center px-12 md:px-20 py-20 md:py-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-ivory/30 mb-6"
            >
              Notre Manifeste
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-bebas text-[clamp(36px,5vw,64px)] leading-none tracking-wide text-ivory mb-8"
            >
              L&apos;Éternité<br />comme standard
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-cormorant font-light italic text-ivory/70 text-[18px] md:text-[21px] leading-relaxed mb-10"
            >
              Chaque pièce est une conversation entre l&apos;artiste et l&apos;éternité. Nous sélectionnons
              uniquement ce qui résiste au temps.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="w-12 h-px bg-ivory/30 mb-8" />
              <p className="font-cormorant font-light text-ivory/50 text-[15px] leading-relaxed">
                Fondée sur la conviction que l&apos;art authentique transcende les tendances, Kessef Art
                collabore exclusivement avec des artistes dont le travail engage un dialogue durable
                avec les collectionneurs les plus avisés du monde.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
