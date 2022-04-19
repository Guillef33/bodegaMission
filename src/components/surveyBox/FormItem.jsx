import React, { useEffect, useState } from 'react'
import OptionButton from './OptionButton';
import RaicesMalvar from "../../assets/RaicesMalvar.png";

const FormItem = ({question, column, shape, setNewQuestion, newQuestion}) => {
  console.log(question);
  const [options, setOptions] = useState(null);

  const addNewQuestion = (option) => {

    if(newQuestion.answerOptions.length < 3){
      const data = {...newQuestion};
      data.answerOptions.push(option);
      setNewQuestion(data);
    }else{
      console.warn('elementos superados');
    }

  }

  const removeNewQuestion = (option) => {
    const data = newQuestion.answerOptions.filter(el => el.answerText !== option.answerText);
    setNewQuestion({
        questionText:
          "Now you have taste it, select which three varieties could be:",
        answerOptions: data,
        image: RaicesMalvar,
        id: 11,
        correctQty:1
    });
  }




  useEffect(() => {
    const arrayOptions = question.answerOptions.map( el => {return(<OptionButton 
        key={el.answerText} 
        shape={shape} 
        option={el} 
        addQuestion={addNewQuestion} 
        removeQuestion={removeNewQuestion}
        qId={question.id}
        qText={question.questionText} 
        correctQty={question.correctQty}
  />)});
    setOptions(arrayOptions);  
  }, [newQuestion])
  

  return (
    <div className={`grid-colums-${column} item-container`}>
      {options}
    </div>
  )
}

export default FormItem


