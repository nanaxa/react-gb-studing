import React, {Component} from "react";
import {Chat} from '../components/Chat/Chat';

export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hi wazzup?"},
            {name: "Sveta", content: "Nice! And you?"},
            {name: "Ivan", content: "What would you do on tomorrow evening?"},
            {name: "Sveta", content: "I'll be free? So?"},
            {name: "Ivan", content: "I'll want you to go to cinema?"},
        ],
        inputMessage: "",
        inputName: "",
    }
    render() {
        const {messages, inputMessage, inputName} = this.state;
        return <Chat {...{messages,inputMessage, inputName}} />

    }
}
