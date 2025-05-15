import {useState} from "react";

function Counter() {
    let [number, setNumber] = useState(0);

    let changeNumber = (num) => {
        setNumber(number + num);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => changeNumber(1)}>+1</button>
            <button onClick={() => changeNumber(-1)}>-1</button>
            <br/>
            <button onClick={() => changeNumber(2)}>+2</button>
            <button onClick={() => changeNumber(-2)}>-2</button>
            <br/>
            <button onClick={() => changeNumber(3)}>?</button>
        </div>
    )
}

export default Counter;