import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, Award, Briefcase, GraduationCap, Code2, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { EXPERIENCE_DATA } from '../data/experience';
import { PROJECTS_DATA } from '../data/projects';

export default function ResumeViewerModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl bg-[#090d16] border border-cyan-500/40 rounded-2xl shadow-[0_0_60px_rgba(0,240,255,0.2)] overflow-hidden z-10 my-6"
        >
          {/* Header toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-slate-900/90 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-mono">
                  Swaraj_Burud_Resume.pdf
                </h3>
                <p className="text-xs text-slate-400">
                  Official Curriculum Vitae • PICT B.E. Information Technology
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={PROFILE_DATA.links.resumePdf}
                download="Swaraj_Burud_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-bold text-xs hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Navigation Tabs */}
          <div className="flex border-b border-white/5 bg-slate-950/60 px-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Full Overview' },
              { id: 'education', label: 'Academic (PICT 9.48)' },
              { id: 'experience', label: 'Internship (Uptoskills)' },
              { id: 'projects', label: 'Flagship Projects' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-xs font-mono font-semibold transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Resume Simulated Paper Body */}
          <div className="p-6 sm:p-10 max-h-[70vh] overflow-y-auto custom-scrollbar bg-[#0b0f19] space-y-8 font-sans">
            {/* Header / Contact Info */}
            <div className="border-b border-white/10 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {PROFILE_DATA.name}
                  </h1>
                  <p className="text-sm text-cyan-300 font-mono mt-1 font-semibold">
                    {PROFILE_DATA.role}
                  </p>
                </div>
                <div className="text-xs text-slate-300 space-y-1 font-mono sm:text-right">
                  <p>Email: {PROFILE_DATA.contact.email}</p>
                  <p>Location: {PROFILE_DATA.contact.location}</p>
                  <p>LeetCode: {PROFILE_DATA.links.leetcode.handle}</p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            {(activeTab === 'overview' || activeTab === 'education') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider border-b border-cyan-500/20 pb-2">
                  <GraduationCap className="w-4 h-4" /> Education
                </div>
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-base font-bold text-white">
                      {PROFILE_DATA.education.college}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      {PROFILE_DATA.education.timeline}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-mono">
                    <span>{PROFILE_DATA.education.degree}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      CGPA: {PROFILE_DATA.education.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {(activeTab === 'overview' || activeTab === 'experience') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider border-b border-cyan-500/20 pb-2">
                  <Briefcase className="w-4 h-4" /> Professional Experience
                </div>
                {EXPERIENCE_DATA.map(exp => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h4 className="text-base font-bold text-white">{exp.role}</h4>
                        <p className="text-xs text-cyan-300 font-mono">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400 font-semibold">{exp.timeline}</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                      {exp.highlights.map((h, idx) => (
                        <li key={idx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Key Projects Section */}
            {(activeTab === 'overview' || activeTab === 'projects') && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider border-b border-cyan-500/20 pb-2">
                  <Code2 className="w-4 h-4" /> Core Technical Projects
                </div>
                {PROJECTS_DATA.map(p => (
                  <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">{p.title} — <span className="text-xs text-slate-400 font-normal">{p.subtitle}</span></h4>
                      <span className="text-xs font-mono text-cyan-400 font-bold">{p.category}</span>
                    </div>
                    <p className="text-xs text-slate-300">{p.architectureSummary}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.techStack.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-300 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
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
