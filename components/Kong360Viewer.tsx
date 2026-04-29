"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Kong360ViewerProps {
  frames: string[];
  label?: string;
  slug?: string;         // product slug for click navigation
  autoRotate?: boolean;
  speedDeg?: number;     // degrees per second for auto-rotation
}

export default function Kong360Viewer({
  frames,
  label,
  slug,
  autoRotate = true,
  speedDeg = 36,         // one full rotation every 10s
}: Kong360ViewerProps) {
  const router = useRouter();
  const n = frames.length;
  const segmentDeg = 360 / n;                 // degrees covered by each frame

  // Continuous rotation angle 0–360
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const angleRef = useRef(0);

  const dragStartX = useRef(0);
  const dragStartAngle = useRef(0);

  // Auto-rotation via rAF
  const tick = useCallback((ts: number) => {
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = ts - lastTimeRef.current;
    lastTimeRef.current = ts;
    angleRef.current = (angleRef.current + (speedDeg * dt) / 1000) % 360;
    setAngle(angleRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [speedDeg]);

  const startAuto = useCallback(() => {
    lastTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const stopAuto = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTimeRef.current = null;
  }, []);

  useEffect(() => {
    if (autoRotate && !isHovered && !isDragging) startAuto();
    else stopAuto();
    return stopAuto;
  }, [autoRotate, isHovered, isDragging, startAuto, stopAuto]);

  // Derive frame index & local tilt from continuous angle
  const frameIndex = Math.floor((angle % 360) / segmentDeg) % n;
  // localAngle: -segmentDeg/2 → +segmentDeg/2  (tilt within the current frame)
  const localAngle = ((angle % segmentDeg) - segmentDeg / 2);
  // scale it to ±45° for the CSS perspective trick
  const tiltDeg = (localAngle / segmentDeg) * 90;

  // Mouse drag → manual rotation
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartAngle.current = angleRef.current;
  };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const newAngle = ((dragStartAngle.current + delta * 0.7) % 360 + 360) % 360;
    angleRef.current = newAngle;
    setAngle(newAngle);
  }, [isDragging]);
  const onMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp]);

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartAngle.current = angleRef.current;
    setIsHovered(true);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientX - dragStartX.current;
    const newAngle = ((dragStartAngle.current + delta * 0.7) % 360 + 360) % 360;
    angleRef.current = newAngle;
    setAngle(newAngle);
  };
  const onTouchEnd = () => setIsHovered(false);

  const handleClick = () => {
    if (!isDragging && slug) router.push(`/produit/${slug}`);
  };

  return (
    <div
      className="relative flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ cursor: isDragging ? "grabbing" : slug ? "pointer" : "grab" }}
    >
      {/* Shadow under the sculpture */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/30 blur-2xl transition-all duration-300"
        style={{
          width: "120px",
          height: "20px",
          transform: `translateX(-50%) scaleX(${1 - Math.abs(tiltDeg) / 180})`,
        }}
      />

      {/* 3D viewer */}
      <div
        className="relative w-[200px] h-[300px] md:w-[240px] md:h-[360px]"
        style={{ animation: "kong-breathe 4s ease-in-out infinite" }}
        onMouseDown={onMouseDown}
        onClick={handleClick}
      >
        {/* perspective container — gives the 3D depth */}
        <div
          style={{
            perspective: "600px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: `rotateY(${tiltDeg}deg)`,
              transformStyle: "preserve-3d",
              transition: isDragging ? "none" : "transform 0.05s linear",
            }}
          >
            {/* Only render current frame + adjacent for smooth swap */}
            {frames.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0"
                style={{
                  opacity: i === frameIndex ? 1 : 0,
                  transition: "opacity 0.08s linear",
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Vue ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="240px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Label + link hint */}
      {label && (
        <div className="mt-4 text-center">
          <p className="font-barlow font-light text-[9px] tracking-widest4 uppercase text-ivory/50">
            {label}
          </p>
          {slug && isHovered && (
            <p className="font-barlow font-light text-[8px] tracking-widest3 uppercase text-ivory/30 mt-1 transition-opacity duration-300">
              Voir le produit →
            </p>
          )}
        </div>
      )}

      {/* Drag hint when not hovered */}
      {!isHovered && (
        <p className="mt-1 font-barlow font-light text-[8px] tracking-widest3 uppercase text-ivory/20">
          ← faire tourner →
        </p>
      )}

      <style jsx global>{`
        @keyframes kong-breathe {
          0%, 100% { transform: scale(1);    filter: drop-shadow(0 0 0px rgba(255,255,255,0)); }
          50%       { transform: scale(1.04); filter: drop-shadow(0 8px 24px rgba(255,255,255,0.12)); }
        }
      `}</style>
    </div>
  );
}
