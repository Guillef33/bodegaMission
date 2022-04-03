import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { useNavigate } from "react-router-dom";

import { Formik, Field, Form } from "formik";
import { userSchema } from "../Form/userValidation";
import { useFormik } from "formik";
import * as yup from "yup";

// Fibrebase
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";

// Screen Steps
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";
import Results from "./Results";
import Yupform from "../Form/Yupform";

import { Paper, CssBaseline } from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@material-ui/core/styles";

import "../Quiz/Quiz.scss";

function Survey() {
  // State for manage the switch
  const [survey, setSurvey] = useState("screen1");

  // handleClick function for changing the screens onClick
  const handleClick = (surveyScreen) => {
    setSurvey(surveyScreen);
  };

  const initialState = {
    name: "",
    email: "",
    survey: {
      // [screen1: "", screen2: "", screen3:"", screen4: "", screen5: "", screen6: ""]
    },
  };

  const [values, setValues] = useState(initialState);
  const [emailSend, setEmailSend] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(formData, isValid);

    const docRef = await addDoc(collection(db, "surveys"), {
      values,
    });
    setValues(initialState);
    // Swal.fire("Data loaded", "Now let`s start the mission", "success");
    setEmailSend(docRef.id);
    // setTimeout(() => navigate("/"), 4000);
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
        }}
      >
        <Formik
          validationSchema={userSchema}
          initialValues={{
            nombre: "",
            email: "",
            survey: {
              // [screen1: "", screen2: "", screen3:"", screen4: "", screen5: "", screen6: ""]
            },
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-wrapper" onSubmit={handleSubmit}>
              {(() => {
                switch (survey) {
                  case "screen1":
                    return (
                      <Screen1
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        values={values}
                      />
                    );
                  case "screen2":
                    return (
                      <Screen2
                        handleClick={handleClick}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        values={values}
                      />
                    );
                  case "screen3":
                    return <Screen3 handleClick={handleClick} />;
                  case "screen4":
                    return <Screen4 handleClick={handleClick} />;
                  case "screen5":
                    return <Screen5 handleClick={handleClick} />;
                  case "screen6":
                    return <Screen6 handleClick={handleClick} />;
                  case "results":
                    return <Results handleClick={handleClick} />;
                  case "form":
                    return <Yupform />;
                  default:
                    return null;
                }
              })()}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default Survey;
