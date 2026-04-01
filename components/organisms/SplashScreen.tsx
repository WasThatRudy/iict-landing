"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

const COLORS = ["#4e03ff", "#7b2fff", "#a855f7", "#6d28d9"];

interface SplashScreenProps {
  onVideoStart: () => void;
  onDone: () => void;
}

type Phase = "splash" | "video";

export default function SplashScreen({ onVideoStart, onDone }: SplashScreenProps) {
  const [phase, setPhase] = useState<Phase>("splash");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  // Hide system cursor + lock scroll
  useEffect(() => {
    document.body.style.cursor = "none";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.cursor = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Preload video while user is still on splash
  useEffect(() => {
    const video = videoRef.current;
    if (video) video.load();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -(Math.random() * 3 + 1),
          life: 1,
          size: Math.random() * 8 + 3,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter((p) => p.life > 0.02);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy *= 0.97;
        p.vx *= 0.99;
        p.life -= 0.022;

        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const radius = Math.max(0.1, p.size * p.life);
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 20;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = useCallback(() => {
    if (phase !== "splash") return;
    setPhase("video");
    // Don't cancel RAF — let particles keep fading naturally

    const video = videoRef.current;
    if (!video) { onDone(); return; }

    const timeout = setTimeout(onDone, 15000);

    video.play().then(() => {
      onVideoStart();
    }).catch(() => {
      clearTimeout(timeout);
      onDone();
    });

    video.onended = () => {
      clearTimeout(timeout);
      onDone();
    };
  }, [phase, onDone, onVideoStart]);

  const handleVideoEnd = useCallback(() => {
    onDone();
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[200]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Background — fades out when video plays so landing page shows through */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: phase === "video" ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ backgroundColor: "var(--color-background)" }}
      />

      {/* Dragon scale bg */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
        <defs>
          <pattern id="splash-scales" x="0" y="0" width="48" height="40" patternUnits="userSpaceOnUse">
            <ellipse cx="24" cy="0"  rx="24" ry="12" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
            <ellipse cx="0"  cy="20" rx="24" ry="12" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
            <ellipse cx="48" cy="20" rx="24" ry="12" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
            <ellipse cx="24" cy="40" rx="24" ry="12" fill="none" stroke="#4e03ff" strokeWidth="0.8"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#splash-scales)"/>
      </svg>

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(78,3,255,0.12) 0%, transparent 65%)" }}
      />

      {/* Splash content */}
      <AnimatePresence>
        {phase === "splash" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-8"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/assets/svgs/logo.png"
                alt="IICT"
                width={220}
                height={73}
                className="object-contain w-[160px] md:w-[220px]"
                priority
              />
              <p
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(13px, 2vw, 17px)",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                }}
              >
                Innovations in Compiler Technology
              </p>
            </motion.div>

            {/* Welcome */}
            <motion.div
              className="flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                className="text-white text-center leading-none"
                style={{
                  fontFamily: "var(--font-boldonse)",
                  fontSize: "clamp(32px, 6vw, 56px)",
                  letterSpacing: "-0.03em",
                  textShadow: "0 0 60px rgba(78,3,255,0.5)",
                }}
              >
                Welcome
              </h1>
              <p
                className="text-center px-6"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "clamp(11px, 3vw, 14px)",
                  color: "var(--color-text-secondary)",
                  letterSpacing: "0.02em",
                }}
              >
                A Compiler Workshop bridging academia and industry
              </p>
            </motion.div>

            {/* Click hint */}
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.p
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                }}
              >
                Click anywhere to enter
              </motion.p>
              {/* Subtle animated line */}
              <motion.div
                animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  height: 1,
                  width: 48,
                  background: "linear-gradient(to right, transparent, #4e03ff, transparent)",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dragon video — screen blend knocks out black, only dragon shows */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: phase === "video" ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        style={{ pointerEvents: "none", mixBlendMode: "screen" }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/videos/dragon-transition.mp4"
          muted
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Fire cursor canvas — last in DOM = always on top */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </motion.div>
  );
}
