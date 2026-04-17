import { useCounter } from "../hooks/useCounter";

export default function MyCounterApp() {
    const { counter, handleAdd, handleSubtract, handleReset } = useCounter();

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <h1>Counter: {counter}</h1>

            <div style={{ display: "flex", gap: "10px" }}>
                <button
                    style={{ padding: "10px", backgroundColor: "violet", borderRadius: "5px" }}
                    onClick={handleAdd}>
                    +1
                </button>
                <button
                    style={{ padding: "10px", backgroundColor: "violet", borderRadius: "5px" }}
                    onClick={handleSubtract}>
                    -1
                </button>
                <button
                    style={{ padding: "10px", backgroundColor: "violet", borderRadius: "5px" }}
                    onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}
