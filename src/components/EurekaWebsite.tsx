import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import monwabisiImg from '../assets/images/monwabisi-makinana.jpg';
import facilitiesImg from '../assets/images/facilities_and_property_solutions.jpg';
import constructionImg from '../assets/images/construction_delivery_solutions.jpg';
import consultancyImg from '../assets/images/consultancy_solutions.jpg';
import undercoverParkingImg from '../assets/images/undercover_parking.jpg';
import fumigationImg from '../assets/images/Fumigation.jpeg';
import { EurekaLogo } from './EurekaLogo';
import { EurekaHeader } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimation';
import {
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  Menu,
  X,
  Award,
  Users,
  ShieldCheck,
  Building2,
  Layers,
  Briefcase,
  Scale,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Building,
  Check,
  TrendingUp,
  Clock,
  FileText,
  AlertTriangle,
  Play,
  Pause,
  ExternalLink,
  Star,
  Quote
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaWebsiteProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'construction-management' | 'project-management' | 'freelance-pm' | 'construction-consultancy' | 'quantity-surveying' | 'construction-claims' | 'delay-analysis' | 'projects' | 'gallery' | 'pricing' | 'contact', subcategory?: SolutionSubcategory) => void;
}

export const EurekaWebsite: React.FC<EurekaWebsiteProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [openWhyChooseIndex, setOpenWhyChooseIndex] = useState<number | null>(0);

  const toggleWhyChoose = (idx: number) => {
    setOpenWhyChooseIndex((prev) => (prev === idx ? null : idx));
  };

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
        'Commercial Cleaning & Hygiene Care',
        'Pest Control Services',
        'Pre-Soil Treatment & Soil Poisoning',
        'Office Relocation & Move Coordination',
        'Integrated Facilities Management'
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

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialAutoplay, setIsTestimonialAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      headline: "Peace of mind, every time.",
      quote: "As a property manager, I work with multiple vendors. Eureka stands out for their consistency, attention to detail, and great customer support. They make my job easier and my properties cleaner.",
      author: "Thabo N.",
      role: "Property Manager"
    },
    {
      id: 2,
      headline: "Fast response and great results.",
      quote: "We had an urgent pest issue at our guesthouse, and Eureka responded within hours. They were discreet, efficient, and followed up to make sure everything was resolved. Excellent service!",
      author: "Lerato M.",
      role: "Guesthouse Owner"
    },
    {
      id: 3,
      headline: "Exceptional service for our school.",
      quote: "Eureka has provided cleaning and sanitation services at our school for several months. Their staff are respectful, reliable, and always go the extra mile. We feel confident knowing our learners are in a clean and safe environment.",
      author: "Patel",
      role: "Facilities Coordinator"
    },
    {
      id: 4,
      headline: "A trustworthy partner in facilities management.",
      quote: "We've partnered with Eureka for over two years now. From daily cleaning to washroom hygiene services, they handle it all with professionalism and efficiency. Their team feels like an extension of our own.",
      author: "Zanele T.",
      role: "Facilities Coordinator"
    },
    {
      id: 5,
      headline: "Highly recommended for pest control!",
      quote: "We were dealing with a serious rodent issue in our warehouse, and Eureka came highly recommended. Their pest control team acted quickly, explained the entire process, and completely resolved the problem. We haven't seen a single rodent since.",
      author: "Darren K.",
      role: "Operations Director"
    },
    {
      id: 6,
      headline: "Reliable and professional from day one.",
      quote: "Eureka has transformed the way our office looks and feels. Their cleaning team is always punctual, professional, and thorough. We've noticed a significant improvement in our workplace hygiene and staff morale.",
      author: "Nolwazi M.",
      role: "Office Manager"
    }
  ];

  useEffect(() => {
    if (!isTestimonialAutoplay) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isTestimonialAutoplay, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div id="eureka-landing-root" className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* 1. Standardized Header Navigation */}
      <EurekaHeader
        currentPage="home"
        onNavigate={onNavigate}
      />

      {/* 2. Hero Section (Animated Dynamic Slide Carousel with Floating Badges) */}
      <section id="home" className="relative bg-[#050b1b] text-white pt-16 pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        {/* Background Video Overlay & Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60 pointer-events-none" />
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
        <StaggerContainer className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((st, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(239, 68, 68, 0.6)' }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 transition-colors h-full"
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 4. Three Solution Pillars Overview Cards (Enriched with Rich Photography & Animations) */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              OUR THREE CORE SOLUTION AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Integrated Capabilities for Every Stage of the Asset Lifecycle
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              From everyday property maintenance to capital project execution and expert contractual dispute resolution.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSolutions.map((sol, idx) => (
              <StaggerItem key={sol.id}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Card Image Header with Zoom on Hover */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wider">
                          Solution {sol.num}
                        </span>
                        <span className="bg-red-50 text-red-700 text-[10px] font-black uppercase px-2.5 py-0.5 rounded border border-red-200">
                          {sol.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight mb-2">
                        {sol.title}
                      </h3>
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
                      className="w-full py-2.5 px-4 rounded-lg bg-slate-50 group-hover:bg-[#08286b] text-slate-800 group-hover:text-white text-xs font-black tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-98"
                    >
                      <span>EXPLORE {sol.title.toUpperCase()}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
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

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate?.('about')}
                className="px-5 py-3 bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black rounded-lg tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
              >
                READ FULL LEADERSHIP BIO
              </button>
              <button
                onClick={() => onNavigate?.('projects')}
                className="px-5 py-3 bg-sky-600 hover:bg-sky-500 text-white text-xs font-black rounded-lg tracking-wider transition-all shadow-md cursor-pointer active:scale-95"
              >
                VIEW PROJECTS
              </button>
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-black rounded-lg tracking-wider border border-white/20 transition-all cursor-pointer"
              >
                SCHEDULE A CONSULTATION
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Businesses Choose EFMS (Split into 2 Columns: Accordion + Fumigation Visual) */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="max-w-3xl mb-12">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              WHY CHOOSE EUREKA?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why South African Businesses Choose EFMS
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From everyday operational needs to complex construction projects, EFMS combines professional governance with hands-on delivery.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion Format of the 7 Why Choose Points */}
            <ScrollReveal direction="right" duration={0.6} className="lg:col-span-7 space-y-3">
              {whyChoosePoints.map((point, idx) => {
                const IconComp = point.icon;
                const isOpen = openWhyChooseIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-red-500/50 shadow-md ring-1 ring-red-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleWhyChoose(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`text-sm font-black shrink-0 transition-colors ${
                            isOpen ? 'text-[#d91b1b]' : 'text-slate-400'
                          }`}
                        >
                          {point.num}
                        </span>
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? 'bg-[#d91b1b] text-white' : 'bg-red-50 text-red-600'
                          }`}
                        >
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3
                          className={`text-sm sm:text-base font-extrabold transition-colors ${
                            isOpen ? 'text-slate-950' : 'text-slate-800'
                          }`}
                        >
                          {point.title}
                        </h3>
                      </div>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-red-600 bg-red-50' : 'text-slate-400 bg-slate-100'
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                            {point.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </ScrollReveal>

            {/* Column 2: Fumigation Image & Partner Callout */}
            <ScrollReveal direction="left" duration={0.6} className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src={fumigationImg}
                  alt="EFMS Certified Specialist Fumigation and Pest Management"
                  className="w-full h-auto max-h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="w-full py-4 px-6 bg-[#d91b1b] hover:bg-red-700 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
              >
                <span>REQUEST A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Our Value Proposition (Two-Column Layout with Undercover Parking Facility Visual) */}
      <section className="bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0c2460] text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
          {/* Column 1: Undercover Parking Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <img
              src={undercoverParkingImg}
              alt="EFMS Facility Infrastructure & Undercover Parking Operations"
              className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Column 2: Existing Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-left"
          >
            <div>
              <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
                OUR VALUE PROPOSITION
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Professional Expertise. Practical Solutions. Reliable Support.
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              At EFMS, we believe professional services should make your business easier to manage — not more complicated.
            </p>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our combination of facilities management, construction delivery and consultancy solutions allows us to support clients at different stages of the property and project lifecycle.
            </p>
            
            <div className="p-4 rounded-xl bg-sky-950/50 border border-sky-500/30 text-sky-300 text-sm sm:text-base font-semibold leading-relaxed">
              You focus on your business. We help you manage the facilities, projects and specialist requirements that keep it moving.
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-6 py-3 rounded-lg text-xs font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>REQUEST A PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate?.('about')}
                className="px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
              >
                ABOUT OUR APPROACH
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. How We Deliver: Our Structured Delivery Framework */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading & Eyebrow */}
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              HOW WE DELIVER
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Our Structured Delivery Framework
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              A proven four-stage methodology ensuring risk mitigation, statutory compliance, and cost efficiency.
            </p>
          </ScrollReveal>

          {/* Four Stage Cards Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <StaggerItem>
              <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-red-500/40 hover:shadow-md transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#d91b1b] block">01</span>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#d91b1b] flex items-center justify-center group-hover:bg-[#d91b1b] group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#08286b] transition-colors mb-2 leading-snug">
                    Audit &amp; Diagnostic Assessment
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive baseline inspection of facility condition, statutory compliance, structural health, and maintenance liabilities.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="uppercase tracking-wider">Phase 01</span>
                  <span>Diagnostics</span>
                </div>
              </div>
            </StaggerItem>

            {/* Stage 2 */}
            <StaggerItem>
              <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-red-500/40 hover:shadow-md transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#d91b1b] block">02</span>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#d91b1b] flex items-center justify-center group-hover:bg-[#d91b1b] group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#08286b] transition-colors mb-2 leading-snug">
                    Strategic Solution Design
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tailoring SLA frameworks, project work breakdown structures, procurement models, and lifecycle budgeting.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="uppercase tracking-wider">Phase 02</span>
                  <span>Solution Design</span>
                </div>
              </div>
            </StaggerItem>

            {/* Stage 3 */}
            <StaggerItem>
              <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-red-500/40 hover:shadow-md transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#d91b1b] block">03</span>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#d91b1b] flex items-center justify-center group-hover:bg-[#d91b1b] group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#08286b] transition-colors mb-2 leading-snug">
                    Execution &amp; Project Controls
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rigorous management of scope, time, cost, safety (OHS), and quality on-site with real-time stakeholder tracking.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="uppercase tracking-wider">Phase 03</span>
                  <span>Project Controls</span>
                </div>
              </div>
            </StaggerItem>

            {/* Stage 4 */}
            <StaggerItem>
              <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between hover:border-red-500/40 hover:shadow-md transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#d91b1b] block">04</span>
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#d91b1b] flex items-center justify-center group-hover:bg-[#d91b1b] group-hover:text-white transition-colors">
                      <Check className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#08286b] transition-colors mb-2 leading-snug">
                    Handover &amp; Optimization
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structured commissioning, as-built documentation, facility maintenance transition, and post-occupancy reviews.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                  <span className="uppercase tracking-wider">Phase 04</span>
                  <span>Optimization</span>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 8. Client Testimonials (Scrolling Slides) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Proven consistency, proactive service, and trusted built-environment solutions across South Africa.
            </p>
          </ScrollReveal>

          {/* Testimonial Slides Container */}
          <ScrollReveal
            direction="zoom"
            duration={0.6}
            className="relative bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-10 lg:p-14 shadow-sm"
          >
            <div
              onMouseEnter={() => setIsTestimonialAutoplay(false)}
              onMouseLeave={() => setIsTestimonialAutoplay(true)}
            >
            {/* Left Prev Arrow Button */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#d91b1b] text-slate-700 hover:text-white border border-slate-200 shadow-md flex items-center justify-center transition-all cursor-pointer z-20 group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Right Next Arrow Button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-[#d91b1b] text-slate-700 hover:text-white border border-slate-200 shadow-md flex items-center justify-center transition-all cursor-pointer z-20 group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Slide Content with AnimatePresence */}
            <div className="min-h-[260px] sm:min-h-[220px] flex flex-col justify-center items-center text-center px-4 sm:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="w-full flex flex-col items-center"
                >
                  {/* Decorative Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black italic text-[#08286b] mb-4 tracking-tight leading-snug">
                    "{testimonials[activeTestimonial].headline}"
                  </h3>

                  {/* Main Quote */}
                  <p className="text-sm sm:text-base md:text-lg italic text-slate-700 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  {/* Author Attribution */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-slate-200/80 w-full max-w-md">
                    <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 shadow-2xs flex items-center">
                      <EurekaLogo className="h-6 w-auto" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                        {testimonials[activeTestimonial].author}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8 pt-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial by ${item.author}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx
                      ? 'w-8 bg-[#d91b1b]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* Slide counter */}
            <div className="text-center mt-3">
              <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                0{activeTestimonial + 1} / 0{testimonials.length}
              </span>
            </div>
            </div>
          </ScrollReveal>

          {/* Quick Select Client Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
            {testimonials.map((t, idx) => {
              const isActive = activeTestimonial === idx;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#d91b1b] shadow-sm ring-1 ring-[#d91b1b]/20'
                      : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] font-black uppercase ${isActive ? 'text-[#d91b1b]' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d91b1b]" />
                    )}
                  </div>
                  <div className="font-extrabold text-xs text-slate-900 truncate">
                    {t.author}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate font-medium">
                    {t.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. Standard Footer */}
      <EurekaFooter onNavigate={onNavigate} />
    </div>
  );
};

