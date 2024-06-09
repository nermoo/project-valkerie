import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import searchApi  from './../queries/navSlice';


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(searchApi.middleware),
});

export default store;
