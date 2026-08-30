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
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaFacilitiesManagementPage: React.FC<EurekaFacilitiesManagementPageProps> = ({
  onNavigate,
  onOpenCode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'hvac' | 'electrical' | 'plumbing' | 'compliance' | 'workplace'>('hvac');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    propertyType: 'commercial-office',
    facilitySize: '1000-5000',
    serviceRequirement: 'total-fm',
    urgency: 'standard',
    details: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        propertyType: 'commercial-office',
        facilitySize: '1000-5000',
        serviceRequirement: 'total-fm',
        urgency: 'standard',
        details: ''
      });
    }, 4500);
  };

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
      <EurekaHeader currentPage="facilities-management" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* 3. Hero Section (Centered Layout) */}
      <section className="relative bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0d276b] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600 overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-200 text-xs font-extrabold tracking-wider uppercase mb-5 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-sky-400" />
            <span>SOLUTIONS &bull; 1. FACILITIES &amp; PROPERTY MANAGEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase leading-tight">
            FACILITIES MANAGEMENT SERVICES
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Professional built-environment asset care, planned preventative maintenance (PPM), statutory compliance, and integrated facility operations engineered to maximize asset lifecycle performance and minimize operational risk across South Africa.
          </p>

          {/* Quick CTA Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#quote-form"
              className="px-7 py-3.5 rounded-lg bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Request Custom FM Proposal
            </a>
            <a
              href="#core-scope"
              className="px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-black tracking-wider uppercase transition-all border border-white/20 cursor-pointer"
            >
              Explore Service Scope
            </a>
          </div>

          {/* Centered KPI Badges Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-700/60 max-w-3xl mx-auto text-center">
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

      {/* 8. Emergency Hotline & 2-Hour Dispatch SLA Banner */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-[#08286b] text-white py-12 px-4 sm:px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/20 text-white text-xs font-black uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>RAPID RESPONSE GUARANTEE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Facing an Urgent Facility Emergency?
            </h2>
            <p className="text-xs sm:text-sm text-red-100 max-w-2xl">
              Power outages, burst water mains, HVAC failure during peak trading, or structural safety hazards — our standby technical response teams are available 24/7.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="tel:+27745187012"
              className="px-6 py-3.5 rounded-lg bg-white text-slate-900 hover:bg-slate-100 text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call +27 74 518 7012</span>
            </a>
            <a
              href="https://wa.me/27745187012"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <MessageSquareWhatsApp className="w-4 h-4" />
              <span>WhatsApp Operations</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Interactive Facility Consultation & Quote Request Form */}
      <section id="quote-form" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form Description & Assurance */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-red-400 bg-red-950/80 px-3 py-1 rounded border border-red-800">
                PROPOSAL &amp; AUDIT REQUEST
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Request a Custom Facilities Management Proposal
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us about your property, facility size, and specific operational challenges. Our technical directorate will conduct a preliminary assessment and provide a transparent, structured service level proposal.
              </p>

              <div className="space-y-3.5 pt-4">
                {[
                  'Complimentary initial site inspection & baseline defect audit',
                  'Itemized PPM calendar with transparent monthly pricing',
                  'Registered Pr. CPM & SACPCMP technical oversight guarantee',
                  'Rapid SLA implementation within 7 to 14 business days'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white">Prefer to email our FM desk directly?</div>
                <div>Email: <a href="mailto:info@eurekafms.co.za" className="text-sky-400 hover:underline">info@eurekafms.co.za</a></div>
                <div>Headquarters: 170 Pitts Ave, Weavind Park, Pretoria</div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              <h3 className="text-lg font-black text-slate-900 mb-1">
                Facility Assessment Form
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in your details below to receive a formal facilities proposal.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500 rounded-xl p-8 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-black text-emerald-900">Proposal Request Received!</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you, <strong>{formData.name || 'Valued Client'}</strong>. Our facilities engineering team is reviewing your requirements and will contact you within 2 business hours to schedule your baseline facility audit.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Johan van der Merwe"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Company / Property Owner *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Commercial Holdings"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. johan@apexholdings.co.za"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Contact Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +27 82 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="commercial-office">Commercial Office</option>
                        <option value="industrial-warehouse">Industrial / Warehouse</option>
                        <option value="retail-center">Retail / Shopping Mall</option>
                        <option value="institutional">School / University / Clinic</option>
                        <option value="residential-estate">Residential Estate / Complex</option>
                        <option value="other">Other Built-Environment</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Estimated Size</label>
                      <select
                        value={formData.facilitySize}
                        onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="under-1000">&lt; 1,000 m²</option>
                        <option value="1000-5000">1,000 m² – 5,000 m²</option>
                        <option value="5000-15000">5,000 m² – 15,000 m²</option>
                        <option value="15000-plus">15,000+ m²</option>
                        <option value="multi-site">Multi-Site Portfolio</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Scope</label>
                      <select
                        value={formData.serviceRequirement}
                        onChange={(e) => setFormData({ ...formData, serviceRequirement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                      >
                        <option value="total-fm">Total Integrated FM (Hard + Soft)</option>
                        <option value="hard-maintenance">Hard Maintenance (HVAC, Elecl, Plumb)</option>
                        <option value="soft-services">Soft Services (Cleaning, Hygiene, Pest)</option>
                        <option value="statutory-audit">OHS &amp; Compliance Audit Only</option>
                        <option value="emergency-callout">Emergency Callout / Urgent Repair</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Facility Description &amp; Specific Maintenance Challenges
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Please mention your location, key equipment on site, existing maintenance pain points, or upcoming lease deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Proposal Request</span>
                  </button>
                </form>
              )}
            </div>
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

      {/* 11. Bottom CTA Strip */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Ready to Optimize Your Facility's Operations &amp; Reduce Downtime?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Eureka Facilities Management Solutions for certified technical governance, single-point accountability, and predictable asset performance.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-7 py-3.5 rounded-lg bg-[#d91b1b] hover:bg-red-700 text-white text-xs font-black tracking-wider uppercase transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate?.('solutions', 'all')}
              className="px-7 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-black tracking-wider uppercase transition-all border border-slate-700 cursor-pointer"
            >
              View All 3 Solutions
            </button>
          </div>
        </div>
      </section>

      {/* 12. Site Footer */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};

function MessageSquareWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}
