import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import searchApi  from './../queries/navSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  [searchApi.reducerPath]: searchApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
