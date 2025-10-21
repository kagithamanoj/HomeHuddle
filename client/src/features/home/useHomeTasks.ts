import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchHomeTasks, addHomeTask } from "../../api/home";
import { HomeTask } from "../../types/home"; // Assuming you have this type defined

// Custom hook for all HomeTask interactions
export const useHomeTasks = () => {
  const queryClient = useQueryClient();

  // Updated useQuery syntax
  const tasksQuery = useQuery<HomeTask[], Error>({
    queryKey: ["homeTasks"],
    queryFn: fetchHomeTasks,
  });

  // Updated useMutation syntax
  const addTaskMutation = useMutation({
    mutationFn: addHomeTask,
    onSuccess: () => {
      // Updated invalidateQueries syntax
      queryClient.invalidateQueries({ queryKey: ["homeTasks"] });
    },
  });

  return { ...tasksQuery, addTask: addTaskMutation.mutate };
};