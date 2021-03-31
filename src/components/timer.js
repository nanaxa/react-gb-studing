import React, {Component} from "react";

export class Counter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 5
            }

        }
    //we do when component mount
    componentDidMount() {
        console.log("Я компонент и я загрузился");
        this.setState({count:52});
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
    handleCount() {
            console.log("There is a tap");
        }
    render() {
        return <>
                <span>{this.state.count}</span>
                <button type="submit" onClick={this.handleCount}>tap</button>
                </>
    }
}

