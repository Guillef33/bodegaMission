import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

// import swal from "sweetalert";

import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";

import { db } from "../../data/config";

import "./Form.scss";

const Basic = () => {

  let navigate = useNavigate();

  const [toNext, setToNext] = useState(false);

   const [emailSend, setEmailSend] = useState(false);

   const initialState = {
     nombre: "",
     email: "",
   };

   const [values, setValues] = useState(initialState);

   const onChange = (e) => {
     const { value, name } = e.target;
     console.log(e.target);
     setValues({ ...values, [name]: value });
   };

   const onSubmit = async (e) => {
     e.preventDefault();
     console.log(values);

     const docRef = await addDoc(collection(db, "mails"), {
       values,
     });

     setValues(initialState);
     setEmailSend(docRef.id);
     navigate("/");

   };

  return (
    <div className="form-container">
      <h2 className="form-title">Welcome</h2>
      <h3 className="form-text">
        Please share your email with us <br /> to start the game.
      </h3>
      <Formik
        initialValues={{ email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = `Este campo es requerido`;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "El email no es valido. Intente de nuevo. ";
          } else if (!values.name) {
            errors.name = "Este campo es requerido";
          } else if (!/^[a-zA-Z0-9-]{4,}\b$/i.test(values.name)) {
            errors.name = `Must Contain 4 Characters`;
          }
          return errors;
        }}
        //   onSubmit={(values) => {
        //     console.log("email", values.email);
        //     console.log("password", values.password);

        //     // axios
        //     //   .post(`http://challenge-react.alkemy.org/`, {
        //     //     email: values.email,
        //     //     password: values.password,
        //     //   })
        //     //   .then((response) => {
        //     //     swal({
        //     //       title: "Felicidades estas logeado",
        //     //       text: JSON.stringify(values, null, 2),
        //     //       icon: "success",
        //     //       button: "aceptar",
        //     //     });
        //     //   })
        //     //   .then(() => {
        //     //     setToNext(true);
        //     //   })
        //     //   .catch((error) => {
        //     //     swal({
        //     //       title: "Error",
        //     //       text: "Usuario o contrasena incorrecto",
        //     //       icon: "error",
        //     //       button: "aceptar",
        //     //     });
        //     //   });
        //   }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={onSubmit} className="form-wrapper">
            <label> Ingrese tu nombre </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Ingrese tu nombre"
              // className="input input-password"
            />
            {errors.name && touched.name && (
              <p className="errors-formik">{errors.name}</p>
            )}
            <label> Ingrese tu email </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Ingrese tu email"
              className="input input-email"
            />

            {errors.email && touched.email && (
              <p className="errors-formik">errors.email</p>
            )}

            <button
              className="send-form-button"
              onClick={(e) => {
                onSubmit(e);

              }}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Basic;
