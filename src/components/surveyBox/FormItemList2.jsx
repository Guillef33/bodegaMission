import React, { useEffect, useState } from "react";
import FormItem from "./FormItem";
import RaicesMalvar from "../../assets/RaicesMalvar.png";
import data from "./data";

import "./scss/FormItem.scss";

import Results from "./Results";
import SurveyForm from "../Form/SurveyForm";

const FormItemList = ({ currentScreen, formik, finish, setFinish }) => {
  const [newQuestion, setNewQuestion] = useState({
    questionText:
      "From the 3 grape varieties  you selected before, which is your final guess?",
    answerOptions: [],
    image: RaicesMalvar,
    id: 14,
    correctQty: 1,
  });

  useEffect(() => {}, []);

  switch (currentScreen + 1) {
    case 8:
      return (
        <>
          <SurveyForm />
        </>
      );
    case 1:
      return (
        <>
          <h2>{data[0].questionText}</h2>
          <FormItem key={0} question={data[0]} column="3" />
        </>
      );
    case 2:
      return (
        <>
          <h2>Nose & Palate Impression</h2>

          <h3>{data[1].questionText}</h3>
          <FormItem key={1} question={data[1]} shape={"circle"} column="5" />

          <h3>{data[2].questionText}</h3>
          <FormItem key={2} question={data[2]} shape={"circle"} column="5" />

          <h3>{data[3].questionText}</h3>
          <FormItem key={3} question={data[3]} shape={"circle"} column="5" />

          <h3>{data[10].questionText}</h3>
          <FormItem key={10} question={data[10]} shape={"circle"} column="5" />
        </>
      );
    case 3:
      return (
        <>
          <h2>Nose & Palate Impression</h2>

          <h3>{data[4].questionText}</h3>
          <FormItem key={4} question={data[4]} shape={"circle"} column="5" />

          <h3>{data[5].questionText}</h3>
          <FormItem key={5} question={data[5]} shape={"circle"} column="5" />

          <h3>{data[6].questionText}</h3>
          <FormItem key={6} question={data[6]} shape={"circle"} column="5" />

          <h3>{data[11].questionText}</h3>
          <FormItem key={11} question={data[11]} shape={"circle"} column="5" />
        </>
      );

    case 4:
      return (
        <>
          <h2>{data[7].questionText}</h2>
          <FormItem key={7} question={data[7]} />
        </>
      );
    case 5:
      return (
        <>
          <h2>{data[8].questionText}</h2>
          <FormItem
            key={8}
            question={data[8]}
            setNewQuestion={setNewQuestion}
            newQuestion={newQuestion}
          />
        </>
      );
    case 6:
      return (
        <>
          <h2>{data[9].questionText}</h2>
          <FormItem key={9} question={data[9]} />
        </>
      );
    case 7:
      return (
        <>
          <h2>{newQuestion.questionText}</h2>
          <FormItem key={newQuestion.id} question={newQuestion} />
        </>
      );

    default:
      return <p style={{ color: "white" }}>La opción de pantalla no existe</p>;
  }
};

export default FormItemList;
