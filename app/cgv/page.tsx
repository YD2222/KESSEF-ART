import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — KESSEF ART",
  description: "Conditions générales de vente applicables à toute commande passée sur kessefart.com.",
};

export default function CGVPage() {
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
              Conditions Générales de Vente
            </h1>
            <p className="font-cormorant font-light italic text-[16px] text-museum mt-4">
              Dernière mise à jour : avril 2026
            </p>
          </div>

          <div className="space-y-16">

            {/* 1. Objet */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">1. Objet</h2>
              <div className="font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent l&apos;ensemble des ventes conclues entre la société <strong className="font-normal text-obsidian">LIV INVEST</strong> (ci-après « Kessef Art ») et tout acheteur (ci-après « le Client ») via le site internet <strong className="font-normal text-obsidian">kessefart.com</strong>.
                </p>
                <p className="mt-4">
                  Toute commande passée sur ce site implique l&apos;acceptation pleine et entière des présentes CGV. Le Client reconnaît en avoir pris connaissance avant de valider sa commande.
                </p>
              </div>
            </section>

            {/* 2. Vendeur */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">2. Identification du vendeur</h2>
              <div className="space-y-3 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Société</span><br />LIV INVEST</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Forme juridique</span><br />SARL</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Siège social</span><br />7 Place Puvis de Chavannes, 69006 Lyon</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">SIRET</span><br />922 013 701 00011</p>
                <p><span className="font-barlow text-[11px] tracking-widest uppercase text-museum">Email</span><br />contact@kessefart.com</p>
              </div>
            </section>

            {/* 3. Produits */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">3. Produits</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les produits proposés à la vente sont ceux figurant sur le site kessefart.com au moment de la consultation par le Client. Chaque produit est accompagné d&apos;une description mentionnant ses caractéristiques essentielles.
                </p>
                <p>
                  Kessef Art agit en qualité de distributeur autorisé des œuvres de Richard Orlinski. Les photographies des produits sont aussi fidèles que possible mais ne peuvent garantir une parfaite similitude avec les produits livrés, notamment en raison des effets de la lumière sur les finitions chromes et dorées.
                </p>
                <p>
                  Concernant les enceintes <strong className="font-normal text-obsidian">Speaker Kong</strong>, le Client reconnaît avoir été informé que certains exemplaires peuvent présenter de légères imperfections de peinture d&apos;ordre esthétique, sans incidence sur les performances du produit. En compensation, une valise Kong Escape est systématiquement offerte avec chaque Speaker Kong commandé.
                </p>
              </div>
            </section>

            {/* 4. Prix */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">4. Prix</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les prix affichés sur le site sont indiqués en euros (€) toutes taxes comprises (TTC). Kessef Art se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable à la commande est celui en vigueur au jour de la validation de la commande.
                </p>
                <p>
                  Les frais de livraison, s&apos;ils sont applicables, sont indiqués avant la validation définitive de la commande et restent à la charge du Client sauf mention contraire.
                </p>
              </div>
            </section>

            {/* 5. Commande */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">5. Commande</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Le Client sélectionne les produits souhaités et les ajoute à son panier. Avant de valider sa commande, il peut vérifier le détail de sa sélection et corriger d&apos;éventuelles erreurs.
                </p>
                <p>
                  La commande est définitivement enregistrée après validation du paiement. Un email de confirmation récapitulant les produits commandés, le montant total et les informations de livraison est alors envoyé au Client.
                </p>
                <p>
                  Kessef Art se réserve le droit de refuser ou d&apos;annuler toute commande en cas de litige relatif au paiement d&apos;une commande précédente, ou en cas de suspicion de fraude.
                </p>
              </div>
            </section>

            {/* 6. Paiement */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">6. Paiement</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Le paiement s&apos;effectue en ligne, de manière sécurisée, par carte bancaire (Visa, Mastercard, American Express) ou par tout autre moyen de paiement proposé lors de la commande.
                </p>
                <p>
                  Les données bancaires du Client sont cryptées et transmises de manière sécurisée. Kessef Art n&apos;a à aucun moment accès aux coordonnées bancaires du Client.
                </p>
                <p>
                  La commande est validée après confirmation du paiement par l&apos;établissement bancaire. En cas de refus de la banque, la commande est automatiquement annulée.
                </p>
              </div>
            </section>

            {/* 7. Livraison */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">7. Livraison</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les commandes sont expédiées à l&apos;adresse indiquée par le Client lors de sa commande. Kessef Art ne saurait être tenu responsable de tout retard ou impossibilité de livraison due à une adresse incorrecte ou incomplète fournie par le Client.
                </p>
                <p>
                  Les délais de livraison sont donnés à titre indicatif. Un retard de livraison ne saurait donner lieu à l&apos;annulation de la commande ni à l&apos;attribution de dommages et intérêts, sauf si ce retard dépasse 30 jours ouvrés.
                </p>
                <p>
                  À la réception du colis, le Client est invité à vérifier l&apos;état de l&apos;emballage et du contenu. Toute anomalie (colis endommagé, produit manquant ou abîmé) doit être signalée à Kessef Art dans les 48 heures suivant la réception à l&apos;adresse <strong className="font-normal text-obsidian">contact@kessefart.com</strong>.
                </p>
              </div>
            </section>

            {/* 8. Droit de rétractation */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">8. Droit de rétractation</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client dispose d&apos;un délai de <strong className="font-normal text-obsidian">14 jours calendaires</strong> à compter de la réception de sa commande pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                <p>
                  Pour exercer ce droit, le Client doit notifier sa décision de rétractation par email à <strong className="font-normal text-obsidian">contact@kessefart.com</strong> avant l&apos;expiration du délai de 14 jours. Le produit doit être retourné dans son emballage d&apos;origine, en parfait état, accompagné de tous ses accessoires.
                </p>
                <p>
                  Les frais de retour sont à la charge du Client. Le remboursement sera effectué dans un délai de <strong className="font-normal text-obsidian">14 jours</strong> à compter de la réception du produit retourné, par le même moyen de paiement que celui utilisé lors de la commande.
                </p>
                <p>
                  <strong className="font-normal text-obsidian">Exception :</strong> Le droit de rétractation ne s&apos;applique pas aux produits confectionnés selon les spécifications du consommateur ou nettement personnalisés, conformément à l&apos;article L.221-28 du Code de la consommation.
                </p>
              </div>
            </section>

            {/* 9. Garanties */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">9. Garanties légales</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Tous les produits vendus sur kessefart.com bénéficient des garanties légales suivantes :
                </p>
                <p>
                  <strong className="font-normal text-obsidian">Garantie légale de conformité</strong> (articles L.217-4 et suivants du Code de la consommation) : le Client dispose de 2 ans à compter de la livraison pour agir. Kessef Art est tenu de livrer un bien conforme au contrat et répond des défauts de conformité existant lors de la délivrance.
                </p>
                <p>
                  <strong className="font-normal text-obsidian">Garantie contre les vices cachés</strong> (articles 1641 et suivants du Code civil) : le Client peut réclamer le remboursement du prix ou une réduction de prix si le défaut caché rend le produit impropre à l&apos;usage auquel il est destiné.
                </p>
                <p>
                  Ces garanties ne couvrent pas les dommages résultant d&apos;une utilisation anormale ou non conforme du produit, ni les défauts esthétiques préalablement portés à la connaissance du Client (notamment les légères imperfections de peinture des Speaker Kong décrites sur ce site).
                </p>
              </div>
            </section>

            {/* 10. Responsabilité */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">10. Responsabilité</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Kessef Art ne saurait être tenu responsable des dommages de toute nature, directs ou indirects, résultant de l&apos;utilisation du site kessefart.com ou des produits achetés en dehors de leur usage normal.
                </p>
                <p>
                  La responsabilité de Kessef Art est en tout état de cause limitée au montant de la commande concernée.
                </p>
              </div>
            </section>

            {/* 11. Propriété intellectuelle */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">11. Propriété intellectuelle</h2>
              <div className="font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  L&apos;ensemble du contenu du site kessefart.com (textes, images, visuels, logo, charte graphique) est protégé par le droit d&apos;auteur. Toute reproduction ou utilisation sans autorisation préalable écrite de Kessef Art est strictement interdite. Les œuvres de Richard Orlinski reproduites sur ce site restent la propriété intellectuelle de leur auteur.
                </p>
              </div>
            </section>

            {/* 12. Données personnelles */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">12. Données personnelles</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  Les données personnelles collectées lors de la commande (nom, prénom, adresse, email, téléphone) sont utilisées exclusivement dans le cadre du traitement de la commande et de la relation commerciale.
                </p>
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, le Client dispose d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de ses données. Pour exercer ces droits : <strong className="font-normal text-obsidian">contact@kessefart.com</strong>.
                </p>
              </div>
            </section>

            {/* 13. Litiges */}
            <section>
              <h2 className="font-bebas text-[28px] tracking-wide text-obsidian mb-6">13. Litiges et médiation</h2>
              <div className="space-y-4 font-cormorant font-light text-[16px] text-carbon leading-relaxed border-l-2 border-obsidian/10 pl-6">
                <p>
                  En cas de litige, le Client est invité à contacter Kessef Art en priorité à l&apos;adresse <strong className="font-normal text-obsidian">contact@kessefart.com</strong> afin de rechercher une solution amiable.
                </p>
                <p>
                  Conformément aux articles L.611-1 et suivants du Code de la consommation, le Client peut recourir gratuitement à un médiateur de la consommation. La Commission Européenne met également à disposition une plateforme de règlement en ligne des litiges accessible à l&apos;adresse <strong className="font-normal text-obsidian">ec.europa.eu/consumers/odr</strong>.
                </p>
                <p>
                  À défaut de résolution amiable, tout litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes CGV sera soumis aux tribunaux compétents du ressort de Lyon, et sera régi par le droit français.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="border-t border-obsidian/10 pt-10">
              <p className="font-cormorant font-light italic text-[16px] text-museum text-center">
                Pour toute question relative aux présentes CGV, contactez-nous à{" "}
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
