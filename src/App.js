import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Car Insurance",
      amount: 95.12,
      date: new Date(2022, 9, 14),
    },
    { id: "2", title: "Books", amount: 95.12, date: new Date(2000, 7, 14) },
    { id: "3", title: "Macbook", amount: 95.12, date: new Date(2000, 7, 14) },
    { id: "4", title: "Phone", amount: 95.12, date: new Date(2000, 7, 14) },
  ];

    const addExpenseHandler = (expense) => {
      console.log(expense)
      console.log("In App.js")
    }
  
    return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}/>
        
      </div>
    );
}

export default App;
