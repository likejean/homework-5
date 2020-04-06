import React from 'react';

export default ({ addClick, errorStatus }) => {
    return (
        <button onClick={addClick} disabled={errorStatus}>Add</button>
    );

}