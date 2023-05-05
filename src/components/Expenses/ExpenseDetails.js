import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  const clickHandler1 = () => {
    setTitle("title");
  };
  const clickHandler2 = () => {
    setAmount("100");
  };
  const location = props.location;
  return (
    <div className="expense-description">
      <div className="expense-item2">
        <div>{title}</div>
        <button onClick={clickHandler1} className="button2">
          update title
        </button>
      </div>
      <div className="expense-amount">
        <div className="expense-price">${amount}</div>
      </div>
      <button onClick={clickHandler2} className="button1">
        update amount
      </button>
      <div className="location-of-expenditure">{location}</div>
    </div>
  );
};
export default ExpenseDetails;
