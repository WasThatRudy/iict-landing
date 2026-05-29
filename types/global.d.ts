import mongoose from "mongoose";
import type { Transporter } from "nodemailer";

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };

  // eslint-disable-next-line no-var
  var _mailer: {
    transporter: Transporter | null;
  };

  // eslint-disable-next-line no-var
  var _rateLimitBuckets: Map<string, { count: number; resetAt: number }>;
}

export {};
