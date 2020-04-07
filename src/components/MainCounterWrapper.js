import React, {useState} from 'react';
import CounterAddForm from './forms';
import CounterComponent from "./counters";
import NewCounterFormInputValidation from "../helpers/NewCounterFormInputValidation";

export default ({ name }) => {
    const [counterList, setCounterList] = useState([
        {
            id: 1,
            name: 'Default Counter',
            value: 0
        }
    ]);
    const [newCounter, setNewCounter] = useState({
        name: 'Counter Name',
        value: 50,
        errors: {
            name: "",
            value: ""
        }
    });


    const handleCounterInfoChange = e => {
        const { name, value } = e.target;
        setNewCounter({...newCounter, [ name ]: value});
        const errors = newCounter.errors;
        NewCounterFormInputValidation(name, value, errors);
    };

    const handleCounterAddClick = () => setCounterList([
        ...counterList,
        {
            id: counterList.length + 1,
            name: newCounter.name,
            value: newCounter.value
        }]
    );

    const handleCounterValueUpdate = (id, count) => setCounterList([...counterList].map(counter =>
            counter.id === id ? { ...counter, value: count } : counter
        ));

    const handleCounterResetClick = (id, count) =>  setCounterList([...counterList].map(counter =>
            counter.id === id ? { ...counter, value: count } : counter
        ));

    const handleCounterDeleteClick = e => {
        setCounterList([...counterList].filter(item => item.id!== +e.target.id));
        counterList.forEach((item, id) => {
            item.id <= +e.target.id ? item.id = id + 1 : item.id = id;
        });
    };



    //Event & State PROPS
    const handleEventProps = {
        addClick: handleCounterAddClick,
        inputChange: handleCounterInfoChange,
        deleteClick: handleCounterDeleteClick,
        updateClick: handleCounterValueUpdate,
        resetClick: handleCounterResetClick

    };
    const handleStateProps = {
        id: newCounter.id,
        name: newCounter.name,
        value: newCounter.value,
        errors: newCounter.errors,
        counterList: counterList
    };

    //Counter JSX
    return (
        <div>
            <h1 className="header">{name}</h1>
            <hr></hr>
            <h3 className="total-count">Total: {counterList.reduce((accumulator, counter) => accumulator + +counter.value, 0)}</h3>
            {counterList.map((counter, idx) =>
                <CounterComponent
                    key={idx}
                    deleteClick={handleEventProps.deleteClick}
                    updateClick={handleEventProps.updateClick}
                    resetClick={handleEventProps.resetClick}
                    id={counter.id}
                    name={counter.name}
                    value={counter.value}
                    counterList={counterList}
                />)
            }
            <hr></hr>
            <CounterAddForm {...handleEventProps} {...handleStateProps} />
            <hr></hr>
        </div>
    );
}