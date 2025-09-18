import * as yup from "yup";

export const validationsYup = yup.object({
    Email: yup.string().email("Invalid email").required("Email is empty"),
    Number: yup.string().required("Number is empty"),
    Address: yup.string().required("Your address is empty"),
    Password: yup
        .string()
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must be at least 8 characters, at least one uppercase letter, at least one lowercase letter and at least one number")
        .required("Password is empty")
});
