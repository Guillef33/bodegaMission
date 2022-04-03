import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen2(props) {
  return (
    <div
      className="question-container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="survey-content-wrapper">
        <h2>NOSE & PALATE IMPRESSION | EVALUATION</h2>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
          >
            <FormControlLabel
              value="Nose & Palate Impression"
              control={<Radio />}
              label="Nose & Palate Impression"
            />
            <FormControlLabel
              value="Swetness"
              control={<Radio />}
              label="Swetness"
            />
            <FormControlLabel
              value="Intensity"
              control={<Radio />}
              label="Intensity"
            />
          </RadioGroup>
        </FormControl>
        <div className="survey-buttons-wrapper">
          <button
            onClick={() => props.handleClick("screen1")}
            className="playGameButton"
          >
            Back
          </button>
          <button
            onClick={() => props.handleClick("screen3")}
            className="playGameButton"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
