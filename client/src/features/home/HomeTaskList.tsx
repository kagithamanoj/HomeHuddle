import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchHomeTasks } from "../../api/home";
import Loader from "../../components/Loader";

// Define a type for a single task
interface Task {
  id: number | string;
  title: string;
  completed: boolean;
  dueDate: string;
}

const HomeTaskList: React.FC = () => {
  // Updated useQuery to use the new object syntax
  const { data, isLoading, error } = useQuery<Task[], Error>({
    queryKey: ["homeTasks"],
    queryFn: fetchHomeTasks,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading tasks: {error.message}</p>;
  }

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <ul>
        {data?.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title} — due {new Date(task.dueDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTaskList;