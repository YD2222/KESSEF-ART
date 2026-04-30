import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Commande confirmée — KESSEF ART" };

export default function SuccesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center px-8">
          <div className="w-12 h-px bg-obsidian/30 mx-auto mb-8" />
          <p className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-4">
            Paiement confirmé
          </p>
          <h1 className="font-bebas text-[clamp(48px,7vw,96px)] leading-none tracking-wide text-obsidian mb-6">
            Merci pour votre commande
          </h1>
          <p className="font-cormorant font-light italic text-[17px] text-museum max-w-md mx-auto mb-12 leading-relaxed">
            Votre paiement a bien été reçu. Vous allez recevoir un email de confirmation, et notre équipe vous contactera pour organiser la livraison.
          </p>
          <Link
            href="/catalogue"
            className="inline-block font-barlow font-light text-[11px] tracking-widest3 uppercase bg-obsidian text-ivory px-12 py-4 hover:bg-carbon transition-colors duration-200"
          >
            Continuer à explorer
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
