const items = [
  "Livraison internationale assurée",
  "Certificat d'authenticité inclus",
  "Éditions numérotées & limitées",
  "Service clientèle privé",
  "Livraison internationale assurée",
  "Certificat d'authenticité inclus",
  "Éditions numérotées & limitées",
  "Service clientèle privé",
];

export default function InfoStrip() {
  return (
    <div className="bg-carbon text-ivory overflow-hidden">
      <div className="flex items-center h-10 border-y border-ivory/10">
        <div className="flex items-center gap-0 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-barlow font-light text-[10px] tracking-widest3 uppercase text-ivory/50 px-10">
                {item}
              </span>
              <span className="text-ivory/20">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
