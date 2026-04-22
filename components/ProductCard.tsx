"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product, badgeLabels } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/produit/${product.slug}`} className="group block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-[#e8e8e6] aspect-[4/3] mb-4">
          <Image
            src={product.images[0]}
            alt={`${product.name} ${product.coloris}`}
            fill
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:-translate-y-1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/5 transition-colors duration-300" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase bg-ivory text-obsidian px-3 py-1">
                {badgeLabels[product.badge]}
              </span>
            </div>
          )}

          {/* Coloris */}
          <div className="absolute bottom-4 right-4">
            <span className="font-barlow font-light text-[9px] tracking-widest uppercase text-obsidian/50">
              {product.coloris}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum">
            {product.artist}
          </p>
          <h3 className="font-bebas text-[22px] tracking-wide text-obsidian leading-none">
            {product.name} <span className="text-museum">{product.coloris}</span>
          </h3>
          <p className="font-cormorant font-light text-[14px] text-museum leading-snug line-clamp-2">
            {product.description}
          </p>
          {product.category === "Speaker Kong" && (
            <div className="pt-2">
              <span className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum/60">
                Valise Kong Escape incluse
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
