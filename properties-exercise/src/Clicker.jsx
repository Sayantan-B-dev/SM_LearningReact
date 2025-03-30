
import React, { useState } from 'react';

function handleFormSubmit(e) {
    e.preventDefault();
    console.log("aa pa cha pa chi");
}

function handleClick(e) {
    e.preventDefault();
    alert("Button Clicked!");
}

function Clicker({ message, buttonText }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <p>{message}</p>
            <button onClick={handleClick}>{buttonText}</button>
            <div>
                <p>Count: {count}</p>
                <button type="button" onClick={increment}>+</button>
                <button type="button" onClick={decrement}>-</button>
            </div>
        </form>
    );
}

export default Clicker;
