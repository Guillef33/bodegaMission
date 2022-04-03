import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Rating,
} from "@mui/material";

import { styled } from "@mui/material/styles";

// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import CircleIcon from "@mui/icons-material/Circle";

import "./survey.css";

function Screen3(props) {

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff6d75",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });


  return (
    <div>
      <div className="survey-content-wrapper">
        <div className="question-text">Nose & Palate Impression | Evaluation</div>
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Aromas</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="form-container-steps"
          >
            <div>
              <label style={{ color: "white" }}>Acidity</label>
              <Rating
                name="simple-controlled"
                // value={value}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
              <StyledRating
                name="customized-color"
                defaultValue={2}
                // getLabelText={(value: number) =>
                //   `${value} Heart${value !== 1 ? "s" : ""}`
                // }
                // precision={0.5}
                // icon={<CircleIcon fontSize="inherit" />}
                // emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
              />
              <div>
                <label style={{ color: "white" }}>Alcohol</label>
                <Rating
                  name="simple-controlled"
                  // value={value}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                />
              </div>
              <div>
                <label style={{ color: "white" }}>Lenght</label>
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
            onClick={() => props.handleClick("screen2")}
            className="playGameButton"
          >
            Back
          </button>
          <button
            onClick={() => props.handleClick("screen4")}
            className="playGameButton"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Screen3;
