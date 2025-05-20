import Modal from "./Modal.jsx";
import {useState} from "react";

function PhoneItem({info, handleRemove, handleUpdate}) {
    let [modal, setModal] = useState(false);

    return (
        <div>
            <h6>id: {info.id}</h6>
            <h6>name: {info.name}</h6>
            <h6>phone: {info.phone}</h6>
            <button onClick={()=>setModal(true)}>수정</button>
            <button onClick={()=>handleRemove(info.id)}>삭제</button>
            {modal ? <Modal info={info} setModal={setModal} handleUpdate={handleUpdate}/> : null}
        </div>
    )
}

export default PhoneItem;