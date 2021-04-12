import React, {Component} from "react";
import {Counter} from "./timer";

export class TriggerTimer extends Component {
    state = {
        isShowTimer: true
            }
    handleTrigger = () =>  {
        this.setState( ( {isShowTimer} ) => ({isShowTimer: !isShowTimer} ) )
    }
    render() {
        return <>
        <button type={"submit"} onClick={ this.handleTrigger } >Show/Hide</button>
            <br/>
            {this.state.isShowTimer || <Counter />}
              </>
    }
}