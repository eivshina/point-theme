/** PhD admissions live workshop — content from phd-admissions.tilda.ws, updated Aug 2026. */

export const phdWorkshop = {
  title: 'PhD admissions workshop',
  tagline: 'Your complete guide to getting into your dream PhD program.',
  date: 'August 12, 2026',
  dayOfWeek: 'Wednesday',
  time: '12:00 PM ET',
  duration: '2 hours',
  format: 'Online on Zoom',
  price: 99,
  contactEmail: 'ekaterina.s.ivshina@gmail.com',
  paymentUrl: 'https://buy.stripe.com/4gMcN7gkd4an8N18pr2cg0A',
  images: {
    hero: '/phd-admissions/workshop/hero.png',
    leaderPhoto: '/phd-admissions/workshop/leader-photo.png',
    includesPhoto: '/phd-admissions/workshop/includes-photo.png',
  },
} as const;

const REVIEW_ALT = 'Workshop participant review';

/** Intrinsic pixel sizes — each screenshot has a different aspect ratio, so the
 *  card must reserve the right height to avoid layout shift in the marquee. */
export const workshopReviews = [
  {
    src: '/phd-admissions/workshop/reviews/review-01.png',
    alt: REVIEW_ALT,
    width: 830,
    height: 519,
    caption: 'Stanford CS PhD admit',
  },
  { src: '/phd-admissions/workshop/reviews/review-13.png', alt: REVIEW_ALT, width: 1024, height: 345 },
  { src: '/phd-admissions/workshop/reviews/review-02.png', alt: REVIEW_ALT, width: 1024, height: 544 },
  { src: '/phd-admissions/workshop/reviews/review-03.png', alt: REVIEW_ALT, width: 1024, height: 709 },
  { src: '/phd-admissions/workshop/reviews/review-04.png', alt: REVIEW_ALT, width: 1024, height: 324 },
  { src: '/phd-admissions/workshop/reviews/review-05.png', alt: REVIEW_ALT, width: 1024, height: 546 },
  { src: '/phd-admissions/workshop/reviews/review-06.png', alt: REVIEW_ALT, width: 1024, height: 268 },
  { src: '/phd-admissions/workshop/reviews/review-07.png', alt: REVIEW_ALT, width: 1024, height: 509 },
  { src: '/phd-admissions/workshop/reviews/review-08.png', alt: REVIEW_ALT, width: 1024, height: 508 },
  { src: '/phd-admissions/workshop/reviews/review-09.png', alt: REVIEW_ALT, width: 1020, height: 421 },
  { src: '/phd-admissions/workshop/reviews/review-10.png', alt: REVIEW_ALT, width: 1024, height: 344 },
  { src: '/phd-admissions/workshop/reviews/review-12.png', alt: REVIEW_ALT, width: 1024, height: 1002 },
  { src: '/phd-admissions/workshop/reviews/review-14.png', alt: REVIEW_ALT, width: 1024, height: 214 },
  { src: '/phd-admissions/workshop/reviews/review-15.png', alt: REVIEW_ALT, width: 1024, height: 644 },
  { src: '/phd-admissions/workshop/reviews/review-16.png', alt: REVIEW_ALT, width: 955, height: 1024 },
] as const;

export const workshopHighlights = [
  { label: '7 modules', detail: 'Full program' },
  { label: '$99', detail: 'Full access' },
  { label: 'Online', detail: 'Live on Zoom' },
] as const;

export const workshopIncludes = [
  'The full 2-hour live workshop on Zoom',
  'A recording sent after the event',
  'Comprehensive coverage of every stage of the U.S. PhD application process',
] as const;

export const workshopResults = [
  'Gain insight into creating a strong PhD application',
  'Learn what the PhD admissions committee is looking for',
  'Learn how to find prospective PhD advisors',
  'Identify a PhD program of your dreams',
  'Access a PhD admissions knowledge base',
  'Build your personal brand',
] as const;

export type WorkshopModuleDetail = {
  title: string;
  body?: string;
  bullets?: readonly string[];
};

/** Expandable module copy — titles from phd-admissions.tilda.ws; modules 5–7 split/extended for the 7-module program. */
export const workshopModuleDetails: readonly WorkshopModuleDetail[] = [
  {
    title: 'Building your PhD admissions strategy',
    body:
      'We will discuss what your actual admissions goal is and will give a template for building a valid strategy to reach your specific goal. Do you want to get into a top PhD program? Or maybe you want to do a Master\u2019s degree instead? Do you need to gain more research experience and build a stronger CV? Or maybe you want to focus on communicating your research clearly in your statement of purpose? Perhaps you are not sure how to reach out to prospective PhD advisors and network effectively? We will decompose this goal into a sequence of simple steps.',
  },
  {
    title: 'How PhD degrees are funded',
    body:
      'We uncover the details of how PhD degrees are funded. There\u2019s a huge variety of fellowship, scholarship, and teaching funding depending on the program, and you need to take this into account when applying and choosing your program.',
  },
  {
    title: 'Finding the right PhD program for you',
    bullets: [
      'Develop a strategy to reach out to faculty',
      'Find prospective PhD advisors',
      'Create a list of programs you will apply to',
    ],
  },
  {
    title: 'Application components & timeline',
    bullets: [
      'Understand the most important parts of the PhD application',
      'Understand the application timeline',
      'Develop a strategy for requesting recommendation letters',
      'Develop a strategy for maintaining your physical and mental health when applying to PhD programs',
    ],
  },
  {
    title: 'How to write your Curriculum Vitae',
    bullets: [
      'Understand what goes into an academic CV and how it differs from a resume',
      'Learn to document and \u201csell\u201d your previous research experience in your CV',
      'Format and tailor your CV for PhD applications',
      'Analyze successful applications and apply those principles to your case',
    ],
  },
  {
    title: 'How to write a successful statement of purpose',
    body:
      'Your statement of purpose is your chance to tell your story. We cover how to craft a narrative that shows fit with each program and faculty member you apply to.',
    bullets: [
      'Build a clear narrative around your research interests and career goals',
      'Demonstrate fit with specific programs, faculty, and research groups',
      'Explain why this school and why now',
      'Step-by-step guide to writing your statement of purpose',
      'Template for a statement of purpose that helped me get into Harvard',
    ],
  },
  {
    title: 'How to prepare for standardized tests & PhD interviews',
    body:
      'Standardized tests and interviews are often the final hurdles. We cover when GRE scores matter, how to prepare efficiently, and how to shine in PhD admissions interviews.',
    bullets: [
      'When to take the GRE — and when programs waive or de-emphasize it',
      'How PhD interviews work and what admissions committees are evaluating',
      'Preparing thoughtful questions for faculty and current students',
      'Handling common interview formats: research talks, meetings with potential advisors',
    ],
  },
] as const;

/** @deprecated Use workshopModuleDetails — kept for simple title lists. */
export const workshopModules = workshopModuleDetails.map((m) => m.title) as readonly string[];

export const workshopLeaderBio = `Katya was admitted into Applied Math PhD at Harvard and received the NSF Graduate Research Fellowship and Harvard's Prize Fellowship. She holds a bachelor's degree in Mathematics from Princeton University.

Ever since she can remember, Katya cared about increasing access to education and empowering underrepresented students in STEM. She has directed many educational initiatives to support disadvantaged students, including a tutoring program for Ukrainian refugee students for which she has been awarded the Saint Dumont prize for innovation at Princeton University.

Her experience taught her the importance of perseverance and optimism and she believes in inspiring others to pursue their academic dreams through her mentorship. As a first-generation immigrant in the US and the first in her family to be admitted into a graduate program, Katya knows the fears and struggles of applying to PhD programs.

This workshop's mission is to make the application process stress-free.`;

export const workshopAudience = [
  {
    title: 'You dream to pursue a PhD in the US',
    body: 'The workshop will provide you with essential tools for crafting a strong application and teach you how to stand out.',
  },
  {
    title: 'You will apply to PhD programs in 2026/2027',
    body: 'This workshop will help you create a step-by-step strategy on how to prepare for applying.',
  },
  {
    title: 'You want to become a successful researcher',
    body: 'The workshop teaches how to find research opportunities and how to build strong relationships with professors.',
  },
] as const;

export const workshopPainPoints = [
  'you struggle with finding information about the PhD application process',
  'you don\u2019t understand what makes an application successful & how to stand out',
  'you don\u2019t understand the application requirements & timeline & scholarships',
  'you have a lot of insecurities, don\u2019t believe you can get into your dream program',
  'you are anxious because you don\u2019t know where to start your application journey',
  'you don\u2019t know how to reach out to faculty',
  'you don\u2019t know how to prepare for your admissions interviews',
] as const;
