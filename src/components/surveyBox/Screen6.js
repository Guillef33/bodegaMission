import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen6(props) {
  return (
    <div
      className="question-container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="survey-content-wrapper">
        <h2>FROM THE REGIONS LISTED BELOW, PICK THE ONES THAT COULD BE</h2>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
          >
            <FormControlLabel
              value="TERRA ALTA"
              control={<Radio />}
              label="TERRA ALTA"
            />
            <FormControlLabel
              value="RIAS BAIXAS"
              control={<Radio />}
              label="RIAS BAIXAS"
            />
            <FormControlLabel
              value="EL BIERZO"
              control={<Radio />}
              label="EL BIERZO"
            />
            <FormControlLabel
              value="UTIEL-REQUENA"
              control={<Radio />}
              label="UTIEL-REQUENA"
            />
            <FormControlLabel
              value="TIERRA DE LEON"
              control={<Radio />}
              label="TIERRA DE LEON"
            />
            <FormControlLabel
              value="CIGALES"
              control={<Radio />}
              label="CIGALES"
            />
            <FormControlLabel
              value="MADRID"
              control={<Radio />}
              label="MADRID"
            />
            <FormControlLabel
              value="RIBERA SACRA"
              control={<Radio />}
              label="RIBERA SACRA"
            />
            <FormControlLabel
              value="SIERRA DE SALAMANCA"
              control={<Radio />}
              label="SIERRA DE SALAMANCA"
            />
            <FormControlLabel value="RUEDA" control={<Radio />} label="RUEDA" />
          </RadioGroup>
        </FormControl>
        <button
          onClick={() => props.handleClick("results")}
          className="playGameButton"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Screen6;
