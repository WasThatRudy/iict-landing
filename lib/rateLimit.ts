// Simple in-memory sliding-window rate limiter.
// Per-instance: resets on cold start. For low-volume forms this is enough; if
// the site gets hammered, swap for a Redis-backed implementation.

type Bucket = { count: number; resetAt: number };

let cached = global._rateLimitBuckets as Map<string, Bucket> | undefined;
if (!cached) cached = global._rateLimitBuckets = new Map<string, Bucket>();
const buckets = cached;

const SWEEP_EVERY_MS = 60_000;
let lastSweep = 0;

function sweep(now: number) {
  if (now - lastSweep < SWEEP_EVERY_MS) return;
  for (const [k, b] of buckets) {
    if (b.resetAt <= now) buckets.delete(k);
  }
  lastSweep = now;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  resetAt: number;
}

export interface RateLimitOptions {
  key: string;
  limit: number;
  windowMs: number;
}

export function rateLimit({ key, limit, windowMs }: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    const bucket: Bucket = { count: 1, resetAt: now + windowMs };
    buckets.set(key, bucket);
    return { ok: true, remaining: limit - 1, resetAt: bucket.resetAt };
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, resetAt: existing.resetAt };
  }

  existing.count += 1;
  return { ok: true, remaining: limit - existing.count, resetAt: existing.resetAt };
}
