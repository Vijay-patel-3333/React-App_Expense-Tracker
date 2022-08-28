import React,{useState} from 'react'
import Card from '../Shared/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {

  const [filteredYear,setFilteredYear]=useState('2020');
  const yearChanger=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

    const filteredItems=props.expenses.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear;
    });

   

  
  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter initialValue={filteredYear} onChangeYearHandler={yearChanger}/>
   <ExpensesChart expenses={filteredItems}/>
    <ExpenseList items={filteredItems}/>
      

    </Card>
    </div>
  )
}
