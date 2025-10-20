import React from "react";
import { useQuery } from "react-query";
import { fetchPets } from "../../api/pet";
import Loader from "../../components/Loader";

// This could be expanded per pet.
const PetActivityLog: React.FC = () => {
  const { data, isLoading, error } = useQuery("pets", fetchPets);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading pet activity.</p>;

  return (
    <div>
      <h2>Recent Activities</h2>
      <ul>
        {data?.flatMap(pet =>
          pet.medicalRecords?.map(record => (
            <li key={record.id}>
              {pet.name}: {record.type} ({new Date(record.date).toLocaleDateString()})
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PetActivityLog;
