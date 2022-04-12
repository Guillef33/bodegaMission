import React, { useEffect, useState } from 'react'
import OptionButton from './OptionButton';

const FormItem = ({question, column, shape, setNewQuestion, newQuestion}) => {
  console.log(question);
  const [options, setOptions] = useState(null);

  const addNewQuestion = (option) => {

    const data = {...newQuestion};
    data.answerOptions.push(option);
    setNewQuestion(data);

  }

  useEffect(() => {
    const arrayOptions = question.answerOptions.map( el => {return(<OptionButton key={el.answerText} shape={shape} option={el} addQuestion={addNewQuestion} />)});
    setOptions(arrayOptions);  
  }, [])
  

  return (
    <div className={`grid-colums-${column} item-container`}>
      {options}
    </div>
  )
}

export default FormItem


