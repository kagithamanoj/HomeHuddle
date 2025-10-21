// src/types/sharedLiving.ts

/**
 * Represents a user within the shared living space.
 */
export interface SharedLivingUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

/**
 * Defines the possible categories for an expense.
 * Using an Enum makes the code more self-documenting and prevents typos.
 */
export enum ExpenseCategory {
  Rent = "rent",
  Utilities = "utilities",
  Groceries = "groceries",
  Subscription = "subscription",
  Other = "other",
}

/**
 * Represents a single chore to be completed.
 */
export interface Chore {
  id: string;
  name: string;
  description?: string;
  /** The unique ID of the user this chore is assigned to. */
  assignedTo: SharedLivingUser['id'];
  /** The date the chore is due, typically in ISO 8601 string format. */
  dueDate: string;
  completed: boolean;
}

/**
 * Represents a single shared expense.
 */
export interface Expense {
  id: string;
  name: string;
  amount: number;
  /** The unique ID of the user who paid for this expense. */
  paidBy: SharedLivingUser['id'];
  /** A list of unique user IDs participating in this expense. */
  participants: SharedLivingUser['id'][];
  /** The date the expense was incurred, typically in ISO 8601 string format. */
  dueDate: string;
  paid: boolean;
  category?: ExpenseCategory;
  notes?: string;
}