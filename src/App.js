import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 298,
      date: new Date(2000, 1, 1).toString(),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 350,
      date: new Date(2000, 1, 1).toString(),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 460,
      date: new Date(2000, 1, 1).toString(),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 876,
      date: new Date(2000, 1, 1).toString(),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
