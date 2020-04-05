import React, {useState} from 'react';
import CounterAddForm from './forms';
import CounterComponent from "./counters";

export default ({name}) => {
    const [counterList, setCounterList] = useState([
        {
            id: 1,
            name: 'Default Counter',
            value: 0
        }
    ]);
    const [newCounter, setNewCounter] = useState({name: 'Counter Name', value: 50});

    const handleCounterInfoChange = e => setNewCounter({...newCounter, [e.target.name]: e.target.value});
    const handleCounterAddClick = () => setCounterList([
        ...counterList,
        {
            id: counterList.length + 1,
            name: newCounter.name,
            value: newCounter.value
        }]
    );

    const handleCounterDeleteClick = e => {
        setCounterList([...counterList].filter(item => item.id !== +e.target.id));
        counterList.forEach((item, id) => {
            item.id <= +e.target.id ? item.id = id + 1 : item.id = id;
        });
    }

    const handleEventProps = {
        addClick: handleCounterAddClick,
        inputChange: handleCounterInfoChange,
        name: newCounter.name,
        value: newCounter.value
    }
    return (
        <div>
            <h1 className="header">{name}</h1>
            <hr></hr>
            {counterList.map((counter, idx) =>
                <CounterComponent
                    key={idx}
                    deleteClick={handleCounterDeleteClick}
                    index={counter.id}
                    counterName={counter.name}
                    value={counter.value}/>
            )
            }
            <hr></hr>
            <CounterAddForm {...handleEventProps}/>
        </div>
    );
}