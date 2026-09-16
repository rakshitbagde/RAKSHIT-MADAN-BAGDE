import React, { useState } from 'react';
import {
  Sprout,
  Scale,
  Smartphone,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Landmark,
  Layers,
} from 'lucide-react';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const researchPillars = [
    {
      id: 'pillar-agri',
      icon: Sprout,
      title: 'Agricultural Economics & Agrarian Reforms',
      subtitle: 'Smallholder Viability, Crop Volatility & Vidarbha Land Tenure',
      summary:
        'Investigating the systemic causes of farm distress, irrigation shortages, and credit accessibility among marginal paddy and cotton cultivators in Eastern Vidarbha.',
      keyThemes: [
        'Economic size of agricultural land holdings versus productivity ceilings',
        'Efficiency of Minimum Support Price (MSP) and APMC mandi market realization',
        'Water conservation economics: Lift irrigation, tank recharge, and watershed sustainability',
        'Farmer Producer Organizations (FPOs) as collective bargaining institutions',
      ],
      empiricalHighlight: {
        metric: '400+ Farmers',
        label: 'Field survey cohort in Bhandara district evaluating input cost vs harvest net margins.',
      },
      publishedHighlight: 'Dr. B.R. Ambedkar’s Agrarian Thought & Land Reform Economics (2024)',
    },
    {
      id: 'pillar-ambedkar',
      icon: Scale,
      title: 'Dr. B.R. Ambedkar’s Economic Philosophy',
      subtitle: 'Agrarian Industrialization, Monetary Theory & State Socialism',
      summary:
        'Pioneering theoretical analysis of Dr. Ambedkar\'s seminal contributions to agricultural economics ("Small Holdings in India", 1918), public finance, and the founding principles of the Reserve Bank of India.',
      keyThemes: [
        'Critique of surface-area-based land holding definitions; factor proportionality law',
        'State Socialism as constitutional mandate (States and Minorities, 1947)',
        'Industrialization as the premier agrarian solution to absorb surplus disguised rural labor',
        'Currency stabilization doctrines: The Problem of the Rupee (Hilton Young Commission)',
      ],
      empiricalHighlight: {
        metric: '1918 – 2026',
        label: 'Continuous historical relevance bridging colonial economic debates with modern land fragmentation.',
      },
      publishedHighlight: 'Economic Philosophy of Dr. B.R. Ambedkar: State Socialism & Modern Public Finance (2023)',
    },
    {
      id: 'pillar-upi',
      icon: Smartphone,
      title: 'Digital Payments, UPI & Rural Inclusion',
      subtitle: 'Grassroots Cashless Velocity & Micro-Transaction Evidence (2026)',
      summary:
        'Groundbreaking empirical research assessing the adoption velocity, transaction friction, and formal credit footprint created by UPI and QR code payments across rural agricultural clusters.',
      keyThemes: [
        'Impact of the JAM Trinity (Jan Dhan, Aadhaar, Mobile) on rural cash dependency',
        'Elimination of physical travel and queuing costs for smallholder farming families',
        'Transforming digital payment transaction trails into underwriting signals for collateral-free credit',
        'Vulnerabilities: Vernacular interface limitations, rural telecom blind spots, and phishing defense',
      ],
      empiricalHighlight: {
        metric: '3.8 Hrs / Wk',
        label: 'Average transit time saved by rural agricultural households through localized UPI payments.',
      },
      publishedHighlight: 'Digital Payments, Financial Inclusion and Rural Development in India (MPRA / HAL, 2026)',
    },
    {
      id: 'pillar-nep',
      icon: BookOpen,
      title: 'National Education Policy & Socio-Economic Equity',
      subtitle: 'Higher Education Financing, NEP 2020 & Bahujan Perspectives',
      summary:
        'Critical policy analysis dissecting the economic feasibility of the 6% of GDP education funding benchmark, vocationalization efficacy, and educational access for first-generation rural learners.',
      keyThemes: [
        'Public expenditure constraints under state-level fiscal deficits and fiscal federalism',
        'The education-employment gap: Aligning vocational trades with local rural labor markets',
        'Socio-economic impact of digital university platforms on historically marginalized cohorts',
        'Affirmative research scholarships, institutional autonomy, and regional college viability',
      ],
      empiricalHighlight: {
        metric: '3.2% vs 6%',
        label: 'Budgetary gap between actual state-union education spend and NEP aspirational targets.',
      },
      publishedHighlight: 'National Education Policy from the Perspective of Bahujans: 2020 (2025)',
    },
  ];

  return (
    <section id="research" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
            Scholarly Focus Areas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
            Core Research Domains & Applied Scholarship
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Interdisciplinary economic inquiry uniting empirical field surveys, development economics, and social justice.
          </p>
          <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
        </div>

        {/* Pillar Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {researchPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-amber-500'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                <div>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                    isSelected ? 'bg-amber-600 text-white' : 'bg-white text-stone-800 border border-stone-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-serif font-bold text-sm line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-stone-900'
                  }`}>
                    {pillar.title}
                  </h3>
                </div>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-amber-500">
                  <span>Explore Research</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed View */}
        {(() => {
          const current = researchPillars[activeTab];
          const Icon = current.icon;
          return (
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                        {current.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-800 font-medium">
                        {current.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {current.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                      Key Analytical Questions & Theses
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.keyThemes.map((theme, tIdx) => (
                        <div
                          key={tIdx}
                          className="bg-white p-3 rounded-lg border border-stone-200/80 text-xs text-stone-700 flex items-start gap-2 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empirical Highlight & Publication Card */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      Empirical Benchmark
                    </span>
                    <div className="font-serif font-bold text-3xl text-stone-900 mb-1">
                      {current.empiricalHighlight.metric}
                    </div>
                    <p className="text-xs text-stone-600 leading-normal">
                      {current.empiricalHighlight.label}
                    </p>
                  </div>

                  <div className="bg-stone-900 text-white rounded-xl p-5 border border-stone-800 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Featured Monograph / Paper
                    </span>
                    <h5 className="font-serif font-bold text-sm text-stone-100 mb-2">
                      {current.publishedHighlight}
                    </h5>
                    <a
                      href="#publications"
                      className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-medium"
                    >
                      <span>Find in Publications Catalog</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
