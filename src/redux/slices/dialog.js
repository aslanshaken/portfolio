import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  current: null,
};

const slice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state, action) {
      state.current = action.payload;
    },
    closeDialog(state) {
      state.current = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { openDialog, closeDialog } = slice.actions;

// Selector
export const DIALOG_SELECTOR = (state) => state.dialog;
