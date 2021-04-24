import React from "react";
import "./Addbtn.css";


export const Addbtn = ({ 
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    return(
        // <button type={type} onClick={() => browserHistory.push('/postad')}><img src={Add}/>
        //     {children}
        // </button>

        // <button >
        //     {children}
        // </button>
         <button type={type} onClick={(onClick)} className="button-5"><span className="link-content">NEW POST</span> {children}</button>
    );
};