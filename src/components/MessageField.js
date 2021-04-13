import React, {Component} from "react";
import {Message} from "./message";


export class MessageField extends Component {
        state = {
            messages: ["Привет", "Как дела?"],
        }

        handleClick = () => {
            this.setState({messages: [ ...this.state.messages, "Нормально!" ]})
        }

        render() {
            const MessageElements = this.state.messages.map((text,index) => {
                return <Message key={index} text={ text } />
            })
            return <div>
                <button type={"submit"} onClick={ this.handleClick}>Отправить</button>
                {MessageElements}

            </div>


        }


}

/*
MessageList = ({messages}) => {
    return messages.map((message, index) => {
        return <Message {...message} key={index} />
    } )
}

 */
