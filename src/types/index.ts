export type ProjectCategory = 'all' | 'automation' | 'agents' | 'websites' | 'marketing';

export interface PortfolioItem {
  id: string;
  title: string;
  cat: 'automation' | 'agents' | 'websites' | 'marketing';
  image: string;
  alt: string;
  blurb: string;
  built: string[];
  stack: string[];
  sample?: boolean;
  video?: string;
  client?: string;
  metrics?: string;
  liveUrl?: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  kicker: string;
  desc: string;
  items: string[];
  icon: 'cpu' | 'bot' | 'layout' | 'rocket';
}

export interface EngagementPlan {
  name: string;
  kicker: string;
  desc: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CustomPage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  updatedAt: string;
}

export interface HeroContent {
  badge: string;
  headline: string;
  highlight: string;
  subheadline: string;
  guarantees: string[];
  leadResponseSpeed: string;
  targetRegion: string;
}

export interface SiteSettings {
  agencyName: string;
  contactEmail: string;
  phone: string;
  address: string;
  adminPin: string;
  calendlyUrl: string;
}
