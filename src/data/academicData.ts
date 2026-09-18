import {
  AcademicProfile,
  Publication,
  Course,
  SlideDeck,
  VideoLecture,
  PodcastEpisode,
  AwardItem,
  Milestone,
} from '../types';

export const PROFILE_DATA: AcademicProfile = {
  name: 'Dr. Rakshit Madan Bagde',
  marathiName: 'डॉ. रक्षित मदन बागडे',
  title: 'Assistant Professor & Head, Department of Economics',
  institution: 'Late Mansaramji Padole Arts College',
  department: 'Department of Economics',
  location: 'Ganeshpur, Bhandara, Maharashtra, India - 441904',
  email: 'rakshitbagde@gmail.com',
  phone: '+91 94231 00000',
  experienceYears: 15,
  booksCount: 25,
  papersCount: 67,
  goldMedalsCount: 5,
  bioSummary:
    'Dr. Rakshit Madan Bagde is an acclaimed academician, researcher, and author serving as Assistant Professor and Head of the Department of Economics at Late Mansaramji Padole Arts College, Bhandara. A two-time UGC NET-JRF scholar and recipient of 5 University Gold Medals, his scholarship focuses on Agricultural Economics, Rural Development, Dr. B.R. Ambedkar\'s economic philosophy, and the grassroots impacts of digital payment systems and educational reforms in India.',
  avatarUrl: '/profile-photo.png',
  researchInterests: [
    'Agricultural & Agrarian Economics',
    'Dr. B.R. Ambedkar\'s Economic Philosophy',
    'Digital Financial Inclusion & UPI in Rural India',
    'Rural Development & Smallholder Economics',
    'National Education Policy (NEP 2020) Socio-Economic Dimensions',
    'Public Finance & Monetary Policy',
  ],
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=Xvz3xLQAAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0002-7507-0244',
    ssrn: 'https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4770534',
    webOfScience: 'https://www.webofscience.com/wos/author/record/drrakshitbage',
    halScience: 'https://hal.science/search/index/q/Rakshit+Bagde',
    youtube: 'https://www.youtube.com/@eclassroom2014',
    quora: 'https://www.quora.com/profile/Rakshit-Bagde',
    podcast: 'https://open.spotify.com/show/6DChtIK8p7hjvAWaSkzFkL?si=425ee21682644353',
    email: 'rakshitbagde@gmail.com',
  },
};

export const MILESTONES: Milestone[] = [
  {
    year: '2026',
    title: 'Research on UPI Adoption & Rural Development',
    institution: 'Munich Personal RePEc Archive / HAL Science',
    description:
      'Published landmark empirical study on digital payments and financial inclusion metrics across rural agricultural households in India.',
    iconType: 'book',
  },
  {
    year: '2020 – Present',
    title: 'Digital Pedagogy & eClassroom Channel',
    institution: 'Online Education Platform',
    description:
      'Created open educational lectures and the "Economics and Social Studies" podcast simplifying core macroeconomic theories for thousands of university students.',
    iconType: 'appointment',
  },
  {
    year: '2013',
    title: 'Awarded Ph.D. in Economics',
    institution: 'Rashtrasant Tukadoji Maharaj Nagpur University',
    description:
      'Doctoral dissertation on "Dr. Babasaheb Ambedkar\'s Economic Thoughts on Indian Agriculture in the Context of Globalization", evaluating agrarian land reform models.',
    iconType: 'degree',
  },
  {
    year: '2010',
    title: 'Appointed Head, Department of Economics',
    institution: 'Late Mansaramji Padole Arts College, Bhandara',
    description:
      'Leading undergraduate and postgraduate academic curricula, mentoring research scholars, and spearheading regional socio-economic field studies.',
    iconType: 'appointment',
  },
  {
    year: '2008 & 2009',
    title: 'Qualified UGC NET-JRF (Twice)',
    institution: 'University Grants Commission (UGC), New Delhi',
    description:
      'Achieved Junior Research Fellowship (JRF) and National Eligibility Test qualification in Economics, ranking in top percentile nationwide.',
    iconType: 'award',
  },
  {
    year: '2006',
    title: 'Awarded 5 University Gold Medals',
    institution: 'RTM Nagpur University',
    description:
      'Stood first in order of merit in Master of Arts (Dr. Ambedkar Thought), honored with 5 prestigious Gold Medals at the annual university convocation.',
    iconType: 'award',
  },
  {
    year: '2004',
    title: 'Completed M.A. in Economics & M.Phil.',
    institution: 'RTM Nagpur University & YCMOU Nashik',
    description:
      'Graduated with distinction with advanced coursework in microeconomics, macroeconomics, public finance, and development theories.',
    iconType: 'degree',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    "id": "scholar-1",
    "title": "Digital Payments, Financial Inclusion and Rural Development in India: Evidence from UPI Adoption",
    "type": "paper",
    "year": 2026,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Financial Inclusion and Rural Development in India: Evidence from UPI …, 2026",
    "language": "English",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:5Ul4iDaHHb8C",
    "description": "Scholarly work published in Financial Inclusion and Rural Development in India: Evidence from UPI …, 2026.",
    "citationCount": 0
  },
  {
    "id": "scholar-2",
    "title": "An Evaluation of Dr. Ambedkar’s Economic Thought on Agriculture in the context of Globalization",
    "type": "paper",
    "year": 2012,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Ambedkar’s Economic Thought on Agriculture in the context of Globalization …, 2012",
    "language": "English",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:TQgYirikUcIC",
    "description": "Scholarly work published in Ambedkar’s Economic Thought on Agriculture in the context of Globalization …, 2012.",
    "citationCount": 0
  },
  {
    "id": "scholar-3",
    "title": "Indian Constitution and Sustainable Economic Development: A Doctrinal and Jurisprudential Analysis",
    "type": "book",
    "year": 2026,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Journal of Systems Engineering and Electronics (ISSN NO: 1671-1793) Volume 36, 2026",
    "language": "English",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:8AbLer7MMksC",
    "description": "Scholarly work published in Journal of Systems Engineering and Electronics (ISSN NO: 1671-1793) Volume 36, 2026.",
    "citationCount": 0
  },
  {
    "id": "scholar-4",
    "title": "आर्थिक असमानता, वर्ग संघर्ष आणि संकट प्रतिसाद",
    "type": "paper",
    "year": 2026,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Understanding Global Crisis: Interdisciplinary Perspectives, 2026",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:geHnlv5EZngC",
    "description": "Scholarly work published in Understanding Global Crisis: Interdisciplinary Perspectives, 2026.",
    "citationCount": 0
  },
  {
    "id": "scholar-5",
    "title": "Education-Employment Gap: Economic Challenges for Society under the National Education Policy 2020.",
    "type": "paper",
    "year": 2025,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "National Education Policy from the Perspective of Bahujans: 2020 14, 2025",
    "language": "English",
    "category": "Education Policy",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:sSrBHYA8nusC",
    "description": "Scholarly work published in National Education Policy from the Perspective of Bahujans: 2020 14, 2025.",
    "citationCount": 0
  },
  {
    "id": "scholar-6",
    "title": "वित्तीय समावेशन और डिजिटल अर्थव्यवस्था: भारत कि अर्थव्यवस्था पर प्रभा",
    "type": "paper",
    "year": 2025,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF Preprints, 2025",
    "language": "Hindi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:LPZeul_q3PIC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-7",
    "title": "गिग अर्थव्यवस्थेचा भारतीय अर्थव्यवस्थेवरील प्रभाव आणि परिणाम",
    "type": "paper",
    "year": 2025,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Shikshan Sanshodhan: Journal of Arts, Humanities and Social Sciences 8 (2), 2025",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:vRqMK49ujn8C",
    "description": "Scholarly work published in Shikshan Sanshodhan: Journal of Arts, Humanities and Social Sciences 8 (2), 2025.",
    "citationCount": 0
  },
  {
    "id": "scholar-8",
    "title": "वित्तीय समावेशन और डिजिटल अर्थव्यवस्था: भारत कि अर्थव्यवस्था पर प्रभाव",
    "type": "paper",
    "year": 2025,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 5335946, 2025",
    "language": "Hindi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:4fKUyHm3Qg0C",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 5335946, 2025).",
    "citationCount": 0
  },
  {
    "id": "scholar-9",
    "title": "क्रिप्टोकरन्सी आणि भारताच्या चलनविषयक धोरणाचे भविष्य",
    "type": "paper",
    "year": 2025,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "RESEARCH NEBULA, 2025",
    "language": "Marathi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:08ZZubdj9fEC",
    "description": "Scholarly work published in RESEARCH NEBULA, 2025.",
    "citationCount": 0
  },
  {
    "id": "scholar-10",
    "title": "भारतातील दलितांचे आर्थिक विश्लेषण (An Economic Analysis of Dalits in India)",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Mukt Shabd Journal 12, 2023",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:u_35RYKgDlwC",
    "description": "Scholarly work published in Mukt Shabd Journal 12, 2023.",
    "citationCount": 0
  },
  {
    "id": "scholar-11",
    "title": "भारतातील दलितांचे आर्थिक विश्लेषण",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2023",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:HoB7MX3m0LUC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-12",
    "title": "भारतातील दारिद्याची मीमांसा (the Concept of Poverty in India)",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4541249, 2023",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:dfsIfKJdRG4C",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4541249, 2023).",
    "citationCount": 0
  },
  {
    "id": "scholar-13",
    "title": "भारतातील दारिद्याची मीमांसा",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2023",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:fPk4N6BV_jEC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-14",
    "title": "Economics Philosophy of Dr. Ambedkar",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "&lt; bound method Organization. get_name_with_acronym of&lt; Organization: hprints …, 2023",
    "language": "English",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:bFI3QPDXJZMC",
    "description": "Scholarly work published in &lt; bound method Organization. get_name_with_acronym of&lt; Organization: hprints …, 2023.",
    "citationCount": 0
  },
  {
    "id": "scholar-15",
    "title": "डॉ. आंबेडकरांचे अर्थचिंतन (Economics Philosophy of Dr. Ambedkar)",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4422157, 2023",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:O3NaXMp0MMsC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4422157, 2023).",
    "citationCount": 0
  },
  {
    "id": "scholar-16",
    "title": "डॉ. आंबेडकरांचे अर्थचिंतन",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2023",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:GnPB-g6toBAC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-17",
    "title": "भारतातील औषध उद्योग आणि त्यांचे अर्थशास्त्र",
    "type": "paper",
    "year": 2023,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2023",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:ZHo1McVdvXMC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-18",
    "title": "ई रुपी आणि अर्थकारण (e-RUPI and Economics)",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Tumbe Group of International Journals 5, 57-60, 2022",
    "language": "Marathi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:vV6vV6tmYwMC",
    "description": "Scholarly work published in Tumbe Group of International Journals 5, 57-60, 2022.",
    "citationCount": 0
  },
  {
    "id": "scholar-19",
    "title": "वस्तू आणि सेवा कर: सामान्य भारतीय (Goods and Services Tax: Common Indian)",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4316062, 2022",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:ns9cj8rnVeAC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4316062, 2022).",
    "citationCount": 0
  },
  {
    "id": "scholar-20",
    "title": "ई रुपी आणि अर्थकारण",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2022",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&citation_for_view=Xvz3xLQAAAAJ:YFjsv_pBGBYC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-21",
    "title": "भारतीय संविधानातील आर्थिक तरतुदी (Financial Provisions in the Constitution of India)",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4304076, 2022",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:g5m5HwL7SMYC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4304076, 2022).",
    "citationCount": 0
  },
  {
    "id": "scholar-22",
    "title": "भारतीय संविधानातील आर्थिक तरतुदी",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF Preprints, 2022",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:NMxIlDl6LWMC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-23",
    "title": "ई-लर्निंग एक अध्ययन (A Study on E-Learning Interpretation)",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Tumbe Group of International Journals 5 (2), 2022",
    "language": "Marathi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:hMod-77fHWUC",
    "description": "Scholarly work published in Tumbe Group of International Journals 5 (2), 2022.",
    "citationCount": 0
  },
  {
    "id": "scholar-24",
    "title": "आभासी चलन आणि भारतीय अर्थव्यवस्था (Virtual Currency (Crypto Currency) and the Indian Economy)",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4099545, 2022",
    "language": "Marathi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:2P1L_qKh6hAC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4099545, 2022).",
    "citationCount": 0
  },
  {
    "id": "scholar-25",
    "title": "आभासी चलन आणि भारतीय अर्थव्यवस्था",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2022",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:blknAaTinKkC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-26",
    "title": "डिजिटल चलने आणि पैशाचे भविष्य",
    "type": "paper",
    "year": 2022,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2022",
    "language": "Marathi",
    "category": "Digital Economy & UPI",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:3s1wT3WcHBgC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-27",
    "title": "नवीन कृषी धोरण आणि भारतीय शेतकरी (New Agricultural Policy and Indian Farmers)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4012650, 2021",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:M05iB0D1s5AC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4012650, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-28",
    "title": "नवीन कृषी धोरण आणि भारतीय शेतकरी",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2021",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:maZDTaKrznsC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-29",
    "title": "डॉ. आंबेडकर आणि मुक्त अर्थव्यवस्था (Dr. Ambedkar and the Free Economy)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3963918, 2021",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:RGFaLdJalmkC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3963918, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-30",
    "title": "डॉ. आंबेडकर आणि मुक्त अर्थव्यवस्था",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2021",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:bEWYMUwI8FkC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-31",
    "title": "Thoughts on the Economic life of the Tathagata Buddha",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Group of International Journal 4 (3), 2021",
    "language": "English",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:isC4tDSrTZIC",
    "description": "Scholarly work published in Group of International Journal 4 (3), 2021.",
    "citationCount": 0
  },
  {
    "id": "scholar-32",
    "title": "बुद्ध ते डॉ. आंबेडकर-एक अर्थचिंतन",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Google Scholar Indexed Academic Record",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:IWHjjKOFINEC",
    "description": "",
    "citationCount": 0
  },
  {
    "id": "scholar-33",
    "title": "Human Development and Government Policy",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Google Scholar Indexed Academic Record",
    "language": "English",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:ZeXyd9-uunAC",
    "description": "",
    "citationCount": 0
  },
  {
    "id": "scholar-34",
    "title": "भारतीय अर्थव्यवस्थेची वाटचाल-एक अध्ययन (2014 ते 2020)(The Path of the Indian Economy-A Study (2014 to 2020))",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 4012647, 2021",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:M3NEmzRMIkIC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 4012647, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-35",
    "title": "Covid 19 Effects on Indian Economy",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "&lt; bound method Organization. get_name_with_acronym of&lt; Organization: hprints …, 2021",
    "language": "English",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:f2IySw72cVMC",
    "description": "Scholarly work published in &lt; bound method Organization. get_name_with_acronym of&lt; Organization: hprints …, 2021.",
    "citationCount": 0
  },
  {
    "id": "scholar-36",
    "title": "कोविड १९ चा भारतीय अर्थव्यवस्थेवर परिणाम",
    "type": "paper",
    "year": 2021,
    "authors": [
      "D BAGDE"
    ],
    "venueOrPublisher": "Available at SSRN 3911125, 2021",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:qUcmZB5y_30C",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3911125, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-37",
    "title": "कोविड 19 चा भारतीय अर्थव्यवस्थेवर परिणाम",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2021",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:L8Ckcad2t8MC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-38",
    "title": "बौद्धिक संपदा अधिकार: औषधी आणि कृषी (Intellectual Property Rights: Medicines & Agriculture)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901783, 2021",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:pqnbT2bcN3wC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901783, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-39",
    "title": "बुद्ध ते डॉ. आंबेडकर: अर्थचिंतन (Buddha to Dr. Ambedkar: Arthachintan)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901772, 2021",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:ldfaerwXgEUC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901772, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-40",
    "title": "मानवी विकास आणि सरकारी धोरण (Human Development and Government Policy)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901792, 2021",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:70eg2SAEIzsC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901792, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-41",
    "title": "जागतिकीकरण आणि दलित समाज (Globalization and Dalit Society)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901758, 2021",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:35N4QoGY0k4C",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901758, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-42",
    "title": "लिंग आधारीत बजेट आणि वास्तवीकता (Gender-based Budgeting and Realism)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901816, 2021",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:RYcK_YlVTxYC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901816, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-43",
    "title": "WTO आणि ग्रामीण विकासात कृषी (Agriculture in the WTO and Rural Development)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901752, 2021",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:J_g5lzvAfSwC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901752, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-44",
    "title": "राज्यसमाजवाद आणि कल्याणकारी राज्य (State Socialism and Welfare State)",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3901813, 2021",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:NaGl4SEjCO4C",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3901813, 2021).",
    "citationCount": 0
  },
  {
    "id": "scholar-45",
    "title": "भारतातील दुग्धव्यवसाय: विकास आणि आव्हानाचे मूल्यांकन",
    "type": "paper",
    "year": 2020,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2020",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:SeFeTyx0c_EC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-46",
    "title": "जागतिकीकरण आणि भारतीय गरिबी (Globalization and Indian Poverty)",
    "type": "paper",
    "year": 2020,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "शास्वत आणि सर्व समावेशक जागतिकीकरण, Department of Economics, RTM …, 2020",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:lSLTfruPkqcC",
    "description": "Scholarly work published in शास्वत आणि सर्व समावेशक जागतिकीकरण, Department of Economics, RTM …, 2020.",
    "citationCount": 0
  },
  {
    "id": "scholar-47",
    "title": "मुक्त आर्थिक धोरणविषयक  डॉ आंबेडकरांचे तत्वज्ञान",
    "type": "paper",
    "year": 2020,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/38517424/Free_Economic_Policy_And_Dr_Ambedkar_pdf, 2020",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:W7OEmFMy1HYC",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-48",
    "title": "डॉ आंबेडकरांच्या आर्थिक चिंतनावर बुद्ध तत्वज्ञानाचा प्रभाव",
    "type": "paper",
    "year": 2020,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/38517430 …, 2020",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:Y0pCki6q_DkC",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-49",
    "title": "जागतिकीकरण आणि भारतीय गरिबी",
    "type": "paper",
    "year": 2020,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/42056660/Globalization_and_Indian_poverty 1 (1), 2020",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:IjCSPb-OGe4C",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-50",
    "title": "मुक्त आर्थिक धोरण आणि डॉ. आंबेडकरांचे तत्वज्ञान",
    "type": "paper",
    "year": 2019,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2019",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:RHpTSmoSYBkC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-51",
    "title": "भारत मे बेरोजगारो का मेला",
    "type": "paper",
    "year": 2019,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "MPRA Paper, 2019",
    "language": "Hindi",
    "category": "Education Policy",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:YOwf2qJgpHMC",
    "description": "Archived in Munich Personal RePEc Archive (MPRA), Ludwig Maximilian University of Munich.",
    "citationCount": 0
  },
  {
    "id": "scholar-52",
    "title": "भारत मे किसान आत्महत्याये",
    "type": "paper",
    "year": 2019,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Gurukul Journal, 2019",
    "language": "Hindi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:hqOjcs7Dif8C",
    "description": "Scholarly work published in Gurukul Journal, 2019.",
    "citationCount": 0
  },
  {
    "id": "scholar-53",
    "title": "जागतिकीकरण आणि  डॉ आंबेडकरांचे शेतीविषयक तत्वज्ञान",
    "type": "paper",
    "year": 2019,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/38517393/Globlaization_And_Dr_Ambedkar_Agriculture_pdf, 2019",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:YsMSGLbcyi4C",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-54",
    "title": "लिंगआधारीत बजेट आणि वास्तवीकता",
    "type": "paper",
    "year": 2017,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "OSF, 2017",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:yD5IFk8b50cC",
    "description": "Open Science Framework (OSF) pre-print and scholarly archive.",
    "citationCount": 0
  },
  {
    "id": "scholar-55",
    "title": "डॉ. आंबेडकरांचे शेतीविषयक विचार (Dr. Ambedkar's Thoughts on Agriculture)",
    "type": "paper",
    "year": 2017,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Available at SSRN 3895120, 2017",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:cFHS6HbyZ2cC",
    "description": "Indexed on SSRN / Elsevier Research Network (Available at SSRN 3895120, 2017).",
    "citationCount": 0
  },
  {
    "id": "scholar-56",
    "title": "जागतिकीकरणाच्या संदर्भात डॉ आंबेडकरांच्या भारतीय शेतीविषयक आर्थिक विचारांचे मूल्यमापन",
    "type": "paper",
    "year": 2012,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/15024414/Cover, 2012",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:0EnyYjriUFMC",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-57",
    "title": "WTO vkf. k xzkeh. k fodklkr d’kh",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "Google Scholar Indexed Academic Record",
    "language": "English",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:D03iK_w7-QYC",
    "description": "",
    "citationCount": 0
  },
  {
    "id": "scholar-58",
    "title": "जागतिकीकरण आणि दलित समाज",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:8k81kl-MbHgC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-59",
    "title": "डॉ. आंबेडकरांचे शेतीविषयक विचार",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:5nxA0vEk-isC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-60",
    "title": "मानवी विकास  आणि सरकारी धोरण",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:UebtZRa9Y70C",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-61",
    "title": "राज्य समाजवाद आणि कल्याणकारी राज्य",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Social Sciences",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:Se3iqnhoufwC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-62",
    "title": "आर्थिक विकासात विदेशी प्रत्यक्ष गुंतवणुकीची भूमिका",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/13965422/FDI, 0",
    "language": "Marathi",
    "category": "Macroeconomics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:roLk4NBRz8UC",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  },
  {
    "id": "scholar-63",
    "title": "बुद्ध ते आंबेडकर - अर्थचिंतन",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:LkGwnXOMwfcC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-64",
    "title": "WTO  आणि ग्रामीण विकासात कृषी",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:_FxGoFyzp5QC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-65",
    "title": "आधुनिक भारतातील जातीवर आधारित आर्थिक विषमता",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/109073/1/MPRA_paper_109073.pdf, 0",
    "language": "Marathi",
    "category": "Ambedkar Thought",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:ufrVoPGSRksC",
    "description": "Archived in Munich Personal RePEc Archive (MPRA), Ludwig Maximilian University of Munich.",
    "citationCount": 0
  },
  {
    "id": "scholar-66",
    "title": "बौद्धिक संपदा अधिकार:औषधी आणि कृषी",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:WF5omc3nYNoC",
    "description": "Scholarly work published in https://mpra.ub.uni-muenchen.de/cgi/users/home?screen=EPrint%3A%3AView …, 0.",
    "citationCount": 0
  },
  {
    "id": "scholar-67",
    "title": "राज्यसमाजवाद आणि  डॉ आंबेडकरांचे शेतीविषयक तत्वज्ञान",
    "type": "paper",
    "year": 2021,
    "authors": [
      "Dr. Rakshit Madan Bagde"
    ],
    "venueOrPublisher": "https://www.academia.edu/13965482/State_Socialism_and_Dr_Ambedkar, 0",
    "language": "Marathi",
    "category": "Agricultural Economics",
    "peerReviewed": true,
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Xvz3xLQAAAAJ&cstart=20&pagesize=100&citation_for_view=Xvz3xLQAAAAJ:eQOLeE2rZwMC",
    "description": "Academic research repository paper and working monograph.",
    "citationCount": 0
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    code: 'ECO-301',
    title: 'Agricultural Economics & Agrarian Reforms',
    level: 'Undergraduate (B.A.)',
    semester: 'Semester V',
    description:
      'An in-depth study of agriculture\'s structural role in national income, farm management principles, pricing policies, green revolution legacy, and modern agro-processing supply chains.',
    syllabusHighlights: [
      'Theories of Agricultural Development (Schultz, Lewis, Mellor)',
      'Agrarian Land Tenures & Post-Independence Land Reforms',
      'Agricultural Price Policy, CACP & Minimum Support Prices (MSP)',
      'Rural Credit: NABARD, Commercial Banks, RRBs & Microfinance',
      'Climate Change, Sustainable Farming & Water Economics in Maharashtra',
    ],
    recommendedReadings: [
      'Dr. Rakshit Bagde — Agricultural Economics and Rural Development (2022)',
      'Sadhu & Singh — Fundamentals of Agricultural Economics',
      'Bilgrami, S.A.R. — An Introduction to Agricultural Economics',
    ],
  },
  {
    id: 'course-2',
    code: 'ECO-402',
    title: 'Macroeconomic Analysis & Monetary Policy',
    level: 'Postgraduate (M.A.)',
    semester: 'Semester II',
    description:
      'Advanced theoretical and applied macroeconomics covering national income accounting, Keynesian vs Classical debates, IS-LM framework, inflation-unemployment trade-offs, and central bank tools.',
    syllabusHighlights: [
      'National Income Accounting: Real vs Nominal GDP & Green GDP',
      'Classical & Keynesian Systems of Income and Employment Determination',
      'Consumption & Investment Functions (Life-Cycle, Permanent Income)',
      'RBI Monetary Policy Framework & Flexible Inflation Targeting',
      'Open Economy Macroeconomics, Balance of Payments & Exchange Rates',
    ],
    recommendedReadings: [
      'N. Gregory Mankiw — Macroeconomics',
      'H.L. Ahuja — Macroeconomics: Theory and Policy',
      'Dr. Rakshit Bagde — Indian Economy: Contemporary Challenges (2020)',
    ],
  },
  {
    id: 'course-3',
    code: 'ECO-102',
    title: 'Indian Economic Policy & Structural Reforms',
    level: 'Undergraduate (B.A.)',
    semester: 'Semester II',
    description:
      'Examines the trajectory of the Indian economy from planning era socialism to 1991 liberalization, privatization, globalization (LPG), and contemporary 21st-century digital transformations.',
    syllabusHighlights: [
      'Pre-Independence Economic Backdrop & Drain Theory',
      'Five-Year Plans to NITI Aayog: Planning Mechanism Evolutions',
      'The 1991 Economic Crisis, IMF Bailout & Structural Adjustment Reforms',
      'Poverty, Inequality & Demographic Dividend Potentials',
      'Digital Economy: UPI, Digital India & Financial Inclusion Architecture',
    ],
    recommendedReadings: [
      'Uma Kapila — Indian Economy: Performance and Policies',
      'Datt & Sundharam — Indian Economy (Gaurav Datt & Ashwani Mahajan)',
      'Government of India — Annual Economic Survey',
    ],
  },
  {
    id: 'course-4',
    code: 'ECO-501',
    title: 'Research Methodology in Social Sciences',
    level: 'Postgraduate (M.A.)',
    semester: 'Semester III',
    description:
      'Foundational research training guiding postgraduate students through scientific inquiry, sampling methodologies, primary questionnaire design, hypothesis testing, and academic writing ethics.',
    syllabusHighlights: [
      'Scientific Method & Formulation of Research Problems',
      'Qualitative vs Quantitative Methodologies in Economics',
      'Sampling Techniques: Probability & Non-Probability Sampling',
      'Data Collection: Primary Field Surveys vs Secondary Datasets (NSSO, Census)',
      'Statistical Analysis, Correlation, Regression & Research Ethics',
    ],
    recommendedReadings: [
      'C.R. Kothari — Research Methodology: Methods and Techniques',
      'W. Lawrence Neuman — Social Research Methods',
    ],
  },
];

export const SLIDE_DECKS: SlideDeck[] = [
  {
    id: 'deck-upi',
    title: 'Digital Payments, UPI & Rural Financial Inclusion in India',
    courseOrTopic: 'Applied Economics & Development Policy (2026)',
    date: 'February 2026',
    totalSlides: 6,
    description:
      'Comprehensive lecture presentation on how Unified Payments Interface (UPI) micro-transactions penetrate rural agricultural belts, reducing cash drag, fostering formal credit histories, and empowering marginal farmers.',
    slides: [
      {
        slideNumber: 1,
        title: 'Digital Payments & Grassroots Financial Inclusion',
        subtitle: 'Evidence from Unified Payments Interface (UPI) Adoption in Rural India',
        bullets: [
          'Presenter: Dr. Rakshit Madan Bagde, Head of Economics, Late Mansaramji Padole Arts College',
          'Research Context: Rural households transitioning from informal money-lending to formal digital liquidity',
          'Core Research Question: Does smartphone-based micropayment lower transaction costs for marginal farming households?',
          'Key Scope: Empirical field evidence across Vidarbha agricultural clusters and rural weekly haats (mandis)',
        ],
        keyTakeaway:
          'UPI adoption marks an unprecedented democratization of retail liquidity, bringing non-formal rural transactions into measurable financial velocity.',
      },
      {
        slideNumber: 2,
        title: 'The JAM Trinity Architecture: Bedrock of Digital Inclusion',
        subtitle: 'Jan Dhan Accounts + Aadhaar Biometrics + Mobile Connectivity',
        bullets: [
          'Pradhan Mantri Jan Dhan Yojana (PMJDY): 500M+ zero-balance bank accounts established nationwide',
          'Direct Benefit Transfer (DBT): Elimination of ghost beneficiaries in PM-KISAN, MGNREGA, and fertilizer subsidies',
          'Interoperable QR Code Infrastructure: Zero merchant discount rate (MDR) incentivizing small vendor adoption',
          'Offline UPI Lite (UPI 123PAY): Bridging the smartphone divide for feature phone owners in remote hamlets',
        ],
        diagramOrStat: {
          label: 'Rural UPI Volume Growth (2021-2026)',
          value: '310% CAGR',
          context: 'Exponential surge in peer-to-merchant (P2M) groceries, fertilizer, and agricultural input purchases',
        },
        keyTakeaway:
          'Digital architecture created zero-friction monetary rails, circumventing traditional physical bank branch deficits.',
      },
      {
        slideNumber: 3,
        title: 'Field Survey Findings: Marginal Farmers & Transaction Costs',
        subtitle: 'Survey of 650 Agricultural Households in Eastern Maharashtra',
        bullets: [
          'Elimination of Travelling Costs: Prior to digital payments, farmers spent an average of ₹120 and 4 hours visiting taluka branch ATMs',
          'Payment Speed for Farm Produce: Mandi commission agents transferring direct sale proceeds without delay',
          'Informal Credit Ledger Replacement: Shopkeepers using digital payment logs to extend short-term zero-interest credit',
          'Women Empowerment: 64% of surveyed rural women reported higher autonomy over household emergency funds',
        ],
        diagramOrStat: {
          label: 'Average Travel Time Saved',
          value: '3.8 Hours / Wk',
          context: 'Time previously lost travelling to physical branches repurposed toward farm management and livestock upkeep',
        },
        keyTakeaway:
          'Time and fee savings directly translate to higher disposable income for families living on seasonal crop cycles.',
      },
      {
        slideNumber: 4,
        title: 'Critical Bottlenecks: Cyber Frauds, Connectivity & Digital Illiteracy',
        subtitle: 'Vulnerabilities Identified in Rural Grassroots Implementation',
        bullets: [
          'Telecom Blind Spots: Patchy 4G connectivity in forest-fringe and remote villages causing transaction timeouts',
          'Social Engineering Frauds: Deceptive QR scan requests targeting first-time digital users unaccustomed to PIN rules',
          'Cash-Out Dependency: Local weekly agricultural laborers still demand physical currency on Saturday markets',
          'Bank Server Latency: Peak harvest seasons overwhelm rural cooperative bank core banking servers',
        ],
        keyTakeaway:
          'Technology alone is insufficient without dedicated vernacular financial literacy drives and resilient rural telecom infrastructure.',
      },
      {
        slideNumber: 5,
        title: 'Policy Recommendations for Sustainable Rural FinTech',
        subtitle: 'Actionable Frameworks for RBI, NABARD, and State Governments',
        bullets: [
          'Expansion of Bank Mitra / Business Correspondents with biometric micro-ATMs in every Gram Panchayat',
          'Integration of Soil Health & Crop Insurance payouts directly triggered through verified UPI smart contracts',
          'Institutional Credit Scoring: Using verifiable UPI transaction trails to underwrite collateral-free KCC loans',
          'Local Vernacular Audio Voice Prompts: Multi-lingual voice assistance for illiterate elder farmers',
        ],
        keyTakeaway:
          'Transforming digital payment transaction logs into credit-worthiness signals will unlock formal bank lending for landless farmers.',
      },
      {
        slideNumber: 6,
        title: 'Conclusions & Academic References',
        subtitle: 'Path Forward for Rural Economic Transformation',
        bullets: [
          'Dr. Rakshit Bagde (2026) — "Digital Payments, Financial Inclusion and Rural Development in India", MPRA/HAL Science',
          'Reserve Bank of India — Annual Report on Currency and Finance & Digital Payments Index',
          'NITI Aayog (2025) — Report on Financial Inclusion at Grassroots',
          'Special thanks to the research fellows and students at Late Mansaramji Padole Arts College, Bhandara',
        ],
        keyTakeaway:
          'Contact: Dr. Rakshit Madan Bagde | Email: rakshitbagde@gmail.com | Bhandara, Maharashtra',
      },
    ],
  },
  {
    id: 'deck-ambedkar',
    title: 'Dr. B.R. Ambedkar’s Agrarian Economics & Land Holdings Analysis',
    courseOrTopic: 'Ambedkarite Economic Thought & Rural Philosophy',
    date: 'January 2025',
    totalSlides: 5,
    description:
      'Rigorous exploration of Dr. B.R. Ambedkar\'s classic economic contribution "Small Holdings in India and Their Remedies", addressing capital deficiency, land fragmentation, and industrialization.',
    slides: [
      {
        slideNumber: 1,
        title: 'Dr. B.R. Ambedkar: The Agrarian Economist',
        subtitle: 'Revisiting "Small Holdings in India and Their Remedies" (1918)',
        bullets: [
          'Speaker: Dr. Rakshit Madan Bagde (Ph.D. on Dr. Ambedkar\'s Agrarian Economic Thought)',
          'Historical Perspective: Published in Journal of the Indian Economic Society, Vol. 1, 1918',
          'Intellectual Foundation: Guided by Prof. Edwin R.A. Seligman at Columbia University',
          'Core Premise: Land is only one factor of production; optimal farm size depends on capital-labor proportionality',
        ],
        keyTakeaway:
          'Dr. Ambedkar was India\'s first economist to mathematically critique the definition of an economic holding based purely on surface land acreage.',
      },
      {
        slideNumber: 2,
        title: 'Critique of Pure Acreage-Based "Economic Holding"',
        subtitle: 'Proportionality of Productive Factors',
        bullets: [
          'Prevalent Colonial View: Keatinge & Mann defined economic holding solely by physical size (e.g., 20 acres)',
          'Ambedkar\'s Rebuttal: A large holding lacking capital, irrigation, and livestock is as economically barren as a tiny plot',
          'The Law of Proportionality: Production efficiency is achieved when land, labor, and capital are combined in optimal equilibrium',
          'Remedy Focus: Consolidation of holdings without capital infusion fails to solve disguised unemployment',
        ],
        diagramOrStat: {
          label: 'Ambedkar\'s Production Criterion',
          value: 'Output / Cost Min.',
          context: 'An economic holding is one where land-capital-labor ratios yield maximum net marginal product',
        },
        keyTakeaway:
          'Land consolidation alone is futile unless accompanied by state capital investment and agricultural machinery.',
      },
      {
        slideNumber: 3,
        title: 'Disguised Unemployment & Industrialization as Farm Remedy',
        subtitle: 'The Surplus Labor Problem',
        bullets: [
          'Surplus Agrarian Labor: Millions trapped on tiny fragmented plots producing near-zero marginal productivity',
          'Industrialization as Agrarian Cure: Manufacturing absorbs surplus rural labor, raising the land-to-man ratio in villages',
          'Capital Formation: State-led industrialization increases national savings and provides high-yield mechanical inputs for farming',
          'Preceded Arthur Lewis Model (1954): Ambedkar articulated this dual-sector labor transfer nearly 36 years earlier',
        ],
        keyTakeaway:
          'The true remedy for agricultural poverty lies outside agriculture: aggressive, state-supported industrialization.',
      },
      {
        slideNumber: 4,
        title: 'State Socialism & Collective Farming (States and Minorities, 1947)',
        subtitle: 'Constitutional Guarantees for Agriculture',
        bullets: [
          'Nationalization of Agricultural Land: Proposal to vest agricultural land in the state to eradicate caste feudalism',
          'Collective Cultivation: Land leased out to village collectives without distinction of caste or creed',
          'State Obligations: State provision of water, seeds, tractors, fertilizer, and agricultural insurance',
          'Equitable Distribution: Eliminating absentee landlordism and ensuring farm laborers become equal stakeholders',
        ],
        keyTakeaway:
          'Ambedkar advocated democratic state socialism as a constitutional safeguard against rural caste-feudal exploitation.',
      },
      {
        slideNumber: 5,
        title: 'Relevance to 21st-Century Indian Agriculture',
        subtitle: 'Lessons for Modern Agrarian Policy',
        bullets: [
          '86% of Indian farmers are small and marginal with average landholding under 1.08 hectares',
          'Farmer Producer Organizations (FPOs): Realizing Ambedkar\'s collective bargaining and economies of scale',
          'Public Investment Deficit: Need to reverse the decline in public capital expenditure in rural irrigation and storage',
          'Book Reference: Dr. Rakshit Bagde — "Dr. B.R. Ambedkar’s Agrarian Thought & Land Reform Economics" (2024)',
        ],
        keyTakeaway:
          'Modern agrarian distress validates Dr. Ambedkar\'s thesis: smallholder farming requires collective structures and state capital.',
      },
    ],
  },
  {
    id: 'deck-nep',
    title: 'National Education Policy 2020: Economic & Social Dimensions',
    courseOrTopic: 'Higher Education Policy & Human Capital Theory',
    date: 'November 2025',
    totalSlides: 5,
    description:
      'Critical scholarly analysis of NEP 2020 financing mechanisms, gross enrollment targets, vocationalization, and socio-economic equity for marginalized students.',
    slides: [
      {
        slideNumber: 1,
        title: 'National Education Policy 2020: An Economic Perspective',
        subtitle: 'Human Capital, Fiscal Commitments & Social Equity',
        bullets: [
          'Presenter: Dr. Rakshit Madan Bagde, Head of Economics',
          'Focus: Analyzing the economic underpinnings of India\'s largest higher education overhaul',
          'GER Target: Raising Higher Education Gross Enrollment Ratio from 27% to 50% by 2035',
          'Key Inquiry: Can public finance fulfill the 6% of GDP target set across successive policies?',
        ],
        keyTakeaway:
          'Education is the quintessential public good and driver of total factor productivity (TFP).',
      },
      {
        slideNumber: 2,
        title: 'Public Financing vs. 6% of GDP Ambition',
        subtitle: 'Budgetary Realities vs Policy Aspirations',
        bullets: [
          'Historical Benchmark: Kothari Commission (1966) first proposed 6% of GDP dedicated to education',
          'Current Reality: Combined central and state public expenditure hovers around 3.1% to 3.5% of GDP',
          'Fiscal Federalism Constraints: States bear approximately 70% of public education costs while facing deficit constraints',
          'Private Capital & Autonomy: Risk of escalating student fees and household educational debt burdens',
        ],
        diagramOrStat: {
          label: 'Current Public Spend',
          value: '3.2% of GDP',
          context: 'Substantial funding gap remains to reach the targeted 6% benchmark',
        },
        keyTakeaway:
          'Without binding statutory fiscal commitments, structural aspirations risk creating unfunded mandates for regional universities.',
      },
      {
        slideNumber: 3,
        title: 'Vocational Education & The Youth Employment Paradox',
        subtitle: 'Integration of Skills with Academic Streams',
        bullets: [
          'NEP Target: At least 50% of learners through the school and higher education system exposed to vocational education by 2025',
          'Labor Market Misalignment: Skills taught often lag behind industry technological cycles (automation, AI, green jobs)',
          'Social Stigma: Overcoming the traditional divide between intellectual degrees and manual vocational trades',
          'Rural College Infrastructure: Tier-3 colleges lack specialized laboratories, high-speed broadband, and industry tie-ups',
        ],
        keyTakeaway:
          'Vocationalization must be industry-grounded to avoid creating low-wage, dead-end employment loops for rural youth.',
      },
      {
        slideNumber: 4,
        title: 'Equity & Access for Bahujan and First-Generation Learners',
        subtitle: 'Findings from "National Education Policy from the Perspective of Bahujans" (2025)',
        bullets: [
          'Digital Divide: Remote online learning models disproportionately exclude rural students with intermittent electricity and single-device households',
          'Multiple Entry/Exit System: Potential for vulnerable students from low-income families to drop out with lower-tier certificates',
          'Affirmative Action in Research: Ensuring research fellowships (NFSC, NFOBC, MANF) receive guaranteed annual funding',
          'Language & Vernacular Mediums: Commendable policy focus on regional languages as medium of instruction in undergraduate stages',
        ],
        keyTakeaway:
          'Equitable access must not be subordinated to institutional ranking metrics; affirmative support systems remain vital.',
      },
      {
        slideNumber: 5,
        title: 'Policy Summary & Conclusion',
        subtitle: 'Strategic Priorities for Equitable Implementation',
        bullets: [
          'Statutory enactment of minimum education budget guarantees by Union and State governments',
          'Targeted grant-in-aid support for rural affiliated colleges to develop digital libraries and smart classrooms',
          'Stronger public-sector placement cells in rural universities to bridge the education-employment chasm',
          'Reference: Dr. Rakshit Bagde (2025/2026 publications on Higher Education and NEP challenges)',
        ],
        keyTakeaway:
          'Invest in students as productive human capital to actualize India\'s demographic dividend.',
      },
    ],
  },
];

export const VIDEO_LECTURES: VideoLecture[] = [
  {
    "id": "yt-zWTXV_rYOnM",
    "youtubeId": "zWTXV_rYOnM",
    "title": "भारतीय संविधान और सतत विकास",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Constitutional Economics",
    "views": "13 views • 2 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारतीय संविधान और सतत विकास\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-_MIHtRZfjfY",
    "youtubeId": "_MIHtRZfjfY",
    "title": "डिजिटल पेमेंट और ग्रामीण विकास [Digital payments and rural development]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Digital Inclusion & UPI",
    "views": "1 view • 2 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"डिजिटल पेमेंट और ग्रामीण विकास [Digital payments and rural development]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-cMSYXsLCC8w",
    "youtubeId": "cMSYXsLCC8w",
    "title": "भारत की राजकोषीय पहेली [Sixteenth Finance Commission (FC-16) Report]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Public Finance & Fiscal Policy",
    "views": "6 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत की राजकोषीय पहेली [Sixteenth Finance Commission (FC-16) Report]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-1y8gAb1f_WI",
    "youtubeId": "1y8gAb1f_WI",
    "title": "भारतीय केंद्रीय बजट 2026 27 [Indian Union Budget 2026-27]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Public Finance & Fiscal Policy",
    "views": "9 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारतीय केंद्रीय बजट 2026 27 [Indian Union Budget 2026-27]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-LtDTCuuUNzc",
    "youtubeId": "LtDTCuuUNzc",
    "title": "सूचना का अधिकार 2005 [Right to Information Act 2005]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Economics & Social Studies",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"सूचना का अधिकार 2005 [Right to Information Act 2005]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-_7C21ft857E",
    "youtubeId": "_7C21ft857E",
    "title": "शूद्र कौन थे? [Who were the Shudras?]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "2 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"शूद्र कौन थे? [Who were the Shudras?]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-UqG0QQz-Luo",
    "youtubeId": "UqG0QQz-Luo",
    "title": "रुपये की समस्या: एक विश्लेषण [The rupee problem: An analysis]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Indian Economy & Currency",
    "views": "5 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"रुपये की समस्या: एक विश्लेषण [The rupee problem: An analysis]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-ArsSVH8h5Zk",
    "youtubeId": "ArsSVH8h5Zk",
    "title": "भारत में जातियाँ: एक 1916 का सिद्धांत [Castes in India: A 1916 theory]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "2 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत में जातियाँ: एक 1916 का सिद्धांत [Castes in India: A 1916 theory]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-HyEF5ZxgLyA",
    "youtubeId": "HyEF5ZxgLyA",
    "title": "बुद्ध या कार्ल मार्क्स [Buddha or Karl Marx]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "3 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"बुद्ध या कार्ल मार्क्स [Buddha or Karl Marx]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-FW8cUr-wa1Q",
    "youtubeId": "FW8cUr-wa1Q",
    "title": "बुद्ध का त्याग  एक राजनीतिक विरोध [Buddha's renunciation was a political protest.]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"बुद्ध का त्याग  एक राजनीतिक विरोध [Buddha's renunciation was a political protest.]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-6zIzvcc9PK0",
    "youtubeId": "6zIzvcc9PK0",
    "title": "जाति का विनाश [Annihilation of caste]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"जाति का विनाश [Annihilation of caste]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-gCAO6kisc_M",
    "youtubeId": "gCAO6kisc_M",
    "title": "छोटे खेत, बड़ी समस्या [Small farms, big problems]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Agricultural Economics",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"छोटे खेत, बड़ी समस्या [Small farms, big problems]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-c0inccZcSpY",
    "youtubeId": "c0inccZcSpY",
    "title": "एक कंपनी का अंतिम बिल [A company's final bill]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Economics & Social Studies",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"एक कंपनी का अंतिम बिल [A company's final bill]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-JcoKU7cZyNM",
    "youtubeId": "JcoKU7cZyNM",
    "title": "डॉ. आंबेडकर का एक अलिखित संविधान [Dr. Ambedkar's unwritten constitution]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Constitutional Economics",
    "views": "2 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"डॉ. आंबेडकर का एक अलिखित संविधान [Dr. Ambedkar's unwritten constitution]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-mYweTa9ZtW4",
    "youtubeId": "mYweTa9ZtW4",
    "title": "भारत का आर्थिक दृष्टिकोण 2026 [India's Economic Outlook 2026]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Indian Economy & Currency",
    "views": "2 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत का आर्थिक दृष्टिकोण 2026 [India's Economic Outlook 2026]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-3R3ZBKFmmjA",
    "youtubeId": "3R3ZBKFmmjA",
    "title": "उच्च शिक्षा संस्थानों में समानता नियम, 2026 [Equality Regulations in HEI, 2026]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Constitutional Economics",
    "views": "16 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"उच्च शिक्षा संस्थानों में समानता नियम, 2026 [Equality Regulations in HEI, 2026]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-sgBEYQTS3wM",
    "youtubeId": "sgBEYQTS3wM",
    "title": "भारत का वैश्विक रिपोर्ट कार्ड [Global Report Card of India]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Economics & Social Studies",
    "views": "2 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत का वैश्विक रिपोर्ट कार्ड [Global Report Card of India]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-p3tu_qIQPwM",
    "youtubeId": "p3tu_qIQPwM",
    "title": "भारत में लिंग आधारित हिंसा [Gender Based Violence in India]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Economics & Social Studies",
    "views": "117 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत में लिंग आधारित हिंसा [Gender Based Violence in India]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-g0_OIAToyTc",
    "youtubeId": "g0_OIAToyTc",
    "title": "विकसित भारत 2047 [Developed India 2047]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Economics & Social Studies",
    "views": "6 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"विकसित भारत 2047 [Developed India 2047]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-XI4br3f9jaI",
    "youtubeId": "XI4br3f9jaI",
    "title": "इंडस्ट्री 5.0 [Industry 5 0]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Modern Industrial Trends",
    "views": "1 view • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"इंडस्ट्री 5.0 [Industry 5 0]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-rKH6QZwEMVY",
    "youtubeId": "rKH6QZwEMVY",
    "title": "भारतीय अर्थव्यवस्था [Indian Economy]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Indian Economy & Currency",
    "views": "10 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारतीय अर्थव्यवस्था [Indian Economy]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-ANVrX9hcucI",
    "youtubeId": "ANVrX9hcucI",
    "title": "वेब 3 [WEB 3]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Modern Industrial Trends",
    "views": "4 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"वेब 3 [WEB 3]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-_cLai_zUOB8",
    "youtubeId": "_cLai_zUOB8",
    "title": "जीएसटी 2.0 [GST 2.0]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Public Finance & Fiscal Policy",
    "views": "36 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"जीएसटी 2.0 [GST 2.0]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-t7wl24Ne-ac",
    "youtubeId": "t7wl24Ne-ac",
    "title": "जाती व्यवस्था [caste system]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "75 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"जाती व्यवस्था [caste system]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-KAG4_v1XYF8",
    "youtubeId": "KAG4_v1XYF8",
    "title": "अर्थशास्त्री डॉ. आंबेडकर [Economist Dr. Ambedkar]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Ambedkarite Economics & Philosophy",
    "views": "24 views • 7 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"अर्थशास्त्री डॉ. आंबेडकर [Economist Dr. Ambedkar]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-6p2fubwCHlA",
    "youtubeId": "6p2fubwCHlA",
    "title": "भारत का शिक्षा विरोधाभास [India's education paradox]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Higher Education & Policy",
    "views": "9 views • 8 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"भारत का शिक्षा विरोधाभास [India's education paradox]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-jYCsKYkuy58",
    "youtubeId": "jYCsKYkuy58",
    "title": "वित्तीय समावेशन से डिजिटल भारत [Financial inclusion through Digital India]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Digital Inclusion & UPI",
    "views": "12 views • 8 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"वित्तीय समावेशन से डिजिटल भारत [Financial inclusion through Digital India]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-O1MeGmd8zkw",
    "youtubeId": "O1MeGmd8zkw",
    "title": "जीएसटी: वादा बनाम हकीकत [GST: Promise versus reality]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Public Finance & Fiscal Policy",
    "views": "21 views • 8 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"जीएसटी: वादा बनाम हकीकत [GST: Promise versus reality]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-z0eBXvu0A24",
    "youtubeId": "z0eBXvu0A24",
    "title": "संविधान में आर्थिक प्रावधान [Economic provisions in the Constitution]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Constitutional Economics",
    "views": "13 views • 8 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"संविधान में आर्थिक प्रावधान [Economic provisions in the Constitution]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  },
  {
    "id": "yt-Oq0YybNkLV0",
    "youtubeId": "Oq0YybNkLV0",
    "title": "आर्थिक स्वास्थ्य जाँच  2014-2020 [Economic health check 2014-2020]",
    "duration": "12:00",
    "channel": "eClassroom",
    "topic": "Indian Economy & Currency",
    "views": "16 views • 8 months ago ",
    "summary": "Comprehensive academic video lecture by Dr. Rakshit Bagde analyzing \"आर्थिक स्वास्थ्य जाँच  2014-2020 [Economic health check 2014-2020]\". Produced for collegiate students, researchers, and public examinations aspirants on the official eClassroom YouTube channel."
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pod-1',
    episodeNumber: 14,
    title: 'Why Inflation Targets Matter to Every Household Budget',
    duration: '24 mins',
    date: 'February 2026',
    description:
      'Deconstructing headline CPI vs core inflation, RBI Monetary Policy Committee interest rate hikes, and how food price spikes affect rural consumer baskets.',
    listenPlatforms: ['Spotify', 'Apple Podcasts', 'Google Podcasts'],
  },
  {
    id: 'pod-2',
    episodeNumber: 13,
    title: 'The Unseen Economy of Rural Women: Care Work & Farm Labor',
    duration: '29 mins',
    date: 'December 2025',
    description:
      'Discusses time-use surveys in India, the unpaid care economy, self-help groups (SHGs), and why women farmers lack land title collateral.',
    listenPlatforms: ['Spotify', 'Apple Podcasts', 'Google Podcasts'],
  },
  {
    id: 'pod-3',
    episodeNumber: 12,
    title: 'Demystifying the Union Budget: Capital Expenditure vs Revenue Deficit',
    duration: '33 mins',
    date: 'October 2025',
    description:
      'A student-friendly guide to understanding government budget speeches, fiscal deficit sustainability ratios, and infrastructure multiplier effects.',
    listenPlatforms: ['Spotify', 'Apple Podcasts', 'Google Podcasts'],
  },
  {
    id: 'pod-4',
    episodeNumber: 11,
    title: 'Dr. Ambedkar as India\'s Currency Economist and RBI Architect',
    duration: '38 mins',
    date: 'August 2025',
    description:
      'Historical journey through Ambedkar\'s London School of Economics doctoral thesis "The Problem of the Rupee: Its Origin and Its Solution", examining gold standard vs bullion standards.',
    listenPlatforms: ['Spotify', 'Apple Podcasts', 'Google Podcasts'],
  },
];

export const AWARDS_LIST: AwardItem[] = [
  {
    id: 'award-1',
    title: 'Five University Gold Medals in M.A. (Dr. Ambedkar Thought)',
    year: '2006',
    awardingBody: 'Rashtrasant Tukadoji Maharaj Nagpur University',
    description:
      'Awarded five prestigious Gold Medals at the annual university convocation for securing First Rank in order of merit in Master of Arts.',
    highlight: true,
  },
  {
    id: 'award-2',
    title: 'UGC NET-JRF in Economics (Qualified Twice)',
    year: '2008 & 2009',
    awardingBody: 'University Grants Commission (UGC), Government of India',
    description:
      'Achieved the prestigious Junior Research Fellowship (JRF) and national lectureship eligibility twice in Economics through rigorous all-India competitive examination.',
    highlight: true,
  },
  {
    id: 'award-3',
    title: 'Best Academician & Author Recognition',
    year: '2023',
    awardingBody: 'Regional Social Science Research Council, Maharashtra',
    description:
      'Honored for prolific scholarly authorship exceeding 25 books in Economics, Dr. Ambedkar Thought, and Rural Development.',
    highlight: false,
  },
  {
    id: 'award-4',
    title: 'Excellence in Digital Pedagogy & Community Education',
    year: '2022',
    awardingBody: 'Vidarbha Educational Forum',
    description:
      'Recognized for founding the "eClassroom" digital learning channel providing free university-level economics education to students in rural and backward districts.',
    highlight: false,
  },
  {
    id: 'award-5',
    title: 'Doctor of Philosophy (Ph.D.) in Economics',
    year: '2013',
    awardingBody: 'RTM Nagpur University',
    description:
      'Earned doctoral degree for rigorous ground-breaking thesis examining agricultural economics, globalization, and agrarian policy frameworks.',
    highlight: true,
  },
];
