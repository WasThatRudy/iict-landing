import { NextRequest } from "next/server";
import { createSubscriberSchema } from "@/schemas/subscriber.schema";
import { subscriberService } from "@/services/subscriberService";
import { successResponse, errorResponse } from "@/utils/response";

export async function POST(req: NextRequest) {
  try {
    const body = createSubscriberSchema.parse(await req.json());
    const subscriber = await subscriberService.create(body);
    return successResponse(subscriber, 201);
  } catch (err) {
    return errorResponse(err);
  }
}
