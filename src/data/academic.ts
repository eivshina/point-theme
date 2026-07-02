/** Academic credentials, courses, research, publications — sourced from resume & learning materials. */

export interface Course {
  code: string;
  title: string;
  institution: 'Princeton' | 'Harvard' | 'MIT';
  grade?: string;
  note?: string;
  textbooks?: { label: string; href?: string }[];
  resources?: { label: string; href: string }[];
}

export interface Publication {
  citation: string;
  title: string;
  status?: string;
  paperUrl?: string;
  projectUrl?: string;
  slug?: string;
}

export interface PublicationDetail {
  slug: string;
  title: string;
  authors: string;
  status?: string;
  paperUrl?: string;
  projectUrl?: string;
  description: string;
  venues?: string[];
}

export const googleScholarUrl =
  'https://scholar.google.com/citations?user=06fe_usAAAAJ&hl=en';

export interface ResearchRole {
  title: string;
  org: string;
  dates: string;
  description: string;
}

export interface ServiceRole {
  title: string;
  org?: string;
  dates?: string;
  description: string;
}

export interface SpeakingEngagement {
  role: string;
  event: string;
  venue: string;
  date: string;
  note?: string;
}

export interface Accomplishment {
  prefix: string;
  link?: { label: string; href: string };
  suffix?: string;
}

export interface FellowshipOrHonor {
  label: string;
  note: string;
}

export interface Education {
  school: string;
  degree: string;
  dates?: string;
  description?: string;
}

export const education: Education[] = [
  {
    school: 'Harvard University',
    degree: 'M.S. in Applied Mathematics',
    dates: '2025',
  },
  {
    school: 'Princeton University',
    degree: 'B.A. in Mathematics, with honors',
    dates: '2023',
  },
  {
    school: 'Specialized Education and Research Center (SERC), Ural Federal University, Ekaterinburg',
    degree: 'High school diploma',
    dates: '2019',
  },
  {
    school: 'ЕДМШ #14, Ekaterinburg',
    degree: 'Music school',
    dates: '2016',
    description:
      'Graduated from six years of music school, play domra, and won twenty-plus regional and national music competitions.',
  },
];

export const fellowshipsAndHonors: FellowshipOrHonor[] = [
  {
    label: 'NSF Graduate Research Fellowship (2023)',
    note: 'A highly competitive U.S. federal fellowship that funds graduate study in science and engineering for three years.',
  },
  {
    label: 'Harvard Graduate School of Arts and Sciences Prize Fellowship (2023)',
    note: 'A merit-based fellowship awarded to outstanding incoming doctoral students at Harvard GSAS.',
  },
  {
    label: 'Inducted into Sigma Xi honor society, Princeton Mathematics Department (2023)',
    note: 'Membership in Sigma Xi, the scientific research honor society, recognizes distinguished research achievement.',
  },
  {
    label: 'Alberto Santos-Dumont Prize for Innovation, Princeton Office of the Dean of Undergraduate Students (2022)',
    note: 'A Princeton prize for undergraduate projects that demonstrate exceptional creativity and innovation.',
  },
  {
    label: 'Manfred Pyka Memorial Prize in Physics, Princeton Department of Physics (2021)',
    note: 'The Princeton physics department\'s prize for outstanding achievement by an undergraduate physics student.',
  },
  {
    label: 'All-Russian National Astronomy Olympiad: top 3 in state, top 50 nationally (2018, 2019)',
    note: '',
  },
  {
    label: 'All-Russian National Physics Olympiad: bronze medalist (2019)',
    note: '',
  },
];

export const serviceRoles: ServiceRole[] = [];

export const publications: Publication[] = [
  {
    citation:
      'Trentini B, Hume J, Isoldi VA, Misof P, Ivshina ES, Maggs K. Neural Point-Forms.',
    title: 'Neural Point-Forms',
    status: 'Submitted to NeurIPS.',
  },
  {
    citation:
      'Wang E, Ivshina ES, et al. Sentence Processing is Surprisingly Robust to Verbatim Repetition.',
    title: 'Sentence Processing is Surprisingly Robust to Verbatim Repetition',
    status: '39th Annual Conference on Human Sentence Processing (2026).',
  },
  {
    citation:
      'Roggeveen JV et al. HARDMath2: A Benchmark for Applied Mathematics Built by Students as Part of a Graduate Class.',
    title: 'HARDMath2: A Benchmark for Applied Mathematics Built by Students as Part of a Graduate Class',
    status: 'NeurIPS 2025.',
    paperUrl: 'https://arxiv.org/abs/2505.11774',
  },
  {
    citation:
      'Ivshina ES, Anikeeva G, Zhou L. Doughnut or Mickey Mouse? Detecting Toroidal Structure in Data through Persistent Cup-Length.',
    title: 'Doughnut or Mickey Mouse? Detecting Toroidal Structure in Data through Persistent Cup-Length',
    status: 'ArXiv preprint (2025).',
    paperUrl: 'https://arxiv.org/abs/2507.11151',
    slug: 'persistent-cup-length',
  },
  {
    citation: 'Ivshina ES. Patterns in Knot Floer Homology.',
    title: 'Patterns in Knot Floer Homology',
    status: 'ArXiv preprint (2023).',
    paperUrl: 'https://arxiv.org/abs/2307.03297',
    slug: 'patterns-knot-floer',
  },
  {
    citation: 'Ivshina ES. On Slice Knots and Patterns in Knot Floer Homology.',
    title: 'On Slice Knots and Patterns in Knot Floer Homology',
    status: 'Senior thesis (2023).',
    paperUrl: 'https://dataspace.princeton.edu/handle/88435/dsp01m039k816h',
    slug: 'slice-knots-thesis',
  },
  {
    citation: 'Ivshina ES, Winn JN. TESS Transit Timing of Hundreds of Hot Jupiters.',
    title: 'TESS Transit Timing of Hundreds of Hot Jupiters',
    status: 'Astrophysical Journal Supplement Series (2022).',
    paperUrl: 'https://doi.org/10.3847/1538-4365/ac545b',
    projectUrl: 'https://transit-timing.github.io',
    slug: 'tess-transit-timing',
  },
];

export const publicationDetails: PublicationDetail[] = [
  {
    slug: 'persistent-cup-length',
    title: 'Doughnut or Mickey Mouse? Detecting Toroidal Structure in Data through Persistent Cup-Length',
    authors: 'Ivshina ES, Anikeeva G, Zhou L.',
    status: 'ArXiv preprint (2025).',
    paperUrl: 'https://arxiv.org/abs/2507.11151',
    description:
      'This paper introduces the first practical implementation of persistent cup-length and applies it to detect toroidal structure in grid cell populations.',
    venues: [
      'Computational Geometry Week, Japan (2026)',
      'Young Topologists Meeting, Stockholm (2026)',
      'LOGML — London Geometry and Machine Learning (2026)',
    ],
  },
  {
    slug: 'tess-transit-timing',
    title: 'TESS Transit Timing of Hundreds of Hot Jupiters',
    authors: 'Ivshina ES, Winn JN.',
    status: 'Astrophysical Journal Supplement Series (2022).',
    paperUrl: 'https://doi.org/10.3847/1538-4365/ac545b',
    projectUrl: 'https://transit-timing.github.io',
    description:
      'In this work, we provide a database of transit times and updated ephemerides for 382 planets based on data from the NASA Transiting Exoplanet Survey Satellite (TESS) and previously reported transit times, which were scraped from the literature in a semiautomated fashion. In total, our database contains 8667 transit-timing measurements for 382 systems. About 240 planets in the catalog are hot Jupiters (i.e., planets with mass >0.3 M_Jup and period <10 days) that have been observed by TESS. The new ephemerides are useful for scheduling follow-up observations and searching for long-term period changes. WASP-12 remains the only system for which a period change is securely detected. We remark on other cases of interest, such as a few systems with suggestive (but not yet convincing) evidence for period changes, and the detection of a second transiting planet in the NGTS-11 system. The compilation of light curves, transit times, ephemerides, and timing residuals are made available online, along with the Python code that generated them.',
  },
  {
    slug: 'patterns-knot-floer',
    title: 'Patterns in Knot Floer Homology',
    authors: 'Ivshina ES.',
    status: 'ArXiv preprint (2023).',
    paperUrl: 'https://arxiv.org/abs/2307.03297',
    description:
      'Based on the data of 12–17-crossing knots, we establish three new conjectures about the hyperbolic volume and knot cohomology: (1) There exists a constant a ∈ ℝ_{>0} such that the percentage of knots for which the following inequality holds converges to 1 as the crossing number c → ∞: log r(K) < a · Vol(K) for a knot K where r(K) is the total rank of knot Floer homology (KFH) of K and Vol(K) is the hyperbolic volume of K. (2) There exist constants a, b ∈ ℝ such that the percentage of knots for which the following inequality holds converges to 1 as the crossing number c → ∞: log det(K) < a · Vol(K) + b for a knot K where det(K) is the knot determinant of K. (3) Fix a small cut-off value d of the total rank of KFH and let f(x) be defined as the fraction of knots whose total rank of knot Floer homology is less than d among the knots whose hyperbolic volume is less than x. Then for sufficiently large crossing numbers, the following inequality holds: f(x) < L/(1 + exp(−k · (x − x₀))) + b where L, x₀, k, b are constants.',
  },
  {
    slug: 'slice-knots-thesis',
    title: 'On Slice Knots and Patterns in Knot Floer Homology',
    authors: 'Ivshina ES.',
    status: 'Senior thesis (2023).',
    paperUrl: 'https://dataspace.princeton.edu/handle/88435/dsp01m039k816h',
    description:
      'In this thesis, we consider two distinct research problems in knot theory: how knot invariants detect knot sliceness (Chapter 1) and how hyperbolic and homological measures of knot complexity are related (Chapter 2). In Chapter 1, we review a number of the most widely used knot invariants and determine their ability to detect slice knots. In Chapter 2, we establish three new conjectures focused on the hyperbolic volume of the knot complement and knot cohomology. Our computational experiments support these findings based on the data of 12–17-crossing knots. The first conjecture states that there exists a constant a ∈ ℝ such that log r(K) < a · Vol(K) for all knots K where r(K) is the total rank of knot Floer homology of K and Vol(K) is the hyperbolic volume of K. The second conjecture states that if we fix a small cut-off value d of the total rank of knot Floer homology and let f(x) be defined as the fraction of knots whose total rank of knot Floer homology is less than d among the knots whose hyperbolic volume is less than x, then for sufficiently large crossing numbers, the following inequality must hold f(x) < L/(1 + exp(−k · (x − x₀))) + b where L, x₀, k, b are constants. Further, our computational results support the following conjecture relating the knot determinant and the hyperbolic volume: there exist constants a, b ∈ ℝ such that log det(K) < a · Vol(K) + b for all knots K where det(K) is the knot determinant of K and Vol(K) is the hyperbolic volume of K.',
  },
];

export function getPublicationBySlug(slug: string): PublicationDetail | undefined {
  return publicationDetails.find((p) => p.slug === slug);
}

export const researchExperience: ResearchRole[] = [
  {
    title: 'Researcher',
    org: 'Harvard University',
    dates: 'Jul 2025 – present',
    description: 'Developing a framework using learnable finite differential forms for point-cloud representation learning, motivated by oversmoothing in graph neural networks.',
  },
  {
    title: 'Researcher',
    org: 'Harvard University',
    dates: 'Jun 2024 – present',
    description: 'Implemented and proved a persistent cup-length algorithm extending persistent homology; demonstrated toroidal structure in grid cell population activity, supporting continuous attractor network models of spatial navigation.',
  },
  {
    title: 'Researcher',
    org: 'MIT, Brain and Cognitive Sciences',
    dates: 'Jul 2024 – Feb 2025',
    description: 'Analyzed representational alignment in language and vision models using curvature as a geometric metric.',
  },
  {
    title: 'ML Intern',
    org: 'Apple Inc., Camera & Photos',
    dates: 'Jun 2022 – Aug 2022',
    description: 'Proposed and implemented a music source separation model; presented work to Apple\'s VP of Camera & Photos.',
  },
  {
    title: 'Senior Thesis Researcher',
    org: 'Princeton University, Mathematics',
    dates: 'Sept 2022 – May 2023',
    description: 'Computational experiments establishing conjectures relating hyperbolic volume, knot determinant, and total rank of knot Floer homology.',
  },
  {
    title: 'Researcher',
    org: 'Princeton University, Physics',
    dates: 'Jan 2022 – May 2022',
    description: 'Built ML models predicting solar wind minimal value of the z-component of the magnetic field from coronal mass ejection observations.',
  },
  {
    title: 'Researcher',
    org: 'MIT, Brain and Cognitive Sciences',
    dates: 'Jul 2021 – Feb 2022',
    description: 'Designed a self-paced reading study on repeated sentence presentation and language processing.',
  },
  {
    title: 'Researcher',
    org: 'Princeton University, Astrophysics',
    dates: 'Feb 2020 – Jan 2022',
    description: 'Developed parallelized transit-timing code for 382 planets; contributed to discovering NGTS-11c.',
  },
];

export const conferenceAccomplishments: Accomplishment[] = [
  {
    prefix: 'Poster presentation, ',
    link: {
      label: 'LOGML',
      href: 'https://www.logml.ai/',
    },
    suffix: ' (London Geometry and Machine Learning), Imperial College London (2026).',
  },
  {
    prefix: 'Research talk, ',
    link: {
      label: 'Young Topologists Meeting',
      href: 'https://www.claymath.org/events/young-topologists-meeting-2025/',
    },
    suffix: ', Stockholm (2026).',
  },
  {
    prefix: 'Invited research talk, ',
    link: {
      label: 'Computational Geometry Week',
      href: 'http://www.alg.cei.uec.ac.jp/itohiro/JCDCGG/',
    },
    suffix: ', Japan (2026).',
  },
  {
    prefix: 'Poster presentation, ',
    link: {
      label: 'Exoplanets IV meeting',
      href: 'https://aas.org/meetings/aastcs9/exoplanets',
    },
    suffix: ', Las Vegas (2022).',
  },
];

export const speakingEngagements: SpeakingEngagement[] = [
  {
    role: 'Keynote speaker',
    event: 'Girls in Engineering and Robotics Symposium',
    venue: 'Andover Robotics Club',
    date: 'March 2025',
  },
  {
    role: 'Invited speaker',
    event: 'Women in STEM outreach',
    venue: 'Imperial College London',
    date: 'July 2025',
  },
  {
    role: 'Invited speaker',
    event: 'Graduate Women in Science and Engineering workshop',
    venue: 'Northeastern University',
    date: 'February 2024',
  },
  {
    role: 'Invited speaker',
    event: 'HacKnight',
    venue: 'BB&N High School',
    date: 'June 2024',
  },
  {
    role: 'Invited speaker',
    event: 'Alternative pathways in Mathematics',
    venue: 'ENYGMMa (Empowering New York Gender Minority Mathematicians), CUNY',
    date: 'May 2024',
  },
];

export const mathTextbooksRead = [
  { title: 'An Introduction to Analysis', author: 'Gunning' },
  { title: 'Linear Algebra Done Right', author: 'Axler' },
  { title: 'Groups and Symmetry', author: 'Armstrong' },
  { title: 'Algebraic Topology', author: 'Hatcher', note: 'My favorite math textbook.' },
  { title: 'Theory of Probability and Random Processes', author: 'Koralov & Sinai' },
  { title: 'Complex Analysis', author: 'Stein' },
  { title: 'Topology', author: 'Munkres', note: 'My fav!' },
  { title: 'Combinatorial Mathematics', author: 'Stefan H. M. van Zwam', href: 'http://www.matroidunion.org/stefan/pdf/notes.pdf' },
  { title: 'Basic Algebraic Geometry I', author: 'Shafarevich' },
  { title: 'Differential Geometry: Bundles, Connections, Metrics and Curvature', author: 'Taubes', note: 'Harvard graduate coursework.' },
  { title: 'Stat 210 lecture notes', author: 'Harvard', href: 'https://www.ekzhang.com/assets/pdf/Stat_210_Notes.pdf', note: 'Probability I at Harvard.' },
];

/** Every course from LinkedIn profile screenshots, with textbook links where available. */
export const courses: Course[] = [
  // Princeton — Mathematics
  { code: 'MAT 216', title: 'Accelerated Honors Analysis', institution: 'Princeton', textbooks: [{ label: 'Gunning, An Introduction to Analysis' }] },
  { code: 'MAT 217', title: 'Honors Linear Algebra', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Axler, Linear Algebra Done Right' }] },
  { code: 'MAT 335', title: 'Analysis II: Complex Analysis', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Stein, Complex Analysis' }] },
  { code: 'MAT 340', title: 'Applied Algebra', institution: 'Princeton', textbooks: [{ label: 'Armstrong, Groups and Symmetry' }] },
  { code: 'MAT 365', title: 'Topology', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Munkres, Topology' }] },
  { code: 'MAT 377', title: 'Combinatorial Mathematics', institution: 'Princeton', textbooks: [{ label: 'van Zwam, Combinatorial Mathematics', href: 'http://www.matroidunion.org/stefan/pdf/notes.pdf' }] },
  { code: 'MAT 385', title: 'Probability Theory', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Koralov & Sinai, Theory of Probability and Random Processes' }] },
  { code: 'MAT 457', title: 'Algebraic Geometry', institution: 'Princeton', textbooks: [{ label: 'Shafarevich, Basic Algebraic Geometry I' }] },
  { code: 'MAT 550', title: 'Differential Geometry', institution: 'Princeton', grade: 'A+' },
  { code: 'MAT 560', title: 'Algebraic Topology', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Hatcher, Algebraic Topology' }] },
  // Princeton — Physics & Astrophysics
  { code: 'PHY 106', title: 'Electromagnetism', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Purcell, Electricity and Magnetism, 3rd ed.' }] },
  { code: 'PHY 205', title: 'Classical Mechanics', institution: 'Princeton', note: 'Lagrangian formulation of mechanics.', textbooks: [{ label: 'Landau & Lifshitz, Mechanics' }] },
  { code: 'PHY 208', title: 'Principles of Quantum Mechanics', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Griffiths & Schroeter, Introduction to Quantum Mechanics, 3rd ed.' }] },
  { code: 'PHY 301', title: 'Thermal Physics', institution: 'Princeton', grade: 'A', note: 'Thermodynamics and statistical mechanics.', textbooks: [{ label: 'Schroeder, An Introduction to Thermal Physics' }] },
  { code: 'PHY 509', title: 'Quantum Field Theory', institution: 'Princeton', grade: 'A-', textbooks: [{ label: 'Peskin & Schroeder, Quantum Field Theory' }] },
  { code: 'PHY 539', title: 'Gravity and Quantum Mechanics', institution: 'Princeton', note: 'Taught by Edward Witten.', resources: [{ label: 'Princeton graduate course recordings', href: 'https://phy.princeton.edu/academics/graduate-program/graduate-course-recordings' }] },
  { code: 'PHY 563', title: 'Cosmology', institution: 'Princeton', grade: 'A', textbooks: [{ label: 'Peebles, Principles of Physical Cosmology' }, { label: 'Mukhanov, Physical Foundations of Cosmology' }] },
  { code: 'AST 204', title: 'Topics in Modern Astronomy', institution: 'Princeton', grade: 'A', note: 'Introductory astronomy; skipped the assigned textbook.' },
  { code: 'AST 303', title: 'Research Methods in Astrophysics', institution: 'Princeton' },
  // Harvard & MIT — ML first, then other graduate coursework
  { code: 'APMTH 220', title: 'Geometric Methods in Machine Learning', institution: 'Harvard' },
  { code: 'APMTH 226', title: 'Theory of Neural Computation', institution: 'Harvard', grade: 'A' },
  { code: 'MIT 6.7930', title: 'Machine Learning for Healthcare', institution: 'MIT' },
  { code: 'APMTH 201', title: 'Physical Mathematics', institution: 'Harvard', grade: 'A' },
  { code: 'APMTH 210', title: 'Algebraic Fundamentals of Representing Data', institution: 'Harvard' },
  { code: 'MATH 230A', title: 'Differential Geometry', institution: 'Harvard', grade: 'A', textbooks: [{ label: 'Taubes, Differential Geometry: Bundles, Connections, Metrics and Curvature' }] },
  { code: 'STAT 210', title: 'Probability I', institution: 'Harvard', grade: 'A-', resources: [{ label: 'Stat 210 lecture notes (Harvard)', href: 'https://www.ekzhang.com/assets/pdf/Stat_210_Notes.pdf' }] },
  { code: 'MIT 9.390', title: 'Language in the Mind and Brain', institution: 'MIT', grade: 'A' },
  // Princeton — other departments
  { code: 'PHI 201', title: 'Introductory Logic', institution: 'Princeton', grade: 'A' },
  { code: 'ECO 310', title: 'Microeconomic Theory: A Math Approach', institution: 'Princeton', grade: 'A' },
  { code: 'ECO 462', title: 'Portfolio Theory and Asset Management', institution: 'Princeton', grade: 'A-' },
  { code: 'EGR 219', title: 'Professional Responsibility & Ethics', institution: 'Princeton', grade: 'A' },
  { code: 'EGR 395', title: 'Venture Capital & Finance of Innovation', institution: 'Princeton', grade: 'A-' },
  { code: 'NES 365', title: 'Modern Iran', institution: 'Princeton', grade: 'A' },
  { code: 'GLS 336', title: 'Indian Democracy', institution: 'Princeton' },
  { code: 'GLS 318', title: 'Vienna: Birthplace of Psychoanalysis', institution: 'Princeton', grade: 'A' },
  { code: 'MUS 316', title: 'Computer & Electronic Music Composition', institution: 'Princeton' },
];

export interface SummerProgram {
  title: string;
  href: string;
  note?: string;
  highSchool?: boolean;
}

export const summerPrograms: SummerProgram[] = [
  {
    title: 'Analytic Connectionism Summer School',
    href: 'https://www.analytical-connectionism.net/school/2024/',
    note: 'Flatiron Institute, New York City.',
  },
  {
    title: 'Machine Learning and Math program',
    href: 'https://www.ias.edu/math/wam/events/2022-program-women-and-mathematics-mathematics-machine-learning',
    note: 'Institute for Advanced Study, Princeton.',
  },
  {
    title: 'AI Safety Fundamentals Fellowship',
    href: 'https://aialignment.mit.edu/aisf/',
    note: 'MIT AI Alignment (MAIA). Introductory fellowship on technical AI safety.',
  },
  {
    title: 'Princeton Astrophysics Undergraduate Summer Research Program (USRP)',
    href: 'https://web.astro.princeton.edu/academic/undergraduate-summer-research-program-usrp',
    note: 'Summer research school in astrophysics at Princeton.',
  },
  {
    title: 'Princeton Summer School in Geometry & Topology',
    href: 'https://web.math.princeton.edu/~petero/RTG/index.html',
    note: 'NSF RTG summer school and mini-conferences at Princeton Mathematics.',
  },
  {
    title: 'Engineering Summer Academy at Penn (ESAP)',
    href: 'https://esap.seas.upenn.edu',
    note: 'University of Pennsylvania School of Engineering and Applied Science.',
    highSchool: true,
  },
  {
    title: 'European Summer Program on Rationality (ESPR)',
    href: 'https://espr.camp/',
    note: 'Immersive workshop on applied rationality for mathematically talented students.',
    highSchool: true,
  },
  {
    title: 'Yale Young Global Scholars (YYGS)',
    href: 'https://globalscholars.yale.edu/',
    note: 'Summer academic enrichment program. I later returned as a seminar instructor.',
    highSchool: true,
  },
];
