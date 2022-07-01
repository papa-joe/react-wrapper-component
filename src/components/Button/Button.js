import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ children, name, country, quote, showQuote }) {
    return (
        <button onClick={() => showQuote(quote)}>{name} - {country} {children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    name: PropTypes.string.isRequired,
}