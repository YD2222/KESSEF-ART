"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Kong360ViewerProps {
  frames: string[];      // array of image paths
  label?: string;
  autoRotate?: boolean;
  intervalMs?: number;
}

export default function Kong360Viewer({
  frames,
  label,
  autoRotate = true,
  intervalMs = 900,
}: Kong360ViewerProps) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartX = useRef(0);
  const dragStartFrame = useRef(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const n = frames.length;

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrentFrame((f) => (f + 1) % n);
    }, intervalMs);
  }, [n, intervalMs]);

  const stopAuto = useCallback(() => {
    if (autoRef.current) {
      clearInterval(autoRef.current);
      autoRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (autoRotate && !isHovered && !isDragging) startAuto();
    else stopAuto();
    return stopAuto;
  }, [autoRotate, isHovered, isDragging, startAuto, stopAuto]);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartFrame.current = currentFrame;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const frameShift = Math.round(delta / 40);
    const newFrame = ((dragStartFrame.current + frameShift) % n + n) % n;
    setCurrentFrame(newFrame);
  };
  const onMouseUp = () => setIsDragging(false);

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartFrame.current = currentFrame;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientX - dragStartX.current;
    const frameShift = Math.round(delta / 40);
    const newFrame = ((dragStartFrame.current + frameShift) % n + n) % n;
    setCurrentFrame(newFrame);
  };

  return (
    <div
      className="relative flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsDragging(false); }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* Floating glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-white/10 blur-xl" />

      {/* Image stack — crossfade between frames */}
      <div
        className="relative w-[220px] h-[320px] md:w-[260px] md:h-[380px]"
        style={{ animation: "kong-float 3.5s ease-in-out infinite" }}
      >
        {frames.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: i === currentFrame ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Vue ${i + 1}`}
              fill
              className="object-contain drop-shadow-2xl"
              sizes="260px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Label */}
      {label && (
        <p className="mt-4 font-barlow font-light text-[9px] tracking-widest4 uppercase text-ivory/40">
          {label}
        </p>
      )}

      {/* Drag hint */}
      {isHovered && !isDragging && (
        <p className="absolute bottom-0 left-1/2 -translate-x-1/2 font-barlow font-light text-[8px] tracking-widest3 uppercase text-ivory/30 whitespace-nowrap">
          ← glisser pour tourner →
        </p>
      )}

      {/* Frame dots */}
      <div className="flex gap-1.5 mt-3">
        {frames.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentFrame(i)}
            className={`w-1 h-1 rounded-full transition-all duration-300 ${
              i === currentFrame ? "bg-ivory/70 scale-125" : "bg-ivory/20"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes kong-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
