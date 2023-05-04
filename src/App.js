
import ExpenseItem from "./components/Expenses/ExpenseItem";
import React from 'react';
const App = ()=> {
  const expenses =[{
    title: "Expenses",
    amount: 100,
    Date: new Date(2023, 1, 1),
    LocationOfExpenditure: "noida"
},{title: "fsa",
amount: 1050,
Date: new Date(2023, 1, 5),
LocationOfExpenditure: "saddas"
  
}]
  return (
    <div className="App">
    <h1>Expense Items</h1>
      <header className="App-header">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          Date={expense.Date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
      
      </header>
    </div>
  );
}

export default App;
