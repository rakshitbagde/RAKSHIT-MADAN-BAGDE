import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  FileText,
  Video,
  Presentation,
  Award,
  Mail,
  Search,
  Menu,
  X,
  FileDown,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

interface NavbarProps {
  onOpenCv: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv, onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [avatarUrl] = useAvatar();

  const navLinks = [
    { name: 'About', href: '#about', icon: GraduationCap },
    { name: 'Research', href: '#research', icon: BookOpen },
    { name: 'Publications', href: '#publications', icon: FileText },
    { name: 'Lecture Slides', href: '#slides', icon: Presentation },
    { name: 'eClassroom', href: '#eclassroom', icon: Video },
    { name: 'Teaching', href: '#teaching', icon: BookOpen },
    { name: 'Honors', href: '#honors', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 shrink-0">
              <img
                src={avatarUrl}
                alt={PROFILE_DATA.name}
                className="w-10 h-10 rounded-full object-cover object-top border-2 border-amber-500/60 shadow-md ring-2 ring-stone-950"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.brand-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="brand-fallback hidden w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 text-white flex items-center justify-center font-serif font-bold text-lg shadow-inner border border-amber-500/30">
                RB
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  {PROFILE_DATA.name}
                </span>
                <span className="hidden md:inline-flex text-[11px] font-sans font-medium px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">
                  Ph.D. | 5x Gold Medalist
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans truncate max-w-[260px] sm:max-w-sm">
                Head, Dept. of Economics • Late M. Padole Arts College, Bhandara
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-xs xl:text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Search, CV, Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search site"
              className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-stone-800/90 text-stone-300 hover:text-white hover:bg-stone-700 border border-stone-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Search className="w-3.5 h-3.5 text-stone-400" />
              <span className="hidden sm:inline font-sans">Search</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] text-stone-400 bg-stone-900 rounded border border-stone-700">
                /
              </kbd>
            </button>

            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-5 space-y-1 animate-fadeIn">
          <div className="pb-2 border-b border-stone-800 mb-2">
            <p className="text-xs text-amber-400 font-medium">Dr. Rakshit Madan Bagde</p>
            <p className="text-[11px] text-stone-400">Assistant Professor & Head of Economics</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-xs font-medium text-stone-300 hover:text-white hover:bg-stone-800 transition-colors"
                >
                  <Icon className="w-4 h-4 text-amber-500" />
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span>Official Email:</span>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              {PROFILE_DATA.email}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
