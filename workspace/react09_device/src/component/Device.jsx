import {Component} from "react";
import axios from "axios";

class Device extends Component {
    constructor(props) {
        super(props);
        console.log("props 생성자 호출");
        console.log("constructor props: ", props);
        console.log("constructor child content: ", props.children);
    }

    state = {
        datas: []
    }

    getMyData = async () => {
        let data1 = await axios.get("https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/");
        console.log("axios myDeviceData: ", data1.data.myDeviceData);
        console.log("JSON.stringify: ", JSON.stringify(data1));
        console.log("JSON.stringify MyDeviceData: ", JSON.stringify(data1.data.myDeviceData));
        // this.setState({datas: data1.data.myDeviceData});
        let {data: {myDeviceData}} = await axios.get("https://www.everdevel.com/ReactJS/output-axios-data/jsonKey/");
        console.log("data: ", myDeviceData);
        this.setState({datas: myDeviceData});
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getMyData();
    }

    render() {
        return (
            <div>
                <h3>Device Class: {this.props.children}</h3>
                {
                    this.state.datas.map(item => (
                        <p key={item.key}>name: {item.name}</p>
                    ))
                }
            </div>
        )
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default Device;