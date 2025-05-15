import {useEffect, useState} from 'react'
import './App.css'
import Viewer from "./component/Viewer.jsx";
import Controller from "./component/Controller.jsx";

function App() {
    let [count, setCount] = useState(0);
    let [text, setText] = useState("");

    let handleSetCount = (i) => {
        setCount(count + i);
    }
    let handleSetRandom = () => {
        setCount(parseInt(Math.random() * 2000) - 1000);
    }
    let handleChangeText = (e) => {
        setText(e.target.value);
    }

    // useEffect(콜백함수, 의존성배열)
    // 의존성 배열에 들어가 있는 변수에 이벤트가 발생하면 콜백함수가 일어남
    useEffect(() => {
        console.log("업데이트: ", text, count);
    }, [count, text]);

    return (
        <div>
            <h1>Simple Counter</h1>
            <section>
                <input value={text} onChange={handleChangeText}/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} handleSetRandom={handleSetRandom}/>
            </section>
        </div>
    )
}

export default App
