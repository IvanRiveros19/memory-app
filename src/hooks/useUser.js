import {useCallback, useContext} from "react";
import Context from "../context/UserContext";
import loginService from "../services/loginService";
import signUpService from "../services/signUpService";
import getInfoService from "../services/getUserInfo";

export default function useUser() {
    const {jwt, setJWT} = useContext(Context);

    const signUp = useCallback((data) => {
        return signUpService(data);
    }, []);

    const login = useCallback((username, password) => {
        const result = loginService({username, password});
        if (result.status) sessionStorage.setItem('jwt', result.token);
        return result;
    }, [setJWT]);

    const logout = useCallback(()=> {
        sessionStorage.removeItem('jwt');
        setJWT(null);
    }, [setJWT]);

    const getInfo = useCallback(()=> {
        console.log("getinfo")
        getInfoService(jwt);
    }, [setJWT]);

    return {
        isLogged: Boolean(jwt),
        signUp,
        login,
        logout,
        getInfo
    }
}