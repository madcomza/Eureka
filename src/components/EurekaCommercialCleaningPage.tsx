import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import commercialCleaningImg from '../assets/images/Commercial Cleaning.jpg';
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
  ChevronUp,
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
  FileText
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaCommercialCleaningPageProps {
  onNavigate?: (
    page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaCommercialCleaningPage: React.FC<EurekaCommercialCleaningPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeFrequencyTab, setActiveFrequencyTab] = useState<'daily' | 'weekly' | 'monthly' | 'quarterly'>('daily');
  const [openDisciplineIndex, setOpenDisciplineIndex] = useState<number | null>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleDiscipline = (idx: number) => {
    setOpenDisciplineIndex(openDisciplineIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="commercial-cleaning" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#050b1b] text-white py-16 lg:py-20 border-b-4 border-red-600 overflow-hidden">
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
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div>
            {/* Hero Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL CLEANING &amp; <br />
                <span className="text-sky-400">HYGIENE SERVICES</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                Hospital-grade janitorial programs, high-traffic commercial office care, industrial deep degreasing, and specialized facade washing. Delivered by fully vetted, supervisor-led cleaning teams across Gauteng and South Africa with 100% SABS 1853/1828 eco-compliant chemical sanitisation.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>REQUEST CLEANING AUDIT &amp; RATE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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
          </div>
        </div>
      </section>

      {/* 4. 8 CORE CLEANING DISCIPLINES - 2-COLUMN LAYOUT: ACCORDION + IMAGE */}
      <section id="disciplines" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Column 1: Accordion Format (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  number: '01',
                  title: 'Daily Contract Office Janitorial',
                  subtitle: 'Workstations, Boardrooms & Routine Sanitation',
                  description:
                    'Scheduled day and night cleaning covering workstations, reception suites, boardrooms, waste bin clearance, and continuous high-touch surface disinfections.',
                  bullets: [
                    'Keycard-secured, background-checked office cleaners',
                    'Pre-shift touchpoint & desk sanitisation routines',
                    'Waste segregation, recycling & confidential paper handling',
                    'Daily restock of hand towels, sanitizer & consumables'
                  ],
                  highlight: 'Elevates workplace hygiene, minimizes seasonal sick leave, and maintains pristine corporate executive appeal.'
                },
                {
                  number: '02',
                  title: 'Carpet & Upholstery Extraction',
                  subtitle: 'Industrial Hot Water Soil Extraction & Fiber Care',
                  description:
                    'Industrial hot water injection extraction removing deep embedded grit, coffee stains, allergens, and neutralizing odors without fiber distortion.',
                  bullets: [
                    'Rapid 2–4 hour drying cycle with air movers',
                    'Anti-microbial stain barrier & soil-guard protection',
                    'Office task chair, divider panel & fabric steam washing',
                    'Elimination of dust mites, pollen & deep-seated allergens'
                  ],
                  highlight: 'Extends commercial carpeting lifespan by up to 40% while rejuvenating high-traffic walkways.'
                },
                {
                  number: '03',
                  title: 'Industrial & Warehouse Floor Scrubbing',
                  subtitle: 'Heavy-Duty Auto-Scrubbers & Degreasing',
                  description:
                    'Heavy-duty ride-on auto-scrubbers removing forklift tire rubber marks, oil spillages, pallet dust, and chemical residues from industrial floors.',
                  bullets: [
                    'Epoxy floor deep rejuvenation & neutral pH wash',
                    'Diamond-pad high-speed burnishing for gloss durability',
                    'Loading dock, ramp & apron pressure washing',
                    'Oil & grease emulsion extraction prevents slip hazards'
                  ],
                  highlight: 'Ensures OHS slip-and-fall compliance across logistics hubs, distribution centers, and plant floors.'
                },
                {
                  number: '04',
                  title: 'High-Level Facade & Window Wash',
                  subtitle: 'Purified Water Reach-and-Wash & Rope Access',
                  description:
                    'Purified de-ionized water reach-and-wash systems (up to 5 storeys) and certified rope access riggers for high-rise exterior glass, canopies, and louvers.',
                  bullets: [
                    'Streak-free spot-free deionised water purification wash',
                    'Fall-arrest & Working at Heights certified technicians',
                    'Aluminium cladding, signage & structural glass cleaning',
                    'Wind-safe rigging plans with zero lift damage risk'
                  ],
                  highlight: 'Spotless architectural glass exterior presentation without costly scaffolding rentals.'
                },
                {
                  number: '05',
                  title: 'Post-Construction Sparkle Handover',
                  subtitle: 'Builders Clean & Fit-Out Snagging Preparation',
                  description:
                    'Intensive builders handover clean stripping grout haze, paint splatters, sawdust from ducting, protective tape adhesives, and polishing all glazing.',
                  bullets: [
                    'Tenant fit-out handover ready & occupancy certified',
                    'Detailed snagging inspection clean for QS sign-off',
                    'Sanitaryware acid-free descaling & stainless polishing',
                    'HVAC return air grille & perimeter trunking vacuuming'
                  ],
                  highlight: 'Enables prompt contractor practical completion certificate sign-off and smooth tenant occupation.'
                },
                {
                  number: '06',
                  title: 'Healthcare & Clinical Sanitisation',
                  subtitle: 'SABS 1853 Biocides & Pathogen Containment',
                  description:
                    'Strict infection prevention protocols for clinics, labs, and medical consulting suites with hospital-grade biocides, terminal fogging, and cleanroom care.',
                  bullets: [
                    'SABS 1853 certified hospital-grade biocidal sanitizers',
                    'Color-coded pathogen containment & microfiber discipline',
                    'Bio-waste compliant procedures & sharps safety routines',
                    'ATP bioluminescence hygiene validation swab testing'
                  ],
                  highlight: 'Passes medical council inspections with documented terminal sanitisation records.'
                },
                {
                  number: '07',
                  title: 'Ablution & Restroom Deep Hygiene',
                  subtitle: 'Thermal Steam Descaling & Odour Elimination',
                  description:
                    'High-pressure steam sterilization of urinals, toilet bowls, tile grout lines, sanitary bins, and automatic replenishment of paper and soap consumables.',
                  bullets: [
                    'Uric acid descaling & microbiological odor eradication',
                    'Automated soap, towel & air-freshener dispenser monitoring',
                    'Deep grout scrub with bactericidal foam application',
                    'Hygiene certificates issued for audited facilities'
                  ],
                  highlight: 'Eliminates stubborn bathroom odors at the microbiological root for first-class guest experiences.'
                },
                {
                  number: '08',
                  title: 'Retail & High-Footfall Floor Sealing',
                  subtitle: 'Polymer Shield Sealing & Slip Resistance',
                  description:
                    'Specialized protective polymer sealers for vinyl, terrazzo, marble, and porcelain floors in shopping malls, automotive showrooms, and retail centers.',
                  bullets: [
                    'High-gloss non-slip slip-resistance ratings (DIN 51130)',
                    'Scuff, heel mark & scratch resistance polymer sealing',
                    'Night-shift low-disruption execution before retail opening',
                    'UV-stable sealant prevents discoloration from sunlight'
                  ],
                  highlight: 'Sustains mirror-like commercial brilliance while withstanding continuous heavy foot traffic.'
                }
              ].map((discipline, idx) => {
                const isOpen = openDisciplineIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-sky-50/40 border-sky-500 shadow-md shadow-sky-900/10'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDiscipline(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-black text-sm flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                              : 'bg-white text-sky-700 border border-slate-200'
                          }`}
                        >
                          {discipline.number}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              DISCIPLINE {discipline.number}
                            </span>
                            <span className="text-[10px] font-semibold text-sky-600 hidden sm:inline truncate max-w-[260px]">
                              • {discipline.subtitle}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold transition-colors truncate ${
                              isOpen ? 'text-sky-900' : 'text-slate-900'
                            }`}
                          >
                            {discipline.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-sky-100 text-sky-700 rotate-180'
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
                          transition={{ duration: 0.22, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 border-t border-sky-100 space-y-3.5">
                            <p className="text-xs font-semibold text-sky-700 sm:hidden">
                              {discipline.subtitle}
                            </p>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {discipline.description}
                            </p>

                            {/* Scope Deliverables */}
                            <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-xs">
                              <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-2">
                                Standard Execution Scope:
                              </div>
                              <ul className="space-y-1.5">
                                {discipline.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="text-xs text-slate-700 flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Strategic Benefit */}
                            <div className="p-3 rounded-lg bg-sky-50/80 border border-sky-200/80 text-xs text-slate-700 flex items-start gap-2">
                              <span className="text-sky-700 font-bold shrink-0">💡 Asset Value:</span>
                              <span className="text-slate-700">{discipline.highlight}</span>
                            </div>

                            {/* Action CTA */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="truncate max-w-[220px]">BICS &amp; NCCA Compliant</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                              >
                                <span>Inquire on Discipline {discipline.number}</span>
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

            {/* Column 2: Sticky Image Showcase (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src={commercialCleaningImg}
                  alt="Specialised Commercial Cleaning Services"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Fast Consultation Callout Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 border border-sky-200 flex items-center justify-center font-black text-sm font-mono shrink-0">
                    SLA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Need a Site Hygiene Assessment?</div>
                    <div className="text-[11px] text-slate-500">Free walkthrough inspection &amp; scope breakdown</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
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

      {/* 9. CLEANING FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-[#f0faff] border-b border-sky-100">
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

          <div className="max-w-4xl mx-auto space-y-3">
            {[
              {
                q: 'Are your cleaners vetted with criminal background checks?',
                a: 'Yes, 100%. Every Eureka cleaning operative undergoes rigorous background checks, fingerprint verification via SAPS, proof of residence auditing, and strict referencing before assignment to any commercial client facility.'
              },
              {
                q: 'Can cleaning shifts be scheduled during evening or weekend hours?',
                a: 'Absolutely. We operate 24 hours a day. We can deploy day porters for continuous touchpoint sanitation during business hours, or dedicated night-shift teams (6:00 PM – 2:00 AM) to prevent disruption to your staff and clients.'
              },
              {
                q: 'Do you supply your own cleaning machinery and eco-chemicals?',
                a: 'Yes. Eureka provides all industrial equipment (auto-scrubbers, HEPA commercial vacuums, steam extractors) along with SABS 1853-approved eco-friendly, non-toxic cleaning chemicals accompanied by Material Safety Data Sheets (MSDS).'
              },
              {
                q: 'How do you maintain quality control across large facilities?',
                a: 'We maintain a strict 1:12 supervisor-to-cleaner ratio. Supervisors perform twice-daily digital audits using mobile inspection software with photographic checklists, ensuring consistent SLA compliance with monthly scoring reports sent to your management team.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CORPORATE FOOTER */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
