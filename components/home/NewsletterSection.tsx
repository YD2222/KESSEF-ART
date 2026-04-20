"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-obsidian py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <span className="block h-px w-16 bg-ivory/20" />
            <span className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-ivory/40">
              Accès Privé
            </span>
            <span className="block h-px w-16 bg-ivory/20" />
          </div>

          {/* Heading */}
          <h2 className="font-bebas text-[clamp(42px,7vw,96px)] leading-none tracking-wide text-ivory mb-6">
            Restez informé
          </h2>

          <p className="font-cormorant font-light italic text-ivory/60 text-[17px] md:text-[20px] leading-relaxed max-w-lg mx-auto mb-12">
            Soyez les premiers informés des nouvelles acquisitions et éditions exclusives.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 bg-transparent border border-ivory/20 px-6 py-4 font-barlow font-light text-[12px] tracking-widest text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-ivory/50 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-ivory text-obsidian font-barlow font-light text-[11px] tracking-widest3 uppercase px-10 py-4 hover:bg-museum hover:text-ivory transition-colors duration-200 whitespace-nowrap"
              >
                S&apos;inscrire
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-md mx-auto border border-ivory/20 px-8 py-6"
            >
              <p className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-ivory/60">
                Bienvenue dans le cercle privé Kessef Art
              </p>
            </motion.div>
          )}

          <p className="font-barlow font-light text-[9px] tracking-widest text-ivory/20 uppercase mt-6">
            Confidentialité garantie · Désabonnement à tout moment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
