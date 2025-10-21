import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAppliances } from "../../api/home";
import Loader from "../../components/Loader";

// Define a type for the appliance data for better code safety
interface Appliance {
  id: number | string;
  name: string;
  lastServiced: string; // Dates from an API are typically strings
}

const ApplianceList: React.FC = () => {
  // Updated useQuery to use the new object syntax with a typed key
  const { data, isLoading, error } = useQuery<Appliance[], Error>({
    queryKey: ["appliances"],
    queryFn: fetchAppliances,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error loading appliances: {error.message}</p>;
  }

  return (
    <div>
      <h2>Registered Appliances</h2>
      <ul>
        {data?.map((appliance) => (
          <li key={appliance.id}>
            {appliance.name} — Serviced:{" "}
            {new Date(appliance.lastServiced).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplianceList;