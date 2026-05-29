import mongoose, { Document, Schema } from "mongoose";

export interface ISponsorshipInquiry extends Document {
  name: string;
  company: string;
  email: string;
  message: string;
  ip?: string;
  userAgent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SponsorshipInquirySchema = new Schema<ISponsorshipInquiry>(
  {
    name:      { type: String, required: true, trim: true },
    company:   { type: String, required: true, trim: true },
    email:     { type: String, required: true, lowercase: true, trim: true, index: true },
    message:   { type: String, required: true, trim: true },
    ip:        { type: String },
    userAgent: { type: String },
  },
  { timestamps: true }
);

export const SponsorshipInquiry =
  mongoose.models.SponsorshipInquiry ??
  mongoose.model<ISponsorshipInquiry>("SponsorshipInquiry", SponsorshipInquirySchema);
