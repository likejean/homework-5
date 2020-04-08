export default (name, value, fieldStatus, tempUpper, tempLower, errors) => {
    switch (name) {

        case 'upper':
            errors.upper =
                isNaN(value) || value === (null || "")
                    ? 'Input must be an INTEGER'
                    : parseInt(value) >= 10
                        ? 'Must be less than 10'
                        : parseInt(value) < tempLower
                            ? 'Upper Limit Must be GREATER than Lower Limit'
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
                isNaN(value) || value === (null || "")
                    ? 'Input must be an INTEGER'
                    : parseInt(value) < 1
                        ? 'Must be greater than zero'
                        : parseInt(value) > tempUpper
                            ? 'Lower Limit Must be Less than Upper Limit'
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