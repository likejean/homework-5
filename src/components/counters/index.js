import React, { useState } from 'react';
import CounterRangeValidation from '../../helpers/CounterRangeValidation';
import _ from 'lodash';
import CounterRangeInput from "./panel/CounterRangeInput";
import DisplayCount from "./panel/DisplayCount";
import CounterStepButton from "./panel/CounterStepButton";
import ErrorNote from "./panel/ErrorNote";
import DeleteCounterButton from "./menu/DeleteCounterButton";
import EditCounterNameInput from "./menu/EditCounterNameInput";
import ResetCounterButton from "./menu/ResetCounterButton";
import CounterStepOptionsButton from "./panel/CounterStepOptionsButton";
import CloseInputRangeButton from "./panel/CloseInputRangeButton";

export default ({ id, name, value, deleteClick, updateClick, resetClick }) => {
    const [ rangeLimits, setRangeLimits ] = useState({
        lower : 1,
        upper : 3,
        errors: {
            lower: "",
            upper: ""
        },
        fieldStatus: {
            upper: false,
            lower: false
        }
    });
    const [count, setCount] = useState(value);
    const [counterName, setCounterName] = useState(name);
    const [stepOptionsAvailable, setStepOptionsAvailable] = useState({negative: true, positive: true})

    const handleRangeChange = e => {
        const { name, value } = e.target;
        let errors = rangeLimits.errors;
        let fieldStatus = rangeLimits.fieldStatus;
        setRangeLimits({ ...rangeLimits, [ name ]: +value });
        let tempUpper = rangeLimits[ "upper" ];
        let tempLower = rangeLimits[ "lower" ];
        CounterRangeValidation (name, value, fieldStatus, tempUpper, tempLower, errors);
    }

    const handleStepOptionsClick = e => setStepOptionsAvailable({...stepOptionsAvailable, [e.target.name] : false });
    const handleInputCloseClick = e => setStepOptionsAvailable({...stepOptionsAvailable, [e.target.name] : true });

    const handleButtonClick = e => {
        setCount(count + +e.target.getAttribute('step'));
        updateClick(id, count + +e.target.getAttribute('step'));
    }
    const handleResetClick = e => {
        setCount(0);
        resetClick(id, 0);
    }
    const handleEditNameChange = e => setCounterName(e.target.value);

    return (
        <div className="container-fluid counter-wrapper">
            <div className="row align-items-center justify-content-center"><h3>{`${id}. `}{counterName}</h3></div>
            <div className="row align-items-center justify-content-center">
                {rangeLimits.lower && rangeLimits.upper && _.range(rangeLimits.lower, rangeLimits.upper + 1, 1).map((item, idx) => <CounterStepButton key={idx} handleButtonClick={handleButtonClick} sign={-1} item={item}/>)}
                {stepOptionsAvailable.negative
                ?
                    <CounterStepOptionsButton name={"negative"} stepOptionsClick={handleStepOptionsClick}/>
                :
                    <>
                        <CounterRangeInput limit={rangeLimits.lower} mode={rangeLimits.fieldStatus.lower} name="lower" handleRangeChange={handleRangeChange}/>
                        <CloseInputRangeButton name={"negative"} inputCloseClick={handleInputCloseClick}/>
                    </>
                }
                <DisplayCount count={count}/>
                {stepOptionsAvailable.positive
                    ?
                    <CounterStepOptionsButton name={"positive"} stepOptionsClick={handleStepOptionsClick}/>
                    :
                    <>
                        <CloseInputRangeButton name={"positive"} inputCloseClick={handleInputCloseClick}/>
                        <CounterRangeInput limit={rangeLimits.upper} mode={rangeLimits.fieldStatus.upper} name="upper" handleRangeChange={handleRangeChange}/>
                    </>
                }
                {rangeLimits.lower && rangeLimits.upper && _.range(rangeLimits.lower, rangeLimits.upper + 1, 1).map((item, idx) => <CounterStepButton key={idx} handleButtonClick={handleButtonClick} sign={1} item={item}/>)}

                <br></br>
                {rangeLimits.errors.lower && <ErrorNote error={rangeLimits.errors.lower}/>}
                {rangeLimits.errors.upper && <ErrorNote error={rangeLimits.errors.upper}/>}

            </div>
            <div className='row align-items-center justify-content-center'>
                <DeleteCounterButton index={id} deleteClick={deleteClick}/>
                <EditCounterNameInput handleEditNameChange={handleEditNameChange} counterName={counterName}/>
                <ResetCounterButton handleResetClick={handleResetClick}/>
            </div>
        </div>
    );
}