import React from 'react';


export default ({ item, sign, handleButtonClick }) => {

    return (
        <button onClick={handleButtonClick} step={sign * item}>{ sign * item}</button>
    );
}