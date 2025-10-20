// Returns date as "Oct 20, 2025"
export function formatDate(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Returns time as "11:35 AM"
export function formatTime(date: string | Date): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

// Checks if date1 is before date2
export function isBefore(date1: string | Date, date2: string | Date): boolean {
  return new Date(date1) < new Date(date2);
}
