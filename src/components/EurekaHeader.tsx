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
  | 'projects'
  | 'gallery'
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
  const [activeDropdown, setActiveDropdown] = useState<'facilities' | 'construction' | 'consultancy' | null>(null);
  const [mobileFacilitiesOpen, setMobileFacilitiesOpen] = useState(false);
  const [mobileConstructionOpen, setMobileConstructionOpen] = useState(false);
  const [mobileConsultancyOpen, setMobileConsultancyOpen] = useState(false);

  const isFacilitiesActive = [
    'facilities-management',
    'commercial-cleaning',
    'pest-control',
    'pre-soil-treatment',
    'office-relocation'
  ].includes(currentPage);

  const isConstructionActive = [
    'construction-management',
    'project-management',
    'freelance-pm'
  ].includes(currentPage);

  const isConsultancyActive = [
    'construction-consultancy',
    'quantity-surveying',
    'construction-claims',
    'delay-analysis'
  ].includes(currentPage);

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
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
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-xs font-bold tracking-wider text-slate-800">
            {/* 1. HOME */}
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

            {/* 2. ABOUT */}
            <button
              onClick={() => handleNav('about')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'about'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              ABOUT
            </button>

            {/* 3. FACILITIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('facilities')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('commercial-cleaning')}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-1 pb-1 ${
                  isFacilitiesActive
                    ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                    : 'hover:text-[#d91b1b]'
                }`}
              >
                <span>FACILITIES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'facilities' ? 'rotate-180 text-sky-600' : ''}`} />
              </button>

              {activeDropdown === 'facilities' && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-800 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-sky-600" />
                      Facilities &amp; Property
                    </span>
                    <button
                      onClick={() => handleNav('solutions', 'facilities')}
                      className="text-[10px] font-bold text-sky-600 hover:text-sky-800"
                    >
                      Overview &rarr;
                    </button>
                  </div>
                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => handleNav('commercial-cleaning')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'commercial-cleaning'
                          ? 'bg-sky-50 text-sky-900 font-bold border-l-2 border-sky-600'
                          : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Commercial Cleaning</div>
                        <div className="text-[10px] text-slate-500 font-normal">Corporate, medical &amp; deep hygiene</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('pest-control')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'pest-control'
                          ? 'bg-sky-50 text-sky-900 font-bold border-l-2 border-sky-600'
                          : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
                      }`}
                    >
                      <Bug className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Pest Control Services</div>
                        <div className="text-[10px] text-slate-500 font-normal">SABS/SANS compliant eradication</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('pre-soil-treatment')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'pre-soil-treatment'
                          ? 'bg-sky-50 text-sky-900 font-bold border-l-2 border-sky-600'
                          : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Pre-Soil Treatment</div>
                        <div className="text-[10px] text-slate-500 font-normal">5-year warranty soil poisoning</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('office-relocation')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'office-relocation'
                          ? 'bg-sky-50 text-sky-900 font-bold border-l-2 border-sky-600'
                          : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Office Relocation</div>
                        <div className="text-[10px] text-slate-500 font-normal">Seamless corporate &amp; IT moves</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('facilities-management')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'facilities-management'
                          ? 'bg-sky-50 text-sky-900 font-bold border-l-2 border-sky-600'
                          : 'text-slate-700 hover:bg-sky-50/80 hover:text-sky-900'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Facilities Management</div>
                        <div className="text-[10px] text-slate-500 font-normal">SLA &amp; building operations</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 4. CONSTRUCTION DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('construction')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('construction-management')}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-1 pb-1 ${
                  isConstructionActive
                    ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                    : 'hover:text-[#d91b1b]'
                }`}
              >
                <span>CONSTRUCTION</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'construction' ? 'rotate-180 text-red-600' : ''}`} />
              </button>

              {activeDropdown === 'construction' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                      <HardHat className="w-3.5 h-3.5 text-red-600" />
                      Construction Delivery
                    </span>
                    <button
                      onClick={() => handleNav('solutions', 'construction')}
                      className="text-[10px] font-bold text-red-600 hover:text-red-800"
                    >
                      Overview &rarr;
                    </button>
                  </div>
                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => handleNav('construction-management')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'construction-management'
                          ? 'bg-red-50 text-red-900 font-bold border-l-2 border-red-600'
                          : 'text-slate-700 hover:bg-red-50/80 hover:text-red-900'
                      }`}
                    >
                      <HardHat className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Construction Management</div>
                        <div className="text-[10px] text-slate-500 font-normal">Principal contractor execution</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('project-management')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'project-management'
                          ? 'bg-red-50 text-red-900 font-bold border-l-2 border-red-600'
                          : 'text-slate-700 hover:bg-red-50/80 hover:text-red-900'
                      }`}
                    >
                      <FolderKanban className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Project Management</div>
                        <div className="text-[10px] text-slate-500 font-normal">PROCSA Stages 1-6 Pr. CPM</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('freelance-pm')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'freelance-pm'
                          ? 'bg-red-50 text-red-900 font-bold border-l-2 border-red-600'
                          : 'text-slate-700 hover:bg-red-50/80 hover:text-red-900'
                      }`}
                    >
                      <UserCheck className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Freelance PM Support</div>
                        <div className="text-[10px] text-slate-500 font-normal">Flexible principal consultant capacity</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 5. CONSULTANCY DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('consultancy')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNav('construction-consultancy')}
                className={`flex items-center gap-1 transition-colors cursor-pointer py-1 pb-1 ${
                  isConsultancyActive
                    ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                    : 'hover:text-[#d91b1b]'
                }`}
              >
                <span>CONSULTANCY</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'consultancy' ? 'rotate-180 text-blue-900' : ''}`} />
              </button>

              {activeDropdown === 'consultancy' && (
                <div className="absolute right-0 lg:left-1/2 lg:-translate-x-1/2 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#0b1b3d]" />
                      Specialist Consultancy
                    </span>
                    <button
                      onClick={() => handleNav('solutions', 'consultancy')}
                      className="text-[10px] font-bold text-[#0b1b3d] hover:text-red-600"
                    >
                      Overview &rarr;
                    </button>
                  </div>
                  <div className="py-1 space-y-0.5">
                    <button
                      onClick={() => handleNav('construction-consultancy')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'construction-consultancy'
                          ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-[#0b1b3d]'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Briefcase className="w-4 h-4 text-[#0b1b3d] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Consultancy Advisory</div>
                        <div className="text-[10px] text-slate-500 font-normal">Strategic technical &amp; procurement counsel</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('quantity-surveying')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'quantity-surveying'
                          ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-[#0b1b3d]'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Scale className="w-4 h-4 text-[#0b1b3d] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Quantity Surveying (QS)</div>
                        <div className="text-[10px] text-slate-500 font-normal">Cost planning, BOQs &amp; final accounts</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('construction-claims')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'construction-claims'
                          ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-[#0b1b3d]'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <FileCheck2 className="w-4 h-4 text-[#0b1b3d] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Claims &amp; Contracts</div>
                        <div className="text-[10px] text-slate-500 font-normal">JBCC, GCC, FIDIC, NEC dispute advisory</div>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNav('delay-analysis')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-start gap-2.5 ${
                        currentPage === 'delay-analysis'
                          ? 'bg-slate-100 text-slate-900 font-bold border-l-2 border-[#0b1b3d]'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-[#0b1b3d] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold">Forensic Delay Analysis</div>
                        <div className="text-[10px] text-slate-500 font-normal">Primavera P6 &amp; EOT defense audits</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* 6. PROJECTS */}
            <button
              onClick={() => handleNav('projects')}
              className={`transition-colors cursor-pointer pb-1 ${
                currentPage === 'projects' || currentPage === 'gallery'
                  ? 'text-[#d91b1b] border-b-2 border-[#d91b1b]'
                  : 'hover:text-[#d91b1b]'
              }`}
            >
              PROJECTS
            </button>

            {/* 7. PRICING */}
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
          </nav>

          {/* Right Action Button (Get In Touch) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="eureka-header-get-in-touch-btn"
              onClick={() => handleNav('contact')}
              className="px-4 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
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
                About
              </button>

              {/* Mobile Facilities Collapsible */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileFacilitiesOpen(!mobileFacilitiesOpen)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold flex items-center justify-between ${
                    isFacilitiesActive ? 'bg-sky-50 text-sky-900' : 'bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-sky-600" />
                    Facilities
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileFacilitiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileFacilitiesOpen && (
                  <div className="pl-4 pr-1 pt-2 space-y-1 border-l-2 border-sky-300 ml-2 mt-1">
                    <button
                      onClick={() => handleNav('commercial-cleaning')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'commercial-cleaning' ? 'font-bold text-sky-600 bg-sky-50' : 'text-slate-700 hover:text-sky-600'
                      }`}
                    >
                      Commercial Cleaning Services
                    </button>
                    <button
                      onClick={() => handleNav('pest-control')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'pest-control' ? 'font-bold text-sky-600 bg-sky-50' : 'text-slate-700 hover:text-sky-600'
                      }`}
                    >
                      Pest Control Services
                    </button>
                    <button
                      onClick={() => handleNav('pre-soil-treatment')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'pre-soil-treatment' ? 'font-bold text-sky-600 bg-sky-50' : 'text-slate-700 hover:text-sky-600'
                      }`}
                    >
                      Pre-Soil Treatment &amp; Poisoning
                    </button>
                    <button
                      onClick={() => handleNav('office-relocation')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'office-relocation' ? 'font-bold text-sky-600 bg-sky-50' : 'text-slate-700 hover:text-sky-600'
                      }`}
                    >
                      Office &amp; Business Relocation
                    </button>
                    <button
                      onClick={() => handleNav('facilities-management')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'facilities-management' ? 'font-bold text-sky-600 bg-sky-50' : 'text-slate-700 hover:text-sky-600'
                      }`}
                    >
                      Facilities Management Services
                    </button>
                    <button
                      onClick={() => handleNav('solutions', 'facilities')}
                      className="w-full text-left px-2 py-1.5 text-xs font-bold text-sky-700 hover:underline"
                    >
                      &rarr; All Facilities Solutions Overview
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Construction Collapsible */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileConstructionOpen(!mobileConstructionOpen)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold flex items-center justify-between ${
                    isConstructionActive ? 'bg-red-50 text-red-900' : 'bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <HardHat className="w-4 h-4 text-red-600" />
                    Construction
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileConstructionOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileConstructionOpen && (
                  <div className="pl-4 pr-1 pt-2 space-y-1 border-l-2 border-red-300 ml-2 mt-1">
                    <button
                      onClick={() => handleNav('construction-management')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'construction-management' ? 'font-bold text-red-600 bg-red-50' : 'text-slate-700 hover:text-red-600'
                      }`}
                    >
                      Construction Management
                    </button>
                    <button
                      onClick={() => handleNav('project-management')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'project-management' ? 'font-bold text-red-600 bg-red-50' : 'text-slate-700 hover:text-red-600'
                      }`}
                    >
                      Project Management (PROCSA)
                    </button>
                    <button
                      onClick={() => handleNav('freelance-pm')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'freelance-pm' ? 'font-bold text-red-600 bg-red-50' : 'text-slate-700 hover:text-red-600'
                      }`}
                    >
                      Freelance Project Management
                    </button>
                    <button
                      onClick={() => handleNav('solutions', 'construction')}
                      className="w-full text-left px-2 py-1.5 text-xs font-bold text-red-700 hover:underline"
                    >
                      &rarr; All Construction Solutions Overview
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Consultancy Collapsible */}
              <div className="pt-1">
                <button
                  onClick={() => setMobileConsultancyOpen(!mobileConsultancyOpen)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold flex items-center justify-between ${
                    isConsultancyActive ? 'bg-slate-100 text-slate-900' : 'bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-[#0b1b3d]" />
                    Consultancy
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileConsultancyOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileConsultancyOpen && (
                  <div className="pl-4 pr-1 pt-2 space-y-1 border-l-2 border-slate-400 ml-2 mt-1">
                    <button
                      onClick={() => handleNav('construction-consultancy')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'construction-consultancy' ? 'font-bold text-[#0b1b3d] bg-slate-100' : 'text-slate-700 hover:text-[#0b1b3d]'
                      }`}
                    >
                      Consultancy &amp; Advisory
                    </button>
                    <button
                      onClick={() => handleNav('quantity-surveying')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'quantity-surveying' ? 'font-bold text-[#0b1b3d] bg-slate-100' : 'text-slate-700 hover:text-[#0b1b3d]'
                      }`}
                    >
                      Quantity Surveying (QS)
                    </button>
                    <button
                      onClick={() => handleNav('construction-claims')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'construction-claims' ? 'font-bold text-[#0b1b3d] bg-slate-100' : 'text-slate-700 hover:text-[#0b1b3d]'
                      }`}
                    >
                      Claims &amp; Contracts Consultancy
                    </button>
                    <button
                      onClick={() => handleNav('delay-analysis')}
                      className={`w-full text-left px-2 py-1.5 text-xs rounded transition-colors ${
                        currentPage === 'delay-analysis' ? 'font-bold text-[#0b1b3d] bg-slate-100' : 'text-slate-700 hover:text-[#0b1b3d]'
                      }`}
                    >
                      Forensic Delay Analysis &amp; P6
                    </button>
                    <button
                      onClick={() => handleNav('solutions', 'consultancy')}
                      className="w-full text-left px-2 py-1.5 text-xs font-bold text-[#0b1b3d] hover:underline"
                    >
                      &rarr; All Consultancy Solutions Overview
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNav('projects')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'projects' || currentPage === 'gallery' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => handleNav('pricing')}
                className={`w-full text-left px-3 py-2 rounded-md text-sm font-bold ${
                  currentPage === 'pricing' ? 'bg-red-50 text-red-600' : 'text-slate-800'
                }`}
              >
                Pricing
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3 rounded-lg text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 text-white text-center shadow flex items-center justify-center gap-2"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
