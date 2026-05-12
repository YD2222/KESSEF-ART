/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Empêche les navigateurs de deviner le type MIME (protection contre XSS via upload)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Empêche le site d'être chargé dans un iframe (protection contre clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Politique de référent : envoie l'origine uniquement sur les requêtes same-origin
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Force HTTPS pendant 2 ans, inclut les sous-domaines
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Désactive les fonctionnalités navigateur non utilisées (micro, caméra, géolocalisation…)
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy : autorise uniquement les sources légitimes
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Scripts : site + Stripe (paiement)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com",
      // Styles : site + inline (Tailwind)
      "style-src 'self' 'unsafe-inline'",
      // Images : site + unsplash + data URIs
      "img-src 'self' data: https://images.unsplash.com",
      // Polices
      "font-src 'self'",
      // Connexions réseau : site + Stripe API
      "connect-src 'self' https://api.stripe.com",
      // Iframes : uniquement Stripe Checkout
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      // Bloque les objets Flash/Java
      "object-src 'none'",
      // Force HTTPS pour les ressources mixtes
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
