import React, { useEffect, useState } from 'react'
import FormItem from './FormItem';
import data from './data';

import './scss/FormItem.scss';

const FormItemList = ({currentScreen, formik, }) => {

    const [newQuestion, setNewQuestion] = useState(null)

    useEffect(() => {
        
    }, [])
    

    switch (currentScreen + 1){
        case 1:
            return(
                <>
                    <h2>{data[0].questionText}</h2>
                    <FormItem key={0} question={data[0]} />
                </>
                
            )
        case 2:
            return(
                <>  
                    <h2>Nose & Palate Impression</h2>

                    <h3>{data[1].questionText}</h3>
                    <FormItem key={1} question={data[1]} shape={'circle'} column="5" />

                    <h3>{data[2].questionText}</h3>
                    <FormItem key={2} question={data[2]} shape={'circle'} column="5" />

                    <h3>{data[3].questionText}</h3>
                    <FormItem key={3} question={data[3]} shape={'circle'} column="5" />
                </>
            );
        case 3:
            return(
                <>  
                    <h2>Nose & Palate Impression</h2>

                    <h3>{data[4].questionText}</h3>
                    <FormItem key={4} question={data[4]} shape={'circle'} column="5">
                    </FormItem>
                    <h3>{data[5].questionText}</h3>
                    <FormItem key={5} question={data[5]} shape={'circle'} column="5">
                    </FormItem>
                </>
                
            );

        case 4:
            return(
                <>  
                    <h2>{data[6].questionText}</h2>
                    <FormItem key={6} question={data[6]} />
                </>
                
            );
        case 5:
            return(
                <>  
                    <h2>{data[7].questionText}</h2>
                    <FormItem key={7} question={data[7]} />
                </>
                
            );
        case 6:
            return(
                <>  
                    <h2>{data[8].questionText}</h2>
                    <FormItem key={8} question={data[8]} />
                </>
                
            );
            case 6:
                return(
                    <>  
                        <h2>{data[8].questionText}</h2>
                        <FormItem key={8} question={data[8]} />
                    </>
                    
                );
        default:
            return(<p style={{color:"white"}}>La opción de pantalla no existe</p>)
    }

}

export default FormItemList;