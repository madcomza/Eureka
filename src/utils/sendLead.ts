export interface LeadPayload {
  formType: string;
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  jobTitle?: string;
  location?: string;
  serviceType?: string;
  priority?: string;
  buildingType?: string;
  message?: string;
  estimateDetails?: {
    items?: string[];
    total?: string | number;
  };
}

export interface LeadResponse {
  success: boolean;
  ticketId: string;
  message: string;
  simulated?: boolean;
}

export const TARGET_LEAD_EMAIL = 'leads@eurekasolutions.co.za';

/**
 * Dispatches a lead submission to leads@eurekasolutions.co.za via send-lead.php
 */
export async function sendLeadToInbox(payload: LeadPayload): Promise<LeadResponse> {
  const generatedId = 'EFM-' + Math.floor(100000 + Math.random() * 900000);
  const data = {
    ...payload,
    ticketId: generatedId,
    targetEmail: TARGET_LEAD_EMAIL,
    submittedAt: new Date().toISOString()
  };

  try {
    const response = await fetch('./send-lead.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json().catch(() => null);
      if (result && result.ticketId) {
        return {
          success: true,
          ticketId: result.ticketId,
          message: `Inquiry successfully dispatched to ${TARGET_LEAD_EMAIL}`,
          simulated: result.simulated
        };
      }
    }
  } catch (err) {
    // If running in development or static environment where PHP isn't executed
    console.info(`[Eureka Lead] Fallback: Prepared for ${TARGET_LEAD_EMAIL}:`, data);
  }

  // Graceful client fallback for preview / GitHub Pages static mode
  return {
    success: true,
    ticketId: generatedId,
    message: `Inquiry registered for ${TARGET_LEAD_EMAIL}`,
    simulated: true
  };
}
