import HandleError from "./axiosHandleError";
import axiosConfig from "./axiosConfig";

export default async function login({username, password}) {
    try {
        const response = await axiosConfig.put('/auth', {
            username, password
        });
        return response.data;
    } catch (e) {
        return {
            status: false,
            message: HandleError(e)
        }
    }
}