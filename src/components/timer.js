import React, {Component} from "react";

export class Counter extends Component {
    state = {
        count: 0
    }
      /*  constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
            //bind work only one time when button are clicked, if we do it in constructor
            this.handleCount = this.handleCount.bind(this);
        }
        */
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
    //transform handlecount from method to arrow function because it don't loose context;
    handleCount = () => {
            console.log("There is a tap");
            this.setState({ count : this.state.count + 1 } );
        }
    render () {
        return <>

            <span>{this.state.count}</span>
            < button type="submit" onClick = { this.handleCount } > +1 </ button >
        </>
    }

    /*
     bad practice(for not fast pc's/smartphones) to use this method, because func is uses resources on each click/render.
    Arrow function don't loose context
    render() {
        return <>

            <span>{this.state.count}</span>
            <button type="submit" onClick={ () => this.handleCount() }>+1</button>
        </>
    }
    it's bad practice(for not fast pc's/smartphones) to use this method, because bind is uses resources on each click.
    bind(this) - context of our class, not context of event onClick
    render() {
        return <>

                <span>{this.state.count}</span>
                <button type="submit" onClick={this.handleCount.bind(this)}>+1</button>
                </>
    }
     */
}

