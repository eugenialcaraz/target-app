import * as yup from "yup";

const required = "All fields are required";

export const validationSchema = yup
  .object({
    first_name: yup.string().required(required),
    email: yup
      .string()
      .max(64, "Please enter a valid email")
      .required(required),
    password: yup
      .string()
      .min(6, "Password should be at least 6 characters long")
      .required(required),
    password_confirmation: yup
      .string()
      .min(6, "Password should be at least 6 characters long")
      .required(required),
    gender: yup.string().required(required),
  })
  .required(required);
