import React, { useState } from 'react';
import { EurekaLogo } from './EurekaLogo';
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
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
  Clock,
  ArrowRight,
  Code2,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

export type NavPage =
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

export interface EurekaHeaderProps {
  currentPage?: NavPage | string;
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

export const EurekaHeader: React.FC<EurekaHeaderProps> = ({
  currentPage = 'home',
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(true);

  const isSolutionsActive = [
    'solutions',
    'facilities-management',
    'commercial-cleaning',
    'pest-control',
    'pre-soil-treatment',
    'office-relocation',
    'construction-management',
    'project-management',
    'freelance-pm',
    'construction-consultancy',
    'quantity-surveying',
    'construction-claims',
    'delay-analysis'
  ].includes(currentPage);

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  return (
    <>
      {/* 1. Top Utility / Credentials Bar */}
      <div id="eureka-top-bar" className="bg-[#0b1b3d] text-slate-200 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Left: Professional Qualifications & Coverage */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-red-400 font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>SACPCMP Pr. CPM &amp; PMI PMP® Registered</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>Pretoria &bull; Gauteng &bull; Nationwide</span>
            </span>
          </div>

          {/* Right: Direct Contact & Hotline */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
            <a
              href="tel:+27745187012"
              className="flex items-center gap-1.5 text-slate-200 hover:text-red-400 font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 text-red-400" />
              <span>+27 74 518 7012</span>
            </a>
            <a
              href="mailto:info@eurekasolutions.co.za"
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-sky-400 font-semibold transition-colors"
            >
              <Mail className="w-3 h-3 text-sky-400" />
              <span>info@eurekasolutions.co.za</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Standardized Header Navigation */}
      <header id="main-header" className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Official Brand Logo */}
          <button
            id="eureka-header-logo-btn"
            onClick={() => handleNav('home')}
            className="flex items-center group py-1 text-left focus:outline-none cursor-pointer"
            aria-label="Eureka Facilities Management Solutions Home"
          >
            <EurekaLogo className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-[1.02]" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-xs font-bold tracking-wider text-slate-800">
            {/* HOME */}
            <button
              onClick={() => handleNav('home')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'home'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              HOME
            </button>

            {/* ABOUT US */}
            <button
              onClick={() => handleNav('about')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'about'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              ABOUT US
            </button>

            {/* SOLUTIONS MEGA DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-1 pb-1 ${
                  isSolutionsActive
                    ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                    : 'hover:text-[#d91b1b]'
                }`}
              >
                <span>SOLUTIONS</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div
                  onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[720px] bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Our 3 Core Service Divisions
                    </span>
                    <button
                      onClick={() => handleNav('solutions', 'all')}
                      className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      <span>View All Solutions Overview</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {/* Pillar 1: Facilities */}
                    <div className="p-2.5 rounded-lg bg-sky-50/60 border border-sky-100 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-sky-800 flex items-center gap-1 mb-2">
                          <Building2 className="w-3 h-3 text-sky-600" />
                          <span>1. Facilities &amp; Property</span>
                        </div>
                        <div className="space-y-1">
                          <button
                            onClick={() => handleNav('facilities-management')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'facilities-management'
                                ? 'bg-sky-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-sky-100 hover:text-sky-900'
                            }`}
                          >
                            <span>Facilities Management</span>
                          </button>
                          <button
                            onClick={() => handleNav('commercial-cleaning')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'commercial-cleaning'
                                ? 'bg-sky-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-sky-100 hover:text-sky-900'
                            }`}
                          >
                            <span>Cleaning &amp; Hygiene</span>
                          </button>
                          <button
                            onClick={() => handleNav('pest-control')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'pest-control'
                                ? 'bg-sky-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-sky-100 hover:text-sky-900'
                            }`}
                          >
                            <span>Pest Control</span>
                          </button>
                          <button
                            onClick={() => handleNav('pre-soil-treatment')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'pre-soil-treatment'
                                ? 'bg-sky-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-sky-100 hover:text-sky-900'
                            }`}
                          >
                            <span>Pre-Soil Treatment</span>
                          </button>
                          <button
                            onClick={() => handleNav('office-relocation')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'office-relocation'
                                ? 'bg-sky-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-sky-100 hover:text-sky-900'
                            }`}
                          >
                            <span>Office Relocation</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pillar 2: Construction Delivery */}
                    <div className="p-2.5 rounded-lg bg-red-50/60 border border-red-100 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-red-800 flex items-center gap-1 mb-2">
                          <HardHat className="w-3 h-3 text-red-600" />
                          <span>2. Construction Delivery</span>
                        </div>
                        <div className="space-y-1">
                          <button
                            onClick={() => handleNav('construction-management')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'construction-management'
                                ? 'bg-red-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-red-100 hover:text-red-900'
                            }`}
                          >
                            <span>Construction Mgmt</span>
                          </button>
                          <button
                            onClick={() => handleNav('project-management')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'project-management'
                                ? 'bg-red-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-red-100 hover:text-red-900'
                            }`}
                          >
                            <span>Project Mgmt (PROCSA)</span>
                          </button>
                          <button
                            onClick={() => handleNav('freelance-pm')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'freelance-pm'
                                ? 'bg-red-600 text-white font-bold'
                                : 'text-slate-700 hover:bg-red-100 hover:text-red-900'
                            }`}
                          >
                            <span>Freelance PM Support</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Pillar 3: Specialist Consultancy */}
                    <div className="p-2.5 rounded-lg bg-slate-100/70 border border-slate-200 flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-800 flex items-center gap-1 mb-2">
                          <Briefcase className="w-3 h-3 text-[#0b1b3d]" />
                          <span>3. Specialist Consultancy</span>
                        </div>
                        <div className="space-y-1">
                          <button
                            onClick={() => handleNav('construction-consultancy')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'construction-consultancy'
                                ? 'bg-[#0b1b3d] text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            <span>Consultancy Advisory</span>
                          </button>
                          <button
                            onClick={() => handleNav('quantity-surveying')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'quantity-surveying'
                                ? 'bg-[#0b1b3d] text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            <span>Quantity Surveying (QS)</span>
                          </button>
                          <button
                            onClick={() => handleNav('construction-claims')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'construction-claims'
                                ? 'bg-[#0b1b3d] text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            <span>Claims &amp; Contracts</span>
                          </button>
                          <button
                            onClick={() => handleNav('delay-analysis')}
                            className={`w-full text-left px-2 py-1.5 rounded text-[11px] font-semibold transition-colors flex items-center justify-between ${
                              currentPage === 'delay-analysis'
                                ? 'bg-[#0b1b3d] text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                            }`}
                          >
                            <span>Forensic Delay Analysis</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PRICING */}
            <button
              onClick={() => handleNav('pricing')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'pricing'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              PRICING
            </button>

            {/* CONTACT */}
            <button
              onClick={() => handleNav('contact')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'contact'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              CONTACT
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="px-4 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="space-y-1">
              <button
                onClick={() => handleNav('home')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'home' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNav('about')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'about' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                About Us
              </button>

              {/* Mobile Solutions Collapsible */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-bold text-slate-800 flex items-center justify-between bg-slate-50"
                >
                  <span>Our Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileSolutionsOpen && (
                  <div className="pl-3 pr-1 pt-2 space-y-2">
                    <button
                      onClick={() => handleNav('solutions', 'all')}
                      className="w-full text-left px-2 py-1.5 text-xs font-bold text-red-600 hover:bg-slate-50 rounded"
                    >
                      &rarr; Solutions Overview
                    </button>

                    {/* Facilities Section */}
                    <div className="text-[10px] font-black uppercase tracking-wider text-sky-700 px-2 pt-1">
                      Facilities &amp; Property
                    </div>
                    <div className="space-y-1 pl-2 border-l border-sky-200">
                      <button
                        onClick={() => handleNav('facilities-management')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-sky-600"
                      >
                        Facilities Management Services
                      </button>
                      <button
                        onClick={() => handleNav('commercial-cleaning')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-sky-600"
                      >
                        Commercial Cleaning Services
                      </button>
                      <button
                        onClick={() => handleNav('pest-control')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-sky-600"
                      >
                        Pest Control Services
                      </button>
                      <button
                        onClick={() => handleNav('pre-soil-treatment')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-sky-600"
                      >
                        Pre-Soil Treatment &amp; Poisoning
                      </button>
                      <button
                        onClick={() => handleNav('office-relocation')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-sky-600"
                      >
                        Office &amp; Business Relocation
                      </button>
                    </div>

                    {/* Construction Section */}
                    <div className="text-[10px] font-black uppercase tracking-wider text-red-700 px-2 pt-1">
                      Construction Delivery
                    </div>
                    <div className="space-y-1 pl-2 border-l border-red-200">
                      <button
                        onClick={() => handleNav('construction-management')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-red-600"
                      >
                        Construction Management
                      </button>
                      <button
                        onClick={() => handleNav('project-management')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-red-600"
                      >
                        Project Management (PROCSA)
                      </button>
                      <button
                        onClick={() => handleNav('freelance-pm')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-red-600"
                      >
                        Freelance Project Management
                      </button>
                    </div>

                    {/* Consultancy Section */}
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-700 px-2 pt-1">
                      Specialist Consultancy
                    </div>
                    <div className="space-y-1 pl-2 border-l border-slate-300">
                      <button
                        onClick={() => handleNav('construction-consultancy')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-[#0b1b3d]"
                      >
                        Consultancy &amp; Advisory
                      </button>
                      <button
                        onClick={() => handleNav('quantity-surveying')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-[#0b1b3d]"
                      >
                        Quantity Surveying (QS)
                      </button>
                      <button
                        onClick={() => handleNav('construction-claims')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-[#0b1b3d]"
                      >
                        Claims &amp; Contracts Consultancy
                      </button>
                      <button
                        onClick={() => handleNav('delay-analysis')}
                        className="w-full text-left px-2 py-1 text-xs text-slate-700 hover:text-[#0b1b3d]"
                      >
                        Forensic Delay Analysis &amp; P6
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('pricing')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'pricing' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                Pricing &amp; Packages
              </button>
              <button
                onClick={() => handleNav('contact')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'contact' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                Contact &amp; Audit Request
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider bg-red-600 text-white text-center shadow"
              >
                Request a Proposal / Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
