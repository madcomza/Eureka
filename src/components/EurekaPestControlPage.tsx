import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import pestControlImg from '../assets/images/Pest Control.jpeg';
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
  Check,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Calendar,
  AlertTriangle,
  Award,
  Users,
  Sparkles,
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
  ChevronRight,
  Sliders,
  DollarSign,
  Layers,
  Shield,
  Activity
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaPestControlPageProps {
  onNavigate?: (
    page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaPestControlPage: React.FC<EurekaPestControlPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeTreatmentTab, setActiveTreatmentTab] = useState<'rodents' | 'insects' | 'termites' | 'birds' | 'fumigation'>('rodents');
  
  // State
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [openSolutionIndex, setOpenSolutionIndex] = useState<number | null>(0);

  const toggleSolution = (idx: number) => {
    setOpenSolutionIndex(openSolutionIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="pest-control" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#04101e] text-white py-16 lg:py-20 border-b-4 border-emerald-500 overflow-hidden">
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
        
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div>
            {/* Hero Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Bug className="w-3.5 h-3.5 text-emerald-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • INTEGRATED PEST MANAGEMENT</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL PEST CONTROL &amp; <br />
                <span className="text-emerald-400">HUMANE RELOCATION</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                Certified, HACCP-compliant pest eradication, tamper-proof rodent perimeter defenses, structural subterranean termite barriers, and humane bird and wildlife relocation for corporate, logistics, healthcare, and retail facilities across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>GET PEST PRICING</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>REQUEST SITE AUDIT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#pest-solutions"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all"
                >
                  6 CORE TREATMENTS
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
          </div>
        </div>
      </section>

      {/* 4. 6 CORE PEST SOLUTIONS BREAKDOWN - 2-COLUMN LAYOUT: ACCORDION + IMAGE */}
      <section id="pest-solutions" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Column 1: Accordion Format (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  number: '01',
                  icon: Crosshair,
                  title: 'Rodent Elimination & Perimeter Baiting',
                  subtitle: 'Rats, Mice & Gnaw-Proof Structural Exclusion',
                  description:
                    'Complete eradication of roof rats (Rattus rattus), Norway rats, and field mice that chew electrical cabling, contaminate food packaging, and spread leptospirosis.',
                  bullets: [
                    'Lockable, tamper-resistant, child/pet-safe external bait stations',
                    'Digital QR code barcode scanning & bait consumption logs',
                    'Structural gnaw-proof wire mesh & bristle strip exclusion',
                    'Non-toxic tracking dust & mechanical multi-catch traps'
                  ],
                  highlight: 'Protects critical server cabling, warehousing stock, and health inspection audit compliance.'
                },
                {
                  number: '02',
                  icon: Bug,
                  title: 'Cockroach Gel Baiting & Insect Control',
                  subtitle: 'Cascading Nest Eradication & Micro-Encapsulation',
                  description:
                    'Odorless micro-encapsulated cockroach gel treatments with cascading nest eradication (German & American cockroaches), ant colony elimination, and silverfish eradication.',
                  bullets: [
                    'No need to empty cupboards or evacuate office staff',
                    'Secondary transfer effect targeting deep wall cavity nests',
                    'Insect Growth Regulators (IGR) preventing egg hatching',
                    'Targeted crack & crevice precision applicator dosing'
                  ],
                  highlight: 'Zero downtime application with complete colony wipeout in high-density office kitchens and food facilities.'
                },
                {
                  number: '03',
                  icon: Building2,
                  title: 'Termite Soil Barrier & Timber Protection',
                  subtitle: 'SANS 10124 Pre/Post-Construction Soil Poisoning',
                  description:
                    'Pre-construction and post-construction chemical soil barriers complying with SANS 10124 to protect structural timber, drywall framing, and building foundations against subterranean termites and wood borer.',
                  bullets: [
                    '5-Year to 10-Year written guarantee certificate of compliance',
                    'Precision perimeter sub-slab trenching and pressure injection',
                    'Termite clearance certificates for commercial property transfers',
                    'Non-repellent termiticide creating an undetectable lethal transfer zone'
                  ],
                  highlight: 'Defends multi-million Rand structural assets with long-term bank-approved warranty certificates.',
                  customAction: {
                    label: 'View Pre-Soil Treatment Page & Estimator',
                    page: 'pre-soil-treatment' as const
                  }
                },
                {
                  number: '04',
                  icon: Wind,
                  title: 'Bird Proofing & Solar Panel Netting',
                  subtitle: 'Humane Spikes, Netting & PV Array Skirt Protection',
                  description:
                    'Non-lethal physical deterrents including marine-grade 316 stainless steel bird spikes, heavy-duty optical netting, and solar panel skirt mesh preventing pigeons from nesting underneath arrays.',
                  bullets: [
                    'Prevents acidic bird droppings from corroding roofs and gutters',
                    'Protects PV solar inverter efficiency & exposed DC cabling',
                    'Humane, discreet visual profile matching architectural lines',
                    'Guano decontamination & biocide sanitation spray'
                  ],
                  highlight: 'Eliminates fire hazards under solar arrays and preserves pristine building facade presentation.'
                },
                {
                  number: '05',
                  icon: Zap,
                  title: 'Electronic Fly Units & Drain Fly Eradication',
                  subtitle: 'HACCP Glueboard UV ILTs & Bio-Foam Enzymes',
                  description:
                    'Installation and servicing of HACCP glueboard UV electronic fly killers (ILTs), fruit fly bio-foam drain enzyme treatments, and perimeter misting for food processing and canteen areas.',
                  bullets: [
                    'Shatterproof UV-A lamps & sticky catchboard debris count audits',
                    'Organic drain bio-digestion eradicating drain fly larvae in grease traps',
                    'Monthly fly-count trend analysis & statistical audit reporting',
                    'Zero high-voltage electric grid zapping to prevent insect fragmentation'
                  ],
                  highlight: 'Meets strict FSSC 22000, HACCP, and Department of Health restaurant & kitchen standards.'
                },
                {
                  number: '06',
                  icon: Compass,
                  title: 'Humane Bee, Wasp & Snake Relocation',
                  subtitle: 'Live Apiary Removal & Herpetologist Snake Relocation',
                  description:
                    'Professional ethical live bee removal by certified beekeepers into registered apiaries, wasp nest de-activation, and emergency snake capture and release by herpetologist-certified officers.',
                  bullets: [
                    'Strict zero-kill policy for indigenous honeybees (Apis mellifera)',
                    'Cavity pheromone wash & structural sealing preventing re-colonization',
                    '24/7 emergency dangerous snake response team (Puff Adder, Cobra, Mamba)',
                    'Safe containment and humane release into designated wildlife reserves'
                  ],
                  highlight: 'Ensures staff safety and wildlife conservation compliance without liability risk.'
                }
              ].map((solution, idx) => {
                const IconComp = solution.icon;
                const isOpen = openSolutionIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-emerald-50/40 border-emerald-500 shadow-md shadow-emerald-900/10'
                        : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSolution(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                              : 'bg-white text-emerald-700 border border-slate-200'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              DISCIPLINE {solution.number}
                            </span>
                            <span className="text-[10px] font-semibold text-emerald-600 hidden sm:inline truncate max-w-[260px]">
                              • {solution.subtitle}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold transition-colors truncate ${
                              isOpen ? 'text-emerald-950' : 'text-slate-900'
                            }`}
                          >
                            {solution.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-emerald-100 text-emerald-700 rotate-180'
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
                          <div className="px-5 pb-5 pt-1 border-t border-emerald-100 space-y-3.5">
                            <p className="text-xs font-semibold text-emerald-700 sm:hidden">
                              {solution.subtitle}
                            </p>

                            <p className="text-xs text-slate-600 leading-relaxed">
                              {solution.description}
                            </p>

                            {/* Scope Deliverables */}
                            <div className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-xs">
                              <div className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-2">
                                Standard Execution Scope:
                              </div>
                              <ul className="space-y-1.5">
                                {solution.bullets.map((b, bIdx) => (
                                  <li key={bIdx} className="text-xs text-slate-700 flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Strategic Benefit */}
                            <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-xs text-slate-700 flex items-start gap-2">
                              <span className="text-emerald-700 font-bold shrink-0">💡 Strategic Impact:</span>
                              <span className="text-slate-700">{solution.highlight}</span>
                            </div>

                            {/* Optional Custom Action */}
                            {solution.customAction && (
                              <button
                                type="button"
                                onClick={() => onNavigate?.(solution.customAction!.page)}
                                className="w-full py-2 px-3 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 group/btn"
                              >
                                <span>{solution.customAction.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform text-amber-700" />
                              </button>
                            )}

                            {/* Action CTA */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="truncate max-w-[220px]">SAPCA &amp; SANS 10124 Compliant</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
                              >
                                <span>Inquire on Discipline {solution.number}</span>
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
                  src={pestControlImg}
                  alt="Professional Pest Control Services"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Fast Consultation Callout Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center font-black text-sm font-mono shrink-0">
                    IPM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Need a Pest Infestation Audit?</div>
                    <div className="text-[11px] text-slate-500">Same-day inspection &amp; treatment plan</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
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
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
