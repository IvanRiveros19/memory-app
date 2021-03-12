import React, {useState, useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";

import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Message from "../../components/Message/Message.jsx";
import useSession from "../../hooks/useSession";

const Form = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorUser, setErrorUser] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const location = useLocation();
    const history = useHistory();

    const {isLogged, login} = useSession();

    useEffect(() => {
        if (isLogged) window.location.href = '/home';
        return(() => {
            setErrorText(null);
        });
    }, []);

    useEffect(() => {
        setErrorText(null);
    }, [user, password]);

    async function onSubmit(e) {
        e.preventDefault();
        /*const userRegExp = /^[a-zA-Z0-9_.+-]+$/;
        const passwordRegExp = /^[a-zA-Z0-9_.+-]+$/;
        if (!userRegExp.test(user)) {
            setErrorUser(true);
            return;
        } else {
            setErrorUser(false);
        }
        if (!passwordRegExp.test(password)) {
            setErrorPassword(true);
            return;
        } else {
            setErrorPassword(false);
        }*/
        setLoading(true);
        const result = await login(user, password);
        setLoading(false);
        if (result.status) {
            window.location.href = '/home';
        } else {
            setErrorText(result.message);
        }
    }

    return(
        <React.Fragment>
            <form className="login__form" onSubmit={onSubmit}>
                {loading && <Spinner/>}
                <label className="login__label">Usuario: </label>
                <div>
                    <Input attribute={{id: "email", type: "text", placeholder: "Ingresa tu nombre de usuario"}}
                           handleChange={setUser}
                           errorParams={{state: errorUser, message: "Formato en el usuario incorrecto"}}/>
                </div>
                <label className="login__label">Contraseña: </label>
                <div>
                    <Input attribute={{id: "password", type: "password", placeholder: "Ingresa tu password"}}
                           handleChange={setPassword}
                           errorParams={{state: errorPassword, message: "Formato de contraseña incorrecto"}}/>
                </div>
                {errorText && <Message type="danger" text={errorText}/>}
                <Button text="Iniciar" type="normal"/>
            </form>
        </React.Fragment>
    );
}

export default Form;