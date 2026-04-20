"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CartItem, useCart } from "@/context/CartContext";

interface Props {
  items: CartItem[];
  onBack: () => void;
  onSuccess: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export default function CheckoutForm({ items, onBack, onSuccess }: Props) {
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    clearCart();
    setLoading(false);
    onSuccess();
  };

  const inputClass =
    "w-full bg-transparent border-b border-obsidian/20 py-3 font-barlow font-light text-[13px] tracking-wide text-obsidian placeholder:text-museum/60 focus:outline-none focus:border-obsidian transition-colors duration-200";
  const labelClass =
    "font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum block mb-1";

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-12">
      <button
        onClick={onBack}
        className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum hover:text-obsidian transition-colors duration-200 mb-12"
      >
        ← Retour au panier
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-bebas text-[clamp(44px,6vw,80px)] leading-none tracking-wide text-obsidian mb-4">
          Votre demande
        </h1>
        <p className="font-cormorant font-light italic text-[16px] text-museum mb-12">
          Notre équipe vous recontactera sous 24h pour finaliser votre commande et vous communiquer les détails de paiement.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Prénom</label>
                  <input type="text" required value={form.firstName} onChange={update("firstName")} placeholder="Jean" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Nom</label>
                  <input type="text" required value={form.lastName} onChange={update("lastName")} placeholder="Dupont" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" required value={form.email} onChange={update("email")} placeholder="jean@exemple.fr" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Téléphone</label>
                  <input type="tel" value={form.phone} onChange={update("phone")} placeholder="+33 6 00 00 00 00" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Message (optionnel)</label>
                  <textarea value={form.message} onChange={update("message")} placeholder="Questions, précisions sur votre commande..." rows={3} className={`${inputClass} resize-none`} />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="border border-obsidian/10 p-8 sticky top-24">
                <h2 className="font-bebas text-[22px] tracking-wide text-obsidian mb-6">
                  Votre sélection
                </h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 items-center">
                      <div className="w-12 h-12 bg-[#e8e8e6] flex-shrink-0 relative">
                        <Image src={item.product.images[0]} alt="" fill className="object-contain p-1" />
                      </div>
                      <div>
                        <p className="font-barlow font-light text-[10px] tracking-widest uppercase text-obsidian">
                          {item.product.name} {item.product.coloris}
                        </p>
                        <p className="font-barlow font-light text-[9px] tracking-widest text-museum uppercase">
                          Qté : {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-obsidian/10 pt-4 mb-8">
                  <p className="font-cormorant font-light italic text-[12px] text-museum">
                    Prix communiqué par notre équipe sous 24h
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 font-barlow font-light text-[11px] tracking-widest3 uppercase transition-colors duration-200 ${
                    loading ? "bg-museum text-ivory cursor-wait" : "bg-obsidian text-ivory hover:bg-carbon"
                  }`}
                >
                  {loading ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
