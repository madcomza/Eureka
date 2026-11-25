/**
 * Eureka Facilities Management Solutions - Google Ads & Analytics Conversion Tracking
 * Dispatches Google Consent Mode v2 compliant events and dataLayer payloads for "Submit lead form"
 */

export interface LeadConversionData {
  formType: string;
  ticketId: string;
  email?: string;
  phone?: string;
  companyName?: string;
  value?: number;
  currency?: string;
}

/**
 * Normalizes South African and international phone numbers for Google Enhanced Conversions (E.164 format)
 */
function normalizePhoneNumber(rawPhone?: string): string | undefined {
  if (!rawPhone) return undefined;
  const cleaned = rawPhone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return '+27' + cleaned.substring(1);
  }
  return cleaned.startsWith('+') ? cleaned : '+' + cleaned;
}

/**
 * Fires Google Ads conversion and GA4 lead generation events
 */
export function trackLeadFormSubmission(data: LeadConversionData): void {
  if (typeof window === 'undefined') return;

  const currency = data.currency || 'ZAR';
  const value = typeof data.value === 'number' && data.value > 0 ? data.value : 1.0;
  const normalizedPhone = normalizePhoneNumber(data.phone);
  const normalizedEmail = data.email ? data.email.trim().toLowerCase() : undefined;

  // Ensure dataLayer exists
  window.dataLayer = window.dataLayer || [];

  // 1. Google Enhanced Conversions user_data configuration (if consented)
  if (normalizedEmail || normalizedPhone) {
    const userData: Record<string, any> = {};
    if (normalizedEmail) userData.email = normalizedEmail;
    if (normalizedPhone) userData.phone_number = normalizedPhone;

    if (typeof (window as any).gtag === 'function') {
      try {
        (window as any).gtag('set', 'user_data', userData);
      } catch (err) {
        console.debug('[Conversion Tracking] Enhanced conversion user_data warning:', err);
      }
    }
  }

  // 2. dataLayer event 'submit_lead_form' (Explicitly matches Google Ads conversion action)
  window.dataLayer.push({
    event: 'submit_lead_form',
    conversion_action: 'Submit lead form',
    form_type: data.formType,
    ticket_id: data.ticketId,
    company_name: data.companyName || '',
    value: value,
    currency: currency,
    timestamp: new Date().toISOString()
  });

  // 3. Standard GA4 recommended 'generate_lead' event
  window.dataLayer.push({
    event: 'generate_lead',
    form_type: data.formType,
    ticket_id: data.ticketId,
    value: value,
    currency: currency
  });

  // 4. Also trigger directly via gtag if available
  if (typeof (window as any).gtag === 'function') {
    try {
      // Primary lead generation event
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead Form',
        event_label: data.formType,
        ticket_id: data.ticketId,
        value: value,
        currency: currency
      });

      // Submit lead form event matching Google Ads action
      (window as any).gtag('event', 'submit_lead_form', {
        event_category: 'Lead Form',
        event_label: data.formType,
        ticket_id: data.ticketId,
        value: value,
        currency: currency
      });

      // Generic conversion trigger
      (window as any).gtag('event', 'conversion', {
        send_to: 'G-19WFKYZ43B',
        event_category: 'Lead',
        event_label: data.formType,
        value: value,
        currency: currency
      });
    } catch (err) {
      console.debug('[Conversion Tracking] gtag event warning:', err);
    }
  }

  // 5. Generic form_submission fallback for GTM triggers
  window.dataLayer.push({
    event: 'form_submission',
    form_id: 'eureka_lead_form',
    form_name: data.formType,
    ticket_id: data.ticketId
  });

  console.info(`[Eureka Analytics] Dispatched "Submit lead form" conversion event for ticket ${data.ticketId}`);
}
