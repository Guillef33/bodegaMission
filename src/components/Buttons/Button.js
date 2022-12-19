import React, { useEffect, useState } from "react";
import { isResponseFull } from "../../helpers/validationsContext";

import "./Button.scss";

const Button = ({
  answerOption,
  resp,
  addResp,
  removeResp,
  id,
  questionText,
  maxQty
}) => {
  const [active, setActive] = useState(false);

  const handleOptionClick = (newResp) => {
    if (!active) {
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
      disabled={ (isResponseFull(resp, id, maxQty) && !active) ? true : false }
    >
      {answerOption.answerText}
    </button>
  );
};

export default Button;
