import ExpenseForm from "./ExpenseForm";
import React,{useState} from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
    const ExpenseSubmitHandler =(newEnteredData)=>{
        const expenseData ={
            ...newEnteredData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
  return (
    <div className="NewExpense">
    <div className="expense-button">{!isEditing && (
      <button className="btn" onClick={startEditingHandler}>Add New Expense</button>
    )}
    
    {isEditing && (
      <ExpenseForm
      onCancel={stopEditingHandler}
        onSaveExpenseData={ExpenseSubmitHandler}
        
      />
    )}</div>
    </div>
  );
};
export default NewExpense;
