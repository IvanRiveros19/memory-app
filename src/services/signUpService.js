import HandleError from "./axiosHandleError";
import axiosConfig from "./axiosConfig";

export default function signUp(data) {
    axiosConfig.post('/registro',{
        name: data.name, lastName: data.lastName, username: data.username, password: data.password
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return {
            'status': false,
            'message': HandleError(error)
        }
    });
}