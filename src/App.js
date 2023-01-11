import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "1",
    title: "Vegetables",
    amount: 13.82,
    date: new Date(2022, 9, 14),
  },
  { id: "2", title: "Oats", amount: 8.99, date: new Date(2021, 7, 14) },
  { id: "3", title: "Lunch", amount: 17.99, date: new Date(2022, 7, 14) },
  { id: "4", title: "iPad", amount: 499.99, date: new Date(2020, 7, 14) },
];

const App = () => {

    const [expenses, setExpenses] = useState(dummy_expenses)

    const addExpenseHandler = (expense) => {
      setExpenses((prevState)=>{
        return [expense, ...prevState]
      })
    }
  
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        
        <Expenses items={expenses}/>
        
      </div>
    );
}

export default App;
