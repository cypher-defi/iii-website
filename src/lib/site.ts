// Canonical public origin. Mirrors the fallback already used by the API routes
// (NEXT_PUBLIC_BASE_URL || "https://www.iii.cl").
export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.iii.cl"
).replace(/\/+$/, "");

export const SITE_NAME = "Inversiones Industriales Ibarra";
