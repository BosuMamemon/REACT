import {useContext, useEffect, useState} from "react";
import {Button, Form, FormControl} from "react-bootstrap";
import {PhoneDispatchContext} from "../App.jsx";

function PhoneForm({setShow, initData}) {
    let {handleCreate, handleUpdate} = useContext(PhoneDispatchContext);
    let [formData, setFormData] = useState({name: "", phone: ""});
    useEffect(() => {
        if(initData) setFormData(initData)
    }, [initData]);

    let handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(initData) handleUpdate(formData);
        else handleCreate(formData);
        setFormData({name: "", phone: ""});
        setShow(false);
    }
    let handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormControl type={"text"} name="name" value={formData.name} placeholder="이름" onChange={handleChange}/>
                <FormControl type={"text"} name="phone" value={formData.phone} placeholder="전화번호" onChange={handleChange}/>
                <br/>
                {
                    initData ?
                    <Button variant={"outline-secondary"} onClick={handleSubmit}>수정</Button>
                    : <Button variant={"outline-secondary"} onClick={handleSubmit}>추가</Button>
                }
            </Form>
        </div>
    )
}

export default PhoneForm;