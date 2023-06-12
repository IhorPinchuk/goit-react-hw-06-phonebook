import PropTypes from 'prop-types';

import css from './ContactList.module.css';
import ContactElementList from 'components/contactList/contactElementList/ContactElementList';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/contacts/selectors';
import { deleted } from 'redux/contacts/contactsSlice';

export default function ContactList() {
  const { contacts } = useSelector(contactsSelector);  
const dispatch = useDispatch()  

  return (
    <ul className={css.contact__list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact__item} key={id}>
          
          <ContactElementList
            name={name}
            number={number}
            handleClickDelete={() => dispatch(deleted(id))}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
