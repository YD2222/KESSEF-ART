"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "347", label: "Œuvres vendues", suffix: "+" },
  { value: "12", label: "Artistes représentés", suffix: "" },
  { value: "48", label: "Pays livrés", suffix: "" },
  { value: "100", label: "Authenticité garantie", suffix: "%" },
];

export default function StatsSection() {
  return (
    <section className="bg-ivory py-24 md:py-32 border-t border-obsidian/8">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x divide-obsidian/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:px-12"
            >
              <div className="font-bebas text-[clamp(52px,7vw,96px)] leading-none tracking-wide text-obsidian mb-2">
                {stat.value}
                <span className="text-museum">{stat.suffix}</span>
              </div>
              <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
