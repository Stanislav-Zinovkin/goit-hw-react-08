import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import styles from "./LoginForm.module.css"
import { loginValidationSchema } from "../../validation/Schema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations"

const LoginForm = () => {
    const dispatch = useDispatch();

const handleSubmit = async(values, {resetForm}) => {
    try {
        await dispatch(login(values)).unwrap();
        console.log("login success");
        resetForm();
    }catch{console.log("login failed");}
   
};

    
    return (
        <Formik
        initialValues={{email: "", password: ""}}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label htmlFor={emailFieldId} className={styles.label}>Email</label>
                <Field type="email" name="email" className={styles.input}/>
                <ErrorMessage component="span" name="email" className={styles.error}/>
                <label htmlFor={passwordFieldId} className={styles.label}>Password</label>
                <Field type="password" name="password" className={styles.input}/>
                <ErrorMessage component="span" name="password" className={styles.error}/>
                <button type="submit" className={styles.button}>Log In</button>
            </Form>

        </Formik>
    )
}
export default LoginForm;