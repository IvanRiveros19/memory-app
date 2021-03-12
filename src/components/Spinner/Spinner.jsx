import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return(
        <div className="spinner-container">
            <div className="wrapper">
                <div className="spinner"></div>
                <p>Cargando...</p>
            </div>
        </div>
    );
}

export default Spinner;