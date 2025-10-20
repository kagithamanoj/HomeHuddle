import api from "./index";
import { Chore, Expense } from "../types/sharedLiving";

// Fetch all chores
export const fetchChores = () =>
  api.get<Chore[]>("/shared-living/chores").then(res => res.data);

// Add new expense
export const addExpense = (expense: Expense) =>
  api.post<Expense>("/shared-living/expenses", expense).then(res => res.data);
