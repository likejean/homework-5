export default (name, value, fieldStatus, tempUpper, tempLower, errors) => {
    switch (name) {
        case 'upper':
            errors.upper =
                isNaN(value) || Number.isInteger(value)
                    ? 'ERROR! Input must be an INTEGER'
                    : parseInt(value) >= 10
                    ? 'ERROR! Must be less than 10'
                    : parseInt(value) < tempLower
                        ? 'ERROR! Upper Limit Must be GREATER than Lower Limit'
                        : ''
            ;
            fieldStatus.lower =
                parseInt(value) < tempLower
                    ? true
                    : false
            ;

            break;
        case 'lower':
            errors.lower =
                isNaN(value) || Number.isInteger(value)
                    ? 'ERROR! Input must be an INTEGER'
                    : parseInt(value) < 1
                    ? 'ERROR! Must be greater than zero'
                    : parseInt(value) > tempUpper
                        ? 'ERROR! Lower Limit Must be Less than Upper Limit'
                        : ''
            ;
            fieldStatus.upper =
                parseInt(value) > tempUpper
                    ? true
                    : false
            ;
            break;
        default:
            break;
    }
}