import React from "react";

export default ({ counterName, handleEditNameChange }) => {
    return (
        <div>
            <label>Edit Name: </label>
            <input
                data-testid="limit-input"
                className="form-control"
                type="text"
                name="edit"
                value={ counterName }
                onChange={ handleEditNameChange }
            />
        </div>
    );
}

