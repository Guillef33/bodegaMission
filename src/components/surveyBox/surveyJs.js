import React, { useCallback, useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import "./Newsurvey.css";

import "survey-react/modern.min.css";
import { Survey, StylesManager, Model } from "survey-react";

import Results from "./Results";

StylesManager.ThemeColors["$main-color"] = "red";

StylesManager.applyTheme("modern");

// var defaultThemeColors = StylesManager.ThemeColors["default"];

// defaultThemeColors["$header-background-color"] = "red";
// defaultThemeColors["$body-container-background-color"] = "green";

// defaultThemeColors["$main-color"] = "blue";
// defaultThemeColors["$main-hover-color"] = "lightblue";
// defaultThemeColors["$body-background-color"] = "cyan";
// defaultThemeColors["$inputs-background-color"] = "magenta";
// defaultThemeColors["$text-color"] = "black";
// defaultThemeColors["$header-color"] = "lime";
// defaultThemeColors["$border-color"] = "yellow";

// defaultThemeColors["$disable-color"] = "#dbdbdb";
// defaultThemeColors["$progress-text-color"] = "#9d9d9d";
// defaultThemeColors["$disabled-label-color"] = "rgba(64, 64, 64, 0.5)";
// defaultThemeColors["$slider-color"] = "white";
// defaultThemeColors["$disabled-switch-color"] = "#9f9f9f";
// defaultThemeColors["$disabled-slider-color"] = "#cfcfcf";

const surveyJson = {
  pages: [
    {
      elements: [
        {
          name: "aromas",
          title: "Nose & Palate Impression | Aromas",
          type: "checkbox",
          colCount: 3,
          choices: [
            { value: 15, text: "Vanilla" },
            { value: 14, text: "Apple Blossom" },
            { value: 13, text: "Jasmine" },
            { value: 12, text: "Honeysuckle" },
            { value: 11, text: "Orange Blossom" },
            { value: 10, text: "Zest" },
            { value: 9, text: "Apricot" },
            { value: 8, text: "White peach" },
            { value: 7, text: "Fresh almonds" },
            { value: 6, text: "Banana" },
            { value: 5, text: "Pear/ apple" },
            { value: 4, text: "Lychee" },
            { value: 3, text: "Melon" },
            { value: 2, text: "Pineapple" },
            { value: 1, text: "Citrus" },
          ],
          isRequired: true,
        },
      ],
    },
    // {
    //   elements: [
    //     {
    //       name: "Intensity",
    //       title: "Intensity",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //     {
    //       name: "Swetness",
    //       title: "Swetness",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //     {
    //       name: "body",
    //       title: "body",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //   ],
    // },
    // {
    //   elements: [
    //     {
    //       name: "Acidity",
    //       title: "Acidity",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //     {
    //       name: "Alcohol",
    //       title: "Alcohol",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //     {
    //       name: "Lenght",
    //       title: "Lenght",
    //       type: "rating",
    //       rateMin: 0,
    //       rateMax: 5,
    //     },
    //   ],
    // },
    // {
    //   elements: [
    //     {
    //       type: "matrix",
    //       name: "nose",
    //       title: "Nose & Palate Impression | Evaluation",
    //       columns: [
    //         {
    //           value: 1,
    //           text: "1",
    //         },
    //         {
    //           value: 2,
    //           text: "2",
    //         },
    //         {
    //           value: 3,
    //           text: "3",
    //         },
    //         {
    //           value: 4,
    //           text: "4",
    //         },
    //         {
    //           value: 5,
    //           text: "5",
    //         },
    //       ],
    //       rows: [
    //         {
    //           value: "Intensity",
    //           text: "Intensity",
    //         },
    //         {
    //           title: "Swetness",
    //           text: "Swetness",
    //         },
    //         {
    //           value: "Body",
    //           text: "Body",
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      elements: [
        {
          type: "matrix",
          name: "nose",
          title: "Nose & Palate Impression | Evaluation",
          columns: [
            {
              value: 1,
              text: "1",
            },
            {
              value: 2,
              text: "2",
            },
            {
              value: 3,
              text: "3",
            },
            {
              value: 4,
              text: "4",
            },
            {
              value: 5,
              text: "5",
            },
          ],
          rows: [
            {
              value: "Intensity",
              text: "Intensity",
            },
            {
              title: "Swetness",
              text: "Swetness",
            },
            {
              value: "Body",
              text: "Body",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          type: "matrix",
          name: "nose",
          title: "Nose & Palate Impression | Evaluation",
          columns: [
            {
              value: 1,
              text: "1",
            },
            {
              value: 2,
              text: "2",
            },
            {
              value: 3,
              text: "3",
            },
            {
              value: 4,
              text: "4",
            },
            {
              value: 5,
              text: "5",
            },
          ],
          rows: [
            {
              value: "Acidity",
              text: "Acidity",
            },
            {
              title: "Alcohol",
              text: "Alcohol",
            },
            {
              value: "Lenght",
              text: "Lenght",
            },
          ],
        },
      ],
    },
    {
      elements: [
        {
          name: "satisfaction-score",
          title: "How would you describe your experience with our product?",
          type: "radiogroup",
          choices: [
            { value: 3, text: "2018" },
            { value: 2, text: "2020" },
            { value: 1, text: "2022" },
          ],
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "three varieties",
          title: "Now you have taste it, select which three varieties could be",
          type: "checkbox",
          colCount: 3,
          choices: [
            { value: 10, text: "Garnacha Blanca" },
            { value: 9, text: "Albariño" },
            { value: 8, text: "Godello" },
            { value: 7, text: "Bobal" },
            { value: 6, text: "Albarin" },
            { value: 5, text: "Albillo" },
            { value: 4, text: "Malvar" },
            { value: 3, text: "Mencía" },
            { value: 2, text: "Rufete" },
            { value: 1, text: "Verdejo" },
          ],
          isRequired: true,
        },
      ],
    },
    {
      elements: [
        {
          name: "regions",
          title: "From the regions listen below, pick the ones that could be",
          type: "checkbox",
          colCount: 3,
          choices: [
            { value: 10, text: "Terra Alta" },
            { value: 9, text: "Rias Baixas" },
            { value: 8, text: "El Bierzo" },
            { value: 7, text: "Utiel-Requena" },
            { value: 6, text: "Tierra de León" },
            { value: 5, text: "Cigales" },
            { value: 4, text: "Madrid" },
            { value: 3, text: "Ribera Sacra" },
            { value: 2, text: "Sierra de Salamanca" },
            { value: 1, text: "Rueda" },
          ],
          isRequired: true,
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  pageNextText: "Next",
  completeText: "Submit",
  showPrevButton: true,
  pagePrevText: "Back",
  //   firstPageIsStarted: true,
  //   startSurveyText: "Take the Survey",
    completedHtml: "Thank you for your survey!",
  //   showPreviewBeforeComplete: "showAnsweredQuestions",
};

function App() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);
  

  let navigate = useNavigate();

    const displayResults = useCallback((sender) => {
        navigate('/results');
      setSurveyResults(JSON.stringify(sender.data, null, 4));
      setIsSurveyCompleted(true);
    }, []);


    // survey.onComplete.add(displayResults);

  return (
    <div className="survey-container">
      <Survey model={survey} id="surveyContainer" />
 {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: "pre" }}>{surveyResults}</code>
          {/* {/* <Results />  */}
        </>
      )} 

    </div>
  );
}

export default App;
