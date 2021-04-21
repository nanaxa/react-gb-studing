import React, {Component} from "react";
import {Message} from "../Message/Message";
import PropTypes from "prop-types";

export const MessageField = ({messages}) =>
    (messages.map( (message, index) => <Message content={message.content} name={message.name} key={index}/> ) );

MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}

/* export class MessageField extends Component {
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
 */
/*
MessageList = ({messages}) => {
    return messages.map((message, index) => {
        return <Message {...message} key={index} />
    } )
}

 */
