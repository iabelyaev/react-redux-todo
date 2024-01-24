import { configureStore } from '@reduxjs/toolkit';
import todosReducer from  './todos'
import filtersReducer from './filters';
import {localStorageStore, preLoadState} from 'middlewares/index';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
  preloadedState: preLoadState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageStore),
});
