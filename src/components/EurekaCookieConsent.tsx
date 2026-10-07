import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, ShieldCheck, Check, Settings, X, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { NavPage } from './EurekaHeader';

export interface EurekaCookieConsentProps {
  onNavigate?: (page: NavPage, subcategory?: 'all' | 'facilities' | 'construction' | 'consultancy') => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'efms_cookie_consent_v1';

export const EurekaCookieConsent: React.FC<EurekaCookieConsentProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if consent has already been granted or customized
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Delay slightly for graceful entrance after initial page paint
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(stored);
        applyGtagConsent(parsed.analytics);
      } catch {
        setIsVisible(true);
      }
    }

    const handleReopen = () => {
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => {
      window.removeEventListener('open-cookie-preferences', handleReopen);
    };
  }, []);

  const applyGtagConsent = (granted: boolean) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
  };

  const handleAcceptAll = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    applyGtagConsent(true);
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    applyGtagConsent(false);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const prefs: CookiePreferences = {
      essential: true,
      analytics: analyticsEnabled,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    applyGtagConsent(analyticsEnabled);
    setIsVisible(false);
  };

  const handleOpenPrivacy = () => {
    onNavigate?.('privacy-policy');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="cookie-banner"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[440px] pointer-events-auto"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie and Privacy Consent"
        >
          <div className="bg-[#07132c]/95 backdrop-blur-md text-white rounded-2xl border border-slate-700/80 shadow-2xl shadow-black/50 p-5 overflow-hidden relative">
            {/* Top decorative accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 pt-1 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                    Cookie &amp; Privacy Notice
                  </h3>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    POPIA &bull; Google Tag Ready
                  </span>
                </div>
              </div>
              <button
                onClick={handleEssentialOnly}
                aria-label="Dismiss cookie notice"
                className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-300 leading-relaxed mb-3.5">
              We use necessary cookies to ensure our site operates securely. We also utilize aggregated Google Analytics (
              <span className="font-mono text-[11px] text-slate-200 font-medium">G-19WFKYZ43B</span>) to measure engagement and improve our professional facilities and consultancy services.{' '}
              <button
                type="button"
                onClick={handleOpenPrivacy}
                className="text-red-400 hover:text-red-300 underline font-medium inline-flex items-center gap-0.5 ml-0.5"
              >
                Privacy Policy <ExternalLink className="w-3 h-3 inline" />
              </button>
            </p>

            {/* Granular Preferences Accordion */}
            <div className="mb-3.5">
              <button
                type="button"
                onClick={() => setShowPreferences(!showPreferences)}
                className="flex items-center justify-between w-full text-[11px] font-semibold text-slate-300 hover:text-white py-1 px-2 rounded-lg bg-slate-800/60 border border-slate-700/60 transition-colors"
              >
                <span className="flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-slate-400" />
                  Customize Cookie Categories
                </span>
                {showPreferences ? (
                  <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                )}
              </button>

              <AnimatePresence>
                {showPreferences && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden space-y-2 mt-2 pt-1"
                  >
                    {/* Strictly Necessary */}
                    <div className="flex items-start justify-between gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px]">
                      <div>
                        <div className="font-semibold text-white flex items-center gap-1">
                          Strictly Necessary
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                            Always Active
                          </span>
                        </div>
                        <p className="text-slate-400 text-[10px] mt-0.5">
                          Required for security, CSRF defense, spam tokens, and core navigation.
                        </p>
                      </div>
                      <div className="text-emerald-400 mt-1 shrink-0">
                        <Check className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Analytics / Performance */}
                    <div className="flex items-start justify-between gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px]">
                      <div>
                        <div className="font-semibold text-white">
                          Analytics &amp; Performance
                        </div>
                        <p className="text-slate-400 text-[10px] mt-0.5">
                          Anonymized Google Analytics tags to understand visitor interactions.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-1 shrink-0">
                        <input
                          type="checkbox"
                          checked={analyticsEnabled}
                          onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all peer-checked:bg-red-600"></div>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            {showPreferences ? (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-center"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/40 transition-colors text-center"
                >
                  Save Choices
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-center"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/40 transition-colors text-center font-bold"
                >
                  Accept All
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
