import React from 'react';
import NewCounterAddButton from "./NewCounterAddButton";
import NewCounterNameInput from "./NewCounterNameInput";
import ErrorNote from "../counters/panel/ErrorNote";

export default ({ addClick, inputChange, name, value, errors }) => {
    return (
        <div>
            <NewCounterNameInput inputChange={inputChange} name={name} value={value}/>
            {errors.name && <ErrorNote error={errors.name}/>}
            {errors.value && <ErrorNote error={errors.value}/>}
            <br></br>
            <NewCounterAddButton addClick={addClick} errorStatus={errors.name || errors.value ? true : false}/>
        </div>
    );
}