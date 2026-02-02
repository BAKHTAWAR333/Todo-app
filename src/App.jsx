import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./store";

export default function App() {
  const [text, setText] = useState("");
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button onClick={() => {
        dispatch(addTodo(text));
        setText("");
      }}>
        Add
      </button>

      {todos.map(t => (
        <div key={t.id}>
          <span
            onClick={() => dispatch(toggleTodo(t.id))}
            style={{ textDecoration: t.done ? "line-through" : "none" }}
          >
            {t.text}
          </span>

          <button onClick={() => dispatch(deleteTodo(t.id))}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
