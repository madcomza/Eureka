import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  Sparkles,
  Building2,
  HardHat,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Calendar,
  Layers,
  FileCheck,
  AlertTriangle,
  Award,
  Users,
  Check,
  Sliders,
  DollarSign,
  Droplet,
  Sun,
  Flame,
  Wind,
  Warehouse,
  Hospital,
  ShoppingBag,
  Brush,
  FileText,
  BadgePercent
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaCommercialCleaningPageProps {
  onNavigate?: (
    page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaCommercialCleaningPage: React.FC<EurekaCommercialCleaningPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeFrequencyTab, setActiveFrequencyTab] = useState<'daily' | 'weekly' | 'monthly' | 'quarterly'>('daily');
  
  // Interactive Cleaning Cost Estimator State
  const [propertyType, setPropertyType] = useState<'office' | 'industrial' | 'medical' | 'retail' | 'post-con'>('office');
  const [areaSize, setAreaSize] = useState<number>(1200); // m²
  const [frequency, setFrequency] = useState<'5days' | '7days' | '3days' | 'deep-once'>('5days');
  const [includeConsumables, setIncludeConsumables] = useState<boolean>(true);
  const [includeWindowWash, setIncludeWindowWash] = useState<boolean>(false);
  const [includeCarpetExtraction, setIncludeCarpetExtraction] = useState<boolean>(false);

  // Form submission state
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    propertyType: 'Commercial Office Space',
    size: '1,000 - 2,500 m²',
    message: ''
  });

  // Calculate estimated price based on parameters
  const calculateEstimatedPrice = () => {
    let baseRatePerSqm = 6.5; // ZAR per sqm per month baseline
    if (propertyType === 'office') baseRatePerSqm = 6.2;
    if (propertyType === 'industrial') baseRatePerSqm = 5.4;
    if (propertyType === 'medical') baseRatePerSqm = 9.8;
    if (propertyType === 'retail') baseRatePerSqm = 7.1;
    if (propertyType === 'post-con') baseRatePerSqm = 14.5; // Once-off intensive

    let freqMultiplier = 1.0;
    if (frequency === '5days') freqMultiplier = 1.0;
    if (frequency === '7days') freqMultiplier = 1.35;
    if (frequency === '3days') freqMultiplier = 0.68;
    if (frequency === 'deep-once') freqMultiplier = 1.6;

    let subtotal = areaSize * baseRatePerSqm * freqMultiplier;

    if (includeConsumables) subtotal += areaSize * 0.95;
    if (includeWindowWash) subtotal += 1850;
    if (includeCarpetExtraction) subtotal += 2400;

    return Math.round(subtotal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="commercial-cleaning" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#050b1b] via-[#09153a] to-[#041029] text-white py-16 lg:py-20 border-b-4 border-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL CLEANING &amp; <span className="text-sky-400">HYGIENE SERVICES</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Hospital-grade janitorial programs, high-traffic commercial office care, industrial deep degreasing, and specialized facade washing. Delivered by fully vetted, supervisor-led cleaning teams across Gauteng and South Africa with 100% SABS 1853/1828 eco-compliant chemical sanitisation.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#cleaning-quote"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>REQUEST CLEANING AUDIT &amp; RATE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#disciplines"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all"
                >
                  EXPLORE 8 SERVICE DISCIPLINES
                </a>
              </div>

              {/* 4 Live KPI Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-white">99.8%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Quality Audit Pass</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-sky-400">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">NCCA &amp; OHS Compliant</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-white">1 : 12</div>
                  <div className="text-[11px] text-slate-400 font-medium">Supervisor Ratio</div>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-red-400">Green Star</div>
                  <div className="text-[11px] text-slate-400 font-medium">Eco-Certified Chemicals</div>
                </div>
              </div>
            </div>

            {/* Right Col: Scope Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-slate-700/80 shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                      <Brush className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white leading-tight">Cleaning Scope Snapshot</h2>
                      <span className="text-[11px] text-slate-400">Turnkey Commercial Janitorial</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-500 text-slate-950">
                    SABS 1853
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Daily Contract Janitorial:</strong> Routine office, desk, lobby &amp; boardroom cleaning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Deep Ablution Sanitisation:</strong> Touchpoint steam sterilization &amp; washroom replenishment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Carpet &amp; Upholstery Extraction:</strong> High-temperature deep soil &amp; allergen extraction.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Industrial Floor Care:</strong> Auto-scrubbing, epoxy degreasing, strip &amp; high-speed buffing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>High-Level Facades &amp; Windows:</strong> Water-fed pole &amp; certified rope access exterior glass.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span><strong>Post-Construction Handover:</strong> Paint residue removal, silicone buffing &amp; sparkle polish.</span>
                  </li>
                </ul>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>COID Act &amp; Public Liability Insured (R20m)</span>
                  </span>
                  <span className="font-bold text-white">Full Indemnity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 8 CORE CLEANING DISCIPLINES */}
      <section id="disciplines" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-sky-600 bg-sky-50 px-3 py-1 rounded-full uppercase border border-sky-200/60">
              SPECIALISED HYGIENE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
              8 Specialised Commercial Cleaning Disciplines
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We engineer tailor-made cleaning frequencies and technical protocols to protect your building assets, elevate employee productivity, and ensure flawless corporate presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Discipline 1 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Daily Contract Office Janitorial
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Scheduled day/night cleaning covering workstations, reception, boardrooms, waste bin clearance, and high-touch surface disinfections.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Keycard-secured office cleaners</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Pre-shift touchpoint sanitisation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Waste segregation &amp; recycling</span>
                </li>
              </ul>
            </article>

            {/* Discipline 2 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Carpet &amp; Upholstery Extraction
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Industrial hot water injection extraction removing deep embedded grit, coffee stains, allergens, and neutralizing odors without fiber distortion.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Rapid 2-4 hour drying cycle</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Anti-microbial stain barrier treatment</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Office task chair steam washing</span>
                </li>
              </ul>
            </article>

            {/* Discipline 3 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Industrial &amp; Warehouse Floor Scrubbing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Heavy-duty ride-on auto-scrubbers removing forklift tire rubber marks, oil spillages, pallet dust, and chemical residues from industrial floors.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Epoxy floor deep rejuvenation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Diamond-pad high-speed burnishing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Loading dock pressure washing</span>
                </li>
              </ul>
            </article>

            {/* Discipline 4 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                High-Level Facade &amp; Window Wash
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Purified de-ionized water reach-and-wash systems (up to 5 storeys) and certified rope access riggers for high-rise exterior glass and louvers.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Streak-free spot-free deionised wash</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Fall-arrest &amp; Working at Heights safety</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Aluminium cladding pressure cleaning</span>
                </li>
              </ul>
            </article>

            {/* Discipline 5 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Post-Construction Sparkle Handover
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Intensive builders handover clean stripping grout haze, paint splatters, sawdust from ducting, protective tape adhesives, and polishing all glazing.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Tenant fit-out handover ready</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Detailed snagging inspection clean</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Sanitaryware acid-free descaling</span>
                </li>
              </ul>
            </article>

            {/* Discipline 6 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                06
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Healthcare &amp; Clinical Sanitisation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Strict infection prevention protocols for clinics, labs, and medical consulting suites with hospital-grade biocides and terminal fogging.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>SABS 1853 certified sanitizers</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Color-coded pathogen containment</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Bio-waste compliant procedures</span>
                </li>
              </ul>
            </article>

            {/* Discipline 7 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                07
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Ablution &amp; Restroom Deep Hygiene
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                High-pressure steam sterilization of urinals, toilet bowls, tile grout lines, sanitary bins, and automatic replenishment of paper &amp; soap consumables.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Uric acid descaling &amp; odor eradication</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Automated dispenser monitoring</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Bactericidal hygiene certificate</span>
                </li>
              </ul>
            </article>

            {/* Discipline 8 */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                08
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Retail &amp; High-Footfall Floor Sealing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Specialized protective polymer sealers for vinyl, terrazzo, marble, and porcelain floors in shopping malls, automotive showrooms, and retail centers.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>High-gloss non-slip slip-resistance</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Scuff &amp; scratch resistance sealing</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Night-shift low-disruption execution</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 5. COLOR-CODED MICROFIBER HYGIENE PROTOCOL */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-widest text-red-400 uppercase bg-red-950/80 px-2.5 py-1 rounded border border-red-800">
                CONTAMINATION CONTROL PROTOCOL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4 leading-tight">
                Zero Cross-Contamination Guarantee
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                To guarantee absolute hygiene integrity, our cleaners enforce the international 4-stage color-coding protocol. A cloth or mop utilized in a restroom will never touch a boardroom desk or canteen surface.
              </p>
              <div className="flex items-center gap-3 text-xs text-emerald-400 font-bold bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/60">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Complies with British Institute of Cleaning Science (BICS) &amp; NCCA South Africa standards.</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Red Zone */}
              <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/40 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  RED
                </div>
                <div>
                  <h4 className="text-sm font-bold text-red-300">High-Risk Sanitary Areas</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Toilet bowls, urinals, sanitary bins, and bathroom floor drains exclusively.
                  </p>
                </div>
              </div>

              {/* Yellow Zone */}
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                  YLW
                </div>
                <div>
                  <h4 className="text-sm font-bold text-amber-300">Washroom Surfaces &amp; Tiles</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Basins, mirrors, hand dryers, cubicle door handles, and wall ceramic tiles.
                  </p>
                </div>
              </div>

              {/* Blue Zone */}
              <div className="p-4 rounded-xl bg-sky-950/40 border border-sky-500/40 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                  BLU
                </div>
                <div>
                  <h4 className="text-sm font-bold text-sky-300">General Low-Risk Office Zones</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Workstations, reception desks, keyboards, filing cabinets, and conference tables.
                  </p>
                </div>
              </div>

              {/* Green Zone */}
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                  GRN
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-300">Catering, Canteens &amp; Kitchens</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Food prep countertops, microwaves, bar fridges, dining tables, and coffee stations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLEANING FREQUENCY & SCHEDULE MATRIX */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-black tracking-widest text-sky-600 bg-sky-100/70 px-3 py-1 rounded-full uppercase">
              STRUCTURED MAINTENANCE SCHEDULE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Frequency &amp; Cleaning Task Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear accountability with scheduled preventative tasks logged digitally via on-site QR scans.
            </p>
          </div>

          {/* Frequency Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-200/80 rounded-xl gap-1">
              {(['daily', 'weekly', 'monthly', 'quarterly'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFrequencyTab(tab)}
                  className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                    activeFrequencyTab === tab
                      ? 'bg-white text-[#08286b] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab === 'daily' && 'Daily Shifts'}
                  {tab === 'weekly' && 'Weekly Deep Work'}
                  {tab === 'monthly' && 'Monthly Restorative'}
                  {tab === 'quarterly' && 'Quarterly / Specialized'}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {activeFrequencyTab === 'daily' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Office &amp; Workstations
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Dusting &amp; damp-wiping all desk tops &amp; monitors</li>
                    <li>• Sanitising phone handsets, mice &amp; keyboards</li>
                    <li>• Emptying waste bins &amp; relining with eco-bags</li>
                    <li>• Vacuuming main carpeted walkways &amp; aisles</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Restrooms &amp; Ablutions
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Disinfecting toilet seats, bowls &amp; flush levers (3x daily)</li>
                    <li>• Scrubbing &amp; polishing vanity basins &amp; chrome taps</li>
                    <li>• Refilling soap, hand towels &amp; 2-ply toilet rolls</li>
                    <li>• Mopping tiled floors with SABS bactericide solution</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Kitchens &amp; Common Areas
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Wiping kitchen counters, dining tables &amp; splashbacks</li>
                    <li>• Cleaning microwave interior &amp; exterior surfaces</li>
                    <li>• Scrubbing stainless steel sinks &amp; draining boards</li>
                    <li>• Glass entrance door spot-cleaning &amp; handle sanitisation</li>
                  </ul>
                </div>
              </div>
            )}

            {activeFrequencyTab === 'weekly' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Detailed Dusting
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• High dusting of light fixtures, AC vents &amp; ceiling cornices</li>
                    <li>• Skirting boards, door frames &amp; partition glass tracks</li>
                    <li>• Behind printing stations &amp; server room perimeter wipe</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Restroom Descaling
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Deep chemical descaling of urinal trap uric buildup</li>
                    <li>• Wall tile grout scrubbing with high-pressure steamers</li>
                    <li>• Deep polishing of stainless steel dispenser enclosures</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Kitchen Deep Degreasing
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Full internal wipe of company staff fridges</li>
                    <li>• Kitchen cabinetry handles, water cooler drain trays</li>
                    <li>• Canteen floor auto-scrubbing &amp; sanitising</li>
                  </ul>
                </div>
              </div>
            )}

            {activeFrequencyTab === 'monthly' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Internal Glazing &amp; Blinds
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Full squeegee wash of boardroom internal glass partitions</li>
                    <li>• Vacuuming &amp; damp-wiping aluminium window blinds</li>
                    <li>• Polishing acoustic felt panels &amp; architectural finishes</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    Hard Floor Burnishing
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• High-speed rotary burnishing of vinyl &amp; terrazzo tiles</li>
                    <li>• Machine scrubbing of basement lobbies &amp; lift thresholds</li>
                    <li>• Anti-slip coefficient inspection &amp; top-up polish</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Deep Sanitisation Fogging
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Ultra-low volume (ULV) cold biocide misting of auditoriums</li>
                    <li>• Call center headphone &amp; shared station sterilization</li>
                    <li>• Air conditioning return-air register disinfection</li>
                  </ul>
                </div>
              </div>
            )}

            {activeFrequencyTab === 'quarterly' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Full Carpet Deep Extraction
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Wall-to-wall hot water injection extraction of all carpet tiles</li>
                    <li>• Deep spot treatment of stubborn beverage &amp; ink spills</li>
                    <li>• Application of anti-soil fluoropolymer protection</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500" />
                    External Facade &amp; Window Wash
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Multi-storey deionised reach-and-wash water-fed glass wash</li>
                    <li>• Building entrance canopy pressure washing &amp; spider removal</li>
                    <li>• Outdoor seating &amp; smoking area high-pressure degreasing</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#08286b] mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Strip &amp; Seal Re-Coating
                  </h4>
                  <ul className="text-xs text-slate-600 space-y-2">
                    <li>• Chemical stripping of yellowed old wax coatings</li>
                    <li>• Application of 3 coats of heavy-duty polyurethane sealer</li>
                    <li>• Restores 100% optical gloss on high-footfall corridors</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE CLEANING RATE ESTIMATOR */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase border border-emerald-200">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Interactive Cleaning Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Configure your facility size and frequency to preview an estimated monthly SLA rate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            {/* Left Controls */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6">
              {/* Property Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Facility Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'office', label: 'Office Space' },
                    { id: 'industrial', label: 'Warehouse / Factory' },
                    { id: 'medical', label: 'Medical / Clinic' },
                    { id: 'retail', label: 'Retail / Mall' },
                    { id: 'post-con', label: 'Post-Construction' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setPropertyType(type.id as any)}
                      className={`p-2.5 rounded-lg text-xs font-bold transition-all text-center border ${
                        propertyType === type.id
                          ? 'bg-[#08286b] text-white border-[#08286b] shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Size Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Approximate Floor Area (m²)
                  </label>
                  <span className="text-base font-black text-[#08286b] font-mono bg-sky-100 px-2.5 py-0.5 rounded">
                    {areaSize.toLocaleString()} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={areaSize}
                  onChange={(e) => setAreaSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#08286b]"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Small Office (200 m²)</span>
                  <span>Medium Facility (5,000 m²)</span>
                  <span>Mega Complex (10,000 m²+)</span>
                </div>
              </div>

              {/* Cleaning Frequency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Service Frequency
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: '5days', label: '5 Days / Week', sub: 'Standard Mon-Fri' },
                    { id: '7days', label: '7 Days / Week', sub: '24/7 Operations' },
                    { id: '3days', label: '3 Days / Week', sub: 'Mon / Wed / Fri' },
                    { id: 'deep-once', label: 'Once-Off Deep', sub: 'Intensive Clean' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFrequency(f.id as any)}
                      className={`p-2.5 rounded-lg text-xs font-bold transition-all text-left border ${
                        frequency === f.id
                          ? 'bg-sky-700 text-white border-sky-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>{f.label}</div>
                      <div className={`text-[10px] font-normal ${frequency === f.id ? 'text-sky-200' : 'text-slate-500'}`}>
                        {f.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-on Options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Add-on Services
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-2 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeConsumables}
                      onChange={(e) => setIncludeConsumables(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      Include Washroom Consumables (2-ply paper, hand soap, sanitizers)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeWindowWash}
                      onChange={(e) => setIncludeWindowWash(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      Include External Reach-and-Wash Window Clean (Quarterly)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-2 rounded bg-white border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="checkbox"
                      checked={includeCarpetExtraction}
                      onChange={(e) => setIncludeCarpetExtraction(e.target.checked)}
                      className="w-4 h-4 text-sky-600 rounded"
                    />
                    <span className="text-xs font-medium text-slate-700">
                      Include Full Carpet Steam Extraction Cycle (Bi-Annual)
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#050b1b] to-[#09153a] text-white p-7 rounded-2xl border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BadgePercent className="w-4 h-4" />
                <span>Estimated Monthly SLA Rate</span>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white mb-2 font-mono">
                R {calculateEstimatedPrice().toLocaleString()} <span className="text-sm font-normal text-slate-400">/ month*</span>
              </div>

              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                *Estimated baseline indicative rate (excl. VAT). Final proposal finalized after on-site walkthrough and density audit.
              </p>

              <div className="space-y-3 py-4 border-t border-b border-slate-800 text-xs text-slate-300 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Facility Size:</span>
                  <span className="font-bold text-white">{areaSize.toLocaleString()} m²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Schedule:</span>
                  <span className="font-bold text-white capitalize">{frequency.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Chemicals:</span>
                  <span className="font-bold text-emerald-400">100% Included (SABS 1853)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Equipment:</span>
                  <span className="font-bold text-sky-400">Auto-scrubbers &amp; HEPA Vacs</span>
                </div>
              </div>

              <a
                href="#cleaning-quote"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>LOCK IN THIS PROPOSAL RATE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div className="mt-4 text-[11px] text-center text-slate-400">
                🔒 Free 1-Day Trial Clean Available for Portfolio Managers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. REQUEST CLEANING QUOTE / AUDIT FORM */}
      <section id="cleaning-quote" className="py-16 bg-[#050b1b] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-widest text-sky-400 uppercase bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                DIRECT CONSULTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4 leading-tight">
                Request a Comprehensive Facility Cleaning Audit
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Receive a zero-obligation on-site audit from our Operations Manager. We review your current cleaning schedule, identify hygiene risks, and submit a tailored service level agreement within 24 hours.
              </p>

              <div className="space-y-3 text-xs text-slate-300 mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>On-site walkthrough by registered Operations Supervisor</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Detailed square-meter specification and staffing breakdown</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Health &amp; Safety compliance verification (COID &amp; OHS file)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-xs text-slate-400 mb-1">Direct Operations Desk:</div>
                <div className="text-lg font-black text-white font-mono flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+27 74 518 7012</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Available 24/7 for Emergency Dispatches</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200">
                {quoteSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">Audit Request Submitted!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                      Thank you. Our Operations Manager will contact you within 2 hours to confirm your site address and schedule the walkthrough.
                    </p>
                    <button
                      onClick={() => setQuoteSubmitted(false)}
                      className="px-5 py-2 bg-[#08286b] text-white text-xs font-bold rounded-lg"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sipho Nkosi"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Company / Property Entity *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Redefine Properties / Corporate Office"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sipho@company.co.za"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Direct Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+27 82 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        >
                          <option>Commercial Office Space</option>
                          <option>Industrial Warehouse / Logistics Park</option>
                          <option>Medical Clinic / Hospital Facility</option>
                          <option>Retail Shopping Mall</option>
                          <option>Educational / University Campus</option>
                          <option>Post-Construction Handover</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Approximate Area (m²)
                        </label>
                        <select
                          value={formData.size}
                          onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                        >
                          <option>Under 500 m²</option>
                          <option>500 m² - 1,500 m²</option>
                          <option>1,500 m² - 5,000 m²</option>
                          <option>5,000 m² - 15,000 m²</option>
                          <option>Over 15,000 m² (Multi-site portfolio)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Specific Scope Requirements or Current Pain Points
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Current cleaners lack supervision, high-traffic carpet stains, need evening shifts, or require urgent post-builder clean..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-sky-600 bg-slate-50"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer"
                    >
                      REQUEST ON-SITE CLEANING PROPOSAL
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLEANING FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-sky-600 bg-sky-100 px-3 py-1 rounded-full uppercase">
              COMMERCIAL HYGIENE FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear answers regarding security vetting, chemical safety, shift flexibility, and supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Are your cleaners vetted with criminal background checks?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes, 100%. Every Eureka cleaning operative undergoes rigorous background checks, fingerprint verification via SAPS, proof of residence auditing, and strict referencing before assignment to any commercial client facility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Can cleaning shifts be scheduled during evening or weekend hours?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Absolutely. We operate 24 hours a day. We can deploy day porters for continuous touchpoint sanitation during business hours, or dedicated night-shift teams (6:00 PM – 2:00 AM) to prevent disruption to your staff and clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                Do you supply your own cleaning machinery and eco-chemicals?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. Eureka provides all industrial equipment (auto-scrubbers, HEPA commercial vacuums, steam extractors) along with SABS 1853-approved eco-friendly, non-toxic cleaning chemicals accompanied by Material Safety Data Sheets (MSDS).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-2">
                How do you maintain quality control across large facilities?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain a strict 1:12 supervisor-to-cleaner ratio. Supervisors perform twice-daily digital audits using mobile inspection software with photographic checklists, ensuring consistent SLA compliance with monthly scoring reports sent to your management team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CORPORATE FOOTER */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
