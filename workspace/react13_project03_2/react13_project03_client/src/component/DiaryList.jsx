import '../css/DiaryList.css'
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";
import DiaryItem from "./DiaryItem.jsx";
import {useEffect, useState} from "react";

const  sortOptionList = [
    {value: null, name: "---"},
    {value: "latest", name: "최신순"},
    {value: "oldest", name: "오래된 순"}
]

const DiaryList = ({data}) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState()
    const [sortedData, setSortedData] = useState([])

/*
    > 0 :  b가 a 보다 우선한다.
    === 0 : a 와 b 의 원래 순서를 유지한다.
    < 0 : a 가 b 보다 우선한다.
 let numbers = [20,10,4,3,2,1,7];
    function sortNum(a, b) {
    	return a - b;   // 오름차순
    };
    console.log(numbers.sort(sortNum));
      // [1, 2, 3, 4, 7, 10, 20]
---------------------------
    function sortNum(a, b) {
        return b - a;   //내림차순
    };
    console.log(numbers.sort(sortNum));
   // [20, 10, 7, 4, 3, 2, 1]

  */

    useEffect(() => {
        let compare = (a, b) => {
            if(sortType === 'latest'){
                return Number(b.date) - Number(a.date);
            } else {
                return Number(a.date) - Number(b.date);
            }
        }
        data.sort(compare);
        setSortedData(data);
    }, [data, sortType]);

    const onClickNew = () => {
        navigate("/new");
    }
    const onChangeSortType = (e) => {
        setSortType(e.target.value);
        console.log(sortType);
    }

    return (
        <div className={"DiaryList"}>
            <div className={"menu_wrapper"}>
                <div className={"left_col"}>
                    <select onChange={onChangeSortType} value={sortType}>
                        {
                            sortOptionList.map((item, index) => (
                              <option key={index} value={item.value}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className={"right_col"}>
                    <Button type ={"positive"} text={"새 일기 쓰기"} onClick={onClickNew} />
                </div>
            </div>
            <div className={'list_wrapper'}>
                {
                    sortedData.map(item => (
                        <DiaryItem key={item.id} {...item} />
                        // <div key={index}>{item.id}</div>
                    ))
                }
            </div>
        </div>
    )
}
export default DiaryList