import {useState} from "react";

function PhoneForm({handleCreate}) {
    let [formData, setFormData] = useState({name: "", phone: ""});

    let handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleCreate(formData);
        setFormData({name: "", phone: ""});
    }
    let handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} placeholder="이름" onChange={handleChange}/>
                <input name="phone" value={formData.phone} placeholder="전화번호" onChange={handleChange}/>
                <button type="submit">등록</button>
            </form>
        </div>
    )
}

export default PhoneForm;