import React, { useState, useEffect } from 'react';
import { EurekaLogo } from './EurekaLogo';
import { EurekaHeader } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Building2,
  HardHat,
  Briefcase,
  Sparkles,
  Bug,
  Truck,
  FileCheck2,
  Scale,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronDown,
  Layers,
  Search,
  ShieldCheck,
  Send
} from 'lucide-react';

export type SolutionSubcategory = 'all' | 'facilities' | 'construction' | 'consultancy';

interface EurekaSolutionsPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'construction-management' | 'project-management' | 'freelance-pm' | 'construction-consultancy' | 'quantity-surveying' | 'construction-claims' | 'pricing' | 'contact', subcategory?: SolutionSubcategory) => void;
  initialSubcategory?: SolutionSubcategory;
}

export const EurekaSolutionsPage: React.FC<EurekaSolutionsPageProps> = ({
  onNavigate,
  initialSubcategory = 'all'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubcategory, setActiveSubcategory] = useState<SolutionSubcategory>(initialSubcategory);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  useEffect(() => {
    if (initialSubcategory) {
      setActiveSubcategory(initialSubcategory);
    }
  }, [initialSubcategory]);

  const handleSubcategoryChange = (sub: SolutionSubcategory) => {
    setActiveSubcategory(sub);
    setSolutionsDropdownOpen(false);
    // Smooth scroll to solution area
    if (sub !== 'all') {
      const el = document.getElementById(`solution-${sub}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => setInquirySubmitted(false), 4000);
  };

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-red-500/20">
      {/* Top Header & Navigation */}
      <EurekaHeader currentPage="solutions" onNavigate={onNavigate}  />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0d276b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
            OUR THREE SOLUTION AREAS
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional Facilities Management, Construction Delivery &amp; Consultancy Solutions designed to give clients greater confidence and control.
          </p>

          {/* Quick Subcategory Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
            <button
              onClick={() => handleSubcategoryChange('facilities')}
              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                activeSubcategory === 'facilities'
                  ? 'bg-sky-950/80 border-sky-400 text-white ring-2 ring-sky-500/50'
                  : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-sky-400/50 hover:bg-slate-900/80'
              }`}
            >
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider block">SOLUTION 01</span>
              <span className="text-sm font-extrabold text-white">Facilities &amp; Property</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Maintenance, cleaning, hygiene, pest control &amp; relocations</span>
            </button>

            <button
              onClick={() => handleSubcategoryChange('construction')}
              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                activeSubcategory === 'construction'
                  ? 'bg-red-950/80 border-red-500 text-white ring-2 ring-red-500/50'
                  : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-red-500/50 hover:bg-slate-900/80'
              }`}
            >
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider block">SOLUTION 02</span>
              <span className="text-sm font-extrabold text-white">Construction Delivery</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Construction management, project management &amp; freelance</span>
            </button>

            <button
              onClick={() => handleSubcategoryChange('consultancy')}
              className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                activeSubcategory === 'consultancy'
                  ? 'bg-slate-800 border-white text-white ring-2 ring-white/50'
                  : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-400 hover:bg-slate-900/80'
              }`}
            >
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">SOLUTION 03</span>
              <span className="text-sm font-extrabold text-white">Consultancy Solutions</span>
              <span className="text-[11px] text-slate-400 block mt-0.5">Quantity surveying, claims, delay analysis &amp; contracts</span>
            </button>
          </div>
        </div>
      </section>

      {/* Subcategory Filter Navigation Bar */}
      <section className="sticky top-[58px] z-30 bg-slate-50 border-b border-slate-200 py-3.5 px-4 sm:px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
            <button
              onClick={() => handleSubcategoryChange('all')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeSubcategory === 'all'
                  ? 'bg-[#09132e] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All 3 Solutions
            </button>
            <button
              onClick={() => handleSubcategoryChange('facilities')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeSubcategory === 'facilities'
                  ? 'bg-[#0284c7] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              1. Facilities &amp; Property
            </button>
            <button
              onClick={() => handleSubcategoryChange('construction')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeSubcategory === 'construction'
                  ? 'bg-[#d91b1b] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              2. Construction Delivery
            </button>
            <button
              onClick={() => handleSubcategoryChange('consultancy')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeSubcategory === 'consultancy'
                  ? 'bg-[#09132e] text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              3. Consultancy Solutions
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing: <span className="font-bold text-slate-800">
              {activeSubcategory === 'all'
                ? 'All 3 Solution Areas & Complete Service Catalog'
                : activeSubcategory === 'facilities'
                ? 'Facilities & Property Solutions'
                : activeSubcategory === 'construction'
                ? 'Construction Delivery Solutions'
                : 'Consultancy Solutions'}
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. FACILITIES & PROPERTY SOLUTIONS */}
      {/* ========================================================================= */}
      {(activeSubcategory === 'all' || activeSubcategory === 'facilities') && (
        <section id="solution-facilities" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header / Intro */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-100 text-sky-800 text-xs font-black uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>SOLUTION 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                1. Facilities &amp; Property Solutions
              </h2>
              <p className="text-base sm:text-lg font-bold text-sky-700 mt-1 mb-3">
                Professional Facilities Management That Keeps Your Business Moving
              </p>
              <p className="text-sm text-slate-600 max-w-4xl leading-relaxed">
                EFMS provides Facilities Management Solutions designed to help organisations keep their buildings safe, functional, compliant and professionally maintained. Our integrated approach brings together essential services under one reliable partner, reducing the need for clients to coordinate multiple service providers themselves.
              </p>
            </div>

            {/* Sub-services Grid under Solution 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1.1 Facilities Management Services */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Facilities Management Services
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Comprehensive maintenance and management services for property assets.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Integrated facilities management',
                      'Building maintenance services',
                      'Workplace management',
                      'Facility support services',
                      'Cleaning and hygiene management',
                      'Pest control management',
                      'Contractor management',
                      'Building inspections',
                      'Health & Safety support',
                      'Waste management',
                      'Grounds maintenance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <button
                    onClick={() => onNavigate?.('facilities-management')}
                    className="w-full text-center py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white text-xs font-black tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                  >
                    <span>VIEW DEDICATED FM SERVICE PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request Consultation
                  </button>
                </div>
              </article>

              {/* 1.2 Commercial Cleaning Services */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Commercial Cleaning Services
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    A clean workplace creates a better environment for employees, customers and visitors. Professional cleaning for offices, commercial buildings, industrial facilities, retail, and education.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Commercial cleaning',
                      'Office cleaning',
                      'Contract cleaning',
                      'Industrial cleaning',
                      'Janitorial services',
                      'Deep cleaning',
                      'Carpet cleaning',
                      'Window cleaning',
                      'Washroom cleaning',
                      'Post-construction cleaning'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <button
                    onClick={() => onNavigate?.('commercial-cleaning')}
                    className="w-full text-center py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white text-xs font-black tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                  >
                    <span>VIEW DEDICATED CLEANING PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request a Cleaning Quote
                  </button>
                </div>
              </article>

              {/* 1.3 Commercial Hygiene Services */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Commercial Hygiene Services
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Good workplace hygiene goes beyond cleaning. Practical hygiene solutions supporting clean, well-managed workplace environments.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Workplace hygiene services',
                      'Washroom hygiene',
                      'Hygiene supplies',
                      'Hygiene products',
                      'Sanitary waste management',
                      'Air freshener services',
                      'Soap dispenser services',
                      'Toilet paper supply',
                      'Paper towel supply',
                      'Odour control'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full text-center py-2.5 px-4 bg-[#08286b] hover:bg-sky-700 text-white text-xs font-bold rounded transition-colors cursor-pointer"
                >
                  Improve Your Workplace Hygiene
                </button>
              </article>

              {/* 1.4 Pest Control Services */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <Bug className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Pest Control Services
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Protect your property with professional and practical pest management solutions for commercial, residential, industrial and institutional environments.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Commercial pest control',
                      'Residential pest control',
                      'Fumigation services',
                      'Termite control',
                      'Cockroach control',
                      'Rodent control',
                      'Integrated pest management',
                      'Pre-soil treatment and soil poisoning',
                      'Pre-construction pest control'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <button
                    onClick={() => onNavigate?.('pest-control')}
                    className="w-full text-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black tracking-wider rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
                  >
                    <span>VIEW DEDICATED PEST CONTROL PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request a Pest Assessment
                  </button>
                </div>
              </article>

              {/* 1.5 Pre-Soil Treatment & Soil Poisoning */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Pre-Soil Treatment &amp; Soil Poisoning
                  </h3>
                  <p className="text-xs font-bold text-sky-800 mb-3">
                    Protect Your Building Before Construction Begins
                  </p>
                  <p className="text-xs text-slate-500 mb-3">
                    Pre-soil treatment provides an opportunity to address termite and soil-related pest risks before a building is completed.
                  </p>

                  <div className="mb-4 bg-white p-3 rounded border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-900 block mb-1.5 uppercase">Our 5-Step Process:</span>
                    <div className="text-[11px] text-slate-600 flex flex-wrap items-center gap-1 font-semibold">
                      <span>Site Assessment</span>
                      <span className="text-sky-600">&rarr;</span>
                      <span>Treatment Planning</span>
                      <span className="text-sky-600">&rarr;</span>
                      <span>Application</span>
                      <span className="text-sky-600">&rarr;</span>
                      <span>Verification</span>
                      <span className="text-sky-600">&rarr;</span>
                      <span>Documentation</span>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold text-slate-900 block mb-1 uppercase">Suitable For:</span>
                  <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                    {[
                      'Residential developments',
                      'Commercial buildings',
                      'Industrial facilities & Warehouses',
                      'New developments & Infrastructure projects'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('pre-soil-treatment')}
                    className="w-full text-center py-2.5 px-4 bg-[#08286b] hover:bg-sky-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Dedicated Pre-Soil Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request a Soil Treatment Assessment
                  </button>
                </div>
              </article>

              {/* 1.6 Office & Business Relocation */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-sky-400 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-sky-600 text-white flex items-center justify-center mb-4">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Office &amp; Business Relocation
                  </h3>
                  <p className="text-xs font-bold text-sky-800 mb-3">
                    Move Your Business With Less Disruption
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Moving a business requires planning, coordination and careful execution. Services can be combined with move-in, move-out and relocation cleaning.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Office moving services',
                      'Business relocation',
                      'Commercial relocation',
                      'Corporate relocation',
                      'Workplace relocation',
                      'Move-in cleaning',
                      'Move-out cleaning',
                      'Relocation cleaning'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('office-relocation')}
                    className="w-full text-center py-2.5 px-4 bg-[#08286b] hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Dedicated Relocation Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Plan Your Business Relocation
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. CONSTRUCTION DELIVERY SOLUTIONS */}
      {/* ========================================================================= */}
      {(activeSubcategory === 'all' || activeSubcategory === 'construction') && (
        <section id="solution-construction" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            {/* Header / Intro */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider mb-3">
                <HardHat className="w-3.5 h-3.5" />
                <span>SOLUTION 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                2. Construction Delivery Solutions
              </h2>
              <p className="text-base sm:text-lg font-bold text-red-600 mt-1 mb-3">
                Experienced Management for Better Construction Outcomes
              </p>
              <p className="text-sm text-slate-600 max-w-4xl leading-relaxed">
                Successful construction projects require experienced leadership, detailed planning and effective coordination. EFMS provides professional Construction Management Solutions covering planning, scheduling, site management, construction supervision, contractor coordination, quality control, cost monitoring, procurement, risk management and progress reporting.
              </p>
            </div>

            {/* Sub-services Grid under Solution 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 2.1 Construction Management Services */}
              <article className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-red-500 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Construction Management Services
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    On-site management and comprehensive supervision for quality execution.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Construction project management',
                      'Site management',
                      'Construction supervision',
                      'Construction planning and scheduling',
                      'Contractor coordination',
                      'Commercial construction management',
                      'Quality assurance and quality control',
                      'Cost monitoring',
                      'Procurement coordination',
                      'Risk management',
                      'Progress reporting',
                      'Project close-out'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('construction-management')}
                    className="w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Dedicated Construction Mgmt Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Discuss Your Construction Project
                  </button>
                </div>
              </article>

              {/* 2.2 Project Management Services */}
              <article className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-red-500 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Project Management Services
                  </h3>
                  <p className="text-xs font-bold text-red-600 mb-3">
                    Better Planning. Stronger Control. Successful Delivery.
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Professional Project Management Services for infrastructure upgrades, refurbishment projects, capital projects and programmes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Project management',
                      'Capital projects management',
                      'Programme management',
                      'Project planning',
                      'Budget and cost control',
                      'Procurement management',
                      'Stakeholder management',
                      'Contractor coordination',
                      'Risk management',
                      'Quality management',
                      'Project monitoring',
                      'Project reporting',
                      'Project close-out'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('project-management')}
                    className="w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Dedicated Project Mgmt Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request PM Consultation
                  </button>
                </div>
              </article>

              {/* 2.3 Freelance Construction Project Management */}
              <article className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-red-500 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Freelance Construction Project Management
                  </h3>
                  <p className="text-xs font-bold text-red-600 mb-3">
                    Experienced Project Leadership — When You Need It
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Not every organisation needs a permanent Project Manager. Flexible freelance and temporary project management leadership for a particular project, programme or period.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Freelance / temporary project management',
                      'Project controls & governance',
                      'Construction programme management',
                      'Project recovery leadership',
                      'Construction project advisory & support'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('freelance-pm')}
                    className="w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>View Dedicated Freelance PM Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Hire a Freelance Project Manager
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. CONSULTANCY SOLUTIONS */}
      {/* ========================================================================= */}
      {(activeSubcategory === 'all' || activeSubcategory === 'consultancy') && (
        <section id="solution-consultancy" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Header / Intro */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>SOLUTION 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                3. Consultancy Solutions
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-3">
                Specialist Construction Expertise When You Need It
              </p>
              <p className="text-sm text-slate-600 max-w-4xl leading-relaxed">
                Construction projects often require specialist advice beyond day-to-day project management. EFMS provides construction consultancy and advisory support covering construction costs, contracts, claims, delays, risk and project delivery.
              </p>
            </div>

            {/* Sub-services Grid under Solution 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 3.1 Construction Consultancy & Advisory */}
              <article className="bg-slate-50 border-2 border-slate-900/40 rounded-lg p-6 flex flex-col justify-between hover:border-slate-900 transition-all hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-slate-900 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl">
                  FEATURED PAGE
                </div>
                <div>
                  <div className="w-10 h-10 rounded bg-[#09132e] text-white flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    Construction Consultancy &amp; Advisory
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    High-level independent advisory support for project owners, funders, and contractors.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Quantity surveying consultancy',
                      'QS consultancy & cost control',
                      'Cost planning & feasibility',
                      'Construction claims & defense',
                      'Contract administration (JBCC/FIDIC/NEC)',
                      'Forensic delay analysis (SCL)',
                      'Extension of time support',
                      'Construction risk & lender TDD',
                      'Independent project reviews'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#09132e] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('construction-consultancy')}
                    className="w-full text-center py-2.5 px-4 bg-[#09132e] hover:bg-slate-800 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Dedicated Consultancy Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Speak to a Construction Consultant
                  </button>
                </div>
              </article>

              {/* 3.2 Quantity Surveying Consultancy */}
              <article className="bg-slate-50 border-2 border-red-600/60 rounded-lg p-6 flex flex-col justify-between hover:border-red-600 transition-all hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl">
                  DEDICATED PAGE
                </div>
                <div>
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Quantity Surveying &amp; Cost Engineering
                  </h3>
                  <p className="text-xs font-bold text-red-600 mb-3">
                    Keep Construction Costs Under Control &bull; ASAQS / SACQSP Stages 1-6
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Effective cost planning, Standard System 7th Edition BOQs, interim valuations, variation defense, and bank monitoring.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Elemental cost planning & feasibility',
                      'Bills of Quantities (BOQ) in WinQS/Candy',
                      'Contractor tender adjudication',
                      'Monthly interim payment valuations (IPC)',
                      'Variation order (VO) & claims audit',
                      'Value engineering & LCC optimization',
                      'Bank monitoring & lender drawdown TDD',
                      'Final account negotiation & closeout'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('quantity-surveying')}
                    className="w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Dedicated Quantity Surveying Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request QS Fee Proposal
                  </button>
                </div>
              </article>

              {/* 3.3 Construction Claims & Contract Consultancy */}
              <article className="bg-slate-50 border-2 border-red-600/60 rounded-lg p-6 flex flex-col justify-between hover:border-red-600 transition-all hover:shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl">
                  DEDICATED PAGE
                </div>
                <div>
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Construction Claims &amp; Contract Consultancy
                  </h3>
                  <p className="text-xs font-bold text-red-600 mb-3">
                    Protect Your Commercial &amp; Contractual Position
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Assessing, preparing and managing construction claims with clear understanding of contracts, records and programmes.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Construction claims consultancy',
                      'Contract claims & dispute defense',
                      'Extension of Time (EOT) claims',
                      'Delay & critical path quantum analysis',
                      'Variation claims & loss & expense',
                      'NEC Compensation Events & early warnings',
                      'FIDIC & JBCC contractual notices',
                      'Adjudication & mediation representation'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('construction-claims')}
                    className="w-full text-center py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Dedicated Claims &amp; Contracts Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2 px-4 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Discuss Your Construction Claim
                  </button>
                </div>
              </article>

              {/* 3.4 Delay Analysis & Programme Consultancy */}
              <article className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between hover:border-slate-800 transition-all hover:shadow-md">
                <div>
                  <div className="w-10 h-10 rounded bg-[#09132e] text-white flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">
                    Delay Analysis &amp; Programme Consultancy
                  </h3>
                  <p className="text-xs font-bold text-slate-800 mb-3">
                    Understand Delays. Assess Their Impact. Plan Recovery.
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Understanding programme performance, delay events and potential time impacts on completion dates and cash flow.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    {[
                      'Programme reviews',
                      'Baseline programme assessments',
                      'Critical path analysis',
                      'Extension of Time support',
                      'EOT claims support',
                      'Recovery programme development',
                      'Construction programme analysis',
                      'Project recovery support'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#09132e] font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate?.('construction-consultancy')}
                    className="w-full text-center py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded border border-slate-300 transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>View Delay Analysis Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full text-center py-2.5 px-4 bg-[#09132e] hover:bg-slate-800 text-white text-xs font-bold rounded transition-colors cursor-pointer"
                  >
                    Request a Programme Review
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Cross-Sell Quick Action Banner */}
      <section className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Need a Custom Solution Across Multiple Service Areas?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              EFMS offers structured service agreements combining facilities management, construction oversight, and specialist consultancy into a single monthly contract.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              REQUEST A CONSULTATION
            </button>
            <a
              href="tel:+27745187012"
              className="px-5 py-3 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all"
            >
              CALL +27 74 518 7012
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
