import { connectDB } from "@/lib/db";
import { Subscriber } from "@/models/Subscriber";
import { CreateSubscriberInput } from "@/schemas/subscriber.schema";
import { Errors } from "@/utils/errors";

export const subscriberService = {
  async create(input: CreateSubscriberInput) {
    await connectDB();

    const existing = await Subscriber.findOne({ email: input.email });
    if (existing) throw Errors.emailExists();

    const subscriber = await Subscriber.create({ email: input.email });
    return { id: subscriber._id, email: subscriber.email, createdAt: subscriber.createdAt };
  },
};
