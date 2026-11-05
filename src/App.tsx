import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollProgressBar, ScrollToTopButton } from './components/ScrollAnimation';
import { EurekaWebsite } from './components/EurekaWebsite';
import { EurekaAboutPage } from './components/EurekaAboutPage';
import { EurekaSolutionsPage } from './components/EurekaSolutionsPage';
import { EurekaFacilitiesManagementPage } from './components/EurekaFacilitiesManagementPage';
import { EurekaCommercialCleaningPage } from './components/EurekaCommercialCleaningPage';
import { EurekaPestControlPage } from './components/EurekaPestControlPage';
import { EurekaPreSoilTreatmentPage } from './components/EurekaPreSoilTreatmentPage';
import { EurekaRelocationPage } from './components/EurekaRelocationPage';
import { EurekaConstructionManagementPage } from './components/EurekaConstructionManagementPage';
import { EurekaProjectManagementPage } from './components/EurekaProjectManagementPage';
import { EurekaFreelancePmPage } from './components/EurekaFreelancePmPage';
import { EurekaConstructionConsultancyPage } from './components/EurekaConstructionConsultancyPage';
import { EurekaQuantitySurveyingPage } from './components/EurekaQuantitySurveyingPage';
import { EurekaConstructionClaimsPage } from './components/EurekaConstructionClaimsPage';
import { EurekaDelayAnalysisPage } from './components/EurekaDelayAnalysisPage';
import { EurekaPricingPage } from './components/EurekaPricingPage';
import { EurekaProjectsPage } from './components/EurekaProjectsPage';
import { EurekaGalleryPage } from './components/EurekaGalleryPage';
import { EurekaContactPage } from './components/EurekaContactPage';
import { EurekaPrivacyPolicyPage } from './components/EurekaPrivacyPolicyPage';
import { EurekaTermsConditionsPage } from './components/EurekaTermsConditionsPage';
import { EurekaChatbot } from './components/EurekaChatbot';
import { EurekaCookieConsent } from './components/EurekaCookieConsent';

export type ActivePage =
  | 'home'
  | 'about'
  | 'solutions'
  | 'facilities-management'
  | 'commercial-cleaning'
  | 'pest-control'
  | 'pre-soil-treatment'
  | 'office-relocation'
  | 'construction-management'
  | 'project-management'
  | 'freelance-pm'
  | 'construction-consultancy'
  | 'quantity-surveying'
  | 'construction-claims'
  | 'delay-analysis'
  | 'projects'
  | 'gallery'
  | 'pricing'
  | 'contact'
  | 'privacy-policy'
  | 'terms-conditions';

export interface PageSeoConfig {
  path: string;
  canonical: string;
  title: string;
  description: string;
}

export const PAGE_SEO_CONFIG: Record<ActivePage, PageSeoConfig> = {
  home: {
    path: '/',
    canonical: 'https://eurekasolutions.co.za/',
    title: 'Eureka Facilities Management Solutions | Commercial & Construction Services',
    description: 'Professional Facilities Management, Commercial Cleaning, Pest Control, Construction Management, and Specialist Property Solutions across South Africa.',
  },
  about: {
    path: '/about',
    canonical: 'https://eurekasolutions.co.za/about',
    title: 'About Us | Eureka Facilities Management Solutions (EFMS)',
    description: 'Learn about Eureka Facilities Management Solutions, our leadership under Monwabisi Makinana, certifications (CIPC, SACPCMP, PMI), and mission.',
  },
  solutions: {
    path: '/solutions',
    canonical: 'https://eurekasolutions.co.za/solutions',
    title: 'All Solutions & Services | Eureka Facilities Management',
    description: 'Explore our full spectrum of facilities management, commercial cleaning, pest control, construction management, and strategic consultancy.',
  },
  'facilities-management': {
    path: '/facilities-management',
    canonical: 'https://eurekasolutions.co.za/facilities-management',
    title: 'Integrated Facilities Management Services | Eureka Solutions',
    description: 'Comprehensive hard and soft facilities management services, building maintenance, compliance, and asset life-cycle solutions.',
  },
  'commercial-cleaning': {
    path: '/commercial-cleaning',
    canonical: 'https://eurekasolutions.co.za/commercial-cleaning',
    title: 'Commercial Cleaning & Industrial Hygiene | Eureka Solutions',
    description: 'Deep cleaning, daily commercial hygiene, corporate office sanitation, and specialized industrial cleaning solutions in South Africa.',
  },
  'pest-control': {
    path: '/pest-control',
    canonical: 'https://eurekasolutions.co.za/pest-control',
    title: 'Professional Pest Control & Fumigation | Eureka Solutions',
    description: 'Certified commercial & residential pest eradication, SAPCA compliant eco-friendly fumigation, rodent, insect, and termite control.',
  },
  'pre-soil-treatment': {
    path: '/pre-soil-treatment',
    canonical: 'https://eurekasolutions.co.za/pre-soil-treatment',
    title: 'Pre-Construction Soil Poisoning & Termite Proofing | Eureka Solutions',
    description: 'Certified pre-construction termite barrier treatments and soil poisoning with NHBRC warranty certificates for residential & commercial builds.',
  },
  'office-relocation': {
    path: '/office-relocation',
    canonical: 'https://eurekasolutions.co.za/office-relocation',
    title: 'Turnkey Office Relocation & Corporate Moves | Eureka Solutions',
    description: 'Zero-downtime office moves, IT infrastructure disconnection/recommissioning, furniture decommissioning, and churn management.',
  },
  'construction-management': {
    path: '/construction-management',
    canonical: 'https://eurekasolutions.co.za/construction-management',
    title: 'Construction Project Management & Site Oversight | Eureka Solutions',
    description: 'SACPCMP registered construction managers ensuring safety compliance, timeline acceleration, quality assurance, and milestone delivery.',
  },
  'project-management': {
    path: '/project-management',
    canonical: 'https://eurekasolutions.co.za/project-management',
    title: 'Professional Built Environment Project Management | Eureka Solutions',
    description: 'End-to-end CAPEX project governance, stakeholder coordination, procurement planning, and risk management across Gauteng and South Africa.',
  },
  'freelance-pm': {
    path: '/freelance-pm',
    canonical: 'https://eurekasolutions.co.za/freelance-pm',
    title: 'Freelance Project Management & Client Representation | Eureka Solutions',
    description: 'Flexible, high-impact freelance project manager and principal agent services for developers, property funds, and public sector bodies.',
  },
  'construction-consultancy': {
    path: '/construction-consultancy',
    canonical: 'https://eurekasolutions.co.za/construction-consultancy',
    title: 'Built Environment Strategic Consultancy | Eureka Solutions',
    description: 'Strategic advisory on feasibility, buildability, infrastructure audits, condition assessments, and governance for major capital works.',
  },
  'quantity-surveying': {
    path: '/quantity-surveying',
    canonical: 'https://eurekasolutions.co.za/quantity-surveying',
    title: 'Quantity Surveying & Commercial Cost Management | Eureka Solutions',
    description: 'Rigorous bills of quantities, cost modeling, tender evaluation, interim payment valuations, and final account settlement.',
  },
  'construction-claims': {
    path: '/construction-claims',
    canonical: 'https://eurekasolutions.co.za/construction-claims',
    title: 'Construction Contract Advisory & Dispute Assessment | Eureka Solutions',
    description: 'JBCC, GCC, NEC3/4, and FIDIC contractual claim preparation, dispute evaluation, quantum quantification, and mediation advisory.',
  },
  'delay-analysis': {
    path: '/delay-analysis',
    canonical: 'https://eurekasolutions.co.za/delay-analysis',
    title: 'Forensic Delay Analysis & Programme Scheduling | Eureka Solutions',
    description: 'Time Impact Analysis (TIA), Windows Analysis, As-Built vs As-Planned delay claim modeling, and critical path disruption advisory.',
  },
  projects: {
    path: '/projects',
    canonical: 'https://eurekasolutions.co.za/projects',
    title: 'Featured Projects & Case Studies | Eureka Solutions',
    description: 'Track record of delivered commercial, educational, healthcare, and retail infrastructure projects across South Africa.',
  },
  gallery: {
    path: '/gallery',
    canonical: 'https://eurekasolutions.co.za/gallery',
    title: 'Visual Portfolio & Project Gallery | Eureka Solutions',
    description: 'High-resolution photographs of commercial cleaning, facilities maintenance, and construction management work in progress.',
  },
  pricing: {
    path: '/pricing',
    canonical: 'https://eurekasolutions.co.za/pricing',
    title: 'Service Pricing & Cost Estimator | Eureka Solutions',
    description: 'Transparent rate cards, instant online price estimates, and custom quote requests for facilities and construction services.',
  },
  contact: {
    path: '/contact',
    canonical: 'https://eurekasolutions.co.za/contact',
    title: 'Contact Us & Request a Quote | Eureka Solutions',
    description: 'Get in touch with Eureka Solutions. Call or WhatsApp +27 60 880 9635, or visit us at 170 Pitts Avenue, Weavind Park, Pretoria.',
  },
  'privacy-policy': {
    path: '/privacy-policy',
    canonical: 'https://eurekasolutions.co.za/privacy-policy',
    title: 'Privacy Policy & POPIA Compliance | Eureka Solutions',
    description: 'Our Protection of Personal Information Act (POPIA) compliance policy, data retention terms, and client privacy commitments.',
  },
  'terms-conditions': {
    path: '/terms-conditions',
    canonical: 'https://eurekasolutions.co.za/terms-conditions',
    title: 'Terms and Conditions of Service | Eureka Solutions',
    description: 'General terms and conditions of engagement, contract specifications, and legal governance for Eureka Facilities Management Solutions.',
  },
};

function parseInitialRoute(): { page: ActivePage; subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy' } {
  if (typeof window === 'undefined') return { page: 'home' };

  try {
    const searchParams = new URLSearchParams(window.location.search);
    const pageParam = searchParams.get('page');
    const subcatParam = searchParams.get('subcat') as 'all' | 'facilities' | 'construction' | 'consultancy' | null;

    let hash = window.location.hash.replace(/^#\/?/, '').trim();
    if (hash.includes('?')) hash = hash.split('?')[0];

    let pathname = window.location.pathname.replace(/^\/|\/$/g, '').trim();

    const candidate = (pageParam || pathname || hash).toLowerCase();

    const validPageMap: Record<string, ActivePage> = {
      '': 'home',
      'home': 'home',
      'index': 'home',
      'index.html': 'home',
      'about': 'about',
      'about-us': 'about',
      'solutions': 'solutions',
      'facilities-management': 'facilities-management',
      'facilities': 'facilities-management',
      'commercial-cleaning': 'commercial-cleaning',
      'cleaning': 'commercial-cleaning',
      'pest-control': 'pest-control',
      'pest': 'pest-control',
      'pre-soil-treatment': 'pre-soil-treatment',
      'soil-treatment': 'pre-soil-treatment',
      'office-relocation': 'office-relocation',
      'relocation': 'office-relocation',
      'construction-management': 'construction-management',
      'project-management': 'project-management',
      'freelance-pm': 'freelance-pm',
      'construction-consultancy': 'construction-consultancy',
      'consultancy': 'construction-consultancy',
      'quantity-surveying': 'quantity-surveying',
      'qs': 'quantity-surveying',
      'construction-claims': 'construction-claims',
      'claims': 'construction-claims',
      'delay-analysis': 'delay-analysis',
      'projects': 'projects',
      'gallery': 'gallery',
      'pricing': 'pricing',
      'quote': 'pricing',
      'contact': 'contact',
      'contact-us': 'contact',
      'privacy-policy': 'privacy-policy',
      'privacy': 'privacy-policy',
      'terms-conditions': 'terms-conditions',
      'terms': 'terms-conditions',
    };

    if (candidate && validPageMap[candidate]) {
      return {
        page: validPageMap[candidate],
        subcategory: subcatParam && ['all', 'facilities', 'construction', 'consultancy'].includes(subcatParam) ? subcatParam : undefined,
      };
    }
  } catch {
    // fallback
  }

  return { page: 'home' };
}

export default function App() {
  const initialRoute = parseInitialRoute();
  const [currentPage, setCurrentPage] = useState<ActivePage>(initialRoute.page);
  const [currentSubcategory, setCurrentSubcategory] = useState<'all' | 'facilities' | 'construction' | 'consultancy'>(
    initialRoute.subcategory || 'all'
  );

  // Synchronize browser history and popstate for back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = parseInitialRoute();
      setCurrentPage(route.page);
      if (route.subcategory) {
        setCurrentSubcategory(route.subcategory);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top and dynamically update title, description, and canonical URL per page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const meta = PAGE_SEO_CONFIG[currentPage] || PAGE_SEO_CONFIG.home;

      // 1. Dynamic Page Title
      document.title = meta.title;

      // 2. Dynamic Meta Description
      let descTag = document.querySelector('meta[name="description"]');
      if (!descTag) {
        descTag = document.createElement('meta');
        descTag.setAttribute('name', 'description');
        document.head.appendChild(descTag);
      }
      descTag.setAttribute('content', meta.description);

      // 3. Dynamic Canonical URL Tag for Google Search & Google Ads
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute('href', meta.canonical);

      // 4. Dynamic OpenGraph URL, Title, and Description
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute('content', meta.canonical);

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', meta.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', meta.description);

      // 5. Dynamic Twitter Cards
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', meta.title);

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', meta.description);
    } catch {
      // safe fallback
    }
  }, [currentPage]);

  const handleNavigate = (page: ActivePage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    setCurrentPage(page);
    if (subcategory) {
      setCurrentSubcategory(subcategory);
    }

    try {
      const config = PAGE_SEO_CONFIG[page] || PAGE_SEO_CONFIG.home;
      const targetPath = config.path;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page, subcategory }, '', targetPath);
      }
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased relative">
      {/* Sleek Global Scroll Reading Progress Indicator */}
      <ScrollProgressBar />

      {/* Animated Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {currentPage === 'home' && (
            <EurekaWebsite onNavigate={handleNavigate} />
          )}
          {currentPage === 'about' && (
            <EurekaAboutPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'solutions' && (
            <EurekaSolutionsPage
              onNavigate={handleNavigate}
              initialSubcategory={currentSubcategory}
            />
          )}
          {currentPage === 'facilities-management' && (
            <EurekaFacilitiesManagementPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'commercial-cleaning' && (
            <EurekaCommercialCleaningPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'pest-control' && (
            <EurekaPestControlPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'pre-soil-treatment' && (
            <EurekaPreSoilTreatmentPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'office-relocation' && (
            <EurekaRelocationPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'construction-management' && (
            <EurekaConstructionManagementPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'project-management' && (
            <EurekaProjectManagementPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'freelance-pm' && (
            <EurekaFreelancePmPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'construction-consultancy' && (
            <EurekaConstructionConsultancyPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'quantity-surveying' && (
            <EurekaQuantitySurveyingPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'construction-claims' && (
            <EurekaConstructionClaimsPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'delay-analysis' && (
            <EurekaDelayAnalysisPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'pricing' && (
            <EurekaPricingPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'projects' && (
            <EurekaProjectsPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'gallery' && (
            <EurekaGalleryPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'contact' && (
            <EurekaContactPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'privacy-policy' && (
            <EurekaPrivacyPolicyPage onNavigate={handleNavigate} />
          )}
          {currentPage === 'terms-conditions' && (
            <EurekaTermsConditionsPage onNavigate={handleNavigate} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Floating Scroll-To-Top Quick Action Button */}
      <ScrollToTopButton />

      {/* Global EFMS Consultant Chatbot with FAQ Knowledge & Email Escalation */}
      <EurekaChatbot onNavigate={handleNavigate} currentPage={currentPage} />

      {/* Global Bottom-Left Cookie and Privacy Consent Popup Banner */}
      <EurekaCookieConsent onNavigate={handleNavigate} />
    </div>
  );
}
