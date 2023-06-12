import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: ({contacts}, { payload }) => {
      if (
        contacts.some(
          contact => contact.name.toLowerCase() === payload.name.toLowerCase()
        )
      ) {
        Notify.failure(`${payload.name} is already in contacts.`);
        return;
      }

      return {
        contacts: [payload, ...contacts],
      };
    },

    deleted: (state, { payload }) => {
        return {
                contacts: state.contacts.filter(item => item.id !== payload),
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, deleted } = contactsSlice.actions;
