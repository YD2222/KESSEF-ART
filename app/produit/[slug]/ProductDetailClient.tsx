"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product, badgeLabels } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetailClient({ product, related }: Props) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16">
      {/* Breadcrumb */}
      <div className="pt-12 pb-8">
        <nav className="flex items-center gap-3">
          <Link
            href="/catalogue"
            className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
          >
            Collection
          </Link>
          <span className="text-museum text-[10px]">·</span>
          <span className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-obsidian">
            {product.name} {product.coloris}
          </span>
        </nav>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pb-28">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main image */}
          <div className="relative aspect-square bg-[#e8e8e6] overflow-hidden mb-4">
            <Image
              src={product.images[activeImage] || product.images[0]}
              alt={`${product.name} ${product.coloris}`}
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <div className="absolute top-6 left-6">
                <span className="font-barlow font-light text-[9px] tracking-widest3 uppercase bg-ivory text-obsidian px-3 py-1">
                  {badgeLabels[product.badge]}
                </span>
              </div>
            )}
          </div>
          {/* Thumbnails */}
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-20 h-20 overflow-hidden bg-[#e8e8e6] border-b-2 transition-all duration-200 ${
                    activeImage === i ? "border-obsidian" : "border-transparent opacity-50"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-contain p-2" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          {/* Artist */}
          <p className="font-barlow font-light text-[11px] tracking-widest4 uppercase text-museum mb-3">
            {product.artist}
          </p>

          {/* Title */}
          <h1 className="font-bebas text-[clamp(48px,6vw,88px)] leading-none tracking-wide text-obsidian mb-1">
            {product.name}
          </h1>
          <p className="font-bebas text-[clamp(28px,3.5vw,48px)] leading-none tracking-wide text-museum mb-8">
            {product.coloris}
          </p>

          {/* Description */}
          <p className="font-cormorant font-light italic text-[17px] md:text-[19px] text-carbon leading-relaxed mb-10 border-l-2 border-obsidian/10 pl-5">
            {product.longDescription}
          </p>

          {/* Add to cart */}
          <div className="mb-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.available}
              className={`w-full py-5 font-barlow font-light text-[11px] tracking-widest3 uppercase transition-colors duration-200 ${
                added
                  ? "bg-carbon text-ivory"
                  : product.available
                  ? "bg-obsidian text-ivory hover:bg-carbon"
                  : "bg-obsidian/20 text-museum cursor-not-allowed"
              }`}
            >
              {added ? "Ajouté au panier ✓" : product.available ? "Ajouter au panier" : "Indisponible"}
            </button>
          </div>

          {/* Transparence état produit — Speaker Kong uniquement */}
          {product.category === "Speaker Kong" && (
            <div className="mb-8 flex items-start gap-3 px-4 py-3 border border-obsidian/10 bg-obsidian/[0.02]">
              <span className="font-barlow text-[11px] text-museum mt-0.5 flex-shrink-0">ℹ</span>
              <p className="font-barlow font-light text-[10px] tracking-wide text-museum leading-relaxed">
                Ce produit peut présenter de légères imperfections de peinture sans incidence sur ses performances.{" "}
                <Link href="/mentions-legales#transparence" className="underline underline-offset-2 hover:text-obsidian transition-colors duration-200">
                  En savoir plus
                </Link>
                {" "}— La valise Kong Escape est incluse en compensation.
              </p>
            </div>
          )}

          {added && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <Link
                href="/panier"
                className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
              >
                Voir le panier →
              </Link>
            </motion.div>
          )}

          {/* Specifications */}
          <div className="border-t border-obsidian/10 pt-8 space-y-3">
            {[
              { label: "Bluetooth", value: product.specs.bluetooth },
              { label: "Puissance", value: product.specs.puissance },
              { label: "Autonomie", value: product.specs.autonomie },
              { label: "Dimensions", value: product.specs.dimensions },
              { label: "Poids", value: product.specs.poids },
              { label: "Recharge", value: product.specs.charge },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <p className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum flex-shrink-0">
                  {label}
                </p>
                <div className="flex-1 border-b border-dotted border-obsidian/10" />
                <p className="font-cormorant font-light text-[14px] text-carbon">
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Inclus */}
          <div className="mt-8 border border-obsidian/10 p-6 flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 border border-obsidian/20 flex items-center justify-center">
              <span className="font-bebas text-[14px] text-museum">✓</span>
            </div>
            <div>
              <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-obsidian mb-1">
                Inclus dans la commande
              </p>
              <p className="font-cormorant font-light text-[13px] text-museum leading-snug">
                {product.inclus}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="border-t border-obsidian/10 pt-20 pb-28">
          <div className="mb-12">
            <p className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-3">
              Autres coloris
            </p>
            <h2 className="font-bebas text-[clamp(36px,4vw,60px)] leading-none tracking-wide text-obsidian">
              Vous pourriez aussi aimer
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
