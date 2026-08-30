import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
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
  Award,
  Users,
  FileCheck,
  Sparkles,
  Sliders,
  DollarSign,
  Layers,
  FileText,
  BadgeAlert,
  ShieldCheck,
  Shield,
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
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaRelocationPage: React.FC<EurekaRelocationPageProps> = ({
  onNavigate,
  onOpenCode,
}) => {
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  // Interactive Office Relocation Cost & Logistics Estimator State
  const [workstationCount, setWorkstationCount] = useState<number>(35);
  const [moveDistanceKm, setMoveDistanceKm] = useState<number>(18);
  const [serverRackCount, setServerRackCount] = useState<number>(2);
  const [moveWindow, setMoveWindow] = useState<'weekend_zero_downtime' | 'after_hours_weekday' | 'standard_business_hours'>('weekend_zero_downtime');
  const [includeCrateRental, setIncludeCrateRental] = useState<boolean>(true);
  const [includeItRecommission, setIncludeItRecommission] = useState<boolean>(true);
  const [includeLandlordMakeGood, setIncludeLandlordMakeGood] = useState<boolean>(false);
  const [includeHeavySafeMove, setIncludeHeavySafeMove] = useState<boolean>(false);

  // Form submission state
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Calculate estimated move cost
  const calculateEstimatedPrice = () => {
    // Base cost per workstation (disassembly, transit, reassembly, crate handling)
    let ratePerWorkstation = 780; // ZAR
    if (moveWindow === 'weekend_zero_downtime') ratePerWorkstation = 890;
    if (moveWindow === 'after_hours_weekday') ratePerWorkstation = 840;

    let subtotal = workstationCount * ratePerWorkstation;

    // Mileage & fleet logistics (closed body furniture trucks with hydraulic tail-lifts)
    subtotal += moveDistanceKm * 45 + 2800;

    // Server rack migration (anti-static flight cases & IT specialists)
    subtotal += serverRackCount * 3200;

    if (includeCrateRental) {
      // 3 crates per workstation + security seals
      subtotal += workstationCount * 3 * 35;
    }

    if (includeItRecommission) {
      // Dual-screen, docking station & cable management re-commissioning per desk
      subtotal += workstationCount * 220;
    }

    if (includeLandlordMakeGood) {
      // Dilapidation restoration, white-boxing, deep cleaning of old premises
      subtotal += Math.max(7500, workstationCount * 380);
    }

    if (includeHeavySafeMove) {
      // Specialized crane / hydraulic stair-climber rigging for bank safes / fire cabinets
      subtotal += 4500;
    }

    return Math.round(subtotal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="office-relocation" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#06122c] via-[#0b1f4d] to-[#040c1e] text-white py-16 lg:py-20 border-b-4 border-blue-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • SEAMLESS COMMERCIAL RELOCATION</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                COMMERCIAL OFFICE &amp; <span className="text-blue-400">BUSINESS RELOCATION</span> SERVICES
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                Turnkey corporate moves, weekend zero-downtime migrations, secure IT server rack decommissioning, modular workstation reconfiguration, heavy safe rigging, and end-of-lease dilapidation make-good services across South Africa.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#relocation-quote"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>REQUEST ON-SITE MOVE SURVEY</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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

            {/* Right Col: Move Protocol Feature Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-blue-500/40 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white leading-tight">Corporate Relocation SLA</h2>
                      <span className="text-[11px] text-slate-400">End-to-End Project Managed</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                    SLA GUARANTEED
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Color-Coded Department Tagging:</strong> Numbered crates, desks, and IT peripherals mapped directly to target architectural CAD floor plans.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Server Rack Anti-Static Transport:</strong> Dedicated climate-buffered vans, padded flight cases, and certified technician reconnects.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Modular Systems Furniture Rigging:</strong> Certified joiners dismantle, flat-pack, re-cable, and level benching, pods, and boardroom tables.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Day-One Handshake Support:</strong> On-site floor marshals on Monday morning to assist staff with chair adjustments, cables, and unboxing.</span>
                  </li>
                </ul>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Full Public Liability &amp; Comprehensive Transit Cover</span>
                  </span>
                  <span className="font-bold text-blue-400">100% Bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE RELOCATION DISCIPLINES */}
      <section id="relocation-disciplines" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase border border-blue-200/60">
              LOGISTICAL MOBILITY &amp; RIGGING
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-3">
              Comprehensive Corporate Moving Disciplines
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Moving your business should never compromise your billing cycles or customer support. We deliver precision-timed commercial logistics handled exclusively by permanent, vetted, uniformed rigging crews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Discipline 1: Corporate & Commercial Moves */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Turnkey Office &amp; Commercial Relocation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Complete project management for single-office to multi-story corporate headquarters. Coordinated after-hours or over weekends to ensure your staff leave on Friday and start working seamlessly Monday morning.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Floor plan space-mapping &amp; color labeling</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Dedicated Move Master project coordinator</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Zero disruption to core business operations</span>
                </li>
              </ul>
            </article>

            {/* Discipline 2: IT & Server Room Decommissioning */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                IT Server Rack &amp; Infrastructure Migration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Specialized decommissioning, anti-static bubble packaging, custom foam flight cases, and precision transit for blade servers, SAN storage arrays, routers, patch panels, and desktop PC suites.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Anti-static ESD protective handling</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Cable bundling, tagging &amp; port re-patching</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Dual-monitor desk setup &amp; dock alignment</span>
                </li>
              </ul>
            </article>

            {/* Discipline 3: Systems Furniture & Workstations */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Systems Furniture Assembly &amp; Reconfiguration
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Disassembly, transport, and expert re-erection of modular cluster desks, sit-stand electric risers, executive suites, acoustic privacy screens, and high-density archive mobile bulk-filing units.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Full hardware auditing and screw sorting</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Space layout adaptation to new tenancy plans</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Integrated under-desk power reticulation</span>
                </li>
              </ul>
            </article>

            {/* Discipline 4: Crate Hire & Security Packing */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Boxes className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Security Crate Hire &amp; Confidential Packing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Supply of heavy-duty recyclable plastic lidded crates with numbered security zip-lock seals for HR, legal, finance, and confidential file archives, eliminating cardboard waste and ensuring POPIA compliance.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Tamper-evident numbered security seals</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Drop-off &amp; collection schedule management</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Specialist monitor anti-scratch sleeves</span>
                </li>
              </ul>
            </article>

            {/* Discipline 5: Heavy Rigging & Safes */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Heavy Machinery, Fire Safes &amp; Lab Rigging
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Specialized hydraulic rigging equipment, powered stair-climbers, crane hoists, and floor-load protection plates to safely transport heavy walk-in safes, precision medical/lab gear, and large production printers.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Engineered floor-load calculations</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Pneumatic heavy-duty lifting dollies</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Full OHSA rigging certified crane operators</span>
                </li>
              </ul>
            </article>

            {/* Discipline 6: De-Fit & Landlord Dilapidation Make-Good */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Tenancy De-Fit &amp; Landlord Make-Good (White Box)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Complete restoration of your vacated tenancy to original lease conditions: partition removal, ceiling grid repair, carpet replacement/deep-clean, electrical termination, wall repainting, and final landlord sign-off.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Guaranteed deposit refund compliance</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>E-waste recycling and eco-disposal</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>End-of-lease commercial hygiene deep scrub</span>
                </li>
              </ul>
            </article>
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

      {/* 6. INTERACTIVE RELOCATION ESTIMATOR */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full uppercase">
              INSTANT BUDGET ESTIMATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Corporate Office Relocation Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Calculate realistic logistical budget ranges based on workstation count, transit distance, server infrastructure, and make-good options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Configuration Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              {/* Parameter 1: Headcount / Workstations */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    1. Number of Desks / Staff Workstations
                  </label>
                  <span className="text-xs font-black text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {workstationCount} Workstations
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={300}
                  step={5}
                  value={workstationCount}
                  onChange={(e) => setWorkstationCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Small Branch (5-15)</span>
                  <span>Corporate Office (30-80)</span>
                  <span>Large Headquarters (100-300+)</span>
                </div>
              </div>

              {/* Parameter 2: Transit Distance */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    2. Transit Distance Between Premises
                  </label>
                  <span className="text-xs font-black text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {moveDistanceKm} Kilometres
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={120}
                  step={2}
                  value={moveDistanceKm}
                  onChange={(e) => setMoveDistanceKm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Same Business Park (2 km)</span>
                  <span>Cross-City (20-40 km)</span>
                  <span>Inter-City / Regional (100+ km)</span>
                </div>
              </div>

              {/* Parameter 3: IT Server Racks */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    3. Server Racks / Data Cabinets
                  </label>
                  <span className="text-xs font-black text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    {serverRackCount} Server Racks
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={serverRackCount}
                  onChange={(e) => setServerRackCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Cloud Only (0 Racks)</span>
                  <span>Standard Data Room (1-3 Racks)</span>
                  <span>Heavy Enterprise (4-10 Racks)</span>
                </div>
              </div>

              {/* Parameter 4: Move Window */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  4. Move Execution Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'weekend_zero_downtime', label: 'Weekend Zero Downtime', desc: 'Fri 17:00 to Mon 07:00' },
                    { id: 'after_hours_weekday', label: 'After-Hours Weekday', desc: 'Evenings 18:00 - 23:00' },
                    { id: 'standard_business_hours', label: 'Standard Hours', desc: 'Mon-Fri 08:00 - 17:00' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMoveWindow(item.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        moveWindow === item.id
                          ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 5: Additional Value-Add Add-ons */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  5. Specialized Service Modules
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeCrateRental}
                        onChange={(e) => setIncludeCrateRental(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Plastic Security Crate Hire (3 crates/staff + security zip seals)</span>
                    </span>
                    <span className="font-bold text-slate-700">Included</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeItRecommission}
                        onChange={(e) => setIncludeItRecommission(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Desktop IT Recommissioning (Monitor arms, docks, cable looms)</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 220/desk</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeLandlordMakeGood}
                        onChange={(e) => setIncludeLandlordMakeGood(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Old Tenancy De-Fit &amp; Landlord Dilapidation Make-Good</span>
                    </span>
                    <span className="font-bold text-slate-700">Optional</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeHeavySafeMove}
                        onChange={(e) => setIncludeHeavySafeMove(e.target.checked)}
                        className="rounded text-blue-600 focus:ring-blue-500"
                      />
                      <span>Heavy Fire-Proof Document Vault / Banker Safe Rigging</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 4,500</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-5 bg-[#071330] text-white p-6 sm:p-8 rounded-2xl border border-blue-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-blue-400">
                    ESTIMATED COMMERCIAL PROPOSAL
                  </span>
                  <h3 className="text-lg font-black text-white">Office Relocation Quotation</h3>
                </div>
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="text-center py-4 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Estimated Relocation Investment (excl. VAT)</span>
                <div className="text-4xl font-black text-blue-400">
                  R {calculateEstimatedPrice().toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Includes R10M Goods-in-Transit (GIT) full replacement insurance
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Staff Workstations:</span>
                  <span className="font-bold text-white">{workstationCount} Units</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Transit Distance:</span>
                  <span className="font-bold text-white">{moveDistanceKm} km</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Server Racks Transported:</span>
                  <span className="font-bold text-white">{serverRackCount} Racks (Anti-Static)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Execution Window:</span>
                  <span className="font-bold text-blue-400">
                    {moveWindow === 'weekend_zero_downtime'
                      ? 'Weekend Zero Downtime'
                      : moveWindow === 'after_hours_weekday'
                      ? 'After-Hours Weekday'
                      : 'Standard Business Hours'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Security Crates Provided:</span>
                  <span className="font-bold text-white">{includeCrateRental ? workstationCount * 3 : 0} Crates</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Make-Good / Dilapidation:</span>
                  <span className="font-bold text-white">{includeLandlordMakeGood ? 'Included' : 'Not Selected'}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-950/60 rounded-lg border border-blue-800/60 text-xs text-blue-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Guaranteed SLA:</strong> We commit to the agreed weekend timeline so your team is 100% operational by 07:30 Monday morning.
                </span>
              </div>

              <a
                href="#relocation-quote"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>LOCK IN YOUR MOVE DATE &amp; PROPOSAL</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAST ON-SITE AUDIT & DISPATCH FORM */}
      <section id="relocation-quote" className="py-16 bg-[#04091a] text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Value proposition */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-black tracking-widest text-blue-400 uppercase bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800">
                OFFICIAL RELOCATION SURVEY DISPATCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Schedule an On-Site Move Survey &amp; Asset Assessment
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Avoid last-minute moving chaos. Our Move Master project consultants will visit your premises in Pretoria, Johannesburg, Midrand, Sandton, Centurion, or nationally to calculate physical volume, elevator access constraints, and IT infrastructure requirements.
              </p>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white">Free Detailed Inventory Cataloging:</strong> Comprehensive line-by-line furniture, crate, and IT asset count.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white">Floor Plan Tagging Strategy:</strong> Numbered color labeling matching destination office layout blueprints.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white">All-Inclusive Firm Price Quotation:</strong> Zero hidden surprise surcharges on packing, mileage, or weekend hours.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct Contractor Booking Line</span>
                  <a href="tel:+27745187012" className="text-base font-black text-red-400 hover:underline">
                    +27 74 518 7012
                  </a>
                </div>
                <a
                  href="mailto:info@eurekafms.co.za"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold transition-colors"
                >
                  Email Move Specs
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200">
              {quoteSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Relocation Survey Request Received!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. Our Corporate Move Project Manager has received your site specifications and will contact you within 2 hours to confirm your on-site survey and delivery of moving crates.
                  </p>
                  <button
                    onClick={() => setQuoteSubmitted(false)}
                    className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded hover:bg-blue-700 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="border-b border-slate-200 pb-3 mb-2">
                    <h3 className="text-lg font-black text-slate-900">Request Commercial Relocation Quote</h3>
                    <p className="text-xs text-slate-500">Provide move locations to receive your customized proposal within 24 hours.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Acme Financial Services"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Contact Person &amp; Designation *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Johan van der Merwe (FM)"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="johan@acme.co.za"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Mobile / Direct Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+27 82 123 4567"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Current Origin Address / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Brooklyn Bridge Office Park, Pretoria"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">New Destination Address / City *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Waterfall City, Midrand"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Estimated Move Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">Approximate Desk Count</label>
                      <select defaultValue="16-50" className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50">
                        <option value="1-15">1 to 15 Desks (Small Office)</option>
                        <option value="16-50">16 to 50 Desks (Medium)</option>
                        <option value="51-120">51 to 120 Desks (Large Corporate)</option>
                        <option value="121+">120+ Desks (Enterprise Headquarters)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">Special Handling Instructions &amp; Requirements</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Server rack migration required, 2 executive heavy fire safes, weekend zero-downtime execution needed..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-blue-500 focus:outline-none bg-slate-50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded shadow hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <span>SUBMIT FOR SAME-DAY RELOCATION AUDIT</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
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
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
