import React from 'react';
import {
  X,
  Printer,
  FileDown,
  Mail,
  Building,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { PROFILE_DATA, PUBLICATIONS, AWARDS_LIST, COURSES } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [avatarUrl] = useAvatar();
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white text-stone-900 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-base">
              Curriculum Vitae — Dr. Rakshit Madan Bagde
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-sans text-xs sm:text-sm text-stone-800">
          
          {/* Header */}
          <div className="border-b-2 border-stone-900 pb-6 flex flex-col-reverse sm:flex-row items-start justify-between gap-6">
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Dr. Rakshit Madan Bagde
              </h1>
              <p className="font-serif text-stone-600 italic text-sm mt-0.5">
                Ph.D., M.Phil., M.A. (Econ), M.A. (Ambedkar Thought), M.A. (Soc), Dual UGC NET-JRF
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                <div>
                  <strong>Designation: </strong>
                  Assistant Professor & Head, Department of Economics
                </div>
                <div>
                  <strong>Institution: </strong>
                  Late Mansaramji Padole Arts College, Ganeshpur, Bhandara
                </div>
                <div>
                  <strong>Email: </strong>
                  <a href={`mailto:${PROFILE_DATA.email}`} className="text-amber-800 font-mono">
                    {PROFILE_DATA.email}
                  </a>
                </div>
                <div>
                  <strong>Affiliated University: </strong>
                  Rashtrasant Tukadoji Maharaj Nagpur University
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-mono text-stone-500">
                <a
                  href={PROFILE_DATA.socialLinks.orcid}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-800 underline"
                >
                  ORCID: 0000-0002-7507-0244
                </a>
                <span>•</span>
                <span>Google Scholar: Dr. Rakshit Bagde</span>
                <span>•</span>
                <a
                  href={PROFILE_DATA.socialLinks.ssrn}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-800 underline"
                >
                  SSRN Author ID: 4770534
                </a>
              </div>
            </div>

            {/* Profile Photo on CV */}
            <div className="shrink-0">
              <img
                src={avatarUrl}
                alt={PROFILE_DATA.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl object-cover object-top border-2 border-stone-300 shadow-sm"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Academic Background */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-base uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              1. Academic Qualifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-300 font-bold text-stone-900">
                    <th className="py-2 pr-4">Degree</th>
                    <th className="py-2 pr-4">Year</th>
                    <th className="py-2 pr-4">University / Body</th>
                    <th className="py-2">Specialization & Honors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr>
                    <td className="py-2 pr-4 font-bold">Ph.D. in Economics</td>
                    <td className="py-2 pr-4 font-mono">2013</td>
                    <td className="py-2 pr-4">RTM Nagpur University</td>
                    <td className="py-2">Ambedkar's Agrarian Economics in Era of Globalization</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold">UGC NET-JRF</td>
                    <td className="py-2 pr-4 font-mono">2008, 2009</td>
                    <td className="py-2 pr-4">UGC New Delhi</td>
                    <td className="py-2 text-amber-800 font-bold">Qualified Twice with Junior Research Fellowship</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold">M.A. (Ambedkar Thought)</td>
                    <td className="py-2 pr-4 font-mono">2006</td>
                    <td className="py-2 pr-4">RTM Nagpur University</td>
                    <td className="py-2 text-amber-800 font-bold">First Rank in Merit, Conferred 5 University Gold Medals</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold">M.Phil. in Economics</td>
                    <td className="py-2 pr-4 font-mono">2005</td>
                    <td className="py-2 pr-4">YCMOU Nashik</td>
                    <td className="py-2">Regional Rural Economics & Banking Development</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold">M.A. in Economics</td>
                    <td className="py-2 pr-4 font-mono">2004</td>
                    <td className="py-2 pr-4">RTM Nagpur University</td>
                    <td className="py-2">Macroeconomic Theory, Public Finance, Development</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-bold">M.A. in Sociology</td>
                    <td className="py-2 pr-4 font-mono">2007</td>
                    <td className="py-2 pr-4">RTM Nagpur University</td>
                    <td className="py-2">Rural Social Systems & Agrarian Labor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Research & Publications Overview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-stone-200 pb-1">
              <h2 className="font-serif font-bold text-base uppercase tracking-wider text-stone-900">
                2. Publications & Scholarly Archive ({PUBLICATIONS.length} Cataloged Works)
              </h2>
              <a
                href="https://scholar.google.com/citations?user=Xvz3xLQAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-medium text-amber-800 hover:underline flex items-center gap-1"
              >
                <span>Verified Google Scholar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs text-stone-600">
              Dr. Bagde&apos;s scholarship encompasses books, indexed research papers (SSRN, MPRA, OSF, peer-reviewed journals), and conference volumes focusing on agricultural economics, Dr. Ambedkar&apos;s economic philosophy, and digital financial inclusion.
            </p>
            <div className="space-y-2 pt-1">
              {PUBLICATIONS.slice(0, 8).map((pub, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-mono text-stone-500 font-bold">[{idx + 1}] </span>
                  <span className="font-semibold text-stone-900">{pub.authors.join(', ')} ({pub.year}). </span>
                  <span className="italic">&ldquo;{pub.title}.&rdquo; </span>
                  <span>{pub.venueOrPublisher}. </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-700 hover:underline font-mono text-[10px] ml-1"
                    >
                      [Scholar Link]
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Distinctions */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-base uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              3. Awards & Major Distinctions
            </h2>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {AWARDS_LIST.map((award, aIdx) => (
                <li key={aIdx} className="flex items-start gap-2">
                  <span className="font-mono font-bold text-amber-800 shrink-0">• {award.year}:</span>
                  <span>
                    <strong>{award.title}</strong> — {award.awardingBody}. {award.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teaching Responsibilities */}
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-base uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1">
              4. Curricular Courses Taught
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {COURSES.map((c) => (
                <div key={c.id} className="bg-stone-50 p-2.5 rounded border border-stone-200">
                  <span className="font-mono font-bold text-amber-800">{c.code}: </span>
                  <strong className="text-stone-900">{c.title}</strong>
                  <div className="text-[11px] text-stone-500 mt-0.5">{c.level} • {c.semester}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Digital Initiatives */}
          <div className="space-y-2 pt-2 border-t border-stone-200 text-xs text-stone-600">
            <div>
              <strong>Research Supervisions: </strong>
              <span>Guided 10+ students in economic research dissertations and socio-economic empirical investigations.</span>
            </div>
            <div>
              <strong>Open Digital Pedagogy: </strong>
              Creator of &ldquo;eClassroom&rdquo; educational YouTube channel and host of the{' '}
              <a
                href={PROFILE_DATA.socialLinks.podcast}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 font-semibold underline inline-flex items-center gap-0.5"
              >
                <span>&ldquo;Economics and Social Studies&rdquo; Spotify podcast</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              {' '}simplifying economic policy and theory for collegiate students.
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600 shrink-0">
          <span>Official CV Document • Last updated September 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-stone-900 text-white hover:bg-stone-800 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
