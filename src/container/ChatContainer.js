import React, {Component} from "react";
import {Chat} from '../components/Chat/Chat';

const ROBOT_NAME = "BOT";
export class ChatContainer extends Component {
        state = {
        chats: {
            1: {
                name:'Chat 1',
                messages: [
                    {name: "Ivan", content: "Hi this is Chat №1?"},
                    {name: "Sveta", content: "Yeah! It's first chat!"},
                    {name: "Ivan", content: "What would you do on tomorrow evening?"},
                    {name: "Sveta", content: "I'll be free? So?"},
                    {name: "Ivan", content: "I'll want you to go to cinema?"},
                ],
            },
            2: {
                name:'Chat 2',
                messages: [
                    {name: "Inna", content: "Welcome to chat №2! "},
                    {name: "Olga", content: "Yeah! It's second chat!"},
                    {name: "Petr", content: "What would you do on tomorrow evening?"},
                    {name: "Olga", content: "I'll be free? So?"},
                    {name: "Petr", content: "I'll want you to go to cinema?"},
                ],
            },
            3: {
                name:'Chat 3',
                messages: [],
            },

        },
    };
       timeout = null;

    handleSendMessage = (message) => {
        this.setState( (state) => ( { messages : [ ... state.messages, message ] } ) );
    }

    componentDidUpdate() {
        // const lastMessage = this.state.messages[this.state.messages.length - 1];
        // if( lastMessage.name !== ROBOT_NAME) {
        //    this.timeout = setTimeout( () => this.handleSendMessage({name:ROBOT_NAME, content:"Hi, i'm a Robot, don't flood!"}),2000 );
        // } else if (lastMessage.name == ROBOT_NAME) { ( clearTimeout(this.timeout) ) }
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const {chats} = this.state; //деструктуризация state
        const{id} = this.props.match.params// передаем в id ссылку после слэша, которую дает нам роутер в пропсах
        //передаем в месседжи стейт по id чата
        console.log(id);
        return <Chat {...{ messages: chats[id].messages, onSendMessage: this.handleSendMessage } } />

    }
}
