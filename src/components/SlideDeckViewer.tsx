import React, { useState, useEffect, useRef } from 'react';
import {
  Presentation,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Grid,
  CheckCircle2,
  TrendingUp,
  Download,
  Share2,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { SLIDE_DECKS } from '../data/academicData';
import { SlideDeck } from '../types';

export const SlideDeckViewer: React.FC = () => {
  const [selectedDeckId, setSelectedDeckId] = useState<string>(SLIDE_DECKS[0].id);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeDeck = SLIDE_DECKS.find((d) => d.id === selectedDeckId) || SLIDE_DECKS[0];
  const currentSlide = activeDeck.slides[currentSlideIndex];

  // Reset slide index when changing deck
  const handleSelectDeck = (id: string) => {
    setSelectedDeckId(id);
    setCurrentSlideIndex(0);
    setShowGrid(false);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < activeDeck.slides.length - 1 ? prev + 1 : prev));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only react if not typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, activeDeck.slides.length, isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section id="slides" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
              Lecture Presentations & Slide Repository
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
              Interactive Academic Slide Decks
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Browse classroom lecture slides and conference presentation decks used in university courses and seminars.
            </p>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
          </div>

          {/* Deck Switcher Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {SLIDE_DECKS.map((deck) => (
              <button
                key={deck.id}
                onClick={() => handleSelectDeck(deck.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedDeckId === deck.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {deck.title.split(':')[0].substring(0, 24)}...
              </button>
            ))}
          </div>
        </div>

        {/* Presentation Stage Container */}
        <div
          ref={containerRef}
          className={`bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl transition-all ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'relative'
          }`}
        >
          
          {/* Deck Top Bar */}
          <div className="bg-stone-950/90 px-4 sm:px-6 py-3 border-b border-stone-800 flex items-center justify-between text-stone-200 text-xs">
            <div className="flex items-center gap-2.5 truncate mr-4">
              <Presentation className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-serif font-bold text-white truncate text-xs sm:text-sm">
                {activeDeck.title}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-stone-800 text-amber-300">
                {activeDeck.courseOrTopic}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`p-1.5 rounded-md hover:bg-stone-800 transition-colors ${
                  showGrid ? 'bg-amber-600 text-white' : 'text-stone-300'
                }`}
                title="Toggle Slide Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-md text-stone-300 hover:bg-stone-800 transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Slide Body / Stage */}
          {showGrid ? (
            /* Grid Overview Mode */
            <div className="p-6 sm:p-8 bg-stone-900 min-h-[440px] max-h-[600px] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeDeck.slides.map((s, idx) => (
                  <button
                    key={s.slideNumber}
                    onClick={() => {
                      setCurrentSlideIndex(idx);
                      setShowGrid(false);
                    }}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      idx === currentSlideIndex
                        ? 'border-amber-500 bg-stone-800 ring-2 ring-amber-500/40'
                        : 'border-stone-800 bg-stone-950/60 hover:bg-stone-800/80 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-2">
                      <span>Slide {s.slideNumber}</span>
                      {idx === currentSlideIndex && <span className="text-amber-400 font-bold">Current</span>}
                    </div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-white line-clamp-2 mb-1">
                      {s.title}
                    </h4>
                    {s.subtitle && (
                      <p className="text-[11px] text-stone-400 line-clamp-1">{s.subtitle}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Active Slide Presentation Canvas */
            <div className="p-6 sm:p-10 lg:p-14 bg-radial from-stone-900 to-stone-950 text-white min-h-[420px] flex flex-col justify-between">
              
              <div className="space-y-6">
                {/* Slide Header */}
                <div className="border-b border-stone-800/80 pb-4">
                  <div className="flex items-center justify-between text-xs text-amber-400/90 font-mono mb-1">
                    <span>{activeDeck.courseOrTopic}</span>
                    <span>{activeDeck.date}</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-xs sm:text-sm text-stone-400 mt-1">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {/* Bullets & Visuals Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  
                  {/* Bullet Points */}
                  <div className={currentSlide.diagramOrStat ? 'lg:col-span-8' : 'lg:col-span-12'}>
                    <ul className="space-y-3.5">
                      {currentSlide.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diagram / Metric Callout Block (if present) */}
                  {currentSlide.diagramOrStat && (
                    <div className="lg:col-span-4 bg-stone-800/80 border border-stone-700/80 rounded-xl p-5 text-center shadow-inner">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                        {currentSlide.diagramOrStat.label}
                      </div>
                      <div className="font-serif font-bold text-3xl sm:text-4xl text-white my-2">
                        {currentSlide.diagramOrStat.value}
                      </div>
                      <p className="text-xs text-stone-400 leading-normal">
                        {currentSlide.diagramOrStat.context}
                      </p>
                    </div>
                  )}

                </div>
              </div>

              {/* Slide Key Takeaway / Insight Callout */}
              {currentSlide.keyTakeaway && (
                <div className="mt-8 pt-4 border-t border-stone-800/80 flex items-start gap-3 bg-stone-800/40 p-3.5 rounded-xl border border-stone-700/40">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-300">
                    <strong className="text-amber-300 font-medium">Core Thesis: </strong>
                    {currentSlide.keyTakeaway}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Deck Bottom Control Bar */}
          <div className="bg-stone-950 px-4 sm:px-6 py-3.5 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
            {/* Left Info */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-stone-400">
                Slide {currentSlideIndex + 1} / {activeDeck.slides.length}
              </span>
              <div className="hidden sm:flex items-center gap-1">
                {activeDeck.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlideIndex ? 'w-5 bg-amber-500' : 'bg-stone-700 hover:bg-stone-500'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentSlideIndex === 0}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentSlideIndex === activeDeck.slides.length - 1}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Deck Description & Download Info */}
        <div className="mt-6 bg-stone-50 p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-600">
          <div>
            <strong className="text-stone-900 font-serif">Deck Context: </strong>
            {activeDeck.description}
          </div>
          <div className="text-stone-500 shrink-0 font-mono text-[11px]">
            Faculty: Dr. Rakshit Madan Bagde
          </div>
        </div>

      </div>
    </section>
  );
};
