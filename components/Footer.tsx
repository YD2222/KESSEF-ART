import Link from "next/link";
import Logo from "./Logo";
import PaymentBadges from "./PaymentBadges";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Top section */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-20 pb-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-ivory/10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Logo inverted />
          <p className="font-cormorant font-light italic text-ivory/60 text-[15px] leading-relaxed mt-6 max-w-xs">
            Chaque pièce est une conversation entre l&apos;artiste et l&apos;éternité. Nous sélectionnons
            uniquement ce qui résiste au temps.
          </p>
          <p className="font-barlow font-light text-[10px] tracking-widest3 text-ivory/30 mt-8 uppercase">
            Paris · Lyon
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-ivory/30 mb-6">
            Navigation
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Accueil" },
              { href: "/catalogue", label: "Collection" },
              { href: "/panier", label: "Panier" },
              { href: "/contact", label: "Contact Privé" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-barlow font-light text-[12px] tracking-widest text-ivory/60 hover:text-ivory transition-colors duration-200 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Info */}
        <div>
          <h4 className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-ivory/30 mb-6">
            Informations
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { href: "#", label: "Authenticité" },
              { href: "#", label: "Livraison" },
              { href: "#", label: "Retours" },
              { href: "/mentions-legales", label: "Mentions légales" },
              { href: "/cgv", label: "CGV" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-barlow font-light text-[12px] tracking-widest text-ivory/60 hover:text-ivory transition-colors duration-200 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Payment badges */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-8 border-b border-ivory/10">
        <PaymentBadges inverted />
      </div>

      {/* Bottom */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-barlow font-light text-[10px] tracking-widest text-ivory/20 uppercase">
          © {new Date().getFullYear()} Kessef Art. Tous droits réservés.
        </p>
        <p className="font-barlow font-light text-[10px] tracking-widest text-ivory/20 uppercase">
          Livraison assurée — Authenticité garantie
        </p>
      </div>
    </footer>
  );
}
