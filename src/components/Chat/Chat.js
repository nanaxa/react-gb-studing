import React from "react";
import PropTypes from "prop-types";
import {MessageField} from "../MessageField/MessageField";
import {ChatForm} from "../ChatForm/ChatForm";
import {Message} from "../Message/Message";

/**
 *
 * @param message текс сообщения
 * @param name Имя отправителя
 * @param onSendMessage События отправки сообщения

 */

export const Chat = ( {messages, message, name, onSendMessage} ) =>
    (<div>
        <MessageField  messages={messages}/>
        <ChatForm {...{message,name,onSendMessage}}/>

    </div>);

Chat.protoTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message)),
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired

}
