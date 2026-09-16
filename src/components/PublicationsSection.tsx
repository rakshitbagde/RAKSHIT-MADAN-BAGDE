import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  FileText,
  Search,
  Filter,
  ExternalLink,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  GraduationCap,
} from 'lucide-react';
import { PUBLICATIONS } from '../data/academicData';
import { Publication, PublicationType } from '../types';

export const PublicationsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [citationModalPub, setCitationModalPub] = useState<Publication | null>(null);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Filter logic
  const filteredPublications = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      // Type filter
      if (selectedType !== 'all') {
        if (selectedType === 'book' && pub.type !== 'book') return false;
        if (selectedType === 'paper' && pub.type !== 'paper') return false;
        if (selectedType === 'edited_volume' && pub.type !== 'edited_volume') return false;
      }

      // Language filter
      if (selectedLanguage !== 'all' && pub.language !== selectedLanguage) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = pub.title.toLowerCase().includes(q);
        const matchesDesc = pub.description?.toLowerCase().includes(q) || false;
        const matchesVenue = pub.venueOrPublisher.toLowerCase().includes(q);
        const matchesCategory = pub.category.toLowerCase().includes(q);
        const matchesYear = pub.year.toString().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesVenue && !matchesCategory && !matchesYear) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedType, selectedLanguage]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const generateCitation = (pub: Publication, format: 'APA' | 'MLA' | 'BibTeX') => {
    const authorStr = pub.authors.join(', ');
    if (format === 'APA') {
      return `${authorStr} (${pub.year}). ${pub.title}. ${pub.venueOrPublisher}. ${pub.doiOrIsbn || ''}`;
    }
    if (format === 'MLA') {
      return `${authorStr}. "${pub.title}." ${pub.venueOrPublisher}, ${pub.year}.`;
    }
    // BibTeX
    const citeKey = `bagde${pub.year}${pub.id.split('-')[1] || ''}`;
    return `@${pub.type === 'book' ? 'book' : 'article'}{${citeKey},
  author = {${authorStr}},
  title = {${pub.title}},
  year = {${pub.year}},
  ${pub.type === 'book' ? 'publisher' : 'journal'} = {${pub.venueOrPublisher}},
  note = {${pub.doiOrIsbn || ''}}
}`;
  };

  const handleCopyCitation = (format: 'APA' | 'MLA' | 'BibTeX') => {
    if (!citationModalPub) return;
    const text = generateCitation(citationModalPub, format);
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <section id="publications" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
              Scholarly Output & Google Scholar Archive
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
              Research Papers, Articles & Monographs
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Cataloged from Dr. Rakshit Bagde&apos;s verified Google Scholar profile (SSRN, MPRA, OSF, Peer-Reviewed Journals & Conference Proceedings).
            </p>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href="https://scholar.google.com/citations?user=Xvz3xLQAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Google Scholar Profile</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

            <div className="flex items-center gap-2 text-xs font-sans text-stone-600 px-3 py-2 bg-white rounded-xl border border-stone-200">
              <span className="font-bold text-stone-900">{filteredPublications.length}</span>
              <span>of {PUBLICATIONS.length} papers shown</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications by title, keyword, year, or topic..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Type Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
              >
                <option value="all">All Formats (Articles, Papers & Books)</option>
                <option value="paper">Research Papers & Articles</option>
                <option value="book">Books & Monographs</option>
                <option value="edited_volume">Edited Volumes</option>
              </select>
            </div>

            {/* Language Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
              >
                <option value="all">All Languages</option>
                <option value="English">English</option>
                <option value="Marathi">Marathi (मराठी)</option>
                <option value="Hindi">Hindi (हिन्दी)</option>
              </select>
            </div>

          </div>
        </div>

        {/* Publications List */}
        {filteredPublications.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200">
            <BookOpen className="w-10 h-10 mx-auto text-stone-300 mb-3" />
            <h3 className="font-serif font-bold text-base text-stone-800">No matching publications found</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search terms or clearing language/type filters to view all entries.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedLanguage('all');
              }}
              className="mt-4 px-4 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-md border border-amber-200"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredPublications.map((pub) => {
              const isExpanded = expandedId === pub.id;
              return (
                <div
                  key={pub.id}
                  className="bg-white rounded-xl border border-stone-200 shadow-2xs hover:border-amber-300 hover:shadow-sm transition-all p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    
                    {/* Publication Metadata */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                          {pub.year}
                        </span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          pub.type === 'book'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : pub.type === 'edited_volume'
                            ? 'bg-purple-50 text-purple-800 border-purple-200'
                            : 'bg-blue-50 text-blue-800 border-blue-200'
                        }`}>
                          {pub.type === 'book' ? 'Authored Book' : pub.type === 'edited_volume' ? 'Edited Volume' : 'Journal Paper'}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
                          {pub.language}
                        </span>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                          {pub.category}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 leading-snug">
                        {pub.title}
                      </h3>

                      <div className="text-xs text-stone-600 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-medium text-stone-800">{pub.authors.join(', ')}</span>
                        <span>•</span>
                        <span className="italic">{pub.venueOrPublisher}</span>
                        {pub.doiOrIsbn && (
                          <>
                            <span>•</span>
                            <span className="font-mono text-stone-500">{pub.doiOrIsbn}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 self-start shrink-0 pt-1">
                      <button
                        onClick={() => setCitationModalPub(pub)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
                        title="Generate Citation"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Cite</span>
                      </button>

                      {pub.description && (
                        <button
                          onClick={() => toggleExpand(pub.id)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
                        >
                          <span>Abstract</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                      )}

                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors"
                          title="Open paper on Google Scholar or Repository"
                        >
                          <span>Scholar</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Expandable Abstract */}
                  {isExpanded && pub.description && (
                    <div className="mt-4 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50/70 p-3.5 rounded-lg">
                      <p className="font-semibold text-stone-900 text-xs uppercase tracking-wider mb-1">
                        Scholarly Summary / Abstract:
                      </p>
                      <p>{pub.description}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Citation Generator Modal */}
      {citationModalPub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Cite this Publication
              </h3>
              <button
                onClick={() => setCitationModalPub(null)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <p className="font-serif text-sm font-bold text-stone-800 line-clamp-2">
              {citationModalPub.title}
            </p>

            {/* Citation Formats */}
            <div className="space-y-3 pt-2">
              {(['APA', 'MLA', 'BibTeX'] as const).map((fmt) => {
                const citeText = generateCitation(citationModalPub, fmt);
                return (
                  <div key={fmt} className="bg-stone-50 p-3 rounded-lg border border-stone-200 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-stone-600">{fmt} Format</span>
                      <button
                        onClick={() => handleCopyCitation(fmt)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 hover:text-amber-800"
                      >
                        {copiedFormat === fmt ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs text-stone-700 font-mono whitespace-pre-wrap break-words select-all">
                      {citeText}
                    </pre>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setCitationModalPub(null)}
                className="px-4 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
