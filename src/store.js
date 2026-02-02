import { configureStore, createSlice } from "@reduxjs/toolkit";

// Step 1: Create a "slice" for todos
const todosSlice = createSlice({
  name: "todos",
  initialState: JSON.parse(localStorage.getItem("todos")) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

// Step 2: Export actions
export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

// Step 3: Create the store
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

// Step 4: Save todos to localStorage whenever state changes
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});

export default store;
