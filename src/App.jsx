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
      category,
    };

    const updatedUsers = [...allUsers, newExpense];
    setAllUsers(updatedUsers);
    dispatch(addExpense(newExpense));

    setId("");
    setExpense("");
    setAmount("");
    setCategory("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-pink-300 to-yellow-300 p-8">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Expense Tracker
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center space-y-4"
        >
          <input
            onChange={(e) => setId(e.target.value)}
            type="number"
            placeholder="Give the ID..."
            value={id}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={(e) => setExpense(e.target.value)}
            type="number"
            placeholder="Expense..."
            value={expense}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Amount..."
            value={amount}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Category..."
            value={category}
            className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Add Expense
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Local State (All Users):
          </h2>
          <ul className="space-y-3">
            {allUsers.map((user, index) => (
              <li
                key={index}
                className="bg-blue-50 border-l-4 border-blue-400 px-4 py-2 rounded-lg shadow-sm"
              >
                {user.id}: {user.expense} - ${user.amount} ({user.category})
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Global State (Redux):
          </h2>
          <ul className="space-y-3">
            {expenses.map((expense, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-yellow-50 border-l-4 border-yellow-400 px-4 py-2 rounded-lg shadow-sm"
              >
                <span>
                  {expense.id}: {expense.expense} - ${expense.amount} (
                  {expense.category})
                </span>
                <button
                  onClick={() => dispatch(aysncremoveExpense(index))}
                  className="px-4 py-1 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
