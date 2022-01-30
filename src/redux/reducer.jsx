import { combineReducers } from 'redux';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      return [...state, payload];

    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'CHANGE_FILTER':
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
