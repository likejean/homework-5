import React from 'react';

export default ({ limit, mode, name, handleRangeChange }) => {
    return (
        <input
            data-testid="limit-input"
            type="number"
            name={ name }
            className="form-control"
            value={ isNaN(limit) ? '' : limit }
            onChange={ handleRangeChange }
            disabled = { mode }
        />
    );
}