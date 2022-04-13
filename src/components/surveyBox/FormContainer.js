import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import FormItemList from "./FormItemList";

import './scss/FormContainer.scss';
import ControlButton from "./ControlButton";

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
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [currentScreen, setCurrentScreen] = useState(0);
  
  const [finish, setFinish] = useState(false)

  return (
    <section className="box-form-container">
      {finish ? "" : <h2>Step {currentScreen + 1} of 8</h2>}
      <ControlButton
        type={"back"}
        initial={0}
        limit={6}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
      <div className="box-form">
        <FormItemList
          currentScreen={currentScreen}
          // setQuestions={setQuestions}
          formik={formik}
          finish={finish}
          setFinish={setFinish}
        />
      </div>
      <ControlButton
        type={"next"}
        initial={0}
        limit={7}
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </section>
  );
};

export default FormContainer;
