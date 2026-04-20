"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, casques, usbs } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type Section = "tous" | "speaker" | "casque" | "usb";

export default function CatalogueClient() {
  const [activeSection, setActiveSection] = useState<Section>("tous");

  const sections: { key: Section; label: string }[] = [
    { key: "tous", label: "Tous" },
    { key: "speaker", label: "Speaker Kong" },
    { key: "casque", label: "Casque Bluetooth" },
    { key: "usb", label: "Clé USB" },
  ];

  const showSpeakers = activeSection === "tous" || activeSection === "speaker";
  const showCasques = activeSection === "tous" || activeSection === "casque";
  const showUsbs = activeSection === "tous" || activeSection === "usb";

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
          Collection
        </motion.h1>
      </div>

      {/* Section filters */}
      <div className="py-6 flex flex-wrap items-center gap-3 border-b border-obsidian/10">
        {sections.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`font-barlow font-light text-[10px] tracking-widest uppercase px-5 py-2 border transition-colors duration-200 ${
              activeSection === key
                ? "border-obsidian bg-obsidian text-ivory"
                : "border-obsidian/20 text-museum hover:border-obsidian/50"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="ml-auto font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum">
          {activeSection === "tous"
            ? `${products.length + casques.length + usbs.length} produits`
            : activeSection === "speaker"
            ? `${products.length} coloris`
            : activeSection === "casque"
            ? `${casques.length} coloris`
            : `${usbs.length} produit`}
        </span>
      </div>

      {/* Speaker Kong section */}
      <AnimatePresence mode="wait">
        {showSpeakers && (
          <motion.div
            key="speakers"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="pt-16 pb-12"
          >
            {activeSection === "tous" && (
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="font-barlow font-light text-[9px] tracking-widest4 uppercase text-museum mb-2">
                    Enceinte d&apos;art
                  </p>
                  <h2 className="font-bebas text-[clamp(36px,5vw,72px)] leading-none tracking-wide text-obsidian">
                    Speaker Kong
                  </h2>
                </div>
                <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum pb-2">
                  {products.length} coloris
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider speaker → casque */}
      {activeSection === "tous" && (
        <div className="border-t border-obsidian/10 my-4" />
      )}

      {/* Casque Bluetooth section */}
      <AnimatePresence mode="wait">
        {showCasques && (
          <motion.div
            key="casques"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, delay: activeSection === "tous" ? 0.1 : 0 }}
            className="pt-16 pb-28"
          >
            {activeSection === "tous" && (
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="font-barlow font-light text-[9px] tracking-widest4 uppercase text-museum mb-2">
                    Audio haute fidélité
                  </p>
                  <h2 className="font-bebas text-[clamp(36px,5vw,72px)] leading-none tracking-wide text-obsidian">
                    Casque Bluetooth
                  </h2>
                </div>
                <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum pb-2">
                  {casques.length} coloris
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {casques.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Divider casque → usb */}
      {activeSection === "tous" && (
        <div className="border-t border-obsidian/10 my-4" />
      )}

      {/* Clé USB section */}
      <AnimatePresence mode="wait">
        {showUsbs && (
          <motion.div
            key="usbs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, delay: activeSection === "tous" ? 0.15 : 0 }}
            className="pt-16 pb-28"
          >
            {activeSection === "tous" && (
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="font-barlow font-light text-[9px] tracking-widest4 uppercase text-museum mb-2">
                    Accessoire collector
                  </p>
                  <h2 className="font-bebas text-[clamp(36px,5vw,72px)] leading-none tracking-wide text-obsidian">
                    Clé USB
                  </h2>
                </div>
                <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum pb-2">
                  {usbs.length} produit
                </span>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {usbs.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard product={product} index={i} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
