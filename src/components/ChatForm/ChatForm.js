import React from "react";
import PropTypes, {shape} from "prop-types";


/**
 *
 * @param message текс сообщения
 * @param name Имя отправителя
 * @param onSendMessage События отправки сообщения

 */

export const ChatForm = ( {message,name, onSendMessage} ) =>
    (<div>
        <input type="text" value={name} autoFocus={true}/>
        <textarea value={message}></textarea>
        <button>Отправить</button>
    </div>);

ChatForm.protoTypes = {

    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired

}
