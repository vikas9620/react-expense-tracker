import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/ExpenseFrom/NewExpense";
import React, { useState } from "react";
const App = (props) => {
 /* const expenses1 = [
    {
      title: "food",
      amount: 8678,
      date: new Date(2023, 1, 1),
      location: "noida",
    }
    
  ];*/
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData
    };

    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };
  const renderExpenses = () => {
    if (expenses.length === 0) {
      return <p>No expenses found.</p>;
    }
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <h1>Expense Items</h1>
      {renderExpenses()}
      <header className="App-header">
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </header>
    </div>
  );
};

export default App;
