import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import React from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../redux/contacts/operations";

const ContactForm = ( ) => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numFieldId = useId();

  const contactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(70, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Number is not valid")
      .max(15, "Number is too long")
      .required("Required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={styles.form}>
        <label htmlFor={nameFieldId} className={styles.label}>
          Name
        </label>
        <Field type="text" name="name" className={styles.input} />
        <ErrorMessage name="name" component="span" className={styles.error} />
        <label htmlFor={numFieldId} className={styles.label}>
          Number
        </label>
        <Field type="tel" name="number" className={styles.input} />
        <ErrorMessage name="number" component="span" className={styles.error} />
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
