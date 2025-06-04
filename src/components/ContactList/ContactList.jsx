import React from "react";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from  "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";


const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  if (filteredContacts.length === 0) {
    return <p className={styles.emptyMessage}>No contacts found.</p>;
  }
  return (
    <>
      <ul className={styles.contactList}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default ContactList;
