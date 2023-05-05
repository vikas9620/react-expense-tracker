import ExpenseForm from "./ExpenseForm";
import React from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
    const ExpenseSubmitHandler =(newEnteredData)=>{
        const expenseData ={
            ...newEnteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div className="NewExpense">
      <ExpenseForm onSaveExpenseData={ExpenseSubmitHandler} />
    </div>
  );
};
export default NewExpense;
