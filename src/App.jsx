import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, toggleTodo, deleteTodo } from "./store";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos); // get todos from store
  const dispatch = useDispatch(); // to send actions
  const [input, setInput] = useState(""); // for input field

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // ignore empty input
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => dispatch(toggleTodo(index))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(index))}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
