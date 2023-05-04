import React from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const ExpenseItem=(props)=>{
   
   
    return(
    
    <Card className='expense-item'>
  
    <ExpenseDate Date={props.Date} />
    <ExpenseDetails amount={props.amount}  LocationOfExpenditure={props.LocationOfExpenditure}   title={props.title} />
    <button>Delete Expense</button>
    </Card>
  
    )
}
export default ExpenseItem