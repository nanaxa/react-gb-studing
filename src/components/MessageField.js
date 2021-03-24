import React from "react";
import {Message} from "./message";

export const MessageList = ({messages}) => {
    return messages.map((message) => {
        return <Message name={message.name} content={message.content} />
    } )
}

