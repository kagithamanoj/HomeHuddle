export interface Chore {
  id: string;
  name: string;
  description?: string;
  assignedTo: string;       // User ID/name
  dueDate: string;
  completed: boolean;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  paidBy: string;           // User ID/name
  participants: string[];   // Array of user IDs/names
  dueDate: string;
  paid: boolean;
  category?: "rent" | "utilities" | "groceries" | "subscription" | "other";
  notes?: string;
}

export interface SharedLivingUser {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}
