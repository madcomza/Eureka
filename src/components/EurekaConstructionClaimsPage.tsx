import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  Scale,
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
  Briefcase
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaConstructionClaimsPageProps {
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
      | 'pricing'
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaConstructionClaimsPage: React.FC<EurekaConstructionClaimsPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Diagnostic Claim Calculator State
  const [contractFramework, setContractFramework] = useState<'jbcc' | 'nec4' | 'fidic' | 'gcc'>('jbcc');
  const [claimType, setClaimType] = useState<
    'eot_delay' | 'disruption_productivity' | 'prolongation_overheads' | 'variations_rate' | 'adverse_ground' | 'acceleration_mitigation'
  >('eot_delay');
  const [claimQuantumValue, setClaimQuantumValue] = useState<number>(14500000); // ZAR
  const [noticeComplianceStatus, setNoticeComplianceStatus] = useState<'compliant_notice' | 'disputed_notice' | 'no_notice_yet'>('compliant_notice');
  const [delayMethodology, setDelayMethodology] = useState<'tia' | 'windows' | 'as_planned_impacted' | 'collapsed_as_built'>('tia');
  const [partyRole, setPartyRole] = useState<'contractor_claimant' | 'employer_defense' | 'subcontractor' | 'funder_adviser'>('contractor_claimant');

  // Interactive Contract Matrix Tab
  const [activeContractTab, setActiveContractTab] = useState<'jbcc' | 'nec4' | 'fidic' | 'gcc'>('jbcc');

  // Case Study Selector
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);

  // FAQ Accordion State
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Calculated Risk & Entitlement Metrics
  const calculateEntitlementScore = () => {
    let baseScore = 65;

    // Notice compliance factor
    if (noticeComplianceStatus === 'compliant_notice') baseScore += 22;
    else if (noticeComplianceStatus === 'disputed_notice') baseScore += 5;
    else baseScore -= 28;

    // Delay methodology factor
    if (delayMethodology === 'tia') baseScore += 10;
    else if (delayMethodology === 'windows') baseScore += 8;
    else if (delayMethodology === 'as_planned_impacted') baseScore += 2;
    else baseScore += 4;

    // Contract Framework nuance
    if (contractFramework === 'nec4') {
      if (noticeComplianceStatus === 'no_notice_yet') baseScore -= 15; // Strict 8-week time bar
    } else if (contractFramework === 'jbcc') {
      if (noticeComplianceStatus === 'compliant_notice') baseScore += 3; // Clause 23.4.2 adherence
    }

    return Math.min(Math.max(baseScore, 18), 96);
  };

  const entitlementScore = calculateEntitlementScore();

  const estimatedRecoveryQuantum = (claimQuantumValue * (entitlementScore / 100)).toFixed(0);
  const potentialLdExposure = (claimQuantumValue * 0.18).toFixed(0);

  const formatZAR = (val: number | string) => {
    const num = typeof val === 'string' ? parseFloat(val) : val;
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const corePillars = [
    {
      number: '01',
      title: 'Forensic Delay & Schedule Analysis',
      subtitle: 'Critical Path Method (CPM) & SCL Protocol 2nd Edition',
      icon: Clock,
      description:
        'Comprehensive retrospective and prospective delay modeling adhering to the Society of Construction Law (SCL) Delay and Disruption Protocol. We analyze baseline programs, as-built records, and critical path migration to isolate compensable employer delays from contractor culpable delays and concurrent events.',
      deliverables: [
        'Time Impact Analysis (TIA) for live prospective claims',
        'Time-Slice / Windows Snapshot CPM delay analysis',
        'As-Planned vs. As-Built critical path comparison',
        'Collapsed As-Built ("But-For") retrospective modeling',
        'Concurrent delay identification and apportionment',
        'Program float ownership and mitigation auditing'
      ],
      standardReference: 'SCL Delay & Disruption Protocol / AACE International 29R-03',
      roiHighlight: 'Defends against unjustified Liquidated Damages (LDs) and validates legitimate Extension of Time (EOT) rights.'
    },
    {
      number: '02',
      title: 'Disruption & Lost Productivity Modeling',
      subtitle: 'Measured Mile Method & Inefficiency Quantification',
      icon: Activity,
      description:
        'Unlike pure time delays, disruption represents loss of labor and equipment productivity resulting from piecemeal instructions, design churn, out-of-sequence working, and trade stacking. We apply rigorous empirical methodologies to quantify disruption damages beyond simple anecdotal assertions.',
      deliverables: [
        'Measured Mile Analysis comparing unimpacted vs. impacted periods',
        'Earned Value Analysis (EVA) & productivity loss indices',
        'Trade congestion & out-of-sequence work impact studies',
        'Overtime fatigue & shift dilution quantum calculation',
        'Acceleration & constructive acceleration cost modeling',
        'Direct labor & plant idle-time substantiation'
      ],
      standardReference: 'AACE 25R-03 / SCL Core Principle 18 (Disruption)',
      roiHighlight: 'Recovers substantial hidden site losses that standard time-delay claims fail to capture.'
    },
    {
      number: '03',
      title: 'Quantum Formulation & Prolongation Costs',
      subtitle: 'Head Office Overheads, Prelims & Escalation Recovery',
      icon: DollarSign,
      description:
        'Translating approved time extensions into legally robust financial recovery. We substantiate on-site overheads (time-related P&Gs), dedicated supervisory plant/machinery retention, and off-site unabsorbed head office overheads using recognized legal and accounting formulas.',
      deliverables: [
        'Time-related Preliminary & General (P&G) cost audits',
        'Head Office Overhead calculation (Hudson, Emden, Eichleay formulas)',
        'Contract Price Adjustment Provisions (CPAP / Haylett) escalation audits',
        'Financing charges, interest & cashflow restriction claims',
        'Subcontractor pass-through claim adjudication & defense',
        'Loss of profit & commercial opportunity quantification'
      ],
      standardReference: 'ASAQS Cost Substantiation / Hudson & Eichleay Case Law',
      roiHighlight: 'Ensures full commercial cost recovery while preventing rejected or excessive quantum calculations.'
    },
    {
      number: '04',
      title: 'Contract Drafting, Vetting & Risk Allocation',
      subtitle: 'Special Conditions, Z-Clauses & Contract Data Review',
      icon: FileCheck2,
      description:
        'Preventing costly disputes before breaking ground. We conduct rigorous pre-tender contract risk reviews, identify onerous or uninsurable clauses, draft bespoke Particular Conditions / Z-Clauses for JBCC, NEC, FIDIC, and GCC contracts, and calibrate risk-reward allocation.',
      deliverables: [
        'Comprehensive contract risk matrix & commercial red-flag audit',
        'Drafting & negotiation of Particular Conditions / Z-Clauses',
        'Time-bar & notice clause alignment and risk mitigation',
        'Design liability, fitness for purpose, and indemnity vetting',
        'Payment terms, milestone schedules & retainage structuring',
        'Early Warning & Risk Management Protocol setup'
      ],
      standardReference: 'CIDB Best Practice / FIDIC & JBCC Advisory Rules',
      roiHighlight: 'Eliminates ambiguities and unfair risk dumping before contract execution.'
    },
    {
      number: '05',
      title: 'Employer Claims Defense & LDs Enforcement',
      subtitle: 'Auditing Contractor Claims & Protecting Project Budgets',
      icon: ShieldAlert,
      description:
        'Independent, forensic verification for Developers, Employers, Funders, and Principal Agents. We audit incoming contractor delay and quantum claims, identify contractual non-compliance, expose unproven global claims, evaluate concurrency, and defend against inflated variation rates.',
      deliverables: [
        'Contractual time-bar and notice validity audits',
        'Rebuttal of exaggerated or unsubstantiated global claims',
        'Independent concurrent delay & pacing defense',
        'Quantification and lawful enforcement of Liquidated Damages (Penalties)',
        'Variation price fixation and rate buildup cross-examination',
        'Principal Agent Determination Advisory Reports'
      ],
      standardReference: 'JBCC Clause 23 / NEC4 Clause 64 / FIDIC Clause 20',
      roiHighlight: 'Safeguards Employer capital from unsubstantiated contractor claims and cost inflation.'
    },
    {
      number: '06',
      title: 'Dispute Resolution, Adjudication & Expert Witness',
      subtitle: 'DAB / DAAB Representation, Mediation & Arbitration Support',
      icon: Gavel,
      description:
        'When commercial negotiation stalls, we provide decisive dispute advocacy. From drafting Statements of Claim and Responses for statutory or contractual Adjudication to providing independent Expert Witness testimony in Arbitration and High Court litigation.',
      deliverables: [
        'Preparation of Adjudication Referral and Response Documents',
        'Dispute Adjudication Board (DAB / DAAB) representation',
        'Mediation positioning briefs and settlement negotiation strategy',
        'Independent Expert Witness Reports on Delay, Quantum & Disruption',
        'Legal counsel technical support & cross-examination briefing',
        'Enforcement and final settlement agreement structuring'
      ],
      standardReference: 'CIDB Adjudication Guidelines / AFSA / CAASA / High Court Rules',
      roiHighlight: 'Achieves favorable, legally sound settlements without incurring multi-year court litigation costs.'
    }
  ];

  const contractFrameworksData = {
    jbcc: {
      title: 'JBCC Principal Building Agreement (Ed 6.2 & 5.0)',
      usage: 'Standard across commercial, residential, retail, and institutional building in Southern Africa',
      keyClauses: [
        {
          clause: 'Clause 23.0',
          topic: 'Revision of Date for Practical Completion',
          details:
            'Strict notice requirements: Contractor must give notice within 20 working days of becoming aware of delay (Clause 23.4.2) and submit quantified claim with supporting records within 40 working days.'
        },
        {
          clause: 'Clause 24.0',
          topic: 'Penalty for Late Completion (Liquidated Damages)',
          details:
            'Pre-agreed daily penalty rate applied when contractor fails to achieve Practical Completion by the revised date without valid approved EOT.'
        },
        {
          clause: 'Clause 17.0',
          topic: 'Contract Instructions & Variations',
          details:
            'Principal Agent instructions leading to adjustment of contract value. Valuation rules based on contract bill rates, comparable market rates, or daywork.'
        },
        {
          clause: 'Clause 30.0',
          topic: 'Dispute Resolution (Adjudication & Arbitration)',
          details:
            'Mandatory referral of disputes to Adjudication under JBCC Adjudication Rules within 10 working days of notice of dispute before progressing to Arbitration.'
        }
      ],
      riskNotes: 'Failure to submit notices within the 20-day window under JBCC 6.2 is strictly fatal to contractor entitlement.'
    },
    nec4: {
      title: 'NEC4 Engineering and Construction Contract (ECC)',
      usage: 'Widely used in heavy engineering, mining, power generation, infrastructure & Eskom/Transnet projects',
      keyClauses: [
        {
          clause: 'Clause 15.0',
          topic: 'Early Warning Notices (EWN)',
          details:
            'Proactive notification of any matter which could increase prices, delay completion, or impair performance. Early Warning Meetings recorded in Early Warning Register.'
        },
        {
          clause: 'Clause 60.1',
          topic: 'Compensation Events (CE) Core List',
          details:
            '19 specific core compensation events encompassing PM instructions, delayed site access, unforeseen physical conditions, and prevention events.'
        },
        {
          clause: 'Clause 61.3',
          topic: 'Strict 8-Week Time-Bar Notification',
          details:
            'Contractor must notify a compensation event within 8 weeks of becoming aware. If missed, the contractor is entirely time-barred with no right to price or completion adjustment.'
        },
        {
          clause: 'Clause W1/W2/W3',
          topic: 'Adjudication Dispute Reference',
          details:
            'Mandatory swift adjudication by a named adjudicator before any court or arbitration proceeding.'
        }
      ],
      riskNotes: 'NEC4 is a prospective contract requiring real-time program updates; claims cannot be submitted as historical end-of-job summaries.'
    },
    fidic: {
      title: 'FIDIC Rainbow Suite (Red, Yellow & Silver Books 1999/2017)',
      usage: 'International standard for civil engineering, industrial plants, energy, and cross-border African projects',
      keyClauses: [
        {
          clause: 'Clause 8.4 / 8.5',
          topic: 'Extension of Time for Completion',
          details:
            'Entitlement triggered by variations, exceptionally adverse climatic conditions, unforeseeable physical conditions, or employer delays.'
        },
        {
          clause: 'Clause 20.1 / 20.2',
          topic: 'Contractor Claims & Strict 28-Day Notice',
          details:
            'Contractor must give notice of claim within 28 days of awareness. Detailed claim with contemporary records submitted within 84 days (2017 Ed).'
        },
        {
          clause: 'Clause 21.0',
          topic: 'Dispute Avoidance / Adjudication Board (DAAB)',
          details:
            'Standing or ad-hoc DAAB gives binding decisions within 84 days. Notice of Dissatisfaction (NOD) required within 28 days to preserve arbitration rights.'
        },
        {
          clause: 'Clause 13.0',
          topic: 'Variations & Value Engineering',
          details:
            'Engineer powers to issue instructions and Contractor right to submit value engineering proposals sharing financial savings.'
        }
      ],
      riskNotes: 'FIDIC 2017 introduces reciprocal claim procedures holding Employers to identical 28-day notice rules as Contractors.'
    },
    gcc: {
      title: 'General Conditions of Contract for Construction Works (GCC 2015 / 2010)',
      usage: 'Dominant standard form for South African civil engineering, municipal infrastructure, roads, and SANRAL/water boards',
      keyClauses: [
        {
          clause: 'Clause 5.12',
          topic: 'Extension of Time for Practical Completion',
          details:
            'Claims for adverse weather, delayed drawings, engineer instructions, or statutory delays. Strict notice within 28 days of event.'
        },
        {
          clause: 'Clause 6.4',
          topic: 'Variation Orders & Adjustment of Contract Price',
          details:
            'Engineer evaluates variations based on Schedule of Quantities unit rates or daywork schedules with plant and labor allowances.'
        },
        {
          clause: 'Clause 10.1 - 10.3',
          topic: 'Contractor Claims for Cost & Time',
          details:
            'Formal claim submission within 28 days with comprehensive monthly contemporary records until the event ceases.'
        },
        {
          clause: 'Clause 10.5 - 10.10',
          topic: 'Amicable Settlement, Adjudication & Court/Arbitration',
          details:
            'Standing or ad-hoc Adjudication Board providing written determinations with appeal provisions.'
        }
      ],
      riskNotes: 'GCC 2015 Clause 5.12.3 requires precise weather station historical data (SAWS) to substantiate rain delay claims.'
    }
  };

  const caseStudies = [
    {
      sector: 'Heavy Industrial & Mining Facility',
      title: 'R42.5M NEC4 ECC Disputed Compensation Events & Ground Conditions',
      contract: 'NEC4 Engineering & Construction Contract (ECC) Option B',
      challenge:
        'The main contractor was facing a R42.5M loss due to encountering unexpected dolomite bedrock fissures and 14 disputed Project Manager instructions. The Employer issued an 8-week time-bar defense rejecting 90% of the claims.',
      intervention:
        'EFMS performed a forensic CPM Time Impact Analysis (TIA), reconstructed early warning register timelines, and demonstrated that the Employer had constructively waived notice periods through contemporaneous technical site minutes. We substantiated plant idling and specialist drilling re-sequencing costs.',
      outcome:
        'Negotiated a R36.8M settlement and 68-day Extension of Time prior to Adjudication hearing, saving both parties over 14 months of formal legal proceedings.',
      statHighlight: '86.5% Quantum Recovery • Zero Litigation Costs'
    },
    {
      sector: 'Commercial High-Rise Development',
      title: 'R19.8M JBCC 6.2 Delay & Liquidated Damages Defense',
      contract: 'JBCC Principal Building Agreement Edition 6.2',
      challenge:
        'The Employer attempted to deduct R11.2M in Liquidated Damages (Penalties) following a 110-day handover delay, alleging poor contractor site management and subcontractor defaults.',
      intervention:
        'EFMS acted on behalf of the Principal Contractor, conducting a retrospective Windows Delay Analysis. We proved that 84 days of critical path delay were directly caused by late structural engineering revisions, facade redesigns, and municipal electrical energization holdups, with only 12 days of contractor concurrency.',
      outcome:
        'Secured an approved 84-day EOT, fully expunging the R11.2M LD threat and recovering R8.6M in proven time-related Preliminary & General (P&G) prolongation costs.',
      statHighlight: '100% LDs Cancelled • R8.6M Prolongation Awarded'
    },
    {
      sector: 'Renewable Energy Solar PV Infrastructure',
      title: 'R64.0M FIDIC Yellow Book Grid Connection & Force Majeure Dispute',
      contract: 'FIDIC Yellow Book (Plant & Design-Build)',
      challenge:
        'An international EPC contractor suffered severe shipping port strikes and utility substation transmission line delays, resulting in commercial off-taker delay liquidated damages threats of R350,000 per day.',
      intervention:
        'EFMS drafted a comprehensive FIDIC Clause 20.1 & Clause 19 Force Majeure claim dossier, deploying Earned Value Productivity Modeling to quantify acceleration measures undertaken to bring grid synchronization forward.',
      outcome:
        'DAAB (Dispute Adjudication Board) issued a unanimous determination upholding 100% of the force majeure time extension and awarding R48.2M in acceleration and standby plant costs.',
      statHighlight: 'Unanimous DAAB Determination • Full Tariff Protection'
    }
  ];

  const faqs = [
    {
      question: 'What is the fundamental difference between a Delay Claim and a Disruption Claim?',
      answer:
        'A Delay Claim (Extension of Time / EOT) focuses on critical path events that postpone the project completion date, protecting the contractor from Liquidated Damages and enabling the recovery of time-related Preliminary & General (P&G) prolongation costs. A Disruption Claim focuses on loss of productivity and work inefficiency on specific activities (whether on the critical path or not), caused by trade stacking, out-of-sequence instructions, or continuous design revisions. Disruption seeks financial compensation for wasted labor and plant hours regardless of whether overall completion was delayed.'
    },
    {
      question: 'How critical are time-bar clauses under JBCC 6.2 and NEC4?',
      answer:
        'Time-bar provisions in modern standard form contracts are strictly enforced by South African courts and international arbitration tribunals. Under JBCC 6.2 Clause 23.4.2, failing to give notice within 20 working days forfeits the claim entirely. Under NEC4 Clause 61.3, an 8-week notification failure is an absolute bar. EFMS provides emergency notice compliance strategies, waiver auditing, and contemporaneous record reconstruction to rescue or defend time-barred positions.'
    },
    {
      question: 'Which forensic delay analysis methodology does EFMS use?',
      answer:
        'We adhere strictly to the Society of Construction Law (SCL) Delay and Disruption Protocol (2nd Edition) and AACE International Recommended Practice 29R-03. We deploy Time Impact Analysis (TIA) for live prospective delays, Time-Slice / Windows Analysis for complex retrospective disputes, and Collapsed As-Built ("But-For") analysis where as-built records are robust. We never rely on simplistic, discredited "net delay" or static "as-planned vs as-built" bar chart comparisons.'
    },
    {
      question: 'How do you calculate and substantiate Head Office Overheads (HOOH)?',
      answer:
        'Unabsorbed head office overheads arise when a project is delayed, preventing management and administrative resources from being deployed to new revenue-generating projects. We utilize standard legal formulas recognized in South African and Commonwealth jurisprudence, primarily the Hudson Formula, Emden Formula, and Eichleay Formula, backed by verified audited company financial statements and certified turnover data.'
    },
    {
      question: 'Do you represent both Contractors and Employers / Developers?',
      answer:
        'Yes. Our multi-disciplinary team of Pr. CPMs, Quantity Surveyors, and Contract Specialists brings balanced insight from both sides of the table. For Contractors, we prepare watertight, empirical claim dossiers. For Employers, Developers, and Lenders, we conduct rigorous forensic defense audits, rejecting inflated global claims and enforcing legitimate contract mechanisms.'
    },
    {
      question: 'What is the role of an Adjudicator versus an Arbitrator in construction disputes?',
      answer:
        'Adjudication is a rapid, cost-effective interim dispute resolution mechanism (typically completed within 28 to 45 days) designed to maintain project cash flow. The Adjudicator’s decision is immediately binding and enforceable unless overturned in Arbitration. Arbitration is a formal, private judicial trial resulting in a final, non-appealable award enforceable internationally under the New York Convention. EFMS prepares referral documents, expert reports, and represents clients at both stages.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030813] text-slate-100 font-sans antialiased">
      {/* Top Header / Nav Bar */}
      <EurekaHeader currentPage="construction-claims" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#060e20] via-[#09132e] to-[#030813] border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
                <Scale className="w-3.5 h-3.5 text-red-400" />
                <span>CONSULTANCY SOLUTIONS &bull; PILLAR 03</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Construction Claims &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-300">
                  Contract Consultancy Services
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Expert contractual claims preparation, forensic delay analysis (SCL Protocol), quantum substantiation, dispute adjudication defense, and contract administration across <strong className="text-white">JBCC 6.2, NEC4, FIDIC, and GCC 2015</strong> standard form contracts.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-xl font-black text-white">R450M+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Claims Resolved &amp; Audited</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-xl font-black text-red-400">98.4%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Pre-Litigation Settlement</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-xl font-black text-white">SCL 2nd Ed</div>
                  <div className="text-[11px] text-slate-400 font-medium">Forensic Protocol Rigor</div>
                </div>
                <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-3">
                  <div className="text-xl font-black text-amber-400">Pr. CPM</div>
                  <div className="text-[11px] text-slate-400 font-medium">Registered Lead Experts</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('claim-diagnostic-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-red-600/30 flex items-center gap-2 cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Launch Claims Analyzer</span>
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('contract-matrix');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-red-400" />
                  <span>View Contract Matrix</span>
                </button>
              </div>
            </div>

            {/* Right Card / Interactive Preview */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#0c1833] to-[#060e20] border border-slate-700/80 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Contractual Triage Engine
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold">
                    ACTIVE TRIAGE
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400">Primary Standard Form:</span>
                    <span className="font-bold text-white uppercase">{contractFramework.toUpperCase()} Principal Contract</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400">Claim Entitlement Score:</span>
                    <span className="font-mono font-black text-red-400 text-sm">{entitlementScore}% Viability</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400">Delay Methodology:</span>
                    <span className="font-bold text-slate-200">Time Impact Analysis (TIA)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-900/90 border border-slate-800">
                    <span className="text-slate-400">Quantum Recovery Index:</span>
                    <span className="font-mono font-bold text-emerald-400">{formatZAR(estimatedRecoveryQuantum)}</span>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded bg-red-950/40 border border-red-500/30 text-[11px] text-red-200 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong>Critical Notice Window:</strong> Over 70% of valid construction claims in SA fail solely due to non-compliance with strict 20-day (JBCC) or 8-week (NEC4) time bars.
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById('claim-diagnostic-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-4 py-2.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Customize Analysis Parameters</span>
                  <ChevronRight className="w-3.5 h-3.5 text-red-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Claims & Entitlement Diagnostic Calculator */}
      <section id="claim-diagnostic-calculator" className="py-16 bg-[#040a17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              INTERACTIVE FEASIBILITY &amp; RISK SIMULATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Claims Entitlement &amp; Quantum Risk Diagnostic
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Evaluate contractual notice validity, delay methodology strength, and quantum recovery potential under standard South African and international conditions of contract.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Input Form Column */}
            <div className="lg:col-span-7 bg-[#081226] border border-slate-800 rounded-xl p-6 space-y-6">
              {/* Party Representation */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  1. Advisory Role &amp; Client Position
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'contractor_claimant', label: 'Main Contractor', desc: 'Claim Preparation' },
                    { id: 'employer_defense', label: 'Employer / Client', desc: 'Claims Defense / LDs' },
                    { id: 'subcontractor', label: 'Subcontractor', desc: 'Pass-Through Claim' },
                    { id: 'funder_adviser', label: 'Funder / Lender', desc: 'Quantum Exposure Audit' }
                  ].map((role) => (
                    <button
                      key={role.id}
                      onClick={() => setPartyRole(role.id as any)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                        partyRole === role.id
                          ? 'bg-red-950/70 border-red-500 text-white shadow-sm'
                          : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{role.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{role.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Standard Form of Contract */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  2. Standard Form of Contract Framework
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'jbcc', label: 'JBCC 6.2 / 5.0', desc: 'Clause 23 & 24 EOT' },
                    { id: 'nec4', label: 'NEC4 / NEC3 ECC', desc: 'Clause 60-65 CEs' },
                    { id: 'fidic', label: 'FIDIC Red/Yellow', desc: 'Clause 8.4 & 20.1' },
                    { id: 'gcc', label: 'GCC 2015 / 2010', desc: 'Clause 5.12 & 10' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setContractFramework(item.id as any)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                        contractFramework === item.id
                          ? 'bg-red-950/70 border-red-500 text-white shadow-sm'
                          : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Claim Nature */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  3. Nature of Primary Dispute / Claim Event
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'eot_delay', label: 'EOT & Critical Delay', desc: 'Schedule Extension' },
                    { id: 'disruption_productivity', label: 'Disruption & Inefficiency', desc: 'Measured Mile Loss' },
                    { id: 'prolongation_overheads', label: 'Prolongation & Prelims', desc: 'Site & Head Office' },
                    { id: 'variations_rate', label: 'Disputed Variations', desc: 'Rate Fixation' },
                    { id: 'adverse_ground', label: 'Adverse Ground Conditions', desc: 'Latent Physical Site' },
                    { id: 'acceleration_mitigation', label: 'Acceleration & Mitigation', desc: 'Constructive Hurrying' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setClaimType(type.id as any)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                        claimType === type.id
                          ? 'bg-red-950/70 border-red-500 text-white shadow-sm'
                          : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{type.label}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Claim Quantum Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    4. Disputed Claim Quantum / Value (ZAR)
                  </label>
                  <span className="text-sm font-mono font-bold text-red-400">
                    {formatZAR(claimQuantumValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min={1000000}
                  max={80000000}
                  step={500000}
                  value={claimQuantumValue}
                  onChange={(e) => setClaimQuantumValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>R1.0M</span>
                  <span>R20M</span>
                  <span>R40M</span>
                  <span>R60M</span>
                  <span>R80M+</span>
                </div>
              </div>

              {/* Notice Compliance Status */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  5. Contractual Notice &amp; Time-Bar Status
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    { id: 'compliant_notice', label: 'Notice Served In Time', badge: 'High Strength', color: 'text-emerald-400' },
                    { id: 'disputed_notice', label: 'Notice Disputed / Late', badge: 'Waiver Defense Needed', color: 'text-amber-400' },
                    { id: 'no_notice_yet', label: 'No Notice Yet Submitted', badge: 'Urgent Action Required', color: 'text-red-400' }
                  ].map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setNoticeComplianceStatus(status.id as any)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                        noticeComplianceStatus === status.id
                          ? 'bg-red-950/70 border-red-500 text-white'
                          : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{status.label}</div>
                      <div className={`text-[10px] font-semibold mt-0.5 ${status.color}`}>{status.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delay Analysis Methodology */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  6. Recommended Forensic Delay Methodology
                </label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { id: 'tia', name: 'Time Impact Analysis (TIA)', desc: 'Prospective SCL Preferred Method' },
                    { id: 'windows', name: 'Time-Slice / Windows Analysis', desc: 'Retrospective Dynamic CPM' },
                    { id: 'as_planned_impacted', name: 'Impacted As-Planned', desc: 'Simpler Baseline Modeling' },
                    { id: 'collapsed_as_built', name: 'Collapsed As-Built ("But-For")', desc: 'Historical Exclusions' }
                  ].map((meth) => (
                    <button
                      key={meth.id}
                      onClick={() => setDelayMethodology(meth.id as any)}
                      className={`p-2.5 rounded text-left border transition-all cursor-pointer ${
                        delayMethodology === meth.id
                          ? 'bg-red-950/70 border-red-500 text-white'
                          : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{meth.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{meth.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Analysis Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-gradient-to-br from-[#0c1833] via-[#081226] to-[#040a17] border-2 border-red-500/40 rounded-xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-red-500" />
                    <h3 className="font-extrabold text-sm text-white uppercase tracking-wider">
                      Forensic Entitlement Assessment
                    </h3>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-red-900/60 border border-red-500/40 text-red-300 font-mono font-bold">
                    SCL 2nd ED AUDIT
                  </span>
                </div>

                {/* Score Dial */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-300">Entitlement Strength Index:</span>
                    <span
                      className={`text-lg font-black font-mono ${
                        entitlementScore >= 75 ? 'text-emerald-400' : entitlementScore >= 50 ? 'text-amber-400' : 'text-red-400'
                      }`}
                    >
                      {entitlementScore}% Viability
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        entitlementScore >= 75
                          ? 'bg-emerald-500'
                          : entitlementScore >= 50
                          ? 'bg-amber-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${entitlementScore}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Weak (0-40%)</span>
                    <span>Moderate (41-70%)</span>
                    <span>Robust (71-100%)</span>
                  </div>
                </div>

                {/* Quantum Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Claim Total Submitted:</span>
                    <span className="font-mono font-bold text-white">{formatZAR(claimQuantumValue)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Forensic Recovery Potential:</span>
                    <span className="font-mono font-bold text-emerald-400">{formatZAR(estimatedRecoveryQuantum)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Potential LDs Risk Exposure:</span>
                    <span className="font-mono font-bold text-red-400">{formatZAR(potentialLdExposure)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2.5 rounded bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400">Procedural Dispute Escalation:</span>
                    <span className="font-bold text-slate-200">
                      {contractFramework === 'jbcc'
                        ? 'Clause 30 Adjudication'
                        : contractFramework === 'nec4'
                        ? 'Option W2 Adjudication'
                        : contractFramework === 'fidic'
                        ? 'Clause 21 DAAB Referral'
                        : 'GCC Clause 10.5 Adjudication'}
                    </span>
                  </div>
                </div>

                {/* Strategic Recommendations */}
                <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-4 mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                    <span>EFMS Strategic Action Plan:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span>
                        {noticeComplianceStatus === 'compliant_notice'
                          ? 'Audit contemporary daily site logs, weather records, and engineer instructions to support the full quantum.'
                          : noticeComplianceStatus === 'disputed_notice'
                          ? 'Construct an equitable waiver / estoppel argument demonstrating employer awareness and lack of prejudice.'
                          : 'Issue an immediate emergency formal notice preserving secondary entitlement under variation mechanisms.'}
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span>
                        Deploy {delayMethodology === 'tia' ? 'Time Impact Analysis (TIA)' : 'Windows Analysis'} on native Primavera P6 / MS Project schedules to demonstrate unassailable critical path impact.
                      </span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">&bull;</span>
                      <span>
                        Substantiate time-related P&amp;Gs and off-site overheads using audited Hudson/Eichleay formula calculations.
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full py-3 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Request Full Forensic Claim Audit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core 6 Pillars of Claims & Contract Consultancy */}
      <section className="py-20 bg-[#030813] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              END-TO-END COMMERCIAL &amp; CLAIMS CAPABILITIES
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Six Core Pillars of Construction Contract Advisory
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              From pre-award contract risk auditing to statutory dispute adjudication and high-court expert witness representation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#081226] border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-red-500/60 transition-all hover:shadow-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-bl-full pointer-events-none group-hover:bg-red-600/10 transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-400 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-red-400/40 transition-colors">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-3">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    <div className="border-t border-slate-800/80 pt-3 mb-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Service Deliverables:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {pillar.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-2">
                    <div className="text-[10px] text-slate-400 font-mono mb-2">
                      <strong>Standard:</strong> {pillar.standardReference}
                    </div>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-red-200">
                      💡 {pillar.roiHighlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standard Form Contract Matrix & Clause Comparison */}
      <section id="contract-matrix" className="py-20 bg-[#060e20] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              CONTRACTUAL PROVISIONS MATRIX
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Standard Forms of Contract Comparison
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Comprehensive analysis of notice periods, time bars, compensation mechanisms, and dispute escalation across the four primary conditions used in Southern Africa.
            </p>
          </div>

          {/* Framework Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'jbcc', label: 'JBCC 6.2 / 5.0 (Building)' },
              { id: 'nec4', label: 'NEC4 ECC (Engineering)' },
              { id: 'fidic', label: 'FIDIC Rainbow (International)' },
              { id: 'gcc', label: 'GCC 2015 (Civil Infrastructure)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveContractTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeContractTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Contract Details */}
          <div className="bg-[#081226] border border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">
                  {contractFrameworksData[activeContractTab].title}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  <strong>Industry Application:</strong> {contractFrameworksData[activeContractTab].usage}
                </p>
              </div>
              <div className="p-2.5 rounded bg-red-950/60 border border-red-500/30 text-xs text-red-200 font-semibold max-w-md">
                ⚠️ {contractFrameworksData[activeContractTab].riskNotes}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contractFrameworksData[activeContractTab].keyClauses.map((item, idx) => (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-red-600/20 border border-red-500/30 text-red-400 font-mono font-bold text-xs">
                      {item.clause}
                    </span>
                    <span className="text-xs font-bold text-slate-300">{item.topic}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Claims Management & Dispute Escalation Lifecycle */}
      <section className="py-20 bg-[#030813] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              STRUCTURED ADVISORY ROADMAP
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              The 6-Step Claims &amp; Dispute Resolution Process
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Our proven methodological workflow ensures no contractual deadlines are missed and every claim is built on unshakeable empirical grounds.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 'STEP 01',
                title: 'Contractual Notice & Time-Bar Preservation',
                desc: 'Immediate audit of the delaying event, review of applicable notice clauses (JBCC 23.4.2 / NEC4 61.3 / FIDIC 20.1), and drafting of formal compliant notices to safeguard entitlement.',
                badge: 'Days 1 - 7'
              },
              {
                step: 'STEP 02',
                title: 'Forensic Schedule & Critical Path Modeling',
                desc: 'Extracting baseline P6 / MS Project schedules, auditing contemporaneous update records, and running Time Impact Analysis (TIA) to isolate critical path delay from concurrent non-compensable float.',
                badge: 'Days 8 - 21'
              },
              {
                step: 'STEP 03',
                title: 'Quantum Evaluation & Cost Substantiation',
                desc: 'Auditing actual on-site P&G costs, supervisory retainers, plant idling logbooks, and calculating unabsorbed head office overheads via Hudson/Eichleay formula with CPAP escalation.',
                badge: 'Days 22 - 35'
              },
              {
                step: 'STEP 04',
                title: 'Full Claim / Defense Narrative Dossier',
                desc: 'Compiling a structured, legally robust Claim Document featuring executive summary, contractual liability basis, schedule impact demonstration, and audited financial evidence annexures.',
                badge: 'Days 36 - 45'
              },
              {
                step: 'STEP 05',
                title: 'Commercial Negotiation & Mediation Strategy',
                desc: 'Facilitating structured commercial round-table negotiations between principals, presenting visual delay graphics, and conducting principled mediation to secure settlement.',
                badge: 'Commercial Close'
              },
              {
                step: 'STEP 06',
                title: 'Adjudication Referral & Expert Witness Support',
                desc: 'Drafting Statements of Claim / Defense for statutory Adjudication under CIDB/JBCC/FIDIC rules, presenting oral evidence, and acting as independent Expert Witness in Arbitration.',
                badge: 'Binding Award'
              }
            ].map((st, sIdx) => (
              <div
                key={sIdx}
                className="bg-[#081226] border border-slate-800 rounded-xl p-6 hover:border-red-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-red-500">{st.step}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {st.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Case Studies / Resolution Scenarios */}
      <section className="py-20 bg-[#060e20] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              PROVEN TRACK RECORD &amp; IMPACT
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Case Studies &amp; Dispute Resolutions
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Representative examples of successful claims preparation, defense, and dispute resolution across major sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {caseStudies.map((cs, cIdx) => (
              <button
                key={cIdx}
                onClick={() => setSelectedCaseIndex(cIdx)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCaseIndex === cIdx
                    ? 'bg-[#0a1838] border-red-500 shadow-xl'
                    : 'bg-[#081226] border-slate-800 hover:border-slate-700'
                }`}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
                  {cs.sector}
                </span>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {cs.title}
                </h3>
                <div className="text-[11px] text-slate-400 font-mono">
                  {cs.contract}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs font-bold text-emerald-400">
                  ★ {cs.statHighlight}
                </div>
              </button>
            ))}
          </div>

          {/* Selected Case Study Full Breakdown */}
          <div className="bg-[#081226] border border-slate-800 rounded-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8 space-y-4">
                <div className="inline-block text-[11px] font-bold text-red-400 bg-red-950/60 border border-red-500/30 px-3 py-1 rounded">
                  CASE STUDY #{selectedCaseIndex + 1} &bull; {caseStudies[selectedCaseIndex].sector.toUpperCase()}
                </div>
                <h3 className="text-xl font-black text-white">
                  {caseStudies[selectedCaseIndex].title}
                </h3>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800">
                    <strong className="text-white block mb-1">The Dispute Challenge:</strong>
                    {caseStudies[selectedCaseIndex].challenge}
                  </div>
                  <div className="bg-slate-900/80 p-3.5 rounded border border-slate-800">
                    <strong className="text-red-400 block mb-1">EFMS Forensic Intervention:</strong>
                    {caseStudies[selectedCaseIndex].intervention}
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-lg p-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Outcome
                  </span>
                  <div className="text-sm font-semibold text-slate-200 leading-relaxed mb-4">
                    {caseStudies[selectedCaseIndex].outcome}
                  </div>
                </div>
                <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-300 font-mono font-bold">
                  ✓ {caseStudies[selectedCaseIndex].statHighlight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-[#030813] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              EXPERT ANSWERS
            </span>
            <h2 className="text-3xl font-black text-white mt-1">
              Frequently Asked Contract &amp; Claims Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Clear contractual guidance on time-bars, forensic delay protocols, and commercial dispute resolution.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#081226] border border-slate-800 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === fIdx ? null : fIdx)}
                  className="w-full text-left p-5 flex items-center justify-between text-sm font-bold text-white hover:text-red-400 cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-red-500 shrink-0 transition-transform ${
                      expandedFaq === fIdx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === fIdx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Consultation Intake */}
      <section className="py-20 bg-gradient-to-t from-[#060e20] to-[#030813]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0c1833] via-[#09132e] to-[#040a17] border-2 border-red-500/50 rounded-2xl p-8 sm:p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-red-500 text-xs font-black uppercase tracking-widest">
              CONFIDENTIAL CONTRACTUAL REVIEW
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white mt-2 mb-4">
              Facing a Disputed Claim or Delayed Handover?
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8">
              Speak with our registered Pr. CPM and claims specialists. We will review your notices, contract data, and schedules under a strict Non-Disclosure Agreement (NDA) to establish an unassailable commercial strategy.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-8 py-3.5 rounded-md bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-red-600/30 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Confidential Claims Assessment</span>
              </button>
              <button
                onClick={() => onOpenCode?.('html')}
                className="px-8 py-3.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span>View Elementor Pro Export</span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Pr. CPM &amp; PMP Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Strict NDA Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>SCL 2nd Ed Protocol Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
