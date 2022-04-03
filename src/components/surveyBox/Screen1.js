import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  TextField,
  Paper,
} from "@mui/material";

import "./survey.css";

function Screen1(props) {
  const [others, setOthers] = useState("");

  return (
    <div>
      <div className="survey-content-wrapper">
        <h2>NOSE & PALATE IMPRESSION | AROMAS</h2>

        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
            style={{ display: "grid" }}
          >
            <FormControlLabel
              control={<Radio />}
              label="Pear/ apple"
              id="Pear/ apple"
              name="Pear/ apple"
              value={props.values.name}
              // value={props.formik.values.email}
              // onChange={props.formik.handleChange}
              // error={
              //   props.formik.touched.email && Boolean(props.formik.errors.email)
              // }
              // helperText={
              //   props.formik.touched.email && props.formik.errors.email
              // }
            />
            <FormControlLabel
              value="Lychee"
              control={<Radio />}
              label="Lychee"
            />
            <FormControlLabel value="Melon" control={<Radio />} label="Melon" />
            <FormControlLabel
              value="Pineapple"
              control={<Radio />}
              label="Pineapple"
            />
            <FormControlLabel
              value="Citrus"
              control={<Radio />}
              label="Citrus"
            />
            <FormControlLabel value="Zest" control={<Radio />} label="Zest" />
            <FormControlLabel
              value="Apricot"
              control={<Radio />}
              label="Apricot"
            />
            <FormControlLabel
              value="White peach"
              control={<Radio />}
              label="White peach"
            />
            <FormControlLabel
              value="Fresh almonds"
              control={<Radio />}
              label="Fresh almonds"
            />
            <FormControlLabel
              value="Banana"
              control={<Radio />}
              label="Banana"
            />
            <FormControlLabel
              value="Vanilla"
              control={<Radio />}
              label="Vanilla"
            />
            <FormControlLabel
              value="Apple Blossom"
              control={<Radio />}
              label="Apple Blossom"
            />
            <FormControlLabel
              value="Jasmine"
              control={<Radio />}
              label="Jasmine"
            />
            <FormControlLabel
              value="White peach"
              control={<Radio />}
              label="White peach"
            />
            <FormControlLabel
              value="Honeysuckle"
              control={<Radio />}
              label="Honeysuckle"
            />
            <FormControlLabel
              value="Orange Blossom"
              control={<Radio />}
              label="Orange Blossom"
            />
            <input
              type="text"
              value={others}
              placeholder="Others"
              className="others-input"
            ></input>
          </RadioGroup>
        </FormControl>
        <button
          onClick={() => props.handleClick("screen2")}
          className="playGameButton"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Screen1;
