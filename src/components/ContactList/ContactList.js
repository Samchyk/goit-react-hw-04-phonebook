import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';
import { getVisibleContacts } from '../../Redux/contacts/contact-selectors';
import { useSelector } from 'react-redux';

export default function ContactList() {
   const contacts = useSelector(getVisibleContacts);

   return (
      <ul className={s.list}>
         {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
         ))}
      </ul>
   );
}
