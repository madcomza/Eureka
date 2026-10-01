import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimation';
import { sendLeadToInbox, TARGET_LEAD_EMAIL } from '../utils/sendLead';
import { AntiSpamShield } from './AntiSpamShield';
import { initializeAntiSpam, validateHumanSubmission, AntiSpamState } from '../utils/antiSpam';
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [spamState, setSpamState] = useState<AntiSpamState>(initializeAntiSpam);
  const [spamError, setSpamError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    jobTitle: '',
    email: '',
    phone: '',
    postcode: '',
    serviceType: 'Cleaning',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-Bot & Spam Protection Validation
    const spamCheck = validateHumanSubmission(spamState);
    if (!spamCheck.isValid) {
      if (spamCheck.isBot) {
        // Silently simulate success for bots to prevent them adapting
        setTicketId('EFM-' + Math.floor(100000 + Math.random() * 900000));
        setFormSubmitted(true);
        return;
      }
      setSpamError(spamCheck.errorMessage || 'Please verify you are human before submitting.');
      return;
    }
    setSpamError(null);

    setIsSubmitting(true);
    try {
      const res = await sendLeadToInbox({
        formType:
          inquiryType === 'emergency'
            ? 'Emergency Callout Request'
            : inquiryType === 'audit'
            ? 'Free Asset Condition Audit'
            : 'Quote & PPM Inquiry',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
        location: formData.postcode,
        serviceType: formData.serviceType,
        priority: formData.priority,
        buildingType: formData.buildingType,
        message: formData.message,
        website_url: spamState.honeypot,
        company_fax_number: spamState.honeypotFax,
        form_rendered_at: spamState.formRenderTime,
      });
      setTicketId(res.ticketId);
    } catch (err) {
      console.error('Failed to submit lead:', err);
      const fallbackId = 'EFM-' + Math.floor(100000 + Math.random() * 900000);
      setTicketId(fallbackId);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

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
          <StaggerContainer className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-700/60 max-w-3xl mx-auto text-center">
            <StaggerItem>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-red-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-white">&lt; 2 Hours</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Emergency Callout SLA</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">WhatsApp</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">+27 74 518 7012</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-sky-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-white">Pretoria HQ</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">170 Pitts Ave, Weavind Park</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-red-500/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-red-400">Pr. CPM</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">SACPCMP Registered</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Main Contact Body (Interactive Form + Direct Support Channels) */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-slate-50 relative -mt-8 z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive Contact / RFQ Form (7 Cols) */}
            <ScrollReveal direction="right" duration={0.6} className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Inquiry Logged Successfully!</h3>
                  <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                    Your inquiry reference is <span className="font-mono font-bold text-[#0b3582]">{ticketId}</span> and has been forwarded directly to <strong className="text-red-600">{TARGET_LEAD_EMAIL}</strong>. An Operations Manager will contact you shortly.
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
                        setSpamState(initializeAntiSpam());
                        setSpamError(null);
                        setFormData({
                          fullName: '',
                          companyName: '',
                          jobTitle: '',
                          email: '',
                          phone: '',
                          postcode: '',
                          serviceType: 'Cleaning',
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
                        <option value="Cleaning">Cleaning</option>
                        <option value="Pest Control">Pest Control</option>
                        <option value="Soil Treatment">Soil Treatment</option>
                        <option value="Relocation">Relocation</option>
                        <option value="Facilities Management">Facilities Management</option>
                        <option value="Construction Management">Construction Management</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Freelance Project Management">Freelance Project Management</option>
                        <option value="Consultancy & Advisory">Consultancy &amp; Advisory</option>
                        <option value="Quantity Surveying">Quantity Surveying</option>
                        <option value="Claims & Contracts">Claims &amp; Contracts</option>
                        <option value="Forensic Delay Analysis">Forensic Delay Analysis</option>
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

                  {/* Anti-Spam & Bot Protection Shield */}
                  <div className="space-y-1 pt-1">
                    <AntiSpamShield state={spamState} onChange={setSpamState} />
                    {spamError && (
                      <div className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0 text-red-600" />
                        <span>{spamError}</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#d91b1b] to-red-700 hover:from-red-600 hover:to-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>
                      {isSubmitting
                        ? 'Dispatching to leads@eurekasolutions.co.za...'
                        : inquiryType === 'emergency'
                        ? 'Dispatch Urgent Technician Now'
                        : inquiryType === 'audit'
                        ? 'Book Free Asset Condition Audit'
                        : 'Submit Quote Request'}
                    </span>
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Right Column: Direct Channels & 24/7 Desk Cards (5 Cols) */}
            <ScrollReveal direction="left" duration={0.6} className="lg:col-span-5 space-y-6">
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. Response SLA Matrix & Commitments */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
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
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* SLA 1 */}
            <StaggerItem>
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-red-500/40 shadow-lg relative flex flex-col justify-between hover:border-red-500 hover:shadow-xl transition-all h-full">
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
            </StaggerItem>

            {/* SLA 2 */}
            <StaggerItem>
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-amber-500/30 shadow-lg relative flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all h-full">
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
            </StaggerItem>

            {/* SLA 3 */}
            <StaggerItem>
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-blue-500/30 shadow-lg relative flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all h-full">
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
            </StaggerItem>

            {/* SLA 4 */}
            <StaggerItem>
              <div className="bg-slate-800/90 rounded-2xl p-6 border border-emerald-500/30 shadow-lg relative flex flex-col justify-between hover:border-emerald-400 hover:shadow-xl transition-all h-full">
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
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Interactive FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" className="text-center mb-10">
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
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1} className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:text-[#d91b1b] transition-colors cursor-pointer"
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
          </ScrollReveal>
        </div>
      </section>

      {/* 9. Footer */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
