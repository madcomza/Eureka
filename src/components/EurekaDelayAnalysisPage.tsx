import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EurekaHeader } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import specialistDelayImg from '../assets/images/Specialist Delay & Programme.jpg';
import {
  Clock,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Award,
  Users,
  FileText,
  DollarSign,
  Layers,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronRight,
  TrendingUp,
  Activity,
  BarChart3,
  ClipboardList,
  Target,
  FileSpreadsheet,
  BadgeCheck,
  Compass,
  PieChart,
  Check,
  Workflow,
  Sparkles,
  Search,
  Flag,
  Percent,
  SlidersHorizontal,
  FolderGit2,
  HardHat,
  UserCheck,
  Zap,
  RotateCcw,
  CheckSquare,
  FileSearch,
  ShieldAlert,
  ArrowUpRight,
  Gavel,
  FileCheck2,
  BookOpen,
  LineChart,
  Landmark,
  FileBadge,
  Calculator,
  Shield,
  Briefcase,
  GitCommit,
  Milestone,
  Split,
  Timer,
  Scale
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaDelayAnalysisPageProps {
  onNavigate?: (
    page:
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
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaDelayAnalysisPage: React.FC<EurekaDelayAnalysisPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active Timeline Tab in Visualizer
  const [activeTimelineView, setActiveTimelineView] = useState<'baseline' | 'impacted' | 'asbuilt'>('impacted');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(0);

  const toggleService = (idx: number) => {
    setOpenServiceIndex(openServiceIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Standardized Header */}
      <EurekaHeader
        currentPage="delay-analysis"
        onNavigate={onNavigate}
        
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#09132e] border-b border-slate-800">
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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/70 border border-red-700/50 text-red-300 text-xs font-bold uppercase tracking-wider shadow-inner">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span>Forensic Schedule Forensics &amp; Critical Path Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                MASTER THE CRITICAL PATH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-amber-300">
                  DEFEND TIME &amp; DEFEAT DAMAGES.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Expert forensic delay analysis, contemporaneous programme management, and Extension of Time (EOT) substantiation. We deconstruct complex delays using SCL Protocol standards, Primavera P6 rigor, and indisputable critical path methodologies.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-red-400 font-black text-xl flex items-center gap-1">
                    <span>100%</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">SCL 2nd Edition</div>
                  <div className="text-[11px] text-slate-400">Delay &amp; Disruption Protocol</div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-amber-400 font-black text-xl flex items-center gap-1">
                    <span>P6 / Asta</span>
                    <Layers className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">Forensic Software</div>
                  <div className="text-[11px] text-slate-400">Time Impact &amp; Windows</div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-emerald-400 font-black text-xl flex items-center gap-1">
                    <span>R180M+</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">Damages Mitigated</div>
                  <div className="text-[11px] text-slate-400">Across SADC Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Clock className="w-4 h-4" />
                  <span>Request Forensic Programme Audit</span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('methodologies');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Workflow className="w-4 h-4 text-slate-400" />
                  <span>Explore SCL Methodologies</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>JBCC 6.2</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>FIDIC Red / Yellow</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>NEC3 / NEC4 ECC</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>GCC 2015</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CRITICAL PATH TIMELINE DECONSTRUCTION */}
      <section id="critical-path-visualizer" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
                <Workflow className="w-3.5 h-3.5 text-red-600" />
                <span>Forensic Gantt Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                CRITICAL PATH SHIFT VISUALIZER
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Visualizing how individual delay fragnets drive the completion milestone across schedule baselines.
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm">
              <button
                onClick={() => setActiveTimelineView('baseline')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                  activeTimelineView === 'baseline'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                1. As-Planned Baseline
              </button>
              <button
                onClick={() => setActiveTimelineView('impacted')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                  activeTimelineView === 'impacted'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                2. Contemporaneously Impacted (TIA)
              </button>
              <button
                onClick={() => setActiveTimelineView('asbuilt')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                  activeTimelineView === 'asbuilt'
                    ? 'bg-red-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                3. Final As-Built Windows
              </button>
            </div>
          </div>

          {/* Simulated Gantt Interactive Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-700">
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-red-600" />
                  <span>PROJECT: Mixed-Use Commercial Tower (42 Levels)</span>
                </span>
                <span className="hidden sm:inline-block text-slate-300">|</span>
                <span className="hidden sm:inline-block text-slate-500">Baseline ID: BL-REV-04</span>
              </div>
              <span className="text-red-600 font-bold">
                {activeTimelineView === 'baseline' ? 'Target: 14 Nov 2025' : activeTimelineView === 'impacted' ? 'Impacted: 28 Jan 2026 (+75d)' : 'Actual Handover: 06 Mar 2026 (+112d)'}
              </span>
            </div>

            <div className="p-6 space-y-5">
              {[
                {
                  code: 'ACT-1010',
                  name: 'Site Establishment & Bulk Earthworks',
                  baseStart: '01 Jan',
                  baseEnd: '28 Feb',
                  actualStart: '01 Jan',
                  actualEnd: '15 Mar',
                  variance: '+15d',
                  critical: true,
                  impactDesc: 'Delayed municipal borehole relocation notice'
                },
                {
                  code: 'ACT-1020',
                  name: 'Deep Piling & Raft Foundation Concrete',
                  baseStart: '01 Mar',
                  baseEnd: '30 May',
                  actualStart: '16 Mar',
                  actualEnd: '20 Jun',
                  variance: '+21d',
                  critical: true,
                  impactDesc: 'Employer redesign of tension anchor piles'
                },
                {
                  code: 'ACT-2010',
                  name: 'Structural Concrete Superstructure (L1 - L42)',
                  baseStart: '01 Jun',
                  baseEnd: '15 Dec',
                  actualStart: '21 Jun',
                  actualEnd: '10 Feb',
                  variance: '+56d',
                  critical: true,
                  impactDesc: 'Late structural engineering revisions & post-tensioning fragnets'
                },
                {
                  code: 'ACT-3040',
                  name: 'Facade Glazing & Unitized Curtain Wall',
                  baseStart: '01 Aug',
                  baseEnd: '30 Jan',
                  actualStart: '01 Sep',
                  actualEnd: '20 Feb',
                  variance: '+20d',
                  critical: false,
                  impactDesc: 'Float absorbed: 14 days total float remaining'
                },
                {
                  code: 'ACT-4020',
                  name: 'Primary MEP Plant & Transformer energisation',
                  baseStart: '01 Nov',
                  baseEnd: '15 Feb',
                  actualStart: '15 Dec',
                  actualEnd: '28 Feb',
                  variance: '+13d',
                  critical: true,
                  impactDesc: 'Eskom grid tie-in delays (Force Majeure)'
                },
                {
                  code: 'ACT-5010',
                  name: 'Architectural Finishes, Commissioning & Handover',
                  baseStart: '15 Jan',
                  baseEnd: '14 Nov',
                  actualStart: '10 Feb',
                  actualEnd: '06 Mar',
                  variance: '+112d',
                  critical: true,
                  impactDesc: 'Cumulative critical path shift to practical completion'
                }
              ].map((task, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500 text-[11px]">{task.code}</span>
                      <span className="font-bold text-slate-800">{task.name}</span>
                      {task.critical && (
                        <span className="text-[9px] bg-red-50 text-red-700 border border-red-200 px-1.5 py-0.2 rounded font-black">
                          CRITICAL PATH
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-3">
                      <span>Planned: {task.baseStart} – {task.baseEnd}</span>
                      <span className="font-mono text-amber-700 font-bold">{task.variance}</span>
                    </div>
                  </div>

                  {/* Gantt Bar Graphic */}
                  <div className="h-4 w-full bg-slate-100 rounded overflow-hidden border border-slate-200 relative flex items-center">
                    {/* Baseline Bar */}
                    {activeTimelineView === 'baseline' && (
                      <div
                        className="h-full bg-blue-600 rounded"
                        style={{
                          marginLeft: `${idx * 12}%`,
                          width: `${Math.max(18, 45 - idx * 4)}%`
                        }}
                      ></div>
                    )}

                    {/* Impacted Bar (TIA) */}
                    {activeTimelineView === 'impacted' && (
                      <div
                        className="h-full bg-amber-500 rounded relative"
                        style={{
                          marginLeft: `${idx * 14}%`,
                          width: `${Math.max(22, 52 - idx * 4)}%`
                        }}
                      >
                        <div className="absolute right-0 top-0 h-full w-2 bg-red-500"></div>
                      </div>
                    )}

                    {/* Final As-Built Windows Bar */}
                    {activeTimelineView === 'asbuilt' && (
                      <div
                        className="h-full bg-gradient-to-r from-blue-700 via-amber-600 to-red-600 rounded"
                        style={{
                          marginLeft: `${idx * 15}%`,
                          width: `${Math.max(25, 60 - idx * 4)}%`
                        }}
                      ></div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-500 italic pl-1">
                    Event Driver: {task.impactDesc}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-3 h-3 rounded bg-blue-600"></span>
                  <span>As-Planned Activity</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-3 h-3 rounded bg-amber-500"></span>
                  <span>Employer Delay Fragnet</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-3 h-3 rounded bg-red-600"></span>
                  <span>Critical Path Slippage</span>
                </span>
              </div>

              <button
                onClick={() => onNavigate?.('contact')}
                className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1 text-xs cursor-pointer"
              >
                <span>Request Forensic Analysis for Your Baseline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE FORENSIC SERVICE CAPABILITIES - 2 COLUMNS: ACCORDION + IMAGE */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Core Service Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              SPECIALIST DELAY &amp; PROGRAMME SERVICES
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3">
              From live project programme controls to retrospective high-stakes dispute testimony, we protect your contractual and commercial position.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Column 1: Accordion Format (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  number: '01',
                  icon: Clock,
                  title: 'Forensic Delay Analysis & EOT Claims',
                  subtitle: 'SCL Protocol 2nd Edition & AACE 29R-03',
                  description:
                    'Comprehensive retrospective and contemporaneous delay investigations. We determine the true cause of critical path delay, evaluate concurrency, and draft robust Extension of Time submissions.',
                  bullets: [
                    'Time Impact Analysis (TIA) & Fragnet injection',
                    'Windows / Time Slice analysis of monthly updates',
                    'Collapsed As-Built & Impacted As-Planned',
                    'Critical Path Method (CPM) driving logic validation'
                  ],
                  highlight: 'Substantiates defensible EOT claims and protects against severe liquidated delay damages.'
                },
                {
                  number: '02',
                  icon: Layers,
                  title: 'Schedule Health Audits & DCMA 14-Point',
                  subtitle: 'Baseline Rigor & Logic Integrity',
                  description:
                    'Deep-dive audit of contractor and employer baseline programmes. We identify artificial constraints, negative lags, dangling activities, and excessive float masking delay vulnerabilities.',
                  bullets: [
                    'DCMA 14-point schedule health metric scoring',
                    'Identification of missing logic & open-ended tasks',
                    'Hard constraint & relationship type audit',
                    'Resource loading & realistic production rate tests'
                  ],
                  highlight: 'Eliminates hidden schedule vulnerabilities before baseline approval, creating an unassailable baseline.'
                },
                {
                  number: '03',
                  icon: TrendingUp,
                  title: 'Time Impact Analysis (TIA) Management',
                  subtitle: 'Contemporaneous Compensation Modeling',
                  description:
                    'Real-time modeling of change orders, variation instructions, and employer delays directly into live accepted programmes to substantiate EOT before completion milestones expire.',
                  bullets: [
                    'Prospective modeling of early warning events',
                    'Sub-network fragnet preparation and logic tie-in',
                    'NEC4 Clause 62 / FIDIC Clause 8.4 compliance',
                    'Contemporaneous delay notice synchronization'
                  ],
                  highlight: 'Real-time prospective delay capture securing time extensions while site works are still active.'
                },
                {
                  number: '04',
                  icon: Activity,
                  title: 'Disruption & Productivity Loss Calculations',
                  subtitle: 'Measured Mile & EVM Inefficiency',
                  description:
                    'Quantifying loss of productivity, trade stacking, acceleration costs, and out-of-sequence working caused by continuous design changes and employer disruptions.',
                  bullets: [
                    'Measured Mile analysis (industry gold standard)',
                    'Earned Value Management (EVM) schedule variance',
                    'Trade crowding & overtime fatigue calculation',
                    'Loss & expense / extended preliminaries quantum'
                  ],
                  highlight: 'Recovers financial losses from trade stacking and out-of-sequence work even without critical path delay.'
                },
                {
                  number: '05',
                  icon: Calendar,
                  title: 'Live Programme Management & Controls',
                  subtitle: 'Primavera P6 & Powerproject Services',
                  description:
                    'Outsourced master scheduling and project controls for developers, main contractors, and project managers requiring pristine programme oversight.',
                  bullets: [
                    'Creation of compliant Baseline Revision 0',
                    'Weekly/monthly progress tracking & variance logs',
                    'Critical path float dissipation tracking',
                    'Executive dashboard reporting & milestone forecasting'
                  ],
                  highlight: 'Flawless project oversight and early delay detection through certified scheduling engineers.'
                },
                {
                  number: '06',
                  icon: Gavel,
                  title: 'Expert Witness & Dispute Testimony',
                  subtitle: 'Adjudication, Arbitration & High Court',
                  description:
                    'Independent delay expert reports and technical scheduling testimony for construction adjudications, arbitrations, and high-court litigation across Southern Africa.',
                  bullets: [
                    'Independent Expert Witness delay reports',
                    'Adjudication & arbitration hearing defense',
                    'Clear graphical visual aids for legal counsel',
                    'SCL Protocol compliance certification'
                  ],
                  highlight: 'Tribunal-tested expert reports that turn complex Gantt chart disputes into compelling legal proof.'
                }
              ].map((service, idx) => {
                const IconComp = service.icon;
                const isOpen = openServiceIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-slate-900 border-red-500/80 shadow-lg shadow-red-950/30'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                              : 'bg-slate-800 text-red-400 border border-slate-700/60'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-black text-slate-400">
                              CAPABILITY {service.number}
                            </span>
                            <span className="text-[10px] font-semibold text-red-400 hidden sm:inline truncate max-w-[240px]">
                              • {service.subtitle}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-extrabold transition-colors truncate ${
                              isOpen ? 'text-red-400' : 'text-white'
                            }`}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-red-950 text-red-400 rotate-180'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-slate-800/80 space-y-4">
                            <p className="text-xs font-bold text-red-400 sm:hidden">
                              {service.subtitle}
                            </p>

                            <p className="text-xs text-slate-300 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Bullet Deliverables */}
                            <div className="bg-slate-950/70 rounded-lg p-3.5 border border-slate-800/80">
                              <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">
                                Key Methodological Deliverables:
                              </div>
                              <ul className="space-y-1.5">
                                {service.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Strategic Highlight */}
                            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-red-400 font-bold shrink-0">💡 Strategic Impact:</span>
                              <span>{service.highlight}</span>
                            </div>

                            {/* Action Button */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="truncate max-w-[240px]">SCL Protocol 2nd Ed. Compliant</span>
                              </span>
                              <button
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                              >
                                <span>Inquire on Capability {service.number}</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Sticky Image Showcase (5 Cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <img
                  src={specialistDelayImg}
                  alt="Specialist Delay and Programme Analysis Forensic Engineering"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Fast Feature Highlight Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-400 flex items-center justify-center font-black text-sm font-mono">
                    TIA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Need an Emergency Programme Audit?</div>
                    <div className="text-[11px] text-slate-400">Schedule files reviewed under non-disclosure agreement</div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <span>Engage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCL PROTOCOL METHODOLOGY MATRIX TABLE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-red-600" />
              <span>Methodology Selection Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              SCL DELAY ANALYSIS PROTOCOL COMPARISON MATRIX
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Choosing the correct delay analysis method depends on the status of the project, availability of records, and contract requirements.
            </p>
          </div>

          <div className="overflow-x-auto bg-white border border-slate-200 rounded-xl shadow-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-white">
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">Methodology</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">Timing &amp; Perspective</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">Critical Path Analysis</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">Record Requirements</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">SCL 2nd Ed. Preference</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-300">Adjudication Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    <div className="flex items-center gap-1.5 text-red-600 font-bold">
                      <Clock className="w-4 h-4" />
                      <span>Time Impact Analysis (TIA)</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">Contemporaneous Fragnet Modeling</div>
                  </td>
                  <td className="p-4">Prospective or Contemporaneous (During project execution)</td>
                  <td className="p-4 text-emerald-700 font-semibold">Dynamic CPM on live accepted baseline</td>
                  <td className="p-4">High: Regular schedule updates &amp; fragnet logic links</td>
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
                      Highest for Live Claims
                    </span>
                  </td>
                  <td className="p-4 text-emerald-700 font-bold">Extremely High (Gold Standard)</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    <div className="flex items-center gap-1.5 text-amber-700 font-bold">
                      <Layers className="w-4 h-4" />
                      <span>Time Slice / Windows Analysis</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">Periodic Schedule Snapshots</div>
                  </td>
                  <td className="p-4">Retrospective (Post-completion or periodic review)</td>
                  <td className="p-4 text-emerald-700 font-semibold">Evaluates actual critical path shift per window</td>
                  <td className="p-4">High: Contemporaneous monthly schedule updates</td>
                  <td className="p-4">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
                      Highest for Retrospective
                    </span>
                  </td>
                  <td className="p-4 text-emerald-700 font-bold">Extremely High</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    <div className="flex items-center gap-1.5 text-blue-700 font-bold">
                      <GitCommit className="w-4 h-4" />
                      <span>Collapsed As-Built ("But-For")</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">Subtractive Delay Extraction</div>
                  </td>
                  <td className="p-4">Retrospective (Post-completion)</td>
                  <td className="p-4 text-amber-700 font-semibold">Subtractive calculation on as-built logic</td>
                  <td className="p-4">Very High: Full as-built dates &amp; logic dependencies</td>
                  <td className="p-4">
                    <span className="bg-blue-50 text-blue-700 border border-blue-300 px-2 py-0.5 rounded text-[10px] font-bold">
                      Second Choice Retrospective
                    </span>
                  </td>
                  <td className="p-4 text-blue-700 font-bold">High in Arbitration</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold">
                      <FileSpreadsheet className="w-4 h-4 text-slate-600" />
                      <span>As-Planned vs. As-Built</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">Direct Comparison</div>
                  </td>
                  <td className="p-4">Retrospective</td>
                  <td className="p-4 text-slate-600">Static or subjective longest path</td>
                  <td className="p-4">Moderate: Baseline and as-built start/finish dates</td>
                  <td className="p-4">
                    <span className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[10px]">
                      Low (Simple projects only)
                    </span>
                  </td>
                  <td className="p-4 text-amber-700 font-semibold">Moderate (Easily challenged)</td>
                </tr>

                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    <div className="flex items-center gap-1.5 text-rose-700 font-bold">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Impacted As-Planned</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-normal">Theoretical Baseline Injection</div>
                  </td>
                  <td className="p-4">Theoretical Prospective</td>
                  <td className="p-4 text-rose-700">Theoretical (Ignores actual progress)</td>
                  <td className="p-4">Low: Baseline only</td>
                  <td className="p-4">
                    <span className="bg-rose-50 text-rose-700 border border-rose-300 px-2 py-0.5 rounded text-[10px] font-bold">
                      Not Recommended by SCL
                    </span>
                  </td>
                  <td className="p-4 text-rose-700 font-bold">Low (Frequently rejected)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Delay Forensics FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know about delay methodologies, SCL standards, and dispute representation.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the Society of Construction Law (SCL) Delay and Disruption Protocol?',
                a: 'The SCL Protocol (2nd Edition) is the globally recognized gold standard for determining delay and disruption in construction projects. It provides authoritative guidance on selecting delay analysis methodologies, managing concurrent delays, handling total float ownership, and applying contemporaneous schedule records.'
              },
              {
                q: 'How does Concurrent Delay affect an Extension of Time (EOT) claim in South Africa?',
                a: 'Under the SCL Protocol and common South African law (JBCC, FIDIC, GCC), where employer delay and contractor delay occur concurrently and both independently cause delay to the completion date, the contractor is generally entitled to an extension of time (relief from delay damages) but may not be entitled to recover time-related preliminary costs (loss and expense) for the concurrent duration.'
              },
              {
                q: 'Why are static Excel bar charts rejected in Adjudication and Arbitration?',
                a: 'Static bar charts do not contain mathematical Critical Path Method (CPM) logic networks (predecessor/successor links, lag types, calendar constraints). Without dynamic logic, it is impossible to objectively prove whether a delay event actually delayed the critical path to completion or merely consumed available float on non-critical activities.'
              },
              {
                q: 'What is the difference between Time Impact Analysis (TIA) and Windows Analysis?',
                a: 'Time Impact Analysis (TIA) is primarily a contemporaneous or prospective technique that injects sub-network fragnets of the delay event into the most recent accepted schedule update before the event occurred. Windows Analysis (Time Slice) is a retrospective method that breaks the project timeline into discrete intervals (e.g. monthly updates) to measure actual progress and critical path shifts after the fact.'
              },
              {
                q: 'Who owns the project float in standard construction contracts?',
                a: 'Unless explicitly stated otherwise in the contract particulars, the SCL Protocol establishes that project float belongs to the project on a "first-come, first-served" basis. If an employer delay occurs first and uses available float without extending the completion date, no EOT is granted until all float on that path is exhausted.'
              },
              {
                q: 'Can you assist if our baseline schedule was never officially accepted by the Principal Agent or Engineer?',
                a: 'Yes. In cases where no accepted baseline exists, our forensic experts can perform a retrospective Baseline Reconstruction and Logic Validation to create an equitable, fact-based schedule model that satisfies Adjudicator and Court evidentiary standards.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850"
                >
                  <span className="font-bold text-sm text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-red-400 shrink-0 transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <EurekaFooter
        currentPage="delay-analysis"
        onNavigate={onNavigate}
        
      />
    </div>
  );
};
