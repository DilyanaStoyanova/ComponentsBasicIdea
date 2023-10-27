import { useState } from "react";

export default function Counter() {
    const [clicks, setClicks] = useState(0);

    const decrementClickHander = () => {
        setClicks(c => c - 1);
    };

    const clearClickHandler = () => {
        setClicks(0);
    };

    const incrementClickHander = () => {
        setClicks(c => c + 1);
    };

    let message;

    switch (clicks) {
        case 1:
            message = 'Poor';
            break;
        case 2:
            message = 'Good';
            break;
        case 3:
            message = 'Very Good';
            break;
        case 4:
            message = 'Excellent';
            break;
        case 5:
            message = 'Outstanding';
            break;
        default:
            message = 'Fine';
            break;
    }

    return (
        <div>
            {message}
            {clicks === 0 && <p>Start clicking</p> }
            {clicks < 0 ? <p>Invalid value</p> : <p>Keep clicking</p>}
            <button onClick={decrementClickHander}>-</button>
            <button onClick={clearClickHandler}>Reset</button>
            <button onClick={incrementClickHander}>+</button>
            <p>Clicks: {clicks}</p>
        </div>
    );
}