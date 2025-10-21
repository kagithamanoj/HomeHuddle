import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPets } from "../../api/pet";
import Loader from "../../components/Loader";

// Define types for Pet and MedicalRecord for code safety
interface MedicalRecord {
  id: number | string;
  type: string;
  date: string;
}

interface Pet {
  id: number | string;
  name: string;
  medicalRecords?: MedicalRecord[];
}

const PetActivityLog: React.FC = () => {
  // Updated useQuery to use the new object syntax
  const { data, isLoading, error } = useQuery<Pet[], Error>({
    queryKey: ["pets"],
    queryFn: fetchPets,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading pet activity: {error.message}</p>;
  }

  return (
    <div>
      <h2>Recent Activities</h2>
      <ul>
        {data?.flatMap((pet) =>
          pet.medicalRecords?.map((record) => (
            <li key={record.id}>
              {pet.name}: {record.type} (
              {new Date(record.date).toLocaleDateString()})
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PetActivityLog;