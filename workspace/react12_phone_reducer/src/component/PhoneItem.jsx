import {useContext, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import PhoneForm from "./PhoneForm.jsx";
import {PhoneDispatchContext} from "../App.jsx";

function PhoneItem({info}) {
    let {handleRemove} = useContext(PhoneDispatchContext);
    let [show, setShow] = useState(false);

    return (
        <div>
            <h6>id: {info.id}</h6>
            <h6>name: {info.name}</h6>
            <h6>phone: {info.phone}</h6>
            <Button variant={"outline-secondary"} onClick={()=>setShow(true)}>수정</Button>
            <Button variant={"outline-danger"} onClick={()=>handleRemove(info.id)}>삭제</Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PhoneForm initData={info} show={show} setShow={setShow}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PhoneItem;