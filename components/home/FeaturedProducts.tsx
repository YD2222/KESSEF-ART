"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="bg-ivory py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-3"
            >
              Sélection
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bebas text-[clamp(42px,6vw,80px)] leading-none tracking-wide text-obsidian"
            >
              Pièces Vedettes
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/catalogue"
              className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200 hidden md:block"
            >
              Voir toute la collection →
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link
            href="/catalogue"
            className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
          >
            Voir toute la collection →
          </Link>
        </div>
      </div>
    </section>
  );
}
