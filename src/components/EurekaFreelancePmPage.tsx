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

  // Interactive Freelance PM Deployment & Retainer Estimator State
  const [engagementModel, setEngagementModel] = useState<
    'full_time_interim' | 'fractional_part_time' | 'turnaround_recovery' | 'tender_precon' | 'client_audit'
  >('full_time_interim');
  const [projectSector, setProjectSector] = useState<
    'commercial_fitout' | 'industrial_logistics' | 'residential_estate' | 'retail_upgrade' | 'civil_infrastructure'
  >('commercial_fitout');
  const [durationMonths, setDurationMonths] = useState<number>(6); // duration in months
  const [capexScale, setCapexScale] = useState<'under_10m' | '10m_50m' | '50m_150m' | 'above_150m'>('10m_50m');
  
  // Optional add-on capabilities
  const [includePrincipalAgentJbcc, setIncludePrincipalAgentJbcc] = useState<boolean>(true);
  const [includeP6Scheduling, setIncludeP6Scheduling] = useState<boolean>(true);
  const [includeClaimsDefense, setIncludeClaimsDefense] = useState<boolean>(true);
  const [includeTenderProcurement, setIncludeTenderProcurement] = useState<boolean>(false);
  const [includeSiteSupervisionQa, setIncludeSiteSupervisionQa] = useState<boolean>(true);

  // UI state
  const [activeModelTab, setActiveModelTab] = useState<number>(0);
  const [activeScenarioTab, setActiveScenarioTab] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [rfqSubmitted, setRfqSubmitted] = useState(false);

  // Estimator Calculations
  const calculateMetrics = () => {
    // Base monthly retainer based on engagement model
    let baseMonthlyZar = 85000; // default full-time interim senior Pr.CPM
    let daysPerWeek = '5 Days (Full-Time On-Site)';
    let mobilisationHours = '48 - 72 Hours';

    if (engagementModel === 'full_time_interim') {
      baseMonthlyZar = 92000;
      daysPerWeek = '5 Days (Dedicated On-Site)';
      mobilisationHours = '48 - 72 Hours';
    } else if (engagementModel === 'fractional_part_time') {
      baseMonthlyZar = 48000;
      daysPerWeek = '2 - 3 Days (Flexible Hybrid)';
      mobilisationHours = '3 - 5 Business Days';
    } else if (engagementModel === 'turnaround_recovery') {
      baseMonthlyZar = 115000;
      daysPerWeek = 'Full-Time + Weekend Sprints';
      mobilisationHours = '24 - 48 Hours Urgent';
    } else if (engagementModel === 'tender_precon') {
      baseMonthlyZar = 55000;
      daysPerWeek = '3 Days (Pre-Construction Sprint)';
      mobilisationHours = '3 - 5 Business Days';
    } else if (engagementModel === 'client_audit') {
      baseMonthlyZar = 38000;
      daysPerWeek = 'Bi-Weekly Site & IPC Audits';
      mobilisationHours = '48 Hours';
    }

    // Scale modifier based on project capex
    if (capexScale === 'above_150m') {
      baseMonthlyZar *= 1.25;
    } else if (capexScale === '50m_150m') {
      baseMonthlyZar *= 1.12;
    } else if (capexScale === 'under_10m') {
      baseMonthlyZar *= 0.88;
    }

    // Add-on adjustments
    let addOnMonthlyZar = 0;
    if (includePrincipalAgentJbcc) addOnMonthlyZar += 12000;
    if (includeP6Scheduling) addOnMonthlyZar += 9500;
    if (includeClaimsDefense) addOnMonthlyZar += 8000;
    if (includeTenderProcurement) addOnMonthlyZar += 7500;
    if (includeSiteSupervisionQa) addOnMonthlyZar += 11000;

    const totalMonthlyInvestment = baseMonthlyZar + addOnMonthlyZar;
    const totalEngagementCost = totalMonthlyInvestment * durationMonths;

    // Benchmark comparison against permanent executive hire (Base salary + 25% benefits + 15% recruiter fee + severance liability)
    const permanentEquivalentMonthly = 145000;
    const permanentRecruiterPlacementFee = 180000;
    const totalPermanentCostForPeriod = (permanentEquivalentMonthly * durationMonths) + permanentRecruiterPlacementFee;
    const totalCostSaved = Math.max(0, totalPermanentCostForPeriod - totalEngagementCost);
    const savingsPercent = Math.round((totalCostSaved / totalPermanentCostForPeriod) * 100);

    return {
      monthlyRate: Math.round(totalMonthlyInvestment),
      totalCost: Math.round(totalEngagementCost),
      savedOverhead: Math.round(totalCostSaved),
      savingsPercent,
      daysPerWeek,
      mobilisationHours,
      permanentCostBenchmark: Math.round(totalPermanentCostForPeriod)
    };
  };

  const metrics = calculateMetrics();

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
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-extrabold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-red-500" />
                <span>SOLUTIONS • 2. CONSTRUCTION DELIVERY • 2.3 FREELANCE PM</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                FREELANCE &amp; INTERIM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-300">
                  CONSTRUCTION PROJECT MANAGEMENT
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Experienced Project Leadership — Exactly When You Need It. Without the Overhead, Delay, or Long-Term Risk of a Permanent Hire.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Not every property developer, principal contractor, or asset fund needs a permanent executive payroll. Eureka provides flexible, seasoned <strong className="text-white font-bold">SACPCMP-registered Principal Project Managers (Pr.CPM)</strong> for specific projects, critical programme spikes, distressed site turnarounds, or temporary leadership coverage.
              </p>

              {/* Badges row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
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
                <a
                  href="#hire-pm-form"
                  className="bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase px-6 py-3.5 rounded-md shadow-xl shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>Hire a Freelance Project Manager</span>
                </a>
                <a
                  href="#freelance-calculator"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs uppercase px-6 py-3.5 rounded-md transition-colors flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4 text-red-400" />
                  <span>Deployment &amp; Fee Estimator</span>
                </a>
              </div>
            </div>

            {/* Right Col: Hero Live Governance Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-6 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                      ON-DEMAND PM MOBILISATION
                    </span>
                  </div>
                  <span className="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                    SA WIDE • 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Average Deployment</div>
                    <div className="text-2xl font-black text-white mt-1">48 - 72h</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" /> Ready for site handover
                    </div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Average HR Savings</div>
                    <div className="text-2xl font-black text-red-500 mt-1">R450k+</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Avoided recruiter &amp; benefits</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Pr.CPM Experience</div>
                    <div className="text-2xl font-black text-amber-400 mt-1">15+ Yrs</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Senior site track record</div>
                  </div>
                  <div className="bg-slate-900/90 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase">Critical Path Defense</div>
                    <div className="text-2xl font-black text-emerald-400 mt-1">100%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">P6 &amp; MS Project rigor</div>
                  </div>
                </div>

                <div className="bg-red-950/40 border border-red-900/60 rounded-lg p-3.5 text-xs text-red-200">
                  <div className="font-bold flex items-center gap-1.5 text-red-400 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Facing an Emergency Site Crisis or Delayed Project?
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Our Senior Project Turnaround Leads can execute an emergency on-site diagnostic audit within 24 hours to halt delay creep and re-baseline contractor milestones.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Certified under Act 48 of 2000</span>
                  <a href="tel:+27745187012" className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1">
                    Urgent Hotline: +27 74 518 7012
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* WHY FREELANCE PM? COMPARISON MATRIX: FREELANCE vs FULL-TIME HIRE */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>STRATEGIC BUSINESS CASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FREELANCE / INTERIM PM vs. PERMANENT IN-HOUSE HIRE
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Why leading property developers, private equity funds, and main contractors prefer on-demand freelance project management over traditional executive hiring.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-950 text-xs font-black uppercase tracking-wider border-b border-slate-800">
                  <th className="py-4 px-6 text-slate-400 w-1/3">Evaluation Metric</th>
                  <th className="py-4 px-6 text-red-400 bg-red-950/30 border-l border-r border-red-900/40 w-1/3">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-red-500" />
                      <span>EUREKA FREELANCE / INTERIM PM</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-slate-400 w-1/3">Permanent Full-Time Executive Hire</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    Time-to-Deploy / Onboarding
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ 48 to 72 Hours (Immediate Site Impact)
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ❌ 60 to 90 Days (Recruiting + Notice Periods)
                  </td>
                </tr>
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white">
                    Recruitment Fees &amp; Placement Cost
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ R0.00 (Zero Recruiter Placement Fees)
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ❌ 15% - 22% of Annual CTC (R180k - R300k upfront)
                  </td>
                </tr>
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white">
                    Employment Liabilities &amp; Severance
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ Zero Severance, No Retrenchment Risk, Clean Exit
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ❌ CCMA, Severance Packages, Long-term HR Overhead
                  </td>
                </tr>
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white">
                    Engagement Flexibility
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ 1-Month Sprints to 18-Month Project Cycles
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ❌ Indefinite Permanent Payroll Burden
                  </td>
                </tr>
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white">
                    Objectivity &amp; Unbiased Governance
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ 100% Unbiased External Client Advocacy
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ⚠️ Potential Internal Corporate Politics &amp; Biases
                  </td>
                </tr>
                <tr className="hover:bg-slate-850/50">
                  <td className="py-4 px-6 font-bold text-white">
                    Skill-to-Phase Specialisation
                  </td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-red-950/10 border-l border-r border-red-900/40">
                    ✓ Switch from Pre-Con Lead to Site Turnaround Expert
                  </td>
                  <td className="py-4 px-6 text-slate-400">
                    ⚠️ Locked into a single individual's specific skill set
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* INTERACTIVE FREELANCE PM DEPLOYMENT & RETAINER ESTIMATOR */}
      {/* ------------------------------------------------------------------------- */}
      <section id="freelance-calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>INTERACTIVE PRICING TOOL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FREELANCE PM DEPLOYMENT &amp; RETAINER ESTIMATOR
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Configure your project parameters to estimate monthly retainers, mobilization timelines, and projected HR cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Inputs Column */}
            <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
              {/* Engagement Model */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Freelance Engagement Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'full_time_interim', label: 'Full-Time Interim PM (5 Days On-Site)' },
                    { id: 'fractional_part_time', label: 'Fractional PM (2-3 Days Hybrid)' },
                    { id: 'turnaround_recovery', label: 'Distressed Project Recovery Lead' },
                    { id: 'tender_precon', label: 'Pre-Construction & Tender Specialist' },
                    { id: 'client_audit', label: 'Client-Side QA & Payment Auditor' }
                  ].map((model) => (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setEngagementModel(model.id as any)}
                      className={`p-3 rounded-lg text-xs font-bold text-left transition-all border ${
                        engagementModel === model.id
                          ? 'bg-red-600 text-white border-red-500 shadow-md'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {model.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Capex Scale */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Total Project CAPEX Scale (ZAR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'under_10m', label: '< R10 Million' },
                    { id: '10m_50m', label: 'R10M - R50M' },
                    { id: '50m_150m', label: 'R50M - R150M' },
                    { id: 'above_150m', label: 'R150M+' }
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setCapexScale(scale.id as any)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold text-center transition-all border ${
                        capexScale === scale.id
                          ? 'bg-slate-800 text-red-400 border-red-500'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {scale.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    3. Engagement Duration
                  </label>
                  <span className="text-sm font-black text-red-400 bg-red-950/60 border border-red-900/60 px-2.5 py-0.5 rounded">
                    {durationMonths} {durationMonths === 1 ? 'Month Sprint' : 'Months Project Cycle'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="18"
                  value={durationMonths}
                  onChange={(e) => setDurationMonths(parseInt(e.target.value))}
                  className="w-full accent-red-600 bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 Month (Emergency Sprint)</span>
                  <span>6 Months (Standard Build)</span>
                  <span>18 Months (Major Capex)</span>
                </div>
              </div>

              {/* Scope & Governance Toggles */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  4. Scope &amp; Contractual Add-Ons
                </label>
                <div className="space-y-2">
                  {[
                    {
                      label: 'Principal Agent Contract Administration (JBCC 2018 / FIDIC)',
                      checked: includePrincipalAgentJbcc,
                      toggle: () => setIncludePrincipalAgentJbcc(!includePrincipalAgentJbcc)
                    },
                    {
                      label: 'Primavera P6 / CPM Baseline Critical Path Scheduling',
                      checked: includeP6Scheduling,
                      toggle: () => setIncludeP6Scheduling(!includeP6Scheduling)
                    },
                    {
                      label: 'Contractor Variation Order (VO) & Extension of Time (EOT) Claims Defense',
                      checked: includeClaimsDefense,
                      toggle: () => setIncludeClaimsDefense(!includeClaimsDefense)
                    },
                    {
                      label: 'Subcontractor Tender Packaging, Vetting & Commercial Adjudication',
                      checked: includeTenderProcurement,
                      toggle: () => setIncludeTenderProcurement(!includeTenderProcurement)
                    },
                    {
                      label: 'Site Quality Inspection & Test Plan (ITP) / SANS 10400 Enforcement',
                      checked: includeSiteSupervisionQa,
                      toggle: () => setIncludeSiteSupervisionQa(!includeSiteSupervisionQa)
                    }
                  ].map((addon, idx) => (
                    <div
                      key={idx}
                      onClick={addon.toggle}
                      className={`p-2.5 rounded-lg border text-xs flex items-center justify-between cursor-pointer transition-all ${
                        addon.checked
                          ? 'bg-slate-900 border-red-600/50 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="font-medium">{addon.label}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          addon.checked
                            ? 'bg-red-600 border-red-600 text-white'
                            : 'border-slate-700 bg-slate-900'
                        }`}
                      >
                        {addon.checked && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Outputs Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-950 to-slate-900 border-2 border-red-600/60 rounded-xl p-6 shadow-2xl relative">
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  ESTIMATED RETAINER
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Estimated Monthly Retainer
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  R{metrics.monthlyRate.toLocaleString()}
                  <span className="text-xs font-normal text-slate-400 ml-1">/ month (ex VAT)</span>
                </div>
                <div className="text-xs text-red-400 font-bold mt-1">
                  Schedule: {metrics.daysPerWeek}
                </div>

                <div className="border-t border-slate-800 my-4 pt-4 space-y-2.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Total Engagement Cost ({durationMonths} Mo):</span>
                    <span className="font-bold text-white">R{metrics.totalCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Mobilisation Timeline:</span>
                    <span className="font-bold text-emerald-400">{metrics.mobilisationHours}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Permanent Exec Cost Benchmark:</span>
                    <span className="font-mono text-slate-400 line-through">R{metrics.permanentCostBenchmark.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg text-emerald-300 font-bold">
                    <span>Avoided HR Overhead &amp; Fees:</span>
                    <span className="text-emerald-400 text-sm">~R{metrics.savedOverhead.toLocaleString()} ({metrics.savingsPercent}% Saved)</span>
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 text-[11px] text-slate-400 space-y-1.5 mt-4">
                  <div className="font-bold text-slate-300 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                    All-Inclusive Retainer Includes:
                  </div>
                  <p>• SACPCMP Registered Pr.CPM Lead Project Manager</p>
                  <p>• Full Professional Indemnity (PI) Insurance Coverage</p>
                  <p>• Weekly Executive Milestone &amp; Cost Dashboards</p>
                  <p>• Clean Termination Notice with Zero Severance Obligations</p>
                </div>

                <a
                  href="#hire-pm-form"
                  className="mt-5 w-full block text-center py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase rounded-lg shadow-lg shadow-red-600/30 transition-colors"
                >
                  Lock In This Retainer &amp; Request Proposal ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 6 FREELANCE & INTERIM DELIVERY MODELS */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-b border-slate-800">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelanceModels.map((model, idx) => {
              const IconComp = model.icon;
              return (
                <div
                  key={model.id}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-red-600/60 transition-all hover:shadow-xl hover:shadow-red-600/5 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-950 border border-red-800/60 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded">
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-white mb-1 group-hover:text-red-400 transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-xs font-bold text-amber-400 mb-3">
                      {model.tagline}
                    </p>

                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      {model.description}
                    </p>

                    <div className="border-t border-slate-800 pt-3 mb-4">
                      <div className="text-[11px] font-bold text-slate-300 mb-2">Key Deliverables:</div>
                      <ul className="space-y-1.5 text-[11px] text-slate-400">
                        {model.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="text-red-500 font-bold">✓</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-4 mt-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {model.turnaround}
                    </span>
                    <a
                      href="#hire-pm-form"
                      className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* 8 PILLARS OF EUREKA FREELANCE PM EXECUTION */}
      {/* ------------------------------------------------------------------------- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE EUREKA GOVERNANCE STANDARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              8 PILLARS OF FREELANCE PROJECT EXECUTION
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              How our on-demand Project Managers maintain rigorous institutional standards on every site we touch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {executionPillars.map((pillar, idx) => {
              const IconP = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-red-500 font-mono">
                      PILLAR {pillar.num}
                    </span>
                    <IconP className="w-5 h-5 text-slate-400" />
                  </div>
                  <h3 className="text-sm font-black text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>CLEAR CONTRACTUAL ANSWERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FREELANCE PM FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know about hiring, billing, professional liability, and site governance.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-white flex justify-between items-center gap-4 hover:text-red-400 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-red-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
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
      {/* RFP / HIRE A FREELANCE PM FORM */}
      {/* ------------------------------------------------------------------------- */}
      <section id="hire-pm-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950 border border-red-800/60 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>MOBILISE SENIOR LEADERSHIP</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              HIRE A FREELANCE PROJECT MANAGER
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Tell us about your development parameters or site crisis. A Principal Project Manager (Pr.CPM) will contact you within 4 hours to review terms and CV profiles.
            </p>
          </div>

          {rfqSubmitted ? (
            <div className="bg-emerald-950/60 border border-emerald-800 text-center p-8 rounded-xl space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-black text-white">Freelance PM Inquiry Received</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you. A Senior Principal Project Manager has been assigned to your request and will reach out via phone or email within 4 hours with matching Pr.CPM credentials.
              </p>
              <button
                onClick={() => setRfqSubmitted(false)}
                className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setRfqSubmitted(true);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Henderson"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Company / Developer / Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Property Fund"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. david@apexcapital.co.za"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-600"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 82 000 0000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-red-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Required Engagement Model
                  </label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-red-600">
                    <option>Full-Time Interim PM (5 Days On-Site)</option>
                    <option>Fractional PM (2-3 Days Hybrid)</option>
                    <option>Distressed Project Turnaround Specialist</option>
                    <option>Pre-Construction &amp; Tender Lead</option>
                    <option>Independent Client-Side QA &amp; Payment Auditor</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Estimated Project Capex
                  </label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-red-600">
                    <option>Under R5 Million</option>
                    <option>R5 Million - R20 Million</option>
                    <option selected>R20 Million - R50 Million</option>
                    <option>R50 Million - R150 Million</option>
                    <option>R150 Million+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Deployment Urgency
                  </label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-red-600">
                    <option>Urgent / Within 48-72 Hours</option>
                    <option>Within 1 - 2 Weeks</option>
                    <option>Next Month / Upcoming Tender</option>
                    <option>Future Planning / Exploratory</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Brief Project Overview, Site Location &amp; Current Status
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the development sector, site location (e.g. Sandton, Durban, Cape Town), key bottlenecks or reason for interim leadership requirement..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white placeholder-slate-600 focus:outline-none focus:border-red-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-xl shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4" />
                <span>Submit Inquiry &amp; Request Pr.CPM CVs</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------------------- */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
