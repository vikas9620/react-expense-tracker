import React from 'react';
import './ExpenseItem.css';

const ExpenseDetails = (props)=>{
    const title = props.title
    const amount = props.amount
    const LocationOfExpenditure = props.LocationOfExpenditure
    return (<div className="expense-description">
        <div className="expense-item2">{title}</div>
        <div className='expense-amount'>
      <div className="expense-price">${amount}</div></div>
      <div className="location-of-expenditure">{LocationOfExpenditure}</div>
    </div>
    )

}
export default ExpenseDetails