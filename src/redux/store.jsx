import { createStore, combineReducers } from 'redux';
import contactsReducer from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = createStore(rootReducer);
