import React, { useState } from 'react'

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import './scss/OptionButton.scss';

const OptionButton = ({shape='rectangle', option, addQuestion, qId, qText}) => {

  const [state, setState] = useState(false);

  return (
    <button 
        className={`form-option-button form-option-button--${shape} form-option-button--${state ? 'active': ''}`}
        onClick={()=>{
          setState(!state); 
          if(qId===9){
            addQuestion(option)
          }
        }}
    >
        {option.answerText}
    </button>
  )
}

export default OptionButton;