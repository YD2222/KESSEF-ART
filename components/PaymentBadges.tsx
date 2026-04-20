// Badges de paiement sécurisé — inline SVG, aucune dépendance externe

export default function PaymentBadges({ inverted = false }: { inverted?: boolean }) {
  const textColor = inverted ? "text-ivory/40" : "text-museum";

  return (
    <div className="flex flex-col gap-3">
      {/* Label sécurisé */}
      <div className="flex items-center gap-2">
        {/* Cadenas */}
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="5.5" width="9" height="7" rx="1" stroke={inverted ? "rgba(245,245,243,0.4)" : "#787878"} strokeWidth="1"/>
          <path d="M3 5.5V3.5C3 2.12 4.12 1 5.5 1C6.88 1 8 2.12 8 3.5V5.5" stroke={inverted ? "rgba(245,245,243,0.4)" : "#787878"} strokeWidth="1"/>
          <circle cx="5.5" cy="8.5" r="1" fill={inverted ? "rgba(245,245,243,0.4)" : "#787878"}/>
        </svg>
        <span className={`font-barlow font-light text-[9px] tracking-widest3 uppercase ${textColor}`}>
          Paiement 100% sécurisé
        </span>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {/* CB */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <span className="font-barlow font-light text-[9px] tracking-widest uppercase" style={{ color: inverted ? "rgba(245,245,243,0.7)" : "#1A3A8F" }}>CB</span>
        </div>

        {/* Visa */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <svg width="34" height="11" viewBox="0 0 34 11" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="10" fontFamily="Arial" fontWeight="700" fontSize="11" letterSpacing="0.5" fill={inverted ? "rgba(245,245,243,0.8)" : "#1A1F71"}>VISA</text>
          </svg>
        </div>

        {/* Mastercard */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <svg width="30" height="20" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" fill="#EB001B" fillOpacity={inverted ? "0.8" : "1"}/>
            <circle cx="20" cy="10" r="9" fill="#F79E1B" fillOpacity={inverted ? "0.8" : "1"}/>
            <path d="M15 3.5C17.1 5 18.5 7.35 18.5 10C18.5 12.65 17.1 15 15 16.5C12.9 15 11.5 12.65 11.5 10C11.5 7.35 12.9 5 15 3.5Z" fill="#FF5F00" fillOpacity={inverted ? "0.8" : "1"}/>
          </svg>
        </div>

        {/* Amex */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <span className="font-barlow font-light text-[8px] tracking-widest uppercase" style={{ color: inverted ? "rgba(245,245,243,0.7)" : "#2E77BC" }}>AMEX</span>
        </div>

        {/* PayPal */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <svg width="42" height="11" viewBox="0 0 42 11" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="9.5" fontFamily="Arial" fontWeight="700" fontSize="10" fill="#009CDE">Pay</text>
            <text x="19" y="9.5" fontFamily="Arial" fontWeight="700" fontSize="10" fill="#003087">Pal</text>
          </svg>
        </div>

        {/* Apple Pay */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <svg width="40" height="14" viewBox="0 0 40 14" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="11" fontFamily="-apple-system, BlinkMacSystemFont, Arial" fontWeight="500" fontSize="10" fill={inverted ? "rgba(245,245,243,0.8)" : "#000000"}> Pay</text>
          </svg>
        </div>

        {/* Google Pay */}
        <div className={`flex items-center justify-center px-2 h-7 rounded border ${inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"}`}>
          <svg width="46" height="11" viewBox="0 0 46 11" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#4285F4">G</text>
            <text x="8" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#EA4335">o</text>
            <text x="14" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#FBBC05">o</text>
            <text x="20" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#4285F4">g</text>
            <text x="26" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#34A853">le</text>
            <text x="35" y="9.5" fontFamily="Arial" fontWeight="500" fontSize="10" fill="#5F6368"> Pay</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
