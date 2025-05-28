import Header from "../component/Header.jsx";
import DiaryList from "../component/DiaryList.jsx";
import React, {useState} from "react";
import {Button} from "react-bootstrap";

const Home = () => {
    let [pivotDate, setPivotDate] = useState(new Date());

    let handleChangeMonth = (num) => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + num));
    }

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
                    leftChild={<Button onClick={() => handleChangeMonth(-1)}>Prev</Button>}
                    rightChild={<Button onClick={() => handleChangeMonth(1)}>Next</Button>}/>
            <DiaryList/>
        </div>
    )
}

export default Home;