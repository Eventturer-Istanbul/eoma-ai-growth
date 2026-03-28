const BASE_URL = "https://jkoqttcselznnnuljfxf.supabase.co/functions/v1";
const ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imprb3F0dGNzZWx6bm5udWxqZnhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1Mjk3MjQsImV4cCI6MjA3NTEwNTcyNH0.VB95wx8_iW71skpLwBdmxRvfBWcG4bXAQP0R92jkOLo";

const headers = {
  "Content-Type": "application/json",
  apikey: ANON_KEY,
};

export interface AvailableSlotsResponse {
  slots: string[];
  timezone: string;
}

export interface BookDemoPayload {
  email: string;
  name: string;
  scheduled_at: string;
  timezone: string;
}

export interface BookDemoResponse {
  success: boolean;
  appointment_id?: string;
  email_sent?: boolean;
  error?: string;
}

export async function fetchAvailableSlots(
  from?: string,
  days = 14,
): Promise<AvailableSlotsResponse> {
  const params = new URLSearchParams({ days: String(days) });
  if (from) params.set("from", from);

  const resp = await fetch(`${BASE_URL}/available-slots?${params}`, {
    headers,
  });

  if (!resp.ok) {
    const body = await resp.json().catch(() => ({}));
    throw new Error(body.error || "Failed to fetch available slots");
  }

  return resp.json();
}

export async function bookDemo(
  payload: BookDemoPayload,
): Promise<BookDemoResponse> {
  const resp = await fetch(`${BASE_URL}/book-demo`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  const body = await resp.json();

  if (!resp.ok) {
    throw new Error(body.error || "Failed to book demo");
  }

  return body;
}
