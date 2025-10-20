import React from "react";
import { fetchHomeTasks } from "../../api/home";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

const HomeTaskList: React.FC = () => {
  const { data, isLoading, error } = useQuery("homeTasks", fetchHomeTasks);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading tasks.</p>;

  return (
    <div>
      <h2>Upcoming Tasks</h2>
      <ul>
        {data?.map(task => (
          <li key={task.id} style={{textDecoration: task.completed ? "line-through" : "none"}}>
            {task.title} — due {new Date(task.dueDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTaskList;
