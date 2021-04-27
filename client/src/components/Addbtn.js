import React from "react";
import "./Addbtn.css";


export const Addbtn = ({ 
    children,
    type,
    onClick,
}) => {
    return(

         <button type={type} onClick={(onClick)} className="button-5"><span className="link-content">NEW POST</span> {children}</button>
    );
};