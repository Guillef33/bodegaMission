import React, { useEffect, useState } from 'react'
import OptionButton from './OptionButton';

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




  useEffect(() => {
    const arrayOptions = question.answerOptions.map( el => {return(<OptionButton 
                                                                        key={el.answerText} 
                                                                        shape={shape} 
                                                                        option={el} 
                                                                        addQuestion={addNewQuestion} 
                                                                        qId={question.id}
                                                                        qText={question.questionText} 

                                                                  />)});
    setOptions(arrayOptions);  
  }, [])
  

  return (
    <div className={`grid-colums-${column} item-container`}>
      {options}
    </div>
  )
}

export default FormItem


