import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.container}>
      <ul className={css.card}>
        {visibleContacts.map((contact) => (
          <li className={css.cardWrap} key={contact.id}>
            <Contact id={contact.id} name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
}
