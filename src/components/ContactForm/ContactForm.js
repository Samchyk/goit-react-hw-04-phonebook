import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const INITIALE_STATE = {
   name: '',
   number: '',
};

export default function ContactForm({ onSubmit, checkNewContact }) {
   const [{ name, number }, setState] = useState(INITIALE_STATE);

   const onChange = e => {
      const { name, value } = e.target;
      setState(prev => ({ ...prev, [name]: value }));
   };

   const onSubmitForm = e => {
      e.preventDefault();
      const newContact = {
         id: nanoid(5),
         name,
         number,
      };
      if (checkNewContact(newContact)) {
         return;
      }
      onSubmit(newContact);
      setState(INITIALE_STATE);
   };

   checkNewContact = newContact => {
      if (
         this.props.visibleContacts.find(
            contact =>
               contact.name.toLowerCase() === newContact.name.toLowerCase()
         )
      ) {
         alert(newContact.name + ' is alredy in contacts');
         return true;
      }
      return false;
   };
   return (
      <form className={s.form} onSubmit={onSubmitForm}>
         <label className={s.label}>
            Name
            <input
               onChange={onChange}
               type="text"
               name="name"
               value={name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
            />
         </label>
         <label className={s.label}>
            Number
            <input
               onChange={onChange}
               type="tel"
               name="number"
               value={number}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
         </label>
         <button type="submit">Add contact</button>
      </form>
   );
}

ContactForm.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   visibleContacts: PropTypes.func.isRequired,
};
