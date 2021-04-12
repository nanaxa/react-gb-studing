import ReactDom from "react-dom";
import React from "react";
import {MessageList} from "./components/MessageField";
import {messages} from "./components/message";
import {Counter} from "./components/timer";
import {TriggerTimer} from "./components/triggerTimer.jsx";


/*
const messages = [

  {name: "Ivan", content: "Hi wazzup?"},
  {name: "Sveta", content: "Nice! And you?"},
  {name: "Ivan", content: "What would you do on tomorrow evening?"},
  {name: "Sveta", content: "I'll be free? So?"},
  {name: "Ivan", content: "I'll want you to go to cinema?"},
];

const Message = ( {name, content} ) => {
  return   <div>
              <p>  
                  <strong>{name}: </strong>{content}  
              </p>
            </div> 
      }

const MessageList = ({messages}) => {
  return messages.map((message) => {
    return <Message name={message.name} content={message.content} />
  } )
}

*/

//ReactDom.render(<MessageList messages={messages}   />, document.getElementById("root"));
ReactDom.render(<TriggerTimer/>, document.getElementById("root"));
















/*function Link(props) {
  return React.createElement("a", {"href": "https://www.mail.ru"}, props.title)
}
*/

/*
const Link = (props) => {
  return <div>
            <a href={"https://" + props.link} >{props.title}</a>
        </div>
}

ReactDom.render( <Link title="Hello this is link!" link = "www.mail.ru"  />, document.getElementById("root") );
*/