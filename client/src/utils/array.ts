// Removes duplicates from array
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

// Sorts array by date field (descending)
export function sortByDate<T extends { date: string }>(arr: T[]): T[] {
  return arr.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Returns true if array is empty or not an array
export function isEmpty(arr: unknown): boolean {
  return !Array.isArray(arr) || arr.length === 0;
}
