import React from 'react';
import { EurekaLogo } from './EurekaLogo';
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  HardHat,
  Briefcase,
  Award,
  ShieldCheck,
  Clock,
  ArrowRight,
  Code2,
  Scale,
  FileCheck2
} from 'lucide-react';
import { NavPage } from './EurekaHeader';

export interface EurekaFooterProps {
  currentPage?: NavPage | string;
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

export const EurekaFooter: React.FC<EurekaFooterProps> = ({
  currentPage = 'home',
  onNavigate
}) => {
  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="eureka-standard-footer" className="bg-[#07132c] text-white font-sans antialiased border-t-4 border-red-600">
      {/* 1. Global Call to Action Pre-Footer Banner */}
      <div className="bg-gradient-to-r from-[#0b1b3d] via-[#112759] to-[#0b1b3d] border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-red-400 mb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>DIRECTOR-LED BUILT ENVIRONMENT EXPERTISE</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
              Ready to Enhance Your Facilities or Protect Your Project?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Speak directly with our registered Pr. CPM and built environment specialists for an immediate assessment, schedule audit, or tailored proposal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+27745187012"
              className="px-5 py-3 rounded-lg text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>+27 74 518 7012</span>
            </a>
            <button
              onClick={() => handleNav('contact')}
              className="px-6 py-3 rounded-lg text-xs font-black tracking-wider uppercase bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg transition-all transform active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Multi-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer inline-block"
              aria-label="Eureka Facilities Management Solutions Home"
            >
              <EurekaLogo variant="white" className="h-11 sm:h-12 w-auto" />
            </button>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Eureka Facilities Management Solutions (Pty) Ltd (EFMS) is a multi-disciplinary built environment firm delivering integrated facilities management, professional construction project management, and specialist commercial/claims consultancy across South Africa and the SADC region.
            </p>

            {/* Director & Registration Credentials Card */}
            <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                <span>Executive Leadership: Monwabisi Makinana</span>
              </div>
              <p className="text-[11px] text-slate-400">
                BSc (Hons) QS &bull; PGDip PM &bull; Pr. CPM (SACPCMP) &bull; PMP® (PMI)
              </p>
              <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 flex flex-wrap gap-x-3 gap-y-1 font-mono">
                <span>CIPC: 2024/701047/07</span>
                <span>SACPCMP: D/3313/2023</span>
                <span>PMI: 3968600</span>
              </div>
            </div>
          </div>

          {/* Column 2: Pillar 1 – Facilities & Property Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-sky-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>1. Facilities Services</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('facilities-management')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Facilities Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commercial-cleaning')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Commercial Cleaning &amp; Hygiene
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pest-control')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pest Control &amp; Fumigation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pre-soil-treatment')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Pre-Soil Treatment &amp; Poisoning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('office-relocation')}
                  className="hover:text-sky-400 transition-colors text-left"
                >
                  Office &amp; Business Relocation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions', 'facilities')}
                  className="text-sky-400 hover:text-sky-300 font-bold transition-colors text-left pt-1 block"
                >
                  &rarr; All Facilities Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Pillar 2 & 3 – Construction & Consultancy */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-red-400 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <HardHat className="w-3.5 h-3.5" />
              <span>2. Construction &amp; PM</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('construction-management')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Construction Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('project-management')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Project Management (PROCSA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('freelance-pm')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Freelance Project Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('construction-consultancy')}
                  className="hover:text-red-400 transition-colors text-left pt-1 block border-t border-slate-800/60"
                >
                  Consultancy &amp; Advisory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quantity-surveying')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Quantity Surveying (QS)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('construction-claims')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Claims &amp; Contract Disputes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('delay-analysis')}
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Forensic Delay Analysis (SCL)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contacts & Operations */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Head Office &amp; Contact</span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  170 Pitts Avenue, Weavind Park, Pretoria, 0184, South Africa
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <a href="tel:+27745187012" className="hover:text-white transition-colors">
                  +27 74 518 7012
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:info@eurekasolutions.co.za" className="hover:text-white transition-colors">
                  info@eurekasolutions.co.za
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>Mon – Fri: 07:30 – 17:30 | 24/7 Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Industry Compliance Badges Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-[10px] text-slate-400">
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">SACPCMP</div>
            <div>Pr. CPM Registered</div>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">PMI PMP®</div>
            <div>Project Mgmt Institute</div>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">SCL Protocol</div>
            <div>2nd Edition Delay Audits</div>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">ASAQS / SACQSP</div>
            <div>Cost &amp; QS Standards</div>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">JBCC / FIDIC / NEC</div>
            <div>Contract Specialists</div>
          </div>
          <div className="p-2 rounded bg-slate-900/50 border border-slate-800/80">
            <div className="font-bold text-white">OHS Act &amp; SANS</div>
            <div>Safety &amp; Compliance</div>
          </div>
        </div>

        {/* 4. Bottom Copyright & Quick Legal */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            &copy; 2026 Eureka Facilities Management Solutions (Pty) Ltd. All rights reserved. Design by{' '}
            <a
              href="https://madcom.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-emerald-400 font-medium underline underline-offset-2 transition-colors"
            >
              MadCom
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => handleNav('solutions', 'all')} className="hover:text-white transition-colors">
              Solutions
            </button>
            <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors">
              Pricing
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
