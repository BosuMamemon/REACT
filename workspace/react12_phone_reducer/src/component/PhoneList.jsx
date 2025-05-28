import PhoneItem from "./PhoneItem.jsx";
import {PhoneStateContext} from "../App.jsx";
import {useContext, useEffect, useState} from "react";
import {FormControl} from "react-bootstrap";

function PhoneList() {
    let information = useContext(PhoneStateContext);
    let [searchword, setSearchword] = useState("");
    let [filteredInfo, setFilteredInfo] = useState([]);
    useEffect(() => {
        if(searchword) {
            setFilteredInfo(
                information.filter(it => it.name.includes(searchword) || it.phone.includes(searchword))
            )
        } else setFilteredInfo(information);
    }, [information, searchword]);

    let changeSearchword = (e) => {
        setSearchword(e.target.value);
    }

    return (
        <div>
            <h2>Phone List</h2>
            <br/>
            <FormControl type="text" value={searchword} placeholder={"검색어를 입력해보시지."} onChange={changeSearchword}/>
            <br/>
            <div>
                {
                    filteredInfo.map(info => (
                        <div>
                            <PhoneItem info={info} key={info.id}/>
                            <br/>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default PhoneList;