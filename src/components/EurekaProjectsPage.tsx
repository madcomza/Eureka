import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimation';
import {
  Building2,
  HardHat,
  Award,
  Filter,
  Eye,
  X,
  MapPin,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Phone,
  Search,
  Table as TableIcon,
  LayoutGrid,
  FileText
} from 'lucide-react';

// Imagery matching project types
import garankuwaMall from '../assets/images/garankuwa_city_mall.jpg';
import hospitalImg from '../assets/images/hospital.jpg';
import unisaLibrary from '../assets/images/unisa-library.jpg';
import undercoverParking from '../assets/images/undercover_parking.jpg';
import publicSectorMunicipalities from '../assets/images/public_sector_municipalities.jpg';
import publicSectorInfra from '../assets/images/public_sector_infrastructure_program.jpg';
import constructionProject from '../assets/images/construction_project.jpg';
import constructionDelivery from '../assets/images/construction_delivery_solutions.jpg';
import constructionManagement from '../assets/images/Construction Management.jpeg';
import projectManagement from '../assets/images/Project Management.jpeg';
import freelancePm from '../assets/images/Freelance Project Management.jpeg';
import quantitySurveying from '../assets/images/Quantity Surveying.jpg';
import delayAnalysis from '../assets/images/Specialist Delay & Programme.jpg';
import contractAdvisory from '../assets/images/Construction Contract Advisory.jpg';
import facilitiesSolutions from '../assets/images/facilities_and_property_solutions.jpg';
import roofRehabilitation from '../assets/images/Roof Rehabilitation.jpeg';
import waterReticulation from '../assets/images/Water Reticulation.jpg';
import herbariumImg from '../assets/images/Herbarium.jpg';

export interface EurekaProjectsPageProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

export type ProjectCategory = 'all' | 'facilities' | 'construction' | 'consultancy';

export interface TabulatedProject {
  id: string;
  project: string;
  valueDisplay?: string;
  rolesResponsibilities: string;
  category: 'facilities' | 'construction' | 'consultancy';
  categoryLabel: string;
  image: string;
  notable?: boolean;
}

export const EurekaProjectsPage: React.FC<EurekaProjectsPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');
  const [selectedProject, setSelectedProject] = useState<TabulatedProject | null>(null);

  // Exact tabulated projects from screenshots
  const tabulatedProjects: TabulatedProject[] = [
    // --- Screenshot 01 ---
    {
      id: 'eskom-rotek',
      project: 'Eskom Rotek Industries – Roof Rehabilitation (NEC3 ECC Option B) R45M',
      valueDisplay: 'R45M',
      rolesResponsibilities: 'Managed roof rehabilitation works including programme, cost, quality, NEC3 contract administration, Compensation Events, stakeholder coordination, HSE compliance and project reporting.',
      category: 'facilities',
      categoryLabel: 'Facilities & Property',
      image: roofRehabilitation
    },
    {
      id: 'gauteng-roads-zwartkop',
      project: 'Gauteng Department of Roads & Logistics – Zwartkop Integrated Facility R500M',
      valueDisplay: 'R500M',
      rolesResponsibilities: 'Delivered project management and contract administration for a new training centre, logistics warehouse and maintenance facility, including planning, procurement, stakeholder coordination and reporting.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: constructionDelivery
    },
    {
      id: 'transnet-water',
      project: 'Transnet National Ports Authority – Water Reticulation Upgrade R53.5M',
      valueDisplay: 'R53.5M',
      rolesResponsibilities: 'Managed NEC3 contract administration, programme delivery, Compensation Events, contractor coordination, risk management and project reporting for critical water infrastructure upgrades.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: waterReticulation
    },
    {
      id: 'sanbi-herbarium',
      project: 'SANBI – National Herbarium Upgrade R30M',
      valueDisplay: 'R30M',
      rolesResponsibilities: 'Provided contract administration, programme, cost and quality management, stakeholder coordination, certification of works and project close-out.',
      category: 'facilities',
      categoryLabel: 'Facilities & Property',
      image: herbariumImg
    },

    // --- Screenshot 02 ---
    {
      id: 'compensation-house',
      project: 'Compensation House Refurbishment R205.3M',
      valueDisplay: 'R205.3M',
      rolesResponsibilities: 'Led project management for the refurbishment of a commercial office building, overseeing scope, programme, quality, risk, stakeholder engagement and contractor coordination.',
      category: 'facilities',
      categoryLabel: 'Facilities & Property',
      image: constructionProject
    },
    {
      id: 'diepkloof-learning-centre',
      project: 'Diepkloof Community Learning Centre R264.4M',
      valueDisplay: 'R264.4M',
      rolesResponsibilities: 'Lead Project Manager responsible for planning, design coordination, programme management, client liaison, quality assurance and multidisciplinary team management.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: projectManagement
    },
    {
      id: 'idt-grade-r-schools',
      project: 'IDT Grade R Schools Programme (9 Schools) R102.9M',
      valueDisplay: 'R102.9M',
      rolesResponsibilities: 'Managed the planning and delivery of nine education infrastructure projects from inception to completion, including stakeholder, programme, quality and risk management.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: unisaLibrary
    },
    {
      id: 'oliven-villas',
      project: 'Oliven Villas Social Housing R11M',
      valueDisplay: 'R11M',
      rolesResponsibilities: 'Managed construction of 28 social housing units, including programme, quality, contractor coordination and client liaison.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: constructionManagement
    },
    {
      id: 'glen-marais',
      project: 'Glen Marais Social Housing Development',
      valueDisplay: '100-Unit Development',
      rolesResponsibilities: 'Led planning and design management for a 100-unit social housing development, including infrastructure upgrades and consultant coordination.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: freelancePm
    },

    // --- Screenshot 03 ---
    {
      id: 'garankuwa-mall',
      project: 'GaRankuwa City Mall Redevelopment R676M',
      valueDisplay: 'R676M',
      rolesResponsibilities: 'Managed planning, procurement, design coordination, programme, cost, quality and stakeholder management for a major retail redevelopment.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: garankuwaMall
    },
    {
      id: 'rooiwal-wwtw',
      project: 'Rooiwal Wastewater Treatment Works',
      valueDisplay: 'Technical Due Diligence',
      rolesResponsibilities: 'Prepared technical due diligence for the expansion of the wastewater treatment facility, including technical input into financial and legal assessments.',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      image: waterReticulation
    },
    {
      id: 'computershare-due-diligence',
      project: 'Old Computershare Building Due Diligence R45M',
      valueDisplay: 'R45M',
      rolesResponsibilities: 'Conducted technical due diligence and condition assessments to support acquisition by the Public Investment Corporation.',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      image: quantitySurveying
    },
    {
      id: 'louis-mall-feasibility',
      project: 'Louis Mall Feasibility Study, Butterworth R280M',
      valueDisplay: 'R280M (15,000 m²)',
      rolesResponsibilities: 'Managed feasibility studies, stakeholder engagement and project planning for a proposed 15,000 m² regional shopping mall.',
      category: 'consultancy',
      categoryLabel: 'Consultancy',
      image: delayAnalysis
    },

    // --- Screenshot 04 ---
    {
      id: 'unisa-muckleneuk',
      project: 'UNISA Muckleneuk Library Upgrade R15M',
      valueDisplay: 'R15M (8 Floors)',
      rolesResponsibilities: 'Managed refurbishment of eight library floors, including programme, quality, stakeholder and contractor management.',
      category: 'facilities',
      categoryLabel: 'Facilities & Property',
      image: unisaLibrary
    },
    {
      id: 'unisa-florida',
      project: 'UNISA Florida Library Upgrade R97M',
      valueDisplay: 'R97M',
      rolesResponsibilities: 'Managed refurbishment works including mechanical, electrical and architectural upgrades through planning and design stages.',
      category: 'facilities',
      categoryLabel: 'Facilities & Property',
      image: hospitalImg
    },
    {
      id: 'anglo-bokamoso',
      project: 'Anglo American Bokamoso WWTW R60M',
      valueDisplay: 'R60M (45 ML/day)',
      rolesResponsibilities: 'Managed construction of a 45 ML/day wastewater treatment plant, coordinating programme, quality and contractor performance.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: waterReticulation
    },
    {
      id: 'prasa-vereeniging',
      project: 'PRASA Vereeniging Intermodal Station R67.3M',
      valueDisplay: 'R67.3M',
      rolesResponsibilities: 'Managed station upgrade works including new concourse, commercial facilities and platform roofing.',
      category: 'construction',
      categoryLabel: 'Construction Delivery',
      image: constructionProject
    }
  ];

  // Other Notable Projects from Screenshot 03
  const notableProjects = [
    {
      name: 'Ekurhuleni Land Use Survey – Project Management',
      details: 'Professional Fees: R19M',
      category: 'Consultancy & Urban Planning'
    },
    {
      name: 'Ekurhuleni Strategic Urban Development Project – Project Management',
      details: 'Professional Fees: R7.5M',
      category: 'Consultancy & Strategic Development'
    }
  ];

  const categoryFilters = [
    { key: 'all', label: 'All Projects', count: tabulatedProjects.length },
    { key: 'facilities', label: 'Facilities & Property', count: tabulatedProjects.filter(p => p.category === 'facilities').length },
    { key: 'construction', label: 'Construction Delivery', count: tabulatedProjects.filter(p => p.category === 'construction').length },
    { key: 'consultancy', label: 'Consultancy', count: tabulatedProjects.filter(p => p.category === 'consultancy').length },
  ];

  const filteredProjects = tabulatedProjects.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.rolesResponsibilities.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
      {/* 1. Header Navigation */}
      <EurekaHeader currentPage="projects" onNavigate={onNavigate} />

      {/* 2. Hero Banner Section */}
      <section className="relative bg-[#050b1b] text-white py-14 lg:py-18 border-b-4 border-red-600 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="./video/Services Hero Section BG.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay: Darker on left, totally clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>PROJECT TRACK RECORD &amp; EXPERIENCE</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Projects &amp; Delivery Portfolio
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Official project record demonstrating multidisciplinary leadership across commercial redevelopments, institutional upgrades, municipal infrastructure, and specialist technical due diligence.
            </p>
          </div>

          {/* Metrics Bar */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-slate-800/80">
            <StaggerItem>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-red-500/50 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-red-500">R2.4B+</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Tracked Project Value</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-sky-500/50 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-sky-400">17+ Major Projects</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Delivered &amp; Managed</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">NEC3, JBCC, GCC</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Contract Administration</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 hover:border-amber-500/50 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-amber-400">SACPCMP</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Pr. CPM Governance</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Filter Tabs & View Controls */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {categoryFilters.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key as ProjectCategory);
                    setSearchQuery('');
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeCategory === cat.key
                      ? 'bg-[#09132e] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      activeCategory === cat.key ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle & Search */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project or role..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Toggle Cards vs Table & Gallery Link */}
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                      viewMode === 'table'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Tabular Matrix View (as provided in document)"
                  >
                    <TableIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Table View</span>
                  </button>
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`px-2.5 py-1 rounded text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                      viewMode === 'cards'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                    title="Card Gallery View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Card View</span>
                  </button>
                </div>

                <button
                  onClick={() => handleNav('gallery')}
                  className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Open Visual Photo Gallery"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">Photo Gallery &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Content (Table View & Card View) */}
      <section className="py-8 lg:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full space-y-10">
        
        {/* TABULAR VIEW (Directly replicating the tabulated screenshot structure) */}
        {viewMode === 'table' && (
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#09132e] text-white text-xs font-black uppercase tracking-wider border-b border-slate-800">
                    <th className="py-3.5 px-4 sm:px-6 w-1/3 sm:w-2/5">Project</th>
                    <th className="py-3.5 px-4 sm:px-6">Role &amp; Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  {filteredProjects.map((item, index) => (
                    <tr
                      key={item.id}
                      className={`hover:bg-red-50/40 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                      }`}
                    >
                      <td className="py-4 px-4 sm:px-6 align-top font-bold text-slate-900 leading-snug">
                        <div className="space-y-1.5">
                          <div className="text-slate-900 font-extrabold text-sm sm:text-base">
                            {item.project}
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                              {item.categoryLabel}
                            </span>
                            <button
                              onClick={() => setSelectedProject(item)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View Summary</span>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 align-top text-slate-700 leading-relaxed font-normal text-xs sm:text-sm">
                        {item.rolesResponsibilities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CARDS GRID VIEW */}
        {viewMode === 'cards' && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group h-full"
                >
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.project}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="absolute inset-0 flex items-center justify-center bg-[#07132e]/40 opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold gap-1.5 cursor-pointer"
                    >
                      <div className="p-2.5 bg-red-600 rounded-full shadow-lg">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                          {item.categoryLabel}
                        </span>
                        {item.valueDisplay && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                            {item.valueDisplay}
                          </span>
                        )}
                      </div>
                      <h2 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                        {item.project}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.rolesResponsibilities}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(item)}
                      className="w-full py-2 bg-slate-100 hover:bg-[#09132e] hover:text-white text-slate-800 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>VIEW PROJECT DETAILS</span>
                    </button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {filteredProjects.length === 0 && (
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500 max-w-md mx-auto space-y-2">
            <Filter className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="font-bold text-slate-800 text-sm">No projects match your search.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 5. OTHER NOTABLE PROJECTS (As transcribed from Screenshot 03) */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
              <FileText className="w-4 h-4 text-red-600" />
              <span>Other Notable Projects</span>
            </h3>
            <span className="text-xs font-bold text-slate-500">Public Sector Municipal Governance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notableProjects.map((np, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-1.5 hover:border-red-300 transition-colors"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-bold text-slate-900">
                      {np.name}
                    </div>
                    <div className="inline-block text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                      {np.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 flex flex-col relative">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                {selectedProject.categoryLabel}
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="relative rounded-lg overflow-hidden bg-slate-900 max-h-64 border border-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.project}
                  className="w-full h-full object-cover max-h-64"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {selectedProject.project}
                </h3>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Role &amp; Responsibilities
                </h4>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedProject.rolesResponsibilities}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Close Window
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    handleNav('contact');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>INQUIRE ON SIMILAR PROJECT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. Bottom Call to Action */}
      <section className="bg-[#09132e] text-white py-14 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-black tracking-widest text-red-400 bg-red-950/60 px-3 py-1 rounded-full uppercase border border-red-800/60">
            REGISTERED BUILT ENVIRONMENT LEADERSHIP
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-white max-w-xl mx-auto tracking-tight">
            Need Expert Project Delivery or Technical Governance?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Engage our certified Pr. CPM leadership for commercial redevelopments, infrastructure delivery, or contract dispute advisory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="tel:+27608809635"
              className="px-5 py-2.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>+27 60 880 9635</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="px-6 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <EurekaFooter currentPage="projects" onNavigate={onNavigate} />
    </div>
  );
};
