import { useState } from 'react';
import {calculate} from './calculator';

const Calculator = () => {

    const [firstValue, setfirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operation, setOperation] = useState('+');
    const [result, setResult] = useState(0);
    const [error, setError] = useState(null);

    function renderErrorMessage() {
        return <span style={{color: 'red'}}>{error}</span>
    }

    return (
        <div>
            <label>
                First value:
                <input type="text" name="firstValue" value={firstValue} onChange={e => setfirstValue(e.target.value)}/>
            </label>
            <br/>
            <label>
                Second value:
                <input type="text" value={secondValue} onChange={e => setSecondValue(e.target.value)}/>
            </label>
            <br/>
            <label>
                Operation:
                <input type="text" value={operation} onChange={e => setOperation(e.target.value)}/>
            </label>
            <button onClick={() => {
                try {
                    setError(null);
                    const calculatedValue = calculate(firstValue, secondValue, operation);
                    setResult(calculatedValue)
                } catch (err) {
                    setError(err.message);
                    setResult(0);
                }
            }}>
                Calculate
            </button>
            <br/>
            <label>
                Result: {result}
            </label>
            <br/>
            { error && renderErrorMessage() }
        </div>
    )
}

export default Calculator;