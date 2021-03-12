import React from "react";
import "./Messagge.css"

const Message = ({type, text}) => {

    return (
        <div className="msg-container">
            <div className={"message message-" + type}>
                {text}
            </div>
        </div>
    );
}

export default Message;