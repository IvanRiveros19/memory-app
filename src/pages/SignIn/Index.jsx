import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './SignIn.css';
import SignInForm from "./Form";

const SignIn = () => {

    return (
        <div className="login__form-container">
            <h1 className="center">Bienvenido</h1>
            <SignInForm/>
            <Link to='/signup'>¿Aun no tienes una cuenta 🙀? Registrate</Link>
        </div>
    );
}

export default SignIn;