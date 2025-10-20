import React from "react";
import { fetchAppliances } from "../../api/home";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

const ApplianceList: React.FC = () => {
  const { data, isLoading, error } = useQuery("appliances", fetchAppliances);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading appliances.</p>;

  return (
    <div>
      <h2>Registered Appliances</h2>
      <ul>
        {data?.map(appliance => (
          <li key={appliance.id}>
            {appliance.name} — Serviced: {new Date(appliance.lastServiced).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplianceList;
