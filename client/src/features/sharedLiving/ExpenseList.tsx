import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchExpenses } from "../../api/sharedLiving";
import { Expense } from "../../types/sharedLiving";
import Loader from "../../components/Loader";

// A sub-component for rendering a single expense item
const ExpenseListItem: React.FC<{ expense: Expense }> = ({ expense }) => (
  <li key={expense.id} className="expense-item">
    <span className="expense-name">{expense.name}: ${expense.amount.toFixed(2)}</span>
    <span className="expense-details">
      Paid by: {expense.paidBy} | Participants: {expense.participants?.join(", ")}
    </span>
  </li>
);

const ExpenseList: React.FC = () => {
  const { data: expenses, isLoading, error } = useQuery<Expense[], Error>({
    queryKey: ["expenses"],
    queryFn: fetchExpenses,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p className="error-message">Error loading expenses: {error.message}</p>;
  }

  // Handle the case where there are no expenses
  if (!expenses || expenses.length === 0) {
    return (
      <div>
        <h2>Shared Expenses</h2>
        <p>No expenses have been logged yet.</p>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <h2>Shared Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <ExpenseListItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;