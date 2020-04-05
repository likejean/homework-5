import React from "react";

export default ({ counterName, handleEditNameChange }) => {

    return (
        <input
            data-testid="limit-input"
            type="text"
            name="edit"
            value={ counterName }
            onChange={ handleEditNameChange }
        />
    );
}