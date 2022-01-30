import shortid from 'shortid';

export const addContact = ({ name, number }) => ({
  type: 'ADD_CONTACT',
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: 'DELETE_CONTACT',
  payload: id,
});

export const filterContacts = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});
