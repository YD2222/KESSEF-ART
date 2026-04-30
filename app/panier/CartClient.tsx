"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "./CheckoutForm";
import PaymentBadges from "@/components/PaymentBadges";

export default function CartClient() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } = useCart();
  const [step, setStep] = useState<"cart" | "checkout" | "confirmation">("cart");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleStripeCheckout = async () => {
    setIsRedirecting(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      setIsRedirecting(false);
    }
  };

  if (step === "confirmation") {
    return (
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-12 h-px bg-obsidian/30 mx-auto mb-8" />
          <p className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-4">
            Commande confirmée
          </p>
          <h1 className="font-bebas text-[clamp(48px,7vw,96px)] leading-none tracking-wide text-obsidian mb-6">
            Merci pour votre confiance
          </h1>
          <p className="font-cormorant font-light italic text-[17px] text-museum max-w-md mx-auto mb-12 leading-relaxed">
            Votre demande a bien été enregistrée. Notre équipe vous contactera sous 24h pour finaliser votre commande.
          </p>
          <Link
            href="/catalogue"
            className="inline-block font-barlow font-light text-[11px] tracking-widest3 uppercase bg-obsidian text-ivory px-12 py-4 hover:bg-carbon transition-colors duration-200"
          >
            Continuer à explorer
          </Link>
        </motion.div>
      </div>
    );
  }

  if (step === "checkout") {
    return (
      <CheckoutForm
        items={items}
        onBack={() => setStep("cart")}
        onSuccess={() => setStep("confirmation")}
      />
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16">
      {/* Header */}
      <div className="pt-20 pb-12 border-b border-obsidian/10">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bebas text-[clamp(52px,8vw,120px)] leading-none tracking-wide text-obsidian"
        >
          Panier
        </motion.h1>
        {totalItems > 0 && (
          <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum mt-2">
            {totalItems} pièce{totalItems !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-32 text-center">
          <p className="font-cormorant font-light italic text-[18px] text-museum mb-8">
            Votre panier est vide.
          </p>
          <Link
            href="/catalogue"
            className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
          >
            Découvrir la collection →
          </Link>
        </div>
      ) : (
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Items */}
            <div className="lg:col-span-2 space-y-0">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-8 py-8 border-b border-obsidian/10"
                  >
                    {/* Image */}
                    <Link href={`/produit/${item.product.slug}`} className="flex-shrink-0">
                      <div className="relative w-24 h-24 bg-[#e8e8e6] overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={`${item.product.name} ${item.product.coloris}`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum mb-1">
                          {item.product.artist}
                        </p>
                        <h3 className="font-bebas text-[24px] tracking-wide text-obsidian leading-none mb-1">
                          {item.product.name}
                        </h3>
                        <p className="font-barlow font-light text-[10px] tracking-widest uppercase text-museum">
                          Coloris {item.product.coloris}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center border border-obsidian/20">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center font-barlow text-[14px] text-museum hover:text-obsidian transition-colors duration-200"
                          >
                            −
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center font-barlow font-light text-[12px] text-obsidian">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center font-barlow text-[14px] text-museum hover:text-obsidian transition-colors duration-200"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="border border-obsidian/10 p-8 sticky top-24">
                <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-8">
                  Récapitulatif
                </h2>

                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between">
                      <span className="font-barlow font-light text-[11px] tracking-wide text-museum uppercase">
                        {item.product.name} {item.product.coloris} ×{item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-obsidian/10 pt-4 mb-8">
                  {totalPrice > 0 ? (
                    <div className="flex justify-between items-baseline">
                      <span className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-museum">Total</span>
                      <span className="font-bebas text-[28px] tracking-wide text-obsidian">
                        {totalPrice.toLocaleString("fr-FR")} €
                      </span>
                    </div>
                  ) : (
                    <p className="font-cormorant font-light italic text-[13px] text-museum leading-snug">
                      Prix sur demande — notre équipe vous contactera sous 24h.
                    </p>
                  )}
                </div>

                <button
                  onClick={totalPrice > 0 ? handleStripeCheckout : () => setStep("checkout")}
                  disabled={isRedirecting}
                  className="w-full py-4 bg-obsidian text-ivory font-barlow font-light text-[11px] tracking-widest3 uppercase hover:bg-carbon transition-colors duration-200 disabled:opacity-50"
                >
                  {isRedirecting ? "Redirection…" : totalPrice > 0 ? "Payer en ligne" : "Faire une demande"}
                </button>

                <div className="mt-6">
                  <PaymentBadges />
                </div>

                <Link
                  href="/catalogue"
                  className="block text-center mt-4 font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200"
                >
                  Continuer mes achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
