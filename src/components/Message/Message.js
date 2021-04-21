import React from "react";
import PropTypes from "prop-types";

export const Message = ({name, content}) =>
    (<p><strong>{name}</strong>: {content}</p>);

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}