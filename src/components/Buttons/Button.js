import React, { useEffect, useState } from 'react';


import './Button.scss';

const Button = ({ children }) => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [children]);
  

  return (
      <button
          className={active ? 'option-button option-button--active':'option-button'}
          onClick={() => {setActive(!active)}}
      >
          {children}                    
      </button>
  )
}

export default Button