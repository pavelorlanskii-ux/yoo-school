"use client";

import { useEffect, useRef } from "react";

type HeroWaveVideoProps = {
  className?: string;
};

export default function HeroWaveVideo({ className = "" }: HeroWaveVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let rafId = 0;

    const render = () => {
      if (!video.videoWidth || !video.videoHeight) {
        rafId = requestAnimationFrame(render);
        return;
      }

      if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
      }

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = frame.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        const nearNeutral = Math.abs(r - g) < 18 && Math.abs(g - b) < 18 && Math.abs(r - b) < 18;
        const brightGray = r > 150 && g > 150 && b > 150;

        if (nearNeutral && brightGray) {
          // Soft alpha falloff so object edges stay natural.
          const brightness = (r + g + b) / 3;
          const alpha = Math.max(0, Math.min(255, (185 - brightness) * 6));
          pixels[i + 3] = alpha;
        }
      }

      ctx.putImageData(frame, 0, 0);
      rafId = requestAnimationFrame(render);
    };

    const start = () => {
      video.play().catch(() => {});
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(render);
    };

    if (video.readyState >= 2) {
      start();
    } else {
      video.addEventListener("loadeddata", start);
    }

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadeddata", start);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        src="/videos/hero-character-wave-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="hidden"
      />
      <canvas ref={canvasRef} className={className} aria-label="YOO SCHOOL hero character wave animation" />
    </>
  );
}

