import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../Redux/contacts/contact-actions';

export default function ContactItem({ id, name, number }) {
   const dispatch = useDispatch();
   return (
      <li className={s.item} id={id}>
         {name}: {number}
         <div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
               Delete
            </button>
         </div>
      </li>
   );
}
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
};
