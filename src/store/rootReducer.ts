import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import AppApi from './Api';

const rootReducer = combineReducers({ 
  auth: authReducer,
  [AppApi.reducerPath]: AppApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
