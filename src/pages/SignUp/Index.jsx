import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './SignUp.css';
import SignUpForm from "./Form";

const Index = () => {

    return (
        <div className="login__form-container">
            <h1>Registrate</h1>
            <SignUpForm />
            <Link to='/'>¿Ya estás registrado? Inicia sesión 😃</Link>
        </div>
    );
}

export default Index;