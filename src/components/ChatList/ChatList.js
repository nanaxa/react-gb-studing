import React from "react";
import "./chatlist.css"

//по идеи тут ддолжен массив приходящий с сервера
//создаем компонент с разметкой
//с помощью map отрисовываем каждый элемент обьекта в компоненте

export const ChatList = ({chats}) =>
    (<div className="ChatList">
        <ul>
            <li>Chat 1</li>
            <li>Chat 2</li>
            <li>Chat 3</li>
        </ul>
    </div>)

