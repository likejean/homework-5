import React from "react";

export default ({ inputChange, name, value }) => {

    return (
        <div className='col-6 container'>
            <div className='row align-items-center justify-content-center'>
                <label>Enter Counter Title: </label>
                <input
                    data-testid="counter-name-input"
                    type="text"
                    className="form-control"
                    name="name"
                    value={ name }
                    onChange={ inputChange }
                />
            </div>

            <div className='row align-items-center justify-content-center'>
                <label>Enter Initial Count: </label>
                <input
                    data-testid="counter-value-input"
                    type="number"
                    className="form-control"
                    name="value"
                    value={ isNaN(value) ? '' : value }
                    onChange={ inputChange }
                />
            </div>

        </div>
    );
}