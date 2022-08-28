import React from 'react'
import { useState } from 'react';
import './ExpenseForm.css';


function ExpenseForm(props) {

  const [title,setTitle]=useState('');
  const [amount,setAmount]=useState('');
  const [date,setDate]=useState('');

  // Alternative way (using one state for all and passing funciton inside setState function)
  // const [userInput,setUserInput]=useState({
  //   title:'',
  //   amount:'',
  //   date:''
  // });

  const titleHandler=(event)=>{
    setTitle(event.target.value);
    // setUserInput({...userInput,title:event.target.value});
    // setUserInput((prevState)=>{
    //   return ({...prevState,title:event.target.value})
    // });
  }
  const amountHandler=(event)=>{
    setAmount(event.target.value);
    
  }
  const dateHandler=(event)=>{
    setDate(event.target.value);
    
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const inputData={
      title:title,
      amount:+amount,
      date:new Date(date)
    };
    // console.log(inputData);
    props.expenseFromNewExpense(inputData);
    setTitle('');
    setAmount('');
    setDate('');
  }
 

  return (
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
    <div className='new-expense__control'>
    <label htmlFor="">Title</label>
    <input type="text" value={title} onChange={titleHandler}/>
    </div>
    <div className='new-expense__control'>
    <label htmlFor="">Amount</label>
    <input type="number" value={amount} onChange={amountHandler} min='0.01' step='0.01' />
    </div>
    <div className='new-expense__control'>
    <label htmlFor="">Date</label>
    <input type="date" value={date} onChange={dateHandler} min='2019-01-01' max='2022-12-31'/>
    </div>
    </div>
    <div className='new-expense__actions'>
    <button type="button" onClick={props.onStop}>cancle</button>
    </div>
    <div className='new-expense__actions'>
    <button type="submit">Add Expense</button>
    </div>
  </form>
    
  )
}

export default ExpenseForm