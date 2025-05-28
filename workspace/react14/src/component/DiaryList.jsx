import "../css/DiaryList.css";
import {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const sortOptionList = [
    {value: "latest", name: "빠른순"},
    {value: "oldest", name: "느린순"}
];

const DiaryList = () => {
    let [sortType, setSortType] = useState("latest");
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/")
    }, []);

    let handleChangeSortType = (e) => {
        setSortType(e.target.value);
    }
    let handleClickInsert = () => {
        navigate("/insert");
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={handleChangeSortType} value={sortType}>
                        {
                            sortOptionList.map((it, index) => (
                                <option key={index} value={it.value}>{it.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button variant={"success"} onClick={handleClickInsert}>새 일기 쓰기</Button>
                </div>
                <div className={"list_wrapper"}>

                </div>
            </div>
        </div>
    )
}

export default DiaryList;