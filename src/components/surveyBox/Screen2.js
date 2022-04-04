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
          {/* <div class="numRating">
              <div>
                <div>
                  <div>
                    <div>
                      <input id="rating1" type="radio" name="rating" value="1" />
                      <label for="rating1"><span>1</span></label>
                    </div>
                    <input id="rating2" type="radio" name="rating" value="2" />
                    <label for="rating2"><span>2</span></label>
                  </div>
                  <input id="rating3" type="radio" name="rating" value="3" checked />
                  <label for="rating3"><span>3</span></label>
                </div>
                <input id="rating4" type="radio" name="rating" value="4" />
                <label for="rating4"><span>4</span></label>
              </div>
              <input id="rating5" type="radio" name="rating" value="5" />
              <label for="rating5"><span>5</span></label>
            </div> */}
          {/* <RadioGroup
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
          </RadioGroup> */}
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
