import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  isDark: boolean;
  scale: '90%' | '100%' | '110%';
}

const initialState: ThemeState = {
  isDark: true,
  scale: '100%',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // isDark
    setIsDark: (state: ThemeState, action: PayloadAction<boolean>) => {
      state.isDark = action.payload;
    },
    switchIsDark: (state: ThemeState) => {
      state.isDark = !state.isDark;
    },

    // scale
    setScale: (
      state: ThemeState,
      action: PayloadAction<'90%' | '100%' | '110%'>
    ) => {
      state.scale = action.payload;
    },
    scaleDown: (state: ThemeState) => {
      state.scale = '90%';
    },
    scaleUp: (state: ThemeState) => {
      state.scale = '110%';
    },
    scaleNormal: (state: ThemeState) => {
      state.scale = '100%';
    },
  },
});

export const {
  setIsDark,
  switchIsDark,
  setScale,
  scaleDown,
  scaleUp,
  scaleNormal,
} = themeSlice.actions;

export default themeSlice.reducer;
