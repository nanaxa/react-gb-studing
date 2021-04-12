import React, {Component} from "react";
import {Counter} from "./timer";

export class TriggerTimer extends Component {
    state = {
        isShowTimer: true,
        count: 0
            }
    handleTrigger = () =>  {
        this.setState( ( {isShowTimer} ) => ({isShowTimer: !isShowTimer} ) )
    }
    handleCount = (num) => {
        this.setState(({count}) => ({ count : count + num }) );
    }
    render() {
        const{count,isShowTimer} = this.state;
        return <>
        <button type={"submit"} onClick={ this.handleTrigger } >Show/Hide</button>
         <br/>
         {isShowTimer || <Counter  count={count} onCount={this.handleCount} />}
        </>
    }
}