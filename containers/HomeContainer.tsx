"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/organisms/Navbar";
import HeroSection, { HeroSectionHandle } from "@/components/organisms/HeroSection";
import ArchiveSection from "@/components/organisms/ArchiveSection";
import TalksSection from "@/components/organisms/TalksSection";
import SplashScreen from "@/components/organisms/SplashScreen";
import { TalkCard } from "@/types";

const AVATARS = [
  { src: "/assets/images/avatar-1.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-2.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-3.png", alt: "IICT 2025 attendee" },
  { src: "/assets/images/avatar-4.png", alt: "IICT 2025 attendee" },
];

const TALKS_2025: TalkCard[] = [
  { id: "2025-1",  title: "Imagining a Next-generation Superoptimizer",                                        watchUrl: "https://www.youtube.com/watch?v=f6a1K81L7hs" },
  { id: "2025-2",  title: "Evolving the OCaml Programming Language",                                           watchUrl: "https://www.youtube.com/watch?v=gxJJhjYJ5oo" },
  { id: "2025-3",  title: "Compilers @ Nvidia: Challenges, Innovations, and the Impact of AI",                 watchUrl: "https://www.youtube.com/watch?v=ePu8AyNiWYs" },
  { id: "2025-4",  title: "eld — Embedded Linker. Why another linker?",                                        watchUrl: "https://www.youtube.com/watch?v=7-dm_iRRdZM" },
  { id: "2025-5",  title: "Inductor-TV: Formal Methods for Pytorch Compiler",                                  watchUrl: "https://www.youtube.com/watch?v=OzvyeQkLrmE" },
  { id: "2025-6",  title: "Experiences in Engineering The Eclipse Compiler for Java",                           watchUrl: "https://www.youtube.com/watch?v=QRdIaAJgiFM" },
  { id: "2025-7",  title: "Combining Static Analysis and Speculations in JIT Compilers",                       watchUrl: "https://www.youtube.com/watch?v=SFdFD8YJAn0" },
  { id: "2025-8",  title: "Enhanced Debuggability Support in LLVM-based AOCC Compiler for Fortran",            watchUrl: "https://www.youtube.com/watch?v=yDNGRdYI7KI" },
  { id: "2025-9",  title: "A Formal Verification Approach to Safeguard Controller Variables from SEU",         watchUrl: "https://www.youtube.com/watch?v=vwBWxBAGoL4" },
  { id: "2025-10", title: "Enhance LLVM Loop Vectorization Using Polly",                                       watchUrl: "https://www.youtube.com/watch?v=Ai9BHhLK8DE" },
  { id: "2025-11", title: "Open-source Compiler for Vendor-specific RISC-V Extensions",                        watchUrl: "https://www.youtube.com/watch?v=9ZXdGksttno" },
  { id: "2025-12", title: "Meerkat: A Framework for Dynamic Graph Algorithms on GPUs",                         watchUrl: "https://www.youtube.com/watch?v=uQsiSsFaGSQ" },
  { id: "2025-13", title: "Compiling Distributed Consistency: Orthogonally Replicated Data Types",             watchUrl: "https://www.youtube.com/watch?v=0E_3xJi93kg" },
  { id: "2025-14", title: "Customizing Link Using Plugins",                                                    watchUrl: "https://www.youtube.com/watch?v=IEKaxszb4Bo" },
  { id: "2025-15", title: "GSOHC: Global Synchronization Optimization in Heterogeneous Computing",             watchUrl: "https://www.youtube.com/watch?v=dN0Rq_f8yY4" },
  { id: "2025-16", title: "What does an IR for JS Static Analysis Look Like?",                                 watchUrl: "https://www.youtube.com/watch?v=dvR46pc66H0" },
  { id: "2025-17", title: "Context-Sensitive Interprocedural Dominance for SSA",                               watchUrl: "https://www.youtube.com/watch?v=UQacD3HBomQ" },
  { id: "2025-18", title: "Declarative IR Specification in Pliron",                                            watchUrl: "https://www.youtube.com/watch?v=w-g4xSOC9og" },
  { id: "2025-19", title: "VASCO for Bidirectional Analysis",                                                  watchUrl: "https://www.youtube.com/watch?v=ApCp1VjyVzg" },
  { id: "2025-20", title: "PyDRA — Pythonic DSL for RAN",                                                      watchUrl: "https://www.youtube.com/watch?v=V66RHQMcepk" },
  { id: "2025-21", title: "Optimized GHASH Intrinsic for OpenJDK on PowerPC",                                  watchUrl: "https://www.youtube.com/watch?v=X0procUJw_8" },
  { id: "archive-2025", title: "2025 Website Archive", watchUrl: "https://compilertech.org/2025", ctaLabel: "Visit" },
];

const TALKS_2024: TalkCard[] = [
  { id: "2024-1",  title: "Building Compilers for AI Programming Frameworks",                                  watchUrl: "https://www.youtube.com/watch?v=-ZxDqcSCrhg" },
  { id: "2024-2",  title: "Translation Validation",                                                            watchUrl: "https://www.youtube.com/watch?v=GVKoRN0OgLA" },
  { id: "2024-3",  title: "Optimizations for Object Oriented Programs",                                        watchUrl: "https://www.youtube.com/watch?v=blwSVSpjmcs" },
  { id: "2024-4",  title: "FireDucks: Pandas Accelerator using MLIR",                                          watchUrl: "https://www.youtube.com/watch?v=66HU88aZZoc" },
  { id: "2024-5",  title: "DL4Compilers – Turbo-charging Compiler Optimizations via Deep Learning",            watchUrl: "https://www.youtube.com/watch?v=o1XXac_jaLk" },
  { id: "2024-6",  title: "Web3 and Program Analysis",                                                         watchUrl: "https://www.youtube.com/watch?v=CZLJ28Sw9nw" },
  { id: "2024-7",  title: "New Age of Compilation for AI HPC",                                                 watchUrl: "https://www.youtube.com/watch?v=kgRGQfwLkqc" },
  { id: "2024-8",  title: "Memspect: Tiny Static Analysis Framework for Real-World C Codebases",              watchUrl: "https://www.youtube.com/watch?v=aBAtV2W9BN0" },
  { id: "2024-9",  title: "A Correspondence Between ϕ-function Placement in SSA and Reaching Definitions",    watchUrl: "https://www.youtube.com/watch?v=AmG1RU5lNdI" },
  { id: "2024-10", title: "Program Analysis for Managed Runtimes in Presence of Dynamic Features",            watchUrl: "https://www.youtube.com/watch?v=6i00s4rlj0c" },
  { id: "2024-11", title: "Automated Verification of Concurrent Programs",                                     watchUrl: "https://www.youtube.com/watch?v=ZqruxxtTXh4" },
  { id: "2024-12", title: "Engineering Behind OCaml's Effect Handlers",                                        watchUrl: "https://www.youtube.com/watch?v=ArSqBnGCXHU" },
  { id: "2024-13", title: "Techniques for IDE-friendly Compiler Construction and Applications in Blockchain",  watchUrl: "https://www.youtube.com/watch?v=4u3uNgtO8TU" },
  { id: "2024-14", title: "pliron: An Extensible IR Framework in Rust",                                        watchUrl: "https://www.youtube.com/watch?v=LobYuwcUaZA" },
  { id: "2024-15", title: "CoS-SSA: SSA for Context-Sensitive Interprocedural Analysis",                      watchUrl: "https://www.youtube.com/watch?v=icK--QqG4V0" },
  { id: "2024-16", title: "Why Generating Three Address Code for JavaScript is Hard",                          watchUrl: "https://www.youtube.com/watch?v=5yYm6mYRiO8" },
  { id: "2024-17", title: "SLIM: A High-Level Abstraction on LLVM IR Suitable for Program Analysis",          watchUrl: "https://www.youtube.com/watch?v=3dQnFYSSSTA" },
  { id: "2024-18", title: "What is Dyalog APL and What Can It Do For You?",                                   watchUrl: "https://www.youtube.com/watch?v=d584-WA2rA0" },
  { id: "2024-19", title: "C-lisp and Flexible Macro Programming with S-expressions",                         watchUrl: "https://www.youtube.com/watch?v=FeML_j7pdNY" },
  { id: "2024-20", title: "Formal Verification of Smart Contracts",                                           watchUrl: "https://www.youtube.com/watch?v=cJOEvSnjuH8" },
  { id: "2024-21", title: "Unveiling the Future: Emerging Landscape of Quantum Compilers",                    watchUrl: "https://www.youtube.com/watch?v=igidoLf4Exk" },
  { id: "2024-22", title: "Towards Higher First Silicon Success via Improved FSM Detection",                   watchUrl: "https://www.youtube.com/watch?v=taPgiRXyrvo" },
  { id: "2024-23", title: "No-ISA is the Best ISA",                                                           watchUrl: "https://www.youtube.com/watch?v=G4fxdHozm5I" },
  { id: "2024-24", title: "STGraph: A Framework for Temporal Graph Neural Networks",                           watchUrl: "https://www.youtube.com/watch?v=X6GBpO07yHs" },
  { id: "archive-2024", title: "2024 Website Archive", watchUrl: "https://compilertech.org/2024", ctaLabel: "Visit" },
];

export default function HomeContainer() {
  const [splashDone, setSplashDone] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);
  const heroRef = useRef<HeroSectionHandle>(null);

  function openHeroInput() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => heroRef.current?.openInput(), 400);
  }

  return (
    <>
      <motion.main
        style={{ backgroundColor: "var(--color-background)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: videoStarted || splashDone ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Navbar onOpenModal={openHeroInput} />
        <HeroSection ref={heroRef} avatars={AVATARS} onOpenModal={openHeroInput} />
        <ArchiveSection />
        <TalksSection talks={TALKS_2025} talks2024={TALKS_2024} />
      </motion.main>

      <AnimatePresence>
        {!splashDone && (
          <SplashScreen
            onVideoStart={() => setVideoStarted(true)}
            onDone={() => setSplashDone(true)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
