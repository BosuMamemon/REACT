import {useState} from "react";

function TestComp() {
    let [count, setCount] = useState(0);

    // state 상태변화 함수
    let changeCount = (num) => {
        setCount(count + num);
    }

    return (
        <div>
            <h4>Test Component</h4>
            <div>
                Count is {count}!
            </div>
            <div>
                <button type="button" onClick={() => changeCount(1)}>+</button>
                <button type="button" onClick={() => changeCount(-1)}>-</button>
            </div>
        </div>
    )
}

export default TestComp;