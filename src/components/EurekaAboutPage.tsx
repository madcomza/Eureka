import React from 'react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Clock,
  GraduationCap,
  Scale,
  HardHat
} from 'lucide-react';
import { SolutionSubcategory } from './EurekaSolutionsPage';

interface EurekaAboutPageProps {
  onNavigate?: (page: NavPage, subcategory?: SolutionSubcategory) => void;
  onOpenCode?: (tab: 'html' | 'css') => void;
}

export const EurekaAboutPage: React.FC<EurekaAboutPageProps> = ({ onNavigate, onOpenCode }) => {
  const qualificationsList = [
    {
      title: 'MSc Construction Management',
      institution: 'Wits University (in progress)'
    },
    {
      title: 'Postgraduate Diploma in Property Development & Management',
      institution: 'Wits University, 2022'
    },
    {
      title: 'BSc (Hons) Construction Management',
      institution: 'University of Pretoria, 2019'
    },
    {
      title: 'BSc Construction Studies',
      institution: 'Nelson Mandela Metropolitan University, 2013'
    },
    {
      title: 'Professional Construction Project Manager (Pr. CPM)',
      institution: 'SACPCMP Registration'
    },
    {
      title: 'Project Management Professional (PMP®)',
      institution: 'Project Management Institute (PMI)'
    }
  ];

  const projectValues = [
    { value: 'R676M', label: 'Commercial & Precinct Redevelopment' },
    { value: 'R500M', label: 'Integrated Facility Development' },
    { value: 'R264.4M', label: 'Public Sector Infrastructure' },
    { value: 'R205.3M', label: 'Major Commercial Refurbishment' },
    { value: 'R102.9M', label: 'Education & Institutional Facility' },
    { value: 'R97M', label: 'Specialist Library & Research Upgrade' }
  ];

  const contractTypes = ['NEC3 / NEC4', 'FIDIC Suite', 'GCC (General Conditions of Contract)', 'JBCC Principal Building Agreement'];

  return (
    <div className="w-full bg-white text-slate-900 font-sans selection:bg-red-500/20">
      {/* Top Header & Navigation */}
      <EurekaHeader currentPage="about" onNavigate={onNavigate} onOpenCode={onOpenCode} />

      {/* Page Hero Banner */}
      <section className="relative bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0d276b] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">
            ABOUT EUREKA FACILITIES MANAGEMENT SOLUTIONS
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Professional Facilities Management, Construction Delivery &amp; Specialist Built-Environment Consultancy.
          </p>
        </div>
      </section>

      {/* 1. About EFMS Core Story Section (Document Page 2) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 relative group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Architecture"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-red-600 text-white p-5 rounded-lg shadow-xl border border-red-500/40 flex flex-col items-center">
              <span className="text-3xl font-black leading-none">13+</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-center mt-1">
                Years Proven<br />Experience
              </span>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-widest text-red-600 block mb-2">
              ABOUT EUREKA FACILITIES MANAGEMENT SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight mb-5">
              Practical Professional Support Tailored to Competing Built-Environment Demands.
            </h2>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed mb-4">
              At Eureka Facilities Management Solutions, we understand that running a property, business or construction project comes with competing demands.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Buildings need to remain safe, functional and well maintained. Projects need to stay on programme and within budget. Contractors need to be coordinated. Risks need to be identified early. And business owners need to focus on running their businesses rather than constantly solving operational and project-related problems.
            </p>

            {/* Three Solution Areas Callout */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider block mb-3">
                EFMS brings these requirements together through three core solution areas:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => onNavigate?.('solutions', 'facilities')}
                  className="p-3 bg-white rounded border border-slate-200 hover:border-sky-400 text-left transition-colors cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-sky-600 block uppercase">Pillar 01</span>
                  <span className="text-xs font-black text-slate-900">Facilities &amp; Property</span>
                </button>
                <button
                  onClick={() => onNavigate?.('solutions', 'construction')}
                  className="p-3 bg-white rounded border border-slate-200 hover:border-red-400 text-left transition-colors cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-red-600 block uppercase">Pillar 02</span>
                  <span className="text-xs font-black text-slate-900">Construction Delivery</span>
                </button>
                <button
                  onClick={() => onNavigate?.('solutions', 'consultancy')}
                  className="p-3 bg-white rounded border border-slate-200 hover:border-slate-800 text-left transition-colors cursor-pointer"
                >
                  <span className="text-[11px] font-bold text-slate-700 block uppercase">Pillar 03</span>
                  <span className="text-xs font-black text-slate-900">Consultancy Solutions</span>
                </button>
              </div>
            </div>

            {/* Objective */}
            <div className="p-4 bg-sky-50/80 border-l-4 border-sky-600 rounded-r-lg">
              <span className="text-xs font-black text-sky-900 uppercase block mb-1">Our Core Objective:</span>
              <p className="text-xs font-bold text-slate-800 leading-relaxed">
                Provide dependable professional support that helps clients protect their assets, control costs, reduce disruption and achieve better project outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Meet the Owner & Director Section (Document Page 3) */}
      <section className="bg-[#081129] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              ABOUT THE OWNER &amp; DIRECTOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Meet Monwabisi Makinana
            </h2>
            <p className="text-sm font-bold text-red-400 mt-1">
              Monwabisi Makinana, Pr. CPM, PMP®
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Director Photo & Credentials Badge */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl p-5 text-center">
                <div className="relative w-full max-w-[280px] mx-auto aspect-[3/4] rounded-lg overflow-hidden border-2 border-red-600/80 shadow-2xl mb-5 group bg-slate-950">
                  <img
                    src="/monwabisi-makinana.jpg"
                    alt="Monwabisi Makinana - Founder & Director"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/60 backdrop-blur-sm border border-white/10 py-1.5 px-2.5 rounded text-left">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-red-400 block">Leadership</span>
                    <span className="text-xs font-black text-white block">Founder &amp; Managing Director</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">MONWABISI MAKINANA</h3>
                <p className="text-xs font-bold text-red-400 mt-0.5 tracking-wide">Pr. CPM, PMP®</p>
                <p className="text-xs text-slate-400 font-medium mt-1">Founder &amp; Managing Director</p>

                <div className="mt-6 pt-5 border-t border-white/10 text-left space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Registered <strong>Pr. CPM</strong> (SACPCMP)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Certified <strong>PMP®</strong> (Project Management Institute)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                    <span><strong>13+ Years</strong> Industry Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Director Bio & Qualifications */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <p className="text-sm sm:text-base font-normal text-slate-200 leading-relaxed">
                  Eureka Facilities Management Solutions is led by <strong>Monwabisi Makinana</strong>, a professionally registered Construction Project Manager and certified Project Management Professional with more than 13 years of professional experience.
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Monwabisi is registered as a Professional Construction Project Manager (Pr. CPM) with the South African Council for the Project and Construction Management Professions (SACPCMP) and holds the Project Management Professional (PMP®) certification from the Project Management Institute (PMI).
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  His professional experience spans infrastructure, industrial, commercial and public-sector projects, with involvement across the project lifecycle — from feasibility and planning through design, procurement, construction, commissioning and close-out.
                </p>
              </div>

              {/* Qualifications Grid */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-red-500" />
                  <span>Academic &amp; Professional Qualifications</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {qualificationsList.map((q, idx) => (
                    <div key={idx} className="p-3 rounded bg-white/5 border border-white/5 flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-red-600/30 text-red-400 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                        ✓
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">{q.title}</span>
                        <span className="text-[11px] text-slate-400 block">{q.institution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience That Gives Clients Confidence */}
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">
                  Experience That Gives Clients Confidence
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Monwabisi's professional background includes project management roles with <strong>Triviron Project Managers</strong>, <strong>GladAfrica Project Managers</strong> and <strong>COENG Consulting and Construction Engineers</strong>. His responsibilities have included project planning, programme and cost management, procurement, tender administration, contract management, stakeholder coordination, quality management, risk management, financial reporting and project close-out.
                </p>

                {/* Project Values Showcase */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {projectValues.map((pv, idx) => (
                    <div key={idx} className="bg-slate-900/80 border border-white/10 p-3 rounded text-center">
                      <span className="text-base font-black text-red-400 block">{pv.value}</span>
                      <span className="text-[10px] text-slate-400 font-medium block mt-0.5">{pv.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Professional Approach Built on Accountability (Document Page 4) */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black tracking-widest text-[#d91b1b] uppercase block mb-2">
              FOUNDATIONAL GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              A Professional Approach Built on Accountability
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Clients need more than someone who simply coordinates tasks. They need someone who understands scope, programme, cost, quality, risk, contracts, stakeholders and compliance. That is the strength Monwabisi brings to EFMS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1: Contract Expertise */}
            <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Scale className="w-6 h-6 text-[#d91b1b] mb-4" />
                <h3 className="text-base font-extrabold text-slate-900 mb-2">Standard Contracts</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  In-depth practical experience across all major South African &amp; international forms of contract:
                </p>
                <ul className="space-y-1 text-xs font-semibold text-slate-700">
                  {contractTypes.map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-red-600 font-bold">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 2: Commercial & Risk */}
            <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-6 h-6 text-[#08286b] mb-4" />
                <h3 className="text-base font-extrabold text-slate-900 mb-2">Commercial &amp; Risk</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous commercial management, risk identification, procurement, and tender administration to protect your bottom line from unexpected cost overruns.
                </p>
              </div>
            </div>

            {/* Box 3: Quality & HSE */}
            <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <CheckCircle2 className="w-6 h-6 text-sky-600 mb-4" />
                <h3 className="text-base font-extrabold text-slate-900 mb-2">Quality &amp; HSE Compliance</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive Quality Assurance (QA/QC) and Health, Safety, and Environment (HSE) management that meets statutory South African standards.
                </p>
              </div>
            </div>

            {/* Box 4: Practical Execution */}
            <div className="p-6 rounded-lg bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <HardHat className="w-6 h-6 text-[#d91b1b] mb-4" />
                <h3 className="text-base font-extrabold text-slate-900 mb-2">Hands-On Thinking</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  With EFMS, clients get professional expertise combined with practical, hands-on project thinking. Real project experience that translates into tangible results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Short Summary Tagline Banner (Document Page 15) */}
      <section className="bg-gradient-to-r from-[#050b1b] via-[#09132e] to-[#0c2460] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-base sm:text-xl font-extrabold text-slate-200 uppercase tracking-wide">
            Professional knowledge. Real project experience. Practical solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate?.('contact')}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-black rounded tracking-wider shadow-md transition-colors cursor-pointer"
            >
              SPEAK TO MONWABISI &amp; THE TEAM
            </button>
          </div>
        </div>
      </section>

      {/* 5. Standard Footer */}
      <EurekaFooter onNavigate={onNavigate} onOpenCode={onOpenCode} />
    </div>
  );
};
