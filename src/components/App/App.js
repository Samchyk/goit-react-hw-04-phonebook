import { useState, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components//ContactList/ContactList';

const contactsList = [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
   const [contacts, setContacts] = useState(
      () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList
   );
   const [filterCont, setFilterCont] = useState('');

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   const addContact = newContact => {
      setContacts([...contacts, newContact]);
   };

   const onChangeFilter = e => setFilterCont(e.target.value);

   const deleteContact = id => {
      setContacts(prev => prev.filter(contact => contact.id !== id));
   };

   const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCont.toLowerCase())
   );

   return (
      <div>
         <h1>Phonebook</h1>
         <ContactForm
            addContact={addContact}
            visibleContacts={visibleContacts}
         />
         <h2>Contacts</h2>
         <Filter filter={filterCont} onChange={onChangeFilter} />
         <ContactList
            visibleContacts={visibleContacts}
            deleteContact={deleteContact}
         />
      </div>
   );
}
