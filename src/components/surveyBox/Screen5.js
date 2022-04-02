import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./survey.css";

function Screen5(props) {
  return (
    <div
      className="question-container"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2>NOW YOU HAVE TASTE IT, SELECT WHICH 3 VARIETIES COULD BE</h2>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          className="form-container-steps"
        >
          <FormControlLabel
            value="GARNACHA BLANCA"
            control={<Radio />}
            label="GARNACHA BLANCA"
          />
          <FormControlLabel
            value="ALBARIÑO"
            control={<Radio />}
            label="ALBARIÑO"
          />
          <FormControlLabel
            value="GODELLO"
            control={<Radio />}
            label="GODELLO"
          />
          <FormControlLabel
            value="ALBARIN"
            control={<Radio />}
            label="ALBARIN"
          />
          <FormControlLabel
            value="ALBILLO"
            control={<Radio />}
            label="ALBILLO"
          />
          <FormControlLabel value="MALVAR" control={<Radio />} label="MALVAR" />
          <FormControlLabel value="MENCÍA" control={<Radio />} label="MENCÍA" />
          <FormControlLabel value="RUFETE" control={<Radio />} label="RUFETE" />
          <FormControlLabel
            value="VERDEJO"
            control={<Radio />}
            label="VERDEJO"
          />
        </RadioGroup>

        <button
          onClick={() => props.handleClick("screen6")}
          className="playGameButton"
        >
          Next
        </button>
      </FormControl>
    </div>
  );
}

export default Screen5;
