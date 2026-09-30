import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import officeRelocationImg from '../assets/images/Office Relocation.jpeg';
import {
  Truck,
  Building2,
  Package,
  Server,
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
  Users,
  FileCheck,
  Sparkles,
  Sliders,
  DollarSign,
  Layers,
  FileText,
  BadgeAlert,
  ShieldCheck,
  HelpCircle,
  ChevronRight,
  Hammer,
  Boxes,
  RotateCcw,
  Compass,
  Monitor,
  Zap,
  Check
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaRelocationPageProps {
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

export const EurekaRelocationPage: React.FC<EurekaRelocationPageProps> = ({
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
      <EurekaHeader currentPage="office-relocation" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-[#06122c] text-white py-16 lg:py-20 border-b-4 border-blue-500 overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • SEAMLESS COMMERCIAL RELOCATION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL OFFICE &amp; <br />
                <span className="text-blue-400">BUSINESS RELOCATION</span> SERVICES
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                Turnkey corporate moves, weekend zero-downtime migrations, secure IT server rack decommissioning, modular workstation reconfiguration, heavy safe rigging, and end-of-lease dilapidation make-good services across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <button
                  type="button"
                  onClick={() => onNavigate?.('contact')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>REQUEST ON-SITE MOVE SURVEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#relocation-disciplines"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-all"
                >
                  VIEW 6 RELOCATION DISCIPLINES
                </a>
              </div>

              {/* 4 Trust & Capability Credentials */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-blue-400">Zero Downtime</div>
                  <div className="text-[11px] text-slate-400 font-medium">Friday 17:00 &rarr; Monday 07:00</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-white">R10,000,000</div>
                  <div className="text-[11px] text-slate-400 font-medium">GIT Insurance Covered</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-emerald-400">Anti-Static</div>
                  <div className="text-[11px] text-slate-400 font-medium">Server &amp; IT Flight Casing</div>
                </div>
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800 text-center">
                  <div className="text-xl font-black text-amber-400">Full Dilapidation</div>
                  <div className="text-[11px] text-slate-400 font-medium">Landlord Reinstatement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE RELOCATION DISCIPLINES - 2-COLUMN ACCORDION & SHOWCASE */}
      <section id="relocation-disciplines" className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full uppercase border border-blue-300/60">
              LOGISTICAL MOBILITY &amp; RIGGING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3 mb-2 tracking-tight">
              Comprehensive Corporate Moving Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Moving your enterprise should never compromise your billing cycles or customer support. We deliver precision-timed commercial logistics handled exclusively by permanent, vetted, uniformed rigging crews.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Column 1: Interactive Accordion (7 Columns) */}
            <div className="lg:col-span-7 space-y-3.5">
              {[
                {
                  id: 0,
                  num: '01',
                  icon: Building2,
                  title: 'Turnkey Office & Commercial Relocation',
                  subtitle: 'Full HQ moves with dedicated Move Master oversight',
                  desc: 'Complete project management for single-office to multi-story corporate headquarters. Coordinated after-hours or over weekends to ensure your staff leave on Friday and start working seamlessly Monday morning.',
                  scope: [
                    'Floor plan space-mapping & color-coded tagging',
                    'Dedicated Move Master project manager on-site',
                    'Zero disruption to live core business operations',
                    'Closed-body furniture trucks with hydraulic tail-lifts',
                  ],
                  benefits: [
                    'Guaranteed Monday 08:00 resumption target',
                    'Goods-in-transit (GIT) insurance up to R 5,000,000',
                    'Uniformed, background-checked rigging crews',
                  ],
                },
                {
                  id: 1,
                  num: '02',
                  icon: Server,
                  title: 'IT Server Rack & Infrastructure Migration',
                  subtitle: 'ESD anti-static flight cases & specialist IT recommissioning',
                  desc: 'Specialized decommissioning, anti-static bubble packaging, custom foam flight cases, and precision transit for blade servers, SAN storage arrays, routers, patch panels, and desktop PC suites.',
                  scope: [
                    'Anti-static ESD protective handling & wrapping',
                    'Cable bundling, tagging & port re-patching',
                    'Dual-monitor desk setup & docking alignment',
                    'Dedicated climate-cushioned server transit fleet',
                  ],
                  benefits: [
                    'Data center downtime minimized to tight maintenance windows',
                    'Hardware serial inventory verification before & after move',
                    'Direct collaboration with internal IT sysadmins',
                  ],
                },
                {
                  id: 2,
                  num: '03',
                  icon: Hammer,
                  title: 'Systems Furniture Assembly & Reconfiguration',
                  subtitle: 'Modular cluster desks, electric risers & bulk filers',
                  desc: 'Disassembly, transport, and expert re-erection of modular cluster desks, sit-stand electric risers, executive suites, acoustic privacy screens, and high-density archive mobile bulk-filing units.',
                  scope: [
                    'Full hardware auditing and screw/fitting sorting',
                    'Space layout adaptation to new tenancy architectural plans',
                    'Integrated under-desk power and data reticulation',
                    'Ergonomic adjustment of sit-stand electric workstations',
                  ],
                  benefits: [
                    'Preservation of manufacturer warranty integrity',
                    'Zero lost parts or scratched veneer surfaces',
                    'Custom carpentry adaptations for awkward corner spaces',
                  ],
                },
                {
                  id: 3,
                  num: '04',
                  icon: Boxes,
                  title: 'Security Crate Hire & Confidential Packing',
                  subtitle: 'POPIA-compliant heavy-duty tamper-sealed plastic crates',
                  desc: 'Supply of heavy-duty recyclable plastic lidded crates with numbered security zip-lock seals for HR, legal, finance, and confidential file archives, eliminating cardboard waste and ensuring POPIA compliance.',
                  scope: [
                    'Tamper-evident numbered security zip seals',
                    'Drop-off & collection schedule management',
                    'Specialist monitor anti-scratch protective sleeves',
                    'Sequential filing system archive migration',
                  ],
                  benefits: [
                    '100% POPIA and regulatory file chain-of-custody compliance',
                    'Waterproof and crushproof container protection',
                    'Zero cardboard disposal waste footprint',
                  ],
                },
                {
                  id: 4,
                  num: '05',
                  icon: Zap,
                  title: 'Heavy Machinery, Fire Safes & Lab Rigging',
                  subtitle: 'Hydraulic dollies, stair-climbers & floor load distribution',
                  desc: 'Specialized hydraulic rigging equipment, powered stair-climbers, crane hoists, and floor-load protection plates to safely transport heavy walk-in safes, precision medical/lab gear, and large production printers.',
                  scope: [
                    'Engineered floor-load calculations and spreader plates',
                    'Pneumatic heavy-duty lifting dollies & machine skates',
                    'Full OHSA rigging certified crane operators',
                    'Stairway crawler systems for restricted access routes',
                  ],
                  benefits: [
                    'Protection of marble, raised access tiles & epoxy floors',
                    'Zero strain injuries with mechanized hydraulic jacks',
                    'Engineered risk assessment & method statements (RAMS)',
                  ],
                },
                {
                  id: 5,
                  num: '06',
                  icon: RotateCcw,
                  title: 'Tenancy De-Fit & Landlord Make-Good (White Box)',
                  subtitle: 'Lease restoration, partition removal & dilapidation sign-off',
                  desc: 'Complete restoration of your vacated tenancy to original lease conditions: partition removal, ceiling grid repair, carpet replacement/deep-clean, electrical termination, wall repainting, and final landlord sign-off.',
                  scope: [
                    'Drywall partition removal & skim-coat repainting',
                    'Ceiling tile replacement and lighting grid restoration',
                    'Certified electrical termination & DB board sign-off',
                    'End-of-lease commercial hygiene deep carpet extraction',
                  ],
                  benefits: [
                    'Guaranteed 100% tenancy deposit refund compliance',
                    'Single-contractor accountability for move and make-good',
                    'Certified e-waste recycling and compliant rubble disposal',
                  ],
                },
              ].map((discipline) => {
                const isOpen = openDisciplineIndex === discipline.id;
                const IconComponent = discipline.icon;

                return (
                  <div
                    key={discipline.id}
                    className="border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden transition-all duration-200 hover:border-blue-300"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDiscipline(discipline.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors hover:bg-slate-50/80"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                        <div
                          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 font-black transition-colors ${
                            isOpen
                              ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                              : 'bg-blue-50 text-blue-700 border border-blue-200/60'
                          }`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">
                              DISCIPLINE {discipline.num}
                            </span>
                            <span className="text-[11px] text-slate-500 hidden sm:inline truncate">
                              {discipline.subtitle}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 leading-snug truncate">
                            {discipline.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-blue-600 text-white rotate-180'
                            : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`content-${discipline.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs sm:text-sm">
                            <p className="text-slate-600 leading-relaxed pt-3">
                              {discipline.desc}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                              {/* Standard Execution Scope */}
                              <div className="bg-white p-3.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-2">
                                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                  <span>Standard Execution Scope</span>
                                </span>
                                <ul className="space-y-1.5 text-xs text-slate-700">
                                  {discipline.scope.map((item, sIdx) => (
                                    <li key={sIdx} className="flex items-start gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Operational Benefits & Compliance */}
                              <div className="bg-white p-3.5 rounded-lg border border-slate-200/90 shadow-2xs space-y-2">
                                <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Guarantees &amp; Value</span>
                                </span>
                                <ul className="space-y-1.5 text-xs text-slate-700">
                                  {discipline.benefits.map((benefit, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-1.5">
                                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Action Footer */}
                            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                              <span className="text-[11px] text-slate-500 font-medium">
                                Available for standalone contracting or turnkey relocation packages.
                              </span>
                              <a
                                href="#quote-calculator"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors"
                              >
                                <span>Inquire for this Discipline</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Column 2: Visual Showcase with Office Relocation Image (5 Columns) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src={officeRelocationImg}
                  alt="Corporate Office Relocation and Commercial Rigging"
                  className="w-full h-auto max-h-[640px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Quick Consultation Booking Card */}
              <div className="bg-gradient-to-r from-blue-950 to-slate-900 text-white p-4 rounded-xl border border-blue-800/40 shadow-sm flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                    Need an Office Relocation Assessment?
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5 truncate">
                    Same-day site survey &amp; inventory audit
                  </div>
                </div>
                <a
                  href="#quote-calculator"
                  className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg whitespace-nowrap shadow-sm transition-colors shrink-0"
                >
                  Book Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATION TIMELINE PROTOCOL */}
      <section className="py-14 bg-[#050e24] text-white border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black tracking-widest text-blue-400 uppercase bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
              ZERO-DOWNTIME MIGRATION PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-2">
              The 5-Step Corporate Move Execution
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How Eureka relocates corporate operations with precision timing, absolute IT integrity, and day-one staff readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                01
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Site Audit &amp; CAD Matrix</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive inventory audit, building access path assessment, elevator booking, and destination seat assignment mapping.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                02
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Crate Drop &amp; Pre-Packing</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Delivery of color-coded plastic crates, bubble wrap, IT bags, and staff packaging workshops 5 days prior to move date.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                03
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Friday Night IT Decom</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Servers powered down, racked equipment dismounted, and systems loaded into climate-padded transport vehicles.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                04
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Saturday Furniture Build</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Workstations assembled at new premises, power reticulated, chairs positioned, and labeled crates distributed to each desk.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-md">
                05
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">Sunday Boot &amp; Monday Support</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Network testing, printer connectivity confirmation, and Monday morning on-site floor marshals ensuring 100% staff uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[11px] font-black tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase border border-blue-200">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Corporate Relocation &amp; Business Migration FAQ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Key operational considerations for IT security, staff packing, and landlord dilapidations.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How does the Weekend Zero-Downtime relocation guarantee work?',
                a: 'Our move teams initiate physical packing and server decommissioning at 17:00 on Friday as your staff depart. Over Saturday and Sunday, all systems furniture is disassembled, transported, re-erected, and wired up at the new facility. On Sunday afternoon, our IT network specialists power on and test all workstation peripherals. On Monday at 07:30, our Move Marshals are on-site to welcome your staff so they begin normal operations without a minute of billable downtime.'
              },
              {
                q: 'What insurance cover is provided for our IT servers and corporate assets?',
                a: 'Eureka provides comprehensive Goods-in-Transit (GIT) and Public Liability insurance up to R10,000,000 as standard across all corporate moves. High-value servers and sensitive lab hardware are transported in specialized custom-cushioned flight cases inside closed-body vehicles with satellite tracking.'
              },
              {
                q: 'How are confidential files, HR documents, and legal records protected during transit?',
                a: 'We supply tamper-evident heavy-duty polypropylene plastic security crates fitted with serialized zip-lock security seals. Staff or our vetted packing teams seal each crate with an individual serial number recorded on the manifest, preventing unauthorized access and ensuring full POPIA compliance.'
              },
              {
                q: 'Can Eureka manage the Landlord Make-Good / Dilapidation handover of our old lease?',
                a: 'Yes. Our facilities de-fit division handles partition removal, ceiling tile reinstatement, drywall patching, wall repainting, carpet deep cleaning, and light fixture refurbishment to return the premises to "white box" condition for full security deposit release.'
              },
              {
                q: 'Do you supply crates and packing materials ahead of the move date?',
                a: 'Yes. We deliver numbered plastic crates, bubble wrap, monitor protection sleeves, keyboard bags, and color-coded labels 5 to 7 days before the move, accompanied by a quick packing guide workshop for your department champions.'
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      faqOpenIndex === idx ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {faqOpenIndex === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
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
