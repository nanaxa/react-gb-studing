import React, {Component} from "react";

export class Counter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }

        }
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
    handleCount() {
            console.log("There is a tap");
            this.setState({ count : this.state.count + 1 } );
        }
    //bad practice(for not fast pc's/smartphones) to use this method, because func is uses resources on each click/render.
    render() {
        return <>

            <span>{this.state.count}</span>
            <button type="submit" onClick={ () => this.handleCount() }>+1</button>
        </>
    }

    /*it's bad practice(for not fast pc's/smartphones) to use this method, because bind is uses resources on each click.
    render() {
        return <>

                <span>{this.state.count}</span>
                <button type="submit" onClick={this.handleCount.bind(this)}>+1</button>
                </>
    }
     */
}

