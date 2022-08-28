import React from "react";
import Card from "../Shared/Card";
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <Card>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </Card>
  );
}

export default ExpenseDate;
