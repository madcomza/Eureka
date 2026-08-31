import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import {
  Shield,
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
  
  // Interactive Soil Poisoning Estimator State
  const [projectStage, setProjectStage] = useState<'pre_construction_slab' | 'foundation_trench' | 'post_construction_retrofit' | 'conveyancing_clearance'>('pre_construction_slab');
  const [siteFootprintArea, setSiteFootprintArea] = useState<number>(1200); // m²
  const [perimeterLinearMeters, setPerimeterLinearMeters] = useState<number>(160); // linear meters
  const [warrantyType, setWarrantyType] = useState<'5_year_standard' | '10_year_extended'>('10_year_extended');
  const [includeMunicipalCertificate, setIncludeMunicipalCertificate] = useState<boolean>(true);
  const [includePerimeterDrillInject, setIncludePerimeterDrillInject] = useState<boolean>(false);
  const [includeTimberTrussSpray, setIncludeTimberTrussSpray] = useState<boolean>(false);

  // Form submission state
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // Calculate estimated price
  const calculateEstimatedPrice = () => {
    let ratePerSqm = 24.50; // SANS 10124 termiticide flood application
    if (projectStage === 'pre_construction_slab') ratePerSqm = 22.00;
    if (projectStage === 'foundation_trench') ratePerSqm = 28.00;
    if (projectStage === 'post_construction_retrofit') ratePerSqm = 42.00;
    if (projectStage === 'conveyancing_clearance') ratePerSqm = 14.00;

    let subtotal = siteFootprintArea * ratePerSqm;
    
    // Add perimeter trench / linear meter dosing
    subtotal += perimeterLinearMeters * 35.00;

    if (warrantyType === '10_year_extended') {
      subtotal *= 1.18; // Extended high-durability polymer termiticide binder
    }

    if (includeMunicipalCertificate) subtotal += 850;
    if (includePerimeterDrillInject) subtotal += 3200;
    if (includeTimberTrussSpray) subtotal += 2400;

    return Math.round(subtotal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Standard Header */}
      <EurekaHeader currentPage="pre-soil-treatment" onNavigate={onNavigate}  />

      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#120e06] via-[#241a0b] to-[#0a0703] text-white py-16 lg:py-20 border-b-4 border-amber-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>SOLUTIONS • 1. FACILITIES &amp; PROPERTY • STRUCTURAL TERMITE DEFENSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
                PRE-CONSTRUCTION SOIL TREATMENT &amp; <span className="text-amber-400">SOIL POISONING</span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                SANS 10124 and SANS 10400-A certified subterranean termite chemical soil barriers, under-slab flood treatments prior to concrete casting, foundation trench barriers, and 5-to-10 year guarantee certificates for residential developments, industrial parks, and commercial construction.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#soil-treatment-quote"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center gap-2"
                >
                  <span>REQUEST SLAB CERTIFICATION QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
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

            {/* Right Col: Treatment Certificate Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-amber-500/40 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-white leading-tight">Certificate of Guarantee</h2>
                      <span className="text-[11px] text-slate-400">SANS 10400-A Part L &amp; NHBRC</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-500 text-slate-950">
                    SABS 1165 / 1164
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Pre-Slab Compaction Flood:</strong> 5L/m² high-pressure termiticide barrier applied to leveled hard-core filling before plastic DPC placement.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Foundation Trench Flooding:</strong> 5L/linear metre saturation around inner &amp; outer perimeter load-bearing brick footings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Service Pipe Penetration Collars:</strong> Heavy-duty emulsion seal around plumbing, conduit, and sewer risers to eliminate bypass gaps.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Municipal Inspector Sign-off:</strong> Official documentation issued for local building control and bond clearance sign-off.</span>
                  </li>
                </ul>

                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-amber-400" />
                    <span>Includes 5 or 10-Year Certificate of Guarantee</span>
                  </span>
                  <span className="font-bold text-amber-400">100% Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE SOIL TREATMENT DISCIPLINES */}
      <section id="soil-disciplines" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Discipline 1: Pre-Slab Flood */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Pre-Construction Under-Slab Soil Barrier
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Application of SABS-approved non-repellent termiticide emulsion at standard 5L/m² directly across compacted earth / fill sand before the damp-proof membrane (USB green plastic) and concrete pour.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Calibrated high-output motorized pump rigs</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Pre-pour certificate provided for municipal engineers</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Seamless continuous chemical barrier</span>
                </li>
              </ul>
            </article>

            {/* Discipline 2: Foundation Trenching */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Foundation Trenching &amp; Perimeter Backfill
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Deep vertical saturation of foundation trenches and backfill soil adjacent to external foundation walls at 5 to 7.5 Litres per linear meter to intercept foraging worker termites tunneling upwards.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Envelops outer foundation perimeter walls</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Treated soil backfill resists water leaching</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Protects weep holes and foundation joints</span>
                </li>
              </ul>
            </article>

            {/* Discipline 3: Post-Construction Drill & Inject */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <HardHat className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Post-Construction Perimeter Drill &amp; Pressure Injection
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                For existing structures experiencing active termite damage: precision masonry drilling at 300mm intervals along slab perimeters and patios, deep chemical sub-slab injection, and color-matched mortar resealing.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Zero structural damage to tiling or brickwork</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>High-pressure sub-slab dispersion rods</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Full colony eradication through transfer toxicant</span>
                </li>
              </ul>
            </article>

            {/* Discipline 4: Timber Roof Truss Preservation */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Timber Roof Truss &amp; Framing Wood Borer Defense
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Deep penetrating preservative spray and micro-injection of timber roof trusses, purlins, and rafters to eradicate Italian Beetle (*Hylotrupes bajulus*), False Powder Post Beetle, and drywood termites.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Penetrates deep into pine and hardwood structural timbers</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Prevents structural roof sag and catastrophic collapse</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Official Wood Borer Clearance Certificates issued</span>
                </li>
              </ul>
            </article>

            {/* Discipline 5: Municipal Clearance Certificates */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                NHBRC &amp; Municipal Building Inspector Clearance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Immediate issuance of legally binding SANS 10400-A Part L soil treatment completion certificates required for NHBRC enrollment, structural engineer sign-off, and municipal occupation certificates.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Signed by SAPCA P-Registered Pest Control Officers</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Specifies chemical registration number and dosage rate</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Accepted by all major South African banking institutions</span>
                </li>
              </ul>
            </article>

            {/* Discipline 6: Subterranean Termite Baiting */}
            <article className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-base mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                Termite Nest Baiting &amp; Queen Elimination
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow">
                Installation of in-ground perimeter termite bait stations containing insect growth regulators (chitin synthesis inhibitors). Foraging termites carry the bait back to the central subterranean queen.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-3 border-t border-slate-200">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>100% elimination of queen and complete colony collapse</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Ideal for sensitive landscaped gardens and estates</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Continuous 24/7 subterranean surveillance</span>
                </li>
              </ul>
            </article>
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

      {/* 6. INTERACTIVE SOIL POISONING ESTIMATOR */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-black tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full uppercase">
              INSTANT BUDGET ESTIMATOR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 mb-2">
              Soil Treatment &amp; Slab Poisoning Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Calculate standard contract rates based on your site footprint, foundation perimeter, and guarantee requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Configuration Controls */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              {/* Parameter 1: Construction Project Stage */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  1. Construction Stage &amp; Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'pre_construction_slab', label: 'Pre-Construction Slab', desc: 'Pre-pour 5L/m² flood' },
                    { id: 'foundation_trench', label: 'Foundation Trenching', desc: 'Deep perimeter trenches' },
                    { id: 'post_construction_retrofit', label: 'Post-Construction Drill & Inject', desc: 'Retrofit existing building' },
                    { id: 'conveyancing_clearance', label: 'Conveyancing Clearance', desc: 'Inspection & certificate' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProjectStage(item.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        projectStage === item.id
                          ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Footprint Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    2. Total Slab Under-Roof Footprint
                  </label>
                  <span className="text-xs font-black text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {siteFootprintArea.toLocaleString()} m²
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={10000}
                  step={50}
                  value={siteFootprintArea}
                  onChange={(e) => setSiteFootprintArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Residential (100 m²)</span>
                  <span>Commercial Complex (2,500 m²)</span>
                  <span>Industrial Warehouse (10,000 m²+)</span>
                </div>
              </div>

              {/* Parameter 3: Perimeter Linear Meters */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    3. Perimeter Foundation Trench Length
                  </label>
                  <span className="text-xs font-black text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {perimeterLinearMeters.toLocaleString()} Linear Metres
                  </span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={1000}
                  step={10}
                  value={perimeterLinearMeters}
                  onChange={(e) => setPerimeterLinearMeters(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>Small Home (20 lm)</span>
                  <span>Medium Site (160 lm)</span>
                  <span>Large Perimeter (1,000 lm)</span>
                </div>
              </div>

              {/* Parameter 4: Guarantee Duration */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  4. Written Guarantee Duration
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setWarrantyType('5_year_standard')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      warrantyType === '5_year_standard'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">5-Year Standard Guarantee</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">SABS standard termiticide</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setWarrantyType('10_year_extended')}
                    className={`p-3 rounded-lg border text-center transition-all ${
                      warrantyType === '10_year_extended'
                        ? 'border-amber-600 bg-amber-50 text-amber-950 font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">10-Year Extended Guarantee</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Polymer-bound heavy-duty emulsion</div>
                  </button>
                </div>
              </div>

              {/* Parameter 5: Add-on services */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                  5. Additional Specialized Protection
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeMunicipalCertificate}
                        onChange={(e) => setIncludeMunicipalCertificate(e.target.checked)}
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>Official SANS 10400-A Part L Certificate of Clearance</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 850</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includePerimeterDrillInject}
                        onChange={(e) => setIncludePerimeterDrillInject(e.target.checked)}
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>External Veranda / Patio Concrete Slab Sub-Drilling</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 3,200</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs">
                    <span className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={includeTimberTrussSpray}
                        onChange={(e) => setIncludeTimberTrussSpray(e.target.checked)}
                        className="rounded text-amber-600 focus:ring-amber-500"
                      />
                      <span>Timber Roof Truss Wood Borer Preservative Treatment</span>
                    </span>
                    <span className="font-bold text-slate-700">+R 2,400</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-5 bg-[#0e0a05] text-white p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                    ESTIMATED CONTRACT PROPOSAL
                  </span>
                  <h3 className="text-lg font-black text-white">Pre-Soil Treatment Quotation</h3>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>

              <div className="text-center py-4 bg-slate-900/80 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Estimated Once-Off Treatment Cost (excl. VAT)</span>
                <div className="text-4xl font-black text-amber-400">
                  R {calculateEstimatedPrice().toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Subject to on-site concrete casting schedule &amp; site access
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Treated Slab Footprint:</span>
                  <span className="font-bold text-white">{siteFootprintArea.toLocaleString()} m²</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Foundation Trenching:</span>
                  <span className="font-bold text-white">{perimeterLinearMeters.toLocaleString()} linear meters</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Guarantee Period:</span>
                  <span className="font-bold text-amber-400">
                    {warrantyType === '10_year_extended' ? '10-Year Written Guarantee' : '5-Year Written Guarantee'}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">SANS 10124 Compliance:</span>
                  <span className="font-bold text-emerald-400">Fully Certified</span>
                </div>
              </div>

              <a
                href="#soil-treatment-quote"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>BOOK THIS TREATMENT FOR CASTING DATE</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                ⚡ We coordinate directly with your concrete supplier &amp; site foreman to treat immediately prior to plastic/pour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SITE AUDIT & PROPOSAL REQUEST FORM */}
      <section id="soil-treatment-quote" className="py-16 bg-[#0a0703] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Value Props */}
            <div className="lg:col-span-5">
              <span className="text-xs font-black tracking-widest text-amber-400 uppercase bg-amber-950/80 px-2.5 py-1 rounded border border-amber-800">
                OFFICIAL SLAB DISPATCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4 leading-tight">
                Schedule Your Soil Poisoning &amp; Slab Certification
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Avoid costly construction delays. Our mobile soil treatment rigs are on standby to flood hard-core and foundations across Gauteng, Pretoria, Centurion, Johannesburg, and surrounding provinces.
              </p>

              <div className="space-y-3 text-xs text-slate-300 mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Same-Day Certificate Issuance:</strong> We hand over the SANS 10400-A Part L certificate upon treatment completion.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>SABS Approved Termiticides:</strong> We use registered chemicals (Imidacloprid / Fipronil / Bifenthrin) compliant with Act 36 of 1947.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>NHBRC &amp; Bank Approved:</strong> Meets all pre-requisites for structural mortgage finance disbursements.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">Direct Contractor Booking Hotline</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  <a href="tel:+27745187012" className="text-base font-black text-white hover:text-red-400">
                    +27 74 518 7012
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl">
                {quoteSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Soil Treatment Request Received!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                      Our certified pest control technical team will contact your site foreman within 2 hours to confirm site readiness and concrete pouring timing.
                    </p>
                    <button
                      onClick={() => setQuoteSubmitted(false)}
                      className="px-5 py-2 bg-amber-600 text-white text-xs font-bold rounded-lg hover:bg-amber-700"
                    >
                      Submit Another Site Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="border-b border-slate-200 pb-3 mb-2">
                      <h3 className="text-base font-black text-slate-900">Request Soil Poisoning Quotation &amp; Certificate</h3>
                      <p className="text-xs text-slate-500">Coordinate treatment with your ready-mix casting schedule.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Contractor / Client Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Botha (Site Agent)"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Company / Development Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Apex Construction (Pty) Ltd"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="david@apexconstruction.co.za"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Site Phone / Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+27 83 456 7890"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Target Concrete Pour Date</label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Site Physical Location / Erf</label>
                        <input
                          type="text"
                          placeholder="e.g. Erf 412, Midstream Estate, Centurion"
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Footprint Size &amp; Site Notes</label>
                      <textarea
                        rows={2}
                        placeholder="Detail slab area (e.g. 1,400 m² industrial floor), foundation trench depths, or existing termite activity..."
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>SUBMIT FOR SAME-DAY BOOKING</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
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
