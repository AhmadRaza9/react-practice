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
      <ExpenseItem />
    </div>
  );
}

export default App;
