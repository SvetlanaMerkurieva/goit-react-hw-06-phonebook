import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onGhangeFilter,
}) {
  /* const localStorageKey = 'contacts';

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts]);

  const handleFormSubmit = data => {
    const isContact = contacts.find(({ name }) => name === data.name);

    if (isContact) {
      return window.alert(`Контакт с именем ${data.name} уже существет`);
    } else {
      const contact = {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== contactId);
    });
  };

  const changeFilter = e => {
    const value = e.target.value;
    setFilter(value);
  };*/

  const getVisibleContact = () => {
    const normalValueFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValueFilter),
    );
  };

  const visibleContacts = getVisibleContact();

  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h2 className={s.title}>Телефонная книга</h2>
        <ContactForm onSubmit={onAddContact} />
        <h3 className={s.title}>Контакты</h3>
        <Filter value={filter} onChange={onGhangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: () => dispatch(actions.addContact()),
    onDeleteContact: () => dispatch(actions.deleteContact()),
    onChangeFilter: () => dispatch(actions.filterContacts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
