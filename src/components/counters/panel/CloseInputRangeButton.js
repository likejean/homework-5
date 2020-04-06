import React from 'react';


export default ({ name, inputCloseClick }) => {

    return (
        <button name={name} onClick={inputCloseClick}>X</button>
    );
}