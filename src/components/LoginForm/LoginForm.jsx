import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import styles from "./LoginForm.module.css"
import { loginValidationSchema } from "../../validation/Schema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations"
import { useId } from "react";

const LoginForm = () => {
    const dispatch = useDispatch();
    const emailFieldId = useId();
    const passwordFieldId = useId();

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
                <Field id={emailFieldId} type="email" name="email" className={styles.input}/>
                <ErrorMessage component="span" name="email" className={styles.error}/>
                <label htmlFor={passwordFieldId} className={styles.label}>Password</label>
                <Field id={passwordFieldId} type="password" name="password" className={styles.input}/>
                <ErrorMessage component="span" name="password" className={styles.error}/>
                <button type="submit" className={styles.button}>Log In</button>
            </Form>

        </Formik>
    )
}
export default LoginForm;