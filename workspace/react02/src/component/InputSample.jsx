import {useState} from "react";

// hook이 state보다 기능이 더 많아서 이걸 더 많이 씀
function InputSample() {
    let [inputs, setInputs] = useState({
        name: "",
        nickname: "",
        phone: ""
    });

    let onChangeInputs = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }
    let onReset = () => {
        setInputs({
            name: "",
            nickname: "",
            phone: ""
        })
    }
    let {name, nickname, phone} = inputs;

    return (
        <div>
            <input name="name" placeholder="이름" value={name} onChange={onChangeInputs}/>
            <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChangeInputs}/>
            <input name="phone" placeholder="전화번호" value={phone} onChange={onChangeInputs}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>Inputs: </b>
            </div>
            {/*{inputs.name} // {inputs.nickname} // {inputs.phone}*/}
            {name} // {nickname} // {phone}
        </div>
    )
}

// hook을 객체가 아닌 변수 하나하나로 설정한 예문
// function InputSample() {
//     let [name, setName] = useState('');
//     let [nickname, setNickname] = useState('');
//     let [phone, setPhone] = useState('');
//
//     let onChangeName = (e) => {setName(e.target.value);}
//     let onChangeNickname = (e) => {setNickname(e.target.value);}
//     let onChangePhone = (e) => {setPhone(e.target.value);}
//
//     let onReset = (e) => {
//         setPhone("");
//         setName("");
//         setNickname("");
//     }
//
//     return (
//         <div>
//             <input name="name" placeholder="이름" value={name} onChange={onChangeName}/>
//             <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChangeNickname}/>
//             <input name="phone" placeholder="전화번호" value={phone} onChange={onChangePhone}/>
//             <button onClick={onReset}>초기화</button>
//             <div>
//                 <b>소개</b>
//             </div>
//             <div>
//                 {name} // {nickname} // {phone}
//             </div>
//         </div>
//     )
// }

export default InputSample;