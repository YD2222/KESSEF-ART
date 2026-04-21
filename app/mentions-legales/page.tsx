import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — KESSEF ART",
  description: "Mentions légales, conditions de vente et politique de transparence de Kessef Art.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ivory pt-16">
        <div className="max-w-[900px] mx-auto px-8 md:px-16 py-20 pb-32">

          {/* Header */}
          <div className="mb-16 border-b border-obsidian/10 pb-12">
            <p className="font-barlow font-light text-[10px] tracking-widest4 uppercase text-museum mb-4">
              Informations légales
            </p>
            <h1 className="font-bebas text-[clamp(48px,7vw,96px)] leading-none tracking-wide text-obsidian">
              Mentions légales
            </h1>
            <p className="font-cormorant font-light italic text-[16px] text-museum mt-4">
              Dernière mise à jour : avril 2026
            </p>
          </div>

          <div className="space-y-16">

            {/* 1. Éditeur */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                1. Éditeur du site
              </h2>
              <div className="space-y-3 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Société</span><br />
                  [NOM DE LA SOCIÉTÉ] — à compléter</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Forme juridique</span><br />
                  [SARL / SAS / Auto-entrepreneur] — à compléter</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Siège social</span><br />
                  [ADRESSE COMPLÈTE] — à compléter</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">SIRET</span><br />
                  [NUMÉRO SIRET] — à compléter</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Email</span><br />
                  contact@kessefart.com</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Directeur de la publication</span><br />
                  [NOM DU RESPONSABLE] — à compléter</p>
              </div>
            </section>

            {/* 2. Hébergement */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                2. Hébergement
              </h2>
              <div className="space-y-2 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Hébergeur</span><br />
                  Vercel Inc.</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Adresse</span><br />
                  340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Site</span><br />
                  vercel.com</p>
              </div>
            </section>

            {/* 3. État des produits — section transparence */}
            <section id="transparence" className="bg-obsidian/[0.03] border border-obsidian/10 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-8 h-8 border border-obsidian/20 flex items-center justify-center">
                  <span className="font-bebas text-[14px] text-obsidian">!</span>
                </div>
                <div>
                  <p className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-museum mb-1">
                    Transparence produit
                  </p>
                  <h2 className="font-bebas text-[28px] tracking-wide text-obsidian">
                    3. État des produits — Speaker Kong
                  </h2>
                </div>
              </div>

              <div className="space-y-5 font-cormorant font-light text-[17px] text-carbon leading-relaxed">
                <p>
                  Dans un souci de total transparence envers nos clients, Kessef Art tient à préciser les éléments suivants concernant les enceintes <strong className="font-normal text-obsidian">Speaker Kong de Richard Orlinski</strong> disponibles sur ce site.
                </p>
                <p>
                  Les exemplaires proposés à la vente présentent de légères imperfections de peinture sur leur surface. Ces défauts sont <strong className="font-normal text-obsidian">mineurs, superficiels et purement esthétiques</strong> — ils n&apos;affectent en aucun cas le fonctionnement, les performances audio, les fonctionnalités Bluetooth, ni la durabilité du produit.
                </p>
                <p>
                  Ces imperfections peuvent se manifester sous forme de micro-traces, de légères irrégularités de surface ou de variations de teinte localisées, visibles uniquement à proximité immédiate du produit et dans certaines conditions d&apos;éclairage.
                </p>
                <p>
                  En reconnaissance de cet état et afin de vous offrir une expérience d&apos;achat à la hauteur de nos exigences, <strong className="font-normal text-obsidian">la valise Kong Escape au format cabine est systématiquement offerte</strong> avec chaque Speaker Kong acheté sur Kessef Art. Cette valise, d&apos;une valeur commerciale significative, est incluse dans le prix affiché et livrée avec le produit.
                </p>
                <p>
                  En passant commande sur ce site, le client reconnaît avoir été informé de cet état et accepte les conditions décrites ci-dessus. Aucune réclamation relative aux imperfections de peinture décrites ne pourra être acceptée après réception du produit.
                </p>
              </div>
            </section>

            {/* 4. Propriété intellectuelle */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                4. Propriété intellectuelle
              </h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  L&apos;ensemble du contenu de ce site (textes, images, visuels produits, logo, charte graphique) est la propriété exclusive de Kessef Art ou fait l&apos;objet d&apos;une autorisation d&apos;utilisation. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
                </p>
                <p>
                  Les sculptures et œuvres de Richard Orlinski reproduites sur ce site sont la propriété intellectuelle de leur auteur. Kessef Art agit en qualité de distributeur autorisé.
                </p>
              </div>
            </section>

            {/* 5. Données personnelles */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                5. Données personnelles
              </h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les informations collectées via les formulaires de contact et de commande (nom, prénom, email, téléphone) sont utilisées exclusivement dans le cadre du traitement de votre demande et de la relation commerciale.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à <strong className="font-normal text-obsidian">contact@kessefart.com</strong>.
                </p>
                <p>
                  Aucune donnée personnelle n&apos;est cédée, vendue ou transmise à des tiers sans votre consentement explicite.
                </p>
              </div>
            </section>

            {/* 6. Cookies */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                6. Cookies
              </h2>
              <div className="font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Ce site utilise des cookies techniques nécessaires à son bon fonctionnement (panier, session). Aucun cookie publicitaire ou de tracking tiers n&apos;est déposé sans votre consentement. Vous pouvez configurer votre navigateur pour refuser les cookies, ce qui pourrait affecter certaines fonctionnalités du site.
                </p>
              </div>
            </section>

            {/* 7. Responsabilité */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">
                7. Limitation de responsabilité
              </h2>
              <div className="font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Kessef Art s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Kessef Art ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. En conséquence, Kessef Art décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-obsidian/10 pt-10">
              <p className="font-cormorant font-light italic text-[16px] text-museum text-center">
                Pour toute question relative aux présentes mentions légales, contactez-nous à{" "}
                <a href="mailto:contact@kessefart.com" className="text-obsidian hover:underline underline-offset-4 transition-all">
                  contact@kessefart.com
                </a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
