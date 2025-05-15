import {useRef, useState} from "react";

function Body({children}) {
    let [state, setState] = useState({
        name: "",
        gender: "",
        birth: "",
        bio: ""
    });
    let [text, setText] = useState("");
    let {name, gender, birth, bio} = state;
    let textRef = useRef()

    let handleChangeText = (e) => {setText(e.target.value);}
    let handleChangeState = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    let handleOnClick = () => {
        if(text.length < 5) {
            alert("글자수가 5 미만임.");
            textRef.current.focus();
        } else {
            alert("Hell yeah.");
            setText("");
        }
    }

    return (
        <div>
            <div>
                <input name="name" placeholder="이름" onChange={handleChangeState}/>
            </div>
            <div>
                <select name="gender" onChange={handleChangeState}>
                    <option value="">---</option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                    <option value="그외">그외</option>
                </select>
            </div>
            <div>
                <input name="birth" type="date" onChange={handleChangeState}/>
            </div>
            <div>
                <textarea name="bio" cols="30" rows="10" onChange={handleChangeState}></textarea>
            </div>
            <h3>이름 성별 생일 바이오 출력부분</h3>
            <p>{name}</p>
            <p>{gender}</p>
            <p>{birth}</p>
            <p>{bio}</p>
            <button onClick={handleOnClick}>작성완료</button>
            <br/>
            <input type="text" value={text} onChange={handleChangeText} ref={textRef}/>
            <p>{text}</p>
            <br/><hr/>
            <div>{children}</div>
        </div>
    )
}

export default Body;