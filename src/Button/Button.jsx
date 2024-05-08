import React from 'react';
import './Button.css';
export default function Button({ButtonText, Icon}) {
    return(
        <button className='button'>{ButtonText}{Icon}</button>
    )
}