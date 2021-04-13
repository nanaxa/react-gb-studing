import React, {Component} from "react";
import {Message} from "./message";


export class MessageField extends Component {
        state = {
            messages: ["Hi!", "What's up?"],
        }

        componentDidUpdate() {
            if (this.state.messages.length % 2 === 1) {
                setTimeout(() => {
                    this.setState({messages: [...this.state.messages, "Do not Flood! I'm a Robot!"]})
                }, 1000)
            }
        }

    handleClick = () => {
            this.setState({messages: [ ...this.state.messages, "Cool!" ]})
        }

        render() {
            const MessageElements = this.state.messages.map((text,index) => {
                return <Message key={index} text={ text } />
            })
            return <div>
                <button type={"submit"} onClick={ this.handleClick}>Send</button>
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
