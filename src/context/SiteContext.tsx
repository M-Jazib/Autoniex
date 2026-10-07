'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PortfolioItem,
  ServiceItem,
  EngagementPlan,
  FaqItem,
  HeroContent,
  SiteSettings,
  CustomPage,
} from '@/types';
import {
  INITIAL_PORTFOLIO,
  SERVICES,
  ENGAGEMENT_PLANS,
  FAQS,
  DEFAULT_HERO,
  DEFAULT_SETTINGS,
  DEFAULT_CUSTOM_PAGES,
} from '@/data/portfolioData';

interface SiteContextType {
  portfolio: PortfolioItem[];
  hero: HeroContent;
  services: ServiceItem[];
  plans: EngagementPlan[];
  faqs: FaqItem[];
  customPages: CustomPage[];
  settings: SiteSettings;
  isLoaded: boolean;
  addProject: (proj: PortfolioItem) => void;
  updateProject: (id: string, updated: Partial<PortfolioItem>) => void;
  deleteProject: (id: string) => void;
  updateHero: (hero: Partial<HeroContent>) => void;
  updateServices: (services: ServiceItem[]) => void;
  updatePlans: (plans: EngagementPlan[]) => void;
  updateFaqs: (faqs: FaqItem[]) => void;
  addCustomPage: (page: CustomPage) => void;
  updateCustomPage: (id: string, updated: Partial<CustomPage>) => void;
  deleteCustomPage: (id: string) => void;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => boolean;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

const STORAGE_KEY = 'autoniex_cms_data_v5';

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(INITIAL_PORTFOLIO);
  const [hero, setHero] = useState<HeroContent>(DEFAULT_HERO);
  const [services, setServices] = useState<ServiceItem[]>(SERVICES);
  const [plans, setPlans] = useState<EngagementPlan[]>(ENGAGEMENT_PLANS);
  const [faqs, setFaqs] = useState<FaqItem[]>(FAQS);
  const [customPages, setCustomPages] = useState<CustomPage[]>(DEFAULT_CUSTOM_PAGES);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.portfolio) setPortfolio(parsed.portfolio);
        if (parsed.hero) setHero(parsed.hero);
        if (parsed.services) setServices(parsed.services);
        if (parsed.plans) setPlans(parsed.plans);
        if (parsed.faqs) setFaqs(parsed.faqs);
        if (parsed.customPages) setCustomPages(parsed.customPages);
        if (parsed.settings) setSettings(parsed.settings);
      }
    } catch (e) {
      console.error('Failed to load CMS data from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage whenever data changes
  const saveAll = (data: {
    portfolio: PortfolioItem[];
    hero: HeroContent;
    services: ServiceItem[];
    plans: EngagementPlan[];
    faqs: FaqItem[];
    customPages: CustomPage[];
    settings: SiteSettings;
  }) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  const addProject = (proj: PortfolioItem) => {
    const updated = [proj, ...portfolio];
    setPortfolio(updated);
    saveAll({ portfolio: updated, hero, services, plans, faqs, customPages, settings });
  };

  const updateProject = (id: string, updated: Partial<PortfolioItem>) => {
    const newItems = portfolio.map((p) => (p.id === id ? { ...p, ...updated } : p));
    setPortfolio(newItems);
    saveAll({ portfolio: newItems, hero, services, plans, faqs, customPages, settings });
  };

  const deleteProject = (id: string) => {
    const newItems = portfolio.filter((p) => p.id !== id);
    setPortfolio(newItems);
    saveAll({ portfolio: newItems, hero, services, plans, faqs, customPages, settings });
  };

  const updateHero = (updated: Partial<HeroContent>) => {
    const newHero = { ...hero, ...updated };
    setHero(newHero);
    saveAll({ portfolio, hero: newHero, services, plans, faqs, customPages, settings });
  };

  const updateServices = (newServices: ServiceItem[]) => {
    setServices(newServices);
    saveAll({ portfolio, hero, services: newServices, plans, faqs, customPages, settings });
  };

  const updatePlans = (newPlans: EngagementPlan[]) => {
    setPlans(newPlans);
    saveAll({ portfolio, hero, services, plans: newPlans, faqs, customPages, settings });
  };

  const updateFaqs = (newFaqs: FaqItem[]) => {
    setFaqs(newFaqs);
    saveAll({ portfolio, hero, services, plans, faqs: newFaqs, customPages, settings });
  };

  const addCustomPage = (page: CustomPage) => {
    const newPages = [...customPages, page];
    setCustomPages(newPages);
    saveAll({ portfolio, hero, services, plans, faqs, customPages: newPages, settings });
  };

  const updateCustomPage = (id: string, updated: Partial<CustomPage>) => {
    const newPages = customPages.map((p) => (p.id === id ? { ...p, ...updated } : p));
    setCustomPages(newPages);
    saveAll({ portfolio, hero, services, plans, faqs, customPages: newPages, settings });
  };

  const deleteCustomPage = (id: string) => {
    const newPages = customPages.filter((p) => p.id !== id);
    setCustomPages(newPages);
    saveAll({ portfolio, hero, services, plans, faqs, customPages: newPages, settings });
  };

  const updateSettings = (updated: Partial<SiteSettings>) => {
    const newSettings = { ...settings, ...updated };
    setSettings(newSettings);
    saveAll({ portfolio, hero, services, plans, faqs, customPages, settings: newSettings });
  };

  const resetToDefaults = () => {
    setPortfolio(INITIAL_PORTFOLIO);
    setHero(DEFAULT_HERO);
    setServices(SERVICES);
    setPlans(ENGAGEMENT_PLANS);
    setFaqs(FAQS);
    setCustomPages(DEFAULT_CUSTOM_PAGES);
    setSettings(DEFAULT_SETTINGS);
    saveAll({
      portfolio: INITIAL_PORTFOLIO,
      hero: DEFAULT_HERO,
      services: SERVICES,
      plans: ENGAGEMENT_PLANS,
      faqs: FAQS,
      customPages: DEFAULT_CUSTOM_PAGES,
      settings: DEFAULT_SETTINGS,
    });
  };

  const exportDataJSON = () => {
    return JSON.stringify(
      { portfolio, hero, services, plans, faqs, customPages, settings },
      null,
      2
    );
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.portfolio) setPortfolio(parsed.portfolio);
      if (parsed.hero) setHero(parsed.hero);
      if (parsed.services) setServices(parsed.services);
      if (parsed.plans) setPlans(parsed.plans);
      if (parsed.faqs) setFaqs(parsed.faqs);
      if (parsed.customPages) setCustomPages(parsed.customPages);
      if (parsed.settings) setSettings(parsed.settings);
      saveAll({
        portfolio: parsed.portfolio || portfolio,
        hero: parsed.hero || hero,
        services: parsed.services || services,
        plans: parsed.plans || plans,
        faqs: parsed.faqs || faqs,
        customPages: parsed.customPages || customPages,
        settings: parsed.settings || settings,
      });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <SiteContext.Provider
      value={{
        portfolio,
        hero,
        services,
        plans,
        faqs,
        customPages,
        settings,
        isLoaded,
        addProject,
        updateProject,
        deleteProject,
        updateHero,
        updateServices,
        updatePlans,
        updateFaqs,
        addCustomPage,
        updateCustomPage,
        deleteCustomPage,
        updateSettings,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
}

export function useSiteContent() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a SiteProvider');
  }
  return context;
}
