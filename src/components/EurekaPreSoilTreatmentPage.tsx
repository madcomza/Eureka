import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import fumigationImg from '../assets/images/Fumigation.jpeg';
import {
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
  FileCheck,
  Sparkles,
  Sliders,
  DollarSign,
  Droplet,
  Layers,
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
  Hammer,
  Truck
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaPreSoilTreatmentPageProps {
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
      | 'pricing'
      | 'contact',
    subcategory?: SolutionSubcategory
  ) => void;
}

export const EurekaPreSoilTreatmentPage: React.FC<EurekaPreSoilTreatmentPageProps> = ({
  onNavigate,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [openDisciplineIndex, setOpenDisciplineIndex] = useState<number | null>(0);

  const toggleDiscipline = (idx: number) => {
    setOpenDisciplineIndex(openDisciplineIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="pre-soil-treatment" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#120e06] text-white py-16 lg:py-20 border-b-4 border-amber-500 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • STRUCTURAL TERMITE DEFENSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                PRE-CONSTRUCTION SOIL TREATMENT &amp; <br />
                <span className="text-amber-400">SOIL POISONING</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                SANS 10124 and SANS 10400-A certified subterranean termite chemical soil barriers, under-slab flood treatments prior to concrete casting, foundation trench barriers, and 5-to-10 year guarantee certificates for residential developments, industrial parks, and commercial construction.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>REQUEST SLAB CERTIFICATION QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#soil-disciplines"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all"
                >
                  VIEW 6 TREATMENT DISCIPLINARY STAGES
                </a>
              </div>

              {/* 4 Compliance Credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-amber-400">SANS 10124</div>
                  <div className="text-[11px] text-slate-400 font-medium">Subterranean Termite Code</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-white">10 Years</div>
                  <div className="text-[11px] text-slate-400 font-medium">Written Guarantee Issued</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-sky-400">NHBRC &amp; SABS</div>
                  <div className="text-[11px] text-slate-400 font-medium">Approved Termiticides</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-emerald-400">Act 36 / 1947</div>
                  <div className="text-[11px] text-slate-400 font-medium">P-Reg Certified Technicians</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE SOIL TREATMENT DISCIPLINES - 2-COLUMN LAYOUT: ACCORDION + IMAGE */}
      <section id="soil-disciplines" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase border border-amber-200/60">
              STRUCTURAL BARRIER ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
              Comprehensive Soil Treatment &amp; Termite Barrier Solutions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Subterranean termites (*Coptotermes formosanus* and *Microhodotermes viator*) cause catastrophic structural damage by chewing timber trusses, drywall liners, and electrical conduits. Our chemical soil barriers permanently prevent subterranean colonization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Column 1: Accordion Format (7 cols) */}
            <div className="lg:col-span-7 space-y-3">
              {[
                {
                  number: '01',
                  icon: Layers,
                  title: 'Pre-Construction Under-Slab Soil Barrier',
                  subtitle: '5L/m² Sub-Slab Dosing Prior to DPM & Concrete Pour',
                  description:
                    'Application of SABS-approved non-repellent termiticide emulsion at standard 5L/m² directly across compacted earth / fill sand before the damp-proof membrane (USB green plastic) and concrete pour.',
                  bullets: [
                    'Calibrated high-output motorized pump rigs ensuring uniform chemical penetration',
                    'Pre-pour completion certificate provided immediately for municipal engineers & NHBRC',
                    'Seamless continuous chemical barrier bonded to soil sub-base',
                    'Non-repellent lethal transfer active ingredient wipes out foraging satellite nests'
                  ],
                  highlight: 'Eliminates termite intrusion routes before structural foundations and floor slabs are permanently sealed.'
                },
                {
                  number: '02',
                  icon: Hammer,
                  title: 'Foundation Trenching & Perimeter Backfill',
                  subtitle: 'Vertical Foundation Wall & Trench Saturation',
                  description:
                    'Deep vertical saturation of foundation trenches and backfill soil adjacent to external foundation walls at 5 to 7.5 Litres per linear meter to intercept foraging worker termites tunneling upwards.',
                  bullets: [
                    'Envelops outer foundation perimeter walls and retaining brickwork',
                    'Treated soil backfill resists water leaching and UV breakdown',
                    'Protects weep holes, service pipe penetrations, and expansion joints',
                    'Prevents subterranean access through masonry hairline shrinkage cracks'
                  ],
                  highlight: 'Forms an impenetrable continuous subterranean chemical envelope shielding sub-structure perimeter walls.'
                },
                {
                  number: '03',
                  icon: HardHat,
                  title: 'Post-Construction Perimeter Drill & Pressure Injection',
                  subtitle: 'Sub-Slab Masonry Injection for Existing Structures',
                  description:
                    'For existing structures experiencing active termite damage: precision masonry drilling at 300mm intervals along slab perimeters and patios, deep chemical sub-slab injection, and color-matched mortar resealing.',
                  bullets: [
                    'Zero structural damage to high-end floor tiling, pavers, or brickwork',
                    'High-pressure multi-directional sub-slab dispersion rods (up to 30 Bar)',
                    'Full colony eradication through non-repellent transfer toxicant',
                    'Color-matched architectural mortar seal plugs each drilled penetration'
                  ],
                  highlight: 'Arrests active infestations underneath established commercial floors without disruptive concrete demolition.'
                },
                {
                  number: '04',
                  icon: Building2,
                  title: 'Timber Roof Truss & Framing Wood Borer Defense',
                  subtitle: 'Deep Penetrating Preservative Spray & Micro-Injection',
                  description:
                    'Deep penetrating preservative spray and micro-injection of timber roof trusses, purlins, and rafters to eradicate Italian Beetle (*Hylotrupes bajulus*), False Powder Post Beetle, and drywood termites.',
                  bullets: [
                    'Penetrates deep into pine and hardwood structural timbers (up to 12mm)',
                    'Prevents structural roof truss deflection, dry rot, and catastrophic roof sag',
                    'Official Wood Borer Clearance Certificates issued for property transfers',
                    'Low-odor solvent-based insecticidal and fungicidal active formula'
                  ],
                  highlight: 'Preserves critical roof trusses and ceiling battens against wood-destroying insect decay.'
                },
                {
                  number: '05',
                  icon: FileCheck,
                  title: 'NHBRC & Municipal Building Inspector Clearance',
                  subtitle: 'SANS 10400-A Part L & SANS 10124 Compliance Sign-Off',
                  description:
                    'Immediate issuance of legally binding SANS 10400-A Part L soil treatment completion certificates required for NHBRC enrollment, structural engineer sign-off, and municipal occupation certificates.',
                  bullets: [
                    'Signed by SAPCA P-Registered Pest Control Officers with valid registration numbers',
                    'Specifies exact chemical Act 36/1947 registration number and applied dosage rate',
                    'Accepted by all major South African banking institutions, insurers, and municipalities',
                    'Includes digital certificate copy emailed directly to principal contractors & QS'
                  ],
                  highlight: 'Fast-tracks municipal building occupation approvals and satisfies NHBRC warranty requirements.'
                },
                {
                  number: '06',
                  icon: Crosshair,
                  title: 'Termite Nest Baiting & Queen Elimination',
                  subtitle: 'In-Ground Monitoring Stations & Chitin Inhibitors',
                  description:
                    'Installation of in-ground perimeter termite bait stations containing insect growth regulators (chitin synthesis inhibitors). Foraging termites carry the bait back to the central subterranean queen.',
                  bullets: [
                    '100% elimination of the central subterranean queen and complete colony collapse',
                    'Ideal for sensitive landscaped gardens, wine estates, and heritage properties',
                    'Continuous 24/7 subterranean surveillance with barcode digital inspection logs',
                    'Zero chemical leaching into groundwater or delicate garden root zones'
                  ],
                  highlight: 'Destroys underground termite super-colonies at their biological source without massive excavation.'
                }
              ].map((discipline, idx) => {
                const IconComp = discipline.icon;
                const isOpen = openDisciplineIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-amber-50/40 border-amber-500 shadow-md shadow-amber-900/10'
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
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                              : 'bg-white text-amber-800 border border-slate-200'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-mono font-bold text-slate-400">
                              DISCIPLINE {discipline.number}
                            </span>
                            <span className="text-[10px] font-semibold text-amber-700 hidden sm:inline truncate max-w-[260px]">
                              • {discipline.subtitle}
                            </span>
                          </div>
                          <h3
                            className={`text-sm sm:text-base font-bold transition-colors truncate ${
                              isOpen ? 'text-amber-950' : 'text-slate-900'
                            }`}
                          >
                            {discipline.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-amber-100 text-amber-800 rotate-180'
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
                          <div className="px-5 pb-5 pt-1 border-t border-amber-100 space-y-3.5">
                            <p className="text-xs font-semibold text-amber-700 sm:hidden">
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
                                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Strategic Benefit */}
                            <div className="p-3 rounded-lg bg-amber-50/80 border border-amber-200/80 text-xs text-slate-700 flex items-start gap-2">
                              <span className="text-amber-800 font-bold shrink-0">💡 Structural Protection:</span>
                              <span className="text-slate-700">{discipline.highlight}</span>
                            </div>

                            {/* Action CTA */}
                            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                                <span className="truncate max-w-[220px]">SANS 10124 &amp; NHBRC Compliant</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => onNavigate?.('contact')}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
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
                  src={fumigationImg}
                  alt="Pre-Construction Soil Poisoning and Termite Treatment"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Fast Consultation Callout Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 border border-amber-200 flex items-center justify-center font-black text-sm font-mono shrink-0">
                    SANS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Need a Site Soil Poisoning Quote?</div>
                    <div className="text-[11px] text-slate-500">Same-day contractor site visit &amp; m² rate</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center gap-1 cursor-pointer shrink-0 ml-2"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION TIMELINE PROTOCOL */}
      <section className="py-14 bg-[#0c0904] text-white border-b border-amber-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
              SANS 10124 ON-SITE WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-2">
              The 5-Step Soil Treatment Protocol
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Ensuring 100% chemical barrier continuity coordinated with your building contractor's casting schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Hard-Core Leveling Check</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Verification that fill sand/hard-core is fully compacted and dry before termiticide application.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">High-Pressure Flood</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Calibrated flooding at 5 Litres/m² across the entire slab footprint with zero dry spots.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Trench &amp; Pipe Saturation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep vertical trench spraying and pipe penetration collar sealing to prevent bypass lanes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                04
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">DPC Plastic Encapsulation</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Immediate placement of damp-proof membrane over treated soil prior to steel mesh &amp; concrete casting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black text-sm flex items-center justify-center mb-3">
                05
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">10-Year Certificate Handover</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Official signed SANS 10400-A guarantee certificate delivered on the same day for building inspector sign-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full uppercase">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Soil Poisoning &amp; Termite Certification FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Essential knowledge for architects, site agents, structural engineers, and property developers.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'When is the exact time to apply pre-construction soil treatment on a building site?',
                a: 'The ideal window is immediately after the hard-core / fill sand has been leveled and compacted, right before the USB Green Damp-Proof Plastic Membrane is rolled out and the steel reinforcing mesh is laid. Applying before plastic placement ensures the chemical binds directly to the soil and is encapsulated by the plastic and concrete slab without UV degradation.'
              },
              {
                q: 'What is the standard chemical application rate required by SANS 10124?',
                a: 'Under SANS 10124, the mandatory application rate is 5.0 Litres of diluted termiticide emulsion per square metre across under-slab fill, and 5.0 to 7.5 Litres per linear metre along perimeter foundation trenches. Eureka calibrates high-pressure pump flow meters to guarantee exact dosage compliance.'
              },
              {
                q: 'How long does the soil poisoning termite guarantee last in South Africa?',
                a: 'Standard treatments carry a 5-Year Written Guarantee, while our heavy-duty polymer-enhanced formulations carry a 10-Year Guarantee Certificate. In the rare event of subterranean termite penetration during the guarantee period, re-treatment is performed at zero additional charge.'
              },
              {
                q: 'Can soil poisoning be done on existing buildings that are already constructed?',
                a: 'Yes. For existing structures, we perform Post-Construction Sub-Slab Injection. We drill small 10mm to 12mm holes at 300mm intervals along the foundation walls through the exterior paving or perimeter concrete, inject high-pressure termiticide to recreate the subterranean barrier under the slab, and plug the drill holes with color-matched mortar.'
              },
              {
                q: 'Is the soil poisoning certificate required for municipal building occupancy sign-off?',
                a: 'Yes. In South Africa, municipal building inspectors require an official SANS 10400-A Part L certificate signed by a SAPCA-registered pest control officer before issuing a final Certificate of Occupancy, which is also mandatory for home loan bank final draws.'
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60 transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform ${
                      faqOpenIndex === index ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === index && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
