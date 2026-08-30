import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  HardHat,
  Building2,
  FileCheck2,
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
  Sliders,
  DollarSign,
  Layers,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronRight,
  Hammer,
  RotateCcw,
  Compass,
  Check,
  TrendingUp,
  Activity,
  Wrench,
  BarChart3,
  ClipboardList,
  Target,
  FileSpreadsheet,
  Cpu,
  BadgeCheck,
  Scale
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaConstructionManagementPageProps {
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
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaConstructionManagementPage: React.FC<EurekaConstructionManagementPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Interactive Construction Management Fee & Scope Estimator State
  const [projectType, setProjectType] = useState<'commercial' | 'industrial' | 'retail' | 'fitout' | 'residential' | 'infrastructure'>('commercial');
  const [projectBudgetMillion, setProjectBudgetMillion] = useState<number>(25); // In Millions ZAR (R25M)
  const [projectDurationMonths, setProjectDurationMonths] = useState<number>(12); // Duration in months
  const [serviceModel, setServiceModel] = useState<'turnkey_cm' | 'qa_qc_supervision' | 'freelance_pm' | 'clerk_of_works'>('turnkey_cm');
  const [includeFullTimeResidentEngineer, setIncludeFullTimeResidentEngineer] = useState<boolean>(true);
  const [includePrimaveraP6Controls, setIncludePrimaveraP6Controls] = useState<boolean>(true);
  const [includeHseSafetyOfficer, setIncludeHseSafetyOfficer] = useState<boolean>(true);
  const [includeTenantCoordination, setIncludeTenantCoordination] = useState<boolean>(false);

  // Form submission state
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [activeTabDiscipline, setActiveTabDiscipline] = useState<number>(0);

  // Calculate estimated monthly construction management fee & resource allocation
  const calculateEstimatedMetrics = () => {
    // Base percentage of construction value depending on scale and service model
    let baseRatePercentage = 3.8; // Default % of construction value
    if (serviceModel === 'turnkey_cm') baseRatePercentage = 4.2;
    if (serviceModel === 'qa_qc_supervision') baseRatePercentage = 2.4;
    if (serviceModel === 'freelance_pm') baseRatePercentage = 2.8;
    if (serviceModel === 'clerk_of_works') baseRatePercentage = 1.6;

    // Sliding scale discounts for very large budgets (above R50M)
    if (projectBudgetMillion > 50) {
      baseRatePercentage *= 0.85;
    } else if (projectBudgetMillion > 20) {
      baseRatePercentage *= 0.92;
    }

    // Complexity multiplier by project type
    const complexityMultipliers: Record<string, number> = {
      commercial: 1.0,
      industrial: 0.9,
      retail: 1.1,
      fitout: 1.15,
      residential: 0.95,
      infrastructure: 1.05
    };
    baseRatePercentage *= complexityMultipliers[projectType] || 1.0;

    const totalProjectValueZar = projectBudgetMillion * 1000000;
    let totalFee = totalProjectValueZar * (baseRatePercentage / 100);

    // Monthly base
    let monthlyFee = totalFee / Math.max(1, projectDurationMonths);

    // Addons
    if (includeFullTimeResidentEngineer) {
      monthlyFee += 65000; // Senior Resident Engineer
    }
    if (includePrimaveraP6Controls) {
      monthlyFee += 32000; // Dedicated CPM Planner / EVM Specialist
    }
    if (includeHseSafetyOfficer) {
      monthlyFee += 42000; // SACPCMP Registered CHSO (Construction Health & Safety Officer)
    }
    if (includeTenantCoordination) {
      monthlyFee += 28000; // Tenant Liaison Officer
    }

    const calculatedTotalFee = monthlyFee * projectDurationMonths;

    return {
      monthlyFee: Math.round(monthlyFee),
      totalFee: Math.round(calculatedTotalFee),
      effectivePercentage: ((calculatedTotalFee / totalProjectValueZar) * 100).toFixed(2),
      recommendedHeadcount: Math.min(8, Math.max(2, Math.round(projectBudgetMillion / 12) + (includeFullTimeResidentEngineer ? 1 : 0) + (includeHseSafetyOfficer ? 1 : 0)))
    };
  };

  const metrics = calculateEstimatedMetrics();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const disciplines = [
    {
      title: 'Construction Project Management (CPM)',
      icon: HardHat,
      badge: 'END-TO-END',
      desc: 'Holistic leadership coordinating architects, consulting engineers, quantity surveyors, principal contractors, and client stakeholders under formal contract governance (JBCC, FIDIC, NEC).',
      points: [
        'Contract administration & statutory client representation',
        'Project execution plan (PEP) & governance charter establishment',
        'Integrated design & build milestone tracking',
        'Multi-disciplinary consultant & trade integration'
      ]
    },
    {
      title: 'On-Site Management & Resident Engineering',
      icon: Building2,
      badge: 'DAILY OVERSIGHT',
      desc: 'Full-time, boots-on-the-ground site supervision ensuring precision workmanship, trade sequencing, and adherence to engineering specifications and SANS 10400 codes.',
      points: [
        'Daily site diaries, weather logs & resource tracking',
        'Site access, logistics, staging & material laydown control',
        'Early-stage snag prevention & technical RFI resolution',
        'Subcontractor daily coordination & progress reviews'
      ]
    },
    {
      title: 'Quality Assurance & Quality Control (QA/QC)',
      icon: ShieldCheck,
      badge: 'ZERO-DEFECT',
      desc: 'Systematic inspection test plans (ITPs), material batch verification, structural testing protocols, and progressive snag management from foundation pour to handover.',
      points: [
        'Inspection Test Plans (ITP) sign-off for all work packages',
        'Concrete cube crushing, compaction & weld testing oversight',
        'Architectural finish tolerance audits (flooring, drywall, MEP)',
        'Defect liability period management & progressive snag clearing'
      ]
    },
    {
      title: 'Construction Planning & CPM Scheduling',
      icon: Clock,
      badge: 'CRITICAL PATH',
      desc: 'Advanced Critical Path Method (CPM) baseline scheduling using Primavera P6 and MS Project to prevent delays, forecast trade bottlenecks, and accelerate delivery.',
      points: [
        'Primavera P6 / MS Project baseline creation & logic linking',
        'Earned Value Management (EVM) & SPI/CPI variance tracking',
        'Weather & unforeseen delay claim validation / mitigation',
        'Look-ahead schedules (2-week & 4-week granular forecasts)'
      ]
    },
    {
      title: 'Contractor & Multi-Trade Coordination',
      icon: Users,
      badge: 'INTERFACE MGMT',
      desc: 'Synchronizing civil, structural, wet trades, HVAC, electrical, plumbing, fire protection, and facade specialists to eliminate spatial clashes and schedule overlap.',
      points: [
        'Weekly subcontractor production & progress meetings',
        'BIM & MEP spatial clash management on site',
        'Permit-to-work issuance & high-risk trade sequencing',
        'Clear demarcation of contractual trade interfaces'
      ]
    },
    {
      title: 'Commercial Construction & Fit-Out Management',
      icon: Layers,
      badge: 'FIT-OUT EXPERTS',
      desc: 'Specialized management for corporate offices, retail spaces, healthcare suites, and industrial refurbishments with demanding handover deadlines.',
      points: [
        'Landlord base-build interface & white-boxing compliance',
        'Fast-track drylining, acoustic ceiling & glazing delivery',
        'Data center, UPS & critical MEP infrastructure supervision',
        'Occupational certificate (OC) & fire clearance expediting'
      ]
    },
    {
      title: 'Cost Monitoring & Payment Valuations',
      icon: DollarSign,
      badge: 'FINANCIAL CONTROL',
      desc: 'Rigorous financial governance working alongside quantity surveyors to assess physical progress against claims, manage variation orders, and prevent cost overruns.',
      points: [
        'Interim payment certificate (IPC) physical verification',
        'Variation Order (VO) validation & scope creep containment',
        'Cash flow forecasting & contingency drawdown audits',
        'Final account reconciliation & retention release governance'
      ]
    },
    {
      title: 'Procurement Support & Subcontractor Vetting',
      icon: FileSpreadsheet,
      badge: 'SUPPLY CHAIN',
      desc: 'Developing specialized tender packages, evaluating technical subcontractor bids, vetting CIDB gradings, and expediting long-lead material deliveries.',
      points: [
        'Subcontractor capability, solvency & safety vetting',
        'Bill of Quantities (BoQ) package breakdown & scope alignment',
        'Long-lead plant & equipment manufacturing expediting',
        'B-BBEE compliance & local community labor coordination'
      ]
    },
    {
      title: 'HSSE & Statutory Risk Governance',
      icon: AlertTriangle,
      badge: 'ZERO-HARM',
      desc: 'Enforcing the Occupational Health and Safety Act (OHSA) and Construction Regulations 2014 to safeguard lives, assets, and environmental compliance on site.',
      points: [
        'Site Safety Files, Fall Protection Plans & SWMS approval',
        'SACPCMP-registered Safety Officer deployment & audits',
        'Daily toolbox talks & hazard identification (HIRA)',
        'Environmental waste management & stormwater compliance'
      ]
    },
    {
      title: 'Project Close-Out, Snagging & Commissioning',
      icon: Award,
      badge: 'PRACTICAL COMPLETION',
      desc: 'Flawless transition from active construction to building operation with digital snagging lists, full O&M manuals, as-built drawings, and warranty handover.',
      points: [
        'Cloud-based digital snagging & verified close-out cycles',
        'MEP testing, balancing & integrated commissioning oversight',
        'Operation & Maintenance (O&M) manuals collation & handover',
        'Sectional & Final Completion Certificate management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="construction-management" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#060e22] via-[#091838] to-[#1a0808] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        {/* Background Overlay Geometric Accents */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline & Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              {/* Breadcrumb & Tag */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider bg-red-600/30 text-red-300 border border-red-500/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <HardHat className="w-3.5 h-3.5 text-red-400" />
                  SOLUTION 02 • CONSTRUCTION DELIVERY SOLUTIONS
                </span>
                <span className="text-[11px] font-bold text-amber-400 bg-amber-950/60 border border-amber-600/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  SACPCMP / FIDIC / JBCC Certified
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase">
                CONSTRUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500">MANAGEMENT</span> &amp; SITE SUPERVISION
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                Experienced on-site leadership, robust contractor coordination, precision QA/QC oversight, and rigorous cost governance. EFMS protects capital investments, eliminates delays, and guarantees compliant execution from ground-break to final handover.
              </p>

              {/* Core Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On-Site Supervision</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Daily resident engineering &amp; trade sequencing.</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Rigorous QA/QC</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Inspection test plans (ITP) &amp; structural audits.</p>
                </div>

                <div className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-3 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-sky-400 font-bold text-xs mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>CPM Scheduling</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Primavera P6 baseline control &amp; delay mitigation.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#construction-estimator"
                  className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <Sliders className="w-4 h-4" />
                  <span>Interactive Fee &amp; Scope Estimator</span>
                </a>

                <a
                  href="#rfq-form"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Project Proposal</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero KPIs & Governance Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-red-500/30 rounded-xl p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow">
                  TRUSTED ON-SITE LEADERSHIP
                </div>

                <h3 className="text-lg font-black text-white mb-2 flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-red-500" />
                  <span>Construction Governance Scorecard</span>
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Industry-leading project controls protecting owner interests and commercial contractors across Southern Africa.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-black text-red-400 mb-0.5">R850M+</div>
                    <div className="text-[11px] font-bold text-slate-300 uppercase">Supervised Value</div>
                    <div className="text-[10px] text-slate-500 mt-1">Commercial, industrial &amp; fit-outs</div>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-0.5">99.4%</div>
                    <div className="text-[11px] font-bold text-slate-300 uppercase">Milestone Precision</div>
                    <div className="text-[10px] text-slate-500 mt-1">On-time practical completions</div>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-0.5">ZERO</div>
                    <div className="text-[11px] font-bold text-slate-300 uppercase">Lost-Time Injuries</div>
                    <div className="text-[10px] text-slate-500 mt-1">Strict OHSA 2014 site compliance</div>
                  </div>

                  <div className="bg-slate-800/80 rounded-lg p-4 border border-slate-700/60">
                    <div className="text-2xl sm:text-3xl font-black text-sky-400 mb-0.5">100%</div>
                    <div className="text-[11px] font-bold text-slate-300 uppercase">Contract Rigour</div>
                    <div className="text-[10px] text-slate-500 mt-1">JBCC, FIDIC &amp; NEC administration</div>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    SACPCMP Registered Pr.CM
                  </span>
                  <span className="text-red-400 font-bold">Gauteng &amp; National</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE 10 CONSTRUCTION DISCIPLINES (INTERACTIVE TABS & GRID) */}
      <section id="disciplines" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider mb-3">
              <ClipboardList className="w-3.5 h-3.5" />
              <span>COMPREHENSIVE SCOPE OF WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              10 CORE CONSTRUCTION MANAGEMENT DISCIPLINES
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              From contract signing to physical close-out, EFMS delivers hands-on technical management across all civil, structural, architectural, and MEP trades.
            </p>
          </div>

          {/* Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {disciplines.map((disc, idx) => {
              const IconComponent = disc.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800 px-2.5 py-1 rounded-full">
                        {disc.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                      {idx + 1}. {disc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {disc.desc}
                    </p>

                    <div className="border-t border-slate-200 pt-3 mb-4">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wide mb-2">
                        Key Deliverables:
                      </div>
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

                  <button
                    onClick={() => {
                      const el = document.getElementById('rfq-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-2 py-2 px-3 bg-white hover:bg-red-600 hover:text-white text-slate-800 border border-slate-300 hover:border-red-600 rounded text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Engage This Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CONSTRUCTION ESTIMATOR & SCOPE BUILDER */}
      <section id="construction-estimator" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE SCOPE &amp; MANAGEMENT FEE CALCULATOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              ESTIMATE YOUR CONSTRUCTION GOVERNANCE BUDGET
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
              Select your project parameters to calculate staffing structures, site oversight commitments, and estimated monthly management fees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Configuration Panel */}
            <div className="lg:col-span-7 bg-slate-800/90 border border-slate-700 rounded-xl p-6 sm:p-8 space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  1. Project Sector &amp; Typology
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'commercial', label: 'Commercial Office' },
                    { id: 'industrial', label: 'Industrial & Logistics' },
                    { id: 'retail', label: 'Retail & Shopping' },
                    { id: 'fitout', label: 'Corporate Fit-Out' },
                    { id: 'residential', label: 'Multi-Unit Residential' },
                    { id: 'infrastructure', label: 'Civil Infrastructure' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectType(item.id as any)}
                      className={`p-3 rounded-lg text-xs font-bold text-left transition-all border ${
                        projectType === item.id
                          ? 'bg-red-600 text-white border-red-500 shadow-md ring-2 ring-red-400/40'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Estimated Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    2. Estimated Total Construction Value (Capex)
                  </label>
                  <span className="text-sm font-black text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-700">
                    R {projectBudgetMillion} Million ZAR
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="120"
                  step="1"
                  value={projectBudgetMillion}
                  onChange={(e) => setProjectBudgetMillion(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>R2M (Minor Fit-Out)</span>
                  <span>R25M (Standard Build)</span>
                  <span>R60M (Major Facility)</span>
                  <span>R120M+ (Mega Project)</span>
                </div>
              </div>

              {/* Project Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    3. Target Construction Duration (Months)
                  </label>
                  <span className="text-sm font-black text-sky-400 bg-sky-950/80 px-2.5 py-0.5 rounded border border-sky-700">
                    {projectDurationMonths} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="36"
                  step="1"
                  value={projectDurationMonths}
                  onChange={(e) => setProjectDurationMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>3 Months (Fast-Track)</span>
                  <span>12 Months (Typical)</span>
                  <span>24 Months (Complex)</span>
                  <span>36 Months (Multi-Phase)</span>
                </div>
              </div>

              {/* Service Management Model */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  4. Management Delivery Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    {
                      id: 'turnkey_cm',
                      name: 'Turnkey Construction Management',
                      desc: 'Full-time site team, CPM, QA/QC, cost control & trade integration.'
                    },
                    {
                      id: 'qa_qc_supervision',
                      name: 'QA/QC & Site Supervision Only',
                      desc: 'Independent quality verification, clerk of works & ITP audits.'
                    },
                    {
                      id: 'freelance_pm',
                      name: 'Freelance / Interim Project Leader',
                      desc: 'Senior Pr.CM leadership for project recovery or interim advisory.'
                    },
                    {
                      id: 'clerk_of_works',
                      name: 'Independent Clerk of Works',
                      desc: 'Technical daily oversight & architectural compliance inspections.'
                    }
                  ].map((model) => (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setServiceModel(model.id as any)}
                      className={`p-3 rounded-lg text-left transition-all border ${
                        serviceModel === model.id
                          ? 'bg-red-600/20 text-white border-red-500 ring-2 ring-red-500/50'
                          : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-xs font-extrabold text-white flex items-center justify-between">
                        <span>{model.name}</span>
                        {serviceModel === model.id && <Check className="w-3.5 h-3.5 text-red-400" />}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1 leading-snug">{model.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialist Governance Add-ons */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                  5. Specialized On-Site Add-Ons
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-700 cursor-pointer hover:bg-slate-900">
                    <span className="text-xs text-slate-200 flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeFullTimeResidentEngineer}
                        onChange={(e) => setIncludeFullTimeResidentEngineer(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500 h-4 w-4 bg-slate-800 border-slate-600"
                      />
                      <span>Dedicated Full-Time Senior Resident Engineer (Pr.Eng / Pr.Tech)</span>
                    </span>
                    <span className="text-[11px] font-bold text-amber-400">+ R65k/mo</span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-700 cursor-pointer hover:bg-slate-900">
                    <span className="text-xs text-slate-200 flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includePrimaveraP6Controls}
                        onChange={(e) => setIncludePrimaveraP6Controls(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500 h-4 w-4 bg-slate-800 border-slate-600"
                      />
                      <span>Advanced Primavera P6 CPM Planning &amp; EVM S-Curve Controls</span>
                    </span>
                    <span className="text-[11px] font-bold text-sky-400">+ R32k/mo</span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-700 cursor-pointer hover:bg-slate-900">
                    <span className="text-xs text-slate-200 flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeHseSafetyOfficer}
                        onChange={(e) => setIncludeHseSafetyOfficer(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500 h-4 w-4 bg-slate-800 border-slate-600"
                      />
                      <span>SACPCMP-Registered Construction Safety Officer (CHSO)</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-400">+ R42k/mo</span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-700 cursor-pointer hover:bg-slate-900">
                    <span className="text-xs text-slate-200 flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeTenantCoordination}
                        onChange={(e) => setIncludeTenantCoordination(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500 h-4 w-4 bg-slate-800 border-slate-600"
                      />
                      <span>Tenant Fit-Out &amp; Landlord Base-Build Liaison</span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-300">+ R28k/mo</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Results & Executive Summary Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-950 border border-red-500/40 rounded-xl p-6 sm:p-8 shadow-2xl relative">
              <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded mb-4">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>INDICATIVE MANAGEMENT PROJECTION</span>
              </div>

              <h3 className="text-xl font-black text-white mb-1">
                Estimated Project Fee Structure
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Based on SACPCMP fee tariff benchmarks, project risk profile, and dedicated site staffing.
              </p>

              {/* Big Fee Highlights */}
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-700">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Estimated Monthly Retainer Fee
                  </span>
                  <div className="text-3xl font-black text-red-400 mt-1">
                    R {metrics.monthlyFee.toLocaleString('en-ZA')}
                    <span className="text-xs font-normal text-slate-400"> / month</span>
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Excludes VAT • Billed against verified monthly deliverables
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Total Lifecycle Fee</span>
                    <span className="text-base font-black text-white">
                      R {metrics.totalFee.toLocaleString('en-ZA')}
                    </span>
                    <span className="text-[10px] text-amber-400 block mt-0.5">
                      (~{metrics.effectivePercentage}% of Capex)
                    </span>
                  </div>

                  <div className="bg-slate-900/60 rounded-lg p-3 border border-slate-700/60">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Recommended Team</span>
                    <span className="text-base font-black text-sky-400">
                      {metrics.recommendedHeadcount} Key Personnel
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      Pr.CM, RE, QA/QC &amp; Safety
                    </span>
                  </div>
                </div>
              </div>

              {/* Standard Deliverables Included */}
              <div className="border-t border-slate-800 pt-4 mb-6 space-y-2 text-xs text-slate-300">
                <div className="font-bold text-white uppercase text-[11px] tracking-wide mb-2">
                  Governance Package Inclusions:
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>Full Contract Administration (JBCC / FIDIC / NEC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>Weekly Technical Progress &amp; S-Curve Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>Independent Payment Valuation Physical Audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>Digital Snagging &amp; Final Handover O&amp;M Dossier</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#rfq-form"
                className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg text-center transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Formal Proposal Based on This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 5-STAGE PROJECT DELIVERY FRAMEWORK */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-900 text-white text-xs font-black uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-red-400" />
              <span>THE EUREKA METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              5-STAGE CONSTRUCTION GOVERNANCE ROADMAP
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              From contract award to sectional and practical completion, our structured methodology ensures seamless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                stage: 'STAGE 01',
                title: 'Pre-Construction & Setup',
                tag: 'WEEKS 1 - 4',
                desc: 'Contract review (JBCC/FIDIC), project charter, contractor vetting, site baseline surveys, and project baseline schedule establishment.'
              },
              {
                stage: 'STAGE 02',
                title: 'Site Mobilization & HSSE',
                tag: 'SITE SETUP',
                desc: 'Statutory OHSA safety files, principal contractor appointments, site access logistics, perimeter hoarding, and baseline risk assessments.'
              },
              {
                stage: 'STAGE 03',
                title: 'Active Site Supervision',
                tag: 'MAIN WORKS',
                desc: 'Daily resident engineering, trade sequencing, Inspection Test Plans (ITPs), concrete batch testing, and weekly progress dashboards.'
              },
              {
                stage: 'STAGE 04',
                title: 'Commissioning & Snagging',
                tag: 'PRACTICAL COMPLETION',
                desc: 'Integrated MEP testing, fire pressure tests, digital snag lists, occupational certificate submissions, and sectional handovers.'
              },
              {
                stage: 'STAGE 05',
                title: 'Final Accounts & Handover',
                tag: 'CLOSE-OUT',
                desc: 'As-built drawing collation, O&M operational manuals, defect liability period monitoring, final account sign-off, and retention release.'
              }
            ].map((stg, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-red-500 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      {stg.stage}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">
                      {stg.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-2">
                    {stg.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {stg.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-red-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Quality Assured</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTORS & PROJECT TYPOLOGIES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>MARKET SECTORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              EXPERIENCE ACROSS DIVERSE ASSET CLASSES
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              EFMS delivers construction management expertise across private, public, and corporate sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Office Parks & Headquarters',
                desc: 'Turnkey development and fast-track refurbishment of multi-storey corporate offices with high-spec HVAC, acoustic partitioning, and smart building BMS.',
                icon: Building2
              },
              {
                title: 'Industrial Warehousing & Logistics Parks',
                desc: 'Heavy industrial facilities, high-bay automated distribution centres, post-tensioned slab casting, dock levellers, and wide-span steel portal frames.',
                icon: Hammer
              },
              {
                title: 'Retail Shopping Centres & Plazas',
                desc: 'Phased refurbishment in live shopping environments with strict tenant coordinate protocols, night-shift works, and zero disruption to shoppers.',
                icon: Layers
              },
              {
                title: 'Healthcare Facilities & Laboratories',
                desc: 'Cleanroom installations, medical gas line routing, laminar flow theatre fit-outs, radiation shielding, and strict sterile environment governance.',
                icon: ShieldCheck
              },
              {
                title: 'Educational Campuses & Institutions',
                desc: 'Lecture halls, laboratory blocks, student accommodation, and sporting infrastructure delivered within academic term breaks.',
                icon: Award
              },
              {
                title: 'Multi-Unit Residential & Mixed-Use',
                desc: 'High-density apartment complexes, secure gated developments, and mixed-use commercial/residential podiums.',
                icon: Target
              }
            ].map((sector, i) => {
              const IconComp = sector.icon;
              return (
                <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-500 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded bg-red-600 text-white flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2">{sector.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sector.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CONTRACT & GOVERNANCE ACCORDION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>CONTRACTUAL &amp; LEGAL RIGOUR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              PROFESSIONAL GOVERNANCE STANDARDS
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              How EFMS administers industry contracts and ensures compliance.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Which standard forms of building contracts does EFMS administer?',
                a: 'EFMS is fully proficient in administering JBCC (Principal Building Agreement Edition 6.2 & Minor Works), FIDIC (Red, Yellow, and Silver Books), NEC3 / NEC4 (Engineering and Construction Contract), and GCC (General Conditions of Contract). Our Pr.CM leaders act impartially as Principal Agent, Employer Representative, or Engineer.'
              },
              {
                q: 'What is the difference between a Construction Manager and a General Contractor?',
                a: 'A General Contractor is an entity engaged under a lump-sum build contract that subcontracts trades. EFMS as your Construction Manager acts as your independent professional representative and fiduciary. We manage the contractors, verify QA/QC, audit variation claims, review monthly payment valuations, and safeguard your timeline and budget without hidden contractor markups.'
              },
              {
                q: 'How does EFMS enforce Quality Assurance & Control (QA/QC) on site?',
                a: 'We implement project-specific Inspection Test Plans (ITPs) before work begins. No trade proceeds to the next stage (e.g. pouring concrete over rebar or closing drywall over MEP services) without formal written sign-off and photographic verification from our Resident Engineers.'
              },
              {
                q: 'Can EFMS step in for Project Recovery if our build is currently in distress?',
                a: 'Yes. We offer rapid-deployment Construction Project Recovery services. We perform an emergency forensic audit of the programme, verify physical progress against paid invoices, negotiate with non-performing subcontractors, reset the critical path, and re-establish site governance to bring the project to successful completion.'
              },
              {
                q: 'Are your Project Managers and Safety Officers professionally registered?',
                a: 'Yes. Our key personnel maintain active professional registration with the South African Council for the Project and Construction Management Professions (SACPCMP) as Professional Construction Managers (Pr.CM), Professional Construction Project Managers (Pr.CPM), and Construction Health and Safety Officers (CHSO).'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/80 transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 text-white font-extrabold text-sm sm:text-base hover:text-red-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${
                      faqOpenIndex === index ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === index && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-700/60 bg-slate-900/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RFQ / CONSULTATION PROPOSAL SUBMISSION FORM */}
      <section id="rfq-form" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-800 text-xs font-black uppercase tracking-wider mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL PROJECT CONSULTATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                REQUEST A CONSTRUCTION MANAGEMENT PROPOSAL
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Provide your preliminary project details below. Our Principal Construction Management team will contact you within 24 hours to schedule a technical review.
              </p>
            </div>

            {quoteSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-emerald-900">
                  Project Consultation Request Received!
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you. An EFMS Senior Construction Project Manager (Pr.CM) has been assigned to your inquiry and will contact you directly to review drawings, bill of quantities, and site visit schedules.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setQuoteSubmitted(false)}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-6 py-2.5 rounded transition-colors"
                  >
                    Submit Another Project Scope
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van der Merwe"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Property Holdings"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="johan@apexholdings.co.za"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Direct Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Project Location (City/Province) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sandton, Gauteng"
                      className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Estimated Capex Value
                    </label>
                    <select defaultValue="R20 Million - R50 Million" className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none bg-white">
                      <option>Under R5 Million</option>
                      <option>R5 Million - R20 Million</option>
                      <option>R20 Million - R50 Million</option>
                      <option>R50 Million - R100 Million</option>
                      <option>R100 Million+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Target Start Date
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none bg-white">
                      <option>Immediate / Within 30 Days</option>
                      <option>1 - 3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Tender / Planning Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Project Scope &amp; Management Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your development, required management scope (e.g. full-time site supervision, QA/QC, contract administration, recovery of delayed project), and any specific constraints..."
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Construction RFP Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 text-[11px] text-slate-500 pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Strict Confidentiality Guaranteed
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600" />
                    Response Within 24 Hours
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 10. ELEMENTOR PRO CODE EXPORT TOOLBAR AT BOTTOM */}
      <section className="bg-slate-900 border-t border-slate-800 py-8 px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Elementor Pro Export Available</span>
            </h4>
            <p className="text-xs text-slate-400">
              Copy ready-to-paste semantic HTML and scoped CSS tailored for Elementor Custom Code blocks.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCode?.('html')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-4 py-2 rounded transition-colors"
            >
              Get Elementor HTML
            </button>
            <button
              onClick={() => onOpenCode?.('css')}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs px-4 py-2 rounded transition-colors"
            >
              Get Elementor CSS
            </button>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
