import React from 'react';
import NewCounterAddButton from "./NewCounterAddButton";
import NewCounterNameInput from "./NewCounterNameInput";

export default ({ addClick, inputChange, name, value }) => {

    return (
        <div>
            <NewCounterNameInput inputChange={inputChange} name={name} value={value}/>
            <NewCounterAddButton addClick={addClick}/>
        </div>
    );
}