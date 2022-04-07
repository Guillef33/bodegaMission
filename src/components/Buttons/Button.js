import React, { useEffect, useState } from "react";

import "./Button.scss";

const Button = ({
  answerOption,
  resp,
  addResp,
  removeResp,
  id,
  questionText,
}) => {
  const [active, setActive] = useState(false);

  const handleOptionClick = (newResp) => {
    if (!active) {
      console.log("se añade respuesta");
      addResp(newResp);
      setActive(!active);
    } else {
      removeResp(id, answerOption.answerText);
      setActive(!active);
    }
  };

  useEffect(() => {
    //TODO: Probar que ande bien
    const currentAswenr = resp.find((el) => el.id === id);
    // console.log("currentAswenr", currentAswenr);
    if (currentAswenr) {
      if (
        currentAswenr.answerOption.some(
          (el) => el.answerText === answerOption.answerText
        )
      ) {
        setActive(true);
      } else {
        setActive(false);
      }
    } else {
      setActive(false);
    }
  }, [answerOption]);

  return (
    <button
      className={
        active ? "option-button option-button--active" : "option-button"
      }
      onClick={() => {
        handleOptionClick({
          id,
          questionText,
          answerOption: [answerOption],
        });
      }}
    >
      {answerOption.answerText}
    </button>
  );
};

export default Button;
