/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from '@reduxjs/toolkit';

const initialState: { [key: string]: boolean } = {};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.includes('/pending'),
        (state, action) => {
          state[action.type.split('/pending')[0]] = true;
        },
      )
      .addMatcher(
        (action) => action.type.includes('/fulfilled'),
        (state, action) => {
          state[action.type.split('/fulfilled')[0]] = false;
        },
      )
      .addMatcher(
        (action) => action.type.includes('/rejected'),
        (state, action) => {
          state[action.type.split('/rejected')[0]] = false;
        },
      );
  },
});

export default loadingSlice.reducer;
