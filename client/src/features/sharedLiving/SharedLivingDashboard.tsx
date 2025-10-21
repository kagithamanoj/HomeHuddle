import React from "react";
import ChoreList from "./ChoreList";
import ExpenseList from "./ExpenseList";

const SharedLivingDashboard: React.FC = () => (
  <section>
    <h1>Shared Living Dashboard</h1>
    <ChoreList />
    <ExpenseList />
  </section>
);

export default SharedLivingDashboard;
