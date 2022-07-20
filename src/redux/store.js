import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
import productReducer from './productSlice';
import notifReducer from './notifSlice';
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
export const store = configureStore({
  reducer: {
    users: userReducer,
    product: productReducer,
    notif: notifReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});