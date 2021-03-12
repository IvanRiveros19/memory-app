import React from "react";
import "./Button.css";

const Button = ({type, onClick, text}) => {
    return(
        <button className={`button button-${type}`} onClick={onClick}>{text}</button>
    );
}

export default Button;