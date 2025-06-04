import React from "react";
import Contact from "./Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from  "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { createSelector } from "@reduxjs/toolkit";

const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
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
