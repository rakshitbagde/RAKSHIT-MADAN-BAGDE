import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  BookMarked,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Presentation,
  Video,
  FileDown,
  Mail,
  Building2,
  MapPin,
  Headphones,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

interface HeroProps {
  onOpenCv: () => void;
  onOpenPhoto?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenPhoto }) => {
  const [copiedOrcid, setCopiedOrcid] = useState(false);
  const [avatarUrl] = useAvatar();

  const handleCopyOrcid = () => {
    navigator.clipboard.writeText('0000-0002-7507-0244');
    setCopiedOrcid(true);
    setTimeout(() => setCopiedOrcid(false), 2000);
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 text-stone-100 overflow-hidden border-b border-stone-800 pt-10 pb-16 lg:py-20">
      {/* Modern Ambient Mesh & Dot Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Academic Persona & Credentials */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Badges strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Head of Department
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-800/90 text-stone-300 border border-stone-700/80">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                5x University Gold Medalist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-800/90 text-stone-300 border border-stone-700/80">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                Dual UGC NET-JRF Qualified
              </span>
            </div>

            {/* Name & Academic Title */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  {PROFILE_DATA.name}
                </h1>
              </div>
              <p className="text-sm font-serif text-amber-400/90 italic mb-2">
                {PROFILE_DATA.marathiName}
              </p>
              <h2 className="text-lg sm:text-xl font-medium text-stone-300 max-w-2xl leading-relaxed">
                {PROFILE_DATA.title}
              </h2>
              <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 mt-3 text-xs sm:text-sm text-stone-400">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-amber-500 shrink-0" />
                  {PROFILE_DATA.institution}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  Bhandara, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Bio Narrative */}
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans max-w-3xl">
              {PROFILE_DATA.bioSummary}
            </p>

            {/* Scholarly Identifiers Row */}
            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                Scholarly Profiles & Research IDs
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {/* ORCID with copy feature */}
                <div className="inline-flex items-center rounded-md bg-stone-800 border border-stone-700 px-2.5 py-1 text-xs text-stone-200">
                  <span className="text-[#a6ce39] font-bold mr-1.5 font-mono">iD</span>
                  <a
                    href={PROFILE_DATA.socialLinks.orcid}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-amber-400 font-mono"
                  >
                    0000-0002-7507-0244
                  </a>
                  <button
                    onClick={handleCopyOrcid}
                    title="Copy ORCID"
                    className="ml-2 p-1 text-stone-400 hover:text-white rounded"
                  >
                    {copiedOrcid ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <a
                  href={PROFILE_DATA.socialLinks.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 border border-stone-700 transition-colors"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={PROFILE_DATA.socialLinks.ssrn}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 border border-stone-700 transition-colors"
                >
                  <span>SSRN Papers</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={PROFILE_DATA.socialLinks.halScience}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 border border-stone-700 transition-colors"
                >
                  <span>HAL / RePEc</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={PROFILE_DATA.socialLinks.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-red-950/40 text-red-300 hover:text-white hover:bg-red-900/60 border border-red-800/40 transition-colors"
                >
                  <Video className="w-3 h-3 text-red-400" />
                  <span>eClassroom Channel</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>

                <a
                  href={PROFILE_DATA.socialLinks.podcast}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-950/40 text-emerald-300 hover:text-white hover:bg-emerald-900/60 border border-emerald-800/40 transition-colors"
                  title="Economics and Social Studies Podcast on Spotify"
                >
                  <Headphones className="w-3 h-3 text-emerald-400" />
                  <span>Spotify Podcast</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-amber-600 hover:bg-amber-500 text-white shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <BookMarked className="w-4 h-4" />
                <span>Explore 25 Books & Papers</span>
              </a>

              <a
                href="#slides"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700 transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Presentation className="w-4 h-4 text-amber-400" />
                <span>Interactive Lecture Slides</span>
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-transparent hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700/80 transition-all focus:outline-none focus:ring-2 focus:ring-stone-600"
              >
                <FileDown className="w-4 h-4 text-stone-400" />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          </div>

          {/* Right Column: Academic Profile Card & Quick Stats */}
          <div className="lg:col-span-4">
            <div className="bg-stone-900/80 border border-stone-700/80 rounded-2xl p-6 sm:p-7 backdrop-blur-md shadow-2xl space-y-6 ring-1 ring-white/5">
              
              {/* Profile Portrait Showcase */}
              <div className="flex items-center gap-4 sm:gap-5 pb-5 border-b border-stone-800">
                <div className="relative shrink-0">
                  <button
                    onClick={onOpenPhoto}
                    title="Click to view portrait or upload photo"
                    className="w-22 h-22 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-xl bg-stone-950 ring-4 ring-amber-500/10 group relative block cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <img
                      src={avatarUrl}
                      alt={PROFILE_DATA.name}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        // Graceful fallback to stylized insignia if image fails
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="avatar-fallback hidden w-full h-full bg-gradient-to-tr from-amber-600 via-amber-700 to-amber-900 flex flex-col items-center justify-center text-white">
                      <GraduationCap className="w-8 h-8 text-amber-200 mb-0.5" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-100 font-bold">DR. BAGDE</span>
                    </div>
                    {/* Hover hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] font-semibold text-amber-200 backdrop-blur-[2px]">
                      View / Edit
                    </div>
                  </button>

                  {/* Active radar pulse status badge */}
                  <div
                    className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-stone-900 flex items-center justify-center text-white shadow pointer-events-none"
                    title="Active Faculty & HOD"
                  >
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping-slow pointer-events-none opacity-75" />
                    <Check className="w-3.5 h-3.5 stroke-[3] relative z-10" />
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                    <span>Active Economics Faculty</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-tight truncate">
                    Dr. Rakshit Bagde
                  </h3>
                  <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                    HOD Economics & Author
                  </p>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Late M. Padole Arts College, Bhandara
                  </p>
                </div>
              </div>

              {/* Key Academic Statistics Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="bg-stone-900/80 border border-stone-700/60 rounded-xl p-3.5 text-center">
                  <span className="block font-serif text-2xl font-bold text-amber-400">
                    {PROFILE_DATA.booksCount}
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    Published Books
                  </span>
                  <span className="block text-[10px] text-stone-500 mt-0.5">
                    Authored & Edited
                  </span>
                </div>

                <div className="bg-stone-900/80 border border-stone-700/60 rounded-xl p-3.5 text-center">
                  <span className="block font-serif text-2xl font-bold text-white">
                    {PROFILE_DATA.papersCount}+
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    Research Papers
                  </span>
                  <span className="block text-[10px] text-stone-500 mt-0.5">
                    Peer-Reviewed
                  </span>
                </div>

                <div className="bg-stone-900/80 border border-stone-700/60 rounded-xl p-3.5 text-center">
                  <span className="block font-serif text-2xl font-bold text-amber-400">
                    {PROFILE_DATA.goldMedalsCount}
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    Gold Medals
                  </span>
                  <span className="block text-[10px] text-stone-500 mt-0.5">
                    First Rank in M.A.
                  </span>
                </div>

                <div className="bg-stone-900/80 border border-stone-700/60 rounded-xl p-3.5 text-center">
                  <span className="block font-serif text-2xl font-bold text-white">
                    {PROFILE_DATA.experienceYears}+
                  </span>
                  <span className="text-xs text-stone-300 font-medium">
                    Years Teaching
                  </span>
                  <span className="block text-[10px] text-stone-500 mt-0.5">
                    UG & PG Faculty
                  </span>
                </div>
              </div>

              {/* Quick Contact Box */}
              <div className="pt-2 border-t border-stone-700/70">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-400">Direct Inquiries:</span>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {PROFILE_DATA.email}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
