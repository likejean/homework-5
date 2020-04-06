import React from 'react';


export default ({ name, stepOptionsClick }) => {

    return (
        <button name={name} onClick={stepOptionsClick}>Change Step Options?</button>
    );
}