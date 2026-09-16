import React from 'react';
import {
  GraduationCap,
  ArrowUp,
  Mail,
  Building,
  ExternalLink,
  BookOpen,
  Award,
  Video,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

export const Footer: React.FC = () => {
  const [avatarUrl] = useAvatar();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-stone-800">
          
          {/* Col 1: Scholar Bio & Institution */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 shrink-0">
                <img
                  src={avatarUrl}
                  alt={PROFILE_DATA.name}
                  className="w-11 h-11 rounded-full object-cover object-top border-2 border-amber-500/50 shadow-md"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.footer-fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="footer-fallback hidden w-11 h-11 rounded-lg bg-amber-600 text-white flex items-center justify-center font-serif font-bold text-lg shadow-inner">
                  RB
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-white">
                  {PROFILE_DATA.name}
                </h3>
                <p className="text-stone-400 text-xs">
                  {PROFILE_DATA.title}
                </p>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed max-w-md">
              Scholar of Agricultural Economics, Dr. Ambedkar's economic philosophy, and rural financial inclusion. Dedicated to accessible higher education and student empowerment.
            </p>

            <div className="text-stone-400 space-y-1">
              <p><strong>Department: </strong>Department of Economics</p>
              <p><strong>College: </strong>Late Mansaramji Padole Arts College, Ganeshpur, Bhandara</p>
              <p><strong>Affiliation: </strong>Rashtrasant Tukadoji Maharaj Nagpur University</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Site Directory
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Academic Background & CV</a></li>
              <li><a href="#research" className="hover:text-amber-400 transition-colors">Research Pillars & Theses</a></li>
              <li><a href="#publications" className="hover:text-amber-400 transition-colors">Scholar Papers & Publications ({PROFILE_DATA.papersCount})</a></li>
              <li><a href="#slides" className="hover:text-amber-400 transition-colors">Interactive Lecture Slides</a></li>
              <li><a href="#eclassroom" className="hover:text-amber-400 transition-colors">eClassroom Video Lectures</a></li>
              <li><a href="#teaching" className="hover:text-amber-400 transition-colors">Courses Taught & Syllabi</a></li>
              <li><a href="#honors" className="hover:text-amber-400 transition-colors">Honors & Gold Medals</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Faculty</a></li>
            </ul>
          </div>

          {/* Col 3: Research Networks */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider">
              Scholarly Databases & Social
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PROFILE_DATA.socialLinks.orcid}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>ORCID Profile</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href={PROFILE_DATA.socialLinks.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href={PROFILE_DATA.socialLinks.ssrn}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>SSRN Papers</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href={PROFILE_DATA.socialLinks.halScience}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>HAL / RePEc</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href={PROFILE_DATA.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>eClassroom YouTube</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
              <a
                href={PROFILE_DATA.socialLinks.quora}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-between border border-stone-800"
              >
                <span>Quora Space</span>
                <ExternalLink className="w-3 h-3 text-stone-500" />
              </a>
            </div>

            <div className="pt-2">
              <p className="text-stone-400">
                Official Inquiries: <a href={`mailto:${PROFILE_DATA.email}`} className="text-amber-400 underline">{PROFILE_DATA.email}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Dr. Rakshit Madan Bagde. All Rights Reserved. Late Mansaramji Padole Arts College, Bhandara.
          </div>

          <div className="flex items-center gap-4">
            <span>Modernized Academic Portal</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
