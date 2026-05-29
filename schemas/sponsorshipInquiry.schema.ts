import { z } from "zod";

export const createSponsorshipInquirySchema = z.object({
  name: z
    .string({ error: "Name is required." })
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(120, "Name is too long."),
  company: z
    .string({ error: "Company is required." })
    .trim()
    .min(1, "Company is required.")
    .max(160, "Company name is too long."),
  email: z
    .string({ error: "Email is required." })
    .email("Please enter a valid email address.")
    .toLowerCase()
    .trim(),
  message: z
    .string({ error: "Message is required." })
    .trim()
    .min(10, "Tell us a bit more — at least 10 characters.")
    .max(2000, "Message is too long (2000 char limit)."),
  // Honeypot: must be empty. Real users will never fill this; bots usually will.
  website: z.string().max(0, "Spam check failed.").optional().default(""),
});

export type CreateSponsorshipInquiryInput = z.infer<typeof createSponsorshipInquirySchema>;
