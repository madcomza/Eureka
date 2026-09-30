import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import freelancePmImg from '../assets/images/Freelance Project Management.jpeg';
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
  RotateCcw,
  CheckSquare,
  FileSearch,
  Flame,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaFreelancePmPageProps {
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

export const EurekaFreelancePmPage: React.FC<EurekaFreelancePmPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // UI state
  const [openModelIndex, setOpenModelIndex] = useState<number | null>(0);
  const [activeScenarioTab, setActiveScenarioTab] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const toggleModel = (idx: number) => {
    setOpenModelIndex(prev => prev === idx ? null : idx);
  };

  // 6 Freelance & Interim Delivery Models
  const freelanceModels = [
    {
      id: 'interim-lead',
      title: 'Interim Senior Project Manager / Director',
      tagline: 'Bridging Leadership Gaps with Zero HR Overhead',
      badge: 'POPULAR FOR DEVELOPERS',
      icon: UserCheck,
      description:
        'Immediate, seasoned Principal Project Manager (Pr.CPM) deployment to step into vacant or newly formed project leadership positions. Ideal for sudden resignations, maternity/sabbatical leave cover, or rapid project start-ups.',
      bestFor: 'Property developers, institutional funds, and corporate real estate heads needing dependable leadership without long-term employment commitments.',
      deliverables: [
        'End-to-end site governance & contractor leadership',
        'Weekly client executive reporting & financial dashboard',
        'Multi-disciplinary consultant management (Arch, Eng, QS)',
        'Principal Agent administration under JBCC 2018 / FIDIC',
        'Seamless handover back to permanent hires when recruited'
      ],
      turnaround: '48 to 72 Hours Deployment'
    },
    {
      id: 'distressed-turnaround',
      title: 'Distressed Project Recovery & Turnaround',
      tagline: 'Emergency Intervention for Delayed or Over-Budget Sites',
      badge: 'URGENT RESCUE MISSION',
      icon: Flame,
      description:
        'Targeted crisis management for construction projects experiencing severe programme slippage, contractor disputes, variation cost blowouts, or quality failures. We identify critical bottlenecks, re-sequence the critical path, and restore momentum.',
      bestFor: 'Lenders, commercial developers, and asset owners with struggling sites at risk of liquidated damages or financial distress.',
      deliverables: [
        'Forensic schedule delay analysis & Critical Path recovery plan',
        'Subcontractor productivity audit & bottleneck elimination',
        'Variation Order (VO) forensic audit & claims negotiation',
        'Contractor default notices & accelerated remediation strategy',
        'Emergency daily site stand-up governance'
      ],
      turnaround: '24 to 48 Hours Urgent Mobilisation'
    },
    {
      id: 'fractional-pm',
      title: 'Fractional / Part-Time Project Management',
      tagline: 'Senior Pr.CPM Expertise on a Flexible 2-3 Day Schedule',
      badge: 'COST-OPTIMIZED',
      icon: PieChart,
      description:
        'Access senior-level project direction without the burden of a 5-day on-site salary. Ideal for medium-scale developments, tenant fit-outs, or portfolio rollouts that require strategic guidance, critical milestone sign-offs, and risk governance.',
      bestFor: 'SMME developers, family offices, retail chains, and private property investors managing projects between R5M and R60M.',
      deliverables: [
        '2 to 3 days weekly dedicated hybrid on-site & remote governance',
        'Chairing bi-weekly site progress & technical coordination meetings',
        'Interim Payment Certificate (IPC) validation before disbursement',
        'Independent risk register updates & early warning notices',
        'Direct advisory line to property developer principals'
      ],
      turnaround: '3 to 5 Business Days'
    },
    {
      id: 'surge-capacity',
      title: 'Surge Capacity for Main Contractors & EPCs',
      tagline: 'Flexible Project Management Muscle for Project Spikes',
      badge: 'FOR PRINCIPAL CONTRACTORS',
      icon: Zap,
      description:
        'Equipping Tier 1 and Tier 2 building contractors with temporary, high-calibre project management capacity during peak construction phases, multiple concurrent site awards, or complex structural milestones.',
      bestFor: 'General contractors, design-build firms, and EPC contractors experiencing rapid scaling or project overlapping.',
      deliverables: [
        'Site-based package management (Structural, Facades, MEP)',
        'Subcontractor daily coordination, ITP tracking & look-aheads',
        'Primavera P6 progress updating & critical path variance alerts',
        'OHS & statutory compliance enforcement on site',
        'Contractual notice drafting (EOT claims, variation claims)'
      ],
      turnaround: '48 to 72 Hours'
    },
    {
      id: 'client-rep-audit',
      title: 'Independent Client-Side QA & Payment Auditor',
      tagline: 'Unbiased Eyes & Ears Protecting Developer Capital',
      badge: 'INVESTOR PROTECTION',
      icon: FileSearch,
      description:
        'A dedicated, independent third-party project auditor representing the property owner, bank, or private equity fund to verify work done on site before any contractor payment certificates are approved and funds released.',
      bestFor: 'Offshore property investors, development banks, and corporate boards wanting unbiased verification without contractor bias.',
      deliverables: [
        'Milestone inspection audits & photographic progress logging',
        'Quantity surveyor payment certificate (IPC) line-by-line verification',
        'SANS 10400 & technical specification compliance spot-checks',
        'Defects snagging & early warning identification',
        'Executive board summary dashboard with true project health metrics'
      ],
      turnaround: '48 Hours'
    },
    {
      id: 'precon-tender',
      title: 'Pre-Construction & Procurement Specialist',
      tagline: 'Setting Projects Up for Guaranteed Success Before Groundbreak',
      badge: 'EARLY PHASE IMPACT',
      icon: ClipboardList,
      description:
        'Specialist freelance leadership focused strictly on PROCSA Stages 1 to 4: structuring tender packages, vetting contractor CIDB capabilities, negotiating JBCC/FIDIC terms, and locking down elemental budgets before construction commences.',
      bestFor: 'Developers preparing to tender who want competitive pricing, rock-solid contract clauses, and zero scope loopholes.',
      deliverables: [
        'Tender document compilation & Employer specifications',
        'Contractor pre-qualification, financial & technical adjudication',
        'Negotiation of contract conditions, guarantees & retention terms',
        'Master pre-construction milestone schedule setup',
        'Smooth transition briefing to the construction team'
      ],
      turnaround: '3 to 5 Business Days'
    }
  ];

  // 8 Pillars of Eureka Freelance PM Execution
  const executionPillars = [
    {
      num: '01',
      title: 'Instant 48h Mobilisation',
      desc: 'No 4-week recruitment notice periods or lengthy HR onboarding. Our registered Pr.CPMs hit the ground running with established toolkits.',
      icon: Zap
    },
    {
      num: '02',
      title: 'Contractual Armor (JBCC/FIDIC/NEC)',
      desc: 'Expert contract administration that enforces strict notice timelines, prevents default claims, and neutralizes contractor delay tactics.',
      icon: Scale
    },
    {
      num: '03',
      title: 'Critical Path & Schedule Re-Engineering',
      desc: 'Leveraging Primavera P6 and MS Project to monitor real-time baseline progress, identify float erosion, and execute early delay recovery.',
      icon: Clock
    },
    {
      num: '04',
      title: 'Variation Order (VO) Shielding',
      desc: 'Every contractor claim is rigorously audited against tender scopes, architectural revisions, and causation before a single Rand is approved.',
      icon: ShieldCheck
    },
    {
      num: '05',
      title: 'Multi-Disciplinary Team Harmony',
      desc: 'Directing architects, structural engineers, wet services, MEP, and quantity surveyors to eliminate 3D clashes and information delays.',
      icon: Users
    },
    {
      num: '06',
      title: 'Zero-Defect Quality & ITP Governance',
      desc: 'Enforcing strict Inspection & Test Plans (ITP), concrete slump tests, facade waterproofing sign-offs, and cloud-based digital snagging.',
      icon: Award
    },
    {
      num: '07',
      title: 'Earned Value Management (EVM) Dashboards',
      desc: 'Crystal-clear weekly reporting combining Planned Value (PV), Earned Value (EV), and Actual Cost (AC) for transparent investor visibility.',
      icon: BarChart3
    },
    {
      num: '08',
      title: 'Clean Handover & Asset Commissioning',
      desc: 'Guiding projects through statutory Occupational Certificate approvals, SANS 10400 compliance, O&M manuals, and prompt final account settlement.',
      icon: BadgeCheck
    }
  ];

  // Engagement Scenarios / Case Studies
  const engagementScenarios = [
    {
      title: 'Waterfall Logistics Park — 9-Week Delay Recovered in 24 Days',
      sector: 'Industrial Logistics & Warehousing',
      problem: 'A R145M distribution warehouse was 9 weeks behind schedule due to structural steel fabrication delays and contractor-subcontractor disputes, facing massive liquidated damages.',
      solution: 'Eureka deployed an Interim Turnaround Project Manager within 48 hours. We restructured the erection sequencing, introduced dual-shift cladding installation, and resolved subcontractor payment bottlenecks.',
      outcome: 'Recovered all 9 weeks of critical path delay. Handed over 3 days ahead of anchor tenant occupation deadline with zero liquidated damages incurred.',
      roi: 'Saved R3.8M in potential tenant delay penalties.'
    },
    {
      title: 'Sandton Corporate Headquarters — R4.2M Unsubstantiated VO Claims Defeated',
      sector: 'Commercial Office Fit-out (Live Environment)',
      problem: 'During a 6-floor modernization, the main contractor submitted R6.1M in variation orders citing unforeseen MEP modifications and tenant scope drift.',
      solution: 'Eureka deployed a Fractional Principal Agent to conduct forensic audit on all architectural bulletins against original bill of quantities and site instructions.',
      outcome: 'Successfully substantiated and reduced allowable variations from R6.1M down to R1.9M. Enforced strict JBCC notice compliance.',
      roi: 'Saved R4.2M in direct contractor overcharges.'
    },
    {
      title: 'Rosebank Mixed-Use Residential — Fractional PM Saved 55% in Overhead',
      sector: 'Multi-Unit Residential Development (R78M)',
      problem: 'Mid-sized property developer needed high-level Pr.CPM governance but could not justify a R160,000/month full-time project director salary across an 11-month build.',
      solution: 'Engaged Eureka on a Fractional 2-Day/Week PM model. We led all fortnightly site meetings, verified monthly QS payment claims, and chaired technical coordination.',
      outcome: 'Delivered flawless quality sign-off with full municipal occupational certificates on schedule at less than half the overhead cost.',
      roi: 'Reduced developer project management overhead by R680,000.'
    }
  ];

  // FAQ Items
  const faqItems = [
    {
      q: 'What is the difference between hiring a Freelance / Interim PM vs a full-time employee?',
      a: 'A freelance or interim Project Manager provides immediate senior-level leadership (SACPCMP Pr.CPM) without long-term salary overheads, employee benefit liabilities, 13th-month bonuses, or recruitment agency placement fees (typically 15-20% of annual salary). You pay strictly for the hours, days, or months of project delivery required. When the project completes, the contract ends cleanly with zero severance obligations.'
    },
    {
      q: 'How quickly can a Eureka Freelance Project Manager mobilize on site?',
      a: 'We can deploy a qualified Principal Project Manager (Pr.CPM) to your site anywhere in Gauteng within 48 to 72 hours, and nationwide across South Africa within 3 to 5 business days. For urgent distressed project turnaround missions, emergency initial site audits can commence within 24 hours.'
    },
    {
      q: 'Are your freelance Project Managers SACPCMP registered and insured?',
      a: 'Yes. All Eureka Senior Project Managers hold active SACPCMP (South African Council for the Project and Construction Management Professions) Pr.CPM or Pr.CM professional registrations. We carry comprehensive Professional Indemnity (PI) insurance and Public Liability coverage for complete client peace of mind.'
    },
    {
      q: 'Can a Freelance PM act as the legal Principal Agent under JBCC / FIDIC contracts?',
      a: 'Absolutely. Our freelance Project Managers regularly act as the appointed Principal Agent (JBCC), Engineer (FIDIC), or Project Manager (NEC4). We have full contractual authority to issue site instructions, evaluate extension of time (EOT) claims, approve payment certificates, and issue practical completion certificates.'
    },
    {
      q: 'What billing models do you offer for Freelance PM services?',
      a: 'We offer three flexible billing frameworks: (1) Monthly All-Inclusive Retainer (ideal for full-time interim or fractional assignments), (2) Day-Rate / Sprints (ideal for tender setups, technical audits, and short advisory sessions), or (3) Milestone-Based Fixed Fee (tied to PROCSA stage completions). All expenses and deliverables are transparently agreed upon upfront.'
    },
    {
      q: 'How does a Fractional (Part-Time) PM work effectively without being on site every day?',
      a: 'For many structured projects, full-time daily site presence is unnecessary if you have a competent site foreman. A Fractional PM spends 2 to 3 days per week focusing on high-leverage activities: chairing technical coordination meetings, vetting payment certificates, resolving contractor bottlenecks, tracking the P6 critical path, and protecting the developer from scope creep. This provides Fortune 500-grade project governance at a fraction of the cost.'
    },
    {
      q: 'Can you help us rescue a construction project that is already failing and behind schedule?',
      a: 'Yes, distressed project turnaround is one of our core specialties. We step into chaotic situations, conduct an immediate forensic audit of delays and finances, enforce contractor accountability, re-baseline the critical path, and implement an aggressive recovery schedule to minimize financial loss and liquidated damages.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-red-600 selection:text-white pb-16">
      {/* Standard Header */}
      <EurekaHeader currentPage="freelance-pm" onNavigate={onNavigate}  />

      {/* ------------------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------------------- */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 border-b border-slate-800">
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
            {/* Hero Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-extrabold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-red-500" />
                <span>SOLUTIONS • 2. CONSTRUCTION DELIVERY • 2.3 FREELANCE PM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl">
                FREELANCE &amp; INTERIM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                  CONSTRUCTION PROJECT MANAGEMENT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                Experienced Project Leadership — Exactly When You Need It. Without the Overhead, Delay, or Long-Term Risk of a Permanent Hire.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                Not every property developer, principal contractor, or asset fund needs a permanent executive payroll. Eureka provides flexible, seasoned <strong className="text-white font-bold">SACPCMP-registered Principal Project Managers (Pr.CPM)</strong> for specific projects, critical programme spikes, distressed site turnarounds, or temporary leadership coverage.
              </p>

              {/* Badges row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-3xl">
                <div className="bg-slate-800/70 border border-slate-700/60 rounded-lg p-2.5 text-center">
                  <ShieldCheck className="w-5 h-5 text-red-500 mx-auto mb-1" />
                  <div className="text-[11px] font-black text-white">SACPCMP Pr.CPM</div>
                  <div className="text-[10px] text-slate-400">Certified Leadership</div>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/60 rounded-lg p-2.5 text-center">
                  <Scale className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-[11px] font-black text-white">JBCC / FIDIC / NEC</div>
                  <div className="text-[10px] text-slate-400">Principal Agent</div>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/60 rounded-lg p-2.5 text-center">
                  <Zap className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="text-[11px] font-black text-white">48h Mobilisation</div>
                  <div className="text-[10px] text-slate-400">Zero HR Waiting</div>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/60 rounded-lg p-2.5 text-center">
                  <DollarSign className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-[11px] font-black text-white">Zero HR Overhead</div>
                  <div className="text-[10px] text-slate-400">Pure Capex Focus</div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase px-6 py-3.5 rounded-md shadow-xl shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Hire a Freelance Project Manager</span>
                </button>
                <a
                  href="#freelance-models"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase px-6 py-3.5 rounded-md transition-colors flex items-center gap-2"
                >
                  <Layers className="w-4 h-4 text-red-400" />
                  <span>Explore Delivery Models</span>
                </a>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 max-w-3xl">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-white">48 - 72h</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Average Deployment</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-red-400">R450k+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Avoided HR Overhead</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">15+ Yrs</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Pr.CPM Experience</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Critical Path Rigor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* WHY FREELANCE PM? COMPARISON MATRIX: FREELANCE vs FULL-TIME HIRE */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>STRATEGIC BUSINESS CASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              FREELANCE / INTERIM PM vs. PERMANENT IN-HOUSE HIRE
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Why leading property developers, private equity funds, and main contractors prefer on-demand freelance project management over traditional executive hiring.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-50 text-xs font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="py-4 px-6 text-slate-600 w-1/3">Evaluation Metric</th>
                  <th className="py-4 px-6 text-red-700 bg-red-50/80 border-l border-r border-red-200 w-1/3">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-red-600" />
                      <span>EUREKA FREELANCE / INTERIM PM</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-slate-600 w-1/3">Permanent Full-Time Executive Hire</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    Time-to-Deploy / Onboarding
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ 48 to 72 Hours (Immediate Site Impact)
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ❌ 60 to 90 Days (Recruiting + Notice Periods)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Recruitment Fees &amp; Placement Cost
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ R0.00 (Zero Recruiter Placement Fees)
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ❌ 15% - 22% of Annual CTC (R180k - R300k upfront)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Employment Liabilities &amp; Severance
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ Zero Severance, No Retrenchment Risk, Clean Exit
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ❌ CCMA, Severance Packages, Long-term HR Overhead
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Engagement Flexibility
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ 1-Month Sprints to 18-Month Project Cycles
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ❌ Indefinite Permanent Payroll Burden
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Objectivity &amp; Unbiased Governance
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ 100% Unbiased External Client Advocacy
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ⚠️ Potential Internal Corporate Politics &amp; Biases
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900">
                    Skill-to-Phase Specialisation
                  </td>
                  <td className="py-4 px-6 text-emerald-700 font-bold bg-red-50/30 border-l border-r border-red-200">
                    ✓ Switch from Pre-Con Lead to Site Turnaround Expert
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    ⚠️ Locked into a single individual's specific skill set
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ------------------------------------------------------------------------- */}
      {/* 6 FREELANCE & INTERIM DELIVERY MODELS - 2 COLUMN (ACCORDION + IMAGE) */}
      {/* ------------------------------------------------------------------------- */}
      <section id="freelance-models" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>SPECIALIZED ENGAGEMENT FRAMEWORKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              6 CORE FREELANCE &amp; INTERIM PM DELIVERY MODELS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Tailored engagement structures adapted to developers, main contractors, and investment funds at any stage of the construction lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion List (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {freelanceModels.map((model, idx) => {
                const IconComp = model.icon;
                const isOpen = openModelIndex === idx;

                return (
                  <div
                    key={model.id}
                    className={`bg-slate-900 rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'border-red-600 shadow-xl shadow-red-950/30 ring-1 ring-red-600/30'
                        : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleModel(idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-red-600 text-white'
                              : 'bg-red-950/80 border border-red-800/60 text-red-400'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[9px] font-black uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 px-1.5 py-0.5 rounded">
                              {model.badge}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-400 hidden sm:inline-flex items-center gap-1">
                              <Clock className="w-2.5 h-2.5" /> {model.turnaround}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-extrabold transition-colors truncate ${
                              isOpen ? 'text-red-400' : 'text-white'
                            }`}
                          >
                            {model.title}
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
                            <p className="text-xs font-bold text-amber-400">
                              {model.tagline}
                            </p>
                            
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {model.description}
                            </p>

                            <div className="bg-slate-950/70 rounded-lg p-3 border border-slate-800">
                              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                                Best Suited For:
                              </div>
                              <p className="text-xs text-slate-300">
                                {model.bestFor}
                              </p>
                            </div>

                            <div className="bg-slate-950/70 rounded-lg p-3.5 border border-slate-800">
                              <div className="text-[11px] font-bold text-slate-200 mb-2">
                                Key Deliverables &amp; Controls:
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-400">
                                {model.deliverables.map((del, dIdx) => (
                                  <li key={dIdx} className="flex items-start gap-2">
                                    <span className="text-red-400 font-bold">✓</span>
                                    <span>{del}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{model.turnaround}</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                              >
                                <span>Inquire Now</span>
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
                  src={freelancePmImg}
                  alt="Eureka Freelance and Interim Construction Project Management Leadership on-site"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Quick Key Highlights Bar */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 shadow-sm grid grid-cols-3 gap-2 text-center">
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-white">24-72h</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">Deployment</div>
                </div>
                <div className="border-r border-slate-800 pr-2">
                  <div className="text-base font-black text-red-400">Pr.CPM</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">SACPCMP Reg.</div>
                </div>
                <div>
                  <div className="text-base font-black text-emerald-400">0%</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">HR Overhead</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 8 PILLARS OF EUREKA FREELANCE PM EXECUTION */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>THE EUREKA GOVERNANCE STANDARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              8 PILLARS OF FREELANCE PROJECT EXECUTION
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              How our on-demand Project Managers maintain rigorous institutional standards on every site we touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {executionPillars.map((pillar, idx) => {
              const IconP = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-red-500/80 hover:shadow-md transition-all shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-red-600 font-mono">
                      PILLAR {pillar.num}
                    </span>
                    <IconP className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* ENGAGEMENT CASE STUDIES / TURNAROUND SCENARIOS */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>PROVEN FIELD RESULTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              REAL-WORLD FREELANCE PM INTERVENTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Examining actual project turnarounds, cost recoveries, and fractional management outcomes delivered across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {engagementScenarios.map((cs, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-red-950 text-red-400 border border-red-900/60 px-2 py-0.5 rounded inline-block mb-3">
                    {cs.sector}
                  </span>
                  <h3 className="text-base font-extrabold text-white mb-4 leading-snug">
                    {cs.title}
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="font-bold text-red-400 block mb-0.5">The Challenge:</span>
                      <p className="text-slate-400 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <span className="font-bold text-amber-400 block mb-0.5">Eureka Freelance Action:</span>
                      <p className="text-slate-300 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <span className="font-bold text-emerald-400 block mb-0.5">The Outcome:</span>
                      <p className="text-slate-300 leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 bg-slate-950/60 -mx-6 -mb-6 p-4 rounded-b-xl">
                  <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{cs.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-red-600" />
              <span>CLEAR CONTRACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              FREELANCE PM FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about hiring, billing, professional liability, and site governance.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center gap-4 hover:text-red-600 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3 bg-white/70">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------------------- */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
