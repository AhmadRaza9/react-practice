import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 298,
      date: new Date(2000, 1, 1).toString(),
    },
    {
      title: "Car Insurance",
      amount: 298,
      date: new Date(2000, 1, 1).toString(),
    },
    {
      title: "Car Insurance",
      amount: 298,
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
