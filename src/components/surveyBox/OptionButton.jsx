import React from 'react'

import './scss/OptionButton.scss';

const OptionButton = ({shape='rectangle', option, addNewQuestion}) => {
  return (
    <button 
        className={`form-option-button form-option-button--${shape}`}
        onClick={()=>{ 
          addNewQuestion(option)
        }}
    >
        {option.answerText}
    </button>
  )
}

export default OptionButton