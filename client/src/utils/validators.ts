export function isValidEmail(email: string): boolean {
  // Simple email regex: not exhaustive but practical
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isNonEmptyString(str: unknown): boolean {
  return typeof str === "string" && str.trim().length > 0;
}

// Example: check if value is a positive number
export function isPositiveNumber(n: unknown): boolean {
  return typeof n === "number" && n > 0;
}
