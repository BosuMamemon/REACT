import axios from "axios";
import {useEffect, useState} from "react";

function Device_Fun({children}) {
    let [myDeviceData, setMyDeviceData] = useState([]);
    useEffect(() => {
        getDevice();
    }, []);

    let getDevice = async () => {
        // {data: {myDeviceData}} 인 이유 -> JSON의 key 안의 key를 뽑아오려면 이렇게 이중 중괄호를 해줘야 함
        let {data: {myDeviceData}} = await axios.get("https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/");
        setMyDeviceData(myDeviceData);
    }

    return (
        <div>
            <h3>Device Function: {children}</h3>
            {
                myDeviceData.map(item => (
                    <div key={item.key}>
                        <p>
                            name: {item.name} <br/>
                            RAM: {item.RAM} <br/>
                            HomeButton: {item.HomeButton ? "True" : "False"} <br/>
                            TouchID: {item.TouchID} <br/>
                            FaceID: {item.FaceID} <br/>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default Device_Fun;