import {useEffect, useState} from "react";
import useDiaryStore from "../store/useDiaryStore.jsx";
import Header from "../components/Header.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {getMonthRangeByDate} from "../util.jsx";
import Button from "../components/Button.jsx";

const Home = () => {
    let diaries = useDiaryStore(state => state.diaries);
    let [pivotDate, setPivotDate] = useState(new Date());
    let [filteredDiaries, setFilteredDiaries] = useState([]);

    let headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`;

    useEffect(() => {
        if(diaries && diaries.length >= 0) {
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
            setFilteredDiaries(
                diaries.filter(it => {
                    return beginTimeStamp <= new Date(it.date).getTime() && new Date(it.date).getTime() <= endTimeStamp
                })
            );
        } else {
            setFilteredDiaries(diaries);
        }
    }, [pivotDate]);

    let onChangeMonth = num => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + num));
    }

    return (
        <div>
            <Header title={headerTitle}
                    leftChild={<Button text={'<'} onClick={() => onChangeMonth(-1)}/>}
                    rightChild={<Button text={'>'} onClick={() => onChangeMonth(1)}/>}/>
            <DiaryList diaries={filteredDiaries}/>
        </div>
    )
}

export default Home;