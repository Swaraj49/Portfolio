import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, CheckCircle2, Sparkles, GraduationCap, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import ZeroGCard from '../components/ZeroGCard';

export default function ResumeSection({ reducedMotion, onOpenResume }) {
  return (
    <section id="resume" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" /> Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curriculum Vitae & Academic Record
          </h2>
          <p className="max-w-xl mx-auto text-slate-400 text-sm sm:text-base font-sans">
            Complete record of coursework, project deployments, internship accomplishments, and DSA problem-solving ratings.
          </p>
        </div>

        {/* Central High-Tech Resume Showcase Card */}
        <ZeroGCard
          reducedMotion={reducedMotion}
          glowColor="rgba(0, 240, 255, 0.3)"
          className="p-8 sm:p-12 border-2 border-cyan-500/30 text-center space-y-8 bg-[#0a0f1d]/90"
        >
          {/* Top Status Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
              {PROFILE_DATA.name} — Resume.pdf
            </h3>
            <p className="text-sm text-cyan-300 font-mono font-medium">
              B.E. Information Technology • Pune Institute of Computer Technology (PICT)
            </p>
          </div>

          {/* Key Academic Snapshot Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold">
                <GraduationCap className="w-4 h-4" /> Academic CGPA
              </div>
              <div className="text-xl font-bold font-mono text-white">9.41 / 10</div>
              <p className="text-[11px] text-slate-400">PICT Department Rank Holder</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 font-bold">
                <Award className="w-4 h-4" /> Core Stack
              </div>
              <div className="text-sm font-bold text-white">MERN + ML</div>
              <p className="text-[11px] text-slate-400">React 19, Express 5, Socket.io</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" /> DSA Solved
              </div>
              <div className="text-xl font-bold font-mono text-white">450+ Solved</div>
              <p className="text-[11px] text-slate-400">LeetCode & GFG Profiles</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={PROFILE_DATA.links.resumePdf}
              download="Swaraj_Burud_Resume.pdf"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-cyan-500 text-black font-extrabold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Official Resume (PDF)
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-8 py-4 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-500/20 text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <Eye className="w-5 h-5" />
              Interactive PDF Preview
            </button>
          </div>
        </ZeroGCard>
      </div>
    </section>
  );
}
