import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todos.actions;

export default todos.reducer;
