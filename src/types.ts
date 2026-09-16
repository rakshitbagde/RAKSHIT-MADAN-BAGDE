export interface AcademicProfile {
  name: string;
  marathiName?: string;
  title: string;
  institution: string;
  department: string;
  location: string;
  email: string;
  phone?: string;
  experienceYears: number;
  booksCount: number;
  papersCount: number;
  goldMedalsCount: number;
  bioSummary: string;
  avatarUrl?: string;
  researchInterests: string[];
  socialLinks: {
    googleScholar?: string;
    orcid?: string;
    ssrn?: string;
    webOfScience?: string;
    halScience?: string;
    youtube?: string;
    quora?: string;
    podcast?: string;
    email: string;
  };
}

export type PublicationType = 'book' | 'paper' | 'edited_volume' | 'working_paper';

export interface Publication {
  id: string;
  title: string;
  type: PublicationType;
  year: number;
  authors: string[];
  venueOrPublisher: string;
  language: 'English' | 'Marathi' | 'Hindi';
  description?: string;
  doiOrIsbn?: string;
  link?: string;
  peerReviewed?: boolean;
  citationCount?: number;
  category: 'Agricultural Economics' | 'Ambedkar Thought' | 'Digital Economy & UPI' | 'Macroeconomics' | 'Education Policy' | 'Social Sciences';
}

export interface Course {
  id: string;
  code: string;
  title: string;
  level: 'Undergraduate (B.A.)' | 'Postgraduate (M.A.)' | 'Research';
  semester: string;
  description: string;
  syllabusHighlights: string[];
  recommendedReadings: string[];
}

export interface SlideDeck {
  id: string;
  title: string;
  courseOrTopic: string;
  date: string;
  totalSlides: number;
  description: string;
  slides: {
    slideNumber: number;
    title: string;
    subtitle?: string;
    bullets: string[];
    keyTakeaway?: string;
    diagramOrStat?: {
      label: string;
      value: string;
      context: string;
    };
  }[];
}

export interface VideoLecture {
  id: string;
  title: string;
  duration: string;
  channel: string;
  topic: string;
  views?: string;
  youtubeId?: string;
  summary: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  episodeNumber: number;
  duration: string;
  date: string;
  description: string;
  listenPlatforms: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  year: string;
  awardingBody: string;
  description: string;
  highlight?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  institution: string;
  description: string;
  iconType: 'degree' | 'award' | 'book' | 'appointment';
}
