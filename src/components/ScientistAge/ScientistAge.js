import React from 'react';
import PropTypes from 'prop-types';
import './ScientistAge.css';

function calculateAge(birth, death) {
    return death - birth
}

export default function ScientistAge({ birth, death }) {
    return (
        <span>{calculateAge(birth, death)}</span>
    )
}

ScientistAge.propTypes = {
    birth: PropTypes.number.isRequired,
    death: PropTypes.number.isRequired,
}