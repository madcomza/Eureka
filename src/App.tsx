import React, { useState } from 'react';
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
import { CodeModal } from './components/CodeModal';
import {
  Code2,
  FileCode2,
  Monitor,
  Tablet,
  Smartphone,
  Check,
  Layers,
  FileText,
  Building2,
  Sparkles,
  Bug,
  ShieldCheck,
  Truck,
  HardHat,
  FolderKanban,
  UserCheck,
  Briefcase,
  Scale,
  FileCheck2,
  Calculator,
  Clock
} from 'lucide-react';


import { getPageSnippets } from './data/snippets';

type ViewportMode = 'desktop' | 'tablet' | 'mobile';
type ActivePage =
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
  const [currentPage, setCurrentPage] = useState<ActivePage>('delay-analysis');
  const [currentSubcategory, setCurrentSubcategory] = useState<'all' | 'facilities' | 'construction' | 'consultancy'>('consultancy');
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState<'html' | 'css'>('html');
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [quickCopied, setQuickCopied] = useState<'html' | 'css' | null>(null);

  const handleNavigate = (page: ActivePage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    setCurrentPage(page);
    if (subcategory) {
      setCurrentSubcategory(subcategory);
    }
  };

  const openCodeModal = (tab: 'html' | 'css') => {
    setModalInitialTab(tab);
    setCodeModalOpen(true);
  };

  const handleQuickCopy = (type: 'html' | 'css') => {
    const snippets = getPageSnippets(currentPage);
    const text = type === 'html' ? snippets.html : snippets.css;
    navigator.clipboard.writeText(text);
    setQuickCopied(type);
    setTimeout(() => setQuickCopied(null), 2200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Elementor Developer Toolbar */}
      <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-blue-700 flex items-center justify-center font-black text-white text-xs shadow-md">
            EF
          </div>
          <div>
            <h1 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Eureka Facilities Management</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-semibold border border-red-500/30">
                Elementor Pro Snippet
              </span>
            </h1>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Pixel-perfect HTML5 structure &amp; Scoped CSS preview
            </p>
          </div>
        </div>

        {/* Page Switcher */}
        <div className="flex items-center bg-slate-800/90 p-1 rounded-lg border border-slate-700/60 overflow-x-auto">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'home'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'about'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>About Us</span>
          </button>
          <button
            onClick={() => setCurrentPage('solutions')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'solutions'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Solutions</span>
          </button>
          <button
            onClick={() => setCurrentPage('facilities-management')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'facilities-management'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-sky-400 hover:text-sky-200'
            }`}
            title="Standalone Service Page: Facilities Management Services"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>FM Service</span>
          </button>
          <button
            onClick={() => setCurrentPage('commercial-cleaning')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'commercial-cleaning'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-sky-400 hover:text-sky-200'
            }`}
            title="Standalone Service Page: Commercial Cleaning Services"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cleaning &amp; Hygiene</span>
          </button>
          <button
            onClick={() => setCurrentPage('pest-control')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'pest-control'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-emerald-400 hover:text-emerald-200'
            }`}
            title="Standalone Service Page: Pest Control Services"
          >
            <Bug className="w-3.5 h-3.5" />
            <span>Pest Control</span>
          </button>
          <button
            onClick={() => setCurrentPage('pre-soil-treatment')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'pre-soil-treatment'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-400 hover:text-amber-200'
            }`}
            title="Standalone Service Page: Pre-Soil Treatment & Soil Poisoning Services"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Soil Treatment</span>
          </button>
          <button
            onClick={() => setCurrentPage('office-relocation')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'office-relocation'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-blue-400 hover:text-blue-200'
            }`}
            title="Standalone Service Page: Office & Business Relocation Services"
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Office Relocation</span>
          </button>
          <button
            onClick={() => setCurrentPage('construction-management')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'construction-management'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-red-400 hover:text-red-200'
            }`}
            title="Standalone Service Page: Construction Management Services"
          >
            <HardHat className="w-3.5 h-3.5" />
            <span>Construction Mgmt</span>
          </button>
          <button
            onClick={() => setCurrentPage('project-management')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'project-management'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-rose-400 hover:text-rose-200'
            }`}
            title="Standalone Service Page: Project Management Services (PROCSA Stages 1-6)"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Project Mgmt</span>
          </button>
          <button
            onClick={() => setCurrentPage('freelance-pm')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'freelance-pm'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-amber-400 hover:text-amber-200'
            }`}
            title="Standalone Service Page: Freelance Construction Project Management Services"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Freelance PM</span>
          </button>
          <button
            onClick={() => setCurrentPage('construction-consultancy')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'construction-consultancy'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-rose-300 hover:text-white'
            }`}
            title="Standalone Service Page: Construction Consultancy & Commercial Advisory Services"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Consultancy</span>
          </button>
          <button
            onClick={() => setCurrentPage('quantity-surveying')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'quantity-surveying'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-red-300 hover:text-white'
            }`}
            title="Standalone Service Page: Quantity Surveying & Cost Engineering (ASAQS / SACQSP)"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Quantity Surveying</span>
          </button>
          <button
            onClick={() => setCurrentPage('construction-claims')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'construction-claims'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-red-300 hover:text-white'
            }`}
            title="Standalone Service Page: Construction Claims & Contract Consultancy Services"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Claims &amp; Contracts</span>
          </button>
          <button
            onClick={() => setCurrentPage('delay-analysis')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'delay-analysis'
                ? 'bg-red-700 text-white shadow-sm'
                : 'text-red-300 hover:text-white'
            }`}
            title="Standalone Service Page: Forensic Delay Analysis & Programme Consultancy Services"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Delay Analysis</span>
          </button>
          <button
            onClick={() => setCurrentPage('pricing')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'pricing'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Pricing</span>
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`px-2.5 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
              currentPage === 'contact'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Viewport Switcher */}
        <div className="flex items-center bg-slate-800/80 p-1 rounded-lg border border-slate-700/60">
          <button
            onClick={() => setViewport('desktop')}
            title="Desktop View"
            className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === 'desktop'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => setViewport('tablet')}
            title="Tablet View (768px - 1024px)"
            className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === 'tablet'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => setViewport('mobile')}
            title="Mobile View (<768px)"
            className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewport === 'mobile'
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Code Snippet Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuickCopy('html')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all active:scale-95"
            title={`Copy ${currentPage === 'about' ? 'About Us' : currentPage === 'solutions' ? 'Solutions' : currentPage === 'facilities-management' ? 'FM Service' : currentPage === 'commercial-cleaning' ? 'Cleaning Service' : currentPage === 'pest-control' ? 'Pest Control' : currentPage === 'pricing' ? 'Pricing' : currentPage === 'contact' ? 'Contact' : 'Home'} HTML`}
          >
            {quickCopied === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <FileCode2 className="w-3.5 h-3.5 text-orange-400" />}
            <span className="hidden sm:inline">{quickCopied === 'html' ? 'HTML Copied!' : 'Copy HTML'}</span>
          </button>

          <button
            onClick={() => handleQuickCopy('css')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all active:scale-95"
            title={`Copy ${currentPage === 'about' ? 'About Us' : currentPage === 'solutions' ? 'Solutions' : currentPage === 'facilities-management' ? 'FM Service' : currentPage === 'commercial-cleaning' ? 'Cleaning Service' : currentPage === 'pest-control' ? 'Pest Control' : currentPage === 'pricing' ? 'Pricing' : currentPage === 'contact' ? 'Contact' : 'Home'} CSS`}
          >
            {quickCopied === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code2 className="w-3.5 h-3.5 text-sky-400" />}
            <span className="hidden sm:inline">{quickCopied === 'css' ? 'CSS Copied!' : 'Copy CSS'}</span>
          </button>

          <button
            onClick={() => openCodeModal('html')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>View Snippets</span>
          </button>
        </div>
      </header>

      {/* Main Preview Canvas Area */}
      <main className="flex-1 flex justify-center items-start p-2 sm:p-4 md:p-6 overflow-x-auto bg-slate-900/50">
        <div
          className={`transition-all duration-300 shadow-2xl rounded-lg overflow-hidden border border-slate-800 bg-white ${
            viewport === 'desktop'
              ? 'w-full max-w-7xl'
              : viewport === 'tablet'
              ? 'w-[768px] max-w-full my-4 border-2 border-slate-700 rounded-2xl ring-8 ring-slate-800/60'
              : 'w-[390px] max-w-full my-4 border-2 border-slate-700 rounded-3xl ring-8 ring-slate-800/60'
          }`}
        >
          {/* Responsive Preview Device Header when in mobile/tablet mode */}
          {viewport !== 'desktop' && (
            <div className="bg-slate-900 text-slate-400 text-[11px] font-mono px-4 py-1.5 flex items-center justify-between border-b border-slate-800">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <span>{viewport === 'tablet' ? 'Tablet (768px)' : 'Mobile (390px)'}</span>
              </span>
              <span>
                Responsive Simulation &bull;{' '}
                {currentPage === 'about'
                  ? 'About Us'
                  : currentPage === 'solutions'
                  ? 'Solutions'
                  : currentPage === 'facilities-management'
                  ? 'Facilities Management Services'
                  : currentPage === 'commercial-cleaning'
                  ? 'Commercial Cleaning Services'
                  : currentPage === 'pest-control'
                  ? 'Pest Control Services'
                  : currentPage === 'pre-soil-treatment'
                  ? 'Pre-Soil Treatment & Soil Poisoning'
                  : currentPage === 'office-relocation'
                  ? 'Office & Business Relocation Services'
                  : currentPage === 'construction-management'
                  ? 'Construction Management & Site Supervision'
                  : currentPage === 'project-management'
                  ? 'Project Management Services (PROCSA Stages 1-6)'
                  : currentPage === 'freelance-pm'
                  ? 'Freelance Construction Project Management Services'
                  : currentPage === 'construction-consultancy'
                  ? 'Construction Consultancy & Commercial Advisory Services'
                  : currentPage === 'quantity-surveying'
                  ? 'Quantity Surveying & Cost Engineering (ASAQS / SACQSP)'
                  : currentPage === 'construction-claims'
                  ? 'Construction Claims & Contract Consultancy (FIDIC / JBCC / NEC / GCC)'
                  : currentPage === 'delay-analysis'
                  ? 'Forensic Delay Analysis & Programme Consultancy (SCL Protocol / P6)'
                  : currentPage === 'pricing'
                  ? 'Pricing'
                  : currentPage === 'contact'
                  ? 'Contact'
                  : 'Home'}
              </span>
            </div>
          )}

          {/* Render Active Page */}
          {currentPage === 'home' ? (
            <EurekaWebsite
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'about' ? (
            <EurekaAboutPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'solutions' ? (
            <EurekaSolutionsPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
              initialSubcategory={currentSubcategory}
            />
          ) : currentPage === 'facilities-management' ? (
            <EurekaFacilitiesManagementPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'commercial-cleaning' ? (
            <EurekaCommercialCleaningPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'pest-control' ? (
            <EurekaPestControlPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'pre-soil-treatment' ? (
            <EurekaPreSoilTreatmentPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'office-relocation' ? (
            <EurekaRelocationPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'construction-management' ? (
            <EurekaConstructionManagementPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'project-management' ? (
            <EurekaProjectManagementPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'freelance-pm' ? (
            <EurekaFreelancePmPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'construction-consultancy' ? (
            <EurekaConstructionConsultancyPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'quantity-surveying' ? (
            <EurekaQuantitySurveyingPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'construction-claims' ? (
            <EurekaConstructionClaimsPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'delay-analysis' ? (
            <EurekaDelayAnalysisPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : currentPage === 'pricing' ? (
            <EurekaPricingPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          ) : (
            <EurekaContactPage
              onOpenCode={openCodeModal}
              onNavigate={handleNavigate}
            />
          )}
        </div>
      </main>

      {/* Code Snippets Viewer Modal */}
      <CodeModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
        initialTab={modalInitialTab}
        activePage={currentPage}
      />
    </div>
  );
}
