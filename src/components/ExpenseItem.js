import './ExpenseItem.css';
function ExpenseItem(props){
    
    return(<div class="expense-item">
    
    <div class="expense-description">
      <div class="expense-date">{props.Date.toISOString()}</div>
      <div class="expense-item2">{props.title}</div>
      <div class="expense-price">${props.amount}</div>
      <div class="location-of-expenditure">{props.LocationOfExpenditure}</div>
    </div>
  </div>
  
    )
}
export default ExpenseItem