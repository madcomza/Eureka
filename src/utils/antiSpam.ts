/**
 * Eureka Facilities Management Solutions - Anti-Bot & Spam Defense Suite
 * Multi-layer protection guarding against automated form scrapers, headless bots, and spam floods.
 */

export interface AntiSpamState {
  honeypot: string;           // Invisible trap field for bots
  honeypotFax: string;        // Secondary trap field
  formRenderTime: number;     // Timestamp when form was loaded
  isVerifiedHuman: boolean;   // Interactive 1-click human verification
  lastSubmitTime: number;     // Cooldown tracker
}

const MINIMUM_SUBMISSION_TIME_MS = 2500; // Real humans take > 2.5s to fill forms
const SUBMISSION_COOLDOWN_MS = 20000;    // 20s cooldown between submissions

let globalLastSubmission = 0;

export function initializeAntiSpam(): AntiSpamState {
  return {
    honeypot: '',
    honeypotFax: '',
    formRenderTime: Date.now(),
    isVerifiedHuman: false,
    lastSubmitTime: 0
  };
}

export function validateHumanSubmission(state: AntiSpamState): {
  isValid: boolean;
  isBot: boolean;
  errorMessage?: string;
} {
  // 1. Honeypot traps: Automated bots fill invisible input fields
  if (state.honeypot && state.honeypot.trim().length > 0) {
    return {
      isValid: false,
      isBot: true,
      errorMessage: 'Automated submission detected.'
    };
  }
  if (state.honeypotFax && state.honeypotFax.trim().length > 0) {
    return {
      isValid: false,
      isBot: true,
      errorMessage: 'Automated submission detected.'
    };
  }

  // 2. Velocity check: Headless bots post within milliseconds of page render
  const elapsed = Date.now() - state.formRenderTime;
  if (elapsed < MINIMUM_SUBMISSION_TIME_MS) {
    return {
      isValid: false,
      isBot: true,
      errorMessage: 'Please take a moment to review your details before submitting.'
    };
  }

  // 3. Human verification check
  if (!state.isVerifiedHuman) {
    return {
      isValid: false,
      isBot: false,
      errorMessage: 'Please check the "I am human" verification box to guard against spam.'
    };
  }

  // 4. Rate-limit cooldown to prevent flooding attacks
  const now = Date.now();
  if (now - globalLastSubmission < SUBMISSION_COOLDOWN_MS) {
    const remainingSeconds = Math.ceil((SUBMISSION_COOLDOWN_MS - (now - globalLastSubmission)) / 1000);
    return {
      isValid: false,
      isBot: false,
      errorMessage: `Please wait ${remainingSeconds} seconds before submitting another inquiry.`
    };
  }

  globalLastSubmission = now;
  return { isValid: true, isBot: false };
}
