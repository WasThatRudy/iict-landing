import nodemailer, { Transporter } from "nodemailer";

let cached = global._mailer as { transporter: Transporter | null };
if (!cached) cached = global._mailer = { transporter: null };

function readConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;

  if (!host || !user || !pass || !from) {
    throw new Error(
      "SMTP env vars missing — need SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM."
    );
  }

  return { host, port, user, pass, from };
}

export function getTransporter(): Transporter {
  if (cached.transporter) return cached.transporter;
  const { host, port, user, pass } = readConfig();
  cached.transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  return cached.transporter;
}

export interface SendMailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}

export async function sendMail(opts: SendMailOptions) {
  const { from } = readConfig();
  const transporter = getTransporter();
  return transporter.sendMail({
    from,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}
