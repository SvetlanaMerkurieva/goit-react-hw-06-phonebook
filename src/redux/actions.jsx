export const addContact = data => ({
  type: 'ADD_CONTACT',
  payload: data,
});

export const deleteContact = contactId => ({
  type: 'DELETE_CONTACT',
  payload: contactId,
});

export const filterContacts = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});
