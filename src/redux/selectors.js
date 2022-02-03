/*import { createSelector } from '@reduxjs/toolkit';*/
import { store } from './store';

/*export const getContacts = state => state.contacts.items;
console.log(getContacts());*/

export const getContacts = () => store.getState().contacts.items;

export const getFilterValue = () => store.getState().contacts.filter;

export const getVisibleContact = (contacts, filter) => {
  const normalValueFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalValueFilter),
  );
};

/*export const findContact = createSelector(getContacts, contacts => {
  return contacts.find(contact => contact.name === name);
});*/
