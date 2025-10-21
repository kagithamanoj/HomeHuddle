import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// Corrected paths to go up two directories
import { fetchChores, addExpense } from "../../api/sharedLiving";
import { Chore, Expense } from "../../types/sharedLiving";

export const useSharedLiving = () => {
  const queryClient = useQueryClient();

  const choresQuery = useQuery<Chore[], Error>({
    queryKey: ["chores"],
    queryFn: fetchChores,
  });

  const addExpenseMutation = useMutation({
    mutationFn: (newExpense: Omit<Expense, "id">) => addExpense(newExpense),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["expenses"] });
    },
  });

  return {
    ...choresQuery,
    addExpense: addExpenseMutation.mutate,
  };
};