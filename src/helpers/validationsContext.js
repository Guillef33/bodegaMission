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

export const getAnswerById = ( responses, id) => {
    const currentResp = responses.find(el => el.id === id);

    if(!currentResp){
        return null;
    }else{
        return currentResp;
    }
}