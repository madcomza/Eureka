import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { EurekaLogo } from './EurekaLogo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  FileText,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Headphones,
  Calendar,
  Zap,
  Flame,
  Droplets,
  HardHat,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';

interface EurekaContactPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact') => void;
}

export const EurekaContactPage: React.FC<EurekaContactPageProps> = ({
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState<'quote' | 'emergency' | 'audit' | 'general'>('quote');
  const [selectedHub, setSelectedHub] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    postcode: '',
    serviceType: 'Total Facilities Management (TFM)',
    priority: 'Standard (PPM / Quote Inquiry)',
    buildingType: 'Commercial Office',
    message: '',
    consent: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const genId = 'EFM-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(genId);
    setFormSubmitted(true);
  };

  const regionalHubs = [
    {
      id: 'pretoria-hq',
      name: 'Head Office & National Operations',
      city: 'Pretoria & Gauteng Central',
      address: '170 Pitts Avenue, Weavind Park, Pretoria, South Africa',
      phone: '+27 74 518 7012',
      whatsapp: '+27 74 518 7012',
      email: 'info@eurekasolutions.co.za',
      hours: 'Office: Mon - Fri 08:00 - 17:00 | Helpdesk: 24/7/365',
      fleet: 'Rapid Deployment Engineering Fleet',
      lead: 'Executive Operations & Technical Director',
      coverage: 'Pretoria, Johannesburg, Centurion, Midrand, Ekurhuleni & Nationwide SA',
    },
    {
      id: 'gauteng-industrial',
      name: 'Gauteng Commercial & Industrial Hub',
      city: 'Johannesburg & Greater Gauteng',
      address: '170 Pitts Avenue, Weavind Park, Pretoria, South Africa',
      phone: '+27 74 518 7012',
      whatsapp: '+27 74 518 7012',
      email: 'info@eurekasolutions.co.za',
      hours: '24/7 Operations & On-Call Engineering',
      fleet: 'Commercial M&E & HVAC Mobile Units',
      lead: 'Senior Project & Facilities Manager',
      coverage: 'Sandton, Rosebank, Midrand, Kempton Park, Germiston & Surrounds',
    },
    {
      id: 'national-projects',
      name: 'National Project Management & Consulting',
      city: 'Nationwide South Africa',
      address: '170 Pitts Avenue, Weavind Park, Pretoria, South Africa',
      phone: '+27 74 518 7012',
      whatsapp: '+27 74 518 7012',
      email: 'info@eurekasolutions.co.za',
      hours: 'Office: Mon - Fri 08:00 - 17:00',
      fleet: 'Pr. CPM & Compliance Survey Vehicles',
      lead: 'Pr. CPM Construction & FM Advisory Lead',
      coverage: 'Gauteng, Western Cape, KwaZulu-Natal, Mpumalanga, Limpopo & Free State',
    },
  ];

  const faqs = [
    {
      q: 'How fast can an emergency technician or engineer attend our premises?',
      a: 'For contracted clients with priority SLA agreements, our 24/7 emergency dispatch mobilizes on-site within 2 hours across Gauteng and major metro hubs for critical failures (such as main electrical trips, HVAC chillers, backup generators, or plumbing leaks).',
    },
    {
      q: 'Do you provide on-site asset condition assessments and SLA proposals?',
      a: 'Yes. Our registered technical team visits your property to conduct a comprehensive condition assessment of all mechanical, electrical, HVAC, and building fabric assets before presenting a structured Planned Preventative Maintenance (PPM) proposal.',
    },
    {
      q: 'Can Eureka manage multi-site commercial or institutional property portfolios?',
      a: 'Yes. We manage end-to-end Total Facilities Management (TFM) and project management for commercial office parks, retail centers, educational institutions, and industrial portfolios across South Africa with single-point-of-contact reporting and consolidated billing.',
    },
    {
      q: 'Are your teams qualified, compliant, and insured under South African regulations?',
      a: 'Yes. All our operations strictly comply with the Occupational Health and Safety (OHS) Act, SANS building standards, SABS regulations, and industry council bodies. Our project leaders are SACPCMP registered Pr. CPM professionals.',
    },
    {
      q: 'How do clients submit work orders, fault tickets, and track maintenance?',
      a: 'You can submit requests via our direct phone line (+27 74 518 7012), WhatsApp support (+27 74 518 7012), email (info@eurekasolutions.co.za), or our online inquiry dispatch system. All tasks receive unique reference tracking and digital job sign-offs.',
    },
    {
      q: 'What contract structures and payment options do you support?',
      a: 'We provide customized monthly retainer SLAs, quarterly scheduled preventative maintenance contracts, fixed project milestones for construction refurbishments, and pre-agreed hourly schedule-of-rates (SOR) for ad-hoc callouts.',
    },
  ];

  return (
    <div id="eureka-contact-root" className="w-full bg-white text-slate-900 font-sans antialiased selection:bg-red-500 selection:text-white">
      {/* Standard Header */}
      <EurekaHeader currentPage="contact" onNavigate={onNavigate}  />

      {/* 3. Hero Section (Centered Layout) */}
      <section className="relative bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0d276b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600 overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-300 text-xs font-extrabold tracking-wider uppercase mb-4 shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-red-400" />
            <span>FACILITIES MANAGEMENT &bull; CONSTRUCTION &bull; PROJECT MANAGEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase leading-tight">
            GET IN TOUCH WITH OUR TEAM
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether you require a comprehensive Planned Preventative Maintenance (PPM) proposal, construction project management under registered Pr. CPM governance, or an on-site facility condition audit — our team is ready to assist you.
          </p>

          {/* Quick KPI Strip Centered */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-700/60 max-w-3xl mx-auto text-center">
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-white">&lt; 2 Hours</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Emergency Callout SLA</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">WhatsApp</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">+27 74 518 7012</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-white">Pretoria HQ</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">170 Pitts Ave, Weavind Park</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-xl sm:text-2xl font-black text-red-400">Pr. CPM</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">SACPCMP Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Contact Body (Interactive Form + Direct Support Channels) */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-slate-50 relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Contact / RFQ Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              {/* Form Mode Selector */}
              <div className="flex items-center gap-2 mb-6 p-1.5 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setInquiryType('quote')}
                  className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg transition-all text-center ${
                    inquiryType === 'quote'
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  PPM / Maintenance Quote
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('emergency')}
                  className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg transition-all text-center ${
                    inquiryType === 'emergency'
                      ? 'bg-red-600 text-white shadow-sm'
                      : 'text-red-700 hover:text-red-900'
                  }`}
                >
                  ⚡ Urgent Technical Dispatch
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('audit')}
                  className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg transition-all text-center ${
                    inquiryType === 'audit'
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Site Audit &amp; Survey
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType('general')}
                  className={`flex-1 min-w-[120px] py-2 px-3 rounded-lg transition-all text-center ${
                    inquiryType === 'general'
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  General Inquiry
                </button>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Inquiry Logged Successfully!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                    Your inquiry reference is <span className="font-mono font-bold text-[#0b3582]">{ticketId}</span>. An Operations Manager will contact you shortly.
                  </p>

                  <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-semibold">Priority SLA:</span>
                      <span className="font-bold text-red-600">
                        {inquiryType === 'emergency' ? 'Priority 1 (Under 2h Triage)' : 'Priority 2 (< 4 Hours Callout Response)'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500 font-semibold">Service Line:</span>
                      <span className="font-bold text-slate-800">{formData.serviceType}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500 font-semibold">Company / Site:</span>
                      <span className="font-bold text-slate-800">{formData.companyName || 'Not specified'} ({formData.postcode || 'Gauteng'})</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          jobTitle: '',
                          email: '',
                          phone: '',
                          postcode: '',
                          serviceType: 'Total Facilities Management (TFM)',
                          priority: 'Standard (PPM / Quote Inquiry)',
                          buildingType: 'Commercial Office',
                          message: '',
                          consent: true,
                        });
                      }}
                      className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                    >
                      Submit Another Inquiry
                    </button>

                    <a
                      href="https://wa.me/27745187012?text=Hello%20Eureka%20Facilities%20Management%20Solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white flex items-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="tel:+27745187012"
                      className="px-5 py-2.5 rounded-lg bg-[#08286b] hover:bg-blue-900 text-xs font-bold text-white flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call +27 74 518 7012</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">
                      {inquiryType === 'emergency'
                        ? '⚡ Urgent Technical Dispatch Request'
                        : inquiryType === 'audit'
                        ? 'Book a Free Site Condition & Compliance Survey'
                        : 'Request a Comprehensive Facilities & Project Quote'}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill in your property specifications below. For urgent matters, please call or WhatsApp us directly.
                    </p>
                  </div>

                  {/* Row 1: Name & Job Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Job Title / Role
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        placeholder="e.g. Facilities Manager / Property Director"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company Name & Postcode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Organization <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Apex Commercial Holdings"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Location / City / Suburb <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="postcode"
                        required
                        value={formData.postcode}
                        onChange={handleInputChange}
                        placeholder="e.g. Weavind Park, Pretoria / Sandton"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 3: Work Email & Direct Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Work Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. m.vance@apexholdings.co.za"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Direct Phone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +27 74 518 7012"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Row 4: Service Line & Building Sector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Primary Service Required
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      >
                        <option value="Total Facilities Management (TFM)">Total Facilities Management (TFM)</option>
                        <option value="HVAC & Air Conditioning Maintenance">HVAC &amp; Air Conditioning Maintenance</option>
                        <option value="Electrical & Power Systems">Electrical &amp; Power Systems (Backup Generators &amp; Solar)</option>
                        <option value="Construction & Project Management">Construction &amp; Project Management (Pr. CPM)</option>
                        <option value="Fire Safety & Compliance">Fire Safety &amp; Compliance</option>
                        <option value="Plumbing & Water Hygiene">Plumbing &amp; Water Hygiene</option>
                        <option value="24/7 Reactive Maintenance & Callouts">24/7 Reactive Maintenance &amp; Callouts</option>
                        <option value="Building Fabric & Refurbishments">Building Fabric &amp; Refurbishments</option>
                        <option value="Statutory OHS & Asset Audit">Statutory OHS &amp; Asset Condition Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Property / Sector Type
                      </label>
                      <select
                        name="buildingType"
                        value={formData.buildingType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent"
                      >
                        <option value="Commercial Office">Commercial Office</option>
                        <option value="Retail & Shopping Centre">Retail &amp; Shopping Centre</option>
                        <option value="Industrial & Logistics Warehouse">Industrial &amp; Logistics Warehouse</option>
                        <option value="Healthcare & Medical Facility">Healthcare &amp; Medical Facility</option>
                        <option value="Education & University Campus">Education &amp; University Campus</option>
                        <option value="Government & Municipal Building">Government &amp; Municipal Building</option>
                        <option value="Residential Estate / Complex">Residential Estate / Complex</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Specifications */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Details, Plant Specifications or Scope
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your facility type, square footage, number of buildings, or specific maintenance requirements..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b3582] focus:border-transparent resize-y"
                    ></textarea>
                  </div>

                  {/* Consent & Submit */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 rounded border-slate-300 text-[#0b3582] focus:ring-[#0b3582]"
                      />
                      <span>
                        I agree to Eureka Facilities Management Solutions contacting me regarding this quote, audit, or service inquiry in accordance with POPIA regulations.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d91b1b] to-red-700 hover:from-red-600 hover:to-red-800 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {inquiryType === 'emergency'
                        ? 'Dispatch Urgent Technician Now'
                        : inquiryType === 'audit'
                        ? 'Book Free Asset Condition Audit'
                        : 'Submit Quote Request'}
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & 24/7 Desk Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Card 1: Direct Operations & WhatsApp Desk */}
              <div className="bg-gradient-to-br from-[#0b1b3d] to-[#08286b] rounded-2xl p-6 text-white border border-blue-900/60 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Zap className="w-28 h-28" />
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] font-extrabold tracking-wider border border-red-500/30 uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                    <span>DIRECT CONTACT &amp; OPERATIONS</span>
                  </div>

                  <h3 className="text-lg font-black text-white">Call or WhatsApp Our Team</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Have an immediate maintenance requirement or need to discuss a new commercial SLA? Connect directly with our team.
                  </p>

                  <div className="mt-4 p-3.5 bg-white/10 rounded-xl border border-white/15 backdrop-blur-sm">
                    <div className="text-[10px] uppercase font-extrabold tracking-widest text-red-300">
                      Telephone &amp; Helpdesk Number
                    </div>
                    <a
                      href="tel:+27745187012"
                      className="text-2xl font-black text-white hover:text-red-300 transition-colors tracking-tight flex items-center gap-2 mt-0.5"
                    >
                      <Phone className="w-5 h-5 text-red-400" />
                      <span>+27 74 518 7012</span>
                    </a>
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <a
                      href="https://wa.me/27745187012?text=Hello%20Eureka%20Facilities%20Management%20Solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-bold transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <a
                      href="mailto:info@eurekasolutions.co.za"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 hover:bg-white/20 rounded-lg text-slate-200 font-semibold border border-white/10 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-amber-300" />
                      <span>info@eurekasolutions.co.za</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Office Address & Commercial Inquiries */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0b3582] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">Head Office Location</h3>
                    <p className="text-xs text-slate-500">Executive Leadership &amp; Operations Center</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500 font-medium shrink-0">Office Address:</span>
                    <span className="font-bold text-slate-800 text-right">
                      170 Pitts Avenue, Weavind Park, Pretoria, South Africa
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Telephone Number:</span>
                    <a href="tel:+27745187012" className="font-bold text-[#0b3582] hover:underline">
                      +27 74 518 7012
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">WhatsApp Support:</span>
                    <a
                      href="https://wa.me/27745187012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      +27 74 518 7012
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Email Address:</span>
                    <a href="mailto:info@eurekasolutions.co.za" className="font-bold text-[#0b3582] hover:underline">
                      info@eurekasolutions.co.za
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Operating Hours:</span>
                    <span className="font-bold text-slate-800">Mon - Fri: 08:00 - 17:00</span>
                  </div>
                </div>
              </div>

              {/* Card 3: CAFM & Client Service Portal */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-900">
                    <FileText className="w-4 h-4 text-red-600" />
                    <span>Client Maintenance Service Desk</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Log routine maintenance tasks, track work order milestones, view asset inspection reports, and access compliance certificates.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://wa.me/27745187012?text=Hello%20Eureka%20I%20would%20like%20to%20log%20a%20maintenance%20request"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Log via WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@eurekasolutions.co.za?subject=Maintenance%20Service%20Request"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Regional Hubs & Nationwide Operations Centers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-600 uppercase tracking-widest mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>South African Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Operations Centers &amp; Service Coverage
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Headquartered in Pretoria with operational delivery capacity across Gauteng and major commercial corridors nationwide.
            </p>
          </div>

          {/* Hub Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
            {regionalHubs.map((hub, idx) => (
              <button
                key={hub.id}
                type="button"
                onClick={() => setSelectedHub(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedHub === idx
                    ? 'bg-[#0b3582] text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {hub.city}
              </button>
            ))}
          </div>

          {/* Active Hub Card Display */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0b3582] text-xs font-bold">
                {regionalHubs[selectedHub].name}
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {regionalHubs[selectedHub].city}
              </h3>
              
              <div className="space-y-3 text-xs text-slate-700 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Office Address:</span>
                    <span>{regionalHubs[selectedHub].address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#0b3582] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Telephone Number:</span>
                    <a href="tel:+27745187012" className="font-bold text-[#0b3582] hover:underline">
                      {regionalHubs[selectedHub].phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">WhatsApp Number:</span>
                    <a
                      href="https://wa.me/27745187012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-600 hover:underline"
                    >
                      {regionalHubs[selectedHub].whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Email Address:</span>
                    <a href="mailto:info@eurekasolutions.co.za" className="font-bold text-slate-800 hover:underline">
                      {regionalHubs[selectedHub].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 block">Operating Hours:</span>
                    <span>{regionalHubs[selectedHub].hours}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Operational Highlights &amp; Coverage
              </h4>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Service Delivery:</span>
                  <span className="font-bold text-slate-900">{regionalHubs[selectedHub].fleet}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Professional Governance:</span>
                  <span className="font-bold text-slate-900">{regionalHubs[selectedHub].lead}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-semibold block mb-1">Key Geographic Coverage:</span>
                  <span className="text-slate-700 leading-relaxed block">
                    {regionalHubs[selectedHub].coverage}
                  </span>
                </div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="tel:+27745187012"
                  className="py-2.5 px-3 rounded-lg bg-[#0b3582] hover:bg-[#d91b1b] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/27745187012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Response SLA Matrix & Commitments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-red-400 uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Guaranteed Response Times</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Strict Service Level Agreements (SLAs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              We operate under transparent, contractually backed response and resolution metrics to protect your facility uptime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* SLA 1 */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-red-500/40 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 right-4 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Priority 1
              </div>
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Critical Emergency</div>
                <div className="text-2xl font-black text-white mt-1">&lt; 2 Hours</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Total power outage, major pipe burst / flooding, primary generator fault, or critical health &amp; safety risk.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-400" />
                <span>24/7/365 On-Call Response</span>
              </div>
            </div>

            {/* SLA 2 */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-amber-500/30 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 right-4 bg-amber-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Priority 2
              </div>
              <div>
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">High Urgent</div>
                <div className="text-2xl font-black text-white mt-1">&lt; 4 Hours</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Server room AC unit fault, security access gate failure, partial electrical circuit outage in occupied areas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Same-Day Rapid Attendance</span>
              </div>
            </div>

            {/* SLA 3 */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-blue-500/30 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                Priority 3
              </div>
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">Standard Remedial</div>
                <div className="text-2xl font-black text-white mt-1">24 - 48 Hours</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Non-critical plumbing, minor lighting fixes, door closer adjustments, and general building fabric touch-ups.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Scheduled Routine Attendance</span>
              </div>
            </div>

            {/* SLA 4 */}
            <div className="bg-slate-800/90 rounded-2xl p-6 border border-emerald-500/30 shadow-lg relative flex flex-col justify-between">
              <div className="absolute -top-3 right-4 bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                PPM Tier
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Scheduled PPM</div>
                <div className="text-2xl font-black text-white mt-1">100% On-Time</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Pre-planned statutory compliance checks, HVAC servicing, generator load testing, and OHS compliance reviews.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pre-Booked Time Slots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0b3582] uppercase tracking-widest mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Got Questions? We’re Here to Help
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Find answers to common questions regarding contract onboarding, SLAs, and emergency callouts.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#d91b1b] transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Strip */}
      <section className="bg-[#d91b1b] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Ready to Upgrade Your Facilities &amp; Property Management?
            </h2>
            <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
              Contact our solutions team today for a comprehensive asset condition assessment and customized SLA proposal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/27745187012"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: +27 74 518 7012</span>
            </a>

            <a
              href="tel:+27745187012"
              className="px-6 py-3 rounded-lg bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs tracking-wider transition-all shadow-md active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>+27 74 518 7012</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
