import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import useDataStore from "../store/useDataStore.jsx";

const PhoneItem = ({data}) => {
    let {updateData, removeData} = useDataStore(state => state.action);
    let [state_data, setState_data] = useState(data);
    let [show, setShow] = useState(false);

    let handleChange = (e) => {
        setState_data({...state_data, [e.target.name]: e.target.value})
    }
    let handleSubmit = () => {
        updateData(state_data);
        setShow(false);
    }

    return (
        <div>
            <h6>id: {data.id}</h6>
            <h6>name: {data.name}</h6>
            <h6>phone: {data.phone}</h6>
            <Button variant={"outline-secondary"} onClick={()=>setShow(true)}>수정</Button>
            <Button variant={"outline-danger"} onClick={()=>removeData(data.id)}>삭제</Button>
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>수정</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    이름: <input type={"text"} name={"name"} value={state_data.name} onChange={handleChange}/> <br/>
                    전화번호: <input type={"text"} name={"phone"} value={state_data.phone} onChange={handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShow(false)}>
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