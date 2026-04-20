"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Richard Orlinski",
    logo: "/logos/orlinski.png",
  },
  {
    name: "Market Maker Groupe",
    logo: "/logos/market-maker.jpg",
  },
  {
    name: "Voice of Design",
    logo: "/logos/voice-of-design.png",
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-ivory py-12 border-t border-obsidian/8">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-3 items-center divide-x divide-obsidian/10">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center px-10 py-4"
            >
              <div
                className="relative"
                style={{ width: 260, height: 90 }}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
