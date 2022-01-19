import { createStore } from 'redux';
import shortid from 'shortid';

const initialState = { contacts: [], filter: '' };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_CONTACT':
      const isContact = state.contacts.find(
        ({ name }) => name === payload.name,
      );

      if (isContact) {
        return window.alert(`Контакт с именем ${payload.name} уже существет`);
      } else {
        const contact = {
          id: shortid.generate(),
          name: payload.name,
          number: payload.number,
        };

        return { ...state, contact };
      }

    case 'DELETE_CONTACT':
      return state.contacts.filter(contact => contact.id !== payload.id);

    case 'CHANGE_FILTER':
      return { ...state, filter: payload };

    default:
      return state;
  }
};

export const store = createStore({ reducer });
