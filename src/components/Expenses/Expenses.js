import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilters from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    console.log("Expenses.js");
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilters
          onChangeFilter={filterChangeHandler}
          selectedYear={filteredYear}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key = {expense.id} title={expense.title} amount={expense.amount} date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
