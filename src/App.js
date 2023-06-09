import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 298,
      date: new Date(2020, 1, 1),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 350,
      date: new Date(2021, 8, 13),
    },
    {
      id: "e3",
      title: "New Desk (Wooden)",
      amount: 460,
      date: new Date(2022, 2, 9),
    },
    {
      id: "e4",
      title: "New TV",
      amount: 876,
      date: new Date(2023, 7, 13),
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
