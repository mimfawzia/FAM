export type ProjectCategory =
  | 'All'
  | 'Social Media'
  | 'Graphic Design'
  | 'Marketing'
  | 'SEO';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName:
    | 'Share2'
    | 'Instagram'
    | 'Facebook'
    | 'Search'
    | 'Target'
    | 'Youtube'
    | 'FileText'
    | 'Mail'
    | 'Palette'
    | 'LayoutGrid'
    | 'Sparkles';
}

export interface SkillItem {
  id: string;
  name: string;
  discipline: 'Digital Marketing' | 'Paid & Organic Growth' | 'Creative & Content';
  focus: string;
  levelBars: number; // Visual emphasis indicator (1-5 blocks, no fabricated percentages)
}

export interface ConceptProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  secondaryCategories: Exclude<ProjectCategory, 'All'>[];
  image: string;
  imageAlt: string;
  shortDescription: string;
  conceptNote: string;
  objectives: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  titleEn: string;
  titleBn: string;
  descriptionEn: string;
  descriptionBn: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Lightbulb' | 'Compass' | 'Users' | 'MessageSquare' | 'Award' | 'TrendingUp';
}

export interface SocialLinkItem {
  id: 'linkedin' | 'fiverr' | 'facebook' | 'instagram';
  label: string;
  url: string; // Add your live profile URL here to display this link automatically
}

export interface TestimonialSlot {
  id: string;
  slotLabel: string;
  marketplace: string;
  note: string;
}

export const PERSONAL_INFO = {
  name: 'Fawzia Abida Mim',
  monogram: 'FAM',
  title: 'Digital Marketer & Graphic Designer',
  headline: 'Helping Brands Grow Through Strategic Digital Marketing & Creative Design.',
  intro:
    'I help businesses build a strong online presence, reach the right audience, and grow their brands through strategic digital marketing and creative visual solutions.',
  experience: '2+ Years',
  location: 'Bangladesh',
  email: 'fawziaabidamim@gmail.com',
  languages: 'English & Bengali',
};

/**
 * Editable Social Links:
 * Replace empty strings with your real profile URLs when ready.
 * Unavailable links (empty URLs) are automatically hidden from the UI.
 */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: '',
  },
  {
    id: 'fiverr',
    label: 'Fiverr',
    url: '',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: '',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: '',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'social-media-marketing',
    number: '01',
    title: 'Social Media Marketing',
    description:
      'Channel-specific growth strategies designed to strengthen brand positioning, engage target communities, and maintain consistent audience touchpoints.',
    iconName: 'Share2',
  },
  {
    id: 'instagram-marketing',
    number: '02',
    title: 'Instagram Marketing',
    description:
      'Cohesive grid planning, reel and carousel storytelling, hashtag architecture, and organic discovery tactics tailored for modern brands.',
    iconName: 'Instagram',
  },
  {
    id: 'facebook-marketing',
    number: '03',
    title: 'Facebook Marketing',
    description:
      'Structured page growth, community engagement calendars, and high-clarity visual posts built to attract and retain loyal followers.',
    iconName: 'Facebook',
  },
  {
    id: 'seo',
    number: '04',
    title: 'SEO',
    description:
      'Keyword research, on-page optimization, search intent mapping, and clean content structure to improve organic search visibility.',
    iconName: 'Search',
  },
  {
    id: 'facebook-ads',
    number: '05',
    title: 'Facebook Ads',
    description:
      'Audience segmentation, conversion-focused ad copy, and scroll-stopping creative variations structured for measurable campaign objectives.',
    iconName: 'Target',
  },
  {
    id: 'youtube-seo',
    number: '06',
    title: 'YouTube SEO',
    description:
      'Search-friendly titles, keyword-structured descriptions, tag clustering, and click-worthy visual packaging to grow channel discoverability.',
    iconName: 'Youtube',
  },
  {
    id: 'content-marketing',
    number: '07',
    title: 'Content Marketing',
    description:
      'Editorial calendars and value-driven content pillars that educate prospects, build authority, and guide audiences toward action.',
    iconName: 'FileText',
  },
  {
    id: 'email-marketing',
    number: '08',
    title: 'Email Marketing',
    description:
      'Clean campaign layouts, persuasive subject lines, and structured nurture sequences that turn subscribers into repeat customers.',
    iconName: 'Mail',
  },
  {
    id: 'graphic-design',
    number: '09',
    title: 'Graphic Design',
    description:
      'Brand-aligned visual assets including social creatives, promotional banners, thumbnails, and cohesive marketing collateral.',
    iconName: 'Palette',
  },
  {
    id: 'social-media-management',
    number: '10',
    title: 'Social Media Management',
    description:
      'End-to-end publishing workflows, content scheduling, visual consistency checks, and routine community upkeep across key platforms.',
    iconName: 'LayoutGrid',
  },
  {
    id: 'content-creation',
    number: '11',
    title: 'Content Creation',
    description:
      'Original visual and written social assets combining clear copywriting with modern graphic layouts built for digital feeds.',
    iconName: 'Sparkles',
  },
];

export const SKILLS: SkillItem[] = [
  {
    id: 'skill-smm',
    name: 'Social Media Marketing',
    discipline: 'Digital Marketing',
    focus: 'Multi-platform campaign alignment & audience building',
    levelBars: 5,
  },
  {
    id: 'skill-ig',
    name: 'Instagram Marketing',
    discipline: 'Paid & Organic Growth',
    focus: 'Visual feed curation, carousels & organic reach',
    levelBars: 5,
  },
  {
    id: 'skill-fb',
    name: 'Facebook Marketing',
    discipline: 'Digital Marketing',
    focus: 'Page growth, audience engagement & post strategy',
    levelBars: 5,
  },
  {
    id: 'skill-seo',
    name: 'SEO',
    discipline: 'Paid & Organic Growth',
    focus: 'Keyword mapping, on-page structure & search intent',
    levelBars: 4,
  },
  {
    id: 'skill-fb-ads',
    name: 'Facebook Ads',
    discipline: 'Paid & Organic Growth',
    focus: 'Ad creative framing, targeting & funnel messaging',
    levelBars: 4,
  },
  {
    id: 'skill-yt-seo',
    name: 'YouTube SEO',
    discipline: 'Paid & Organic Growth',
    focus: 'Metadata optimization & thumbnail click clarity',
    levelBars: 4,
  },
  {
    id: 'skill-content-mkt',
    name: 'Content Marketing',
    discipline: 'Digital Marketing',
    focus: 'Content pillars, storytelling & editorial planning',
    levelBars: 5,
  },
  {
    id: 'skill-email',
    name: 'Email Marketing',
    discipline: 'Digital Marketing',
    focus: 'Newsletter structure, copywriting & campaign flows',
    levelBars: 4,
  },
  {
    id: 'skill-graphic',
    name: 'Graphic Design',
    discipline: 'Creative & Content',
    focus: 'Brand visuals, social templates & layout hierarchy',
    levelBars: 5,
  },
  {
    id: 'skill-sm-mgmt',
    name: 'Social Media Management',
    discipline: 'Digital Marketing',
    focus: 'Scheduling cadence, brand tone & profile upkeep',
    levelBars: 5,
  },
  {
    id: 'skill-content-create',
    name: 'Content Creation',
    discipline: 'Creative & Content',
    focus: 'Scroll-stopping post design & concise messaging',
    levelBars: 5,
  },
];

export const PROJECT_FILTERS: ProjectCategory[] = [
  'All',
  'Social Media',
  'Graphic Design',
  'Marketing',
  'SEO',
];

export const CONCEPT_PROJECTS: ConceptProject[] = [
  {
    id: 'social-media-post-design',
    title: 'Social Media Post Design',
    category: 'Graphic Design',
    secondaryCategories: ['Social Media'],
    image: '/src/assets/images/concept_social_post_1795674067112.jpg',
    imageAlt: 'Concept mockup of minimalist dark navy and teal social media carousel post templates',
    shortDescription:
      'A self-initiated multi-slide carousel and feed design system created to demonstrate clean typographic hierarchy and visual brand consistency.',
    conceptNote: 'Illustrative self-initiated concept project — created for portfolio showcase.',
    objectives: [
      'Establish a cohesive modular grid for educational and promotional social carousels.',
      'Balance strong contrast, readable mobile typography, and clear visual pacing across slides.',
    ],
    deliverables: [
      '5-slide carousel concept series',
      'Consistent color and typography system',
      'Feed-ready visual framing templates',
    ],
  },
  {
    id: 'instagram-growth-campaign',
    title: 'Instagram Growth Campaign Concept',
    category: 'Social Media',
    secondaryCategories: ['Marketing'],
    image: '/src/assets/images/concept_instagram_campaign_1795674068370.jpg',
    imageAlt: 'Concept mockup of a cohesive Instagram grid and content series on a smartphone',
    shortDescription:
      'An organic Instagram content architecture concept pairing cohesive grid aesthetics with structured pillar themes for sustained brand discovery.',
    conceptNote: 'Illustrative self-initiated concept project — no fabricated client metrics.',
    objectives: [
      'Design a unified 9-tile visual aesthetic that communicates brand positioning at first glance.',
      'Combine educational carousels, brand stories, and community prompts into a balanced weekly cadence.',
    ],
    deliverables: [
      'Content pillar & posting calendar concept',
      'Cohesive 9-grid visual layout mockup',
      'Hashtag & caption structure blueprint',
    ],
  },
  {
    id: 'business-brand-creative',
    title: 'Business Brand Creative',
    category: 'Graphic Design',
    secondaryCategories: ['Marketing'],
    image: '/src/assets/images/concept_brand_creative_1795674067914.jpg',
    imageAlt: 'Concept brand identity stationery suite with dark navy cards and embossed monogram',
    shortDescription:
      'A cohesive brand identity visual concept encompassing stationery, monogram framing, and promotional collateral with restrained luxury styling.',
    conceptNote: 'Illustrative self-initiated concept project — fictional studio styling.',
    objectives: [
      'Translate a modern service brand into clean, memorable visual touchpoints.',
      'Maintain strict geometric balance and material contrast across print and digital assets.',
    ],
    deliverables: [
      'Monogram & typography pairing concept',
      'Business stationery & packaging mockup',
      'Brand color & visual tone guidelines',
    ],
  },
  {
    id: 'facebook-marketing-campaign',
    title: 'Facebook Marketing Campaign Concept',
    category: 'Marketing',
    secondaryCategories: ['Social Media'],
    image: '/src/assets/images/concept_facebook_marketing_1795674068147.jpg',
    imageAlt: 'Concept mockup of a Facebook advertising and campaign strategy layout on laptop and tablet',
    shortDescription:
      'A structured Facebook Ads and organic funnel concept illustrating audience segmentation, ad creative variations, and clear call-to-action framing.',
    conceptNote: 'Illustrative self-initiated concept project — conceptual campaign framework.',
    objectives: [
      'Map awareness, consideration, and conversion messaging stages for a service business.',
      'Pair clean ad creative layouts with focused value propositions tailored to cold and warm audiences.',
    ],
    deliverables: [
      'Full-funnel ad messaging framework',
      'Creative visual layout variations',
      'Audience targeting & placement outline',
    ],
  },
  {
    id: 'seo-strategy-presentation',
    title: 'SEO Strategy Presentation Concept',
    category: 'SEO',
    secondaryCategories: ['Marketing'],
    image: '/src/assets/images/concept_seo_strategy_1795674069199.jpg',
    imageAlt: 'Concept SEO strategy slide deck displaying topic clusters and content architecture',
    shortDescription:
      'An editorial SEO strategy deck concept organizing keyword research, topic clusters, and on-page content architecture into a clear client roadmap.',
    conceptNote: 'Illustrative self-initiated concept project — methodology presentation.',
    objectives: [
      'Present technical and content SEO priorities in plain, decision-ready language for stakeholders.',
      'Structure pillar pages and supporting topic clusters to align content creation with search intent.',
    ],
    deliverables: [
      'Keyword hierarchy & intent map slides',
      'Topic cluster architecture diagram',
      'On-page optimization checklist framework',
    ],
  },
  {
    id: 'youtube-thumbnail-design',
    title: 'YouTube Thumbnail Design Concept',
    category: 'Graphic Design',
    secondaryCategories: ['SEO'],
    image: '/src/assets/images/concept_youtube_thumbnail_1795674069490.jpg',
    imageAlt: 'Concept YouTube thumbnail design template displayed on a creative studio monitor',
    shortDescription:
      'A high-contrast YouTube thumbnail and video packaging concept built to maximize visual clarity on mobile feeds and support YouTube SEO discoverability.',
    conceptNote: 'Illustrative self-initiated concept project — visual CTR packaging study.',
    objectives: [
      'Create strong foreground-background separation and three-word focal hooks readable at small sizes.',
      'Align thumbnail visual cues with keyword-targeted video titles for higher browsing relevance.',
    ],
    deliverables: [
      'High-contrast thumbnail layout template',
      'Typography & color-contrast hierarchy',
      'Title-to-thumbnail pairing guidelines',
    ],
  },
];

export const WORKING_PROCESS: ProcessStep[] = [
  {
    number: '01',
    titleEn: 'Research & Discovery',
    titleBn: 'গবেষণা ও বিশ্লেষণ',
    descriptionEn:
      'Understanding your brand goals, target audience behavior, competitors, and current digital footprint before making any creative decisions.',
    descriptionBn:
      'ব্র্যান্ডের লক্ষ্য, টার্গেট অডিয়েন্সের চাহিদা, প্রতিযোগী বিশ্লেষণ এবং বর্তমান ডিজিটাল অবস্থান গভীরভাবে বোঝা।',
  },
  {
    number: '02',
    titleEn: 'Strategy & Planning',
    titleBn: 'কৌশল ও পরিকল্পনা',
    descriptionEn:
      'Building a clear roadmap covering platform priorities, keyword direction, campaign structure, and visual brand tone.',
    descriptionBn:
      'সঠিক প্ল্যাটফর্ম নির্বাচন, কীওয়ার্ড পরিকল্পনা, ক্যাম্পেইন কাঠামো এবং ভিজ্যুয়াল ব্র্যান্ড গাইডলাইন তৈরি করা।',
  },
  {
    number: '03',
    titleEn: 'Content & Creative Development',
    titleBn: 'কনটেন্ট ও ক্রিয়েটিভ ডিজাইন',
    descriptionEn:
      'Designing cohesive graphics, crafting audience-focused copy, and assembling assets tailored for engagement and clarity.',
    descriptionBn:
      'আকর্ষণীয় গ্রাফিক ডিজাইন, অডিয়েন্স-বান্ধব কপিরাইটিং এবং ব্র্যান্ডের সাথে সামঞ্জস্যপূর্ণ কনটেন্ট তৈরি করা।',
  },
  {
    number: '04',
    titleEn: 'Implementation & Promotion',
    titleBn: 'বাস্তবায়ন ও প্রচারণা',
    descriptionEn:
      'Publishing scheduled content, configuring targeted campaigns, and applying on-page and YouTube SEO best practices.',
    descriptionBn:
      'পরিকল্পিত সময়সূচি অনুযায়ী কনটেন্ট প্রকাশ, টার্গেটেড বিজ্ঞাপন পরিচালনা এবং এসইও অপ্টিমাইজেশন প্রয়োগ করা।',
  },
  {
    number: '05',
    titleEn: 'Analysis & Optimization',
    titleBn: 'পর্যালোচনা ও অপ্টিমাইজেশন',
    descriptionEn:
      'Reviewing audience feedback, creative engagement patterns, and campaign learnings to refine ongoing growth.',
    descriptionBn:
      'অডিয়েন্সের প্রতিক্রিয়া ও ক্যাম্পেইনের ফলাফল পর্যালোচনা করে পরবর্তী ধাপের জন্য কৌশল আরও উন্নত করা।',
  },
];

export const WHY_CHOOSE_ME: WhyChooseItem[] = [
  {
    id: 'creative-thinking',
    title: 'Creative Thinking',
    description:
      'Fresh visual concepts and campaign ideas crafted to help your brand stand out in crowded social feeds without visual noise.',
    iconName: 'Lightbulb',
  },
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    description:
      'Every graphic and post is tied to a clear marketing objective—whether awareness, search visibility, or audience conversion.',
    iconName: 'Compass',
  },
  {
    id: 'audience-focused',
    title: 'Audience-Focused Marketing',
    description:
      'Messaging and visuals tailored around what your ideal customers actually look for, value, and respond to online.',
    iconName: 'Users',
  },
  {
    id: 'professional-communication',
    title: 'Professional Communication',
    description:
      'Clear timelines, responsive updates in English and Bengali, and transparent collaboration suited for international clients.',
    iconName: 'MessageSquare',
  },
  {
    id: 'quality-focused',
    title: 'Quality-Focused Work',
    description:
      'Careful attention to typography, brand alignment, copy accuracy, and clean execution across every deliverable.',
    iconName: 'Award',
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    description:
      'Staying current with evolving social algorithms, ad formats, and SEO standards to keep strategies effective over time.',
    iconName: 'TrendingUp',
  },
];

export const TESTIMONIAL_SLOTS: TestimonialSlot[] = [
  {
    id: 'slot-1',
    slotLabel: 'Client Review Slot 01',
    marketplace: 'Fiverr / Upwork',
    note: 'Reserved for verified client feedback upon project completion.',
  },
  {
    id: 'slot-2',
    slotLabel: 'Client Review Slot 02',
    marketplace: 'LinkedIn Recommendation',
    note: 'Reserved for verified client endorsement and collaboration notes.',
  },
  {
    id: 'slot-3',
    slotLabel: 'Client Review Slot 03',
    marketplace: 'Direct Brand Partnership',
    note: 'Reserved for authentic client review highlighting campaign deliverables.',
  },
];
