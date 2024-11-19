import {useState, useMemo} from 'react';

export default function ExpensiveComponent() {
    const [count, setCount] = useState<number>(0)

    const expensiveCalculation = useMemo(() => {
        console.log('Running expensive calculation...');
        return count * 1000;
    }, [count])
    return (
        <div>
            <h2>useMemo</h2>
            <p>The <strong>useMemo</strong> hook memoizes a calculation and only recalculates it when dependencies change. This can help improve performance for expensive computations.</p>
            <h3>Example: Expensive Calculation</h3>
            <p>Count: {count}</p>
            <p>Result: {expensiveCalculation}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}



/*
    6. useMemo
The useMemo hook memoizes a calculation and only recalculates it when dependencies change. This can help improve performance for expensive computations.

Example: Expensive Calculation


 */