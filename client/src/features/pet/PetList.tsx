import React from "react";
import { fetchPets } from "../../api/pet";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

const PetList: React.FC = () => {
  const { data, isLoading, error } = useQuery("pets", fetchPets);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading pets.</p>;

  return (
    <div>
      <h2>My Pets</h2>
      <ul>
        {data?.map(pet => (
          <li key={pet.id}>
            {pet.name} ({pet.species}) — Age: {pet.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
