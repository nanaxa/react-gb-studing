import React from "react";


export const messages = [
        {name: "Ivan", content: "Hi wazzup?"},
        {name: "Sveta", content: "Nice! And you?"},
        {name: "Ivan", content: "What would you do on tomorrow evening?"},
        {name: "Sveta", content: "I'll be free? So?"},
        {name: "Ivan", content: "I'll want you to go to cinema?"},
];

export const Message = ( {name, content} ) => {
        return   <div>
                     <p>
                        <strong>{name}: </strong>{content}
                    </p>
                </div>
}