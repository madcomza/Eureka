import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
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
  PieChart,
  Check,
  Workflow,
  Sparkles,
  Search,
  Flag,
  Percent,
  SlidersHorizontal,
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
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaProjectManagementPage: React.FC<EurekaProjectManagementPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Interactive Project Management Governance & Fee Estimator State
  const [projectSector, setProjectSector] = useState<'capital_infrastructure' | 'commercial_refurb' | 'programme_portfolio' | 'industrial_capex' | 'tenant_fitout'>('commercial_refurb');
  const [capexBudgetMillion, setCapexBudgetMillion] = useState<number>(35); // in ZAR Millions
  const [timelineMonths, setTimelineMonths] = useState<number>(14); // duration
  const [managementTier, setManagementTier] = useState<'full_lifecycle' | 'procurement_construction' | 'portfolio_programme' | 'project_audit_recovery'>('full_lifecycle');
  const [contractForm, setContractForm] = useState<'jbcc' | 'fidic' | 'nec4' | 'bespoke'>('jbcc');
  
  // Optional add-on capabilities
  const [includeEarnedValueControls, setIncludeEarnedValueControls] = useState<boolean>(true);
  const [includeBimClashAudit, setIncludeBimClashAudit] = useState<boolean>(true);
  const [includeRiskRegisterMitigation, setIncludeRiskRegisterMitigation] = useState<boolean>(true);
  const [includeProcurementTendering, setIncludeProcurementTendering] = useState<boolean>(true);

  // UI state
  const [activeStageTab, setActiveStageTab] = useState<number>(0);
  const [activeDisciplineTab, setActiveDisciplineTab] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  // Estimator Calculations
  const calculateMetrics = () => {
    // Base fee percentage based on management tier & PROCSA tariff guidelines
    let baseRate = 3.5; // percentage of CAPEX
    if (managementTier === 'full_lifecycle') baseRate = 4.2;
    if (managementTier === 'procurement_construction') baseRate = 2.9;
    if (managementTier === 'portfolio_programme') baseRate = 3.8;
    if (managementTier === 'project_audit_recovery') baseRate = 3.2;

    // Sliding scale discounts for larger capex volumes
    if (capexBudgetMillion > 100) {
      baseRate *= 0.78;
    } else if (capexBudgetMillion > 50) {
      baseRate *= 0.88;
    } else if (capexBudgetMillion > 20) {
      baseRate *= 0.94;
    }

    // Add-on adjustments
    let addOnFeeZar = 0;
    if (includeEarnedValueControls) addOnFeeZar += 18000 * timelineMonths;
    if (includeBimClashAudit) addOnFeeZar += 22000 * Math.min(timelineMonths, 6);
    if (includeRiskRegisterMitigation) addOnFeeZar += 12000 * timelineMonths;
    if (includeProcurementTendering) addOnFeeZar += 45000;

    const totalEstimatedCapexZar = capexBudgetMillion * 1000000;
    const baseManagementFeeZar = (totalEstimatedCapexZar * (baseRate / 100));
    const totalProjectManagementFee = baseManagementFeeZar + addOnFeeZar;
    const monthlyRetainerFee = totalProjectManagementFee / timelineMonths;

    // Estimated Capex Savings through proactive VO mitigation, competitive procurement & claim defense
    const estimatedSavingsPercent = 8.5; // average 8-12% capex savings
    const estimatedDirectSavingsZar = totalEstimatedCapexZar * (estimatedSavingsPercent / 100);
    const roiRatio = (estimatedDirectSavingsZar / totalProjectManagementFee).toFixed(1);

    return {
      feePercentage: baseRate.toFixed(2),
      totalFee: Math.round(totalProjectManagementFee),
      monthlyFee: Math.round(monthlyRetainerFee),
      estimatedSavings: Math.round(estimatedDirectSavingsZar),
      roiRatio,
      capexValue: totalEstimatedCapexZar
    };
  };

  const metrics = calculateMetrics();

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

  // Case Studies
  const caseStudies = [
    {
      title: 'R180M Corporate Headquarters Redevelopment',
      client: 'Tier-1 Financial Services Institution',
      location: 'Sandton, Johannesburg',
      metrics: {
        budget: 'R180,000,000',
        duration: '18 Months',
        savings: 'R14.2M (7.9%) Saved',
        timing: 'Delivered 3 Weeks Early'
      },
      summary: 'Complete architectural and MEP refurbishment of a 16-floor corporate tower while maintaining live business operations across 8 lower floors. Implemented JBCC contract administration, zero-outage electrical cutovers, and zero lost-time injuries.'
    },
    {
      title: 'R95M Industrial Logistics & Cold-Chain Facility',
      client: 'National FMCG Distribution Group',
      location: 'Linbro Park, Gauteng',
      metrics: {
        budget: 'R95,000,000',
        duration: '11 Months',
        savings: 'R8.1M Contingency Intact',
        timing: '100% On Schedule'
      },
      summary: 'Greenfield construction of 22,000 m² high-bay logistics warehouse with specialized ammonia refrigeration plant. Supervised structural steel erection, super-flat FM2 industrial flooring, and early municipal power energization.'
    },
    {
      title: 'R42M Retail Shopping Centre Modernization',
      client: 'Institutional Real Estate Investment Trust (REIT)',
      location: 'Pretoria East, Gauteng',
      metrics: {
        budget: 'R42,000,000',
        duration: '8 Months',
        savings: 'Zero Tenant Rent Abatement',
        timing: 'Zero Trading Days Lost'
      },
      summary: 'Phased mall atrium renewal, skylight replacements, and anchor tenant white-boxing executed strictly during night shifts. All retail stores operated with full trading revenue throughout the 8-month programme.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="project-management" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
                <FileCheck2 className="w-3.5 h-3.5 text-red-500" />
                <span>SOLUTIONS • 2. CONSTRUCTION DELIVERY • 2.2 PROJECT MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                PROJECT MANAGEMENT <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                  SERVICES &amp; CAPEX GOVERNANCE
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-medium leading-relaxed">
                Better Planning. Stronger Control. Successful Delivery. Professional Principal Project Management for infrastructure upgrades, capital developments, major refurbishments, and multi-asset programmes across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('pm-rfq');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Initiate Project Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
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

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-bold text-slate-300">
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

            {/* Hero Right Card: Project Governance KPI Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center font-black">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">Project Governance Index</h3>
                      <p className="text-[11px] text-slate-400">Institutional Delivery Track Record</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
                    ACTIVE GOVERNANCE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Delivered Capex</span>
                    <span className="text-2xl font-black text-white">R1.2B+</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Across SA Provinces</span>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Budget Precision</span>
                    <span className="text-2xl font-black text-red-400">99.2%</span>
                    <span className="text-[10px] text-slate-300 block mt-0.5">Within Baseline Approval</span>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Contract Defense</span>
                    <span className="text-2xl font-black text-amber-400">100%</span>
                    <span className="text-[10px] text-slate-300 block mt-0.5">Zero Unresolved Claims</span>
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3.5">
                    <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Schedule Variance</span>
                    <span className="text-2xl font-black text-emerald-400">&lt; 1.5%</span>
                    <span className="text-[10px] text-slate-300 block mt-0.5">Critical Path Adherence</span>
                  </div>
                </div>

                <div className="bg-red-950/40 border border-red-800/40 rounded-xl p-3.5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">Independent Client Advocacy</span>
                    <span className="text-slate-300 text-[11px] leading-relaxed">
                      We protect developers and asset managers from contractor cost creep, contractor non-performance, and design coordinator omissions.
                    </span>
                  </div>
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

      {/* 12 Core Project Management Disciplines Grid */}
      <section className="py-16 md:py-20 bg-slate-100">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmDisciplines.map((disc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-red-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {disc.icon}
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {disc.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {disc.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 text-[11px] text-slate-700 font-medium">
                    {disc.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive CAPEX Project Management Fee & ROI Estimator */}
      <section id="pm-estimator" className="py-16 md:py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              INTERACTIVE GOVERNANCE TOOL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              CAPEX PROJECT MANAGEMENT FEE &amp; ROI ESTIMATOR
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Model project management resource staffing, baseline tariff percentages, and projected cost savings based on your development parameters.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Estimator Controls (Left 7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Sector Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    1. Development / Sector Classification
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'commercial_refurb', label: 'Commercial Refurbishment' },
                      { id: 'capital_infrastructure', label: 'Capital Infrastructure' },
                      { id: 'programme_portfolio', label: 'Multi-Site Programme' },
                      { id: 'industrial_capex', label: 'Industrial / Logistics' },
                      { id: 'tenant_fitout', label: 'Corporate Fit-Out' }
                    ].map((sec) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setProjectSector(sec.id as any)}
                        className={`p-2.5 rounded-lg text-xs font-bold text-left transition-all ${
                          projectSector === sec.id
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        }`}
                      >
                        {sec.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Capex Budget Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      2. Estimated Construction Capex
                    </label>
                    <span className="text-base font-black text-amber-400">
                      R{capexBudgetMillion} Million ZAR
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="250"
                    step="5"
                    value={capexBudgetMillion}
                    onChange={(e) => setCapexBudgetMillion(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>R5M (Tenant Fit-out)</span>
                    <span>R50M (Medium Commercial)</span>
                    <span>R250M+ (Major Capital)</span>
                  </div>
                </div>

                {/* Timeline Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      3. Project Delivery Duration
                    </label>
                    <span className="text-base font-black text-amber-400">
                      {timelineMonths} Months
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="36"
                    step="1"
                    value={timelineMonths}
                    onChange={(e) => setTimelineMonths(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                    <span>3 Months (Fast-Track)</span>
                    <span>12-18 Months (Standard Build)</span>
                    <span>36 Months (Major Campus)</span>
                  </div>
                </div>

                {/* Governance Model & Contract Form */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      4. Scope &amp; Management Model
                    </label>
                    <select
                      value={managementTier}
                      onChange={(e) => setManagementTier(e.target.value as any)}
                      className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-lg p-2.5 text-xs font-bold focus:outline-none focus:border-red-500"
                    >
                      <option value="full_lifecycle">Full Lifecycle (PROCSA Stage 1–6)</option>
                      <option value="procurement_construction">Procurement &amp; Construction (Stages 4–6)</option>
                      <option value="portfolio_programme">Programme Management (Multi-Site)</option>
                      <option value="project_audit_recovery">Project Audit &amp; Distressed Recovery</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      5. Primary Contract Standard
                    </label>
                    <select
                      value={contractForm}
                      onChange={(e) => setContractForm(e.target.value as any)}
                      className="w-full bg-slate-800 text-slate-100 border border-slate-700 rounded-lg p-2.5 text-xs font-bold focus:outline-none focus:border-red-500"
                    >
                      <option value="jbcc">JBCC Principal Building Agreement</option>
                      <option value="fidic">FIDIC (Red / Yellow / Silver Books)</option>
                      <option value="nec4">NEC4 Engineering &amp; Construction (ECC)</option>
                      <option value="bespoke">Bespoke Client Agreement</option>
                    </select>
                  </div>
                </div>

                {/* Advanced Add-on Controls */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    6. Supplementary Governance Controls
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-800">
                      <input
                        type="checkbox"
                        checked={includeEarnedValueControls}
                        onChange={(e) => setIncludeEarnedValueControls(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500"
                      />
                      <span className="text-xs text-slate-200">Primavera P6 Earned Value (EVM)</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-800">
                      <input
                        type="checkbox"
                        checked={includeBimClashAudit}
                        onChange={(e) => setIncludeBimClashAudit(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500"
                      />
                      <span className="text-xs text-slate-200">BIM 3D Clash Detection Audits</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-800">
                      <input
                        type="checkbox"
                        checked={includeRiskRegisterMitigation}
                        onChange={(e) => setIncludeRiskRegisterMitigation(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500"
                      />
                      <span className="text-xs text-slate-200">Formal Risk &amp; Early Warning System</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 cursor-pointer hover:bg-slate-800">
                      <input
                        type="checkbox"
                        checked={includeProcurementTendering}
                        onChange={(e) => setIncludeProcurementTendering(e.target.checked)}
                        className="rounded text-red-600 focus:ring-red-500"
                      />
                      <span className="text-xs text-slate-200">Tender Documentation &amp; Adjudication</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Estimator Summary Output (Right 5 Cols) */}
              <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
                    MODELLED PM REMUNERATION &amp; ROI
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-1">
                    Estimated Management Metrics
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Benchmark based on PROCSA tariffs &amp; market rates.
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60 text-xs">
                    <span className="text-slate-400">Total Capex Governed:</span>
                    <span className="font-bold text-white">R{(metrics.capexValue / 1000000).toFixed(1)} Million</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60 text-xs">
                    <span className="text-slate-400">Effective PM Tariff:</span>
                    <span className="font-bold text-amber-400">{metrics.feePercentage}% of CAPEX</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60 text-xs">
                    <span className="text-slate-400">Estimated Monthly Retainer:</span>
                    <span className="font-bold text-white">R{metrics.monthlyFee.toLocaleString()} / mo</span>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-300">Total Estimated PM Fee:</span>
                      <span className="text-xl font-black text-red-400">
                        R{metrics.totalFee.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400">
                      Covers Principal Project Manager (Pr.CPM), contract administration, and site progress audits across all {timelineMonths} months.
                    </p>
                  </div>

                  <div className="bg-emerald-950/40 border border-emerald-800/50 p-4 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-emerald-400">Projected Direct Capex Savings:</span>
                      <span className="text-base font-black text-emerald-300">
                        R{metrics.estimatedSavings.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Estimated ROI: <strong className="text-emerald-300">{metrics.roiRatio}x</strong> return on project management fees through competitive tender negotiation, variation order mitigation, and schedule acceleration.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('pm-rfq');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Formatted Proposal For This Capex</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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

      {/* Case Studies / Proven Delivery Metrics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
              TRACK RECORD &amp; CASE STUDIES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              PROVEN RESULTS ACROSS COMPLEX CAPEX
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Real-world examples of capital delivery, cost containment, and schedule acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-red-500"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-2">
                    <span>{cs.client}</span>
                    <span className="text-red-600">{cs.location}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cs.summary}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Capex Value</span>
                      <span className="font-extrabold text-slate-900">{cs.metrics.budget}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Duration</span>
                      <span className="font-extrabold text-slate-900">{cs.metrics.duration}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Financial Impact</span>
                      <span className="font-bold text-emerald-600">{cs.metrics.savings}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Milestone Outcome</span>
                      <span className="font-bold text-red-600">{cs.metrics.timing}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ / Proposal Request Form Section */}
      <section id="pm-rfq" className="py-16 md:py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[10px] font-black text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                INITIATE PROJECT GOVERNANCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 tracking-tight">
                REQUEST A PROJECT MANAGEMENT PROPOSAL
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Submit your development parameters below. A Principal Project Manager (Pr.CPM) will provide a structured technical governance proposal within 24 hours.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="bg-emerald-950/60 border border-emerald-600 rounded-xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-extrabold text-white">Project Consultation Request Received</h3>
                <p className="text-xs text-slate-200 max-w-md mx-auto">
                  Thank you. An EFMS Senior Project Director has been assigned to your development inquiry and will contact you directly with an initial PROCSA governance scope.
                </p>
                <button
                  onClick={() => setRfqSubmitted(false)}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-bold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRfqSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Johan van der Merwe"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Property Holdings"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="johan@apexholdings.co.za"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+27 82 123 4567"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Development Sector
                    </label>
                    <select
                      defaultValue="Commercial Office Refurbishment"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-red-500 font-medium"
                    >
                      <option>Commercial Office Refurbishment</option>
                      <option>Industrial Logistics &amp; Warehousing</option>
                      <option>Retail Shopping Mall Upgrade</option>
                      <option>Healthcare / Medical Facility</option>
                      <option>Educational / University Campus</option>
                      <option>Multi-Unit Residential Estate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Estimated Capex Value
                    </label>
                    <select
                      defaultValue="R20 Million - R50 Million"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-red-500 font-medium"
                    >
                      <option>Under R5 Million</option>
                      <option>R5 Million - R20 Million</option>
                      <option>R20 Million - R50 Million</option>
                      <option>R50 Million - R100 Million</option>
                      <option>R100 Million+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Target Project Start
                    </label>
                    <select
                      defaultValue="Immediate / Within 30 Days"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-red-500 font-medium"
                    >
                      <option>Immediate / Within 30 Days</option>
                      <option>1 - 3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Tender / Concept Phase</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                    Project Scope &amp; Management Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide high-level details regarding your development, required PROCSA stages (e.g. full turnkey, tender procurement, recovery of stalled project), site location, and key deliverables..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>SUBMIT PROJECT RFP INQUIRY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-400 text-center pt-2">
                  🛡️ All project documentation and financial models are handled under strict NDA confidentiality.
                </p>
              </form>
            )}
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
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
