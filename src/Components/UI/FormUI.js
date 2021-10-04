import React from 'react';
import classes from '../UI/FormUI.module.css';


export function FormUI(props) {
    const formClass=`${classes.formUI } ${props.className}`
   
    return (
        <div className={formClass}>
            {props.children}   
        </div>
    );
}

export function FormuiControl(props) {
    const formClass=`${classes['formUI-control']} ${props.className}`
   
    return (
        <div className={formClass}>
            {props.children}   
        </div>
    );
}




