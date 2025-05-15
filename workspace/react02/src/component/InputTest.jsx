import {useState} from "react";

function InputTest() {
    let [text, setText] = useState("");

    let onChangeText = (e) => {setText(e.target.value);}
    let onReset = () => {setText("");}

    return (
        <div>
            <input placeholder="텍스트 입력" onChange={onChangeText}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>{text}</b>
            </div>
        </div>
    )
}

export default InputTest;