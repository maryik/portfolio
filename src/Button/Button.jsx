import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom'
export default function Button({ButtonText, Icon, to, onClick}) {
    return(
        <Link to={to} className="button" onClick={onClick}>
            {Icon}
            {ButtonText}
        </Link>
    )
}