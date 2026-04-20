"use client";

import Link from "next/link";

interface LogoProps {
  inverted?: boolean;
}

export default function Logo({ inverted = false }: LogoProps) {
  const textColor = inverted ? "text-ivory" : "text-obsidian";
  const lineColor = inverted ? "bg-ivory/40" : "bg-obsidian/40";
  const subColor = inverted ? "text-ivory/40" : "text-obsidian/40";

  return (
    <Link href="/" className="inline-flex flex-col items-center gap-[3px] select-none">
      <span
        className={`font-bebas text-[28px] leading-none tracking-widest2 ${textColor}`}
      >
        KESSEF
      </span>
      <div className={`flex items-center gap-2`}>
        <span className={`block h-px w-6 ${lineColor}`} />
        <span
          className={`font-barlow font-light text-[9px] tracking-widest4 uppercase ${subColor}`}
        >
          A · R · T
        </span>
        <span className={`block h-px w-6 ${lineColor}`} />
      </div>
    </Link>
  );
}
