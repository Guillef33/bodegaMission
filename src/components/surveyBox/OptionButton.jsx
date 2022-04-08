import React from 'react'

import './scss/OptionButton.scss';

const OptionButton = ({shape, option}) => {
  return (
    <button 
        className={`form-option-button ${shape}`}
    >
        {option}
    </button>
  )
}

export default OptionButton