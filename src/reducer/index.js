import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos';
import filtersReducer from 'reducer/filters';
import { localStorageStore, preLoadState } from '../middlewares';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
  preloadedState: preLoadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageStore),
});
