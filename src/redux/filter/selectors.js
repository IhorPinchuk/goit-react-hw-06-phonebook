export const filterSelector = state => state.filter;

export const contactsFilterSelector = state => {
  const contacts = state.contacts.contacts;
  const filter = state.filter.filter;

  return contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};
