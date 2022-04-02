import React from "react";

import { Formik, Field, Form } from "formik";

function Screen1() {
  return (
    <>
      {({ errors, touched }) => (
        <Form className="form-wrapper" 
        // onSubmit={createUser}
        >
          <label> Ingrese su nombre </label>
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            // onInput={handleChange}
            // value={values.name}
          />
          {errors.name && touched.name ? (
            <p className="validation-Error">{errors.name}</p>
          ) : null}
          {/* <ErrorMessage name="name" /> */}
          <label> Ingrese su email </label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            // onInput={handleChange}
            // value={values.email}
          />
          {errors.email && touched.email ? (
            <p className="validation-Error">{errors.email}</p>
          ) : null}
          <button className="send-form-button" type="submit">
            Next Question
          </button>
        </Form>
      )}
    </>
  );
}

export default Screen1;
