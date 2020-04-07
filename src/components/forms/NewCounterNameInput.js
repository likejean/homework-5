import React from "react";

export default ({ inputChange, name, value }) => {

    return (
        <div className='col-6 container'>
            <div className='row align-items-center justify-content-center'>
                <label>Enter Name: </label>
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
                <label>Initial Count: </label>
                <input
                    data-testid="counter-value-input"
                    type="text"
                    className="form-control"
                    name="value"
                    value={ value }
                    onChange={ inputChange }
                />
            </div>

        </div>
    );
}