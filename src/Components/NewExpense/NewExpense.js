import React from 'react'
import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {

  const [isEditing,setIsEditing]=useState(false);

  const clickHandler=()=>{
    setIsEditing(true);
  }

  const stopEditing=()=>{
    setIsEditing(false);
  }

 const expenseData=(expense)=>{
  
  const updatedExpense={
    ...expense,
    id:Math.random().toString()
  }
  props.expenseFromApp(updatedExpense);
  setIsEditing(false);
 }

  return (
    <div className="new-expense">
    {!isEditing&&<button onClick={clickHandler}>Add new expense</button>}
    {isEditing&& <ExpenseForm expenseFromNewExpense={expenseData} onStop={stopEditing}/>}
    </div>
  )
}

export default NewExpense