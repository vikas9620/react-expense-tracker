import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const [userInput,setUserInput]=useState({EnterTitle: '',
  //EnterLocation: '',EnterAmount: '',EnterDate: ''});
  const [EnterTitle, setEnterTitle] = useState("");
  const [EnterLocation, setEnterLocation] = useState("");
  const [EnterAmount, setEnterAmount] = useState("");
  const [EnterDate, setEnterDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({...userInput,EnterTitle: event.target.value});
    //setUserInput((preState)=>{
    // return ({...preState,EnterTitle: event.target.value})});
  };
  const locationChangeHandler = (event) => {
    setEnterLocation(event.target.value);
    //setUserInput({...userInput,EnterLocation: event.target.value});
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    //setUserInput({...userInput,EnterAmount: event.target.value});
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({...userInput,EnterDate: event.target.value});
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: EnterTitle,
      location: EnterLocation,
      amount: EnterAmount,
      date: new Date(EnterDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle('')
    setEnterDate('')
    setEnterLocation('')
    setEnterAmount('')
  };

  return (
    <form className="expense-form" onSubmit={SubmitHandler}>
      <h1>Expense Form</h1>
      <div className="form">
        <label className="text">Title</label>
        <input
          type="text"
          placeholder="title"
          value={EnterTitle}
          onChange={titleChangeHandler}
          required
        ></input>
        <label className="text">Location</label>
        <input
          type="text"
          placeholder="location"
          value={EnterLocation}
          onChange={locationChangeHandler}
          required
        ></input>
        <label className="text">Amount</label>
        <input
          type="number"
          placeholder="amount"
          value={EnterAmount}
          onChange={amountChangeHandler}
          required
        ></input>
        <label className="text">Date</label>
        <input
          type="Date"
          placeholder="Date"
          value={EnterDate}
          onChange={dateChangeHandler}
          required
        ></input>
      </div>
      <button type="submit" className="btn">
        Add Expense
      </button>
    </form>
  );
};
export default ExpenseForm;
