import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Ingrese un nombre valido"),
  email: yup
    .string()
    .email("Ingrese un email valido")
    .required("Ingrese un email valido"),
});
