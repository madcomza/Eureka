import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AntiSpamState } from '../utils/antiSpam';

interface AntiSpamShieldProps {
  state: AntiSpamState;
  onChange: (updater: (prev: AntiSpamState) => AntiSpamState) => void;
  dark?: boolean;
}

export const AntiSpamShield: React.FC<AntiSpamShieldProps> = ({ state, onChange, dark = false }) => {
  const toggleHuman = () => {
    onChange((prev) => ({
      ...prev,
      isVerifiedHuman: !prev.isVerifiedHuman
    }));
  };

  return (
    <div className="w-full select-none pt-1">
      {/* Invisible Honeypot Trap Fields - hidden from real humans, attractive to web bots */}
      <div
        aria-hidden="true"
        style={{
          display: 'none',
          position: 'absolute',
          left: '-9999px',
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none'
        }}
      >
        <label htmlFor="website_url_hp">Do not fill this field</label>
        <input
          id="website_url_hp"
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          value={state.honeypot}
          onChange={(e) =>
            onChange((prev) => ({
              ...prev,
              honeypot: e.target.value
            }))
          }
        />
        <label htmlFor="company_fax_hp">Secondary trap</label>
        <input
          id="company_fax_hp"
          type="text"
          name="company_fax_number"
          tabIndex={-1}
          autoComplete="off"
          value={state.honeypotFax}
          onChange={(e) =>
            onChange((prev) => ({
              ...prev,
              honeypotFax: e.target.value
            }))
          }
        />
      </div>

      {/* Visible Interactive Anti-Spam Human Verification Box */}
      <div
        onClick={toggleHuman}
        role="checkbox"
        aria-checked={state.isVerifiedHuman}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggleHuman();
          }
        }}
        className={`w-full p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
          state.isVerifiedHuman
            ? dark
              ? 'bg-emerald-950/40 border-emerald-500/60 shadow-xs'
              : 'bg-emerald-50/70 border-emerald-500 shadow-xs'
            : dark
            ? 'bg-slate-800/80 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
            : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div
            className={`w-5 h-5 rounded-md flex items-center justify-center transition-all ${
              state.isVerifiedHuman
                ? 'bg-emerald-600 text-white'
                : dark
                ? 'border border-slate-500 bg-slate-700/80'
                : 'border border-slate-300 bg-white'
            }`}
          >
            {state.isVerifiedHuman && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
          </div>

          <div className="text-left">
            <div
              className={`text-xs font-bold leading-tight ${
                state.isVerifiedHuman
                  ? dark
                    ? 'text-emerald-300'
                    : 'text-emerald-800'
                  : dark
                  ? 'text-slate-200'
                  : 'text-slate-700'
              }`}
            >
              {state.isVerifiedHuman ? 'Verified Human &bull; Spam Guard Active' : 'I am human / Not a robot'}
            </div>
            <div
              className={`text-[10px] leading-tight ${
                dark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Anti-bot security verification
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <ShieldCheck
            className={`w-4 h-4 transition-colors ${
              state.isVerifiedHuman
                ? 'text-emerald-600'
                : dark
                ? 'text-slate-400'
                : 'text-slate-400'
            }`}
          />
          <span
            className={`text-[10px] font-bold tracking-wider uppercase hidden sm:inline ${
              dark ? 'text-slate-400' : 'text-slate-400'
            }`}
          >
            Protected
          </span>
        </div>
      </div>
    </div>
  );
};
