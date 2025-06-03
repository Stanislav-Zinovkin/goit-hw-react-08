import * as Yup from "yup"

export const loginValidationSchema = Yup.object({
    email : Yup.string()
    .email("Enter valid email adress")
    .required("Required field!"),

    password : Yup.string()
    .min("Password must be at least 4 characters")
    .required("Required field!"),
});
export const registrationValidationSchema = Yup.object({
    name: Yup.string()
    .min(4,"Name must be at least 4 characters.")
    .matches(
        /^(?=.*[A-Z])(?=.*\d).+$/,
        "Name must include at least one uppercase letter and one number"
      )
    .required("Required field!"),
    email : Yup.string()
    .email("Enter valid email adress")
    .required("Required field!"),

    password : Yup.string()
    .min("Password must be at least 4 characters")
    .required("Required field!"),
});