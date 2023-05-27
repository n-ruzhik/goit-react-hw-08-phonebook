import { useSelector } from 'react-redux';
import { selectContacts, selectFilterByQuery } from '../../redux/selectors';
import ContactItem from '../ContactItem';
import css from './ContactList.module.css';

const selectVisibleContacts = (contacts, query) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectFilterByQuery);
  const visibleContacts = selectVisibleContacts(contacts, query);

  return (
    <ul className={css.list}>
      {contacts &&
        visibleContacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))}
    </ul>
  );
};

export default ContactList;
