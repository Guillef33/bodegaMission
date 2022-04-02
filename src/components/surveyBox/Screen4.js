import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen4(props) {
  return (
    <div
      className="question-container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2>If you would need to guess the vintage:</h2>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          className="form-container-steps"
        >
          <FormControlLabel value="2018" control={<Radio />} label="2018" />
          <FormControlLabel value="2020" control={<Radio />} label="2020" />
          <FormControlLabel value="2022" control={<Radio />} label="2022" />
        </RadioGroup>
        <button
          onClick={() => props.handleClick("screen5")}
          className="playGameButton"
        >
          Next
        </button>
      </FormControl>
    </div>
  );
}

export default Screen4;
