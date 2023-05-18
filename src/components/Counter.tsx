import React, { useState } from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className={classes.btn}>
            <button onClick={increament}><span>Increament</span></button>
            <button onClick={decrement}><span>Decrement</span></button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;