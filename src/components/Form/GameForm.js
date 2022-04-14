import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
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
    console.log(e.target);
    setValues({ ...values, [name]: value });
  };

  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData, isValid);

    const docRef = await addDoc(collection(db, "mails"), {
      values,
    });
    setValues(initialState);
    isValid && Swal.fire("Thank you", "Good luck", "success");
    isValid && setEmailSend(docRef.id);
    isValid && setTimeout(() => navigate("/score"), 3000);
  };

  return (
    <Formik
      validationSchema={userSchema}
      initialValues={{ name: "", email: "" }}
    >
      {({ errors, touched }) => (
        <Form className="form-wrapper-game" onSubmit={createUser}>
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            onInput={handleChange}
            value={values.name}
          />
          {errors.name && touched.name ? (
            <p className="validation-Error">{errors.name}</p>
          ) : null}
          {/* <ErrorMessage name="name" /> */}
          <Field
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