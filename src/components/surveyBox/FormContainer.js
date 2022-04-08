import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormItemList from "./FormItemList";
import data from "./data";

const FormContainer = () => {
  const validationSchema = yup.object({
    name: yup
      .string("Enter your email")
      .required("Name is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      //TODO: definir todos los datos que quiero recaudar
      name: 'juan cruz',
      email: 'email@email.com',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //Acá va el envío a firebase
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [currentQ, setCurrentQ] = useState(0);

  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
        <FormItemList  option={data[currentQ]}/>
      </form>
    </section>
  );
};

export default FormContainer;
