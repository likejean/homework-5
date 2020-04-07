import {isEmptyValue} from "enzyme/src/Utils";

export default (name, value, errors) => {
    switch (name) {
        case 'value':
            errors.value = isNaN(value) || value === (null || "")
                ? 'Input must be an Integer'
                : ''
            ;
            break;
        case 'name':
            errors.name = value.length <= 6
                ? 'Counter name should be longer than 6 characters'
                : ''
            ;
            break;
        default:
            break;
    }
}