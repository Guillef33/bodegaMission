import React, { useState } from "react";

import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";

import { db } from "../../data/config";

import "./Form.scss";

function FormInvitados() {
  const [emailSend, setEmailSend] = useState(false);

  const initialState = {
    nombre: "",
    email: "",
  };

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(e.target)
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
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Welcome</h2>
      <h3 className="form-text">
        Please share your email with us <br /> to start the game.
      </h3>
      <form onSubmit={onSubmit} className="form-wrapper">
        <label>Nombre</label>
        <input type="text" onChange={onChange} name="nombre" />
        <label>Email</label>
        <input type="email" onChange={onChange} name="email" />
        <button
          className="send-form-button"
          onClick={(e) => {
            onSubmit(e);
          }}
        >
          Submit
        </button>
        <div className="privacy-checkbox">
          <input type="checkbox" />
          <label>Acepto los terminos y condiciones</label>
        </div>
      </form>
    </div>
  );
}

export default FormInvitados;
