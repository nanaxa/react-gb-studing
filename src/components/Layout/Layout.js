import React from "react";
import {ChatList} from "../ChatList/ChatList";
import {ChatContainer} from "../../container/ChatContainer";
import "./layout.css";

export const Layout = () =>
    (<div className="layout">
        <ChatList />
        <ChatContainer />
    </div>)