import mongoose, { Document, Schema } from "mongoose";

export interface ISubscriber extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubscriberSchema = new Schema<ISubscriber>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const Subscriber =
  mongoose.models.Subscriber ??
  mongoose.model<ISubscriber>("Subscriber", SubscriberSchema);
