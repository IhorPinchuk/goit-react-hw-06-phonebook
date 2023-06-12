import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts && isFirstRender.current) {
      setContacts(parsedContacts);
      isFirstRender.current = false;
      return;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = e => {
    const id = nanoid();
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];
    console.log(contactsLists);
    if (
      contactsLists.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      Notify.failure(`${name} is already in contacts.`);
    } else {
      contactsLists.unshift({ name, id, number });
    }

    setContacts(contactsLists);
  };

  const handleChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={handleChange} />
        <ContactList
          contacts={getFilterContacts()}
          handleDelete={handleDelete}
        />
      </section>
    </div>
  );
};
