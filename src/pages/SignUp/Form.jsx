import React, {useState, useEffect} from "react";
import {useLocation, useHistory} from "react-router-dom";

import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import Message from "../../components/Message/Message.jsx";
import useUser from "../../hooks/useUser";

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorUser, setErrorUser] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorText, setErrorText] = useState('');

    const {signUp} = useUser();

    const location = useLocation();
    const history = useHistory();


    useEffect(() => {

    }, []);

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
        const result = await signUp({name, lastName, username, password});
        setLoading(false);
        if (result.status) {
            setErrorText('');
            window.location.href = '/';
        } else {
            setErrorText(result.message);
        }
    }

    return(
        <React.Fragment>
            <form className="login__form" onSubmit={onSubmit}>
                {loading && <Spinner/>}
                <label className="login__label">Nombre: </label>
                <div>
                    <Input attribute={{id: "name", type: "text", placeholder: "Escribe tu nombre"}}
                           handleChange={setName}
                           errorParams={{state: errorUser, message: "Formato en el usuario incorrecto"}}/>
                </div>
                <label className="login__label">Apellidos: </label>
                <div>
                    <Input attribute={{id: "lastName", type: "text", placeholder: "Escribe tus apellidos"}}
                           handleChange={setLastName}
                           errorParams={{state: errorUser, message: "Formato en el usuario incorrecto"}}/>
                </div>
                <label className="login__label">Usuario: </label>
                <div>
                    <Input attribute={{id: "username", type: "text", placeholder: "Escribe tu nombre de usuario"}}
                           handleChange={setUsername}
                           errorParams={{state: errorUser, message: "Formato en el usuario incorrecto"}}/>
                </div>
                <label className="login__label">Contraseña: </label>
                <div>
                    <Input attribute={{id: "password", type: "password", placeholder: "Escribe una contraseña"}}
                           handleChange={setPassword}
                           errorParams={{state: errorPassword, message: "Formato de contraseña incorrecto"}}/>
                </div>
                {errorText && <Message type="danger" text={errorText}/>}
                <Button text="Registrarse" type="normal"/>
            </form>
        </React.Fragment>
    );
}

export default Form;