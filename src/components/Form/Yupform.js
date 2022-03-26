import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
import "./Form.scss";

const Yupform = () => {
  let navigate = useNavigate();
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData, isValid);
    dataBase();
    setTimeout(() => navigate("/"), 4000);
  };
  const dataBase = () => {
    console.log("aca se puede integrar la funcion de la database");
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Welcome</h2>
      <h3 className="form-text">
        Please share your email with us <br /> to start the game.
      </h3>
      <Formik
        validationSchema={userSchema}
        initialValues={{ name: "", email: "" }}
        onSubmit={dataBase}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper" onSubmit={createUser}>
            <label> Ingrese su nombre </label>
            <Field name="name" type="text" placeholder="Ingrese su nombre" />
            {errors.name && touched.name ? (
              <p className="validation-Error">{errors.name}</p>
            ) : null}
            {/* <ErrorMessage name="name" /> */}
            <label> Ingrese su email </label>
            <Field name="email" type="email" placeholder="Ingrese su e-mail" />
            {errors.email && touched.email ? (
              <p className="validation-Error">{errors.email}</p>
            ) : null}
            <button className="send-form-button" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Yupform;
