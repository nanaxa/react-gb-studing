import React, {Component} from "react";
import {Counter} from "./timer";
import PropTypes from 'prop-types';

export class TriggerTimer extends Component {
    static propTypes = {
        count: PropTypes.number
        }
    //state count вынесен из таймера для того что бы при wilnmount таймер не сбрасывался
    //isShowTimer is true - для скрытия и показа компонента таймера
    state = {
        isShowTimer: true,
        count: 0
            }
            //Меняем стейт щоуТаймера на противоположное
    handleTrigger = () =>  {
        this.setState( ( {isShowTimer} ) => ({isShowTimer: !isShowTimer} ) )
    }
        //HandleCount принимает num и меняем текущий стейт на величину num
    handleCount = (num) => {
        this.setState(({count}) => ({ count : count + num }) );
    }

    render() {
        const{count,isShowTimer} = this.state; //деструктуризация state
        //отрисовываем кнопку Скрыть и показать. Событие при клике вызывает функцию HandleTrigger
        // если фальш то вы вызвает Каунтер(передаем пропсы)
        return <>
        <button type={"submit"} onClick={ this.handleTrigger } >Show/Hide</button>
         <br/>
         {isShowTimer || <Counter  count={count} onCount={this.handleCount} />}
        </>
    }
}