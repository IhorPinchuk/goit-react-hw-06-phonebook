import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { add } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contact = {
    id: nanoid(),
    name,
    number,
  };

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(add(contact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.form__name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Number
        <input
          className={css.form__number}
          type="tel"
          name="number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={css.form__btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
