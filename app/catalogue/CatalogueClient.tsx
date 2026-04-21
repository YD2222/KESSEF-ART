"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products, casques, usbs, exclusivites, digigraphies, livres, bestSellers, divers, textiles } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/products";

type Section = "tous" | "speaker" | "casque" | "usb" | "exclusivites" | "digigraphies" | "livres" | "best-sellers" | "divers" | "textiles";

const sections: { key: Section; label: string; subtitle: string; products: Product[] }[] = [
  { key: "speaker", label: "Speaker Kong", subtitle: "Enceinte d'art", products },
  { key: "casque", label: "Casque Bluetooth", subtitle: "Audio haute fidélité", products: casques },
  { key: "usb", label: "Clé USB", subtitle: "Accessoire collector", products: usbs },
  { key: "exclusivites", label: "Exclusivités", subtitle: "Sculptures & éditions limitées", products: exclusivites },
  { key: "digigraphies", label: "Digigraphies", subtitle: "Reproductions d'art", products: digigraphies },
  { key: "livres", label: "Livres", subtitle: "Art books & publications", products: livres },
  { key: "best-sellers", label: "Best Sellers", subtitle: "Les incontournables", products: bestSellers },
  { key: "divers", label: "Divers", subtitle: "Accessoires & lifestyle", products: divers },
  { key: "textiles", label: "Textiles", subtitle: "Mode & streetwear", products: textiles },
];

const allProducts = [...products, ...casques, ...usbs, ...exclusivites, ...digigraphies, ...livres, ...bestSellers, ...divers, ...textiles];

export default function CatalogueClient() {
  const [activeSection, setActiveSection] = useState<Section>("tous");

  const filters: { key: Section; label: string }[] = [
    { key: "tous", label: "Tous" },
    ...sections.map(({ key, label }) => ({ key, label })),
  ];

  const visibleSections = activeSection === "tous"
    ? sections
    : sections.filter((s) => s.key === activeSection);

  const totalCount = activeSection === "tous"
    ? allProducts.length
    : (sections.find((s) => s.key === activeSection)?.products.length ?? 0);

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
      <div className="py-6 flex flex-wrap items-center gap-2 border-b border-obsidian/10">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`font-barlow font-light text-[10px] tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
              activeSection === key
                ? "border-obsidian bg-obsidian text-ivory"
                : "border-obsidian/20 text-museum hover:border-obsidian/50"
            }`}
          >
            {label}
          </button>
        ))}
        <span className="ml-auto font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum">
          {totalCount} produit{totalCount > 1 ? "s" : ""}
        </span>
      </div>

      {/* Product sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5 }}
        >
          {visibleSections.map((section, si) => (
            <div key={section.key}>
              {si > 0 && <div className="border-t border-obsidian/10 my-4" />}
              <div className="pt-16 pb-12">
                {activeSection === "tous" && (
                  <div className="mb-10 flex items-end justify-between">
                    <div>
                      <p className="font-barlow font-light text-[9px] tracking-widest4 uppercase text-museum mb-2">
                        {section.subtitle}
                      </p>
                      <h2 className="font-bebas text-[clamp(36px,5vw,72px)] leading-none tracking-wide text-obsidian">
                        {section.label}
                      </h2>
                    </div>
                    <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum pb-2">
                      {section.products.length} produit{section.products.length > 1 ? "s" : ""}
                    </span>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                  {section.products.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                    >
                      <ProductCard product={product} index={i} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
