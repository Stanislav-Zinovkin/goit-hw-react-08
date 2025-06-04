import React from "react";
import styles from "./AboutUsPage.module.css";

export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About the "Phonebook" App</h1>
      <p className={styles.text}>
        This web application is designed for convenient storage and management of your contacts.
        It allows you to:
      </p>
      <ul className={styles.list}>
        <li>➕ Add new contacts with names and phone numbers.</li>
        <li>🗑️ Delete unnecessary or outdated entries.</li>
        <li>🔍 Quickly find a contact by name using the built-in search.</li>
      </ul>
      <p className={styles.text}>
        Your data is safe — access to the features is available only after authorization.
        After registration, you can save contacts that will be available only to you.
      </p>
      <p className={styles.text}>
        This project was created for educational purposes. Technologies used:
      </p>
      <ul className={styles.list}>
        <li>⚛️ React</li>
        <li>📦 Redux Toolkit</li>
        <li>✅ Formik + Yup</li>
        <li>🔐 Token-based Authentication</li>
        <li>📁 LocalStorage with persistence</li>
        <li>📱 REST API for contact storage</li>
      </ul>
      <p className={styles.text}>
        Thank you for using our app!
      </p>
    </div>
  );
};


