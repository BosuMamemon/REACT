import "../css/DiaryList.css";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem.jsx";
import {useEffect, useState} from "react";

const sortOptionList = [
    {value: "latest", name: "빠른순"},
    {value: "oldest", name: "느린순"}
]

const DiaryList = ({data}) => {
    const [sortType, setSortType] = useState("latest");
    const [sortedData, setSortedDate] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const compare = (a, b) => {
            if(sortType === "latest") {
                return Number(b.date) - Number(a.date) ;
            } else if(sortType === "oldest") {
                return Number(a.date) - Number(b.date);
            }
        }
        const copyList = JSON.parse(JSON.stringify(data));
        copyList.sort(compare);
        console.log("copyList: ");
        console.log(copyList);
        setSortedDate(copyList);
    }, [data, sortType]);

    const onClickNew = () => {
        navigate("/new");
    }
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={onChangeSortType} value={sortType}>
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
                    sortedData.map(it => (
                        <DiaryItem key={it.id} {...it}/>
                    ))
                }
            </div>
        </div>
    )
}

export default DiaryList;