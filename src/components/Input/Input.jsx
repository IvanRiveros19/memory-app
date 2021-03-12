import React from 'react';
import './Input.css';

const Input = ({ attribute, handleChange, errorParams={state: false} }) => {
    return(
        <div className="input-container">
            <input id={attribute.id} type={attribute.type} placeholder={attribute.placeholder}
                   onChange={(e) => handleChange(e.target.value)}
                   className={`input ${errorParams.state ? "error" : "ok"}`} autoComplete="off"/>

            {errorParams.state && <p className="error-msg">{`*${errorParams.message}`}</p>}
        </div>
    );
}

export default Input;