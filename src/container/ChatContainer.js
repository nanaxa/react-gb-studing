import React, {Component} from "react";
import {Chat} from '../components/Chat/Chat';

const ROBOT_NAME = "BOT";
export class ChatContainer extends Component {
        state = {
        messages: [
            {name: "Ivan", content: "Hi wazzup?"},
            {name: "Sveta", content: "Nice! And you?"},
            {name: "Ivan", content: "What would you do on tomorrow evening?"},
            {name: "Sveta", content: "I'll be free? So?"},
            {name: "Ivan", content: "I'll want you to go to cinema?"},
        ],
    };
        timeout = null;

    handleSendMessage = (message) => {
        this.setState( (state) => ( { messages : [ ... state.messages, message ] } ) );
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        if( lastMessage.name !== ROBOT_NAME) {
           this.timeout = setTimeout( () => this.handleSendMessage({name:ROBOT_NAME, content:"Hi, i'm a Robot, don't flood!"}),1000 );
        }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const {messages} = this.state;

        return <Chat { ...{ messages, onSendMessage: this.handleSendMessage} } />

    }
}
