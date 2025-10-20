import React from "react";
import PetList from "./PetList";
import PetActivityLog from "./PetActivityLog";

const PetDashboard: React.FC = () => (
  <section>
    <h1>Pet Care Dashboard</h1>
    <PetList />
    <PetActivityLog />
  </section>
);

export default PetDashboard;
