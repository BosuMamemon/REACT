import {useState} from "react";

function Say() {
    let [message, setMessage] = useState("안녕");
    let [color, setColor] = useState("white");

    let enter = () => {
        setMessage("반갑습니다.");
        setColor("white");
        if(message == "반갑습니다.") {
            setMessage("반갑다구요.");
        }
        if(message == "반갑다구요.") {
            setMessage("많이 반가우신가 보네요.");
        }
        if(message == "많이 반가우신가 보네요.") {
            setMessage("아니면 할 일이 없으신가요?");
        }
        if(message == "아니면 할 일이 없으신가요?") {
            setMessage("그만 누르세요.");
            setColor("red");
        }
        if(message == "그만 누르세요.") {
            setMessage("...");
        }
        if(message == "...") {
            setMessage("...");
        }
    }
    let exit = () => {
        setMessage("안녕히 가세요.");
        setColor("white");
    }
    // let colorButton = (e) => {
    //     setColor(e.target.name);
    // }
    let colorButton2 = (color) => {
        setColor(color);
    }

    return (
        <div>
            입장이면 message에 '반갑습니다'가 출력.
            <br/>
            퇴장이면 message에 '안녕히 가세요'가 출력.
            <br/>
            <h1 style={{color}}>{message}</h1>
            <button onClick={enter}>입장</button>
            <button onClick={exit}>퇴장</button>
            <br/>
            {/*<button name="red" onClick={colorButton}>붉은색</button>*/}
            {/*<button name="blue" onClick={colorButton}>푸른색</button>*/}
            {/*<button name="yellow" onClick={colorButton}>노란색</button>*/}
            <button onClick={() => colorButton2("red")}>붉은색</button>
            <button onClick={() => colorButton2("blue")}>푸른색</button>
            <button onClick={() => colorButton2("yellow")}>노란색</button>
        </div>
    )
}

export default Say;