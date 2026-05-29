import { NextRequest } from "next/server";
import { createSponsorshipInquirySchema } from "@/schemas/sponsorshipInquiry.schema";
import { sponsorshipInquiryService } from "@/services/sponsorshipInquiryService";
import { successResponse, errorResponse } from "@/utils/response";
import { Errors } from "@/utils/errors";
import { rateLimit } from "@/lib/rateLimit";

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]!.trim();
  const xreal = req.headers.get("x-real-ip");
  if (xreal) return xreal.trim();
  return "anon";
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const userAgent = req.headers.get("user-agent") ?? undefined;

    const limit = rateLimit({
      key: `sponsorship-inquiry:${ip}`,
      limit: LIMIT,
      windowMs: WINDOW_MS,
    });
    if (!limit.ok) throw Errors.rateLimited();

    const body = createSponsorshipInquirySchema.parse(await req.json());

    // Honeypot: silently succeed for bots so they don't retry. The Zod schema
    // already enforces empty, but defense in depth — if a request somehow
    // arrives with a non-empty website field we pretend it worked.
    if (body.website && body.website.length > 0) {
      return successResponse({ id: "noop", createdAt: new Date() }, 201);
    }

    const result = await sponsorshipInquiryService.create({
      name: body.name,
      company: body.company,
      email: body.email,
      message: body.message,
      ip,
      userAgent,
    });

    return successResponse(result, 201);
  } catch (err) {
    return errorResponse(err);
  }
}
