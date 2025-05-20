import {useState} from "react";

function PhoneForm({onCreate}) {
    let [data, setData] = useState({
        name: '',
        tel: '',
        address: ''
    })

    const handleChange = (e) => {
        console.log("PhoneForm handleChange : " + e.target.name + " : " + e.target.value)
        e.preventDefault();
        e.stopPropagation();
        setData ({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log("PhoneForm handleSubmit : ")
        console.log(data)
        e.preventDefault();
        onCreate(data);
        setData(
            {
                name: '',
                tel: '',
                address: ''
            }
        )
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder={'이름'}
                       name={'name'}
                       onChange={handleChange}
                       value={data.name}
                /><br/>
                <input placeholder={'전화번호'}
                       name={'tel'}
                       onChange={handleChange}
                       value={data.tel}
                /><br/>
                <input placeholder={'주소'}
                       name={'address'}
                       onChange={handleChange}
                       value={data.address}
                /><br/>
                <button type={'submit'} >등록</button>
            </form>
        </div>
    )
}

export default PhoneForm;
