import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchChores, addExpense } from "../../api/sharedLiving";
import { Chore, Expense } from "../../types/sharedLiving";

export const useSharedLiving = () => {
  const queryClient = useQueryClient();
  const choresQuery = useQuery("chores", fetchChores);
  const addExpenseMutation = useMutation(addExpense, {
    onSuccess: () => queryClient.invalidateQueries("expenses")
  });

  return {
    ...choresQuery,
    addExpense: addExpenseMutation.mutate
  };
};
