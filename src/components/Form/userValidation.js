import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "The name must be at least 3 characters long.")
    .required("Add a valid name"),
  email: yup.string().email("Add a valid email").required("Add a valid email"),
});
