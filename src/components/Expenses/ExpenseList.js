import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expenseContent = "no expense found";
  if (props.items.length === 1) {
    expenseContent = (
      <div>
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            location={expense.location}
            date={expense.date}
          />
        ))}
        <p>Only single Expense here. Please add more...</p>{" "}
      </div>
    );
  } else if (props.items.length > 1) {
    expenseContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
      />
    ));
  }
  return <ul className="Expense-List">{expenseContent}</ul>;
};
export default ExpenseList;
