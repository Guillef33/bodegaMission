import React, { useState } from 'react'

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import './scss/OptionButton.scss';

const OptionButton = ({shape='rectangle', option, addQuestion, qId, qText}) => {

  let navigate = useNavigate();
  const [state, setState] = useState(false);

  const showResultsModal = () => {
    Swal.fire({
      title: "Thank you",
      icon: "info",
      text: "Now you can see the correct answer",
      confirmButtonText: "Ok"
  })};

  return (
    <button 
        className={`form-option-button form-option-button--${shape} form-option-button--${state ? 'active': ''}`}
        onClick={()=>{
          setState(!state); 
          if(qId===9){
            addQuestion(option)
          } else if (qId === 11) {
            console.log(qId)
            showResultsModal();
            navigate("/results")
          }          
        }}
    >
        {option.answerText}
    </button>
  )
}

export default OptionButton;