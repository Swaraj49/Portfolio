import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Cpu, Code2, Users, Compass } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import ZeroGCard from '../components/ZeroGCard';
import FloatingSkillChips from '../components/FloatingSkillChips';
import SkillsOrbitChart from '../components/SkillsOrbitChart';

export default function AboutSection({ reducedMotion }) {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Subtle Gradient Spheres */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" /> Orbit & Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Systems with Zero Drag
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-sans">
            Final-year B.E. student at PICT with a 9.41 CGPA, building full-stack applications with bulletproof databases, realtime sockets, and ML integrations.
          </p>
        </div>

        {/* Bio & Education ZeroG Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Bio Card */}
          <div className="lg:col-span-7">
            <ZeroGCard reducedMotion={reducedMotion} glowColor="rgba(0, 240, 255, 0.2)" className="h-full space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    Full-Stack MERN + Applied ML
                  </h3>
                  <p className="text-xs text-slate-400">
                    PICT Information Technology Class of 2027
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {PROFILE_DATA.bio}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                    <GraduationCap className="w-4 h-4" /> Academic Distinction
                  </div>
                  <p className="text-xs text-slate-300">
                    CGPA 9.41 at PICT — among top department performers with consistent academic excellence.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold">
                    <Users className="w-4 h-4" /> Community Organizer
                  </div>
                  <p className="text-xs text-slate-300">
                    Department hackathons and workshops lead, mentoring 300+ students in full-stack dev.
                  </p>
                </div>
              </div>
            </ZeroGCard>
          </div>

          {/* Recharts Radar Skills Orbit Card */}
          <div className="lg:col-span-5">
            <ZeroGCard reducedMotion={reducedMotion} glowColor="rgba(139, 92, 246, 0.2)" className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-400" />
                  <h3 className="text-base font-bold text-white font-mono">Skills Orbit Matrix</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Recharts Visual
                </span>
              </div>

              <SkillsOrbitChart />

              <div className="text-center text-xs text-slate-400 font-mono pt-2 border-t border-white/5">
                Balanced across frontend agility, backend durability & ML capabilities.
              </div>
            </ZeroGCard>
          </div>
        </div>

        {/* Floating Skill Chips Section */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-white font-mono">
              Drifting Skill Arsenal
            </h3>
            <p className="text-xs text-slate-400 font-mono">
              Hover chips to magnetize stack details • Interactive zero-G drift particles
            </p>
          </div>

          <FloatingSkillChips reducedMotion={reducedMotion} />
        </div>
      </div>
    </section>
  );
}
