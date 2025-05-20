import "../css/DiaryList.css";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem.jsx";

const sortOptionList = [
    {value: "latest", name: "빠른순"},
    {value: "oldest", name: "느린순"}
]

const DiaryList = ({data}) => {
    const navigate = useNavigate();
    const onClickNew = () => {
        navigate("/new");
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select>
                        {
                            sortOptionList.map((it, index) => (
                                <option key={index} value={it.value}>{it.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button type={"positive"} text={"새 일기 쓰기"} onClick={onClickNew}></Button>
                </div>
            </div>
            <div className={"list_wrapper"}>
                {
                    data.map(it => (
                        // <div key={it.id}>{it.content}</div>
                        <DiaryItem key={it.id} {...it}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DiaryList;