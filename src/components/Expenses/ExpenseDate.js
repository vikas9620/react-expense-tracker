import React from "react";
import "./ExpenseItem.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div>{date}</div>
      <div>{month}</div>

      <div>{year}</div>
    </div>
  );
};
export default ExpenseDate;
