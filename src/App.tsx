import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { PublicationsSection } from './components/PublicationsSection';
import { SlideDeckViewer } from './components/SlideDeckViewer';
import { EClassroomSection } from './components/EClassroomSection';
import { TeachingSection } from './components/TeachingSection';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { SearchModal } from './components/SearchModal';
import { PhotoModal } from './components/PhotoModal';
import { QuickAccessDock } from './components/QuickAccessDock';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Sticky Top Header */}
      <Navbar
        onOpenCv={() => setIsCvOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCv={() => setIsCvOpen(true)} onOpenPhoto={() => setIsPhotoOpen(true)} />
        <AboutSection onOpenPhoto={() => setIsPhotoOpen(true)} />
        <ResearchSection />
        <PublicationsSection />
        <SlideDeckViewer />
        <EClassroomSection />
        <TeachingSection />
        <AwardsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick-Access Dock for Easy Access */}
      <QuickAccessDock
        onOpenCv={() => setIsCvOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Modals */}
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <PhotoModal isOpen={isPhotoOpen} onClose={() => setIsPhotoOpen(false)} />
    </div>
  );
}
