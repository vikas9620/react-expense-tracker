import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/ExpenseFrom/NewExpense";
import React from "react";
const App = (props) => {
  const expenses1 = [
    {
      id: "e1",
      title: "food",
      amount: 342,
      location: "noidan",
      date: new Date(2021, 7, 15),
    },
    { id: "e2", title: "trip", amount: 578,location: "noidan", date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "travel",
      amount: 54,
      location: "noidan",
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "tour",
      amount: 8767,
      location: "noidan",
      date: new Date(2021, 5, 12),
    },
  ];
  //const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
   // const newExpense = {
  //    ...expenseData,};
    console.log(expenseData)
    //setExpenses((prevExpenses) => {
      //return [...prevExpenses, newExpense]; });
  };
  //const renderExpenses = () => {
   // if (expenses.length === 0) {
   //   return <p>No expenses found.</p>;
   // }
 // };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <h1>Expense Items</h1>
      <Expenses items={expenses1} />
    </div>
  );
};

export default App;
