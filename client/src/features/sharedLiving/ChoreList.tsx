import React from "react";
import { useQuery } from '@tanstack/react-query';
import { fetchChores } from "../../api/sharedLiving";
import Loader from "../../components/Loader";

// Define a type for a single chore for better type safety
interface Chore {
  id: number | string;
  name: string;
  assignedTo: string;
  dueDate: string;
}

const ChoreList: React.FC = () => {
  // Updated useQuery syntax: It now takes an object with `queryKey` and `queryFn`
  const { data, isLoading, error } = useQuery<Chore[], Error>({
    queryKey: ["chores"], // The key is now an array
    queryFn: fetchChores
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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