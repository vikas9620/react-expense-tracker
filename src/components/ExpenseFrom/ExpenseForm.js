
import './ExpenseForm.css'



const ExpenseForm= ()=>{

const titleHandler= (event)=>{
    console.log(event.target.value);
}


    return(
        <div className="expense-form">
        <h1>Expense Form</h1>
        <div className="form">
        <label className="text">Title</label>
        <input type="text" placeholder="title" onChange={titleHandler} required ></input>
        <label className="text">Location</label>
        <input type="text" placeholder="location" required ></input>
        <label className="text">Amount</label>
        <input type="number" placeholder="amount" required ></input>
        <label className="text">Date</label>
        <input type="Date" placeholder="Date" required ></input>
        
        </div><button type="submit" className="btn">submit</button>
        </div>
    )
}
export default ExpenseForm