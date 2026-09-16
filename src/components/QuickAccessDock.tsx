import React, { useState, useEffect } from 'react';
import {
  FileDown,
  Search,
  BookMarked,
  Presentation,
  Video,
  Mail,
  ArrowUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/academicData';

interface QuickAccessDockProps {
  onOpenCv: () => void;
  onOpenSearch: () => void;
}

export const QuickAccessDock: React.FC<QuickAccessDockProps> = ({
  onOpenCv,
  onOpenSearch,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside
      aria-label="Quick Navigation Dock"
      className="fixed bottom-5 inset-x-0 z-40 pointer-events-none flex justify-center px-4"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-stone-900/90 hover:bg-stone-900 text-white shadow-2xl backdrop-blur-lg border border-stone-700/80 transition-all duration-300 ring-1 ring-white/10">
        
        {/* Instant Search Button */}
        <button
          onClick={onOpenSearch}
          title="Search All Works (Press / or Ctrl+K)"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-800/80 hover:bg-amber-500 hover:text-stone-950 text-xs font-semibold text-stone-200 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <Search className="w-3.5 h-3.5 text-amber-400 group-hover:text-stone-950 transition-colors" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-stone-900 text-stone-300 rounded border border-stone-700 group-hover:border-stone-900 group-hover:text-stone-900">
            /
          </kbd>
        </button>

        <div className="w-px h-5 bg-stone-700/80 mx-0.5" />

        {/* Quick Section Shortcuts */}
        <a
          href="#publications"
          title="View Research Publications & Books (67+ Works)"
          className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <BookMarked className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Papers</span>
        </a>

        <a
          href="#slides"
          title="Interactive Lecture Slides & Syllabi"
          className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <Presentation className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">Slides</span>
        </a>

        <a
          href="#eclassroom"
          title="eClassroom Video Lectures (30+ on YouTube)"
          className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <Video className="w-3.5 h-3.5 text-red-400" />
          <span className="hidden sm:inline">eClassroom</span>
        </a>

        <a
          href="#contact"
          title="Office Hours & Inquiries"
          className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Contact</span>
        </a>

        <div className="w-px h-5 bg-stone-700/80 mx-0.5" />

        {/* Curriculum Vitae Button */}
        <button
          onClick={onOpenCv}
          title="Open Verified Curriculum Vitae"
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white text-xs font-bold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>CV</span>
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="Scroll to top of page"
            aria-label="Scroll to top"
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white transition-all ml-0.5"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
};
