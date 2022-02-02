import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
console.log(getContacts());

/*export const findContact = createSelector(getContacts, contacts => {
  return contacts.find(contact => contact.name === name);
});*/
