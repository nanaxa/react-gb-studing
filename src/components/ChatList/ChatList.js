import React from "react";
import "./chatlist.css"
import {Link} from "react-router-dom";

//по идеи тут ддолжен массив приходящий с сервера
//создаем компонент с разметкой
//с помощью map отрисовываем каждый элемент обьекта в компоненте

export const ChatList = ({chats}) =>
    (<div className="ChatList">
        <ul>
            <li>
                <Link to="/chats/1">
                    Chat 1
                </Link>
            </li>

            <Link to="/chats/2">
                Chat 2
            </Link>

            <Link to="/chats/3">
                Chat 3
            </Link>
        </ul>
    </div>)

