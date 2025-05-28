import {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";

function PhoneItem({info, handleRemove, handleUpdate}) {
    let [state, setState] = useState(info);
    let [show, setShow] = useState(false);

    let handleClose = () => {setShow(false);}
    let handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    let handleSubmit = () => {
        handleUpdate(state);
        handleClose();
    }

    return (
        <div>
            <h6>id: {info.id}</h6>
            <h6>name: {info.name}</h6>
            <h6>phone: {info.phone}</h6>
            <Button variant={"outline-secondary"} onClick={()=>setShow(true)}>수정</Button>
            <Button variant={"outline-danger"} onClick={()=>handleRemove(info.id)}>삭제</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    이름: <input type={"text"} name={"name"} value={state.name} onChange={handleChange}/> <br/>
                    전화번호: <input type={"text"} name={"phone"} value={state.phone} onChange={handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        수정하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default PhoneItem;