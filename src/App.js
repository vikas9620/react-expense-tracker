import ExpenseForm from "./components/ExpenseFrom/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import React from 'react';
const App = ()=> {
  const expenses =[{
    title: "food",
    amount: 8678,
    Date: new Date(2023, 1, 1),
    LocationOfExpenditure: "noida"
},{title: "travel",
amount: 10550,
Date: new Date(2023, 5, 24),
LocationOfExpenditure: "saddas"
  
},{title: "fees",
amount: 2544,
Date: new Date(2023, 5, 6),
LocationOfExpenditure: "school"},
{title: "trip",
amount: 10550,
Date: new Date(2023, 8, 22),
LocationOfExpenditure: "manali"}]
  return (
    <div className="App">
    <ExpenseForm/>
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
