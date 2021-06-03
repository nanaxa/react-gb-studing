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

    componentDidUpdate() {
        const {chats} = this.state;
        const {id} = this.props.match.params;

        if(id && chats[id]) {
            const messages = chats[id].messages;
            const lastMessage = messages[messages.length - 1];
            if(lastMessage && lastMessage.name !== ROBOT_NAME) {
                setTimeout(() => this.handleSendMessage(id)
                    ( { name:ROBOT_NAME, content:"Привет это бот из чата №"+id+"\n Кожанного мешка нет на месте, ответ будет позже" } ),
                1500)
            }
        }

    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    handleSendMessage = (id) => (message) => {
        this.setState( (state) => (//передаем в стейт(chats)
            {
                //вместо деструктизации можно использовать array.concat или object.assign()
                chats: {
                    ...state.chats,//деструктуризация чатов(перезаписываем существующий чат,)
                    [id]: { //добавляем новые данные - указываем id чата который хотим переписать
                        name: state.chats[id].name, //указываем имя из стора
                        messages: [//указываем сообщение из стора
                            ...state.chats[id].messages,//деструктурируем сообшения, добавляем к старым новое
                            message,
                        ]
                    },

                }
            }))
    }

    render() {
        const { chats } = this.state; //деструктуризация state
        const{id} = this.props.match.params;// передаем в id ссылку после слэша, которую дает нам роутер в пропсах
        //передаем в месседжи стейт по id чата

        if(id && chats[id]) {
            //передаем пропсы в чат
            return <Chat {...{ messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) } } />
        } else return <p>Выберите чат от 1 до {Object.keys( chats ).length}</p>
    }
}

