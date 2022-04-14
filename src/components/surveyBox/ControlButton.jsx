import React, { useContext } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from '../../context/AppContext';
import { inCollection } from '../../helpers/validationsContext';
import { Toast } from '../../ui/toast';

import './scss/ControlButton.scss';

const ControlButton = ({type, limit, initial, currentScreen, setCurrentScreen }) => {
    const { formResp } = useContext(AppContext);

    const handleClick = async (op) =>{
        console.log(currentScreen);
        
        switch (currentScreen) {
            case 0:
                if(inCollection(1,formResp)){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            case 1:
                if(inCollection(2,formResp) && inCollection(3,formResp) && inCollection(4,formResp) ){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            case 2:
                if(inCollection(5,formResp) && inCollection(6,formResp) && inCollection(7,formResp) ){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            case 3:
                if(inCollection(8,formResp) ){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            case 4:
                if(inCollection(9,formResp) && formResp[8].answerOptions.length === 3){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose three answers'
                    });
                }
                break;
            case 5:
                if(inCollection(10,formResp)){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            case 6:
                if(inCollection(11,formResp)){
                    setCurrentScreen(currentScreen + op);
                }else{
                    await Toast.fire({
                        icon: 'warning',
                        title: 'Choose an answer'
                    });
                }
                break;
            
        
            default:
                break;
        }
        

    }

    switch (type) {
        case 'next':
            return (<div className="box-form-control box-form-control--rigth">
                <button className="button-icon" 
                    disabled={ currentScreen >= limit ? true : false  }
                    onClick={ ()=>{ handleClick(1) }}
                >
                    <IoIosArrowForward />
                </button>
                <span>Next</span>
            </div>);
        case 'back':
            return (<div className="box-form-control box-form-control--left">
                <button className="button-icon" 
                        disabled={ currentScreen <= initial ? true : false  }
                        onClick={ ()=>{ handleClick(-1) }}
                >
                    <IoIosArrowBack />
                </button>
                <span>Back</span>

            </div>)

    
        default:
            break;
    }

}

export default ControlButton