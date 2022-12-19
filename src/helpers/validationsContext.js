//Recibe un id y un una colección (array), devuelve true si el array tiene algún objeto que coincida con el id ingresado por parámetro
export const inCollection = (id, array) => array.some(el => el.id === id);



//devolver el length de las respuestas: recibe por parámertro el array con los objetos respuestas y devuelve cuántas respuestas están dentro
export const getQtyAnswers = ( responses, id ) => {

    const currentResp = responses.find(el => el.id === id);

    if(!currentResp){
        return 0;
    }else{
        return currentResp.answerOptions.length
    }

}

//recibe las respuesta del context y el id y devuelve la respuesta actual
export const getAnswerById = ( responses, id) => {
    const currentResp = responses.find(el => el.id === id);

    if(!currentResp){
        return null;
    }else{
        return currentResp;
    }
}

//devuelva un true si ya se seleccionó el número exacto de preguntas
export const isResponseFull = (responses, id, maxQty) => {

    const currentResp = getAnswerById(responses, id);

    if(currentResp){
        if(currentResp.answerOption.length===maxQty){
            return true;
        }else{
            return false
        }
    }else{
        return false;
    }
 
}

