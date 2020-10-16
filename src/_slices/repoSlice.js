import { createSlice } from '@reduxjs/toolkit';

export const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    list: [],
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload)
    },
    remove: (state, action) => {
      state.list.splice(action.payload,1);
    },
  },
});

export const { add, remove } = repoSlice.actions;

export const selectRepo = state => state.repo.list;

export default repoSlice.reducer;
