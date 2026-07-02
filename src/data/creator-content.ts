/** Creator page content — reel thumbnails, stats, brand collaborations. Edit mappings here. */

export type ContentCategoryId =
  | 'ai-ml'
  | 'brands'
  | 'academic';

export interface CreatorStat {
  /** Numeric value before suffix (e.g. 100 for "100K+") */
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface ReelItem {
  src: string;
  title?: string;
  views?: string;
  url?: string;
}

export interface ContentCategory {
  id: ContentCategoryId;
  label: string;
  /** Optional one-line editorial subtitle shown beneath the category label. */
  subtitle?: string;
  reels: ReelItem[];
}

export interface CollabBrand {
  name: string;
  url: string;
}

export const instagramUrl = 'https://www.instagram.com/katya.ivshina/';
export const threadsUrl = 'https://www.threads.net/@katya.ivshina';
export const linksUrl = 'https://hoo.be/katya.ivshina';
export const youTubeUrl = 'https://www.youtube.com/@KatyaIvshina';
/** Russian-language YouTube channel. */
export const russianYouTubeUrl = 'https://www.youtube.com/@ekaterinaivshina';
export const tikTokUrl = 'https://www.tiktok.com/@katyaivshina';
export const newsletterUrl = 'https://katya-ivshina.beehiiv.com/subscribe';
export const linkedInUrl = 'https://www.linkedin.com/in/katya-ivshina-6b367b306/';
export const telegramUrl = 'https://t.me/katiai';
/** Résumé PDF served from public/resume/. */
export const resumeUrl = '/resume/resume-ekaterina-ivshina.pdf';

export type CreatorLinkIcon =
  | 'instagram'
  | 'youtube'
  | 'linkedin'
  | 'tiktok'
  | 'newsletter'
  | 'telegram'
  | 'resume';

export interface CreatorLink {
  label: string;
  href: string;
  icon: CreatorLinkIcon;
  /** External links open in a new tab with rel="noopener noreferrer". */
  external: boolean;
  /** Visually emphasised entry (e.g. the résumé). */
  emphasis?: boolean;
}

/** Ordered link menu shown in the creator hero. */
export const creatorLinks: CreatorLink[] = [
  { label: 'Instagram', href: instagramUrl, icon: 'instagram', external: true },
  { label: 'YouTube', href: youTubeUrl, icon: 'youtube', external: true },
  { label: 'YouTube (Russian)', href: russianYouTubeUrl, icon: 'youtube', external: true },
  { label: 'LinkedIn', href: linkedInUrl, icon: 'linkedin', external: true },
  { label: 'TikTok', href: tikTokUrl, icon: 'tiktok', external: true },
  { label: 'Newsletter', href: newsletterUrl, icon: 'newsletter', external: true },
  { label: 'Telegram', href: telegramUrl, icon: 'telegram', external: true },
  { label: 'Résumé', href: resumeUrl, icon: 'resume', external: true, emphasis: true },
];

/** Verbatim creator bio, split into paragraphs. */
export const creatorBio: string[] = [
  'Educated at Princeton (B.A. Mathematics, with honors) and Harvard (M.S. Applied Mathematics), Katya works at the frontier of research — publishing across machine learning, topology, neuroscience, and astrophysics, where she co-discovered an exoplanet. She has researched at Harvard, MIT, and Apple, presented at international forums from Stockholm to London, and holds an NSF Graduate Research Fellowship.',
  'Katya has built a platform of over 100,000 followers and more than 30 million views, becoming a trusted voice for young adults pursuing STEM careers. As a first-generation immigrant and a woman, she speaks candidly about ambition, access, and the courage to build a life on one\'s own terms — and has carried that message to audiences in London, New York, and beyond.',
];

export const creatorStats: CreatorStat[] = [
  { value: 100, suffix: 'K+', label: 'Followers' },
  { value: 30, suffix: 'M+', label: 'Total views' },
  { value: 174, suffix: '', label: 'Posts' },
];


/** Maps media_kit/reel_thumbnails/ subfolders → public/creator/reel_thumbnails/ paths */
export const contentCategories: ContentCategory[] = [
  {
    id: 'ai-ml',
    label: 'AI and machine learning',
    reels: [
      { src: '/creator/reel_thumbnails/ai-ml/screenshot-2026-07-02-181438.png', url: instagramUrl },
      { src: '/creator/reel_thumbnails/ai-ml/IMG_9401.jpg', url: instagramUrl },
    ],
  },
  {
    id: 'brands',
    label: 'Brands',
    reels: [
      { src: '/creator/reel_thumbnails/brands/IMG_9396.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/brands/IMG_9397.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/brands/IMG_9402.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/brands/IMG_9403.jpg', url: instagramUrl },
    ],
  },
  {
    id: 'academic',
    label: 'Academic',
    subtitle: 'Ivy League education, minus the gatekeeping',
    reels: [
      { src: '/creator/reel_thumbnails/academic/IMG_9383.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/academic/IMG_9385.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/academic/IMG_9386.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/academic/IMG_9387.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/academic/IMG_9393.jpg', url: instagramUrl },
      { src: '/creator/reel_thumbnails/academic/IMG_9400.jpg', url: instagramUrl },
    ],
  },
];

/** Brand collaboration reel examples — shown in the brands section, not content pillars. */
export const brandReels: ReelItem[] =
  contentCategories.find((c) => c.id === 'brands')?.reels ?? [];

/** Content pillars exclude brand reels (they live under the brands wall). */
export const contentPillars: ContentCategory[] = contentCategories.filter(
  (c) => c.id !== 'brands',
);

export const collabBrands: CollabBrand[] = [
  { name: 'Adobe', url: 'https://www.adobe.com/' },
  { name: 'iFlytek', url: 'https://www.iflytek.com/en/' },
  { name: 'Juni Learning', url: 'https://junilearning.com/' },
  { name: 'Unriddle AI', url: 'https://www.unriddle.ai/' },
  { name: 'Ana Luisa', url: 'https://analuisa.com/' },
];
