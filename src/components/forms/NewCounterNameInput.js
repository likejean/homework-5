import React from "react";

export default ({ inputChange, name, value }) => {

    return (
        <div>
            <input
                data-testid="counter-name-input"
                type="text"
                name="name"
                value={ name }
                onChange={ inputChange }
                // disabled = { mode }
            />

            <input
                data-testid="counter-value-input"
                type="number"
                name="value"
                value={ value }
                onChange={ inputChange }
                // disabled = { mode }
            />
        </div>
    );
}