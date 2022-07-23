import { configureStore } from '@reduxjs/toolkit';
import userReducer from './usersSlice';
import productReducer from './productSlice';
import notifReducer from './notifSlice';
import transactionReducer from './transactionSlice';
export const store = configureStore({
  reducer: {
    users: userReducer,
    product: productReducer,
    notif: notifReducer,
    transaction: transactionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});
