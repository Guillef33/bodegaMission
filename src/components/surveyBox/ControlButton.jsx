import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import './scss/ControlButton.scss';

const ControlButton = ({type, limit, initial, currentScreen, setCurrentScreen }) => {


    const handleClick = (op) =>{
        console.log(currentScreen);
        setCurrentScreen(currentScreen + op);

    }

    switch (type) {
        case 'next':
            return (<div className="box-form-control">
                <button className="button-icon" 
                    disabled={ currentScreen >= limit ? true : false  }
                    onClick={ ()=>{ handleClick(1) }}
                >
                    <IoIosArrowForward />
                </button>
                <span>Next</span>
            </div>);
        case 'back':
            return (<div className="box-form-control">
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