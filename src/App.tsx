import React, { useState, useEffect } from 'react';
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
import { EurekaContactPage } from './components/EurekaContactPage';
import { EurekaChatbot } from './components/EurekaChatbot';

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
  | 'pricing'
  | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<ActivePage>('home');
  const [currentSubcategory, setCurrentSubcategory] = useState<'all' | 'facilities' | 'construction' | 'consultancy'>('all');

  // Scroll to top upon page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: ActivePage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    setCurrentPage(page);
    if (subcategory) {
      setCurrentSubcategory(subcategory);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
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
      {currentPage === 'contact' && (
        <EurekaContactPage onNavigate={handleNavigate} />
      )}

      {/* Global EFMS Consultant Chatbot with FAQ Knowledge & Email Escalation */}
      <EurekaChatbot onNavigate={handleNavigate} currentPage={currentPage} />
    </div>
  );
}
