export default function HandleError(error) {
    // Error 😨
    if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         *
         */
        /*console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);*/
        return "Recurso no encontrado 📁";
    } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        return "No hay respuesta del servidor 🎰";
    } else {
        // Something happened in setting up the request and triggered an Error
        return "No se pudo enviar su petición, revise su conexión a Internet e intente de nuevo ☺";
    }
}