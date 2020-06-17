import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(5, "Name must be at least 5 characters long.")
        .required("Please add your name"),
    email: Yup
      .string()
      .email("Must be a valid email address.")
      .required("Please add your email address."),
    password: Yup
      .string()
      .min(6, "Passwords must be at least 6 characters long.")
      .required("Password is Required"),
    terms: Yup
      .boolean()
      .oneOf([true], "You must accept Terms and Conditions")
  });

  export default formSchema;