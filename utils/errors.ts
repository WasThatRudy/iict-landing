export type ErrorCode =
  | "VALIDATION_ERROR"
  | "EMAIL_ALREADY_EXISTS"
  | "REGISTRATION_CLOSED"
  | "SEATS_FULL"
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
  | "RATE_LIMITED"
  | "EMAIL_SEND_FAILED"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    public message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const Errors = {
  emailExists: () =>
    new AppError("EMAIL_ALREADY_EXISTS", "This email is already subscribed.", 409),
  notFound: (resource: string) =>
    new AppError("NOT_FOUND", `${resource} not found.`, 404),
  validationError: (message: string) =>
    new AppError("VALIDATION_ERROR", message, 400),
  unauthorized: () =>
    new AppError("UNAUTHORIZED", "Authentication required.", 401),
  forbidden: () =>
    new AppError("FORBIDDEN", "You do not have permission to do this.", 403),
  rateLimited: () =>
    new AppError("RATE_LIMITED", "Too many requests. Please wait a few minutes and try again.", 429),
  emailSendFailed: () =>
    new AppError("EMAIL_SEND_FAILED", "We saved your inquiry but couldn't send the email. We'll still see it.", 502),
  internal: () =>
    new AppError("INTERNAL_ERROR", "Something went wrong. Please try again.", 500),
};
