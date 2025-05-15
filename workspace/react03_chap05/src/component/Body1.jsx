import {useState} from "react";

function Viewer({number}) {
    return (
        <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>
    )
}

function Body1() {
    let [number, setNumber] = useState(0);

    let changeNumber = (num) => {
        setNumber(number + num);
    }
    let onRandom = (num) => {
        setNumber(num)
    }

    return (
        <div>
            <h2>{number}</h2>
            <Viewer number={number}/>
            <div>
                <button onClick={() => changeNumber(1)}>+</button>
                <button onClick={() => changeNumber(-1)}>-</button>
                <br/>
                <button onClick={() => onRandom(parseInt((Math.random() * 200) - 100))}>랜덤</button>
            </div>
        </div>
    )
}

export default Body1;