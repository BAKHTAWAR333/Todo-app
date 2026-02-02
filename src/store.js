import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, done: false });
    },
    toggleTodo: (state, action) => {
      state.find(t => t.id === action.payload).done ^= true;
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = slice.actions;

export const store = configureStore({
  reducer: slice.reducer,
});
