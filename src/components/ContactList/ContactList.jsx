import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import {
  selectDeletedId,
  selectFilteredContacts,
} from '../../redux/contactsSlice.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const deletedId = useSelector(selectDeletedId);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li
          key={id}
          className={`${css.contactListItem} ${
            deletedId === id ? css.slideOut : ''
          }`}
        >
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
