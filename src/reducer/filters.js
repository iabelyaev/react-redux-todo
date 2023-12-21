import { createSlice } from '@reduxjs/toolkit';

import { SHOW_ALL } from 'constants/index';

const initialState = { filter: SHOW_ALL };

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filters.actions;

export default filters.reducer;
