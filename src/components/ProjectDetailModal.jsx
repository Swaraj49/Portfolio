import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Database, Cpu, Layers, 
  CheckCircle2, Server, Shield, Zap, Copy, Check 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';


export default function ProjectDetailModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#0b101d] border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden z-10 my-8"
        >
          {/* Header Banner */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.accentColor} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-slate-300 hover:text-white hover:bg-black/80 transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-400/40 mb-3">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-200 mt-2 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Application
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 text-sm font-semibold transition-all border border-slate-700"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              </div>

              <button
                onClick={() => handleCopyLink(project.liveUrl)}
                className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Link Copied!' : 'Copy Demo Link'}
              </button>
            </div>

            {/* Architecture Callout */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                System Architecture Breakdown
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-white/5 font-sans">
                {project.architectureSummary}
              </p>
            </div>

            {/* QueueWise Specific: 5-Entity ER Model Schema */}
            {project.id === 'queuewise' && project.erEntities && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-bold uppercase tracking-wider">
                  <Database className="w-4 h-4" />
                  Core 5-Entity Relational & ER Schema Model
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.erEntities.map((entity, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20">
                      <div className="text-xs font-mono font-bold text-purple-300 border-b border-purple-500/20 pb-1.5 mb-2">
                        {entity.name}
                      </div>
                      <ul className="space-y-1 text-xs text-slate-400 font-mono">
                        {entity.fields.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-purple-400">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prepify Specific: 3-Column Dashboard Breakdown */}
            {project.id === 'prepify' && project.dashboardColumns && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-sm font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  3-Column AI Interview Dashboard Layout
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.dashboardColumns.map((col, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-purple-500/30">
                      <div className="text-xs font-mono font-bold text-purple-300 mb-1.5">
                        Column {idx + 1}: {col.title}
                      </div>
                      <p className="text-xs text-slate-300">{col.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                Key Engineering Highlights
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      {feat.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3">
              <div className="text-slate-400 font-mono text-xs font-bold uppercase tracking-wider">
                Technologies Used
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
                {project.metrics.map((m, i) => (
                  <div key={i} className="p-3 text-center rounded-xl bg-cyan-950/20 border border-cyan-500/20">
                    <div className="text-lg font-bold font-mono text-cyan-400">{m.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
