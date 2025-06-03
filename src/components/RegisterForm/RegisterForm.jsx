import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registrationValidationSchema } from "../../validation/Schema";
import styles from "./RegisterForm.module.css"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = async(values, {resetForm}) => {
        try{
            await dispatch(register(values)).unwrap();
            console.log("register success");
            resetForm();
        }catch(error){
            console.log("register failed");
        }
    }


    return (
            <Formik
            initialValues={{name:"", email: "", password: ""}}
            validationSchema={registrationValidationSchema}
            onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <label htmlFor={emailFieldId} className={styles.label}>Username</label>
                    <Field type="text" name="name" className={styles.input}/>
                    <ErrorMessage component="span" name="name" className={styles.error}/>
                    <label htmlFor={emailFieldId} className={styles.label}>Email</label>
                    <Field type="email" name="email" className={styles.input}/>
                    <ErrorMessage component="span" name="email" className={styles.error}/>
                    <label htmlFor={passwordFieldId} className={styles.label}>Password</label>
                    <Field type="password" name="password" className={styles.input}/>
                    <ErrorMessage component="span" name="password" className={styles.error}/>
                    <button type="submit" className={styles.button}>Register</button>
                </Form>
    
            </Formik>
        )
}
export default RegisterForm;