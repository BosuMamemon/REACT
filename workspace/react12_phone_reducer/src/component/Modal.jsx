import "../css/Modal.css";
import {useState} from "react";

function Modal({info, setModal, handleUpdate}) {
    let [state, setState] = useState(info);

    let onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }
    let onSubmit = () => {
        console.log(state);
        handleUpdate(state);
        setModal(false);
    }

    return (
        <div className="overlay">
            <div className="container">
                <div>
                    <input type="text" id={"name"} name={"name"} onChange={onChange} value={state.name}/>
                    <input type="text" id={"phone"} name={"phone"} onChange={onChange} value={state.phone}/>
                </div>
                <button className="cancel" onClick={()=>setModal(false)}>취소</button>
                <button className="submit" onClick={onSubmit}>수정</button>
            </div>
        </div>
    )
}

export default Modal;