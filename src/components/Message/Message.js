import React from "react";
import PropTypes from "prop-types";
//создаем лямбда функцию c разметкой и передаем в нее имя и текс сообщения
// экспортируем в Message field
export const Message = ( { name, content } ) =>
    (<p><strong>{name}</strong>: {content}</p>);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}