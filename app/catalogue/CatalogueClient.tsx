"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function CatalogueClient() {
  const [activeColoris, setActiveColoris] = useState<string>("tous");

  const coloris = Array.from(new Set(products.map((p) => p.coloris)));

  const filtered = products.filter((p) =>
    activeColoris === "tous" ? true : p.coloris === activeColoris
  );

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16">
      {/* Page header */}
      <div className="pt-20 pb-12 border-b border-obsidian/10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-3"
        >
          Richard Orlinski × Kessef Art
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bebas text-[clamp(52px,8vw,120px)] leading-none tracking-wide text-obsidian"
        >
          Speaker Kong
        </motion.h1>
      </div>

      {/* Filters */}
      <div className="py-6 flex flex-wrap items-center gap-3 border-b border-obsidian/10">
        <button
          onClick={() => setActiveColoris("tous")}
          className={`font-barlow font-light text-[10px] tracking-widest uppercase px-5 py-2 border transition-colors duration-200 ${
            activeColoris === "tous"
              ? "border-obsidian bg-obsidian text-ivory"
              : "border-obsidian/20 text-museum hover:border-obsidian/50"
          }`}
        >
          Tous
        </button>
        {coloris.map((c) => (
          <button
            key={c}
            onClick={() => setActiveColoris(c)}
            className={`font-barlow font-light text-[10px] tracking-widest uppercase px-5 py-2 border transition-colors duration-200 ${
              activeColoris === c
                ? "border-obsidian bg-obsidian text-ivory"
                : "border-obsidian/20 text-museum hover:border-obsidian/50"
            }`}
          >
            {c}
          </button>
        ))}
        <span className="ml-auto font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum">
          {filtered.length} coloris
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-12 pb-28">
        <AnimatePresence mode="sync">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
