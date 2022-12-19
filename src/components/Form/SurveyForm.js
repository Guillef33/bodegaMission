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
  const { formResp } = useContext(AppContext);

  const [selectOption, setSelectOption] = useState(false);

  const initialState = {
    name: "",
    email: "",
    responses: [...formResp],
    // State de Preguntas
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSelect = (e) => {
    console.log(selectOption);
    setSelectOption(true);
  };

  const surveySubmit = async (event) => {
    event.preventDefault();
    console.warn("Se detuvo submit");
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      option: event.target[2].value,
      // agregar las respuestas del usuario
    };
    console.log(formData);
    let  isValid = await userSchema.isValid(formData);
     isValid = true;
    const docRef = await addDoc(collection(db, "surveys"), {
      values,
    });
    setValues(initialState);

    isValid &&
      Swal.fire(
        {
          title: "Ready to see the correct answer? ",
          icon: "success",
          confirmButtonText: "Ok",
          customClass: "button-about",
          timer: 3500,
        },
        isValid && setEmailSend(docRef.id),
        isValid && setTimeout(() => navigate("/results"), 4000)
      );
  };

  return (
    <div className>
      <h3 className="form-h3-survey">
        WHILE WE CALCULATE YOUR RESULTS, CLICK HERE TO BOOK A MEETING WITH US,
        AND WE WILL PREPARE A SPECIAL TASTING FOR YOU.
      </h3>

      <Formik
        validationSchema={userSchema}
        initialValues={{ name: "", email: "" }}
        // onSubmit={dataBase}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper" onSubmit={surveySubmit}>
            <label className="survey-label"> Select an option </label>
            <Field
              name="select"
              as="select"
              placeholder="Enter your name"
              onInput={handleSelect}
              value={values.select}
              className="form-survey-select"
            >
              <option value="barcelona">
                I want to schedule a meeting at Barcelona Wine Week
              </option>
              <option value="prowein">
                I want to schedule a meeting at Prowein
              </option>
              <option value="meeting">
                I want to schedule a meeting at Wine Expo{" "}
              </option>
              <option value="singapur">
                I want to schedule a meeting at Prowein Singapur{" "}
              </option>
            </Field>
            {errors.select && touched.select ? (
              <p className="validation-Error">{errors.select}</p>
            ) : null}

            {selectOption === true && (
              <>
                <label className="survey-label"> Your name </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  onInput={handleChange}
                  value={values.name}
                  className="form-survey-input"
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
                  className="form-survey-input"
                />
                {errors.email && touched.email ? (
                  <p className="validation-Error">{errors.email}</p>
                ) : null}
                <button
                  className="send-form-button send-form-button-survey"
                  type="submit"
                >
                  See more
                </button>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SurveyForm;
