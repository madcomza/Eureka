import React, { useState, useEffect } from 'react';
import { Copy, Check, Code, FileCode, X, Layers, Globe, Download, Sparkles } from 'lucide-react';
import { getPageSnippets } from '../data/snippets';

export type ModalPageType =
  | 'home'
  | 'about'
  | 'solutions'
  | 'facilities-management'
  | 'commercial-cleaning'
  | 'pest-control'
  | 'pre-soil-treatment'
  | 'office-relocation'
  | 'construction-management'
  | 'project-management'
  | 'freelance-pm'
  | 'construction-consultancy'
  | 'quantity-surveying'
  | 'construction-claims'
  | 'delay-analysis'
  | 'pricing'
  | 'contact';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'html' | 'css' | 'combined';
  activePage?: ModalPageType;
}

export const CodeModal: React.FC<CodeModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'html',
  activePage: initialActivePage = 'delay-analysis',
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'combined'>(initialTab);
  const [selectedPage, setSelectedPage] = useState<ModalPageType>(initialActivePage);
  const [copied, setCopied] = useState(false);

  // Sync state when props change
  useEffect(() => {
    if (isOpen) {
      if (initialActivePage) setSelectedPage(initialActivePage);
      if (initialTab) setActiveTab(initialTab);
    }
  }, [isOpen, initialActivePage, initialTab]);

  if (!isOpen) return null;

  const pageNames: Record<ModalPageType, string> = {
    'home': 'Eureka Full Landing Page',
    'about': 'About Us & Company Profile',
    'solutions': 'Solutions Catalog',
    'facilities-management': 'Integrated Facilities Management',
    'commercial-cleaning': 'Commercial & Industrial Cleaning',
    'pest-control': 'Commercial Pest Control & Fumigation',
    'pre-soil-treatment': 'Pre-Construction Soil Poisoning & Treatment',
    'office-relocation': 'Corporate Office Relocation',
    'construction-management': 'Construction Management & Site Supervision',
    'project-management': 'Principal Construction Project Management (PROCSA)',
    'freelance-pm': 'Freelance Project Management & Site Lead',
    'construction-consultancy': 'Construction Consultancy & Commercial Advisory',
    'quantity-surveying': 'Quantity Surveying & Cost Engineering (ASAQS)',
    'construction-claims': 'Construction Claims & Dispute Resolution (SCL / FIDIC / JBCC)',
    'delay-analysis': 'Forensic Delay Analysis & Programme Consultancy (SCL 2nd Ed / P6)',
    'pricing': 'Pricing & Transparent Rate Schedule',
    'contact': 'Contact & 24/7 Dispatch Desk',
  };

  const snippets = getPageSnippets(selectedPage);
  const title = pageNames[selectedPage] || 'Eureka Service Page';


  const getCombinedCode = () => {
    return `<style>\n${snippets.css}\n</style>\n\n${snippets.html}`;
  };

  const currentCode =
    activeTab === 'html'
      ? snippets.html
      : activeTab === 'css'
      ? snippets.css
      : getCombinedCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = `${selectedPage}-${activeTab === 'css' ? 'styles.css' : 'elementor-template.html'}`;
    const blob = new Blob([currentCode], { type: activeTab === 'css' ? 'text/css' : 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Elementor Pro Code Snippets</h2>
              <p className="text-xs text-slate-400">
                Ready to paste into Elementor Custom HTML &amp; Scoped CSS widgets
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 shadow"
              title="Download file"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Download File</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-red-600 text-white hover:bg-red-700 text-xs font-bold transition-all shadow active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Switcher Sub-header */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-950/90 border-b border-slate-800/80 overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mr-1">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Target Page:</span>
            </span>
            <button
              onClick={() => setSelectedPage('home')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'home'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setSelectedPage('about')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'about'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => setSelectedPage('solutions')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'solutions'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Solutions Overview
            </button>
            <button
              onClick={() => setSelectedPage('facilities-management')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'facilities-management'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-sky-400 hover:bg-slate-800 border border-sky-500/30'
              }`}
            >
              FM Service
            </button>
            <button
              onClick={() => setSelectedPage('commercial-cleaning')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'commercial-cleaning'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-sky-400 hover:bg-slate-800 border border-sky-500/30'
              }`}
            >
              Cleaning &amp; Hygiene
            </button>
            <button
              onClick={() => setSelectedPage('pest-control')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'pest-control'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-emerald-400 hover:bg-slate-800 border border-emerald-500/30'
              }`}
            >
              Pest Control
            </button>
            <button
              onClick={() => setSelectedPage('pre-soil-treatment')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'pre-soil-treatment'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-amber-400 hover:bg-slate-800 border border-amber-500/30'
              }`}
            >
              Pre-Soil Treatment
            </button>
            <button
              onClick={() => setSelectedPage('office-relocation')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'office-relocation'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-blue-400 hover:bg-slate-800 border border-blue-500/30'
              }`}
            >
              Office Relocation
            </button>
            <button
              onClick={() => setSelectedPage('construction-management')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'construction-management'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-red-400 hover:bg-slate-800 border border-red-500/30'
              }`}
            >
              Construction Mgmt
            </button>
            <button
              onClick={() => setSelectedPage('project-management')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'project-management'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-rose-400 hover:bg-slate-800 border border-rose-500/30'
              }`}
            >
              Project Mgmt
            </button>
            <button
              onClick={() => setSelectedPage('freelance-pm')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'freelance-pm'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-amber-400 hover:bg-slate-800 border border-amber-500/30'
              }`}
            >
              Freelance PM
            </button>
            <button
              onClick={() => setSelectedPage('construction-consultancy')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'construction-consultancy'
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'bg-slate-800/80 text-rose-300 hover:bg-slate-800 border border-rose-500/30'
              }`}
            >
              Consultancy
            </button>
            <button
              onClick={() => setSelectedPage('quantity-surveying')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'quantity-surveying'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-slate-800/80 text-red-300 hover:bg-slate-800 border border-red-500/30'
              }`}
            >
              Quantity Surveying
            </button>
            <button
              onClick={() => setSelectedPage('construction-claims')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'construction-claims'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-red-400 hover:bg-slate-800 border border-red-500/30'
              }`}
            >
              Claims &amp; Contracts
            </button>
            <button
              onClick={() => setSelectedPage('delay-analysis')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'delay-analysis'
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-slate-800/80 text-red-300 hover:bg-slate-800 border border-red-500/30'
              }`}
            >
              Delay Analysis
            </button>
            <button
              onClick={() => setSelectedPage('pricing')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'pricing'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setSelectedPage('contact')}
              className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                selectedPage === 'contact'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="text-[11px] text-slate-400 hidden lg:block">
            {selectedPage === 'delay-analysis'
              ? 'Delay Analysis & Programme Consultancy (SCL Protocol / P6 / Windows & TIA) Standalone Template'
              : selectedPage === 'construction-claims'
              ? 'Construction Claims & Contract Consultancy (SCL / Delay & Quantum) Standalone Template'
              : selectedPage === 'quantity-surveying'
              ? 'Quantity Surveying & Commercial Cost Engineering (ASAQS / SACQSP) Standalone Template'
              : selectedPage === 'construction-consultancy'
              ? 'Construction Consultancy & Commercial Advisory Standalone Template'
              : selectedPage === 'freelance-pm'
              ? 'Freelance Construction Project Management Standalone Template'
              : selectedPage === 'project-management'
              ? 'Principal Project Management (PROCSA Stages 1-6) Standalone Template'
              : selectedPage === 'construction-management'
              ? 'Construction Management & Site Supervision Standalone Template'
              : selectedPage === 'office-relocation'
              ? 'Corporate Office & Business Relocation Standalone Template'
              : selectedPage === 'pre-soil-treatment'
              ? 'Pre-Construction Soil Treatment & Soil Poisoning Standalone Template'
              : selectedPage === 'pest-control'
              ? 'Commercial Pest Control & Relocation Standalone Template'
              : selectedPage === 'commercial-cleaning'
              ? 'Commercial Cleaning & Hygiene Standalone Template'
              : selectedPage === 'facilities-management'
              ? 'Facilities Management Standalone Service Template'
              : selectedPage === 'contact'
              ? 'Contact & 24/7 Dispatch Template'
              : selectedPage === 'pricing'
              ? 'Pricing & Rate Schedule Template'
              : selectedPage === 'solutions'
              ? 'Solutions Catalog Template'
              : selectedPage === 'about'
              ? 'About & Leadership Template'
              : 'Full Landing Page Template'}
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-900 border-b border-slate-800 flex-wrap gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'html'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-orange-400" />
              <span>Block 1: HTML Only</span>
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'css'
                  ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-sky-400" />
              <span>Block 2: Scoped CSS (<code className="text-sky-300">selector</code>)</span>
            </button>

            <button
              onClick={() => setActiveTab('combined')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'combined'
                  ? 'bg-red-950/80 text-red-200 shadow-sm border border-red-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>Block 3: All-In-One (HTML + &lt;style&gt;)</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400 hidden md:block">
            {activeTab === 'html'
              ? 'Paste into Elementor HTML Widget'
              : activeTab === 'css'
              ? 'Paste into Widget > Advanced > Custom CSS'
              : 'Single paste into any Elementor / WordPress HTML widget'}
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6 bg-slate-950/80 font-mono text-xs text-slate-200 leading-relaxed">
          <pre className="whitespace-pre overflow-x-auto selection:bg-red-500/30">
            <code>{currentCode}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Fully Scoped &amp; Responsive for Desktop (&gt;1024px), Tablet (768px-1024px) &amp; Mobile (&lt;767px)</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
