import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchemaSurvey } from "./userValidationForm";
import "./GameForm.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";

const GameForm = () => {
  let navigate = useNavigate();
  // const [emailSend, setEmailSend] = useState(false);
  const initialState = {
    name: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
    };
    const isValid = await userSchemaSurvey.isValid(formData);

    const docRef = await addDoc(collection(db, "mails"), {
      values,
    });
    setValues(initialState);
    isValid &&
      Swal.fire({
        title: "Thank you",
        icon: "success",
        customClass: "button-about",
      });
    isValid && setEmailSend(docRef.id);
    isValid && setTimeout(() => navigate("/score"), 3000);
  };

  return (
    <Formik
      validationSchema={userSchemaSurvey}
      initialValues={{ name: "", email: "" }}
    >
      {({ errors, touched }) => (
        <Form className="form-wrapper-game" onSubmit={createUser}>
          <Field
            className="form-game-input"
            name="name"
            type="text"
            placeholder="Enter your name"
            onInput={handleChange}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <p className="validation-Error">{errors.name}</p>
          ) : null}
          <Field
            className="form-game-input"
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            onInput={handleChange}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <p className="validation-Error">{errors.email}</p>
          ) : null}
          <button className="getResultButton" type="submit">
            Get Results
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default GameForm;
