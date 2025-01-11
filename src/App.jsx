import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense, aysncremoveExpense } from "./store/actions/expenseAction";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [id, setId] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const expenses = useSelector((state) => state.expense.data);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!id || !expense || !amount || !category) {
      alert("Please fill in all fields!");
      return;
    }

    const newExpense = {
      id: Number(id),
      expense: Number(expense),
      amount: Number(amount),
      category, //we can write the catergory : category as only category
    };

    const updatedUsers = [...allUsers, newExpense];
    setAllUsers(updatedUsers);
    dispatch(addExpense(newExpense));

    setId("");
    setExpense("");
    setAmount("");
    setCategory("");

    console.log("All Users: ", updatedUsers);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="Give the ID..."
          value={id}
        />
        <input
          onChange={(e) => setExpense(e.target.value)}
          type="number"
          placeholder="Expense..."
          value={expense}
        />
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Amount..."
          value={amount}
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          placeholder="Category..."
          value={category}
        />
        <button type="submit">Add Expense</button>
      </form>

      <h2>Local State (All Users):</h2>
      <ul>
        {allUsers.map((user, index) => (
          <li key={index}>
            {user.id}: {user.expense} - ${user.amount} ({user.category})
          </li>
        ))}
      </ul>

      <h2>Global State (Redux):</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.id}: {expense.expense} - ${expense.amount} (
            {expense.category})
            <button onClick={() => dispatch(aysncremoveExpense(index))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
