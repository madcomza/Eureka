import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Image as ImageIcon,
  X,
  Maximize2,
  Filter,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export type GalleryTab = 'ALL' | 'FACILITIES' | 'CONSTRUCTION' | 'CONSULTANCY';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'FACILITIES' | 'CONSTRUCTION' | 'CONSULTANCY';
  categoryLabel: string;
  image: string;
  year?: string;
}

export interface EurekaGalleryPageProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

// Automatic discovery of static images placed in src/assets/images/GALLERY subfolders
const staticFacilitiesImages = import.meta.glob<string>(
  '../assets/images/GALLERY/FACILITIES/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
);
const staticConstructionImages = import.meta.glob<string>(
  '../assets/images/GALLERY/CONSTRUCTION/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
);
const staticConsultancyImages = import.meta.glob<string>(
  '../assets/images/GALLERY/CONSULTANCY/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}',
  { eager: true, import: 'default' }
);

function getStaticGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];

  const parseFileName = (path: string) => {
    const filename = path.split('/').pop() || '';
    return filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
  };

  Object.entries(staticFacilitiesImages).forEach(([path, imgUrl]) => {
    items.push({
      id: `static-fac-${path}`,
      title: parseFileName(path),
      category: 'FACILITIES',
      categoryLabel: 'Facilities',
      image: imgUrl,
      year: 'Project Record'
    });
  });

  Object.entries(staticConstructionImages).forEach(([path, imgUrl]) => {
    items.push({
      id: `static-con-${path}`,
      title: parseFileName(path),
      category: 'CONSTRUCTION',
      categoryLabel: 'Construction',
      image: imgUrl,
      year: 'Project Record'
    });
  });

  Object.entries(staticConsultancyImages).forEach(([path, imgUrl]) => {
    items.push({
      id: `static-consult-${path}`,
      title: parseFileName(path),
      category: 'CONSULTANCY',
      categoryLabel: 'Consultancy',
      image: imgUrl,
      year: 'Project Record'
    });
  });

  return items;
}

export const EurekaGalleryPage: React.FC<EurekaGalleryPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [galleryItems] = useState<GalleryItem[]>(getStaticGalleryItems);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Clear legacy client-side upload cache
  useEffect(() => {
    try {
      localStorage.removeItem('eureka_gallery_user_uploads_v2');
      localStorage.removeItem('eureka_gallery_uploaded_items_v1');
    } catch {
      // ignore
    }
  }, []);

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter items based on Tab & Search Query
  const filteredItems = galleryItems.filter((item) => {
    const matchesTab = activeTab === 'ALL' || item.category === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Lightbox Navigation
  const handlePrevPhoto = () => {
    if (!selectedPhoto || filteredItems.length === 0) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextPhoto = () => {
    if (!selectedPhoto || filteredItems.length === 0) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredItems[0]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
      {/* 1. Standard Header */}
      <EurekaHeader currentPage="gallery" onNavigate={onNavigate} />

      {/* 2. Hero Section */}
      <section className="relative bg-[#050b1b] text-white py-12 lg:py-16 border-b-4 border-red-600 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-30"
        >
          <source src="./video/Services Hero Section BG.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-black tracking-wider uppercase">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>PROJECT VISUAL GALLERY</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Project Photo Gallery
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Visual photographic record of our completed and active project milestones across facilities management, construction oversight, and specialist built environment consultancy.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Filter Tabs (4 Tab Buttons: ALL, FACILITIES, CONSTRUCTION, CONSULTANCY) & Search Bar */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            {/* 4 Interactive Tab Buttons: ALL, FACILITIES, CONSTRUCTION, CONSULTANCY */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {(['ALL', 'FACILITIES', 'CONSTRUCTION', 'CONSULTANCY'] as GalleryTab[]).map((tab) => {
                const count =
                  tab === 'ALL'
                    ? galleryItems.length
                    : galleryItems.filter((item) => item.category === tab).length;

                const tabLabels: Record<GalleryTab, string> = {
                  ALL: 'ALL',
                  FACILITIES: 'FACILITIES',
                  CONSTRUCTION: 'CONSTRUCTION',
                  CONSULTANCY: 'CONSULTANCY'
                };

                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSearchQuery('');
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-black tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-[#09132e] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{tabLabels[tab]}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                        isActive ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right: Search */}
            <div className="flex items-center w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project title..."
                  className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {galleryItems.length === 0 ? (
          /* Empty Gallery State */
          <div className="bg-white rounded-2xl p-10 sm:p-14 text-center border border-slate-200 max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">
                Project Visual Gallery
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Visual photographic record of our completed and active project milestones.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <span>Inquire About Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : filteredItems.length === 0 ? (
          /* Search / Tab Filter with no matches */
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500 max-w-md mx-auto space-y-3">
            <Filter className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No matching photographs</h3>
            <p className="text-xs text-slate-500">
              No photos found for &quot;{searchQuery}&quot; under the {activeTab} tab.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => {
                  setActiveTab('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold cursor-pointer transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          </div>
        ) : (
          /* Pure Clean Image Grid */
          <div
            key={`${activeTab}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="bg-slate-900 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer relative aspect-[4/3] border border-slate-200 hover:border-red-500 hover:-translate-y-1"
              >
                {/* Clean Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Clean Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-red-600/90 px-2 py-0.5 rounded">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-white gap-2">
                    <span className="text-xs font-bold text-white line-clamp-1">{item.title}</span>
                    <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white shrink-0">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 5. Clean Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-slate-900 text-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-800 flex flex-col relative"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="font-bold text-red-400 uppercase tracking-wider text-[11px]">
                    {selectedPhoto.categoryLabel}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label="Close full view"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Photo & Details */}
              <div className="p-4 sm:p-6 space-y-4">
                {/* Large Photo Display with Prev/Next Navigation */}
                <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center min-h-[50vh] max-h-[72vh]">
                  <img
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    decoding="async"
                    className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
                  />

                  {/* Prev Button */}
                  <button
                    onClick={handlePrevPhoto}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={handleNextPhoto}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-red-600 text-white transition-colors cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Lightbox Footer Actions & Minimal Title */}
                <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-sm font-bold text-white line-clamp-1">
                    {selectedPhoto.title}
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                    >
                      Close
                    </button>

                    <button
                      onClick={() => {
                        setSelectedPhoto(null);
                        handleNav('contact');
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>INQUIRE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Bottom CTA */}
      <section className="bg-[#09132e] text-white py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-black tracking-widest text-red-400 bg-red-950/60 px-3 py-1 rounded-full uppercase border border-red-800/60">
            REGISTERED BUILT ENVIRONMENT LEADERSHIP
          </span>

          <h2 className="text-2xl sm:text-3xl font-black text-white max-w-xl mx-auto tracking-tight">
            Need Expert Project Delivery or Facilities Governance?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Engage our certified Pr. CPM leadership for commercial redevelopments, infrastructure delivery, or contract dispute advisory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="px-6 py-2.5 rounded-lg text-xs font-black tracking-wider uppercase bg-red-600 hover:bg-red-700 text-white shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <EurekaFooter currentPage="gallery" onNavigate={onNavigate} />
    </div>
  );
};
