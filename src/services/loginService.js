import HandleError from "./axiosHandleError";
import axiosConfig from "./axiosConfig";

export default function login({username, password}) {
    axiosConfig.put('/auth', {
        username, password
    }).then((res) => {
        return res.data;
    }).catch((error) => {
        return {
            'status': false,
            'message': HandleError(error)
        }
    });
}