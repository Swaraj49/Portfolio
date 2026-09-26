import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import ResumeViewerModal from './components/ResumeViewerModal';

export default function App() {
  // Respect system prefers-reduced-motion, default to false
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      {/* Top Floating Glass Header */}
      <Navbar
        reducedMotion={reducedMotion}
        setReducedMotion={setReducedMotion}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <HeroSection
          reducedMotion={reducedMotion}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <AboutSection reducedMotion={reducedMotion} />
        <ProjectsSection reducedMotion={reducedMotion} />
        <ExperienceSection reducedMotion={reducedMotion} />
        <ResumeSection
          reducedMotion={reducedMotion}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <ContactSection reducedMotion={reducedMotion} />
      </main>

      {/* Footer */}
      <Footer reducedMotion={reducedMotion} />

      {/* Resume Modal */}
      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
