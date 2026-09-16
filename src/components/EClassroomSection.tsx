import React, { useState } from 'react';
import {
  Video,
  Play,
  Headphones,
  ExternalLink,
  MessageSquare,
  Clock,
  Eye,
  Sparkles,
  Volume2,
  Pause,
  Share2,
} from 'lucide-react';
import { VIDEO_LECTURES, PODCAST_EPISODES, PROFILE_DATA } from '../data/academicData';
import { VideoLecture, PodcastEpisode } from '../types';

export const EClassroomSection: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'podcast'>('video');
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);
  const [playingPodcastId, setPlayingPodcastId] = useState<string | null>(null);

  const togglePlayPodcast = (id: string) => {
    setPlayingPodcastId(playingPodcastId === id ? null : id);
  };

  return (
    <section id="eclassroom" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 font-sans">
              Digital Learning & Open Pedagogy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 mt-1">
              eClassroom & Multimedia Lectures
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Free, open-access university lecture series, learning sciences tutorials, and economic policy podcasts.
            </p>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center p-1 bg-stone-200/80 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActiveMediaTab('video')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                activeMediaTab === 'video'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-red-600" />
              <span>eClassroom Video Lectures</span>
            </button>

            <button
              onClick={() => setActiveMediaTab('podcast')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-all ${
                activeMediaTab === 'podcast'
                  ? 'bg-white text-stone-900 shadow-sm font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-emerald-600" />
              <span>Economics Podcast Series</span>
            </button>
          </div>
        </div>

        {/* Video Lectures Grid */}
        {activeMediaTab === 'video' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIDEO_LECTURES.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Simulated Video Thumbnail Canvas */}
                    <div className="relative aspect-video bg-stone-900 flex items-center justify-center p-4 text-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent z-10" />
                      
                      {/* Topic Label */}
                      <span className="absolute top-3 left-3 z-20 text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/80 text-stone-950">
                        {video.topic}
                      </span>

                      {/* Duration */}
                      <span className="absolute bottom-3 right-3 z-20 text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-black/80 text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-stone-400" />
                        {video.duration}
                      </span>

                      {/* Play Action */}
                      <button
                        onClick={() => setSelectedVideo(video)}
                        className="relative z-20 w-12 h-12 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all"
                        aria-label={`Play lecture: ${video.title}`}
                      >
                        <Play className="w-5 h-5 ml-0.5 fill-white" />
                      </button>
                    </div>

                    {/* Video Info */}
                    <div className="p-5 space-y-2">
                      <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {video.summary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 bg-stone-50/50">
                    <span className="font-medium text-stone-700">{video.channel}</span>
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="text-amber-700 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Lecture Notes</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* eClassroom Banner Callout */}
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-red-400 text-xs font-semibold">
                  <Video className="w-4 h-4" />
                  <span>Official YouTube Channel</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Join the eClassroom Learning Community
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                  Lectures on Brain-Based Learning, UGC-NET Economics preparation, and foundational macroeconomic theories by Dr. Rakshit Bagde.
                </p>
              </div>

              <a
                href={PROFILE_DATA.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 shadow-lg transition-all shrink-0"
              >
                <span>Visit eClassroom on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Podcast Series Tab */}
        {activeMediaTab === 'podcast' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PODCAST_EPISODES.map((ep) => {
                const isPlaying = playingPodcastId === ep.id;
                return (
                  <div
                    key={ep.id}
                    className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs hover:shadow-sm transition-all space-y-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                            Episode {ep.episodeNumber}
                          </span>
                          <span className="text-xs text-stone-400">{ep.date}</span>
                          <span className="text-xs text-stone-400">• {ep.duration}</span>
                        </div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                          {ep.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => togglePlayPodcast(ep.id)}
                        className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isPlaying
                            ? 'bg-emerald-600 text-white shadow-md ring-4 ring-emerald-100'
                            : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
                        }`}
                        aria-label={isPlaying ? 'Pause Episode' : 'Play Episode'}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                      </button>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {ep.description}
                    </p>

                    {/* Simulated Player Waveform when playing */}
                    {isPlaying && (
                      <div className="bg-stone-900 text-stone-200 p-3.5 rounded-xl space-y-2 border border-stone-800 animate-fadeIn">
                        <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                          <span className="flex items-center gap-1 text-emerald-400">
                            <Volume2 className="w-3.5 h-3.5" />
                            <span>Playing Audio Preview...</span>
                          </span>
                          <span>04:12 / {ep.duration}</span>
                        </div>
                        <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-emerald-500 h-full w-1/4 rounded-full animate-pulse" />
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span>Available on:</span>
                      <div className="flex items-center gap-2">
                        {ep.listenPlatforms.map((plat) => (
                          <span key={plat} className="px-2 py-0.5 bg-stone-100 rounded text-[11px] text-stone-700">
                            {plat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Podcast Banner */}
            <div className="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-900">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-300 text-xs font-semibold">
                  <Headphones className="w-4 h-4" />
                  <span>Economics and Social Studies Podcast</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Simplifying Modern Economic Issues for Students & Citizens
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl">
                  Listen to weekly audio discussions on inflation, budget analysis, agrarian policies, and Dr. Ambedkar\'s currency theory.
                </p>
              </div>

              <a
                href={PROFILE_DATA.socialLinks.podcast}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-stone-950 flex items-center gap-2 shadow-lg transition-all shrink-0"
              >
                <span>Listen on Spotify</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Video Details Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                  {selectedVideo.topic}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mt-2">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold p-1 shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="bg-stone-900 rounded-xl p-8 text-center text-white space-y-3">
              <div className="w-14 h-14 rounded-full bg-red-600 text-white mx-auto flex items-center justify-center shadow-lg">
                <Play className="w-6 h-6 ml-0.5 fill-white" />
              </div>
              <h4 className="font-serif font-bold text-base text-stone-100">
                {selectedVideo.channel}
              </h4>
              <p className="text-xs text-stone-400">
                Duration: {selectedVideo.duration} • High-Definition Academic Lecture
              </p>
              <a
                href={PROFILE_DATA.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow transition-all"
              >
                <span>Open in YouTube Channel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                Lecture Synopsis & Core Takeaways:
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {selectedVideo.summary}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
