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
    clearCompletedTodo(state) {
      return state.filter((todo) => todo.completed !== true);
    },
    completedAll(state) {
      const hasTodoCompleted = state.every((todo) => todo.completed);

      return state.map((todo) => {
        if (hasTodoCompleted) {
          return {
            ...todo,
            completed: false,
          };
        }

        return {
          ...todo,
          completed: true,
        };
      });
    },
    editTodo(state, action) {
      const { todoId, todoValue } = action.payload;

      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          text: todoValue,
        };
      });
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodo,
  completedAll,
  editTodo,
} = todos.actions;

export default todos.reducer;
