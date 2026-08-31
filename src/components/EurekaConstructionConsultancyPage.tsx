import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  Briefcase,
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
  Calculator,
  BookOpen,
  LineChart,
  Landmark
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaConstructionConsultancyPageProps {
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

export const EurekaConstructionConsultancyPage: React.FC<EurekaConstructionConsultancyPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Diagnostic & Estimator State
  const [serviceFocus, setServiceFocus] = useState<
    'qs_cost' | 'contract_admin' | 'claims_quantum' | 'delay_analysis' | 'lender_tdd' | 'turnaround'
  >('claims_quantum');
  const [projectStage, setProjectStage] = useState<
    'feasibility' | 'tender' | 'active_construction' | 'in_delay' | 'dispute_pending' | 'closeout'
  >('in_delay');
  const [contractType, setContractType] = useState<'jbcc' | 'fidic' | 'nec' | 'gcc' | 'bespoke'>('jbcc');
  const [capexBand, setCapexBand] = useState<'under_15m' | '15m_50m' | '50m_150m' | 'above_150m'>('15m_50m');

  // Specific add-on scopes
  const [includeForensicAudit, setIncludeForensicAudit] = useState(true);
  const [includeExpertWitness, setIncludeExpertWitness] = useState(true);
  const [includeValuationAudit, setIncludeValuationAudit] = useState(true);
  const [includeAdjudicationSupport, setIncludeAdjudicationSupport] = useState(false);

  // UI state
  const [activePillarTab, setActivePillarTab] = useState<number>(0);
  const [activeDelayMethodTab, setActiveDelayMethodTab] = useState<number>(1);
  const [activeContractTab, setActiveContractTab] = useState<'jbcc' | 'fidic' | 'nec' | 'gcc'>('jbcc');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  // Diagnostic Calculation Engine
  const calculateDiagnostic = () => {
    let baseEffortDays = '7 - 10 Business Days';
    let riskMitigationZar = 'R1.2M - R3.5M';
    let advisoryMode = 'Comprehensive Claims & Quantum Defense';
    let primaryDeliverable = 'Forensic Delay & Quantum Statement of Claim / Defense';
    let recommendedTier = 'Senior Construction Claims Consultant (Pr.CPM / Pr.QS)';

    if (serviceFocus === 'qs_cost') {
      advisoryMode = 'Quantity Surveying & Commercial Cost Engineering';
      primaryDeliverable = 'Elemental Cost Plan, BOQ Review & Commercial Audit Register';
      baseEffortDays = '5 - 7 Business Days';
      riskMitigationZar = capexBand === 'under_15m' ? 'R450k - R950k' : capexBand === '15m_50m' ? 'R1.5M - R3.8M' : 'R4.5M - R12M';
      recommendedTier = 'Principal Quantity Surveyor (Pr.QS / ASAQS)';
    } else if (serviceFocus === 'contract_admin') {
      advisoryMode = 'Contract Administration & Commercial Governance';
      primaryDeliverable = 'Contract Review, Strict Notice Register & Risk Allocation Matrix';
      baseEffortDays = '3 - 5 Business Days';
      riskMitigationZar = capexBand === 'under_15m' ? 'R350k - R750k' : capexBand === '15m_50m' ? 'R1.1M - R2.5M' : 'R3.2M - R8M';
      recommendedTier = 'Principal Agent & Contract Specialist (Pr.CPM)';
    } else if (serviceFocus === 'claims_quantum') {
      advisoryMode = 'Construction Claims Management & Quantum Assessment';
      primaryDeliverable = 'EOT & Prolongation Cost Assessment with Contractual Substantiation';
      baseEffortDays = '7 - 12 Business Days';
      riskMitigationZar = capexBand === 'under_15m' ? 'R800k - R1.8M' : capexBand === '15m_50m' ? 'R2.4M - R6.5M' : 'R7M - R22M';
      recommendedTier = 'Claims Director & Forensic Quantum Expert';
    } else if (serviceFocus === 'delay_analysis') {
      advisoryMode = 'Forensic Delay Analysis & SCL Protocol Programme Audit';
      primaryDeliverable = 'Time Impact Analysis (TIA) & Critical Path Windows Report';
      baseEffortDays = '8 - 14 Business Days';
      riskMitigationZar = capexBand === 'under_15m' ? 'R600k - R1.5M' : capexBand === '15m_50m' ? 'R2.0M - R5.2M' : 'R6M - R18M';
      recommendedTier = 'Forensic Delay Analyst & Primavera P6 Specialist';
    } else if (serviceFocus === 'lender_tdd') {
      advisoryMode = 'Lender / Investor Technical Due Diligence & Monitoring';
      primaryDeliverable = 'Initial Project Due Diligence & Monthly Drawdown Audit Certificates';
      baseEffortDays = '5 - 8 Business Days Initial';
      riskMitigationZar = capexBand === 'under_15m' ? 'R500k - R1.2M' : capexBand === '15m_50m' ? 'R1.8M - R4.5M' : 'R5M - R15M';
      recommendedTier = 'Independent Technical Advisor (ITA / Pr.QS)';
    } else if (serviceFocus === 'turnaround') {
      advisoryMode = 'Distressed Project Recovery & Turnaround Advisory';
      primaryDeliverable = '360° Diagnostic Report, Revised Cost-to-Complete & Recovery Programme';
      baseEffortDays = '48-72h Rapid Mobilisation';
      riskMitigationZar = capexBand === 'under_15m' ? 'R1.5M - R3.5M' : capexBand === '15m_50m' ? 'R4.0M - R11M' : 'R12M - R35M';
      recommendedTier = 'Turnaround Advisory Director & Dispute Board Practitioner';
    }

    return {
      advisoryMode,
      primaryDeliverable,
      baseEffortDays,
      riskMitigationZar,
      recommendedTier
    };
  };

  const diagnostic = calculateDiagnostic();

  // Pillars Data
  const pillars = [
    {
      id: 'qs-cost',
      number: '01',
      icon: Scale,
      title: 'Quantity Surveying & Cost Engineering',
      subtitle: 'Precision Cost Management & Commercial Stewardship',
      description:
        'Comprehensive pre- and post-contract quantity surveying services designed to safeguard your capital investment, ensure financial transparency, and eliminate budget creep across all project phases.',
      deliverables: [
        'Elemental Feasibility Estimates & Budget Modeling',
        'Standard System Bills of Quantities (BOQ) Preparation',
        'Tender Documentation, Procurement Strategy & Adjudication',
        'Interim Payment Valuations & Certification (IPC)',
        'Variation Order (VO) Validation & Commercial Auditing',
        'Earned Value Analysis & Cost-to-Complete Forecasting',
        'Final Account Negotiation & Closeout Settlement'
      ],
      standards: 'ASAQS • Standard System 7th Edition • SANS 1200 / SANS 2001',
      roiHighlight: 'Average 4.8% to 11.2% capex reduction through rigorous value engineering & VO scrutiny.'
    },
    {
      id: 'contract-admin',
      number: '02',
      icon: Gavel,
      title: 'Contract Administration & Commercial Governance',
      subtitle: 'Rigorous JBCC, FIDIC, NEC & GCC Execution',
      description:
        'Expert guidance and proactive administration under South Africa and international standard form building contracts. We ensure all notices, instructions, and contractual mechanisms strictly comply with agreed timelines.',
      deliverables: [
        'Principal Agent (JBCC) & Employer’s Agent (FIDIC/GCC) Services',
        'Project Manager Role under NEC3 / NEC4 Engineering Contracts',
        'Contract Drafting, Special Conditions & Risk Matrix Setup',
        'Early Warning & Strict Notice Tracking Systems',
        'Contract Instruction & Variation Administration',
        'Subcontractor Procurement & Domestic / Nominated Contract Alignment',
        'Practical, Works & Final Completion Certification'
      ],
      standards: 'JBCC Edition 6.2 • FIDIC Red/Yellow 2017 • NEC4 ECC • GCC 2015',
      roiHighlight: '100% statutory and contractual notice compliance preventing time-bar forfeitures.'
    },
    {
      id: 'claims-quantum',
      number: '03',
      icon: FileCheck2,
      title: 'Construction Claims & Quantum Assessment',
      subtitle: 'Preparation, Defense & Negotiation of Complex Claims',
      description:
        'Authoritative claims consultancy for developers, employers, and contractors. We independently formulate or defend Extension of Time (EOT), disruption, prolongation cost, and loss and/or expense claims with watertight evidence.',
      deliverables: [
        'Extension of Time (EOT) Claim Preparation & Defense',
        'Prolongation Cost Quantification & Time-Related Overhead Auditing',
        'Disruption & Loss of Productivity Analysis (Measured Mile)',
        'Acceleration Costs & Mitigation Expenditure Assessments',
        'NEC Compensation Event (CE) Assessment & Quotations',
        'FIDIC Clause 20 / Clause 37 Claims Substantiation',
        'Comprehensive Quantum Registers for Dispute Resolution'
      ],
      standards: 'SCL Delay & Disruption Protocol • ASAQS Guidelines • RICS Best Practice',
      roiHighlight: 'Over R180M+ in disputed claims successfully resolved or defended without court litigation.'
    },
    {
      id: 'forensic-delay',
      number: '04',
      icon: Clock,
      title: 'Forensic Delay Analysis & Schedule Audits',
      subtitle: 'Critical Path Method (CPM) Forensic Programme Analysis',
      description:
        'State-of-the-art forensic schedule analysis using Primavera P6 and MS Project. We pinpoint root causes of project delay, measure concurrent delays, and establish true contractual entitlement under SCL protocols.',
      deliverables: [
        'Baseline Programme Integrity & Logic Health Checks',
        'Time Impact Analysis (TIA) for Contemporaneous Events',
        'Time-Slice Windows Analysis for Complex Retrospective Delays',
        'As-Planned vs. As-Built Delay Apportionment',
        'Collapsed As-Built (But-For) Forensic Modeling',
        'Concurrent Delay Analysis & Pacing Verification',
        'Recovery & Acceleration Schedule Development'
      ],
      standards: 'Society of Construction Law (SCL) 2nd Edition • AACE International RP 29R-03',
      roiHighlight: 'Unambiguous critical path evidence accepted across South African Adjudication & Arbitration tribunals.'
    },
    {
      id: 'lender-tdd',
      number: '05',
      icon: Landmark,
      title: 'Technical Due Diligence & Lender Monitoring',
      subtitle: 'Independent Risk & Drawdown Verification for Financiers',
      description:
        'Independent Technical Advisory (ITA) services for commercial banks, mezzanine financiers, development finance institutions (DFIs), and institutional property investors to protect loan security and capital disbursements.',
      deliverables: [
        'Pre-Funding Development & Design Due Diligence Audits',
        'Contractor Capability, Financial & CIDB Grading Scrutiny',
        'Monthly Progress & Drawdown Certification Verification',
        'Statutory Compliance & NHBRC / OHS Act Risk Audits',
        'Cost-to-Complete & Contingency Sufficiency Tracking',
        'Defects Liability & Practical Completion Validation',
        'Project Closeout & Final Capital Redemption Audits'
      ],
      standards: 'Bankers Association Best Practice • SACPCMP • ASAQS • SANS 10400',
      roiHighlight: 'Zero unapproved capital disbursements; guaranteed drawdown alignment with real physical site progress.'
    },
    {
      id: 'turnaround-adr',
      number: '06',
      icon: ShieldAlert,
      title: 'Project Turnaround & Dispute Resolution (ADR)',
      subtitle: 'Rescuing Distressed Sites & Alternative Dispute Resolution',
      description:
        'Specialist intervention for stalled, over-budget, or commercially deadlocked construction projects. We step in with rapid forensic assessments, dispute mitigation, and practical recovery roadmaps.',
      deliverables: [
        '48-72 Hour Distressed Project Rapid Diagnostic Audit',
        'Contractual Restructuring & Subcontractor Re-negotiation',
        'Alternative Dispute Resolution (ADR): Mediation & Adjudication',
        'Dispute Adjudication Board (DAB / DAAB) Submissions',
        'Expert Witness Statements & Quantum Expert Reports',
        'Project Re-baselining (Schedule, Budget & Scope)',
        'Contractor Termination & Replacement Transition Protocols'
      ],
      standards: 'JBCC Dispute Rules • Association of Arbitrators (Southern Africa) • CIDB ADR',
      roiHighlight: 'Average 3-4 week recovery turnaround for distressed projects facing total shutdown.'
    }
  ];

  // Contract Comparison Matrix
  const contractMatrix = {
    jbcc: {
      name: 'JBCC Principal Building Agreement (PBA 6.2 / MWA)',
      primaryUse: 'Building & Commercial Developments in Southern Africa',
      keyRole: 'Principal Agent (acts with impartiality on certifications)',
      noticePeriod: 'Strict 20 working day notice for delay events (Clause 23)',
      claimsMechanism: 'Clause 23 (Revisions to Practical Completion) & Clause 26 (Adjustment to Contract Price)',
      disputeMechanism: 'Adjudication within 10 working days, followed by Arbitration or Litigation',
      efmsAdvantage: 'Extensive track record acting as appointed Principal Agent and dispute quantum expert.'
    },
    fidic: {
      name: 'FIDIC Suite (Red, Yellow, Silver Books 1999/2017)',
      primaryUse: 'Civil Engineering, Infrastructure & International Plant Contracts',
      keyRole: 'Engineer (Red/Yellow) / Employer’s Representative (Silver)',
      noticePeriod: 'Strict 28-day notice time-bar under Clause 20.1 / Clause 20.2',
      claimsMechanism: 'Detailed claim particulars within 42 days, continuous contemporary records',
      disputeMechanism: 'Dispute Avoidance / Adjudication Board (DAAB), followed by ICC / AFSA Arbitration',
      efmsAdvantage: 'In-depth experience in delay analysis and quantum substantiation complying with FIDIC strictures.'
    },
    nec: {
      name: 'NEC3 / NEC4 Engineering and Construction Contract (ECC)',
      primaryUse: 'Complex Industrial, Energy, Mining & Mining Infrastructure',
      keyRole: 'Project Manager (collaborative early warning management)',
      noticePeriod: 'Strict 8-week time-bar for Contractor to notify Compensation Events (Clause 61.3)',
      claimsMechanism: 'Compensation Event (CE) quotations based on forecast Defined Cost + Fee',
      disputeMechanism: 'Senior Representatives negotiation -> Adjudicator -> Tribunal (Arbitration/Court)',
      efmsAdvantage: 'Pioneering early warning systems and Accepted Programme forensic updates.'
    },
    gcc: {
      name: 'GCC 2015 (General Conditions of Contract)',
      primaryUse: 'Public Sector Civil & Municipal Engineering Projects in South Africa',
      keyRole: 'Employer’s Agent / Engineer',
      noticePeriod: '28 days written notice for claims (Clause 10.1)',
      claimsMechanism: 'Comprehensive claim submission within 28 days of event cessation',
      disputeMechanism: 'Amicable settlement -> Adjudication -> Arbitration / Court proceedings',
      efmsAdvantage: 'Full alignment with CIDB guidelines and municipal PFMA reporting requirements.'
    }
  };

  // Delay Analysis Methods
  const delayMethods = [
    {
      id: 'impacted_as_planned',
      name: '1. Impacted As-Planned',
      type: 'Prospective / Theoretical',
      bestFor: 'Simple projects with few delay events occurring early in the lifecycle',
      howItWorks: 'Inserts delay events into the baseline as-planned schedule to predict hypothetical completion delay.',
      pros: 'Cost-effective, straightforward, does not require extensive as-built records.',
      cons: 'Does not reflect real project progress, changes in critical path, or actual concurrent delays.',
      tribunalScore: 'Moderate (favored only when as-built data is sparse)'
    },
    {
      id: 'time_impact_analysis',
      name: '2. Time Impact Analysis (TIA)',
      type: 'Contemporaneous / Incremental',
      bestFor: 'Active projects with regularly updated programmes and contemporary delay events',
      howItWorks: 'Steps through time chronologically. Fragnets of delay events are inserted into the accepted updated programme immediately prior to the event.',
      pros: 'High credibility, recommended by SCL Protocol for real-time delay assessments, captures dynamic critical path shifts.',
      cons: 'Requires pristine contemporary programme updates and verified logic links.',
      tribunalScore: 'Highest (Gold standard in modern adjudication & arbitration)'
    },
    {
      id: 'windows_analysis',
      name: '3. Time-Slice Windows Analysis',
      type: 'Retrospective / Dynamic',
      bestFor: 'Complex, heavily delayed projects with multiple interacting delay causes and substantial records',
      howItWorks: 'Divides the project lifecycle into discrete time windows (e.g. monthly). Examines critical path progression and actual delays in each window.',
      pros: 'Highly objective, accounts for pacing, acceleration, and true concurrency in each period.',
      cons: 'Requires comprehensive data processing and specialized forensic scheduling tools.',
      tribunalScore: 'Exceptionally High (Widely endorsed by expert witnesses and courts)'
    },
    {
      id: 'as_planned_vs_as_built',
      name: '4. As-Planned vs. As-Built',
      type: 'Retrospective / Observational',
      bestFor: 'Straightforward disputes with limited schedule updates but reliable site diaries and completion dates',
      howItWorks: 'Compares initial baseline milestones directly against actual as-built dates to calculate net variances.',
      pros: 'Intuitive to visualize, easy for non-technical stakeholders to understand.',
      cons: 'Fails to explain causation or intermediate critical path fluctuations.',
      tribunalScore: 'Moderate to Low (insufficient for complex claims without causation proof)'
    },
    {
      id: 'collapsed_as_built',
      name: '5. Collapsed As-Built (But-For)',
      type: 'Retrospective / Subtractive',
      bestFor: 'Disputes where Employer/Contractor wants to test completion date "but-for" specific delay events',
      howItWorks: 'Takes the fully detailed as-built schedule and subtracts specific delay durations to observe when the project would have finished.',
      pros: 'Demonstrates net delay caused exclusively by one party after removing their delays.',
      cons: 'Subjective when recreating as-built logic; open to manipulation if not independently validated.',
      tribunalScore: 'High when constructed with transparent, verifiable logic ties'
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: 'R180M Regional Logistics Center',
      category: 'Claims Defense & Quantum Settlement',
      challenge:
        'The main contractor submitted an Extension of Time (EOT) claim of 74 calendar days and a R14.2M prolongation cost claim citing adverse soil conditions and late design releases.',
      intervention:
        'EFMS conducted a forensic Time Impact Analysis (TIA) and detailed quantum audit, proving that 42 days were non-critical concurrent delays and that plant holding costs were inflated.',
      outcome:
        'Claim amicably settled in mediation for 22 days and R3.1M — saving the property developer over R11.1M in unjustified expenditure and eliminating protracted litigation.',
      tags: ['JBCC PBA', 'TIA Delay Analysis', 'Quantum Audit', 'Mediation']
    },
    {
      title: 'R95M Grade-A Commercial Office Fitout',
      category: 'Project Turnaround & Independent Monitoring',
      challenge:
        'The anchor tenant relocation was threatened by a 9-week cumulative site delay and subcontractor strikes, triggering daily liquidated damages of R85,000/day.',
      intervention:
        'Deployed our Turnaround Consultancy team. Re-baselined the master schedule, instituted a multi-shift 24/7 accelerated work programme, and restructured trade handover protocols.',
      outcome:
        'Recovered 38 critical days within 6 weeks, allowing partial tenant beneficial occupation on schedule with zero liquidated damages levied.',
      tags: ['Critical Path Recovery', 'Multi-Trade Coordination', 'Turnaround', 'Tenant Fitout']
    },
    {
      title: 'R240M Residential Mixed-Use Estate',
      category: 'Quantity Surveying & Final Account Reconciliation',
      challenge:
        'At 90% completion, the project faced a R18M budget overrun due to unapproved site variation instructions and disputed provisional sum adjustments.',
      intervention:
        'EFMS performed a forensic BOQ reconciliation, audited every site instruction against contractual specifications, and led structured bilateral commercial settlement sessions.',
      outcome:
        'Final account agreed and signed off with a net variance of just 1.8% over the original sanctioned budget, protecting developer equity and bank loan covenants.',
      tags: ['ASAQS BOQ', 'Variation Auditing', 'Final Account Settlement', 'Bank Monitoring']
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'What is the core difference between Construction Management and Construction Consultancy?',
      a: 'Construction Management focuses on day-to-day on-site coordination, contractor supervision, site safety, and execution oversight. Construction Consultancy provides higher-level strategic, financial, contractual, and technical advisory services — such as quantity surveying, forensic delay analysis, contractual claims formulation/defense, dispute resolution, and lender technical due diligence.'
    },
    {
      q: 'At what stage of a project should we engage EFMS Construction Consultancy?',
      a: 'While our consultants can be brought in at any stage (including distressed projects and active disputes), early involvement in the Feasibility and Tender stages yields the highest return on investment. Upfront contract drafting, risk matrix allocation, and accurate BOQ preparation prevent costly claims and delays before construction commences.'
    },
    {
      q: 'How does EFMS support clients facing formal Adjudication or Arbitration?',
      a: 'We provide end-to-end commercial and technical dispute support. Our team prepares detailed Statements of Claim or Defense, develops SCL-compliant forensic delay models, compiles comprehensive quantum registers, and can act as independent Expert Witnesses in JBCC, FIDIC, NEC, and GCC dispute proceedings.'
    },
    {
      q: 'Can EFMS act as an Independent Technical Advisor (ITA) for commercial banks and funding institutions?',
      a: 'Yes. We regularly act on behalf of commercial banks, private equity funds, and institutional financiers. We conduct initial pre-funding due diligence, review contractor capability and risk allocation, and provide monthly physical site inspections and drawdown verification certificates before loan tranches are disbursed.'
    },
    {
      q: 'How are your Construction Consultancy fees structured?',
      a: 'Depending on the assignment, we offer flexible commercial models: fixed-fee deliverables (e.g. for Feasibility Reports, BOQ preparation, or Delay Reports), monthly advisory retainers (for ongoing contract administration, Principal Agent, or lender monitoring), or hourly blended rates for specialized forensic and dispute support.'
    },
    {
      q: 'What professional registrations and credentials do your consultants hold?',
      a: 'Our consultancy team is comprised of senior professionals registered with recognized statutory bodies including the South African Council for the Project and Construction Management Professions (SACPCMP as Pr.CPM / Pr.CM), the Association of South African Quantity Surveyors (ASAQS / SACQSP as Pr.QS), the Engineering Council of South Africa (ECSA as Pr.Eng / Pr.Tech Eng), and the Association of Arbitrators (Southern Africa).'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-red-600 selection:text-white">
      {/* Standard Header */}
      <EurekaHeader currentPage="construction-consultancy" onNavigate={onNavigate}  />

      {/* Breadcrumb Bar */}
      <div className="bg-[#0b1638] border-b border-slate-800 text-xs py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-400 overflow-x-auto whitespace-nowrap">
          <button onClick={() => onNavigate?.('home')} className="hover:text-white transition-colors">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <button
            onClick={() => onNavigate?.('solutions', 'consultancy')}
            className="hover:text-white transition-colors"
          >
            Solutions (Consultancy)
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          <span className="text-red-400 font-semibold">3.1 Construction Consultancy Services</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#09132e] via-[#0b1638] to-slate-900 overflow-hidden">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Value Prop */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-300 text-xs font-bold uppercase tracking-wider mb-5">
                <Briefcase className="w-3.5 h-3.5 text-red-400" />
                <span>Specialist Consultancy • Solution 03</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-6">
                CONSTRUCTION CONSULTANCY &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">
                  COMMERCIAL ADVISORY SERVICES
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium mb-4 leading-relaxed">
                Independent Quantity Surveying, Forensic Delay Analysis, Claims Resolution, and JBCC / FIDIC / NEC Contract Governance for Developers, Financial Institutions, and Contractors.
              </p>

              <p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-2xl">
                When complex construction projects face cost overruns, critical path delays, contract disputes, or financial due diligence requirements, EFMS provides authoritative expertise to protect your commercial interests and safeguard capital returns.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#diagnostic-estimator"
                  className="px-6 py-3.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-red-900/50 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Scope &amp; Risk Diagnostic Tool</span>
                </a>
                <a
                  href="#consultancy-pillars"
                  className="px-6 py-3.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all border border-slate-700 hover:border-slate-600 flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-red-400" />
                  <span>Explore 6 Advisory Pillars</span>
                </a>
              </div>

              {/* Verified Metrics Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-black text-white">R1.8B+</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Project Capex Advised</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">94.2%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Claims Success Rate</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">Pr.CPM / QS</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">SACPCMP &amp; ASAQS</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-700/60 rounded-lg p-3">
                  <div className="text-xl sm:text-2xl font-black text-red-400">48-72h</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Rapid Mobilisation</div>
                </div>
              </div>
            </div>

            {/* Right Column: Key Commercial Protection Card */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0c1840] to-slate-900 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-2xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-white">Commercial Guardianship</h2>
                      <p className="text-xs text-slate-400">Independent Expert Oversight</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-black uppercase">
                    Active Service
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Zero Unjustified Claims or Variations</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Forensic verification of all contractor variation orders, rate build-ups, and time-related claims.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">SCL Delay Protocol Compliance</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Primavera P6 Time Impact Analysis proving causation, critical path delay, and concurrent impacts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">JBCC, FIDIC, NEC &amp; GCC Mastery</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Strict notice management preventing rights forfeiture and structuring watertight Adjudication submissions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#09132e] rounded-lg p-4 border border-slate-800 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Primary Advisory Engagements:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      'Quantity Surveying',
                      'Delay Analysis',
                      'Claims Defense',
                      'Principal Agent',
                      'Lender TDD',
                      'Dispute Mediation',
                      'Turnaround PM'
                    ].map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-medium border border-slate-700"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full py-3 rounded bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Specialist Advisory Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE CONSULTANCY DIAGNOSTIC & SCOPE ESTIMATOR */}
      {/* ========================================================================= */}
      <section id="diagnostic-estimator" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
              <SlidersHorizontal className="w-3.5 h-3.5 text-red-400" />
              <span>Interactive Diagnostic Tool</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Construction Consultancy &amp; Risk Diagnostic
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Select your primary challenge, project contract type, and capex band to generate a customized advisory intervention roadmap, deliverable scope, and risk mitigation estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Inputs (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Consulting Focus */}
              <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-5">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-400" />
                  <span>1. Primary Consultancy Requirement</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'qs_cost', title: 'Quantity Surveying & Cost Control', desc: 'BOQ, Feasibility, Variations & Final Account' },
                    { id: 'contract_admin', title: 'Contract Administration (PA)', desc: 'JBCC, FIDIC, NEC Governance & Notices' },
                    { id: 'claims_quantum', title: 'Claims Management & Defense', desc: 'EOT Claims, Prolongation Costs & Disruption' },
                    { id: 'delay_analysis', title: 'Forensic Delay Analysis (CPM)', desc: 'Time Impact Analysis & SCL Programme Audit' },
                    { id: 'lender_tdd', title: 'Lender Technical Due Diligence', desc: 'Bank Drawdowns, Audits & Monitoring' },
                    { id: 'turnaround', title: 'Distressed Project Recovery', desc: 'Turnaround, Rapid Diagnostics & Re-baselining' }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => setServiceFocus(option.id as any)}
                      className={`p-3 rounded-lg text-left transition-all border text-xs cursor-pointer ${
                        serviceFocus === option.id
                          ? 'bg-red-950/60 border-red-600 text-white ring-1 ring-red-600 shadow-sm'
                          : 'bg-slate-900/80 border-slate-700/80 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>{option.title}</span>
                        {serviceFocus === option.id && <Check className="w-3.5 h-3.5 text-red-400 shrink-0" />}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Project Stage & Contract Form */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Stage */}
                <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-5">
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-400" />
                    <span>2. Current Project Status</span>
                  </label>
                  <select
                    value={projectStage}
                    onChange={e => setProjectStage(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 font-medium focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                  >
                    <option value="feasibility">Pre-Construction / Feasibility Appraisal</option>
                    <option value="tender">Tender Stage &amp; Procurement</option>
                    <option value="active_construction">Active Construction (On Track)</option>
                    <option value="in_delay">Active Project in Delay (&gt;10% variance)</option>
                    <option value="dispute_pending">Dispute / Formal Claim Submitted</option>
                    <option value="closeout">Practical Completion &amp; Final Account Closeout</option>
                  </select>
                </div>

                {/* Contract Form */}
                <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-5">
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-red-400" />
                    <span>3. Contract Framework</span>
                  </label>
                  <select
                    value={contractType}
                    onChange={e => setContractType(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-slate-200 font-medium focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                  >
                    <option value="jbcc">JBCC Principal Building Agreement (Edition 6.2)</option>
                    <option value="fidic">FIDIC (Red / Yellow / Silver 2017)</option>
                    <option value="nec">NEC3 / NEC4 Engineering Contract (ECC)</option>
                    <option value="gcc">GCC 2015 (General Conditions of Contract)</option>
                    <option value="bespoke">Bespoke Commercial Construction Contract</option>
                  </select>
                </div>
              </div>

              {/* 3. Capex Band */}
              <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-5">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-red-400" />
                  <span>4. Estimated Project Value (Capex)</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'under_15m', label: 'Under R15M', sub: 'Light Commercial' },
                    { id: '15m_50m', label: 'R15M - R50M', sub: 'Medium Scale' },
                    { id: '50m_150m', label: 'R50M - R150M', sub: 'Major Development' },
                    { id: 'above_150m', label: 'R150M+', sub: 'Flagship / Mega' }
                  ].map(band => (
                    <button
                      key={band.id}
                      onClick={() => setCapexBand(band.id as any)}
                      className={`p-2.5 rounded text-center transition-all border text-xs cursor-pointer ${
                        capexBand === band.id
                          ? 'bg-red-950/80 border-red-500 text-white font-bold'
                          : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="text-xs">{band.label}</div>
                      <div className="text-[10px] text-slate-500">{band.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Specialized Add-on Capabilities */}
              <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-5">
                <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                  Optional Specialized Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2.5 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={includeForensicAudit}
                      onChange={e => setIncludeForensicAudit(e.target.checked)}
                      className="rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-700"
                    />
                    <span>Primavera P6 Logic Health Audit</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={includeExpertWitness}
                      onChange={e => setIncludeExpertWitness(e.target.checked)}
                      className="rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-700"
                    />
                    <span>Expert Witness Quantum Dossier</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={includeValuationAudit}
                      onChange={e => setIncludeValuationAudit(e.target.checked)}
                      className="rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-700"
                    />
                    <span>Variation &amp; Valuation Forensic Audit</span>
                  </label>
                  <label className="flex items-center gap-2.5 p-2 rounded bg-slate-900 border border-slate-800 cursor-pointer hover:border-slate-700 text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={includeAdjudicationSupport}
                      onChange={e => setIncludeAdjudicationSupport(e.target.checked)}
                      className="rounded text-red-600 focus:ring-red-500 bg-slate-800 border-slate-700"
                    />
                    <span>Adjudication Statement Submission</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Diagnostic Output (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-b from-[#0e1d4d] to-[#09132e] border-2 border-red-600/50 rounded-xl p-6 shadow-2xl sticky top-28">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-red-400">
                      Tailored Diagnostic Strategy
                    </span>
                    <h3 className="text-base font-black text-white mt-0.5">
                      {diagnostic.advisoryMode}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Key Metrics Output */}
                <div className="space-y-4 mb-6">
                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-700/80">
                    <div className="text-[10px] uppercase font-bold text-slate-400">
                      Estimated Financial Exposure Mitigation
                    </div>
                    <div className="text-xl font-black text-emerald-400 mt-0.5">
                      {diagnostic.riskMitigationZar}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      Potential direct savings via quantum substantiation &amp; dispute prevention.
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Mobilisation Speed</div>
                      <div className="text-sm font-bold text-white mt-0.5">{diagnostic.baseEffortDays}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Contract Standard</div>
                      <div className="text-sm font-bold text-red-400 uppercase mt-0.5">{contractType}</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Lead Consultant Profile</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">{diagnostic.recommendedTier}</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                      Core Strategic Deliverable:
                    </div>
                    <div className="text-xs font-semibold text-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{diagnostic.primaryDeliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="space-y-3">
                  <a
                    href="#consultancy-rfq-form"
                    className="w-full py-3.5 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-red-900/40 flex items-center justify-center gap-2"
                  >
                    <span>Proceed With This Scope Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-center text-slate-400">
                    Strict Confidentiality (NDA Guaranteed) • Free Initial 30-Min Diagnostic Call
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 CORE CONSULTANCY SERVICE PILLARS */}
      {/* ========================================================================= */}
      <section id="consultancy-pillars" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-red-400" />
              <span>Full Service Spectrum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              The 6 Pillars of Construction Consultancy
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              From pre-construction quantity surveying to high-stakes forensic delay arbitration, EFMS delivers end-to-end technical, commercial, and legal advisory support.
            </p>
          </div>

          {/* Interactive Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-[#0b1638] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-red-600/70 transition-all hover:shadow-xl hover:shadow-red-950/20 group"
                >
                  <div>
                    {/* Top Row: Icon & Pillar Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700/80 text-red-400 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-black text-slate-500 font-mono tracking-wider">
                        PILLAR {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-red-400 transition-colors mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mb-3">{pillar.subtitle}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-5">{pillar.description}</p>

                    {/* Deliverables List */}
                    <div className="border-t border-slate-800/80 pt-4 mb-5">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2.5">
                        Key Advisory Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {pillar.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span className="text-[11px]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Standards & Direct CTA */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="text-[10px] text-slate-400 font-mono mb-3 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{pillar.standards}</span>
                    </div>

                    <div className="p-2.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] text-emerald-400 font-medium mb-4">
                      💡 {pillar.roiHighlight}
                    </div>

                    <div className="flex flex-col gap-2">
                      {idx === 0 && (
                        <button
                          onClick={() => onNavigate?.('quantity-surveying')}
                          className="w-full py-2 rounded bg-red-600/20 hover:bg-red-600 border border-red-500/40 text-red-300 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Scale className="w-3.5 h-3.5" />
                          <span>View Dedicated Quantity Surveying Page</span>
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setServiceFocus(
                            idx === 0
                              ? 'qs_cost'
                              : idx === 1
                              ? 'contract_admin'
                              : idx === 2
                              ? 'claims_quantum'
                              : idx === 3
                              ? 'delay_analysis'
                              : idx === 4
                              ? 'lender_tdd'
                              : 'turnaround'
                          );
                          const el = document.getElementById('diagnostic-estimator');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full py-2.5 rounded bg-slate-800 hover:bg-red-600 text-slate-200 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Diagnose Pillar {pillar.number}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTRACT MASTERY COMPARISON MATRIX (JBCC / FIDIC / NEC / GCC) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Gavel className="w-3.5 h-3.5 text-red-400" />
              <span>Contract Administration Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Standard Form Contract Governance Matrix
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Every building contract has distinct notice deadlines, risk allocations, and dispute protocols. EFMS provides specialized administration across all four prevailing Southern African and international standards.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'jbcc', label: 'JBCC Edition 6.2 (PBA / MWA)' },
              { id: 'fidic', label: 'FIDIC (Red / Yellow / Silver)' },
              { id: 'nec', label: 'NEC3 / NEC4 (ECC Options A-F)' },
              { id: 'gcc', label: 'GCC 2015 (Civil Infrastructure)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveContractTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeContractTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-950/50'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Contract Deep Dive Card */}
          <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase text-red-400 tracking-wider">
                  Contract Standard Profile
                </span>
                <h3 className="text-xl font-black text-white mt-1">
                  {contractMatrix[activeContractTab].name}
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                {contractMatrix[activeContractTab].primaryUse}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-red-400" />
                  <span>Administrative Role</span>
                </div>
                <p className="text-xs text-slate-200 font-medium">
                  {contractMatrix[activeContractTab].keyRole}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Critical Notice Deadlines</span>
                </div>
                <p className="text-xs text-amber-300 font-medium">
                  {contractMatrix[activeContractTab].noticePeriod}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-blue-400" />
                  <span>Claims &amp; Quantum Mechanism</span>
                </div>
                <p className="text-xs text-slate-300">
                  {contractMatrix[activeContractTab].claimsMechanism}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-400" />
                  <span>Dispute Resolution Hierarchy</span>
                </div>
                <p className="text-xs text-slate-300">
                  {contractMatrix[activeContractTab].disputeMechanism}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-red-950/40 border border-red-800/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white">The EFMS Advantage</h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {contractMatrix[activeContractTab].efmsAdvantage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FORENSIC DELAY ANALYSIS METHODOLOGIES GUIDE (SCL PROTOCOL) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              <span>SCL Protocol 2nd Edition Compliant</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Forensic Delay Analysis Methodologies
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              When projects experience schedule slippage, selecting the correct delay analysis method is critical for tribunal acceptance. EFMS implements proven CPM delay methodologies under the Society of Construction Law Protocol.
            </p>
          </div>

          {/* Methods Selector Pills */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 mb-8">
            {delayMethods.map((method, idx) => (
              <button
                key={method.id}
                onClick={() => setActiveDelayMethodTab(idx)}
                className={`p-3 rounded-lg text-left transition-all border text-xs cursor-pointer ${
                  activeDelayMethodTab === idx
                    ? 'bg-red-600 border-red-500 text-white font-bold shadow-lg shadow-red-950/40'
                    : 'bg-[#0b1638] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="font-mono text-[10px] opacity-75">{method.type}</div>
                <div className="mt-1 font-bold truncate">{method.name}</div>
              </button>
            ))}
          </div>

          {/* Active Delay Detail Box */}
          {delayMethods[activeDelayMethodTab] && (
            <div className="bg-[#0b1638] border border-slate-800 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-red-400 font-bold">
                    {delayMethods[activeDelayMethodTab].type} Methodology
                  </span>
                  <h3 className="text-xl font-black text-white mt-0.5">
                    {delayMethods[activeDelayMethodTab].name}
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tribunal Acceptance: {delayMethods[activeDelayMethodTab].tribunalScore}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">
                    How it Works:
                  </div>
                  <p className="text-slate-200 leading-relaxed bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                    {delayMethods[activeDelayMethodTab].howItWorks}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-800/40">
                    <div className="text-emerald-400 font-bold mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Strengths / Advantages</span>
                    </div>
                    <p className="text-slate-300">{delayMethods[activeDelayMethodTab].pros}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-rose-950/30 border border-rose-800/40">
                    <div className="text-rose-400 font-bold mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Limitations &amp; Data Requirements</span>
                    </div>
                    <p className="text-slate-300">{delayMethods[activeDelayMethodTab].cons}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-500 shrink-0" />
                    <span><strong>Ideal Application:</strong> {delayMethods[activeDelayMethodTab].bestFor}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CASE STUDIES & QUANTIFIABLE ADVISORY OUTCOMES */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Real-World Advisory Case Studies
            </h2>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">
              Explore how our quantity surveying, forensic delay analysis, and turnaround advisory prevented multi-million rand losses across major South African construction projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
              >
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-red-400 text-[10px] font-bold uppercase tracking-wider mb-3">
                    {cs.category}
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{cs.title}</h3>

                  <div className="space-y-3 mb-6 text-xs">
                    <div>
                      <span className="font-bold text-rose-400 uppercase text-[10px] block mb-1">
                        The Challenge:
                      </span>
                      <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800/80">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-amber-400 uppercase text-[10px] block mb-1">
                        EFMS Strategic Intervention:
                      </span>
                      <p className="text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded border border-slate-800/80">
                        {cs.intervention}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-emerald-400 uppercase text-[10px] block mb-1">
                        Quantified Outcome:
                      </span>
                      <p className="text-slate-100 font-semibold leading-relaxed bg-emerald-950/40 p-3 rounded border border-emerald-800/60">
                        {cs.outcome}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONSULTANCY BRIEFING & RFQ FORM */}
      {/* ========================================================================= */}
      <section id="consultancy-rfq-form" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-[#09132e] border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0b1638] border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 border border-red-800 text-red-300 text-xs font-bold uppercase tracking-wider mb-3">
                <FileSearch className="w-3.5 h-3.5 text-red-400" />
                <span>Confidential Advisory Request</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Request a Construction Consultancy Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit project particulars for an initial confidential review by our Senior Construction Claims &amp; Quantity Surveying Directors.
              </p>
            </div>

            {rfqSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-600 text-center animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Advisory Brief Received Successfully</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                  Thank you. A Senior Pr.CPM / Pr.QS Consultant from Eureka FM will review your project parameters and contact you within 24 hours under complete confidentiality.
                </p>
                <button
                  onClick={() => setRfqSubmitted(false)}
                  className="px-6 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                >
                  Submit Another Brief
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
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David van der Merwe"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Organisation / Developer *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Growthpoint Properties"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.co.za"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 082 123 4567"
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Primary Service Focus
                    </label>
                    <select
                      defaultValue={serviceFocus}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 outline-none"
                    >
                      <option value="qs_cost">Quantity Surveying / Cost Control</option>
                      <option value="contract_admin">Contract Administration (PA)</option>
                      <option value="claims_quantum">Claims Management &amp; Defense</option>
                      <option value="delay_analysis">Forensic Delay Analysis (CPM)</option>
                      <option value="lender_tdd">Lender Due Diligence (TDD)</option>
                      <option value="turnaround">Turnaround / Recovery PM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Contract Form
                    </label>
                    <select
                      defaultValue={contractType}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 outline-none"
                    >
                      <option value="jbcc">JBCC Principal Building Agreement</option>
                      <option value="fidic">FIDIC (Red / Yellow / Silver)</option>
                      <option value="nec">NEC3 / NEC4 ECC</option>
                      <option value="gcc">GCC 2015</option>
                      <option value="bespoke">Bespoke Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Estimated Capex Band
                    </label>
                    <select
                      defaultValue={capexBand}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2.5 text-xs text-slate-200 outline-none"
                    >
                      <option value="under_15m">Under R15 Million</option>
                      <option value="15m_50m">R15M - R50 Million</option>
                      <option value="50m_150m">R50M - R150 Million</option>
                      <option value="above_150m">Above R150 Million</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Summary &amp; Key Commercial Concerns *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe the project, location, current delays, contractor claims, or specific advisory deliverables needed..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-slate-100 placeholder-slate-500 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Protected by Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xl shadow-red-900/40 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Consultancy Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-red-400" />
              <span>Advisory Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0b1638] border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-red-400 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      faqOpenIndex === idx ? 'rotate-180 text-red-400' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-slate-900/60">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOOTER */}
      {/* ========================================================================= */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
