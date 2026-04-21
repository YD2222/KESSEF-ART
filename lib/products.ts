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
  specs: Record<string, string>;
  category: string;
  inclus?: string;
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.0 — portée 10m",
      Puissance: "20W + caisson de basse",
      Autonomie: "Batterie 8800 mAh",
      Dimensions: "37 × 26 × 20 cm",
      Poids: "2,5 kg",
      Recharge: "Induction sans fil 10W — 2 sorties USB",
      Connectiques: "Jack 3,5mm / USB DC 5V",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "Bluetooth 5.3 — portée 15m",
      Puissance: "Drivers 40mm — 20Hz-20kHz",
      Autonomie: "Batterie 600 mAh — 30h d'écoute",
      Dimensions: "19 × 17 × 8 cm (replié)",
      Poids: "280 g",
      Recharge: "USB-C — charge rapide 1h",
      Connectiques: "Jack 3,5mm / USB-C",
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
      Bluetooth: "—",
      Puissance: "—",
      Autonomie: "—",
      Dimensions: "6 × 2 × 2 cm",
      Poids: "15 g",
      Recharge: "—",
      Connectiques: "USB-A 3.0 — haute vitesse",
    },
    category: "Clé USB",
    inclus: "Boîte collector Orlinski, pochette velours",
  },
];

export const badgeLabels: Record<string, string> = {
  nouveau: "Nouveau",
  exclusif: "Exclusif",
  "derniere-piece": "Dernière pièce",
};

// ── Exclusivités (Sculptures) ──────────────────────────────────────────────

export const exclusivites: Product[] = [
  { id:"e1", slug:"hippo-spirit-water-green", name:"Hippo Spirit", artist:"Richard Orlinski", coloris:"Water Green Edition", description:"L'hippopotame revisité par Orlinski — une édition Water Green d'une fraîcheur saisissante.", longDescription:"Le Hippo Spirit Water Green Edition capture l'essence de la faune sauvage à travers le prisme géométrique d'Orlinski. Cette teinte verte évoque les eaux profondes et l'énergie primitive de l'animal, sublimée par les multiples facettes qui jouent avec la lumière.", badge:"exclusif", available:true, images:["/products/hippo-spirit-water-green1.jpg","/products/hippo-spirit-water-green2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Water Green brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e2", slug:"kong-penseur-spirit-red", name:"Kong Penseur Spirit", artist:"Richard Orlinski", coloris:"Red Edition", description:"Le Kong en position du Penseur — une oeuvre chargée de sens et de symbolique.", longDescription:"Le Kong Penseur Spirit Red Edition est une réinterprétation audacieuse de l'iconique Penseur de Rodin à travers l'univers d'Orlinski. Le rouge passion amplifie la puissance introspective de la posture, créant une tension entre force brute et profonde méditation.", badge:"exclusif", available:true, images:["/products/kong-penseur-spirit-red1.jpg","/products/kong-penseur-spirit-red2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Rouge brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e3", slug:"kong-origin-red", name:"Kong Origin", artist:"Richard Orlinski", coloris:"Red Edition", description:"Le Kong original dans sa version rouge — l'oeuvre qui a tout lancé.", longDescription:"Le Kong Origin Red Edition est l'essence même de la vision d'Orlinski : une créature géométrique aux facettes tranchantes qui transforme la bête en icône. Le rouge écarlate lui confère une présence absolue, entre puissance animale et sophistication contemporaine.", available:true, images:["/products/kong-origin-red1.jpg","/products/kong-origin-red2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Rouge brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e4", slug:"shark-spirit-aqua-blue", name:"Shark Spirit", artist:"Richard Orlinski", coloris:"Aqua Blue Edition", description:"Le requin d'Orlinski dans un bleu aqua d'une intensité océanique.", longDescription:"Le Shark Spirit Aqua Blue Edition plonge le regard dans les profondeurs marines. Sa forme aérodynamique découpée en facettes géométriques évoque la vitesse, le danger et la beauté sauvage du plus redouté des prédateurs. Le bleu aqua lui donne une luminosité irréelle.", badge:"exclusif", available:true, images:["/products/shark-spirit-aqua-blue1.jpg","/products/shark-spirit-aqua-blue2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Aqua Blue brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e5", slug:"elephant-spirit-pink", name:"Elephant Spirit", artist:"Richard Orlinski", coloris:"Pink Edition", description:"La majesté de l'éléphant sublimée par un rose audacieux.", longDescription:"L'Elephant Spirit Pink Edition joue sur le paradoxe entre la massivité de l'éléphant et la légèreté du rose. Orlinski transforme le plus grand animal terrestre en sculpture délicate, ses facettes géométriques captant la lumière avec une grâce inattendue.", available:true, images:["/products/elephant-spirit-pink1.jpg","/products/elephant-spirit-pink2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Rose brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e6", slug:"kong-hammer-orange", name:"Kong Hammer", artist:"Richard Orlinski", coloris:"Orange Edition", description:"Le Kong armé — une édition orange explosive à l'énergie incomparable.", longDescription:"Le Kong Hammer Orange Edition est une déclaration de force. Armé de son marteau, le Kong d'Orlinski prend une posture conquérante magnifiée par l'orange vif qui irradie l'espace. Une pièce qui allie dynamisme sculptural et maîtrise chromatique.", badge:"nouveau", available:true, images:["/products/kong-hammer-orange1.jpg","/products/kong-hammer-orange2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Orange brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e7", slug:"rhino-spirit-azur", name:"Rhino Spirit", artist:"Richard Orlinski", coloris:"Azur Edition", description:"Le rhinocéros revisité dans un azur céleste — puissance brute et élégance chromatique.", longDescription:"Le Rhino Spirit Azur Edition impose sa présence avec une autorité tranquille. La corne proéminente et les flancs géométriques du rhinocéros d'Orlinski prennent une dimension nouvelle dans ce bleu azur lumineux, évoquant un ciel d'été au-dessus de la savane.", available:true, images:["/products/rhino-spirit-azur1.jpg","/products/rhino-spirit-azur2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Azur brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e8", slug:"kong-toy-pink-vinyl", name:"Kong Toy", artist:"Richard Orlinski", coloris:"Pink Vinyl", description:"Le Kong en version miniature vinyle rose — collectionnable et irrésistible.", longDescription:"Le Kong Toy Pink Vinyl transpose l'iconique Kong d'Orlinski dans un format collector inédit. Cette version vinyle rose joue avec les codes du jouet designer et de la sculpture d'art contemporain, créant un objet hybride aussi séduisant qu'inattendu.", available:true, images:["/products/kong-toy-pink-vinyl1.jpg","/products/kong-toy-pink-vinyl2.jpg"], specs:{ Matière:"Vinyle souple", Finition:"Rose brillant", Format:"Toy / Collector" }, category:"Exclusivités" },
  { id:"e9", slug:"bas-relief-red", name:"Bas-Relief", artist:"Richard Orlinski", coloris:"Red Edition", description:"Le Kong en bas-relief — une oeuvre murale unique.", longDescription:"Le Bas-Relief Red Edition transpose la sculpture d'Orlinski dans un format mural inédit. Le Kong géométrique se déploie en relief sur une surface plane, créant un jeu d'ombres et de lumières qui transforme n'importe quel intérieur en galerie d'art.", badge:"exclusif", available:true, images:["/products/bas-relief-red1.jpg","/products/bas-relief-red2.jpg"], specs:{ Matière:"Résine haute qualité", Format:"Mural — bas-relief", Finition:"Rouge brillant" }, category:"Exclusivités" },
  { id:"e10", slug:"kong-toy-lime-vinyl", name:"Kong Toy", artist:"Richard Orlinski", coloris:"Lime Vinyl", description:"Le Kong Toy en vert lime — une énergie végétale et électrique.", longDescription:"Le Kong Toy Lime Vinyl apporte une touche de fraîcheur acidulée à la collection. Ce vert lime électrique donne au Kong miniature une personnalité vibrante, entre nature sauvage et design contemporain.", available:true, images:["/products/kong-toy-lime-vinyl1.jpg","/products/kong-toy-lime-vinyl2.jpg"], specs:{ Matière:"Vinyle souple", Finition:"Lime brillant", Format:"Toy / Collector" }, category:"Exclusivités" },
  { id:"e11", slug:"bear-bubble-blue", name:"Bear Bubble", artist:"Richard Orlinski", coloris:"Blue Edition", description:"L'ours dans sa bulle — une sculpture poétique en bleu profond.", longDescription:"Le Bear Bubble Blue Edition enferme l'ours d'Orlinski dans une sphère géométrique, créant une oeuvre à double lecture : la puissance de l'animal et la fragilité de sa bulle protectrice. Le bleu profond amplifie la dimension méditative de la pièce.", available:true, images:["/products/bear-bubble-blue1.jpg","/products/bear-bubble-blue2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Bleu brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e12", slug:"ours-pompon-matte-gold", name:"Ours Pompon x Orlinski", artist:"Richard Orlinski x Pompon", coloris:"Matte Gold", description:"La collaboration iconique entre Orlinski et Pompon — l'ours en or mat.", longDescription:"L'Ours Pompon x Orlinski Matte Gold est le fruit d'une rencontre entre deux géants de la sculpture française : l'épure de François Pompon et l'énergie géométrique de Richard Orlinski. L'or mat confère à cette pièce une dignité intemporelle.", badge:"exclusif", available:true, images:["/products/ours-pompon-matte-gold1.jpg","/products/ours-pompon-matte-gold2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Or mat", Collaboration:"Orlinski x Pompon" }, category:"Exclusivités" },
  { id:"e13", slug:"lion-matt-blue", name:"Lion", artist:"Richard Orlinski", coloris:"Matt Blue", description:"Le roi des animaux en bleu mat — une majesté froide et absolue.", longDescription:"Le Lion Matt Blue d'Orlinski impose sa royauté avec une sérénité glaciale. Le bleu mat absorbe la lumière et donne au roi des animaux une présence minérale, presque mystique. Une pièce de collection pour les amateurs de grandeur silencieuse.", available:true, images:["/products/lion-matt-blue1.jpg","/products/lion-matt-blue2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Bleu mat", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e14", slug:"kong-christmas-green", name:"Kong Christmas", artist:"Richard Orlinski", coloris:"Green Edition", description:"Le Kong habillé pour les fêtes — édition Noël en vert sapin.", longDescription:"Le Kong Christmas Green Edition célèbre les fêtes avec la signature inimitable d'Orlinski. Ce vert sapin profond évoque les forêts enchantées de l'hiver, transformant le Kong en décoration de Noël d'exception pour les intérieurs les plus exigeants.", available:true, images:["/products/kong-christmas-green1.jpg","/products/kong-christmas-green2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Vert sapin brillant", Édition:"Noël — Exclusivité" }, category:"Exclusivités" },
  { id:"e15", slug:"panther-bubble-green", name:"Panther Bubble", artist:"Richard Orlinski", coloris:"Green Edition", description:"La panthère dans sa bulle verte — férocité contenue et élégance absolue.", longDescription:"La Panther Bubble Green Edition enferme la férocité de la panthère d'Orlinski dans une sphère protectrice. Le vert profond confère à la pièce une tension entre le danger du prédateur et la quiétude de sa bulle, créant une oeuvre à la dramaturgie saisissante.", available:true, images:["/products/panther-bubble-green1.jpg","/products/panther-bubble-green2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Vert brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e16", slug:"kong-toy-clear-vinyl", name:"Kong Toy", artist:"Richard Orlinski", coloris:"Clear Vinyl", description:"Le Kong Toy en version transparente — une sculpture qui joue avec la lumière.", longDescription:"Le Kong Toy Clear Vinyl pousse l'expérience visuelle à son paroxysme. La transparence du vinyle révèle la structure interne de la sculpture, transformant chaque source lumineuse en un spectacle de reflets. Une pièce contemplative autant que décorative.", available:true, images:["/products/kong-toy-clear-vinyl1.jpg","/products/kong-toy-clear-vinyl2.jpg"], specs:{ Matière:"Vinyle transparent", Format:"Toy / Collector", Finition:"Crystal clear" }, category:"Exclusivités" },
  { id:"e17", slug:"croco-red", name:"Croco", artist:"Richard Orlinski", coloris:"Red Orlinski", description:"Le crocodile qui a tout commencé — la première oeuvre d'Orlinski.", longDescription:"Le Croco Red Orlinski est l'oeuvre fondatrice. C'est avec ce crocodile en résine rouge qu'Orlinski a commencé sa carrière artistique en 2004. Posséder cette pièce, c'est posséder un fragment de l'histoire de l'art contemporain français.", badge:"exclusif", available:true, images:["/products/croco-red1.jpg","/products/croco-red2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Rouge brillant", Symbolique:"Oeuvre fondatrice 2004" }, category:"Exclusivités" },
  { id:"e18", slug:"kong-bubble-amber", name:"Kong Bubble", artist:"Richard Orlinski", coloris:"Amber Edition", description:"Le Kong dans sa bulle ambrée — chaleur et mystère en suspension.", longDescription:"Le Kong Bubble Amber Edition enveloppe le Kong d'Orlinski dans une sphère aux teintes miel et ambre. Cette couleur chaude évoque le soleil couchant et l'or liquide, donnant à la pièce une profondeur chromatique rare.", available:true, images:["/products/kong-bubble-amber1.jpg","/products/kong-bubble-amber2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Ambre brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e19", slug:"roaring-lion-silver", name:"Roaring Lion", artist:"Richard Orlinski", coloris:"Silver Edition", description:"Le lion rugissant en argent — la puissance à l'état pur.", longDescription:"Le Roaring Lion Silver Edition capture l'instant précis du rugissement, cette explosion de force et d'autorité que seul le lion peut incarner. L'argent brillant fait de chaque facette un miroir qui amplifie la puissance de la gueule ouverte et de la crinière sculptée.", available:true, images:["/products/roaring-lion-silver1.jpg","/products/roaring-lion-silver2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Argent brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e20", slug:"kong-christmas-gold", name:"Kong Christmas", artist:"Richard Orlinski", coloris:"Gold Edition", description:"Le Kong de Noël en or — le cadeau ultime pour les collectionneurs.", longDescription:"Le Kong Christmas Gold Edition est le cadeau de Noël des connaisseurs. Sa robe dorée scintille comme les ornements d'un sapin d'exception. Une pièce rare pour les occasions les plus précieuses.", badge:"exclusif", available:true, images:["/products/kong-christmas-gold1.jpg","/products/kong-christmas-gold2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Or brillant", Édition:"Noël — Édition limitée" }, category:"Exclusivités" },
  { id:"e21", slug:"ours-pompon-silver", name:"Ours Pompon x Orlinski", artist:"Richard Orlinski x Pompon", coloris:"Silver Edition", description:"La collaboration Orlinski x Pompon en argent — élégance et héritage sculptural.", longDescription:"L'Ours Pompon x Orlinski Silver Edition dialogue avec un siècle d'histoire de la sculpture française. L'argent brillant honore la tradition de Pompon tout en s'inscrivant résolument dans la modernité géométrique d'Orlinski.", available:true, images:["/products/ours-pompon-silver1.jpg","/products/ours-pompon-silver2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Argent brillant", Collaboration:"Orlinski x Pompon" }, category:"Exclusivités" },
  { id:"e22", slug:"kong-oil-bubble-red", name:"Kong Oil Bubble", artist:"Richard Orlinski", coloris:"Red Edition", description:"Le Kong dans une bulle aux reflets irisés — une oeuvre psychédélique et précieuse.", longDescription:"Le Kong Oil Bubble Red Edition est une expérience visuelle totale. La surface irisée de la bulle crée des reflets changeants à chaque déplacement du regard. Le rouge du Kong à l'intérieur crée un contraste saisissant.", badge:"nouveau", available:true, images:["/products/kong-oil-bubble-red1.jpg","/products/kong-oil-bubble-red2.jpg"], specs:{ Matière:"Résine et vernis irisé", Finition:"Irisé / Rainbow effect", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e23", slug:"dragon-green", name:"Dragon", artist:"Richard Orlinski", coloris:"Green Edition", description:"Le dragon d'Orlinski dans sa version verte — mythologie et géométrie.", longDescription:"Le Dragon Green Edition d'Orlinski convoque les mythologies du monde entier dans un langage plastique résolument contemporain. Le vert profond évoque les écailles des dragons des légendes orientales, tandis que la géométrie tranchante des facettes lui confère une modernité absolue.", available:true, images:["/products/dragon-green1.jpg","/products/dragon-green2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Vert brillant", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e24", slug:"kong-kase-silver", name:"Kong Kase", artist:"Richard Orlinski", coloris:"Silver Edition", description:"La valise Kong en argent — un accessoire de voyage d'exception.", longDescription:"Le Kong Kase Silver Edition est la valise des voyageurs qui refusent l'anonymat. Ornée du Kong en relief argent, elle impose une présence immédiate dans n'importe quel aéroport du monde.", available:true, images:["/products/kong-kase-silver1.jpg","/products/kong-kase-silver2.jpg"], specs:{ Format:"Valise cabine", Matière:"ABS haute résistance", Finition:"Silver — Kong en relief" }, category:"Exclusivités" },
  { id:"e25", slug:"standing-bear-silver-matte", name:"Standing Bear", artist:"Richard Orlinski", coloris:"Silver Matte", description:"L'ours debout en argent mat — dignité et présence naturelle.", longDescription:"Le Standing Bear Silver Matte d'Orlinski capture l'ours dans sa posture la plus impressionnante. Debout sur ses pattes arrière, il impose une présence monumentale que l'argent mat magnifie sans l'ostentation du brillant.", available:true, images:["/products/standing-bear-silver-matte1.jpg","/products/standing-bear-silver-matte2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Argent mat", Édition:"Exclusivité Kessef Art" }, category:"Exclusivités" },
  { id:"e26", slug:"schtroumpf", name:"Schtroumpf", artist:"Richard Orlinski x Peyo", coloris:"Blue Edition", description:"Le Schtroumpf revisité par Orlinski — l'enfance rencontre l'art contemporain.", longDescription:"La collaboration entre Richard Orlinski et l'univers de Peyo donne naissance à une pièce unique. Les facettes caractéristiques d'Orlinski transforment le personnage culte de notre enfance en sculpture d'art contemporain collector.", badge:"exclusif", available:true, images:["/products/schtroumpf1.jpg","/products/schtroumpf2.jpg"], specs:{ Dimensions:"19 x 10,5 x 14 cm", Matière:"Résine haute qualité", Collaboration:"Orlinski x Peyo" }, category:"Exclusivités" },
  { id:"e27", slug:"schtroumpfette", name:"Schtroumpfette", artist:"Richard Orlinski x Peyo", coloris:"Blue & White Edition", description:"La Schtroumpfette par Orlinski — féminité géométrique et nostalgie chic.", longDescription:"La Schtroumpfette version Orlinski apporte sa touche de féminité à la collection. Fidèle à l'esthétique géométrique de l'artiste, elle transforme l'icône féminine de Peyo en sculpture d'art contemporain.", available:true, images:["/products/schtroumpfette1.jpg","/products/schtroumpfette2.jpg"], specs:{ Dimensions:"19 x 10,5 x 10 cm", Matière:"Résine haute qualité", Collaboration:"Orlinski x Peyo" }, category:"Exclusivités" },
  { id:"e28", slug:"kong-crackled-gold", name:"Kong Crackled Gold", artist:"Richard Orlinski", coloris:"Crackled Gold", description:"Le Kong en or craquelé — une finition unique qui évoque l'art de la céramique ancienne.", longDescription:"Le Kong Crackled Gold d'Orlinski est une oeuvre qui traverse le temps. Sa finition or craquelé évoque les céramiques précieuses des dynasties orientales et l'art japonais Kintsugi. L'or des fractures révèle la beauté dans l'imperfection.", badge:"exclusif", available:true, images:["/products/kong-crackled-gold1.jpg","/products/kong-crackled-gold2.jpg"], specs:{ Dimensions:"19 x 13,5 x 6 cm", Matière:"Résine haute qualité", Finition:"Or craquelé — effet Kintsugi" }, category:"Exclusivités" },
  { id:"e29", slug:"orlinski-gold", name:"Or Lin Ski", artist:"Richard Orlinski", coloris:"Gold Edition", description:"L'autoportrait doré d'Orlinski — l'artiste se met en scène dans une oeuvre ultime.", longDescription:"Or Lin Ski Gold Edition est l'oeuvre la plus personnelle de Richard Orlinski : une sculpture à son image, décomposée en ses propres facettes géométriques. L'or brillant transcende l'autoportrait en icône, entre vanité artistique assumée et hommage à la statuaire classique.", badge:"exclusif", available:true, images:["/products/orlinski-gold1.jpg","/products/orlinski-gold2.jpg"], specs:{ Matière:"Résine haute qualité", Finition:"Or brillant", Édition:"Oeuvre autoportrait" }, category:"Exclusivités" },
];

// ── Digigraphies ───────────────────────────────────────────────────────────

export const digigraphies: Product[] = [
  { id:"d1", slug:"reproduction-wilder", name:"Wilder", artist:"Richard Orlinski", coloris:"Digigraphie", description:"Une reproduction d'art signée numérique — Wilder, l'oeuvre sauvage d'Orlinski.", longDescription:"La digigraphie Wilder est une reproduction d'art en édition limitée, certifiée et numérotée. Imprimée sur papier d'art haute qualité, elle capture toute la puissance chromatique et la précision géométrique de l'oeuvre originale.", available:true, images:["/products/reproduction-wilder1.jpg","/products/reproduction-wilder2.jpg"], specs:{ Support:"Papier d'art haute qualité", Technique:"Impression numérique certifiée", Format:"Encadrée ou en rouleau" }, category:"Digigraphies" },
  { id:"d2", slug:"reproduction-cafe-de-paris", name:"Café de Paris", artist:"Richard Orlinski", coloris:"Digigraphie", description:"Café de Paris — l'esprit parisien capturé dans une digigraphie Orlinski.", longDescription:"La digigraphie Café de Paris célèbre Paris à travers le regard unique de Richard Orlinski. Les tons chauds et l'atmosphère vibrante de la capitale française sont restitués avec une fidélité chromatique exceptionnelle.", available:true, images:["/products/reproduction-cafe-de-paris1.jpg","/products/reproduction-cafe-de-paris2.jpg"], specs:{ Support:"Papier d'art haute qualité", Technique:"Impression numérique certifiée", Format:"Encadrée ou en rouleau" }, category:"Digigraphies" },
  { id:"d3", slug:"reproduction-pop-heart", name:"Pop Heart", artist:"Richard Orlinski", coloris:"Digigraphie", description:"Pop Heart — le coeur géométrique d'Orlinski en version reproduction.", longDescription:"La digigraphie Pop Heart transpose l'iconique coeur géométrique d'Orlinski dans un format mural. Les couleurs vibrantes et les formes tranchantes de l'original sont fidèlement reproduites.", available:true, images:["/products/reproduction-pop-heart1.jpg","/products/reproduction-pop-heart2.jpg"], specs:{ Support:"Papier d'art haute qualité", Technique:"Impression numérique certifiée", Format:"Encadrée ou en rouleau" }, category:"Digigraphies" },
];

// ── Livres ─────────────────────────────────────────────────────────────────

export const livres: Product[] = [
  { id:"l1", slug:"art-book-2022", name:"Art Book", artist:"Richard Orlinski", coloris:"Édition 2022", description:"L'Art Book officiel de Richard Orlinski — l'oeuvre complète en un volume d'exception.", longDescription:"L'Art Book Orlinski Édition 2022 est la référence absolue pour les collectionneurs. Ce volume luxueux retrace l'intégralité de la carrière artistique de Richard Orlinski avec des visuels haute résolution et une iconographie exceptionnelle.", available:true, images:["/products/art-book-20221.jpg","/products/art-book-20222.jpg"], specs:{ Format:"Grand format — couverture rigide", Langue:"Français / Anglais", Éditeur:"Éditions Orlinski" }, category:"Livres" },
  { id:"l2", slug:"orlinski-pompon-livre", name:"Orlinski x Pompon", artist:"Richard Orlinski x Pompon", coloris:"Le Choc des Titans", description:"Le livre de la collaboration entre Orlinski et Pompon — deux géants, une rencontre.", longDescription:"Le Choc des Titans retrace la fascinante rencontre artistique entre Richard Orlinski et l'héritage de François Pompon. Un livre d'art exceptionnel qui documente la genèse de cette collaboration historique.", available:true, images:["/products/orlinski-pompon-livre1.jpg","/products/orlinski-pompon-livre2.jpg"], specs:{ Format:"Grand format — couverture rigide", Langue:"Français", Thématique:"Collaboration artistique" }, category:"Livres" },
  { id:"l3", slug:"richard-orlinski-retrospective", name:"Richard Orlinski", artist:"Richard Orlinski", coloris:"Retrospective", description:"La rétrospective officielle — vingt ans d'une carrière artistique hors norme.", longDescription:"La Rétrospective Richard Orlinski est le livre d'une vie artistique. Vingt ans de créations, d'expositions mondiales et de rencontres décisives retracés dans un ouvrage de référence.", available:true, images:["/products/richard-orlinski-retrospective1.jpg","/products/richard-orlinski-retrospective2.jpg"], specs:{ Format:"Grand format — couverture rigide", Langue:"Français / Anglais", Contenu:"Rétrospective complète" }, category:"Livres" },
  { id:"l4", slug:"pourquoi-jai-casse-les-codes", name:"Pourquoi j'ai casse les codes", artist:"Richard Orlinski", coloris:"Autobiographie", description:"Le livre confession d'Orlinski — l'histoire d'un artiste qui a tout brisé pour tout reconstruire.", longDescription:"Dans ce livre inclassable, Richard Orlinski raconte comment il a délibérément cassé tous les codes de l'art contemporain pour créer son propre univers. Un livre sincère, provocateur et inspirant.", available:true, images:["/products/pourquoi-jai-casse-les-codes1.jpg","/products/pourquoi-jai-casse-les-codes2.jpg"], specs:{ Format:"Format standard", Langue:"Français", Genre:"Autobiographie artistique" }, category:"Livres" },
  { id:"l5", slug:"giant-coloring-book", name:"Giant Coloring Book", artist:"Richard Orlinski", coloris:"Adultes et Enfants", description:"Le grand livre de coloriage Orlinski — l'art accessible à tous les âges.", longDescription:"Le Giant Coloring Book d'Orlinski invite petits et grands à s'approprier l'univers géométrique de l'artiste. Les sculptures iconiques y sont reproduites en grands formats à colorier.", available:true, images:["/products/giant-coloring-book1.jpg","/products/giant-coloring-book2.jpg"], specs:{ Dimensions:"21 x 21 cm", Format:"Cahier de coloriage géant", Public:"Adultes et enfants" }, category:"Livres" },
  { id:"l6", slug:"cahier-coloriage-kids", name:"Cahier de Coloriage", artist:"Richard Orlinski", coloris:"Art for Kids", description:"L'art Orlinski pour les enfants — découvrir la sculpture contemporaine en coloriant.", longDescription:"Le Cahier de Coloriage Art for Kids initie les plus jeunes à l'univers de Richard Orlinski de façon ludique et créative. Les sculptures géométriques adaptées aux enfants développent la sensibilité artistique.", available:true, images:["/products/cahier-coloriage-kids1.jpg","/products/cahier-coloriage-kids2.jpg"], specs:{ Format:"A4 — papier épais", Public:"Enfants 4-12 ans", Contenu:"Illustrations exclusives" }, category:"Livres" },
];

// ── Best Sellers ───────────────────────────────────────────────────────────

export const bestSellers: Product[] = [
  { id:"b1", slug:"porte-cles-kong-spirit", name:"Porte-Clés Kong Spirit", artist:"Richard Orlinski", coloris:"Multicolore", description:"Le Kong en porte-clés — la signature Orlinski à portée de main au quotidien.", longDescription:"Le Porte-Clés Kong Spirit transporte l'univers d'Orlinski dans les gestes du quotidien. Fidèle à la sculpture originale dans un format miniature, il est l'accessoire idéal pour les amateurs d'art.", available:true, images:["/products/porte-cles-kong-spirit1.jpg","/products/porte-cles-kong-spirit2.jpg"], specs:{ Matière:"Résine et métal", Format:"Porte-clés collector", Livraison:"Coffret cadeau" }, category:"Best Sellers" },
  { id:"b2", slug:"porte-cles-bear", name:"Porte-Clés Bear", artist:"Richard Orlinski", coloris:"Multicolore", description:"L'ours d'Orlinski en porte-clés — la sauvagerie apprivoisée dans votre poche.", longDescription:"Le Porte-Clés Bear miniaturise l'ours géométrique d'Orlinski dans un format pratique et collectionnable. Sa finition soignée et ses détails préservés en font un accessoire de qualité.", available:true, images:["/products/porte-cles-bear1.jpg","/products/porte-cles-bear2.jpg"], specs:{ Matière:"Résine et métal", Format:"Porte-clés collector", Livraison:"Coffret cadeau" }, category:"Best Sellers" },
  { id:"b3", slug:"porte-cles-kong-filaire-orange", name:"Porte-Clés Kong Filaire", artist:"Richard Orlinski", coloris:"Orange", description:"Le Kong en version filaire orange — un porte-clés structurel et graphique.", longDescription:"Le Porte-Clés Kong Filaire Orange joue sur le contraste entre la massivité habituelle du Kong et la légèreté d'une structure filaire. L'orange vif attire l'oeil et révèle la géométrie interne.", available:true, images:["/products/porte-cles-kong-filaire-orange1.jpg","/products/porte-cles-kong-filaire-orange2.jpg"], specs:{ Matière:"Métal laqué", Finition:"Orange brillant", Format:"Porte-clés collector" }, category:"Best Sellers" },
  { id:"b4", slug:"stylos-bic-orlinski-argent-or", name:"Stylos Bic x Orlinski", artist:"Richard Orlinski x Bic", coloris:"Argent, Or Rose, Doré", description:"La collaboration Bic x Orlinski — l'art d'écrire avec style.", longDescription:"La collaboration entre Bic et Richard Orlinski réinvente le stylo le plus vendu au monde. La signature géométrique d'Orlinski s'applique sur le corps du stylo Bic, créant un objet du quotidien élevé au rang d'accessoire d'art.", available:true, images:["/products/stylos-bic-orlinski-argent-or1.jpg","/products/stylos-bic-orlinski-argent-or2.jpg"], specs:{ Collaboration:"Bic x Orlinski", Finitions:"Argent / Or rose / Doré", Contenu:"Coffret de 3 stylos" }, category:"Best Sellers" },
  { id:"b5", slug:"stylos-bic-orlinski-ruthenium", name:"Stylos Bic x Orlinski", artist:"Richard Orlinski x Bic", coloris:"Ruthénium", description:"L'édition ruthénium — la version la plus premium des stylos Bic x Orlinski.", longDescription:"L'édition Ruthénium des Stylos Bic x Orlinski est la version la plus exclusive de la collection. Ce métal précieux, plus rare que le platine, confère aux stylos une finition sombre et luxueuse d'une sophistication rare.", badge:"exclusif", available:true, images:["/products/stylos-bic-orlinski-ruthenium1.jpg","/products/stylos-bic-orlinski-ruthenium2.jpg"], specs:{ Collaboration:"Bic x Orlinski", Finition:"Ruthénium", Contenu:"Coffret collector" }, category:"Best Sellers" },
  { id:"b6", slug:"wild-kong-candle-black", name:"Wild Kong The Candle", artist:"Richard Orlinski", coloris:"Black", description:"La bougie Wild Kong en noir — luxe olfactif et sculpture en un seul objet.", longDescription:"Wild Kong The Candle Black transforme la bougie en objet d'art. Le flacon en forme de Kong géométrique est lui-même une sculpture miniature, et le parfum a été élaboré pour correspondre à l'univers sauvage et raffiné d'Orlinski.", available:true, images:["/products/wild-kong-candle-black1.jpg","/products/wild-kong-candle-black2.jpg"], specs:{ Parfum:"Fragrance Wild Kong", Contenance:"190g — 40h de combustion", Format:"Bougie-sculpture collector" }, category:"Best Sellers" },
  { id:"b7", slug:"wild-kong-candle-white", name:"Wild Kong The Candle", artist:"Richard Orlinski", coloris:"White", description:"La bougie Wild Kong en blanc — épure et raffinement olfactif.", longDescription:"Wild Kong The Candle White est la version immaculée de la bougie-sculpture d'Orlinski. Le blanc cassé du flacon Kong évoque la pureté des galeries d'art les plus exclusives.", available:true, images:["/products/wild-kong-candle-white1.jpg","/products/wild-kong-candle-white2.jpg"], specs:{ Parfum:"Fragrance Wild Kong", Contenance:"190g — 40h de combustion", Format:"Bougie-sculpture collector" }, category:"Best Sellers" },
];

// ── Divers ─────────────────────────────────────────────────────────────────

export const divers: Product[] = [
  { id:"v1", slug:"bouee-kong-pink", name:"Bouée Kong", artist:"Richard Orlinski", coloris:"Pink Edition", description:"La bouée Orlinski rose — l'art s'invite à la plage et à la piscine.", longDescription:"La Bouée Kong Pink Edition apporte l'univers d'Orlinski dans les eaux estivales. Imprimée du Kong iconique sur fond rose vif, elle transforme chaque sortie plage ou piscine en déclaration de style.", available:true, images:["/products/bouee-kong-pink1.jpg","/products/bouee-kong-pink2.jpg"], specs:{ Matière:"PVC haute résistance", Finition:"Print Kong Pink", Usage:"Piscine et mer" }, category:"Divers" },
  { id:"v2", slug:"drap-de-plage", name:"Drap de Plage", artist:"Richard Orlinski", coloris:"Collection Summer", description:"Le drap de plage Orlinski — la collection summer signée par l'artiste.", longDescription:"Le Drap de Plage Collection Summer d'Orlinski transforme la serviette de plage en accessoire de mode. Imprimé de motifs exclusifs créés par l'artiste, il allie praticité et esthétique.", available:true, images:["/products/drap-de-plage1.jpg","/products/drap-de-plage2.jpg"], specs:{ Matière:"Coton éponge", Dimensions:"90 x 170 cm", Collection:"Summer Orlinski" }, category:"Divers" },
  { id:"v3", slug:"sac-de-plage", name:"Sac de Plage", artist:"Richard Orlinski", coloris:"Collection Summer", description:"Le sac de plage Orlinski — emportez l'art avec vous.", longDescription:"Le Sac de Plage Collection Summer complète parfaitement la collection estivale d'Orlinski. Spacieux et résistant, il est orné de motifs exclusifs créés par l'artiste.", available:true, images:["/products/sac-de-plage1.jpg","/products/sac-de-plage2.jpg"], specs:{ Matière:"Toile résistante", Fermeture:"Zip sécurisé", Collection:"Summer Orlinski" }, category:"Divers" },
  { id:"v4", slug:"raquettes-de-plage", name:"Raquettes de Plage", artist:"Richard Orlinski", coloris:"Collection Summer", description:"Les raquettes de plage Orlinski — le jeu devient art.", longDescription:"Les Raquettes de Plage Collection Summer transforment un jeu estival ordinaire en expérience esthétique. Ornées du design exclusif d'Orlinski, elles sont autant des accessoires de jeu que des objets de décoration.", available:true, images:["/products/raquettes-de-plage1.jpg","/products/raquettes-de-plage2.jpg"], specs:{ Matière:"Bois et fibre synthétique", Contenu:"Set de 2 raquettes + balle", Collection:"Summer Orlinski" }, category:"Divers" },
  { id:"v5", slug:"kong-kase-red", name:"Kong Kase", artist:"Richard Orlinski", coloris:"Red Edition", description:"La valise Kong en rouge — voyager avec style et sans compromis.", longDescription:"Le Kong Kase Red Edition est la valise des voyageurs qui refusent l'anonymat. Ornée du Kong en relief rouge écarlate, elle impose une présence immédiate dans n'importe quel aéroport du monde.", available:true, images:["/products/kong-kase-red1.jpg","/products/kong-kase-red2.jpg"], specs:{ Format:"Valise cabine", Matière:"ABS haute résistance", Finition:"Red — Kong en relief" }, category:"Divers" },
  { id:"v6", slug:"airpods-kase-kong-rose", name:"AirPods Kase Kong", artist:"Richard Orlinski", coloris:"Rose", description:"La coque AirPods Kong en rose — protégez vos écouteurs avec style.", longDescription:"L'AirPods Kase Kong Rose transpose l'univers d'Orlinski dans l'accessoire tech le plus visible du quotidien. La forme du Kong géométrique s'adapte parfaitement au format de la coque AirPods.", available:true, images:["/products/airpods-kase-kong-rose1.jpg","/products/airpods-kase-kong-rose2.jpg"], specs:{ Compatibilité:"AirPods 1re et 2e génération", Matière:"Silicone haute qualité", Finition:"Rose — Kong en relief" }, category:"Divers" },
  { id:"v7", slug:"totebag-power-of-art", name:"Totebag", artist:"Richard Orlinski", coloris:"Power of Art", description:"Le totebag Power of Art — l'art au quotidien.", longDescription:"Le Totebag Power of Art d'Orlinski est le compagnon idéal pour ceux qui portent l'art dans leur vie quotidienne. Robuste et spacieux, il affiche le message emblématique de l'artiste avec une sobriété élégante.", available:true, images:["/products/totebag-power-of-art1.jpg","/products/totebag-power-of-art2.jpg"], specs:{ Matière:"Coton biologique", Contenance:"Large format", Sérigraphie:"Power of Art — Orlinski" }, category:"Divers" },
  { id:"v8", slug:"gourde-power-of-art", name:"Gourde", artist:"Richard Orlinski", coloris:"Power of Art", description:"La gourde Power of Art — rester hydraté avec style.", longDescription:"La Gourde Power of Art d'Orlinski allie fonctionnalité et esthétique. Sa finition soignée et son message artistique en font un accessoire du quotidien qui reflète les valeurs de l'artiste.", available:true, images:["/products/gourde-power-of-art1.jpg","/products/gourde-power-of-art2.jpg"], specs:{ Matière:"Inox double paroi", Capacité:"500ml", Finition:"Power of Art — Orlinski" }, category:"Divers" },
];

// ── Textiles ───────────────────────────────────────────────────────────────

export const textiles: Product[] = [
  { id:"t1", slug:"sweat-shadow-adultes", name:"Sweat Shadow", artist:"Richard Orlinski", coloris:"Adultes", description:"Le sweat Shadow — l'ombre de Kong sur votre silhouette.", longDescription:"Le Sweat Shadow Collection Adultes joue avec l'ombre et la lumière caractéristiques de l'univers d'Orlinski. Le Kong géométrique imprimé en négatif crée un effet visuel saisissant sur ce sweat de qualité premium.", available:true, images:["/products/sweat-shadow-adultes1.jpg","/products/sweat-shadow-adultes2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Coupe:"Unisexe — coupe standard", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t2", slug:"sweat-miami-adultes", name:"Sweat Miami", artist:"Richard Orlinski", coloris:"Adultes", description:"Le sweat Miami — l'esprit Art Basel et les couleurs de Floride.", longDescription:"Le Sweat Miami Collection Adultes capture l'énergie de la ville la plus artistique de Floride. Les couleurs vibrantes et le design exclusif d'Orlinski célèbrent la créativité débridée de Miami Art Basel.", available:true, images:["/products/sweat-miami-adultes1.jpg","/products/sweat-miami-adultes2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Coupe:"Unisexe — coupe standard", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t3", slug:"hoodie-basic-adultes", name:"Hoodie Basic", artist:"Richard Orlinski", coloris:"Adultes", description:"Le hoodie basique Orlinski — le confort premium signé par l'artiste.", longDescription:"Le Hoodie Basic Collection Adultes est la pièce essentielle de la garde-robe Orlinski. Sa coupe soignée et sa qualité premium en font un incontournable.", available:true, images:["/products/hoodie-basic-adultes1.jpg","/products/hoodie-basic-adultes2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Coupe:"Unisexe — coupe relax", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t4", slug:"sweat-basic-adultes", name:"Sweat Basic", artist:"Richard Orlinski", coloris:"Adultes", description:"Le sweat basique Orlinski — l'essentiel avec la signature de l'artiste.", longDescription:"Le Sweat Basic Collection Adultes est la version épurée du streetwear Orlinski. Sans capuche, sobre, il laisse toute la place à la signature subtile de l'artiste sur une matière de qualité premium.", available:true, images:["/products/sweat-basic-adultes1.jpg","/products/sweat-basic-adultes2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Coupe:"Unisexe — coupe standard", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t5", slug:"hoodie-power-of-art", name:"Hoodie Power of Art", artist:"Richard Orlinski", coloris:"Power of Art", description:"Le hoodie Power of Art — porter le manifeste d'Orlinski.", longDescription:"Le Hoodie Power of Art est plus qu'un vêtement — c'est un manifeste. En le portant, vous affichez votre adhésion au message central de Richard Orlinski : l'art a le pouvoir de transformer le monde.", available:true, images:["/products/hoodie-power-of-art1.jpg","/products/hoodie-power-of-art2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Coupe:"Unisexe — coupe oversize", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t6", slug:"collection-tag-hoodie-gris", name:"Collection Tag", artist:"Richard Orlinski", coloris:"Hoodie Gris", description:"Le hoodie gris Collection Tag — l'art du tag revisité par Orlinski.", longDescription:"Le Hoodie Gris Collection Tag d'Orlinski s'inspire de l'art urbain du graffiti pour créer un vêtement au carrefour du street art et de la sculpture contemporaine.", available:true, images:["/products/collection-tag-hoodie-gris1.jpg","/products/collection-tag-hoodie-gris2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Couleur:"Gris chiné", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t7", slug:"collection-tag-tshirt-noir", name:"Collection Tag", artist:"Richard Orlinski", coloris:"T-shirt Noir", description:"Le t-shirt noir Collection Tag — le basique ultime signé Orlinski.", longDescription:"Le T-shirt Noir Collection Tag est la pièce de base indispensable de la garde-robe Orlinski. Sa coupe ajustée et sa qualité de coton premium en font un essentiel polyvalent.", available:true, images:["/products/collection-tag-tshirt-noir1.jpg","/products/collection-tag-tshirt-noir2.jpg"], specs:{ Composition:"100% coton peigné", Couleur:"Noir", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t8", slug:"collection-wild-hoodie-noir", name:"Collection Wild", artist:"Richard Orlinski", coloris:"Hoodie Noir", description:"Le hoodie Wild noir — l'esprit sauvage d'Orlinski dans sa version la plus sombre.", longDescription:"Le Hoodie Noir Collection Wild incarne l'essence de l'univers Wild d'Orlinski : une nature sauvage indomptée. Le noir absorbe tout et révèle les détails du print Wild dans une tension visuelle parfaite.", available:true, images:["/products/collection-wild-hoodie-noir1.jpg","/products/collection-wild-hoodie-noir2.jpg"], specs:{ Composition:"80% coton — 20% polyester", Couleur:"Noir", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t9", slug:"collection-wild-tshirt-noir", name:"Collection Wild", artist:"Richard Orlinski", coloris:"T-shirt Noir", description:"Le t-shirt Wild noir — la nature sauvage sur votre peau.", longDescription:"Le T-shirt Noir Collection Wild transpose l'énergie animale de l'univers Wild d'Orlinski dans un format t-shirt premium. L'impression exclusive de motifs sauvages sur fond noir crée un contraste saisissant.", available:true, images:["/products/collection-wild-tshirt-noir1.jpg","/products/collection-wild-tshirt-noir2.jpg"], specs:{ Composition:"100% coton peigné", Couleur:"Noir", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t10", slug:"collection-wild-tshirt-blanc", name:"Collection Wild", artist:"Richard Orlinski", coloris:"T-shirt Blanc", description:"Le t-shirt Wild blanc — la nature sauvage dans toute sa clarté.", longDescription:"Le T-shirt Blanc Collection Wild offre une lecture différente des motifs Wild d'Orlinski. Sur fond blanc, les impressions révèlent leurs détails avec une clarté maximale.", available:true, images:["/products/collection-wild-tshirt-blanc1.jpg","/products/collection-wild-tshirt-blanc2.jpg"], specs:{ Composition:"100% coton peigné", Couleur:"Blanc", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t11", slug:"collection-love-art-tshirt-bleu", name:"Collection Love Art", artist:"Richard Orlinski", coloris:"T-shirt Bleu", description:"Le t-shirt Love Art bleu — parce que l'amour de l'art commence par ce qu'on porte.", longDescription:"Le T-shirt Bleu Collection Love Art d'Orlinski célèbre la passion de l'art dans toutes ses formes. Le bleu vibrant et le message Love Art créent un vêtement porteur de sens.", available:true, images:["/products/collection-love-art-tshirt-bleu1.jpg","/products/collection-love-art-tshirt-bleu2.jpg"], specs:{ Composition:"100% coton peigné", Couleur:"Bleu", Entretien:"Lavage 30°C" }, category:"Textiles" },
  { id:"t12", slug:"collection-love-art-tshirt-gris", name:"Collection Love Art", artist:"Richard Orlinski", coloris:"T-shirt Gris", description:"Le t-shirt Love Art gris — la sobriété élégante de l'amateur d'art.", longDescription:"Le T-shirt Gris Collection Love Art propose une version plus discrète du message Love Art d'Orlinski. Le gris chiné apporte une sophistication naturelle.", available:true, images:["/products/collection-love-art-tshirt-gris1.jpg","/products/collection-love-art-tshirt-gris2.jpg"], specs:{ Composition:"100% coton peigné", Couleur:"Gris chiné", Entretien:"Lavage 30°C" }, category:"Textiles" },
];

export const allProducts: Product[] = [...products, ...casques, ...usbs, ...exclusivites, ...digigraphies, ...livres, ...bestSellers, ...divers, ...textiles];

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
