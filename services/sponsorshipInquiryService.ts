import { connectDB } from "@/lib/db";
import { SponsorshipInquiry } from "@/models/SponsorshipInquiry";
import { sendMail } from "@/lib/mailer";
import {
  buildConfirmationEmail,
  buildInternalAlertEmail,
} from "@/lib/emailTemplates";

interface CreateOptions {
  name: string;
  company: string;
  email: string;
  message: string;
  ip?: string;
  userAgent?: string;
}

export const sponsorshipInquiryService = {
  async create(input: CreateOptions) {
    await connectDB();

    const doc = await SponsorshipInquiry.create({
      name: input.name,
      company: input.company,
      email: input.email,
      message: input.message,
      ip: input.ip,
      userAgent: input.userAgent,
    });

    const id = String(doc._id);
    const to = process.env.SMTP_TO_INQUIRIES ?? process.env.SMTP_USER ?? "";

    const alert = buildInternalAlertEmail({
      id,
      name: input.name,
      company: input.company,
      email: input.email,
      message: input.message,
      ip: input.ip,
      receivedAt: doc.createdAt,
    });
    const confirm = buildConfirmationEmail({
      name: input.name,
      message: input.message,
    });

    const results = await Promise.allSettled([
      to
        ? sendMail({
            to,
            subject: alert.subject,
            text: alert.text,
            html: alert.html,
            replyTo: input.email,
          })
        : Promise.reject(new Error("SMTP_TO_INQUIRIES not configured")),
      sendMail({
        to: input.email,
        subject: confirm.subject,
        text: confirm.text,
        html: confirm.html,
      }),
    ]);

    const internalAlertFailed = results[0].status === "rejected";
    const confirmationFailed = results[1].status === "rejected";

    if (internalAlertFailed) {
      console.error("[SponsorshipInquiry] Internal alert email failed:", (results[0] as PromiseRejectedResult).reason);
    }
    if (confirmationFailed) {
      console.error("[SponsorshipInquiry] Confirmation email failed:", (results[1] as PromiseRejectedResult).reason);
    }

    return {
      id,
      createdAt: doc.createdAt,
      internalAlertSent: !internalAlertFailed,
      confirmationSent: !confirmationFailed,
    };
  },
};
