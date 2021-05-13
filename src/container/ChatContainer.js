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

    };

    handleSendMessage = (message) => {
        this.setState( (state) => ( { messages : [ ... state.messages, message ] } ) );
    }
    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length - 1];
        if( lastMessage.name !== "Android") {
            setTimeout( () => this.handleSendMessage({name:"Android", content:"Hi, i'm a Robot, don't flood!"}),2000 );
        }
    }

    render() {
        const {messages} = this.state;

        return <Chat { ...{ messages, onSendMessage: this.handleSendMessage} } />

    }
}
