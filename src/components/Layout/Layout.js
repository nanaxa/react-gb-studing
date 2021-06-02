import React from "react";
import {ChatList} from "../ChatList/ChatList";
import {ChatContainer} from "../../container/ChatContainer";
import "./layout.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";

export const Layout = () =>
    (<div className="layout">
        <BrowserRouter>
            <ChatList />

            <Switch>
                <Route path="/chats/"  exact component={ChatContainer}/>
                <Route path="/chats/:id" exact component={ChatContainer}/>

                <Route path="/about">
                    <p>It's About</p>
                </Route>

                <Route path="/home">
                    <p>It's home</p>
                </Route>

                <Route path="/">
                    <p>It's 404</p>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>)