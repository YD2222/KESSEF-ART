"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Logo from "./Logo";

const navLinks = [
  { href: "/catalogue", label: "Collection" },
  { href: "/contact", label: "Contact Privé" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 backdrop-blur-sm border-b border-obsidian/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo inverted={!scrolled && !menuOpen} />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-barlow font-light text-[11px] tracking-widest3 uppercase transition-opacity duration-200 hover:opacity-60 ${
                scrolled ? "text-obsidian" : "text-ivory"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/panier"
            className={`font-barlow font-light text-[11px] tracking-widest3 uppercase transition-opacity duration-200 hover:opacity-60 ${
              scrolled ? "text-obsidian" : "text-ivory"
            }`}
          >
            Panier
            {totalItems > 0 && (
              <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 bg-obsidian text-ivory text-[9px] font-bebas">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px transition-all duration-200 ${
              scrolled || menuOpen ? "bg-obsidian" : "bg-ivory"
            } ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-200 ${
              scrolled || menuOpen ? "bg-obsidian" : "bg-ivory"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px transition-all duration-200 ${
              scrolled || menuOpen ? "bg-obsidian" : "bg-ivory"
            } ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-ivory border-t border-obsidian/10 px-8 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-obsidian"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/panier"
            onClick={() => setMenuOpen(false)}
            className="font-barlow font-light text-[11px] tracking-widest3 uppercase text-obsidian"
          >
            Panier {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </header>
  );
}
