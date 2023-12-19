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
  },
});

export const { addTodo } = todos.actions;

export default todos.reducer;
