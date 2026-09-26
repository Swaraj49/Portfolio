import React from 'react';
import { Rocket, ArrowUp, Terminal, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';


export default function Footer({ reducedMotion }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060a] py-12 px-4 sm:px-8 overflow-hidden">
      {/* Background subtle drift glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Callsign Brand */}
        <div className="flex items-center gap-3">
          <div className={`p-2.5 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-400 ${reducedMotion ? '' : 'animate-float-slow'}`}>
            <Rocket className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-white font-mono flex items-center gap-2">
              {PROFILE_DATA.name}
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              PICT B.E. Information Technology • CGPA 9.48
            </p>
          </div>
        </div>

        {/* Center "Still Floating" Weightless Loop Indicator */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-white/5 text-xs font-mono text-slate-400">
          <span className={`w-2 h-2 rounded-full bg-cyan-400 ${reducedMotion ? '' : 'animate-ping'}`} />
          <span>Antigravity Engine Active — Still Floating</span>
        </div>

        {/* Right Back-to-Top Gravity Lift */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={PROFILE_DATA.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:border-cyan-500/40 border border-slate-800 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:border-blue-500/40 border border-slate-800 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.links.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:border-amber-500/40 border border-slate-800 transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            title="Reverse gravity — back to top"
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono transition-all duration-300"
          >
            <span>Top Lift</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
