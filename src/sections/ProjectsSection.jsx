import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, ExternalLink, Layers, Database, 
  MapPin, Zap, Clock, ShieldCheck, Sparkles, Cpu, ChevronRight 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import ZeroGCard from '../components/ZeroGCard';
import ProjectDetailModal from '../components/ProjectDetailModal';


export default function ProjectsSection({ reducedMotion }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const flagshipProject = PROJECTS_DATA.find(p => p.isFlagship);
  const otherProjects = PROJECTS_DATA.filter(p => !p.isFlagship);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 relative overflow-hidden">
      {/* Background Zero-G Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono uppercase tracking-widest">
            <Rocket className="w-3.5 h-3.5" /> Centerpiece Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Full-Stack Engineering Works
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base font-sans">
            Complex MERN stack applications, geospatial indexing, real-time WebSockets, and headless PDF pipelines built to solve high-concurrency challenges.
          </p>
        </div>

        {/* 1. FLAGSHIP PROJECT: QUEUEWISE */}
        {flagshipProject && (
          <div className="relative">
            <div className="absolute -top-3 left-6 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold font-mono text-xs shadow-lg uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Flagship Showcase
            </div>

            <ZeroGCard
              reducedMotion={reducedMotion}
              glowColor={flagshipProject.glowColor}
              onClick={() => setSelectedProject(flagshipProject)}
              className="group border-2 border-cyan-500/30 bg-[#090e1a]/80"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-2 sm:p-4">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                      {flagshipProject.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-cyan-200/80 font-mono font-medium">
                      {flagshipProject.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                    {flagshipProject.tagline}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                        <MapPin className="w-3.5 h-3.5" /> 2dsphere Geospatial
                      </div>
                      <p className="text-[11px] text-slate-400">MongoDB $near spatial search for nearby waiting queues</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                        <Zap className="w-3.5 h-3.5" /> Socket.io Live Sync
                      </div>
                      <p className="text-[11px] text-slate-400">Sub-50ms queue position updates & priority reordering</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                        <Clock className="w-3.5 h-3.5" /> node-cron Timeouts
                      </div>
                      <p className="text-[11px] text-slate-400">Autonomous no-show eviction & capacity protection</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                        <Database className="w-3.5 h-3.5" /> 5-Entity ER Model
                      </div>
                      <p className="text-[11px] text-slate-400">User, Business, QueueEntry, Review, & relations</p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {flagshipProject.techStack.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-cyan-300 border border-cyan-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Detail Action */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect Architecture & ER Diagram <ChevronRight className="w-4 h-4" />
                    </span>

                    <span className="text-xs text-slate-400 font-mono">
                      Click anywhere to expand
                    </span>
                  </div>
                </div>

                {/* Right Interactive Visual Preview */}
                <div className="lg:col-span-5 relative group/img rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-4 space-y-4">
                  {/* Simulated Owner Dashboard & Map */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
                      <span className="text-cyan-400 font-bold flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> QueueWise Geospatial Map
                      </span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Live Telemetry</span>
                    </div>

                    {/* Simulated Geospatial Map Grid */}
                    <div className="relative h-44 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center bg-grid-mesh">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-950/80 to-purple-950/40" />
                      <div className="relative z-10 text-center space-y-2 p-4">
                        <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/50 flex items-center justify-center animate-pulse">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div className="text-xs font-mono text-white font-bold">
                          MongoDB $near GeoIndex Active
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Radius: 5.0 km • 14 Businesses Online
                        </div>
                      </div>
                    </div>

                    {/* Mini Metrics Bar */}
                    <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-cyan-400 font-bold">5-Entity Schema</div>
                        <div className="text-[10px] text-slate-400">ER Diagram Ready</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        <div className="text-cyan-400 font-bold">node-cron Engine</div>
                        <div className="text-[10px] text-slate-400">60s Auto Sweep</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ZeroGCard>
          </div>
        )}

        {/* 2. SECONDARY PROJECTS GRID: PREPIFY & CODECRAFT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <ZeroGCard
              key={project.id}
              reducedMotion={reducedMotion}
              driftDelay={idx * 0.3}
              glowColor={project.glowColor}
              onClick={() => setSelectedProject(project)}
              className="group h-full flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    Interactive Detail View
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-purple-300 font-medium">
                  {project.subtitle}
                </p>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {project.tagline}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {project.features.slice(0, 2).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span><strong className="text-white">{f.title}:</strong> {f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Explore Stack & Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </ZeroGCard>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Trigger */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
