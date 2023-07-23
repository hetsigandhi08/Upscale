import { configureStore } from '@reduxjs/toolkit';
import courseDataReducer from './courseDataSlice'
import countReducer from './countSlice'
import homeDataReducer from './homeDataSlice'

export const store = configureStore({
  reducer: {
    course: courseDataReducer,
    count:countReducer,
    home:homeDataReducer
  }
});
