import shortid from "shortid";

export const addContact = data => ({
  type: 'ADD_CONTACT',
  payload: {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      },
});

export const deleteContact = contactId => ({
  type: 'DELETE_CONTACT',
  payload: contactId,
});

export const filterContacts = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});
