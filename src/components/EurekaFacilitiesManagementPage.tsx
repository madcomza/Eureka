import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { EurekaLogo } from './EurekaLogo';
import {
  Building2,
  HardHat,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronDown,
  Layers,
  Search,
  ShieldCheck,
  Wrench,
  Zap,
  Activity,
  FileCheck2,
  Users,
  AlertTriangle,
  Clock,
  Check,
  Send,
  Sparkles,
  HelpCircle,
  BarChart3,
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaFacilitiesManagementPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'pricing' | 'contact' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation', subcategory?: SolutionSubcategory) => void;
}

export const EurekaFacilitiesManagementPage: React.FC<EurekaFacilitiesManagementPageProps> = ({
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'hvac' | 'electrical' | 'plumbing' | 'compliance' | 'workplace'>('hvac');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: "What is the difference between reactive maintenance and Integrated Facilities Management (IFM)?",
      a: "Reactive maintenance only fixes assets once they break down, resulting in expensive emergency contractor callouts, tenant disruption, and shortened equipment lifespan. Integrated Facilities Management (IFM) provides scheduled Planned Preventative Maintenance (PPM), proactive condition monitoring, statutory OHS compliance, and a single managed service level agreement (SLA) covering all hard and soft building services."
    },
    {
      q: "How fast is EFMS's emergency response SLA for critical facility failures?",
      a: "We maintain a guaranteed < 2-hour emergency dispatch SLA across Gauteng and major metros for critical disruptions including main electrical failures, severe plumbing/sewage blockages, major HVAC breakdown during operating hours, and structural/access security emergencies."
    },
    {
      q: "Can EFMS manage existing third-party specialist contractors already under warranty?",
      a: "Yes. Under our Contractor Management and Client Representative service, we vet, supervise, and coordinate your existing OEM and specialist contractors (such as lift/elevator providers, generator maintenance teams, and fire suppression technicians) to ensure work is completed to specification without voiding warranties."
    },
    {
      q: "Do you provide statutory compliance audits and Health & Safety files?",
      a: "Absolutely. Our team conducts full OHS Act (Act 85 of 1993) baseline compliance audits, verifies municipal by-law alignment, certifies fire protection equipment readiness, and prepares comprehensive site-specific Health & Safety documentation overseen by registered built-environment professionals."
    },
    {
      q: "What building sizes and property portfolios do you manage?",
      a: "We service single commercial buildings from 500 m² up to large multi-tenant corporate campuses, retail shopping centers, industrial logistics parks, and distributed national branch networks exceeding 50,000 m²."
    }
  ];

  return (
    <div id="eureka-fm-service-root" className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Standard Header */}
      <EurekaHeader currentPage="facilities-management" onNavigate={onNavigate}  />

      {/* 3. Hero Section (Centered Layout) */}
      <section className="relative bg-[#050b1b] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600 overflow-hidden">
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-extrabold tracking-wider uppercase shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-sky-400" />
              <span>SOLUTIONS &bull; 1. FACILITIES &amp; PROPERTY MANAGEMENT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight max-w-3xl">
              FACILITIES MANAGEMENT SERVICES
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl leading-relaxed">
              Professional built-environment asset care, planned preventative maintenance (PPM), statutory compliance, and integrated facility operations engineered to maximize asset lifecycle performance and minimize operational risk across South Africa.
            </p>

            {/* Quick CTA Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate?.('contact')}
                className="px-7 py-3.5 rounded-lg bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Request Custom FM Proposal
              </button>
              <a
                href="#core-scope"
                className="px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-black tracking-wider uppercase transition-all border border-white/20 cursor-pointer"
              >
                Explore Service Scope
              </a>
            </div>

            {/* KPI Badges Strip */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl text-left">
              <div className="bg-white/5 rounded-lg p-3.5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white">&lt; 2 Hours</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Emergency Dispatch SLA</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3.5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-sky-400">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">OHS &amp; SANS Compliance</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3.5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-white">Single SLA</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">All Hard &amp; Soft Services</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3.5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-black text-red-400">Pr. CPM Led</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">SACPCMP Registered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Problem vs EFMS Integrated Solution */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              BUILT-ENVIRONMENT STRATEGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Why Fragmented Maintenance Fails &amp; How Integrated FM Solves It
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Property owners and facility executives face constant friction coordinating separate HVAC, electrical, plumbing, cleaning, hygiene, and compliance contractors. EFMS consolidates total asset accountability under one disciplined umbrella.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Fragmented Reality */}
            <div className="bg-white border-2 border-red-200 rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-black">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">The Fragmented Approach (The Risk)</h3>
                  <p className="text-xs text-slate-500">Multiple uncoordinated contractors &amp; reactive panic</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {[
                  {
                    t: 'Unbudgeted Emergency Repairs',
                    d: 'Waiting for HVAC chillers, backup generators, or roof structures to fail before taking action leads to exorbitant callout rates and tenant disputes.'
                  },
                  {
                    t: 'Contractor Finger-Pointing',
                    d: 'When electrical tripping damages HVAC compressors or plumbing leaks damage ceiling boards, separate vendors blame each other instead of solving the fault.'
                  },
                  {
                    t: 'Statutory & OHS Non-Compliance',
                    d: 'Missed pressure vessel inspections, expired fire extinguisher certifications, and missing safety files expose directors to severe legal liability.'
                  },
                  {
                    t: 'Administrative Overload',
                    d: 'Finance and operations teams waste dozens of hours processing 15+ separate monthly invoices, purchase orders, and quotes.'
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-red-50/50 p-3 rounded-lg border border-red-100">
                    <span className="w-5 h-5 rounded-full bg-red-200 text-red-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold">{item.t}</strong>
                      <span className="text-slate-600 text-xs">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* The EFMS Integrated Solution */}
            <div className="bg-white border-2 border-emerald-300 rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg">
                The EFMS Standard
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">The EFMS Integrated Model (The Solution)</h3>
                  <p className="text-xs text-slate-500">Single SLA, certified governance &amp; continuous asset lifecycle care</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {[
                  {
                    t: 'Structured Planned Preventative Maintenance (PPM)',
                    d: 'Pre-scheduled maintenance calendar for mechanical, electrical, plumbing, and structural systems prevents 80%+ of avoidable equipment breakdowns.'
                  },
                  {
                    t: 'Single Point of Contact & SLA Accountability',
                    d: 'One dedicated Facilities Account Manager oversees all site personnel, specialist vendors, cleaning crews, and dispatch logs.'
                  },
                  {
                    t: '100% OHS Act & Statutory Audit Guarantee',
                    d: 'Complete management of building safety files, fire compliance certificates (Aerosol/Sprinkler/Extinguishers), and electrical COC governance.'
                  },
                  {
                    t: 'Transparent Budgeting & Asset Life Extension',
                    d: 'Predictable monthly billing, consolidated reporting, and asset condition profiling ensure optimal CAPEX and OPEX lifecycle planning.'
                  }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-emerald-50/60 p-3 rounded-lg border border-emerald-200">
                    <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold">{item.t}</strong>
                      <span className="text-slate-600 text-xs">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Scope of Facilities Management Services */}
      <section id="core-scope" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              SERVICE PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Comprehensive Built-Environment Capabilities
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Every facility has unique technical requirements. Our modular service delivery framework covers both hard technical engineering and soft workplace services under one master agreement.
            </p>
          </div>

          {/* Interactive Capability Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10 pb-2">
            {[
              { id: 'hvac', label: 'HVAC & Mechanical', icon: Zap },
              { id: 'electrical', label: 'Electrical & Backup Power', icon: Activity },
              { id: 'plumbing', label: 'Plumbing & Wet Services', icon: Wrench },
              { id: 'compliance', label: 'OHS & Statutory Audits', icon: FileCheck2 },
              { id: 'workplace', label: 'Soft Services Integration', icon: Sparkles }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-extrabold tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#08286b] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-xl">
            {activeTab === 'hvac' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-sky-500/20 text-sky-300 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>MECHANICAL &amp; CLIMATE SYSTEMS</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    HVAC, Chillers &amp; Ventilation Management
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Ensuring indoor air quality, thermal comfort, and energy-efficient cooling across commercial buildings, retail centers, and critical data environments.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Central chiller plant servicing and quarterly refrigerant pressure tests',
                      'Split unit, VRV/VRF system maintenance and coil cleaning',
                      'Air handling unit (AHU) filter replacements & duct sanitization',
                      'Extraction and fresh-air ventilation balance testing',
                      'Building Management System (BMS) thermostat calibration',
                      'Emergency breakdown repair with 2-hour dispatch SLA'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">Energy Saving Impact</span>
                    <div className="text-3xl sm:text-4xl font-black text-white my-2">Up to 22%</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Reduction in HVAC energy consumption through scheduled preventative coil cleaning, sensor calibration, and airflow balancing.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="mt-6 w-full py-2.5 px-4 rounded bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request HVAC Audit
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'electrical' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold">
                    <Activity className="w-3.5 h-3.5" />
                    <span>ELECTRICAL INFRASTRUCTURE &amp; BACKUP POWER</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Power Reliability, Reticulation &amp; Generator Maintenance
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Safeguarding power continuity for uninterrupted business operations against grid volatility and electrical faults.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Diesel standby generator servicing, fuel testing & automatic transfer switch (ATS) tests',
                      'UPS battery backup system health checks & load testing',
                      'Distribution board (DB) thermal imaging & infrared scanning for hot spots',
                      'Certificate of Compliance (COC) statutory inspections and fault rectification',
                      'LED retrofits and energy consumption profiling',
                      'Surge protection and lightning conductor testing'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">Business Continuity</span>
                    <div className="text-3xl sm:text-4xl font-black text-white my-2">99.9%</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Standby generator uptime guarantee through automated weekly run-tests and preventative fuel polishing.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="mt-6 w-full py-2.5 px-4 rounded bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Electrical Audit
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'plumbing' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/20 text-blue-300 text-xs font-bold">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>PLUMBING, WET SERVICES &amp; WATER INFRASTRUCTURE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Water Supply, Booster Pumps &amp; Drainage Maintenance
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Preventing catastrophic water damage, high utility bills from hidden leaks, and hygiene disruptions across sanitary installations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Booster pump station maintenance and pressure vessel bladder checks',
                      'Backup water tank storage, filtration, and chlorination servicing',
                      'Main sewer line and grease trap preventative jetting/cleaning',
                      'Acoustic leak detection and municipal water meter reconciliation',
                      'Commercial washroom fixture repair and preventative valve servicing',
                      'Stormwater channel, roof gutter, and sump pump clearing'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-1">Water Security</span>
                    <div className="text-3xl sm:text-4xl font-black text-white my-2">Zero Loss</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Continuous acoustic leak detection prevents underground water loss and saves tens of thousands in municipal overbilling.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="mt-6 w-full py-2.5 px-4 rounded bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Wet Services Audit
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-300 text-xs font-bold">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>STATUTORY GOVERNANCE &amp; OHS ACT COMPLIANCE</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Occupational Health &amp; Safety, Fire &amp; Municipal Bylaw Audits
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Protecting building owners and tenants from statutory penalties, insurance claim repudiation, and occupational safety liabilities.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Comprehensive OHS Act (Act 85 of 1993) baseline compliance audits',
                      'Fire hydrant, hose reel, sprinkler, and extinguisher annual certification',
                      'Emergency evacuation diagram design and drill coordination',
                      'Lift and escalator 6-monthly annexure inspection verification',
                      'Structural integrity, facade, and roof condition safety reports',
                      'Site-specific Health & Safety documentation and contractor file vetting'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">Audit Guarantee</span>
                    <div className="text-3xl sm:text-4xl font-black text-white my-2">100%</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Guaranteed compliance documentation readiness for Department of Employment and Labour inspections and municipal audits.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="mt-6 w-full py-2.5 px-4 rounded bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Compliance Audit
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'workplace' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SOFT SERVICES INTEGRATION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Cleaning, Hygiene, Pest Control &amp; Grounds Maintenance
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Creating clean, hygienic, and welcoming working environments that elevate tenant satisfaction and company image.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      'Daily commercial contract cleaning for offices, common areas, and ablutions',
                      'Washroom hygiene equipment dispensers, consumables & sanitary disposal',
                      'HACCP-compliant pest control and termite soil poisoning treatments',
                      'Grounds maintenance, perimeter landscaping, and lawn irrigation care',
                      'Waste management, sorting, recycling, and hazardous waste manifests',
                      'Internal office moves, furniture reconfiguration & handyman support'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-2.5 rounded border border-white/10">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 text-center flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">One SLA Partner</span>
                    <div className="text-3xl sm:text-4xl font-black text-white my-2">1 Invoice</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Consolidate your cleaning, hygiene, waste, and pest control under one managed monthly account with clear KPI benchmarks.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate?.('contact')}
                    className="mt-6 w-full py-2.5 px-4 rounded bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Request Soft Services Quote
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. Four-Stage Asset Management Lifecycle Process */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              OUR PROVEN METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
              How EFMS Mobilizes Your Facility Management
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We follow a rigorous 4-step built-environment onboarding process to eliminate operational blind spots, establish asset registers, and set measurable performance benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Facility Condition Audit',
                desc: 'Comprehensive on-site inspection of building fabric, HVAC, electrical DBs, plumbing, fire safety systems, and existing compliance gaps.',
                kpi: 'Detailed Asset Register & Defect Log'
              },
              {
                step: '02',
                title: 'Custom PPM & SLA Design',
                desc: 'Development of an annual Planned Preventative Maintenance schedule with customized response times, task frequencies, and budget thresholds.',
                kpi: 'Tailored Service Level Agreement'
              },
              {
                step: '03',
                title: 'Mobilization & Helpdesk',
                desc: 'Deployment of vetted on-site personnel, induction of specialist subcontractors, health & safety file submission, and 24/7 helpdesk onboarding.',
                kpi: '< 2 Hour Emergency SLA Active'
              },
              {
                step: '04',
                title: 'Review & Optimization',
                desc: 'Monthly performance reports, OHS compliance tracking, energy utilization reviews, and continuous asset lifecycle cost optimization.',
                kpi: 'Monthly Executive Dashboard'
              }
            ].map((st, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-sky-500 transition-all hover:shadow-md">
                <div>
                  <div className="text-3xl font-black text-sky-600 mb-3">{st.step}</div>
                  <h3 className="text-base font-black text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{st.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{st.kpi}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Key Sectors Serviced */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              TAILORED INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight mt-3">
              Sector-Specific Facility Management Expertise
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              We understand that the operating conditions and compliance mandates of an industrial distribution center differ vastly from a corporate head office or retail shopping mall.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Office Parks & Corporate HQs',
                desc: 'High-standard workplace presentation, executive HVAC control, spotless ablution hygiene, generator reliability, and proactive tenant request resolution.',
                tag: 'Corporate Workplace'
              },
              {
                title: 'Industrial Parks, Warehouses & Logistics',
                desc: 'Heavy-duty floor maintenance, high-bay lighting, three-phase power reticulation, yard stormwater management, and strict industrial safety adherence.',
                tag: 'Industrial & Supply Chain'
              },
              {
                title: 'Retail Shopping Centers & Malls',
                desc: 'High-footfall common area cleaning, customer washroom management, emergency response for tenant disruptions, and after-hours maintenance execution.',
                tag: 'Retail Built-Environment'
              },
              {
                title: 'Educational & Institutional Campuses',
                desc: 'Safe campus grounds, high-volume washroom sanitization, classroom maintenance, HVAC circulation, and statutory child-safety environment standards.',
                tag: 'Education & Institutional'
              },
              {
                title: 'Healthcare Clinics & Specialist Centers',
                desc: 'Medical-grade hygiene sanitation, continuous uninterrupted power supply (UPS/Generator), clinical waste handling, and specialized air filtration.',
                tag: 'Healthcare Environments'
              },
              {
                title: 'Public Sector & Municipal Facilities',
                desc: 'Rigorous public finance governance (PFMA compliance), statutory asset lifecycle audits, transparent subcontracting, and high-durability maintenance.',
                tag: 'Public Infrastructure'
              }
            ].map((sec, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-sky-400 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">
                    {sec.tag}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-3 mb-2">{sec.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
                </div>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="mt-4 text-xs font-bold text-[#08286b] hover:text-red-600 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Frequently Asked Questions (FAQ) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              COMMON QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Facilities Management FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Clear answers regarding our service models, response times, and compliance assurance.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Site Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
