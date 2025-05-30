import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import {useNavigate, useParams} from "react-router-dom";
import useDiary from "../hooks/useDiary.jsx";
import Viewer from "../components/Viewer.jsx";
import {getFormattedDate, setPageTitle} from "../util.jsx";
import {useEffect} from "react";

const Diary = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const data = useDiary(id);

    const goBack = () => {
        navigate(-1);
    }
    const goEdit = () => {
        navigate(`/edit/${id}`);
    }

    useEffect(() => {
        setPageTitle(`${id}번 일기`)
    }, []);

    if(!data) {
        return (
            <div>일기를 불러오고 있습니다...</div>
        )
    } else {
        const title = `${getFormattedDate(new Date(data.date))} 기록`;

        return (
            <div>
                <Header title={title}
                        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}/>}
                        rightChild={<Button text={"수정하기"} type={"positive"} onClick={goEdit}/>}/>
                <Viewer data={data}/>
            </div>
        )
    }
}
export default Diary