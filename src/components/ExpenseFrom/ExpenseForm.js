
import './ExpenseForm.css'
import React,{useState} from 'react';


const ExpenseForm= ()=>{
const [EnterTitle,setEnterTitle]=useState('');
const [EnterLocation,setEnterLocation]=useState('');
const [EnterAmount,setEnterAmount]=useState('');
const [EnterDate,setEnterDate]=useState('');


const titleChangeHandler= (event)=>{
    setEnterTitle(event.target.value);
}
const locationChangeHandler= (event)=>{
    setEnterLocation(event.target.value);
}
const amountChangeHandler= (event)=>{
    setEnterAmount(event.target.value);
}
const dateChangeHandler= (event)=>{
    setEnterDate(event.target.value);
}


    return(
        <div className="expense-form">
        <h1>Expense Form</h1>
        <div className="form">
        <label className="text">Title</label>
        <input type="text" placeholder="title" onChange={titleChangeHandler} required ></input>
        <label className="text">Location</label>
        <input type="text" placeholder="location" onChange={locationChangeHandler} required ></input>
        <label className="text">Amount</label>
        <input type="number" placeholder="amount" onChange={amountChangeHandler} required ></input>
        <label className="text">Date</label>
        <input type="Date" placeholder="Date" onChange={dateChangeHandler} required ></input>
        
        </div><button type="submit" className="btn">submit</button>
        </div>
    )
}
export default ExpenseForm