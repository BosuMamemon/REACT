import PhoneItem from "./PhoneItem.jsx";
import {useEffect, useState} from "react";

function PhoneList({information, handleRemove}) {
    let [searchWord, setSearchWord] = useState("");
    let [searchInformation, setSearchInformation] = useState(information);

    let onChangeSearch = (e) => {setSearchWord(e.target.value)}

    useEffect(() => {
        setSearchInformation(information.filter(
            info => info.name.toLowerCase().includes(searchWord.toLowerCase()) || info.phone.includes(searchWord)
        ))
    }, [searchWord]);

    return (
        <div>
            <h2>Phone List</h2>
            <div>
                <input type="text" value={searchWord} placeholder="검색어를 입력하세요." onChange={onChangeSearch}/>
            </div>
            <div>
                {
                    searchInformation.map(info => (<PhoneItem info={info} key={info.id} handleRemove={handleRemove}/>))
                }
            </div>
        </div>
    )
}

export default PhoneList;