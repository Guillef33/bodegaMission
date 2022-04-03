import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
import "./Form.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";

const Yupform = () => {
  let navigate = useNavigate();
  // const [emailSend, setEmailSend] = useState(false);
  const initialState = {
    name: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);

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
    Swal.fire("Data loaded", "Now let`s start the mission", "success");
    setEmailSend(docRef.id);
    setTimeout(() => navigate("/"), 4000);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target);
    setValues({ ...values, [name]: value });
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
        // onSubmit={dataBase}
      >
        {({ errors, touched }) => (
          <Form className="form-wrapper" onSubmit={createUser}>
            <label> Ingrese su nombre </label>
            <Field
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              value={values.name}
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
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <p className="validation-Error">{errors.email}</p>
            ) : null}
            <button
              className="send-form-button"
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

export default Yupform;
