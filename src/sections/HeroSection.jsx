import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, FileText, Send, Sparkles, Code2, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import ThreeHeroScene from '../components/ThreeHeroScene';

export default function HeroSection({ reducedMotion, onOpenResume }) {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setCursorPos({
      x: Math.round((clientX / innerWidth) * 100),
      y: Math.round((clientY / innerHeight) * 100)
    });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-8 overflow-hidden"
    >
      {/* 3D Animated Hero Scene (React Three Fiber) */}
      <ThreeHeroScene reducedMotion={reducedMotion} />

      {/* Cursor-Reactive Dynamic Radial Glow */}
      {!reducedMotion && (
        <div
          className="absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-60"
          style={{
            background: `radial-gradient(600px circle at ${cursorPos.x}% ${cursorPos.y}%, rgba(0, 240, 255, 0.12), transparent 80%)`
          }}
        />
      )}

      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-grid-mesh opacity-20 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Header Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>PICT B.E. Information Technology (CGPA 9.48)</span>
        </motion.div>

        {/* Main Framing Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
        >
          Building full-stack systems that <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent text-glow">
            don't need permission to fly.
          </span>
        </motion.h1>

        {/* Subhead Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-sans leading-relaxed"
        >
          I'm <strong className="text-white font-semibold">{PROFILE_DATA.name}</strong>, a final-year B.E. Information Technology student at <span className="text-cyan-300 font-medium">Pune Institute of Computer Technology</span>. I engineer weightless MERN stack architectures, low-latency Socket.io platforms, and intelligent machine learning features.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/50 text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel border border-slate-700 text-slate-200 hover:text-white hover:border-cyan-500/50 text-sm font-semibold transition-all duration-300 hover:scale-105"
          >
            <Send className="w-4 h-4 text-purple-400" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* High Impact Key Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">
                {stat.value}<span className="text-base text-cyan-300">{stat.suffix}</span>
              </div>
              <div className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
