import React, {Component} from "react";

export class Counter extends Component {
    state = {
      //  count: 0
    }
    interval = null;
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
        //при загрузке компонента мы выводим лог через кажждые 2 сек
        //Обязательно нужно очистить интервал при Unmount
        this.interval = setInterval(()=>console.log("It's show time!"), 2000);
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
         //очищаем интервал при скрытие(unmount)
         clearInterval(this.interval);
    }
    //transform handlecount from method to arrow function because it don't loose context;
    handleCount = (event) => {
            console.log("There is a tap");
            let num = +event.target.dataset.number;
            this.props.onCount(num);
        }
    render () {
        const{count} = this.props;
        return <>
            < button type="submit" data-number="-1" onClick = { this.handleCount } > -1 </ button >
            <span>{count}</span>
            < button type="submit" data-number="1" onClick = { this.handleCount } > +1 </ button >
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

