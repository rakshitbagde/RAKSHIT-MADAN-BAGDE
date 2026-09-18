import React, { useState, useMemo } from 'react';
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
  Search,
  Youtube,
} from 'lucide-react';
import { VIDEO_LECTURES, PODCAST_EPISODES, PROFILE_DATA } from '../data/academicData';
import { VideoLecture, PodcastEpisode } from '../types';

export const EClassroomSection: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'podcast'>('video');
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);
  const [playingPodcastId, setPlayingPodcastId] = useState<string | null>(null);
  const [videoSearchQuery, setVideoSearchQuery] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const topics = useMemo(() => {
    const list = Array.from(new Set(VIDEO_LECTURES.map((v) => v.topic)));
    return ['all', ...list];
  }, []);

  const filteredVideos = useMemo(() => {
    return VIDEO_LECTURES.filter((video) => {
      const matchesSearch =
        !videoSearchQuery ||
        video.title.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
        video.topic.toLowerCase().includes(videoSearchQuery.toLowerCase()) ||
        video.summary.toLowerCase().includes(videoSearchQuery.toLowerCase());

      const matchesTopic = selectedTopic === 'all' || video.topic === selectedTopic;

      return matchesSearch && matchesTopic;
    });
  }, [videoSearchQuery, selectedTopic]);

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
              Free, open-access university lecture series, learning sciences tutorials, and economic policy podcasts from{' '}
              <a
                href="https://www.youtube.com/@eclassroom2014"
                target="_blank"
                rel="noreferrer"
                className="text-red-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>@eclassroom2014</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
            <div className="w-16 h-1 bg-amber-600 mt-3 rounded-full" />
          </div>

          {/* Tab Switcher & Channel Direct Link */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://www.youtube.com/@eclassroom2014"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe @eclassroom2014</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>

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
                <span>eClassroom Videos ({VIDEO_LECTURES.length})</span>
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
                <span>Podcast Series</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Lectures Grid */}
        {activeMediaTab === 'video' && (
          <div className="space-y-6">
            {/* Filter & Search Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-2xs flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="w-full md:w-80 relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={videoSearchQuery}
                  onChange={(e) => setVideoSearchQuery(e.target.value)}
                  placeholder="Search lectures by title or topic..."
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                />
                {videoSearchQuery && (
                  <button
                    onClick={() => setVideoSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0">Topic:</span>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
                >
                  <option value="all">All Topics ({VIDEO_LECTURES.length})</option>
                  {topics
                    .filter((t) => t !== 'all')
                    .map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                </select>
                <span className="text-xs text-stone-500 shrink-0 font-medium">
                  {filteredVideos.length} lectures shown
                </span>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => {
                const youtubeUrl = video.youtubeId
                  ? `https://www.youtube.com/watch?v=${video.youtubeId}`
                  : 'https://www.youtube.com/@eclassroom2014';
                const thumbnailUrl = video.youtubeId
                  ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
                  : null;

                return (
                  <div
                    key={video.id}
                    className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Video Thumbnail Canvas */}
                      <div className="relative aspect-video bg-stone-950 flex items-center justify-center overflow-hidden">
                        {thumbnailUrl ? (
                          <img
                            src={thumbnailUrl}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900 to-stone-800 flex items-center justify-center p-4 text-center">
                            <span className="text-white text-xs font-serif font-bold">{video.title}</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                        
                        {/* Topic Label */}
                        <span className="absolute top-3 left-3 z-10 text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/90 text-stone-950 shadow-xs">
                          {video.topic}
                        </span>

                        {/* Duration & Views */}
                        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 text-[10px] font-mono font-medium">
                          {video.views && (
                            <span className="px-1.5 py-0.5 rounded bg-black/75 text-stone-300 backdrop-blur-xs">
                              {video.views}
                            </span>
                          )}
                          <span className="px-1.5 py-0.5 rounded bg-black/85 text-white flex items-center gap-1 backdrop-blur-xs">
                            <Clock className="w-3 h-3 text-stone-400" />
                            {video.duration}
                          </span>
                        </div>

                        {/* Play Action */}
                        <button
                          onClick={() => setSelectedVideo(video)}
                          className="absolute z-20 w-12 h-12 rounded-full bg-red-600/90 hover:bg-red-600 group-hover:scale-110 text-white flex items-center justify-center shadow-xl transition-all"
                          aria-label={`Play lecture: ${video.title}`}
                        >
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </button>
                      </div>

                      {/* Video Info */}
                      <div className="p-5 space-y-2">
                        <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-red-700 transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          {video.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 bg-stone-50/50">
                      <span className="font-medium text-stone-700">eClassroom Channel</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedVideo(video)}
                          className="text-red-700 font-semibold hover:underline flex items-center gap-1"
                        >
                          <span>Watch</span>
                          <Play className="w-3 h-3 fill-red-700" />
                        </button>
                        <span>•</span>
                        <a
                          href={youtubeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1"
                          title="Open on YouTube"
                        >
                          <span>YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredVideos.length === 0 && (
              <div className="py-12 text-center bg-white rounded-2xl border border-stone-200">
                <p className="text-sm text-stone-500">
                  No video lectures match your search &ldquo;<strong>{videoSearchQuery}</strong>&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setVideoSearchQuery('');
                    setSelectedTopic('all');
                  }}
                  className="mt-3 px-3 py-1.5 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* eClassroom Banner Callout */}
            <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-stone-800">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-red-400 text-xs font-semibold">
                  <Youtube className="w-4 h-4" />
                  <span>Official YouTube Channel — @eclassroom2014</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Join the eClassroom Learning Community
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 max-w-xl">
                  Lectures on Indian Economics, Dr. B.R. Ambedkar&apos;s Economic Philosophy, GST, UPI Digital Inclusion, and Higher Education Policy by Dr. Rakshit Bagde.
                </p>
              </div>

              <a
                href="https://www.youtube.com/@eclassroom2014"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-red-600 hover:bg-red-500 text-white flex items-center gap-2 shadow-lg transition-all shrink-0"
              >
                <span>Visit @eclassroom2014</span>
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

                    <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500">
                      <div className="flex items-center gap-1.5">
                        <span>Available on:</span>
                        <div className="flex items-center gap-1.5">
                          {ep.listenPlatforms.map((plat) => (
                            <span key={plat} className="px-2 py-0.5 bg-stone-100 rounded text-[11px] text-stone-700">
                              {plat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={PROFILE_DATA.socialLinks.podcast}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                        title="Open on Spotify"
                      >
                        <span>Listen on Spotify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Podcast Banner */}
            <div className="bg-gradient-to-br from-emerald-950 via-stone-950 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-emerald-900/60 shadow-lg">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 text-xs font-semibold tracking-wide">
                  <Headphones className="w-4 h-4" />
                  <span>Official Spotify Podcast Series</span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  &ldquo;Economics and Social Studies&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/80 max-w-xl leading-relaxed">
                  Stream weekly audio episodes on Spotify covering inflation dynamics, Union budget analysis, agrarian reforms, and Dr. B.R. Ambedkar&apos;s currency doctrines.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href={PROFILE_DATA.socialLinks.podcast}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-stone-950 flex items-center gap-2 shadow-lg transition-all hover:scale-105"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Open Spotify Show</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Video Details Modal with Embedded YouTube Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-5 sm:p-7 shadow-2xl border border-stone-200 space-y-4 max-h-[92vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                  {selectedVideo.topic}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 mt-2">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-stone-400 hover:text-stone-700 text-base font-bold p-1 shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Embedded YouTube Player or Channel Card */}
            {selectedVideo.youtubeId ? (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            ) : (
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
                  href="https://www.youtube.com/@eclassroom2014"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow transition-all"
                >
                  <span>Open in YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-sans">
                Lecture Synopsis & Core Takeaways:
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200">
                {selectedVideo.summary}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={
                  selectedVideo.youtubeId
                    ? `https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`
                    : 'https://www.youtube.com/@eclassroom2014'
                }
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-700"
              >
                <Youtube className="w-4 h-4" />
                <span>Open in YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setSelectedVideo(null)}
                className="px-4 py-2 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
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
