import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './usersSlice';
import productReducer from './productSlice';
import notifReducer from './notifSlice';
import transactionReducer from './transactionSlice';
import previewReducer from './previewSlice';
export const store = configureStore({
  reducer: {
    users: userReducer,
    product: productReducer,
    notif: notifReducer,
    transaction: transactionReducer,
    preview: previewReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger)
});
