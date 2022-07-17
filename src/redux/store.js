import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
