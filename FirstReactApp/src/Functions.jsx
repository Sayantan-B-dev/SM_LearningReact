function Greeter({ person = "anonymous", age = "null" }) {
    return (
        <>
            <h1>Hello {person}</h1>
            <h2>You are {age} yrs old</h2>
        </>
    );
}
// ✅ Default Props: If 'person' or 'age' is not provided, it defaults to "anonymous" & "null".
// ⚠️ Common Mistake: Passing 'null' or 'undefined' as a prop will still render "anonymous" & "null".
// ✅ Good Practice: Always provide meaningful default values to avoid displaying "undefined" in UI.

function Die({ num }) {
    let a = Math.floor(Math.random() * num) + 1;
    return (
        <>
            <h2>Die roll: {a}</h2>
        </>
    );
}
// ⚠️ Common Mistake: If 'num' is not passed, 'Math.random() * undefined' will return NaN.
// ✅ Fix: Ensure 'num' is always provided, or use a default value (e.g., 'num = 6' for a standard die).
// ✅ Alternative: Add an error check (if (!num) return <h2>Error: num not provided</h2>).

function Listpicker({ values }) {
    const randIndex = Math.floor(Math.random() * values.length);
    const randElement = values[randIndex];

    return (
        <>
            <h1>Winner is: {randElement.name}, he/she is {randElement.age} years old</h1>
        </>
    );
}
// ✅ Picks a random object from 'values' array and displays its 'name' and 'age'.
// ⚠️ Common Mistake: If 'values' is empty, accessing 'values[randIndex].name' will cause an error.
// ✅ Fix: Check if 'values.length > 0' before accessing elements, or provide a fallback value.

function DoubleDice() {
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;
    const isWinner = n1 == n2; // ✅ Condition to check if both dice have the same number.

    const styles = {
        backgroundColor: isWinner ? "green" : "red", // ✅ Changes color based on win/loss condition.
        padding: "20px",
        borderRadius: "10px"
    };

    return (
        <>
            <div className="DieDiv" style={styles}>
                <h1>Refresh</h1>
                {isWinner ? <h2>You win!</h2> : null} {/* ✅ Shows "You win!" only if isWinner is true */}
                <h3>Number 1 = {n1}</h3>
                <h3>Number 2 = {n2}</h3>
            </div>
        </>
    );
}
// ✅ Conditional styling: If both dice match, background turns green; otherwise, red.
// ⚠️ Common Mistake: Using 'isWinner = n1 === n2' (triple equals is good practice but unnecessary here).
// ✅ Alternative: Move logic into a function like 'function rollDie()' for better reusability.

function Footer({ styles, text, fontSize }) {
    return (
        <>
            <div style={{ ...styles, fontSize: fontSize }}>
                <h1>{text}</h1>
            </div>
        </>
    );
}
// ✅ Uses spread operator (...styles) to merge styles dynamically while adding 'fontSize'.
// ⚠️ Common Mistake: Overwriting styles by doing 'style={{styles, fontSize}}' instead of using the spread operator.
// ✅ Best Practice: Always use '...styles' to ensure previously defined styles are retained.

function ColorList({ colors }) {
    return (
        <>
            <div>
                <h2>Colors</h2>
                <ul>
                    {colors.map(c => <li style={{ color: c }}>{c}</li>)}
                </ul>
            </div>
        </>
    );
}
// ⚠️ Common Mistake: Using 'style={color: c}' instead of 'style={{ color: c }}' (double curly braces needed).
// ✅ Fix: Always use 'style={{ color: c }}' because 'style' expects an object in JSX.

function SlotMachine({ Elements }) {
    const n1 = Math.floor(Math.random() * 3);
    const n2 = Math.floor(Math.random() * 3);
    const n3 = Math.floor(Math.random() * 3);
    const isWinner = n1 == n2 && n1 == n3; // ✅ Checks if all three elements are the same.

    return (
        <>
            <div style={{ color: "red" }}>
                <h1>Slot Machine</h1>
                <h2 style={{ fontSize: "50px" }}>{Elements[n1]}{Elements[n2]}{Elements[n3]}</h2>
                <h2 style={isWinner ? { color: "green", fontSize: "24px" } : { color: "red", fontSize: "24px" }}>
                    {isWinner ? "You Win!!!!" : "You lose"}
                </h2>
            </div>
        </>
    );
}
// ✅ Ensures consistent styling and win condition logic.
// ⚠️ Common Mistake: 'Elements' should be an array of at least 3 unique values, otherwise index errors may occur.
// ✅ Fix: Check 'Elements.length >= 3' before accessing indices to prevent errors.

export { Die, Greeter, Listpicker, DoubleDice, Footer, ColorList, SlotMachine };
