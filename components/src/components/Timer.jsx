import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h4>Timer</h4>
            <p>Time: {time}</p>
        </div>
    );
}