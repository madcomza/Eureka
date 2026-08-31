import React, { useState } from 'react';
import { EurekaHeader } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Clock,
  Building2,
  ShieldCheck,
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
  Briefcase,
  GitCommit,
  Milestone,
  Split,
  Timer,
  Scale
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaDelayAnalysisPageProps {
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
      | 'delay-analysis'
      | 'pricing'
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaDelayAnalysisPage: React.FC<EurekaDelayAnalysisPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Diagnostic Tool State
  const [selectedMethodology, setSelectedMethodology] = useState<
    'tia' | 'windows' | 'asplanned_asbuilt' | 'collapsed_asbuilt' | 'impacted_asplanned'
  >('tia');
  const [scheduleSoftware, setScheduleSoftware] = useState<'p6' | 'msp' | 'powerproject' | 'tilos'>('p6');
  const [contractType, setContractType] = useState<'jbcc' | 'nec4' | 'fidic' | 'gcc'>('jbcc');
  const [delayEventType, setDelayEventType] = useState<'employer' | 'contractor' | 'concurrent' | 'weather' | 'design_access'>('employer');
  
  const [baselineDurationDays, setBaselineDurationDays] = useState<number>(365);
  const [grossDelayDays, setGrossDelayDays] = useState<number>(68);
  const [dailyDamagesZar, setDailyDamagesZar] = useState<number>(45000);
  const [scheduleQualityScore, setScheduleQualityScore] = useState<number>(85); // 0-100% (DCMA 14)
  const [concurrentDelayRatio, setConcurrentDelayRatio] = useState<number>(15); // %

  // Active Timeline Tab in Visualizer
  const [activeTimelineView, setActiveTimelineView] = useState<'baseline' | 'impacted' | 'asbuilt'>('impacted');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Commercial High-Rise / Mixed-Use',
    contractForm: 'JBCC Edition 6.2',
    scheduleTool: 'Primavera P6',
    estimatedDelay: '30 - 90 Days',
    message: ''
  });

  // Calculate Diagnostic Outputs
  const calculateDelayMetrics = () => {
    let methodologyMultiplier = 1.0;
    let methodologyName = 'Time Impact Analysis (TIA)';
    let methodologyDesc = 'Contemporaneous & prospective injection of fragnet activities into accepted live baseline schedule.';
    let sclRank = '1st (Most preferred under SCL Protocol for live events)';
    let prospectiveStatus = 'Prospective & Contemporaneous';

    if (selectedMethodology === 'tia') {
      methodologyMultiplier = 0.95;
      methodologyName = 'Time Impact Analysis (TIA)';
      methodologyDesc = 'Substantiates critical path movement by inserting delay fragnet sub-networks into the most recently accepted update.';
      sclRank = 'Tier 1 Preferred (SCL 2nd Edition Core Principle 4)';
      prospectiveStatus = 'Contemporaneous / Prospective';
    } else if (selectedMethodology === 'windows') {
      methodologyMultiplier = 0.90;
      methodologyName = 'Time Slice / Windows Analysis';
      methodologyDesc = 'Analyzes actual progress and critical path shifts across periodic schedule snapshots (windows).';
      sclRank = 'Tier 1 Preferred for Retrospective / Completed Projects';
      prospectiveStatus = 'Contemporaneous / Retrospective';
    } else if (selectedMethodology === 'asplanned_asbuilt') {
      methodologyMultiplier = 0.75;
      methodologyName = 'As-Planned vs. As-Built Comparison';
      methodologyDesc = 'Compares original baseline activity start/finish dates against recorded actual progress logs.';
      sclRank = 'Tier 3 (Acceptable when baseline logic is simple)';
      prospectiveStatus = 'Retrospective Direct';
    } else if (selectedMethodology === 'collapsed_asbuilt') {
      methodologyMultiplier = 0.85;
      methodologyName = 'Collapsed As-Built ("But-For") Analysis';
      methodologyDesc = 'Removes employer or contractor delay events from the as-built schedule to determine "but-for" completion.';
      sclRank = 'Tier 2 (Highly effective for arbitration/litigation defense)';
      prospectiveStatus = 'Retrospective Subtractive';
    } else if (selectedMethodology === 'impacted_asplanned') {
      methodologyMultiplier = 0.70;
      methodologyName = 'Impacted As-Planned Analysis';
      methodologyDesc = 'Inserts delay events directly into the original baseline without dynamic progress updates.';
      sclRank = 'Tier 4 (Theoretical only; weak if substantial progress occurred)';
      prospectiveStatus = 'Theoretical Prospective';
    }

    // Delay Event multiplier
    let entitlementFactor = 0.9;
    if (delayEventType === 'employer') entitlementFactor = 0.95;
    if (delayEventType === 'design_access') entitlementFactor = 0.92;
    if (delayEventType === 'weather') entitlementFactor = 0.75; // Time only under most contracts
    if (delayEventType === 'concurrent') entitlementFactor = 0.60;
    if (delayEventType === 'contractor') entitlementFactor = 0.10;

    // Quality factor based on DCMA score
    const qualityFactor = scheduleQualityScore / 100;

    // Net Days Entitlement
    const concurrencyDays = Math.round((grossDelayDays * concurrentDelayRatio) / 100);
    const netEligibleDays = Math.max(0, grossDelayDays - concurrencyDays);
    const substantiatedDays = Math.round(netEligibleDays * entitlementFactor * qualityFactor * methodologyMultiplier);

    // LADs Exposure Prevented
    const totalPotentialLads = grossDelayDays * dailyDamagesZar;
    const mitigatedLadsZar = substantiatedDays * dailyDamagesZar;
    const remainingExposureZar = Math.max(0, totalPotentialLads - mitigatedLadsZar);

    // Evidentiary Score (0-100%)
    const evidentiaryScore = Math.round(
      (qualityFactor * 0.35 + (methodologyMultiplier >= 0.9 ? 0.35 : 0.2) + (delayEventType !== 'contractor' ? 0.2 : 0.05) + (scheduleSoftware === 'p6' || scheduleSoftware === 'powerproject' ? 0.1 : 0.05)) * 100
    );

    return {
      methodologyName,
      methodologyDesc,
      sclRank,
      prospectiveStatus,
      substantiatedDays,
      concurrencyDays,
      totalPotentialLads,
      mitigatedLadsZar,
      remainingExposureZar,
      evidentiaryScore
    };
  };

  const metrics = calculateDelayMetrics();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Standardized Header */}
      <EurekaHeader
        currentPage="delay-analysis"
        onNavigate={onNavigate}
        
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-[#09132e] via-slate-900 to-slate-950 border-b border-slate-800">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/70 border border-red-700/50 text-red-300 text-xs font-bold uppercase tracking-wider shadow-inner">
                <Clock className="w-3.5 h-3.5 text-red-400" />
                <span>Forensic Schedule Forensics &amp; Critical Path Advisory</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                MASTER THE CRITICAL PATH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-amber-300">
                  DEFEND TIME &amp; DEFEAT DAMAGES.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Expert forensic delay analysis, contemporaneous programme management, and Extension of Time (EOT) substantiation. We deconstruct complex delays using SCL Protocol standards, Primavera P6 rigor, and indisputable critical path methodologies.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-red-400 font-black text-xl flex items-center gap-1">
                    <span>100%</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">SCL 2nd Edition</div>
                  <div className="text-[11px] text-slate-400">Delay &amp; Disruption Protocol</div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-amber-400 font-black text-xl flex items-center gap-1">
                    <span>P6 / Asta</span>
                    <Layers className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">Forensic Software</div>
                  <div className="text-[11px] text-slate-400">Time Impact &amp; Windows</div>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/70 rounded-lg p-3.5">
                  <div className="text-emerald-400 font-black text-xl flex items-center gap-1">
                    <span>R180M+</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-300 font-bold mt-0.5">Damages Mitigated</div>
                  <div className="text-[11px] text-slate-400">Across SADC Projects</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('delay-calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Launch Interactive Delay Diagnostic</span>
                </button>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Request Programme Audit</span>
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>JBCC 6.2</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>FIDIC Red / Yellow</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>NEC3 / NEC4 ECC</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-red-400" />
                  <span>GCC 2015</span>
                </span>
              </div>
            </div>

            {/* Right Card / Visual Banner */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700/80 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-red-600/20 border border-red-500/40 text-red-400 flex items-center justify-center font-black text-sm">
                      P6
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Critical Path Forensics Engine</div>
                      <div className="text-[10px] text-slate-400">Contemporaneous Fragnet Injection</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded font-bold">
                    LIVE LOGIC
                  </span>
                </div>

                {/* Mini Visual Simulation of Schedule Slippage */}
                <div className="space-y-4 text-xs">
                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span className="font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span>As-Planned Baseline (BL1)</span>
                      </span>
                      <span className="font-mono text-slate-400">Day 0 &rarr; Day 365</span>
                    </div>
                    <div className="h-3 w-full bg-slate-950 rounded overflow-hidden border border-slate-700">
                      <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span className="font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Employer Delay Fragnet Injected</span>
                      </span>
                      <span className="font-mono text-amber-400">+58 Days (Critical Shift)</span>
                    </div>
                    <div className="h-3 w-full bg-slate-950 rounded overflow-hidden border border-slate-700 relative">
                      <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }}></div>
                      <div className="absolute top-0 right-0 h-full bg-amber-500 rounded-r" style={{ width: '15%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-slate-300 mb-1">
                      <span className="font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>As-Built Delay with Total Float Erosion</span>
                      </span>
                      <span className="font-mono text-red-400 font-bold">Float: -42 Days [LAD Exposure]</span>
                    </div>
                    <div className="h-3 w-full bg-slate-950 rounded overflow-hidden border border-slate-700 relative">
                      <div className="h-full bg-red-500 rounded" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Key Insight Box */}
                <div className="mt-5 p-3.5 bg-slate-950/70 border border-slate-800 rounded-lg text-xs space-y-2">
                  <div className="font-bold text-red-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>Why Generic Bar Charts Fail in Disputes:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Arbitrators and Adjudicators reject delay claims based on static Excel bars. Without demonstrable Critical Path Method (CPM) logic, driving relationships, and dynamic float calculation, Extension of Time claims are summarily dismissed.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Schedule Health Audit:</span>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1"
                  >
                    <span>Submit Schedule File (.XER / .MPP)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE FORENSIC DELAY ANALYSIS & PROGRAMME DIAGNOSTIC CALCULATOR */}
      <section id="delay-calculator" className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Forensic Schedule Simulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FORENSIC DELAY &amp; EOT QUANTUM DIAGNOSTIC
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Select your contractual framework, delay methodology, and critical path metrics to simulate Extension of Time entitlement and delay damages defense.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
              
              {/* Methodology Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center justify-between">
                  <span>1. Forensic Delay Methodology (SCL Protocol)</span>
                  <span className="text-[11px] text-red-400 lowercase font-normal">{metrics.sclRank}</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'tia', label: 'Time Impact Analysis (TIA)', desc: 'Contemporaneous & Prospective Fragnets', badge: 'Preferred' },
                    { id: 'windows', label: 'Windows / Time Slice Analysis', desc: 'Retrospective Periodic Snapshots', badge: 'High Evidentiary' },
                    { id: 'collapsed_asbuilt', label: 'Collapsed As-Built ("But-For")', desc: 'Subtractive Event Removal', badge: 'Litigation Proven' },
                    { id: 'asplanned_asbuilt', label: 'As-Planned vs. As-Built', desc: 'Direct Historical Variance', badge: 'Simple Contracts' },
                    { id: 'impacted_asplanned', label: 'Impacted As-Planned', desc: 'Theoretical Baseline Injection', badge: 'Prospective Only' }
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethodology(method.id as any)}
                      className={`text-left p-3 rounded-lg border transition-all ${
                        selectedMethodology === method.id
                          ? 'bg-red-950/40 border-red-500 text-white shadow-sm ring-1 ring-red-500'
                          : 'bg-slate-800/60 border-slate-700/70 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs">{method.label}</span>
                        <span className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                          selectedMethodology === method.id ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-300'
                        }`}>
                          {method.badge}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400">{method.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Standard Contract & Scheduling Tool */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    2. Standard Form Contract
                  </label>
                  <select
                    value={contractType}
                    onChange={(e) => setContractType(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2.5 text-xs font-medium focus:border-red-500 focus:outline-none"
                  >
                    <option value="jbcc">JBCC Edition 6.2 (Clause 23.0 &amp; 29.0)</option>
                    <option value="fidic">FIDIC Red / Yellow Book (Clause 8.4 &amp; 20.1)</option>
                    <option value="nec4">NEC3 / NEC4 ECC (Clause 31 &amp; 62)</option>
                    <option value="gcc">GCC 2015 (Clause 5.12 &amp; 10.1)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    3. Scheduling Platform
                  </label>
                  <select
                    value={scheduleSoftware}
                    onChange={(e) => setScheduleSoftware(e.target.value as any)}
                    className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2.5 text-xs font-medium focus:border-red-500 focus:outline-none"
                  >
                    <option value="p6">Oracle Primavera P6 (.XER / XML)</option>
                    <option value="powerproject">Asta Powerproject (.PP)</option>
                    <option value="msp">Microsoft Project (.MPP)</option>
                    <option value="tilos">TILOS Linear Project Software</option>
                  </select>
                </div>
              </div>

              {/* Primary Delay Event Driver */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  4. Primary Root Cause Delay Event
                </label>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    { id: 'employer', label: 'Employer Scope Change / Variations' },
                    { id: 'design_access', label: 'Late Design / Site Access Denial' },
                    { id: 'weather', label: 'Adverse Weather / Force Majeure' },
                    { id: 'concurrent', label: 'Concurrent Employer & Contractor Delay' },
                    { id: 'contractor', label: 'Contractor Subcontractor Inefficiency' }
                  ].map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setDelayEventType(event.id as any)}
                      className={`text-left p-2.5 rounded border text-xs transition-all ${
                        delayEventType === event.id
                          ? 'bg-red-600 text-white font-bold border-red-500'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
                      }`}
                    >
                      {event.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders: Days, Concurrency, DCMA Quality, Daily Damages */}
              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Gross Delay Experienced (Days):</span>
                      <span className="text-red-400 font-bold font-mono">{grossDelayDays} Days</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={250}
                      step={1}
                      value={grossDelayDays}
                      onChange={(e) => setGrossDelayDays(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Concurrent Delay Overlap (%):</span>
                      <span className="text-amber-400 font-bold font-mono">{concurrentDelayRatio}%</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={60}
                      step={5}
                      value={concurrentDelayRatio}
                      onChange={(e) => setConcurrentDelayRatio(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">Daily Delay Damages (LADs in ZAR):</span>
                      <span className="text-slate-200 font-bold font-mono">R{dailyDamagesZar.toLocaleString()} / day</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={200000}
                      step={5000}
                      value={dailyDamagesZar}
                      onChange={(e) => setDailyDamagesZar(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300 font-semibold">DCMA 14-Point Baseline Health:</span>
                      <span className="text-emerald-400 font-bold font-mono">{scheduleQualityScore}%</span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={100}
                      step={5}
                      value={scheduleQualityScore}
                      onChange={(e) => setScheduleQualityScore(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Diagnostic Results (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-gradient-to-br from-slate-900 via-[#0e1938] to-slate-900 border-2 border-red-600/60 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-bl">
                  DIAGNOSTIC RESULTS
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Forensic Outcome Assessment
                </div>
                <h3 className="text-lg font-black text-white mb-4">
                  {metrics.methodologyName}
                </h3>

                {/* Core Metrics Cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Substantiated EOT</div>
                    <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">
                      +{metrics.substantiatedDays} <span className="text-xs font-sans font-bold text-slate-300">Days</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Defensible under SCL</div>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">LADs Defeated</div>
                    <div className="text-2xl font-black text-amber-400 mt-1 font-mono">
                      R{(metrics.mitigatedLadsZar / 1000000).toFixed(2)}M
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Penalties Protected</div>
                  </div>
                </div>

                {/* Evidentiary Strength Meter */}
                <div className="mb-5 bg-slate-950/70 border border-slate-800/80 rounded-lg p-3.5">
                  <div className="flex justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-red-400" />
                      <span>Evidentiary Admissibility Score</span>
                    </span>
                    <span className={`font-bold font-mono ${
                      metrics.evidentiaryScore >= 75 ? 'text-emerald-400' : metrics.evidentiaryScore >= 50 ? 'text-amber-400' : 'text-red-400'
                    }`}>
                      {metrics.evidentiaryScore}% / 100%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        metrics.evidentiaryScore >= 75
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                          : metrics.evidentiaryScore >= 50
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                          : 'bg-gradient-to-r from-red-600 to-rose-400'
                      }`}
                      style={{ width: `${metrics.evidentiaryScore}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Weak / Subjective</span>
                    <span>Moderate</span>
                    <span>Arbitration Ready</span>
                  </div>
                </div>

                {/* Breakdown Details */}
                <div className="space-y-2 text-xs border-t border-slate-800 pt-3">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Total Recorded Delay:</span>
                    <span className="font-mono font-bold">{grossDelayDays} Days</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Concurrency Apportionment:</span>
                    <span className="font-mono text-amber-400 font-bold">-{metrics.concurrencyDays} Days</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Contractual Notice Clause:</span>
                    <span className="font-bold text-slate-200">
                      {contractType === 'jbcc' ? 'Clause 29.1 (20 Working Days)' : contractType === 'fidic' ? 'Clause 20.1 (28 Days Time-Bar)' : contractType === 'nec4' ? 'Clause 61.3 (8 Weeks Strict Bar)' : 'Clause 10.1 (28 Days Notice)'}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Remaining Contractor Exposure:</span>
                    <span className="font-mono font-bold text-red-400">
                      R{metrics.remainingExposureZar.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/80">
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded shadow-lg shadow-red-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Engage Delay Expert for Detailed Report</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Fast Fact Tip */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-3.5 text-xs flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  <strong className="text-slate-200">Notice Timing is Critical:</strong> Under NEC4 and FIDIC contracts, failure to notify compensation events within the strict contractual notice window (8 weeks / 28 days) completely time-bars your entitlement, regardless of delay validity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISUAL CRITICAL PATH TIMELINE DECONSTRUCTION */}
      <section className="py-16 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Workflow className="w-3.5 h-3.5" />
                <span>Forensic Gantt Demonstration</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                CRITICAL PATH SHIFT VISUALIZER
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Visualizing how individual delay fragnets drive the completion milestone across schedule baselines.
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
              <button
                onClick={() => setActiveTimelineView('baseline')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                  activeTimelineView === 'baseline'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. As-Planned Baseline
              </button>
              <button
                onClick={() => setActiveTimelineView('impacted')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                  activeTimelineView === 'impacted'
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Contemporaneously Impacted (TIA)
              </button>
              <button
                onClick={() => setActiveTimelineView('asbuilt')}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                  activeTimelineView === 'asbuilt'
                    ? 'bg-red-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3. Final As-Built Windows
              </button>
            </div>
          </div>

          {/* Simulated Gantt Interactive Table */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
              <div className="flex items-center gap-4">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <FolderGit2 className="w-4 h-4 text-red-400" />
                  <span>PROJECT: Mixed-Use Commercial Tower (42 Levels)</span>
                </span>
                <span className="hidden sm:inline-block text-slate-600">|</span>
                <span className="hidden sm:inline-block text-slate-400">Baseline ID: BL-REV-04</span>
              </div>
              <span className="text-red-400 font-bold">
                {activeTimelineView === 'baseline' ? 'Target: 14 Nov 2025' : activeTimelineView === 'impacted' ? 'Impacted: 28 Jan 2026 (+75d)' : 'Actual Handover: 06 Mar 2026 (+112d)'}
              </span>
            </div>

            <div className="p-6 space-y-5">
              {[
                {
                  code: 'ACT-1010',
                  name: 'Site Establishment & Bulk Earthworks',
                  baseStart: '01 Jan',
                  baseEnd: '28 Feb',
                  actualStart: '01 Jan',
                  actualEnd: '15 Mar',
                  variance: '+15d',
                  critical: true,
                  impactDesc: 'Delayed municipal borehole relocation notice'
                },
                {
                  code: 'ACT-1020',
                  name: 'Deep Piling & Raft Foundation Concrete',
                  baseStart: '01 Mar',
                  baseEnd: '30 May',
                  actualStart: '16 Mar',
                  actualEnd: '20 Jun',
                  variance: '+21d',
                  critical: true,
                  impactDesc: 'Employer redesign of tension anchor piles'
                },
                {
                  code: 'ACT-2010',
                  name: 'Structural Concrete Superstructure (L1 - L42)',
                  baseStart: '01 Jun',
                  baseEnd: '15 Dec',
                  actualStart: '21 Jun',
                  actualEnd: '10 Feb',
                  variance: '+56d',
                  critical: true,
                  impactDesc: 'Late structural engineering revisions & post-tensioning fragnets'
                },
                {
                  code: 'ACT-3040',
                  name: 'Facade Glazing & Unitized Curtain Wall',
                  baseStart: '01 Aug',
                  baseEnd: '30 Jan',
                  actualStart: '01 Sep',
                  actualEnd: '20 Feb',
                  variance: '+20d',
                  critical: false,
                  impactDesc: 'Float absorbed: 14 days total float remaining'
                },
                {
                  code: 'ACT-4020',
                  name: 'Primary MEP Plant & Transformer energisation',
                  baseStart: '01 Nov',
                  baseEnd: '15 Feb',
                  actualStart: '15 Dec',
                  actualEnd: '28 Feb',
                  variance: '+13d',
                  critical: true,
                  impactDesc: 'Eskom grid tie-in delays (Force Majeure)'
                },
                {
                  code: 'ACT-5010',
                  name: 'Architectural Finishes, Commissioning & Handover',
                  baseStart: '15 Jan',
                  baseEnd: '14 Nov',
                  actualStart: '10 Feb',
                  actualEnd: '06 Mar',
                  variance: '+112d',
                  critical: true,
                  impactDesc: 'Cumulative critical path shift to practical completion'
                }
              ].map((task, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-400 text-[11px]">{task.code}</span>
                      <span className="font-bold text-slate-200">{task.name}</span>
                      {task.critical && (
                        <span className="text-[9px] bg-red-950 text-red-400 border border-red-800/50 px-1.5 py-0.2 rounded font-black">
                          CRITICAL PATH
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-3">
                      <span>Planned: {task.baseStart} – {task.baseEnd}</span>
                      <span className="font-mono text-amber-400 font-bold">{task.variance}</span>
                    </div>
                  </div>

                  {/* Gantt Bar Graphic */}
                  <div className="h-4 w-full bg-slate-900 rounded overflow-hidden border border-slate-800 relative flex items-center">
                    {/* Baseline Bar */}
                    {activeTimelineView === 'baseline' && (
                      <div
                        className="h-full bg-blue-600 rounded"
                        style={{
                          marginLeft: `${idx * 12}%`,
                          width: `${Math.max(18, 45 - idx * 4)}%`
                        }}
                      ></div>
                    )}

                    {/* Impacted Bar (TIA) */}
                    {activeTimelineView === 'impacted' && (
                      <div
                        className="h-full bg-amber-500 rounded relative"
                        style={{
                          marginLeft: `${idx * 14}%`,
                          width: `${Math.max(22, 52 - idx * 4)}%`
                        }}
                      >
                        <div className="absolute right-0 top-0 h-full w-2 bg-red-500"></div>
                      </div>
                    )}

                    {/* Final As-Built Windows Bar */}
                    {activeTimelineView === 'asbuilt' && (
                      <div
                        className="h-full bg-gradient-to-r from-blue-700 via-amber-600 to-red-600 rounded"
                        style={{
                          marginLeft: `${idx * 15}%`,
                          width: `${Math.max(25, 60 - idx * 4)}%`
                        }}
                      ></div>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-500 italic pl-1">
                    Event Driver: {task.impactDesc}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded bg-blue-600"></span>
                  <span>As-Planned Activity</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded bg-amber-500"></span>
                  <span>Employer Delay Fragnet</span>
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <span className="w-3 h-3 rounded bg-red-600"></span>
                  <span>Critical Path Slippage</span>
                </span>
              </div>

              <button
                onClick={() => onNavigate?.('contact')}
                className="text-red-400 hover:text-red-300 font-bold flex items-center gap-1 text-xs"
              >
                <span>Request Forensic Analysis for Your Baseline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 CORE FORENSIC SERVICE CAPABILITIES */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>Core Service Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              SPECIALIST DELAY &amp; PROGRAMME SERVICES
            </h2>
            <p className="text-base text-slate-400 mt-3">
              From live project programme controls to retrospective high-stakes dispute testimony, we protect your contractual and commercial position.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Forensic Delay Analysis & EOT Claims',
                subtitle: 'SCL Protocol 2nd Edition & AACE 29R-03',
                description:
                  'Comprehensive retrospective and contemporaneous delay investigations. We determine the true cause of critical path delay, evaluate concurrency, and draft robust Extension of Time submissions.',
                bullets: [
                  'Time Impact Analysis (TIA) & Fragnet injection',
                  'Windows / Time Slice analysis of monthly updates',
                  'Collapsed As-Built & Impacted As-Planned',
                  'Critical Path Method (CPM) driving logic validation'
                ]
              },
              {
                icon: Layers,
                title: 'Schedule Health Audits & DCMA 14-Point',
                subtitle: 'Baseline Rigor & Logic Integrity',
                description:
                  'Deep-dive audit of contractor and employer baseline programmes. We identify artificial constraints, negative lags, dangling activities, and excessive float masking delay vulnerabilities.',
                bullets: [
                  'DCMA 14-point schedule health metric scoring',
                  'Identification of missing logic & open-ended tasks',
                  'Hard constraint & relationship type audit',
                  'Resource loading & realistic production rate tests'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Time Impact Analysis (TIA) Management',
                subtitle: 'Contemporaneous Compensation Modeling',
                description:
                  'Real-time modeling of change orders, variation instructions, and employer delays directly into live accepted programmes to substantiate EOT before completion milestones expire.',
                bullets: [
                  'Prospective modeling of early warning events',
                  'Sub-network fragnet preparation and logic tie-in',
                  'NEC4 Clause 62 / FIDIC Clause 8.4 compliance',
                  'Contemporaneous delay notice synchronization'
                ]
              },
              {
                icon: Activity,
                title: 'Disruption & Productivity Loss Calculations',
                subtitle: 'Measured Mile & EVM Inefficiency',
                description:
                  'Quantifying loss of productivity, trade stacking, acceleration costs, and out-of-sequence working caused by continuous design changes and employer disruptions.',
                bullets: [
                  'Measured Mile analysis (industry gold standard)',
                  'Earned Value Management (EVM) schedule variance',
                  'Trade crowding & overtime fatigue calculation',
                  'Loss & expense / extended preliminaries quantum'
                ]
              },
              {
                icon: Calendar,
                title: 'Live Programme Management & Controls',
                subtitle: 'Primavera P6 & Powerproject Services',
                description:
                  'Outsourced master scheduling and project controls for developers, main contractors, and project managers requiring pristine programme oversight.',
                bullets: [
                  'Creation of compliant Baseline Revision 0',
                  'Weekly/monthly progress tracking & variance logs',
                  'Critical path float dissipation tracking',
                  'Executive dashboard reporting & milestone forecasting'
                ]
              },
              {
                icon: Gavel,
                title: 'Expert Witness & Dispute Testimony',
                subtitle: 'Adjudication, Arbitration & High Court',
                description:
                  'Independent delay expert reports and technical scheduling testimony for construction adjudications, arbitrations, and high-court litigation across Southern Africa.',
                bullets: [
                  'Independent Expert Witness delay reports',
                  'Adjudication & arbitration hearing defense',
                  'Clear graphical visual aids for legal counsel',
                  'SCL Protocol compliance certification'
                ]
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-950/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-red-600/10 border border-red-500/30 text-red-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                  <div className="text-xs font-semibold text-red-400 mb-3">{service.subtitle}</div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">{service.description}</p>
                  
                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4 mb-6">
                    {service.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate?.('contact')}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCL PROTOCOL METHODOLOGY MATRIX TABLE */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Methodology Selection Standard</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              SCL DELAY ANALYSIS PROTOCOL COMPARISON MATRIX
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Choosing the correct delay analysis method depends on the status of the project, availability of records, and contract requirements.
            </p>
          </div>

          <div className="overflow-x-auto bg-slate-950 border border-slate-800 rounded-xl shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 border-b border-slate-800 text-slate-200">
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">Methodology</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">Timing &amp; Perspective</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">Critical Path Analysis</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">Record Requirements</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">SCL 2nd Ed. Preference</th>
                  <th className="p-4 font-bold uppercase text-[11px] text-slate-400">Adjudication Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <div className="flex items-center gap-1.5 text-red-400">
                      <Clock className="w-4 h-4" />
                      <span>Time Impact Analysis (TIA)</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Contemporaneous Fragnet Modeling</div>
                  </td>
                  <td className="p-4">Prospective or Contemporaneous (During project execution)</td>
                  <td className="p-4 text-emerald-400 font-semibold">Dynamic CPM on live accepted baseline</td>
                  <td className="p-4">High: Regular schedule updates &amp; fragnet logic links</td>
                  <td className="p-4">
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded text-[10px] font-bold">
                      Highest for Live Claims
                    </span>
                  </td>
                  <td className="p-4 text-emerald-400 font-bold">Extremely High (Gold Standard)</td>
                </tr>

                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      <Layers className="w-4 h-4" />
                      <span>Time Slice / Windows Analysis</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Periodic Schedule Snapshots</div>
                  </td>
                  <td className="p-4">Retrospective (Post-completion or periodic review)</td>
                  <td className="p-4 text-emerald-400 font-semibold">Evaluates actual critical path shift per window</td>
                  <td className="p-4">High: Contemporaneous monthly schedule updates</td>
                  <td className="p-4">
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-700/50 px-2 py-0.5 rounded text-[10px] font-bold">
                      Highest for Retrospective
                    </span>
                  </td>
                  <td className="p-4 text-emerald-400 font-bold">Extremely High</td>
                </tr>

                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <div className="flex items-center gap-1.5 text-blue-400">
                      <GitCommit className="w-4 h-4" />
                      <span>Collapsed As-Built ("But-For")</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Subtractive Delay Extraction</div>
                  </td>
                  <td className="p-4">Retrospective (Post-completion)</td>
                  <td className="p-4 text-amber-400 font-semibold">Subtractive calculation on as-built logic</td>
                  <td className="p-4">Very High: Full as-built dates &amp; logic dependencies</td>
                  <td className="p-4">
                    <span className="bg-blue-950 text-blue-300 border border-blue-700/50 px-2 py-0.5 rounded text-[10px] font-bold">
                      Second Choice Retrospective
                    </span>
                  </td>
                  <td className="p-4 text-blue-300 font-bold">High in Arbitration</td>
                </tr>

                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>As-Planned vs. As-Built</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Direct Comparison</div>
                  </td>
                  <td className="p-4">Retrospective</td>
                  <td className="p-4 text-slate-400">Static or subjective longest path</td>
                  <td className="p-4">Moderate: Baseline and as-built start/finish dates</td>
                  <td className="p-4">
                    <span className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-[10px]">
                      Low (Simple projects only)
                    </span>
                  </td>
                  <td className="p-4 text-amber-400">Moderate (Easily challenged)</td>
                </tr>

                <tr className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">
                    <div className="flex items-center gap-1.5 text-rose-400">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Impacted As-Planned</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-normal">Theoretical Baseline Injection</div>
                  </td>
                  <td className="p-4">Theoretical Prospective</td>
                  <td className="p-4 text-rose-400">Theoretical (Ignores actual progress)</td>
                  <td className="p-4">Low: Baseline only</td>
                  <td className="p-4">
                    <span className="bg-rose-950 text-rose-300 border border-rose-800/50 px-2 py-0.5 rounded text-[10px] font-bold">
                      Not Recommended by SCL
                    </span>
                  </td>
                  <td className="p-4 text-red-400 font-bold">Low (Frequently rejected)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROVEN CASE STUDIES & TRACK RECORD */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              REPRESENTATIVE DELAY ANALYSIS CASE STUDIES
            </h2>
            <p className="text-base text-slate-400 mt-2">
              Real-world examples where our forensic schedule analysis substantiated extensions and defeated liquid damages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                sector: 'Commercial High-Rise & Mixed-Use',
                title: 'Sandton CBD Mixed-Use Tower (R920M)',
                contract: 'JBCC Edition 6.2',
                challenge:
                  'Main contractor faced R38.5M in liquidated damages following a 118-day overall project overrun caused by sequential late tenant design freeze dates and substation grid delays.',
                solution:
                  'Performed a Time Slice Windows Analysis across 14 monthly Primavera P6 updates. Demonstrated that employer design revisions drove the critical path for 94 days, with 12 days inclement weather.',
                result: 'Awarded 106 days Extension of Time with R18.2M preliminary loss adjustment; R38.5M LADs completely defeated.'
              },
              {
                sector: 'Transport & Infrastructure Interchange',
                title: 'Provincial Highway Interchange Upgrade (R1.4B)',
                contract: 'FIDIC Red Book (1999)',
                challenge:
                  'Employer issued default notices claiming contractor-culpable bridge deck delay of 84 days, threatening contract termination and performance bond encashment.',
                solution:
                  'Utilized Time Impact Analysis (TIA) with fragnet modeling in Asta Powerproject. Proved that unmapped underground optical fiber cables halted bridge abutment piling by 72 critical days.',
                result: 'Dispute Adjudication Board (DAB) upheld contractor entitlement: 72-day EOT granted and R24.6M delay damages claim cancelled.'
              },
              {
                sector: 'Heavy Industrial & Power Processing',
                title: 'Mining Beneficiation Plant Expansion (R650M)',
                contract: 'NEC3 ECC Option A',
                challenge:
                  'Project Manager rejected 18 compensation events due to alleged lack of accepted programme updates, leaving the contractor exposed to delay damages.',
                solution:
                  'Conducted Collapsed As-Built ("But-For") and schedule logic health audit. Established that employer equipment delivery delays prevented mechanical commissioning sequence.',
                result: 'Settled amicably prior to arbitration: 54-day EOT agreed and R16.8M in acceleration/delay costs compensated.'
              }
            ].map((study, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-red-400 uppercase tracking-wider text-[10px]">
                      {study.sector}
                    </span>
                    <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded font-mono">
                      {study.contract}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{study.title}</h3>

                  <div className="space-y-3 text-xs mb-6">
                    <div>
                      <div className="text-slate-400 font-semibold mb-1">The Challenge:</div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-slate-400 font-semibold mb-1">Our Forensic Solution:</div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 p-3.5 rounded-lg border border-emerald-900/50">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    Quantified Outcome:
                  </div>
                  <p className="text-xs font-bold text-white">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT REQUEST & LEAD CAPTURE FORM */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0e1938] border-2 border-slate-700/80 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <FileSearch className="w-3.5 h-3.5" />
                <span>Confidential Consultation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                REQUEST A SCHEDULE HEALTH AUDIT OR DELAY REPORT
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Submit your project details for an initial confidential review of your schedule files (.XER / .MPP / .PP) and EOT claim merits.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Programme Audit Request Received</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our senior delay analyst will review your project parameters and contact you within 24 hours to arrange secure file transfer and preliminary assessment.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-5 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded transition-colors"
                >
                  Submit Another Project Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Johan van der Merwe"
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3.5 py-2.5 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Concor Construction / Growthpoint"
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3.5 py-2.5 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="johan@company.co.za"
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3.5 py-2.5 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+27 (0) 82 000 0000"
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3.5 py-2.5 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Contract Form</label>
                    <select
                      value={formData.contractForm}
                      onChange={(e) => setFormData({ ...formData, contractForm: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3 py-2.5 focus:border-red-500 focus:outline-none"
                    >
                      <option>JBCC Edition 6.2 / 5.0</option>
                      <option>FIDIC Red Book (1999/2017)</option>
                      <option>FIDIC Yellow Book (EPC)</option>
                      <option>NEC3 / NEC4 ECC</option>
                      <option>GCC 2015 / 2010</option>
                      <option>Custom / Bespoke Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Schedule Software</label>
                    <select
                      value={formData.scheduleTool}
                      onChange={(e) => setFormData({ ...formData, scheduleTool: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3 py-2.5 focus:border-red-500 focus:outline-none"
                    >
                      <option>Oracle Primavera P6</option>
                      <option>Asta Powerproject</option>
                      <option>Microsoft Project (MPP)</option>
                      <option>Excel / PDF Bar Charts Only</option>
                      <option>No Baseline Schedule Exists</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Estimated Delay Days</label>
                    <select
                      value={formData.estimatedDelay}
                      onChange={(e) => setFormData({ ...formData, estimatedDelay: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3 py-2.5 focus:border-red-500 focus:outline-none"
                    >
                      <option>Under 30 Days</option>
                      <option>30 - 90 Days</option>
                      <option>90 - 180 Days</option>
                      <option>180+ Days (Severe Overrun)</option>
                      <option>Dispute / Litigation Already Commenced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Project Brief &amp; Delay Summary</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe key delay drivers (e.g. late drawing issues, weather, access denial, contractor concurrency) and current dispute status..."
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded px-3.5 py-2.5 focus:border-red-500 focus:outline-none"
                  ></textarea>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded shadow-lg shadow-red-900/50 hover:shadow-red-900/70 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Submit Request for Confidential Schedule Review</span>
                  </button>
                  <div className="text-center text-[10px] text-slate-500 mt-2">
                    🔒 Strict NDA &amp; client confidentiality observed across all submissions.
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="py-20 bg-slate-950 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Delay Forensics FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Everything you need to know about delay methodologies, SCL standards, and dispute representation.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is the Society of Construction Law (SCL) Delay and Disruption Protocol?',
                a: 'The SCL Protocol (2nd Edition) is the globally recognized gold standard for determining delay and disruption in construction projects. It provides authoritative guidance on selecting delay analysis methodologies, managing concurrent delays, handling total float ownership, and applying contemporaneous schedule records.'
              },
              {
                q: 'How does Concurrent Delay affect an Extension of Time (EOT) claim in South Africa?',
                a: 'Under the SCL Protocol and common South African law (JBCC, FIDIC, GCC), where employer delay and contractor delay occur concurrently and both independently cause delay to the completion date, the contractor is generally entitled to an extension of time (relief from delay damages) but may not be entitled to recover time-related preliminary costs (loss and expense) for the concurrent duration.'
              },
              {
                q: 'Why are static Excel bar charts rejected in Adjudication and Arbitration?',
                a: 'Static bar charts do not contain mathematical Critical Path Method (CPM) logic networks (predecessor/successor links, lag types, calendar constraints). Without dynamic logic, it is impossible to objectively prove whether a delay event actually delayed the critical path to completion or merely consumed available float on non-critical activities.'
              },
              {
                q: 'What is the difference between Time Impact Analysis (TIA) and Windows Analysis?',
                a: 'Time Impact Analysis (TIA) is primarily a contemporaneous or prospective technique that injects sub-network fragnets of the delay event into the most recent accepted schedule update before the event occurred. Windows Analysis (Time Slice) is a retrospective method that breaks the project timeline into discrete intervals (e.g. monthly updates) to measure actual progress and critical path shifts after the fact.'
              },
              {
                q: 'Who owns the project float in standard construction contracts?',
                a: 'Unless explicitly stated otherwise in the contract particulars, the SCL Protocol establishes that project float belongs to the project on a "first-come, first-served" basis. If an employer delay occurs first and uses available float without extending the completion date, no EOT is granted until all float on that path is exhausted.'
              },
              {
                q: 'Can you assist if our baseline schedule was never officially accepted by the Principal Agent or Engineer?',
                a: 'Yes. In cases where no accepted baseline exists, our forensic experts can perform a retrospective Baseline Reconstruction and Logic Validation to create an equitable, fact-based schedule model that satisfies Adjudicator and Court evidentiary standards.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-850"
                >
                  <span className="font-bold text-sm text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-red-400 shrink-0 transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 border-t border-slate-800/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standardized Footer */}
      <EurekaFooter
        currentPage="delay-analysis"
        onNavigate={onNavigate}
        
      />
    </div>
  );
};
