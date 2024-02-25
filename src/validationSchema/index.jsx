import * as yup from "yup";

const passwordFormat =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phnFormat = /^\+?[0-9]{0,3}[ -]?\(?\)?[0-9]{5}[ -]?[0-9]{5}$/;

export const schema = yup.object().shape({
  uName: yup.string().required("Enter your name"),
  email: yup
    .string()
    .email("Enter valid email")
    .required("This field is required"),
  phn: yup
    .string()
    .min(10, "Enter valid Mobile number")
    .matches(phnFormat, "Enter valid Mobile number")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be minimum 8 characters")
    .matches(
      passwordFormat,
      "Password must contain 1-digit, 1-Uppercase, 1-Symbol"
    )
    .required("This field is required"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("This field is required"),
});
