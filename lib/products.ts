export interface Product {
  id: string;
  slug: string;
  name: string;
  artist: string;
  coloris: string;
  description: string;
  longDescription: string;
  badge?: "nouveau" | "exclusif" | "derniere-piece";
  available: boolean;
  images: string[];
  specs: {
    bluetooth: string;
    puissance: string;
    autonomie: string;
    dimensions: string;
    poids: string;
    charge: string;
    connectiques: string;
  };
  category: string;
  inclus: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "speaker-kong-noir",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Noir",
    description: "Le Kong dans sa version la plus sombre — puissance brute et élégance absolue.",
    longDescription:
      "Le Speaker Kong Noir incarne la force à l'état pur. Sculpté dans l'esprit de Richard Orlinski, chaque facette géométrique capte la lumière différemment, créant une œuvre vivante autant qu'une enceinte d'exception. Le noir mat lui confère une présence imposante, entre objet d'art et prouesse technologique.",
    badge: "nouveau",
    available: true,
    images: ["/products/noir.jpg", "/products/noir1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "2",
    slug: "speaker-kong-argent",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Argent",
    description: "Une finition miroir argentée qui transforme chaque espace en galerie.",
    longDescription:
      "Le Speaker Kong Argent joue avec la lumière de façon spectaculaire. Sa surface chromée reflète l'environnement, faisant de chaque pièce son propre cadre d'exposition. Une pièce qui allie la signature géométrique d'Orlinski à une finition précieuse digne des plus grandes collections.",
    available: true,
    images: ["/products/argent.jpg", "/products/argent1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "3",
    slug: "speaker-kong-or",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Or",
    description: "La version la plus précieuse — un Kong doré pour les intérieurs d'exception.",
    longDescription:
      "Le Speaker Kong Or est une déclaration. Sa finition dorée brillante évoque les grandes sculptures monumentales tout en restant résolument contemporaine. Posé dans un salon, un bureau ou une galerie, il impose le respect et la contemplation. Une pièce de collection absolue.",
    badge: "exclusif",
    available: true,
    images: ["/products/or.jpg", "/products/or1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "4",
    slug: "speaker-kong-bronze",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Bronze",
    description: "La patine du bronze pour un Kong intemporel, entre sculpture classique et design moderne.",
    longDescription:
      "Le Speaker Kong Bronze s'inscrit dans la grande tradition des sculptures fondues, revisitée par l'œil avant-gardiste d'Orlinski. Sa teinte chaude et profonde lui confère un caractère unique, à la fois ancré dans l'histoire de l'art et résolument tourné vers demain.",
    available: true,
    images: ["/products/bronze.jpg", "/products/bronze1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "5",
    slug: "speaker-kong-mat",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Mat",
    description: "La sobriété absolue — un Kong mat pour les amateurs de discrétion luxueuse.",
    longDescription:
      "Le Speaker Kong Mat est l'antithèse du superflu. Sa finition sans reflet absorbe la lumière et impose une présence silencieuse, presque minérale. Pour ceux qui savent que le vrai luxe ne crie jamais. Une pièce qui s'installe dans l'espace avec une autorité tranquille.",
    available: true,
    images: ["/products/mat.jpg", "/products/mat1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "6",
    slug: "speaker-kong-bleu",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Bleu",
    description: "Un bleu profond et vibrant qui fait du Kong une œuvre aussi lumineuse que percutante.",
    longDescription:
      "Le Speaker Kong Bleu capte le regard avec une intensité chromatique rare. Ce bleu profond, presque électrique, transforme la sculpture en point focal de toute pièce. Entre l'énergie d'un ciel d'orage et la sérénité d'un océan, il impose sa personnalité sans compromis.",
    available: true,
    images: ["/products/bleu.jpg", "/products/bleu1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "7",
    slug: "speaker-kong-rouge",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Rouge",
    description: "Le rouge passion d'un Kong qui ne laisse personne indifférent.",
    longDescription:
      "Le Speaker Kong Rouge est une déclaration d'intention. Sa couleur écarlate évoque la passion, l'énergie, la puissance vitale. Impossible à ignorer, impossible à oublier. Pour ceux qui assument leurs choix avec élégance et sans demi-mesure.",
    available: true,
    images: ["/products/rouge.jpg", "/products/rouge1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "8",
    slug: "speaker-kong-rose",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Rose",
    description: "Le rose audacieux d'Orlinski — entre douceur affirmée et caractère indomptable.",
    longDescription:
      "Le Speaker Kong Rose réinterprète la féminité avec une audace totale. Ce rose vif et assumé casse les codes, transformant la sculpture en manifeste de style. Orlinski s'amuse des conventions et livre ici une pièce à la personnalité aussi forte que son esthétique est séduisante.",
    available: true,
    images: ["/products/rose.jpg", "/products/rose1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
  {
    id: "9",
    slug: "speaker-kong-vert",
    name: "Speaker Kong",
    artist: "Richard Orlinski",
    coloris: "Vert",
    description: "Un vert intense et sauvage, comme une forêt primaire capturée dans la résine.",
    longDescription:
      "Le Speaker Kong Vert rappelle les origines sauvages de la créature imaginée par Orlinski. Ce vert profond, organique, évoque la jungle, la nature indomptée, la vie qui déborde. Une pièce qui apporte une énergie végétale et primitive à n'importe quel espace contemporain.",
    badge: "nouveau",
    available: true,
    images: ["/products/vert.jpg", "/products/vert1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.0 — portée 10m",
      puissance: "20W + caisson de basse",
      autonomie: "Batterie 8800 mAh",
      dimensions: "37 × 26 × 20 cm",
      poids: "2,5 kg",
      charge: "Induction sans fil 10W — 2 sorties USB",
      connectiques: "Jack 3,5mm / USB DC 5V",
    },
    category: "Speaker Kong",
    inclus: "Valise Kong Escape format cabine à fermeture assortie",
  },
];

// ── Casques Bluetooth ──────────────────────────────────────────────────────

export const casques: Product[] = [
  {
    id: "c1",
    slug: "casque-kong-noir",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Noir",
    description: "Le Kong sur vos oreilles — puissance sonore et design sculptural en version noir absolu.",
    longDescription:
      "Le Casque Kong Noir transpose la signature géométrique d'Orlinski dans l'univers du son haute fidélité. Chaque facette du casque reflète la lumière à sa manière, faisant de cet objet un véritable accessoire d'art. Le noir mat impose une présence sobre et absolue, pour un port aussi remarqué que confortable.",
    badge: "nouveau",
    available: true,
    images: ["/products/cnoir.jpg", "/products/cnoir1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
  {
    id: "c2",
    slug: "casque-kong-argent",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Argent",
    description: "Une finition chromée qui fait du casque un bijou technologique autant qu'une parure.",
    longDescription:
      "Le Casque Kong Argent brille autant qu'il sonne. Sa surface miroir capte et reflète chaque source lumineuse, transformant l'accessoire en objet de désir à part entière. La signature géométrique d'Orlinski se prête à merveille à cette finition précieuse, digne des grandes collections d'art contemporain.",
    available: true,
    images: ["/products/cargent.jpg", "/products/cargent1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
  {
    id: "c3",
    slug: "casque-kong-blanc",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Blanc",
    description: "La pureté du blanc pour un Kong lumineux, entre sculpture minimaliste et élégance intemporelle.",
    longDescription:
      "Le Casque Kong Blanc incarne la clarté et la légèreté. Sa teinte immaculée évoque l'épure des galeries d'art les plus exclusives, tout en affichant la puissance formelle caractéristique d'Orlinski. Un équilibre parfait entre force et délicatesse, pour ceux qui voient le blanc comme une couleur à part entière.",
    available: true,
    images: ["/products/cblanc.jpg", "/products/cblanc1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
  {
    id: "c4",
    slug: "casque-kong-bleu",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Bleu",
    description: "Un bleu profond et vibrant — le Kong sur vos oreilles avec toute son intensité chromatique.",
    longDescription:
      "Le Casque Kong Bleu s'impose avec une énergie visuelle rare. Ce bleu profond et électrique transforme chaque port en déclaration de style. Les facettes géométriques d'Orlinski jouent avec cette teinte pour créer des reflets changeants, faisant du casque une sculpture en mouvement perpétuel.",
    available: true,
    images: ["/products/cbleu.jpg", "/products/cbleu1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
  {
    id: "c5",
    slug: "casque-kong-rose",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Rose",
    description: "Le rose audacieux d'Orlinski — une déclaration de style portée à même vos oreilles.",
    longDescription:
      "Le Casque Kong Rose est une affirmation. Ce rose vif et assumé s'impose avec une légèreté trompeuse — derrière la séduction chromatique se cache un objet d'une puissance formelle absolue. Orlinski signe ici un accessoire aussi iconique que les sculptures qui ont fait sa renommée mondiale.",
    available: true,
    images: ["/products/crose.jpg", "/products/crose1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
  {
    id: "c6",
    slug: "casque-kong-rouge",
    name: "Casque Kong",
    artist: "Richard Orlinski",
    coloris: "Rouge",
    description: "Le rouge passion — un Kong sur vos oreilles qui ne passe jamais inaperçu.",
    longDescription:
      "Le Casque Kong Rouge brûle d'une intensité visuelle incomparable. Sa couleur écarlate, amplifiée par les multiples facettes géométriques de la signature Orlinski, en fait un accessoire aussi percutant visuellement que musicalement. Pour ceux qui vivent chaque instant avec passion et sans retenue.",
    badge: "exclusif",
    available: true,
    images: ["/products/crouge.jpg", "/products/crouge1.jpg"],
    specs: {
      bluetooth: "Bluetooth 5.3 — portée 15m",
      puissance: "Drivers 40mm — 20Hz-20kHz",
      autonomie: "Batterie 600 mAh — 30h d'écoute",
      dimensions: "19 × 17 × 8 cm (replié)",
      poids: "280 g",
      charge: "USB-C — charge rapide 1h",
      connectiques: "Jack 3,5mm / USB-C",
    },
    category: "Casque Bluetooth",
    inclus: "Pochette de transport rigide, câble USB-C, câble jack 3,5mm",
  },
];

// ── Clé USB Kong ──────────────────────────────────────────────────────────

export const usbs: Product[] = [
  {
    id: "u1",
    slug: "usb-kong",
    name: "Clé USB Kong",
    artist: "Richard Orlinski",
    coloris: "Or",
    description: "La signature géométrique d'Orlinski miniaturisée — une clé USB qui est avant tout une sculpture.",
    longDescription:
      "La Clé USB Kong transpose l'ADN sculptural de Richard Orlinski dans l'objet le plus quotidien qui soit. Chaque facette géométrique est fidèle à l'œuvre originale, faisant de cet accessoire technologique une pièce de collection à part entière. À poser sur un bureau, à offrir, ou à porter comme un bijou — la Clé USB Kong redéfinit ce qu'un objet du quotidien peut être.",
    badge: "exclusif",
    available: true,
    images: ["/products/usb.jpg", "/products/usb1.jpg"],
    specs: {
      bluetooth: "—",
      puissance: "—",
      autonomie: "—",
      dimensions: "6 × 2 × 2 cm",
      poids: "15 g",
      charge: "—",
      connectiques: "USB-A 3.0 — haute vitesse",
    },
    category: "Clé USB",
    inclus: "Boîte collector Orlinski, pochette velours",
  },
];

export const allProducts: Product[] = [...products, ...casques, ...usbs];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(productId: string, limit = 3): Product[] {
  const product = allProducts.find((p) => p.id === productId);
  if (!product) return [];
  return allProducts
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export const badgeLabels: Record<string, string> = {
  nouveau: "Nouveau",
  exclusif: "Exclusif",
  "derniere-piece": "Dernière pièce",
};
