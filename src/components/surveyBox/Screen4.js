import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import Buttons from "../Buttons/Button";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen4(props) {
  const {
    resp,
    addResp,
    removeResp,
    showScore,
    data,
    questions,
    currentQuestion,
    handleClose,
    pasarPregunta,
    volverPregunta,
    currentScreen,
    setCurrentScreen,
    pasarScreen,
    volverScreen
  } = useContext(AppContext);
  return (
    <div>
      <div className="survey-content-wrapper">
        <div className="question-text">
          If you would need to guess the vintage:
        </div>
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
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
            style={{ display: "grid" }}
          >
            <FormControlLabel value="2018" control={<Radio />} label="2018" />
            <FormControlLabel value="2020" control={<Radio />} label="2020" />
            <FormControlLabel value="2022" control={<Radio />} label="2022" />
          </RadioGroup>
        </FormControl>
        <div className="answer-section">
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
        <div className="survey-buttons-wrapper">
          <button
            onClick={() => props.handleClick("screen3")}
            className="playGameButton"
          >
            Back
          </button>
          <button
            onClick={() => props.handleClick("screen5")}
            className="playGameButton"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen4;
