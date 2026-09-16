import React from 'react';
import { Award, Medal, CheckCircle2, Star, Sparkles } from 'lucide-react';
import { AWARDS_LIST } from '../data/academicData';

export const AwardsSection: React.FC = () => {
  return (
    <section id="honors" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
            Honors & Academic Distinctions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mt-1">
            Gold Medals, Fellowships & Recognition
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-2">
            Recognized by premier universities, research councils, and the University Grants Commission (UGC).
          </p>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
        </div>

        {/* Highlight Gold Medals Card */}
        <div className="bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-900 border border-amber-500/30 rounded-2xl p-6 sm:p-8 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Historic University Distinction
                </span>
                <span className="text-xs font-mono text-stone-400">Convocation Honor (2006)</span>
              </div>

              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                Recipient of Five University Gold Medals
              </h3>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                Secured First Rank in Order of Merit in Master of Arts (Dr. Ambedkar Thought) across all affiliated postgraduate departments of <strong>Rashtrasant Tukadoji Maharaj Nagpur University</strong>. Conferred 5 prestigious Gold Medals at the university convocation.
              </p>
            </div>

            {/* Medals Visual Emblem */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-500 to-amber-700 flex flex-col items-center justify-center text-stone-950 shadow-2xl border-4 border-amber-300/60 p-2 text-center">
                  <Medal className="w-8 h-8 text-amber-950 stroke-[2.5]" />
                  <span className="font-serif font-extrabold text-xl leading-none mt-0.5 text-stone-950">5x</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-950">Gold Medals</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {AWARDS_LIST.map((award) => (
            <div
              key={award.id}
              className="bg-stone-800/60 border border-stone-700/70 rounded-xl p-5 sm:p-6 space-y-2.5 hover:border-amber-500/40 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white">
                      {award.title}
                    </h4>
                    <p className="text-xs text-amber-400 font-medium">
                      {award.awardingBody}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-stone-400 bg-stone-900 px-2 py-0.5 rounded border border-stone-700 shrink-0">
                  {award.year}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                {award.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
