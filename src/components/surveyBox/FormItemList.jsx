import React from 'react'
import FormItem from './FormItem';
import data from './data';

import './scss/FormItem.scss';

const FormItemList = ({currentScreen, formik, }) => {


    switch (currentScreen + 1){
        case 1:
            return(
                <FormItem key={1} question={data[currentScreen]} >

                {/*Acá colocamos los componentes de MUI*/}

                </FormItem>
            )
        case 2:
            return(<p>El 2</p>)
        case 3:
            <FormItem key={2} />
            break;
        default:
            return(<p style={{color:"white"}}>La opción de pantalla no existe</p>)
    }

}

export default FormItemList;