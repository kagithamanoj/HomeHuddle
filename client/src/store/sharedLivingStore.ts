import { create } from "zustand";
import { Chore, Expense } from "../types/sharedLiving";

type SharedLivingState = {
  chores: Chore[];
  setChores: (chores: Chore[]) => void;
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
};

export const useSharedLivingStore = create<SharedLivingState>((set) => ({
  chores: [],
  setChores: (chores) => set({ chores }),
  expenses: [],
  setExpenses: (expenses) => set({ expenses }),
}));
