import { connectDB } from "@/lib/db";
import { SponsorshipInquiry } from "@/models/SponsorshipInquiry";
import { sendMail } from "@/lib/mailer";

interface CreateOptions {
  name: string;
  company: string;
  email: string;
  message: string;
  ip?: string;
  userAgent?: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildInternalAlert(input: CreateOptions, id: string) {
  const text = [
    `New sponsorship inquiry — IICT 2026`,
    ``,
    `Name:    ${input.name}`,
    `Company: ${input.company}`,
    `Email:   ${input.email}`,
    `IP:      ${input.ip ?? "—"}`,
    ``,
    `Message:`,
    input.message,
    ``,
    `—`,
    `Inquiry ID: ${id}`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.55;color:#0a0a0c;">
      <h2 style="margin:0 0 12px;font-size:18px;">New sponsorship inquiry — IICT 2026</h2>
      <table style="border-collapse:collapse;margin:0 0 16px;">
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Name</td><td style="padding:4px 0;"><strong>${escapeHtml(input.name)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Company</td><td style="padding:4px 0;"><strong>${escapeHtml(input.company)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">Email</td><td style="padding:4px 0;"><a href="mailto:${encodeURIComponent(input.email)}">${escapeHtml(input.email)}</a></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666;">IP</td><td style="padding:4px 0;">${escapeHtml(input.ip ?? "—")}</td></tr>
      </table>
      <div style="margin:0 0 6px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Message</div>
      <div style="white-space:pre-wrap;border-left:3px solid #ff8855;padding:6px 0 6px 12px;background:#fafafa;border-radius:4px;">${escapeHtml(input.message)}</div>
      <div style="margin-top:18px;color:#999;font-size:11px;">Inquiry ID: ${id}</div>
    </div>
  `;

  return { text, html };
}

function buildConfirmation(input: CreateOptions) {
  const text = [
    `Hi ${input.name},`,
    ``,
    `Thanks for reaching out about sponsoring IICT 2026. We've received your inquiry and the team will be in touch within a few working days.`,
    ``,
    `For reference, this is what you sent us:`,
    ``,
    input.message,
    ``,
    `If anything in the above is wrong or you'd like to add context, just reply to this email.`,
    ``,
    `— The IICT 2026 team`,
    `compilertech.org`,
  ].join("\n");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;color:#0a0a0c;max-width:560px;">
      <p style="margin:0 0 14px;">Hi ${escapeHtml(input.name)},</p>
      <p style="margin:0 0 14px;">Thanks for reaching out about sponsoring <strong>IICT 2026</strong>. We've received your inquiry and the team will be in touch within a few working days.</p>
      <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">For your reference</p>
      <div style="white-space:pre-wrap;border-left:3px solid #ff8855;padding:8px 12px;background:#fafafa;border-radius:4px;margin-bottom:14px;">${escapeHtml(input.message)}</div>
      <p style="margin:0 0 14px;">If anything in the above is wrong or you'd like to add context, just reply to this email.</p>
      <p style="margin:18px 0 0;color:#888;">— The IICT 2026 team<br/><a href="https://compilertech.org" style="color:#ff5c4d;">compilertech.org</a></p>
    </div>
  `;

  return { text, html };
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

    // Send both emails in parallel. Internal alert is the one that matters
    // most; if it fails we still surface a soft warning to the client but
    // the inquiry is already in the DB.
    const alert = buildInternalAlert(input, id);
    const confirm = buildConfirmation(input);

    const results = await Promise.allSettled([
      to
        ? sendMail({
            to,
            subject: `Sponsorship inquiry — ${input.company} (${input.name})`,
            text: alert.text,
            html: alert.html,
            replyTo: input.email,
          })
        : Promise.reject(new Error("SMTP_TO_INQUIRIES not configured")),
      sendMail({
        to: input.email,
        subject: "We got your IICT 2026 sponsorship inquiry",
        text: confirm.text,
        html: confirm.html,
      }),
    ]);

    const alertResult = results[0];
    const confirmResult = results[1];

    const internalAlertFailed = alertResult.status === "rejected";
    const confirmationFailed = confirmResult.status === "rejected";

    if (internalAlertFailed) {
      console.error("[SponsorshipInquiry] Internal alert email failed:", alertResult.reason);
    }
    if (confirmationFailed) {
      console.error("[SponsorshipInquiry] Confirmation email failed:", confirmResult.reason);
    }

    return {
      id,
      createdAt: doc.createdAt,
      internalAlertSent: !internalAlertFailed,
      confirmationSent: !confirmationFailed,
    };
  },
};
