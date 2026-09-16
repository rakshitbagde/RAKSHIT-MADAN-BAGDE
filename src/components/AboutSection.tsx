import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Building,
  CheckCircle,
  Briefcase,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { MILESTONES, PROFILE_DATA } from '../data/academicData';
import { useAvatar } from '../utils/avatar';

interface AboutSectionProps {
  onOpenPhoto?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'degrees' | 'appointments' | 'scholarship'>('all');
  const [avatarUrl] = useAvatar();

  const filteredMilestones = MILESTONES.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'degrees') return item.iconType === 'degree';
    if (activeCategory === 'appointments') return item.iconType === 'appointment';
    if (activeCategory === 'scholarship') return item.iconType === 'book' || item.iconType === 'award';
    return true;
  });

  const qualifications = [
    {
      degree: 'Ph.D. in Economics',
      year: '2013',
      institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
      detail:
        'Thesis: "Dr. Babasaheb Ambedkar\'s Economic Thoughts on Indian Agriculture in the Context of Globalization". Evaluated agrarian distress, land consolidation remedies, and state intervention models.',
      badge: 'Doctorate',
    },
    {
      degree: 'M.A. in Dr. Ambedkar Thought',
      year: '2006',
      institution: 'RTM Nagpur University',
      detail:
        'Awarded 5 University Gold Medals for securing First Rank in Order of Merit across all postgraduate colleges in the university.',
      badge: '5x Gold Medalist',
    },
    {
      degree: 'UGC NET-JRF in Economics',
      year: '2008 & 2009',
      institution: 'University Grants Commission (UGC), New Delhi',
      detail:
        'Twice qualified the National Eligibility Test with Junior Research Fellowship (JRF), placing in the top 1 percentile of economics scholars nationally.',
      badge: 'Dual JRF Qualified',
    },
    {
      degree: 'M.Phil. in Economics',
      year: '2005',
      institution: 'Yashwantrao Chavan Maharashtra Open University (YCMOU)',
      detail:
        'Advanced dissertation on regional economic imbalances and rural banking outreach in Vidarbha district.',
      badge: 'First Class',
    },
    {
      degree: 'M.A. in Economics',
      year: '2004',
      institution: 'RTM Nagpur University',
      detail:
        'Comprehensive study of Classical, Keynesian, and Post-Keynesian macroeconomics, public finance, and econometric methods.',
      badge: 'Postgraduate',
    },
    {
      degree: 'M.A. in Sociology',
      year: '2007',
      institution: 'RTM Nagpur University',
      detail:
        'Interdisciplinary specialization in rural social structures, caste dynamics, agrarian labor relations, and developmental sociology.',
      badge: 'Interdisciplinary',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
            Academic Background & Biography
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
            Bridging Economic Theory with Agrarian & Social Reality
          </h2>
          <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
        </div>

        {/* Narrative & Institutional Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          <div className="lg:col-span-7 space-y-5 text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
            
            {/* Scholar Portrait & Identity Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative shrink-0">
                <button
                  onClick={onOpenPhoto}
                  title="Click to view portrait or upload photo"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-md ring-4 ring-amber-50 relative group cursor-pointer block focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <img
                    src={avatarUrl}
                    alt={PROFILE_DATA.name}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-white backdrop-blur-[2px]">
                    View Portrait
                  </div>
                </button>
                <div className="absolute -bottom-2 -right-2 bg-stone-900 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-stone-700 shadow flex items-center gap-1 pointer-events-none">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>Ph.D. HOD</span>
                </div>
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <span>Economics Faculty & Researcher</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900">
                  {PROFILE_DATA.name}
                </h3>
                <p className="text-xs font-serif text-amber-700 italic">
                  {PROFILE_DATA.marathiName}
                </p>
                <p className="text-xs text-stone-600 leading-relaxed pt-1">
                  Head, Department of Economics at Late Mansaramji Padole Arts College, Bhandara. Scholar of Agricultural Economics, Ambedkarite Economic Thought, and UPI-driven Financial Inclusion.
                </p>
              </div>
            </div>

            <p>
              <strong>Dr. Rakshit Madan Bagde</strong> is an Indian economist, author, and senior faculty member currently serving as <strong>Assistant Professor and Head of the Department of Economics at Late Mansaramji Padole Arts College, Ganeshpur, Bhandara</strong>. With over 15 years of higher education teaching and research mentorship, he has dedicated his career to demystifying economic policy and analyzing grassroots issues affecting rural households in Maharashtra.
            </p>
            <p>
              His scholarship bridges quantitative macroeconomic analysis with the social economics of <strong>Dr. B.R. Ambedkar</strong>. Having earned a Ph.D. analyzing Dr. Ambedkar's agrarian thought and land consolidation doctrines, Dr. Bagde has made significant contributions to how economic historians and contemporary agricultural economists understand smallholder farming viability, capital-labor proportionality, and cooperative agricultural structures.
            </p>
            <p>
              Beyond the traditional classroom, Dr. Bagde is a passionate proponent of open digital education. Through his YouTube channel <a href="https://www.youtube.com/@eclassroom2014" target="_blank" rel="noreferrer" className="text-red-700 font-semibold hover:underline">eClassroom (@eclassroom2014)</a>, the <strong>"Economics and Social Studies"</strong> podcast, and over 25 published books and textbooks, he brings collegiate-level economics, pedagogical science, and current economic policy debates directly to students from tier-2 and tier-3 rural institutions across India.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-3">
                <Building className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">Institutional Role</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Head, Dept. of Economics, Late M. Padole Arts College, Bhandara</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">Research Supervisions</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Guided 60+ postgraduate economic research dissertations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Qualifications List */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                Academic Qualifications
              </h3>
              <span className="text-xs font-mono text-stone-500">6 Degrees & Honors</span>
            </div>

            <div className="space-y-3.5 divide-y divide-stone-100">
              {qualifications.map((item, idx) => (
                <div key={idx} className={idx === 0 ? '' : 'pt-3'}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      {item.degree}
                    </h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5 mb-1">
                    <span>{item.institution}</span>
                    <span>•</span>
                    <span className="font-mono text-stone-700">{item.year}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Journey Timeline */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-6">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-600" />
                Academic Milestones & Career Timeline
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Over 15 years of scholarly publications, honors, and administrative leadership
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeCategory === 'all'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All Milestones
              </button>
              <button
                onClick={() => setActiveCategory('degrees')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeCategory === 'degrees'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Degrees
              </button>
              <button
                onClick={() => setActiveCategory('appointments')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeCategory === 'appointments'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Appointments
              </button>
              <button
                onClick={() => setActiveCategory('scholarship')}
                className={`px-3 py-1 rounded-md transition-all font-medium ${
                  activeCategory === 'scholarship'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Publications & Honors
              </button>
            </div>
          </div>

          <div className="relative border-l-2 border-stone-200 ml-3 sm:ml-4 space-y-8 pl-6 sm:pl-8 py-2">
            {filteredMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-4 h-4 rounded-full bg-white border-4 border-amber-600 group-hover:scale-125 transition-transform" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
                  <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 w-fit">
                    {milestone.year}
                  </span>
                  <h4 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-700 transition-colors">
                    {milestone.title}
                  </h4>
                </div>

                <p className="text-xs font-medium text-stone-500 mb-1.5">
                  {milestone.institution}
                </p>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
