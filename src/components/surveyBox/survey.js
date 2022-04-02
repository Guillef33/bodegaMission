import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { userSchema } from "../Form/userValidation";
// import "./Form.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";
import { db } from "../../data/config";
import Swal from "sweetalert2";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import Screen5 from "./Screen5";
import Screen6 from "./Screen6";

import Results from './Results'

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

import data from "./data";

function Survey() {
  const { currentStep, pasarStep, volverStep } = useContext(AppContext);

  console.log(data.lenght);
  console.log(currentStep);

  function renderStep(step) {
  
  }

  // setup useState
  const [survey, setSurvey] = useState("screen1");

  // create a handleClick function
  const handleClick = (surveyScreen) => {
    setSurvey(surveyScreen);
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
         {(() => {
        switch (survey) {
          case "screen1":
            return <Screen1 handleClick={handleClick} />;
          case "screen2":
            return <Screen2 handleClick={handleClick} />;
          case "screen3":
            return <Screen3 handleClick={handleClick} />;
          case "screen4":
            return <Screen4 handleClick={handleClick} />;
          case "screen5":
            return <Screen5 handleClick={handleClick} />;
          case "screen6":
            return <Screen6 handleClick={handleClick} />;
          case "results":
            return <Results />;
          default:
            return null;
        }
      })()}
          
      </div>
    </>
  );
}

export default Survey;


          // <Formik
          //   validationSchema={userSchema}
          //   initialValues={{ name: "", email: "" }}
          //   // onSubmit={handleSubmit}
          // >
          //   {renderStep(currentStep)}
          // </Formik> 
