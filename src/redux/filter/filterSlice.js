import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (state, { payload }) => {
      return {
        filter: payload,
      };
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
