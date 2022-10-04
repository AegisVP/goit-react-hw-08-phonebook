import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';
import { contactsAPI } from './phonebook/contactsAPI';

const phonebookReducer = combineReducers({
  [contactsAPI.reducerPath]: contactsAPI.reducer,
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const presistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    auth: presistedAuthReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  // middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsAPI.middleware],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
