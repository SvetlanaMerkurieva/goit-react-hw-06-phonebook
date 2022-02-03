import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h2 className={s.title}>Телефонная книга</h2>
        <ContactForm />
        <h3 className={s.title}>Контакты</h3>
        <Filter />
        <ContactList />
      </header>
    </div>
  );
}

/*const getVisibleContact = (contacts, filter) => {
  const normalValueFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalValueFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContact(items, filter);
  return {
    contacts: visibleContacts,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(actions.addContact({ name, number })),
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
    onChangeFilter: e => dispatch(actions.filterContacts(e.target.value)),
  };
};*/
export default App;
