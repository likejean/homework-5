import React from 'react';

export default ({ limit, mode, name, handleRangeChange }) => {

    return (
        <input
            data-testid="limit-input"
            type="text"
            name={ name }
            value={ limit }
            onChange={ handleRangeChange }
            disabled = { mode }
        />
    );
}