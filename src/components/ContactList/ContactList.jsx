import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = useMemo(() => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter) ||
        contact.number.split('-').join('').includes(filter)
    );
  }, [contacts, filter]);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
