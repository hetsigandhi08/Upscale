import { configureStore } from '@reduxjs/toolkit';
import courseDataReducer from './courseDataSlice'
import countReducer from './countSlice'

export const store = configureStore({
  reducer: {
    course: courseDataReducer,
    count:countReducer
  }
});
