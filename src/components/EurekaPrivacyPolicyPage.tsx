import React, { useState } from 'react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Shield,
  Lock,
  FileText,
  UserCheck,
  CheckCircle2,
  Mail,
  Building2,
  Phone,
  Calendar,
  AlertCircle,
  Eye,
  ExternalLink,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export interface EurekaPrivacyPolicyPageProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

export const EurekaPrivacyPolicyPage: React.FC<EurekaPrivacyPolicyPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('responsible-party');

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'responsible-party', title: '1. Responsible Party & Company Identification' },
    { id: 'information-officer', title: '2. Information Officer Details' },
    { id: 'data-collected', title: '3. Categories of Personal Information Collected' },
    { id: 'lawful-purpose', title: '4. Lawful Purpose & Processing Grounds (POPIA)' },
    { id: 'storage-security', title: '5. Security Safeguards & Data Storage' },
    { id: 'operators-third-parties', title: '6. Third-Party Operators & Disclosures' },
    { id: 'cookies-analytics', title: '7. Cookies, Web Analytics & Google Tags' },
    { id: 'data-subject-rights', title: '8. Data Subject Rights & Access (PAIA)' },
    { id: 'retention-transfers', title: '9. Data Retention & Cross-Border Transfers' },
    { id: 'complaints-regulator', title: '10. Complaints to the Information Regulator' }
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
      <EurekaHeader currentPage="privacy-policy" onNavigate={onNavigate} />

      {/* 2. Hero Section */}
      <section className="relative bg-[#050b1b] text-white py-14 lg:py-20 border-b-4 border-red-600 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50 pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>LEGAL &amp; COMPLIANCE &bull; POPIA (ACT 4 OF 2013)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Privacy Policy &amp; Data Protection
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              How Eureka Facilities Management Solutions (Pty) Ltd processes, protects, and governs corporate and personal data in strict compliance with the Protection of Personal Information Act (POPIA) and the Promotion of Access to Information Act (PAIA).
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                <span>Effective Date: 1 January 2026</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-sky-400" />
                <span>Jurisdiction: Republic of South Africa</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Version: 2.1 (Full POPIA Compliance)</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content with Sidebar Navigation */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Table of Contents */}
          <aside className="lg:col-span-4 sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
              <FileText className="w-4 h-4 text-red-600" />
              <h2 className="text-xs font-black tracking-wider uppercase text-slate-900">
                Policy Navigation
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
                <Mail className="w-3.5 h-3.5 text-red-600" />
                <span>Privacy Officer Inquiries</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Direct questions regarding data correction, objections, or Subject Access Requests:
              </p>
              <a
                href="mailto:info@eurekasolutions.co.za?subject=POPIA%20Subject%20Access%20Request"
                className="text-xs font-bold text-red-600 hover:text-red-700 underline block"
              >
                info@eurekasolutions.co.za
              </a>
            </div>
          </aside>

          {/* Right Policy Body */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-10 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {/* Introduction */}
            <div className="space-y-3 pb-8 border-b border-slate-100">
              <p className="font-medium text-slate-800 text-sm sm:text-base leading-relaxed">
                Eureka Facilities Management Solutions (Pty) Ltd (&quot;EFMS&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is firmly committed to protecting the privacy, confidentiality, and data sovereignty of our commercial clients, government entities, supply chain partners, and website visitors.
              </p>
              <p>
                This Privacy Policy outlines how we collect, process, store, disclose, and dispose of Personal Information in accordance with the Protection of Personal Information Act No. 4 of 2013 (&quot;POPIA&quot;), the Promotion of Access to Information Act No. 2 of 2000 (&quot;PAIA&quot;), and relevant professional built-environment statutory codes.
              </p>
            </div>

            {/* Section 1 */}
            <section id="responsible-party" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Building2 className="w-4 h-4 text-red-600" />
                <span>1. Responsible Party &amp; Company Identification</span>
              </h2>
              <p>
                The designated &quot;Responsible Party&quot; under Section 1 of POPIA responsible for your personal information is:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div><strong>Full Registered Name:</strong> Eureka Facilities Management Solutions (Pty) Ltd</div>
                <div><strong>Trading As:</strong> EFMS / Eureka Solutions</div>
                <div><strong>CIPC Registration Number:</strong> 2024/701047/07</div>
                <div><strong>Physical Registered Office:</strong> 170 Pitts Avenue, Weavind Park, Pretoria, 0184, Gauteng, Republic of South Africa</div>
                <div><strong>Primary Email:</strong> info@eurekasolutions.co.za</div>
                <div><strong>Direct Telephone:</strong> +27 74 518 7012</div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="information-officer" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <UserCheck className="w-4 h-4 text-red-600" />
                <span>2. Information Officer Details</span>
              </h2>
              <p>
                In terms of Section 55(1) of POPIA, the designated Information Officer registered with the Information Regulator of South Africa is:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div><strong>Information Officer:</strong> Monwabisi Makinana</div>
                <div><strong>Designation:</strong> Managing Director &amp; Principal Consultant (Pr. CPM &bull; PMP®)</div>
                <div><strong>Email:</strong> info@eurekasolutions.co.za</div>
                <div><strong>Postal / Physical Address:</strong> 170 Pitts Avenue, Weavind Park, Pretoria, 0184</div>
              </div>
              <p className="text-[11px] text-slate-500">
                Any formal notices, objections, or requests for access to personal records held by EFMS should be directed in writing to the Information Officer.
              </p>
            </section>

            {/* Section 3 */}
            <section id="data-collected" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <FileText className="w-4 h-4 text-red-600" />
                <span>3. Categories of Personal Information Collected</span>
              </h2>
              <p>
                Depending on the nature of our engagement, we may collect and process the following categories of information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>
                  <strong>Contact &amp; Corporate Identity Data:</strong> Full name, job title, department, organization name, registered business address, telephone numbers, and corporate email addresses.
                </li>
                <li>
                  <strong>Project &amp; Facility Specifications:</strong> Site addresses, facility square meterage, architectural blueprints, plant and equipment schedules, preventative maintenance logs, and operational safety documentation.
                </li>
                <li>
                  <strong>Tender &amp; Contractual Data:</strong> Bills of Quantities (BOQ), construction claims documentation, contractual correspondence (JBCC, NEC, FIDIC, GCC), dispute records, delay schedule models, and certified payment certificates.
                </li>
                <li>
                  <strong>Financial &amp; Billing Data:</strong> Company VAT numbers, banking verification details for invoicing, proof of payment records, and credit references.
                </li>
                <li>
                  <strong>Digital &amp; Technical Usage Data:</strong> IP addresses, browser types, interaction logs, timestamp data, and analytical telemetry captured when accessing our web portals.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="lawful-purpose" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Lock className="w-4 h-4 text-red-600" />
                <span>4. Lawful Purpose &amp; Processing Grounds (POPIA)</span>
              </h2>
              <p>
                We process your Personal Information strictly under lawful processing conditions pursuant to Section 11 of POPIA:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900">Contractual Performance</div>
                  <p className="text-slate-600">Fulfilling Service Level Agreements (SLAs), facilities management contracts, construction project oversight, and quantity surveying engagements.</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900">Statutory Compliance</div>
                  <p className="text-slate-600">Adhering to the Occupational Health and Safety (OHS) Act, SANS building regulations, CIPC statutory filings, and tax reporting mandates.</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900">Legitimate Interests</div>
                  <p className="text-slate-600">Ensuring building security, mitigating fraud, defending contractual construction claims, and conducting forensic delay audits.</p>
                </div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                  <div className="font-bold text-slate-900">Explicit Consent</div>
                  <p className="text-slate-600">Responding to requests for quotations (RFQ), online consultations, technical inquiries, and newsletter distributions.</p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="storage-security" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Shield className="w-4 h-4 text-red-600" />
                <span>5. Security Safeguards &amp; Data Storage</span>
              </h2>
              <p>
                In compliance with Section 19 of POPIA, EFMS maintains appropriate technical and organizational measures to prevent loss of, damage to, or unauthorized destruction of personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Transport Layer Encryption:</strong> All website traffic and API submissions are encrypted in transit using SSL/TLS 256-bit cryptographic protocols.</li>
                <li><strong>Access Control:</strong> Strict role-based access limits sensitive project drawings and client data solely to vetted engineers, quantity surveyors, and project directors.</li>
                <li><strong>Physical Security:</strong> Head office documentation and on-site engineering records are secured in fireproof, monitored repositories.</li>
                <li><strong>Anti-Spam &amp; Bot Defense:</strong> Multi-layer honeypots, rate-limiting, and verification tokens protect inquiry channels against malicious harvesting.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="operators-third-parties" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <ExternalLink className="w-4 h-4 text-red-600" />
                <span>6. Third-Party Operators &amp; Disclosures</span>
              </h2>
              <p>
                EFMS will never sell, lease, or commercially trade personal information to third parties. We may disclose data only to authorized &quot;Operators&quot; (under written Section 21 POPIA agreements):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Specialist engineering subcontractors, laboratory testing agencies (e.g. soil toxicology, water hygiene), and hazardous waste disposal contractors.</li>
                <li>Accredited legal advisors, adjudicators, or arbitrators handling contractual claim resolution proceedings.</li>
                <li>Enterprise cloud infrastructure, secure web hosting servers, and email transmission providers.</li>
                <li>Statutory and regulatory bodies (SACPCMP, SARS, Department of Employment and Labour) where mandated by law.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="cookies-analytics" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Eye className="w-4 h-4 text-red-600" />
                <span>7. Cookies, Web Analytics &amp; Google Tags</span>
              </h2>
              <p>
                Our website utilizes modern telemetry to improve loading performance, monitor availability, and understand user interactions:
              </p>
              <p>
                We implement Google Analytics via Google tag (<strong>G-19WFKYZ43B</strong>). These analytics cookies collect aggregated, anonymized metrics such as browser viewport dimensions, page traversal paths, and referral origins without identifying individual persons. You can configure your browser to decline non-essential cookies at any time.
              </p>
            </section>

            {/* Section 8 */}
            <section id="data-subject-rights" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <UserCheck className="w-4 h-4 text-red-600" />
                <span>8. Data Subject Rights &amp; Access (PAIA)</span>
              </h2>
              <p>
                Under Chapter 3 of POPIA and the PAIA manual of EFMS, you have the right to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Right of Access:</strong> Request confirmation of whether we hold personal information regarding you and obtain a copy of such record.</li>
                <li><strong>Right to Rectification:</strong> Request correction or deletion of personal information that is inaccurate, irrelevant, outdated, or incomplete.</li>
                <li><strong>Right to Object:</strong> Object on reasonable grounds to the processing of personal information where processing is based on legitimate interest.</li>
                <li><strong>Right to Complain:</strong> Submit a complaint to the Information Regulator if you believe your statutory rights have been infringed.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="retention-transfers" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>9. Data Retention &amp; Cross-Border Transfers</span>
              </h2>
              <p>
                Personal and project records are retained only for as long as necessary to fulfill contractual purposes or to satisfy legal prescription periods under the Companies Act (7 years) and the Prescription Act (3 to 30 years for construction contract deeds).
              </p>
              <p>
                Where data is stored on cloud servers outside South Africa, we ensure the recipient country provides substantially similar data protection laws (such as GDPR in Europe) in compliance with Section 72 of POPIA.
              </p>
            </section>

            {/* Section 10 */}
            <section id="complaints-regulator" className="space-y-3 scroll-mt-28">
              <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-2 border-b border-slate-100 pb-2">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <span>10. Complaints to the Information Regulator</span>
              </h2>
              <p>
                If you are unsatisfied with how EFMS has addressed a privacy query, you have the statutory right to lodge a complaint with the South African Information Regulator:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                <div><strong>The Information Regulator (South Africa)</strong></div>
                <div><strong>Physical Address:</strong> JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</div>
                <div><strong>Postal Address:</strong> P.O Box 31533, Braamfontein, Johannesburg, 2017</div>
                <div><strong>Complaints Email:</strong> POPIAComplaints@inforegulator.org.za</div>
                <div><strong>General Inquiries:</strong> enquiries@inforegulator.org.za</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* 4. Bottom CTA Strip */}
      <section className="bg-[#09132e] text-white py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Have questions regarding our compliance or need a contract review?
            </h3>
            <p className="text-xs text-slate-300">
              Speak with our principal consultant regarding service level agreements and confidentiality terms.
            </p>
          </div>
          <button
            onClick={() => handleNav('contact')}
            className="px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. Footer */}
      <EurekaFooter currentPage="privacy-policy" onNavigate={onNavigate} />
    </div>
  );
};
