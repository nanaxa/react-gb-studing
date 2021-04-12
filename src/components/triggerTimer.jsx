import React, {Component} from "react";
import {Counter} from "./timer";

export class TriggerTimer extends Component {
    state = {
        isShowTimer: true;
            }
    render() {
        return <>
        <button>Show/Hide</button>
         <Counter />
        </>
    }
}