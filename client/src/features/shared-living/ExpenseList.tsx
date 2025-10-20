import React from "react";
import { fetchChores, addExpense, fetchChores } from "../../api/sharedLiving";
import { useQuery } from "react-query";
import Loader from "../../components/Loader";

const ExpenseList: React.FC = () => {
  // Replace with real API call for expenses
  const { data, isLoading, error } = useQuery("expenses", fetchChores);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading expenses.</p>;

  return (
    <div>
      <h2>Shared Expenses</h2>
      <ul>
        {data?.map(expense => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount} | Paid by: {expense.paidBy} | Participants: {expense.participants?.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
