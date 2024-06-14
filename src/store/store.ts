import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import searchApi  from './../queries/navSlice';
import AppApi from './Api';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware).concat(AppApi.middleware),
});

export default store;
