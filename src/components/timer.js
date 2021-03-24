import React, {Component} from "react";

export class Counter extends Component {
    //we do when component mount
    componentDidMount() {
        console.log("Я компонент и я загрузился");
    }
    //this is bad practice to use componentWillMount
   /* componentWillMount() {
        console.log("Я компонент и я буду загружаться");
    }
    */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Я компонент и я обновился!")
    }

    componentWillUnmount() {
         console.log("Я компонент и я буду отключен");
    }
    render() {
        return <span>It's counter</span>;
    }
}
