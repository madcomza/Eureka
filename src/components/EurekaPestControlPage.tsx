import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  Bug,
  ShieldCheck,
  Building2,
  HardHat,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Award,
  Users,
  FileCheck,
  Sparkles,
  Sliders,
  DollarSign,
  Droplet,
  Sun,
  Flame,
  Wind,
  Warehouse,
  Hospital,
  ShoppingBag,
  FileText,
  BadgeAlert,
  Search,
  Crosshair,
  Compass,
  Zap,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaPestControlPageProps {
  onNavigate?: (
    page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaPestControlPage: React.FC<EurekaPestControlPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<'rodents' | 'insects' | 'termites' | 'birds' | 'fumigation'>('rodents');
  
  // Interactive Pest Risk Assessment / Cost Estimator State
  const [facilityType, setFacilityType] = useState<'food_fmcg' | 'warehouse' | 'commercial_office' | 'hospitality' | 'residential'>('food_fmcg');
  const [infestationSeverity, setInfestationSeverity] = useState<'preventative' | 'moderate' | 'critical'>('moderate');
  const [propertyArea, setPropertyArea] = useState<number>(2500); // m²
  const [includeBirdProofing, setIncludeBirdProofing] = useState<boolean>(false);
  const [includeSubterraneanTermiteCheck, setIncludeSubterraneanTermiteCheck] = useState<boolean>(false);
  const [includeHaccpLogging, setIncludeHaccpLogging] = useState<boolean>(true);

  // Form submission state
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Calculate estimated price based on parameters
  const calculateEstimatedPrice = () => {
    let baseRate = 1850; // Base callout & station inspection fee
    if (facilityType === 'food_fmcg') baseRate = 3200; // HACCP certified intensive
    if (facilityType === 'warehouse') baseRate = 2600;
    if (facilityType === 'hospitality') baseRate = 2800;
    if (facilityType === 'commercial_office') baseRate = 1950;
    if (facilityType === 'residential') baseRate = 1450;

    let severityMultiplier = 1.0;
    if (infestationSeverity === 'preventative') severityMultiplier = 0.85;
    if (infestationSeverity === 'moderate') severityMultiplier = 1.15;
    if (infestationSeverity === 'critical') severityMultiplier = 1.65;

    let areaFee = (propertyArea / 500) * 280;

    let subtotal = (baseRate + areaFee) * severityMultiplier;

    if (includeBirdProofing) subtotal += 3500;
    if (includeSubterraneanTermiteCheck) subtotal += 2200;
    if (includeHaccpLogging) subtotal += 650;

    return Math.round(subtotal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="pest-control" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#04101e] via-[#081e36] to-[#030c17] text-white py-16 lg:py-20 border-b-4 border-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Bug className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • INTEGRATED PEST MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL PEST CONTROL &amp; <span className="text-emerald-400">HUMANE RELOCATION</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Certified, HACCP-compliant pest eradication, tamper-proof rodent perimeter defenses, structural subterranean termite barriers, and humane bird and wildlife relocation for corporate, logistics, healthcare, and retail facilities across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#pest-audit-quote"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>REQUEST SITE AUDIT &amp; QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#pest-solutions"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all"
                >
                  EXPLORE 6 CORE TREATMENTS
                </a>
              </div>

              {/* 4 Live Compliance Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-emerald-400">SAPCA</div>
                  <div className="text-[11px] text-slate-400 font-medium">Certified Officers (P-Reg)</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-white">Act 36</div>
                  <div className="text-[11px] text-slate-400 font-medium">Fertilizers &amp; Remedies 1947</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-sky-400">HACCP</div>
                  <div className="text-[11px] text-slate-400 font-medium">Food Safety Audits</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-amber-400">100% Non-Toxic</div>
                  <div className="text-[11px] text-slate-400 font-medium">Pet &amp; Staff Safe Biocides</div>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Quick Pest Scope Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-slate-700/80 shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white leading-tight">IPM Defense Matrix</h2>
                      <span className="text-[11px] text-slate-400">Integrated Pest Management</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                    SABS 1828
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Tamper-Proof Rodent Stations:</strong> Barcode-tagged perimeter bait &amp; capture traps.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Crawling &amp; Flying Insect Control:</strong> Cockroach gel baiting, residual barrier spraying &amp; UV fly traps.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Subterranean Termite Soil Pre-Treatment:</strong> SANS 10124 compliant perimeter chemical trenching &amp; warranty.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Humane Bird Spikes &amp; Netting:</strong> Rooftop solar array protection, pigeon roosting prevention.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Silo &amp; Warehouse Fumigation:</strong> Phosphine &amp; gas containment under strict safety protocols.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Humane Bee &amp; Snake Relocation:</strong> Live capture and safe bushveld relocation by certified handlers.</span>
                  </li>
                </ul>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-emerald-400" />
                    <span>Digital Barcode Scan Pest Logbook Provided</span>
                  </span>
                  <span className="font-bold text-white">Full Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE PEST SOLUTIONS BREAKDOWN */}
      <section id="pest-solutions" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-200/60">
              TARGETED SCIENTIFIC ERADICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
              Comprehensive Commercial Pest Disciplines
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We employ Integrated Pest Management (IPM) — combining physical exclusion, environmental sanitation, non-toxic monitoring, and precision chemical application to prevent re-infestation without endangering occupants or inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Solution 1: Rodents */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Rodent Elimination &amp; Perimeter Baiting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Complete eradication of roof rats (*Rattus rattus*), Norway rats, and field mice that chew electrical cabling, contaminate food packaging, and spread leptospirosis.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Lockable, child/pet-safe external bait stations</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Digital QR code logging &amp; bait consumption stats</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Structural gnaw-proof wire mesh exclusion</span>
                </li>
              </ul>
            </article>

            {/* Solution 2: Cockroaches & Crawling Insects */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Bug className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Cockroach Gel Baiting &amp; Insect Control
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Odorless micro-encapsulated cockroach gel treatments with cascading nest eradication (German &amp; American cockroaches), ant colony elimination, and silverfish eradication.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>No need to empty cupboards or evacuate offices</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Secondary transfer effect targeting deep breeding nests</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Insect Growth Regulators (IGR) preventing hatching</span>
                </li>
              </ul>
            </article>

            {/* Solution 3: Subterranean Termites */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Termite Soil Barrier &amp; Timber Protection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Pre-construction and post-construction chemical soil barriers complying with SANS 10124 to protect structural timber, drywall framing, and building foundations against wood borer and termites.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200 mb-4">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>5-Year to 10-Year Written Guarantee Certificate</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Precision perimeter drilling and sub-slab injection</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Termite clearance certificates for property conveyancing</span>
                </li>
              </ul>
              <button
                onClick={() => onNavigate?.('pre-soil-treatment')}
                className="w-full mt-auto py-2 px-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 group/btn"
              >
                <span>View Pre-Soil Treatment Page &amp; Estimator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-amber-700" />
              </button>
            </article>

            {/* Solution 4: Bird Proofing */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Bird Proofing &amp; Solar Panel Netting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Non-lethal physical deterrents including marine-grade stainless steel bird spikes, heavy-duty optical netting, and solar panel skirt mesh preventing pigeons from nesting underneath arrays.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Prevents acidic bird droppings from corroding roofs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Protects PV solar inverter efficiency &amp; cabling</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Humane, discreet visual profile matching architecture</span>
                </li>
              </ul>
            </article>

            {/* Solution 5: Flying Insects & UV ILTs */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Electronic Fly Units &amp; Drain Fly Eradication
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Installation and servicing of HACCP glueboard UV electronic fly killers (ILTs), fruit fly bio-foam drain enzyme treatments, and perimeter misting for food processing and canteen areas.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Shatterproof UV lamps &amp; sticky catchboard audits</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Organic drain bio-digestion eradicating drain fly larvae</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Monthly fly-count trend analysis for audit boards</span>
                </li>
              </ul>
            </article>

            {/* Solution 6: Wildlife & Bee Relocation */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-base mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Humane Bee, Wasp &amp; Snake Relocation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Professional ethical live bee removal by certified beekeepers into registered apiaries, wasp nest de-activation, and emergency snake capture and release by herpetologist-certified officers.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Zero-kill policy for honeybees (*Apis mellifera*)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Cavity sealing to prevent queen bee re-colonization</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>24/7 emergency dangerous snake response team</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE 5-STEP INTEGRATED PEST MANAGEMENT (IPM) WORKFLOW */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
              AUDITABLE 5-STAGE PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-2">
              The Eureka IPM Methodological Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Eliminating pests at the biological source rather than merely treating visible symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Inspection &amp; Risk Mapping</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive thermal imaging, moisture checks, and digital mapping of ingress harborages and feeding zones.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Physical Exclusion</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sealing pipe penetrations, dock leveler brush strips, drain mesh caps, and door sweeps to block pest entry.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Sanitation Advisory</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Eliminating moisture traps, food debris accumulations, and advising on organic waste container storage.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                04
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Targeted Biocide Treatment</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision micro-dosed pheromone gels, tamper-safe rodenticides, and IGR application with zero airborne fumes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                05
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Cloud Trend Reporting</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated monthly inspection reports with barcode trap activity scans submitted directly to your QA audit portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE PEST CONTROL SERVICE COST ESTIMATOR */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-emerald-600 bg-emerald-100/70 px-3 py-1 rounded-full uppercase">
              INSTANT BUDGET PLANNER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Commercial Pest Management Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Adjust parameters below to generate a transparent ballpark monthly or once-off treatment budget for your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Configuration Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              {/* Parameter 1: Facility Type */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. Facility Classification
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'food_fmcg', label: 'Food & FMCG Plant', desc: 'HACCP intensive' },
                    { id: 'warehouse', label: 'Logistics / Warehouse', desc: 'Perimeter focus' },
                    { id: 'commercial_office', label: 'Corporate Office', desc: 'Odorless gel' },
                    { id: 'hospitality', label: 'Hotel / Restaurant', desc: 'Kitchen & rooms' },
                    { id: 'residential', label: 'Residential Estate', desc: 'Common areas' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFacilityType(item.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        facilityType === item.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Property Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    2. Total Under-Roof &amp; Perimeter Area
                  </label>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {propertyArea.toLocaleString()} m²
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={20000}
                  step={100}
                  value={propertyArea}
                  onChange={(e) => setPropertyArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Small Unit (300 m²)</span>
                  <span>Mid Industrial (5,000 m²)</span>
                  <span>Mega Logistics (20,000 m²+)</span>
                </div>
              </div>

              {/* Parameter 3: Infestation Severity */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  3. Current Infestation Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'preventative', label: 'Preventative Routine', tag: 'Routine SLA' },
                    { id: 'moderate', label: 'Moderate Infestation', tag: 'Active Pests' },
                    { id: 'critical', label: 'Critical Outbreak', tag: 'Urgent Knockdown' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setInfestationSeverity(item.id as any)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        infestationSeverity === item.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold">{item.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 4: Specialised Add-On Coverages */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  4. Specialized Protection Add-Ons
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeBirdProofing}
                        onChange={(e) => setIncludeBirdProofing(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>Stainless Steel Bird Spikes / Solar Panel Skirt Netting</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 3,500</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeSubterraneanTermiteCheck}
                        onChange={(e) => setIncludeSubterraneanTermiteCheck(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>Subterranean Termite Perimeter Injection &amp; 5-Yr Warranty</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 2,200</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeHaccpLogging}
                        onChange={(e) => setIncludeHaccpLogging(e.target.checked)}
                        className="rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>Barcoded Trap QR Scans &amp; Online Audit Dashboard Access</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 650</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Price Output Summary Box */}
            <div className="lg:col-span-5 bg-[#050b1b] text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                    ESTIMATED CONTRACT BUDGET
                  </span>
                  <h3 className="text-lg font-black text-white">Monthly Service SLA</h3>
                </div>
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="text-center py-4 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Estimated Base Monthly Rate (excl. VAT)</span>
                <div className="text-4xl font-black text-emerald-400">
                  R {calculateEstimatedPrice().toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Subject to formal on-site structural risk assessment
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Facility Size:</span>
                  <span className="font-bold text-white">{propertyArea.toLocaleString()} m²</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Pest Priority:</span>
                  <span className="font-bold text-white uppercase">{facilityType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Compliance Standard:</span>
                  <span className="font-bold text-emerald-400">SAPCA &amp; Act 36 Compliant</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Includes MSDS &amp; Logbook:</span>
                  <span className="font-bold text-white">Yes (Included)</span>
                </div>
              </div>

              <a
                href="#pest-audit-quote"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>LOCK IN THIS ESTIMATE WITH AN AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                ⚡ 24-Hour Emergency Dispatch available for restaurants, retail kitchens, and food distribution hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SITE AUDIT & PROPOSAL REQUEST FORM */}
      <section id="pest-audit-quote" className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Proposal Value Props */}
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
                OFFICIAL SITE ASSESSMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4 leading-tight">
                Request a Free On-Site Pest Risk Inspection
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Our registered P-Registered Pest Control Officers conduct a thorough walk-through of your facility, identifying hidden ingress points, nesting reservoirs, and food source vulnerabilities.
              </p>

              <div className="space-y-3 text-xs text-slate-300 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Detailed IPM Specification:</strong> Custom baiting density and exclusion recommendations.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Disruption Guarantee:</strong> Low-odor and gel treatments executable during normal working hours.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>HACCP &amp; ISO 22000 Ready:</strong> Full documentation for food safety and health department inspectors.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center font-bold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">24/7 Urgent Pest Dispatch Desk</div>
                    <div className="text-base font-black text-white">+27 74 518 7012</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl">
                {quoteSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">Pest Audit Request Received!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                      A senior SAPCA-certified Pest Officer will contact you within 2 hours to confirm your on-site walkthrough and inspect the property.
                    </p>
                    <button
                      onClick={() => setQuoteSubmitted(false)}
                      className="px-5 py-2 bg-[#08286b] text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Submit Another Inspection
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <h3 className="text-base font-black text-slate-900 mb-2">Schedule Your Facility Walkthrough</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Johan van der Merwe"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Company / Facility Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Premier Foods Distribution Centre"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="johan@company.co.za"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+27 82 555 1234"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Primary Pest Concern
                        </label>
                        <select className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 bg-white">
                          <option>Rodents (Rats &amp; Mice)</option>
                          <option>Cockroaches &amp; Crawling Insects</option>
                          <option>Subterranean Termites &amp; Wood Borer</option>
                          <option>Pigeons &amp; Bird Solar Netting</option>
                          <option>Flies &amp; UV Fly Traps</option>
                          <option>Bees / Wasp / Snake Relocation</option>
                          <option>Comprehensive Preventive Contract</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Approximate Facility Size
                        </label>
                        <select className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 bg-white">
                          <option>Under 1,000 m²</option>
                          <option>1,000 m² – 3,000 m²</option>
                          <option>3,000 m² – 10,000 m²</option>
                          <option>Over 10,000 m² (Multi-site / Logistics)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Specific Infestation Notes or Access Constraints
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Detail specific problem areas (e.g. food prep drains, ceiling void rodent noises, roof pigeon nesting)..."
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-md"
                    >
                      SUBMIT PEST AUDIT REQUEST
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PEST FAQ SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase">
              TECHNICAL CLARIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Frequently Asked Questions About Commercial Pest Control
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Are your pest control chemicals safe for commercial kitchens and food processing plants?',
                a: 'Yes, 100%. We only apply non-toxic, odorless, and food-grade certified products registered under Act 36 of 1947 and SABS 1828. We utilize micro-gel baits and tamper-proof bait boxes with zero vapor emission, ensuring no risk of chemical contact with food products, prep surfaces, or packaging.'
              },
              {
                q: 'How frequently does a commercial facility require pest management servicing?',
                a: 'Standard commercial facilities typically require monthly servicing for perimeter rodent monitoring and insect control. High-risk environments such as food manufacturing facilities, hospitals, and canteens undergo bi-weekly inspections to maintain strict HACCP and ISO 22000 compliance.'
              },
              {
                q: 'Do you provide digital service reports and compliance logbooks?',
                a: 'Yes. Every client receives an on-site compliance binder and 24/7 access to our cloud reporting portal. Each bait station and UV fly unit is tagged with a unique barcode scanned during each service, logging bait uptake percentages, species counts, and technician recommendations.'
              },
              {
                q: 'What is your policy regarding honeybees and indigenous wildlife?',
                a: 'We strictly enforce a non-lethal, humane relocation policy for honeybees (*Apis mellifera*). Our registered beekeepers gently remove the queen and colony and transfer them safely to registered apiaries. Snakes and other wildlife are captured by licensed handlers and released into authorized nature reserves.'
              },
              {
                q: 'What warranty is offered on subterranean termite treatments?',
                a: 'Our subterranean termite barrier treatments (using SANS 10124 approved termiticides) come with a written 5-Year to 10-Year re-treatment guarantee. We also issue formal Termite Clearance Certificates required for commercial property transactions.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-100/70 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-emerald-600 transition-transform ${
                      faqOpenIndex === idx ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CORPORATE FOOTER */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
