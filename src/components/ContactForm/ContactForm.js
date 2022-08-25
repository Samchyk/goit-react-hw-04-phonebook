import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contacts/contact-actions';
import { getContacts } from '../../Redux/contacts/contact-selectors';
import s from './ContactForm.module.css';


export default function ContactForm() {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const contacts = useSelector(getContacts);
   const dispatch = useDispatch();

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   const onSubmitForm = e => {
      e.preventDefault();
      if (
         contacts.find(
            contact =>
               contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
         )
      ) {
         alert(name + ' is alredy in contacts');
         return;
      }
      dispatch(addContact(name, number));
      setName('');
      setNumber('');
   };

   return (
      <form className={s.form} onSubmit={onSubmitForm}>
         <label className={s.label}>
            Name
            <input
               onChange={e => setName(e.target.value)}
               type="text"
               name="name"
               value={name}
               placeholder="Name Lastname"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
            />
         </label>
         <label className={s.label}>
            Number
            <input
               onChange={e => setNumber(e.target.value)}
               type="tel"
               name="number"
               value={number}
               placeholder="XXX-XX-XX"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
         </label>
         <div >
            <button type="submit">Add contact</button>
         </div>
      </form>
   );
}
