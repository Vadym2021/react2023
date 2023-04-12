import React, {useState} from 'react';

const IncrementDecrement = () => {

    let [counter, setCounter] = useState(0);

    const onClickIncrement = () => {
        console.log(counter);
        setCounter(++counter);
    }
    const onClickDecrement = () => {
        console.log(counter);
        setCounter(--counter);
    }
    return (
        <div>
            <div>value is -> {counter}</div>
            <button onClick={onClickIncrement}>increment</button>
            <button onClick={onClickDecrement}>decrement</button>
        </div>
    );
};

export default IncrementDecrement;