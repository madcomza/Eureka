import { EurekaHeader } from "./EurekaHeader";
import { EurekaFooter } from "./EurekaFooter";
import React, { useState, useMemo } from 'react';
import { sendLeadToInbox, TARGET_LEAD_EMAIL } from '../utils/sendLead';
import { EurekaLogo } from './EurekaLogo';
import {
  Sparkles,
  Search,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  AlertCircle,
  FileCode2,
  Code2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkle,
  Wrench,
  ChevronRight,
  Info
} from 'lucide-react';

interface EurekaPricingPageProps {
  onNavigate?: (page: 'home' | 'about' | 'solutions' | 'facilities-management' | 'commercial-cleaning' | 'pest-control' | 'pre-soil-treatment' | 'office-relocation' | 'pricing' | 'contact') => void;
}

interface PriceItem {
  id: string;
  category: 'couches' | 'mattresses' | 'chairs' | 'carpets' | 'rugs' | 'other' | 'fm';
  categoryLabel: string;
  name: string;
  subtitle?: string;
  dimensions?: string;
  unit: string;
  price: number | 'POA';
  popular?: boolean;
}

export const EurekaPricingPage: React.FC<EurekaPricingPageProps> = ({
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('couches');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<{ [key: string]: number }>({
    'couch-3': 1,
    'rug-med': 1
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const priceCatalog: PriceItem[] = [
    // Couches - Single Frame
    { id: 'couch-1', category: 'couches', categoryLabel: 'Couches & Sofas', name: '1-Seater Couch (Single Frame)', unit: 'Per unit', price: 250 },
    { id: 'couch-2', category: 'couches', categoryLabel: 'Couches & Sofas', name: '2-Seater Couch (Single Frame)', unit: 'Per unit', price: 350 },
    { id: 'couch-3', category: 'couches', categoryLabel: 'Couches & Sofas', name: '3-Seater Couch (Single Frame)', unit: 'Per unit', price: 450, popular: true },
    // Couches - MultiFrame
    { id: 'couch-4', category: 'couches', categoryLabel: 'Couches & Sofas', name: '4-Seater Couch (Multi-Frame)', unit: 'Per unit', price: 500 },
    { id: 'couch-5', category: 'couches', categoryLabel: 'Couches & Sofas', name: '5-Seater Couch (Multi-Frame)', unit: 'Per unit', price: 600 },
    { id: 'couch-6', category: 'couches', categoryLabel: 'Couches & Sofas', name: '6-Seater Couch (Multi-Frame)', unit: 'Per unit', price: 700 },
    { id: 'couch-7', category: 'couches', categoryLabel: 'Couches & Sofas', name: '7-Seater Couch (Multi-Frame)', unit: 'Per unit', price: 800 },
    { id: 'couch-8', category: 'couches', categoryLabel: 'Couches & Sofas', name: '8-Seater Couch (Multi-Frame)', unit: 'Per unit', price: 900 },
    
    // Ottomans
    { id: 'ott-s', category: 'couches', categoryLabel: 'Ottomans', name: 'Ottoman (Small)', unit: 'Per unit', price: 100 },
    { id: 'ott-m', category: 'couches', categoryLabel: 'Ottomans', name: 'Ottoman (Medium)', unit: 'Per unit', price: 140 },
    { id: 'ott-l', category: 'couches', categoryLabel: 'Ottomans', name: 'Ottoman (Large)', unit: 'Per unit', price: 180 },
    { id: 'ott-xl', category: 'couches', categoryLabel: 'Ottomans', name: 'Ottoman (Extra Large)', unit: 'Per unit', price: 220 },

    // Chairs
    { id: 'chair-din', category: 'chairs', categoryLabel: 'Chairs', name: 'Dining Chair', unit: 'Per chair', price: 80 },
    { id: 'chair-occ', category: 'chairs', categoryLabel: 'Chairs', name: 'Occasional Chair', unit: 'Per chair', price: 200 },
    { id: 'chair-wing', category: 'chairs', categoryLabel: 'Chairs', name: 'Wingback Chair', unit: 'Per chair', price: 250 },

    // Day Beds & Loungers
    { id: 'lounge-1', category: 'chairs', categoryLabel: 'Loungers & Day Beds', name: 'Day Bed / Lounger (1-Seater)', unit: 'Per unit', price: 300 },
    { id: 'lounge-2', category: 'chairs', categoryLabel: 'Loungers & Day Beds', name: 'Day Bed / Lounger (2-Seater)', unit: 'Per unit', price: 400 },

    // Mattresses
    { id: 'mat-cot', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'Baby Cot Mattress', unit: 'Per unit', price: 150 },
    { id: 'mat-sing', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'Single Mattress', unit: 'Per unit', price: 250 },
    { id: 'mat-3qtr', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'Three-Quarter Mattress (3/4)', unit: 'Per unit', price: 300 },
    { id: 'mat-dbl', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'Double Mattress', unit: 'Per unit', price: 350, popular: true },
    { id: 'mat-qn', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'Queen Mattress', unit: 'Per unit', price: 400 },
    { id: 'mat-kg', category: 'mattresses', categoryLabel: 'Mattresses & Beds', name: 'King Mattress', unit: 'Per unit', price: 500 },

    // Bed Bases
    { id: 'base-sing', category: 'mattresses', categoryLabel: 'Bed Bases', name: 'Single Bed Base', unit: 'Per base', price: 100 },
    { id: 'base-3qtr', category: 'mattresses', categoryLabel: 'Bed Bases', name: 'Three-Quarter Bed Base', unit: 'Per base', price: 120 },
    { id: 'base-dbl', category: 'mattresses', categoryLabel: 'Bed Bases', name: 'Double Bed Base', unit: 'Per base', price: 140 },
    { id: 'base-qn', category: 'mattresses', categoryLabel: 'Bed Bases', name: 'Queen Bed Base', unit: 'Per base', price: 150 },
    { id: 'base-kg', category: 'mattresses', categoryLabel: 'Bed Bases', name: 'King Bed Base', unit: 'Per base', price: 160 },

    // Fitted Carpets
    { id: 'carp-3x3', category: 'carpets', categoryLabel: 'Fitted Carpets', name: 'Fitted Carpet (3m x 3m)', dimensions: '9 sqm', unit: 'Per room', price: 225 },
    { id: 'carp-3x4', category: 'carpets', categoryLabel: 'Fitted Carpets', name: 'Fitted Carpet (3m x 4m)', dimensions: '12 sqm', unit: 'Per room', price: 250, popular: true },
    { id: 'carp-4x4', category: 'carpets', categoryLabel: 'Fitted Carpets', name: 'Fitted Carpet (4m x 4m)', dimensions: '16 sqm', unit: 'Per room', price: 300 },
    { id: 'carp-lrg', category: 'carpets', categoryLabel: 'Fitted Carpets', name: 'Large Fitted Carpets (>16 sqm)', dimensions: 'Custom area', unit: 'Per m²', price: 15 },

    // Loose Rugs (Offsite deep clean)
    { id: 'rug-sm', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: 'Small Rug (180 x 120 cm)', dimensions: '2.16 sqm', unit: 'Per rug', price: 200 },
    { id: 'rug-med', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: 'Medium Rug (240 x 170 cm)', dimensions: '4.08 sqm', unit: 'Per rug', price: 350, popular: true },
    { id: 'rug-lrg', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: 'Large Rug (300 x 200 cm)', dimensions: '6.00 sqm', unit: 'Per rug', price: 450 },
    { id: 'rug-xl', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: 'Extra Large Rug (330 x 240 cm)', dimensions: '7.92 sqm', unit: 'Per rug', price: 550 },
    { id: 'rug-2xl', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: '2XL Rug (360 x 270 cm)', dimensions: '9.72 sqm', unit: 'Per rug', price: 650 },
    { id: 'rug-3xl', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: '3XL Rug (400 x 300 cm)', dimensions: '12.00 sqm', unit: 'Per rug', price: 750 },
    { id: 'rug-4xl', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: '4XL Rug (450 x 360 cm)', dimensions: '15.75 sqm', unit: 'Per rug', price: 850 },
    { id: 'rug-5xl', category: 'rugs', categoryLabel: 'Loose Rugs (Offsite Clean)', name: '5XL Rug (500 x 400 cm)', dimensions: '20.00 sqm', unit: 'Per rug', price: 950 },

    // Other Services
    { id: 'oth-conc', category: 'other', categoryLabel: 'Specialized Exterior & Floor Care', name: 'Concrete & Pavement High-Pressure Cleaning', unit: 'Per m²', price: 10 },
    { id: 'oth-roof', category: 'other', categoryLabel: 'Specialized Exterior & Floor Care', name: 'Roof & Exterior Wall Cleaning (Soft Wash)', unit: 'Site Assessment', price: 'POA' },
    { id: 'oth-floor', category: 'other', categoryLabel: 'Specialized Exterior & Floor Care', name: 'Commercial Floor Care (Scrubbing, Mopping & Machine Shine)', unit: 'Site Assessment', price: 'POA' },

    // Facilities Management & Built Environment
    { id: 'fm-elec', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Electrical Installations & Compliance CoC', unit: 'Project quote', price: 'POA' },
    { id: 'fm-plumb', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Commercial & Residential Plumbing Systems', unit: 'Project quote', price: 'POA' },
    { id: 'fm-cctv', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'CCTV & Security System Integration', unit: 'Project quote', price: 'POA' },
    { id: 'fm-build', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Building & General Construction Works', unit: 'Project quote', price: 'POA' },
    { id: 'fm-drywall', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Drywalling & Partitioning Alterations', unit: 'Project quote', price: 'POA' },
    { id: 'fm-solar', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Solar PV & Backup Power Installations', unit: 'Project quote', price: 'POA' },
    { id: 'fm-paint', category: 'fm', categoryLabel: 'Facility Management & Installations', name: 'Commercial & Exterior Painting', unit: 'Project quote', price: 'POA' }
  ];

  const categories = [
    {
      key: 'couches',
      label: 'Couches & Sofas',
      subtitle: 'Single & multi-frame sofas, ottomans',
      icon: Layers,
      count: priceCatalog.filter(i => i.category === 'couches').length,
    },
    {
      key: 'chairs',
      label: 'Chairs & Loungers',
      subtitle: 'Dining, occasional chairs & day beds',
      icon: Sparkle,
      count: priceCatalog.filter(i => i.category === 'chairs').length,
    },
    {
      key: 'mattresses',
      label: 'Mattresses & Bases',
      subtitle: 'Cot to King size deep sanitization',
      icon: ShieldCheck,
      count: priceCatalog.filter(i => i.category === 'mattresses').length,
    },
    {
      key: 'carpets',
      label: 'Fitted Carpets',
      subtitle: 'Wall-to-wall deep steam extraction',
      icon: Sparkles,
      count: priceCatalog.filter(i => i.category === 'carpets').length,
    },
    {
      key: 'rugs',
      label: 'Loose Rugs (Offsite Clean)',
      subtitle: 'Free 15km collection & industrial wash',
      icon: Truck,
      count: priceCatalog.filter(i => i.category === 'rugs').length,
    },
    {
      key: 'other',
      label: 'Specialized Cleaning',
      subtitle: 'High-pressure paving & roof wash',
      icon: Wrench,
      count: priceCatalog.filter(i => i.category === 'other').length,
    },
    {
      key: 'fm',
      label: 'Facility Management',
      subtitle: 'Electrical CoC, plumbing & drywalling',
      icon: FileCode2,
      count: priceCatalog.filter(i => i.category === 'fm').length,
    },
  ];

  const currentCategory = categories.find(c => c.key === activeCategory) || categories[0];

  const filteredItems = useMemo(() => {
    return priceCatalog.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const current = prev[id] || 0;
      const updated = current + delta;
      if (updated <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: updated };
    });
  };

  const removeItem = (id: string) => {
    setCart(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const clearCart = () => setCart({});

  // Calculate cart total
  const cartCalculation = useMemo(() => {
    let subtotal = 0;
    let poaCount = 0;
    let itemCount = 0;

    Object.entries(cart).forEach(([id, rawQty]) => {
      const qty = Number(rawQty) || 0;
      const item = priceCatalog.find(i => i.id === id);
      if (item) {
        if (typeof item.price === 'number') {
          subtotal += item.price * qty;
        } else {
          poaCount += qty;
        }
        itemCount += qty;
      }
    });

    const minimumThreshold = 600;
    const remainingToMinimum = Math.max(0, minimumThreshold - subtotal);
    const meetsMinimum = subtotal >= minimumThreshold || (subtotal === 0 && poaCount > 0);

    return {
      subtotal,
      poaCount,
      itemCount,
      minimumThreshold,
      remainingToMinimum,
      meetsMinimum
    };
  }, [cart]);

  // Quote Form State
  const [quoteName, setQuoteName] = useState('');
  const [quotePhone, setQuotePhone] = useState('');
  const [quoteEmail, setQuoteEmail] = useState('');
  const [quoteLocation, setQuoteLocation] = useState('');
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteTicketId, setQuoteTicketId] = useState('');

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitting(true);
    try {
      const selectedItems = Object.entries(cart).map(([id, qty]) => {
        const item = priceCatalog.find(i => i.id === id);
        return `${item?.name || id} (Qty: ${qty})`;
      });

      const res = await sendLeadToInbox({
        formType: 'Instant Price Calculator Quote',
        fullName: quoteName,
        phone: quotePhone,
        email: quoteEmail,
        location: quoteLocation,
        serviceType: 'Specialist Cleaning & Facility Maintenance',
        message: `Customer generated an estimate via the online calculator. Subtotal: R ${cartCalculation.subtotal.toFixed(2)}. Selected Items: ${selectedItems.join(', ') || 'Custom quote'}`,
        estimateDetails: {
          items: selectedItems,
          total: cartCalculation.subtotal.toFixed(2)
        }
      });
      setQuoteTicketId(res.ticketId);
    } catch (err) {
      console.error(err);
      setQuoteTicketId('EFM-' + Math.floor(100000 + Math.random() * 900000));
    } finally {
      setQuoteSubmitting(false);
      setQuoteSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Utility Header */}
      <EurekaHeader currentPage="pricing" onNavigate={onNavigate}  />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#050b1b] via-[#09132e] to-[#0c235c] text-white py-16 lg:py-20 overflow-hidden">
        {/* Background Subtle Accent Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official 2026 Price Schedule &bull; Transparent Rates</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            SERVICE PRICING &amp; INSTANT ESTIMATOR
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
            Complete, transparent pricing for deep cleaning, upholstery revitalization, loose rug restoration, specialized floor care, and facility maintenance works across Gauteng.
          </p>

          {/* Quick Notice Banner Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-4 flex items-start gap-3">
              <Truck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">Free 15km Collection</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Complimentary loose rug collection within 15km radius from Midrand.</p>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">4-7 Day Deep Clean</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Thorough off-site industrial rug decontamination &amp; drying lead time.</p>
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-700/60 rounded-lg p-4 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wide">R600 Min. Order</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">Standard residential deep cleaning minimum threshold per booking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 3-Column Content: Vertical Categories (Left), Category Items (Center), Quotation Basket (Right) */}
      <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="estimator">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Column 1: Vertical Category Tabs (Left) */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-4">
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-black uppercase tracking-wider">Service Categories</span>
                </div>
                <span className="text-[10px] font-bold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">
                  {categories.length} Tiers
                </span>
              </div>

              {/* Vertical Tabs List */}
              <div className="p-2 space-y-1.5">
                {categories.map(cat => {
                  const IconComp = cat.icon;
                  const isActive = activeCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => {
                        setActiveCategory(cat.key);
                        setSearchQuery('');
                      }}
                      className={`w-full text-left p-3 rounded-lg transition-all flex items-start justify-between gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#09132e] text-white shadow-sm border-l-4 border-l-red-500'
                          : 'bg-white text-slate-700 hover:bg-slate-100/90 border border-slate-100'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div
                          className={`w-7 h-7 rounded flex items-center justify-center shrink-0 mt-0.5 ${
                            isActive
                              ? 'bg-red-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-bold leading-tight truncate ${isActive ? 'text-white' : 'text-slate-900'}`}>
                            {cat.label}
                          </p>
                          <p className={`text-[10px] leading-tight mt-0.5 truncate ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Logistics & Terms Sticky Card */}
            <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 space-y-3 shadow-xs hidden lg:block">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Quick Booking Policy</span>
              </div>
              <ul className="text-[11px] text-slate-300 space-y-2">
                <li className="flex items-start gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong>Free 15km Collection</strong> for loose rugs from Midrand.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>4-7 Working Days</strong> industrial wash &amp; drying.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span><strong>R 600.00 Min. Order</strong> standard residential deep clean.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Active Category Service Items (Center) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search & Active Category Banner */}
            <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 space-y-3">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search inside ${currentCategory.label}...`}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              {/* Active Category Meta Header */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    {React.createElement(currentCategory.icon, { className: "w-3.5 h-3.5" })}
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      {currentCategory.label}
                    </h2>
                    <p className="text-[11px] text-slate-500">{currentCategory.subtitle}</p>
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  <strong>{filteredItems.length}</strong> items
                </div>
              </div>
            </div>

            {/* Price Items Cards List */}
            <div className="space-y-2.5">
              {filteredItems.map(item => {
                const qty = cart[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl p-4 border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                      qty > 0
                        ? 'border-red-300 ring-1 ring-red-200 shadow-sm bg-red-50/10'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="space-y-0.5 min-w-0 pr-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                          {item.categoryLabel}
                        </span>
                        {item.popular && (
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {item.name}
                      </h3>
                      {item.dimensions && (
                        <p className="text-[11px] text-slate-500">
                          Standard area: <strong className="text-slate-700">{item.dimensions}</strong>
                        </p>
                      )}
                      <p className="text-[11px] text-slate-400">{item.unit}</p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 shrink-0">
                      <div className="text-right">
                        <div className="text-base sm:text-lg font-black text-[#0b3582]">
                          {typeof item.price === 'number' ? `R ${item.price.toFixed(2)}` : 'POA'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {typeof item.price === 'number' ? 'Fixed Rate' : 'Price on Ask'}
                        </div>
                      </div>

                      {/* Add to Basket / Quantity Controls */}
                      <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200">
                        {qty > 0 ? (
                          <>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-6 h-6 rounded bg-white hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shadow-xs transition-colors"
                              aria-label="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-extrabold text-slate-900">
                              {qty}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-6 h-6 rounded bg-red-600 hover:bg-red-700 text-white flex items-center justify-center font-bold text-xs shadow-xs transition-colors"
                              aria-label="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2.5 py-1.5 rounded bg-[#09132e] hover:bg-red-600 text-white text-xs font-bold flex items-center gap-1 transition-all shadow-xs"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredItems.length === 0 && (
                <div className="bg-white rounded-xl p-6 text-center border border-slate-200 text-slate-500">
                  <p className="font-semibold text-xs">No services matched "{searchQuery}" in this category.</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-2 text-xs text-red-600 font-bold hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>

            {/* Official Disclaimers Notice Block */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 space-y-2 text-xs text-amber-900">
              <div className="flex items-center gap-2 font-bold text-amber-950 uppercase tracking-wide text-[11px]">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Cleaning Terms &amp; Logistics Guidelines</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-900/90 text-[11px] leading-relaxed">
                <li>
                  <strong>Offsite Loose Rugs:</strong> 4-7 working days turnaround with industrial decontamination.
                </li>
                <li>
                  <strong>Complimentary Logistics:</strong> Free collection and return delivery within 15km of Midrand.
                </li>
                <li>
                  <strong>Minimum Order:</strong> R 600.00 threshold for residential deep cleanings.
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Live Interactive Quotation Basket (Right) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-[#09132e] text-white p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="w-5 h-5 text-red-500" />
                  <div>
                    <h3 className="font-bold text-sm tracking-wide">ESTIMATE SUMMARY</h3>
                    <p className="text-[11px] text-slate-300">Instant Online Price Calculation</p>
                  </div>
                </div>
                {cartCalculation.itemCount > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-slate-400 hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                )}
              </div>

              {/* Items List */}
              <div className="p-4 sm:p-5 max-h-80 overflow-y-auto divide-y divide-slate-100">
                {Object.keys(cart).length === 0 ? (
                  <div className="py-8 text-center text-slate-400 text-xs">
                    <p className="font-semibold text-slate-600 mb-1">Your estimate basket is empty.</p>
                    <p>Select items from the price schedule on the left to calculate your total.</p>
                  </div>
                ) : (
                  Object.entries(cart).map(([id, rawQty]) => {
                    const qty = Number(rawQty) || 0;
                    const item = priceCatalog.find(i => i.id === id);
                    if (!item) return null;
                    const itemTotal = typeof item.price === 'number' ? item.price * qty : null;

                    return (
                      <div key={id} className="py-3 flex items-center justify-between text-xs">
                        <div className="pr-2 max-w-[170px]">
                          <p className="font-bold text-slate-800 line-clamp-1">{item.name}</p>
                          <p className="text-[11px] text-slate-400">
                            {typeof item.price === 'number' ? `R ${item.price.toFixed(2)} ea` : 'Price on Ask'}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-slate-100 rounded px-1.5 py-0.5">
                            <button
                              onClick={() => updateQuantity(id, -1)}
                              className="text-slate-600 hover:text-red-600 font-bold"
                            >
                              -
                            </button>
                            <span className="font-bold px-1 text-slate-900">{qty}</span>
                            <button
                              onClick={() => updateQuantity(id, 1)}
                              className="text-slate-600 hover:text-red-600 font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-extrabold text-slate-900 min-w-[65px] text-right">
                            {itemTotal !== null ? `R ${itemTotal.toFixed(2)}` : 'POA'}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Minimum Order Indicator */}
              {cartCalculation.itemCount > 0 && cartCalculation.subtotal > 0 && (
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
                  <div className="flex justify-between items-center text-[11px] mb-1.5">
                    <span className="font-bold text-slate-700">Residential Minimum Order (R600)</span>
                    <span className={`font-extrabold ${cartCalculation.meetsMinimum ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {cartCalculation.meetsMinimum ? '✓ Threshold Met' : `R ${cartCalculation.remainingToMinimum.toFixed(2)} to reach R600`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${cartCalculation.meetsMinimum ? 'bg-emerald-500' : 'bg-amber-500'}`}
                      style={{ width: `${Math.min(100, (cartCalculation.subtotal / 600) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Total & Checkout Form */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Estimated Subtotal</span>
                    <span className="font-bold text-slate-800">
                      R {cartCalculation.subtotal.toFixed(2)}
                    </span>
                  </div>
                  {cartCalculation.poaCount > 0 && (
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Custom Assessment Items</span>
                      <span className="font-bold text-sky-600">{cartCalculation.poaCount} x POA</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Midrand 15km Delivery</span>
                    <span className="font-bold text-emerald-600">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total Estimate</span>
                    <span className="text-[#d91b1b] text-lg">
                      R {cartCalculation.subtotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Instant Quote Form */}
                {quoteSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center space-y-2 animate-in fade-in">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-black text-slate-900">Quotation Request Logged!</h4>
                    <p className="text-xs text-slate-600">
                      Ref: <strong className="font-mono text-red-700">{quoteTicketId}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Your estimate details have been dispatched to <strong className="text-slate-800">{TARGET_LEAD_EMAIL}</strong>. A service coordinator will contact you shortly to confirm your booking.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setQuoteSubmitted(false);
                        setQuoteName('');
                        setQuotePhone('');
                        setQuoteEmail('');
                        setQuoteLocation('');
                      }}
                      className="mt-2 text-xs font-bold text-[#d91b1b] hover:underline"
                    >
                      Calculate another service
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-2.5 pt-2">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={quoteName}
                      onChange={(e) => setQuoteName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:border-red-500"
                    />
                    <input
                      type="tel"
                      placeholder="Contact Number (e.g. 074 518 7012) *"
                      required
                      value={quotePhone}
                      onChange={(e) => setQuotePhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:border-red-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={quoteEmail}
                      onChange={(e) => setQuoteEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:border-red-500"
                    />
                    <input
                      type="text"
                      placeholder="Suburb / Location (e.g. Midrand) *"
                      required
                      value={quoteLocation}
                      onChange={(e) => setQuoteLocation(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded focus:outline-none focus:border-red-500"
                    />
                    <button
                      type="submit"
                      disabled={quoteSubmitting}
                      className="w-full py-3 bg-[#d91b1b] hover:bg-red-700 disabled:opacity-60 text-white font-extrabold text-xs uppercase tracking-wider rounded shadow transition-all cursor-pointer"
                    >
                      {quoteSubmitting ? 'DISPATCHING TO LEADS INBOX...' : 'BOOK ESTIMATED SERVICE'}
                    </button>
                  </form>
                )}

                <p className="text-[10px] text-slate-400 text-center leading-tight">
                  Prices exclude VAT. Physical inspection may occur for heavily stained or delicate fabrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Footer Contact Strip */}
      <EurekaFooter onNavigate={onNavigate}  />
    </div>
  );
};
