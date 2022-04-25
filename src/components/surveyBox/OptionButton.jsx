import React, { useContext, useState,useEffect } from 'react'

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import './scss/OptionButton.scss';
import { AppContext } from '../../context/AppContext';
import { getAnswerById, getQtyAnswers, inCollection } from '../../helpers/validationsContext';

const OptionButton = ({shape='rectangle', option, addQuestion, removeQuestion, qId, qText, correctQty}) => {

  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);

  const { formResp, addFormResp,removeFormResp } = useContext(AppContext);

  useEffect(() => {
    if(inCollection(qId,formResp)) {

      if( getQtyAnswers(formResp, qId) >= correctQty){
        setActive(true);
        let answerOptions = getAnswerById(formResp, qId).answerOptions;
        
        if(answerOptions.some(el => el.answerText == option.answerText)){//para pintar los botones que ya fueron seleccionados
          console.warn('se ejecuta pintar');
          setState(true);
        }
      }else{
        setActive(false);
      }
  

      
    }
  }, [formResp, state, active])
  

  return (
    <button 
        className={`form-option-button form-option-button--${shape} form-option-button--${state ? 'active': 'nadaquever'}`}
        onClick={()=>{
          console.log('click', state);
          
          setState(!state);
          
          if(!state){
            addFormResp({
              id:qId,
              questionText:qText,
              answerOptions:[option]
            });
            if(qId===9){addQuestion(option);console.log('se agrega')}
            
          }else{
            removeFormResp(qId, option.answerText)
            if(qId===9){removeQuestion(option);console.log('se remueve')}
          }

        }}
        disabled = { (active && !state) ? true : false }
    >
        {option.answerText}
    </button>
  )
}

export default OptionButton;