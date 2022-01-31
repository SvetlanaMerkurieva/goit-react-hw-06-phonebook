import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './reducer';

const persistConfig = {
  key: 'initial',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
