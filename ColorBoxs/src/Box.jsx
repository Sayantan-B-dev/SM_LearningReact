import { useState } from "react";
import "./Box.css";

export default function Box() {
    let a = Math.floor(Math.random() * 20); // No +1 to avoid out-of-bounds
    const [color, setColor] = useState(a);

    const colors = [
        "red", "blue", "green", "yellow", "purple", "orange", "pink", "brown",
        "seagreen", "wheat", "cyan", "magenta", "lime", "teal", "indigo",
        "violet", "gold", "silver", "navy"
    ];

    const changeColor = () => {
        let n = Math.floor(Math.random() * colors.length); // No +1
        setColor(n);
    };

    return (
        <div className="eachBox" onClick={changeColor} style={{ backgroundColor: colors[color] || "white" }}>
        </div>
    );
}
