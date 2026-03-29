import { AppError } from "./errors";
import { ZodError } from "zod";

export function successResponse<T>(data: T, status = 200, meta?: object) {
  return Response.json({ data, error: null, ...(meta ? { meta } : {}) }, { status });
}

export function errorResponse(err: unknown): Response {
  if (err instanceof AppError) {
    return Response.json(
      { data: null, error: { code: err.code, message: err.message } },
      { status: err.statusCode }
    );
  }

  if (err instanceof ZodError) {
    return Response.json(
      {
        data: null,
        error: {
          code: "VALIDATION_ERROR",
          message: err.errors[0]?.message ?? "Invalid input.",
        },
      },
      { status: 400 }
    );
  }

  console.error("[INTERNAL ERROR]", err);
  return Response.json(
    { data: null, error: { code: "INTERNAL_ERROR", message: "Something went wrong." } },
    { status: 500 }
  );
}
