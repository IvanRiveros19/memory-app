import HandleError from "./axiosHandleError";
import axiosConfig from "./axiosConfig";

export default async function signUp({name, lastName, username, password}) {
    try {
        const response = await axiosConfig.post('/registro',{
            name, lastName, username, password
        });
        console.log(response);
        return response.data;
    } catch (e) {
        return {
            status: false,
            message: HandleError(e)
        }
    }
}