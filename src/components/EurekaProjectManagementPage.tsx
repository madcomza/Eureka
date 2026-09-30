import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import projectManagementImg from '../assets/images/Project Management.jpeg';
import {
  FileCheck2,
  Building2,
  Briefcase,
  ShieldCheck,
  Clock,
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
  Scale,
  Compass,
  Check,
  Workflow,
  Sparkles,
  Search,
  Flag,
  Percent,
  FolderGit2
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaProjectManagementPageProps {
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
      | 'pricing'
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaProjectManagementPage: React.FC<EurekaProjectManagementPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // UI state
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [openDisciplineIndex, setOpenDisciplineIndex] = useState<number | null>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const toggleDiscipline = (idx: number) => {
    setOpenDisciplineIndex(prev => prev === idx ? null : idx);
  };

  // PROCSA / SACPCMP 6 Project Lifecycle Stages
  const procsaStages = [
    {
      stage: 'STAGE 01',
      title: 'Inception & Project Charter',
      tagline: 'Strategic Feasibility & Business Case Formulation',
      color: 'from-blue-600 to-indigo-600',
      description: 'Formalizing project intent, defining developer objectives, establishing statutory constraints, and forming the initial governance charter.',
      deliverables: [
        'Client brief & user requirements specification (URS)',
        'Project execution charter & scope boundaries',
        'Preliminary statutory & regulatory review (SANS 10400, zoning)',
        'Multi-disciplinary consultant appointment recommendations'
      ],
      milestone: 'Board Project Charter Approval'
    },
    {
      stage: 'STAGE 02',
      title: 'Concept & Viability',
      tagline: 'Budget Setting & Engineering Feasibility',
      color: 'from-cyan-600 to-blue-700',
      description: 'Translating strategic objectives into viable engineering and architectural concepts with high-fidelity financial baseline modeling.',
      deliverables: [
        'Order of magnitude Capex budget & cost benchmarking',
        'Master project milestone schedule (Level 1 CPM)',
        'Risk identification register & initial mitigation strategy',
        'Preliminary procurement strategy & contract form selection'
      ],
      milestone: 'Approved Concept & Financial Viability Sign-Off'
    },
    {
      stage: 'STAGE 03',
      title: 'Design Development',
      tagline: 'Technical Coordination & Scope Freeze',
      color: 'from-emerald-600 to-teal-700',
      description: 'Coordinating architectural, structural, civil, and MEP engineers to complete detailed design without spatial clashes or scope creep.',
      deliverables: [
        'Multi-disciplinary design integration & spatial clash audits',
        'Detailed Elemental Cost Plan alignment with Quantity Surveyors',
        'Statutory submission tracking (Municipal approval submissions)',
        'Formal Design Freeze & baseline change control framework'
      ],
      milestone: 'Final Design Approval & Capex Baseline Lock'
    },
    {
      stage: 'STAGE 04',
      title: 'Documentation & Procurement',
      tagline: 'Tender Packaging, Vetting & Contractor Award',
      color: 'from-amber-600 to-orange-700',
      description: 'Structuring rigorous tender packages, running competitive vetting under CIDB and JBCC/FIDIC standards, and finalizing contract awards.',
      deliverables: [
        'Comprehensive tender documentation & employer requirements',
        'Technical & commercial contractor bid adjudication matrix',
        'Contract negotiations & risk allocation profiling',
        'Formal contract compilation (JBCC 2018 / FIDIC 2017 / NEC4)'
      ],
      milestone: 'Executed Main Contract & Site Handover Notice'
    },
    {
      stage: 'STAGE 05',
      title: 'Construction & EVM Control',
      tagline: 'Site Governance, Cost Audits & Milestone Execution',
      color: 'from-red-600 to-rose-700',
      description: 'Rigorous resident project management, daily site administration, variation order containment, and Earned Value schedule tracking.',
      deliverables: [
        'Primavera P6 baseline schedule monitoring & critical path tracking',
        'Variation Order (VO) substantiation & financial containment',
        'Interim Payment Certificate (IPC) validation with QS team',
        'Weekly client dashboard & Earned Value Management (EVM) reports'
      ],
      milestone: 'Practical Completion Certificate & Sectional Handover'
    },
    {
      stage: 'STAGE 06',
      title: 'Close-Out & Asset Handover',
      tagline: 'Defects Rectification, O&M Handover & Final Account',
      color: 'from-slate-700 to-slate-900',
      description: 'Flawless operational transition with digital snag clearing, statutory compliance sign-offs, and final account resolution.',
      deliverables: [
        'Digital snag clearing & progressive de-snagging sign-offs',
        'Consolidated Operations & Maintenance (O&M) manuals dossier',
        'Statutory Occupational Certificates (OC) & municipal clearances',
        'Final Account reconciliation & retentions release roadmap'
      ],
      milestone: 'Final Completion Certificate & Operational Handover'
    }
  ];

  // 12 Core Project Management Disciplines
  const pmDisciplines = [
    {
      id: 'cpm',
      title: '1. Capital Project Delivery',
      icon: <Building2 className="w-5 h-5 text-red-600" />,
      desc: 'Turnkey leadership for new build developments, industrial parks, and high-value corporate headquarters from inception to operational handover.',
      points: [
        'Unified accountability across all engineering disciplines',
        'Single-point-of-contact for institutional clients and developers',
        'Statutory client representative administration'
      ]
    },
    {
      id: 'programme',
      title: '2. Programme & Portfolio Management',
      icon: <FolderGit2 className="w-5 h-5 text-red-600" />,
      desc: 'Centralized oversight of multi-facility rollouts, national retail upgrades, and distributed asset CAPEX programmes.',
      points: [
        'Standardized procurement frameworks across multiple locations',
        'Portfolio-level resource balancing & cashflow curve forecasting',
        'Executive board dashboards & milestone variance tracking'
      ]
    },
    {
      id: 'refurb',
      title: '3. Live-Environment Refurbishments',
      icon: <Workflow className="w-5 h-5 text-red-600" />,
      desc: 'Executing complex building modernization and mechanical upgrades inside fully occupied commercial and medical facilities.',
      points: [
        'Zero-interruption phasing & out-of-hours acoustic management',
        'Temporary services bypass & dust containment protocols',
        'Tenant liaison & daily business continuity alignment'
      ]
    },
    {
      id: 'cost',
      title: '4. Budget & Financial Cost Control',
      icon: <DollarSign className="w-5 h-5 text-red-600" />,
      desc: 'Proactive cost engineering that protects investor capital, controls contingency spend, and blocks unjustified contractor claims.',
      points: [
        'Comprehensive Variation Order (VO) technical substantiation',
        'Interim Payment Certificate (IPC) quantity audit validation',
        'Cash flow S-curve projection & contingency burn-down models'
      ]
    },
    {
      id: 'procure',
      title: '5. Strategic Procurement & Tender Vetting',
      icon: <FileSpreadsheet className="w-5 h-5 text-red-600" />,
      desc: 'Structuring transparent, competitive tender packages with thorough CIDB, financial, and technical contractor capability vetting.',
      points: [
        'Detailed Employer Requirements & Bill of Quantities trade alignment',
        'Objective multi-factor tender adjudication scorecards',
        'Long-lead procurement expediting & factory fabrication inspections'
      ]
    },
    {
      id: 'schedule',
      title: '6. Primavera P6 CPM Scheduling',
      icon: <Clock className="w-5 h-5 text-red-600" />,
      desc: 'Rigorous Critical Path Method (CPM) baseline scheduling, look-ahead logic linking, and early warning delay recovery planning.',
      points: [
        'Primavera P6 & MS Project baseline logic verification',
        '2-week & 4-week lookahead production scheduling',
        'Weather & delay claim validation under standard contract clauses'
      ]
    },
    {
      id: 'contracts',
      title: '7. Contract Administration (JBCC / FIDIC / NEC)',
      icon: <Scale className="w-5 h-5 text-red-600" />,
      desc: 'Certified Principal Agent and Engineer representation administering contracts with legal precision and strict clause compliance.',
      points: [
        'JBCC Principal Building Agreement (Edition 6.2 & 5.0)',
        'FIDIC Red, Yellow & Silver Books (1999 & 2017 Editions)',
        'NEC3/4 Engineering and Construction Contract (ECC)'
      ]
    },
    {
      id: 'risk',
      title: '8. Risk Management & Early Warning',
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      desc: 'Systematic hazard identification, risk register maintenance, and quantitative risk mitigation before cost or delay impact occurs.',
      points: [
        'Dynamic project risk registers with assigned mitigation owners',
        'Early Warning Notices (EWN) & formal risk reduction meetings',
        'Geotechnical, structural & supply chain contingency planning'
      ]
    },
    {
      id: 'qa_qc',
      title: '9. Quality Management & ITP Auditing',
      icon: <CheckCircle2 className="w-5 h-5 text-red-600" />,
      desc: 'Zero-defect quality governance through comprehensive Inspection Test Plans (ITP), concrete cube testing, and architectural audits.',
      points: [
        'Mandatory hold-point sign-offs prior to subsequent trade execution',
        'Independent laboratory materials test verification',
        'Progressive ground-up quality tracking eliminating end-stage snags'
      ]
    },
    {
      id: 'stakeholder',
      title: '10. Stakeholder & Tenant Coordination',
      icon: <Users className="w-5 h-5 text-red-600" />,
      desc: 'Bridging developer leadership, municipal authorities, anchor tenants, and utility providers to ensure frictionless execution.',
      points: [
        'Municipal plan approval & wayleave expediting',
        'Eskom & City Power power grid connection synchronization',
        'Tenant fit-out criteria packs & landlord white-box handovers'
      ]
    },
    {
      id: 'evm',
      title: '11. Earned Value Management & Reporting',
      icon: <BarChart3 className="w-5 h-5 text-red-600" />,
      desc: 'Executive-level performance analytics combining Planned Value (PV), Earned Value (EV), and Actual Cost (AC) for true project health.',
      points: [
        'Schedule Performance Index (SPI) & Cost Performance Index (CPI)',
        'Estimate at Completion (EAC) predictive financial forecasts',
        'Transparent monthly client board dashboards & photographic logs'
      ]
    },
    {
      id: 'closeout',
      title: '12. Project Close-Out & Asset Handover',
      icon: <Award className="w-5 h-5 text-red-600" />,
      desc: 'Structured transition into operational facility management with complete digital records, training, and final financial closure.',
      points: [
        'Cloud-based digital de-snagging workflows with SLA timelines',
        'Consolidated BIM as-builts, line diagrams & O&M data dossiers',
        'Defects Liability Period (DLP) monitoring & final account sign-off'
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="project-management" onNavigate={onNavigate}  />

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
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
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5 text-red-500" />
                <span>SOLUTIONS • 2. CONSTRUCTION DELIVERY • 2.2 PROJECT MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl">
                PROJECT MANAGEMENT <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                  SERVICES &amp; CAPEX GOVERNANCE
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-medium leading-relaxed">
                Better Planning. Stronger Control. Successful Delivery. Professional Principal Project Management for infrastructure upgrades, capital developments, major refurbishments, and multi-asset programmes across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Initiate Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('pm-lifecycle');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider rounded-lg border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>PROCSA Stages 1–6</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* KPI Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 max-w-3xl">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-white">R1.2B+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Delivered Capex</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-red-400">99.2%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Budget Precision</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Contract Defense</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">&lt; 1.5%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Schedule Variance</div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-slate-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-slate-300 max-w-3xl">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>SACPCMP Pr.CPM</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>JBCC • FIDIC • NEC4</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  <span>Earned Value (EVM)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>CIDB &amp; SANS 10400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition Bar */}
      <section className="bg-white border-b border-slate-200 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Flag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">Single Point of Accountability</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidated oversight managing architects, structural/MEP engineers, quantity surveyors, and main contractors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">Strict Variation Order Control</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every scope deviation is verified against contract clauses and baseline BoQ before approval, preserving contingency funds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">Critical Path Milestone Locking</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primavera P6 schedule forecasting with early warning triggers to counter long-lead delays and weather downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCSA Stages 1-6 Delivery Lifecycle Section */}
      <section id="pm-lifecycle" className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              STANDARDIZED GOVERNANCE LIFECYCLE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 tracking-tight">
              PROCSA &amp; SACPCMP 6-STAGE PROJECT FRAMEWORK
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From initial business case feasibility to statutory occupational certificate clearance and final account settlement.
            </p>
          </div>

          {/* Stage Tab Selectors */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {procsaStages.map((stg, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStageTab(idx)}
                className={`px-4 py-2.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                  activeStageTab === idx
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <span className="text-[10px] opacity-80">{stg.stage}</span>
                <span className="hidden sm:inline">{stg.title.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Stage Display Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-1 rounded">
                    {procsaStages[activeStageTab].stage}
                  </span>
                  <span className="text-xs font-bold text-slate-400">SACPCMP Aligned Stage</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {procsaStages[activeStageTab].title}
                </h3>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {procsaStages[activeStageTab].tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {procsaStages[activeStageTab].description}
                </p>

                <div className="p-3.5 bg-slate-900/90 border border-slate-800 rounded-xl">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Key Stage Milestone</span>
                  <span className="text-xs font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{procsaStages[activeStageTab].milestone}</span>
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h4 className="text-xs font-black text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-red-500" />
                  <span>Mandatory Stage Deliverables &amp; Control Gates</span>
                </h4>
                <div className="space-y-3">
                  {procsaStages[activeStageTab].deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-slate-950/70 border border-slate-800/80 rounded-lg">
                      <span className="w-5 h-5 rounded-full bg-red-600/20 text-red-400 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-xs text-slate-200 font-medium leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Core Project Management Disciplines - 2 Column Split (Accordion + Image) */}
      <section className="py-16 md:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              COMPREHENSIVE PM CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              12 PILLARS OF EUREKA PROJECT GOVERNANCE
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              End-to-end technical oversight, financial governance, contract administration, and statutory compliance across commercial and infrastructure sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion List (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {pmDisciplines.map((disc, idx) => {
                const isOpen = openDisciplineIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-red-500 shadow-md ring-1 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDiscipline(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white'
                              : 'bg-red-50 text-red-600 border border-red-100'
                          }`}
                        >
                          {disc.icon}
                        </div>
                        <div className="min-w-0">
                          <h3
                            className={`text-sm sm:text-base font-bold transition-colors truncate ${
                              isOpen ? 'text-red-600' : 'text-slate-900'
                            }`}
                          >
                            {disc.title}
                          </h3>
                          <p className="text-[11px] text-slate-500 truncate hidden sm:block">
                            {disc.desc}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-red-50 text-red-600 rotate-180'
                            : 'bg-slate-100 text-slate-500'
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
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {disc.desc}
                            </p>
                            <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/70">
                              <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-2">
                                Key Deliverables &amp; Controls:
                              </h4>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {disc.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Sticky Project Management Image Showcase (5 Cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <img
                  src={projectManagementImg}
                  alt="Eureka Project Management on-site governance, structural oversight, and engineering leadership"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Quick Spec Badge Bar */}
              <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm grid grid-cols-3 gap-2 text-center">
                <div className="border-r border-slate-100 pr-2">
                  <div className="text-base font-black text-slate-900">12</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">Disciplines</div>
                </div>
                <div className="border-r border-slate-100 pr-2">
                  <div className="text-base font-black text-red-600">PROCSA</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">Stage 1–6</div>
                </div>
                <div>
                  <div className="text-base font-black text-slate-900">100%</div>
                  <div className="text-[10px] font-bold uppercase text-slate-500">Governance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Comparison: In-House vs EFMS Project Management */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-widest bg-red-100 px-3 py-1 rounded-full">
              RISK &amp; GOVERNANCE COMPARISON
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              TRADITIONAL IN-HOUSE VS. EUREKA PROJECT MANAGEMENT
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How independent SACPCMP professional project management shields developers from commercial exposure and contractor overruns.
            </p>
          </div>

          <div className="overflow-x-auto shadow-md rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-extrabold w-1/3">Project Governance Dimension</th>
                  <th className="py-4 px-6 font-extrabold w-1/3 bg-slate-800 text-slate-400">Internal Developer Staffing</th>
                  <th className="py-4 px-6 font-extrabold w-1/3 bg-red-600 text-white">Eureka Professional PM Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Contract Administration (JBCC / FIDIC / NEC)
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Often informal; vulnerable to contractor claims and late notifications.
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-red-50/50">
                    Strict contractual clause enforcement, early warning notices, and zero claim exposure.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Variation Order (VO) Substantiation
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    High contingency burn-rate (typically 12–20% cost creep).
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-red-50/50">
                    Rigorous technical &amp; rate auditing; contingency spend capped under 3.5%.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Critical Path Scheduling &amp; EVM
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Static spreadsheets; delays only identified after critical milestones fail.
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-red-50/50">
                    Primavera P6 dynamic logic linking with weekly Earned Value (SPI/CPI) tracking.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Multi-Disciplinary Design Integration
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Consultant silos leading to spatial clashes during physical site installation.
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-red-50/50">
                    Mandatory 3D coordination workshops and formal design freeze control gates.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Snagging &amp; Operational Handover
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    Lingering defect lists dragging out final account settlement for months.
                  </td>
                  <td className="py-4 px-6 font-semibold text-slate-900 bg-red-50/50">
                    Progressive cloud de-snagging, consolidated O&amp;M dossiers, and rapid close-out.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 tracking-tight">
              PROJECT MANAGEMENT &amp; GOVERNANCE FAQS
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What professional registrations do Eureka Project Managers hold?',
                a: 'All Eureka Project Directors and Managers are registered with the South African Council for the Project and Construction Management Professions (SACPCMP) as Professional Construction Project Managers (Pr.CPM) and adhere to PROCSA standards and PMI PMP / PRINCE2 global best practices.'
              },
              {
                q: 'How does EFMS control Variation Orders (VOs) and prevent budget creep?',
                a: 'We implement a strict baseline change control protocol. No contractor instruction is issued without formal technical substantiation, rate validation against original BoQ items, and employer authorization. We audit interim claims physically on-site before payment recommendation.'
              },
              {
                q: 'Which standard building contracts do you administer?',
                a: 'We act as certified Principal Agent or Engineer across JBCC (Principal Building Agreement 6.2/5.0), FIDIC (Red, Yellow, Silver books), NEC3/4 (ECC options A through F), and bespoke institutional development agreements.'
              },
              {
                q: 'Can Eureka step in to rescue a distressed or delayed construction project?',
                a: 'Yes. Our Project Audit & Recovery service performs a rapid forensic review of the project schedule, contractor performance, cost commitments, and physical defect status. We formulate an aggressive recovery schedule and realign contractor deliverables to reach practical completion.'
              },
              {
                q: 'What is the difference between Project Management and Construction Management?',
                a: 'Project Management (Pr.CPM) governs the complete lifecycle (feasibility, multi-disciplinary design coordination, procurement, budget, contracts, and handover). Construction Management focuses primarily on boots-on-the-ground site supervision, trade sequencing, and day-to-day QA/QC on the active construction site.'
              }
            ].map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === fIdx ? null : fIdx)}
                  className="w-full text-left p-5 flex justify-between items-center text-sm font-extrabold text-slate-900 hover:text-red-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transform transition-transform ${
                      faqOpenIndex === fIdx ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === fIdx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
