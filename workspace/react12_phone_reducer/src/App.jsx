import './css/App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import {useReducer, useRef, useState} from "react";

let datas = [
    {id: 0, name: "홍길동", phone: "010-1111-1111"},
    {id: 1, name: "성춘향", phone: "010-2222-2222"}
]

function reducer(state, action) {
    switch(action.type) {
        case "CREATE": return [...state, action.insertingData];
        case "REMOVE": return state.filter(it => it.id !== action.removingId)
        case "UPDATE": return state.map(it => it.id === action.updatingData.id ? action.updatingData : it)
        default: return state;
    }
}

function App() {
    let [information, dispatcher] = useReducer(reducer, datas);
    let idRef = useRef(datas.length);
    
    // 추가
    let handleCreate = (data) => {
        dispatcher({
            type: "CREATE",
            insertingData: {id: idRef.current, ...data}
        })
        idRef.current += 1;
    }
    // 삭제
    let handleRemove = (id) => {
        dispatcher({
            type: "REMOVE",
            removingId: id
        })
    }
    // 수정
    let handleUpdate = (item) => {
        console.log(item);
        dispatcher({
            type: "UPDATE",
            updatingData: item
        });
    }

    return (
    <div>
        <PhoneForm handleCreate={handleCreate}/>
        <PhoneList information={information} handleRemove={handleRemove} handleUpdate={handleUpdate}/>
    </div>
    )
}

export default App
