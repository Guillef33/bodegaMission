import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen3(props) {
  return (
    <div
      className="question-container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
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
            value="Acidity"
            control={<Radio />}
            label="Acidity"
          />
          <FormControlLabel
            value="Alcohol"
            control={<Radio />}
            label="Alcohol"
          />
          <FormControlLabel value="Lenght" control={<Radio />} label="Lenght" />
        </RadioGroup>
        <button
          onClick={() => props.handleClick("screen4")}
          className="playGameButton"
        >
          Next
        </button>
      </FormControl>
    </div>
  );
}

export default Screen3;
