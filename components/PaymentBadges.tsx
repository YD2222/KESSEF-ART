"use client";

const badge = (inverted: boolean) =>
  `flex items-center justify-center px-2.5 h-7 rounded border ${
    inverted ? "border-ivory/15 bg-ivory/5" : "border-obsidian/15 bg-white"
  }`;

function CB({ inverted }: { inverted: boolean }) {
  return (
    <div className={badge(inverted)}>
      <span className="font-barlow font-bold text-[10px] tracking-wide" style={{ color: inverted ? "rgba(245,245,243,0.8)" : "#1A3A8F" }}>CB</span>
    </div>
  );
}

function Visa({ inverted }: { inverted: boolean }) {
  return (
    <div className={badge(inverted)}>
      <svg width="38" height="12" viewBox="0 0 38 12" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="11" fontFamily="Arial" fontWeight="800" fontSize="13" fontStyle="italic" letterSpacing="0.5" fill={inverted ? "rgba(245,245,243,0.85)" : "#1A1F71"}>VISA</text>
      </svg>
    </div>
  );
}

function Mastercard({ inverted }: { inverted: boolean }) {
  return (
    <div className={badge(inverted)}>
      <svg width="32" height="20" viewBox="0 0 32 20" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="10" r="9" fill="#EB001B" fillOpacity={inverted ? "0.85" : "1"} />
        <circle cx="21" cy="10" r="9" fill="#F79E1B" fillOpacity={inverted ? "0.85" : "1"} />
        <path d="M16 3.5C18.1 5 19.5 7.35 19.5 10C19.5 12.65 18.1 15 16 16.5C13.9 15 12.5 12.65 12.5 10C12.5 7.35 13.9 5 16 3.5Z" fill="#FF5F00" fillOpacity={inverted ? "0.85" : "1"} />
      </svg>
    </div>
  );
}

function Amex({ inverted }: { inverted: boolean }) {
  return (
    <div
      className="flex items-center justify-center px-2.5 h-7 rounded"
      style={{ background: inverted ? "rgba(0,111,207,0.6)" : "#006FCF" }}
    >
      <span className="font-barlow font-bold text-[8px] tracking-widest text-white">AMEX</span>
    </div>
  );
}

function PayPal({ inverted }: { inverted: boolean }) {
  return (
    <div className={badge(inverted)}>
      <svg width="46" height="13" viewBox="0 0 46 13" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="11" fontFamily="Arial" fontWeight="800" fontSize="12" fill={inverted ? "rgba(0,156,222,0.9)" : "#009CDE"}>Pay</text>
        <text x="22" y="11" fontFamily="Arial" fontWeight="800" fontSize="12" fill={inverted ? "rgba(0,48,135,0.7)" : "#003087"}>Pal</text>
      </svg>
    </div>
  );
}

function ApplePay({ inverted }: { inverted: boolean }) {
  const color = inverted ? "rgba(245,245,243,0.85)" : "#000000";
  return (
    <div className={badge(inverted)}>
      <svg viewBox="0 0 24 24" width="13" height="15" xmlns="http://www.w3.org/2000/svg" fill={color}>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="ml-1 text-[10px] font-semibold" style={{ color, fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>
        Pay
      </span>
    </div>
  );
}

function GooglePay({ inverted }: { inverted: boolean }) {
  return (
    <div className={`${badge(inverted)} gap-1`}>
      <svg viewBox="0 0 24 24" width="13" height="13" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill={inverted ? "rgba(66,133,244,0.85)" : "#4285F4"} />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill={inverted ? "rgba(52,168,83,0.85)" : "#34A853"} />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill={inverted ? "rgba(251,188,5,0.85)" : "#FBBC05"} />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill={inverted ? "rgba(234,67,53,0.85)" : "#EA4335"} />
      </svg>
      <span className="text-[10px] font-medium" style={{ color: inverted ? "rgba(245,245,243,0.65)" : "#5F6368", fontFamily: "Arial, sans-serif" }}>
        Pay
      </span>
    </div>
  );
}

export default function PaymentBadges({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="5.5" width="9" height="7" rx="1" stroke={inverted ? "rgba(245,245,243,0.35)" : "#787878"} strokeWidth="1" />
          <path d="M3 5.5V3.5C3 2.12 4.12 1 5.5 1C6.88 1 8 2.12 8 3.5V5.5" stroke={inverted ? "rgba(245,245,243,0.35)" : "#787878"} strokeWidth="1" />
          <circle cx="5.5" cy="8.5" r="1" fill={inverted ? "rgba(245,245,243,0.35)" : "#787878"} />
        </svg>
        <span className={`font-barlow font-light text-[9px] tracking-widest3 uppercase ${inverted ? "text-ivory/35" : "text-museum"}`}>
          Paiement 100% sécurisé
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <CB inverted={inverted} />
        <Visa inverted={inverted} />
        <Mastercard inverted={inverted} />
        <Amex inverted={inverted} />
        <PayPal inverted={inverted} />
        <ApplePay inverted={inverted} />
        <GooglePay inverted={inverted} />
      </div>
    </div>
  );
}
