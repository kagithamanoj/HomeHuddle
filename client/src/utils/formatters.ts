export function formatCurrency(amount: number, currency = "USD"): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
}

// Capitalizes first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
