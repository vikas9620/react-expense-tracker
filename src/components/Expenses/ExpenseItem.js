import React from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          amount={props.amount}
          location={props.location}
          title={props.title}
        />
      </Card>
    </li>
  );
};
export default ExpenseItem;
