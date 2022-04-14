import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
import "./Form.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";
import { AppContext } from "../../context/AppContext";

//Traer del context la data

const SurveyForm = () => {
  let navigate = useNavigate();
  // const [emailSend, setEmailSend] = useState(false);
  const {
    formResp  
  } = useContext(AppContext);

  const initialState = {
    name: "",
    email: "",
    responses:[...formResp]
    // State de Preguntas
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    setValues({ ...values, [name]: value });
  };

  const surveySubmit = async (event) => {
    event.preventDefault();
    console.warn('SE detuvo submit');
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      // agregar las respuestas del usuario
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData, isValid);

    const docRef = await addDoc(collection(db, "surveys"), {
      values,
    });
    setValues(initialState);
    isValid &&
      Swal.fire(
        {
          title: "Thank you",
          icon: "success",
          text: "Now you can see the correct answer",
          confirmButtonText: "Ok",
          customClass: "button-about",
        },
        isValid && setEmailSend(docRef.id),
        isValid && setTimeout(() => navigate("/results"), 4000)
      );
  }

  //Arreglar Guilleur feedback
  return (
    <div className>
      <h3 className="form-h3-survey">
        Please complete your name and email so we can store your feedback
      </h3>
      <Formik
        validationSchema={userSchema}
        initialValues={{ name: "", email: "" }}
        // onSubmit={dataBase}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper" onSubmit={surveySubmit}>
            <label className="survey-label"> Your name </label>
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
            <label className="survey-label"> Your email </label>
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
            <button
              className="send-form-button send-form-button-survey"
              type="submit"
              // onClick={(e) => {
              //   onSubmit(e);
              // }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
