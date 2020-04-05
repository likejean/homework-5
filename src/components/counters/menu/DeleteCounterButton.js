import React from 'react';

export default ({ deleteClick, index }) => {
    return (
        <button id={index} onClick={deleteClick}>Delete</button>
    );

}