import React from 'react'

import './scss/OptionButton.scss';

const OptionButton = ({shape='rectangle', option}) => {
  return (
    <button 
        className={`form-option-button form-option-button--${shape}`}

    >
        {option}
    </button>
  )
}

export default OptionButton