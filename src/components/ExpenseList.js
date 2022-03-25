import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "Shopping", cost: 150 },
    { id: 13, name: "Holiday", cost: 300 },
    { id: 14, name: "Transportation", cost: 50 },
    { id: 15, name: "Fuel", cost: 40 },
    { id: 16, name: "Child care", cost: 500 }
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
