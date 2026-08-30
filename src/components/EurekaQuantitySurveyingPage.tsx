import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
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
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaQuantitySurveyingPage: React.FC<EurekaQuantitySurveyingPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Estimator / Calculator State
  const [buildingType, setBuildingType] = useState<
    'commercial_office' | 'industrial_warehouse' | 'retail_centre' | 'residential_estate' | 'healthcare_hospital' | 'infrastructure_civil'
  >('commercial_office');
  const [grossFloorArea, setGrossFloorArea] = useState<number>(4500); // m2
  const [capexEstimate, setCapexEstimate] = useState<number>(45000000); // ZAR
  const [qsScopeTier, setQsScopeTier] = useState<'full_lifecycle' | 'pre_contract' | 'post_contract' | 'lender_monitoring'>('full_lifecycle');
  const [contractFramework, setContractFramework] = useState<'jbcc' | 'fidic' | 'nec4' | 'gcc'>('jbcc');

  // Addon modules
  const [includeValueEngineering, setIncludeValueEngineering] = useState(true);
  const [includeLifeCycleCosting, setIncludeLifeCycleCosting] = useState(true);
  const [includeContractorAudit, setIncludeContractorAudit] = useState(true);
  const [includeBimTakeoff, setIncludeBimTakeoff] = useState(false);

  // Tab & Accordion States
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [activeDeliverableTab, setActiveDeliverableTab] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  // Calculation Logic
  const calculateQsForecast = () => {
    // Rates per m2 baseline guidelines
    const ratesPerM2: Record<string, { min: number; max: number; label: string }> = {
      commercial_office: { min: 14500, max: 22000, label: 'Prime Commercial / Office Park' },
      industrial_warehouse: { min: 8500, max: 13500, label: 'Logistics & Industrial Warehouse' },
      retail_centre: { min: 13000, max: 19500, label: 'Retail Mall & Shopping Centre' },
      residential_estate: { min: 11000, max: 17500, label: 'High-Density / Multi-Unit Residential' },
      healthcare_hospital: { min: 24000, max: 38000, label: 'Hospital & Specialist Medical Facility' },
      infrastructure_civil: { min: 12000, max: 26000, label: 'Civil Works & Heavy Infrastructure' }
    };

    const activeRate = ratesPerM2[buildingType];
    const estimatedCostMin = grossFloorArea * activeRate.min;
    const estimatedCostMax = grossFloorArea * activeRate.max;

    // Recommended contingency
    const contingencyRate = buildingType === 'healthcare_hospital' ? 0.08 : buildingType === 'industrial_warehouse' ? 0.04 : 0.05;
    const contingencyZar = ((estimatedCostMin + estimatedCostMax) / 2) * contingencyRate;

    // Projected Value Engineering Savings
    const veSavingsMin = (estimatedCostMin * 0.045);
    const veSavingsMax = (estimatedCostMax * 0.095);

    // Turnaround for BOQ / Cost Plan
    let boqTurnaround = '10 - 15 Working Days';
    if (grossFloorArea > 10000) boqTurnaround = '18 - 25 Working Days';
    else if (grossFloorArea < 2000) boqTurnaround = '7 - 10 Working Days';

    return {
      activeRate,
      estimatedCostMin,
      estimatedCostMax,
      contingencyZar,
      contingencyPercent: (contingencyRate * 100).toFixed(0),
      veSavingsMin,
      veSavingsMax,
      boqTurnaround,
      formattedMin: (estimatedCostMin / 1000000).toFixed(1) + 'M',
      formattedMax: (estimatedCostMax / 1000000).toFixed(1) + 'M',
      formattedVeMin: (veSavingsMin / 1000000).toFixed(2) + 'M',
      formattedVeMax: (veSavingsMax / 1000000).toFixed(2) + 'M'
    };
  };

  const forecast = calculateQsForecast();

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

  const sampleDeliverables = [
    {
      title: 'Monthly Financial Report (MFR)',
      category: 'Cost Governance',
      desc: 'Comprehensive executive dashboard featuring Anticipated Final Cost (AFC), budget variances, commitment registers, variation order logs, and cash flow forecasts.',
      tags: ['Executive Board Level', 'Cost-to-Complete', 'Risk Contingency'],
      codeSnippet: `MONTHLY FINANCIAL REPORT #08
Project: Menlyn Commercial Tower Phase 2
Approved Contract Sum:        R 84,500,000.00
Approved Variations (VO 1-12): R  2,340,500.00
Pending Claims (Contested):   R    620,000.00
Anticipated Final Cost (AFC):  R 87,460,500.00
Contingency Remaining:         R  1,850,000.00
Status: HEALTHY (Within +3.5% Authorised Envelope)`
    },
    {
      title: 'Interim Valuation & Certificate Schedule',
      category: 'Payment Control',
      desc: 'Transparent line-item measurement of physical progress, materials on/off site, CPAP contract price adjustments, statutory tax, and retention deductions.',
      tags: ['JBCC Clause 25.0', 'CPAP Haylett', 'Retention Fund'],
      codeSnippet: `INTERIM PAYMENT VALUATION #14
Gross Work Executed to Date:   R 42,180,450.00
Materials on Site (Secured):   R  3,450,000.00
Materials Off Site (Audited):  R    820,000.00
Total Gross Valuation:         R 46,450,450.00
Less 10% Retention (Capped):  -R  2,500,000.00
Less Previous Certificates:   -R 38,120,000.00
Net Amount Payable (excl VAT): R  5,830,450.00`
    },
    {
      title: 'Variation Order (VO) Assessment Register',
      category: 'Change Management',
      desc: 'Systematic register evaluating contract instruction legitimacy, trade rates, quantum substantiation, and critical path impacts.',
      tags: ['Rate Build-up', 'Omission vs Addition', 'Signed VO'],
      codeSnippet: `VARIATION ORDER RECORD: VO-042
Description: Substation Relocation & Trenching
Contractor Claimed Amount:    R 485,200.00
QS Assessed & Audited:        R 294,600.00
Variance Disallowed:          R 190,600.00
Basis for Disallowance:
- Overlapping prelims already covered in Sec 1
- Excavation rate adjusted to agreed BOQ Item 4.2
- Unjustified premium on cable jointing disproved`
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
      <EurekaHeader currentPage="quantity-surveying" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#09132e] via-[#09132e] to-[#060d20]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
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
                <a
                  href="#qs-calculator"
                  className="px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-xl shadow-red-900/40 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Interactive Cost &amp; Fee Tool</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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

            {/* Right Hero Card: Commercial Guardianship */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-b from-[#0e1b40] to-[#081028] border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-white">Full-Spectrum QS Governance</h3>
                    <p className="text-xs text-slate-400">Zero Unverified Variations or Cost Creep</p>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-6 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Standard System 7th Edition BOQs:</strong> Complete trade-by-trade measurement eliminating contractor lump-sum risk.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Forensic IPC Certifications:</strong> Physical on-site measurement before every payment certificate under JBCC / FIDIC / NEC.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Independent Bank Monitoring (TDD):</strong> Safeguarding lender capital with audited drawdown certificates and risk escalation.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Proactive Value Engineering:</strong> Identifying 4.5% to 9.5% capital savings during design development without quality sacrifice.
                    </span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 mb-6 border-t border-slate-800/80">
                  {['WinQS', 'Candy CCS', 'Uniformat', 'CPAP / Haylett', 'JBCC 6.2', 'FIDIC 2017', 'NEC4', 'SANS 10400'].map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold bg-slate-800/80 text-slate-300 px-2.5 py-1 rounded border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#rfq-brief"
                  className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider text-center block transition-all shadow-lg"
                >
                  Request a Quantity Surveying Scope Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASAQS 6 Stages Lifecycle Section */}
      <section id="lifecycle" className="py-20 bg-[#060d20] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
              <span>ASAQS / SACQSP STANDARD PRACTICE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              The 6-Stage Quantity Surveying Lifecycle
            </h2>
            <p className="text-sm text-slate-400 mt-3">
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
                    ? 'bg-red-950/60 border-red-500 text-white shadow-lg shadow-red-950/50'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                }`}
              >
                <div className="text-[10px] font-black tracking-wider text-red-400 mb-1">{stageItem.stage}</div>
                <div className="text-xs font-bold text-slate-200 leading-tight">{stageItem.title}</div>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0c1838] to-[#081024] border border-slate-700 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-red-600 text-white text-xs font-black uppercase">
                    {asaqsStages[activeStageTab].stage}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {asaqsStages[activeStageTab].title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-red-300">
                  {asaqsStages[activeStageTab].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {asaqsStages[activeStageTab].focus}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-red-400" />
                    <span>Key Stage Deliverables:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {asaqsStages[activeStageTab].deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Governance Framework</div>
                  <div className="text-sm font-black text-white">{asaqsStages[activeStageTab].standards}</div>
                </div>

                <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Budget Precision Target</div>
                  <div className="text-base font-black text-emerald-400">{asaqsStages[activeStageTab].varianceTarget}</div>
                </div>

                <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-xs text-red-200">
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-red-400" />
                    <span>Eureka FM QS Commitment:</span>
                  </div>
                  <span>
                    Our registered professionals participate actively in design meetings, challenging inefficient details before contract award and providing airtight valuations thereafter.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Pillars of Quantity Surveying */}
      <section className="py-20 bg-[#09132e] border-t border-slate-800">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, pIdx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="rounded-xl bg-[#0b1638] border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-600 transition-all hover:shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-black text-slate-500">PILLAR {pillar.number}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-white mb-1">{pillar.title}</h3>
                    <p className="text-xs font-bold text-red-400 mb-3">{pillar.tagline}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">{pillar.description}</p>

                    <div className="border-t border-slate-800/80 pt-4 mb-4">
                      <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Key Outcomes:</div>
                      <ul className="space-y-1.5">
                        {pillar.benefits.map((b, bIdx) => (
                          <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-400">{pillar.metric}</span>
                    <a
                      href="#rfq-brief"
                      className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive QS Estimator & BOQ Forecast Tool */}
      <section id="qs-calculator" className="py-20 bg-[#060d20] border-t border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>INTERACTIVE COMMERCIAL ESTIMATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Quantity Surveying Scope &amp; Fee Diagnostic
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Simulate your development parameters to estimate projected construction capex benchmarks, value engineering targets, and recommended quantity surveying service scopes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls */}
            <div className="lg:col-span-7 rounded-2xl bg-[#09132e] border border-slate-800 p-6 sm:p-8 space-y-6">
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 block mb-2">
                  1. Select Facility / Building Sector:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'commercial_office', label: 'Commercial Office' },
                    { id: 'industrial_warehouse', label: 'Logistics Warehouse' },
                    { id: 'retail_centre', label: 'Retail Shopping Mall' },
                    { id: 'residential_estate', label: 'Multi-Unit Residential' },
                    { id: 'healthcare_hospital', label: 'Healthcare & Hospital' },
                    { id: 'infrastructure_civil', label: 'Civil Infrastructure' }
                  ].map(sector => (
                    <button
                      key={sector.id}
                      onClick={() => setBuildingType(sector.id as any)}
                      className={`p-3 rounded-lg text-xs font-bold border text-left transition-all cursor-pointer ${
                        buildingType === sector.id
                          ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-900/30'
                          : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {sector.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Gross Floor Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                    2. Gross Floor Area (GFA in m²):
                  </label>
                  <span className="text-sm font-black text-red-400 font-mono">
                    {grossFloorArea.toLocaleString()} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="35000"
                  step="250"
                  value={grossFloorArea}
                  onChange={e => setGrossFloorArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>500 m² (Small fit-out)</span>
                  <span>15,000 m² (Mid-scale)</span>
                  <span>35,000+ m² (Mega precinct)</span>
                </div>
              </div>

              {/* QS Service Scope */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 block mb-2">
                  3. Quantity Surveying Scope Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'full_lifecycle', label: 'Full Stages 1-6 (Inception to Closeout)', sub: 'Complete pre- & post-contract stewardship' },
                    { id: 'pre_contract', label: 'Pre-Contract Only (Stages 1-4)', sub: 'Feasibility, BOQs & tender adjudication' },
                    { id: 'post_contract', label: 'Post-Contract Only (Stages 5-6)', sub: 'Monthly valuations, variations & final accounts' },
                    { id: 'lender_monitoring', label: 'Bank Monitoring & Due Diligence', sub: 'Independent drawdown & compliance certification' }
                  ].map(tier => (
                    <button
                      key={tier.id}
                      onClick={() => setQsScopeTier(tier.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        qsScopeTier === tier.id
                          ? 'bg-slate-800 border-red-500 text-white ring-1 ring-red-500'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-black text-white">{tier.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{tier.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Standard Contract Form */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 block mb-2">
                  4. Intended Contract Standard:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: 'jbcc', label: 'JBCC 6.2' },
                    { id: 'fidic', label: 'FIDIC 2017' },
                    { id: 'nec4', label: 'NEC4 ECC' },
                    { id: 'gcc', label: 'GCC 2015' }
                  ].map(c => (
                    <button
                      key={c.id}
                      onClick={() => setContractFramework(c.id as any)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold text-center border transition-all cursor-pointer ${
                        contractFramework === c.id
                          ? 'bg-red-600 text-white border-red-500'
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Value Add Modules Checkboxes */}
              <div>
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 block mb-2">
                  5. Specialist Advisory Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-900">
                    <input
                      type="checkbox"
                      checked={includeValueEngineering}
                      onChange={e => setIncludeValueEngineering(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-red-600 focus:ring-0"
                    />
                    <span>Value Engineering Workshop</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-900">
                    <input
                      type="checkbox"
                      checked={includeLifeCycleCosting}
                      onChange={e => setIncludeLifeCycleCosting(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-red-600 focus:ring-0"
                    />
                    <span>Whole-Life Costing (LCC)</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-900">
                    <input
                      type="checkbox"
                      checked={includeContractorAudit}
                      onChange={e => setIncludeContractorAudit(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-red-600 focus:ring-0"
                    />
                    <span>Forensic Contractor Rate Audit</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:bg-slate-900">
                    <input
                      type="checkbox"
                      checked={includeBimTakeoff}
                      onChange={e => setIncludeBimTakeoff(e.target.checked)}
                      className="rounded bg-slate-800 border-slate-700 text-red-600 focus:ring-0"
                    />
                    <span>BIM 5D Automated Takeoff</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Results Diagnostic Card */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#0e1d48] to-[#09112a] border border-slate-700/80 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-black text-red-400 uppercase tracking-wider">
                  <BarChart3 className="w-4 h-4" />
                  <span>COMMERCIAL BENCHMARK SUMMARY</span>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  SACQSP ALIGNED
                </span>
              </div>

              <div>
                <div className="text-xs text-slate-400 uppercase font-bold">Estimated Construction Capex Envelope:</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1 font-mono">
                  R{forecast.formattedMin} – R{forecast.formattedMax}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Based on {forecast.activeRate.label} benchmark: R{forecast.activeRate.min.toLocaleString()} - R{forecast.activeRate.max.toLocaleString()} / m² GFA.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Risk Contingency ({forecast.contingencyPercent}%)</div>
                  <div className="text-base font-black text-amber-400 mt-0.5">
                    R{(forecast.contingencyZar / 1000000).toFixed(2)}M
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Projected VE Savings</div>
                  <div className="text-base font-black text-emerald-400 mt-0.5">
                    R{forecast.formattedVeMin} - R{forecast.formattedVeMax}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>Standard BOQ Production Turnaround:</span>
                  <span className="text-red-400 font-mono">{forecast.boqTurnaround}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Includes WinQS trade breakdown, site inspection, and initial elemental check.
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-slate-300">Recommended Next Step:</div>
                <p className="text-xs text-slate-400">
                  Submit architectural CAD/BIM drawings or preliminary project brief for a formal, obligation-free Quantity Surveying Fee Proposal.
                </p>
              </div>

              <a
                href="#rfq-brief"
                className="w-full py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider text-center block transition-all shadow-xl shadow-red-900/40"
              >
                Request Detailed QS Fee Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Deliverables Showcase */}
      <section className="py-20 bg-[#09132e] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
              <BookOpen className="w-3.5 h-3.5 text-red-400" />
              <span>DELIVERABLES TRANSPARENCY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Sample Financial Reports &amp; QS Deliverables
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              Inspect authentic excerpts of our commercial reports, payment valuation schedules, and variation registers utilized by South African developers and commercial banks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sampleDeliverables.map((deliv, idx) => (
              <div key={idx} className="rounded-xl bg-[#0b1638] border border-slate-800 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase text-red-400 tracking-wider">
                      {deliv.category}
                    </span>
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      VERIFIED FORMAT
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white mb-2">{deliv.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{deliv.desc}</p>

                  <div className="rounded-lg bg-black/60 border border-slate-800 p-3.5 font-mono text-[11px] text-slate-300 whitespace-pre-wrap leading-relaxed mb-4">
                    {deliv.codeSnippet}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {deliv.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-[9px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Eureka QS vs Standard Practice */}
      <section className="py-20 bg-[#060d20] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Why Appoint Eureka FM Quantity Surveyors?
            </h2>
            <p className="text-sm text-slate-400 mt-3">
              How our commercial engineering discipline compares against traditional passive accounting and in-house estimates.
            </p>
          </div>

          <div className="rounded-xl bg-[#09132e] border border-slate-800 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#0b1638] text-white uppercase text-[11px] font-black border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-6">Commercial Capability</th>
                    <th className="py-4 px-6 text-red-400 bg-red-950/30">Eureka FM Quantity Surveyors</th>
                    <th className="py-4 px-6 text-slate-400">Traditional Reactive QS</th>
                    <th className="py-4 px-6 text-slate-400">Contractor In-House Estimators</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  <tr>
                    <td className="py-4 px-6 font-bold text-white">BOQ Measurement Detail</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold bg-red-950/10">
                      Standard System 7th Ed itemized trade breakdown with zero hidden lump sums.
                    </td>
                    <td className="py-4 px-6 text-slate-400">Generic approximate quantities with high provisional allowances.</td>
                    <td className="py-4 px-6 text-slate-500">Unverifiable lump sum quotes padded with contractor risk margins.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-white">Monthly Valuation Audits</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold bg-red-950/10">
                      Rigorous 100% physical on-site audit before every certificate is signed.
                    </td>
                    <td className="py-4 px-6 text-slate-400">Desktop claims verification with infrequent physical checks.</td>
                    <td className="py-4 px-6 text-slate-500">Front-loaded claims designed to extract cash flow early.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-white">Variation Defense &amp; Time Bars</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold bg-red-950/10">
                      Strict contractual notice tracking (JBCC Cl 23 / FIDIC Cl 20) to disallow invalid claims.
                    </td>
                    <td className="py-4 px-6 text-slate-400">Passive acceptance of variation sums without deep rate dissection.</td>
                    <td className="py-4 px-6 text-slate-500">Continuous claims for scope changes, delays, and escalation.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-white">Value Engineering Integration</td>
                    <td className="py-4 px-6 text-emerald-400 font-semibold bg-red-950/10">
                      Active material &amp; method optimization yielding 4.5% - 9.5% capital savings.
                    </td>
                    <td className="py-4 px-6 text-slate-400">Arbitrary scope cutting without structural cost-benefit modeling.</td>
                    <td className="py-4 px-6 text-slate-500">Substitution of inferior products to preserve contractor margins.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#09132e] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-red-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Quantity Surveying Advisory Insights
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="rounded-xl bg-[#0b1638] border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-red-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-red-500 shrink-0 transition-transform ${faqOpenIndex === fIdx ? 'rotate-180' : ''}`} />
                </button>
                {faqOpenIndex === fIdx && (
                  <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ & Confidential Briefing Section */}
      <section id="rfq-brief" className="py-20 bg-[#060d20] border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#09132e] border border-slate-700/80 p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-widest mb-3">
                <span>CONFIDENTIAL PROPOSAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Request a Quantity Surveying Proposal
              </h2>
              <p className="text-xs text-slate-400 mt-2">
                Submit your project particulars for a confidential review by our Senior SACQSP &amp; ASAQS Registered Quantity Surveyors.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white">Quantity Surveying Brief Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you. A Senior Quantity Surveyor (Pr.QS) will contact you within 24 business hours with an initial scope assessment and formal fee proposal.
                </p>
                <button
                  onClick={() => setRfqSubmitted(false)}
                  className="px-4 py-2 bg-slate-800 text-xs font-bold text-slate-300 rounded hover:bg-slate-700"
                >
                  Submit Another Project Brief
                </button>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setRfqSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Thorne"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Organisation / Developer *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Redefine Properties / Standard Bank"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@propertyfund.co.za"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="082 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Building Type
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none">
                      <option>Commercial Office</option>
                      <option>Industrial Warehouse</option>
                      <option>Retail Shopping Centre</option>
                      <option>Multi-Unit Residential</option>
                      <option>Hospital &amp; Healthcare</option>
                      <option>Civil Infrastructure</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Project Stage
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none">
                      <option>Stage 1: Feasibility / Inception</option>
                      <option>Stage 2-3: Design &amp; Cost Planning</option>
                      <option>Stage 4: BOQ &amp; Tender Procurement</option>
                      <option>Stage 5: Active Construction (Valuations)</option>
                      <option>Stage 6: Final Account Settlement</option>
                      <option>Lender Bank Monitoring</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                      Estimated Capex
                    </label>
                    <select className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none">
                      <option>Under R15 Million</option>
                      <option>R15M - R50 Million</option>
                      <option>R50M - R150 Million</option>
                      <option>Above R150 Million</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-1">
                    Project Location &amp; Specific Commercial Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe project location, gross floor area, current design status, specific BOQ requirements, or urgent valuation timelines..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">
                    🔒 Protected under mutual Non-Disclosure Agreement (NDA)
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-red-900/30"
                  >
                    Submit Quantity Surveying Brief
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
