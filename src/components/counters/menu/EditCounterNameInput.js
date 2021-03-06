import React from "react";

export default ({ index, counterName, handleEditNameChange }) => {
    return (
        <div>
            <label>Edit Counter Title: </label>
            <input
                data-testid="limit-input"
                className="form-control"
                type="text"
                name="edit"
                id={ index }
                value={ counterName }
                onChange={ handleEditNameChange }
            />
        </div>
    );
}

