import './css/App.css'
import PhoneForm from "./component/PhoneForm.jsx";
import PhoneList from "./component/PhoneList.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        listPhone();
    }, [])

    // 추가하기
    const handleCreate = (newdata) => {
        console.log("handleCreate : ")
        console.log(newdata)
        axios.post('/api/phone/insert', newdata).then((res) => {
            console.log("handleCreate res : ")
            console.log(res)
            alert('등록완료')
            setDatas([...datas, res.data])
        })
    }
    //전체보기
    const listPhone = () => {
        axios.get('/api/phone/list')
            .then((res) => {
                    console.log("listPhone res : " + res.data);
                    setDatas(res.data);
                    // console.log("listPhone datas 111: " + datas);
                }
            )
    }
    //삭제하기
    const deletePhone = (targetId) => {
        axios.delete(`/api/phone/delete/${targetId}`)
            .then(()=> {
                alert('삭제완료');
                setDatas(datas.filter((data) => data.id !== targetId));
            })
    }

    return (
        <div>
            <PhoneForm onCreate={handleCreate} />
            <PhoneList phoneList={datas} deletePhone={deletePhone} />
        </div>
    )
}

export default App;
