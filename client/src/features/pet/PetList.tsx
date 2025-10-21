import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPets } from "../../api/pet";
import Loader from "../../components/Loader";

// Define a type for a single pet for code safety
interface Pet {
  id: number | string;
  name: string;
  species: string;
  age: number;
}

const PetList: React.FC = () => {
  // Updated useQuery to use the new object syntax
  const { data, isLoading, error } = useQuery<Pet[], Error>({
    queryKey: ["pets"],
    queryFn: fetchPets,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading pets: {error.message}</p>;
  }

  return (
    <div>
      <h2>My Pets</h2>
      <ul>
        {data?.map((pet) => (
          <li key={pet.id}>
            {pet.name} ({pet.species}) — Age: {pet.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;