import React from 'react';

export default ({ limit, mode, name, handleRangeChange }) => {

    return (
        <input
            data-testid="limit-input"
            type="text"
            name={ name }
            className="form-control"
            value={ limit }
            onChange={ handleRangeChange }
            disabled = { mode }
        />
    );
}