import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  BookOpen,
  FileText,
  Presentation,
  Video,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { PUBLICATIONS, COURSES, SLIDE_DECKS, VIDEO_LECTURES } from '../data/academicData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedPubs = q
    ? PUBLICATIONS.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q))
      ).slice(0, 5)
    : [];

  const matchedCourses = q
    ? COURSES.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const matchedSlides = q
    ? SLIDE_DECKS.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.courseOrTopic.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : [];

  const matchedVideos = q
    ? VIDEO_LECTURES.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.topic.toLowerCase().includes(q) ||
          v.summary.toLowerCase().includes(q)
      ).slice(0, 3)
    : [];

  const totalMatches =
    matchedPubs.length + matchedCourses.length + matchedSlides.length + matchedVideos.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden space-y-0">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search publications, books, courses, lecture slides, and videos..."
            className="flex-1 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-stone-400 hover:text-stone-700 font-semibold"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-stone-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 max-h-[65vh] overflow-y-auto space-y-5">
          {!query && (
            <div className="py-8 text-center text-stone-400 text-xs sm:text-sm space-y-2">
              <Search className="w-8 h-8 mx-auto text-stone-300 mb-2" />
              <p>Type keywords to search across Dr. Bagde's scholarship.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {['UPI', 'Ambedkar', 'Agriculture', 'NEP 2020', 'Macroeconomics'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && totalMatches === 0 && (
            <div className="py-8 text-center text-stone-500 text-xs sm:text-sm">
              No results found for "<strong>{query}</strong>". Try broader keywords like "Ambedkar", "Economics", or "UPI".
            </div>
          )}

          {/* Matched Publications */}
          {matchedPubs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Publications & Books ({matchedPubs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedPubs.map((pub) => (
                  <a
                    key={pub.id}
                    href="#publications"
                    onClick={onClose}
                    className="block p-3 rounded-lg bg-stone-50 hover:bg-amber-50/60 border border-stone-200 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[11px] text-stone-500 mb-0.5">
                      <span className="font-mono">{pub.year} • {pub.category}</span>
                      <span className="font-semibold text-amber-700">{pub.type}</span>
                    </div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 line-clamp-1">
                      {pub.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Matched Slide Decks */}
          {matchedSlides.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Presentation className="w-3.5 h-3.5" />
                <span>Lecture Slide Decks ({matchedSlides.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedSlides.map((slide) => (
                  <a
                    key={slide.id}
                    href="#slides"
                    onClick={onClose}
                    className="block p-3 rounded-lg bg-stone-50 hover:bg-amber-50/60 border border-stone-200 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-stone-500 block mb-0.5">
                      {slide.courseOrTopic}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900">
                      {slide.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Matched Courses */}
          {matchedCourses.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Curricular Courses ({matchedCourses.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedCourses.map((c) => (
                  <a
                    key={c.id}
                    href="#teaching"
                    onClick={onClose}
                    className="block p-3 rounded-lg bg-stone-50 hover:bg-amber-50/60 border border-stone-200 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-stone-500 font-bold block mb-0.5">
                      {c.code} • {c.level}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900">
                      {c.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Matched Videos */}
          {matchedVideos.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5" />
                <span>eClassroom Lectures ({matchedVideos.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedVideos.map((v) => (
                  <a
                    key={v.id}
                    href="#eclassroom"
                    onClick={onClose}
                    className="block p-3 rounded-lg bg-stone-50 hover:bg-amber-50/60 border border-stone-200 transition-colors"
                  >
                    <span className="text-[10px] font-mono text-stone-500 block mb-0.5">
                      {v.topic} • {v.duration}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900">
                      {v.title}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="p-3 bg-stone-100 border-t border-stone-200 text-center text-[11px] text-stone-500">
          Press <kbd className="px-1 py-0.5 bg-white border border-stone-300 rounded text-stone-700">ESC</kbd> to close
        </div>

      </div>
    </div>
  );
};
