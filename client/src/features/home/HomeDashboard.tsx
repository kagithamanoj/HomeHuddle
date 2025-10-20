import React from "react";
import HomeTaskList from "./HomeTaskList";
import ApplianceList from "./ApplianceList";

const HomeDashboard: React.FC = () => (
  <section>
    <h1>Home Maintenance Dashboard</h1>
    <HomeTaskList />
    <ApplianceList />
  </section>
);

export default HomeDashboard;
