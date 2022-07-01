import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ScientistAge from '../ScientistAge/ScientistAge';
import './ScientistButton.css';

export default function ScientistButton({
    name,
    country,
    quote,
    showQuote,
    ...props
}) {

    ScientistButton.propTypes = {
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
        showQuote: PropTypes.func.isRequired
    }

    return (
        <Button name={name} country={country} quote={quote} showQuote={showQuote}>
            <ScientistAge {...props} />
            <span>'🌱'</span>
        </Button>
    )
}