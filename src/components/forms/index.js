import React from 'react';
import NewCounterAddButton from "./NewCounterAddButton";
import NewCounterNameInput from "./NewCounterNameInput";
import ErrorNote from "../counters/panel/ErrorNote";

export default ({ addClick, inputChange, name, value, errors }) => {
    return (
        <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <NewCounterNameInput inputChange={inputChange} name={name} value={value}/>
                <br></br>
                <NewCounterAddButton addClick={addClick} errorStatus={errors.name || errors.value ? true : false}/>
            </div>
            <div className='row align-items-center justify-content-center container'>
                {errors.name && <ErrorNote error={errors.name}/>}
                {errors.value && <ErrorNote error={errors.value}/>}
            </div>
        </div>
    );
}