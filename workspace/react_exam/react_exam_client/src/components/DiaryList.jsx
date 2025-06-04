import "../css/DiaryList.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";

const sortOptionList = [
    {value: "latest", name: "빠른순"},
    {value: "oldest", name: "느린순"}
]

const DiaryList = ({diaries}) => {
    let [sortType, setSortType] = useState("latest");
    let [sortedDiaries, setSortedDiaries] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const compare = (a, b) => {
            if(sortType === "latest") {
                return Number(new Date(b.date).getTime()) - Number(new Date(a.date).getTime()) ;
            } else if(sortType === "oldest") {
                return Number(new Date(a.date).getTime()) - Number(new Date(b.date).getTime());
            }
        }
        setSortedDiaries([...diaries].sort(compare));
    }, [diaries, sortType]);

    let onClickNew = () => {
        navigate("/new");
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={e => setSortType(String(e.target.value))} value={sortType}>
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
                    sortedDiaries.map(it => (
                        <DiaryItem key={it.id} {...it}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DiaryList;