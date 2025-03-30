function ShoppingListItem({ item, quantity, completed }) {
    const styles = {
        color: !completed ? "red" : "grey", // ✅ If not completed, text is red; otherwise, grey.
        textDecoration: !completed ? "line-through" : "none" // ✅ Strikes out item if not completed.
    };

    return (
        <>
            <li style={styles}>
                {item} - {quantity} - {completed ? "✅" : "❌"} {/* ✅ Shows checkmark if completed, cross if not. */}
            </li>
        </>
    );
}
// ✅ Conditional Styling: Uses 'completed' to determine color and text decoration.
// ⚠️ Common Mistake: Forgetting 'style={styles}', leading to no styling effect.
// ✅ Fix: Always pass the styles object inside 'style={}' in JSX.
// ⚠️ Another Mistake: Using 'text-decoration' instead of 'textDecoration' (React requires camelCase).

export default ShoppingListItem;
