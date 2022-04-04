import React, { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import Buttons from "../Buttons/Button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Results from './Results';

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  Paper,
  esRadio,
  setEsRadio,
} from "@mui/material";

import "./survey.css";

function Consolidado(props) {
  const [others, setOthers] = useState("");

  const {
    resp,
    addResp,
    removeResp,
    data,
    questions,
    handleClose,
    currentScreen,
    setCurrentScreen,
    pasarScreen,
    volverScreen,
    results,
    setResults
  } = useContext(AppContext);

  return (
    <>
      {results ? (
        <Results />
      ) : (
        <div className="survey-content-wrapper">
          {/* <div className="question-text">Nose & Palate Impression | Aromas</div> */}
          <div className="buttons-indicators">
            <button className="arrow-forward" onClick={() => volverScreen()}>
              {" "}
              <IoIosArrowBack />
              <p>Back</p>
            </button>
            <button className="arrow-back" onClick={() => pasarScreen()}>
              {" "}
              <IoIosArrowForward />
              <p>Next</p>
            </button>
          </div>

          <div>
            <button className="closeBtn" onClick={handleClose}></button>
            <h2 className="question-number">
              Step{" "}
              <span style={{ fontWeight: "bold" }}>
                {data[currentScreen].id}
              </span>{" "}
              of {data.length}
            </h2>
            <div className="question-section">
              <div className="question-count"></div>
              <div className="question-text">
                {data[currentScreen].questionText}
              </div>
            </div>
          </div>
          <div className="grid-of-three">
            {data[currentScreen].answerOptions.map((answerOption, index) => (
              

              <Buttons
                key={index}
                resp={resp}
                addResp={addResp}
                removeResp={removeResp}
                id={questions[currentScreen].id}
                questionText={questions[currentScreen].questionText}
                answerOption={answerOption}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Consolidado;
