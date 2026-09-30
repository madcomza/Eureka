import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import quantitySurveyingImg from '../assets/images/Quantity Surveying.jpg';
import {
  Calculator,
  Building2,
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
  FileBadge
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaQuantitySurveyingPageProps {
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
      | 'pricing'
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaQuantitySurveyingPage: React.FC<EurekaQuantitySurveyingPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Tab & Accordion States
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(0);
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const togglePillar = (idx: number) => {
    setOpenPillarIndex(prev => prev === idx ? null : idx);
  };

  const asaqsStages = [
    {
      stage: 'STAGE 1',
      title: 'Inception & Feasibility',
      subtitle: 'Order of Magnitude & Viability Models',
      focus: 'Financial appraisals, elemental benchmark rates, and initial project risk register.',
      deliverables: [
        'Order of Magnitude Capital Estimate',
        'Preliminary Financial Feasibility & Viability Model',
        'Client Brief Commercial Parameters & Constraints',
        'Initial Risk Assessment & Scope of Quantity Surveying Services'
      ],
      standards: 'ASAQS Tariff Stage 1 • Feasibility Modeling',
      varianceTarget: '± 12% - 15% Budget Certainty'
    },
    {
      stage: 'STAGE 2',
      title: 'Concept & Viability',
      subtitle: 'Elemental Cost Plan 1 & Space Allocations',
      focus: 'Translating preliminary architectural concepts into an elemental cost structure.',
      deliverables: [
        'Elemental Cost Plan 1 (Uniformat / ASAQS Standard)',
        'Gross Floor Area (GFA) & Usable Area Efficiency Audits',
        'Preliminary Cash Flow Projections',
        'Value Engineering Target Identification'
      ],
      standards: 'Standard System 7th Edition Elemental Breakdown',
      varianceTarget: '± 8% - 10% Budget Certainty'
    },
    {
      stage: 'STAGE 3',
      title: 'Design Development',
      subtitle: 'Detailed Cost Plan 2 & Engineering Checks',
      focus: 'Rigorous cost checks as structural, civil, mechanical, and electrical engineering models solidify.',
      deliverables: [
        'Detailed Elemental Cost Plan 2 (Trade-by-Trade)',
        'Alternative Materials & Systems Cost-Benefit Matrix',
        'Updated Cash Flow Schedule for Lender Approval',
        'Cost Limit Establishment & Freeze'
      ],
      standards: 'SANS 10400 Compliance & Trade Allocations',
      varianceTarget: '± 4% - 6% Budget Certainty'
    },
    {
      stage: 'STAGE 4',
      title: 'Documentation & Procurement',
      subtitle: 'Standard System BOQs & Tender Adjudication',
      focus: 'Precision measurement, comprehensive procurement packages, and commercial tender evaluations.',
      deliverables: [
        'Standard System of Measuring Building Work 7th Ed BOQs',
        'Tender Documentation & Principal Building Agreement (JBCC/FIDIC/NEC)',
        'Tender Evaluation, Commercial Comparison & Rate Build-up Audits',
        'Contractor Negotiation & Contract Sum Recommendation Dossier'
      ],
      standards: 'WinQS / Candy CCS • JBCC PBA 6.2 / FIDIC 2017',
      varianceTarget: '± 1% - 2% Contract Sum Alignment'
    },
    {
      stage: 'STAGE 5',
      title: 'Construction & Administration',
      subtitle: 'Monthly Valuations, IPCs & Variation Controls',
      focus: 'Active site cost control, monthly valuations, change order verification, and risk mitigation.',
      deliverables: [
        'Monthly Interim Payment Valuations & Payment Certificates',
        'Variation Order (VO) Audits, Rate Fixings & Commercial Claims Checks',
        'Monthly Financial Reports (MFR) & Cost-to-Complete Projections',
        'Anticipated Final Cost (AFC) Tracking & Cash Outflow Forecasts'
      ],
      standards: 'JBCC Clause 25 / FIDIC Clause 14 Strict Compliance',
      varianceTarget: 'Zero Unapproved Cost Growth'
    },
    {
      stage: 'STAGE 6',
      title: 'Closeout & Final Accounts',
      subtitle: 'As-Built Re-measurements & Final Settlement',
      focus: 'Comprehensive final accounting, subcontractor reconciliations, and formal project sign-off.',
      deliverables: [
        'Final Account Preparation, Defense & Agreement with Main Contractor',
        'Nominated / Selected Subcontractor Account Settlements',
        'Final Payment Certificate & Retention Fund Releases',
        'Project Historical Cost Benchmarking Dossier'
      ],
      standards: 'ASAQS Closeout Protocol • SACQSP Ethical Guidelines',
      varianceTarget: '< 0.5% Variance vs Approved Final Budget'
    }
  ];

  const corePillars = [
    {
      icon: Calculator,
      number: '01',
      title: 'Elemental Cost Planning & Feasibility',
      tagline: 'Precision Budget Engineering Before Breaking Ground',
      description:
        'We construct robust financial feasibility studies and elemental cost models based on current South African market indices. Every elemental line item—from substructure and envelope to MEP and finishes—is benchmarked against verified cost databases.',
      benefits: [
        'Prevents unbudgeted design creep during early concept phases',
        'Rigorous gross-to-usable floor area yield optimization',
        'Multi-scenario capital expenditure sensitivity models',
        'Clear baseline for architectural and engineering cost limits'
      ],
      metric: 'Average 7.2% pre-construction capex savings'
    },
    {
      icon: FileSpreadsheet,
      number: '02',
      title: 'Standard System Bills of Quantities (BOQ)',
      tagline: 'Standard System 7th Edition Measured Accuracy',
      description:
        'Our registered Quantity Surveyors produce meticulous, fully itemized Bills of Quantities using WinQS and Candy (CCS). Every cubic metre of concrete, kilogram of reinforcing steel, and square metre of facade is measured with total transparency.',
      benefits: [
        'Eliminates contractor provisional lump-sum markup padding',
        'Establishes unambiguous unit rates for future variations',
        'Facilitates apples-to-apples tender adjudication across all bidders',
        'Reduces downstream scope disputes by over 85%'
      ],
      metric: '100% SANS / ASAQS 7th Edition compliance'
    },
    {
      icon: Scale,
      number: '03',
      title: 'Tender Procurement & Bid Adjudication',
      tagline: 'Authoritative Contractor Selection & Risk Elimination',
      description:
        'We design, manage, and adjudicate the entire commercial procurement process. We benchmark contractor rate build-ups, interrogate hidden exclusions, assess qualification letters, and ensure contract documents are legally and commercially watertight.',
      benefits: [
        'Forensic rate-audits exposing front-loaded and abnormal rates',
        'Evaluation of contractor financial liquidity and CIDB grading',
        'Standardized tender query registers and addenda tracking',
        'Comprehensive Tender Adjudication Report for Board approval'
      ],
      metric: 'Zero post-award contractual ambiguities'
    },
    {
      icon: BarChart3,
      number: '04',
      title: 'Interim Payment Certificates (IPC) & Valuations',
      tagline: 'Protecting Cash Flow: Pay Only for Verified Quality Work',
      description:
        'We conduct rigorous physical site valuations before every monthly certificate is issued. Off-site materials, work-in-progress, escalation indices (CPAP/HAYLETT), and retention deductions are forensically verified against the approved BOQ schedule.',
      benefits: [
        'Prevents over-certification and contractor cash flow exposure',
        'Precise application of contract price adjustment provisions (CPAP)',
        'Accurate statutory retention and security guarantee tracking',
        'Full alignment with JBCC PBA Clause 25 & FIDIC Clause 14'
      ],
      metric: 'Guaranteed 48-hour valuation audit cycle'
    },
    {
      icon: ShieldAlert,
      number: '05',
      title: 'Variation Order (VO) & Claims Auditing',
      tagline: 'Forensic Defense Against Unjustified Cost Claims',
      description:
        'Contractor claims for scope variations, dayworks, site disruptions, or price escalations are subjected to strict contractual and quantum scrutiny. We verify entitlement, check rate applicability, and defend the Employer against inflated claims.',
      benefits: [
        'Rejection of contractor variations disguised as contract works',
        'Forensic rate build-up interrogation for non-standard items',
        'Strict notice tracking (JBCC 20-day / FIDIC 28-day time bars)',
        'Comprehensive variation register with Cost-to-Complete impacts'
      ],
      metric: 'Average 62% reduction in contested variation sums'
    },
    {
      icon: Landmark,
      number: '06',
      title: 'Bank Monitoring & Lender Technical Due Diligence',
      tagline: 'Independent Commercial Assurance for Financial Institutions',
      description:
        'As independent Bank Monitoring Quantity Surveyors, we protect commercial banks, private credit funds, and institutional funders. We audit statutory approvals, verify contractor guarantees, and certify monthly drawdowns against actual physical milestones.',
      benefits: [
        'Pre-funding technical and commercial due diligence reports',
        'Monthly Drawdown Certificates verified on-site by Pr.QS',
        'Cost-to-Complete vs Remaining Loan Facility stress testing',
        'Direct risk escalation to lender credit committees'
      ],
      metric: 'Trusted by Tier-1 South African commercial lenders'
    }
  ];

  const faqs = [
    {
      q: 'Why should we appoint an independent Quantity Surveyor rather than relying on the contractor’s estimate?',
      a: 'A contractor’s estimate contains inherent commercial biases, provisional sums, and risk premiums designed to protect their profit margins. An independent SACQSP-registered Quantity Surveyor represents the Employer or Lender. We establish transparent market-tested Bills of Quantities, audit all rate build-ups, ensure contractual fairness, and ensure you only pay for actual verified work completed on site.'
    },
    {
      q: 'What is the difference between a Quantity Surveyor (QS) and a Project Manager (PM)?',
      a: 'The Project Manager focuses on overall project integration, schedule coordination, design team management, quality control, and timely delivery (PROCSA Stages 1-6). The Quantity Surveyor is the dedicated commercial and financial engineer responsible for elemental budgeting, cost planning, procurement documentation (BOQs), monthly payment valuations, variation audits, and final account negotiations. On major projects, EFMS can deliver both services cohesively or as independent standalone appointments.'
    },
    {
      q: 'Which standard forms of construction contracts do your Quantity Surveyors support?',
      a: 'Our registered Quantity Surveyors possess deep expertise in all standard South African and international forms of contract: JBCC Principal Building Agreement (PBA 6.2 & Minor Works), FIDIC (Red, Yellow, Silver, Pink Books 1999 & 2017), NEC3 / NEC4 Engineering and Construction Contract (ECC Options A, B, C, D, E & F), and GCC 2015 for civil engineering works.'
    },
    {
      q: 'How does Eureka FM perform Value Engineering without compromising building quality or compliance?',
      a: 'Value Engineering (VE) is not simply cutting costs or omitting scopes. It is a systematic analysis of building systems, structural envelopes, and MEP specifications during Stages 2 and 3. We identify functionally equivalent alternative materials, prefabricated components, and construction methodologies that lower capital expenditure and reduce operational lifecycle costs (LCC) while strictly maintaining SANS 10400 compliance and architectural aesthetic standards.'
    },
    {
      q: 'What is Bank Monitoring / Lender Technical Due Diligence (TDD)?',
      a: 'When commercial banks, private debt funds, or institutional investors finance a construction project, they require an independent SACQSP-registered Quantity Surveyor to safeguard their capital exposure. EFMS conducts initial pre-funding due diligence audits (checking permits, builder CIDB grading, insurance, contract terms, budget adequacy) and performs monthly site inspections to certify that drawdown disbursements match verified physical progress and that the remaining contingency is adequate to reach Practical Completion.'
    },
    {
      q: 'How are professional Quantity Surveying fees structured in South Africa?',
      a: 'Quantity Surveying fees are typically calculated as a percentage of the total construction cost based on the official SACQSP / ASAQS Tariff of Professional Fees, categorized across Stages 1 to 6. Alternatively, for specific advisory mandates, we provide fixed lump-sum proposals or time-based professional rates tailored to the required scope (e.g., Pre-Contract BOQ only, Monthly Bank Monitoring, or Forensic Variation Auditing).'
    }
  ];

  return (
    <div className="min-h-screen bg-[#060d20] text-slate-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Standard Header */}
      <EurekaHeader currentPage="quantity-surveying" onNavigate={onNavigate}  />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-[#060d20] border-b border-slate-800">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest">
                <FileBadge className="w-3.5 h-3.5 text-red-400" />
                <span>Specialist Consultancy • Solution 3.2</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white">
                QUANTITY SURVEYING &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                  COMMERCIAL COST ENGINEERING
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                Meticulous Pre- &amp; Post-Contract Cost Control, Standard System 7th Edition Bills of Quantities (BOQ), Financial Audits, Interim Payment Valuations, and Final Account Settlements across South Africa.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Whether you are a developer seeking early-stage elemental cost certainty, an institutional lender requiring monthly drawdown monitoring, or a contractor navigating complex variation audits under JBCC 6.2 or FIDIC contracts, our SACQSP &amp; ASAQS registered Quantity Surveyors protect your capital.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-xl shadow-red-900/40 flex items-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Request QS Fee Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#lifecycle"
                  className="px-5 py-3.5 rounded-lg bg-slate-800/90 hover:bg-slate-800 text-slate-200 text-xs font-bold uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
                >
                  <Workflow className="w-4 h-4 text-red-400" />
                  <span>Explore ASAQS 6 Stages</span>
                </a>
              </div>

              {/* KPI Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-white">R2.4B+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Verified BOQ Capex</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">&plusmn;0.4%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Final Account Target</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">Pr.QS</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">SACQSP &amp; ASAQS</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-red-400">48h</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Rapid Valuation Turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASAQS 6 Stages Lifecycle Section */}
      <section id="lifecycle" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
              <span>ASAQS / SACQSP STANDARD PRACTICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              The 6-Stage Quantity Surveying Lifecycle
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              We align our commercial deliverables strictly with the statutory guidelines of the South African Council for the Quantity Surveying Profession (SACQSP) from initial feasibility to final certificate.
            </p>
          </div>

          {/* Stage Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {asaqsStages.map((stageItem, index) => (
              <button
                key={index}
                onClick={() => setActiveStageTab(index)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  activeStageTab === index
                    ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
                }`}
              >
                <div className={`text-[10px] font-black tracking-wider mb-1 ${activeStageTab === index ? 'text-red-100' : 'text-red-600'}`}>
                  {stageItem.stage}
                </div>
                <div className={`text-xs font-bold leading-tight ${activeStageTab === index ? 'text-white' : 'text-slate-800'}`}>
                  {stageItem.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-black uppercase">
                    {asaqsStages[activeStageTab].stage}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {asaqsStages[activeStageTab].title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-red-600">
                  {asaqsStages[activeStageTab].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {asaqsStages[activeStageTab].focus}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-red-600" />
                    <span>Key Stage Deliverables:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {asaqsStages[activeStageTab].deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Governance Framework</div>
                  <div className="text-sm font-black text-slate-900">{asaqsStages[activeStageTab].standards}</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Budget Precision Target</div>
                  <div className="text-base font-black text-emerald-600">{asaqsStages[activeStageTab].varianceTarget}</div>
                </div>

                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900">
                  <div className="font-bold mb-1 flex items-center gap-1.5 text-red-700">
                    <Zap className="w-3.5 h-3.5 text-red-600" />
                    <span>Eureka FM QS Commitment:</span>
                  </div>
                  <span className="text-slate-700">
                    Our registered professionals participate actively in design meetings, challenging inefficient details before contract award and providing airtight valuations thereafter.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Pillars of Quantity Surveying - 2 Column (Accordion + Image) */}
      <section id="qs-pillars" className="py-20 bg-[#09132e] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest mb-3">
              <span>CORE SERVICE MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Six Pillars of Quantity Surveying Excellence
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              From early elemental feasibility models to forensic dispute adjudication, we provide comprehensive financial guardianship for building and civil engineering projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion List (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {corePillars.map((pillar, pIdx) => {
                const IconComp = pillar.icon;
                const isOpen = openPillarIndex === pIdx;

                return (
                  <div
                    key={pIdx}
                    className={`rounded-xl bg-[#0b1638] border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-red-600 shadow-xl shadow-red-950/30 ring-1 ring-red-600/30'
                        : 'border-slate-800 hover:border-slate-700 hover:bg-[#0d1a42]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => togglePillar(pIdx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-900 border border-slate-700 text-red-400'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-black text-slate-400">
                              PILLAR {pillar.number}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-400 hidden sm:inline truncate max-w-[220px]">
                              • {pillar.metric}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-extrabold transition-colors truncate ${
                              isOpen ? 'text-red-400' : 'text-white'
                            }`}
                          >
                            {pillar.title}
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
                            <p className="text-xs font-bold text-red-400">
                              {pillar.tagline}
                            </p>

                            <p className="text-xs text-slate-300 leading-relaxed">
                              {pillar.description}
                            </p>

                            {/* Key Outcomes / Deliverables */}
                            <div className="bg-slate-950/70 rounded-lg p-3.5 border border-slate-800/80">
                              <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">
                                Key Measurable Outcomes:
                              </div>
                              <ul className="space-y-1.5">
                                {pillar.benefits.map((b, bIdx) => (
                                  <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Benchmark metric and Scope Action */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5" />
                                <span>{pillar.metric}</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                              >
                                <span>Scope Pillar {pillar.number}</span>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0b1638] group">
                <img
                  src={quantitySurveyingImg}
                  alt="Eureka Quantity Surveying and Professional Cost Engineering Leadership"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Quick Key Highlights Bar */}
              <div className="bg-[#0b1638] rounded-xl p-4 border border-slate-800 shadow-sm grid grid-cols-3 gap-2 text-center">
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-white">Stages 1-6</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">SACQSP Scope</div>
                </div>
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-red-400">Pr.QS</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Certified Team</div>
                </div>
                <div>
                  <div className="text-base font-black text-emerald-400">&lt;0.5%</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Budget Variance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Eureka QS vs Standard Practice */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Why Appoint Eureka FM Quantity Surveyors?
            </h2>
            <p className="text-sm text-slate-600 mt-3">
              How our commercial engineering discipline compares against traditional passive accounting and in-house estimates.
            </p>
          </div>

          <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-900 text-white uppercase text-[11px] font-black border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-6">Commercial Capability</th>
                    <th className="py-4 px-6 text-white bg-red-600">Eureka FM Quantity Surveyors</th>
                    <th className="py-4 px-6 text-slate-300">Traditional Reactive QS</th>
                    <th className="py-4 px-6 text-slate-300">Contractor In-House Estimators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">BOQ Measurement Detail</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold bg-red-50/50 border-x border-red-100">
                      Standard System 7th Ed itemized trade breakdown with zero hidden lump sums.
                    </td>
                    <td className="py-4 px-6 text-slate-600">Generic approximate quantities with high provisional allowances.</td>
                    <td className="py-4 px-6 text-slate-500">Unverifiable lump sum quotes padded with contractor risk margins.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Monthly Valuation Audits</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold bg-red-50/50 border-x border-red-100">
                      Rigorous 100% physical on-site audit before every certificate is signed.
                    </td>
                    <td className="py-4 px-6 text-slate-600">Desktop claims verification with infrequent physical checks.</td>
                    <td className="py-4 px-6 text-slate-500">Front-loaded claims designed to extract cash flow early.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Variation Defense &amp; Time Bars</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold bg-red-50/50 border-x border-red-100">
                      Strict contractual notice tracking (JBCC Cl 23 / FIDIC Cl 20) to disallow invalid claims.
                    </td>
                    <td className="py-4 px-6 text-slate-600">Passive acceptance of variation sums without deep rate dissection.</td>
                    <td className="py-4 px-6 text-slate-500">Continuous claims for scope changes, delays, and escalation.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/50">Value Engineering Integration</td>
                    <td className="py-4 px-6 text-slate-900 font-semibold bg-red-50/50 border-x border-red-100">
                      Active material &amp; method optimization yielding 4.5% - 9.5% capital savings.
                    </td>
                    <td className="py-4 px-6 text-slate-600">Arbitrary scope cutting without structural cost-benefit modeling.</td>
                    <td className="py-4 px-6 text-slate-500">Substitution of inferior products to preserve contractor margins.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#f0faff] border-t border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-red-600" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Quantity Surveying Advisory Insights
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-xl bg-white border border-sky-100 overflow-hidden transition-all shadow-sm hover:border-sky-200"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-red-600 shrink-0 transition-transform ${faqOpenIndex === fIdx ? 'rotate-180' : ''}`} />
                </button>
                {faqOpenIndex === fIdx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-sky-100 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
