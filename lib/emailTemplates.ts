// Email HTML/text builders.
//
// Notes on the HTML:
// - Tables for layout — divs and flexbox are unreliable in Outlook.
// - Inline styles only — most email clients strip <style> blocks.
// - Max 600px wrapper centered with a fluid responsive collapse via "%".
// - Background gradient on the brand header (modern clients show it; Outlook
//   falls back to the bgcolor attribute on the same cell).
// - Hidden preheader sets the inbox preview line that sits next to the subject.

const SITE_URL = "https://compilertech.org";

const PALETTE = {
  bgPage:      "#f5f3ff",   // soft lilac page background
  bgCard:      "#ffffff",
  textBody:    "#1c1c20",
  textMuted:   "#5b5b66",
  borderSoft:  "#ececf2",
  quoteBg:     "#fff9f1",
  quoteAccent: "#ff8855",
  headerFlat:  "#ff5c4d",   // Outlook fallback for the gradient
  link:        "#ff5c4d",
};

const FONT_STACK =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(s: string) {
  return escapeHtml(s).replace(/\r?\n/g, "<br>");
}

interface ShellOptions {
  preheader: string;
  headerLabel: string;
  bodyHtml: string;
}

/** Wrap content in the branded outer shell — header band, card, footer. */
function buildShell({ preheader, headerLabel, bodyHtml }: ShellOptions) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>IICT 2026</title>
</head>
<body style="margin:0;padding:0;width:100%;background-color:${PALETTE.bgPage};font-family:${FONT_STACK};-webkit-font-smoothing:antialiased;">
  <!-- preheader -->
  <div style="display:none;font-size:1px;color:${PALETTE.bgPage};line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:${PALETTE.bgPage};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-collapse:separate;">
          <!-- header band -->
          <tr>
            <td bgcolor="${PALETTE.headerFlat}" style="background-color:${PALETTE.headerFlat};background-image:linear-gradient(95deg,#ff2d8e 0%,#ff5c4d 50%,#ff9a3c 100%);border-radius:14px 14px 0 0;padding:18px 28px;">
              <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="color:#ffffff;font-family:${FONT_STACK};font-size:18px;font-weight:700;letter-spacing:-0.01em;">
                    IICT 2026
                  </td>
                  <td align="right" style="color:rgba(255,255,255,0.85);font-family:${FONT_STACK};font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;">
                    ${escapeHtml(headerLabel)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- body card -->
          <tr>
            <td bgcolor="${PALETTE.bgCard}" style="background-color:${PALETTE.bgCard};padding:32px 28px;border-left:1px solid ${PALETTE.borderSoft};border-right:1px solid ${PALETTE.borderSoft};border-bottom:1px solid ${PALETTE.borderSoft};border-radius:0 0 14px 14px;color:${PALETTE.textBody};font-family:${FONT_STACK};font-size:15px;line-height:1.6;">
              ${bodyHtml}
            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td align="center" style="padding:18px 28px 0;color:${PALETTE.textMuted};font-family:${FONT_STACK};font-size:12px;line-height:1.6;">
              <a href="${SITE_URL}" style="color:${PALETTE.textMuted};text-decoration:none;">compilertech.org</a>
              &middot; A compiler workshop bridging academia and industry
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

interface ConfirmationData {
  name: string;
  message: string;
}

export function buildConfirmationEmail(input: ConfirmationData) {
  const firstName = input.name.trim().split(/\s+/)[0] ?? input.name;

  const subject = "We got your IICT 2026 sponsorship inquiry";
  const preheader =
    "Thanks for reaching out — the team will be in touch within a few working days.";

  const bodyHtml = `
    <h1 style="margin:0 0 14px;font-family:${FONT_STACK};font-size:22px;font-weight:700;line-height:1.3;letter-spacing:-0.01em;color:${PALETTE.textBody};">
      Hi ${escapeHtml(firstName)} &mdash; we got it.
    </h1>
    <p style="margin:0 0 14px;font-family:${FONT_STACK};font-size:15px;line-height:1.65;color:${PALETTE.textBody};">
      Thanks for reaching out about sponsoring <strong>IICT 2026</strong>. Your inquiry is in our
      inbox and the team will get back to you within a few working days.
    </p>

    <p style="margin:18px 0 8px;font-family:${FONT_STACK};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${PALETTE.textMuted};">
      For your reference
    </p>
    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">
      <tr>
        <td style="background-color:${PALETTE.quoteBg};border-left:3px solid ${PALETTE.quoteAccent};border-radius:0 6px 6px 0;padding:14px 16px;font-family:${FONT_STACK};font-size:14px;line-height:1.6;color:${PALETTE.textBody};">
          ${nl2br(input.message)}
        </td>
      </tr>
    </table>

    <p style="margin:0 0 22px;font-family:${FONT_STACK};font-size:14px;line-height:1.6;color:${PALETTE.textBody};">
      If anything looks off, or you'd like to add more context, just reply to this email &mdash;
      it lands with the IICT team directly.
    </p>

    <p style="margin:24px 0 0;font-family:${FONT_STACK};font-size:14px;line-height:1.6;color:${PALETTE.textBody};">
      Talk soon,<br>
      <strong>The IICT 2026 team</strong>
    </p>
  `;

  const html = buildShell({
    preheader,
    headerLabel: "Sponsorship inquiry",
    bodyHtml,
  });

  const text = [
    `Hi ${firstName} — we got it.`,
    ``,
    `Thanks for reaching out about sponsoring IICT 2026. Your inquiry is in our inbox and the team will get back to you within a few working days.`,
    ``,
    `For your reference:`,
    input.message,
    ``,
    `If anything looks off, or you'd like to add more context, just reply to this email — it lands with the IICT team directly.`,
    ``,
    `Talk soon,`,
    `The IICT 2026 team`,
    SITE_URL,
  ].join("\n");

  return { subject, html, text };
}

interface InternalAlertData {
  id: string;
  name: string;
  company: string;
  email: string;
  message: string;
  ip?: string;
  receivedAt?: Date;
}

export function buildInternalAlertEmail(input: InternalAlertData) {
  const subject = `New sponsorship inquiry — ${input.company} (${input.name})`;
  const preheader = `${input.name} from ${input.company}: ${input.message.slice(0, 100)}`;
  const received = input.receivedAt ?? new Date();

  const row = (label: string, value: string, isLink = false) => `
    <tr>
      <td style="padding:8px 16px 8px 0;font-family:${FONT_STACK};font-size:12px;letter-spacing:0.04em;color:${PALETTE.textMuted};text-transform:uppercase;font-weight:600;white-space:nowrap;vertical-align:top;width:96px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:8px 0;font-family:${FONT_STACK};font-size:14px;color:${PALETTE.textBody};line-height:1.5;word-break:break-word;">
        ${isLink ? value : escapeHtml(value)}
      </td>
    </tr>
  `;

  const emailLink = `<a href="mailto:${encodeURIComponent(input.email)}" style="color:${PALETTE.link};text-decoration:none;">${escapeHtml(input.email)}</a>`;

  const bodyHtml = `
    <h1 style="margin:0 0 6px;font-family:${FONT_STACK};font-size:22px;font-weight:700;line-height:1.3;letter-spacing:-0.01em;color:${PALETTE.textBody};">
      New sponsorship inquiry
    </h1>
    <p style="margin:0 0 22px;font-family:${FONT_STACK};font-size:13px;color:${PALETTE.textMuted};">
      Received ${escapeHtml(received.toUTCString())}
    </p>

    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="border-top:1px solid ${PALETTE.borderSoft};border-bottom:1px solid ${PALETTE.borderSoft};margin:0 0 22px;">
      ${row("Name",    input.name)}
      ${row("Company", input.company)}
      ${row("Email",   emailLink, true)}
      ${row("IP",      input.ip ?? "—")}
    </table>

    <p style="margin:0 0 8px;font-family:${FONT_STACK};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${PALETTE.textMuted};">
      Message
    </p>
    <table role="presentation" width="100%" border="0" cellpadding="0" cellspacing="0" style="margin:0 0 22px;">
      <tr>
        <td style="background-color:${PALETTE.quoteBg};border-left:3px solid ${PALETTE.quoteAccent};border-radius:0 6px 6px 0;padding:14px 16px;font-family:${FONT_STACK};font-size:14px;line-height:1.6;color:${PALETTE.textBody};">
          ${nl2br(input.message)}
        </td>
      </tr>
    </table>

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:8px 0 0;">
      <tr>
        <td bgcolor="${PALETTE.headerFlat}" style="background-color:${PALETTE.headerFlat};background-image:linear-gradient(95deg,#ff2d8e 0%,#ff5c4d 50%,#ff9a3c 100%);border-radius:999px;">
          <a href="mailto:${encodeURIComponent(input.email)}" style="display:inline-block;padding:10px 22px;font-family:${FONT_STACK};font-size:13px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.02em;">
            Reply to ${escapeHtml(input.name)} &rarr;
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:26px 0 0;font-family:${FONT_STACK};font-size:11px;color:${PALETTE.textMuted};letter-spacing:0.04em;">
      Inquiry ID · ${escapeHtml(input.id)}
    </p>
  `;

  const html = buildShell({
    preheader,
    headerLabel: "New sponsorship inquiry",
    bodyHtml,
  });

  const text = [
    `New sponsorship inquiry — IICT 2026`,
    `Received ${received.toUTCString()}`,
    ``,
    `Name:    ${input.name}`,
    `Company: ${input.company}`,
    `Email:   ${input.email}`,
    `IP:      ${input.ip ?? "—"}`,
    ``,
    `Message:`,
    input.message,
    ``,
    `Reply: mailto:${input.email}`,
    `Inquiry ID: ${input.id}`,
  ].join("\n");

  return { subject, html, text };
}
