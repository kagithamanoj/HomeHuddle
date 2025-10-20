import React from "react";
import { fetchChores } from "../../api/sharedLiving";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

const ChoreList: React.FC = () => {
  const { data, isLoading, error } = useQuery("chores", fetchChores);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading chores.</p>;

  return (
    <div>
      <h2>Household Chores</h2>
      <ul>
        {data?.map(chore => (
          <li key={chore.id}>
            {chore.name} — Assigned to: {chore.assignedTo} (Due: {new Date(chore.dueDate).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoreList;
