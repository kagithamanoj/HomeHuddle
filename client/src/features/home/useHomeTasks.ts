import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchHomeTasks, addHomeTask } from "../../api/home";
import { HomeTask } from "../../types/home";

// Custom hook for all HomeTask interactions
export const useHomeTasks = () => {
  const queryClient = useQueryClient();
  const tasksQuery = useQuery("homeTasks", fetchHomeTasks);

  const addTaskMutation = useMutation(addHomeTask, {
    onSuccess: () => queryClient.invalidateQueries("homeTasks")
  });

  return { ...tasksQuery, addTask: addTaskMutation.mutate };
};
