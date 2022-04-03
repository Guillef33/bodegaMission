import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
} from "@mui/material";

import "./survey.css";

function Screen2(props) {
  return (
    <div>
      <div className="survey-content-wrapper">
        <div className="question-text">
          Nose & Palate Impression | Evaluation
        </div>
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
          >
            <div>
              <label style={{ color: "white" }}>Nose & Palate Impression</label>
              <Rating
                name="simple-controlled"
                // value={value}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
              <div>
                <label style={{ color: "white" }}>Swetness</label>
                <Rating
                  name="simple-controlled"
                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
              </div>
              <div>
                <label style={{ color: "white" }}>Intensity</label>
                <Rating
                  name="simple-controlled"
                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
              </div>
            </div>
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
