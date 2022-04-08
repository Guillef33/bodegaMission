import React from 'react'

const FormItem = ({children}) => {
    //Acá paso por children los componentes de MUI y defino unos botones para pasar de pregunta
  return (
    <div>
        {children}
    </div>
  )
}

export default FormItem