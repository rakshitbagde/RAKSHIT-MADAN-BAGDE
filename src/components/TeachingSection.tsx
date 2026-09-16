import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Users,
  Building,
  HelpCircle,
} from 'lucide-react';
import { COURSES } from '../data/academicData';
import { Course } from '../types';

export const TeachingSection: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course>(COURSES[0]);

  return (
    <section id="teaching" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
            Curricular Instruction & Courses
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
            Undergraduate & Postgraduate Teaching
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Over 15 years teaching foundational macroeconomics, agrarian theory, and research methodology at Late Mansaramji Padole Arts College.
          </p>
          <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
        </div>

        {/* Courses Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Course Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans px-1">
              Active Courses Taught
            </h3>
            <div className="space-y-2">
              {COURSES.map((course) => {
                const isSelected = selectedCourse.id === course.id;
                return (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-1 ring-amber-500'
                        : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-stone-600'}`}>
                        {course.code}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-stone-800 text-stone-300' : 'bg-stone-200 text-stone-600'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    <h4 className={`font-serif font-bold text-sm leading-snug ${
                      isSelected ? 'text-white' : 'text-stone-900'
                    }`}>
                      {course.title}
                    </h4>
                    <span className={`text-xs block mt-1 ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                      {course.semester}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Office Hours / Student Consultation Card */}
            <div className="mt-6 bg-amber-50/80 border border-amber-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-sm">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>Student Advisory & Office Hours</span>
              </div>
              <p className="text-xs text-amber-950/80 leading-relaxed">
                Department of Economics, Late Mansaramji Padole Arts College, Ganeshpur, Bhandara.
              </p>
              <div className="text-xs text-amber-900 space-y-1 font-mono">
                <div className="font-semibold text-amber-950">• Mon to Sat: 8:00 AM – 02:00 PM</div>
                <div className="text-[11px] text-amber-800/90 font-sans">Student advisory, curricular doubt resolution & research mentorship</div>
              </div>
            </div>
          </div>

          {/* Selected Course Detailed Syllabus View */}
          <div className="lg:col-span-8 bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Header */}
            <div className="border-b border-stone-200 pb-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  {selectedCourse.code}
                </span>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-stone-200 text-stone-800">
                  {selectedCourse.level}
                </span>
                <span className="text-xs font-medium text-stone-500">
                  {selectedCourse.semester}
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-stone-900">
                {selectedCourse.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                {selectedCourse.description}
              </p>
            </div>

            {/* Syllabus Core Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-sans flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Curricular Modules & Syllabus Units</span>
              </h4>
              <div className="space-y-2.5">
                {selectedCourse.syllabusHighlights.map((unit, uIdx) => (
                  <div
                    key={uIdx}
                    className="bg-white p-3.5 rounded-xl border border-stone-200 flex items-start gap-3 shadow-2xs text-xs sm:text-sm text-stone-800"
                  >
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded shrink-0">
                      Unit {uIdx + 1}
                    </span>
                    <span>{unit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Readings & Textbooks */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-sans flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Recommended Course Readings & Textbooks</span>
              </h4>
              <ul className="space-y-2 bg-white p-4 rounded-xl border border-stone-200 divide-y divide-stone-100">
                {selectedCourse.recommendedReadings.map((reading, rIdx) => (
                  <li key={rIdx} className={rIdx === 0 ? 'text-xs text-stone-700' : 'pt-2 text-xs text-stone-700'}>
                    <span className="font-medium text-stone-900">• {reading}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
