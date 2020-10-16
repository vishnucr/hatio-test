import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from '../_slices/userSlice';
import repoSlice from '../_slices/repoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    repo: repoSlice
  },
});
