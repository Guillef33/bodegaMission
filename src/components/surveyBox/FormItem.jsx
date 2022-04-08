import React, { useEffect, useState } from 'react'
import OptionButton from './OptionButton';

const FormItem = ({question, column}) => {
    //Acá paso por children los componentes de MUI y defino unos botones para pasar de pregunta
  console.log(question);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const arrayOptions = question.answerOptions.map( el => {return(<OptionButton option={el.answerText}/>)});
    setOptions(arrayOptions);  
  }, [question])
  

  return (
    <div className={`grid-colums${column} item-container`}>
      {options}
    </div>
  )
}

export default FormItem


