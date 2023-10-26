import { useState } from "react";

export default function Timer(props) {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <div>
            <h4>Timer</h4>
            <p>{time}</p>
        </div>
    );
}