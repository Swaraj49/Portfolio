import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/experience';
import ZeroGCard from '../components/ZeroGCard';

export default function ExperienceSection({ reducedMotion }) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" /> Orbit History
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Internship & Milestones
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-sans">
            Hands-on full-stack development across AI resume engines, headless PDF generation pipelines, and database optimization.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
          {EXPERIENCE_DATA.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Timeline Center Pulse Orb */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-110 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* Timeline Card */}
                <div className="ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] w-full">
                  <ZeroGCard
                    reducedMotion={reducedMotion}
                    glowColor="rgba(0, 240, 255, 0.2)"
                    className="space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 mb-1">
                          {exp.badge}
                        </span>
                        <h3 className="text-xl font-bold text-white font-mono">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-purple-300 font-mono font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-right text-xs font-mono text-slate-400 space-y-0.5">
                        <div className="flex items-center gap-1 font-semibold text-cyan-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.timeline}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px]">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {exp.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </ZeroGCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
