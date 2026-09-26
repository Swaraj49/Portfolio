import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, Server, Database, Zap, Palette, ShieldCheck, 
  Cloud, BarChart3, Cpu, Layers, Box, GitBranch, Code2 
} from 'lucide-react';
import { SKILLS_DATA } from '../data/skills';

// Icon Map
const ICON_MAP = {
  Atom,
  Server,
  Database,
  Zap,
  Palette,
  ShieldCheck,
  Cloud,
  BarChart3,
  Cpu,
  Layers,
  Box,
  GitBranch
};

export default function FloatingSkillChips({ reducedMotion = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Realtime', 'DevOps', 'Analytics'];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Floating Drift Container */}
      <div className="relative min-h-[220px] flex flex-wrap items-center justify-center gap-3 p-4 rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur-md">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = ICON_MAP[skill.icon] || Code2;
          const isHovered = hoveredSkill === skill.name;

          return (
            <motion.div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              initial={reducedMotion ? {} : { scale: 0.8, opacity: 0 }}
              animate={
                reducedMotion
                  ? { scale: 1, opacity: 1 }
                  : {
                      scale: 1,
                      opacity: 1,
                      y: isHovered ? -8 : [0, skill.driftSpeed.y * 10, 0],
                      x: isHovered ? 0 : [0, skill.driftSpeed.x * 8, 0]
                    }
              }
              transition={
                reducedMotion
                  ? {}
                  : {
                      y: {
                        duration: 4 + (idx % 3),
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      },
                      x: {
                        duration: 5 + (idx % 2),
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                      }
                    }
              }
              className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                isHovered
                  ? 'bg-slate-900/90 border-cyan-400/60 shadow-[0_0_20px_rgba(0,240,255,0.2)] scale-105 z-20'
                  : 'bg-slate-900/40 border-white/10 hover:border-slate-700'
              }`}
            >
              {/* Radial glow background on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${skill.bgGlow}, transparent 70%)` }}
              />

              <IconComponent 
                className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />

              <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                {skill.name}
              </span>

              {skill.popular && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
