import React from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
 
  return (
    <div className="expense-description">
      <div className="expense-item2">
        <div>{props.title}</div>
      </div>
      <div className="expense-amount">
        <div className="expense-price">${props.amount}</div>
      </div>
     
      <div className="location-of-expenditure">{props.location}</div>
    </div>
  );
};
export default ExpenseDetails;
