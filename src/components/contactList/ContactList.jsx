import css from './ContactList.module.css';
import ContactElementList from 'components/contactList/contactElementList/ContactElementList';
import { useDispatch, useSelector } from 'react-redux';
import { deleted } from 'redux/contacts/contactsSlice';
import { contactsFilterSelector } from 'redux/filter/selectors';

export default function ContactList() {
  const contacts = useSelector(contactsFilterSelector);
  const dispatch = useDispatch();

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
