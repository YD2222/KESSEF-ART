"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    piece: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-obsidian/20 py-3 font-barlow font-light text-[13px] tracking-wide text-obsidian placeholder:text-museum/60 focus:outline-none focus:border-obsidian transition-colors duration-200";
  const labelClass =
    "font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum block mb-1";

  return (
    <div className="max-w-[1440px] mx-auto px-8 md:px-16">
      {/* Header */}
      <div className="pt-20 pb-12 border-b border-obsidian/10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-3"
        >
          Service Clientèle Privé
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bebas text-[clamp(52px,8vw,120px)] leading-none tracking-wide text-obsidian"
        >
          Contact
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-20">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <p className="font-cormorant font-light italic text-[18px] md:text-[22px] text-carbon leading-relaxed mb-12 max-w-md">
              Notre équipe dédiée est à votre disposition pour toute demande d&apos;acquisition, de
              renseignement ou d&apos;accompagnement personnalisé.
            </p>

            <div className="space-y-8">
              {[
                {
                  label: "Email",
                  value: "contact@kessefart.com",
                  desc: "Réponse sous 24h ouvrées",
                },
                {
                  label: "Téléphone",
                  value: "+33 1 XX XX XX XX",
                  desc: "Lundi–Vendredi, 10h–18h",
                },
                {
                  label: "Présence",
                  value: "Paris · New York · Dubaï",
                  desc: "Sur rendez-vous uniquement",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-barlow font-light text-[9px] tracking-widest3 uppercase text-museum mb-1">
                    {item.label}
                  </p>
                  <p className="font-cormorant font-light text-[16px] text-obsidian mb-0.5">
                    {item.value}
                  </p>
                  <p className="font-barlow font-light text-[10px] tracking-wide text-museum/60 uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="h-px bg-obsidian/10 mb-8" />
            <p className="font-cormorant font-light italic text-[14px] text-museum leading-relaxed">
              &ldquo;Chaque collectionneur mérite une attention singulière. C&apos;est pourquoi nous
              privilégions le dialogue direct et personnalisé.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className={labelClass}>Nom complet</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Jean Dupont"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="jean@exemple.fr"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Pièce souhaitée</label>
                <select
                  value={form.piece}
                  onChange={update("piece")}
                  className={inputClass}
                >
                  <option value="">Sélectionner une œuvre (optionnel)</option>
                  <option value="wild-kong">Wild Kong — Richard Orlinski</option>
                  <option value="born-wild">Born Wild Exclusive — Kessef Art</option>
                  <option value="crocodile">Crocodile — Richard Orlinski</option>
                  <option value="autre">Autre / Renseignement général</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Décrivez votre demande..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-obsidian text-ivory font-barlow font-light text-[11px] tracking-widest3 uppercase hover:bg-carbon transition-colors duration-200"
                >
                  Envoyer la demande
                </button>
                <p className="font-barlow font-light text-[9px] tracking-widest text-museum/40 uppercase mt-3 text-center">
                  Vos données ne sont jamais partagées
                </p>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col justify-center py-20"
            >
              <div className="w-12 h-px bg-obsidian/20 mb-8" />
              <p className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-4">
                Message envoyé
              </p>
              <h2 className="font-bebas text-[42px] tracking-wide text-obsidian leading-none mb-6">
                Nous vous répondrons<br />sous 24h
              </h2>
              <p className="font-cormorant font-light italic text-[16px] text-museum leading-relaxed max-w-xs">
                Notre équipe a bien reçu votre demande et reviendra vers vous dans les meilleurs
                délais.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
