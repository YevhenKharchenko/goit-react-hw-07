import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice.js';
import css from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.inputsWrapper}>
        <p className={css.nameText}>
          <FaUser color="#4d5ae5" /> {name}
        </p>
        <p>
          <a href={`tel:+${number}`}>
            <FaPhone color="#4d5ae5" /> {number}
          </a>
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
