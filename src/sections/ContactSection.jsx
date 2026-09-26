import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Mail, MapPin, Check, Copy, ExternalLink, 
  Code2, Sparkles, Terminal 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA } from '../data/profile';
import ZeroGCard from '../components/ZeroGCard';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';


export default function ContactSection({ reducedMotion }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!reducedMotion) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#8b5cf6', '#3b82f6']
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" /> Direct Frequency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coding Profiles & Contact
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-sans">
            Ready to contribute to high-impact full-stack teams. Let's discuss engineering opportunities, code architecture, or potential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coding Profiles & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Coding Profiles Grid */}
            <ZeroGCard reducedMotion={reducedMotion} glowColor="rgba(0, 240, 255, 0.25)" className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">Coding Profiles</h3>
                  <p className="text-xs text-slate-400">Competitive programming & open source</p>
                </div>
              </div>

              <div className="space-y-3">
                {/* LeetCode */}
                <a
                  href={PROFILE_DATA.links.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold font-mono text-xs">
                      LC
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-300">LeetCode</div>
                      <div className="text-xs text-slate-400 font-mono">@{PROFILE_DATA.links.leetcode.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                </a>

                {/* GeeksforGeeks */}
                <a
                  href={PROFILE_DATA.links.geeksforgeeks.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/40 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold font-mono text-xs">
                      GFG
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-300">GeeksforGeeks</div>
                      <div className="text-xs text-slate-400 font-mono">@{PROFILE_DATA.links.geeksforgeeks.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE_DATA.links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold font-mono text-xs">
                      GH
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-cyan-300">GitHub</div>
                      <div className="text-xs text-slate-400 font-mono">@{PROFILE_DATA.links.github.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PROFILE_DATA.links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold font-mono text-xs">
                      IN
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-blue-300">LinkedIn</div>
                      <div className="text-xs text-slate-400 font-mono">@{PROFILE_DATA.links.linkedin.handle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </ZeroGCard>

            {/* Direct Email Quick Card */}
            <ZeroGCard reducedMotion={reducedMotion} glowColor="rgba(139, 92, 246, 0.2)" className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <Mail className="w-4 h-4" /> Direct Email
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-purple-500/20 text-sm font-mono text-white break-all">
                {PROFILE_DATA.contact.email}
              </div>

              <div className="text-xs text-slate-400">
                Location: <span className="text-slate-200">{PROFILE_DATA.contact.location}</span>
              </div>
            </ZeroGCard>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ZeroGCard reducedMotion={reducedMotion} glowColor="rgba(0, 240, 255, 0.25)" className="p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white font-mono">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Zero-G encrypted message channel directly to Captain's inbox
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-mono">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Captain will review your message and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-semibold text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-semibold text-slate-300">
                      Message Content
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Hi Captain, let me know if you're available for a software engineering role or project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cyan-500 text-black font-extrabold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Message
                  </button>
                </form>
              )}
            </ZeroGCard>
          </div>
        </div>
      </div>
    </section>
  );
}
