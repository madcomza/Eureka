import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import monwabisiImg from '../assets/images/monwabisi-makinana.jpg';
import facilitiesImg from '../assets/images/facilities_and_property_solutions.jpg';
import constructionImg from '../assets/images/construction_delivery_solutions.jpg';
import consultancyImg from '../assets/images/consultancy_solutions.jpg';
import garankuwaMallImg from '../assets/images/garankuwa_city_mall.jpg';
import garankuwaMallWebp from '../assets/images/garankuwa_city_mall.webp';
import publicSectorImg from '../assets/images/public_sector_infrastructure_program.jpg';
import constructionProjectImg from '../assets/images/construction_project.jpg';
import constructionClaimDisputeImg from '../assets/images/construction_claim_dispute.jpg';
import projectManagerImg from '../assets/images/project_manager.jpg';
import publicSectorMunicipalitiesImg from '../assets/images/public_sector_municipalities.jpg';
import unisaLibraryImg from '../assets/images/unisa-library.jpg';
import officeRelocationImg from '../assets/images/office_relocation.jpg';
import hospitalImg from '../assets/images/hospital.jpg';
import { EurekaLogo } from './EurekaLogo';
import { EurekaHeader } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Award,
  Users,
  ShieldCheck,
  Building2,
  Factory,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Briefcase,
  HardHat,
  Scale,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Building,
  Home,
  Check,
  TrendingUp,
  Clock,
  FileText,
  AlertTriangle,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaWebsiteProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'construction-management' | 'project-management' | 'freelance-pm' | 'construction-consultancy' | 'quantity-surveying' | 'construction-claims' | 'delay-analysis' | 'pricing' | 'contact', subcategory?: SolutionSubcategory) => void;
}

export const EurekaWebsite: React.FC<EurekaWebsiteProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'commercial' | 'infrastructure' | 'specialist'>('all');

  const heroSlides = [
    {
      id: 1,
      tag: 'Facilities & Property Solutions',
      title: 'Keep Your Property Safe, Functional & Professionally Maintained',
      desc: 'From building maintenance and commercial cleaning to hygiene, pest control, waste management and contractor coordination, EFMS brings essential facilities services together under one reliable partner.',
      ctaText: 'Explore Facilities Solutions',
      subcat: 'facilities' as SolutionSubcategory,
      badge: 'Integrated Facility Management',
      image: facilitiesImg,
    },
    {
      id: 2,
      tag: 'Construction Delivery Solutions',
      title: 'Turn Construction Plans Into Successful Projects',
      desc: 'Experienced project and construction management for clients who need better planning, coordination, cost control, quality management and dependable project delivery.',
      ctaText: 'Discuss Construction Delivery',
      subcat: 'construction' as SolutionSubcategory,
      badge: 'Pr. CPM & PMP® Led Delivery',
      image: constructionImg,
    },
    {
      id: 3,
      tag: 'Specialist Consultancy Solutions',
      title: 'Professional Construction Advice When You Need It',
      desc: 'Get specialist support with construction costs, contracts (JBCC, GCC, NEC, FIDIC), claims, delays, programmes and risk — without building a permanent specialist team.',
      ctaText: 'Speak to a Consultant',
      subcat: 'consultancy' as SolutionSubcategory,
      badge: 'Cost, Contracts & Claims Advisory',
      image: consultancyImg,
    }
  ];

  // Auto advance hero slide
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isAutoplay, heroSlides.length]);

  const stats = [
    { value: '13+', label: 'Years Leadership', detail: 'Hands-on built environment experience' },
    { value: 'R676M', label: 'Max Project Scale', detail: 'Commercial & precinct redevelopment' },
    { value: '100%', label: 'Governance & Compliance', detail: 'SACPCMP Pr. CPM & PMI PMP® certified' },
    { value: '3 Pillars', label: 'Integrated Solutions', detail: 'Facilities, construction & consultancy' }
  ];

  const coreSolutions = [
    {
      id: 'facilities',
      num: '01',
      title: 'Facilities & Property Solutions',
      subtitle: 'Professional Facilities Management That Keeps Your Business Moving',
      desc: 'Bringing essential services together under one reliable partner to ensure uninterrupted operations, regulatory compliance, and pristine workplace hygiene.',
      image: facilitiesImg,
      badge: 'Operational Continuity',
      color: 'sky',
      services: [
        'Integrated Facilities Management',
        'Commercial Cleaning & Hygiene Care',
        'Pest Control & Soil Poisoning',
        'Office Relocation & Move Coordination',
        'Routine Building Maintenance & Repairs'
      ]
    },
    {
      id: 'construction',
      num: '02',
      title: 'Construction Delivery Solutions',
      subtitle: 'Experienced Management for Better Construction Outcomes',
      desc: 'Structured construction supervision, procurement administration, contractor coordination, and quality control from inception to commissioning and close-out.',
      image: constructionImg,
      badge: 'Project Governance',
      color: 'red',
      services: [
        'Construction Management Services',
        'Capital Project Management',
        'Freelance Project Management Leadership',
        'Quality Assurance (QA/QC) & HSE',
        'Programme Monitoring & Contractor Oversight'
      ]
    },
    {
      id: 'consultancy',
      num: '03',
      title: 'Consultancy Solutions',
      subtitle: 'Specialist Construction Expertise When You Need It',
      desc: 'Independent expert advice covering project budgeting, contractual disputes, delay forensics, and risk mitigation across all major contract forms.',
      image: consultancyImg,
      badge: 'Commercial Protection',
      color: 'navy',
      services: [
        'Quantity Surveying (QS) Consultancy',
        'Construction Claims & Dispute Support',
        'NEC, FIDIC, GCC & JBCC Contract Advisory',
        'Delay Analysis & Programme Recovery',
        'Commercial Risk & Cost Engineering'
      ]
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'GaRankuwa City Mall Redevelopment',
      category: 'commercial',
      value: 'R676M',
      location: 'Gauteng, South Africa',
      desc: 'High-density commercial precinct expansion, tenant fit-out coordination, and comprehensive civil infrastructure upgrades.',
      image: garankuwaMallImg,
      scope: 'Project Controls & Construction Management'
    },
    {
      id: 2,
      title: 'Zwartkop Integrated Facility Development',
      category: 'infrastructure',
      value: 'R500M',
      location: 'Pretoria, South Africa',
      desc: 'Multi-disciplinary government and institutional facility development, high-security civil works, and environmental management.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      scope: 'Turnkey Project Management & HSE'
    },
    {
      id: 3,
      title: 'Public Sector Infrastructure Program',
      category: 'infrastructure',
      value: 'R264.4M',
      location: 'South Africa',
      desc: 'Regional civic infrastructure delivery, municipal service reticulation, and structured contractor administration under GCC & NEC standards.',
      image: publicSectorImg,
      scope: 'Programme Management & Claims Mitigation'
    },
    {
      id: 4,
      title: 'Specialist Library & Research Center Upgrade',
      category: 'specialist',
      value: 'R97M',
      location: 'UNISA Campus, Pretoria',
      desc: 'Complex institutional refurbishment, high-spec acoustic fit-outs, precision HVAC upgrades, and heritage preservation.',
      image: unisaLibraryImg,
      scope: 'Principal Agent & Quality Assurance'
    }
  ];

  const whyChoosePoints = [
    {
      num: '01',
      title: 'One Partner for Multiple Requirements',
      desc: 'Instead of managing separate providers for facilities, cleaning, hygiene, pest control, construction management and specialist consultancy, access multiple complementary services through EFMS. This simplifies communication, coordination and accountability.',
      icon: Layers
    },
    {
      num: '02',
      title: 'Professional Project Management Expertise',
      desc: 'EFMS is led by a professionally registered Construction Project Manager (Pr. CPM) with PMP® certification and more than 13 years of project management experience.',
      icon: Award
    },
    {
      num: '03',
      title: 'Experience Across Complex Projects',
      desc: 'The leadership team’s project experience includes commercial, infrastructure, industrial, public-sector, education, social housing, transport and water-related projects valued up to R676M.',
      icon: Building2
    },
    {
      num: '04',
      title: 'Better Control of Time, Cost & Risk',
      desc: 'Professional planning, monitoring, procurement, stakeholder coordination, contract administration and risk management can help clients identify issues earlier and make better-informed decisions.',
      icon: TrendingUp
    },
    {
      num: '05',
      title: 'Flexible Support',
      desc: 'Businesses do not always need a permanent specialist. EFMS can provide targeted project management, consultancy or facilities support according to the client’s requirements.',
      icon: Clock
    },
    {
      num: '06',
      title: 'Practical Solutions for SMEs',
      desc: 'Small and medium-sized businesses often have limited internal resources. Outsourcing specialist facilities, project and construction requirements allows owners to focus on their core business.',
      icon: Briefcase
    },
    {
      num: '07',
      title: 'Support Without Unnecessary Complexity',
      desc: 'EFMS is positioned to provide practical solutions rather than adding unnecessary layers of administration. The focus is on understanding requirements, coordinating the right activities, and delivering.',
      icon: ShieldCheck
    }
  ];

  const savingsScenarios = [
    {
      scenario: 'Scenario 01',
      title: 'You Manage an Office or Commercial Building',
      problem: 'Instead of your staff spending hours coordinating cleaners, maintenance providers, pest control, and hygiene suppliers, EFMS brings these facility requirements together under one roof.',
      benefit: 'Fewer suppliers to coordinate, reduced operational friction, and less management time spent on routine issues.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80'
    },
    {
      scenario: 'Scenario 02',
      title: 'You Are Planning a Business Relocation',
      problem: 'Moving offices can disrupt employees and normal business operations. EFMS coordinates relocation requirements together with move-in, move-out, fit-outs, and deep cleaning.',
      benefit: 'A structured, organised move that protects company assets and minimizes downtime.',
      image: officeRelocationImg
    },
    {
      scenario: 'Scenario 03',
      title: 'You Are Starting a Construction Project',
      problem: 'Poor upfront planning leads to budget blowouts, delays, coordination breakdowns, and costly rework. EFMS provides planning, procurement, quality control, and cost monitoring.',
      benefit: 'Stronger project controls, tight budget adherence, and proactive issue identification.',
      image: constructionProjectImg
    },
    {
      scenario: 'Scenario 04',
      title: 'Your Construction Project Is Falling Behind',
      problem: 'A delayed project threatens cash flow, contractual penalties, and tenant commitments. EFMS reviews schedules, assesses critical paths, analyses delays, and builds recovery programmes.',
      benefit: 'Clear forensic insight into delay causes with an actionable recovery roadmap to get back on track.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      scenario: 'Scenario 05',
      title: 'You Are Facing a Construction Claim or Dispute',
      problem: 'Contractual claims require deep expertise across standard contracts (NEC, FIDIC, GCC, JBCC), records, and quantum analysis. EFMS prepares rigorous claim evaluations and defense.',
      benefit: 'Direct access to specialist claims and contract advisory without hiring full-time internal legal counsel.',
      image: constructionClaimDisputeImg
    },
    {
      scenario: 'Scenario 06',
      title: 'You Need an Experienced Project Manager — Flexibly',
      problem: 'A high-stakes capital project requires experienced leadership, but your business does not have enough continuous volume to justify a permanent executive appointment.',
      benefit: 'Senior Pr. CPM and PMP® leadership on-demand, tailored precisely to project duration.',
      image: projectManagerImg
    }
  ];

  const whoWeServeCategories = [
    { title: 'Commercial & Workplaces', desc: 'Offices, corporate parks, multi-tenant headquarters', icon: Building2, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
    { title: 'Industrial & Warehouses', desc: 'Logistics hubs, manufacturing plants, workshops', icon: Factory, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' },
    { title: 'Retail & Shopping Centres', desc: 'Retail malls, convenience centers, strip malls', icon: ShoppingCart, img: garankuwaMallWebp },
    { title: 'Institutions & Healthcare', desc: 'Universities, schools, clinics, hospitals', icon: GraduationCap, img: hospitalImg },
    { title: 'Public Sector & Municipalities', desc: 'Government agencies, state-owned enterprises', icon: Landmark, img: publicSectorMunicipalitiesImg },
    { title: 'Developers & Contractors', desc: 'Property developers, construction firms, project teams', icon: HardHat, img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80' },
    { title: 'SMEs & Growing Businesses', desc: 'Growing enterprises needing outsourced facilities', icon: Briefcase, img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80' },
    { title: 'Residential & Estates', desc: 'Residential complexes, private estates, landlords', icon: Home, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' }
  ];

  const nextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const filteredProjects = activeTab === 'all'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === activeTab);

  return (
    <div id="eureka-landing-root" className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Standardized Header Navigation */}
      <EurekaHeader
        currentPage="home"
        onNavigate={onNavigate}
      />

      {/* 2. Hero Section (Animated Dynamic Slide Carousel with Floating Badges) */}
      <section id="home" className="relative bg-[#050b1b] text-white pt-16 pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Gradient Mesh & Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,116,144,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,0.12),transparent_45%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHeroSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 text-red-400 text-xs font-extrabold uppercase tracking-widest border border-white/15 backdrop-blur-md shadow-inner">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span>{heroSlides[activeHeroSlide].tag}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.14] uppercase text-white drop-shadow-sm">
                  {heroSlides[activeHeroSlide].title}
                </h1>

                <p className="text-base sm:text-lg font-bold text-sky-300">
                  Professional Facilities Management, Construction Delivery &amp; Consultancy Solutions
                </p>

                <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                  {heroSlides[activeHeroSlide].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('solutions', heroSlides[activeHeroSlide].subcat)}
                className="inline-flex items-center justify-center text-xs font-black tracking-wider bg-[#d91b1b] text-white px-7 py-4 rounded-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/30 cursor-pointer"
              >
                {heroSlides[activeHeroSlide].ctaText}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center justify-center gap-2 text-xs font-black tracking-wider bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
              >
                <span>REQUEST A CONSULTATION</span>
                <ArrowRight className="w-4 h-4 text-red-400" />
              </motion.button>
            </div>

            {/* Slider Controls & Autoplay Indicator */}
            <div className="pt-4 flex items-center gap-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveHeroSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeHeroSlide === idx ? 'w-8 bg-red-500' : 'w-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1.5 ml-2 cursor-pointer"
                title={isAutoplay ? 'Pause auto-slide' : 'Resume auto-slide'}
              >
                {isAutoplay ? <Pause className="w-3 h-3 text-red-400" /> : <Play className="w-3 h-3 text-sky-400" />}
                <span>{isAutoplay ? 'Auto-playing' : 'Paused'}</span>
              </button>
            </div>
          </div>

          {/* Right Hero Visual Showcase with Interactive Slide */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 h-96 sm:h-[440px] group bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeHeroSlide}
                  src={heroSlides[activeHeroSlide].image}
                  alt={heroSlides[activeHeroSlide].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating Live Badge Top Left */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-md shadow-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-extrabold tracking-wider text-slate-200">
                  {heroSlides[activeHeroSlide].badge}
                </span>
              </div>

              {/* Floating Slide Counter Top Right */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-xs font-mono font-bold text-white border border-white/15">
                0{activeHeroSlide + 1} / 0{heroSlides.length}
              </div>

              {/* Slide Overlay Info on Bottom */}
              <div className="absolute bottom-5 left-5 right-20 z-20 space-y-1">
                <span className="text-[10px] text-sky-400 font-extrabold uppercase tracking-widest block">
                  Built-Environment Focus:
                </span>
                <span className="text-sm font-bold text-white leading-snug block truncate drop-shadow">
                  {heroSlides[activeHeroSlide].subcat === 'facilities'
                    ? 'Facilities & Property Solutions'
                    : heroSlides[activeHeroSlide].subcat === 'construction'
                    ? 'Construction Delivery Solutions'
                    : 'Specialist Consultancy Solutions'}
                </span>
              </div>

              {/* Slider Arrow Buttons */}
              <div className="absolute bottom-5 right-4 flex items-center gap-2 z-20">
                <button
                  type="button"
                  onClick={prevHeroSlide}
                  aria-label="Previous Hero Slide"
                  className="w-9 h-9 rounded-full bg-white/90 text-[#09132e] hover:bg-[#d91b1b] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextHeroSlide}
                  aria-label="Next Hero Slide"
                  className="w-9 h-9 rounded-full bg-white/90 text-[#09132e] hover:bg-[#d91b1b] hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Supporting Hero Statement Box (Rich Elevated Glassmorphic Card) */}
        <div className="max-w-7xl mx-auto mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-400">
              <ShieldCheck className="w-4 h-4" />
              <span>SUPPORTING VALUE PROPOSITION</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white">
              One Professional Partner. Multiple Built-Environment Solutions.
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Whether you are maintaining an existing property, relocating a business, starting a construction project or dealing with a construction cost, contract or delay issue, Eureka Facilities Management Solutions provides practical professional support tailored to your requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate?.('contact')}
            className="shrink-0 px-7 py-3.5 bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black rounded-lg tracking-wider shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            REQUEST A QUOTE
          </button>
        </div>
      </section>

      {/* 3.5 Animated Key Metrics & Governance Ticker Bar */}
      <section className="bg-slate-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-black text-red-500 block tracking-tight font-sans">
                {st.value}
              </span>
              <span className="text-sm font-bold text-white block mt-1">
                {st.label}
              </span>
              <span className="text-xs text-slate-400 block mt-0.5 font-normal">
                {st.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Three Solution Pillars Overview Cards (Enriched with Rich Photography & Animations) */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              OUR THREE CORE SOLUTION AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Integrated Capabilities for Every Stage of the Asset Lifecycle
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              From everyday property maintenance to capital project execution and expert contractual dispute resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSolutions.map((sol, idx) => (
              <motion.article
                key={sol.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Header with Zoom on Hover */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-extrabold text-white uppercase tracking-wider border border-white/10">
                      Solution {sol.num}
                    </div>

                    <div className="absolute top-3.5 right-3.5 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                      {sol.badge}
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                      <h3 className="text-lg font-black text-white tracking-tight drop-shadow leading-tight">
                        {sol.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-slate-800 leading-relaxed mb-3">
                      {sol.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {sol.desc}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2.5">
                        Key Capabilities Included:
                      </span>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {sol.services.map((srv, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => onNavigate?.('solutions', sol.id as SolutionSubcategory)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-50 group-hover:bg-[#08286b] text-slate-800 group-hover:text-white text-xs font-black tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>EXPLORE {sol.title.toUpperCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 NEW: Leadership & Director Spotlight on Home Page */}
      <section className="bg-[#081129] text-white py-18 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Director Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto rounded-2xl overflow-hidden border-2 border-red-600/80 shadow-2xl group bg-slate-950 aspect-[3/4]">
              <img
                src={monwabisiImg}
                alt="Monwabisi Makinana - Founder & Managing Director"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded shadow">
                Founder &amp; Director
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <span className="text-[11px] font-extrabold text-red-400 uppercase tracking-wider block">Executive Leadership</span>
                <h4 className="text-sm font-black text-white">Monwabisi Makinana</h4>
                <p className="text-xs text-slate-300">Pr. CPM (SACPCMP), PMP® (PMI, USA)</p>
              </div>
            </div>
          </motion.div>

          {/* Director Bio & Value Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-red-400 text-xs font-extrabold uppercase tracking-widest border border-white/10">
              <Award className="w-3.5 h-3.5" />
              <span>PROVEN LEADERSHIP &amp; GOVERNANCE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
              Led by Registered Industry Experience You Can Rely On
            </h2>

            <p className="text-sm sm:text-base font-normal text-slate-200 leading-relaxed">
              Eureka Facilities Management Solutions is led by <strong>Monwabisi Makinana</strong>, a registered Professional Construction Project Manager (Pr. CPM with SACPCMP) and certified Project Management Professional (PMP® with PMI) with over 13 years of leadership across complex built-environment projects valued up to R676M.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Registrations</span>
                </div>
                <p className="text-xs text-slate-300">
                  SACPCMP Pr. CPM &amp; PMI PMP® accredited professional governance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                  <Scale className="w-4 h-4" />
                  <span>Contracts &amp; Disputes</span>
                </div>
                <p className="text-xs text-slate-300">
                  In-depth mastery across JBCC, GCC, NEC3/4, and FIDIC suites.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate?.('about')}
                className="px-6 py-3 bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black rounded-lg tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
              >
                READ FULL LEADERSHIP BIO
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-black rounded-lg tracking-wider border border-white/20 transition-all cursor-pointer"
              >
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4.8 NEW: Built-Environment Track Record & Project Showcase */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
                PROVEN BUILT-ENVIRONMENT TRACK RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Featured Projects &amp; Capabilities Portfolio
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Representative project leadership across major commercial precincts, civic infrastructure, and institutional facilities.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'infrastructure', label: 'Infrastructure' },
                { id: 'specialist', label: 'Specialist Upgrades' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#08286b] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-black px-2.5 py-0.5 rounded shadow">
                      {proj.value}
                    </div>

                    <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-black text-slate-900 mb-1 leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-slate-200/60 mt-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-800 block">
                    Scope of Delivery:
                  </span>
                  <span className="text-xs font-semibold text-slate-800">
                    {proj.scope}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Businesses Choose EFMS (7 Points from Document with Interactive Animation) */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              WHY CHOOSE EUREKA?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why South African Businesses Choose EFMS
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From everyday operational needs to complex construction projects, EFMS combines professional governance with hands-on delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, idx) => {
              const IconComp = point.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-red-500/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#d91b1b] block">{point.num}</span>
                      <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-[#d91b1b] group-hover:text-white transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2">{point.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Consultation Promo Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#08286b] to-[#04163d] text-white flex flex-col justify-between shadow-xl border border-blue-900"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-red-400 block mb-2">PARTNER WITH US</span>
                <h3 className="text-lg font-black text-white mb-2">Ready to discuss your project or facility requirement?</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Speak with our registered project management and facilities specialists today for a tailored assessment.
                </p>
              </div>
              <button
                onClick={() => onNavigate?.('contact')}
                className="w-full text-center py-3 bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-extrabold rounded-lg transition-all shadow cursor-pointer active:scale-95"
              >
                REQUEST A CONSULTATION
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. How EFMS Can Save Your Business Time & Money (6 Scenarios with Visual Photography) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              PRACTICAL BUSINESS VALUE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              HOW EFMS CAN SAVE YOUR BUSINESS TIME &amp; MONEY
            </h2>
            <p className="text-sm font-semibold text-slate-600 mt-2">
              Spend Less Time Managing Problems. Here is how we help in common real-world scenarios:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savingsScenarios.map((sc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg transition-all group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="h-36 relative overflow-hidden bg-slate-900">
                    <img
                      src={sc.image}
                      alt={sc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-3.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-black uppercase">
                      <span>{sc.scenario}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm font-black text-slate-900 mb-2 leading-snug">{sc.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{sc.problem}</p>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-200 bg-sky-50/60">
                  <span className="text-[11px] font-black text-sky-900 uppercase block mb-1">Practical Benefit:</span>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">{sc.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Value Proposition (Full Width Dark Atmospheric Section) */}
      <section className="bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0c2460] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
          <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase">OUR VALUE PROPOSITION</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
            Professional Expertise. Practical Solutions. Reliable Support.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            At EFMS, we believe professional services should make your business easier to manage — not more complicated.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Our combination of facilities management, construction delivery and consultancy solutions allows us to support clients at different stages of the property and project lifecycle.
          </p>
          <div className="pt-2 text-sm sm:text-base font-bold text-sky-400">
            You focus on your business. We help you manage the facilities, projects and specialist requirements that keep it moving.
          </div>
        </div>
      </section>

      {/* 8. Who We Serve (Visual Sectors Showcase with Imagery) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">WHO WE SERVE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Tailored Solutions Across Every Built-Environment Sector
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Serving corporate property owners, institutions, contractors, and growing South African enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whoWeServeCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="rounded-xl overflow-hidden bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
                >
                  <div className="h-28 relative overflow-hidden bg-slate-900">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-white">
                      <div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-black truncate">{item.title}</span>
                    </div>
                  </div>

                  <div className="p-3.5">
                    <p className="text-[11px] text-slate-600 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Local & National Service Positioning */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-black tracking-widest text-sky-800 uppercase">LOCAL &amp; NATIONAL SERVICE POSITIONING</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
            Supporting Clients in Gauteng &amp; Across South Africa
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Eureka Facilities Management Solutions is positioned to support clients in Gauteng and across South Africa, with services spanning facilities management, construction delivery and specialist consultancy.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Whether you are a small business requiring reliable facility support or an organisation managing a major construction project, EFMS can structure its professional support around your specific requirement.
          </p>
          <div className="pt-2 font-black text-sm sm:text-base text-[#d91b1b] tracking-wide uppercase">
            Local requirement. National project. Professional support.
          </div>
        </div>
      </section>

      {/* 10. Call to Action Section (Document Page 16) */}
      <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Have a Facility, Construction Project or Property Challenge?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Let's discuss what you need. Whether you need ongoing facilities support, professional cleaning, pest control, a project manager, construction management, cost advice, contract support or delay analysis, EFMS can help you identify the right solution.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-7 py-3.5 rounded-lg bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-extrabold tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-7 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-extrabold tracking-wider border border-slate-700 transition-all cursor-pointer active:scale-95"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-7 py-3.5 rounded-lg bg-sky-700 hover:bg-sky-600 text-white text-xs font-extrabold tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* 11. Standard Footer */}
      <EurekaFooter onNavigate={onNavigate} />
    </div>
  );
};

