export type ErrorCode =
  | "VALIDATION_ERROR"
  | "EMAIL_ALREADY_EXISTS"
  | "REGISTRATION_CLOSED"
  | "SEATS_FULL"
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "FORBIDDEN"
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
  internal: () =>
    new AppError("INTERNAL_ERROR", "Something went wrong. Please try again.", 500),
};
