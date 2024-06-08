import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';
import searchApi  from './../queries/navSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  [searchApi.reducerPath]: searchApi.reducer,
  middleware: (getDefaultMiddleware: () => any[]) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;
