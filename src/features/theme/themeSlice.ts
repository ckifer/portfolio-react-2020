import { createSlice } from '@reduxjs/toolkit';

interface ThemeSlice {
  darkMode: boolean;
}

const initialState: ThemeSlice = { darkMode: true };

const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = counterSlice.actions;
export default counterSlice.reducer;
