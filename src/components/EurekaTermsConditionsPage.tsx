import React, { useState } from 'react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Scale,
  FileCheck2,
  Building2,
  HardHat,
  ShieldAlert,
  Clock,
  Coins,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  FileText,
  ChevronRight,
  ArrowRight,
  Gavel
} from 'lucide-react';

export interface EurekaTermsConditionsPageProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

export const EurekaTermsConditionsPage: React.FC<EurekaTermsConditionsPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'acceptance', title: '1. Acceptance & Corporate Identity' },
    { id: 'services-scope', title: '2. Professional Scope & Indicative Estimates' },
    { id: 'client-responsibilities', title: '3. Client Obligations & Site Access' },
    { id: 'professional-standards', title: '4. Statutory & Professional Governance' },
    { id: 'fees-payment', title: '5. Fees, Invoicing & Payment Terms' },
    { id: 'delays-variations', title: '6. Variations, Scope Creep & Delays' },
    { id: 'intellectual-property', title: '7. Intellectual Property & Deliverables' },
    { id: 'liability-insurance', title: '8. Professional Liability & Indemnity' },
    { id: 'termination-suspension', title: '9. Suspension & Termination' },
    { id: 'dispute-resolution', title: '10. Dispute Resolution & Governing Law' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
      {/* 1. Header */}
      <EurekaHeader currentPage="terms-conditions" onNavigate={onNavigate} />

      {/* 2. Hero Section */}
      <section className="relative bg-[#050b1b] text-white py-14 lg:py-20 border-b-4 border-red-600 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50 pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5" />
              <span>CONTRACTUAL GOVERNANCE &bull; CLIENT/CONSULTANT AGREEMENTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Terms &amp; Conditions of Service
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Contractual terms, service standards, and operational guidelines governing professional appointments across Facilities Management, Construction Project Management, Quantity Surveying, and Advisory.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                <span>Effective Date: 1 January 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Standard Formats: PROCSA &bull; JBCC &bull; NEC4 &bull; FIDIC</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Gavel className="w-3.5 h-3.5 text-emerald-400" />
                <span>Jurisdiction: Courts of South Africa (Gauteng)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table of Contents */}
          <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <FileCheck2 className="w-4 h-4 text-red-600" />
              <h2 className="text-xs font-black tracking-wider uppercase text-slate-900">
                Terms Navigation
              </h2>
            </div>

            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                    activeSection === section.id
                      ? 'bg-red-50 text-red-700 font-bold border-l-3 border-red-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{section.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60" />
                </button>
              ))}
            </nav>

            {/* Quick Contact Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-red-600" />
                <span>Contract Advisory Inquiries</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                For custom PROCSA client agreements or specialized service level agreements:
              </p>
              <a
                href="mailto:info@eurekasolutions.co.za?subject=Commercial%20Terms%20Inquiry"
                className="text-xs font-bold text-red-600 hover:text-red-700 underline block"
              >
                info@eurekasolutions.co.za
              </a>
            </div>
          </aside>

          {/* Right Terms Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {/* Preamble */}
            <div className="space-y-3 pb-8 border-b border-slate-100">
              <p className="font-medium text-slate-800 text-sm sm:text-base leading-relaxed">
                These General Terms and Conditions of Service (&quot;Terms&quot;) govern the provision of professional services, facilities management, technical contracting, and consultancy by Eureka Facilities Management Solutions (Pty) Ltd.
              </p>
              <p>
                By requesting a quotation, executing a Service Level Agreement (SLA), appointing EFMS under a Client/Consultant Agreement (e.g. PROCSA), or utilizing our website, the Client acknowledges and agrees to be bound by these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <section id="acceptance" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Building2 className="w-4 h-4 text-red-600" />
                <span>1. Acceptance &amp; Corporate Identity</span>
              </h2>
              <p>
                All appointments are made with:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div><strong>Company:</strong> Eureka Facilities Management Solutions (Pty) Ltd</div>
                <div><strong>Registration No:</strong> 2022/525367/07</div>
                <div><strong>Registered Office:</strong> 170 Pitts Avenue, Weavind Park, Pretoria, 0184, South Africa</div>
                <div><strong>Managing Director:</strong> Monwabisi Makinana (Pr. CPM &bull; PMP®)</div>
              </div>
              <p>
                Where a specific written Service Level Agreement or PROCSA Client/Consultant Agreement has been executed between EFMS and the Client, the terms of that signed agreement shall take precedence over these General Terms to the extent of any express conflict.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileCheck2 className="w-4 h-4 text-red-600" />
                <span>2. Professional Scope &amp; Indicative Estimates</span>
              </h2>
              <p>
                EFMS provides technical and advisory services across three principal service pillars:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Facilities &amp; Property Solutions:</strong> Commercial cleaning, pest eradication, pre-construction soil treatment, office relocations, and total facilities management (TFM).</li>
                <li><strong>Construction Delivery Solutions:</strong> Principal Agency, turn-key project management under PROCSA stages 1–6, and freelance project management.</li>
                <li><strong>Construction Consultancy:</strong> Contract administration (JBCC, NEC, FIDIC, GCC), Quantity Surveying (ASAQS), dispute assessment, and Forensic Delay Analysis (SCL Protocol).</li>
              </ul>
              <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200 text-amber-900 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  <span>Online Estimator &amp; Pricing Calculator Disclaimer</span>
                </div>
                <p>
                  Any figures generated through the online pricing estimator are indicative and provisional. Final pricing is subject to physical site inspection, environmental parameters, contamination degrees, and formal written quotations approved by EFMS.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="client-responsibilities" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <HardHat className="w-4 h-4 text-red-600" />
                <span>3. Client Obligations &amp; Site Access</span>
              </h2>
              <p>
                To enable EFMS to execute appointed services without delay, the Client agrees to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Provide uninterrupted, safe access to the site, plant rooms, electrical risers, and facilities at agreed operational hours.</li>
                <li>Disclose all known latent hazards, structural defects, hazardous substances (e.g., asbestos), or biological risks prior to commencement.</li>
                <li>Supply accurate architectural drawings, as-built records, and maintenance history required for project scheduling or quantity surveying.</li>
                <li>Ensure compliance with Section 8 of the Occupational Health and Safety Act No. 85 of 1993 regarding client premises safety.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="professional-standards" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Scale className="w-4 h-4 text-red-600" />
                <span>4. Statutory &amp; Professional Governance</span>
              </h2>
              <p>
                EFMS executes all duties with the reasonable skill, care, and diligence expected of a registered built-environment professional:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>SACPCMP:</strong> Adherence to the Code of Conduct of the South African Council for the Project and Construction Management Professions.</li>
                <li><strong>PMI:</strong> Alignment with the Project Management Institute standards (PMP®).</li>
                <li><strong>SCL Protocol:</strong> Forensic delay analysis and extension-of-time assessments executed strictly in accordance with the Society of Construction Law Delay and Disruption Protocol (2nd Edition).</li>
                <li><strong>Pest &amp; Chemical Compliance:</strong> Pest control and soil poisoning treatments carried out utilizing Act 36 of 1947 registered formulations and SANS environmental standards.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="fees-payment" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Coins className="w-4 h-4 text-red-600" />
                <span>5. Fees, Invoicing &amp; Payment Terms</span>
              </h2>
              <p>
                Unless otherwise stipulated in a signed contract:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Invoicing:</strong> Facilities maintenance is invoiced monthly in advance or arrears as agreed. Consultancy and construction PM services are invoiced upon completion of PROCSA work stages or approved milestone certificates.</li>
                <li><strong>Payment Period:</strong> Tax invoices are strictly payable within 30 (thirty) calendar days from invoice presentation.</li>
                <li><strong>Value-Added Tax (VAT):</strong> All quoted rates exclude VAT unless expressly indicated otherwise.</li>
                <li><strong>Late Payment Interest:</strong> Overdue amounts accrue interest at the prime lending rate of Standard Bank South Africa plus 2% per annum, calculated daily and compounded monthly.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="delays-variations" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span>6. Variations, Scope Creep &amp; Delays</span>
              </h2>
              <p>
                Any changes to the agreed service scope, additional site inspections, or revisions to quantity surveying models caused by client-directed design changes will be treated as Variations. EFMS shall be entitled to an adjustment in fees on an agreed hourly rate or percentage basis prior to undertaking varied work.
              </p>
            </section>

            {/* Section 7 */}
            <section id="intellectual-property" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText className="w-4 h-4 text-red-600" />
                <span>7. Intellectual Property &amp; Deliverables</span>
              </h2>
              <p>
                All proprietary methodologies, delay analysis templates, quantum models, audit frameworks, and software tools utilized by EFMS remain the sole intellectual property of Eureka Facilities Management Solutions (Pty) Ltd.
              </p>
              <p>
                Upon payment in full of all due professional fees, the Client receives a non-exclusive license to use the final project deliverables (reports, schedules, valuations) solely for the specific facility or dispute for which they were prepared.
              </p>
            </section>

            {/* Section 8 */}
            <section id="liability-insurance" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>8. Professional Liability &amp; Indemnity</span>
              </h2>
              <p>
                EFMS maintains appropriate Professional Indemnity (PI) and Public Liability insurance. To the maximum extent permitted by South African law:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>EFMS&apos;s aggregate liability for any claims arising from negligence, breach of contract, or statutory duty shall be capped at the total professional fees paid by the Client for the specific appointment, or the amount recoverable under EFMS&apos;s PI policy.</li>
                <li>Neither party shall be liable for indirect, consequential, or economic loss (including loss of rental income, loss of profit, or business interruption).</li>
                <li>Any claim against EFMS must be instituted within 12 (twelve) months from practical completion or termination of services.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="termination-suspension" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>9. Suspension &amp; Termination</span>
              </h2>
              <p>
                Either party may terminate the agreement upon 30 (thirty) days written notice if the other party commits a material breach and fails to remedy such breach within 14 days of written demand.
              </p>
              <p>
                EFMS reserves the right to suspend on-site facilities teams or withholding certification of contractor claims if client invoices remain outstanding beyond 30 days.
              </p>
            </section>

            {/* Section 10 */}
            <section id="dispute-resolution" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Gavel className="w-4 h-4 text-red-600" />
                <span>10. Dispute Resolution &amp; Governing Law</span>
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Republic of South Africa.
              </p>
              <p>
                In the event of any contractual dispute, the parties shall first endeavor to settle the dispute amicably through good-faith senior executive negotiations within 14 days. If unresolved:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>The dispute shall be referred to mediation under the rules of the Arbitration Foundation of Southern Africa (AFSA).</li>
                <li>Should mediation fail, the dispute shall be determined by expedited arbitration administered by AFSA in Pretoria or Johannesburg.</li>
                <li>The parties consent to the non-exclusive jurisdiction of the High Court of South Africa (Gauteng Division, Pretoria).</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* 4. Bottom CTA Strip */}
      <section className="bg-[#09132e] text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Ready to appoint Eureka Facilities Management Solutions?
            </h3>
            <p className="text-xs text-slate-300">
              Submit your project tender, request an on-site SLA audit, or schedule a formal engagement meeting.
            </p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>REQUEST A PROPOSAL</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <EurekaFooter currentPage="terms-conditions" onNavigate={onNavigate} />
    </div>
  );
};
