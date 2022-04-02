import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "./userValidation";
import "./Form.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Buttons from "../Buttons/Button";

import Score from "../score/Score";
import About from "../about/AboutUs";

import "../Quiz/Quiz.scss";

import data from "./data";
import Screen1 from "./Screen1";

function Survey() {
  const {
    resp,
    addResp,
    removeResp,
    showScore,
    // questions,
    currentQuestion,
    handleClose,
    pasarPregunta,
    volverPregunta,
  } = useContext(AppContext);

  const [answers, setAnswers] = useState([]);

  console.log(currentQuestion);

  const handleOptionClick = (e, newResp) => {
    console.log("hiceclick");
    addResp(newResp);
  };

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
    <>
      <div
        className="question-container"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url(${data[currentQuestion].image})`,
        }}
      >
        <div className="question-content-wrapper">
          <Formik
            validationSchema={userSchema}
            initialValues={{ name: "", email: "" }}
            // onSubmit={dataBase}
          >
            <Screen1 />
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Survey;
