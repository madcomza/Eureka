import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import constructionMgmtImg from '../assets/images/Construction Management.jpeg';
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
  FolderGit2,
  HardHat,
  UserCheck,
  Zap,
  FileSearch,
  ShieldAlert,
  ArrowUpRight,
  Gavel,
  FileCheck2,
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

  // UI state
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(0);
  const [activeDelayMethodTab, setActiveDelayMethodTab] = useState<number>(1);
  const [activeContractTab, setActiveContractTab] = useState<'jbcc' | 'fidic' | 'nec' | 'gcc'>('jbcc');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const togglePillar = (idx: number) => {
    setOpenPillarIndex(prev => prev === idx ? null : idx);
  };

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
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#09132e] overflow-hidden border-b border-slate-800">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="./Services Hero Section BG.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay: Darker on left, totally clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

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
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-red-900/50 flex items-center gap-2 cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Request Advisory Consultation</span>
                </button>
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
          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6 CORE CONSULTANCY SERVICE PILLARS - 2 COLUMN (ACCORDION + IMAGE) */}
      {/* ========================================================================= */}
      <section id="consultancy-pillars" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-red-600" />
              <span>Full Service Spectrum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              The 6 Pillars of Construction Consultancy
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              From pre-construction quantity surveying to high-stakes forensic delay arbitration, EFMS delivers end-to-end technical, commercial, and legal advisory support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion List (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                const isOpen = openPillarIndex === idx;

                return (
                  <div
                    key={pillar.id}
                    className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden shadow-sm ${
                      isOpen
                        ? 'border-red-600 shadow-xl ring-1 ring-red-500/20'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => togglePillar(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white'
                              : 'bg-slate-100 border border-slate-200 text-red-600'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-black text-slate-500 font-mono tracking-wider">
                              PILLAR {pillar.number}
                            </span>
                            <span className="text-[10px] text-amber-700 hidden sm:inline truncate max-w-[220px]">
                              • {pillar.standards.split('•')[0].trim()}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-extrabold transition-colors truncate ${
                              isOpen ? 'text-red-600' : 'text-slate-900'
                            }`}
                          >
                            {pillar.title}
                          </h3>
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
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4">
                            <p className="text-xs font-bold text-slate-800">
                              {pillar.subtitle}
                            </p>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {pillar.description}
                            </p>

                            {/* Deliverables List */}
                            <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200">
                              <div className="text-[10px] font-black text-slate-700 uppercase tracking-wider mb-2">
                                Key Advisory Deliverables:
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-700">
                                {pillar.deliverables.map((item, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                                    <span className="text-[11px]">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Standards and ROI Highlights */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[10px] text-slate-500 font-mono">
                              <span className="flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                <span>{pillar.standards}</span>
                              </span>
                            </div>

                            <div className="p-2.5 rounded bg-emerald-50/80 border border-emerald-200 text-[11px] text-emerald-800 font-medium">
                              💡 {pillar.roiHighlight}
                            </div>

                            {/* Action Links */}
                            <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100">
                              {idx === 0 && (
                                <button
                                  type="button"
                                  onClick={() => onNavigate?.('quantity-surveying')}
                                  className="flex-1 py-2 px-3 rounded bg-red-50 hover:bg-red-600 border border-red-200 text-red-700 hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                                >
                                  <Scale className="w-3.5 h-3.5" />
                                  <span>Quantity Surveying Overview</span>
                                </button>
                              )}
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="flex-1 py-2 px-3 rounded bg-slate-900 hover:bg-red-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                              >
                                <span>Inquire On Pillar {pillar.number}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white group">
                <img
                  src={constructionMgmtImg}
                  alt="Eureka Construction Consultancy and Professional Management Leadership on site"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Quick Key Highlights Bar */}
              <div className="bg-[#0b1638] rounded-xl p-4 border border-slate-800 shadow-sm grid grid-cols-3 gap-2 text-center">
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-white">6 Pillars</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Governance</div>
                </div>
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-red-400">R180M+</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Claims Saved</div>
                </div>
                <div>
                  <div className="text-base font-black text-emerald-400">100%</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">JBCC / FIDIC</div>
                </div>
              </div>
            </div>
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
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>SCL Protocol 2nd Edition Compliant</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Forensic Delay Analysis Methodologies
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
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
                    ? 'bg-red-600 border-red-600 text-white font-bold shadow-lg shadow-red-600/20'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="font-mono text-[10px] opacity-75">{method.type}</div>
                <div className="mt-1 font-bold truncate">{method.name}</div>
              </button>
            ))}
          </div>

          {/* Active Delay Detail Box */}
          {delayMethods[activeDelayMethodTab] && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-red-600 font-bold">
                    {delayMethods[activeDelayMethodTab].type} Methodology
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    {delayMethods[activeDelayMethodTab].name}
                  </h3>
                </div>
                <div className="px-3 py-1.5 rounded bg-white border border-slate-200 text-xs font-mono text-emerald-700 flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>Tribunal Acceptance: {delayMethods[activeDelayMethodTab].tribunalScore}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-[10px] font-black uppercase text-slate-700 tracking-wider mb-1">
                    How it Works:
                  </div>
                  <p className="text-slate-700 leading-relaxed bg-white p-3.5 rounded-lg border border-slate-200">
                    {delayMethods[activeDelayMethodTab].howItWorks}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-emerald-50/80 border border-emerald-200">
                    <div className="text-emerald-800 font-bold mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Strengths / Advantages</span>
                    </div>
                    <p className="text-slate-700">{delayMethods[activeDelayMethodTab].pros}</p>
                  </div>

                  <div className="p-4 rounded-lg bg-rose-50/80 border border-rose-200">
                    <div className="text-rose-800 font-bold mb-1.5 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>Limitations &amp; Data Requirements</span>
                    </div>
                    <p className="text-slate-700">{delayMethods[activeDelayMethodTab].cons}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-red-600 shrink-0" />
                    <span><strong>Ideal Application:</strong> {delayMethods[activeDelayMethodTab].bestFor}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f0faff] border-t border-sky-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-red-600" />
              <span>Advisory Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:text-red-600 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      faqOpenIndex === idx ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/70">
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
