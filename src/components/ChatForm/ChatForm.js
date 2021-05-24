import React, {Component, createRef, useEffect, useRef, useState} from "react";
import PropTypes, {shape} from "prop-types";
import "./chatForm.css";


/**
 *
 * @param message текс сообщения
 * @param name Имя отправителя
 * @param onSendMessage События отправки сообщения

 */
/*
export class ChatForm extends Component {
    //name и message пустые строки
    state = {
        name:"",
        content:"",
    }
    textarea = React.createRef();//создаем реф и привязываем его к textarea
    //При загрузке компонента вешаем фокус
    componentDidMount() {
        this.textarea.current.focus();
    }

    //создаем обработчик события onChange();
    // при работе обработчика onChange нам приходит событие event, оно содержит поле current.target
    //поле current.target содержит наше значение value
    handleInput = ( { currentTarget:{ value, name } } ) => {
        //event.currentTarget.value, деструктуризация
        //console.log( { value } );
        this.setState(() => ( { [ name ]: value } ) )
//квадратные скобки - получение содержимого переменной и присваивание ей значения в этом обьекте
            //Важно чтобы имя name соответсвовало имени пользователя в указанномув стейте
    }
        handleClick = ( ) => {
            const{ name, content} = this.state;
            this.props.onSendMessage( { name, content } );
        }

    render() {
        const { name, content } = this.state;// деструктуризация стейта
        return <div>
            <input name="name" type="text" value={ name } autoFocus={ true } onChange={ this.handleInput }/>
            <textarea name="content" value={ content } ref={ this.textarea } onChange={ this.handleInput }></textarea>
            <button onClick={ this.handleClick }>Отправить</button>
        </div>
    }//name - аргумент в который передаем имя переменной стейта
}
*/

//we do it on hooks
 export const ChatForm = ( { onSendMessage } ) => {// принимает функцию
    const [ name, setName ] = useState("User");//инициализируем стейт геттер(Юзер) и сеттер
    const [ content, setContent ] = useState("my message" )//инициализируем стейт геттер my message

    const textarea = useRef(); //хук прописываем его в поле textarea

    useEffect(() => { /* useEffect - срабатывает на component did mount, did update */
        textarea.current.focus();
    }, [] ) //чтобы сработал 1 раз, передаем пустой массив 2ым аргументом

    const handleClick = () => { //ф-ция вызывает другую функцию с пропсами
        onSendMessage( { name, content } );
    }

        // const handleKeyup = (event ) => {
        // if  (event.keyCode === 13) { // Enter
        //     handleClick();
        // }

    return (
        <div className="chatForm">
            <input type="text"
                   className="input"
                   value={name}
                   onChange={ ( { currentTarget:{ value } } ) => setName( value )  }
                   //onKeyUp={ (event) => { handleKeyup(event, setName( {name} ) ) } }
            />
            <textarea name="textarea"
                      value={content}
                      onChange={ ( { currentTarget:{ value } } ) => setContent( value ) }
                      ref={textarea}
                      cols="30"
                      rows="2"
            />
            <button type="submit" onClick={ handleClick } >Отправить</button>
        </div>
            //value - то что отображается в текстовом поле или в инпуте

    )
 }

/* 
export const ChatForm = ( {message,name, onSendMessage} ) =>
    (<div>
        <input type="text" value={name} autoFocus={true}/>
        <textarea value={message}></textarea>
        <button>Отправить</button>
    </div>);
*/

ChatForm.protoTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired,
};

