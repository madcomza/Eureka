import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EurekaHeader, NavPage } from './EurekaHeader';
import { EurekaFooter } from './EurekaFooter';
import {
  Image as ImageIcon,
  Upload,
  Plus,
  X,
  Maximize2,
  Filter,
  Search,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  HardHat,
  FolderKanban,
  Trash2,
  Sparkles,
  Layers
} from 'lucide-react';

export type GalleryTab = 'ALL' | 'FACILITIES' | 'CONSTRUCTION' | 'CONSULTANCY';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'FACILITIES' | 'CONSTRUCTION' | 'CONSULTANCY';
  categoryLabel: string;
  image: string;
  value?: string;
  location?: string;
  year?: string;
  description?: string;
  isUserUploaded?: boolean;
}

export interface EurekaGalleryPageProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

const LOCAL_STORAGE_KEY = 'eureka_gallery_user_uploads_v2';

// Utility to format bytes
function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Client-side Canvas image optimizer and minifier
async function optimizeAndMinifyImage(
  file: File,
  maxWidth = 1600,
  maxHeight = 1200,
  quality = 0.82
): Promise<{
  dataUrl: string;
  originalSize: number;
  optimizedSize: number;
  savedPercent: number;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = () => reject(new Error('Failed to process image'));
      img.onload = () => {
        let { width, height } = img;

        // Smart downscaling while preserving aspect ratio
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          const rawUrl = e.target?.result as string;
          return resolve({
            dataUrl: rawUrl,
            originalSize: file.size,
            optimizedSize: file.size,
            savedPercent: 0
          });
        }

        // High quality bicubic resampling
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to WebP if browser supports, fallback to JPEG
        let mimeType = 'image/jpeg';
        try {
          if (canvas.toDataURL('image/webp').startsWith('data:image/webp')) {
            mimeType = 'image/webp';
          }
        } catch {
          mimeType = 'image/jpeg';
        }

        const dataUrl = canvas.toDataURL(mimeType, quality);
        const stringLength = dataUrl.length - dataUrl.indexOf(',') - 1;
        const optimizedSize = Math.round((stringLength * 3) / 4);
        const savedPercent = Math.max(0, Math.round(((file.size - optimizedSize) / file.size) * 100));

        resolve({
          dataUrl,
          originalSize: file.size,
          optimizedSize,
          savedPercent
        });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
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
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(getStaticGalleryItems);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Upload Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<'FACILITIES' | 'CONSTRUCTION' | 'CONSULTANCY'>('FACILITIES');
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationStats, setOptimizationStats] = useState<{
    originalSize: string;
    optimizedSize: string;
    savedPercent: number;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user uploads from localStorage on mount (checks both current and previous storage keys)
  useEffect(() => {
    try {
      const staticItems = getStaticGalleryItems();
      const v2 = localStorage.getItem(LOCAL_STORAGE_KEY);
      const v1 = localStorage.getItem('eureka_gallery_uploaded_items_v1');
      const raw = v2 || v1;
      if (raw) {
        const parsed: any[] = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter to user-uploaded items and normalize category
          const userItems: GalleryItem[] = parsed
            .filter((item) => item.isUserUploaded || item.id?.startsWith('user-upload-'))
            .map((item) => ({
              ...item,
              category: item.category === 'PROJECTS' ? 'CONSULTANCY' : item.category,
              categoryLabel: item.category === 'PROJECTS' ? 'Consultancy' : item.categoryLabel
            }));
          if (userItems.length > 0) {
            setGalleryItems([...userItems, ...staticItems]);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userItems));
          } else {
            setGalleryItems(staticItems);
          }
        }
      } else {
        setGalleryItems(staticItems);
      }
    } catch (e) {
      console.warn('Could not load stored gallery items', e);
    }
  }, []);

  const handleNav = (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => {
    onNavigate?.(page, subcategory);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle image file selection with instant auto-optimization & minification
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a valid image file (PNG, JPG, JPEG, WEBP).');
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setUploadError('Image size exceeds 25MB. Please select a smaller photo.');
      return;
    }

    setUploadError(null);
    setIsOptimizing(true);
    setOptimizationStats(null);

    try {
      // Auto-optimize & minify file on client side
      const result = await optimizeAndMinifyImage(file, 1600, 1200, 0.82);
      setUploadPreview(result.dataUrl);
      setOptimizationStats({
        originalSize: formatBytes(result.originalSize),
        optimizedSize: formatBytes(result.optimizedSize),
        savedPercent: result.savedPercent
      });
    } catch (err: any) {
      setUploadError(err?.message || 'Error optimizing image. Please try another file.');
    } finally {
      setIsOptimizing(false);
    }
  };

  // Submit new photo to gallery
  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadPreview) {
      setUploadError('Please select or drop an image file.');
      return;
    }

    const categoryLabels = {
      FACILITIES: 'Facilities',
      CONSTRUCTION: 'Construction',
      CONSULTANCY: 'Consultancy'
    };

    const newItem: GalleryItem = {
      id: `user-upload-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      title: uploadTitle.trim() || `${categoryLabels[uploadCategory]} Milestone`,
      category: uploadCategory,
      categoryLabel: categoryLabels[uploadCategory],
      image: uploadPreview,
      year: new Date().getFullYear().toString(),
      isUserUploaded: true
    };

    const updatedList = [newItem, ...galleryItems];
    setGalleryItems(updatedList);

    // Persist in localStorage
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }

    // Reset Form & Close Modal
    setUploadTitle('');
    setUploadPreview(null);
    setUploadError(null);
    setOptimizationStats(null);
    setIsUploadModalOpen(false);
  };

  // Delete an uploaded image
  const handleDeleteUploadedItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updatedList = galleryItems.filter((item) => item.id !== id);
    setGalleryItems(updatedList);

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedList));
    } catch (err) {
      console.warn('Could not update storage', err);
    }

    if (selectedPhoto?.id === id) {
      setSelectedPhoto(null);
    }
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
              Visual photographic record of our completed and active project milestones.
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
                  placeholder="Search title..."
                  className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery Grid / Empty State */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {galleryItems.length === 0 ? (
          /* Empty Gallery State */
          <div className="bg-white rounded-2xl p-10 sm:p-14 text-center border-2 border-dashed border-slate-300 max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">
                Gallery is ready for your project images
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Click below to upload and auto-optimize your project photographs. Images are organized under the 4 category tabs: <strong>ALL</strong>, <strong>FACILITIES</strong>, <strong>CONSTRUCTION</strong>, and <strong>CONSULTANCY</strong>.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>UPLOAD YOUR FIRST PHOTO</span>
              </button>
            </div>
          </div>
        ) : filteredItems.length === 0 ? (
          /* Search / Tab Filter with no matches */
          <div className="bg-white rounded-xl p-10 text-center border border-slate-200 text-slate-500 max-w-md mx-auto space-y-3">
            <Filter className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">No matching images</h3>
            <p className="text-xs text-slate-500">
              No photos found for &quot;{searchQuery}&quot; under the {activeTab} tab.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => {
                  setActiveTab('ALL');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Now</span>
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
                    <button
                      onClick={(e) => handleDeleteUploadedItem(item.id, e)}
                      className="p-1 rounded bg-black/70 hover:bg-red-700 text-white transition-colors cursor-pointer"
                      title="Remove image"
                      aria-label="Delete image"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
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

      {/* 5. Upload Image Modal with Auto-Minify */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="bg-[#09132e] text-white px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-red-400" />
                  <h3 className="text-base font-black tracking-tight text-white">
                    Upload Project Photograph
                  </h3>
                </div>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Upload Form */}
              <form onSubmit={handleAddPhotoSubmit} className="p-6 space-y-4">
                {uploadError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
                    {uploadError}
                  </div>
                )}

                {/* File Dropzone / Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800">
                    Image File <span className="text-red-500">*</span>
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                      uploadPreview
                        ? 'border-emerald-500 bg-emerald-50/20'
                        : 'border-slate-300 hover:border-red-500 bg-slate-50 hover:bg-red-50/20'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {isOptimizing ? (
                      <div className="py-8 space-y-3">
                        <div className="w-8 h-8 border-3 border-red-600 border-t-transparent rounded-full animate-spin mx-auto" />
                        <div className="text-xs font-bold text-slate-800">
                          Optimizing &amp; minifying image for faster upload...
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Downscaling resolution &amp; applying WebP/JPEG compression
                        </div>
                      </div>
                    ) : uploadPreview ? (
                      <div className="space-y-3">
                        <div className="relative max-h-48 rounded-lg overflow-hidden border border-slate-200 inline-block">
                          <img
                            src={uploadPreview}
                            alt="Upload preview"
                            className="max-h-48 w-auto object-cover mx-auto"
                          />
                        </div>

                        {optimizationStats && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>
                              Minified: {optimizationStats.originalSize} &rarr; {optimizationStats.optimizedSize} ({optimizationStats.savedPercent}% smaller)
                            </span>
                          </div>
                        )}

                        <div className="text-xs font-bold text-emerald-700 flex items-center justify-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Image ready for instant upload! Click to change.</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-white rounded-full shadow-xs flex items-center justify-center mx-auto text-slate-400">
                          <ImageIcon className="w-6 h-6 text-red-500" />
                        </div>
                        <div className="text-xs font-bold text-slate-700">
                          Click to browse or drop your project image
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Auto-optimized &amp; minified on upload &bull; Supports PNG, JPG, JPEG, WEBP (up to 25MB)
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Category Selection (3 Target Categories) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-800">
                    Target Category <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { key: 'FACILITIES', label: 'Facilities', icon: Building2 },
                      { key: 'CONSTRUCTION', label: 'Construction', icon: HardHat },
                      { key: 'CONSULTANCY', label: 'Consultancy', icon: FolderKanban }
                    ].map((cat) => {
                      const Icon = cat.icon;
                      const isSel = uploadCategory === cat.key;
                      return (
                        <button
                          key={cat.key}
                          type="button"
                          onClick={() => setUploadCategory(cat.key as any)}
                          className={`p-2.5 rounded-lg border text-xs font-bold flex flex-col items-center gap-1 transition-all cursor-pointer ${
                            isSel
                              ? 'border-red-600 bg-red-50/60 text-red-700 shadow-xs'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSel ? 'text-red-600' : 'text-slate-500'}`} />
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>ADD TO GALLERY</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Clean Lightbox Modal */}
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
                      className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800"
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

      {/* 7. Bottom CTA */}
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

      {/* 8. Footer */}
      <EurekaFooter currentPage="gallery" onNavigate={onNavigate} />
    </div>
  );
};
