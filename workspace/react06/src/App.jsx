import './App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import {useRef, useState} from "react";

let datas = [
    {id: 0, name: "홍길동", phone: "010-1111-1111"},
    {id: 1, name: "성춘향", phone: "010-2222-2222"}
]

function App() {
    let [information, setInformation] = useState(datas);
    let idRef = useRef(2);
    
    // 추가
    let handleCreate = (data) => {
        setInformation([...information, {id: idRef.current, ...data}]);
        idRef.current += 1;
    }
    // 삭제
    let handleRemove = (id) => {
        setInformation(information.filter(info => info.id !== id));
    }

    return (
    <div>
        <PhoneForm handleCreate={handleCreate}/>
        <hr/>
        <PhoneList information={information} handleRemove={handleRemove}/>
    </div>
    )
}

export default App
