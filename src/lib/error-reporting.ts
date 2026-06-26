/**
 * Generic error reporting utility.
 * Replaces the Lovable-specific error-reporting module.
 * Wire this up to Sentry, Datadog, or any other error tracker as needed.
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[ErrorBoundary]", error, context);
}
