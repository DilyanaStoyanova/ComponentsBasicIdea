import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.startValue);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    };

    const decrementClickHandler = () => {
        setCount(oldValue => oldValue - 1);
    };

    let message;
    switch (count) {
        case 1:
            message = 'Excellent';
            break;
        case 2:
            message = 'Very Good';
            break;
        case 3:
            message = 'Good';
            break;
        case 4:
            message = 'Poor';
            break;
        case 5:
            message = 'Outstanding';
            break;

        default:
            message = 'Unbelieve';
            break;
    }

    return (
        <div>
            <h4>Counter</h4>
            {message}
            {count < 0 ? <p>Invalid</p> : <p>Valid</p>}
            {count === 0 && <p>Start Increment</p>}
            <button onClick={decrementClickHandler}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={incrementClickHandler}>+</button>
            <p>Count {count}</p>
        </div>
    );
}