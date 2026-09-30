import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import constructionManagementImg from '../assets/images/Construction Management.jpeg';
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
  DollarSign,
  Layers,
  Phone,
  Mail,
  MapPin,
  HelpCircle,
  ChevronRight,
  Hammer,
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
}

export const EurekaConstructionManagementPage: React.FC<EurekaConstructionManagementPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // UI state
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [openDisciplineIndex, setOpenDisciplineIndex] = useState<number | null>(0);

  const toggleDiscipline = (idx: number) => {
    setOpenDisciplineIndex((prev) => (prev === idx ? null : idx));
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
      <EurekaHeader currentPage="construction-management" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#060e22] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
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
            {/* Headline & Value Prop */}
            <div className="space-y-6">
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

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight uppercase max-w-3xl">
                CONSTRUCTION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500">MANAGEMENT</span> &amp; <br />
                SITE SUPERVISION
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
                Experienced on-site leadership, robust contractor coordination, precision QA/QC oversight, and rigorous cost governance. EFMS protects capital investments, eliminates delays, and guarantees compliant execution from ground-break to final handover.
              </p>

              {/* Core Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-3xl">
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

                <div className="bg-slate-900/80 border border-slate-700/70 rounded-lg p-3">
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
                  href="#disciplines"
                  className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <Layers className="w-4 h-4" />
                  <span>Explore 10 CM Disciplines</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request Project Proposal</span>
                </button>
              </div>

              {/* Quick KPI Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 max-w-3xl">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-red-400">R850M+</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Supervised Value</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">99.4%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Milestone Precision</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">ZERO</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Lost-Time Injuries</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-sky-400">100%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Contract Rigour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE 10 CONSTRUCTION DISCIPLINES (SPLIT 2 COLUMNS: ACCORDION + IMAGE) */}
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

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Accordion of 10 Disciplines */}
            <div className="lg:col-span-7 space-y-3">
              {disciplines.map((disc, idx) => {
                const IconComponent = disc.icon;
                const isOpen = openDisciplineIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-red-500/50 shadow-md ring-1 ring-red-500/20'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDiscipline(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <span
                          className={`text-sm font-black shrink-0 transition-colors ${
                            isOpen ? 'text-[#d91b1b]' : 'text-slate-400'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isOpen ? 'bg-[#d91b1b] text-white shadow-sm' : 'bg-red-50 text-red-600'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-0.5">
                            <span className="text-[9px] font-black uppercase tracking-wider bg-red-100 text-red-800 px-2 py-0.5 rounded-full">
                              {disc.badge}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-extrabold truncate transition-colors ${
                              isOpen ? 'text-slate-950' : 'text-slate-800'
                            }`}
                          >
                            {disc.title}
                          </h3>
                        </div>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-red-600 bg-red-50' : 'text-slate-400 bg-slate-100'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                            <p className="mb-4 text-slate-700 leading-relaxed">{disc.desc}</p>

                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200/80 mb-4">
                              <div className="text-[11px] font-black text-slate-900 uppercase tracking-wider mb-2.5">
                                Key Deliverables &amp; Controls:
                              </div>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {disc.points.map((pt, pIdx) => (
                                  <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                    <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <button
                              type="button"
                              onClick={() => onNavigate?.('contact')}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 hover:underline cursor-pointer"
                            >
                              <span>Engage this discipline for your project</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Construction Management Image & CTA Button */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src={constructionManagementImg}
                  alt="EFMS Construction Management On Site"
                  className="w-full h-auto max-h-[580px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Action CTA Button */}
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="w-full py-4 px-6 bg-[#d91b1b] hover:bg-red-700 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.99]"
              >
                <span>REQUEST A FORMAL CM PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 6. 5-STAGE PROJECT DELIVERY FRAMEWORK */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#060e20] text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-red-400" />
              <span>THE EUREKA METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              5-STAGE CONSTRUCTION GOVERNANCE ROADMAP
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2">
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
              <div key={i} className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 shadow-lg flex flex-col justify-between hover:border-red-500/60 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800/60">
                      {stg.stage}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">
                      {stg.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold text-white mb-2">
                    {stg.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {stg.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] font-bold text-red-400">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#f0faff] text-slate-900 border-b border-sky-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-700 border border-red-200 text-xs font-black uppercase tracking-wider mb-3">
              <Scale className="w-3.5 h-3.5 text-red-600" />
              <span>CONTRACTUAL &amp; LEGAL RIGOUR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase">
              PROFESSIONAL GOVERNANCE STANDARDS
            </h2>
            <p className="text-sm text-slate-600 mt-2">
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
                className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-4 text-slate-900 font-extrabold text-sm sm:text-base hover:text-red-600 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${
                      faqOpenIndex === index ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === index && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/70">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <EurekaFooter onNavigate={onNavigate} />
    </div>
  );
};
