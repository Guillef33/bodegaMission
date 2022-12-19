import * as yup from "yup";

export const userSchemaSurvey = yup.object().shape({
  name: yup
    .string()
    .required("Add a valid name"),
  email: yup.string().email("Add a valid email").required("Add a valid email"),
});
