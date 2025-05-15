import './css/App.css'
import MyDevice from "./component/MyDevice.jsx";
import Device from "./component/Device.jsx";
import axios from "axios";
import Device_Fun from "./component/Device_Fun.jsx";

const mydataApp = {
    "myDeviceData": [
        {
            "name":"iPad Pro3",
            "RAM":6,
            "HomeButton":false,
            "TouchID":"No",
            "FaceID":"Yes"
        },{
            "name":"iPhone Xs3",
            "RAM":4,

            "HomeButton":false,
            "TouchID":"No",
            "FaceID":"Yes"
        },{
            "name":"iPhone 63",
            "RAM":1,
            "HomeButton":true,
            "TouchID":"Yes",
            "FaceID":"No"
        }
    ]
};

function App() {
    return (
        <div>
            <h3>My Device</h3>
            <MyDevice mydata={mydataApp}/>
            <hr/>
            <Device>Class Type Component</Device>
            <hr/>
            <Device_Fun>Hook Type Component</Device_Fun>
        </div>
    )
}

export default App
