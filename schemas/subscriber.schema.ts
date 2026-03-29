import { z } from "zod";

export const createSubscriberSchema = z.object({
  email: z
    .string({ error: "Email is required." })
    .email("Please enter a valid email address.")
    .toLowerCase()
    .trim(),
});

export type CreateSubscriberInput = z.infer<typeof createSubscriberSchema>;
